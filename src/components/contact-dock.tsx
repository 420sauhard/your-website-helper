import { MessageCircle, Phone } from "lucide-react";
import { clinic, waLink } from "@/lib/clinic";

export function ContactDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-lg sm:inset-x-auto sm:right-5 sm:bottom-5 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
        <a
          href={`tel:+91${clinic.phones[0]}`}
          className="btn-base btn-primary flex-1 sm:flex-none"
          aria-label="Call the clinic"
        >
          <Phone className="h-4 w-4" /> Call now
        </a>
        <a
          href={waLink(
            `Hello ${clinic.doctor}, I would like to book an appointment at ${clinic.name}.`,
          )}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-whatsapp flex-1 sm:flex-none"
          aria-label="Message the clinic on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
