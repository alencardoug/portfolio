# SPEC — Portfólio V2 (versão gamificada, sem rolagem)

## Status

Em construção em `/v2/`, sem link a partir da V1 e com `noindex`.

- **Escopo (fonte de verdade):** `~/Documentos/Obsidian Vault/1 Projetos/IA/Portfolio/Portfolio V2/Escopo do portfolio V2.md` (Douglas, 23/10/2026; árvore revisada no mesmo dia, junto com as respostas às questões Q1–Q4).
- **Mockups (Excalidraw, não versionados):** `DOCS_PROJETO/screenshot_portfolio_v2/` — os 9: `tela1_horizontal_pc` … `tela8_horizontal_pc` e `tela1_vertical_mobile`.
- **Momento 1 (boneco):** pronto na branch `feat/v2-boneco`, ainda sem commit — `npm run boneco`, `src/components/v2/Boneco.tsx`, laboratório `/v2/boneco/`.
- O escopo ainda promete "mais detalhes em breve" por tela. O que foi deduzido dos mockups sem texto de apoio está marcado como **(dedução)**.

## Nomenclatura

- **V1 · versão currículo** — o site publicado: página longa, com rolagem (início, trajetória, capacidades, projetos).
- **V2 · versão gamificada · versão sem rolagem** — este projeto.
- **Tela** — uma etapa da navegação; cabe inteira na janela.
- **Caixa** — botão flutuante que leva ao próximo nível.
- **Balão** — caixa de texto com ponta: fala do boneco ou dica de uma caixa.

## Problema

A V1 mostra tudo em sequência e deixa a filtragem para quem lê. A V2 troca a rolagem por uma árvore de decisão: cada clique estreita o assunto (aptidão → especialidade → projeto), e cada tela cabe na janela, no computador e no celular.

## Objetivo

1. Nenhuma tela principal com barra de rolagem — inicial, Sobre mim, categorias, projeto — no computador (horizontal) e no celular (vertical).
2. Quatro aptidões na entrada; cada uma leva, por caixas, aos projetos que a demonstram.
3. Um boneco de palito com o rosto real do Douglas conduz a navegação.
4. Cada projeto numa tela curta: ações no topo, explicação de 3 a 5 linhas, ferramentas embaixo.
5. A V1 continua acessível ("Acessar portfólio versão currículo"), e os estudos de caso `/projects/*` são compartilhados pelas duas versões.

## Emendas à constituição (propostas — exigem OK do Douglas)

A constituição (`docs/constitution.md`) foi escrita para a V1. Na V2 continuam valendo a finalidade, os públicos, o posicionamento **Data & AI Engineer** e os princípios P2–P10. Mudam, só na V2:

| V1 | V2 |
|---|---|
| "Não é um playground visual" (§1) | A gamificação é a própria navegação, não enfeite. P1 continua: cada elemento ajuda a entender, aprofundar ou entrar em contato. |
| "Sistema complexo de animações" fora de escopo (§4) | Movimento permitido e contido: flutuação lenta, troca de rosto, transição entre telas e o "estouro" das ferramentas. Só CSS e View Transitions nativas, sem biblioteca de animação, e tudo desligado com `prefers-reduced-motion`. |
| Três seções principais (ADR-002) | Entrada com quatro aptidões + Sobre mim. A V1 mantém as três seções. |
| Estética aprovada (editorial sóbrio / engenharia técnica) | Linguagem de esboço dos mockups (boneco de palito, caixas de traço). A direção final sai de opções renderizadas, nos dois temas (Fase 1). |

## Telas (mockups)

