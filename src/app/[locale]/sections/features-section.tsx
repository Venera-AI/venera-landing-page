import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("homePage.features");
  const features = useMessages().homePage.features;
  const itemKeys = Object.keys(
    features.items,
  ) as readonly (keyof typeof features.items)[];

  // Define four gradient backgrounds as per request
  const gradientBackgrounds = [
    "bg-[linear-gradient(180deg,#c6dff8,#efefef)]",
    "bg-[linear-gradient(180deg,#f8eac6,#efefef)]",
    "bg-[linear-gradient(180deg,#ddc6f8,#efefef)]",
    "bg-[linear-gradient(180deg,#c6ccf8,#efefef)]",
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl px-8 mx-auto mb-12">
        <h2 className="text-5xl text-left leading-tight">{t("headline")}</h2>
      </div>
      {itemKeys.map((key, index) => (
        <div key={key} className={`py-16 ${gradientBackgrounds[index]}`}>
          <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl px-8 m-auto">
            <div className="flex flex-col">
              <h3 className="text-4xl font-medium text-center lg:text-start leading-12 text-black">
                {t(`items.${key}.headline`)}
              </h3>
              <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8 text-black">
                {t(`items.${key}.body`)}
              </p>
            </div>

            <Image
              src={t(`items.${key}.image`)}
              alt=""
              width={300}
              height={250}
              className="max-w-[250px] md:max-w-[350px] rounded-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
