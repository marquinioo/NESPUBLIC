import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { inter, notoSansSC } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<Locale, string> = {
    es: "NES — New Energy Solutions | Movilidad eléctrica en Uruguay",
    en: "NES — New Energy Solutions | Electric Mobility in Uruguay",
    zh: "NES — New Energy Solutions | 乌拉圭电动出行",
  };

  const descriptions: Record<Locale, string> = {
    es: "Ecosistema integrado de movilidad eléctrica: vehículos, carga, BESS, IoT y App NES Charge. Tecnología global, soporte local.",
    en: "Integrated electric mobility ecosystem: vehicles, charging, BESS, IoT, and NES Charge App. Global technology, local support.",
    zh: "整合电动出行生态系统：车辆、充电、储能、物联网与 NES Charge 应用。全球技术，本地支持。",
  };

  const l = locale as Locale;

  return {
    title: titles[l] ?? titles.es,
    description: descriptions[l] ?? descriptions.es,
    metadataBase: new URL(SITE.url),
    alternates: {
      languages: {
        es: "/",
        en: "/en",
        zh: "/zh",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const fontClass = locale === "zh" ? notoSansSC.className : inter.className;
  const fontVars = `${inter.variable} ${notoSansSC.variable}`;

  return (
    <html lang={locale} className={fontVars}>
      <body className={fontClass}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
