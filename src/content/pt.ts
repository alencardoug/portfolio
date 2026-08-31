import type {
  Capability,
  CareerItem,
  CaseStudy,
  ExternalLinks,
  HeroSpecItem,
  Profile,
  Project,
  SectionCopy,
  SimpleCase,
  SiteContent,
  Ui,
} from "./types";

export const profile: Profile = {
  name: "Douglas Alencar",
  role: "Data & AI Engineer",
  eyebrow: "Dados • IA • Engenharia de Software",
  // Marcador técnico exibido no tema escuro (estilo terminal).
  marker: "// data + ai · da engenharia de dados ao deploy",
  headline:
    "Engenheiro de dados especializado no desenvolvimento de aplicações de Inteligência Artificial.",
  summary:
    "8 anos de experiência em tecnologia e atuação em ambientes corporativos complexos, conectando engenharia de dados, aplicações de IA, APIs, cloud, avaliação, observabilidade e produção.",
  companiesRun: "A.C.Camargo Cancer Center / AB InBev / Shell + UFRJ",
};

export const links: ExternalLinks = {
  github: "https://github.com/alencardoug/",
  linkedin: "https://www.linkedin.com/in/alencardoug/",
  cv: "/cv/douglas-alencar-cv.pdf",
  youtubeIntro: null, // pendente: vídeo de 1 minuto
  calendly: "https://calendly.com/alencardoug/45-minutes-meeting",
  email: "alencardoug@gmail.com",
  whatsappUrl: "https://wa.me/qr/SZB7REVZSBB6M1",
};

export const heroSpec: HeroSpecItem[] = [
  { key: "experiência", value: "8 anos em TI" },
  { key: "foco", value: "data + ai" },
  { key: "escopo", value: "dados → deploy" },
  { key: "formação", value: "pós / engenharia" },
  { key: "idioma", value: "inglês avançado" },
];

export const sections: Record<
  "career" | "capabilities" | "projects",
  SectionCopy
> = {
  career: {
    eyebrow: "01 — Trajetória",
    heading: "Oito anos em ambientes corporativos complexos.",
    sub: "Saúde, indústria global e pesquisa aplicada — sempre no encontro entre dados, engenharia e negócio.",
  },
  capabilities: {
    eyebrow: "02 — O que sei construir",
    heading: "Não só quais ferramentas conheço — o que consigo entregar.",
    sub: "Seis frentes que combino para levar uma ideia de IA da engenharia de dados até o deploy.",
  },
  projects: {
    eyebrow: "03 — O que já construí",
    heading: "Provas, não promessas.",
    sub: "Dois projetos de IA em produção, um projeto de dados em desenvolvimento e este próprio portfólio.",
  },
};

export const career: CareerItem[] = [
  {
    organization: "A.C.Camargo Cancer Center",
    duration: "3 anos",
    context: "Dados, analytics, governança e IA.",
    roleDetail:
      "Coordenador de Dados — 2 anos: gestão do time de Analytics, incluindo cloud GCP e Azure, BI e governança de projetos e dados no setor da saúde. Engenheiro de Dados — 1 ano: transformação institucional para cultura data-driven através de BI e adesão à cloud e às boas práticas em dados.",
  },
  {
    organization: "AB InBev",
    duration: "2,5 anos",
    context: "Tecnologia, dados e ambiente corporativo global.",
    roleDetail:
      "Data Senior — Brasil–Bélgica, 2,5 anos. Data management e Finance (incl. SAP) no Global Innovation and Technology Team (GITEC), na cervejaria da Bélgica. Big Data e gestão de projetos com relatórios e dashboards — Power BI.",
  },
  {
    organization: "Shell + UFRJ",
    duration: "2,5 anos",
    context: "Engenharia, tecnologia e pesquisa/aplicação.",
    roleDetail:
      "Projetos e Pesquisa — 2,5 anos. Gestão de projetos para desenvolvimento de bio-produtos especializados para a perfuração de poços de petróleo do pré-sal.",
  },
];

export const education = [
  "Pós-graduação em Engenharia — UFRJ e UFRRJ",
  "Ciência sem Fronteiras — intercâmbio de 18 meses",
  "Inglês avançado",
];

