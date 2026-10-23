/**
 * Conteúdo do Portfólio V2 (versão gamificada, sem rolagem).
 * Separado de pt.ts/en.ts: a V1 continua intacta enquanto a V2 é construída
 * em /v2/. Os casos de estudo (/projects/*) são compartilhados entre as duas.
 */

import manifesto from "./v2-boneco.json";

// ---- Boneco ------------------------------------------------------------------
// Figuras e rostos vêm do manifesto gerado por `npm run boneco`
// (scripts/v2-boneco/). Para trocar um rosto ou uma figura, troque a fonte e
// rode o script; aqui só se escolhe quais rostos aparecem e quando.

export type BonecoFigura = {
  src: string;
  w: number;
  h: number;
  /** Círculo da cabeça (já apagado da imagem), em px da figura. */
  cabeca: { x: number; y: number; r: number };
  /**
   * Queixo abaixo do centro do círculo, em raios. É por pose (QUEIXO_POSE no
   * script): mantém a cabeça na mesma altura em relação aos ombros mesmo
   * quando o desenho muda o tamanho do pescoço.
   */
  queixo: number;
};

export type BonecoRosto = {
  src: string;
  /** Lado do quadrado da imagem, em px. */
  lado: number;
  /** Ponta do queixo, em px da imagem do rosto. */
  queixo: { x: number; y: number };
  /** Altura da cabeça (topo do cabelo ao queixo), em px da imagem do rosto. */
  altura: number;
  /** Largura da cabeça (orelha a orelha), em px da imagem do rosto. */
  largura: number;
};

export type BonecoPose = "em-pe" | "mesa";

export const bonecoManifesto = manifesto as {
  figuras: Record<BonecoPose, BonecoFigura>;
  rostos: Record<string, BonecoRosto>;
};

/** Rostos que se alternam sozinhos (o id é o nome do arquivo da foto). */
export const bonecoRotacao = ["serio-lado", "serio-torto", "serio-inclinado"];

/** Rosto mostrado enquanto o mouse (ou o dedo) está sobre o boneco. */
export const bonecoSorriso = "sorrindo-reto";

export const bonecoIntervaloMs = 10_000;

/**
 * Altura da cabeça-foto, em raios do círculo desenhado. A posição do queixo
 * vem de cada figura (`BonecoFigura.queixo`).
 */
export const bonecoEncaixe = { alturaCabeca: 2.5 };

/**
 * Ajuste fino por rosto, a partir do encaixe pelo queixo: fração da largura
 * (x, positivo = direita) e da altura (y, positivo = para baixo) da cabeça.
 * Ex.: x: 0.4 desloca a cabeça 40% da própria largura para a direita.
 */
export const bonecoAjusteRosto: Record<string, { x?: number; y?: number }> = {
  "serio-lado": { x: 0.4 },
  "serio-inclinado": { x: 0.12 },
};

export const bonecoAlt = "Boneco de palito com o rosto de Douglas Alencar";
