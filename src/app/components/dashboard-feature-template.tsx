import Image from "next/image";

interface DashboardFeatureTemplateProps {
  content: {
    headline: string;
    body: string;
    image: string;
    alt: string;
  };
  circleColor: string;
}

export default function DashboardFeatureTemplate({
  content: { headline, body, image, alt },
  circleColor,
}: DashboardFeatureTemplateProps) {
  return (
    <section className="bg-white mb-24">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl py-16 px-8 m-auto relative">
        <div className="flex flex-col flex-1">
          <h2 className="text-4xl font-medium text-center lg:text-start leading-12">
            {headline}
          </h2>
          <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8">
            {body}
          </p>
        </div>

        <div className="relative flex justify-end items-center flex-1 mt-12 lg:mt-0">
          <div
            className="absolute z-0 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
            style={{
              background: circleColor,
              top: "50%",
              left: "calc(100% - 66%)",
              transform: "translateY(-50%)",
            }}
          ></div>
          <Image
            src={image}
            alt={alt}
            width={565}
            height={511}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
            className="relative z-10 max-w-[200px] md:max-w-[300px] lg:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
