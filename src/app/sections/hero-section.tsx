import React from "react";
import homeData from "@/content/home.json";
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function HeroSection() {
  const { hero } = homeData;
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <NavBar />
      <div className="w-full h-screen flex flex-col items-center justify-between p-4 md:flex-row md:p-0 bg-gradient-to-r from-[#9ec5f7] to-[#2d44ad]">
        <div className="w-full text-center p-4 sm:w-1/2 sm:text-left">
          <div className="relative mt-4 sm:mt-[1rem] text-[1rem]">
            <div className="relative ml-4 mb-6">
              <Image
                src="/images/Slide1.png"
                alt="Slide 1"
                className="w-full"
                width={1920}
                height={1080}
              />
              <div className="absolute top-[45%] left-8 transform translate-y-[-50%] p-2 sm:p-0">
                <div
                  className="text-white font-bold 
                                md:text-5xl text-3xl mb-3"
                >
                  {hero.headline}
                </div>
                <div
                  className="text-white 
                                sm:text-4xl text-xl"
                >
                  {hero.subheadline}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center mt-[2rem] md:w-1/2">
          <div className="absolute w-full flex justify-center items-center">
            <Image
              src="/images/phone-effect.png"
              alt="Phone Effect"
              width={300}
              height={0}
            />
          </div>
          <div className="relative z-10 flex flex-col items-center w-full md:w-full">
            <Image
              alt="phone mock up"
              src="images/phone-screen.png"
              className="md:w-full w-full scale-150"
              width={300}
              height={500}
            />
          </div>
          <div className="absolute z-20 left-[35%] transform translate-x-[-50%] px-3 gap-4 md:top-[65%] top-[30%] md:min-w-[200px] mt-6">
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
