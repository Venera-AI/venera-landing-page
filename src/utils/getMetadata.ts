import metadataEn from "@/content/metadata-en.json";
import metadataVi from "@/content/metadata-vi.json";

export type SupportedLanguages = "en" | "vi";

export const metadata: Record<SupportedLanguages, typeof metadataEn> = {
  en: metadataEn,
  vi: metadataVi,
};

export const defaultLanguage: SupportedLanguages = "en";

export const getMetadata = (lang?: string) => {
  if (!lang) return metadata[defaultLanguage];
  return metadata[lang as SupportedLanguages] || metadata[defaultLanguage];
};
