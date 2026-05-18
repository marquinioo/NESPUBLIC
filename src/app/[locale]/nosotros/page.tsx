import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutPage } from "@/components/sections/about/AboutPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.hero" });
  return {
    title: `${t("h1")} | NES`,
    description: t("tagline"),
  };
}

export default async function NosotrosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPage />;
}
