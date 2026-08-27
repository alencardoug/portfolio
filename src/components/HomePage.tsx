import type { SiteContent } from "@/content/types";
import { Capabilities } from "./Capabilities";
import { Career } from "./Career";
import { ContactDock } from "./ContactDock";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export function HomePage({ content }: { content: SiteContent }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {content.ui.skipLink}
      </a>
      <div id="top" />
      <Header content={content} ptPath="/" />
      <main id="conteudo">
        <Hero content={content} />
        <Career content={content} />
        <Capabilities content={content} />
        <Projects content={content} />
      </main>
      <Footer content={content} />
      <ContactDock links={content.links} labels={content.ui.contactDock} />
    </>
  );
}
