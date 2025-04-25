import SlideIn from "@/components/slide-in";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

        <SlideIn as="h2" className="mb-6 font-medium text-4xl text-center">
          {t("headline")}
        </SlideIn>
        <SlideIn
          as="h2"
          className="mb-16 lg:px-8 text-center text-xl md:text-2xl leading-relaxed"
        >
          {t("body")}
        </SlideIn>

        <SlideIn className="bg-[#158d6a] text-white md:text-xl rounded-2xl font-bold">
          <Link
            className="block px-12 md:px-16 py-4 md:py-5"
            href={t("actionButton.link")}
          >
            {t("actionButton.label")}
          </Link>
        </SlideIn>
      </div>
    </section>
  );
}
