import LocaleSwitcher from "@/app/components/locale-switcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NavBar() {
  const t = useTranslations("homePage.hero");

  return (
    <nav className="flex justify-between items-center w-full py-3 px-3 md:px-6 lg:p-3 lg:px-8 shadow-md bg-gradient-to-r from-[#83a3cb] to-[#5162b2]">
      <div className="flex justify-center md:justify-start">
        <Image
          src={t("logos.logoNavBar")}
          alt="Venera Logo"
          width={200}
          height={80}
          className="w-full max-w-full h-auto sm:min-w-[200px]"
        />
      </div>

      {/* TODO: Move this into the container above when we decide to uncomments the two buttons below */}
      <LocaleSwitcher />

      {/* <div className="flex justify-end gap-2 md:gap-4">
        <button className="text-[10px] sm:text-sm md:text-base lg:text-xl text-center font-semibold border border-white text-white bg-transparent rounded-2xl hover:bg-white hover:text-black whitespace-nowrap px-6 py-2 md:px-10 md:py-2 lg:px-14 lg:py-4 md:w-full lg:w-full">
          {buttonLogInLabel}
        </button>
        <button className="text-[10px] sm:text-sm md:text-base lg:text-xl text-center font-semibold bg-white text-darkblue rounded-2xl hover:bg-darkblue hover:text-white whitespace-nowrap px-4 py-2 md:px-8 md:py-2 lg:px-10 lg:py-4 md:w-full lg:w-full">
          {buttonTryForFreeLabel}
        </button>
      </div> */}
    </nav>
  );
}
