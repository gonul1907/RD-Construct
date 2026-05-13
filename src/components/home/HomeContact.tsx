"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function HomeContact() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Gold glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5 blur-3xl pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, #d4a017, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        <FadeIn>
          <div
            className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(212,160,23,0.08) 0%, rgba(212,160,23,0.03) 100%)",
              border: "1px solid rgba(212,160,23,0.15)",
            }}
          >
            <span className="section-label mb-6 inline-flex">
              Laten We Samenwerken
            </span>
            <h2 className="heading-lg text-white mb-4">
              Klaar voor Uw{" "}
              <span style={{ color: "#d4a017" }}>Droomproject?</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "#818181" }}
            >
              Neem vandaag nog contact op voor een vrijblijvend gesprek en een
              gratis offerte op maat. Ons team staat voor u klaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/offerte" className="btn-primary text-base">
                Gratis Offerte Aanvragen
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary text-base">
                Contact Opnemen
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+31616172070"
                className="flex items-center gap-3 text-dark-300 hover:text-white transition-colors group"
                style={{ color: "#818181" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}
                >
                  <Phone size={16} style={{ color: "#d4a017" }} />
                </div>
                <span>+31 6 16 17 20 70</span>
              </a>
              <a
                href="mailto:info@rdconstruct.be"
                className="flex items-center gap-3 text-dark-300 hover:text-white transition-colors group"
                style={{ color: "#818181" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}
                >
                  <Mail size={16} style={{ color: "#d4a017" }} />
                </div>
                <span>info@rdconstruct.be</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
