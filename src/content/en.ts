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
    "8 years of experience in technology and work across complex corporate environments, connecting data engineering, AI applications, APIs, cloud, evaluation, observability and production.",
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
  { key: "experience", value: "8 years in tech" },
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
    heading: "Eight years in complex corporate environments.",
    sub: "Healthcare, global industry and applied research — always where data, engineering and business meet.",
  },
  capabilities: {
    eyebrow: "02 — What I can build",
    heading: "Beyond the tools - what I deliver.",
    sub: "Six fronts I combine to take an AI idea from data engineering all the way to deploy.",
  },
  projects: {
    eyebrow: "03 — What I have built",
    heading: "Proof, not promises.",
    sub: "Two AI projects in production, one data project in development, and this portfolio itself.",
  },
};

export const career: CareerItem[] = [
  {
    organization: "A.C.Camargo Cancer Center",
    duration: "3 years",
    context: "Data, analytics, governance and AI.",
    roleDetail:
      "Data Coordinator — 2 years: leading the Analytics team, including GCP and Azure cloud, BI and governance of projects and data in the healthcare sector. Data Engineer — 1 year: institutional transformation toward a data-driven culture through BI and adoption of cloud and data best practices.",
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
      "LangChain/LangGraph/LangSmith",
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
    slug: "analisador-risco-mudanca-dados",
    title: "Data Change Risk Analyst",
    status: "production",
    description:
      "Corporate AI tool that helps decide whether a change to a data asset — dropping a column, changing a type, adding an index — can be made safely: it interprets the request, collects evidence from the database, applies a deterministic risk policy, drafts a non-binding recommendation with an LLM and pauses for human review before recording the decision.",
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
    caseStudyUrl: "/en/projects/analisador-risco-mudanca-dados/",
    featured: true,
    metrics: [
      { label: "First version", value: "5 days" },
      { label: "Tests", value: "76" },
      { label: "Commits", value: "31" },
      { label: "ADRs", value: "21" },
    ],
  },
  {
    slug: "rag-avancado-ragflow",
    title: "Advanced RAG via RAGFlow",
    status: "development",
    statusLabel: "Exploring the solution",
    description:
      "A study and experimentation environment for a corporate RAG architecture with RAGFlow and Elasticsearch: hybrid search, chunking strategies, parent-child structures and retrieval evaluation for a simulated healthcare support scenario.",
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
    caseStudyUrl: "/en/projects/rag-avancado-ragflow/",
  },
  {
    slug: "skill-astramax",
    title: "AstraMax Skill",
    status: "development",
    statusLabel: "Testing",
    description:
      "An Agent Skill that adds an independent second-model review stage, in a separate context, to AI-assisted software development. The reference workflow uses Claude Code to implement and OpenAI Codex with GPT-6 Astra to verify and find defects.",
    technologies: [
      "Agent Skills",
      "Claude Code",
      "OpenAI Codex",
      "Code Review",
      "Python",
    ],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/astramax",
    caseStudyUrl: "/en/projects/skill-astramax/",
  },
  {
    slug: "engenharia-dados-gcp",
    title: "Data Engineering on GCP",
    status: "development",
    description:
      "Project in development focused on pipelines, processing, modeling and delivery of data on Google Cloud.",
    technologies: ["Python", "SQL", "GCP", "BigQuery"],
    appUrl: null,
    githubUrl: "https://github.com/alencardoug/mvp_eng_dados_1",
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
  "analisador-risco-mudanca-dados": {
    eyebrow: "// case study — 02",
    disclaimerLabel: "Synthetic data",
    disclaimer:
      "Fictional system for technical demonstration. The database, the tables (orders and the reporting views), the downstream-usage signal and all other data are synthetic. No schema change is ever really applied — the tool only recommends.",
    nature:
      "An AI Engineering portfolio project, built with AI-assisted engineering under Spec-Driven Development (SDD), with the artifacts versioned in the repository (specs/, *_SEED.md, DECISIONS.md). The stated goal was to show real, defensible uses of LangGraph and LangChain — workflow orchestration, deterministic routing, parallel fan-out with a reducer, interrupt/resume with checkpointing and a bounded ReAct agent — without turning into a production change-management platform.",
    flow: ["constitution", "specify", "clarify", "plan", "tasks", "implement"],
    evidence: [
      { label: "Development window", value: "5 days" },
      { label: "Published on", value: "2026-08-31" },
      { label: "Commits", value: "31" },
      { label: "Pull requests", value: "10" },
      { label: "ADRs", value: "21" },
      { label: "Requirements (FR-###)", value: "25" },
      { label: "Source code", value: "~2,400 lines · 30 .py" },
      { label: "Tests collected", value: "76 · 26 files" },
      { label: "Dependencies · packages", value: "13 · 97" },
    ],
    stack: [
      {
        label: "Orchestration",
        text: "LangGraph — state graph, checkpointing and interrupt/resume; langgraph-checkpoint-postgres.",
      },
      {
        label: "LLM",
        text: "LangChain — structured output, @tool tools and a ReAct agent; langchain-openai (gpt-4o by default).",
      },
      {
        label: "Remote tools",
        text: "MCP (mcp, langchain-mcp-adapters) — optional downstream-usage reader.",
      },
      {
        label: "Domain",
        text: "Pydantic v2 for the contracts; risk rules in plain Python.",
      },
      {
        label: "Database",
        text: "PostgreSQL via psycopg 3 + psycopg_pool; introspection through information_schema / pg_catalog.",
      },
      {
        label: "UI",
        text: "Streamlit — form, step-by-step result, review gate and table view.",
      },
      { label: "Observability", text: "LangSmith (optional tracing)." },
      {
        label: "Runtime and dev",
        text: "Docker (python:3.13-slim + uv); ruff and pytest.",
      },
      {
        label: "Production",
        text: "Google Cloud Run, Neon, Firebase Hosting, Secret Manager and Cloud Build.",
      },
    ],
    nextSteps: [
      "Real per-column downstream usage (a data catalog, pg_stat_statements or BI APIs), replacing the flow's one synthetic signal.",
      "Assisted DDL application — generating the ALTER/DROP and the rollback plan.",
      "Authentication and multi-user support (the “reviewer” field already anticipates that separation).",
    ],
    screenshots: [
      {
        src: "/assets/projects/analisador-risco/ss-2-formulario",
        alt: "The tool's form: the change request in natural language, with ready-made examples.",
        caption: "Form — the request in natural language",
      },
      {
        src: "/assets/projects/analisador-risco/ss-3-etapas-evidencias",
        alt: "Step-by-step graph execution and the evidence read from the real information_schema: views in the reporting schema and inbound foreign keys.",
        caption: "Steps + evidence — the graph and Postgres introspection",
      },
      {
        src: "/assets/projects/analisador-risco/ss-4-risco-recomendacao",
        alt: "Result with MEDIUM risk, the named risk factors and the AI recommendation labeled as non-binding, in Portuguese.",
        caption: "Risk + recommendation — named factors, non-binding recommendation",
      },
      {
        src: "/assets/projects/analisador-risco/ss-5-revisao-humana",
        alt: "Human review gate: approve, reject or return the case, with the risk rationale in view.",
        caption: "Human review — approve / reject / return",
      },
      {
        src: "/assets/projects/analisador-risco/ss-6-estrutura-orders",
        alt: "Structure of the orders table: column, type, constraints (PK, FK, constraint) and the purpose of each field.",
        caption: "Structure of the orders table",
      },
      {
        src: "/assets/projects/analisador-risco/ss-7-tabela-orders",
        alt: "A live read of the orders table from the database: header and fifteen rows.",
        caption: "orders table — a live read from the database",
      },
      {
        src: "/assets/projects/analisador-risco/ss-1-apresentacao",
        alt: "Presentation page: the context of the problem before entering the tool.",
        caption: "Presentation — the problem before the tool",
      },
    ],
    architecture: {
      appAlt:
        "The case flow in LangGraph: interpret (the LLM produces StructuredChange), a parallel fan-out to collect_asset, collect_deps and collect_usage, assess_risk with deterministic rules (LOW/MEDIUM/HIGH), an optional detour to the investigate agent when there is an evidence gap, recommend (LLM, non-binding) and routing to an automatic finalize or to human_review with interrupt and a checkpoint in Postgres.",
      deployAlt:
        "Deploy topology: the browser is 301-redirected from Firebase Hosting to Cloud Run (us-east1, scales to zero, Streamlit + LangGraph), which talks to Neon Postgres (checkpoints, analysis_record, orders and views) and the OpenAI API; Secret Manager mounts the environment variables.",
      notes: [
        "A hard boundary between the deterministic and the probabilistic: the LLM only produces structured output at two points (interpreting the request and drafting the recommendation, explicitly non-binding). Collecting evidence, classifying risk and routing is plain, reproducible Python.",
        "Fan-out / fan-in: the three collectors run in parallel and a reducer merges the concurrent writes into the state's evidence field.",
        "Evidence collection = real Postgres introspection: with a database configured, it reads type, NOT NULL, PK and UNIQUE from information_schema plus table_constraints, and dependencies from view_column_usage (views) and pg_constraint (inbound foreign keys). With no database, it falls back to an equivalent simulated catalog.",
        "Human-in-the-loop is mandatory for MEDIUM/HIGH: the graph calls interrupt(), the state is written to Postgres and a Command(resume=…) resumes exactly where it stopped — surviving an app or database restart. The AI recommendation and the human decision are stored as separate fields.",
        "Persistence: analysis_record (one row per case; risk, recommendations and decisions are append-only JSON arrays — the “current” one is always arr[-1]) plus LangGraph's four checkpoint tables, linked by thread_id.",
        "Deploy: Firebase Hosting acts only as a 301 redirect (it does not proxy Streamlit's WebSocket); Cloud Run runs with min-instances=0 (scales to zero), max-instances=1 (a coherent Streamlit session with no session affinity) and timeout=3600; Neon is on the free plan, with a ConnectionPool + pre-ping absorbing the autosuspend. The expected cost fits the free tier — only OpenAI is billed by usage.",
        "Deliberately out of scope: authentication/multi-user, real DDL application, an in-house data catalog, an async queue, an authorization layer and HA/autoscaling.",
      ],
    },
    decisionTree: {
      kh: "// recommend + route — a tree fixed in code; the LLM only writes the text leaves",
      alt: "The recommendation decision tree: if the operation is DROP/ALTER and some dependency or usage source came back unavailable, the investigate agent re-reads the tools; recommend drafts the disposition; LOW risk finalizes on its own (AUTO_FINALIZED) and MEDIUM/HIGH go to the human reviewer, who approves, rejects or returns (with a note to re-recommend, or flagging missing evidence to re-collect and re-assess); a revision-limit guard ends the loop.",
      notes: [
        "The tree is fixed in code; the LLM enters only at the text leaves (recommend), never at the branches.",
        "Risk classification (assess_risk) is plain Python: each named predicate that fires is a RiskFactor with its own severity, and the final category is the maximum severity among the factors — HIGH for ASSET_NOT_FOUND, IN_PRIMARY_KEY, IN_UNIQUE_CONSTRAINT and INBOUND_FOREIGN_KEY; MEDIUM for REFERENCED_BY_VIEW, ACTIVELY_READ, EVIDENCE_UNAVAILABLE and INDEX_BUILD_CONTENTION; LOW for ADD_INDEX_LOW_RISK and NO_DEPENDENTS_OR_USAGE.",
        "If the operation is DROP/ALTER and some dependency/usage source came back UNAVAILABLE, a bounded ReAct agent (3 tools, 8 steps) re-reads the evidence before the recommendation.",
        "recommend returns PROCEED, PROCEED_WITH_MITIGATION (with the list of mitigations) or DO_NOT_PROCEED, with a rationale in Portuguese, labeled “🤖 AI-generated (non-binding)”.",
        "Routing: LOW finalizes on its own (AUTO_FINALIZED); MEDIUM/HIGH go to the human gate — APPROVE → APPROVED, REJECT → REJECTED, RETURN + note → re-recommend, RETURN + missing evidence → re-collect and re-assess. A guard at revision_limit = 2 prevents an infinite loop. None of this is decided by the LLM.",
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
      decisionTree: "Recommendation generation — decision tree",
      visualEvidence: "Visual evidence",
    },
    kh: {
      nature: "// portfolio · AI engineering · spec-driven development",
      evidence: "// counts from the repository on the publication date",
      fineprint:
        "// some e2e tests are DB-gated (skipped without an accessible Postgres); the real-LLM integration tests are opt-in",
      archDecision:
        "// state graph · deterministic ⟂ probabilistic boundary",
      archApp:
        "// case flow — parallel fan-out ⟶ assess_risk ⟶ recommend ⟶ human review",
      archDeploy: "// deploy — Firebase Hosting (301) ⟶ Cloud Run ⟶ Neon / OpenAI",
      stack: "// from orchestration to deploy",
      state: "// stable, published and frozen",
      visualEvidence: "// application in production — real captures",
      pending: "// pending",
    },
    archDecisionBody: {
      pre: "A ",
      strong:
        "LangGraph state graph with a hard boundary between the deterministic and the probabilistic",
      post: ". The LLM never decides the risk category or the routing; it only produces structured output when interpreting the request and when drafting the recommendation, which is explicitly non-binding. LangGraph and LangChain were chosen to exercise real uses — orchestration, deterministic routing, fan-out with a reducer, interrupt/resume with checkpointing and a bounded ReAct agent.",
    },
    stateBody:
      "Stable and published. The product is complete and frozen — no next steps are planned for now. One known defect was not fixed: the “open cases” dropdown in Reopen a case does not populate in the published environment (reopening by thread_id works), per KNOWN_ISSUES.md. Possible evolutions, if ever picked up again:",
  },
};

export const simpleCases: Partial<Record<string, SimpleCase>> = {
  "rag-avancado-ragflow": {
    eyebrow: "// exploring the solution",
    title: "Advanced RAG via RAGFlow",
    lead: "A study and experimentation environment to understand the engineering decisions behind a corporate RAG solution that is more reliable, traceable and sustainable, closer to production.",
    sections: [
      {
        heading: "Goal",
        body: "The goal is not merely to make an LLM answer questions from documents, but to explore what makes a Retrieval-Augmented Generation solution robust: retrieval quality, source traceability and a clear boundary between what should come from semantic search and what should be handled by the traditional application.",
      },
      {
        heading: "What the project exercises",
        list: [
          "RAGFlow as the main RAG platform and orchestration layer.",
          "Elasticsearch for scalable indexing and retrieval, with hybrid search (vector similarity + lexical search).",
          "Embeddings and their impact on retrieval quality.",
          "Chunking strategies: chunk size, document structure and semantic boundaries.",
          "Parent-child structures to preserve context while keeping precise retrieval units.",
          "Retrieval evaluation: checking that the right chunks are retrieved before assessing the final answer.",
          "Similarity and ranking tuning, metadata filters and reranking.",
          "PostgreSQL for structured data, governance and deterministic application information.",
          "Deterministic workflows for operations that should not depend on generative AI.",
          "LangChain and LangGraph for application-level orchestration and explicit AI workflows.",
          "LangSmith / Langfuse concepts for tracing, observability and evaluation of runs.",
          "Docker Compose for a reproducible local infrastructure, with resource optimization.",
        ],
      },
      {
        heading: "High-level architecture",
        body: "Documents enter RAGFlow, which handles chunking/parsing, embeddings and metadata. Elasticsearch indexes and serves vector, lexical and hybrid search. The application layer combines LangChain, LangGraph, deterministic rules and the LLM to produce a traceable answer. PostgreSQL complements the RAG layer by storing structured data and information that should not depend on semantic retrieval. The architecture is prepared for a future deployment on GCP.",
      },
      {
        heading: "Example domain",
        body: "The demo scenario simulates a corporate knowledge base for healthcare support — appointment rescheduling, required documents, preparation guidance, administrative information and patient service procedures. The project uses only synthetic or illustrative information and is not intended for real clinical decisions.",
      },
      {
        heading: "Main takeaway",
        body: "The quality of a RAG solution depends heavily on retrieval quality. A powerful LLM cannot reliably compensate for poorly structured documents, inadequate chunking, weak embeddings or an incorrect retrieval ranking. That is why the project treats retrieval testing as a core engineering activity, not just an evaluation of the final answer.",
      },
      {
        heading: "Current state and next steps",
        body: "A learning and portfolio project, under active development.",
        list: [
          "In progress: local infrastructure with RAGFlow, retrieval with Elasticsearch, document chunking, embedding similarity and retrieval validation.",
          "Next iterations: application orchestration, observability, evaluation, deterministic workflows, governance and cloud deployment.",
        ],
      },
    ],
    screenshotsHeading: "Visual evidence",
    screenshots: [
      {
        src: "/assets/projects/rag-avancado-ragflow/ss-1-retrieval-testing",
        alt: "RAGFlow 'Retrieval testing' screen: a settings panel with similarity threshold 0.2 and vector similarity weight 0.30 / lexical 0.70, the question 'como faço para remarcar minha consulta?' and four retrieved chunks with hybrid, term and vector similarity scores.",
        caption:
          "Retrieval testing in RAGFlow: the effect of vector similarity weight and threshold on the ranking of retrieved chunks (captured during the study).",
      },
    ],
  },
  "skill-astramax": {
    eyebrow: "// testing",
    title: "AstraMax Skill",
    lead: "AstraMax Reviewer is an Agent Skill that adds an independent second-model review stage to AI-assisted software development.",
    sections: [
      {
        heading: "Why it exists",
        body: "An implementation agent has already formed assumptions about requirements, architecture and tests. A second model, in a fresh context, can challenge those assumptions and provide another opportunity to find defects. Independence does not guarantee correctness; the value is in evidence and reproducible findings.",
      },
      {
        heading: "How it works",
        body: "The reference workflow uses Claude Code to implement and OpenAI Codex with GPT-6 Astra, at the maximum supported reasoning effort, to verify and discover defects. The implementing agent hands requirements and evidence to a separate reviewer context, which inspects the repository and challenges the implementation using a repeatable protocol. The skill is instructions and references, with an optional Python helper to assemble the handoff dossier — it does not call an API, select the model by itself, configure agent tools, run in the background or install hooks.",
      },
      {
        heading: "Review workflow",
        list: [
          "Establish scope: working tree, staged changes, an explicit commit range, or selected components / the whole repository. Read requirements and constraints.",
          "Inspect changed code together with callers, contracts, configuration and tests.",
          "Challenge correctness, regressions, test coverage, architecture, security, data integrity and unnecessary complexity.",
          "Discover the target project's verification commands and run them within the user's authorization.",
          "Report findings by severity, verification gaps and one verdict: PASS, PASS WITH MINOR FINDINGS, CHANGES RECOMMENDED, CHANGES REQUIRED or UNABLE TO VERIFY.",
        ],
      },
      {
        heading: "Scope and limits",
        body: "Review-only by default. Findings do not authorize implementation edits, commits, pushes, publication or report deletion. If the model, the reasoning effort or the independent context cannot be confirmed, the result is UNABLE TO VERIFY — preparing a dossier does not count as an Astra review.",
      },
      {
        heading: "Current state",
        body: "Version 0.1.0 in local development, not yet published. External model availability, Agent Skills validation and GitHub / SkillPM installation have not been verified. It is an independent community project, not affiliated with OpenAI or Anthropic.",
      },
    ],
    screenshotsHeading: "Visual evidence",
    screenshots: [
      {
        src: "/assets/projects/skill-astramax/ss-1-claude-codex",
        alt: "An editor with two side-by-side terminals: on the left, Claude Code recording the re-assessment of findings in REVISAO.md; on the right, Codex running gpt-6-astra at xhigh effort, listing blocking items from the independent review.",
        caption:
          "Claude Code (implementation) and Codex with GPT-6 Astra (independent review) side by side, exchanging findings via REVISAO.md.",
      },
    ],
  },
  "engenharia-dados-gcp": {
    eyebrow: "// in development",
    title: "Data Engineering on GCP",
    lead: "An MVP that builds, end to end, a data flow over a synthetic omnichannel retail marketplace: from a transactional PostgreSQL database to a dimensional datamart with governance, consumption views and documentation.",
    sections: [
      {
        heading: "What it is",
        body: "Reference data engineering and governance. The project runs first on local infrastructure and, once mature, is replicated on Google Cloud Platform with Terraform, preserving the same practices. All data is synthetic — no real personal data is used in any phase.",
      },
      {
        heading: "Data flow",
        list: [
          "Batch, orchestrated by Airflow: Faker → PostgreSQL → Airbyte → dbt → datamart → consumption.",
          "Inventory streaming: Debezium → Redpanda → Apache Beam.",
          "Second source: defective legacy → snapshot → cleanup → quarantine.",
        ],
      },
      {
        heading: "Phases",
        list: [
          "Local (pre-GCP): two transactional sources, deterministic data generation, ingestion, layered transformation, a dimensional datamart, a continuous flow restricted to inventory, governance and tests — all reproducible from the repository.",
          "GCP: replicating the flow with Cloud SQL, BigQuery, Datastream, Pub/Sub and Dataflow, provisioned by Terraform, with the same governance materialized as policy tags.",
        ],
      },
      {
        heading: "Architecture decisions",
        body: "43 accepted ADRs. Among the choices that most define the project: an omnichannel retail domain; Airbyte, dbt and Airflow from the local phase; Terraform as infrastructure as code; config-driven Faker generation in YAML; inventory streaming with Debezium over Kafka Connect, Redpanda and Apache Beam; catalog as code; nine schemas in the warehouse, with the governance schema restricted to control and audit; SQLAlchemy and Alembic; four classification levels and five access roles; src/ as an installable Python package; hash surrogate keys and SCD type 2 by snapshot; volume by proportions and a scale factor, with high volume reserved for the GCP phase; uv and Python 3.11.",
      },
      {
        heading: "Current state",
        body: "Milestones delivered: charter approved (M0), decisions in ADRs (M1), the environment coming up from zero with one command (M2), the full source → consumption flow in operation (M3) and streaming in operation with batch intact (M4). Stage 10 in progress; the legacy source was reopened for review and the warehouse is still being reconciled with the latest version of the transformation.",
        list: [
          "Six vertical slices delivered: commercial; financial and inventory; the hot path; delivery and logistics; relationship; and the legacy source.",
          "Dimensional model complete: 10 facts and 15 dimensions, and the 16 business questions each have a view with contract: enforced.",
          "Warehouse with 36 batch ingestion flows from the main source, the CDC of inventory_movements and 40 from the legacy source; dbt build passes with 851 objects, WARN=0 and ERROR=0.",
          "The second source goes from capture to the dimensional model: 12,747 occurrences captured — 81.9% accepted, 17.9% rejected to quarantine with a reason and 0.2% corrected.",
          "Provenance travels along: source_system is a column in every stacked table and enters the surrogate key of the dimensions.",
          "The fluxo_batch DAG runs ten tasks end to end in 5 min 20 s, with the two captures in parallel.",
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
