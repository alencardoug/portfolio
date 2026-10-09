/**
 * Data do build. O site é export estático e cada deploy roda um build novo
 * (GitHub Actions), então esta é a data da última atualização publicada —
 * sem ninguém precisar lembrar de editá-la.
 */
const BUILD_DATE = new Date();

export function buildDate(locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: "America/Sao_Paulo",
    day: locale.startsWith("pt") ? "2-digit" : "numeric",
    month: locale.startsWith("pt") ? "2-digit" : "short",
    year: "numeric",
  }).format(BUILD_DATE);
}
