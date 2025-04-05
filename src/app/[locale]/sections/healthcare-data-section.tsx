import SlideIn from "@/components/slide-in";
import clsx from "clsx";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

const gradientColors = {
  "1": "bg-linear-to-b from-[#c6dff8] to-[#efefef]",
  "2": "bg-linear-to-b from-[#f8eac6] to-[#efefef]",
  "3": "bg-linear-to-b from-[#f8ddc6] to-[#efefef]",
};

export default function HealthcareDataSection() {
  const t = useTranslations("homePage.healthcareData");
  const healthcareMessages = useMessages().homePage.healthcareData;
  const itemKeys = Object.keys(
    healthcareMessages.items,
  ) as readonly (keyof typeof healthcareMessages.items)[];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 xl:px-8">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-16">
        <SlideIn
          as="h2"
          delay={0.5}
          className="text-center font-medium text-3xl lg:text-4xl"
        >
          {t("headline")}
        </SlideIn>
        <ul className="space-y-4 md:grid grid-flow-col gap-x-4 xl:gap-x-14">
          {itemKeys.map((itemKey, index) => (
            <SlideIn
              as="li"
              direction="right"
              delay={0.8 + 0.2 * index}
              key={index}
              className={clsx(
                "h-full p-5 md:p-4 lg:p-6 space-y-4 lg:space-y-6 rounded-3xl overflow-hidden",
                gradientColors[itemKey],
              )}
            >
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src={t(`items.${itemKey}.image`)}
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-5xl">
                {t(`items.${itemKey}.headline`)}
              </h3>
              <p className="text-lg leading-8">{t(`items.${itemKey}.body`)}</p>
            </SlideIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
