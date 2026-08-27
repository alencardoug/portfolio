import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { GithubMark } from "@/components/BrandIcons";
import { Header } from "@/components/Header";
import { links, projects } from "@/content/pt";

const PAGE_TITLE = "Este portfólio";
const PAGE_DESC =
  "Como este portfólio foi construído: produto estático com Next.js, progressive disclosure, temas claro/escuro e contato de baixa fricção.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/projects/portfolio" },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESC },
  twitter: { title: PAGE_TITLE, description: PAGE_DESC },
};

const project = projects.find((item) => item.slug === "portfolio");

export default function PortfolioCasePage() {
  return (
    <>
      <Header />
      <main id="conteudo" className="case-page">
        <div className="container case-container">
          <a href="/#projetos" className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar aos projetos
          </a>

          <p className="case-eyebrow">// estudo de caso</p>
          <h1>Portfólio Data &amp; AI Engineer</h1>
          <span className="status status-production">
            <span className="pulse" aria-hidden="true" />
            Em produção
          </span>
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

          <section>
            <div className="case-actions">
              {project?.githubUrl && (
                <a
                  className="button primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubMark size={16} />
                  Código no GitHub
                </a>
              )}
              <a className="button secondary" href="/#projetos">
                Ver outros projetos
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
