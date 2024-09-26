
import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section";
import { ExprienceSection } from "@/components/home/exprience-section";


import { ShowcaseSection } from "@/components/home/showcase-section";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-white">
      <HeroSection />
      <CtaSection />
      <ExprienceSection />
      <ShowcaseSection />
    </main>


  );
}
