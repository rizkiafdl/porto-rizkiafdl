"use client";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/exprience-section"; // Fixed the import name
import { ProjectCarousel } from "@/components/home/project-carousel";
import { ContactMe } from "@/components/home/contact-me";
import { NavbarHome } from "@/components/home/navbar-home";
import { useRef } from "react";

export default function Home() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavbarHome
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black to-black overflow-hidden">
        {/* Ensure each section has its own ref */}
        <div ref={homeRef}>
          <HeroSection />
        </div>
        <div>
          <ProjectCarousel />
        </div>
        <div ref={aboutRef}>
          <CtaSection />
        </div>
        <div ref={servicesRef}>
          <ExperienceSection />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </main>
    </>
  );
}
