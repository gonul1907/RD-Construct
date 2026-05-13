"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const diensten = [
  "Renovatie",
  "Nieuwbouw",
  "Badkamer",
  "Keuken",
  "Dakwerken",
  "Gyproc & Afwerking",
  "Meerdere diensten",
];

const budgetRanges = [
  "< €5.000",
  "€5.000 – €15.000",
  "€15.000 – €50.000",
  "€50.000 – €150.000",
  "> €150.000",
  "Nog te bepalen",
];

const timelines = [
  "Zo snel mogelijk",
  "Binnen 3 maanden",
  "3 – 6 maanden",
  "6 – 12 maanden",
  "Meer dan 1 jaar",
];

export default function OfferteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dienst: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const inputStyle = {
    background: "#111111",
    border: "1px solid #2a2a2a",
    color: "#e3e3e3",
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#d4a017";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#2a2a2a";
  };

  if (status === "success") {
    return (
      <FadeIn>
        <div
          className="p-14 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.03))",
            border: "1px solid rgba(212,160,23,0.2)",
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(212,160,23,0.15)" }}
          >
            <CheckCircle2 size={40} style={{ color: "#d4a017" }} />
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Offerteaanvraag Ontvangen!
          </h3>
          <p className="max-w-md mx-auto leading-relaxed" style={{ color: "#818181" }}>
            Bedankt voor uw aanvraag. Een van onze medewerkers neemt binnen{" "}
            <strong className="text-white">1 werkdag</strong> contact met u op om uw
            project te bespreken en een gedetailleerde offerte op te stellen.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal info */}
      <div>
        <h3 className="font-bold text-white mb-4">Uw Gegevens</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: "name", label: "Naam *", type: "text", placeholder: "Jan Janssen", required: true },
            { id: "phone", label: "Telefoonnummer *", type: "tel", placeholder: "+31 6 16 17 20 70", required: true },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium mb-2" htmlFor={field.id} style={{ color: "#a4a4a4" }}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={form[field.id as keyof typeof form]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email" style={{ color: "#a4a4a4" }}>
              E-mailadres *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jan@voorbeeld.be"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
              style={inputStyle}
              onFocus={focusStyle}
              onBlur={blurStyle}
            />
          </div>

        </div>
      </div>

      {/* Project info */}
      <div>
        <h3 className="font-bold text-white mb-4">Projectdetails</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: "dienst", label: "Gewenste dienst *", options: diensten, required: true },
            { id: "budget", label: "Budget *", options: budgetRanges, required: true },
            { id: "timeline", label: "Gewenste start", options: timelines, required: false },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium mb-2" htmlFor={field.id} style={{ color: "#a4a4a4" }}>
                {field.label}
              </label>
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                value={form[field.id as keyof typeof form]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={{
                  ...inputStyle,
                  color: form[field.id as keyof typeof form] ? "#e3e3e3" : "#515151",
                }}
                onFocus={focusStyle}
                onBlur={blurStyle}
              >
                <option value="" disabled>Kies...</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="description" style={{ color: "#a4a4a4" }}>
          Beschrijving van uw project *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Beschrijf uw project zo gedetailleerd mogelijk: oppervlakte, specifieke wensen, materiaalvoorkeur..."
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
          style={inputStyle}
          onFocus={focusStyle}
          onBlur={blurStyle}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Aanvraag versturen...
          </>
        ) : (
          <>
            Gratis Offerte Aanvragen <Send size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "#515151" }}>
        100% vrijblijvend · Reactie binnen 1 werkdag · Geen verborgen kosten
      </p>
    </form>
  );
}
