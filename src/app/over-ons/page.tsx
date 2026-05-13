import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Clock, Target } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Ontdek het verhaal achter R&D Construct. Meer dan 15 jaar vakmanschap, passie en toewijding aan kwaliteit bouw.",
};

const values = [
  { icon: Award, title: "Kwaliteit", text: "Geen compromissen op materiaal of afwerking. Wij kiezen altijd voor het beste." },
  { icon: Users, title: "Teamwerk", text: "Ons hecht team van vakmannen werkt samen voor het beste resultaat." },
  { icon: Clock, title: "Punctualiteit", text: "Wij respecteren uw tijd. Deadlines zijn voor ons heilig." },
  { icon: Target, title: "Precisie", text: "Elk detail telt. Wij werken nauwkeurig en met aandacht voor perfectie." },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080808 0%, #111111 100%)" }}
      >
        <div
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4a017, transparent 70%)", opacity: 0.06 }}
        />
        <div className="container-custom relative z-10 text-center">
          <FadeIn>
            <span className="section-label mb-6 inline-flex">Ons Verhaal</span>
            <h1 className="heading-xl text-white mb-6">
              Over{" "}
              <span style={{ color: "#d4a017" }}>R&amp;D Construct</span>
            </h1>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed" style={{ color: "#818181" }}>
              Meer dan 15 jaar lang bouwen wij aan vertrouwen, kwaliteit en
              duurzame relaties met onze klanten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                    alt="R&D Construct team aan het werk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                </div>
                {/* Floating stat card */}
                <div
                  className="absolute -bottom-6 -right-6 p-6 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}
                >
                  <div className="text-4xl font-display font-bold text-dark-950">15+</div>
                  <div className="text-dark-900 text-sm font-semibold">Jaar Ervaring</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div>
                <span className="section-label mb-6 inline-flex">Wie Zijn Wij</span>
                <h2 className="heading-lg text-white mb-6">
                  Bouwen met{" "}
                  <span style={{ color: "#d4a017" }}>Passie & Vakmanschap</span>
                </h2>
                <div className="space-y-4 text-dark-400 leading-relaxed" style={{ color: "#818181" }}>
                  <p>
                    R&amp;D Construct werd in 2009 opgericht door Raf De Groote met
                    één duidelijke missie: premium bouwkwaliteit leveren die de tand
                    des tijds doorstaat. Wat begon als een klein familiebedrijf, groeide
                    uit tot een gerenommeerd bouwbedrijf actief door heel Nederland.
                  </p>
                  <p>
                    Wij zijn gespecialiseerd in renovaties, nieuwbouw, badkamers,
                    keukens, dakwerken en interieurafwerking. Elk project behandelen
                    wij met dezelfde toewijding: van de eerste schets tot de definitieve
                    oplevering.
                  </p>
                  <p>
                    Onze kracht ligt in het combineren van ambachtelijk vakmanschap
                    met moderne technieken en materialen. Zo creëren wij ruimtes die
                    niet alleen mooi zijn, maar ook functioneel, duurzaam en energiezuinig.
                  </p>
                  <p>
                    Vanuit Nederland bedienen wij particulieren en bedrijven met hetzelfde
                    niveau van kwaliteit en persoonlijke aandacht dat onze klanten van ons
                    gewend zijn.
                  </p>
                </div>
                <Link href="/offerte" className="btn-primary mt-8 inline-flex">
                  Start Uw Project <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="container-custom">
          <SectionHeader
            label="Onze Waarden"
            title="Waarop Wij"
            titleHighlight="Staan"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1} className="text-center">
                <div
                  className="p-7 rounded-2xl border border-dark-800 hover:border-yellow-600 transition-all duration-300"
                  style={{ background: "#1a1a1a" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)" }}
                  >
                    <v.icon size={24} style={{ color: "#d4a017" }} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
