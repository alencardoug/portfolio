import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/content";
import { pageMetadata } from "@/lib/seo";

const content = getContent("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  ptPath: "/",
  title: content.ui.meta.title,
  titleAbsolute: true,
  description: content.ui.meta.description,
  ogImageAlt: content.ui.meta.ogImageAlt,
  siteName: content.ui.meta.ogSiteName,
});

export default function HomeEn() {
  return <HomePage content={content} />;
}
