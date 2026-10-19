import type { Metadata } from "next";
import { CaseJourney } from "@/components/case/CaseJourney";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/linkedia",
  title: "Linkedia — an AI magazine with hands-on practice",
  description:
    "Case study: to learn AI broadly without reading and forgetting, I built an editorial engine that proposes sourced topics and writes articles I pick and review, and a public magazine with hands-on plans, prompts to go deeper and a pre-cover made only of code.",
});

export default function LinkediaPageEn() {
  return <CaseJourney content={content} slug="linkedia" ptPath="/projects/linkedia" />;
}
