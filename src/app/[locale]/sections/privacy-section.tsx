import SlideIn from "@/components/slide-in";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function PrivacySection() {
  const t = useTranslations("homePage.privacy");

  return (
    <section className="p-6 md:p-12 xl:p-20">
      <div className="mx-auto max-w-7xl bg-[#ecf5ff] flex flex-col items-center py-14 px-4 lg:px-8">
        <SlideIn className="mb-6">
          <Image
            src={t("image")}
            alt="Privacy Icon"
            className="w-[150px]"
            width={0}
            height={0}
          />
        </SlideIn>

        <SlideIn
          as="h2"
          delay={0.2}
          className="mb-6 font-medium text-4xl text-center"
        >
          {t("headline")}
        </SlideIn>
        <SlideIn
          delay={0.3}
          as="h2"
          className="mb-16 lg:px-8 text-center text-xl md:text-2xl leading-relaxed"
        >
          {t("body")}
        </SlideIn>

        <SlideIn
          delay={0.4}
          className="bg-[#158d6a] text-white px-12 md:px-16 py-4 md:py-5 md:text-xl rounded-2xl font-bold"
        >
          <Link href={t("actionButton.link")}>{t("actionButton.label")}</Link>
        </SlideIn>
      </div>
    </section>
  );
}
