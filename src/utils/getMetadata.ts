import { Locale, defaultLocale } from "@/i18n/routing";
import { metadata as metadataEn } from "@/metadata/en";
import { metadata as metadataVi } from "@/metadata/vi";

export const metadata: Record<Locale, typeof metadataEn> = {
  en: metadataEn,
  vi: metadataVi,
};

export const getMetadata = (lang?: string) => {
  if (!lang) return metadata[defaultLocale];
  return metadata[lang as Locale] || metadata[defaultLocale];
};
