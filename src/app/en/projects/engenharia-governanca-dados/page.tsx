import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/engenharia-governanca-dados",
  title: "Data Engineering and Governance",
  description:
    "Case study: an end-to-end data flow with Airbyte, dbt, Airflow and CDC with Debezium, Redpanda and Apache Beam, governance from the first layer, completed and reproducible (v1.0.0).",
});

export default function EngenhariaGovernancaDadosPageEn() {
  return (
    <CaseSimple
      content={content}
      slug="engenharia-governanca-dados"
      ptPath="/projects/engenharia-governanca-dados"
    />
  );
}
