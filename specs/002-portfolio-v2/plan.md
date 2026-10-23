# PLAN — Portfólio V2

## Estratégia

- Primeiro um motor genérico (árvore → telas); sobre ele, uma tela por vez, na ordem dos mockups.
- Cada fase vira uma PR pequena para `main`. Como `/v2/` não tem link e tem `noindex`, o merge vai ao ar sem expor a V2; o canal de preview da PR serve para o Douglas revisar.
- O teste de "sem rolagem" nasce com a primeira tela (Fase 2), não no fim: é o requisito central.
- A troca V1 ⇄ V2 só acontece na Fase 10, por constante e mudança de pasta, sem reescrever componentes.

## Decisões técnicas

Viram ADRs em `docs/decisions.md` (a partir do ADR-013) com o OK do Douglas, na Fase 0.

### D1 — Uma URL estática por tela, gerada da árvore

`src/app/v2/(palco)/[[...trilha]]/page.tsx`, com `generateStaticParams()` percorrendo a árvore e `dynamicParams = false`: uma página HTML por tela no `out/`. O export estático aceita rota dinâmica desde que os params sejam gerados (`node_modules/next/dist/docs/01-app/02-guides/static-exports.md`, "Unsupported Features"). Voltar do navegador, link direto e funcionamento sem JavaScript vêm junto.

Descartado: estado só no cliente, numa página única (sem link direto, voltar do navegador quebrado, HTML vazio para quem não roda JS).

URLs, com slugs curtos em PT:

```text
/v2/                                          inicial (tela1–4)
/v2/sobre-mim/                                Sobre mim (tela5)
/v2/ia/                                       Engenharia de IA
/v2/ia/ai-assisted/agentica/                  Agêntica
/v2/ia/ai-assisted/agentica/linkedia/         projeto (tela7); último segmento = slug do projeto
/v2/ia/ai-assisted/agentica/linkedia/stack/   stack completa (tela8)
```

O grupo de rotas `(palco)` não aparece na URL; ele existe para o laboratório `/v2/boneco/` ficar fora do palco até ser removido.

### D2 — O palco mora no layout

`src/app/v2/(palco)/layout.tsx` monta o palco, um client component que lê `usePathname()`, acha o nó na árvore e decide a pose: em pé, mesa ou nenhuma. O App Router preserva o layout entre navegações, então o boneco, o timer dos rostos e a flutuação continuam sem pular; só o conteúdo da tela troca.

### D3 — Transições com View Transitions nativas

O Next 16 integra o `<ViewTransition>` do React sem configuração, e toda navegação já é uma transition (`.../02-guides/view-transitions.md`). Usos:

- as caixas saem e entram na troca de tela;
- o boneco, com nome fixo, faz a passagem em pé → mesa;
- direção avançar/voltar por tipo de transição;
- o "estouro" das ferramentas é CSS puro (entrada escalonada).

Navegador sem suporte troca de tela sem animação. Nenhuma biblioteca de animação.

### D4 — Layout sem rolagem

- O palco tem `height: 100dvh` (acompanha as barras do navegador no celular). Grid de duas colunas no horizontal e pilha no vertical, trocando pela proporção da janela, não só pela largura.
- Tudo é dimensionado pela altura disponível (`clamp()` com `dvh` ou unidades de container): boneco, fonte das caixas e espaçamentos encolhem juntos.
- Nenhum `overflow: hidden` para esconder excesso. Se não couber, a página rola (RF-V2-02).
- Os limites de conteúdo checados no build (D5) são o que garante que o layout cabe.
- Teste automatizado: Playwright percorre telas × resoluções × temas e falha se `scrollHeight > innerHeight` ou `scrollWidth > innerWidth` (Fase 2).

### D5 — Conteúdo da V2 em `src/content/v2.ts`, validado no build