| Mockup | Tela | O que mostra |
|---|---|---|
| `tela1_horizontal_pc` | Inicial | Boneco em pé à esquerda e, abaixo dele, "Sobre mim" e "Acessar portfólio versão currículo". À direita, 4 caixas. "EN" no canto. |
| `tela2_horizontal_pc` | Inicial + fala | Balão sobre o boneco: "Olá, obgd pelo encontro. Neste portfólio gamificado mostro minhas 4 aptidões técnicas demonstradas em cases reais. Aproveite!" |
| `tela3_horizontal_pc` | Inicial + dica de aptidão | Mouse sobre "Engenharia de IA": balão abaixo da caixa, por cima das outras — "11 cases de projetos via AI Coding agents e uso de modelos de LLM, VLM, embedding e cross-encoder". |
| `tela4_horizontal_pc` | Inicial + dica do Sobre mim | Mouse sobre "Sobre mim": balão acima do botão — "Carioca apaixonado por SP · 8+ anos na Gestão de Dados · 2+ anos de Engenharia de IA · Clique para saber mais". |
| `tela5_horizontal_pc` | Sobre mim | A seção "01 — Trajetória" da V1 como está (3 cartões de experiência + formação), o dock de contato (Agendar, E-mail, WhatsApp) e a seta de voltar. Sem boneco. |
| `tela6_horizontal_pc` | Última tela de caixas | Boneco à mesa, com notebook; caixas de projeto (BI como código · Análise Skincare Ravena · Análise de reclamações multicanal · CNU) e seta de voltar. Sem EN e sem Sobre mim. |
| `tela7_horizontal_pc` | Projeto | Sem boneco. Topo: "Acessar aplicação", "Ver Github", "Entender projeto". Centro: explicação de 4 linhas. Base: 3 ferramentas + "Ver stack". Seta de voltar. |
| `tela8_horizontal_pc` | Projeto · stack | "Ver stack" aberto: a stack completa, em caixas, ocupa o lugar da explicação; ações no topo; seta de voltar. |
| `tela1_vertical_mobile` | Inicial (celular) | De cima para baixo: "Sobre mim", "versão currículo", boneco com o balão de fala, 4 caixas. O balão termina em "…em cases reais, em produção. Enjoy it!" |

Cores dos mockups: caixas de aptidão e categoria em azul-petróleo; caixas de projeto, ações e seta de voltar em violeta; mesa e notebook em marrom; texto dos balões em marrom; ferramentas em preto. Leitura: **a cor indica o nível** (navegar × projeto). A tradução para tokens nos dois temas sai da Fase 1.

Os mockups ainda chamam a quarta aptidão de "Liderança e Analytics"; o rótulo decidido é **"Liderança"** (Q4).

## Árvore de navegação

Do escopo revisado, com o vínculo ao conteúdo que já existe (`slug` em `src/content/pt.ts → projects`). "novo" = sem conteúdo no repositório; depende de material do Douglas.

```text
inicial — Engenharia de IA · Engenharia de Dados · Governança · Liderança      (boneco em pé)

1 Engenharia de IA ................................... categorias (em pé)
  1.1 RAG ............................................ projetos (mesa)
      Plataforma de atendimento V1 ...... plataforma-atendimento-ia
      Plataforma de atendimento V2 ...... rag-avancado-ragflow (repo mvp_pa2)
  1.2 AI assisted .................................... categorias (em pé)
      1.2.1 Workflow ................................. projetos (mesa)
          Analisador de Risco ........... analisador-risco-mudanca-dados
          Da voz do cliente ao produto .. analytics-voz-do-cliente (repo voc_saude)
          Portfolio V2 .................. portfolio (o texto atual descreve a V1)
      1.2.2 Agêntica ................................. projetos (mesa)
          Casos de Analytics ............ ?                                          Q8
          Revista Linkedia .............. linkedia
          Skill Astramax ................ skill-astramax
      1.2.3 Casos de Analytics (tela6) ............... projetos (mesa)
          BI como código ................ novo
          Skincare Ravena ............... novo
          Reclamações multicanal CNU .... analytics-voz-do-cliente (voc_saude), ênfase em analytics
2 Engenharia de Dados ................................ categorias (em pé)
  2.1 Engenharia de Dados ............................ projetos (mesa)
      Eng. Dados Local .................. engenharia-governanca-dados
      Eng. Dados Cloud .................. engenharia-dados-gcp (a iniciar)
      Revista ........................... linkedia
  2.2 Engenharia de Plataforma ....................... projetos (mesa)
      GCP · Databricks · Fabric ......... novos
3 Governança ......................................... categorias (em pé)
  3.1 Governança de dados ............................ projetos (mesa)   (o escopo numera 4.1)
      Governança ED1 .................... engenharia-governanca-dados; GitHub → pasta de governança
  3.2 Governança de projeto .......................... projetos (mesa)   (o escopo numera 4.2)
      Planejamento Analytics Ravena ..... novo
4 Liderança .......................................... projetos (mesa)
      Revista ........................... linkedia; aplicação → linkedia.web.app/categorias/lideranca-de-ia
      AC Camargo ........................ novo (experiência; base em career[0])
      Estratégia no GitHub .............. novo
```

