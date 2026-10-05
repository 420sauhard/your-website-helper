export const clinic = {
  name: "Anita Devi Spine & Joints Centre",
  doctor: "Dr. Mukesh Kumar Sharma",
  experience: "15 Years in Practice",
  qualifications: ["DPT", "DAC", "BEMS", "BNYS", "PGDMM"],
  phones: ["9910960410", "9711302246"],
  whatsapp: "9711302246",
  youtube: "https://www.youtube.com/@doctormksharma",
  address: "B-7, Block B, Chander Nagar, Surya Nagar, Ghaziabad, UP 201011",
  timings: [
    { days: "Monday – Saturday", hours: "9:30 AM – 1:00 PM  |  4:30 PM – 8:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 1:00 PM" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=B-7%20Block%20B%2C%20Chander%20Nagar%2C%20Surya%20Nagar%2C%20Ghaziabad%2C%20UP%20201011&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=B-7%20Block%20B%2C%20Chander%20Nagar%2C%20Surya%20Nagar%2C%20Ghaziabad%2C%20UP%20201011",
};

// Live site origin, no trailing slash. Used for canonical links, share
// previews and the sitemap (public/sitemap.xml must use the same origin).
export const siteUrl = "https://YOUR-DOMAIN.com";

export const absoluteUrl = (path: string): string => `${siteUrl}${path}`;

export const shareImage = {
  url: absoluteUrl("/media/og-image.jpg"),
  width: "1200",
  height: "630",
  alt: "Anita Devi Spine & Joints Centre physiotherapy hall in Ghaziabad",
};

export const waLink = (message: string) =>
  `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

export const treatments = [
  {
    slug: "spine-joint-rehabilitation",
    title: "Spine & Joint Rehabilitation",
    conditions:
      "Slip disc, cervical spondylosis, sciatica, chronic lower back pain, knee arthritis, frozen shoulder.",
    modalities: ["Spinal Mobilization", "Traction Therapy", "Postural Correction"],
  },
  {
    slug: "advanced-manual-therapy",
    title: "Advanced Manual Therapy",
    conditions:
      "Chiropractic joint adjustments, dry needling, cupping therapy, myofascial release (MFR).",
    modalities: ["Hands-on Manual Protocols", "Active Trigger Release"],
  },
  {
    slug: "electrotherapy",
    title: "Electrotherapy & Technology",
    conditions: "Pain modulation, nerve stimulation, deep tissue inflammatory resolution.",
    modalities: ["IFT", "TENS", "Ultrasound (US)", "Shortwave (SWD)", "Traction"],
  },
  {
    slug: "tele-health",
    title: "Tele-Health & Remote Care",
    conditions: "Post-op follow-up, digital ergonomic guidance, customized home exercise plans.",
    modalities: ["Dedicated Online Video Consultation"],
  },
];

export interface FeeItem {
  name: string;
  price: string;
  unit: string;
  note?: string;
}

export interface FeeCategory {
  id: string;
  title: string;
  description: string;
  items: FeeItem[];
}

export const feeCategories: FeeCategory[] = [
  {
    id: "consultation-core",
    title: "Consultation & Core Therapies",
    description: "Doctor consultation and the main hands-on and needle-based therapies.",
    items: [
      {
        name: "Advance Consultation",
        price: "₹600",
        unit: "per visit",
        note: "Booked at least 1 day prior",
      },
      { name: "Same-Day Consultation", price: "₹800", unit: "per visit" },
      { name: "Physiotherapy", price: "₹500", unit: "per session" },
      {
        name: "Acupuncture",
        price: "₹300",
        unit: "per session",
        note: "+ additional needle cost",
      },
    ],
  },
  {
    id: "naturopathy",
    title: "Naturopathy Treatments",
    description: "Traditional natural therapies for pain relief, stiffness and recovery.",
    items: [
      { name: "Kati Basti", price: "₹300", unit: "per session" },
      { name: "Janu Basti", price: "₹300", unit: "per session" },
      { name: "Potli Massage", price: "₹200", unit: "per session" },
      { name: "Partial Massage", price: "₹200", unit: "per session" },
      { name: "Hizama (Cupping)", price: "₹300", unit: "per session" },
      { name: "Naturopath Lep", price: "₹200", unit: "per session" },
      { name: "Local Steam", price: "₹200", unit: "per session" },
    ],
  },
];

export const feeTerms = [
  "10% discount on a 10-day package",
  "Package stays valid for an additional 15 days",
  "All payments must be made in advance",
];

// Highlights shown on the home page; full list lives on the Fees page.
export const pricing = [
  {
    label: "Advance Consultation",
    price: "₹600",
    detail: "Book at least 1 day prior. Same-day consultation is ₹800.",
  },
  {
    label: "Physiotherapy",
    price: "₹500",
    detail: "Per session — electrotherapy and manual therapy in clinic.",
  },
  {
    label: "10-Day Package",
    price: "10% off",
    detail: "Save on a full 10-day course. Valid for an additional 15 days.",
    featured: true,
  },
];
