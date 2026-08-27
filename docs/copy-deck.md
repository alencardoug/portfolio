# Copy Deck — conteúdo inicial

> Fonte de conteúdo editorial para a V1. Refinar sem inventar fatos.

## Posicionamento

### Título
**Douglas Alencar**

### Cargo
**Data & AI Engineer**

### Texto principal — versão inicial
Engenheiro de dados especializado no desenvolvimento de aplicações de Inteligência Artificial, com 7 anos de experiência em tecnologia e atuação em ambientes corporativos complexos.

Construo soluções que conectam engenharia de dados, aplicações de IA, APIs, cloud, avaliação, observabilidade e produção.

### Mensagem de apoio
Experiência profissional em dados, analytics e governança, combinada ao desenvolvimento de soluções modernas de IA generativa.

---

# 01 · Quem sou / trajetória

## Resumo
Trajetória de 7 anos em TI, com experiências no A.C.Camargo Cancer Center, AB InBev e Shell em parceria com UFRJ.

## Experiência — conteúdo disponível

### A.C.Camargo Cancer Center
**Duração informada:** 2 anos  
**Contexto:** dados, analytics, governança e IA.  
**Detalhe de cargo (fornecido por Douglas em 2026-08-27):** Coordenador de Dados — 1 ano: gestão do time de Analytics, incluindo cloud GCP e Azure, BI e governança de projetos e dados no setor da saúde. Engenheiro de Dados — 1 ano: transformação institucional para cultura data-driven através de BI e adesão à cloud e às boas práticas em dados.

### AB InBev
**Duração informada:** 2,5 anos  
**Contexto:** tecnologia, dados e ambiente corporativo global.  
**Detalhe de cargo (fornecido por Douglas em 2026-08-27):** Data Senior — Brasil–Bélgica, 2,5 anos. Data management e Finance (incl. SAP) no Global Innovation and Technology Team (GITEC), na cervejaria da Bélgica. Big Data e gestão de projetos com relatórios e dashboards — Power BI.

### Shell + UFRJ
**Duração informada:** 2,5 anos  
**Contexto:** engenharia, tecnologia e pesquisa/aplicação.  
**Detalhe de cargo (fornecido por Douglas em 2026-08-27):** Projetos e Pesquisa — 2,5 anos. Gestão de projetos para desenvolvimento de bio-produtos especializados para a perfuração de poços de petróleo do pré-sal.

### Links confirmados (2026-08-27)
- GitHub: https://github.com/alencardoug/
- LinkedIn: https://www.linkedin.com/in/alencardoug/
- E-mail: alencardoug@gmail.com
- WhatsApp: https://wa.me/dougzinho
- Plataforma de Atendimento — aplicação: https://plataforma-atendimento-prod.web.app/customer
- Plataforma de Atendimento — repositório: https://github.com/alencardoug/ws_plataforma_atendimento_codex
- Calendly: https://calendly.com/alencardoug/45-minutes-meeting
- Ainda pendentes: CV (PDF), vídeo de 1 minuto.

> Não adicionar projetos internos públicos sem autorização explícita.

## Formação
- Pós-graduação em Engenharia — UFRJ e UFRRJ.
- Intercâmbio de 18 meses pelo Ciência sem Fronteiras.
- Inglês avançado.

## Vídeo de apresentação — roteiro-base

Olá!  
Me chamo Douglas.  
Sou engenheiro de dados com especialidade no desenvolvimento de aplicações de Inteligência Artificial.

Minha trajetória profissional une engenharia de dados, analytics, governança e IA, com experiência em ambientes corporativos complexos, especialmente na área da saúde.

Trabalho com tecnologias como Python, FastAPI, SQL, PostgreSQL, GCP e BigQuery, e venho me especializando na construção de soluções de IA generativa, incluindo RAG, agentes de IA, busca semântica, embeddings e integração de modelos de linguagem com dados e sistemas corporativos.

Tenho bastante interesse não apenas em fazer um modelo responder perguntas, mas em construir a aplicação completa: da arquitetura e engenharia dos dados até APIs, segurança, avaliação, observabilidade e implantação em produção.

Neste portfólio, compartilho alguns projetos de Engenharia de Dados e Engenharia de IA.

Obrigado pela visita. Fique à vontade para conhecer meu trabalho e entrar em contato.

---

# 02 · O que sei construir

## Aplicações de IA
Desenvolvimento de aplicações baseadas em LLM integradas a dados, APIs e sistemas corporativos.

**Evidências/tecnologias:** RAG, embeddings, busca semântica, agentes, LLMs, structured outputs, avaliação.

