"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  bonecoAjusteRosto,
  bonecoAlt,
  bonecoEncaixe,
  bonecoIntervaloMs,
  bonecoManifesto,
  bonecoRotacao,
  bonecoSorriso,
  type BonecoFigura,
  type BonecoPose,
  type BonecoRosto,
} from "@/content/v2";

/*
 * Boneco do Portfólio V2: figura de palito (imagem) + rosto (imagem sem fundo)
 * encaixado pelo queixo no topo do pescoço. Os rostos sérios se alternam a cada
 * 10 s em transição suave; com o mouse (ou o dedo) sobre o boneco, o sorriso
 * entra na hora. Todos os rostos ficam montados e trocam por opacidade.
 */

const SORRISO_APOS_TOQUE_MS = 1500;

const pct = (v: number) => `${(v * 100).toFixed(3)}%`;

function encaixe(fig: BonecoFigura, id: string): CSSProperties {
  const rosto: BonecoRosto = bonecoManifesto.rostos[id];
  const ajuste = bonecoAjusteRosto[id] ?? {};
  const { x, y, r } = fig.cabeca;
  const escala = (bonecoEncaixe.alturaCabeca * r) / rosto.altura;
  const left = x - rosto.queixo.x * escala + (ajuste.x ?? 0) * rosto.largura * escala;
  const top = y + fig.queixo * r - rosto.queixo.y * escala + (ajuste.y ?? 0) * rosto.altura * escala;
  return {
    left: pct(left / fig.w),
    top: pct(top / fig.h),
    width: pct((rosto.lado * escala) / fig.w),
  };
}

export function Boneco({
  pose,
  rostoFixo,
  className,
}: {
  pose: BonecoPose;
  /** Trava um rosto (para conferência); sem isso, alterna e sorri no hover. */
  rostoFixo?: string;
  className?: string;
}) {
  const fig = bonecoManifesto.figuras[pose];
  const [vez, setVez] = useState(0);
  const [sorrindo, setSorrindo] = useState(false);
  const toque = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    // Com movimento reduzido, o rosto não troca sozinho (só no hover).
    if (rostoFixo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setVez((v) => (v + 1) % bonecoRotacao.length),
      bonecoIntervaloMs,
    );
    return () => clearInterval(timer);
  }, [rostoFixo]);

  useEffect(() => () => clearTimeout(toque.current), []);

  const ativo = rostoFixo ?? (sorrindo ? bonecoSorriso : bonecoRotacao[vez]);
  const ids = rostoFixo ? [rostoFixo] : [...bonecoRotacao, bonecoSorriso];

  return (
    <div
      className={`boneco${className ? ` ${className}` : ""}`}
      style={{ aspectRatio: `${fig.w} / ${fig.h}` }}
      data-sorrindo={sorrindo && !rostoFixo ? "" : undefined}
      role="img"
      aria-label={bonecoAlt}
      onPointerEnter={() => {
        clearTimeout(toque.current);
        setSorrindo(true);
      }}
      onPointerLeave={(e) => {
        // No toque, o "leave" vem logo ao tirar o dedo: segura o sorriso um pouco.
        if (e.pointerType === "touch") {
          toque.current = setTimeout(() => setSorrindo(false), SORRISO_APOS_TOQUE_MS);
        } else {
          setSorrindo(false);
        }
      }}
    >
      <img className="boneco-figura" src={fig.src} alt="" draggable={false} />
      {ids.map((id) => (
        <img
          key={id}
          className="boneco-rosto"
          data-ativo={id === ativo ? "" : undefined}
          src={bonecoManifesto.rostos[id].src}
          style={encaixe(fig, id)}
          alt=""
          draggable={false}
        />
      ))}
    </div>
  );
}
