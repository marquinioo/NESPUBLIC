import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogIndexPage } from "@/components/sections/blog/BlogIndexPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.hero" });
  return {
    title: `${t("h1")} | NES`,
    description: t("subhead"),
  };
}

export default async function HistoriasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogIndexPage />;
}
