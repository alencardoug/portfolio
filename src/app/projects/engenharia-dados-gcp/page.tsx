import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/engenharia-dados-gcp",
  title: "Engenharia de Dados no GCP",
  description:
    "Projeto a iniciar: replicação no Google Cloud, por Terraform, de um fluxo de dados local já concluído, com BigQuery, Datastream, Pub/Sub, Dataflow e Cloud Composer e a mesma governança como policy tags.",
});

export default function EngenhariaDadosGcpPage() {
  return (
    <CaseSimple
      content={content}
      slug="engenharia-dados-gcp"
      ptPath="/projects/engenharia-dados-gcp"
    />
  );
}
