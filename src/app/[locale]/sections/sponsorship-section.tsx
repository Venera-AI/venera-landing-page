import Image from "next/image";
import SlideIn from "@/components/slide-in";
import { useTranslations, useMessages } from "next-intl";
export default function SponsorshipSection() {
  const t = useTranslations("homePage.sponsorship");
  const sponsorshipMessages = useMessages().homePage.sponsorship;
  const imageKeys = Object.keys(
    sponsorshipMessages.logos,
  ) as readonly (keyof typeof sponsorshipMessages.logos)[];
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-16 px-8 md:p-16 max-w-7xl m-auto gap-3">
        <SlideIn
          as="h2"
          className="text-4xl font-medium text-center text-navyblue"
        >
          {t("headline")}
        </SlideIn>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7">
          {imageKeys.map((key) => (
            <li
              key={key}
              className="relative size-50 max-w-[230px] md:max-w-none lg:size-65"
            >
              <span className="sr-only">{`${sponsorshipMessages.logos[key].alt} sponsor`}</span>
              <Image
                src={sponsorshipMessages.logos[key].image}
                alt={sponsorshipMessages.logos[key].alt}
                className="size-full"
                fill
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
