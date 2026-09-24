export const clinic = {
  name: "Anita Devi Spine & Joints Centre",
  doctor: "Dr. Mukesh Kumar Sharma",
  experience: "15 Years in Practice",
  qualifications: ["DPT", "DAC", "BEMS", "BNYS", "PGDMM"],
  phones: ["9711302246", "9910960410"],
  whatsapp: "9711302246",
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
    conditions:
      "Pain modulation, nerve stimulation, deep tissue inflammatory resolution.",
    modalities: ["IFT", "TENS", "Ultrasound (US)", "Shortwave (SWD)", "Traction"],
  },
  {
    slug: "tele-health",
    title: "Tele-Health & Remote Care",
    conditions:
      "Post-op follow-up, digital ergonomic guidance, customized home exercise plans.",
    modalities: ["Dedicated Online Video Consultation"],
  },
];

export const pricing = [
  {
    label: "Initial Consultation",
    price: "₹600",
    detail: "Comprehensive diagnosis, range testing & clinical review.",
  },
  {
    label: "Per-Session Therapy",
    price: "₹600",
    detail: "Targeted electrotherapy or manual therapy session in clinic.",
  },
  {
    label: "10-Day Treatment Plan",
    price: "₹5,000",
    detail: "Complete 10-session curated rehabilitation regimen.",
    featured: true,
  },
];
