import { z } from "zod";

// Arabic-Indic digits in order: the character at index N is the digit N.
const ARABIC_INDIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

// 01 + network (0 Vodafone, 1 Etisalat, 2 Orange, 5 WE) + 8 digits = 11 digits.
const EGYPTIAN_MOBILE_PATTERN = /^01[0125]\d{8}$/;

// Error key, not text: the UI translates it (en/ar), so the schema stays language-free.
export const INVALID_EGYPTIAN_MOBILE = "invalid_egyptian_mobile";

/**
 * Turn what a receptionist typed into the local form "01XXXXXXXXX":
 * Arabic digits → English digits, drop spaces and dashes,
 * "+20" or "+20 0" (people often keep the local 0) → "0".
 * It does not validate; the regex below does.
 */
function normalizeMobileInput(raw: string): string {
  return Array.from(raw)
    .map((char) => {
      const digit = ARABIC_INDIC_DIGITS.indexOf(char);
      return digit === -1 ? char : String(digit);
    })
    .join("")
    .replace(/[\s-]/g, "")
    .replace(/^\+200?/, "0");
}

/**
 * An Egyptian mobile number, as typed at reception.
 * Output is E.164 (e.g. "+201012345678"), the format we store.
 */
export const egyptianMobileSchema = z
  .string()
  .transform(normalizeMobileInput)
  .pipe(
    z.string().regex(EGYPTIAN_MOBILE_PATTERN, { error: INVALID_EGYPTIAN_MOBILE }),
  )
  .transform((local) => `+20${local.slice(1)}`);

export type EgyptianMobile = z.output<typeof egyptianMobileSchema>;
