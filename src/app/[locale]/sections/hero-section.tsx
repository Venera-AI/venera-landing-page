import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SlideIn from "@/components/slide-in";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("homePage.hero");

  return (
    <div className="bg-gradient-to-r from-[#9ec5f7] to-darkblue overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-5 py-10 lg:py-15 md:justify-between mx-auto lg:max-w-7xl">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] p-3 md:p-10 lg:p-0 lg:pl-20 text-center">
          <div className="relative">
            <div className="w-full sm:top-[-30] md:top-0 md:h-auto md:pl-0 lg:top-0 lg:h-auto top-0 left-1/2">
              <SlideIn
                direction="down"
                delay={0.3}
                className="relative mx-auto aspect-square w-full max-w-[500px]"
              >
                <Image
                  src={t("images.textEffect")}
                  alt="Left Section Effect"
                  fill
                  className="object-cover"
                />
              </SlideIn>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:pt-20 z-10 transform">
                <SlideIn
                  direction="right"
                  delay={0.5}
                  duration={0.5}
                  className="text-white text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-7"
                >
                  <h1>{t("headline")}</h1>
                </SlideIn>
                <SlideIn
                  as="div"
                  direction="right"
                  delay={0.7}
                  duration={0.5}
                  className="text-white text-center lg:text-left text-xl md:text-2xl lg:text-[54px] bg-transparent"
                >
                  {t("subheadline")}
                </SlideIn>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:relative lg:flex w-full lg:w-[40%] md:py-20 md:mt-0 lg:py-0 overflow-visible">
          <div className="relative flex flex-col mx-auto items-center justify-center">
            <div className="z-20 lg:absolute lg:z-40 w-full lg:top-[70%] lg:left-[0] lg:translate-x-[-60%] mb-5">
              <SlideIn direction="right" delay={1.2} duration={0.8}>
                <Link
                  href={t("buttons.buttonAppStore.link")}
                  target="_blank"
                  className="relative block mx-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] w-full"
                >
                  <Image
                    src={t("buttons.buttonAppStore.img")}
                    alt="App Store button"
                    className="object-contain w-full h-auto"
                    width={0}
                    height={0}
                  />
                </Link>
              </SlideIn>
            </div>
            <SlideIn
              direction="right"
              delay={0.5}
              duration={0.5}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[150%] h-full z-10 transform"
            >
              <Image
                src={t("images.phoneEffect")}
                alt="Phone Effect"
                className="object-contain"
                fill
              />
            </SlideIn>
            <SlideIn
              direction="right"
              className="z-30"
              delay={0.5}
              duration={0.5}
            >
              <Image
                alt="Phone MockUp"
                src={t("images.mockUpPhone")}
                className="relative max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px] w-full"
                width={0}
                height={0}
              />
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
