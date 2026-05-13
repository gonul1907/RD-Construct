"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Star, Award, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "Jaar Ervaring" },
  { value: "500+", label: "Projecten Voltooid" },
  { value: "98%", label: "Tevreden Klanten" },
  { value: "50+", label: "Medewerkers" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080808 0%, #111111 50%, #0d0d0d 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gold glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #d4a017, transparent 70%)" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(to right, #d4a017 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #080808, transparent)" }}
        />
      </div>

      <div className="container-custom relative z-10 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="section-label">
              <Star size={14} fill="#d4a017" style={{ color: "#d4a017" }} />
              Premium Bouwbedrijf in Nederland
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl text-white mb-6"
          >
            Uw Droom,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a017, #f5c842)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Onze Passie
            </span>
            <br />
            Gebouwd voor de Eeuwigheid
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 mb-10 max-w-2xl leading-relaxed"
            style={{ color: "#818181" }}
          >
            R&amp;D Construct levert premium bouwkwaliteit voor renovaties,
            nieuwbouw, badkamers, keukens en meer. Meer dan 15 jaar
            vakmanschap in dienst van uw project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/offerte" className="btn-primary text-base">
              Vraag Gratis Offerte Aan
              <ArrowRight size={18} />
            </Link>
            <Link href="/projecten" className="btn-secondary text-base">
              Bekijk Onze Projecten
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-2xl border border-dark-800"
                style={{ background: "rgba(26,26,26,0.6)", backdropFilter: "blur(8px)" }}
              >
                <div
                  className="text-2xl sm:text-3xl font-display font-bold mb-1"
                  style={{ color: "#d4a017" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-dark-400 font-medium uppercase tracking-wider"
                  style={{ color: "#666666" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-dark-500 uppercase tracking-widest" style={{ color: "#515151" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} style={{ color: "#d4a017" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
