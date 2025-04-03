import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://viai.io"),
  title: "Venera AI - Your Smart Health Companion",
  description:
    "Venera AI is an AI-powered health platform that helps users track, analyze their health data, and receive timely insights for better well-being.",
  keywords: ["venera", "healthcare", "AI", "EHR", "digital health"],
  applicationName: "Venera AI",
  authors: [{ name: "Venera AI Team", url: "https://viai.io/en/team" }],
  creator: "Venera AI Team",
  category: "Healthcare & Medical",
  classification: "Health",
  icons: [
    {
      rel: "icon",
      url: "/icons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/icons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/icons/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      url: "/icons/favicon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      url: "/icons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/apple-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/apple-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/android-icon-192x192.png",
      sizes: "192x192",
    },
  ],
  manifest: "/icons/site.webmanifest",
  twitter: {
    site: "https://viai.io/",
    creator: "Venerai AI Team",
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://viai.io/",
    title: "Venera AI",
    description:
      "Venera AI is an AI-powered health platform that helps users track, analyze their health data, and receive timely insights for better well-being.",
    siteName: "Venera AI",
    locale: "en_US",
  },
};
