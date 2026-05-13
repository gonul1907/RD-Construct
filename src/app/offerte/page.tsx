import type { Metadata } from "next";
import { CheckCircle2, Clock, Phone, Shield } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import OfferteForm from "@/components/offerte/OfferteForm";

export const metadata: Metadata = {
  title: "Gratis Offerte Aanvragen",
  description:
    "Vraag vrijblijvend een gratis offerte aan bij R&D Construct. We reageren binnen 1 werkdag.",
};

const guarantees = [
  { icon: CheckCircle2, text: "100% vrijblijvend" },
  { icon: Clock, text: "Reactie binnen 1 werkdag" },
  { icon: Phone, text: "Persoonlijk adviesgesprek" },
  { icon: Shield, text: "Geen verborgen kosten" },
];

export default function OffertePage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080808 0%, #111111 100%)" }}
      >
        <div
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4a017, transparent 70%)", opacity: 0.06 }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="section-label mb-6 inline-flex">Vrijblijvend</span>
              <h1 className="heading-xl text-white mb-6">
                Gratis{" "}
                <span style={{ color: "#d4a017" }}>Offerte</span>
                <br />
                Aanvragen
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#818181" }}>
                Vertel ons over uw project en wij stellen een gedetailleerde,
                transparante offerte op maat voor u op. Volledig gratis en
                vrijblijvend.
              </p>
              {/* Guarantees */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {guarantees.map((g) => (
                  <div
                    key={g.text}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl text-center"
                    style={{ background: "rgba(212,160,23,0.06)", border: "1px solid rgba(212,160,23,0.12)" }}
                  >
                    <g.icon size={18} style={{ color: "#d4a017" }} />
                    <span className="text-xs font-medium" style={{ color: "#818181" }}>{g.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div
                className="p-8 sm:p-12 rounded-3xl border border-dark-800"
                style={{ background: "#131313" }}
              >
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Uw Offerteaanvraag
                </h2>
                <p className="text-sm mb-8" style={{ color: "#818181" }}>
                  Vul het formulier zo volledig mogelijk in voor een nauwkeurige offerte.
                </p>
                <OfferteForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
