import { ArrowRight, Globe } from "lucide-react";
import type { Project, Ui } from "@/content/types";
import { GithubMark } from "./BrandIcons";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project, ui }: { project: Project; ui: Ui }) {
  // No card em destaque, as ações são botões grandes (CTA); nos demais, links.
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-topline">
        <span className={`status status-${project.status}`}>
          {project.status === "production" && (
            <span className="pulse" aria-hidden="true" />
          )}
          {ui.projectCard.status[project.status]}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {project.metrics && (
        <dl className="metric-grid">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="project-actions">
        {project.appUrl && (
          <ExternalLink
            href={project.appUrl}
            className={project.featured ? "button primary" : "text-link"}
          >
            <Globe size={project.featured ? 19 : 16} aria-hidden="true" />
            {ui.projectCard.openApp}
          </ExternalLink>
        )}

        {project.githubUrl && (
          <ExternalLink
            href={project.githubUrl}
            className={project.featured ? "button secondary" : "text-link"}
          >
            <GithubMark size={project.featured ? 19 : 16} />
            {ui.projectCard.github}
          </ExternalLink>
        )}

        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            className={project.featured ? "button secondary" : "text-link"}
          >
            {ui.projectCard.caseStudy}
            <ArrowRight size={project.featured ? 19 : 16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
