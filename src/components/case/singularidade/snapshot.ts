// Adaptado de github.com/alencardoug/linkedia-magazine (src/covers/singularidade/snapshot.ts, licença MIT).
// Na revista a capa ocupa a janela; aqui ela vive numa caixa da página, então toda posição é medida a partir do
// canto da caixa. Pinta cada grafema dos elementos `data-ink` onde o navegador o colocou (retângulos de Range,
// fonte, cor e opacidade calculadas), para o primeiro quadro WebGL coincidir com o HTML. Ganchos: `data-ink-rule`
// (bordas de cima e de baixo, cor em --ink-rule), `data-ink-gradient` (texto de --ink-from a --ink-to) e
// `data-anchor` (onde o buraco nasce).

export interface CoverBitmap {
  canvas: HTMLCanvasElement;
  /** Pixels CSS cobertos pelo bitmap (a caixa). */
  width: number;
  height: number;
  /** Centro do elemento `data-anchor`, em pixels CSS da caixa. */
  anchor: [number, number];
}

/** Pixels de bitmap por pixel CSS: texto nítido perto da lente, dentro de um orçamento de memória. */
export function bitmapScale(cssWidth: number, cssHeight: number, pixelRatio: number, maxPixels = 3_000_000): number {
  const side = 4096 / Math.max(cssWidth, cssHeight, 1);
  const area = Math.sqrt(maxPixels / Math.max(cssWidth * cssHeight, 1));
  return Math.max(0.5, Math.min(pixelRatio * 1.25, side, area));
}

const segmenter =
  typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter("pt-BR", { granularity: "grapheme" }) : null;

function graphemes(text: string): { segment: string; index: number }[] {
  if (segmenter) return [...segmenter.segment(text)].map(({ segment, index }) => ({ segment, index }));
  const out: { segment: string; index: number }[] = [];
  let index = 0;
  for (const segment of text) {
    out.push({ segment, index });
    index += segment.length;
  }
  return out;
}

function opacity(el: Element, root: Element): number {
  let alpha = 1;
  for (let node: Element | null = el; node && node !== root.parentElement; node = node.parentElement) {
    alpha *= Number.parseFloat(getComputedStyle(node).opacity) || 0;
  }
  return alpha;
}

function paintRules(g: CanvasRenderingContext2D, root: Element, ox: number, oy: number): void {
  for (const el of root.querySelectorAll<HTMLElement>("[data-ink-rule]")) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    g.fillStyle = cs.getPropertyValue("--ink-rule").trim() || cs.color;
    const top = Number.parseFloat(cs.borderTopWidth) || 0;
    const bottom = Number.parseFloat(cs.borderBottomWidth) || 0;
    if (top > 0) g.fillRect(r.left - ox, r.top - oy, r.width, top);
    if (bottom > 0) g.fillRect(r.left - ox, r.bottom - oy - bottom, r.width, bottom);
  }
}

function paintText(g: CanvasRenderingContext2D, root: Element, ox: number, oy: number): void {
  const range = document.createRange();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const el = node.parentElement;
    const text = node.textContent ?? "";
    if (!el || !el.closest("[data-ink]") || !text.trim()) continue;
    const cs = getComputedStyle(el);
    g.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    g.globalAlpha = opacity(el, root);
    const gradientHost = el.closest<HTMLElement>("[data-ink-gradient]");
    if (gradientHost) {
      const r = gradientHost.getBoundingClientRect();
      const hostStyle = getComputedStyle(gradientHost);
      const fill = g.createLinearGradient(r.left - ox, 0, r.right - ox, 0);
      fill.addColorStop(0, hostStyle.getPropertyValue("--ink-from").trim() || cs.color);
      fill.addColorStop(1, hostStyle.getPropertyValue("--ink-to").trim() || cs.color);
      g.fillStyle = fill;
    } else {
      g.fillStyle = cs.color;
    }
    const upper = cs.textTransform === "uppercase";
    const ascent = g.measureText("Hg").fontBoundingBoxAscent;
    for (const { segment, index } of graphemes(text)) {
      if (!segment.trim()) continue;
      range.setStart(node, index);
      range.setEnd(node, index + segment.length);
      const rect = range.getClientRects()[0];
      if (!rect || rect.width === 0) continue;
      g.fillText(upper ? segment.toLocaleUpperCase("pt-BR") : segment, rect.left - ox, rect.top - oy + ascent);
    }
  }
  g.globalAlpha = 1;
}

/** Pinta `root` como está agora dentro de `box`, sobre a cor de fundo da caixa, a `scale` pixels por pixel CSS. */
export function paintCover(root: HTMLElement, box: HTMLElement, scale: number): CoverBitmap {
  const origin = box.getBoundingClientRect();
  const width = box.clientWidth;
  const height = box.clientHeight;
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const g = canvas.getContext("2d", { alpha: false });
  if (!g) throw new Error("Canvas 2D indisponível");
  g.scale(canvas.width / width, canvas.height / height);
  g.fillStyle = getComputedStyle(box).backgroundColor;
  g.fillRect(0, 0, width, height);
  g.textBaseline = "alphabetic";
  paintRules(g, root, origin.left, origin.top);
  paintText(g, root, origin.left, origin.top);
  const a = root.querySelector("[data-anchor]")?.getBoundingClientRect();
  const anchor: [number, number] = a
    ? [a.left - origin.left + a.width / 2, a.top - origin.top + a.height * 0.52]
    : [width / 2, height / 2];
  return { canvas, width, height, anchor };
}
