import Image from "next/image";
import homeData from "@/content/home.json";
export default function NavBar() {
  const { hero } = homeData;
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center w-full py-3 px-3 md:px-6 lg:p-3 lg:px-8 shadow-md bg-gradient-to-r from-[#83a3cb] to-[#5162b2]">
        <div className="flex justify-center md:justify-start md:w-auto">
          <Image
            src="/images/venera-logo.svg"
            alt="Venera Logo"
            width={200}
            height={80}
            className="sm:min-w-[200px] max-w-[150px]"
          />
        </div>
        <div className="flex justify-end gap-2 md:gap-4">
          <button className="lg:w-full lg:text-xl lg:px-14 lg:py-4 md:w-full md:text-base sm:text-sm md:px-10 md:py-2 text-center border border-white text-white font-semibold bg-transparent rounded-2xl hover:bg-white hover:text-black text-[10px] whitespace-nowrap px-6 py-2 cursor-pointer">
            {hero.buttons.buttonLogIn.label}
          </button>
          <button className="lg:w-full lg:text-xl lg:px-10 lg:py-4 md:w-full md:text-base sm:text-sm md:px-8 md:py-2 text-center text-darkblue bg-white font-semibold rounded-2xl hover:bg-darkblue hover:text-white px-4 py-2 whitespace-nowrap text-[10px] cursor-pointer">
            {hero.buttons.buttonTryForFree.label}
          </button>
        </div>
      </nav>
    </div>
  );
}
