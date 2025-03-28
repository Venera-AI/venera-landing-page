import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="bg-gradient-to-r from-[#9ec5f7] to-darkblue">
      <NavBar />
      <div className="lg:max-w-7xl lg:flex-row md:justify-between gap-4 py-10 flex flex-col">
        <div className="lg:w-full lg:pl-20 lg:p-0 md:p-10 p-3 text-center">
          <div className="relative">
            <div className="z-10 py-30">
              <div className="text-white font-bold md:text-5xl lg:text-7xl lg:text-left text-3xl mb-7 text-center">
                <h1>{hero.headline} </h1>
              </div>
              <div className="text-center text-white lg:text-5xl lg:text-left md:text-2xl text-xl">
                <span className="in-line">
                  <h3> {hero.subheadline} </h3>
                </span>
                <br />
                <span>
                  <h3>{hero.subheadline2} </h3>
                </span>
              </div>
            </div>
            <div className="w-full absolute top-0 left-0 aspect-square">
              <Image
                src="/images/Slide1.png"
                alt="Slide 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative lg:w-full lg:justify-center lg:flex lg:py-0 md:w-full md:py-20">
          <div className="absolute md:ml-25 md:mt-30 left-[60]">
            <Image
              src="/images/phone-effect.png"
              alt="Phone Effect"
              className="w-[250] md:w-[380] lg:w-[420] object-cover"
              width={400}
              height={0}
            />
          </div>

          <div className="relative z-10 justify-center flex lg:left-[60] items-center md:mb-[5] md:mt-30 lg:top-[-100]">
            <Image
              alt="Phone MockUp"
              src="/images/Mockup1.png"
              className="w-[180px] lg:w-[300px] md:w-[280px]"
              width={250}
              height={250}
            />
          </div>
          <div className="absolute z-20 -top-15 left-3/10 md:left-70 md:top-30 lg:left-[100] lg:top-110">
            <button className="absolute flex flex-row gap-2 md:items-center bg-white text-black rounded-lg hover:bg-gray-200 lg:pl-6 lg:pr-18 lg:py-2 md:pl-2 md:pr-10 md:py-1 pl-1 pr-7 py-1 cursor-pointer">
              <Image
                src="/images/apple-logo.svg"
                alt="button App store"
                className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-1/4 mr-1"
                width={4}
                height={4}
              />
              <div className="flex flex-col whitespace-nowrap w-2/3 mr-2">
                <span className="md:text-base text-xs">
                  {hero.buttons.buttonAppStore.label}
                </span>
                <div className="md:text-xl text-xs font-bold whitespace-nowrap">
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
