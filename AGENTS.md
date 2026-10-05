> [!IMPORTANT]
> Do not rewrite published git history — no force pushing, and no rebasing,
> amending or squashing commits that are already pushed.
>
> Pushes to `main` deploy to production on Cloudflare Workers, so keep `main`
> in a working state: run `npx tsc --noEmit` and `npm run build` before pushing.

- Stack: TanStack Start (React) + Tailwind, built with Vite and Nitro for
  Cloudflare Workers (`vite.config.ts`). Package manager: npm.
- Clinic details, fees and the live site address live in `src/lib/clinic.ts`;
  gallery photos and videos are listed in `src/lib/media.ts`.
