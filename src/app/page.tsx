import { redirect } from "@/i18n/navigation";
import { defaultLocale } from "@/i18n/routing";

export default function RootLayout() {
  return redirect({
    href: `/`,
    locale: defaultLocale,
  });
}
