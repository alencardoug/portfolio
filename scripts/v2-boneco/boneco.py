# /// script
# requires-python = ">=3.10,<3.13"
# dependencies = ["rembg[cpu]", "mediapipe", "numpy", "pillow"]
# ///
"""
Gera os assets do boneco da V2 a partir das fontes locais:

  figuras/<pose>.png   boneco de palito (fundo branco ou transparente)
  rostos/<nome>.jpeg   fotos; o nome do arquivo vira o id do rosto

Saídas:
  public/assets/v2/boneco/figura-<pose>.<hash>.webp   (círculo da cabeça apagado)
  public/assets/v2/boneco/rosto-<id>.<hash>.webp      (só a cabeça, sem fundo e sem pescoço)
  src/content/v2-boneco.json                          (posições usadas pela página)
  DOCS_PROJETO/boneco_v2/_conferencia.png             (rostos em fundo claro e escuro)

Uso: npm run boneco   (= uv run scripts/v2-boneco/boneco.py)
"""

from __future__ import annotations

import hashlib
import json
import math
import re
import sys
import unicodedata
import urllib.request
from io import BytesIO
from pathlib import Path

import cv2
import mediapipe as mp
import numpy as np
from mediapipe.tasks.python import BaseOptions, vision
from PIL import Image
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parents[2]
FIGURAS = ROOT / "DOCS_PROJETO/boneco_v2/figuras"
ROSTOS = Path.home() / "Imagens/projetos/portfolio/v2/rosto_a_cortar_para_boneco"
SAIDA = ROOT / "public/assets/v2/boneco"
MANIFESTO = ROOT / "src/content/v2-boneco.json"
CONFERENCIA = ROOT / "DOCS_PROJETO/boneco_v2/_conferencia.png"

FIG_R = 100  # raio da cabeça na figura de saída (px); a figura é escalada para isso
ROSTO_PX = 512  # lado do PNG/WebP do rosto

# Altura do queixo abaixo do centro do círculo desenhado, em raios, por pose.
# Mantém a cabeça onde foi aprovada em relação aos ombros (23/10/2026): o
# desenho em pé ganhou um pescoço mais longo, mas a cabeça não sobe com ele.
QUEIXO_POSE = {"em-pe": 1.9, "mesa": 1.2}
QUEIXO_PADRAO = 1.2  # pose nova: logo abaixo do círculo
# O pescoço sobe por trás do rosto até este tanto acima do queixo (em raios),
# para encostar em todos os rostos, inclusive os deslocados de lado.
PESCOCO_SOBE = 0.7
# Folga acima do queixo no recorte da figura: cabeça-foto (2.5 r, ver
# bonecoEncaixe.alturaCabeca em src/content/v2.ts) + respiro.
TOPO_ACIMA_DO_QUEIXO = 2.8

# Rostos cuja cor de pele é levada à média de outros (ex.: foto amarelada por
# luz quente): id → ids de referência (sempre as fotos originais, sem correção).
CORRIGIR_COR = {
    "sorrindo-reto": ("serio-lado", "serio-torto", "serio-inclinado"),
    "serio-torto": ("serio-lado", "serio-inclinado"),
}

CACHE = Path.home() / ".cache/boneco-v2"
LANDMARKER_URL = (
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/"
    "face_landmarker/float16/1/face_landmarker.task"
)

# Contorno do maxilar no FaceMesh (ângulo direito → queixo → ângulo esquerdo, na imagem).
MAXILAR = [397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172]
# Contorno completo do rosto (para medir a cor da pele).
OVAL = [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378,
        400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54,
        103, 67, 109]
TESTA, QUEIXO, LADO_E, LADO_D = 10, 152, 234, 454


def slug(nome: str) -> str:
    s = unicodedata.normalize("NFKD", nome).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def salva_webp(img: Image.Image, prefixo: str) -> str:
    buf = BytesIO()
    img.save(buf, "WEBP", quality=88, method=6)
    data = buf.getvalue()
    nome = f"{prefixo}.{hashlib.sha1(data).hexdigest()[:8]}.webp"
    (SAIDA / nome).write_bytes(data)
    return f"/assets/v2/boneco/{nome}"


# ---- Figuras ------------------------------------------------------------------


