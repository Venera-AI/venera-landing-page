import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function PrivacySection() {
  const t = useTranslations("homePage.privacy");

  return (
    <section className="bg-[#ecf5ff] p-16 max-w-full mx-auto border-white border-[80px] rounded-lg">
      <div className="flex flex-col items-center justify-center py-12 px-6 md:p-16 max-w-4xl m-auto">
        <Image
          src={t("image")}
          alt="Privacy Icon"
          width={150}
          height={150}
          className="mb-6 w-[150px] h-[150px]"
        />

        <h2 className="font-medium text-2xl md:text-3xl text-center text-[#1a1a1a]">
          {t("headline")}
        </h2>
        <div className="mt-4 mx-auto max-w-2xl">
          <p className="mt-2 text-center text-xl md:text-2xl leading-relaxed text-black">
            {t("body")}
          </p>
        </div>

        <Link
          href={t("actionButton.link")}
          className="bg-[#158d6a] text-white md:px-16 md:py-5 px-12 py-4 md:text-xl rounded-2xl font-bold mt-8"
        >
          {t("actionButton.label")}
        </Link>
      </div>
    </section>
  );
}
