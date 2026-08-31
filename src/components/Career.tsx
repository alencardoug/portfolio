"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";

export function Career({ content }: { content: SiteContent }) {
  const { career, education } = content;
  const copy = content.sections.career;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="trajetoria" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p className="sub">{copy.sub}</p>
        </div>

        <div className="path">
          {career.map((item, index) => {
            const tipId = `career-role-${index}`;
            const nameId = `career-org-${index}`;
            const ctxId = `career-context-${index}`;
            const isActive = activeIndex === index;
            const toggle = () =>
              setActiveIndex((current) => (current === index ? null : index));
            return (
              <div className="node" key={item.organization}>
                <span className="node-dot" aria-hidden="true" />
                <article
                  className={isActive ? "career-card is-active" : "career-card"}
                  tabIndex={0}
                  role="button"
                  aria-labelledby={nameId}
                  aria-describedby={`${ctxId} ${tipId}`}
                  aria-expanded={isActive}
                  onClick={toggle}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggle();
                    }
                  }}
                >
                  <span className="seq">{`#0${index + 1}`}</span>
                  <h3 id={nameId}>{item.organization}</h3>
                  <span className="career-dur">{item.duration}</span>
                  <p id={ctxId}>{item.context}</p>
                  <span className="tip" id={tipId}>
                    {item.roleDetail}
                  </span>
                </article>
              </div>
            );
          })}
        </div>

        <div className="education-strip">
          {education.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
