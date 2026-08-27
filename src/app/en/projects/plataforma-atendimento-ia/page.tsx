import type { Metadata } from "next";
import { CasePlataforma } from "@/components/case/CasePlataforma";
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
  return <CasePlataforma content={content} />;
}
