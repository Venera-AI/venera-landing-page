import React from "react";
// import myImage from './assets/Mockup-Homescreen.png?url'; // Adjust path based on the location of your image
const Intro: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center font-[Poppins]">
      <nav className="w-full h-[97.3px] flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#83a3cb] to-[#5162b2] shadow-md">
        <div className="text-xl font-bold">
          <div className="text-1xl font-bold text-white my-1">VENERA AI</div>
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
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-[2rem] py-[3rem] bg-gradient-to-r from-[#9ec5f7] to-[#2d44ad]">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mt-[1rem] p-[1rem] text-[1rem]">
            <div className="mb-6">
              <div className="text-6xl font-bold text-white my-6">
                Meet Venera AI
              </div>

              <div className="text-4xl text-white">
                Your fast & easy personal health companion
              </div>
            </div>

            <button className=" bg-white text-black rounded-md px-4 py-2">
              Try for free
            </button>
          </div>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-1/2 flex justify-center mt-[2rem] md:mt-0">
          <div className="w-1/2 h-auto flex items-center justify-center">
            Phone image
            <img alt="Home screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