export const capabilities: Capability[] = [
  {
    title: "Aplicações de IA",
    description:
      "Aplicações baseadas em LLM integradas a dados, APIs e sistemas corporativos.",
    evidence: [
      "RAG",
      "Embeddings",
      "Busca semântica",
      "Agentes",
      "LLMs",
      "Structured outputs",
      "Avaliação",
    ],
  },
  {
    title: "Engenharia de Dados",
    description:
      "Pipelines, transformação, armazenamento e disponibilização de dados para analytics e aplicações.",
    evidence: ["Python", "SQL", "PostgreSQL", "BigQuery", "GCP", "Azure"],
  },
  {
    title: "Backend e APIs",
    description:
      "Transformação de modelos e regras de negócio em aplicações utilizáveis e integráveis.",
    evidence: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "REST",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Engenharia assistida por IA",
    description:
      "Desenvolvimento orientado por especificações e workflows com coding agents, testes e rastreabilidade.",
    evidence: ["SDD", "Harness", "Codex", "Claude Code", "Git", "Testes", "CI/CD"],
  },
  {
    title: "Cloud, Analytics e plataformas",
    description:
      "Ecossistemas de dados e analytics em cloud e plataformas corporativas.",
    evidence: ["GCP", "BigQuery", "Azure", "Fabric", "Power BI", "SAP"],
  },
  {
    title: "Produção e governança",
    description:
      "Segurança, observabilidade, qualidade, governança, deploy e comunicação em ambientes corporativos complexos.",
    evidence: [
      "Governança",
      "Observabilidade",
      "Segurança",
      "Arquitetura",
      "Deploy",
      "Liderança",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "plataforma-atendimento-ia",
    title: "Plataforma de Atendimento com IA",
    status: "production",
    description:
      "Aplicação de demonstração que combina RAG, LLM, dados relacionais e vetoriais, workflows de atendimento e diferentes níveis de autonomia para simular atendimento e agendamento corporativo.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "RAG",
      "React",
      "TypeScript",
      "Docker",
      "GCP",
    ],
    appUrl: "https://plataforma-atendimento-prod.web.app/customer",
    githubUrl: "https://github.com/alencardoug/ws_plataforma_atendimento_codex",
    caseStudyUrl: "/projects/plataforma-atendimento-ia/",
    featured: true,
    metrics: [
      { label: "Primeira versão", value: "15 dias" },
      { label: "Testes", value: "247" },
      { label: "Commits", value: "69" },
      { label: "Tarefas SDD", value: "473" },
    ],
  },
  {
    slug: "analisador-risco-mudanca-dados",
    title: "Analisador de Risco de Mudança de Dados",
    status: "production",
    description:
      "Ferramenta corporativa com IA que ajuda a decidir se uma mudança em um ativo de dados — dropar uma coluna, alterar um tipo, criar um índice — pode ser feita com segurança: interpreta o pedido, coleta evidências do banco, aplica uma política de risco determinística, redige uma recomendação não vinculante com um LLM e pausa para revisão humana antes de registrar a decisão.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "PostgreSQL",
      "Streamlit",
      "MCP",
      "Docker",
      "GCP",
    ],
    appUrl: "https://analisador-de-risco.web.app/",
    githubUrl: "https://github.com/alencardoug/data-change-risk-analyst",
    caseStudyUrl: "/projects/analisador-risco-mudanca-dados/",
    featured: true,
    metrics: [
      { label: "Primeira versão", value: "5 dias" },
      { label: "Testes", value: "76" },
      { label: "Commits", value: "31" },
      { label: "ADRs", value: "21" },
    ],
  },
  {
    slug: "engenharia-dados-gcp",
    title: "Engenharia de Dados no GCP",
    status: "development",
    description:
      "Projeto em desenvolvimento voltado a pipelines, processamento, modelagem e disponibilização de dados no Google Cloud.",
    technologies: ["Python", "SQL", "GCP", "BigQuery"],
    appUrl: null,
    githubUrl: null,
    caseStudyUrl: "/projects/engenharia-dados-gcp/",
  },
  {
    slug: "portfolio",
    title: "Este portfólio",
    status: "production",
    description:
      "Currículo web e produto de apresentação profissional construído com arquitetura estática, temas claro/escuro e foco em evidência técnica.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/portfolio",
    caseStudyUrl: "/projects/portfolio/",
  },
];

