import { Capabilities } from "@/components/Capabilities";
import { Career } from "@/components/Career";
import { ContactDock } from "@/components/ContactDock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { links } from "@/content/pt";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Career />
        <Capabilities />
        <Projects />
      </main>
      <Footer />
      <ContactDock links={links} />
    </>
  );
}
