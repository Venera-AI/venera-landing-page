import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100 ">
      <NavBar />
      <div className="lg:max-w-7xl h-screen md:flex md:flex-col lg:flex-row md:justify-between items-center bg-gradient-to-r from-[#9ec5f7] to-darkblue">
        <div className="lg:w-1/2 md:text-center md:p-5 md:w-2/3">
          <div className="relative text-[1rem]">
            <div className="relative">
              <Image
                src="/images/Slide1.png"
                alt="Slide 1"
                className="md:w-full sm:w-2/3"
                width={1920}
                height={1080}
              />
              <div className="absolute top-[35%] left-10 transform translate-y-[-50%] p-3 sm:p-0">
                <div className="text-white font-bold md:text-7xl text-3xl mb-7">
                  {hero.headline}
                </div>
                <div className="text-white sm:text-4xl md:text-3xl text-xl text-left">
                  {hero.subheadline}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:w-1/2 md:w-full">
          <div className="absolute flex justify-center items-center">
            <Image
              src="/images/phone-effect.png"
              alt="Phone Effect"
              className="md:w-[537.6px] w-[300px] h-auto"
              width={250}
              height={0}
            />
          </div>
          <div className="relative z-10 flex flex-col items-center w-full md:w-full">
            <Image
              alt="Phone MockUp"
              src="/images/phone-screen.png"
              className="lg:w-full w-full object-contain"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute z-20 transform px-2 md:min-w-[200px]">
            <button className="flex flex-row items-center bg-white text-black rounded-lg hover:bg-gray-200 md:h-16 md:px-8 md:py-6 h-8 px-4 py-2 mb-2 max-w-auto">
              <Image
                src="/images/apple-logo.svg"
                alt="button App store"
                className="md:w-8 md:h-8 w-3 h-3 mr-3"
                width={3}
                height={3}
              />
              <div className="flex flex-col leading-tight">
                <span className="md:text-base text-xs">
                  {hero.buttons.buttonAppStore.label}
                </span>
                <div className="md:text-xl text-xs font-bold">
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
