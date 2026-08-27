import type { SiteContent } from "@/content/types";

export function Footer({ content }: { content: SiteContent }) {
  const { links, profile, ui } = content;
  const cvName = links.cv?.split("/").pop() || "cv.pdf";

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>{ui.footer.tagline}</p>
        </div>

        <nav aria-label={ui.footer.navAria}>
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
          {links.cv && (
            <a href={links.cv} type="application/pdf" download={cvName}>
              {ui.footer.cvLabel}
            </a>
          )}
          {links.email && <a href={`mailto:${links.email}`}>{ui.footer.email}</a>}
        </nav>
      </div>
    </footer>
  );
}