## Engenharia de Dados
Construção e organização de pipelines, transformação, armazenamento e disponibilização de dados para analytics e aplicações.

**Evidências/tecnologias:** Python, SQL, PostgreSQL, BigQuery, GCP, Azure.

## Backend e APIs
Transformação de modelos e regras de negócio em aplicações utilizáveis e integráveis.

**Evidências/tecnologias:** Python, FastAPI, Pydantic, SQLAlchemy, REST, PostgreSQL, Docker.

## Engenharia de software assistida por IA
Desenvolvimento orientado por especificações e workflows assistidos por coding agents, com testes e rastreabilidade.

**Evidências/tecnologias:** SDD, harness, Codex, Claude Code, Git, testes, CI/CD.

## Cloud, Analytics e plataformas
Experiência com ecossistemas de dados e analytics em cloud e plataformas corporativas.

**Evidências/tecnologias:** GCP, BigQuery, Azure, Fabric, Power BI, SAP.

## Produção, governança e contexto corporativo
Segurança, rastreabilidade, observabilidade, qualidade, governança e implantação de soluções corporativas.

**Contexto:** comunicação com áreas de negócio, liderança, responsabilidade por entregas e ambientes corporativos complexos.

---

# 03 · O que já construí

## Projeto 01 — Plataforma de Atendimento com IA

**Status:** Em produção

### Resumo
Aplicação de demonstração que combina RAG, LLM, dados relacionais e vetoriais, workflows de atendimento e diferentes níveis de autonomia para simular uma plataforma corporativa de atendimento e agendamento.

### Natureza do projeto
Estudo de caso / portfólio desenvolvido por `github.com/alencardoug` com suporte de Codex e Claude Code.

Sistema fictício de demonstração técnica. Instituição, profissionais, procedimentos, conteúdo clínico, preços, pagamento, CPF e demais dados são simulados. Não há paciente, serviço de saúde ou dado real.

### Evidências informadas
- Primeira versão funcional desenvolvida em 15 dias.
- Publicada em 21/08/2026.
- 69 commits.
- 11 pacotes SDD.
- 473 tarefas executadas.
- 28 migrações Alembic.
- 247 testes.
- 18 scripts smoke E2E.
- 17 cenários Playwright.

> Revalidar números no repositório antes da publicação final do portfólio.

### Processo
Ciclo canônico:

`constitution → specify → clarify → plan → tasks → analyze → implement → converge`

### Backend
Python 3.11, FastAPI, Pydantic, SQLAlchemy 2.x e Alembic.

### IA
OpenAI como provedor de LLM e embeddings, RAG e banco vetorial integrado.

### Decisão arquitetural
Arquitetura em monólito modular, sem microsserviços, por decisão explícita.

LangChain e LangGraph também não foram utilizados nesta versão, permitindo explorar diretamente a integração com o provedor de LLM, recuperação e orquestração da aplicação.

### Frontend
React, TypeScript, Vite e React Router. Comunicação por `fetch`.

### Runtime e infraestrutura
Docker Compose.

### Produção
GCP com Cloud Run, Cloud Build, Artifact Registry, Secret Manager e Firebase; PostgreSQL em Neon.

### Custos
Objetivo de alta eficiência e baixo custo operacional, com custos variáveis principalmente associados ao uso de modelos/embeddings.

### Estado atual
Produção funcional e testes funcionais previstos concluídos. O refinamento de conteúdo e comportamento conversacional continua como etapa posterior.

### Próximos passos do projeto
- revisão dos mais de 500 chunks;
- criação/adequação de chunks;
- refinamento do fluxo;
- melhoria de desempenho em simulações de conversas reais.

### URL já informada
https://plataforma-atendimento-prod.web.app/

> GitHub definitivo do projeto deve ser configurado em `src/content/pt.ts`.

---

## Projeto 02 — Engenharia de Dados no GCP

**Status:** Em desenvolvimento.

### Resumo inicial
Projeto de engenharia de dados voltado à construção de pipelines, processamento, modelagem e disponibilização de dados utilizando serviços do Google Cloud.

Não inventar stack ou arquitetura ainda não definidas.

GitHub deve permanecer ausente até o repositório real existir.

---

## Projeto 03 — Este portfólio

Projeto próprio de engenharia web para apresentar currículo, experiência e evidências técnicas.

### Stack planejada
Next.js, React, TypeScript, Tailwind CSS, Firebase Hosting e GitHub Actions.

O código-fonte poderá ser vinculado quando o repositório real estiver público.
