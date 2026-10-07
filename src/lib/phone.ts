// Returns the 10-digit Indian mobile number, or null if the input isn't one.
// Accepts spaces, dashes and an optional +91 / 91 / 0 prefix.
export function normalizeMobile(input: string): string | null {
  const digits = input.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}
