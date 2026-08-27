import { career, education, sections } from "@/content/pt";

export function Career() {
  const copy = sections.career;

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
            return (
              <div className="node" key={item.organization}>
                <span className="node-dot" aria-hidden="true" />
                <article
                  className="career-card"
                  tabIndex={0}
                  aria-describedby={tipId}
                >
                  <span className="seq">{`#0${index + 1}`}</span>
                  <h3>{item.organization}</h3>
                  <span className="career-dur">{item.duration}</span>
                  <p>{item.context}</p>
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
