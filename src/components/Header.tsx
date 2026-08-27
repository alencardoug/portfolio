import type { SiteContent } from "@/content/types";
import { localePrefix, localizedPath, otherLocale } from "@/content";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  content: SiteContent;
  /** Caminho canônico PT da página atual (ex.: "/", "/projects/portfolio"). */
  ptPath: string;
};

export function Header({ content, ptPath }: Props) {
  const { ui, profile, links, locale } = content;
  const prefix = localePrefix(locale);
  const other = otherLocale(locale);
  const switchHref = localizedPath(ptPath, other);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={`${prefix}/`} aria-label={ui.nav.brandAria}>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </a>

        <nav className="desktop-nav" aria-label={ui.nav.navAria}>
          <a href={`${prefix}/#trajetoria`}>{ui.nav.career}</a>
          <a href={`${prefix}/#capacidades`}>{ui.nav.capabilities}</a>
          <a href={`${prefix}/#projetos`}>{ui.nav.projects}</a>
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
          <a
            className="lang-switch"
            href={switchHref}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            aria-label={ui.langSwitch.aria}
          >
            {ui.langSwitch.label}
          </a>
          <ThemeToggle labels={ui.theme} />
        </div>
      </div>
    </header>
  );
}
