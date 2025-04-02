import home from "@/content/home.json";
import clsx from "clsx";
import Image from "next/image";

const gradientColors = {
  "1": "bg-linear-to-b from-[#c6dff8] to-[#efefef]",
  "2": "bg-linear-to-b from-[#f8eac6] to-[#efefef]",
  "3": "bg-linear-to-b from-[#f8ddc6] to-[#efefef]",
};

export default function HealthcareDataSection() {
  const { healthcareData } = home;
  const itemKeys = ["1", "2", "3"] as const;

  return (
    <section className="bg-white py-16 lg:py-24 px-4 xl:px-8">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-16">
        <h2 className="text-center font-medium text-3xl lg:text-4xl">
          {healthcareData.headline}
        </h2>
        <ul className="space-y-4 md:grid grid-flow-col gap-x-4 xl:gap-x-14">
          {itemKeys.map((itemKey, index) => (
            <div
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
                  src={healthcareData.items[itemKey].image}
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-5xl">
                {healthcareData.items[itemKey].headline}
              </h3>
              <p className="text-lg leading-8">
                {healthcareData.items[itemKey].body}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
