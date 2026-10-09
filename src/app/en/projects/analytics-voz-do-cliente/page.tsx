import type { Metadata } from "next";
import { CaseStory } from "@/components/case/CaseStory";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/analytics-voz-do-cliente",
  title: "Advanced analytics via AI - Voice of the customer",
  description:
    "Independent case study: 1,343 public complaints from health plan members read with AI to propose where a single 12-to-18-month project should go — the LLM reads, code checks and I decide, with evidence anyone can check.",
});

export default function AnalyticsVozDoClientePageEn() {
  return (
    <CaseStory
      content={content}
      slug="analytics-voz-do-cliente"
      ptPath="/projects/analytics-voz-do-cliente"
    />
  );
}
