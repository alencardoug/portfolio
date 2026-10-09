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
  StoryCase,
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
    slug: "engenharia-governanca-dados",
    title: "Engenharia e Governança de Dados",
    status: "case-study",
    statusLabel: "Concluído",
    description:
      "Fluxo de dados de ponta a ponta sobre um varejo omnichannel sintético: do PostgreSQL ao modelo dimensional e às views de consumo, com Airbyte, dbt e Airflow no lote, CDC com Debezium, Redpanda e Apache Beam no estoque, e governança desde a primeira camada. Concluído e reproduzível a partir do repositório.",
    technologies: [
      "PostgreSQL",
      "Airbyte",
      "dbt",
      "Airflow",
      "Debezium",
      "Redpanda",
      "Apache Beam",
      "Python",
      "Terraform",
      "Docker",
    ],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/mvp_eng_dados_1",
    caseStudyUrl: "/projects/engenharia-governanca-dados/",
    metrics: [
      { label: "Primeira versão", value: "33 dias" },
      { label: "Testes", value: "1.337" },
      { label: "Commits", value: "306" },
      { label: "ADRs", value: "48" },
    ],
  },
  {
    slug: "engenharia-dados-gcp",
    title: "Engenharia de Dados no GCP",
    status: "development",
    statusLabel: "A iniciar",
    description:
      "Replicação no Google Cloud, por Terraform, do projeto Engenharia e Governança de Dados: Cloud SQL, BigQuery, Datastream, Pub/Sub, Dataflow com o mesmo código Apache Beam e Cloud Composer, com a mesma governança aplicada como policy tags e custo estimado e medido.",
    technologies: [
      "Terraform",
      "GCP",
      "BigQuery",
      "Cloud SQL",
      "Datastream",
      "Pub/Sub",
      "Dataflow",
      "Cloud Composer",
      "dbt",
    ],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/mvp_eng_dados_1",
    caseStudyUrl: "/projects/engenharia-dados-gcp/",
  },
  {
    slug: "analytics-voz-do-cliente",
    title: "Analytics avançado via IA - Voz do cliente",
    // Estudo independente com dados públicos: "Em produção" sugeriria adoção pela operadora.
    status: "case-study",
    statusLabel: "Publicado · estudo independente",
    description:
      "Aplicação de IA que organiza reclamações públicas de beneficiários da Unimed Nacional (CNU), compara prioridades de melhoria e registra a escolha humana, com evidências conferíveis.",
    technologies: ["Python", "LLM", "Claude Code", "Codex", "FastAPI", "Cloud Run"],
    appUrl: "https://voz-do-beneficiario.web.app/",
    githubUrl: null, // repositório privado
    caseStudyUrl: "/projects/analytics-voz-do-cliente/",
    metrics: [
      { label: "Reclamações na decisão", value: "1.343" },
      { label: "Temas", value: "25" },
      { label: "Afirmações com evidência", value: "15" },
      { label: "Execução sem dado novo", value: "~15 s" },
    ],
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
  "engenharia-governanca-dados": {
    eyebrow: "// concluído · v1.0.0",
    title: "Engenharia e Governança de Dados",
    lead: "Um fluxo de dados completo sobre um varejo omnichannel sintético, do banco da aplicação às views que um analista consulta, construído com o padrão de um ambiente corporativo: o dado é simulado, a engenharia não. Concluído em 04/10/2026 e reproduzível a partir do repositório.",
    sections: [
      {
        heading: "O que é",
        body: "Um projeto de referência em engenharia e governança de dados. Duas origens transacionais, uma delas um sistema legado defeituoso de propósito, alimentam um armazém em camadas, um modelo dimensional e views de consumo, com testes, linhagem, classificação de sensibilidade e controle de acesso desde a primeira camada. Todos os dados são sintéticos e gerados de forma determinística: a mesma semente produz exatamente os mesmos dados.",
      },
      {
        heading: "Fluxo de dados",
        list: [
          "Lote, orquestrado por Airflow: PostgreSQL → Airbyte → dbt, uma tarefa por camada, até as views de consumo. A DAG completa roda em cerca de 7 minutos.",
          "Contínuo, para o estoque: o Debezium lê o log de transações do PostgreSQL, o Redpanda transporta e o Apache Beam grava cada evento uma única vez e emite alertas de estoque baixo. Da origem ao destino, cerca de 7 segundos.",
          "Os dois caminhos carregam o mesmo livro de estoque, de propósito: um teste reconcilia um contra o outro a cada build.",
          "Segunda origem: o legado é capturado inteiro, certificado por conteúdo, limpo por um catálogo de falhas e empilhado ao lado da origem principal; o que não passa vai para quarentena, com o motivo.",
        ],
      },
      {
        heading: "Como os dados se organizam",
        list: [
          "Nove camadas, cada uma um schema próprio: raw, raw_legacy, staging, trusted, analytics, consumption, quarantine, governance e snapshots.",
          "Modelo dimensional com 10 fatos e 15 dimensões, chaves substitutas por hash e histórico SCD tipo 2 por snapshot.",
          "16 views de consumo, uma por pergunta de negócio, com contrato de colunas: é o único lugar que o papel de análise consegue ler.",
        ],
      },
      {
        heading: "Decisões de arquitetura",
        body: "48 ADRs aceitos, cada um com a contrapartida na nuvem já declarada. Entre as escolhas que mais definem o projeto: Airbyte, dbt e Airflow desde a fase local; conexões de ingestão declaradas como código em YAML e Terraform; schema das origens em SQLAlchemy e Alembic; camada como schema, nunca como prefixo de tabela; CDC e lote sobre o mesmo livro, reconciliados; nenhum registro descartado em silêncio; cada captura do legado certificada por conteúdo antes de ser usada; e a validação local feita por partes, porque o ambiente inteiro não cabe de uma vez na máquina.",
      },
      {
        heading: "Qualidade e governança",
        list: [
          "Um comando, make check, para na primeira falha: revisão de segredos, build do dbt com 700 testes de dados, classificação e linhagem em dia com os modelos, e 637 testes Python.",
          "Reconciliação automática em toda fronteira entre camadas, das origens às fatos.",
          "4.161 de 4.161 colunas classificadas por sensibilidade, derivadas por linhagem a partir dos modelos.",
          "Cinco papéis de acesso sem login, com as permissões declaradas no dbt e testadas assumindo cada papel: o de análise lê as views e nada mais.",
          "O histórico inteiro do Git varrido por credenciais, com o tratamento de cada achado registrado.",
        ],
      },
      {
        heading: "Reprodutível e recuperável",
        body: "O fechamento refez o ciclo inteiro num clone novo do repositório, com bancos, Airbyte e Airflow instalados do zero, e mediu duração, memória e tamanho em cada passo. O ciclo achou oito defeitos que um ambiente já povoado escondia, todos corrigidos na origem. Um pacote único de recuperação, com as origens e a memória do armazém, foi restaurado de ponta a ponta em 17 minutos, incluindo o novo snapshot do CDC.",
      },
      {
        heading: "Como foi construído",
        body: "Desenvolvido por github.com/alencardoug com suporte de Claude Code, que implementa, e de OpenAI Codex, que revisa: as três etapas finais passaram por rodadas de revisão independente, até a última rodada não trazer nenhum achado. A arquitetura e cada decisão ficaram com o autor, registradas em ADR; o trabalho seguiu um plano com critérios de conclusão por etapa, revisão integral do que é declaração (configuração, modelos, YAML) e por amostragem do que é gerado.",
      },
      {
        heading: "Resultado",
        list: [
          "Concluído em 04/10/2026, com a tag v1.0.0: 33 dias e 306 commits desde o primeiro commit.",
          "Uma validação final, que executou cada passo do material de estudo na máquina, levantou quatro decisões registradas no repositório, entre elas uma contagem dupla no saldo dos alertas do caminho contínuo.",
          "A continuação é o projeto Engenharia de Dados no GCP, que replica este fluxo na nuvem com Terraform.",
        ],
      },
    ],
    screenshotsHeading: "Evidência visual",
    screenshots: [
      {
        src: "/assets/projects/engenharia-governanca-dados/ss-1-airflow-dag",
        alt: "Interface do Airflow com a DAG fluxo_batch: as 13 tarefas concluídas com sucesso em duas execuções.",
        caption: "Airflow: a DAG do caminho em lote, uma tarefa por camada, concluída de ponta a ponta.",
      },
      {
        src: "/assets/projects/engenharia-governanca-dados/ss-2-dbt-linhagem",
        alt: "Grafo de linhagem do dbt: dimensões e tabelas da camada trusted alimentando a fato de vendas, que alimenta dez views de consumo.",
        caption: "dbt: a linhagem da fato de vendas, das dimensões às views de consumo.",
      },
      {
        src: "/assets/projects/engenharia-governanca-dados/ss-3-airbyte-modos",
        alt: "Aba Schema de uma conexão do Airbyte: o modo de sincronização, a chave e o cursor de cada tabela.",
        caption: "Airbyte: o modo de cada tabela, exatamente como o YAML do repositório declara.",
      },
      {
        src: "/assets/projects/engenharia-governanca-dados/ss-4-airflow-log",
        alt: "Log da tarefa dbt_staging na interface do Airflow: a saída do dbt, teste a teste, terminando em PASS=453 e código de saída 0.",
        caption: "Airflow: o log de uma tarefa de camada, com a saída inteira do dbt até o PASS=453.",
      },
    ],
  },
  "engenharia-dados-gcp": {
    eyebrow: "// a iniciar",
    title: "Engenharia de Dados no GCP",
    lead: "A continuação do projeto Engenharia e Governança de Dados: levar para o Google Cloud, por Terraform, o fluxo que já roda e foi validado localmente, preservando o desenho, os testes e a governança. O ponto de partida é um projeto concluído, com cada decisão já acompanhada da sua contrapartida na nuvem.",
    sections: [
      {
        heading: "O que é",
        body: "Replicar na nuvem um fluxo de dados completo: duas origens transacionais, ingestão em lote e contínua, transformação em camadas, modelo dimensional e views de consumo. O objetivo não é reescrever, e sim trocar as pontas: o mesmo dbt, o mesmo código Apache Beam e a mesma classificação de sensibilidade, agora sobre serviços gerenciados.",
      },
      {
        heading: "Do local para a nuvem",
        list: [
          "PostgreSQL em contêiner → Cloud SQL for PostgreSQL.",
          "Armazém em nove schemas → BigQuery, um dataset por camada, com particionamento e clustering nas fatos.",
          "Debezium sobre Kafka Connect → Datastream; Redpanda → Pub/Sub; Beam local → o mesmo pipeline no Dataflow.",
          "Airflow local → Cloud Composer; Airbyte local → Airbyte em contêiner, os dois criados e destruídos na mesma janela de uso.",
          "Papéis do PostgreSQL → IAM por dataset e policy tags aplicadas a partir da classificação declarada no dbt.",
          "Catálogo e linhagem do dbt → publicados no Dataplex; .env → Secret Manager; Docker Compose → Terraform.",
        ],
      },
      {
        heading: "Ponto de partida",
        body: "O projeto local está concluído (v1.0.0) e reproduzível a partir do repositório, com 48 ADRs que já declaram a contrapartida na nuvem de cada escolha e um mapa de paridade item a item. Três decisões da fase já estão tomadas: Composer e Airbyte vivem só durante a janela de uso, para conter custo; as policy tags são aplicadas por um fluxo automatizado, a partir do YAML do dbt; e a concorrência entre lote e contínuo, que não cabia na máquina local, é medida aqui.",
      },
      {
        heading: "Critérios de conclusão",
        list: [
          "Todo item do mapa de paridade com o equivalente provisionado por Terraform, e cada terraform plan revisado antes do apply.",
          "Particionamento, clustering, retenção e políticas definidos antes de provisionar.",
          "Policy tag em cada coluna sensível, com acesso negado comprovado e sem credencial de longa duração.",
          "Custo estimado e custo real registrados para cada janela de uso.",
          "Lote e contínuo de pé ao mesmo tempo, com tamanho, tempo e custo medidos e a reconciliação entre os dois caminhos passando.",
          "Paridade funcional com a fase local demonstrada.",
        ],
      },
      {
        heading: "Estado",
        body: "A iniciar. O projeto local que serve de base foi concluído em 04/10/2026; a fase de nuvem começa com a autorização do autor e com as quatro decisões que a validação final da fase local deixou abertas.",
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

// Fonte dos números: repositório privado voc_saude (analise/, dados/4-serving/,
// run de registro 20261007-1856). Crítica editorial do Codex em 09/10/2026.
export const storyCases: Partial<Record<string, StoryCase>> = {
  "analytics-voz-do-cliente": {
    eyebrow: "// estudo de caso · voz do cliente",
    statusLabel: "Publicado · estudo independente",
    readingTime: "4 min de leitura",
    quote: {
      text: "Marcaram em outra cidade e querem fazer através de reembolso. […] Quero atendimento na minha cidade!",
      source: "Beneficiário da CNU no consumidor.gov.br, fev/2024 · reclamação RC-2749732",
    },
    lead: "A frase é uma das 1.343 reclamações públicas de beneficiários da Unimed Nacional (CNU) que analisei com IA para propor uma prioridade: com espaço para um único projeto de jornada em 12 a 18 meses, onde investir? O placar e o parecer do LLM recomendaram o reembolso. Escolhi o acesso à rede — e registrei o motivo.",
    note: {
      label: "Estudo independente",
      text: "Dados públicos e reais do consumidor.gov.br (base ConsumerBR, da UFMG), de ago/2022 a jun/2024, com nomes e contatos mascarados na origem. Nenhum dado interno da operadora.",
    },
    countTemplate: "{n} de {total}",
    decision: {
      heading: "A escolha e o que ficou para depois",
      kh: "// placar × escolha · base de 1.343 reclamações",
      intro: "Três temas disputaram o topo do placar, que soma volume, esforço do beneficiário, risco à saúde e insucesso: com pesos iguais, venceu o reembolso, por 0,07; com o risco à saúde em dobro, a autorização. A rede ficou em 2º nas duas contas. Na escolha, olhei duas medidas juntas:",
      rankLabels: ["Pesos iguais", "Risco em dobro"],
      measures: {
        risk: "Risco à saúde nos relatos (leitura da IA)",
        unresolved: "“Não resolvido”, entre as avaliadas",
      },
      contenders: [
        {
          name: "Reembolso indeferido por exigência documental",
          ranks: ["1º", "3º"],
          role: "Recomendação do LLM",
          risk: { n: 7, total: 102 },
          unresolved: { n: 50, total: 60 },
        },
        {
          name: "Demora na análise de autorização",
          ranks: ["3º", "1º"],
          role: "Líder com risco em dobro",
          risk: { n: 61, total: 82 },
          unresolved: { n: 20, total: 41 },
        },
        {
          name: "Busca de prestador e atendimento fora do prazo",
          ranks: ["2º", "2º"],
          role: "Minha escolha",
          chosen: true,
          risk: { n: 43, total: 65 },
          unresolved: { n: 28, total: 31 },
        },
      ],
      takeaway:
        "Priorizei a rede pela combinação: 43 de 65 relatos com risco à saúde e uma resposta que quase nunca resolve — 28 das 31 avaliadas terminaram como “Não resolvido”. A autorização tem proporção maior de relatos com risco, mas metade das avaliadas termina resolvida. É um julgamento de prioridade, não uma conclusão automática dos números.",
      later:
        "Com um único projeto, ficam para outro ciclo o reembolso documental (102 reclamações, o maior esforço do beneficiário), a demora de autorização (61 de 82 com risco à saúde) e as terapias de TEA (43 de 45 com risco). Em paralelo, sem ocupar o slot, proponho pré-validar documentos no reembolso e acompanhar o prazo das guias com risco, escalonando antes do vencimento.",
      fronts: {
        heading: "O projeto proposto: quatro frentes, como hipótese a validar",
        items: [
          "Busca de rede com protocolo único e o prazo regulatório controlado por sistema.",
          "Guia médico confiável: aceite do plano, contato, especialidade e agenda.",
          "Descredenciamento com aviso prévio e substituto antes da saída.",
          "Reembolso liberado quando a busca não encontra rede.",
        ],
      },
    },
    verify: {
      heading: "Como conferir a decisão",
      kh: "// o LLM lê · o código confere · eu decido",
      funnel: ["1.343 reclamações", "25 temas", "15 passam nos filtros", "1 escolha"],
      steps: [
        "O LLM classificou cada reclamação nos 25 temas que revisei e aprovei; a leitura fica guardada, e só o que é novo volta ao LLM.",
        "O código aplicou os filtros (volume, persistência, causa estrutural, resposta que já resolve) e calculou o placar; o parecer do LLM avaliou cada alternativa, inclusive restrições de contrato e de regulação.",
        "Eu escolhi, e o painel da execução registra a divergência em relação ao parecer.",
      ],
      body: "As 15 afirmações da recomendação listam os ids das reclamações que as sustentam; o código confere cada número, id e trecho citado, e a interpretação fica com a revisão humana. Um segundo modelo (Codex) leu 994 das mesmas reclamações e concordou no tema principal em 83,5% — concordância entre modelos, não acurácia.",
      link: {
        label: "Ler as 65 reclamações de busca de rede na aplicação",
        href: "https://voz-do-beneficiario.web.app/index.html#f=%7B%22tema%22%3A%22busca_rede_prazo_garantia%22%2C%22base%22%3A%22corpus%22%7D&t=Busca+de+prestador+fora+do+prazo+%C2%B7+base+da+decis%C3%A3o+%28ago%2F2022%E2%80%93jun%2F2024%29",
      },
    },
    built: {
      heading: "O que construí",
      kh: "// aplicação publicada · analytics + produto",
      body: "Escolhi o recorte, pedi a análise de VoC e CX antes da decisão, aprovei a taxonomia e as regras de decisão, decidi o slot e conduzi a publicação. O código, a análise e os documentos foram escritos com o Claude Code; o Codex leu parte das reclamações para medir a concordância, revisou o projeto e é o motor de IA do site.",
      parts: [
        {
          label: "Analytics",
          text: "A tabela das 2.109 reclamações da CNU (ago/2022 a mar/2025), filtrável, e uma análise de VoC e CX em 16 seções: cada gráfico abre as reclamações por trás dele.",
          shot: {
            src: "/assets/projects/analytics-voz-do-cliente/ss-1-analise-risco",
            alt: "Gráfico de barras da página de análise: percentual das reclamações de cada macrojornada que relatam risco à saúde, de 75,9% em autorização e cobertura assistencial a 0,6% em cancelamento pedido pelo beneficiário; rede credenciada e acesso ao atendimento, 52,1%.",
            caption: "Página 2 · risco à saúde por macrojornada, na leitura do LLM",
            width: 1752,
            height: 1078,
          },
        },
        {
          label: "Produto",
          text: "Recebe um trimestre novo, lê só o que é novo, pausa para a pessoa escolher e grava três relatórios por execução: recomendação, evidências e painel. Agir exige login; os relatórios são abertos.",
          shot: {
            src: "/assets/projects/analytics-voz-do-cliente/ss-2-painel-placar",
            alt: "Painel da execução: as seis primeiras das 15 alternativas mantidas no placar, em barras empilhadas por critério (volume, esforço, risco à saúde e insucesso). Em negrito, a proposta do parecer, reembolso indeferido por exigência documental (3,018), e a escolhida, busca de prestador e garantia de atendimento fora do prazo (2,950), com a parte de risco à saúde bem maior.",
            caption: "Painel da execução · as 6 primeiras das 15 alternativas no placar, por critério; em negrito, a proposta do parecer e a escolha",
            width: 1720,
            height: 575,
          },
        },
      ],
      runNote:
        "Sem dado novo, a execução inteira leva ~15 s e não chama o LLM. Com um trimestre novo somado (2024T3), a ordem do placar não mudou.",
      specs: {
        summary: "Ficha técnica",
        items: [
          {
            label: "Stack",
            text: "Python (uv, pandas), FastAPI e ECharts; páginas estáticas que abrem offline.",
          },
          {
            label: "IA",
            text: "Claude Code — Sonnet 5.5 na leitura, Opus 5.5 na taxonomia e no parecer. No site publicado, Codex (gpt-6-luna), com o Claude de reserva.",
          },
          {
            label: "Custo de leitura",
            text: "US$ 2,70 por mil reclamações com Sonnet 5.5, a preço de lista; US$ 0,10 com gpt-6-luna.",
          },
          {
            label: "Publicação",
            text: "Firebase Hosting, Cloud Run (0 a 1 instância) e Cloud Storage, dentro das cotas gratuitas do Google Cloud.",
          },
          {
            label: "Qualidade",
            text: "Conferência de cada número da página de análise e de cada citação da recomendação; revisão independente pelo Codex, com os achados conferidos e registrados.",
          },
          {
            label: "Tempo",
            text: "Dois dias (06 e 07/10/2026): ~7 h de trabalho ativo, medidas no registro das sessões, sobre a base de um case anterior (~32 h).",
          },
          {
            label: "Dados e privacidade",
            text: "Os relatos vêm da fonte pública com nomes e contatos mascarados, mas podem citar condições de saúde. O LLM recebe só o texto do beneficiário; o site republica os trechos como estão na fonte, e o repositório é privado.",
          },
        ],
      },
    },
    validate: {
      heading: "O que falta validar com a operação",
      kh: "// limites do dado · próximo passo",
      body: "A aplicação está publicada; o benefício do projeto proposto ainda precisa ser validado com quem opera a rede e o reembolso.",
      list: [
        "A base é de quem reclama em público: não mede quem não reclama, nem custo, contrato, plano ou prestador.",
        "“Resolvido” é a avaliação do consumidor: só metade avalia, e 37 das 135 reclamações marcadas como Resolvido vieram com nota 1 ou 2.",
        "A anonimização da fonte apagou os dias de espera: a base não mede o atendimento contra o prazo da ANS.",
        "Alcance, benefício e prazo das quatro frentes são hipóteses. O próximo passo é testá-las numa amostra de casos, com as áreas de Rede Credenciada e Reembolso.",
      ],
    },
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
  storyCases,
};

export default pt;
