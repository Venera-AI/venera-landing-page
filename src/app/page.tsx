import { redirect } from "@/i18n/navigation";
import { defaultLocale } from "@/i18n/config";
import "@/app/styles/index.css";

// TODO use metadata of default locale
// export const metadata: Metadata = {
//   title: home.metadata.title,
//   description: home.metadata.description,
// };

export default function RootLayout() {
  return redirect({
    href: `/`,
    locale: defaultLocale,
  });
}
