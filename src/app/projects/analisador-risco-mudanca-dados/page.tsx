import type { Metadata } from "next";
import { CaseRich } from "@/components/case/CaseRich";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/analisador-risco-mudanca-dados",
  title: "Analisador de Risco de Mudança de Dados",
  description:
    "Estudo de caso: grafo de estado LangGraph com fronteira rígida entre o determinístico e o probabilístico, introspecção real de Postgres, recomendação de IA não vinculante e human-in-the-loop — arquitetura, processo SDD e evidências.",
});

export default function AnalisadorRiscoPage() {
  return (
    <CaseRich
      content={content}
      slug="analisador-risco-mudanca-dados"
      ptPath="/projects/analisador-risco-mudanca-dados"
      assetBase="/assets/projects/analisador-risco"
    />
  );
}
