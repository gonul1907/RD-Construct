"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submission (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <FadeIn>
        <div
          className="p-12 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.03))",
            border: "1px solid rgba(212,160,23,0.2)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: "rgba(212,160,23,0.15)" }}
          >
            <CheckCircle2 size={32} style={{ color: "#d4a017" }} />
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Bericht Verzonden!
          </h3>
          <p style={{ color: "#818181" }}>
            Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-dark-300 mb-2" htmlFor="name" style={{ color: "#a4a4a4" }}>
            Naam *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Janssen"
            className="w-full px-4 py-3 rounded-xl text-white placeholder-dark-500 outline-none transition-all duration-200 focus:ring-2"
            style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              color: "#e3e3e3",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a017")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="phone" style={{ color: "#a4a4a4" }}>
            Telefoonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+31 6 16 17 20 70"
            className="w-full px-4 py-3 rounded-xl text-white placeholder-dark-500 outline-none transition-all duration-200"
            style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#e3e3e3" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a017")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="email" style={{ color: "#a4a4a4" }}>
          E-mailadres *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jan@voorbeeld.be"
          className="w-full px-4 py-3 rounded-xl text-white placeholder-dark-500 outline-none transition-all duration-200"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#e3e3e3" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a017")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="subject" style={{ color: "#a4a4a4" }}>
          Onderwerp *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: formData.subject ? "#e3e3e3" : "#515151" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a017")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        >
          <option value="" disabled>Kies een onderwerp</option>
          <option value="renovatie">Renovatie</option>
          <option value="nieuwbouw">Nieuwbouw</option>
          <option value="badkamer">Badkamer</option>
          <option value="keuken">Keuken</option>
          <option value="dakwerken">Dakwerken</option>
          <option value="afwerking">Gyproc & Afwerking</option>
          <option value="algemeen">Algemene vraag</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="message" style={{ color: "#a4a4a4" }}>
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Vertel ons over uw project..."
          className="w-full px-4 py-3 rounded-xl text-white placeholder-dark-500 outline-none transition-all duration-200 resize-none"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#e3e3e3" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a017")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Verzenden...
          </>
        ) : (
          <>
            Bericht Verzenden
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
