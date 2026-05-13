import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Building2,
  Bath,
  ChefHat,
  HardHat,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Ontdek alle diensten van R&D Construct: renovaties, nieuwbouw, badkamers, keukens, dakwerken en gyproc-afwerking.",
};

const services = [
  {
    id: "renovaties",
    icon: Wrench,
    title: "Renovaties",
    tagline: "Uw woning opnieuw uitgevonden",
    description:
      "Wij verzorgen renovaties van elk formaat — van een gerichte kamerrenovatie tot een volledige woningtransformatie. Met oog voor detail en respect voor het bestaande karakter van uw woning.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    features: [
      "Volledige woningrenovatie",
      "Vernieuwing van vloeren en wanden",
      "Elektriciteit & sanitair",
      "Ramen en deuren vervangen",
      "Energetische renovatie",
      "Interieurverbouwing",
    ],
  },
  {
    id: "nieuwbouw",
    icon: Building2,
    title: "Nieuwbouw",
    tagline: "Bouwen vanuit een blanco blad",
    description:
      "Van het eerste concept tot de sleuteloverdracht — wij begeleiden uw nieuwbouwproject met expertise en precisie. Energiezuinig, duurzaam en op maat van uw wensen.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      "Sleutel-op-de-deur projecten",
      "Energieprestatiegerichte bouw (EPC)",
      "Architecturale begeleiding",
      "Vergunningen & papierwerk",
      "Duurzame materialen",
      "Oplevering met garantie",
    ],
  },
  {
    id: "badkamers",
    icon: Bath,
    title: "Badkamers",
    tagline: "Uw persoonlijk spa-gevoel",
    description:
      "Een badkamer is meer dan een functionele ruimte — het is een persoonlijk toevluchtsoord. Wij ontwerpen en plaatsen luxueuze badkamers op maat, met oog voor elk detail.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    features: [
      "Badkamers volledig op maat",
      "Inloopdouches & vrijstaande baden",
      "Premium tegelwerk (Italiaans, Spaans)",
      "Sanitair van topmerken",
      "Vloerverwarming",
      "Slimme opberging",
    ],
  },
  {
    id: "keukens",
    icon: ChefHat,
    title: "Keukens",
    tagline: "Het hart van uw woning",
    description:
      "De keuken is de plek waar het leven zich afspeelt. Wij creëren maatwerk keukens die perfect aansluiten bij uw leefstijl — functioneel, stijlvol en tijdloos.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    features: [
      "Maatwerk keukenontwerp",
      "Quartz en natuurstenen werkbladen",
      "Inbouwapparatuur van topmerken",
      "Keukeneiland op maat",
      "LED-verlichting geïntegreerd",
      "Open en gesloten concepten",
    ],
  },
  {
    id: "dakwerken",
    icon: HardHat,
    title: "Dakwerken",
    tagline: "Uw dak in goede handen",
    description:
      "Een goed dak beschermt alles eronder. Wij verzorgen dakherstellingen, dakisolatie, nieuwe dakbedekkingen en dakramen — snel, vakkundig en met garantie.",
    image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=800&q=80",
    features: [
      "Platte daken & hellende daken",
      "Dakrenovatie & -isolatie",
      "Dakgoten & afvoeren",
      "Dakramen & koepels",
      "Groendaken",
      "Noodreparaties & inspectie",
    ],
  },
  {
    id: "gyproc",
    icon: Layers,
    title: "Gyproc & Afwerking",
    tagline: "Perfectie in elk detail",
    description:
      "De afwerking maakt het verschil. Van Gyproc-plafonds tot stucwerk, vloeren en schilderwerk — wij zorgen voor een perfecte, duurzame binnenafwerking.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Gyproc-plafonds & -wanden",
      "Scheidingswanden op maat",
      "Stucwerk & bepleistering",
      "Vloerlegging (tegels, parket, vinyl)",
      "Schilderwerk interieur",
      "Verlaagde plafonds met verlichtingsintegratie",
    ],
  },
];

export default function DienstenPage() {
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
            <span className="section-label mb-6 inline-flex">Wat Wij Aanbieden</span>
            <h1 className="heading-xl text-white mb-6">
              Onze <span style={{ color: "#d4a017" }}>Diensten</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#818181" }}>
              Van renovatie tot nieuwbouw — alles onder één dak. Ontdek ons
              volledig aanbod van premium bouwdiensten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="container-custom space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={0.1}>
              <div
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden h-[380px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                    {/* Icon badge */}
                    <div
                      className="absolute bottom-6 right-6 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}
                    >
                      <service.icon size={26} style={{ color: "#0d0d0d" }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-3 block"
                    style={{ color: "#d4a017" }}
                  >
                    {service.tagline}
                  </span>
                  <h2 className="heading-md text-white mb-4">{service.title}</h2>
                  <div className="gold-divider mb-6" />
                  <p className="leading-relaxed mb-7" style={{ color: "#818181" }}>
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#a4a4a4" }}>
                        <CheckCircle2 size={15} style={{ color: "#d4a017", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/offerte" className="btn-primary inline-flex">
                    Offerte Aanvragen <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: "#111111" }}>
        <div className="container-custom">
          <FadeIn>
            <div
              className="rounded-3xl p-10 sm:p-14 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.03))",
                border: "1px solid rgba(212,160,23,0.15)",
              }}
            >
              <h2 className="heading-md text-white mb-4">
                Heeft u een specifiek project?
              </h2>
              <p className="mb-8 max-w-xl mx-auto" style={{ color: "#818181" }}>
                Vertel ons over uw project en wij maken een gedetailleerde offerte
                op maat. Volledig vrijblijvend.
              </p>
              <Link href="/offerte" className="btn-primary inline-flex">
                Gratis Offerte Aanvragen <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
