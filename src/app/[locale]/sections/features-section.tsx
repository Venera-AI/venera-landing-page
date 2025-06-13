import SlideIn from "@/components/slide-in";
import clsx from "clsx";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("homePage.features");
  const features = useMessages().homePage.features;
  const itemKeys = Object.keys(
    features.items,
  ) as readonly (keyof typeof features.items)[];

  const gradientBackgrounds = [
    "bg-[linear-gradient(180deg,#c6dff8,#efefef)]",
    "bg-[linear-gradient(180deg,#f8eac6,#efefef)]",
    "bg-[linear-gradient(180deg,#ddc6f8,#efefef)]",
    "bg-[linear-gradient(180deg,#c6ccf8,#efefef)]",
  ];

  const headlineChunks = t("headline").split(",");
  const separatedHeadlineChunks = Array(headlineChunks.length * 2 - 1)
    .fill(null)
    .map((_, index) => (index % 2 === 0 ? headlineChunks[index / 2] : ","));

  return (
    <section className="px-4 md:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SlideIn
          duration={1}
          as="h2"
          className="mb-12 xl:mb-20 text-3xl lg:text-4xl text-center lg:text-left leading-tight"
        >
          {separatedHeadlineChunks.map((chunk, index) =>
            chunk === "," ? (
              <span key={index}>
                <span>,</span>
                <br className="hidden md:inline"></br>
              </span>
            ) : (
              <span key={index}>{chunk}</span>
            ),
          )}
        </SlideIn>

        <div className="grid gap-8 xl:gap-16">
          {itemKeys.map((key, index) => (
            <SlideIn
              key={key}
              duration={0.5}
              className="relative px-8 lg:px-11 py-10 xl:pr-28 rounded-4xl flex flex-col lg:flex-row items-center gap-12 xl:gap-14"
            >
              <div
                className={clsx(
                  "absolute -z-10 inset-0 rounded-4xl",
                  gradientBackgrounds[index],
                )}
              />
              <div className="h-full flex flex-col justify-center">
                <SlideIn className="text-[32px] text-center lg:text-start leading-12">
                  {t(`items.${key}.headline`)}
                </SlideIn>
                <SlideIn className="font-light text-2xl mt-4 lg:w-[80%] text-center lg:text-start leading-normal">
                  {t(`items.${key}.body`)}
                </SlideIn>
              </div>
              <Image
                src={t(`items.${key}.image`)}
                alt=""
                width={0}
                height={0}
                className="w-full max-w-[400px] rounded-lg"
              />
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