Contas (batem com as do Douglas): 13 telas numeradas, 4 delas com caixas de categoria e 9 com caixas de projeto, mais a inicial. São 22 caixas de projeto para 18 projetos distintos (17 se o item de Q8 sair).

Regras que a árvore impõe:

- **Sem tela mista.** Os filhos de uma categoria são todos categorias ou todos projetos (Douglas, 23/10/2026). O validador do build garante.
- **Um projeto, vários ramos.** Linkedia aparece em três ramos; ED1 e voc_saude, em dois cada. O projeto é um só (mesma stack, mesmo estudo de caso); o rótulo da caixa e a explicação curta mudam de ênfase conforme o ramo.
- **Links por ramo.** Uma caixa pode trocar os links do projeto pelos daquele ramo: Revista em Liderança abre `https://linkedia.web.app/categorias/lideranca-de-ia`; Governança ED1 aponta o GitHub para a pasta de governança do repositório (URL exata a definir). Douglas vai rearranjar os links de cada conteúdo.
- **Repositório privado não vira botão.** O voc_saude é privado (o GitHub responde 404 para visitantes, conferido em 23/10/2026): "Ver Github" fica oculto nas duas caixas até o repositório abrir.
- **Até 4 caixas por tela.** É o que cabe sem rolagem; a árvore atual usa no máximo 4.
- **Itens novos** (8; 9 se o item de Q8 for um projeto próprio) só ganham tela com material do Douglas. Até lá aparecem como "em construção" apenas em `/v2/`. No lançamento, ramo incompleto não vai ao ar (P5: a UI não simula disponibilidade).
- **Casos corporativos** (Ravena, CNU, A.C.Camargo): só o que o Douglas autorizar publicar, sem dados de cliente; a regra da V1 de não apresentar projeto corporativo como público continua valendo.

## Comportamento por tela

### Inicial (tela1–4 e celular)

- **Layout.** Computador: boneco à esquerda, caixas à direita. Celular (vertical): botões, boneco com balão, caixas — nessa ordem.
- **Flutuação de nuvem.** Boneco e caixas sobem e descem devagar, no mesmo eixo, com fases e períodos levemente diferentes. Quase imperceptível.
- **Boneco.** Os rostos sérios alternam a cada 10 s; mouse ou dedo sobre ele → sorriso imediato (pronto no Momento 1).
- **Fala (tela2).** Balão sobre o boneco com a saudação. Gatilho, duração e texto final: Q6.
- **Dica das aptidões (tela3).** Mouse ou foco numa caixa → balão com a dica daquela aptidão, por cima das caixas vizinhas (acima da caixa quando ela está na metade de baixo). O clique entra na aptidão. No celular: Q5.
- **Sobre mim (tela4).** Mouse ou foco → balão com a dica ("… Clique para saber mais"); o clique abre a tela Sobre mim. No celular (escopo): o toque mostra o balão, e tocar em "saber mais" abre a tela.
- **Acessar portfólio versão currículo** → V1.
- **EN** → versão em inglês, preservando a tela atual. Só aparece quando a tradução da V2 existir (regra da V1: nada de botão de idioma antes da tradução).

### Sobre mim (tela5)

- Reaproveita a Trajetória da V1 (`Career`: 3 cartões com o detalhe de cargo no hover/toque, mais a formação) e o `ContactDock` (Agendar, E-mail, WhatsApp). Mesmo conteúdo, mesma fonte: `career`, `education` e `links` de `pt.ts`.
- Sem rolagem também no celular. A V1 empilha os cartões; aqui é preciso uma forma compacta **(dedução — sem mockup)**.
- Seta de voltar → inicial. Sem boneco.

### Telas de categorias e de projetos (tela6 + dedução)

