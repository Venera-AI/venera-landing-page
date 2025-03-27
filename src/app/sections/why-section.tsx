import SlideIn from "@/components/SlideIn";
import home from "@/content/home.json";
import Image from "next/image";
import Link from "next/link";

export default function WhySection() {
  const { why } = home;
  return (
    <section className="bg-[#ecf5ff]">
      <div className="flex flex-col items-center justify-center py-16 px-8 md:p-16 max-w-7xl m-auto">
        <SlideIn
          as="h2"
          className="text-4xl font-medium text-center text-navyblue"
        >
          {why.headline}
        </SlideIn>
        <div className="flex flex-col xl:flex-row justify-between mt-8">
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
                <div className="h-10 w-4 rounded-full bg-[#2d44ad]" />
                <div>
                  <h3 className="text-[#2d44ad] font-bold text-xl">
                    {item.headline}
                  </h3>
                  <p className="mt-4">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={why.actionButton.link}>
          <button className="bg-[#2d44ad] text-white md:px-16 md:py-5 px-12 py-4 md:text-xl rounded-2xl font-bold mt-8">
            {why.actionButton.label}
          </button>
        </Link>
      </div>
    </section>
  );
}
