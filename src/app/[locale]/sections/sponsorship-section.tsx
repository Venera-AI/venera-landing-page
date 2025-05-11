import Image from "next/image";
import SlideIn from "@/components/slide-in";
import { useTranslations } from "next-intl";
export default function SponsorshipSection() {
  const t = useTranslations("homePage.sponsorship");
  return (
    <section className="py-16 px-3 flex flex-col gap-7">
      <div className="flex 1 pb-5 m-auto">
        <SlideIn
          as="h2"
          className="text-4xl font-medium text-center leading-12"
        >
          {t("headline")}
        </SlideIn>
      </div>
      <div className="flex flex-col lg:gap-10 gap-4 m-auto">
        <div className="lg:flex lg:flex-row lg:m-auto lg:gap-10">
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.nvidia")}
                alt="nvidia"
                width={280}
                height={280}
                className="max-w-[400px] md:max-w-[500px]"
              />
            </SlideIn>
          </div>
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.atlassian")}
                alt="atlassian"
                width={280}
                height={280}
                className="max-w-[400px] md:max-w-[500px]"
              />
            </SlideIn>
          </div>
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.google")}
                alt="gcp"
                width={280}
                height={280}
                className="max-w-[400px] md:max-w-[500px]"
              />
            </SlideIn>
          </div>
        </div>
        <div className="gap-5 lg:flex lg:flex-row lg:m-auto lg:gap-10">
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.aws")}
                alt="aws"
                width={280}
                height={280}
                className="max-w-[300px] md:max-w-[450px]"
              />
            </SlideIn>
          </div>
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.azure")}
                alt="azure"
                width={280}
                height={280}
                className="max-w-[300px] md:max-w-[450px]"
              />
            </SlideIn>
          </div>
          <div>
            <SlideIn delay={0.2}>
              <Image
                src={t("images.mongoDB")}
                alt="mongoDB"
                width={280}
                height={280}
                className="max-w-[400px] md:max-w-[500px]"
              />
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
