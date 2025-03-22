import { why } from "@/content/home.json";
import Image from "next/image";
import Link from "next/link";

export default function WhySection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center py-16 px-8 md:p-16 bg-white max-w-7xl m-auto">
        <h2 className="text-4xl font-medium text-center">{why.headline}</h2>
        <div className="flex flex-col xl:flex-row justify-around mt-8">
          {why.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-8">
              <div className="relative size-76 max-w-[250px] md:max-w-none">
                <Image
                  className="size-full"
                  src={item.image}
                  alt={`${item.headline} image`}
                  fill
                />
              </div>

              <div className="flex gap-x-6 xl:max-w-none md:max-w-2/3">
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
        <Link href={why.actionButton.link}>
          <button className="bg-navyblue text-white md:px-16 md:py-5 px-12 py-4 md:text-xl rounded-2xl font-bold mt-8">
            {why.actionButton.label}
          </button>
        </Link>
      </div>
    </section>
  );
}
