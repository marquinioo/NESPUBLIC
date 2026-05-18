import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AppPage } from "@/components/sections/app/AppPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "app.hero" });
  return {
    title: `${t("h1")} | NES Charge`,
    description: t("subhead"),
  };
}

export default async function AppRoutePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AppPage />;
}
