import { describe, expect, it } from "vitest";
import { egyptianMobileSchema, INVALID_EGYPTIAN_MOBILE } from "./egyptian-mobile.js";

describe("egyptianMobileSchema", () => {
  describe("accepts valid numbers and returns E.164", () => {
    it.each([
      ["plain local number", "01012345678", "+201012345678"],
      ["spaces", "010 1234 5678", "+201012345678"],
      ["dashes", "010-1234-5678", "+201012345678"],
      ["already international", "+201112345678", "+201112345678"],
      ["+20 plus the local 0", "+20 010 1234 5678", "+201012345678"],
      ["Arabic-Indic digits", "٠١٠١٢٣٤٥٦٧٨", "+201012345678"],
      ["spaces around it", "  01512345678 ", "+201512345678"],
    ])("%s: %s", (_label, input, expected) => {
      expect(egyptianMobileSchema.safeParse(input)).toEqual({
        success: true,
        data: expected,
      });
    });
  });

  describe("rejects invalid numbers", () => {
    it.each([
      ["one digit missing", "0101234567"],
      ["wrong prefix 013", "01312345678"],
      ["Cairo landline", "0223456789"],
      ["letters", "0101234567a"],
      ["other symbols", "010#1234#5678"],
      ["empty", ""],
    ])("%s: %s", (_label, input) => {
      expect(egyptianMobileSchema.safeParse(input).success).toBe(false);
    });

    it("returns the error key, not a sentence, so the UI can translate it", () => {
      const result = egyptianMobileSchema.safeParse("01312345678");
      expect(result.error?.issues[0]?.message).toBe(INVALID_EGYPTIAN_MOBILE);
    });
  });

  it("rejects input that is not text", () => {
    expect(egyptianMobileSchema.safeParse(1012345678).success).toBe(false);
  });
});
