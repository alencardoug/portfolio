import { Check } from "lucide-react";
import type { SiteContent } from "@/content/types";

export function Capabilities({ content }: { content: SiteContent }) {
  const { capabilities, ui } = content;
  const copy = content.sections.capabilities;

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
                  aria-label={ui.capabilities.markAria}
                >
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
              </div>
              <p>{capability.description}</p>
              <div
                className="tag-list"
                aria-label={ui.capabilities.techAriaTemplate.replace(
                  "{title}",
                  capability.title,
                )}
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
