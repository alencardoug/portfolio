import type { Metadata } from "next";
import { CaseRich } from "@/components/case/CaseRich";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/analisador-risco-mudanca-dados",
  title: "Data Change Risk Analyst",
  description:
    "Case study: a LangGraph state graph with a hard boundary between the deterministic and the probabilistic, real Postgres introspection, a non-binding AI recommendation and a human-in-the-loop gate — architecture, the SDD process and evidence.",
});

export default function AnalisadorRiscoPageEn() {
  return (
    <CaseRich
      content={content}
      slug="analisador-risco-mudanca-dados"
      ptPath="/projects/analisador-risco-mudanca-dados"
      assetBase="/assets/projects/analisador-risco"
    />
  );
}
