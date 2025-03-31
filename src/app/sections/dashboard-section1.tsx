import home from "@/content/home.json";
import Image from "next/image";

export default function DashboardFeature1() {
  const { dashboard1 } = home;
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl py-16 px-8 m-auto relative">
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium text-center lg:text-start leading-12">
            {dashboard1.headline}
          </h2>
          <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8">
            {dashboard1.body}
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute z-0 rounded-full w-[450px] h-[450px]"
            style={{
              backgroundColor: "#f4e6d9",
              top: "-60px",
              right: "-110px",
            }}
          ></div>
          <Image
            src={dashboard1.image}
            alt="Dashboard Feature 1"
            width={565}
            height={511}
            className="relative z-10 max-w-[300px] md:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
