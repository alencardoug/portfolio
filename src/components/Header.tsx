import { links, profile } from "@/content/pt";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Ir para o início">
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/#trajetoria">Trajetória</a>
          <a href="/#capacidades">Capacidades</a>
          <a href="/#projetos">Projetos</a>
        </nav>

        <div className="header-actions">
          {links.github && (
            <a
              className="icon-button"
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubMark size={18} />
            </a>
          )}
          {links.linkedin && (
            <a
              className="icon-button"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinMark size={18} />
            </a>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
