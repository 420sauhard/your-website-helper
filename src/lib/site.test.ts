import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { absoluteUrl, feeCategories, pricing, shareImage, siteUrl, waLink } from "./clinic";
import { photos, testimonialVideos, videos } from "./media";
import { normalizeMobile } from "./phone";

describe("normalizeMobile", () => {
  it.each([
    ["9876543210", "9876543210"],
    ["98765 43210", "9876543210"],
    ["+91 98765-43210", "9876543210"],
    ["919876543210", "9876543210"],
    ["09876543210", "9876543210"],
  ])("accepts %s", (input, expected) => {
    expect(normalizeMobile(input)).toBe(expected);
  });

  it.each(["abcdefghij", "987654321", "98765432101", "1234567890", "", "+1 9876543210"])(
    "rejects %s",
    (input) => {
      expect(normalizeMobile(input)).toBeNull();
    },
  );
});

describe("waLink", () => {
  it.each(["Tom & Jerry #1 100% ?x=1+2", "नमस्ते, मुझे दर्द है 🙏", "Line 1\nLine 2 — dash"])(
    "round-trips %s",
    (message) => {
      const [base, text] = waLink(message).split("?text=");
      expect(base).toMatch(/^https:\/\/wa\.me\/91\d{10}$/);
      expect(text).not.toMatch(/[&# \n]/);
      expect(decodeURIComponent(text ?? "")).toBe(message);
    },
  );
});

describe("absoluteUrl", () => {
  it("joins the site origin and path", () => {
    expect(absoluteUrl("/pricing")).toBe(`${siteUrl}/pricing`);
    expect(siteUrl).not.toMatch(/\/$/);
  });
});

describe("fee data", () => {
  const items = feeCategories.flatMap((c) => c.items);

  it("every fee is in rupees with a unit", () => {
    for (const item of items) {
      expect(item.price, item.name).toMatch(/^₹\d+$/);
      expect(item.unit.trim(), item.name).not.toBe("");
    }
  });

  it("homepage highlights match the fee table", () => {
    const priceOf = (name: string) => items.find((i) => i.name === name)?.price;
    expect(pricing.find((p) => p.label === "Advance Consultation")?.price).toBe(
      priceOf("Advance Consultation"),
    );
    expect(pricing.find((p) => p.label === "Physiotherapy")?.price).toBe(priceOf("Physiotherapy"));
  });
});

describe("media", () => {
  it("every referenced photo, video, poster and share image exists in public/", () => {
    const paths = [
      ...photos.map((p) => p.src),
      ...videos.flatMap((v) => [v.src, v.poster]),
      new URL(shareImage.url).pathname,
    ];
    for (const path of paths) expect(existsSync(`public${path}`), path).toBe(true);
  });

  it("every photo has alt text and there are testimonials", () => {
    for (const p of photos) expect(p.alt.trim(), p.src).not.toBe("");
    expect(testimonialVideos.length).toBeGreaterThan(0);
  });
});
