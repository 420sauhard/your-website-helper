import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Video,
  Youtube,
} from "lucide-react";
import { CloudShader } from "@/components/ui/cloud-shader";
import { VideoCard } from "@/components/video-card";
import { absoluteUrl, clinic, pricing, shareImage, treatments, waLink } from "@/lib/clinic";
import { testimonialVideos } from "@/lib/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Anita Devi Spine & Joints Centre — Spine, Joint & Physiotherapy Care in Ghaziabad",
      },
      {
        name: "description",
        content:
          "Slip disc, sciatica, spondylosis, knee arthritis & frozen shoulder treatment by Dr. Mukesh Kumar Sharma in Chander Nagar, Ghaziabad. Consultation ₹600.",
      },
      {
        property: "og:title",
        content: "Anita Devi Spine & Joints Centre — Ghaziabad",
      },
      {
        property: "og:description",
        content:
          "15 years of spine and joint rehabilitation: manual therapy, chiropractic adjustments, IFT/TENS/SWD and online consultation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

const schema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: clinic.name,
  description:
    "Spine and joint rehabilitation, physiotherapy, chiropractic and electrotherapy clinic in Chander Nagar, Ghaziabad.",
  url: absoluteUrl("/"),
  image: shareImage.url,
  sameAs: [clinic.youtube],
  telephone: clinic.phones.map((p) => `+91${p}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-7, Block B, Chander Nagar, Surya Nagar",
    addressLocality: "Ghaziabad",
    addressRegion: "UP",
    postalCode: "201011",
    addressCountry: "IN",
  },
  medicalSpecialty: "PhysicalTherapy",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
  employee: {
    "@type": "Physician",
    name: clinic.doctor,
    jobTitle: "Physiotherapist & Chiropractor",
    alumniOf: clinic.qualifications.join(", "),
  },
};

const conditions = [
  "Slip disc",
  "Cervical spondylosis",
  "Sciatica",
  "Chronic lower back pain",
  "Knee arthritis",
  "Frozen shoulder",
];

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative">
        <CloudShader
          className="min-h-[38rem]"
          speed={0.9}
          count={6}
          cloudColor="#f6fbff"
          skyTopColor="#0369a1"
          skyBottomColor="#7dd3fc"
        >
          <div className="container-page py-16">
            <div className="glass-panel max-w-2xl p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent">
                  <Star className="h-3.5 w-3.5" /> 5.0 Google rating
                </span>
                <span className="eyebrow text-muted-foreground">{clinic.experience}</span>
              </div>
              <h1 className="mt-5 text-3xl leading-tight font-extrabold sm:text-5xl">
                Move without pain again — spine &amp; joint care in Ghaziabad
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {clinic.doctor} ({clinic.qualifications.join(", ")}) treats slip disc, sciatica,
                spondylosis and arthritis with hands-on therapy, chiropractic adjustment and
                advanced electrotherapy.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-base btn-primary">
                  <Stethoscope className="h-4 w-4" /> Book appointment
                </Link>
                <a
                  href={waLink(`Hello, I want to book an appointment at ${clinic.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
                <a href={`tel:+91${clinic.phones[0]}`} className="btn-base btn-outline">
                  <Phone className="h-4 w-4" /> {clinic.phones[0]}
                </a>
              </div>
              <div className="mt-7 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Mon–Sat 9:30 AM–1 PM &amp; 4:30–8 PM · Sun 10 AM–1 PM
                </p>
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  B-7, Chander Nagar, Surya Nagar, Ghaziabad
                </p>
              </div>
            </div>
          </div>
        </CloudShader>
      </section>

      {/* Conditions */}
      <section className="container-page py-16">
        <p className="eyebrow text-accent">Conditions we treat</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Relief for the pain that limits your day
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <div key={c} className="surface-card flex items-center gap-3 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="font-semibold">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-secondary/50 py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Treatment modalities</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">What happens in the clinic</h2>
            </div>
            <Link to="/treatments" className="btn-base btn-outline">
              See all treatments
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {treatments.map((t) => (
              <article key={t.slug} className="surface-card p-6">
                <div className="flex items-center gap-3">
                  {t.slug === "tele-health" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <Activity className="h-5 w-5 text-primary" />
                  )}
                  <h3 className="font-display text-lg font-bold">{t.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.conditions}</p>
                <div className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Pricing */}
      <section className="container-page py-16">
        <p className="eyebrow text-accent">Transparent fees</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">No hidden charges</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.label}
              className={`surface-card p-7 ${p.featured ? "ring-2 ring-primary" : ""}`}
            >
              {p.featured ? (
                <span className="eyebrow text-primary">Most chosen</span>
              ) : (
                <span className="eyebrow text-muted-foreground">{p.label}</span>
              )}
              <p className="mt-3 font-display text-4xl font-extrabold text-primary-deep">
                {p.price}
              </p>
              <p className="mt-1 font-semibold">{p.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" /> Fees confirmed by the clinic.
            All payments are made in advance.
          </p>
          <Link to="/pricing" className="btn-base btn-outline">
            See all treatment charges
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Client testimonials</p>
              <h2 id="testimonials-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
                Hear it from our patients
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Real patients of {clinic.name} talk about their treatment and recovery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/gallery" className="btn-base btn-outline">
                View gallery
              </Link>
              <a
                href={clinic.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base bg-[#ff0000] text-white hover:bg-[#d90000]"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" /> YouTube channel
              </a>
            </div>
          </div>
          <ul className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {testimonialVideos.map((v) => (
              <li key={v.src} className="w-[72%] shrink-0 snap-start sm:w-auto">
                <VideoCard video={v} />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
            Swipe to see more →
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="bg-secondary/50 py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Find us</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Walk-in clinic in Chander Nagar</h2>
            <p className="mt-4 text-muted-foreground">{clinic.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={clinic.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-primary"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
              <Link to="/contact" className="btn-base btn-accent">
                Online consultation
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Clinic location on Google Maps"
              src={clinic.mapsEmbed}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