export const caseStudies: Partial<Record<string, CaseStudy>> = {
  "plataforma-atendimento-ia": {
    eyebrow: "// estudo de caso — 01",
    disclaimerLabel: "Sistema fictício",
    disclaimer:
      "Sistema fictício de demonstração técnica. Instituição, profissionais, procedimentos, conteúdo clínico, preços, pagamento, CPF e demais dados são simulados. Não há paciente, serviço de saúde ou dado real.",
    nature:
      "Estudo de caso desenvolvido por github.com/alencardoug com suporte de Codex e Claude Code, seguindo o ciclo canônico de desenvolvimento orientado por especificações (SDD).",
    flow: [
      "constitution",
      "specify",
      "clarify",
      "plan",
      "tasks",
      "analyze",
      "implement",
      "converge",
    ],
    evidence: [
      { label: "Primeira versão", value: "15 dias" },
      { label: "Publicada em", value: "21/08/2026" },
      { label: "Commits", value: "69" },
      { label: "Pacotes SDD", value: "11" },
      { label: "Tarefas", value: "473" },
      { label: "Migrações Alembic", value: "28" },
      { label: "Testes", value: "247" },
      { label: "Smoke E2E", value: "18" },
      { label: "Cenários Playwright", value: "17" },
    ],
    stack: [
      {
        label: "Backend",
        text: "Python 3.11, FastAPI, Pydantic, SQLAlchemy 2.x e Alembic.",
      },
      {
        label: "IA",
        text: "OpenAI como provedor de LLM e embeddings, RAG e banco vetorial integrado.",
      },
      {
        label: "Frontend",
        text: "React, TypeScript, Vite e React Router. Comunicação por fetch.",
      },
      { label: "Runtime", text: "Docker Compose." },
      {
        label: "Produção",
        text: "GCP com Cloud Run, Cloud Build, Artifact Registry, Secret Manager e Firebase; PostgreSQL em Neon.",
      },
      {
        label: "Custos",
        text: "Alta eficiência e baixo custo operacional; variável principalmente com uso de modelos/embeddings.",
      },
    ],
    nextSteps: [
      "Revisão dos mais de 500 chunks.",
      "Criação e adequação de chunks.",
      "Refinamento do fluxo.",
      "Melhoria de desempenho em simulações de conversas reais.",
    ],
    screenshots: [
      {
        src: "/assets/projects/plataforma-atendimento/ss-1-cliente-canal",
        alt: "Tela do cliente: canal de agendamento e informações, com aviso de projeto de demonstração e botão iniciar conversa.",
        caption: "Cliente — canal de agendamento e informações",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-4-cliente-chat",
        alt: "Tela do cliente: conversa de atendimento em andamento, com código da conversa e mensagens entre cliente e atendente.",
        caption: "Cliente — conversa de atendimento",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-3-operador-workspace",
        alt: "Espaço do operador: fila de conversas, thread da conversa N2 e painel IA / Evidências com geração de rascunho e busca de evidências.",
        caption: "Operador — fila, conversa e painel de IA / evidências",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-5-operador-conhecimento",
        alt: "Espaço do operador: base de conhecimento com perguntas e respostas, categorias e vínculo dinâmico a tabelas.",
        caption: "Operador — base de conhecimento (RAG)",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-2-operador-login",
        alt: "Tela de login do operador, com aviso de ambiente fictício de estudo de caso.",
        caption: "Operador — acesso",
      },
    ],
    architecture: {
      appAlt:
        "Arquitetura da aplicação: UI web e FastAPI no transporte, serviços de aplicação neutros de canal, domínio e políticas, porta de IA e porta de RAG, adapters (OpenAI / determinístico / pgvector) e PostgreSQL 17 com pgvector.",
      deployAlt:
        "Topologia de deploy: navegador para Firebase Hosting (estáticos da SPA e rewrite /api/** na mesma origem), Cloud Run (FastAPI, us-east1, min-instances=0), Neon Postgres 17 com pgvector, API da OpenAI, e Cloud Build, Artifact Registry e Secret Manager em volta.",
      notes: [
        "Monólito modular com regra de dependência estrita: o núcleo de domínio/aplicação não conhece React, objetos de request do FastAPI nem tipos do SDK da OpenAI. Os serviços de conversa são neutros de canal — permitem um futuro adaptador (ex.: Telegram) sem duplicar lógica.",
        "Provedor de LLM e embeddings atrás de ports/adapters (Protocol de ~4 métodos): adapter OpenAI em produção e um adapter determinístico que roda toda a suíte de testes sem chave nem rede.",
        "Sem LangChain/LangGraph, Redis, Kafka, Celery ou banco vetorial separado (proibidos por constituição até um requisito medido): o RAG é uma consulta pgvector e a geração é uma única chamada fundamentada com decisão determinística em volta.",
        "Deploy (D-029): Firebase Hosting serve a SPA e reescreve /api/** para o Cloud Run na mesma origem (sem CORS); Cloud Run com min-instances=0 escala a zero (pool_pre_ping absorve o resume do Neon); Postgres no Neon em us-east-1 — a região elegível ao Always Free mais próxima do público no Brasil.",
      ],
    },
    decisionTree: {
      kh: "// ai.router.generate_draft — executa nesta ordem e para na primeira regra que se aplica",
      alt: "Árvore de decisão da geração da resposta: retrieve, ramos de agendamento guiado, evidência clínica, ADMIN_QA dinâmico, chamada ao LLM, reranker clínico, persistência da AIGeneration e decisão de autonomia.",
      notes: [
        "O LLM só entra no ramo F — quando a melhor evidência é ADMIN_QA não-dinâmica ou quando não há evidência. Evidência clínica nunca é enviada ao LLM: vira o documento-pai inteiro no ramo D1, e no ramo F só os itens ADMIN_QA compõem o payload.",
        "Nenhum ramo envia sozinho. Todos gravam uma AIGeneration (rascunho interno) e só então maybe_open_autonomous_window decide se abre uma janela de envio autônomo.",
        "ABSTAIN nunca é enviado autonomamente por N3/N4 (constituição, Emenda 1.2.0 a). O N5 é a única exceção — e ainda assim aditiva.",
        "Porta de relevância clínica para autonomia (D-043-2): o atalho “documento-pai inteiro” passou a exigir score ≥ 0,40 para envio autônomo (ruído de saudação ~0,31–0,36; pergunta clínica real 0,42–0,63). O caminho manual N1/N2 continua sem limiar.",
      ],
    },
    pending: [],
    headings: {
      nature: "Natureza do projeto",
      evidence: "Evidências",
      archDecision: "Decisão arquitetural",
      architecture: "Arquitetura",
      stack: "Stack",
      state: "Estado atual e próximos passos",
      decisionTree: "Geração da resposta — árvore de decisão",
      visualEvidence: "Evidências visuais",
    },
    kh: {
      nature: "// portfólio · engenharia assistida por IA",
      evidence: "// números informados pelo repositório",
      fineprint:
        "// revalidar os números no repositório antes da publicação final do portfólio",
      archDecision: "// monólito modular",
      archApp:
        "// aplicação — regra de dependência (domínio ⟶ portas ⟶ adapters)",
      archDeploy: "// deploy — Firebase Hosting ⟶ Cloud Run ⟶ Neon / OpenAI",
      stack: "// da engenharia ao deploy",
      state: "// produção funcional · refinamento conversacional em aberto",
      visualEvidence: "// aplicação em produção — capturas reais",
      pending: "// pendente — entram quando o material real existir",
    },
    archDecisionBody: {
      pre: "Arquitetura em ",
      strong: "monólito modular, sem microsserviços",
      post: ", por decisão explícita. LangChain e LangGraph também não foram utilizados nesta versão, permitindo explorar diretamente a integração com o provedor de LLM, a recuperação e a orquestração da aplicação.",
    },
    stateBody:
      "Produção funcional e testes funcionais previstos concluídos. O refinamento de conteúdo e comportamento conversacional continua como etapa posterior.",
  },
  "analisador-risco-mudanca-dados": {
    eyebrow: "// estudo de caso — 02",
    disclaimerLabel: "Dados sintéticos",
    disclaimer:
      "Sistema fictício para demonstração técnica. O banco, as tabelas (orders e as views de reporting), o sinal de uso a jusante e os demais dados são sintéticos. Nenhuma mudança de schema é aplicada de verdade — a ferramenta apenas recomenda.",
    nature:
      "Projeto de portfólio de AI Engineering, desenvolvido com engenharia assistida por IA sob Spec-Driven Development (SDD), com os artefatos versionados no repositório (specs/, *_SEED.md, DECISIONS.md). O objetivo declarado era mostrar usos reais e defensáveis de LangGraph e LangChain — orquestração de workflow, roteamento determinístico, fan-out paralelo com reducer, interrupt/resume com checkpointing e um agente ReAct limitado — sem virar uma plataforma de gestão de mudanças de produção.",
    flow: ["constitution", "specify", "clarify", "plan", "tasks", "implement"],
    evidence: [
      { label: "Janela de desenvolvimento", value: "5 dias" },
      { label: "Publicado em", value: "31/08/2026" },
      { label: "Commits", value: "31" },
      { label: "Pull requests", value: "10" },
      { label: "ADRs", value: "21" },
      { label: "Requisitos (FR-###)", value: "25" },
      { label: "Código-fonte", value: "~2.400 linhas · 30 .py" },
      { label: "Testes coletados", value: "76 · 26 arquivos" },
      { label: "Dependências · pacotes", value: "13 · 97" },
    ],
    stack: [
      {
        label: "Orquestração",
        text: "LangGraph — grafo de estado, checkpointing e interrupt/resume; langgraph-checkpoint-postgres.",
      },
      {
        label: "LLM",
        text: "LangChain — saída estruturada, tools @tool e agente ReAct; langchain-openai (padrão gpt-4o).",
      },
      {
        label: "Ferramentas remotas",
        text: "MCP (mcp, langchain-mcp-adapters) — leitor de uso a jusante opcional.",
      },
      {
        label: "Domínio",
        text: "Pydantic v2 para os contratos; regras de risco em Python puro.",
      },
      {
        label: "Banco",
        text: "PostgreSQL via psycopg 3 + psycopg_pool; introspecção por information_schema / pg_catalog.",
      },
      {
        label: "UI",
        text: "Streamlit — formulário, resultado passo a passo, portão de revisão e visão da tabela.",
      },
      { label: "Observabilidade", text: "LangSmith (tracing opcional)." },
      {
        label: "Runtime e dev",
        text: "Docker (python:3.13-slim + uv); ruff e pytest.",
      },
      {
        label: "Produção",
        text: "Google Cloud Run, Neon, Firebase Hosting, Secret Manager e Cloud Build.",
      },
    ],
    nextSteps: [
      "Uso a jusante real por coluna (data catalog, pg_stat_statements ou APIs de BI), substituindo o único sinal sintético do fluxo.",
      "Aplicação assistida do DDL — gerar o ALTER/DROP e o plano de rollback.",
      "Autenticação e multiusuário (o campo “revisor” já antecipa essa separação).",
    ],
    screenshots: [
      {
        src: "/assets/projects/analisador-risco/ss-2-formulario",
        alt: "Formulário da ferramenta: o pedido de mudança em linguagem natural, com exemplos prontos.",
        caption: "Formulário — o pedido em linguagem natural",
      },
      {
        src: "/assets/projects/analisador-risco/ss-3-etapas-evidencias",
        alt: "Execução do grafo passo a passo e as evidências lidas do information_schema real: views do schema reporting e foreign keys de entrada.",
        caption: "Etapas + evidências — o grafo e a introspecção do Postgres",
      },
      {
        src: "/assets/projects/analisador-risco/ss-4-risco-recomendacao",
        alt: "Resultado com risco MÉDIO, os fatores de risco nomeados e a recomendação da IA rotulada como não vinculante, em português.",
        caption: "Risco + recomendação — fatores nomeados, recomendação não vinculante",
      },
      {
        src: "/assets/projects/analisador-risco/ss-5-revisao-humana",
        alt: "Portão de revisão humana: aprovar, rejeitar ou devolver o caso, com o motivo do risco à vista.",
        caption: "Revisão humana — aprovar / rejeitar / devolver",
      },
      {
        src: "/assets/projects/analisador-risco/ss-6-estrutura-orders",
        alt: "Estrutura da tabela orders: coluna, tipo, restrições (PK, FK, constraint) e a finalidade de cada campo.",
        caption: "Estrutura da tabela orders",
      },
      {
        src: "/assets/projects/analisador-risco/ss-7-tabela-orders",
        alt: "Leitura ao vivo da tabela orders no banco: cabeçalho e quinze linhas.",
        caption: "Tabela orders — leitura ao vivo do banco",
      },
      {
        src: "/assets/projects/analisador-risco/ss-1-apresentacao",
        alt: "Página de apresentação: o contexto do problema antes de entrar na ferramenta.",
        caption: "Apresentação — o problema antes da ferramenta",
      },
    ],
    architecture: {
      appAlt:
        "Fluxo do caso no LangGraph: interpret (o LLM produz StructuredChange), fan-out paralelo para collect_asset, collect_deps e collect_usage, assess_risk com regras determinísticas (LOW/MEDIUM/HIGH), um desvio opcional para o agente investigate quando há lacuna de evidência, recommend (LLM, não vinculante) e o roteamento para finalize automático ou human_review com interrupt e checkpoint no Postgres.",
      deployAlt:
        "Topologia de deploy: o navegador é redirecionado por 301 do Firebase Hosting para o Cloud Run (us-east1, escala a zero, Streamlit + LangGraph), que fala com o Neon Postgres (checkpoints, analysis_record, orders e views) e a API da OpenAI; o Secret Manager monta as variáveis de ambiente.",
      notes: [
        "Fronteira rígida entre o determinístico e o probabilístico: o LLM só produz saída estruturada em dois pontos (interpretar o pedido e redigir a recomendação, explicitamente não vinculante). Coletar evidência, classificar risco e rotear é Python puro e reprodutível.",
        "Fan-out / fan-in: os três coletores rodam em paralelo e um reducer mescla as escritas concorrentes no campo evidence do estado.",
        "Coleta de evidência = introspecção real de Postgres: com um banco configurado, lê tipo, NOT NULL, PK e UNIQUE de information_schema mais table_constraints, e dependências de view_column_usage (views) e pg_constraint (foreign keys de entrada). Sem banco, cai num catálogo simulado equivalente.",
        "Human-in-the-loop obrigatório para MEDIUM/HIGH: o grafo chama interrupt(), o estado é gravado no Postgres e um Command(resume=…) retoma exatamente de onde parou — sobrevive a restart do app ou do banco. A recomendação da IA e a decisão humana ficam gravadas como campos separados.",
        "Persistência: analysis_record (uma linha por caso; risco, recomendações e decisões são arrays JSON append-only — o “atual” é sempre arr[-1]) mais as quatro tabelas de checkpoint do LangGraph, ligadas por thread_id.",
        "Deploy: o Firebase Hosting entra só como redirect 301 (não faz proxy do WebSocket do Streamlit); o Cloud Run roda com min-instances=0 (escala a zero), max-instances=1 (sessão coerente sem session affinity) e timeout=3600; o Neon fica no plano gratuito, com ConnectionPool + pre-ping absorvendo o autosuspend. O custo esperado cabe no free tier — só a OpenAI é cobrada por uso.",
        "Deliberadamente fora de escopo: autenticação/multiusuário, aplicação real do DDL, catálogo de dados próprio, fila assíncrona, camada de autorização e HA/autoscaling.",
      ],
    },
    decisionTree: {
      kh: "// recommend + route — árvore fixa em código; o LLM só redige as folhas de texto",
      alt: "Árvore de decisão da recomendação: se a operação é DROP/ALTER e alguma fonte de dependência ou uso ficou indisponível, o agente investigate relê as tools; recommend redige a disposição; risco LOW finaliza sozinho (AUTO_FINALIZED) e MEDIUM/HIGH vão ao revisor humano, que aprova, rejeita ou devolve (com nota para re-recomendar, ou marcando evidência ausente para re-coletar e re-avaliar); um guarda de limite de revisões encerra o loop.",
      notes: [
        "A árvore é fixa em código; o LLM entra apenas nas folhas de texto (recommend), nunca nas ramificações.",
        "Classificação de risco (assess_risk) em Python puro: cada predicado nomeado que dispara é um RiskFactor com severidade própria, e a categoria final é a severidade máxima entre os fatores — HIGH para ASSET_NOT_FOUND, IN_PRIMARY_KEY, IN_UNIQUE_CONSTRAINT e INBOUND_FOREIGN_KEY; MEDIUM para REFERENCED_BY_VIEW, ACTIVELY_READ, EVIDENCE_UNAVAILABLE e INDEX_BUILD_CONTENTION; LOW para ADD_INDEX_LOW_RISK e NO_DEPENDENTS_OR_USAGE.",
        "Se a operação é DROP/ALTER e alguma fonte de dependência/uso ficou UNAVAILABLE, um agente ReAct limitado (3 tools, 8 passos) relê as evidências antes da recomendação.",
        "recommend devolve PROCEED, PROCEED_WITH_MITIGATION (com a lista de mitigações) ou DO_NOT_PROCEED, com justificativa em português, rotulada “🤖 Gerada por IA (não vinculante)”.",
        "Roteamento: LOW finaliza sozinho (AUTO_FINALIZED); MEDIUM/HIGH vão ao portão humano — APPROVE → APPROVED, REJECT → REJECTED, RETURN + nota → re-recomenda, RETURN + evidência ausente → re-coleta e re-avalia. Um guarda em revision_limit = 2 impede o loop infinito. Nada disso é decidido pelo LLM.",
      ],
    },
    pending: [],
    headings: {
      nature: "Natureza do projeto",
      evidence: "Evidências",
      archDecision: "Decisão arquitetural",
      architecture: "Arquitetura",
      stack: "Stack",
      state: "Estado atual e próximos passos",
      decisionTree: "Geração da recomendação — árvore de decisão",
      visualEvidence: "Evidências visuais",
    },
    kh: {
      nature: "// portfólio · AI engineering · spec-driven development",
      evidence: "// contagens do repositório na data de publicação",
      fineprint:
        "// parte dos testes e2e é DB-gated (pula sem um Postgres acessível); os de integração com LLM real são opt-in",
      archDecision: "// grafo de estado · fronteira determinístico ⟂ probabilístico",
      archApp:
        "// fluxo do caso — fan-out paralelo ⟶ assess_risk ⟶ recommend ⟶ human review",
      archDeploy: "// deploy — Firebase Hosting (301) ⟶ Cloud Run ⟶ Neon / OpenAI",
      stack: "// da orquestração ao deploy",
      state: "// estável, publicado e congelado",
      visualEvidence: "// aplicação em produção — capturas reais",
      pending: "// pendente",
    },
    archDecisionBody: {
      pre: "Um ",
      strong:
        "grafo de estado (LangGraph) com fronteira rígida entre o determinístico e o probabilístico",
      post: ". O LLM nunca decide a categoria de risco nem o roteamento; ele só produz saída estruturada ao interpretar o pedido e ao redigir a recomendação, que é explicitamente não vinculante. LangGraph e LangChain entraram para exercitar usos reais — orquestração, roteamento determinístico, fan-out com reducer, interrupt/resume com checkpointing e um agente ReAct limitado.",
    },
    stateBody:
      "Estável e publicado. O produto está completo e congelado — não há próximos passos previstos por ora. Um defeito conhecido não foi corrigido: o dropdown de “casos em aberto” em Reabrir um caso não popula no ambiente publicado (reabrir por thread_id funciona), conforme KNOWN_ISSUES.md. Possíveis evoluções, se um dia forem retomadas:",
  },
};

