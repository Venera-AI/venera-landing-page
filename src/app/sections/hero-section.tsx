import React from "react";
import homeData from "@/content/home.json";

export default function HeroSection() {
  const { hero } = homeData;

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100 md:mb-15 mb-15">
      <nav
        className="w-full flex justify-between items-center px-4 sm:px-6 py-3 shadow-md 
                      md:min-h-[90px] md:flex-nowrap h-[140px] bg-gradient-to-r from-[#83a3cb] to-[#5162b2]"
      >
        <div className="flex md:justify-start justify-center md:w-auto">
          <img
            src="images/venera-logo.svg"
            className="md:w-auto min-w-[160px] min-h-[70px]"
            alt="Venera Logo"
          />
        </div>
        <div
          className="flex justify-end w-full mt-2 
                        md:flex-nowrap md:w-full md:gap-4 md:mt-0"
        >
          <button
            className="border border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black 
                              md:w-[160px] md:h-[55px] md:text-base w-1/2 h-10 text-xs px-4 py-2"
          >
            Log in
          </button>
          <button
            className="text-[#2d44ad] bg-white rounded-md hover:bg-[#2d44ad] hover:text-white 
                              md:w-[160px] md:h-[55px] md:text-base w-1/2 h-10 text-xs px-4 py-2"
          >
            {hero.actionButton.label}
          </button>
        </div>
      </nav>
      <div
        className="w-full h-screen flex flex-col items-center justify-between p-4 
                      md:flex-row md:p-0 bg-gradient-to-r from-[#9ec5f7] to-[#2d44ad]"
      >
        <div
          className="w-full text-center p-4 
                        sm:w-1/2 sm:text-left"
        >
          <div
            className="relative mt-4 
                          sm:mt-[1rem] text-[1rem]"
          >
            <div className="relative ml-4 mb-6">
              <img src="images/Slide1.png" className="w-full" alt="Slide 1" />
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
        <div
          className="relative w-full flex justify-center items-center mt-[2rem] 
                        md:w-1/2"
        >
          <div className="absolute w-full flex justify-center items-center">
            <img
              src="images/phone-effect.png"
              className="md:w-[537.6px] w-[300px] h-auto"
              alt="Phone Effect"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center w-full md:w-full">
            <img
              alt="phone mock up"
              src="images/phone-screen.png"
              className="md:w-full w-full scale-150"
            />
          </div>
          <div
            className="absolute z-20 left-[35%] transform translate-x-[-50%] px-3 gap-4 
                          md:top-[60%] top-[30%] md:min-w-[200px] mt-6"
          >
            <button
              className="flex flex-row items-center bg-white text-black rounded-lg hover:bg-gray-200 
                                md:h-16 md:px-8 md:py-6 h-8 px-4 py-2 mb-2 max-w-auto"
            >
              <img
                src="/images/apple-logo.svg"
                alt="button App store"
                className="md:w-8 md:h-8 w-3 h-3"
              />
              <div className="flex flex-col leading-tight">
                <span className="md:text-base text-xs">Get it on</span>
                <div className="md:text-xl text-xs font-bold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
