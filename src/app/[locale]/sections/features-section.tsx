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

  return (
    <section className="px-4 md:px-8 py-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 xl:mb-20 text-[42px] text-left leading-tight">
          {t("headline")}
        </h2>

        <div className="grid gap-8 xl:gap-16 max-w-7xl">
          {itemKeys.map((key, index) => (
            <div
              key={key}
              className={`px-8 lg:px-11 py-10 xl:pr-40 rounded-4xl flex flex-col lg:flex-row items-center gap-12 xl:gap-14 ${gradientBackgrounds[index]}`}
            >
              <div>
                <h3 className="text-[32px] text-center lg:text-start leading-12">
                  {t(`items.${key}.headline`)}
                </h3>
                <p className="font-light text-2xl mt-4 lg:w-[80%] text-center lg:text-start leading-normal">
                  {t(`items.${key}.body`)}
                </p>
              </div>

              <Image
                src={t(`items.${key}.image`)}
                alt=""
                width={300}
                height={250}
                className="w-full max-w-[400px] rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
