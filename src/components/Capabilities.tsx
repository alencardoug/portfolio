import { Check } from "lucide-react";
import { capabilities, sections } from "@/content/pt";

export function Capabilities() {
  const copy = sections.capabilities;

  return (
    <section id="capacidades" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p className="sub">{copy.sub}</p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <div className="capability-head">
                <h3>{capability.title}</h3>
                <span
                  className="capability-mark"
                  aria-label="Sei construir e colocar em produção"
                >
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
              </div>
              <p>{capability.description}</p>
              <div
                className="tag-list"
                aria-label={`Tecnologias de ${capability.title}`}
              >
                {capability.evidence.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
