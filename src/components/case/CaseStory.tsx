import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import { Fragment } from "react";
import type { SiteContent, StoryContender } from "@/content/types";
import { localePrefix } from "@/content";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  content: SiteContent;
  /** Slug do projeto (chave em `projects` e `storyCases`). */
  slug: string;
  /** Caminho canônico PT desta página (ex.: "/projects/analytics-voz-do-cliente"). */
  ptPath: string;
};

type Measure = StoryContender["risk"];

const percent = (m: Measure) => Math.round((100 * m.n) / m.total);

/**
 * Estudo de caso narrativo: abertura humana, decisão em cartões comparáveis,
 * método curto com uma evidência conferível, o que foi construído e os limites.
 * Tudo legível sem JavaScript; a ficha técnica fica recolhida em <details>.
 */
export function CaseStory({ content, slug, ptPath }: Props) {
  const { ui } = content;
  const prefix = localePrefix(content.locale);
  const project = content.projects.find((item) => item.slug === slug);
  const sc = content.storyCases[slug];

  if (!project || !sc) return null;

  const numberFormat = new Intl.NumberFormat(ui.htmlLang);
  const count = (m: Measure) =>
    sc.countTemplate
      .replace("{n}", numberFormat.format(m.n))
      .replace("{total}", numberFormat.format(m.total));

  const { decision, verify, built, validate } = sc;

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skipLink}
      </a>
      <Header content={content} ptPath={ptPath} />
      <main id="conteudo" className="case-page story">
        <div className="container case-container">
          <a href={`${prefix}/#projetos`} className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            {ui.caseChrome.back}
          </a>

          <p className="case-eyebrow">{sc.eyebrow}</p>
          <h1>{project.title}</h1>
          <div className="story-meta">
            <span className="status status-case-study">{sc.statusLabel}</span>
            <span className="story-reading">{sc.readingTime}</span>
          </div>

          <figure className="story-quote">
            <blockquote>
              <p>{sc.quote.text}</p>
            </blockquote>
            <figcaption>{sc.quote.source}</figcaption>
          </figure>

          <p className="case-lead">{sc.lead}</p>

          <p className="case-note">
            <b>{sc.note.label}</b> {sc.note.text}
          </p>

          <section aria-labelledby="story-decision">
            <h2 id="story-decision">{decision.heading}</h2>
            <p className="case-kh">{decision.kh}</p>
            <p>{decision.intro}</p>

            <ul className="story-contenders">
              {decision.contenders.map((item) => (
                <li
                  key={item.name}
                  className={item.chosen ? "story-card is-chosen" : "story-card"}
                >
                  <span className="story-role">{item.role}</span>
                  <h3>{item.name}</h3>
                  <dl className="story-ranks">
                    {decision.rankLabels.map((label, index) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{item.ranks[index]}</dd>
                      </div>
                    ))}
                  </dl>
                  <dl className="story-measures">
                    {(
                      [
                        [decision.measures.risk, item.risk],
                        [decision.measures.unresolved, item.unresolved],
                      ] as const
                    ).map(([label, measure]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>
                          <span className="story-value">
                            <b>{percent(measure)}%</b> {count(measure)}
                          </span>
                          <span className="story-meter" aria-hidden="true">
                            <span style={{ width: `${percent(measure)}%` }} />
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>

            <p className="story-takeaway">{decision.takeaway}</p>
            <p>{decision.later}</p>

            <h3 className="story-subhead">{decision.fronts.heading}</h3>
            <ol className="story-fronts">
              {decision.fronts.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="story-verify">
            <h2 id="story-verify">{verify.heading}</h2>
            <p className="case-kh">{verify.kh}</p>
            {/* chips e setas como irmãos: sem invólucro, cada chip tem uma borda só */}
            <div className="case-flow">
              {verify.funnel.map((step, index) => (
                <Fragment key={step}>
                  <span
                    className={
                      index === verify.funnel.length - 1 ? "edge" : undefined
                    }
                  >
                    {step}
                  </span>
                  {index < verify.funnel.length - 1 && (
                    <i aria-hidden="true">→</i>
                  )}
                </Fragment>
              ))}
            </div>
            <ol className="story-steps">
              {verify.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>{verify.body}</p>
            <a
              className="text-link"
              href={verify.link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {verify.link.label}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </section>

          <section aria-labelledby="story-built">
            <h2 id="story-built">{built.heading}</h2>
            <p className="case-kh">{built.kh}</p>
            <p>{built.body}</p>

            {built.parts.map((part) => (
              <div className="story-part" key={part.label}>
                <p className="story-part-text">
                  <b>{part.label}</b> {part.text}
                </p>
                <figure className="story-shot">
                  <a
                    href={`${part.shot.src}.jpg`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
              </div>
            ))}

            <p>{built.runNote}</p>

            <details className="story-specs">
              <summary>{built.specs.summary}</summary>
              <dl>
                {built.specs.items.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </section>

          <section aria-labelledby="story-validate">
            <h2 id="story-validate">{validate.heading}</h2>
            <p className="case-kh">{validate.kh}</p>
            <p>{validate.body}</p>
            <ul>
              {validate.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
