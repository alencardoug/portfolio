import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/engenharia-governanca-dados",
  title: "Engenharia e Governança de Dados",
  description:
    "Estudo de caso: fluxo de dados de ponta a ponta com Airbyte, dbt, Airflow e CDC com Debezium, Redpanda e Apache Beam, governança desde a primeira camada, concluído e reproduzível (v1.0.0).",
});

export default function EngenhariaGovernancaDadosPage() {
  return (
    <CaseSimple
      content={content}
      slug="engenharia-governanca-dados"
      ptPath="/projects/engenharia-governanca-dados"
    />
  );
}
