import Image from "next/image";
import homeData from "@/content/home.json";
export default function NavBar() {
  const { hero } = homeData;
  return (
    <nav className="flex justify-between items-center w-full py-3 px-3 shadow-md bg-gradient-to-r from-[#83a3cb] to-[#5162b2] md:px-6 lg:p-3 lg:px-8">
      <div className="flex justify-center md:justify-start">
        <Image
          src={hero.logos.logoNavBar}
          alt="Venera Logo"
          width={200}
          height={80}
          className="max-w-[150px] sm:min-w-[200px]"
        />
      </div>
      <div className="flex justify-end gap-2 md:gap-4">
        <button className="text-center border border-white text-white font-semibold bg-transparent rounded-2xl hover:bg-white hover:text-black text-[10px] whitespace-nowrap px-6 py-2 sm:text-sm md:w-full md:text-base md:px-10 md:py-2 lg:w-full lg:text-xl lg:px-14 lg:py-4">
          {hero.buttons.buttonLogIn.label}
        </button>
        <button className=" text-center text-darkblue bg-white font-semibold rounded-2xl hover:bg-darkblue hover:text-white px-4 py-2 whitespace-nowrap text-[10px] sm:text-sm md:w-full md:text-base md:px-8 md:py-2 lg:w-full lg:text-xl lg:px-10 lg:py-4 ">
          {hero.buttons.buttonTryForFree.label}
        </button>
      </div>
    </nav>
  );
}
