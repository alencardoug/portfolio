import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import { Fragment } from "react";
import type { JourneyPart, SiteContent } from "@/content/types";
import { localePrefix } from "@/content";
import { GithubMark } from "@/components/BrandIcons";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SingularityDemo } from "./SingularityDemo";

type Props = {
  content: SiteContent;
  /** Slug do projeto (chave em `projects` e `journeyCases`). */
  slug: string;
  /** Caminho canônico PT desta página (ex.: "/projects/linkedia"). */
  ptPath: string;
};

function Part({ part }: { part: JourneyPart }) {
  return (
    <div className="story-part">
      <p className="story-part-text">
        <b>{part.label}</b> {part.text}
      </p>
      <figure className="story-shot">
        <a href={`${part.shot.src}.jpg`} target="_blank" rel="noreferrer noopener">
          <picture>
            <source srcSet={`${part.shot.src}.webp`} type="image/webp" />
            <img
              src={`${part.shot.src}.jpg`}
              width={part.shot.width}
              height={part.shot.height}
              alt={part.shot.alt}
              loading="lazy"
            />
          </picture>
        </a>
        <figcaption>{part.shot.caption}</figcaption>
      </figure>
      {part.link && (
        <a className="text-link journey-link" href={part.link.href} target="_blank" rel="noreferrer noopener">
          {part.link.label}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

/**
 * Estudo de caso de jornada: por que o projeto existe, o que cada leitura
 * vira, o motor com as pausas humanas, a capa rodando ao vivo e os limites.
 * Reaproveita o vocabulário visual do CaseStory (classes `story-*`); só a capa
 * ao vivo precisa de JavaScript, e sem ele fica a capa em HTML.
 */
export function CaseJourney({ content, slug, ptPath }: Props) {
  const { ui } = content;
  const prefix = localePrefix(content.locale);
  const project = content.projects.find((item) => item.slug === slug);
  const jc = content.journeyCases[slug];

  if (!project || !jc) return null;

  const { uses, engine, cover, limits } = jc;

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skipLink}
      </a>
      <Header content={content} ptPath={ptPath} />
      <main id="conteudo" className="case-page story journey">
        <div className="container case-container">
          <a href={`${prefix}/#projetos`} className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            {ui.caseChrome.back}
          </a>

          <p className="case-eyebrow">{jc.eyebrow}</p>
          <h1>{project.title}</h1>
          <div className="story-meta">
            <span className={`status status-${project.status}`}>
              {project.status === "production" && <span className="pulse" aria-hidden="true" />}
              {project.statusLabel ?? ui.projectCard.status[project.status]}
            </span>
            <span className="story-reading">{jc.readingTime}</span>
          </div>

          <figure className="story-quote">
            <blockquote>
              <p>{jc.quote.text}</p>
            </blockquote>
            <figcaption>{jc.quote.source}</figcaption>
          </figure>

          <p className="case-lead">{jc.lead}</p>

          <p className="case-note">
            <b>{jc.note.label}</b> {jc.note.text}
          </p>

          <section aria-labelledby="journey-uses">
            <h2 id="journey-uses">{uses.heading}</h2>
            <p className="case-kh">{uses.kh}</p>
            <p>{uses.intro}</p>

            <ul className="story-contenders journey-cards">
              {uses.cards.map((card) => (
                <li key={card.verb} className="story-card">
                  <span className="story-role">{card.verb}</span>
                  <h3>{card.resource}</h3>
                  <p>{card.text}</p>
                  <p className="journey-from">{card.from}</p>
                </li>
              ))}
            </ul>

            {uses.parts.map((part) => (
              <Part part={part} key={part.label} />
            ))}

            <p className="story-takeaway">{uses.takeaway}</p>
          </section>

          <section aria-labelledby="journey-engine">
            <h2 id="journey-engine">{engine.heading}</h2>
            <p className="case-kh">{engine.kh}</p>
            {/* chips e setas como irmãos: sem invólucro, cada chip tem uma borda só */}
            <div className="case-flow">
              {engine.funnel.map((step, index) => (
                <Fragment key={step}>
                  <span className={index === engine.funnel.length - 1 ? "edge" : undefined}>{step}</span>
                  {index < engine.funnel.length - 1 && <i aria-hidden="true">→</i>}
                </Fragment>
              ))}
            </div>
            <ol className="story-steps">
              {engine.steps.map((step) => (
                <li key={step.command}>
                  <span>
                    <code className="journey-command">{step.command}</code> {step.text}
                  </span>
                </li>
              ))}
            </ol>

            {engine.parts.map((part) => (
              <Part part={part} key={part.label} />
            ))}

            <p>{engine.body}</p>
          </section>

          <section aria-labelledby="journey-cover">
            <h2 id="journey-cover">{cover.heading}</h2>
            <p className="case-kh">{cover.kh}</p>
            {cover.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <SingularityDemo cover={cover.live} />

            <p>{cover.after}</p>
            <Part part={cover.part} />
          </section>

          <section aria-labelledby="journey-limits">
            <h2 id="journey-limits">{limits.heading}</h2>
            <p className="case-kh">{limits.kh}</p>
            <p>{limits.body}</p>
            <ul>
              {limits.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <details className="story-specs">
              <summary>{limits.specs.summary}</summary>
              <dl>
                {limits.specs.items.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </section>

          <section>
            <div className="case-actions">
              {project.appUrl && (
                <a className="button primary" href={project.appUrl} target="_blank" rel="noreferrer noopener">
                  {ui.projectCard.openApp}
                  <Globe size={16} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                  <GithubMark size={16} />
                  {jc.githubLabel}
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
