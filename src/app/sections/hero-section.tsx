import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "@/app/components/nav-bar";

export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="bg-gradient-to-r from-[#9ec5f7] to-darkblue">
      <NavBar />
      <div className="flex flex-col gap-4 py-10 md:justify-between lg:flex-row lg:max-w-7xl lg:pb-5">
        {/* Left Section */}
        <div className="w-full p-3 text-center md:p-10 lg:w-[60%] lg:p-0 lg:pl-20">
          <div className="relative">
            <div className="z-10 pt-40 lg:pt-20">
              <div className="mb-7 text-3xl font-bold text-white text-center md:mt-30 md:text-5xl lg:text-left lg:text-7xl">
                <h1>{hero.headline}</h1>
              </div>
              <div className="text-xl text-white text-center md:text-2xl lg:text-left lg:text-5xl">
                <span className="inline-block">
                  <h3>{hero.subheadline}</h3>
                </span>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full aspect-square lg:w-[80%]">
              <Image
                src={hero.images.leftEffect}
                alt="Left Section Effect"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center w-full pt-40 sm:pt-80 md:pt-70 md:py-20 lg:w-[40%] lg:py-0">
          <div className="absolute w-[300px] h-[350px] md:top-[40%] md:left-[18%] md:w-[550px] md:h-[400px] lg:left-[5%] lg:top-[20px] lg:w-[90%] lg:h-[550px]">
            <Image
              src={hero.images.rightPhoneEffect}
              alt="Phone Effect"
              className="object-contain"
              fill
            />
          </div>
          <div className="relative z-10 flex items-center justify-center md:mb-5 md:mt-30 lg:top-[-100px]">
            <Image
              alt="Phone MockUp"
              src={hero.images.mockUpPhone}
              className="w-[180px] md:w-[280px] lg:w-[300px]"
              width={250}
              height={250}
            />
          </div>
          <div className="absolute z-20 transform -translate-x-1/2 left-1/3 top-[100] md:left-[40%] md:top-[300] lg:top-[58%] lg:left-[-5%]">
            <button className="absolute flex flex-row gap-2 items-center bg-white text-black rounded-lg hover:bg-gray-200 pl-1 pr-7 py-1 cursor-pointer md:pl-2 md:pr-13 md:py-1 lg:pl-6 lg:pr-18 lg:py-2">
              <Image
                src={hero.logos.appleLogo}
                alt="button App store"
                className="mr-1 w-1/4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                width={4}
                height={4}
              />
              <div className="flex flex-col w-2/3 whitespace-nowrap mr-2">
                <span className="text-xs md:text-base">
                  {hero.buttons.buttonAppStore.label}
                </span>
                <div className="text-xs font-bold whitespace-nowrap md:text-xl">
                  {hero.buttons.buttonAppStore.app}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
