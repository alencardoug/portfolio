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
    "Project in development: pipelines, processing, modeling and delivery of data on Google Cloud.",
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
