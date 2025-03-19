import React from "react";

export default function IntroSection() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center font-[Poppins]">
      <nav className="w-full h-[80px] flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#83a3cb] to-[#5162b2] shadow-md">
        <div>
          <img src="assets/venera_logo.png" />
          <span className="text-1xl font-bold text-white my-1">Venera AI </span>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-white text-white bg-transparent rounded-md">
            Log in
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Try for free
          </button>
        </div>
      </nav>

      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#9ec5f7] to-[#2d44ad]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <div className="mt-[1rem] text-[1rem]">
            <div className="mb-6">
              <div className="text-6xl font-bold text-white my-6">
                Meet Venera AI
              </div>
              <div className="text-4xl text-white"></div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-[2rem] md:mt-0">
          <div className="absolute w-[400px] h-[400px] bg-gray-100 rounded-full opacity-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="relative flex flex-col items-center z-10">
            <img
              alt="home screen"
              src="/assets/intro.png"
              className="max-w-[800px] max-h-[934.1px]"
            />
            <div className="relative top-[-50px] mt-6 gap-4 px-3">
              <button className="px-4.5 py-3 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-gray-200 mb-2">
                <img
                  src="/assets/apple-logo.png"
                  alt="App Store"
                  className="w-6 h-6"
                />
                <span>Get it on App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
