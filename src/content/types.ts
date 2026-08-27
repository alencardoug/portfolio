export type OptionalUrl = string | null;

export type ExternalLinks = {
  github: OptionalUrl;
  linkedin: OptionalUrl;
  cv: OptionalUrl;
  youtubeIntro: OptionalUrl;
  calendly: OptionalUrl;
  email: string | null;
  whatsappUrl: OptionalUrl;
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

export type CaseStudy = {
  /** Aviso de sistema fictício / dados simulados. */
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
  /** Diagramas de arquitetura (SVG por tema) + notas. */
  architecture?: {
    notes: string[];
  };
  /** Árvore de decisão da geração da resposta: diagrama (SVG por tema) + notas. */
  decisionTree?: {
    kh: string;
    notes: string[];
  };
  /** Evidências visuais ainda não disponíveis (renderizadas como slots). */
  pending: string[];
};

export type ProjectStatus = "production" | "development" | "case-study";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  appUrl: OptionalUrl;
  githubUrl: OptionalUrl;
  caseStudyUrl: OptionalUrl;
  featured?: boolean;
  metrics?: Array<{ label: string; value: string }>;
};
