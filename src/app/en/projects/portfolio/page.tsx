import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/portfolio",
  title: "This portfolio",
  description:
    "How this portfolio was built: a static product with Next.js, progressive disclosure, light/dark themes and low-friction contact.",
});

export default function PortfolioCasePageEn() {
  return (
    <CaseSimple content={content} slug="portfolio" ptPath="/projects/portfolio" />
  );
}
