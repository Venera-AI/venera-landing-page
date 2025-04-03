import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Lightweight wrappers around Next.js' navigation
// that are aware of the current locale
// and automatically add it to the URL
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
