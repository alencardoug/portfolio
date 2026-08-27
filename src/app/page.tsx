import { HomePage } from "@/components/HomePage";
import { getContent } from "@/content";

const content = getContent("pt");

export default function Home() {
  return <HomePage content={content} />;
}
