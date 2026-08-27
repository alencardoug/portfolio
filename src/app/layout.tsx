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

const SITE_URL = "https://portfolio-douglas-alencar.web.app";
const DESCRIPTION =
  "Portfólio profissional de Douglas Alencar: Engenharia de Dados, aplicações de IA, RAG, APIs, cloud e produtos em produção.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Douglas Alencar | Data & AI Engineer",
    template: "%s · Douglas Alencar",
  },
  description: DESCRIPTION,
  applicationName: "Portfólio Douglas Alencar",
  authors: [{ name: "Douglas Alencar" }],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Douglas Alencar — Data & AI Engineer",
    title: "Douglas Alencar | Data & AI Engineer",
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/og/portfolio-og.png",
        width: 1200,
        height: 630,
        alt: "Douglas Alencar — Data & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Alencar | Data & AI Engineer",
    description: DESCRIPTION,
    images: ["/assets/og/portfolio-og.png"],
  },
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
  try {
    // O HTML estático nasce com lang="pt-BR"; corrige para as rotas /en
    // antes da interação (bom para leitor de tela). hreflang + og:locale
    // por página complementam para os crawlers.
    if (location.pathname === "/en" || location.pathname.indexOf("/en/") === 0) {
      document.documentElement.lang = "en";
    }
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