def tira_branco(rgb: np.ndarray) -> np.ndarray:
    """Fundo branco → transparente, desfazendo a mistura com o branco nas bordas."""
    a = np.clip((255 - rgb.min(axis=2) - 18) / 160, 0, 1)
    safe = np.where(a > 0, a, 1)[..., None]
    cor = np.clip(255 - (255 - rgb) / safe, 0, 255)
    return np.dstack([cor, a * 255]).astype(np.uint8)


def acha_cabeca(alpha: np.ndarray) -> tuple[float, float, float]:
    """Círculo da cabeça = o "buraco" fechado mais circular do desenho."""
    tinta = (alpha > 90).astype(np.uint8)
    contornos, hier = cv2.findContours(tinta, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    area_min = 0.01 * alpha.shape[0] * alpha.shape[1]
    melhor = None
    for c, h in zip(contornos, hier[0]):
        if h[3] < 0:  # só buracos (contornos internos)
            continue
        area = cv2.contourArea(c)
        perim = cv2.arcLength(c, True)
        if area < area_min or perim == 0:
            continue
        circ = 4 * math.pi * area / perim**2
        if melhor is None or circ > melhor[0]:
            m = cv2.moments(c)
            melhor = (circ, m["m10"] / m["m00"], m["m01"] / m["m00"], math.sqrt(area / math.pi))
    if melhor is None or melhor[0] < 0.6:
        sys.exit("Não achei o círculo da cabeça na figura (precisa ser um contorno fechado).")
    _, cx, cy, r_buraco = melhor
    return cx, cy, r_buraco + 2  # + meio traço ≈ linha central do círculo


def apaga_circulo(a: np.ndarray, cx: float, cy: float, r: float) -> None:
    """Apaga o círculo da cabeça (com o esfumado do traço e marcas soltas dentro
    dele). Só fica no disco o traço que continua fora dele: o pescoço."""
    tinta = (a[..., 3] > 20).astype(np.uint8)
    n, rot = cv2.connectedComponents(tinta, connectivity=8)
    yy, xx = np.mgrid[0 : a.shape[0], 0 : a.shape[1]]
    d = np.hypot(xx - cx, yy - cy)
    disco = d < 1.25 * r
    no_anel = np.bincount(rot[(d > 0.85 * r) & (d < 1.15 * r)], minlength=n)
    no_anel[0] = 0
    fica = np.bincount(rot[~disco], minlength=n) > 0
    fica[0] = False
    # Se o círculo encosta no corpo, os dois são um traço só: o disco é limpo
    # inteiro, e estende_pescoco refaz o pescoço.
    fica[int(np.argmax(no_anel))] = False
    perto = cv2.dilate(fica[rot].astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
    a[disco & ~perto, 3] = 0


def estende_pescoco(a: np.ndarray, cx: float, cy: float, r: float, ate: float) -> None:
    """Prolonga o pescoço reto para cima até a linha `ate`, repetindo o traço
    logo abaixo da ponta. O trecho novo fica atrás do rosto, salvo onde o
    maxilar não cobre — e é aí que ele liga o pescoço à cabeça."""
    x0, x1 = round(cx - 0.4 * r), round(cx + 0.4 * r)
    alfa = a[..., 3]
    linhas = [y for y in range(round(cy + 0.9 * r), round(cy + 3 * r)) if (alfa[y, x0:x1] > 90).any()]
    if not linhas:
        sys.exit("Não achei o pescoço logo abaixo do círculo da cabeça.")
    topo = linhas[0]
    if ate >= topo:
        return
    # o corte de uma linha já com a largura cheia (abaixo da ponta, que às vezes
    # vem solta) é repetido até ela, cobrindo qualquer falha no alto do traço
    ref = topo + round(0.12 * r)
    perfil = alfa[ref, x0:x1].copy()
    trecho = a[topo : ref + 1, x0:x1]
    cor = trecho[trecho[..., 3] > 200][:, :3].mean(axis=0)
    for y in range(round(ate), ref):
        linha = a[y, x0:x1]
        novo = perfil > linha[:, 3]
        linha[novo, :3] = cor
        linha[novo, 3] = perfil[novo]


def processa_figura(arq: Path) -> dict:
    img = Image.open(arq).convert("RGBA")
    fundo = Image.new("RGBA", img.size, (255, 255, 255, 255))
    rgb = np.asarray(Image.alpha_composite(fundo, img).convert("RGB")).astype(float)
    rgba = tira_branco(rgb)

    cx, cy, r = acha_cabeca(rgba[..., 3])
    k = FIG_R / r
    fig = Image.fromarray(rgba).convert("RGBa")
    fig = fig.resize((round(fig.width * k), round(fig.height * k)), Image.LANCZOS).convert("RGBA")
    cx, cy, r = cx * k, cy * k, FIG_R
    pose = slug(arq.stem)
    queixo = QUEIXO_POSE.get(pose, QUEIXO_PADRAO)

    a = np.asarray(fig).copy()
    apaga_circulo(a, cx, cy, r)
    estende_pescoco(a, cx, cy, r, cy + (queixo - PESCOCO_SOBE) * r)
    fig = Image.fromarray(a)

    # recorta na tinta e deixa folga para a cabeça-foto, que é maior que o círculo
    x0, y0, x1, y1 = fig.getbbox()
    x0, x1 = min(x0, cx - 1.4 * r), max(x1, cx + 1.4 * r)
    y0 = min(y0, cy + (queixo - TOPO_ACIMA_DO_QUEIXO) * r)
    caixa = tuple(round(v) for v in (x0, y0, x1, y1))
    fig = fig.crop(caixa)
    cx, cy = cx - caixa[0], cy - caixa[1]

    return {
        "src": salva_webp(fig, f"figura-{pose}"),
        "w": fig.width,
        "h": fig.height,
        "cabeca": {"x": round(cx, 1), "y": round(cy, 1), "r": r},
        "queixo": queixo,
    }


# ---- Rostos -------------------------------------------------------------------


def landmarker() -> vision.FaceLandmarker:
    modelo = CACHE / "face_landmarker.task"
    if not modelo.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        print("baixando modelo de landmarks do rosto…")
        urllib.request.urlretrieve(LANDMARKER_URL, modelo)
    opts = vision.FaceLandmarkerOptions(
        base_options=BaseOptions(model_asset_path=str(modelo)), num_faces=1
    )
    return vision.FaceLandmarker.create_from_options(opts)


def acha_rosto(lm: vision.FaceLandmarker, rgb: np.ndarray) -> np.ndarray | None:
    """Landmarks na imagem inteira; se o rosto for pequeno demais, tenta em janelas."""
    h, w = rgb.shape[:2]
    janelas = [(0, 0, w, h)]
    for lado in (min(w, h), min(w, h) // 2):
        passo = lado // 2
        for y in range(0, max(1, h - lado + 1), passo):
            for x in range(0, max(1, w - lado + 1), passo):
                janelas.append((x, y, x + lado, y + lado))
    for x0, y0, x1, y1 in janelas:
        sub = np.ascontiguousarray(rgb[y0:y1, x0:x1])
        res = lm.detect(mp.Image(image_format=mp.ImageFormat.SRGB, data=sub))
        if res.face_landmarks:
            return np.array(
                [[x0 + p.x * (x1 - x0), y0 + p.y * (y1 - y0)] for p in res.face_landmarks[0]]
            )
    return None


def mascara_sem_pescoco(shape, pts: np.ndarray, L: float) -> np.ndarray:
    """Tudo acima do maxilar (com orelhas e cabelo); abaixo dele, nada."""
    baixo = pts[QUEIXO] - pts[TESTA]
    baixo /= np.linalg.norm(baixo)
    direita = pts[LADO_D] - pts[LADO_E]
    direita /= np.linalg.norm(direita)
    centro = pts[[TESTA, QUEIXO, LADO_E, LADO_D]].mean(axis=0)

    # maxilar levemente "inflado" para não comer a barba nem a ponta do queixo
    jaw = []
    for i in MAXILAR:
        v = pts[i] - centro
        jaw.append(pts[i] + v / np.linalg.norm(v) * 0.04 * L)
    jaw = np.array(jaw)

    # nos ângulos do maxilar, desce um pouco para fora (lóbulo da orelha) e abre
    ext_d = jaw[0] + 0.25 * L * (direita + baixo)
    ext_e = jaw[-1] + 0.25 * L * (-direita + baixo)
    longe_d = ext_d + 4 * L * direita
    longe_e = ext_e - 4 * L * direita
    poly = np.vstack(
        [jaw, ext_e, longe_e, longe_e - 5 * L * baixo, longe_d - 5 * L * baixo, longe_d, ext_d]
    )
    m = np.zeros(shape, np.uint8)
    cv2.fillPoly(m, [np.round(poly).astype(np.int32)], 255)
    sigma = max(1.0, 0.008 * L)
    return cv2.GaussianBlur(m, (0, 0), sigma).astype(float) / 255


def processa_rosto(arq: Path, lm, sessao) -> tuple[dict, Image.Image, np.ndarray]:
    """Cabeça sem fundo e sem pescoço, num quadrado justo de ROSTO_PX."""
    rgb = np.asarray(Image.open(arq).convert("RGB"))
    pts = acha_rosto(lm, rgb)
    if pts is None:
        sys.exit(f"Não achei rosto em {arq.name}. Use uma foto com o rosto mais visível.")
    L = float(np.linalg.norm(pts[QUEIXO] - pts[TESTA]))
    cx, cy = pts[[TESTA, QUEIXO, LADO_E, LADO_D]].mean(axis=0)

    # recorte com folga para cabelo e orelhas; o rembg segmenta melhor com contexto
    h, w = rgb.shape[:2]
    x0, y0 = max(0, int(cx - 1.5 * L)), max(0, int(cy - 1.6 * L))
    x1, y1 = min(w, int(cx + 1.5 * L)), min(h, int(cy + 1.4 * L))
    crop = Image.fromarray(rgb[y0:y1, x0:x1])
    matte = np.asarray(remove(crop, session=sessao)).astype(float)[..., 3] / 255
    pts = pts - [x0, y0]

    alpha = matte * mascara_sem_pescoco(matte.shape, pts, L)
    # só a maior região conectada (descarta pedaços soltos de fundo/mão/celular)
    n, rotulos, stats, _ = cv2.connectedComponentsWithStats((alpha > 0.1).astype(np.uint8))
    if n > 2:
        maior = 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))
        manter = cv2.dilate((rotulos == maior).astype(np.uint8), np.ones((5, 5), np.uint8))
        alpha = alpha * manter
    rgba = np.dstack([np.asarray(crop), (alpha * 255).astype(np.uint8)])
    cabeca = Image.fromarray(rgba, "RGBA")

    # quadrado justo na cabeça, com 3% de respiro
    bx0, by0, bx1, by1 = Image.fromarray((alpha > 0.1).astype(np.uint8) * 255).getbbox()
    lado = max(bx1 - bx0, by1 - by0) * 1.06
    qx, qy = (bx0 + bx1) / 2 - lado / 2, (by0 + by1) / 2 - lado / 2
    quadro = Image.new("RGBA", (math.ceil(lado), math.ceil(lado)), (0, 0, 0, 0))
    quadro.alpha_composite(cabeca, (round(-qx), round(-qy)))
    k = ROSTO_PX / quadro.width
    quadro = quadro.resize((ROSTO_PX, ROSTO_PX), Image.LANCZOS)
    pts = (pts - [qx, qy]) * k

    # pele = miolo do contorno do rosto (sem cabelo nem bordas)
    centro = pts[OVAL].mean(axis=0)
    miolo = centro + (pts[OVAL] - centro) * 0.8
    pele = np.zeros((ROSTO_PX, ROSTO_PX), np.uint8)
    cv2.fillPoly(pele, [np.round(miolo).astype(np.int32)], 1)

    queixo = pts[QUEIXO]
    dados = {
        "lado": ROSTO_PX,
        "queixo": {"x": round(queixo[0], 1), "y": round(queixo[1], 1)},
        "altura": round((by1 - by0) * k, 1),
        "largura": round((bx1 - bx0) * k, 1),
    }
    return dados, quadro, pele.astype(bool)


# ---- Cor da pele ----------------------------------------------------------------


def lab(img: Image.Image) -> np.ndarray:
    rgb = np.asarray(img.convert("RGB")).astype(np.float32) / 255
    return cv2.cvtColor(rgb, cv2.COLOR_RGB2LAB)


def estat_pele(img: Image.Image, pele: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """Média e desvio da pele em Lab (sem sombras fundas, dentes ou brilhos)."""
    c = lab(img)
    a = np.asarray(img)[..., 3] > 128
    m = pele & a & (c[..., 0] > 25) & (c[..., 0] < 92)
    px = c[m]
    return px.mean(axis=0), px.std(axis=0)


def corrige_cor(img: Image.Image, pele: np.ndarray, mu_alvo, sd_alvo) -> Image.Image:
    """Leva a cor da pele à de referência: croma (a, b) inteiro, luz pela metade."""
    c = lab(img)
    mu, sd = estat_pele(img, pele)
    for ch in (1, 2):
        razao = float(np.clip(sd_alvo[ch] / sd[ch], 0.7, 1.4))
        c[..., ch] = (c[..., ch] - mu[ch]) * razao + mu_alvo[ch]
    c[..., 0] = np.clip(c[..., 0] + (mu_alvo[0] - mu[0]) * 0.5, 0, 100)
    rgb = np.clip(cv2.cvtColor(c, cv2.COLOR_LAB2RGB), 0, 1)
    out = np.dstack([(rgb * 255).round().astype(np.uint8), np.asarray(img)[..., 3]])
    return Image.fromarray(out, "RGBA")


def conferencia(rostos: list[Image.Image]) -> None:
    s = 256
    folha = Image.new("RGBA", (s * len(rostos), s * 2), (247, 247, 244, 255))
    folha.paste((8, 11, 9, 255), (0, s, s * len(rostos), s * 2))
    for i, r in enumerate(rostos):
        r = r.resize((s, s), Image.LANCZOS)
        folha.alpha_composite(r, (i * s, 0))
        folha.alpha_composite(r, (i * s, s))
    CONFERENCIA.parent.mkdir(parents=True, exist_ok=True)
    folha.save(CONFERENCIA)


def main() -> None:
    fotos = sorted(p for p in ROSTOS.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
    figuras = sorted(p for p in FIGURAS.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
    if not fotos or not figuras:
        sys.exit(f"Faltam fontes: rostos em {ROSTOS}, figuras em {FIGURAS}.")

    SAIDA.mkdir(parents=True, exist_ok=True)
    for velho in SAIDA.glob("*.webp"):
        velho.unlink()

    manifesto = {
        "_aviso": "Gerado por scripts/v2-boneco/boneco.py (npm run boneco). Não editar à mão.",
        "figuras": {},
        "rostos": {},
    }
    for arq in figuras:
        manifesto["figuras"][slug(arq.stem)] = processa_figura(arq)
        print("figura", arq.name, "→", manifesto["figuras"][slug(arq.stem)]["src"])

    sessao = new_session("isnet-general-use")
    rostos = {}
    with landmarker() as lm:
        for arq in fotos:
            rostos[slug(arq.stem)] = processa_rosto(arq, lm, sessao)

    originais = {rid: estat_pele(img, pele) for rid, (_, img, pele) in rostos.items()}
    for rid, refs in CORRIGIR_COR.items():
        refs = [originais[r] for r in refs if r in originais]
        if rid not in rostos or not refs:
            continue
        mu_alvo = np.mean([m for m, _ in refs], axis=0)
        sd_alvo = np.mean([d for _, d in refs], axis=0)
        dados, img, pele = rostos[rid]
        rostos[rid] = (dados, corrige_cor(img, pele, mu_alvo, sd_alvo), pele)
        print("cor   ", rid, "ajustada para a média de", ", ".join(CORRIGIR_COR[rid]))

    for rid, (dados, img, _) in rostos.items():
        manifesto["rostos"][rid] = {"src": salva_webp(img, f"rosto-{rid}"), **dados}
        print("rosto ", rid, "→", manifesto["rostos"][rid]["src"])
    imagens = [img for _, img, _ in rostos.values()]

    MANIFESTO.write_text(json.dumps(manifesto, ensure_ascii=False, indent=2) + "\n")
    conferencia(imagens)
    print(f"ok: {MANIFESTO.relative_to(ROOT)} · conferência em {CONFERENCIA.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
