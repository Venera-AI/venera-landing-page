import SlideIn from "@/components/slide-in";
import home from "@/content/home.json";
import Image from "next/image";
import Link from "next/link";

export default function PrivacySection() {
  const { privacy } = home;
  return (
    <section className="bg-[#ecf5ff] p-16 max-w-full mx-auto border-white border-[80px] rounded-lg">
      <div className="flex flex-col items-center justify-center py-12 px-6 md:p-16 max-w-4xl m-auto">
        <SlideIn className="mb-6">
          <Image
            src={privacy.image}
            alt="Privacy Icon"
            width={150}
            height={150}
          />
        </SlideIn>

        <SlideIn
          as="h2"
          delay={0.2}
          className="font-medium text-2xl md:text-3xl text-center text-[#1a1a1a]"
        >
          {privacy.headline}
        </SlideIn>
        <SlideIn delay={0.4} className="mt-4 mx-auto max-w-2xl">
          <p className="mt-2 text-center text-xl md:text-2xl leading-relaxed text-black">
            {privacy.body}
          </p>
        </SlideIn>

        <SlideIn delay={0.6}>
          <Link href={privacy.actionButton.link}>
            <button className="bg-[#158d6a] text-white md:px-16 md:py-5 px-12 py-4 md:text-xl rounded-2xl font-bold mt-8">
              {privacy.actionButton.label}
            </button>
          </Link>
        </SlideIn>
      </div>
    </section>
  );
}
