import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, MessageCircle, Video } from "lucide-react";
import { clinic, treatments, waLink } from "@/lib/clinic";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Spine Care, Chiropractic, IFT/TENS/SWD & Arthritis Rehab" },
      {
        name: "description",
        content:
          "Spine and joint rehabilitation, manual and chiropractic therapy, dry needling, cupping, IFT, TENS, ultrasound, shortwave and online consultation in Ghaziabad.",
      },
      { property: "og:title", content: "Treatments at Anita Devi Spine & Joints Centre" },
      {
        property: "og:description",
        content:
          "Four care tracks: spine & joint rehabilitation, advanced manual therapy, electrotherapy technology and tele-health follow-up.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/treatments" },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Clinical service matrix</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Treatments &amp; modalities</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Every plan starts with an assessment, then combines hands-on therapy and technology chosen
        for your condition.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {treatments.map((t) => (
          <article key={t.slug} className="surface-card p-7">
            <div className="flex items-center gap-3">
              {t.slug === "tele-health" ? (
                <Video className="h-5 w-5 text-primary" />
              ) : (
                <Activity className="h-5 w-5 text-primary" />
              )}
              <h2 className="font-display text-xl font-bold">{t.title}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.conditions}</p>
            <p className="eyebrow mt-6 text-muted-foreground">Protocol</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.modalities.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent"
                >
                  {m}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="surface-card mt-12 flex flex-wrap items-center justify-between gap-4 p-7">
        <div>
          <h2 className="font-display text-xl font-bold">Not sure which therapy you need?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share your symptoms and {clinic.doctor} will advise the right starting point.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-base btn-primary">
            Book assessment
          </Link>
          <a
            href={waLink("Hello, I need advice on which therapy suits my condition.")}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
