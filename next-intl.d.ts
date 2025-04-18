import { formats } from "@/i18n/request";
import { Locale } from "@/i18n/routing";
import messages from "./content/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
