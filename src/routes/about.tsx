import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Clock,
  GraduationCap,
  HandHeart,
  Leaf,
  Quote,
  Sparkles,
  Youtube,
} from "lucide-react";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Dr. Mukesh Kumar Sharma — Physiotherapist & Chiropractor, Ghaziabad" },
      {
        name: "description",
        content:
          "Meet Dr. Mukesh Kumar Sharma (DPT, DAC, BEMS, BNYS, PGDMM), lead clinician at Anita Devi Spine & Joints Centre with 15 years of spine and joint practice.",
      },
      { property: "og:title", content: "Dr. Mukesh Kumar Sharma — 15 Years in Practice" },
      {
        property: "og:description",
        content:
          "Credentials, clinical approach and OPD timings of the lead clinician at Anita Devi Spine & Joints Centre, Ghaziabad.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const expertise = [
  "Naturopathy & Yoga Science (Graduate)",
  "Electro Homeopathy (Graduate)",
  "Physiotherapy (Diploma)",
  "Acupuncture (Diploma)",
  "Clinical Hypnotherapy (Diploma)",
];

const pillars = [
  {
    icon: Leaf,
    title: "Natural healing",
    text: "Naturopathic remedies and yoga practices that support the body's own recovery.",
  },
  {
    icon: HandHeart,
    title: "Holistic well-being",
    text: "Physiotherapy, acupuncture and electro homeopathy combined around each patient.",
  },
  {
    icon: Sparkles,
    title: "Power of the mind",
    text: "Clinical hypnotherapy and mind-body practices for lasting, whole-person change.",
  },
];

const approach = [
  "Detailed assessment and range-of-motion testing before any therapy begins.",
  "Hands-on manual and chiropractic correction rather than painkiller dependence.",
  "Electrotherapy chosen per condition: IFT, TENS, ultrasound, shortwave, traction.",
  "Home exercise and posture plan so results hold after discharge.",
];

function About() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Lead clinician</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{clinic.doctor}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        With {clinic.experience.toLowerCase()}, Dr. Sharma leads {clinic.name} in Chander Nagar,
        Ghaziabad — treating spine and joint conditions with manual therapy, chiropractic
        adjustments and modern electrotherapy.
      </p>

      <section aria-labelledby="intro-heading" className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="surface-card relative overflow-hidden p-7 sm:p-9 lg:col-span-3">
          <Quote
            className="absolute right-6 top-6 hidden h-14 w-14 text-primary/10 sm:block"
            aria-hidden="true"
          />
          <p className="eyebrow text-accent">A note from the doctor</p>
          <h2 id="intro-heading" className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Healing the mind, body &amp; spirit — naturally
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m <span className="font-semibold text-foreground">Dr. Mukesh Sharma</span>. My
              training spans graduate degrees in Naturopathy &amp; Yoga Science and Electro
              Homeopathy, along with diplomas in Physiotherapy, Acupuncture and Clinical
              Hypnotherapy.
            </p>
            <p>
              My aim is to bring together the best of traditional and alternative medicine — from
              naturopathic remedies and yoga practices to electro homeopathic treatment,
              physiotherapy techniques and acupuncture — and to use the power of the mind in
              healing.
            </p>
            <p>
              I want to educate and inspire every patient to live a balanced, harmonious life by
              caring for the mind, body and spirit together. Let&apos;s begin your journey towards
              natural healing and lasting wellness.
            </p>
          </div>
          <p className="mt-6 font-display text-lg font-bold text-primary-deep">
            — Dr. Mukesh Kumar Sharma
          </p>
          <a
            href={clinic.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base mt-6 bg-[#ff0000] text-white hover:bg-[#d90000]"
          >
            <Youtube className="h-5 w-5" aria-hidden="true" /> Watch Dr. Sharma on YouTube
          </a>
        </div>

        <div className="surface-card bg-secondary/60 p-7 lg:col-span-2">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold">
            <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
            Training &amp; expertise
          </h3>
          <ul className="mt-5 space-y-3">
            {expertise.map((e) => (
              <li key={e} className="flex gap-3 text-sm font-medium">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <li key={title} className="surface-card p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg font-bold">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="surface-card p-6">
          <Award className="h-5 w-5 text-primary" />
          <p className="mt-3 font-display text-3xl font-extrabold text-primary-deep">15+</p>
          <p className="text-sm text-muted-foreground">Years of clinical practice</p>
        </div>
        <div className="surface-card p-6">
          <GraduationCap className="h-5 w-5 text-primary" />
          <p className="mt-3 font-semibold">Qualifications</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {clinic.qualifications.map((q) => (
              <span
                key={q}
                className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
        <div className="surface-card p-6">
          <Clock className="h-5 w-5 text-primary" />
          <p className="mt-3 font-semibold">OPD timings</p>
          {clinic.timings.map((t) => (
            <p key={t.days} className="mt-2 text-sm text-muted-foreground">
              <span className="block font-medium text-foreground">{t.days}</span>
              {t.hours}
            </p>
          ))}
        </div>
      </div>

      <h2 className="mt-16 text-2xl font-bold">Clinical approach</h2>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {approach.map((a) => (
          <li key={a} className="surface-card flex gap-3 p-5 text-sm">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/contact" className="btn-base btn-primary">
          Book a consultation
        </Link>
        <Link to="/treatments" className="btn-base btn-outline">
          View treatments
        </Link>
      </div>
    </div>
  );
}
