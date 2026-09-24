import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { clinic } from "@/lib/clinic";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Dr. Sharma" },
  { to: "/treatments", label: "Treatments" },
  { to: "/pricing", label: "Fees" },
  { to: "/contact", label: "Book / Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="block font-display text-base font-bold sm:text-lg">
            Anita Devi Spine &amp; Joints Centre
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:+91${clinic.phones[0]}`} className="btn-base btn-primary hidden sm:inline-flex">
            <Phone className="h-4 w-4" />
            {clinic.phones[0]}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-base btn-outline px-3 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="container-page grid gap-1 border-t border-border py-3 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:+91${clinic.phones[0]}`} className="btn-base btn-primary mt-2 sm:hidden">
            <Phone className="h-4 w-4" /> Call {clinic.phones[0]}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
