import { ArrowLeft, ArrowRight, Globe, Maximize2, Network } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { localePrefix } from "@/content";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { Header } from "@/components/Header";

const PT_PATH = "/projects/plataforma-atendimento-ia";
const ASSET = "/assets/projects/plataforma-atendimento";
const DIAGRAM = `${ASSET}/arvore-decisao`;
const ARCH_APP = `${ASSET}/arquitetura-app`;
const ARCH_DEPLOY = `${ASSET}/arquitetura-deploy`;
const slotIcons = [Network];

export function CasePlataforma({ content }: { content: SiteContent }) {
  const { ui } = content;
  const prefix = localePrefix(content.locale);
  const project = content.projects.find(
    (item) => item.slug === "plataforma-atendimento-ia",
  );
  const cs = content.caseStudies["plataforma-atendimento-ia"];

  if (!project || !cs) return null;

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skipLink}
      </a>
      <Header content={content} ptPath={PT_PATH} />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <a href={`${prefix}/#projetos`} className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            {ui.caseChrome.back}
          </a>

          <p className="case-eyebrow">{cs.eyebrow}</p>
          <h1>{project.title}</h1>
          <span className="status status-production">
            <span className="pulse" aria-hidden="true" />
            {ui.projectCard.status.production}
          </span>
          <p className="case-lead">{project.description}</p>

          <p className="case-note">
            <b>{cs.disclaimerLabel}</b> {cs.disclaimer}
          </p>

          <section>
            <h2>{cs.headings.nature}</h2>
            <p className="case-kh">{cs.kh.nature}</p>
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
            <h2>{cs.headings.evidence}</h2>
            <p className="case-kh">{cs.kh.evidence}</p>
            <dl className="metric-grid metric-grid--wrap">
              {cs.evidence.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="case-fineprint">{cs.kh.fineprint}</p>
          </section>

          <section>
            <h2>{cs.headings.archDecision}</h2>
            <p className="case-kh">{cs.kh.archDecision}</p>
            <p>
              {cs.archDecisionBody.pre}
              <strong>{cs.archDecisionBody.strong}</strong>
              {cs.archDecisionBody.post}
            </p>
          </section>

          {cs.architecture && (
            <section>
              <h2>{cs.headings.architecture}</h2>

              <p className="case-kh">{cs.kh.archApp}</p>
              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${ARCH_APP}-light.svg`}
                  alt={cs.architecture.appAlt}
                />
                <img
                  className="diagram-dark"
                  src={`${ARCH_APP}-dark.svg`}
                  alt={cs.architecture.appAlt}
                />
              </div>
              <a
                className="text-link"
                href={`${ARCH_APP}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                {ui.caseChrome.openFullscreen}
              </a>

              <p className="case-kh case-kh--gap">{cs.kh.archDeploy}</p>
              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${ARCH_DEPLOY}-light.svg`}
                  alt={cs.architecture.deployAlt}
                />
                <img
                  className="diagram-dark"
                  src={`${ARCH_DEPLOY}-dark.svg`}
                  alt={cs.architecture.deployAlt}
                />
              </div>
              <a
                className="text-link"
                href={`${ARCH_DEPLOY}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                {ui.caseChrome.openFullscreen}
              </a>

              <ul>
                {cs.architecture.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>{cs.headings.stack}</h2>
            <p className="case-kh">{cs.kh.stack}</p>
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
            <h2>{cs.headings.state}</h2>
            <p className="case-kh">{cs.kh.state}</p>
            <p>{cs.stateBody}</p>
            <ul>
              {cs.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          {cs.decisionTree && (
            <section>
              <h2>{cs.headings.decisionTree}</h2>
              <p className="case-kh">{cs.decisionTree.kh}</p>

              <div className="case-diagram">
                <img
                  className="diagram-light"
                  src={`${DIAGRAM}-light.svg`}
                  alt={cs.decisionTree.alt}
                />
                <img
                  className="diagram-dark"
                  src={`${DIAGRAM}-dark.svg`}
                  alt={cs.decisionTree.alt}
                />
              </div>
              <a
                className="text-link"
                href={`${DIAGRAM}-light.svg`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Maximize2 size={15} aria-hidden="true" />
                {ui.caseChrome.openDiagramFullscreen}
              </a>

              <ul>
                {cs.decisionTree.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>{cs.headings.visualEvidence}</h2>
            <p className="case-kh">{cs.kh.visualEvidence}</p>

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
                <p className="case-kh case-kh--gap">{cs.kh.pending}</p>
                <div className="case-slots">
                  {cs.pending.map((label, index) => {
                    const Icon = slotIcons[index] ?? Network;
                    return (
                      <div key={label}>
                        <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                        <b>{label}</b>
                        <span>{ui.caseChrome.pendingSlot}</span>
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
                  {ui.projectCard.openApp}
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
              <a className="button secondary" href={`${prefix}/#projetos`}>
                {ui.caseChrome.otherProjects}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer content={content} />
      <ContactDock links={content.links} labels={ui.contactDock} />
    </>
  );
}
