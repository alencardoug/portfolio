import { projects, sections } from "@/content/pt";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const copy = sections.projects;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p className="sub">{copy.sub}</p>
        </div>

        {featured && <ProjectCard project={featured} />}

        <div className="secondary-project-grid">
          {others.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
