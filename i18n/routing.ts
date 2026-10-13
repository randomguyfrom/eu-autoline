import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["da", "en", "de"],
  defaultLocale: "da",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
