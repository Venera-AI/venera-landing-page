import { redirect } from "@/i18n/navigation";
import { defaultLocale } from "@/i18n/routing";

export default function TermsPage() {
  return redirect({
    href: "/terms",
    locale: defaultLocale,
  });
}
