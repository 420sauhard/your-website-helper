import type { GalleryVideo } from "@/lib/media";

export function VideoCard({ video }: { video: GalleryVideo }) {
  return (
    <figure className="surface-card flex flex-col overflow-hidden">
      <video
        className="aspect-[9/16] w-full bg-primary-deep object-cover"
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="none"
        aria-label={video.title}
      />
      <figcaption className="p-4">
        <p className="font-semibold leading-snug">{video.title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
      </figcaption>
    </figure>
  );
}
