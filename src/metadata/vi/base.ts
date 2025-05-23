import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: "Venera AI - Trợ lý sức khỏe thông minh",
  description:
    "Venera AI là nền tảng chăm sóc sức khỏe sử dụng AI giúp người dùng theo dõi, phân tích dữ liệu sức khỏe và đề xuất điều chỉnh kịp thời.",
  keywords: [
    "venera",
    "chăm sóc sức khỏe",
    "AI",
    "hồ sơ bệnh án",
    "sức khỏe số",
  ],
  applicationName: "Venera AI",
  authors: [
    {
      name: "Venera AI Team",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/vi/team`,
    },
  ],
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
    site: process.env.NEXT_PUBLIC_BASE_URL,
    creator: "Venerai AI Team",
    card: "summary_large_image",
    images: ["/en/og.png"],
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: ["/en/og.png"],
    title: "Venera AI",
    description:
      "Venera AI là nền tảng chăm sóc sức khỏe sử dụng AI giúp người dùng theo dõi, phân tích dữ liệu sức khỏe và đề xuất điều chỉnh kịp thời.",
    siteName: "Venera AI",
    locale: "vi_VN",
  },
};
