import { Locale, routing } from "@/i18n/routing";
import { getMetadata } from "@/utils/getMetadata";
import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import clsx from "clsx";
import NavBar from "@/app/components/nav-bar";
import Footer from "@/app/components/footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
});

const localeFont: Record<Locale, string> = {
  vi: "font-nunito",
  en: "font-poppins",
};

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getMetadata(locale);
  return metadata;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } else {
    setRequestLocale(locale as Locale);
  }

  return (
    <html lang={locale}>
      <body
        className={clsx(
          // despite having different default font, both fonts are being used across locales
          `${poppins.variable} ${nunito.variable} antialiased`,
          localeFont[locale],
        )}
      >
        <NextIntlClientProvider>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
