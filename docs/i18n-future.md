# PT/EN — implementado

Status: **implementado em 2026-08-27** (branch `feat/i18n-en`). Este documento
passou de "preparação" para registro do que foi feito.

## O que existe

```text
src/content/
  types.ts   # Locale, Ui, SiteContent, SimpleCase + tipos de conteúdo
  pt.ts      # conteúdo PT + ui: Ui + export `pt: SiteContent`
  en.ts      # espelho EN (DRAFT — revisão editorial pendente de Douglas)
  index.ts   # getContent(locale), locales, defaultLocale, localizedPath()

src/app/
  page.tsx              -> getContent("pt")  (raiz = PT, URLs inalteradas)
  not-found.tsx         -> PT (Firebase serve out/404.html)
  projects/*/page.tsx   -> getContent("pt"), metadata via lib/seo
  en/
    page.tsx
    not-found.tsx        # boundary do segmento; export estático não gera arquivo
    projects/{plataforma-atendimento-ia,engenharia-dados-gcp,portfolio}/page.tsx
```

- **Subpath `/en`**, PT permanece na raiz `/`. Zero mudança de URL para o site
  PT publicado; `/en` é puramente aditivo.
- Composições reutilizadas por ambos os idiomas: `HomePage`, `NotFoundView`,
  `case/CasePlataforma`, `case/CaseSimple`. Componentes recebem `content` (ou
  fatias) por props — nenhum importa `@/content/pt` diretamente.
- **Seletor PT/EN** (`Header`): pílula ao lado do `ThemeToggle`, com `hreflang`,
  que troca de idioma preservando o subpath (`/projects/x` ⇄ `/en/projects/x`).
- **`<html lang>`**: o HTML estático nasce `pt-BR`; o script inline do `<head>`
  corrige para `en` nas rotas `/en*` antes da interação. `hreflang` +
  `og:locale` por página complementam para crawlers.
- **SEO** (`src/lib/seo.ts` → `pageMetadata`): `canonical` do próprio idioma +
  `alternates.languages` (`pt-BR`, `en`, `x-default` → PT) + `openGraph.locale` /
  `alternateLocale` por página.
- **CV EN**: `public/cv/douglas-alencar-resume-en.pdf` (versionado, como o PT).
  Botão "Download CV (PDF)" com `download`.

## Pendências

- Revisão editorial do texto EN (`src/content/en.ts` está marcado como DRAFT).
- `sitemap`/`robots` com `hreflang` — dependem do domínio final.
- Tradução dos SVGs de arquitetura/árvore de decisão (o `alt` já é traduzido;
  o texto dentro do diagrama continua em PT).

## Regras seguidas

- sem tradução automática — `en.ts` foi escrito à mão para revisão;
- URLs de projeto equivalentes (só muda o prefixo `/en`);
- `hreflang` + canonical por idioma; metadata traduzida;
- CV traduzido separadamente.
