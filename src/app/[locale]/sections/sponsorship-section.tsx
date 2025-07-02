import Image from "next/image";
import SlideIn from "@/components/slide-in";
import { useTranslations, useMessages } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function SponsorshipSection() {
  const t = useTranslations("homePage.sponsorship");
  const sponsorshipMessages = useMessages().homePage.sponsorship;
  const imageKeys = Object.keys(
    sponsorshipMessages.logos,
  ) as readonly (keyof typeof sponsorshipMessages.logos)[];

  console.log({ sponsorshipMessages });

  // const images = imageKeys.map(
  //   (key) => import(sponsorshipMessages.logos[key].image),
  // );

  return (
    <section>
      <div className="flex flex-col items-center justify-center py-16 px-8 md:p-16 max-w-7xl m-auto space-y-8">
        <SlideIn
          as="h2"
          className="text-3xl lg:text-4xl font-medium text-center text-navyblue"
        >
          {t("headline")}
        </SlideIn>
        <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8">
          {imageKeys.map((key) => (
            <li key={key} className="flex flex-col items-center justify-center">
              <span className="sr-only">{`${sponsorshipMessages.logos[key].alt} sponsor`}</span>
              <Image
                src={sponsorshipMessages.logos[key].image}
                alt={sponsorshipMessages.logos[key].alt}
                width={4}
                height={1}
                sizes="100vw"
                className={twMerge(
                  "size-auto max-w-48",
                  sponsorshipMessages.logos[key].image.includes(".svg") &&
                    "h-20",
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
