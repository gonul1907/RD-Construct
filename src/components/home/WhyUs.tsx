"use client";

import { Shield, Award, Clock, ThumbsUp, Headphones, Leaf } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: Award,
    title: "Premium Kwaliteit",
    description:
      "Wij werken uitsluitend met de beste materialen en leveranciers. Kwaliteit is voor ons geen slogan, maar een belofte.",
  },
  {
    icon: Shield,
    title: "10 Jaar Garantie",
    description:
      "Wij staan achter ons werk met een uitgebreide garantie. Uw investering is veilig bij R&D Construct.",
  },
  {
    icon: Clock,
    title: "Op Tijd Opgeleverd",
    description:
      "Wij respecteren uw tijdsplanning. Dankzij strak projectbeheer leveren wij 98% van onze projecten op tijd op.",
  },
  {
    icon: ThumbsUp,
    title: "Transparante Prijzen",
    description:
      "Geen verrassingen achteraf. Onze gedetailleerde offertes geven u een helder beeld van de volledige kostprijs.",
  },
  {
    icon: Headphones,
    title: "Persoonlijke Begeleiding",
    description:
      "Eén vaste contactpersoon gedurende het hele project. U bent altijd op de hoogte van de voortgang.",
  },
  {
    icon: Leaf,
    title: "Duurzaam Bouwen",
    description:
      "Wij integreren duurzame materialen en technieken voor energiezuinige woningen die de toekomst verduurzamen.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4a017, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Waarom R&D Construct"
          title="Kwaliteit die"
          titleHighlight="Spreekt"
          subtitle="Ontdek waarom meer dan 500 klanten ons vertrouwden voor hun bouwproject."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.08}>
              <div
                className="p-7 rounded-2xl border border-dark-800 hover:border-yellow-600 transition-all duration-300 group"
                style={{
                  background: "rgba(26,26,26,0.5)",
                  "--border-hover": "#d4a017",
                } as React.CSSProperties}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,160,23,0.15), rgba(245,200,66,0.05))",
                    border: "1px solid rgba(212,160,23,0.25)",
                  }}
                >
                  <reason.icon size={22} style={{ color: "#d4a017" }} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed" style={{ color: "#666666" }}>
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
