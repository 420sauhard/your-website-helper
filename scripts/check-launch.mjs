// Fails while launch placeholders remain. Run before pushing to main: npm run check:launch
import { readFileSync } from "node:fs";

const files = ["src/lib/clinic.ts", "public/sitemap.xml", "public/robots.txt"];
const offenders = files.filter((f) => readFileSync(f, "utf8").includes("YOUR-DOMAIN"));

if (offenders.length > 0) {
  console.error(`Placeholder domain YOUR-DOMAIN.com still in: ${offenders.join(", ")}`);
  process.exit(1);
}
console.log("Launch check passed.");
