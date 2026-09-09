import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/rag-avancado-ragflow",
  title: "Advanced RAG via RAGFlow",
  description:
    "Project in development: a corporate RAG architecture with RAGFlow and Elasticsearch — hybrid search, chunking, parent-child structures and retrieval evaluation.",
});

export default function RagAvancadoRagflowPageEn() {
  return (
    <CaseSimple
      content={content}
      slug="rag-avancado-ragflow"
      ptPath="/projects/rag-avancado-ragflow"
    />
  );
}
