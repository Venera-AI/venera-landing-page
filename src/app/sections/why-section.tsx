import { why } from "@/content/home.json";
import Image from "next/image";

export default function WhySection() {
  return (
    <section className="flex flex-col items-center justify-between py-16 px-8 md:p-16 bg-white">
      <h2 className="text-4xl font-medium">{why.headline}</h2>
      <div className="flex flex-col xl:flex-row justify-around">
        {why.items.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-8">
            <Image
              className="size-76"
              src={item.image}
              alt={`${item.headline} image`}
              width={100}
              height={100}
            />
            <div className="flex gap-x-6">
              <div className="h-10 w-4 rounded-full bg-navyblue" />
              <div>
                <h3 className="text-navyblue font-bold text-xl">
                  {item.headline}
                </h3>
                <p className="mt-4">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-navyblue text-white px-16 py-5 text-xl rounded-2xl font-bold">
        Meet our team
      </button>
    </section>
  );
}
