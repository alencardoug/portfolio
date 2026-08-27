/**
 * English version of the site content.
 *
 * DRAFT FOR REVIEW — translated with care (not machine-translated) from `pt.ts`.
 * Douglas to review copy before the EN version is announced. Structure mirrors
 * `pt.ts` exactly; company names and `technologies[]` are kept as-is.
 */
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
  eyebrow: "Data • AI • Software Engineering",
  marker: "// data + ai · from data engineering to deploy",
  headline:
    "Data engineer specialized in building Artificial Intelligence applications.",
  summary:
    "7 years of experience in technology and work across complex corporate environments, connecting data engineering, AI applications, APIs, cloud, evaluation, observability and production.",
  companiesRun: "A.C.Camargo Cancer Center / AB InBev / Shell + UFRJ",
};

export const links: ExternalLinks = {
  github: "https://github.com/alencardoug/",
  linkedin: "https://www.linkedin.com/in/alencardoug/",
  cv: "/cv/douglas-alencar-resume-en.pdf",
  youtubeIntro: null,
  calendly: "https://calendly.com/alencardoug/45-minutes-meeting",
  email: "alencardoug@gmail.com",
  whatsappUrl: "https://wa.me/qr/SZB7REVZSBB6M1",
};

export const heroSpec: HeroSpecItem[] = [
  { key: "experience", value: "7 years in tech" },
  { key: "focus", value: "data + ai" },
  { key: "scope", value: "data → deploy" },
  { key: "education", value: "postgrad / engineering" },
  { key: "language", value: "advanced English" },
];

export const sections: Record<
  "career" | "capabilities" | "projects",
  SectionCopy
> = {
  career: {
    eyebrow: "01 — Career",
    heading: "Seven years in complex corporate environments.",
    sub: "Healthcare, global industry and applied research — always where data, engineering and business meet.",
  },
  capabilities: {
    eyebrow: "02 — What I can build",
    heading: "Not just which tools I know — what I can actually deliver.",
    sub: "Six fronts I combine to take an AI idea from data engineering all the way to deploy.",
  },
  projects: {
    eyebrow: "03 — What I have built",
    heading: "Proof, not promises.",
    sub: "One AI project in production, one in development, and this portfolio itself.",
  },
};

export const career: CareerItem[] = [
  {
    organization: "A.C.Camargo Cancer Center",
    duration: "2 years",
    context: "Data, analytics, governance and AI.",
    roleDetail:
      "Data Coordinator — 1 year: leading the Analytics team, including GCP and Azure cloud, BI and governance of projects and data in the healthcare sector. Data Engineer — 1 year: institutional transformation toward a data-driven culture through BI and adoption of cloud and data best practices.",
  },
  {
    organization: "AB InBev",
    duration: "2.5 years",
    context: "Technology, data and a global corporate environment.",
    roleDetail:
      "Data Senior — Brazil–Belgium, 2.5 years. Data management and Finance (incl. SAP) on the Global Innovation and Technology Team (GITEC), at the brewery in Belgium. Big Data and project management with reports and dashboards — Power BI.",
  },
  {
    organization: "Shell + UFRJ",
    duration: "2.5 years",
    context: "Engineering, technology and research/application.",
    roleDetail:
      "Projects and Research — 2.5 years. Project management for the development of specialized bio-products for drilling pre-salt oil wells.",
  },
];

export const education = [
  "Postgraduate degree in Engineering — UFRJ and UFRRJ",
  "Science Without Borders — 18-month exchange program",
  "Advanced English",
];

