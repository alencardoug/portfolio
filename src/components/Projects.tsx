import type { SiteContent } from "@/content/types";
import { ProjectCard } from "./ProjectCard";

export function Projects({ content }: { content: SiteContent }) {
  const { projects, ui } = content;
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const copy = content.sections.projects;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p className="sub">{copy.sub}</p>
        </div>

        {featured && <ProjectCard project={featured} ui={ui} />}

        <div className="secondary-project-grid">
          {others.map((project) => (
            <ProjectCard project={project} ui={ui} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
