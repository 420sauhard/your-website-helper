import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const first = menuRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>("a, button"),
        );
        const all = buttonRef.current ? [buttonRef.current, ...items] : items;
        const firstEl = all[0];
        const lastEl = all[all.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-h-11 items-center" aria-label={`${clinic.name} — Home`}>
          <span className="block font-display text-base font-bold sm:text-lg">
            Anita Devi Spine &amp; Joints Centre
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              activeProps={{ className: "bg-secondary text-foreground", "aria-current": "page" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:+91${clinic.phones[0]}`} className="btn-base btn-primary hidden sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phones[0]}
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-base btn-outline h-11 w-11 justify-center p-0 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <div
            className="fixed inset-x-0 top-16 bottom-0 bg-foreground/30 lg:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            ref={menuRef}
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background shadow-lg lg:hidden"
          >
            <ul className="container-page grid gap-1.5 py-4">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                    activeProps={{ className: "bg-secondary text-foreground", "aria-current": "page" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`tel:+91${clinic.phones[0]}`}
                  className="btn-base btn-primary mt-2 min-h-12 w-full justify-center"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {clinic.phones[0]}
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