- **Tela de categorias** (4: Engenharia de IA, AI assisted, Engenharia de Dados, Governança): boneco em pé, caixas de categoria e seta de voltar. A pose é decisão do Douglas (Q2); o layout é **(dedução: a tela6 com o boneco em pé)**, já que não há mockup.
- **Tela de projetos** (9, como a tela6): o boneco senta à mesa, em frente ao notebook, e todas as caixas são de projeto.
- "Sobre mim", "versão currículo" e EN ficam só na inicial, como nos mockups.

### Projeto (tela7) e stack (tela8)

- Sem boneco.
- **Topo:** "Acessar aplicação" (`appUrl`), "Ver Github" (`githubUrl`), "Entender projeto" (estudo de caso, `/projects/<slug>/`). Só os que existem (P5).
- **Centro:** explicação de 3 a 5 linhas.
- **Base:** até 3 ferramentas em destaque e "Ver stack". Ao entrar na tela, as caixas "estouram": surgem em sequência, com um leve impulso.
- **Ver stack (tela8):** a stack completa substitui a explicação; a seta volta para a tela do projeto.
- **Status e honestidade** (exigência da constituição, ausente no mockup): projeto em desenvolvimento ou a iniciar, e demonstração com dados fictícios, precisam estar claros na tela, como na V1.
- **As ferramentas dos mockups são ilustrativas.** A tela7 põe LangChain no caso da Voz do cliente, que o estudo de caso não registra. As reais vêm da evidência de cada projeto (P4).

## Requisitos funcionais

- **RF-V2-01 Sem rolagem.** Toda tela principal cabe na viewport nas resoluções garantidas (abaixo), nos dois temas.
- **RF-V2-02 Nunca cortar.** Se o conteúdo não couber (zoom de 200%, fonte ampliada, janela abaixo do mínimo), a página rola. Sem rolagem é meta de layout, não trava (WCAG 1.4.4 e 1.4.10).
- **RF-V2-03 Uma URL por tela.** Inicial, Sobre mim, cada categoria, cada projeto e cada stack têm endereço próprio: link direto, voltar do navegador e funcionamento sem JavaScript.
- **RF-V2-04 Voltar.** Seta de voltar em toda tela que não é a inicial; leva ao nível de cima.
- **RF-V2-05 Boneco.** Em pé na inicial e nas 4 telas de categorias; à mesa nas 9 telas de projetos; ausente em Sobre mim e na tela de cada projeto. A troca de pose é animada e não reinicia a rotação de rostos.
- **RF-V2-06 Movimento.** Flutuação, transições e "estouro" respeitam `prefers-reduced-motion`: sem flutuação, sem troca automática de rosto, troca de tela sem animação.
- **RF-V2-07 Balões.** Fala do boneco, dicas das aptidões e dica do Sobre mim abrem por mouse, foco e toque; fecham com Esc, ao tirar o mouse ou o foco, ou ao tocar fora; não escondem a ação principal da tela (WCAG 1.4.13).
- **RF-V2-08 Ações reais.** Botões de projeto, contato e CV só com URL real (P5).
- **RF-V2-09 Tema.** Claro e escuro, com a mesma preferência salva da V1 (chave `theme`): quem escolheu escuro numa versão continua no escuro na outra.
- **RF-V2-10 Idioma.** PT primeiro; EN com tradução própria da V2, preservando a tela atual na troca.
- **RF-V2-11 Conteúdo desacoplado.** Árvore, rótulos, falas, dicas, explicações e ferramentas em `src/content/v2.ts` (P9). Os dados de projeto continuam em `pt.ts`/`en.ts`.

## Requisitos não funcionais

- Export estático, Firebase Hosting, sem backend, sem trackers — como a V1.
- Sem biblioteca de animação nem de UI; JavaScript só nos componentes interativos (palco/boneco, balões).
- HTML semântico: um `h1` por tela (pode ser discreto), caixas como links numa lista, seta de voltar com rótulo ("Voltar para Agêntica").
- Teclado: tudo alcançável por Tab, foco visível, Enter entra, Esc fecha balões.
- Contraste AA nos dois temas, inclusive no texto das caixas e dos balões.
- Imagens do boneco com hash no nome e cache longo (já é assim); a pose da mesa é pré-carregada sem atrasar a primeira pintura.
- `noindex` em todo `/v2/` até o lançamento.

## Resoluções

Garantido sem rolagem (viewport em CSS px):

