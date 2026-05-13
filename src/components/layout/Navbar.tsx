"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-950/95 backdrop-blur-md shadow-dark-lg border-b border-dark-800"
            : "bg-transparent"
        }`}
        style={{ backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "transparent" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-dark-950 font-bold text-lg transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}
              >
                R&amp;D
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">
                  R&amp;D{" "}
                  <span style={{ color: "#d4a017" }}>Construct</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-yellow-400 relative group ${
                    pathname === link.href
                      ? "text-yellow-400"
                      : "text-dark-200"
                  }`}
                  style={{
                    color: pathname === link.href ? "#d4a017" : undefined,
                  }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "#d4a017" }}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+31616172070"
                className="flex items-center gap-2 text-sm text-dark-300 hover:text-white transition-colors"
              >
                <Phone size={16} style={{ color: "#d4a017" }} />
                <span>+31 6 16 17 20 70</span>
              </a>
              <Link href="/offerte" className="btn-primary text-sm px-6 py-3">
                Gratis Offerte
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
              aria-label="Menu openen"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: "#080808" }}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 px-4 text-lg font-medium rounded-xl transition-all ${
                        pathname === link.href
                          ? "text-dark-950 font-bold"
                          : "text-dark-200 hover:text-white hover:bg-dark-800"
                      }`}
                      style={
                        pathname === link.href
                          ? { background: "linear-gradient(135deg, #d4a017, #f5c842)", color: "#0d0d0d" }
                          : {}
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-3 border-t border-dark-800 pt-6">
                <a
                  href="tel:+31616172070"
                  className="flex items-center gap-3 py-3 px-4 text-dark-300 hover:text-white transition-colors"
                >
                  <Phone size={18} style={{ color: "#d4a017" }} />
                  <span>+31 6 16 17 20 70</span>
                </a>
                <Link href="/offerte" className="btn-primary w-full justify-center">
                  Gratis Offerte Aanvragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
