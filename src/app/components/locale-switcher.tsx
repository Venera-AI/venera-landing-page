"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";
import { Locale, locales } from "@/i18n/config";
import { redirect, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  function handleSwitchLocale(locale: Locale) {
    redirect({
      href: pathname,
      locale,
    });
  }

  const locale = useLocale();

  const localesWithSeparator = Array(locales.length * 2 - 1)
    .fill(" | ")
    .map((separator, i) => (i % 2 === 0 ? locales[i / 2] : separator));

  return (
    <div className="flex flex-row items-center bg-red-200 px-2 py-1">
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
