import type { Metadata } from "next";
import "./v2.css";

/*
 * Segmento do Portfólio V2 (versão gamificada). Enquanto em construção, vive em
 * /v2/ sem link a partir da V1 e com noindex; os estilos ficam em v2.css,
 * escopados em .v2, para não tocar na V1.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="v2">{children}</div>;
}
