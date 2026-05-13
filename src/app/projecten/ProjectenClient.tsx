"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const categories = ["Alle", "Nieuwbouw", "Badkamer", "Keuken", "Dakwerken", "Afwerking"];

const projects = [
  {
    title: "Luxe Badkamer Suite",
    category: "Badkamer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Spa-badkamer met inloopdouche, vrijstaand bad en premium Italiaans tegelwerk. Vloerverwarming en intelligente opberging.",
  },
  {
    title: "Open Keuken Concept",
    category: "Keuken",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Maatwerk keuken met eiland, quartz werkblad en professionele inbouwapparatuur. Open concept met perfecte doorstroom naar de leefruimte.",
  },
  {
    title: "Nieuwe Voordeur Plaatsing",
    category: "Afwerking",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Plaatsing van een nieuwe premiumvoordeur met isolerende beglazing en modern hang- en sluitwerk. Stijlvolle eerste indruk met optimale veiligheid en energieprestatie.",
  },
  {
    title: "Nieuwbouw Rijwoning",
    category: "Nieuwbouw",
    year: "2023",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    description: "Energiezuinige nieuwbouw met moderne architectuur en hoogwaardige afwerking. BEN-woning met warmtepomp en zonnepanelen.",
  },
  {
    title: "Plat Dak Renovatie",
    category: "Dakwerken",
    year: "2023",
    image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=800&q=80",
    description: "Complete vernieuwing van plat dak inclusief isolatie en groendakpakket. Duurzame oplossing met 25 jaar garantie.",
  },
  {
    title: "Industriële Badkamer",
    category: "Badkamer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    description: "Industrieel geïnspireerde badkamer met betontegels, zwarte kranen en houten accenten. Uniek en tijdloos design.",
  },
  {
    title: "Witte Shaker Keuken",
    category: "Keuken",
    year: "2022",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Klassieke Shaker keuken in wit met marmeren werkblad en gouden details. Tijdloos elegant en maximaal functioneel.",
  },
  {
    title: "Hellend Dak Renovatie",
    category: "Dakwerken",
    year: "2022",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    description: "Complete renovatie van hellend dak met nieuwe dakpannen, isolatie en dakgoten. Inclusief nieuwe dakramen voor extra lichtinval.",
  },
];

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="max-w-2xl w-full rounded-3xl overflow-hidden"
        style={{ background: "#1a1a1a" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="700px" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <X size={18} className="text-white" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-dark-950" style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}>
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 text-xs mb-2" style={{ color: "#515151" }}>
            {project.year}
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="leading-relaxed text-sm" style={{ color: "#818181" }}>{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectenClient() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "Alle"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={
              activeCategory === cat
                ? { background: "linear-gradient(135deg, #d4a017, #f5c842)", color: "#0d0d0d" }
                : { background: "#1a1a1a", color: "#818181", border: "1px solid #2a2a2a" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.04 }}
            >
              <FadeIn>
                <button
                  className="w-full text-left card-dark group overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                  style={{ background: "#1a1a1a" }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-dark-950" style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-xs mb-2" style={{ color: "#515151" }}>
                      {project.year}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </button>
              </FadeIn>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
