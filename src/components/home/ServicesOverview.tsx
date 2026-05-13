"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Hammer,
  Building2,
  Bath,
  ChefHat,
  HardHat,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: Wrench,
    title: "Renovaties",
    description:
      "Van volledige woningrenovatie tot gerichte verbouwingen. Wij transformeren uw bestaande ruimte naar een modern thuis.",
    href: "/diensten#renovaties",
  },
  {
    icon: Building2,
    title: "Nieuwbouw",
    description:
      "Uw nieuwbouwproject van A tot Z. Van fundering tot dakkapel, wij bouwen met precisie en kwaliteit.",
    href: "/diensten#nieuwbouw",
  },
  {
    icon: Bath,
    title: "Badkamers",
    description:
      "Luxueuze badkamers op maat. Tijdloze designs met premium materialen voor de perfecte ontspanningsplek.",
    href: "/diensten#badkamers",
  },
  {
    icon: ChefHat,
    title: "Keukens",
    description:
      "Maatwerk keukens die functie en design perfect combineren. Uw droomkeuken tot leven gebracht.",
    href: "/diensten#keukens",
  },
  {
    icon: HardHat,
    title: "Dakwerken",
    description:
      "Professionele dakwerken, -renovaties en -isolatie. Duurzame oplossingen voor een waterdicht dak.",
    href: "/diensten#dakwerken",
  },
  {
    icon: Layers,
    title: "Gyproc & Afwerking",
    description:
      "Perfecte binnenafwerking met Gyproc, stucwerk, vloeren en schilderwerk. Elk detail telt.",
    href: "/diensten#gyproc",
  },
];

export default function ServicesOverview() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)" }}
    >
      <div className="container-custom">
        <SectionHeader
          label="Wat Wij Doen"
          title="Onze"
          titleHighlight="Diensten"
          subtitle="Van renovatie tot nieuwbouw — wij leveren premium bouwkwaliteit voor elk project, groot of klein."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08} direction="up">
              <Link
                href={service.href}
                className="card-dark block p-7 group h-full"
                style={{ background: "#1a1a1a" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(212, 160, 23, 0.1)",
                    border: "1px solid rgba(212, 160, 23, 0.2)",
                  }}
                >
                  <service.icon size={24} style={{ color: "#d4a017" }} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors"
                  style={{ "--hover-color": "#d4a017" } as React.CSSProperties}
                >
                  {service.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4" style={{ color: "#666666" }}>
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                  style={{ color: "#d4a017" }}
                >
                  Meer informatie <ArrowRight size={14} />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-12 text-center">
          <Link href="/diensten" className="btn-secondary">
            Alle Diensten Bekijken
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
