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
    "7 anos de experiência em tecnologia e atuação em ambientes corporativos complexos, conectando engenharia de dados, aplicações de IA, APIs, cloud, avaliação, observabilidade e produção.",
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
  { key: "experiência", value: "7 anos em TI" },
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
    heading: "Sete anos em ambientes corporativos complexos.",
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
    sub: "Um projeto de IA em produção, um em desenvolvimento e este próprio portfólio.",
  },
};

export const career: CareerItem[] = [
  {
    organization: "A.C.Camargo Cancer Center",
    duration: "2 anos",
    context: "Dados, analytics, governança e IA.",
    roleDetail:
      "Coordenador de Dados — 1 ano: gestão do time de Analytics, incluindo cloud GCP e Azure, BI e governança de projetos e dados no setor da saúde. Engenheiro de Dados — 1 ano: transformação institucional para cultura data-driven através de BI e adesão à cloud e às boas práticas em dados.",
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
