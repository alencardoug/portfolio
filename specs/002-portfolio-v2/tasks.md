# TASKS — Portfólio V2

`[x]` feito · `[ ]` pendente · **(bloq: …)** espera resposta, mockup ou material.
Ordem de execução: a das fases (ver `plan.md`). Cada fase fecha numa PR com `npm run verify` verde.

## F0 — Momento 1 e registro da V2

- [x] Recortar os rostos das fotos (rembg + MediaPipe) — `scripts/v2-boneco/`, `npm run boneco`.
- [x] Boneco simples: figura do mockup + rosto, nas poses em pé e à mesa — `src/components/v2/Boneco.tsx`.
- [x] Rostos sérios alternando a cada 10 s (fade de 0,6 s); sorriso imediato no hover/toque.
- [x] Correção de cor de pele e ajuste fino de posição por rosto.
- [x] Laboratório `/v2/boneco/` (`noindex`).
- [x] Alternativa "robusta" (boneco por código) avaliada; descartada por Douglas em 23/10/2026.
- [x] Figuras novas recortadas dos mockups `tela1` (pescoço mais longo) e `tela6` (mesa com laptop); cabeça mantida na altura aprovada e pescoço encostando em todos os rostos (23/10/2026).
- [x] Commit + PR `feat/v2-boneco` (pipeline, componente, laboratório, script `boneco` no `package.json`).
- [x] Commit desta spec (`specs/002-portfolio-v2/`).
- [x] Respostas Q1–Q4 incorporadas ao `spec.md` (23/10/2026).
- [ ] Respostas Q5–Q9 incorporadas ao `spec.md`.
- [ ] Emendas à constituição aprovadas e registradas (seção V2 em `docs/constitution.md`).
- [ ] ADRs das decisões D1–D8 em `docs/decisions.md`.
- [ ] `CLAUDE.md` e `AGENTS.md`: ler a spec 002 em todo trabalho na V2.
- [x] `noindex` no layout de `/v2/` (todas as telas, não só o laboratório).

## F1 — Direção visual

- [ ] Opções renderizadas da tela inicial (computador + celular, claro + escuro): A fiel ao esboço, B híbrida.
- [ ] Nas mesmas opções: controle de tema, título e trilha nas telas internas, Sobre mim (Trajetória da V1) ao lado do esboço.
- [ ] Douglas escolhe; registrar a escolha (ADR + seção V2 em `docs/design-system.md`).
- [ ] Tokens da V2 em `v2.css`, nos dois temas: cor de navegação, cor de projeto, mobília, traço, balão, raio, sombra.
- [ ] Fonte da V2 (licença livre, `next/font`, variável com nome próprio).
- [ ] Componente de caixa: link de verdade, foco visível, contraste AA, estados hover/ativo.
- [ ] Componente de balão com ponta para cima/baixo (fala, dica de aptidão, dica do Sobre mim).

## F2 — Motor de navegação

- [ ] Tipos em `src/content/v2.ts`: categoria, folha, projeto da V2, textos de interface.
- [ ] Árvore PT completa, com os links por ramo já definidos **(bloq: Q8, Q9)**.
- [ ] Itens novos marcados "em construção" (visíveis só em `/v2/`).
- [ ] `validarArvore()` com as regras de D5, chamada no build.
- [ ] Contagem `{n}` calculada da árvore para textos como "11 cases".
- [ ] Helpers `v2Href()`, `V2_BASE`, `V1_HOME` e `resolverTrilha(pathname)`.
- [ ] Rota `src/app/v2/(palco)/[[...trilha]]/page.tsx` + `generateStaticParams` + `dynamicParams = false`.
- [ ] `generateMetadata` por tela (título próprio, `noindex`).
- [ ] Palco no layout do grupo `(palco)`, com a pose decidida pela rota.
- [ ] Caixas como links numa lista; `h1` por tela; seta de voltar com rótulo ("Voltar para Agêntica").
- [ ] Trilha inexistente → 404 (efeito do `dynamicParams = false`; conferir no `out/`).
- [ ] Playwright como dependência de desenvolvimento + matriz de resoluções do `spec.md`.
- [ ] Teste "sem rolagem": todas as telas × resoluções garantidas × 2 temas.
- [ ] `npm run verify` verde; um `out/v2/**/index.html` por tela.

## F3 — Tela inicial (tela1–4 + celular)

- [ ] Grid horizontal (boneco | caixas) e vertical (botões / boneco + balão / caixas), trocando pela proporção da janela.
- [ ] Escala pela altura: boneco, fonte e espaçamentos; sem rolagem na matriz.
- [ ] Flutuação de nuvem no boneco e nas 4 caixas (fase e período pelo índice); desligada com reduced motion.
- [ ] Fala do boneco (tela2) com o gatilho e o texto decididos **(bloq: Q6)**.
- [ ] Dicas das aptidões no hover/foco (tela3), acima da caixa quando ela está na metade de baixo.
- [ ] Dicas das aptidões no celular **(bloq: Q5)**.
- [ ] Dica do Sobre mim no hover/foco (tela4); no toque, balão com "saber mais"; clique abre `/v2/sobre-mim/`.
- [ ] "Acessar portfólio versão currículo" → `V1_HOME`.
- [ ] Espaço do EN reservado e oculto até a F8.
- [ ] Controle de tema conforme a F1.
- [ ] Teclado: Tab percorre Sobre mim, versão currículo e as 4 caixas; Esc fecha balões.

## F4 — Sobre mim (tela5)

