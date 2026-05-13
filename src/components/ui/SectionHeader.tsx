"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
          <span className="section-label">{label}</span>
        </div>
      )}
      <h2
        className={`heading-lg mb-4 ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}{" "}
        {titleHighlight && (
          <span style={{ color: "#d4a017" }}>{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            light ? "text-dark-300" : "text-dark-400"
          } ${centered ? "mx-auto" : ""}`}
          style={{ color: "#a4a4a4" }}
        >
          {subtitle}
        </p>
      )}
      <div className={`gold-divider mt-6 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