| Classe | Viewports |
|---|---|
| Computador | 1920×1080 · 1536×864 · 1440×900 · 1366×768 · 1280×720 · 1280×600 (notebook com as barras do navegador) |
| Tablet | 1024×768 · 768×1024 |
| Celular vertical | 430×932 · 390×844 · 390×664 (Safari com barras) · 360×740 · 375×548 (iPhone SE com barras) |

Melhor esforço (pode rolar, nunca cortar): celular deitado (844×390, 667×375), largura abaixo de 360, altura abaixo de 540.

## Critérios de sucesso

- Em ~30 s, quem recruta entende quem é o Douglas (boneco + dica do Sobre mim), vê as 4 aptidões e chega a um projeto em produção.
- Qualquer projeto fica a no máximo 5 cliques da entrada; voltar fica sempre a 1 clique.
- Zero rolagem nas resoluções garantidas, verificado por teste automatizado.

## Fora de escopo do lançamento

- Estudos de caso no formato sem rolagem, "clicar avança": conversão gradual, depois do lançamento.
- Boneco desenhado por código, com braços e pernas: descartado por Douglas no Momento 1 (23/10/2026); fica como ideia.
- Formulário, backend, CMS, analytics, chatbot.

## Questões

Respondidas por Douglas (23/10/2026):

- **Q1 — "Casos de Analytics"** é filha de AI assisted (1.2.3), ao lado de Workflow e Agêntica.
- **Q2 — Mesa:** o boneco senta à mesa nas 9 telas de projetos; fica em pé na inicial e nas 4 telas de categorias. Não existe tela mista.
- **Q3 — Identidades:** Plataforma V2 = RAG avançado via RAGFlow; Revista = Linkedia; Governança ED1 = Engenharia e Governança de Dados; Reclamações multicanal CNU = voc_saude, o mesmo repositório da Voz do cliente. Os links de cada caixa serão rearranjados por ele.
- **Q4 — Quarta aptidão:** "Liderança".

Em aberto:

- **Q5 — Dica das aptidões no celular.** (a) O 1º toque mostra a dica e o 2º entra; (b) o toque entra direto e a dica vira a fala do boneco na tela seguinte; (c) sem dica no celular. Recomendação: (b), que não dobra os toques da navegação principal e não perde a informação.
- **Q6 — Fala inicial.** Aparece ao abrir sempre, ou só na primeira visita? Some sozinha depois de alguns segundos? Texto final: "obgd" ou "obrigado"; "Aproveite!" (computador) ou "Enjoy it!" (celular); "em produção", que só o celular tem, entra nos dois?
- **Q7 — "11 cases" (tela3).** Com a árvore revisada, 11 é o número de caixas de projeto em Engenharia de IA, contando o item de Q8. Mas são 10 projetos distintos, porque o voc_saude aparece duas vezes. Proposta: o número é calculado da árvore, nunca escrito à mão, contando projetos distintos (P4). Na mesma dica, "VLM" e "cross-encoder" não aparecem nos estudos de caso atuais (há reranker na Plataforma e embeddings no RAGFlow): confirmar a evidência antes de publicar (P2).
- **Q8 — "Casos de Analytics" dentro de Agêntica.** Agêntica ainda lista esse item. Como não há tela mista, ele é um projeto: qual? Ou é sobra da versão anterior, e Agêntica fica com Linkedia e AstraMax?
- **Q9 — RAG.** O escopo diz "contém os 3 abaixo", mas lista 2 (Plataforma V1 e V2). Falta um projeto?

Decisões padrão (reversíveis; não precisam de resposta agora):

- Categorias com um único projeto (Governança de dados, Governança de projeto) mantêm a tela com uma caixa, seguindo a árvore do escopo.
- Controle de tema, título visível nas telas de categoria e projeto e trilha ("IA › AI assisted › Agêntica") não aparecem nos mockups. Entram como variações nas opções renderizadas da Fase 1, para escolha visual.
- Itens novos sem material não vão ao ar no lançamento.
- Tela de projeto no celular: o escopo diz "ver a ilustração", mas os 9 mockups não a trazem. Padrão: empilhada na ordem do computador (ações, explicação, ferramentas), na lógica da `tela1_vertical_mobile`.
