import type { Metadata } from "next";
import { CaseRich } from "@/components/case/CaseRich";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/plataforma-atendimento-ia",
  title: "Plataforma de Atendimento com IA",
  description:
    "Estudo de caso: RAG, LLM, dados relacionais e vetoriais, workflows de atendimento e níveis de autonomia — arquitetura, processo SDD e evidências de engenharia.",
});

export default function PlataformaAtendimentoPage() {
  return (
    <CaseRich
      content={content}
      slug="plataforma-atendimento-ia"
      ptPath="/projects/plataforma-atendimento-ia"
      assetBase="/assets/projects/plataforma-atendimento"
    />
  );
}
