import { why } from "@/content/home.json";
import Image from "next/image";

export default function WhySection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:p-16 bg-white">
      <h2 className="text-4xl">{why.headline}</h2>
      {why.items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            className=""
            src={item.image}
            alt={`${item.headline} image`}
            width={100}
            height={100}
          />
          <h3>{item.headline}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </section>
  );
}
