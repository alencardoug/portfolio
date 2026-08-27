# Portfólio — Douglas Alencar | Data & AI Engineer

Starter de repositório para construir um portfólio profissional que funcione como currículo web e como prova de capacidade técnica.

## Objetivo

O site deve convencer públicos com diferentes níveis de profundidade:

1. **RH / recrutamento — ~30 segundos:** entender quem é Douglas, posicionamento, experiência e principais projetos.
2. **Gestão técnica — alguns minutos:** entender capacidades, decisões de arquitetura e evidências de entrega.
3. **Engenharia / tech lead — aprofundamento:** abrir GitHub, estudos de caso, diagramas, stack e detalhes de implementação.

A home é organizada em três grandes seções:

1. **Quem sou / trajetória**
2. **O que sei construir**
3. **O que já construí**

## Idiomas

PT na raiz `/` (padrão), EN em `/en` (subpath aditivo — as URLs PT não mudam).
Conteúdo em `src/content/{pt,en}.ts`, bundle por `src/content/index.ts`. Seletor
PT/EN no header. Detalhes e pendências em `docs/i18n-future.md`.

## Stack definida para a V1

- Next.js 16.3.x, App Router
- React 19.2.x
- TypeScript
- Tailwind CSS 4.3.x
- Lucide React
- Export estático (`output: "export"`)
- Firebase Hosting clássico
- GitHub Actions para CI
- Sem backend, banco, autenticação ou CMS na V1

A escolha por export estático é deliberada: o portfólio não precisa de estado de servidor, persistência ou API própria.

## Começar

```bash
npm install
npm run dev
```

Na primeira instalação, `npm install` também criará o `package-lock.json`. Depois de revisá-lo e commitá-lo, prefira `npm ci` em CI.

Build de produção:

```bash
npm run check
npm run build
```

O resultado estático fica em `out/`.

## Ordem de leitura para Claude Code / Codex

1. `CLAUDE.md` ou `AGENTS.md`
2. `docs/constitution.md`
3. `specs/001-portfolio-v1/spec.md`
4. `specs/001-portfolio-v1/plan.md`
5. `specs/001-portfolio-v1/tasks.md`
6. `docs/copy-deck.md`
7. `docs/content-backlog.md`

## Princípio central

Este não é um site para demonstrar quantas tecnologias foram utilizadas.

É um produto de conversão para entrevista que usa evidências técnicas para sustentar o posicionamento **Data & AI Engineer**.

## Estado do starter

O repositório contém:

- especificação e decisões;
- conteúdo inicial estruturado;
- uma implementação mínima navegável;
- tema claro/escuro;
- componentes preparados para links opcionais;
- cards de projetos;
- páginas iniciais de estudo de caso;
- configuração de export estático;
- backlog explícito do conteúdo ainda não fornecido.

Dados que ainda não existem ficam `null`. **Não substituir por dados fictícios.**
