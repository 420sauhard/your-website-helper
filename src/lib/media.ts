export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export type VideoCategory = "testimonial" | "tour" | "health-tip";

export interface GalleryVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
  category: VideoCategory;
}

const photo = (file: string, caption: string, alt: string): GalleryPhoto => ({
  src: `/media/photos/${file}.jpg`,
  caption,
  alt,
});

const video = (
  file: string,
  category: VideoCategory,
  title: string,
  description: string,
): GalleryVideo => ({
  src: `/media/videos/${file}.mp4`,
  poster: `/media/videos/${file}.jpg`,
  category,
  title,
  description,
});

export const photos: GalleryPhoto[] = [
  photo(
    "physiotherapy-beds",
    "Physiotherapy hall",
    "Row of physiotherapy beds with electrotherapy units beside each bed",
  ),
  photo(
    "lumbar-traction",
    "Lumbar traction therapy",
    "Patient receiving lumbar traction on a treatment table",
  ),
  photo(
    "electrotherapy-session",
    "Electrotherapy session",
    "Patient lying on a bed during an electrotherapy session",
  ),
  photo(
    "doctor-cabin",
    "Doctor's cabin & certificates",
    "Consultation cabin with Dr. Sharma's framed certificates on the wall",
  ),
  photo(
    "treatment-cubicles",
    "Private treatment cubicles",
    "Curtained treatment cubicles with therapy beds",
  ),
  photo("therapy-hall", "Therapy hall", "Therapy hall with treatment beds separated by curtains"),
  photo(
    "electrotherapy-units",
    "Electrotherapy equipment",
    "Treatment beds lined up with electrotherapy machines",
  ),
  photo(
    "physiotherapy-hall",
    "Treatment area",
    "Long treatment area with beds and therapy equipment",
  ),
  photo(
    "naturopathy-room",
    "Naturopathy section",
    "Naturopathy treatment section with tables and blue curtains",
  ),
  photo(
    "clinic-entrance-view",
    "Inside the clinic",
    "View into the clinic from the entrance showing the waiting and therapy areas",
  ),
];

export const videos: GalleryVideo[] = [
  video(
    "testimonial-1",
    "testimonial",
    "Patient shares her recovery",
    "A patient talks with Dr. Sharma about her treatment experience.",
  ),
  video(
    "testimonial-2",
    "testimonial",
    "Relief after therapy",
    "A patient describes her treatment, including electrotherapy at the clinic.",
  ),
  video(
    "testimonial-3",
    "testimonial",
    "A patient's experience",
    "A patient explains how her condition improved with treatment.",
  ),
  video(
    "testimonial-4",
    "testimonial",
    "Clinic visit & patient story",
    "A walk through the clinic followed by patients sharing their experience.",
  ),
  video(
    "clinic-tour",
    "tour",
    "Tour of the clinic",
    "See the entrance, dispensary, traction and therapy areas.",
  ),
  video(
    "tip-back-neck-pain",
    "health-tip",
    "Major cause of back & neck pain",
    "Dr. Sharma explains how posture and screen work cause pain — and what to do.",
  ),
  video(
    "tip-mind-and-health",
    "health-tip",
    "How your mind affects your health",
    "Dr. Sharma on negative thoughts, stress hormones and immunity.",
  ),
];

export const testimonialVideos = videos.filter((v) => v.category === "testimonial");
