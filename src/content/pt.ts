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
    heading: "Além das ferramentas - o que eu entrego.",
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
      "LangChain/LangGraph/LangSmith",
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
    slug: "rag-avancado-ragflow",
    title: "RAG avançado via RAGFlow",
    status: "development",
    statusLabel: "Explorando solução",
    description:
      "Ambiente de estudo e experimentação de uma arquitetura corporativa de RAG com RAGFlow e Elasticsearch: busca híbrida, estratégias de chunking, estruturas parent-child e avaliação de recuperação para um cenário simulado de atendimento em saúde.",
    technologies: [
      "RAGFlow",
      "Elasticsearch",
      "RAG",
      "LangChain",
      "LangGraph",
      "PostgreSQL",
      "Docker Compose",
    ],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/mvp_pa2",
    caseStudyUrl: "/projects/rag-avancado-ragflow/",
  },
  {
    slug: "skill-astramax",
    title: "Skill AstraMax",
    status: "development",
    statusLabel: "Testando",
    description:
      "Agent Skill que adiciona uma etapa de revisão independente, feita por um segundo modelo em contexto separado, ao desenvolvimento de software assistido por IA. O fluxo de referência usa Claude Code para implementar e OpenAI Codex com GPT-6 Astra para verificar e encontrar defeitos.",
    technologies: [
      "Agent Skills",
      "Claude Code",
      "OpenAI Codex",
      "Code Review",
      "Python",
    ],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/astramax",
    caseStudyUrl: "/projects/skill-astramax/",
  },
  {
    slug: "engenharia-dados-gcp",
    title: "Engenharia de Dados no GCP",
    status: "development",
    description:
      "Projeto em desenvolvimento voltado a pipelines, processamento, modelagem e disponibilização de dados no Google Cloud.",
    technologies: ["Python", "SQL", "GCP", "BigQuery"],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/mvp_eng_dados_1",
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
  "rag-avancado-ragflow": {
    eyebrow: "// explorando solução",
    title: "RAG avançado via RAGFlow",
    lead: "Ambiente de estudo e experimentação para entender as decisões de engenharia por trás de uma solução RAG corporativa mais confiável, rastreável e sustentável, próxima de produção.",
    sections: [
      {
        heading: "Objetivo",
        body: "O objetivo não é apenas fazer um LLM responder perguntas a partir de documentos, mas explorar o que torna uma solução de Retrieval-Augmented Generation robusta: qualidade da recuperação, rastreabilidade das fontes e separação clara entre o que deve vir da busca semântica e o que deve ser tratado pela aplicação tradicional.",
      },
      {
        heading: "O que o projeto exercita",
        list: [
          "RAGFlow como plataforma principal de RAG e camada de orquestração.",
          "Elasticsearch para indexação e recuperação escalável, com busca híbrida (similaridade vetorial + busca lexical).",
          "Embeddings e seu impacto na qualidade da recuperação.",
          "Estratégias de chunking: tamanho dos chunks, estrutura documental e limites semânticos.",
          "Estruturas parent-child para preservar contexto mantendo unidades de recuperação precisas.",
          "Avaliação de recuperação: verificar se os chunks corretos são recuperados antes de avaliar a resposta final.",
          "Ajustes de similaridade e ranking, filtros por metadados e reranking.",
          "PostgreSQL para dados estruturados, governança e informações determinísticas da aplicação.",
          "Workflows determinísticos para operações que não devem depender de IA generativa.",
          "LangChain e LangGraph para orquestração em nível de aplicação e workflows de IA explícitos.",
          "Conceitos de LangSmith / Langfuse para tracing, observabilidade e avaliação das execuções.",
          "Docker Compose para infraestrutura local reproduzível, com otimização de recursos.",
        ],
      },
      {
        heading: "Arquitetura em alto nível",
        body: "Documentos entram no RAGFlow, que cuida de chunking/parsing, embeddings e metadados. O Elasticsearch indexa e serve busca vetorial, lexical e híbrida. A camada de aplicação combina LangChain, LangGraph, regras determinísticas e o LLM para produzir uma resposta rastreável. O PostgreSQL complementa a camada de RAG armazenando dados estruturados e informações que não devem depender de recuperação semântica. A arquitetura é preparada para um futuro deploy no GCP.",
      },
      {
        heading: "Domínio de exemplo",
        body: "O cenário demonstrativo simula uma base de conhecimento corporativa para atendimento em saúde — reagendamento de consultas, documentos necessários, orientações de preparo, informações administrativas e procedimentos de atendimento. O projeto usa apenas informações sintéticas ou demonstrativas e não se destina a decisões clínicas reais.",
      },
      {
        heading: "Principal aprendizado",
        body: "A qualidade de uma solução RAG depende fortemente da qualidade da recuperação. Um LLM poderoso não compensa de forma confiável documentos mal estruturados, chunking inadequado, embeddings fracos ou um ranking de recuperação incorreto. Por isso o projeto trata os testes de retrieval como uma atividade central de engenharia, e não apenas a avaliação da resposta final.",
      },
      {
        heading: "Estado atual e próximos passos",
        body: "Projeto de aprendizado e portfólio, em desenvolvimento ativo.",
        list: [
          "Em andamento: infraestrutura local com RAGFlow, recuperação com Elasticsearch, chunking de documentos, similaridade de embeddings e validação de retrieval.",
          "Próximas iterações: orquestração da aplicação, observabilidade, avaliação, workflows determinísticos, governança e deploy em nuvem.",
        ],
      },
    ],
    screenshotsHeading: "Evidência visual",
    screenshots: [
      {
        src: "/assets/projects/rag-avancado-ragflow/ss-1-retrieval-testing",
        alt: "Tela 'Retrieval testing' do RAGFlow: painel de ajustes com limiar de similaridade 0,2 e peso de similaridade vetorial 0,30 / lexical 0,70, a pergunta 'como faço para remarcar minha consulta?' e quatro trechos recuperados com pontuações de similaridade híbrida, lexical e vetorial.",
        caption:
          "Teste de recuperação no RAGFlow: efeito do peso da similaridade vetorial e do limiar sobre o ranking dos trechos recuperados (captura feita durante o estudo).",
      },
    ],
  },
  "skill-astramax": {
    eyebrow: "// testando",
    title: "Skill AstraMax",
    lead: "AstraMax Reviewer é uma Agent Skill que adiciona uma etapa de revisão independente, por um segundo modelo, ao desenvolvimento de software assistido por IA.",
    sections: [
      {
        heading: "Por que existe",
        body: "Um agente de implementação já formou premissas sobre requisitos, arquitetura e testes. Um segundo modelo, em contexto novo, pode desafiar essas premissas e criar outra oportunidade de encontrar defeitos. Independência não garante correção; o valor está em evidências e achados reproduzíveis.",
      },
      {
        heading: "Como funciona",
        body: "O fluxo de referência usa Claude Code para implementar e OpenAI Codex com GPT-6 Astra, no maior esforço de raciocínio suportado, para verificar e descobrir defeitos. O agente que implementa entrega requisitos e evidências para um contexto revisor separado, que inspeciona o repositório e desafia a implementação com um protocolo repetível. A skill é composta de instruções e referências, com um auxiliar opcional em Python para montar o dossiê de handoff — ela não chama API, não escolhe o modelo sozinha, não configura ferramentas do agente, não roda em background nem instala hooks.",
      },
      {
        heading: "Fluxo de revisão",
        list: [
          "Definir escopo: working tree, mudanças em stage, um intervalo de commits explícito, ou componentes / o repositório inteiro. Ler requisitos e restrições.",
          "Inspecionar o código alterado junto de chamadores, contratos, configuração e testes.",
          "Desafiar correção, regressões, cobertura de testes, arquitetura, segurança, integridade de dados e complexidade desnecessária.",
          "Descobrir os comandos de verificação do projeto-alvo e executá-los dentro da autorização do usuário.",
          "Reportar achados por severidade, lacunas de verificação e um veredito: PASS, PASS WITH MINOR FINDINGS, CHANGES RECOMMENDED, CHANGES REQUIRED ou UNABLE TO VERIFY.",
        ],
      },
      {
        heading: "Escopo e limites",
        body: "Revisão apenas, por padrão. Os achados não autorizam edições de implementação, commits, pushes, publicação ou remoção de relatório. Se o modelo, o esforço de raciocínio ou o contexto independente não puderem ser confirmados, o resultado é UNABLE TO VERIFY — preparar um dossiê não conta como revisão do Astra.",
      },
      {
        heading: "Estado atual",
        body: "Versão 0.1.0 em desenvolvimento local, ainda não publicada. Disponibilidade do modelo externo, validação de Agent Skills e instalação via GitHub / SkillPM ainda não foram verificadas. É um projeto de comunidade independente, sem afiliação com OpenAI ou Anthropic.",
      },
    ],
    screenshotsHeading: "Evidência visual",
    screenshots: [
      {
        src: "/assets/projects/skill-astramax/ss-1-claude-codex",
        alt: "Editor com dois terminais lado a lado: à esquerda o Claude Code registrando a reavaliação dos achados em REVISAO.md; à direita o Codex rodando gpt-6-astra em esforço xhigh, listando itens bloqueantes da revisão independente.",
        caption:
          "Claude Code (implementação) e Codex com GPT-6 Astra (revisão independente) lado a lado, trocando achados via REVISAO.md.",
      },
    ],
  },
  "engenharia-dados-gcp": {
    eyebrow: "// em desenvolvimento",
    title: "Engenharia de Dados no GCP",
    lead: "MVP que constrói, de ponta a ponta, um fluxo de dados sobre um marketplace de varejo omnichannel sintético: de um banco transacional PostgreSQL até um datamart dimensional com governança, views de consumo e documentação.",
    sections: [
      {
        heading: "O que é",
        body: "Engenharia e governança de dados de referência. O projeto é conduzido primeiro em infraestrutura local e, quando maduro, replicado no Google Cloud Platform com Terraform, preservando as mesmas boas práticas. Todos os dados são sintéticos — nenhum dado pessoal real é usado em nenhuma fase.",
      },
      {
        heading: "Fluxo de dados",
        list: [
          "Batch, orquestrado por Airflow: Faker → PostgreSQL → Airbyte → dbt → datamart → consumo.",
          "Streaming de estoque: Debezium → Redpanda → Apache Beam.",
          "Segunda origem: legado defeituoso → snapshot → limpeza → quarentena.",
        ],
      },
      {
        heading: "Fases",
        list: [
          "Local (pré-GCP): duas origens transacionais, geração determinística de dados, ingestão, transformação em camadas, datamart dimensional, um fluxo contínuo restrito ao estoque, governança e testes — tudo reproduzível a partir do repositório.",
          "GCP: replicação do fluxo com Cloud SQL, BigQuery, Datastream, Pub/Sub e Dataflow, provisionado por Terraform, com a mesma governança materializada em policy tags.",
        ],
      },
      {
        heading: "Decisões de arquitetura",
        body: "43 ADRs aceitos. Entre as escolhas que mais definem o projeto: domínio de varejo omnichannel; Airbyte, dbt e Airflow desde a fase local; Terraform como infraestrutura como código; geração com Faker orientada a configuração em YAML; streaming de estoque com Debezium sobre Kafka Connect, Redpanda e Apache Beam; catálogo como código; nove schemas no armazém, com o schema de governança restrito a controle e auditoria; SQLAlchemy e Alembic; quatro níveis de classificação e cinco papéis de acesso; src/ como pacote Python instalável; chaves substitutas por hash e SCD tipo 2 por snapshot; volume por proporções e fator de escala, com o alto volume reservado à fase GCP; uv e Python 3.11.",
      },
      {
        heading: "Estado atual",
        body: "Marcos entregues: termo aprovado (M0), decisões em ADR (M1), ambiente subindo do zero com um comando (M2), fluxo completo origem → consumo em operação (M3) e streaming em operação com o batch intacto (M4). Etapa 10 em implementação; a origem legada foi reaberta para revisão e o armazém ainda está sendo reconciliado com a última versão da transformação.",
        list: [
          "Seis cortes verticais entregues: comercial; financeiro e estoque; o caminho quente; entrega e logística; relacionamento; e a origem legada.",
          "Modelo dimensional completo: 10 fatos e 15 dimensões, e as 16 perguntas de negócio têm view com contract: enforced.",
          "Armazém com 36 fluxos de ingestão em lote da origem principal, o CDC de inventory_movements e 40 do legado; o dbt build passa com 851 objetos, WARN=0 e ERROR=0.",
          "Segunda origem atravessa da captura ao modelo dimensional: 12.747 ocorrências capturadas — 81,9% aceitas, 17,9% rejeitadas em quarentena com motivo e 0,2% corrigidas.",
          "Procedência viaja junto: source_system é coluna em toda tabela empilhada e entra na chave substituta das dimensões.",
          "A DAG fluxo_batch roda dez tarefas de ponta a ponta em 5 min 20 s, com as duas capturas em paralelo.",
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
