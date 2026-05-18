import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import es from "../../messages/es.json";
import en from "../../messages/en.json";
import zh from "../../messages/zh.json";

const messages = { es, en, zh } as const;

type Locale = keyof typeof messages;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as Locale],
  };
});