export const simpleCases: Partial<Record<string, SimpleCase>> = {
  "engenharia-dados-gcp": {
    eyebrow: "// em desenvolvimento",
    title: "Engenharia de Dados no GCP",
    lead: "Projeto voltado a pipelines, processamento, modelagem e disponibilização de dados no Google Cloud.",
    sections: [
      {
        heading: "Por que aparece no portfólio agora?",
        body: "O projeto complementará o case de IA e sustentará o posicionamento Data & AI Engineer. O card é deliberadamente marcado como “Em desenvolvimento”.",
      },
      {
        heading: "O que ainda será definido",
        list: [
          "Problema e dataset.",
          "Arquitetura e serviços GCP.",
          "Pipeline e modelagem.",
          "Observabilidade e qualidade.",
          "Repositório GitHub e evidências.",
        ],
      },
    ],
  },
  portfolio: {
    eyebrow: "// estudo de caso",
    title: "Portfólio Data & AI Engineer",
    lead: "Currículo web construído como produto estático, com progressive disclosure, temas claro/escuro e contato de baixa fricção.",
    sections: [
      {
        heading: "Decisões principais",
        list: [
          "Next.js + TypeScript.",
          "Tailwind CSS.",
          "Export estático.",
          "Firebase Hosting.",
          "Sem backend na V1.",
          "Conteúdo separado da apresentação.",
          "Preparação para inglês numa fase posterior.",
        ],
      },
      {
        heading: "Critério de sucesso",
        body: "Um recrutador deve entender o posicionamento e encontrar evidências rapidamente; um gestor técnico deve conseguir aprofundar sem sobrecarregar a homepage.",
      },
    ],
  },
};

