export type OptionalUrl = string | null;

export type Locale = "pt" | "en";

export type ExternalLinks = {
  github: OptionalUrl;
  linkedin: OptionalUrl;
  cv: OptionalUrl;
  youtubeIntro: OptionalUrl;
  calendly: OptionalUrl;
  email: string | null;
  whatsappUrl: OptionalUrl;
};

export type Profile = {
  name: string;
  role: string;
  eyebrow: string;
  /** Marcador técnico exibido no tema escuro (estilo terminal). */
  marker: string;
  headline: string;
  summary: string;
  /** Linha de empresas exibida no hero (tema escuro). */
  companiesRun: string;
};

export type CareerItem = {
  organization: string;
  duration: string;
  context: string;
  /** Detalhe de cargo exibido como tooltip ao passar o mouse / focar o card. */
  roleDetail: string;
};

export type SectionCopy = {
  eyebrow: string;
  heading: string;
  sub: string;
};

export type HeroSpecItem = {
  key: string;
  value: string;
};

export type Capability = {
  title: string;
  description: string;
  evidence: string[];
};

/** Estudo de caso "rico" (Plataforma de Atendimento com IA). */
export type CaseStudy = {
  eyebrow: string;
  /** Rótulo em negrito da nota de disclaimer. */
  disclaimerLabel: string;
  disclaimer: string;
  /** Natureza do projeto (autoria, ferramentas, método). */
  nature: string;
  /** Ciclo canônico de desenvolvimento, em passos. */
  flow: string[];
  /** Números informados pelo repositório (revalidar antes do lançamento). */
  evidence: Array<{ label: string; value: string }>;
  /** Blocos de stack: rótulo + descrição. */
  stack: Array<{ label: string; text: string }>;
  /** Próximos passos do projeto. */
  nextSteps: string[];
  /** Capturas de tela reais da aplicação. */
  screenshots?: Array<{ src: string; alt: string; caption: string }>;
  /** Diagramas de arquitetura (SVG por tema) + notas + alt text. */
  architecture?: {
    notes: string[];
    appAlt: string;
    deployAlt: string;
  };
  /** Árvore de decisão da geração da resposta: diagrama (SVG por tema) + notas. */
  decisionTree?: {
    kh: string;
    alt: string;
    notes: string[];
  };
  /** Evidências visuais ainda não disponíveis (renderizadas como slots). */
  pending: string[];
  /** Títulos de seção da página. */
  headings: {
    nature: string;
    evidence: string;
    archDecision: string;
    architecture: string;
    stack: string;
    state: string;
    decisionTree: string;
    visualEvidence: string;
  };
  /** Marcadores "// …" (kh) da página. */
  kh: {
    nature: string;
    evidence: string;
    fineprint: string;
    archDecision: string;
    archApp: string;
    archDeploy: string;
    stack: string;
    state: string;
    visualEvidence: string;
    pending: string;
  };
  /** Parágrafo da "Decisão arquitetural" (com um trecho em negrito). */
  archDecisionBody: { pre: string; strong: string; post: string };
  /** Parágrafo de "Estado atual e próximos passos". */
  stateBody: string;
};

/** Estudo de caso "simples" (GCP, portfólio) — só prosa. */
export type SimpleCaseSection = {
  heading: string;
  body?: string;
  list?: string[];
};

export type SimpleCase = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: SimpleCaseSection[];
  /** Capturas de tela reais (galeria opcional ao fim do estudo de caso). */
  screenshots?: Array<{ src: string; alt: string; caption: string }>;
  /** Título da seção de evidência visual (obrigatório se houver screenshots). */
  screenshotsHeading?: string;
};

/** Captura de tela com dimensões reais (evita salto de layout). `src` sem extensão: .webp + .jpg. */
export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/** Um concorrente da decisão, com as duas medidas que pesaram na escolha. */
export type StoryContender = {
  name: string;
  /** Posição no placar em cada perfil de peso, na ordem de `decision.rankLabels`. */
  ranks: string[];
  /** Selo do cartão ("Recomendação do LLM", "Minha escolha"). */
  role: string;
  chosen?: boolean;
  risk: { n: number; total: number };
  unresolved: { n: number; total: number };
};

/**
 * Estudo de caso narrativo (Voz do cliente): abertura humana, decisão em
 * cartões, método curto com uma evidência conferível, o que foi construído e
 * os limites. Cinco blocos, pensados para leitura rápida.
 */
export type StoryCase = {
  eyebrow: string;
  readingTime: string;
  quote: { text: string; source: string };
  lead: string;
  note: { label: string; text: string };
  /** Modelo de contagem nos cartões: "{n} de {total}". */
  countTemplate: string;
  decision: {
    heading: string;
    kh: string;
    intro: string;
    /** Rótulos dos perfis de peso do placar ("Pesos iguais", "Risco em dobro"). */
    rankLabels: string[];
    measures: { risk: string; unresolved: string };
    contenders: StoryContender[];
    takeaway: string;
    later: string;
    fronts: { heading: string; items: string[] };
  };
  verify: {
    heading: string;
    kh: string;
    funnel: string[];
    steps: string[];
    body: string;
    link: { label: string; href: string };
  };
  built: {
    heading: string;
    kh: string;
    body: string;
    parts: Array<{ label: string; text: string; shot: Screenshot }>;
    runNote: string;
    specs: { summary: string; items: Array<{ label: string; text: string }> };
  };
  validate: { heading: string; kh: string; body: string; list: string[] };
};

