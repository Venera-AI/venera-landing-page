import { usage } from "@/content/home.json";
import Image from "next/image";

export default function UsageSection() {
  return (
    <section className="flex lg:flex-row flex-col gap-8 justify-center items-center py-16 px-8 bg-white">
      <div className="flex flex-col lg:w-1/3">
        <h2 className="text-4xl font-medium text-center lg:text-start">
          {usage.headline}
        </h2>
        <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start">
          {usage.body}
        </p>
      </div>
      <Image
        src={"/images/usage.webp"}
        alt="usage-image"
        width={500}
        height={500}
      />
    </section>
  );
}
