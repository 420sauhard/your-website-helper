import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { clinic, treatments, waLink } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Anita Devi Spine & Joints Centre, Ghaziabad" },
      {
        name: "description",
        content:
          "Book a clinic visit or online physiotherapy consultation in Chander Nagar, Ghaziabad. Call 9711302246 / 9910960410 or send your details on WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment — Ghaziabad Spine & Joints Clinic" },
      {
        property: "og:description",
        content:
          "Click to call, WhatsApp the clinic desk, get directions to B-7 Chander Nagar, or request an online consultation.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    mode: "Clinic visit",
    concern: treatments[0]?.title ?? "Spine & Joint Rehabilitation",
    message: "",
  });

  const summary = [
    `New appointment request — ${clinic.name}`,
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Mode: ${form.mode}`,
    `Concern: ${form.concern}`,
    form.message ? `Details: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const disabled = form.name.trim().length < 2 || form.phone.trim().length < 10;

  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Appointments &amp; tele-health</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Book your visit</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Fill the form and send it straight to the clinic desk on WhatsApp, or simply call us during
        OPD hours.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="surface-card space-y-5 p-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(summary), "_blank", "noreferrer");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Your name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full name"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="block text-sm font-semibold">
              Mobile number
              <input
                required
                inputMode="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="10-digit mobile"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold">
            Consultation mode
            <select
              value={form.mode}
              onChange={(e) => setForm({ ...form, mode: e.target.value })}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            >
              <option>Clinic visit</option>
              <option>Online video consultation</option>
            </select>
          </label>

          <label className="block text-sm font-semibold">
            Main concern
            <select
              value={form.concern}
              onChange={(e) => setForm({ ...form, concern: e.target.value })}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            >
              {treatments.map((t) => (
                <option key={t.slug}>{t.title}</option>
              ))}
              <option>Something else</option>
            </select>
          </label>

          <label className="block text-sm font-semibold">
            Symptoms &amp; preferred time
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="e.g. Lower back pain since 3 weeks, prefer evening slot"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </label>

          <button type="submit" disabled={disabled} className="btn-base btn-whatsapp w-full disabled:opacity-50">
            <Send className="h-4 w-4" /> Send request on WhatsApp
          </button>
          <p className="text-xs text-muted-foreground">
            Your details open in WhatsApp so the clinic desk can confirm the slot with you directly.
          </p>
        </form>

        <div className="space-y-5">
          <div className="surface-card p-7">
            <h2 className="font-display text-lg font-bold">Direct lines</h2>
            <div className="mt-4 grid gap-3">
              {clinic.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="btn-base btn-primary">
                  <Phone className="h-4 w-4" /> {p}
                </a>
              ))}
              <a
                href={waLink(`Hello, I would like to book an appointment at ${clinic.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp desk
              </a>
            </div>
          </div>

          <div className="surface-card p-7">
            <h2 className="font-display text-lg font-bold">Clinic &amp; timings</h2>
            <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {clinic.address}
            </p>
            {clinic.timings.map((t) => (
              <p key={t.days} className="mt-3 flex gap-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium text-foreground">{t.days}</span>
                  {t.hours}
                </span>
              </p>
            ))}
            <a
              href={clinic.mapsDirections}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-accent mt-5 w-full"
            >
              One-tap directions
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-card">
        <iframe
          title="Clinic location on Google Maps"
          src={clinic.mapsEmbed}
          className="h-96 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
