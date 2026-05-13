"use client";

import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  {
    name: "Luc Vermeersch",
    location: "Antwerpen",
    rating: 5,
    project: "Volledige renovatie",
    text: "R&D Construct heeft onze woning volledig getransformeerd. Van de eerste afspraak tot de oplevering was alles perfect georganiseerd. Het resultaat overtrof al onze verwachtingen. Absolute aanraders!",
  },
  {
    name: "Sophie & Tom Janssens",
    location: "Gent",
    rating: 5,
    project: "Badkamer & keuken",
    text: "Wat een professioneel team! Onze badkamer en keuken zijn prachtig geworden. Ze werkten netjes, kwamen hun afspraken na en communiceerden uitstekend. We zijn honderd procent tevreden.",
  },
  {
    name: "Marc Claes",
    location: "Leuven",
    rating: 5,
    project: "Nieuwbouw",
    text: "Voor ons nieuwbouwproject was R&D Construct een uitstekende keuze. Deskundig, betrouwbaar en altijd bereikbaar. Ons huis werd precies op de geplande datum opgeleverd. Hartelijk dank!",
  },
  {
    name: "Nathalie Peeters",
    location: "Mechelen",
    rating: 5,
    project: "Dakwerken",
    text: "Dakwerken laten uitvoeren is stressvol, maar R&D Construct maakte het aangenaam. Snelle uitvoering, geen rommel achtergelaten en een eerlijke prijs. Prima service!",
  },
  {
    name: "David & An Wouters",
    location: "Hasselt",
    rating: 5,
    project: "Interieurverbouwing",
    text: "Onze open leefruimte met gyprocwerken en nieuwe vloeren ziet er fantastisch uit. Het team was vriendelijk, punctueel en leverde topkwaliteit. Wij bevelen R&D Construct 100% aan.",
  },
  {
    name: "Karin De Smedt",
    location: "Brussel",
    rating: 5,
    project: "Keuken op maat",
    text: "Droomkeuken gerealiseerd door echte vakmannen. Ze luisterden naar onze wensen, dachten mee en kwamen uit met een ontwerp dat ons volledig verraste. Resultaat: subliem!",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)" }}
    >
      <div className="container-custom">
        <SectionHeader
          label="Klantenervaringen"
          title="Wat Klanten"
          titleHighlight="Zeggen"
          subtitle="Lees wat onze klanten zeggen over hun samenwerking met R&D Construct."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.07}>
              <div
                className="p-7 rounded-2xl border border-dark-800 hover:border-yellow-600 transition-all duration-300 flex flex-col h-full"
                style={{ background: "#1a1a1a" }}
              >
                {/* Quote icon */}
                <Quote size={28} style={{ color: "#d4a017", opacity: 0.4 }} className="mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="#d4a017"
                      style={{ color: "#d4a017" }}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-dark-300 text-sm leading-relaxed flex-1 mb-6" style={{ color: "#818181" }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer info */}
                <div className="pt-4 border-t border-dark-700 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white text-sm">{review.name}</p>
                    <p className="text-xs text-dark-500" style={{ color: "#515151" }}>{review.location}</p>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "rgba(212,160,23,0.1)",
                      color: "#d4a017",
                      border: "1px solid rgba(212,160,23,0.2)",
                    }}
                  >
                    {review.project}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Overall rating banner */}
        <FadeIn delay={0.5} className="mt-12">
          <div
            className="p-8 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.05))",
              border: "1px solid rgba(212,160,23,0.2)",
            }}
          >
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} fill="#d4a017" style={{ color: "#d4a017" }} />
              ))}
            </div>
            <p className="font-display text-3xl font-bold text-white mb-1">4.9/5</p>
            <p className="text-dark-400 text-sm" style={{ color: "#666666" }}>
              Gebaseerd op 120+ beoordelingen
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
