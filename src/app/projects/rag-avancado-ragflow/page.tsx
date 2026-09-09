import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/rag-avancado-ragflow",
  title: "RAG avançado via RAGFlow",
  description:
    "Projeto em desenvolvimento: arquitetura corporativa de RAG com RAGFlow e Elasticsearch — busca híbrida, chunking, estruturas parent-child e avaliação de recuperação.",
});

export default function RagAvancadoRagflowPage() {
  return (
    <CaseSimple
      content={content}
      slug="rag-avancado-ragflow"
      ptPath="/projects/rag-avancado-ragflow"
    />
  );
}