export const ui: Ui = {
  htmlLang: "pt-BR",
  skipLink: "Pular para o conteúdo",
  nav: {
    career: "Trajetória",
    capabilities: "Capacidades",
    projects: "Projetos",
    brandAria: "Ir para o início",
    navAria: "Navegação principal",
  },
  langSwitch: { label: "EN", aria: "View this page in English" },
  theme: {
    toLight: "modo claro",
    toDark: "modo escuro",
    hintTemplate: "tecle {kbd} para {target}",
    activateTemplate: "Ativar {target}",
    nudgeTemplate: "experimente o {target}",
  },
  hero: {
    seeProjects: "Ver projetos",
    watchVideo: "Vídeo de 1 minuto",
    downloadCv: "Baixar CV (PDF)",
    specAria: "Resumo profissional",
    portraitLightAlt: "Douglas Alencar, retrato profissional",
    portraitDarkAlt: "Douglas Alencar, retrato com fundo verde",
  },
  capabilities: {
    markAria: "Sei construir e colocar em produção",
    techAriaTemplate: "Tecnologias de {title}",
  },
  projectCard: {
    status: {
      production: "Em produção",
      development: "Em desenvolvimento",
      "case-study": "Estudo de caso",
    },
    openApp: "Abrir aplicação",
    github: "GitHub",
    caseStudy: "Estudo de caso",
  },
  footer: {
    navAria: "Links profissionais",
    cvLabel: "CV (PDF)",
    email: "E-mail",
    tagline: "Data & AI Engineer",
  },
  contactDock: {
    ariaLabel: "Contato rápido",
    trigger: "Contato",
    openTrigger: "Abrir opções de contato",
    closeTrigger: "Fechar opções de contato",
    scheduleLabel: "Agendar",
    scheduleDesc: "Agendar uma conversa",
    emailLabel: "E-mail",
    emailDesc: "Enviar e-mail",
    whatsappLabel: "WhatsApp",
    whatsappDesc: "Enviar WhatsApp",
    emailSubject: "Contato profissional — oportunidade em Dados/IA",
    emailBody:
      "Olá, Douglas.\n\nEncontrei seu portfólio e gostaria de conversar sobre uma oportunidade profissional na área de Dados/IA.\n\nPodemos agendar uma conversa?\n\nObrigado(a).",
  },
  notFound: {
    metaTitle: "Página não encontrada",
    eyebrow: "// 404",
    title: "Página não encontrada",
    lead: "O endereço que você abriu não existe (ou saiu do ar). Volte para a home ou vá direto a uma das seções.",
    goHome: "Ir para a home",
  },
  caseChrome: {
    back: "Voltar aos projetos",
    openFullscreen: "Abrir em tela cheia",
    openDiagramFullscreen: "Abrir o diagrama em tela cheia",
    otherProjects: "Ver outros projetos",
    codeOnGithub: "Código no GitHub",
    pendingSlot: "pendente",
  },
  meta: {
    title: "Douglas Alencar | Data & AI Engineer",
    description:
      "Portfólio profissional de Douglas Alencar: Engenharia de Dados, aplicações de IA, RAG, APIs, cloud e produtos em produção.",
    ogSiteName: "Douglas Alencar — Data & AI Engineer",
    ogImageAlt: "Douglas Alencar — Data & AI Engineer",
  },
};

export const pt: SiteContent = {
  locale: "pt",
  ui,
  profile,
  links,
  heroSpec,
  sections,
  career,
  education,
  capabilities,
  projects,
  caseStudies,
  simpleCases,
};

export default pt;
