import { Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Params = Promise<{ locale: Locale }>;

/**
 * Higher-order component to set the locale.
 * Needed on all server page components that use `next-intl`
 * or have child components the use `next-intl`.
 */
export function withLocale<T extends object>(
  Component: React.ComponentType<T>,
) {
  return function LocaleHandledComponent({
    params,
    ...props
  }: {
    params: Params;
  }) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    return <Component {...(props as T)} params={params} />;
  };
}
