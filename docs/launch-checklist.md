# Launch Checklist

> Estado em 2026-08-27. `[x]` feito · `[~]` parcial/revisado · `[ ]` pendente.

## Conteúdo
- [~] Foto — 2 fotos reais ligadas (claro/escuro); variante AVIF e revisão de recorte pendentes.
- [ ] Vídeo no YouTube (`links.youtubeIntro`).
- [ ] CV PDF (`links.cv`, `public/cv/`).
- [x] GitHub · LinkedIn · E-mail · WhatsApp · Calendly — links reais em `src/content/pt.ts`.
- [x] Screenshots do projeto principal — 5 telas reais na galeria "Evidências visuais".
- [x] Diagrama de arquitetura — aplicação + topologia de deploy (SVG por tema).
- [x] Árvore de decisão da geração da resposta (SVG por tema).
- [ ] Revisão ortográfica final.
- [ ] Revisão técnica final do estudo de caso.
- [ ] Todas as métricas confirmadas no repositório da Plataforma.

## Privacidade
- [x] E-mail e WhatsApp que serão públicos (fornecidos por Douglas).
- [ ] CV sem dados desnecessários (quando o PDF existir).
- [x] Nenhum secret no bundle/repositório — `.env*` e `DOCS_PESSOAIS/`, `DOCS_PROJETO/` no `.gitignore`.

## Qualidade
- [~] Mobile — revisão dos breakpoints por código; teste visual em device pendente (a janela do navegador da sessão não reduz abaixo de ~1144px).
- [x] Desktop — revisado (claro e escuro).
- [x] Keyboard — skip link, `:focus-visible` em todo interativo, tooltip da trajetória por foco.
- [ ] Screen-reader sanity check com leitor real (VoiceOver/NVDA).
- [x] Contraste — calculado: texto passa AA nos dois temas; `--line` (bordas de card) fica abaixo de 3:1 **por decisão de design** ("bordas discretas"), com os controles identificáveis por texto/hover/foco.
- [x] Reduced motion — `prefers-reduced-motion` cobre animações e transições.
- [~] Links externos — verificados; **`wa.me/dougzinho` a confirmar** (`wa.me` espera número de telefone).
- [x] 404 estática (`src/app/not-found.tsx` → `out/404.html`).
- [ ] Lighthouse (mobile + desktop).
- [x] Build limpo — `npm run check` + `npm run build` verdes.

## SEO
- [x] Domínio (Firebase): `portfolio-douglas-alencar.web.app`. Domínio próprio ainda não.
- [x] Title/description por rota (`metadata` no layout + páginas).
- [x] Open Graph + Twitter card — `public/assets/og/portfolio-og.png` (1200×630, substituível).
- [x] favicon — `src/app/icon.svg` + `src/app/apple-icon.png`.
- [ ] sitemap.xml (quando o domínio estiver estável).
- [ ] robots.txt (idem).
- [x] canonical por rota (`alternates.canonical`).
- [ ] JSON-LD Person (opcional).

## Produção
- [ ] Projeto Firebase `portfolio-douglas-alencar` criado (ver `docs/deploy.md`).
- [ ] Preview (canal de PR — workflow em `.github/workflows/deploy.yml`).
- [ ] Deploy final (`live` no push para `main`).
- [ ] SSL (automático no `*.web.app`).
- [ ] Domínio próprio.
- [ ] Teste em rede móvel.