- [ ] Tela `/v2/sobre-mim/` com `Career` + formação + `ContactDock` da V1, por props (nenhum texto copiado).
- [ ] Ajustes de espaçamento escopados em `.v2` para caber sem rolagem no computador.
- [ ] Variante compacta no celular (cartões resumidos; detalhe de cargo por toque), sem rolagem.
- [ ] Seta de voltar → inicial.

## F5 — Telas de categorias e de projetos (tela6)

- [ ] Telas de categorias (4): boneco em pé, caixas de categoria, seta de voltar.
- [ ] Telas de projetos (9): boneco à mesa, caixas de projeto.
- [ ] Transição em pé → mesa com o boneco nomeado na View Transition; rotação de rostos sem reiniciar.
- [ ] Direção da transição: avançar × voltar.
- [ ] Figura da mesa pré-carregada em momento ocioso.
- [ ] Reduced motion: troca de tela sem animação.

## F6 — Projeto (tela7) e stack (tela8)

- [ ] Topo: "Acessar aplicação", "Ver Github", "Entender projeto", só com URL real.
- [ ] Centro: resumo de 3–5 linhas (o do ramo, se houver; senão o do projeto).
- [ ] Base: até 3 destaques + "Ver stack" (só quando a stack tem mais itens que os destaques).
- [ ] "Estouro" das caixas na entrada (CSS, escalonado); reduced motion = aparecem paradas.
- [ ] Rota `…/<projeto>/stack/` com a stack completa; seta de voltar → projeto.
- [ ] Status visível (em produção · em desenvolvimento · a iniciar · concluído) e aviso de demonstração fictícia quando couber.
- [ ] Versão do celular, empilhada (padrão do `spec.md`).

## F7 — Conteúdo

- [ ] Resumo, destaques e stack de cada projeto existente, a partir do estudo de caso (rascunho do Claude, aprovação do Douglas):
  - [ ] plataforma-atendimento-ia
  - [ ] rag-avancado-ragflow (Plataforma V2)
  - [ ] analisador-risco-mudanca-dados
  - [ ] analytics-voz-do-cliente (duas caixas: Workflow e Reclamações multicanal CNU)
  - [ ] portfolio (reescrito para a V2)
  - [ ] linkedia (stack curada de 21 para até 16)
  - [ ] skill-astramax
  - [ ] engenharia-governanca-dados
  - [ ] engenharia-dados-gcp
- [ ] Ênfase por ramo onde o mesmo projeto se repete: Linkedia (IA, Dados, Liderança), ED1 (Dados, Governança), voc_saude (Workflow, Casos de Analytics).
- [ ] Links por ramo, conforme o Douglas rearranjar. Já definidos: Revista em Liderança → `https://linkedia.web.app/categorias/lideranca-de-ia`; Governança ED1 → pasta de governança do repositório (URL a definir).
- [ ] Dica das aptidões Engenharia de Dados, Governança e Liderança (só a de IA veio no mockup).
- [ ] Conferir "VLM" e "cross-encoder" da dica de IA contra os estudos de caso **(bloq: Q7)**.
- [ ] Itens novos, com material do Douglas: BI como código · Skincare Ravena · GCP · Databricks · Fabric · Planejamento Analytics Ravena · AC Camargo · Estratégia no GitHub · "Casos de Analytics" em Agêntica, se for projeto (Q8).
- [ ] Seção V2 em `docs/content-backlog.md` com o que falta de cada item novo.

## F8 — EN

- [ ] Textos EN da V2 em `v2.ts`, escritos à mão (rascunho para revisão do Douglas).
- [ ] Rotas `/en/v2/…` com o mesmo componente.
- [ ] Botão EN/PT preservando a tela (`localizedPath`).
- [ ] Conferir `<html lang="en">` nas rotas `/en/v2/…` (o script do layout raiz já cobre `/en*`).

## F9 — Qualidade final

- [ ] axe em todas as telas, sem violações sérias.
- [ ] Teclado completo: Tab, Enter, Esc, voltar.
- [ ] Leitor de tela: anúncio de troca de tela, nomes das caixas e da seta de voltar, balões.
- [ ] Reduced motion em todas as telas.
- [ ] Contraste AA nos dois temas (caixas, balões, ações, ferramentas).
- [ ] Lighthouse mobile e desktop.
- [ ] Celulares reais (Android + iOS), com as barras do navegador aparecendo e sumindo.
- [ ] Zoom de 200%: rola, não corta.
- [ ] Links externos de todas as telas de projeto conferidos.

## F10 — Lançamento **(bloq: aprovação do Douglas)**

- [ ] V1 → `/v1/` e `/en/v1/`: mover rotas; âncoras do Header (`/#trajetoria` → `/v1/#trajetoria`) e demais links internos.
- [ ] V2 → `/` e `/en/`: `V2_BASE = ""`; grupo `(palco)` na raiz.
- [ ] "Voltar aos projetos" dos estudos de caso (hoje `/#projetos`): volta no histórico quando a origem é o próprio site, senão vai à inicial da V2.
- [ ] Metadata e Open Graph da V2; canonical; remover o `noindex`.
- [ ] Remover o laboratório `/v2/boneco/`.
- [ ] README, `docs/technical-architecture.md` e `docs/deploy.md` atualizados.
- [ ] Preview da PR conferido pelo Douglas; merge → produção.

## Depois do lançamento

- [ ] Estudos de caso no formato sem rolagem ("clicar avança"), um por vez.
- [ ] Novas poses do boneco por contexto, se fizer sentido.
