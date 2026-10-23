# Registro de decisões iniciais

## ADR-001 — Posicionamento Data & AI Engineer
**Decisão:** usar Data & AI Engineer como identidade principal.  
**Motivo:** representa melhor experiência, aptidão e amplitude entre dados e IA.

## ADR-002 — Três seções principais
**Decisão:** Quem sou / trajetória → O que sei construir → O que já construí.  
**Motivo:** narrativa de identidade → capacidade → evidência.

## ADR-003 — Next.js + TypeScript + Tailwind
**Decisão:** stack principal do portfólio.  
**Motivo:** rotas, tipagem, organização, SEO e evolução para i18n, sem exigir backend.

## ADR-004 — Export estático
**Decisão:** `output: "export"`.  
**Motivo:** o site não requer lógica de servidor.

## ADR-005 — Firebase Hosting clássico
**Decisão:** servir o diretório `out/`.  
**Motivo:** CDN/SSL e integração simples para conteúdo estático.

## ADR-006 — Sem backend na V1
**Decisão:** contato via serviços/links externos.  
**Motivo:** nenhuma necessidade funcional justifica API/banco.

## ADR-007 — PT primeiro
**Decisão:** V1 em português.  
**Motivo:** prioridade atual. Estrutura preparada para `/en` depois.

## ADR-008 — Theme toggle
**Decisão:** claro/escuro com persistência.  
**Motivo:** elemento de produto relevante e preferência explícita.

## ADR-009 — Não usar skill bars
**Decisão:** nenhuma porcentagem/estrela de proficiência.  
**Motivo:** baixa verificabilidade. Projetos fornecem evidência melhor.

## ADR-010 — Coding agents como prática de engenharia
**Decisão:** Codex e Claude Code entram em “Engenharia de software assistida por IA”, associados a SDD/harness/testes.  
**Motivo:** evita apresentá-los como habilidades equivalentes a linguagens.

## ADR-011 — Dados ausentes não geram botões
**Decisão:** links opcionais são `null`; componente omite CTA.  
**Motivo:** não publicar falsos placeholders.

## ADR-012 — Portfólio como projeto secundário
**Decisão:** mostrar o próprio site, sem competir com os dois cases principais.  
**Motivo:** reforça capacidade de entrega sem diluir Data/AI.

# Portfólio V2 (`specs/002-portfolio-v2/`)

## ADR-013 — V2 convivendo com a V1
**Decisão:** a V2 (gamificada, sem rolagem) é construída no mesmo repositório, em `/v2/`, sem link a partir da V1 e com `noindex`. No lançamento, a V2 assume `/` e a V1 passa para `/v1/`; os estudos de caso `/projects/*` são compartilhados.  
**Motivo:** conteúdo, estudos de caso e deploy em comum; a V1 continua acessível como "versão currículo".

## ADR-014 — Uma URL estática por tela da V2
**Decisão:** cada tela da árvore (inicial, Sobre mim, categorias, projetos, stack) é uma página estática gerada por `generateStaticParams` numa rota opcional catch-all, com `dynamicParams = false`.  
**Motivo:** link direto, voltar do navegador e conteúdo sem JavaScript, mantendo o export estático.

## ADR-015 — Palco da V2 no layout
**Decisão:** o boneco e o palco ficam no layout do grupo de rotas da V2; a pose (em pé, mesa ou nenhuma) sai da rota.  
**Motivo:** o layout é preservado entre navegações: o boneco não remonta, a troca de rostos não reinicia e a flutuação não salta.

## ADR-016 — Movimento só com CSS e View Transitions nativas
**Decisão:** flutuação, troca de tela e "estouro" das ferramentas com CSS e o `<ViewTransition>` do React (integrado ao App Router), sem biblioteca de animação e desligados com `prefers-reduced-motion`.  
**Motivo:** movimento contido e sem dependência pesada; navegador sem suporte troca de tela sem animação.

## ADR-017 — Sem rolagem é meta de layout, não trava
**Decisão:** as telas da V2 são dimensionadas pela altura da janela para caber sem rolagem nas resoluções garantidas. Se o conteúdo não couber (zoom, fonte ampliada, janela pequena), a página rola. Um teste automatizado falha se alguma tela rolar nas resoluções garantidas.  
**Motivo:** cumprir o objetivo da V2 sem cortar conteúdo (WCAG 1.4.4 e 1.4.10).

## ADR-018 — Árvore da V2 como conteúdo validado no build
**Decisão:** árvore, rótulos, falas, dicas, explicações e ferramentas ficam em `src/content/v2.ts`; projetos existentes são referenciados pelo slug de `pt.ts`. O build falha se a árvore misturar categoria e projeto na mesma tela, passar de 4 caixas por tela, estourar os limites de texto ou usar slug reservado.  
**Motivo:** fonte única para os dados de projeto e limites que garantem que cada tela cabe.

## ADR-019 — Tema da V2 compartilhado com a V1
**Decisão:** a V2 usa a mesma preferência de tema (`theme` no `localStorage`) e o script do layout raiz; seus tokens ficam em `v2.css`, escopados em `.v2`.  
**Motivo:** quem escolheu um tema numa versão continua nele na outra, sem flash.

## ADR-020 — Sobre mim da V2 reaproveita a V1
**Decisão:** a tela Sobre mim monta `Career` e `ContactDock` da V1 por props, com variante compacta no celular.  
**Motivo:** mesmo conteúdo, nenhuma cópia; o mockup (tela5) usa a Trajetória da V1 como está.

## ADR-021 — Boneco por imagens
**Decisão:** o boneco é a figura de palito dos mockups mais o rosto recortado das fotos, gerados por um pipeline offline (`npm run boneco`). A cabeça fica na altura aprovada em relação aos ombros, e o pescoço sobe por trás do rosto. A versão desenhada por código foi descartada.  
**Motivo:** efeito fiel ao mockup com o menor custo; o script refaz tudo quando um desenho ou uma foto muda.
