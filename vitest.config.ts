import { defineConfig } from "vitest/config";

// Separate from vite.config.ts so tests don't load the TanStack Start / Nitro plugins.
export default defineConfig({
  resolve: { alias: { "@": `${process.cwd()}/src` } },
  test: { include: ["src/**/*.test.ts"] },
});
