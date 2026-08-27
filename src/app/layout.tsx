import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Nomes de variável distintos dos tokens de tema do Tailwind (--font-sans/serif/mono).
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Douglas Alencar | Data & AI Engineer",
  description:
    "Portfólio profissional de Douglas Alencar: Engenharia de Dados, aplicações de IA, RAG, APIs, cloud e produtos em produção.",
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body
        className={`${newsreader.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
