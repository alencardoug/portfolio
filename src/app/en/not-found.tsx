import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";
import { getContent } from "@/content";

const content = getContent("en");

export const metadata: Metadata = {
  title: content.ui.notFound.metaTitle,
  robots: { index: false },
};

export default function NotFoundEn() {
  return <NotFoundView content={content} />;
}
