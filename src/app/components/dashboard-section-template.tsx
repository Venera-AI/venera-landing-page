import SlideIn from "@/components/slide-in";
import Image from "next/image";

interface DashboardSectionTemplateProps {
  content: {
    headline: string;
    body: string;
    image: string;
    alt: string;
  };
  circleColor: string;
}

export default function DashboardSectionTemplate({
  content: { headline, body, image, alt },
  circleColor,
}: DashboardSectionTemplateProps) {
  return (
    <section className="bg-white overflow-hidden py-16 md:py-24 px-8">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:justify-between items-center max-w-7xl m-auto relative">
        <div className="flex-1">
          <SlideIn
            as="h2"
            delay={0.7}
            className="text-4xl font-medium text-center lg:text-start leading-12"
          >
            {headline}
          </SlideIn>
          <p className="text-xl mt-8 lg:mt-10 lg:w-[80%] text-center lg:text-start leading-8">
            {body}
          </p>
        </div>

        <div className="relative">
          <SlideIn
            duration={0.8}
            className="hidden lg:block absolute z-0 rounded-full aspect-square h-[120%] lg:h-[140%] top-1/2 -translate-y-1/2 left-[30%]"
            style={{ background: circleColor }}
          />
          <SlideIn delay={0.5} className="z-10">
            <Image
              src={image}
              alt={alt}
              width={0}
              height={0}
              className="relative w-full lg:max-w-[500px] xl:max-w-[550px]"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
