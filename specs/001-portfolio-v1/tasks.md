# TASKS — Portfólio V1

## P0 — Fundação

- [x] Criar estrutura inicial do repositório.
- [x] Criar constituição e especificação.
- [x] Criar modelo central de conteúdo.
- [x] Configurar export estático.
- [x] Rodar primeira instalação com `npm install` e gerar `package-lock.json`.
- [x] Trocar CI para `npm ci` (lockfile gerado; commit quando o repositório Git existir). Fix P0: `lucide-react` 1.x removeu `Github`/`Linkedin` — substituídos por SVG em `src/components/BrandIcons.tsx`.
- [x] Confirmar build em máquina local (`npm run check` + `npm run build` verdes; `out/` gerado).
- [ ] Configurar repositório GitHub definitivo.

## P1 — Sistema visual

- [x] Criar tokens iniciais de tema.
- [x] Implementar light/dark toggle.
- [x] Persistir escolha de tema.
- [x] Refinar tipografia e escala responsiva (fontes por tema via `next/font`: Newsreader no claro, Space Grotesk + IBM Plex Mono no escuro; escalas `clamp`).
- [x] Refinar estado hover/focus (`:focus-visible`, hover dos cards, tooltip por hover **e** `:focus-within`).
- [ ] Validar contraste WCAG (checagem automatizada ainda não rodada).
- [x] Definir comportamento final de cards no mobile (grids empilham; tooltip da trajetória vira bloco estático abaixo do card em ≤900px).
- [x] Revisar estética com foto real (2 fotos reais ligadas; claro/escuro revisados no navegador).

## P2 — Header e Hero

- [x] Criar navegação para as 3 seções.
- [x] Exibir nome e posicionamento.
- [x] Preparar foto opcional.
- [x] Preparar CTA para vídeo opcional.
- [x] Preparar CTA de CV opcional.
- [x] Inserir foto real (2 fotos: `doug-corp` no claro, `doug-verde` no escuro).
- [ ] Inserir YouTube real.
- [x] Inserir CV final (`public/cv/douglas-alencar-cv.pdf`; botão no Hero + rodapé, com `download`).
- [ ] Revisar texto final de posicionamento.

## P3 — Trajetória

- [x] Representar 7 anos de TI.
- [x] Incluir A.C.Camargo Cancer Center.
- [x] Incluir AB InBev.
- [x] Incluir Shell + UFRJ.
- [x] Incluir pós-graduação.
- [x] Incluir Ciência sem Fronteiras.
- [x] Incluir inglês avançado.
- [x] Revisar nomes oficiais e títulos que serão publicados (detalhes de cargo fornecidos por Douglas em 2026-08-27; ver `docs/copy-deck.md`).
- [ ] Adicionar datas somente se o usuário fornecer/confirmar (só durações; sem datas de calendário).

## P4 — Capacidades

- [x] Estruturar por “o que sei construir”.
- [x] Separar IA, dados, backend, cloud, engineering workflow e governança.
- [x] Refinar ordem por relevância ao cargo-alvo (IA → dados → backend → eng. assistida por IA → cloud → produção/governança).
- [ ] Remover qualquer tecnologia que não tenha evidência ou interesse profissional.
- [ ] Validar linguagem para RH e engenharia.

## P5 — Projeto principal

- [x] Criar card featured.
- [x] Criar rota de estudo de caso (página reestilizada conforme o artboard `CaseStudy`: fluxo SDD em chips, grade de evidências, stack em cards, slots pendentes, nota de disclaimer, Header/Footer/ContactDock).
- [x] Registrar stack e métricas fornecidas (em `src/content/pt.ts` → `caseStudies`).
- [x] Explicitar caráter fictício/simulado.
- [x] Inserir URL real da aplicação (`https://plataforma-atendimento-prod.web.app/customer`).
- [x] Inserir URL real do GitHub (`https://github.com/alencardoug/ws_plataforma_atendimento_codex`).
- [x] Inserir screenshots (5 telas reais da aplicação, galeria "Evidências visuais").
- [x] Inserir diagrama de arquitetura (aplicação + topologia de deploy GCP, SVG por tema, seção "Arquitetura").
- [x] Inserir árvore de decisão da geração de resposta (mermaid pré-renderizado em SVG por tema + notas).
- [ ] Revisar texto técnico final.
- [ ] Revisar/confirmar contagens antes do lançamento do portfólio.

