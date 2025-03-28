import home from "@/content/home.json";
import Image from "next/image";

export default function DashboardFeature2() {
  const { dashboard_2 } = home;
  return (
    <section className="bg-white mt-16">
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl py-16 px-8 m-auto relative">
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium text-center lg:text-start leading-12">
            {dashboard_2.headline}
          </h2>
          <p className="text-xl mt-8 lg:w-[80%] text-center lg:text-start leading-8">
            {dashboard_2.body}
          </p>
        </div>
        <div className="relative">
          {/* Blue pastel circle moved to the far right */}
          <div
            className="absolute z-0 rounded-full w-[450px] h-[450px]"
            style={{
              backgroundColor: "#d9e6f3", // Custom pastel pink
              top: "-60px",
              right: "-110px",
            }}
          ></div>
          <Image
            src={dashboard_2.image}
            alt="Dashboard Feature 2"
            width={565}
            height={511}
            className="relative z-10 max-w-[300px] md:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
