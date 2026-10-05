# Anita Devi Spine & Joints Centre — Website

Website for Anita Devi Spine & Joints Centre, Chander Nagar, Ghaziabad
(Dr. Mukesh Kumar Sharma): treatments, fees, gallery, patient testimonials
and appointment booking via WhatsApp.

Built with TanStack Start (React), Tailwind CSS and Vite, and hosted on
Cloudflare Workers.

## Run locally

Requires Node.js 22+ and npm.

```sh
npm install
npm run dev        # http://localhost:8080
```

## Build and deploy

```sh
npm run build      # production build into .output/
npm run deploy     # build and publish to Cloudflare (needs `npx wrangler login` once)
```

Pushes to `main` deploy automatically once the repository is connected in
Cloudflare (Workers & Pages → Create → Import a repository), using:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

## Where things live

| What | File |
|---|---|
| Clinic name, phones, timings, fees, site address | `src/lib/clinic.ts` |
| Gallery photos and videos | `src/lib/media.ts`, files in `public/media/` |
| Pages | `src/routes/` |
| Sitemap and robots | `public/sitemap.xml`, `public/robots.txt` |
