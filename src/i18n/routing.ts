import { defineRouting } from "next-intl/routing";

export type Locale = (typeof locales)[number];

export const locales = ["en", "vi"] as const;
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});
