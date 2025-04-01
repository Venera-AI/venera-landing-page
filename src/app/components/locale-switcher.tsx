"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";
import { redirect, usePathname } from "@/i18n/navigation";
import { Locale, locales } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  if (Number(locales.length) === 1) {
    console.log("only one locale, not showing switcher");
    return null;
  }

  const localesWithSeparator = Array(locales.length * 2 - 1)
    .fill(" | ")
    .map((separator, i) => (i % 2 === 0 ? locales[i / 2] : separator));

  function handleSwitchLocale(locale: Locale) {
    redirect({
      href: pathname,
      locale,
    });
  }

  return (
    <div className="flex flex-row items-center px-2 py-1">
      {localesWithSeparator.map((item, index) =>
        item === " | " ? (
          <div key={index} className="mx-2 w-1 h-6 bg-white"></div>
        ) : (
          <button
            key={item}
            className={clsx(
              "cursor-pointer uppercase font-semibold text-lightgray",
              item === locale && "text-white",
            )}
            onClick={() => handleSwitchLocale(item)}
          >
            {item}
          </button>
        ),
      )}
    </div>
  );
}
