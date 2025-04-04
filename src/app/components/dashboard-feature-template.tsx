import Image from "next/image";

interface DashboardFeatureTemplateProps {
  content: {
    headline: string;
    body: string;
    image: string;
    alt: string;
    circleColor: string;
  };
}

export default function DashboardFeatureTemplate({
  content: { headline, body, image, alt, circleColor },
}: DashboardFeatureTemplateProps) {
  return (
    <section className="bg-white py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl py-16 px-8 m-auto relative">
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium text-center lg:text-start leading-12">
            {headline}
          </h2>
          <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8">
            {body}
          </p>
        </div>
        <div className="relative flex justify-center items-center py-8">
          <div
            className="absolute z-0 rounded-full 
             top-1/2 left-[55%] transform -translate-y-1/2 -translate-x-1/2
             w-[308px] h-[308px] sm:w-[330px] sm:h-[330px] 
             md:w-[363px] md:h-[363px] 
             lg:w-[385px] lg:h-[385px] 
             xl:w-[418px] xl:h-[418px]"
            style={{
              background: circleColor,
            }}
          ></div>
          <Image
            src={image}
            alt={alt}
            width={500}
            height={511}
            className="relative z-10 md:max-w-[300px] lg:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
