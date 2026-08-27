import { ArrowLeft } from "lucide-react";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { links } from "@/content/pt";

export default function EngenhariaDadosGcpPage() {
  return (
    <>
      <Header />
      <main className="case-page">
        <div className="container case-container">
          <a href="/#projetos" className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar aos projetos
          </a>

          <p className="case-eyebrow">// em desenvolvimento</p>
          <h1>Engenharia de Dados no GCP</h1>
          <p className="case-lead">
            Projeto voltado a pipelines, processamento, modelagem e
            disponibilização de dados no Google Cloud.
          </p>

          <section>
            <h2>Por que aparece no portfólio agora?</h2>
            <p>
              O projeto complementará o case de IA e sustentará o posicionamento
              Data &amp; AI Engineer. O card é deliberadamente marcado como “Em
              desenvolvimento”.
            </p>
          </section>

          <section>
            <h2>O que ainda será definido</h2>
            <ul>
              <li>Problema e dataset.</li>
              <li>Arquitetura e serviços GCP.</li>
              <li>Pipeline e modelagem.</li>
              <li>Observabilidade e qualidade.</li>
              <li>Repositório GitHub e evidências.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
