import { intro } from "@/content/home.json";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="flex lg:flex-row flex-col gap-8 justify-center items-center py-16 px-8 bg-white">
      <div className="flex flex-col lg:w-1/3">
        <h2 className="text-4xl font-medium text-center lg:text-start">
          {intro.headline}
        </h2>
        <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start">
          {intro.body}
        </p>
      </div>
      <Image
        src={"/images/intro.webp"}
        alt="usage-image"
        width={565}
        height={511}
        className="max-w-[300px] md:max-w-[450px]"
      />
    </section>
  );
}
