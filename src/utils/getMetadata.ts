import { Locale, defaultLocale } from "@/i18n/routing";
import { metadata as teamMetadataEn } from "@/metadata/en/team";
import { metadata as teamMetadataVi } from "@/metadata/vi/team";
import { metadata as homeMetadataEn } from "@/metadata/en/home";
import { metadata as homeMetadataVi } from "@/metadata/vi/home";
import { Metadata } from "next";

type MetadataNamespace = "home" | "team";

const metadataMap: Record<Locale, Record<MetadataNamespace, Metadata>> = {
  en: {
    home: homeMetadataEn,
    team: teamMetadataEn,
  },
  vi: {
    home: homeMetadataVi,
    team: teamMetadataVi,
  },
};

export const getMetadata = (
  locale?: string,
  namespace: MetadataNamespace = "home",
) => {
  const lang = (locale || defaultLocale) as Locale;
  return (
    metadataMap[lang]?.[namespace] || metadataMap[defaultLocale][namespace]
  );
};
