import type { Metadata } from "next";
import { BonecoLab } from "@/components/v2/BonecoLab";
import { getContent } from "@/content";

const content = getContent("pt");

export const metadata: Metadata = {
  title: "Boneco · laboratório V2",
  alternates: { canonical: "/v2/boneco" },
};

export default function BonecoLabPage() {
  return <BonecoLab themeLabels={content.ui.theme} />;
}
