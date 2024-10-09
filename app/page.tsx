
import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/exprience-section";
import { ProjectCarousel } from "@/components/home/project-carousel";
import { ContactMe } from "@/components/home/contact-me";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black to-black overflow-hidden">
      <HeroSection />
      <ProjectCarousel />
      <CtaSection />
      <ExperienceSection />
      <ContactMe />
    </main>


  );
}
