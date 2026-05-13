import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "R&D Construct | Premium Bouwbedrijf",
    template: "%s | R&D Construct",
  },
  description:
    "R&D Construct is uw partner voor renovaties, nieuwbouw, badkamers, keukens en dakwerken. Premium kwaliteit, betrouwbaar vakmanschap.",
  keywords: [
    "bouwbedrijf",
    "renovatie",
    "nieuwbouw",
    "badkamer",
    "keuken",
    "dakwerken",
    "gyproc",
    "afwerking",
    "R&D Construct",
  ],
  authors: [{ name: "R&D Construct" }],
  creator: "R&D Construct",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "R&D Construct",
    title: "R&D Construct | Premium Bouwbedrijf",
    description:
      "Uw partner voor renovaties, nieuwbouw, badkamers, keukens en dakwerken.",
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D Construct | Premium Bouwbedrijf",
    description:
      "Uw partner voor renovaties, nieuwbouw, badkamers, keukens en dakwerken.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-dark-950 text-dark-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
