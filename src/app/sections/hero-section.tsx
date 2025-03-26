import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="lg:max-w-7xl py-12 md:py-5 h-auto md:flex md:flex-col lg:flex-row md:justify-between items-center bg-gradient-to-r from-[#9ec5f7] to-darkblue">
        <div className="lg:w-1/2 lg:p-10 sm:text-center md:p-5 md:w-2/3">
          <div className="relative">
            <div className="relative justify-center">
              <Image
                src="/images/Slide1.png"
                alt="Slide 1"
                className="md:w-full"
                width={1920}
                height={1080}
              />
              <div className="absolute top-[35%] left-5 transform translate-y-[-50%]">
                <div className="text-white font-bold md:text-5xl lg:text-6xl lg:text-left text-3xl mb-7 text-center">
                  {hero.headline}
                </div>
                <div className="text-center text-white lg:text-3xl lg:text-left text-xl ">
                  {hero.subheadline}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:flex justify-center items-center lg:w-1/2 md:w-full md:p-10">
          <div className="absolute flex justify-center items-center lg:left-[5%] md:left-[28%] sm:left-[20%] left-[13%]">
            <Image
              src="/images/phone-effect.png"
              alt="Phone Effect"
              className="w-[350px] lg:w-[550px] sm:w-[400px] h-auto"
              width={600}
              height={0}
            />
          </div>

          <div className="top-[50%] relative z-10 flex flex-col items-center max-w-full">
            <Image
              alt="Phone MockUp"
              src="/images/phone-screen.png"
              className="max-w-full md:w-[550px] lg:w-[680px] lg:scale-200 md:scale-150 sm:w-[450px] sm:scale-150 w-[400px] scale-120"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute z-20 transform md:min-w-[200px] sm:min-w-[100px]">
            <button
              className="absolute flex flex-row md:items-center bg-white text-black rounded-lg hover:bg-gray-200 lg:pl-3 lg:pr-8 lg:py-1 md:pl-2 md:pr-6 md:py-1 pl-2 pr-8 py-2
 translate-x-[-150%] lg:translate-x-[-50%] lg:translate-y-[180%] translate-y-[-350%]"
            >
              <Image
                src="/images/apple-logo.svg"
                alt="button App store"
                className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-1/3 mr-1"
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
