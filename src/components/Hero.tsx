import { ArrowDown, FileText, Play } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { ExternalLink } from "./ExternalLink";

export function Hero({ content }: { content: SiteContent }) {
  const { profile, heroSpec, links, ui } = content;
  const cvName = links.cv?.split("/").pop() || "cv.pdf";

  return (
    <section id="quem-sou" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.eyebrow}</p>
          <p className="hero-marker">{profile.marker}</p>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-run">{profile.companiesRun}</p>

          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="cta-row">
            {links.youtubeIntro && (
              <ExternalLink href={links.youtubeIntro} className="button secondary">
                <Play size={17} aria-hidden="true" />
                {ui.hero.watchVideo}
              </ExternalLink>
            )}

            <a className="button primary" href="#projetos">
              {ui.hero.seeProjects} <ArrowDown size={17} aria-hidden="true" />
            </a>

            {links.cv && (
              <a
                className="button secondary"
                href={links.cv}
                type="application/pdf"
                download={cvName}
              >
                <FileText size={17} aria-hidden="true" />
                {ui.hero.downloadCv}
              </a>
            )}
          </div>
        </div>

        <div className="hero-media">
          <div className="portrait portrait-light">
            <picture>
              <source
                srcSet="/assets/portrait/doug-corp.webp"
                type="image/webp"
              />
              <img
                src="/assets/portrait/doug-corp.jpg"
                width={760}
                height={950}
                alt={ui.hero.portraitLightAlt}
                loading="eager"
              />
            </picture>
          </div>

          <div className="portrait portrait-dark">
            <span className="tick tl" aria-hidden="true" />
            <span className="tick br" aria-hidden="true" />
            <picture>
              <source
                srcSet="/assets/portrait/doug-verde.webp"
                type="image/webp"
              />
              <img
                src="/assets/portrait/doug-verde.jpg"
                width={720}
                height={720}
                alt={ui.hero.portraitDarkAlt}
                loading="eager"
              />
            </picture>
          </div>

          <div className="hero-spec" aria-label={ui.hero.specAria}>
            {heroSpec.map((item) => (
              <div className="spec-row" key={item.key}>
                <span>{item.key}</span>
                <b>{item.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