- **Árvore como dado:** categoria (`slug`, `rotulo`, `dica?`, `filhos`) ou folha (`projeto` e, opcionais, o que muda naquele ramo: `rotulo`, `resumo`, `links` — ex.: Revista em Liderança abre a página de liderança da revista).
- **Projetos da V2** (`v2Projetos`, por slug): `rotulo` da caixa, `resumo` (3–5 linhas), `destaques` (até 3 ferramentas), `stack` (até 16). Se o slug existe em `pt.ts → projects`, título, status e links vêm de lá (fonte única); os itens novos trazem os seus.
- **Textos de interface** (fala, dicas, Sobre mim, versão currículo, voltar, rótulos acessíveis) tipados como o `Ui` da V1, prontos para ganhar EN.
- **`validarArvore()`** roda dentro do `generateStaticParams` e quebra o build quando há: slug repetido entre irmãos; categoria que mistura categorias e projetos; mais de 4 filhos; projeto inexistente; slug reservado (`sobre-mim`, `stack`, `boneco`, `projects`, `en`, `v1`, `v2`, `cv`, `assets`); resumo acima de 300 caracteres; dica acima de 130; mais de 3 destaques; stack acima de 16.
- **Contagens em texto** (ex.: "11 cases") são calculadas da árvore (`{n}` no texto), nunca escritas à mão.

### D6 — Base trocável

Todo link da V2 passa por `v2Href(trilha)`, com a base numa constante (`/v2` agora, `""` no lançamento). O link para a V1 também (`V1_HOME`: `/` agora, `/v1/` depois). EN segue o padrão da V1 (`/en` na frente): `/en/v2/…` durante a construção, `/en/…` depois.

### D7 — Tema

O script de tema do `<head>` (layout raiz) já vale para `/v2/`, sem flash. A V2 só define seus tokens em `v2.css`, escopados em `.v2`, com a mesma chave `theme` da V1.

### D8 — Sobre mim reaproveita a V1

`Career` e `ContactDock` já recebem conteúdo por props. A tela Sobre mim os monta com ajustes de espaçamento escopados em `.v2` e uma variante compacta para o celular. Nenhum conteúdo copiado.

## Fases

| Fase | Entrega | Depende de |
|---|---|---|
| F0 | Momento 1 commitado; spec 002, ADRs e CLAUDE.md/AGENTS.md atualizados; `noindex` em todo `/v2/` | OK do Douglas no boneco e nas emendas |
| F1 | Direção visual escolhida por opções renderizadas → tokens e fonte da V2 | escolha do Douglas |
| F2 | Motor: árvore, rotas, palco, voltar, metadata, teste de sem rolagem | F0 |
| F3 | Tela inicial completa (tela1–4 + celular) | F1, F2, Q5, Q6 |
| F4 | Sobre mim (tela5) | F1, F2 |
| F5 | Telas de categorias e de projetos (tela6), com a troca de pose | F1, F2 |
| F6 | Projeto (tela7) e stack (tela8) | F1, F2 |
| F7 | Conteúdo: dicas, resumos, ferramentas, itens novos | material do Douglas |
| F8 | EN da V2 | F3–F7 |
| F9 | Qualidade final | F3–F8 |
| F10 | Lançamento: V2 em `/`, V1 em `/v1/` | aprovação do Douglas |

F1 e F2 andam em paralelo: o motor não depende do visual (usa estilos neutros até a F1 fechar). F4, F5 e F6 são independentes entre si. F7 pode começar a qualquer momento para os projetos que já existem.

### F0 — Fechar o Momento 1 e registrar a V2

Commit e PR do boneco (`feat/v2-boneco`). Esta spec entra no repositório; as emendas à constituição e as decisões D1–D8 viram ADRs; `CLAUDE.md` e `AGENTS.md` passam a mandar ler a spec 002 quando o trabalho for na V2. O `noindex` sobe do laboratório para o layout de `/v2/`.

### F1 — Direção visual

Duas ou três direções da tela inicial, renderizadas (computador + celular, claro + escuro), para o Douglas escolher vendo:

- **A — fiel ao esboço:** caixas de traço irregular, fonte manuscrita, paleta dos mockups (petróleo, violeta, marrom);
- **B — híbrida:** boneco de esboço com caixas limpas na identidade da V1 (verde, Newsreader / Space Grotesk);
- uma terceira, se as duas primeiras não bastarem.

Cada direção mostra também o que os mockups não resolvem: onde fica o controle de tema, se há título e trilha nas telas internas, como o "Sobre mim" com a Trajetória da V1 convive com o esboço, e o tema escuro. Saída: tokens da V2 em `v2.css`, fonte (licença livre; variável do `next/font` com nome próprio, nunca `--font-sans/serif/mono`, que o Tailwind v4 já usa — ver o comentário em `src/app/layout.tsx`) e o componente de caixa.

