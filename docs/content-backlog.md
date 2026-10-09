# Content Backlog — pendências do Douglas

Itens que precisam ser providenciados/confirmados antes da V1 final.

## Prioridade alta

- [ ] **Frase final de posicionamento profissional**
  - Existe uma versão inicial no `copy-deck.md`.
  - Revisar após visualizar a homepage.

- [~] **Foto profissional** — parcialmente entregue (2026-08-27)
  - Recebidas 2 fotos: `DOCS_PESSOAIS/doug_corp.png` (tema claro) e `DOCS_PESSOAIS/doug_verde.jpg` (fundo verde, tema escuro).
  - Otimizadas em `public/assets/portrait/doug-{corp,verde}.{webp,jpg}` e ligadas no Hero (foto distinta por tema).
  - Pendente: variante AVIF; avaliar recorte/resolução finais.

- [ ] **Vídeo de apresentação no YouTube**
  - Duração alvo: ~1 minuto.
  - Inserir URL final em `src/content/pt.ts`.

- [x] **CV em PDF** — `public/cv/douglas-alencar-cv.pdf` (versão final "Setembro de 2026", 2 páginas,
  PDF marcado/`/Lang`). Botão "Baixar CV (PDF)" no Hero e "CV (PDF)" no rodapé, ambos com `download`.
  - Contém telefone e cidade — publicação no repo público confirmada por Douglas.

- [x] **LinkedIn** — https://www.linkedin.com/in/alencardoug/ (2026-08-27)

- [x] **GitHub** — https://github.com/alencardoug/ (2026-08-27)

- [x] **Calendly** — https://calendly.com/alencardoug/45-minutes-meeting (2026-08-27). Ligado em
  `links.calendly`; o `ContactDock` já mostra a ação "Agendar".

- [x] **E-mail profissional** — alencardoug@gmail.com (2026-08-27)

- [x] **WhatsApp** — https://wa.me/qr/SZB7REVZSBB6M1 (2026-08-27)
  - Avaliar uso de número profissional separado.
  - Confirmar texto pré-preenchido (hoje: assunto/corpo genéricos no `mailto:`; WhatsApp sem texto pré-preenchido).

## Projeto Plataforma de Atendimento

- [x] Confirmar URL do GitHub — https://github.com/alencardoug/ws_plataforma_atendimento_codex (2026-08-27). App: `.../customer`.
- [x] Capturar screenshots de boa qualidade (2026-08-27) — 5 telas em `public/assets/projects/plataforma-atendimento/ss-*.{webp,jpg}`, na galeria "Evidências visuais".
- [x] Criar/selecionar diagrama de arquitetura (2026-08-27) — de `DOCS_PROJETO/arquitetura_plataforma/EXPLICACAO.md`: dois diagramas (aplicação/monólito modular + topologia de deploy no GCP) pré-renderizados em SVG por tema (`arquitetura-{app,deploy}-{light,dark}.svg`), na seção "Arquitetura".
- [x] Inserir árvore de decisão da geração da resposta (2026-08-27) — mermaid de `DOCS_PROJETO/mermaid_plataforma/EXPLICACAO.md` pré-renderizado em SVG (`arvore-decisao-{light,dark}.svg`), embutido na seção "Geração da resposta — árvore de decisão" + notas.
- [ ] Revalidar métricas (commits, tarefas, testes, migrações, cenários).
- [ ] Revisar o texto do estudo de caso após o produto receber novo refinamento.

## Projeto Engenharia e Governança de Dados (fase local, concluído)

- [x] Definir nome final — "Engenharia e Governança de Dados" (2026-10-04).
- [x] Definir escopo.
- [x] Criar repositório — `alencardoug/mvp_eng_dados_1`.
- [x] Definir stack.
- [x] Criar arquitetura.
- [x] Publicar primeira versão demonstrável — `v1.0.0`, 2026-10-04.
- [x] Inserir evidências e screenshots — quatro telas reais em
  `public/assets/projects/engenharia-governanca-dados/` (2026-10-04).

## Projeto Engenharia de Dados GCP (a iniciar)

- [x] Definir nome final — "Engenharia de Dados no GCP".
- [x] Definir escopo — replicação no GCP, por Terraform, do projeto acima (Etapa 13 do plano do repositório).
- [x] Criar repositório — o mesmo `alencardoug/mvp_eng_dados_1`, salvo se um próprio for criado.
- [x] Definir stack — Cloud SQL, BigQuery, Datastream, Pub/Sub, Dataflow, Cloud Composer, Terraform.
- [ ] Criar arquitetura provisionada.
- [ ] Publicar primeira versão demonstrável.
- [ ] Inserir evidências, custos medidos e screenshots quando fizer sentido.

## Projeto Analytics avançado via IA - Voz do cliente (publicado, estudo independente)

- [x] Card antes de "Este portfólio" e estudo de caso em PT e EN (09/10/2026).
- [x] Duas capturas legíveis da aplicação em `public/assets/projects/analytics-voz-do-cliente/`
  (gráfico da análise e placar do painel; nenhum texto bruto de reclamação).
- [ ] Douglas confirmar que a explicação da escolha (risco à saúde junto com resposta que não resolve)
  é a que ele vai dar na entrevista.
- [ ] Revisão editorial do texto EN.

## Portfólio

- [ ] Criar repositório GitHub.
- [ ] Definir URL/domínio.
- [ ] Definir projeto Firebase.
- [ ] Registrar stack realmente utilizada.
- [ ] Adicionar link do próprio código-fonte.

## Fase posterior

- [ ] Certificados.
- [x] Tradução completa para inglês — `/en` no ar (2026-08-27). `src/content/en.ts`
  é um draft escrito à mão; falta a revisão editorial de Douglas.
- [x] CV em inglês — `public/cv/douglas-alencar-resume-en.pdf` (revisão final do
  PDF pendente).
- [x] Botão PT/EN — pílula no header, com `hreflang`, preserva o subpath.
- [ ] Open Graph final.
- [ ] Analytics somente se houver objetivo claro e consentimento/privacidade adequados.
