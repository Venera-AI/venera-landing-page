import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import "@/app/styles/index.css";
import home from "@/content/home.json";
import { defaultLocale, Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { redirect } from "@/i18n/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: home.metadata.title,
  description: home.metadata.description,
};

export function generateStaticParams() {
  return [...routing.locales].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    redirect({
      href: "/",
      locale: defaultLocale,
    });
  }

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
