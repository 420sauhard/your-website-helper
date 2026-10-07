import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { VideoCard } from "@/components/video-card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { absoluteUrl, clinic } from "@/lib/clinic";
import { photos, videos, type GalleryVideo } from "@/lib/media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo & Video Gallery — Anita Devi Spine & Joints Centre" },
      {
        name: "description",
        content:
          "See inside Anita Devi Spine & Joints Centre, Ghaziabad: therapy halls, traction, electrotherapy, patient testimonials and health tips from Dr. Sharma.",
      },
      { property: "og:title", content: "Gallery — Anita Devi Spine & Joints Centre" },
      {
        property: "og:description",
        content: "Clinic photos, patient testimonial videos and health tips from Dr. Sharma.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/gallery") },
      { property: "og:site_name", content: "Anita Devi Spine & Joints Centre" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: Gallery,
});

const filters = [
  { id: "all", label: "All" },
  { id: "photos", label: `Photos (${photos.length})` },
  { id: "videos", label: `Videos (${videos.length})` },
] as const;

type Filter = (typeof filters)[number]["id"];

const testimonials = videos.filter((v) => v.category === "testimonial");
const otherVideos = videos.filter((v) => v.category !== "testimonial");

function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const showPhotos = filter !== "videos";
  const showVideos = filter !== "photos";

  return (
    <div className="container-page py-16">
      <p className="eyebrow text-accent">Media gallery</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Inside our clinic</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Take a look at our therapy halls and equipment, hear from our patients, and watch health
        tips from Dr. Sharma.
      </p>

      <div role="group" aria-label="Filter gallery" className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {showPhotos && <PhotoGrid />}

      {showVideos && (
        <>
          <VideoSection id="testimonials" title="Patient testimonials" items={testimonials} />
          <VideoSection id="tour-tips" title="Clinic tour & health tips" items={otherVideos} />
        </>
      )}

      <YoutubeBanner />
    </div>
  );
}

function PhotoGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : photos[openIndex];
  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));

  return (
    <section aria-labelledby="photos-heading" className="mt-12">
      <h2 id="photos-heading" className="text-2xl font-bold">
        Clinic photos
      </h2>
      <ul className="mt-6 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4">
        {photos.map((p, i) => (
          <li key={p.src} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative h-full w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`Open photo: ${p.caption}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1600}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm font-semibold text-white">
                {p.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent
          className="max-w-4xl gap-3 p-3 sm:p-4"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") step(-1);
            if (e.key === "ArrowRight") step(1);
          }}
        >
          {current && (
            <>
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="btn-base btn-outline px-3"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="min-w-0 text-center">
                  <DialogTitle className="text-base">{current.caption}</DialogTitle>
                  <DialogDescription className="text-xs">
                    {(openIndex ?? 0) + 1} of {photos.length}
                  </DialogDescription>
                </div>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="btn-base btn-outline px-3"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function VideoSection({ id, title, items }: { id: string; title: string; items: GalleryVideo[] }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="mt-14">
      <h2 id={`${id}-heading`} className="text-2xl font-bold">
        {title}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((v) => (
          <VideoCard key={v.src} video={v} />
        ))}
      </div>
    </section>
  );
}

function YoutubeBanner() {
  return (
    <section className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-primary-deep p-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
      <div>
        <p className="font-display text-xl font-bold sm:text-2xl">More videos on YouTube</p>
        <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">
          Dr. Sharma shares regular tips on naturopathy, yoga, physiotherapy and natural healing.
        </p>
      </div>
      <a
        href={clinic.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-base shrink-0 bg-[#ff0000] text-white hover:bg-[#d90000]"
      >
        <Youtube className="h-5 w-5" aria-hidden="true" /> Watch on YouTube
      </a>
    </section>
  );
}
