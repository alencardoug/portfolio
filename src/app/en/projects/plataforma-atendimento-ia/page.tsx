import type { Metadata } from "next";
import { CaseRich } from "@/components/case/CaseRich";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/plataforma-atendimento-ia",
  title: "AI Customer Support Platform",
  description:
    "Case study: RAG, LLM, relational and vector data, support workflows and levels of autonomy — architecture, the SDD process and engineering evidence.",
});

export default function PlataformaAtendimentoPageEn() {
  return (
    <CaseRich
      content={content}
      slug="plataforma-atendimento-ia"
      ptPath="/projects/plataforma-atendimento-ia"
      assetBase="/assets/projects/plataforma-atendimento"
    />
  );
}
