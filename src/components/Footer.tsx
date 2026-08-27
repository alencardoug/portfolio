import { links, profile } from "@/content/pt";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>{profile.role}</p>
        </div>

        <nav aria-label="Links profissionais">
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          )}
          {links.cv && <a href={links.cv}>CV</a>}
          {links.email && <a href={`mailto:${links.email}`}>E-mail</a>}
        </nav>
      </div>
    </footer>
  );
}
