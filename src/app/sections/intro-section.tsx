import React from "react";

export default function IntroSection() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center mb-10">
      <nav className="w-full md:min-h-[90px] h-[140px] flex flex-wrap md:flex-nowrap justify-between items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-[#83a3cb] to-[#5162b2] shadow-md">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start w-full sm:w-auto md:w-auto">
          <img
            src="assets/venera-logo.svg"
            className="w-[100px] sm:w-[120px] md:w-auto"
            alt="Venera Logo"
          />
        </div>

        {/* Buttons Section */}
        <div className="flex md:flex-nowrap md:w-full md:gap-4 mt-2 md:mt-0 w-full md:w-auto items-center justify-end">
          <button className="md:w-[160px] md:h-[55px] w-1/3 px-4 sm:px-5 py-2 sm:py-2.5 border border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black text-sm">
            Log in
          </button>
          <button className="md:w-[160px] md:h-[55px] w-1/3 px-4 sm:px-5 py-2 sm:py-2.5 text-[#2d44ad] bg-white rounded-md hover:bg-[#2d44ad] hover:text-white text-sm">
            Try for free
          </button>
        </div>
      </nav>

      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#9ec5f7] to-[#2d44ad] p-4 md:p-0">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left p-4">
          <div className="mt-4 sm:mt-[1rem] text-[1rem] relative">
            <div className="ml-4 mb-6 relative">
              <img src="./assets/Slide1.png" className="w-full" alt="Slide 1" />
              <div className="absolute top-[25%] sm:top-[40%] left-8 transform translate-y-[-50%] p-2 sm:p-0">
                <div className="text-3xl sm:text-7xl mb-3 sm:mb-7 font-bold text-white">
                  Meet Venera AI
                </div>
                <div className="text-xl sm:text-4xl text-white">
                  Your fast & easy personal health companion
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-[2rem]">
          <div className="absolute w-full flex justify-center items-center">
            <img
              src="/assets/phone-effect.png"
              className="w-[260px] md:w-[537.6px] h-auto"
              alt="Phone Effect"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <img
              alt="phone mock up"
              src="/assets/phone-screen.png"
              className="max-w-[250px] sm:max-w-[1080px]"
            />
          </div>
          <div className="absolute z-20 top-[30%] md:top-[60%] left-[35%] transform translate-x-[-50%] mt-6 gap-4 px-3 sm:px-0">
            <button className="w-[100px] md:min-w-[220px] h-14 px-6 py-4 bg-white text-black rounded-lg flex flex-row items-center gap-3 hover:bg-gray-200 mb-2">
              <img
                src="/assets/apple-logo.svg"
                alt="button App store"
                className="w-6 sm:w-8 h-5 md:h-8"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm md:text-base">Get it on</span>
                <b className="text-lg md:text-xl">App Store</b>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
