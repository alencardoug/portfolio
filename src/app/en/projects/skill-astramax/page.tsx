import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/projects/skill-astramax",
  title: "AstraMax Skill",
  description:
    "Project in development: an Agent Skill for independent second-model review — Claude Code implements, Codex with GPT-6 Astra verifies and hunts for defects.",
});

export default function SkillAstramaxPageEn() {
  return (
    <CaseSimple
      content={content}
      slug="skill-astramax"
      ptPath="/projects/skill-astramax"
    />
  );
}
