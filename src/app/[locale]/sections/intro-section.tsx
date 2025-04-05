"use client";

import SlideIn from "@/components/slide-in";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function IntroSection() {
  const t = useTranslations("homePage.intro");

  return (
    <section className="bg-white px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl m-auto">
        <div className="flex flex-col">
          <SlideIn
            as="h2"
            className="text-4xl font-medium text-center lg:text-start leading-12"
          >
            {t("headline")}
          </SlideIn>
          <SlideIn
            as="p"
            delay={0.1}
            className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8"
          >
            {t("body")}
          </SlideIn>
        </div>
        <SlideIn delay={0.2}>
          <Image
            src={t("image")}
            alt="usage image"
            width={565}
            height={511}
            className="max-w-[300px] md:max-w-[450px]"
          />
        </SlideIn>
      </div>
    </section>
  );
}
