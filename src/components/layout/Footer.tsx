import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const services = [
  "Renovaties",
  "Nieuwbouw",
  "Badkamers",
  "Keukens",
  "Dakwerken",
  "Gyproc & Afwerking",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
  { href: "/offerte", label: "Offerte Aanvragen" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-8 border-t border-dark-800"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Subtle gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #d4a017, transparent)" }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-dark-950 font-bold text-base"
                style={{ background: "linear-gradient(135deg, #d4a017, #f5c842)" }}
              >
                R&amp;D
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">
                  R&amp;D <span style={{ color: "#d4a017" }}>Construct</span>
                </span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Uw betrouwbare partner voor alle bouwwerken. Premium kwaliteit,
              vakmanschap en klantgerichtheid staan bij ons centraal.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-dark-700 flex items-center justify-center text-dark-400 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
                  style={{ "--hover-color": "#d4a017" } as React.CSSProperties}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Onze Diensten
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/diensten"
                    className="flex items-center gap-2 text-dark-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: "#d4a017" }}
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Snelle Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-dark-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: "#d4a017" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+31616172070"
                  className="flex items-start gap-3 text-dark-400 hover:text-white text-sm transition-colors group"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#d4a017" }}
                  />
                  <span>+31 6 16 17 20 70</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rdconstruct.be"
                  className="flex items-start gap-3 text-dark-400 hover:text-white text-sm transition-colors group"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#d4a017" }}
                  />
                  <span>info@rdconstruct.be</span>
                </a>
              </li>

            </ul>
            <div className="mt-6 p-4 rounded-xl border border-dark-700" style={{ background: "rgba(212,160,23,0.05)" }}>
              <p className="text-xs text-dark-400 mb-1">Openingstijden</p>
              <p className="text-sm text-white">Ma – Vr: 08:00 – 18:00</p>
              <p className="text-sm text-white">Za: 09:00 – 13:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {year} R&amp;D Construct. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-dark-500 hover:text-white text-sm transition-colors">
              Privacybeleid
            </Link>
            <Link href="#" className="text-dark-500 hover:text-white text-sm transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