/** Uma parte do que foi construído: texto curto + captura de tela. */
export type JourneyPart = {
  label: string;
  text: string;
  shot: Screenshot;
  /** Link opcional para conferir a evidência no ar. */
  link?: { label: string; href: string };
};

/**
 * Capa interativa rodando dentro do estudo de caso (Linkedia): o texto da
 * capa em HTML (o que a arte curva) e as dicas de uso, por estado.
 */
export type LiveCover = {
  caption: string;
  kicker: string;
  edition: { label: string; date: string };
  headlines: string[];
  more: string;
  /** Link real para a capa no ar, logo abaixo do quadrado. */
  link: { label: string; href: string };
  /** Rótulo acessível da área clicável ("atravessar o horizonte de eventos"). */
  hitLabel: string;
  hints: { loading: string; live: string; liveTouch: string; still: string; paused: string; fallback: string };
};

/**
 * Estudo de caso de jornada (Linkedia): abertura humana, o que cada leitura
 * vira, o motor com as pausas humanas, a capa ao vivo e os limites.
 */
export type JourneyCase = {
  /** Rótulo do botão do GitHub (o link pode ser um quadro do GitHub Projects, não código). */
  githubLabel: string;
  eyebrow: string;
  readingTime: string;
  quote: { text: string; source: string };
  lead: string;
  note: { label: string; text: string };
  uses: {
    heading: string;
    kh: string;
    intro: string;
    cards: Array<{ verb: string; resource: string; text: string; from: string }>;
    parts: JourneyPart[];
    takeaway: string;
  };
  engine: {
    heading: string;
    kh: string;
    funnel: string[];
    steps: Array<{ command: string; text: string }>;
    parts: JourneyPart[];
    body: string;
  };
  cover: {
    heading: string;
    kh: string;
    body: string[];
    live: LiveCover;
    after: string;
    part: JourneyPart;
  };
  limits: {
    heading: string;
    kh: string;
    body: string;
    list: string[];
    specs: { summary: string; items: Array<{ label: string; text: string }> };
  };
};

export type ProjectStatus = "production" | "development" | "case-study";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  /** Rótulo de status sobrescrito; se ausente, usa `ui.projectCard.status[status]`. */
  statusLabel?: string;
  description: string;
  technologies: string[];
  appUrl: OptionalUrl;
  githubUrl: OptionalUrl;
  caseStudyUrl: OptionalUrl;
  featured?: boolean;
  metrics?: Array<{ label: string; value: string }>;
};

/** Strings de interface (chrome) — o que não é conteúdo editorial de seção. */
export type Ui = {
  htmlLang: string;
  skipLink: string;
  nav: { career: string; capabilities: string; projects: string; brandAria: string; navAria: string };
  langSwitch: { label: string; aria: string };
  theme: {
    toLight: string;
    toDark: string;
    hintTemplate: string;
    activateTemplate: string;
    /** Balão exibido uma única vez sugerindo experimentar o outro modo. */
    nudgeTemplate: string;
  };
  hero: {
    seeProjects: string;
    watchVideo: string;
    downloadCv: string;
    specAria: string;
    portraitLightAlt: string;
    portraitDarkAlt: string;
  };
  capabilities: { markAria: string; techAriaTemplate: string };
  projectCard: {
    status: Record<ProjectStatus, string>;
    openApp: string;
    github: string;
    caseStudy: string;
  };
  footer: { navAria: string; cvLabel: string; email: string; tagline: string };
  contactDock: {
    ariaLabel: string;
    trigger: string;
    openTrigger: string;
    closeTrigger: string;
    scheduleLabel: string;
    scheduleDesc: string;
    emailLabel: string;
    emailDesc: string;
    whatsappLabel: string;
    whatsappDesc: string;
    emailSubject: string;
    emailBody: string;
  };
  notFound: {
    metaTitle: string;
    eyebrow: string;
    title: string;
    lead: string;
    goHome: string;
  };
  caseChrome: {
    back: string;
    openFullscreen: string;
    openDiagramFullscreen: string;
    otherProjects: string;
    codeOnGithub: string;
    pendingSlot: string;
  };
  meta: {
    title: string;
    description: string;
    ogSiteName: string;
    ogImageAlt: string;
  };
};

export type SiteContent = {
  locale: Locale;
  ui: Ui;
  profile: Profile;
  links: ExternalLinks;
  heroSpec: HeroSpecItem[];
  sections: Record<"career" | "capabilities" | "projects", SectionCopy>;
  career: CareerItem[];
  education: string[];
  capabilities: Capability[];
  projects: Project[];
  caseStudies: Partial<Record<string, CaseStudy>>;
  simpleCases: Partial<Record<string, SimpleCase>>;
  storyCases: Partial<Record<string, StoryCase>>;
  journeyCases: Partial<Record<string, JourneyCase>>;
};
