import { redirect } from "@/i18n/navigation";
import { defaultLocale } from "@/i18n/routing";

export default function PrivacyPage() {
  return redirect({
    href: "/privacy",
    locale: defaultLocale,
  });
}
