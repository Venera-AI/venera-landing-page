import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "../components/nav-bar";

export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="bg-gradient-to-r from-[#9ec5f7] to-darkblue">
      <NavBar />
      <div className="flex flex-col lg:flex-row gap-5 py-10 lg:py-15 md:justify-between mx-auto lg:max-w-7xl">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] p-3 md:p-10 lg:p-0 lg:pl-20 text-center">
          <div className="relative">
            <div className="w-full sm:top-[-30] md:top-0 md:h-auto md:pl-0 lg:top-0 lg:h-auto top-0 left-1/2">
              <div className="relative mx-auto aspect-square w-full max-w-[500px]">
                <Image
                  src={hero.images.textEffect}
                  alt="Left Section Effect"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:pt-20 z-10 transform">
                <div className="text-white text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-7">
                  <h1>{hero.headline}</h1>
                </div>
                <div className="text-white text-center lg:text-left text-xl md:text-2xl lg:text-5xl">
                  <span className="inline-block">
                    <h3>{hero.subheadline}</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:relative lg:flex w-full lg:w-[40%] md:py-20 md:mt-0 lg:py-0">
          <div className="relative flex flex-col mx-auto items-center justify-center">
            <div className="lg:absolute lg:z-40 w-full lg:top-[70%] lg:left-[0] lg:translate-x-[-60%]">
              <button className="relative block mx-auto items-center max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] w-full mb-5 rounded-lg cursor-pointer">
                <Image
                  src={hero.buttons.buttonAppStore.img}
                  alt="App Store button"
                  className="object-contain w-full h-auto"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </button>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[150%] h-full z-10 transform">
              <Image
                src={hero.images.phoneEffect}
                alt="Phone Effect"
                className="object-contain"
                fill
              />
            </div>
            <Image
              alt="Phone MockUp"
              src={hero.images.mockUpPhone}
              className="relative max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px] w-full z-30"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
