import type { Metadata } from "next";
import { CaseStory } from "@/components/case/CaseStory";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/analytics-voz-do-cliente",
  title: "Analytics avançado via IA e sugestão de produto",
  description:
    "Estudo de caso independente: 1.343 reclamações públicas de beneficiários lidas com IA para propor onde investir um único projeto de 12 a 18 meses — o LLM lê, o código confere e eu decido, com evidências conferíveis.",
});

export default function AnalyticsVozDoClientePage() {
  return (
    <CaseStory
      content={content}
      slug="analytics-voz-do-cliente"
      ptPath="/projects/analytics-voz-do-cliente"
    />
  );
}
