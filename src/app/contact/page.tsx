import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met R&D Construct. Bel, mail of bezoek ons. Wij reageren binnen 24 uur.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    lines: ["+31 6 16 17 20 70"],
    href: "tel:+31616172070",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["info@rdconstruct.be"],
    href: "mailto:info@rdconstruct.be",
  },
  {

    icon: Clock,
    title: "Openingstijden",
    lines: ["Ma – Vr: 08:00 – 18:00", "Za: 09:00 – 13:00"],
  },
];

export default function ContactPage() {
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
            <span className="section-label mb-6 inline-flex">Laten We Praten</span>
            <h1 className="heading-xl text-white mb-6">
              Neem <span style={{ color: "#d4a017" }}>Contact</span> Op
            </h1>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#818181" }}>
              Heeft u een vraag of wilt u een project bespreken? Wij staan voor
              u klaar en reageren binnen 24 uur.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding" style={{ background: "#0d0d0d" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <FadeIn direction="left">
              <div>
                <SectionHeader
                  label="Contactgegevens"
                  title="Bereik Ons"
                  titleHighlight="Direct"
                  subtitle="Gebruik een van de onderstaande kanalen of vul het contactformulier in."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="p-6 rounded-2xl border border-dark-800 hover:border-yellow-600 transition-all duration-300"
                      style={{ background: "#1a1a1a" }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)" }}
                      >
                        <info.icon size={20} style={{ color: "#d4a017" }} />
                      </div>
                      <h3 className="font-bold text-white mb-2">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm" style={{ color: "#818181" }}>
                          {info.href ? (
                            <a href={info.href} className="hover:text-white transition-colors">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>


              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn direction="right" delay={0.2}>
              <div
                className="p-8 rounded-3xl border border-dark-800"
                style={{ background: "#1a1a1a" }}
              >
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Stuur Ons een Bericht
                </h2>
                <p className="text-sm mb-7" style={{ color: "#818181" }}>
                  Vul het formulier in en we contacteren u zo snel mogelijk.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
