import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { localePrefix } from "@/content";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { Header } from "@/components/Header";

type Props = {
  content: SiteContent;
  slug: string;
  /** Caminho canônico PT desta página (ex.: "/projects/portfolio"). */
  ptPath: string;
};

export function CaseSimple({ content, slug, ptPath }: Props) {
  const { ui } = content;
  const prefix = localePrefix(content.locale);
  const project = content.projects.find((item) => item.slug === slug);
  const sc = content.simpleCases[slug];

  if (!project || !sc) return null;

  const hasActions = Boolean(project.githubUrl || project.appUrl);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skipLink}
      </a>
      <Header content={content} ptPath={ptPath} />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <a href={`${prefix}/#projetos`} className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            {ui.caseChrome.back}
          </a>

          <p className="case-eyebrow">{sc.eyebrow}</p>
          <h1>{sc.title}</h1>
          {project.status === "production" && (
            <span className="status status-production">
              <span className="pulse" aria-hidden="true" />
              {ui.projectCard.status.production}
            </span>
          )}
          <p className="case-lead">{sc.lead}</p>

          {sc.sections.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              {block.body && <p>{block.body}</p>}
              {block.list && (
                <ul>
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {hasActions && (
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
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="button primary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GithubMark size={16} />
                    {ui.caseChrome.codeOnGithub}
                  </a>
                )}
                <a className="button secondary" href={`${prefix}/#projetos`}>
                  {ui.caseChrome.otherProjects}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer content={content} />
      <ContactDock links={content.links} labels={ui.contactDock} />
    </>
  );
}
