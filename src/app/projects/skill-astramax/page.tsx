import type { Metadata } from "next";
import { CaseSimple } from "@/components/case/CaseSimple";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("pt");

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  ptPath: "/projects/skill-astramax",
  title: "Skill AstraMax",
  description:
    "Projeto em desenvolvimento: Agent Skill de revisão independente por um segundo modelo — Claude Code implementa, Codex com GPT-6 Astra verifica e busca defeitos.",
});

export default function SkillAstramaxPage() {
  return (
    <CaseSimple
      content={content}
      slug="skill-astramax"
      ptPath="/projects/skill-astramax"
    />
  );
}
