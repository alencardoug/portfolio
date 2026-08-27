import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { localePrefix } from "@/content";
import { ContactDock } from "./ContactDock";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function NotFoundView({ content }: { content: SiteContent }) {
  const { ui } = content;
  const prefix = localePrefix(content.locale);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skipLink}
      </a>
      <Header content={content} ptPath="/" />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <p className="case-eyebrow">{ui.notFound.eyebrow}</p>
          <h1>{ui.notFound.title}</h1>
          <p className="case-lead">{ui.notFound.lead}</p>

          <div className="case-actions">
            <a className="button primary" href={`${prefix}/`}>
              {ui.notFound.goHome}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button secondary" href={`${prefix}/#trajetoria`}>
              {ui.nav.career}
            </a>
            <a className="button secondary" href={`${prefix}/#capacidades`}>
              {ui.nav.capabilities}
            </a>
            <a className="button secondary" href={`${prefix}/#projetos`}>
              {ui.nav.projects}
            </a>
          </div>
        </div>
      </main>
      <Footer content={content} />
      <ContactDock links={content.links} labels={ui.contactDock} />
    </>
  );
}
