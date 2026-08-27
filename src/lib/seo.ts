import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { localizedPath } from "@/content";

type PageMeta = {
  locale: Locale;
  /** Caminho canônico PT (ex.: "/", "/projects/portfolio"). */
  ptPath: string;
  title: string;
  description: string;
  /** Se true, o título ignora o template "%s · Douglas Alencar" do layout. */
  titleAbsolute?: boolean;
  ogImageAlt?: string;
  siteName?: string;
  index?: boolean;
};

/**
 * Metadata por página com `canonical` + `hreflang` (PT/EN/x-default) e
 * `openGraph.locale` coerente. `metadataBase` vem do layout raiz, então os
 * caminhos podem ser relativos.
 */
export function pageMetadata({
  locale,
  ptPath,
  title,
  description,
  titleAbsolute = false,
  ogImageAlt,
  siteName,
  index = true,
}: PageMeta): Metadata {
  const ptUrl = localizedPath(ptPath, "pt");
  const enUrl = localizedPath(ptPath, "en");
  const selfUrl = locale === "pt" ? ptUrl : enUrl;

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: selfUrl,
      languages: {
        "pt-BR": ptUrl,
        en: enUrl,
        "x-default": ptUrl,
      },
    },
    ...(index ? {} : { robots: { index: false } }),
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
      url: selfUrl,
      siteName,
      title,
      description,
      images: [
        {
          url: "/assets/og/portfolio-og.png",
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/og/portfolio-og.png"],
    },
  };
}
