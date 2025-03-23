import { intro } from "@/content/home.json";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-7xl py-16 px-8 m-auto">
        <div className="flex flex-col lg:w-1/3">
          <h2 className="text-4xl font-medium text-center lg:text-start leading-12">
            {intro.headline}
          </h2>
          <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8">
            {intro.body}
          </p>
        </div>
        <Image
          src={intro.image}
          alt="usage image"
          width={565}
          height={511}
          className="max-w-[300px] md:max-w-[450px]"
        />
      </div>
    </section>
  );
}
