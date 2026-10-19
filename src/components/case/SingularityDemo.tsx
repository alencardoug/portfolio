"use client";

import { useEffect, useRef } from "react";
import type { LiveCover } from "@/content/types";
import { mountSingularity } from "./singularidade/demo";

/**
 * A primeira pré-capa da Linkedia ("Singularidade") rodando num quadrado da
 * página: a capa em HTML é completa sem JavaScript; com WebGL2, um buraco
 * negro simulado curva a luz dela. O texto da capa é decorativo (aria-hidden):
 * a legenda diz o que é, e o link leva à capa no ar.
 */
export function SingularityDemo({ cover }: { cover: LiveCover }) {
  const box = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const hit = useRef<HTMLButtonElement>(null);
  const hint = useRef<HTMLSpanElement>(null);
  const { hints } = cover;

  useEffect(() => {
    if (!box.current || !canvas.current || !hit.current) return;
    return mountSingularity(
      { box: box.current, cover: box.current, canvas: canvas.current, hit: hit.current, hint: hint.current },
      hints,
    );
  }, [hints]);

  return (
    <figure className="sg-demo">
      <div className="sg-stage">
        <div className="sg-box" ref={box}>
          <p className="sg-kicker" data-ink data-ink-rule aria-hidden="true">
            <span>{cover.kicker}</span>
            <span>
              <time dateTime={cover.edition.date}>{cover.edition.label}</time>
            </span>
          </p>
          <p className="sg-masthead" data-ink aria-hidden="true">
            Linked
            <span className="sg-ia" data-ink-gradient data-anchor>
              IA
            </span>
          </p>
          <div className="sg-lead" data-ink data-ink-rule aria-hidden="true">
            <ol className="sg-heads">
              {cover.headlines.map((title, index) => (
                <li key={title}>
                  <span className="sg-n">{index + 1}</span> {title}
                </li>
              ))}
            </ol>
            <p className="sg-more">{cover.more}</p>
          </div>
          <canvas className="sg-canvas" ref={canvas} aria-hidden="true" />
          <button type="button" className="sg-hit" ref={hit} aria-label={cover.hitLabel} disabled />
        </div>
      </div>
      <p className="sg-bar">
        <span className="sg-hint" ref={hint} aria-live="polite" />
        <a className="sg-enter" href={cover.link.href} target="_blank" rel="noreferrer noopener">
          {cover.link.label} <span aria-hidden="true">↗</span>
        </a>
      </p>
      <figcaption>{cover.caption}</figcaption>
    </figure>
  );
}
