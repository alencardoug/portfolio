import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Globe, Maximize2, Network } from "lucide-react";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { Header } from "@/components/Header";
import { caseStudies, links, projects } from "@/content/pt";

const PAGE_TITLE = "Plataforma de Atendimento com IA";
const PAGE_DESC =
  "Estudo de caso: RAG, LLM, dados relacionais e vetoriais, workflows de atendimento e níveis de autonomia — arquitetura, processo SDD e evidências de engenharia.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/projects/plataforma-atendimento-ia" },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESC },
  twitter: { title: PAGE_TITLE, description: PAGE_DESC },
};

const slotIcons = [Network];
const ASSET = "/assets/projects/plataforma-atendimento";
const DIAGRAM = `${ASSET}/arvore-decisao`;
const ARCH_APP = `${ASSET}/arquitetura-app`;
const ARCH_DEPLOY = `${ASSET}/arquitetura-deploy`;

export default function PlataformaAtendimentoPage() {
  const project = projects.find(
    (item) => item.slug === "plataforma-atendimento-ia",
  );
  const cs = caseStudies["plataforma-atendimento-ia"];

  if (!project || !cs) return null;

  return (
    <>
      <Header />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <a href="/#projetos" className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar aos projetos
          </a>

          <p className="case-eyebrow">// estudo de caso — 01</p>
          <h1>{project.title}</h1>
          <span className="status status-production">
            <span className="pulse" aria-hidden="true" />
            Em produção
          </span>
          <p className="case-lead">{project.description}</p>

          <p className="case-note">
            <b>Sistema fictício</b>
            {cs.disclaimer}
          </p>

          <section>
            <h2>Natureza do projeto</h2>
            <p className="case-kh">// portfólio · engenharia assistida por IA</p>
            <p>{cs.nature}</p>
            <div className="case-flow">
              {cs.flow.map((step, index) => (
                <span key={step}>
                  <span
                    className={
                      index === 0 || index === cs.flow.length - 1
                        ? "edge"
                        : undefined
                    }
                  >
                    {step}
                  </span>
                  {index < cs.flow.length - 1 && <i aria-hidden="true"> → </i>}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2>Evidências</h2>
            <p className="case-kh">// números informados pelo repositório</p>
            <dl className="metric-grid metric-grid--wrap">
              {cs.evidence.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="case-fineprint">
              // revalidar os números no repositório antes da publicação final do
              portfólio
            </p>
          </section>

          <section>
            <h2>Decisão arquitetural</h2>
            <p className="case-kh">// monólito modular</p>
            <p>
              Arquitetura em <strong>monólito modular, sem microsserviços</strong>
              , por decisão explícita. LangChain e LangGraph também não foram
              utilizados nesta versão, permitindo explorar diretamente a
              integração com o provedor de LLM, a recuperação e a orquestração da
              aplicação.
            </p>
          </section>

          {cs.architecture && (
            <section>
              <h2>Arquitetura</h2>

              <p className="case-kh">
                // aplicação — regra de dependência (domínio ⟶ portas ⟶ adapters)
              </p>
              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${ARCH_APP}-light.svg`}
                  alt="Arquitetura da aplicação: UI web e FastAPI no transporte, serviços de aplicação neutros de canal, domínio e políticas, porta de IA e porta de RAG, adapters (OpenAI / determinístico / pgvector) e PostgreSQL 17 com pgvector."
                />
                <img
                  className="diagram-dark"
                  src={`${ARCH_APP}-dark.svg`}
                  alt="Arquitetura da aplicação: UI web e FastAPI no transporte, serviços de aplicação neutros de canal, domínio e políticas, porta de IA e porta de RAG, adapters (OpenAI / determinístico / pgvector) e PostgreSQL 17 com pgvector."
                />
              </div>
              <a
                className="text-link"
                href={`${ARCH_APP}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                Abrir em tela cheia
              </a>

              <p className="case-kh case-kh--gap">
                // deploy — Firebase Hosting ⟶ Cloud Run ⟶ Neon / OpenAI
              </p>
              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${ARCH_DEPLOY}-light.svg`}
                  alt="Topologia de deploy: navegador para Firebase Hosting (estáticos da SPA e rewrite /api/** na mesma origem), Cloud Run (FastAPI, us-east1, min-instances=0), Neon Postgres 17 com pgvector, API da OpenAI, e Cloud Build, Artifact Registry e Secret Manager em volta."
                />
                <img
                  className="diagram-dark"
                  src={`${ARCH_DEPLOY}-dark.svg`}
                  alt="Topologia de deploy: navegador para Firebase Hosting (estáticos da SPA e rewrite /api/** na mesma origem), Cloud Run (FastAPI, us-east1, min-instances=0), Neon Postgres 17 com pgvector, API da OpenAI, e Cloud Build, Artifact Registry e Secret Manager em volta."
                />
              </div>
              <a
                className="text-link"
                href={`${ARCH_DEPLOY}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                Abrir em tela cheia
              </a>

              <ul>
                {cs.architecture.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>Stack</h2>
            <p className="case-kh">// da engenharia ao deploy</p>
            <div className="case-stack-grid">
              {cs.stack.map((block) => (
                <div key={block.label}>
                  <b>{block.label}</b>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Estado atual e próximos passos</h2>
            <p className="case-kh">
              // produção funcional · refinamento conversacional em aberto
            </p>
            <p>
              Produção funcional e testes funcionais previstos concluídos. O
              refinamento de conteúdo e comportamento conversacional continua
              como etapa posterior.
            </p>
            <ul>
              {cs.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          {cs.decisionTree && (
            <section>
              <h2>Geração da resposta — árvore de decisão</h2>
              <p className="case-kh">{cs.decisionTree.kh}</p>

              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${DIAGRAM}-light.svg`}
                  alt="Árvore de decisão da geração da resposta: retrieve, ramos de agendamento guiado, evidência clínica, ADMIN_QA dinâmico, chamada ao LLM, reranker clínico, persistência da AIGeneration e decisão de autonomia."
                />
                <img
                  className="diagram-dark"
                  src={`${DIAGRAM}-dark.svg`}
                  alt="Árvore de decisão da geração da resposta: retrieve, ramos de agendamento guiado, evidência clínica, ADMIN_QA dinâmico, chamada ao LLM, reranker clínico, persistência da AIGeneration e decisão de autonomia."
                />
              </div>
              <a
                className="text-link"
                href={`${DIAGRAM}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                Abrir o diagrama em tela cheia
              </a>

              <ul>
                {cs.decisionTree.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>Evidências visuais</h2>
            <p className="case-kh">// aplicação em produção — capturas reais</p>

            {cs.screenshots && (
              <div className="case-shots">
                {cs.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    <a
                      href={`${shot.src}.jpg`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <picture>
                        <source srcSet={`${shot.src}.webp`} type="image/webp" />
                        <img
                          src={`${shot.src}.jpg`}
                          width={1200}
                          height={612}
                          alt={shot.alt}
                          loading="lazy"
                        />
                      </picture>
                    </a>
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            {cs.pending.length > 0 && (
              <>
                <p className="case-kh case-kh--gap">
                  // pendente — entram quando o material real existir
                </p>
                <div className="case-slots">
                  {cs.pending.map((label, index) => {
                    const Icon = slotIcons[index] ?? Network;
                    return (
                      <div key={label}>
                        <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                        <b>{label}</b>
                        <span>pendente</span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </section>

          <section>
            <div className="case-actions">
              {project.appUrl && (
                <a
                  className="button primary"
                  href={project.appUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Abrir aplicação
                  <Globe size={16} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  className="button secondary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubMark size={16} />
                  GitHub
                </a>
              )}
              <a className="button secondary" href="/#projetos">
                Ver outros projetos
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