## P6 — Projeto GCP

- [x] Criar card “Em desenvolvimento”.
- [x] Não renderizar GitHub enquanto inexistente.
- [ ] Definir nome final.
- [ ] Completar problema, arquitetura e stack.
- [ ] Criar repositório.
- [ ] Adicionar GitHub quando existir.
- [ ] Adicionar evidências após primeira versão.

## P7 — Projeto portfólio

- [x] Criar card secundário.
- [x] Criar GitHub definitivo (`https://github.com/alencardoug/portfolio`).
- [x] Adicionar link para código-fonte (card na home + botão na página do estudo de caso).
- [ ] Atualizar card com CI/CD e deploy reais após implementação.

## P8 — Contato

- [x] Implementar dock condicionado a configuração.
- [x] Inserir Calendly (`https://calendly.com/alencardoug/45-minutes-meeting`).
- [x] Inserir e-mail profissional (`alencardoug@gmail.com`, via `mailto:` com assunto/corpo).
- [x] Inserir número/link do WhatsApp (`https://wa.me/qr/SZB7REVZSBB6M1`).
- [ ] Validar mensagem pré-preenchida (mailto tem assunto/corpo genéricos; WhatsApp ainda sem texto).
- [ ] Testar comportamento mobile (não verificado no navegador desta sessão — janela não redimensiona abaixo de ~1144px; media queries revisadas por código).
- [ ] Avaliar número profissional separado do pessoal.

## P9 — Perfis e documentos

- [x] Inserir LinkedIn (`https://www.linkedin.com/in/alencardoug/`).
- [x] Inserir GitHub (`https://github.com/alencardoug/`).
- [x] Criar/adicionar CV PDF (`public/cv/douglas-alencar-cv.pdf`).
- [ ] Planejar certificados para fase final.
- [ ] Definir domínio.

## P10 — Qualidade

- [ ] Teste de teclado completo.
- [ ] Teste de leitores de tela básico.
- [ ] Teste de contraste.
- [ ] Lighthouse mobile.
- [ ] Lighthouse desktop.
- [ ] Verificar layout 320px.
- [ ] Verificar layout tablet.
- [ ] Verificar layout desktop largo.
- [ ] Validar links externos.
- [ ] Adicionar smoke E2E com Playwright.
- [ ] Adicionar 404 estática.
- [ ] Adicionar sitemap quando domínio estiver definido.
- [ ] Adicionar robots quando domínio estiver definido.
- [ ] Adicionar Open Graph com imagem final.

## P11 — Deploy

- [ ] Criar projeto Firebase `portfolio-douglas-alencar` (passo manual — ver `docs/deploy.md`).
- [ ] Configurar `.firebaserc` local (`cp .firebaserc.example .firebaserc`).
- [x] Configurar deploy — `firebase.json` (`trailingSlash`, `cleanUrls`, cache headers), `.firebaserc.example` e `docs/deploy.md`. Os workflows de CI (`live` + preview) são gerados por `firebase init hosting:github` no passo manual.
- [x] Validar `out/` — export estático gera home + 3 páginas de projeto + `404.html`.
- [ ] Criar preview (primeira PR após o secret do Firebase existir).
- [ ] Configurar domínio próprio.
- [ ] Testar SSL e redirecionamentos.
- [ ] Publicar V1.

## P12 — Fase 2: Inglês

- [x] Traduzir conteúdo — `src/content/en.ts` (draft à mão; revisão editorial
  de Douglas pendente).
- [x] Implementar `/en` — subpath aditivo; raiz `/` permanece PT.
- [x] Adicionar PT/EN no header — pílula com `hreflang` que preserva o subpath.
- [x] Definir hreflang/canonical — `src/lib/seo.ts` (`canonical` + `languages`
  pt-BR/en/x-default + `og:locale`).
- [x] CV em inglês — `public/cv/douglas-alencar-resume-en.pdf` ligado ao botão
  "Download CV (PDF)". Revisão final do PDF com Douglas.
- Ver `docs/i18n-future.md` para o registro do que foi feito e as pendências.
