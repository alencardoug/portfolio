import type { Locale, SiteContent } from "./types";
import { pt } from "./pt";
import { en } from "./en";

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

const bundles: Record<Locale, SiteContent> = { pt, en };

export function getContent(locale: Locale): SiteContent {
  return bundles[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "pt" ? "en" : "pt";
}

/** Prefixo de rota do idioma ("" para PT na raiz, "/en" para EN). */
export function localePrefix(locale: Locale): string {
  return locale === "pt" ? "" : "/en";
}

/**
 * Dado o caminho canônico PT (ex.: "/", "/projects/portfolio"), devolve o
 * caminho equivalente no idioma pedido. Usado pelo seletor PT/EN do Header.
 */
export function localizedPath(ptPath: string, locale: Locale): string {
  const clean = ptPath.startsWith("/") ? ptPath : `/${ptPath}`;
  if (locale === "pt") return clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}
