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
