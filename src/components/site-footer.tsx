import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold">{clinic.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {clinic.doctor} — {clinic.experience}. Spine, joint and physiotherapy care in
            Chander Nagar, Ghaziabad.
          </p>
          <p className="mt-3 text-xs font-semibold tracking-wide text-accent">
            {clinic.qualifications.join(" · ")}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-muted-foreground">Visit &amp; Call</p>
          <p className="flex gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {clinic.address}
          </p>
          {clinic.phones.map((p) => (
            <a key={p} href={`tel:+91${p}`} className="flex items-center gap-2 font-medium hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> {p}
            </a>
          ))}
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-muted-foreground">OPD Timings</p>
          {clinic.timings.map((t) => (
            <p key={t.days} className="flex gap-2 text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <span className="block font-medium text-foreground">{t.days}</span>
                {t.hours}
              </span>
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
            <Link to="/treatments" className="hover:text-primary">
              Treatments
            </Link>
            <Link to="/pricing" className="hover:text-primary">
              Fees
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Book appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="container-page border-t border-border py-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
