import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ProjectenClient from "./ProjectenClient";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk de gerealiseerde projecten van R&D Construct. Nieuwbouw, badkamers, keukens, dakwerken en meer — overal in Nederland.",
};

export default function ProjectenPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080808 0%, #111111 100%)" }}
      >
        <div
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4a017, transparent 70%)", opacity: 0.06 }}
        />
        <div className="container-custom relative z-10 text-center">
          <FadeIn>
            <span className="section-label mb-6 inline-flex">Portfolio</span>
            <h1 className="heading-xl text-white mb-6">
              Onze <span style={{ color: "#d4a017" }}>Realisaties</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#818181" }}>
              Elk project vertelt een verhaal van vakmanschap, toewijding en de
              wens van onze klanten. Bekijk ons portfolio hieronder.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="container-custom">
          <ProjectenClient />
        </div>
      </section>
    </>
  );
}
