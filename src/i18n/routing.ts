import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "zh"],
  defaultLocale: "es",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
