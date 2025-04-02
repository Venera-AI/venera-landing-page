import { defineRouting } from "next-intl/routing";

export type Locale = (typeof locales)[number];

// TODO add "vi" when translation is ready
export const locales = ["en"] as const;
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});
