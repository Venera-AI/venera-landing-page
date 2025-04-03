// root layout.tsx is required for static export

import "@/app/styles/index.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
