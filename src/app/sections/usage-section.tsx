import { usage } from "@/content/home.json";
import Image from "next/image";

export default function UsageSection() {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center py-16 px-8 md:p-16 bg-white">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-">{usage.headline}</h2>
        <p>{usage.body}</p>
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
