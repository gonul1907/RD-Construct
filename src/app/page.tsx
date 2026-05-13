import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProjectGallery from "@/components/home/ProjectGallery";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "R&D Construct | Premium Bouwbedrijf in Nederland",
  description:
    "R&D Construct — uw vertrouwde partner voor renovaties, nieuwbouw, badkamers, keukens en dakwerken. Meer dan 15 jaar vakmanschap.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <ProjectGallery />
      <Testimonials />
      <HomeContact />
    </>
  );
}
