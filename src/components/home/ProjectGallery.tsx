"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    title: "Luxe Badkamer Suite",
    category: "Badkamer",
    location: "Gent",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Spa-badkamer met inloopdouche, vrijstaand bad en premium Italiaans tegelwerk.",
  },
  {
    title: "Open Keuken Concept",
    category: "Keuken",
    location: "Brussel",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Maatwerk keuken met eiland, quartz werkblad en professionele inbouwapparatuur.",
  },
  {
    title: "Nieuwbouw Rijwoning",
    category: "Nieuwbouw",
    location: "Mechelen",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    description: "Energiezuinige nieuwbouw met moderne architectuur en hoogwaardige afwerking.",
  },
  {
    title: "Plat Dak Renovatie",
    category: "Dakwerken",
    location: "Leuven",
    image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=800&q=80",
    description: "Complete vernieuwing van plat dak inclusief isolatie en groendakpakket.",
  },
  {
    title: "Kantoor Interieur",
    category: "Gyproc & Afwerking",
    location: "Hasselt",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Moderne kantoorinrichting met verlaagde plafonds, scheidingswanden en premium afwerking.",
  },
];

export default function ProjectGallery() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #111111 0%, #0d0d0d 100%)" }}
    >
      <div className="container-custom">
        <SectionHeader
          label="Onze Realisaties"
          title="Recente"
          titleHighlight="Projecten"
          subtitle="Een greep uit onze portfolio. Elk project is een bewijs van ons vakmanschap en onze toewijding aan kwaliteit."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="card-dark group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark-950"
                      style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed" style={{ color: "#666666" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-12 text-center">
          <Link href="/projecten" className="btn-primary">
            Alle Projecten Bekijken
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
