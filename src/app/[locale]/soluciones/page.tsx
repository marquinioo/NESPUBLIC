import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SolutionsOverviewPage } from "@/components/sections/solutions/SolutionsOverviewPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutions.hero" });
  return {
    title: `${t("h1")} | NES`,
    description: t("intro"),
  };
}

export default async function SolucionesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SolutionsOverviewPage />;
}
