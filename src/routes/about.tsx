import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Clock, GraduationCap } from "lucide-react";
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
    ],
  }),
  component: About,
});

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
