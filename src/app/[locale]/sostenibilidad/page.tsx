import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SustainabilityPage } from "@/components/sections/sustainability/SustainabilityPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sustainability.hero" });
  return {
    title: `${t("h1")} | NES`,
    description: t("tagline"),
  };
}

export default async function SostenibilidadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SustainabilityPage />;
}