### F2 — Motor de navegação

Tipos e árvore PT em `v2.ts` (itens novos como "em construção"), `validarArvore()`, a rota `[[...trilha]]` com `generateStaticParams`, `generateMetadata` por tela (título "Engenharia de IA · Douglas Alencar"), o palco no layout com a pose por rota, caixas como links numa lista, seta de voltar e `h1` por tela. No mesmo passo entram o Playwright (dependência de desenvolvimento, já prevista no P10 da V1) e o teste de sem rolagem, para cada tela nova já nascer verificada.

### F3 — Tela inicial (tela1–4 + celular)

Layout horizontal e vertical, flutuação por caixa (fase e período derivados do índice, sem aleatoriedade em runtime — nada de divergência de hidratação), fala do boneco, dicas das aptidões, dica do Sobre mim, botão para a versão currículo e o espaço do EN (oculto até a F8).

### F4 — Sobre mim (tela5)

`Career` + formação + `ContactDock` da V1 numa tela sem rolagem, com variante compacta no celular e seta de voltar.

### F5 — Telas de categorias e de projetos (tela6)

As 4 telas de categorias com o boneco em pé; as 9 telas de projetos com o boneco à mesa; transição entre as poses; caixas de projeto com o estilo de projeto; pré-carregamento da figura da mesa.

### F6 — Projeto (tela7) e stack (tela8)

Ações no topo (só com URL real), explicação no centro, destaques e "Ver stack" na base, com o "estouro" na entrada; a rota `stack/` com a stack completa; status do projeto visível. Variante do celular **(dedução — o escopo cita "ver a ilustração", mas os 9 mockups não trazem a tela de projeto no celular)**.

### F7 — Conteúdo

Para cada projeto que já existe, um rascunho de resumo (3–5 linhas), destaques e stack, tirados do estudo de caso (Claude escreve, Douglas aprova). Variações de ênfase onde o mesmo projeto aparece em ramos diferentes. Dicas das outras três aptidões. Texto do projeto `portfolio` atualizado para a V2. Links por ramo, conforme o Douglas rearranjar. Itens novos, um a um, com o material do Douglas.

### F8 — EN

Textos EN da V2 escritos à mão (rascunho para revisão do Douglas, como foi o `en.ts`), rotas `/en/v2/…` e o botão EN preservando a tela.

### F9 — Qualidade final

axe em todas as telas, teclado completo, leitor de tela, reduced motion, contraste AA, Lighthouse, celulares reais (Android e iOS, com as barras do navegador aparecendo e sumindo) e zoom de 200%.

### F10 — Lançamento

- V1 vai para `/v1/` e `/en/v1/`: mover rotas e corrigir os links que apontam para a raiz — âncoras do Header (`/#trajetoria` → `/v1/#trajetoria`) e o "Voltar aos projetos" dos estudos de caso, hoje `/#projetos`.
- V2 vai para `/` e `/en/`: `V2_BASE = ""` e o grupo `(palco)` sobe para a raiz.
- O "voltar" dos estudos de caso passa a levar à V2: volta no histórico quando a origem é o próprio site, senão vai à inicial.
- Metadata e Open Graph da V2, canonical, `noindex` removido; laboratório do boneco removido; README e docs de arquitetura e deploy atualizados.

## Riscos

| Risco | Mitigação |
|---|---|
| Sem rolagem × acessibilidade (zoom, fonte grande) | RF-V2-02: rola em vez de cortar; teste com zoom de 200%. |
| Sem rolagem × volume de conteúdo (Linkedia tem 21 tecnologias; a Trajetória tem 3 detalhes longos) | Limites validados no build; destaques + "Ver stack"; Sobre mim compacto no celular. |
| Celular baixo (iPhone SE com as barras do Safari) | `dvh`, escala pela altura e a resolução 375×548 na matriz de teste. |
| View Transitions variam entre navegadores | Melhoria progressiva: sem suporte, a troca é instantânea. |
| Conteúdo novo depende do Douglas | Itens "em construção" só em `/v2/`; ramo incompleto não vai ao ar. |
| Ambiguidades da árvore | Q1–Q4, Q8 e Q9 respondidas em 23/10/2026; o validador do build barra as que voltarem. |
| Duas linguagens visuais (esboço × V1 no Sobre mim) | Resolver nas opções da F1, olhando as duas juntas. |
