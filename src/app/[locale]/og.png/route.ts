// Ref: https://github.com/vercel/next.js/issues/51147#issuecomment-1842197049

import { generateOgImage } from "@/app/[locale]/og.png/generateOgImage";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return [...routing.locales].map((locale) => ({ locale }));
}

export async function GET() {
  return generateOgImage();
}
