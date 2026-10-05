import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgePercent,
  CalendarCheck,
  Info,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { absoluteUrl, feeCategories, feeTerms, waLink, type FeeCategory } from "@/lib/clinic";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Treatment Charges & Consultation Fees — Anita Devi Spine & Joints Centre" },
      {
        name: "description",
        content:
          "Clinic fees in Ghaziabad: ₹600 consultation (₹800 same-day), physiotherapy ₹500/session, acupuncture & naturopathy from ₹200. 10% off 10-day packages.",
      },
      { property: "og:title", content: "Fees — Anita Devi Spine & Joints Centre" },
      {
        property: "og:description",
        content:
          "₹600 consultation, ₹500 physiotherapy session, naturopathy from ₹200 and 10% off a 10-day package.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/pricing") },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/pricing") }],
  }),
  component: Pricing,
});

const categoryIcons: Record<string, typeof Stethoscope> = {
  "consultation-core": Stethoscope,
  naturopathy: Leaf,
};

const included = [
  "Range-of-motion and posture assessment",
  "Clinical review of reports and scans you bring",
  "Session-by-session progress notes",
  "Home exercise plan on discharge",
];

function Pricing() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Anita Devi Spine and Joints Centre</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
        Treatment charges &amp; consultation fees
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Fees are fixed and confirmed by the clinic — you always know what a visit costs before you
        arrive.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {feeCategories.map((category) => (
          <FeeCard key={category.id} category={category} />
        ))}
      </div>

      <section
        aria-labelledby="fee-terms-heading"
        className="mt-8 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-7"
      >
        <div className="flex items-center gap-3">
          <BadgePercent className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
          <h2 id="fee-terms-heading" className="font-display text-xl font-bold">
            Important terms &amp; offers
          </h2>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {feeTerms.map((term) => (
            <li
              key={term}
              className="flex gap-2 rounded-xl bg-card/80 p-4 text-sm font-medium text-foreground"
            >
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {term}
            </li>
          ))}
        </ul>
      </section>

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

function FeeCard({ category }: { category: FeeCategory }) {
  const Icon = categoryIcons[category.id] ?? Stethoscope;
  const headingId = `${category.id}-heading`;

  return (
    <section aria-labelledby={headingId} className="surface-card flex flex-col p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id={headingId} className="font-display text-xl font-bold">
            {category.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
        </div>
      </div>

      <ul className="mt-6 flex-1 divide-y divide-border">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 py-3.5">
            <div className="min-w-0">
              <p className="font-semibold">{item.name}</p>
              {item.note && <p className="mt-0.5 text-xs text-muted-foreground">{item.note}</p>}
            </div>
            <p className="shrink-0 text-right">
              <span className="font-display text-xl font-extrabold text-primary-deep">
                {item.price}
              </span>
              <span className="block text-xs text-muted-foreground">{item.unit}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link to="/contact" className="btn-base btn-primary w-full">
          <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Book appointment
        </Link>
        <a
          href={waLink(`Hello, I'd like to know more about ${category.title}.`)}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-outline w-full"
          aria-label={`Inquire about ${category.title} on WhatsApp`}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Inquire now
        </a>
      </div>
    </section>
  );
}
