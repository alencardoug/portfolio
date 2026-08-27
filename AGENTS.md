# AGENTS.md

Instruções para agentes de código neste repositório.

## Fonte de verdade

Leia, nesta ordem:

1. `docs/constitution.md`
2. `specs/001-portfolio-v1/spec.md`
3. `specs/001-portfolio-v1/plan.md`
4. `specs/001-portfolio-v1/tasks.md`
5. `docs/copy-deck.md`
6. `docs/content-backlog.md`

## Regras

- Posicionamento: **Data & AI Engineer**.
- Homepage com três seções: `Quem sou / trajetória`, `O que sei construir`, `O que já construí`.
- V1 em português.
- Preparar arquitetura para inglês futuro, sem exibir botão PT/EN antes da tradução existir.
- Light mode = currículo executivo minimalista.
- Dark mode = produto tecnológico corporativo.
- Não usar backend na V1.
- Não inventar links ou conteúdo.
- Valores ausentes ficam `null`; a UI omite ações indisponíveis.
- GitHub, LinkedIn, CV, YouTube, Calendly, e-mail e WhatsApp devem ser configuráveis.
- Projeto principal: Plataforma de Atendimento com IA.
- Projeto de Engenharia de Dados no GCP pode aparecer como “Em desenvolvimento”.
- O próprio portfólio pode aparecer como projeto secundário.
- Não usar skill bars/percentuais de domínio.
- Priorizar evidência de construção, decisões e entrega sobre listas de tecnologia.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
