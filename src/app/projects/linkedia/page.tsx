import type { Metadata } from "next";
import { CaseJourney } from "@/components/case/CaseJourney";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/linkedia",
  title: "Linkedia — revista de IA com prática de uso",
  description:
    "Estudo de caso: para aprender IA de forma ampla sem ler e esquecer, construí um motor editorial que propõe pautas com fontes e escreve matérias que eu escolho e reviso, e uma revista pública com roteiros práticos, prompts para aprofundar e uma pré-capa feita só de código.",
});

export default function LinkediaPage() {
  return <CaseJourney content={content} slug="linkedia" ptPath="/projects/linkedia" />;
}
