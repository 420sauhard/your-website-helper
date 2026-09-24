import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { pricing, waLink } from "@/lib/clinic";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Consultation & Therapy Fees — ₹600 Assessment, ₹5,000 10-Day Plan" },
      {
        name: "description",
        content:
          "Transparent fees at Anita Devi Spine & Joints Centre, Ghaziabad: ₹600 initial consultation, ₹600 per therapy session, ₹5,000 for a 10-session rehabilitation plan.",
      },
      { property: "og:title", content: "Fees — Anita Devi Spine & Joints Centre" },
      {
        property: "og:description",
        content:
          "₹600 consultation, ₹600 per session and a ₹5,000 ten-day rehabilitation package.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/pricing" },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const included = [
  "Range-of-motion and posture assessment",
  "Clinical review of reports and scans you bring",
  "Session-by-session progress notes",
  "Home exercise plan on discharge",
];

function Pricing() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Authorized fee structure</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Consultation &amp; session fees</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Fees are fixed and confirmed by the clinic — you always know what a visit costs before you
        arrive.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.label}
            className={`surface-card p-7 ${p.featured ? "ring-2 ring-primary" : ""}`}
          >
            {p.featured ? (
              <span className="eyebrow text-primary">Best value</span>
            ) : (
              <span className="eyebrow text-muted-foreground">Standard</span>
            )}
            <p className="mt-3 font-display text-4xl font-extrabold text-primary-deep">{p.price}</p>
            <p className="mt-1 font-semibold">{p.label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            <Link to="/contact" className="btn-base btn-primary mt-6 w-full">
              Book this
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-7">
          <h2 className="font-display text-xl font-bold">Always included</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {included.map((i) => (
              <li key={i} className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-card p-7">
          <h2 className="font-display text-xl font-bold">Questions about a package?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Message the clinic desk on WhatsApp and the team will confirm availability, timings and
            what to bring.
          </p>
          <a
            href={waLink("Hello, I have a question about the treatment packages and fees.")}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-whatsapp mt-6"
          >
            <MessageCircle className="h-4 w-4" /> Chat with the clinic
          </a>
        </div>
      </div>
    </div>
  );
}
