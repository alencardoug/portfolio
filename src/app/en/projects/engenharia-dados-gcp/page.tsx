import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/engenharia-dados-gcp",
  title: "Data Engineering on GCP",
  description:
    "Upcoming project: replicating a completed local data flow on Google Cloud with Terraform, using BigQuery, Datastream, Pub/Sub, Dataflow and Cloud Composer, with the same governance as policy tags.",
});

export default function EngenhariaDadosGcpPageEn() {
  return (
    <CaseSimple
      content={content}
      slug="engenharia-dados-gcp"
      ptPath="/projects/engenharia-dados-gcp"
    />
  );
}
