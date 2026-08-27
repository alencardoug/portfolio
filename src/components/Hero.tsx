import { ArrowDown, FileText, Play } from "lucide-react";
import { heroSpec, links, profile } from "@/content/pt";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section id="quem-sou" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.eyebrow}</p>
          <p className="hero-marker">{profile.marker}</p>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-run">
            A.C.Camargo Cancer Center / AB InBev / Shell + UFRJ
          </p>

          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="cta-row">
            {links.youtubeIntro && (
              <ExternalLink href={links.youtubeIntro} className="button secondary">
                <Play size={17} aria-hidden="true" />
                Vídeo de 1 minuto
              </ExternalLink>
            )}

            <a className="button primary" href="#projetos">
              Ver projetos <ArrowDown size={17} aria-hidden="true" />
            </a>

            {links.cv && (
              <a
                className="button secondary"
                href={links.cv}
                type="application/pdf"
                download="douglas-alencar-cv.pdf"
              >
                <FileText size={17} aria-hidden="true" />
                Baixar CV (PDF)
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
                alt="Douglas Alencar, retrato profissional"
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
                alt="Douglas Alencar, retrato com fundo verde"
                loading="eager"
              />
            </picture>
          </div>

          <div className="hero-spec" aria-label="Resumo profissional">
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