export const capabilities: Capability[] = [
  {
    title: "AI applications",
    description:
      "LLM-based applications integrated with data, APIs and corporate systems.",
    evidence: [
      "RAG",
      "Embeddings",
      "Semantic search",
      "Agents",
      "LLMs",
      "Structured outputs",
      "Evaluation",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Pipelines, transformation, storage and delivery of data for analytics and applications.",
    evidence: ["Python", "SQL", "PostgreSQL", "BigQuery", "GCP", "Azure"],
  },
  {
    title: "Backend and APIs",
    description:
      "Turning models and business rules into usable, integrable applications.",
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
    title: "AI-assisted engineering",
    description:
      "Spec-driven development and workflows with coding agents, tests and traceability.",
    evidence: ["SDD", "Harness", "Codex", "Claude Code", "Git", "Tests", "CI/CD"],
  },
  {
    title: "Cloud, Analytics and platforms",
    description:
      "Data and analytics ecosystems on cloud and corporate platforms.",
    evidence: ["GCP", "BigQuery", "Azure", "Fabric", "Power BI", "SAP"],
  },
  {
    title: "Production and governance",
    description:
      "Security, observability, quality, governance, deploy and communication in complex corporate environments.",
    evidence: [
      "Governance",
      "Observability",
      "Security",
      "Architecture",
      "Deploy",
      "Leadership",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "plataforma-atendimento-ia",
    title: "AI Customer Support Platform",
    status: "production",
    description:
      "Demonstration application that combines RAG, LLM, relational and vector data, support workflows and different levels of autonomy to simulate corporate customer support and scheduling.",
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
    caseStudyUrl: "/en/projects/plataforma-atendimento-ia/",
    featured: true,
    metrics: [
      { label: "First version", value: "15 days" },
      { label: "Tests", value: "247" },
      { label: "Commits", value: "69" },
      { label: "SDD tasks", value: "473" },
    ],
  },
  {
    slug: "engenharia-dados-gcp",
    title: "Data Engineering on GCP",
    status: "development",
    description:
      "Project in development focused on pipelines, processing, modeling and delivery of data on Google Cloud.",
    technologies: ["Python", "SQL", "GCP", "BigQuery"],
    appUrl: null,
    githubUrl: null,
    caseStudyUrl: "/en/projects/engenharia-dados-gcp/",
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    status: "production",
    description:
      "Web résumé and professional presentation product built with a static architecture, light/dark themes and a focus on technical evidence.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/portfolio",
    caseStudyUrl: "/en/projects/portfolio/",
  },
];

export const caseStudies: Partial<Record<string, CaseStudy>> = {
  "plataforma-atendimento-ia": {
    eyebrow: "// case study — 01",
    disclaimerLabel: "Fictional system",
    disclaimer:
      "Fictional system for technical demonstration. The institution, professionals, procedures, clinical content, prices, payment, tax IDs and all other data are simulated. There is no real patient, healthcare service or real data.",
    nature:
      "Case study developed by github.com/alencardoug with support from Codex and Claude Code, following the canonical spec-driven development (SDD) cycle.",
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
      { label: "First version", value: "15 days" },
      { label: "Published on", value: "2026-08-21" },
      { label: "Commits", value: "69" },
      { label: "SDD packages", value: "11" },
      { label: "Tasks", value: "473" },
      { label: "Alembic migrations", value: "28" },
      { label: "Tests", value: "247" },
      { label: "E2E smoke", value: "18" },
      { label: "Playwright scenarios", value: "17" },
    ],
    stack: [
      {
        label: "Backend",
        text: "Python 3.11, FastAPI, Pydantic, SQLAlchemy 2.x and Alembic.",
      },
      {
        label: "AI",
        text: "OpenAI as the LLM and embeddings provider, RAG and an integrated vector database.",
      },
      {
        label: "Frontend",
        text: "React, TypeScript, Vite and React Router. Communication via fetch.",
      },
      { label: "Runtime", text: "Docker Compose." },
      {
        label: "Production",
        text: "GCP with Cloud Run, Cloud Build, Artifact Registry, Secret Manager and Firebase; PostgreSQL on Neon.",
      },
      {
        label: "Cost",
        text: "High efficiency and low operating cost; mainly variable with model/embeddings usage.",
      },
    ],
    nextSteps: [
      "Review of the 500+ chunks.",
      "Creation and refinement of chunks.",
      "Flow refinement.",
      "Performance improvement in simulations of real conversations.",
    ],
    screenshots: [
      {
        src: "/assets/projects/plataforma-atendimento/ss-1-cliente-canal",
        alt: "Customer screen: scheduling and information channel, with a demonstration-project notice and a start-conversation button.",
        caption: "Customer — scheduling and information channel",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-4-cliente-chat",
        alt: "Customer screen: a support conversation in progress, with the conversation code and messages between customer and agent.",
        caption: "Customer — support conversation",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-3-operador-workspace",
        alt: "Operator workspace: conversation queue, the N2 conversation thread and an AI / Evidence panel with draft generation and evidence search.",
        caption: "Operator — queue, conversation and AI / evidence panel",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-5-operador-conhecimento",
        alt: "Operator workspace: knowledge base with questions and answers, categories and a dynamic link to tables.",
        caption: "Operator — knowledge base (RAG)",
      },
      {
        src: "/assets/projects/plataforma-atendimento/ss-2-operador-login",
        alt: "Operator login screen, with a notice that this is a fictional case-study environment.",
        caption: "Operator — sign in",
      },
    ],
    architecture: {
      appAlt:
        "Application architecture: web UI and FastAPI at the transport layer, channel-neutral application services, domain and policies, an AI port and a RAG port, adapters (OpenAI / deterministic / pgvector) and PostgreSQL 17 with pgvector.",
      deployAlt:
        "Deploy topology: browser to Firebase Hosting (SPA static files and an /api/** rewrite on the same origin), Cloud Run (FastAPI, us-east1, min-instances=0), Neon Postgres 17 with pgvector, the OpenAI API, and Cloud Build, Artifact Registry and Secret Manager around it.",
      notes: [
        "Modular monolith with a strict dependency rule: the domain/application core knows nothing about React, FastAPI request objects or OpenAI SDK types. The conversation services are channel-neutral — allowing a future adapter (e.g. Telegram) without duplicating logic.",
        "LLM and embeddings provider behind ports/adapters (a ~4-method Protocol): an OpenAI adapter in production and a deterministic adapter that runs the whole test suite with no key and no network.",
        "No LangChain/LangGraph, Redis, Kafka, Celery or a separate vector database (banned by the constitution until a measured requirement): RAG is a pgvector query and generation is a single grounded call with deterministic decision-making around it.",
        "Deploy (D-029): Firebase Hosting serves the SPA and rewrites /api/** to Cloud Run on the same origin (no CORS); Cloud Run with min-instances=0 scales to zero (pool_pre_ping absorbs Neon's resume); Postgres on Neon in us-east-1 — the Always Free-eligible region closest to the audience in Brazil.",
      ],
    },
    decisionTree: {
      kh: "// ai.router.generate_draft — runs in this order and stops at the first rule that applies",
      alt: "Response-generation decision tree: retrieve, guided-scheduling branches, clinical evidence, dynamic ADMIN_QA, LLM call, clinical reranker, AIGeneration persistence and the autonomy decision.",
      notes: [
        "The LLM only enters branch F — when the best evidence is non-dynamic ADMIN_QA or when there is no evidence. Clinical evidence is never sent to the LLM: it becomes the entire parent document in branch D1, and in branch F only the ADMIN_QA items make up the payload.",
        "No branch sends on its own. All of them record an AIGeneration (internal draft) and only then does maybe_open_autonomous_window decide whether to open an autonomous send window.",
        "ABSTAIN is never sent autonomously by N3/N4 (constitution, Amendment 1.2.0 a). N5 is the only exception — and even so it is additive.",
        "Clinical-relevance gate for autonomy (D-043-2): the “entire parent document” shortcut now requires a score ≥ 0.40 for autonomous sending (greeting noise ~0.31–0.36; a real clinical question 0.42–0.63). The manual N1/N2 path still has no threshold.",
      ],
    },
    pending: [],
    headings: {
      nature: "Nature of the project",
      evidence: "Evidence",
      archDecision: "Architectural decision",
      architecture: "Architecture",
      stack: "Stack",
      state: "Current state and next steps",
      decisionTree: "Response generation — decision tree",
      visualEvidence: "Visual evidence",
    },
    kh: {
      nature: "// portfolio · AI-assisted engineering",
      evidence: "// figures reported by the repository",
      fineprint:
        "// revalidate the figures in the repository before the final portfolio release",
      archDecision: "// modular monolith",
      archApp:
        "// application — dependency rule (domain ⟶ ports ⟶ adapters)",
      archDeploy: "// deploy — Firebase Hosting ⟶ Cloud Run ⟶ Neon / OpenAI",
      stack: "// from engineering to deploy",
      state: "// functional in production · conversational refinement still open",
      visualEvidence: "// application in production — real captures",
      pending: "// pending — added once the real material exists",
    },
    archDecisionBody: {
      pre: "The architecture is a ",
      strong: "modular monolith, no microservices",
      post: ", by explicit decision. LangChain and LangGraph were also not used in this version, making it possible to explore the integration with the LLM provider, retrieval and application orchestration directly.",
    },
    stateBody:
      "Functional in production, with the planned functional tests complete. Refinement of conversational content and behavior continues as a later stage.",
  },
};

export const simpleCases: Partial<Record<string, SimpleCase>> = {
  "engenharia-dados-gcp": {
    eyebrow: "// in development",
    title: "Data Engineering on GCP",
    lead: "A project focused on pipelines, processing, modeling and delivery of data on Google Cloud.",
    sections: [
      {
        heading: "Why is it in the portfolio already?",
        body: "The project will complement the AI case study and support the Data & AI Engineer positioning. The card is deliberately marked as “In development”.",
      },
      {
        heading: "What is still to be defined",
        list: [
          "Problem and dataset.",
          "Architecture and GCP services.",
          "Pipeline and modeling.",
          "Observability and quality.",
          "GitHub repository and evidence.",
        ],
      },
    ],
  },
  portfolio: {
    eyebrow: "// case study",
    title: "Data & AI Engineer Portfolio",
    lead: "A web résumé built as a static product, with progressive disclosure, light/dark themes and low-friction contact.",
    sections: [
      {
        heading: "Key decisions",
        list: [
          "Next.js + TypeScript.",
          "Tailwind CSS.",
          "Static export.",
          "Firebase Hosting.",
          "No backend in V1.",
          "Content separated from presentation.",
          "Groundwork for English in a later phase.",
        ],
      },
      {
        heading: "Success criteria",
        body: "A recruiter should understand the positioning and find evidence quickly; a technical manager should be able to dig deeper without overloading the homepage.",
      },
    ],
  },
};

export const ui: Ui = {
  htmlLang: "en",
  skipLink: "Skip to content",
  nav: {
    career: "Career",
    capabilities: "Capabilities",
    projects: "Projects",
    brandAria: "Go to the start",
    navAria: "Main navigation",
  },
  langSwitch: { label: "PT", aria: "Ver esta página em português" },
  theme: {
    toLight: "light mode",
    toDark: "dark mode",
    hintTemplate: "press {kbd} for {target}",
    activateTemplate: "Switch to {target}",
    nudgeTemplate: "try {target}",
  },
  hero: {
    seeProjects: "See projects",
    watchVideo: "1-minute video",
    downloadCv: "Download CV (PDF)",
    specAria: "Professional summary",
    portraitLightAlt: "Douglas Alencar, professional portrait",
    portraitDarkAlt: "Douglas Alencar, portrait on a green background",
  },
  capabilities: {
    markAria: "I can build this and ship it to production",
    techAriaTemplate: "{title} technologies",
  },
  projectCard: {
    status: {
      production: "In production",
      development: "In development",
      "case-study": "Case study",
    },
    openApp: "Open application",
    github: "GitHub",
    caseStudy: "Case study",
  },
  footer: {
    navAria: "Professional links",
    cvLabel: "CV (PDF)",
    email: "Email",
    tagline: "Data & AI Engineer",
  },
  contactDock: {
    ariaLabel: "Quick contact",
    trigger: "Contact",
    openTrigger: "Open contact options",
    closeTrigger: "Close contact options",
    scheduleLabel: "Schedule",
    scheduleDesc: "Schedule a call",
    emailLabel: "Email",
    emailDesc: "Send an email",
    whatsappLabel: "WhatsApp",
    whatsappDesc: "Send a WhatsApp message",
    emailSubject: "Professional contact — Data/AI opportunity",
    emailBody:
      "Hi Douglas,\n\nI came across your portfolio and would like to talk about a professional opportunity in Data/AI.\n\nCan we schedule a call?\n\nThank you.",
  },
  notFound: {
    metaTitle: "Page not found",
    eyebrow: "// 404",
    title: "Page not found",
    lead: "The address you opened does not exist (or is offline). Go back to the home page or jump straight to one of the sections.",
    goHome: "Go to the home page",
  },
  caseChrome: {
    back: "Back to projects",
    openFullscreen: "Open full screen",
    openDiagramFullscreen: "Open the diagram full screen",
    otherProjects: "See other projects",
    codeOnGithub: "Code on GitHub",
    pendingSlot: "pending",
  },
  meta: {
    title: "Douglas Alencar | Data & AI Engineer",
    description:
      "Professional portfolio of Douglas Alencar: data engineering, AI applications, RAG, APIs, cloud and products in production.",
    ogSiteName: "Douglas Alencar — Data & AI Engineer",
    ogImageAlt: "Douglas Alencar — Data & AI Engineer",
  },
};

export const en: SiteContent = {
  locale: "en",
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

export default en;
