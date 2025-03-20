import Image from "next/image";
import homeData from "@/content/home.json";
export default function NavBar() {
  const { hero } = homeData;
  return (
    <div className="w-full">
      <nav className="w-full flex justify-between items-center px-4 py-1 shadow-md md:min-h-[90px] md:flex-nowrap h-[140px] bg-gradient-to-r from-[#83a3cb] to-[#5162b2]">
        <div className="flex md:justify-start justify-center md:w-auto">
          <Image
            src="/images/venera-logo.svg"
            alt="Venera Logo"
            width={160}
            height={70}
            className="md:w-auto min-w-[160px] min-h-[70px]"
          />
        </div>
        <div className="flex justify-end w-full mt-2 gap-2 md:flex-nowrap md:w-full md:gap-4 md:mt-0">
          <button className="text-center border border-white text-white font-semibold bg-transparent rounded-xl hover:bg-white hover:text-black md:w-[160px] md:h-[55px] md:text-base w-1/3 h-10 text-xs px-4 py-2">
            {hero.buttons.buttonLogIn.label}
          </button>
          <button className="text-center text-[#2d44ad] bg-white font-semibold rounded-xl hover:bg-[#2d44ad] hover:text-white md:w-[160px] md:h-[55px] md:text-base w-1/3 h-10 text-xs px-4 py-2">
            {hero.buttons.buttonTryForFree.label}
          </button>
        </div>
      </nav>
    </div>
  );
}
