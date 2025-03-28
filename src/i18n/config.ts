import en from "./../../messages/en.json";
import vi from "./../../messages/vi.json";

export type Locale = (typeof locales)[number];

export const locales = ["en", "vi"] as const;
export const defaultLocale: Locale = "en";
export const messages = { en, vi };
