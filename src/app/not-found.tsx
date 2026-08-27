import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { links } from "@/content/pt";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <p className="case-eyebrow">// 404</p>
          <h1>Página não encontrada</h1>
          <p className="case-lead">
            O endereço que você abriu não existe (ou saiu do ar). Volte para a
            home ou vá direto a uma das seções.
          </p>

          <div className="case-actions">
            <a className="button primary" href="/">
              Ir para a home
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button secondary" href="/#trajetoria">
              Trajetória
            </a>
            <a className="button secondary" href="/#capacidades">
              Capacidades
            </a>
            <a className="button secondary" href="/#projetos">
              Projetos
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
