import { ArrowLeft } from "lucide-react";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { links } from "@/content/pt";

export default function PortfolioCasePage() {
  return (
    <>
      <Header />
      <main className="case-page">
        <div className="container case-container">
          <a href="/#projetos" className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar aos projetos
          </a>

          <p className="case-eyebrow">// estudo de caso</p>
          <h1>Portfólio Data &amp; AI Engineer</h1>
          <p className="case-lead">
            Currículo web construído como produto estático, com progressive
            disclosure, temas claro/escuro e contato de baixa fricção.
          </p>

          <section>
            <h2>Decisões principais</h2>
            <ul>
              <li>Next.js + TypeScript.</li>
              <li>Tailwind CSS.</li>
              <li>Export estático.</li>
              <li>Firebase Hosting.</li>
              <li>Sem backend na V1.</li>
              <li>Conteúdo separado da apresentação.</li>
              <li>Preparação para inglês numa fase posterior.</li>
            </ul>
          </section>

          <section>
            <h2>Critério de sucesso</h2>
            <p>
              Um recrutador deve entender o posicionamento e encontrar
              evidências rapidamente; um gestor técnico deve conseguir aprofundar
              sem sobrecarregar a homepage.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
