import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeedbackSection() {
  const t = useTranslations("homePage.feedback");
  const itemKeys = ["1", "2", "3"] as const;

  return (
    <section className="py-16 px-8 md:p-16 bg-white">
      <h2 className="font-medium text-4xl text-center">{t("headline")}</h2>
      <ul className="grid lg:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto py-16 md:py-24">
        {itemKeys.map((key) => (
          <li
            key={key}
            className="bg-lightblue rounded-[40px] px-10 py-8 flex flex-col items-center gap-y-6"
          >
            <div className="flex-1 flex flex-col gap-y-6 items-center">
              <div className="size-20 bg-gray-300 relative rounded-full overflow-hidden">
                <Image
                  src={t(`items.${key}.image`)}
                  alt={`${t(`items.${key}.name`)} avatar`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-darkteal text-sm leading-relaxed">
                {t(`items.${key}.body`)}
              </p>
            </div>
            <div className="self-start justify-self-end flex flex-row gap-x-6 items-center">
              <div className="h-10 w-1.5 rounded-full bg-navyblue"></div>
              <span className="font-bold text-lg">
                {t(`items.${key}.name`)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
