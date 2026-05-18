import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getLegalDocument } from "@/content/legal";
import type { Locale } from "@/i18n/routing";
import { LegalDocumentPage } from "@/components/sections/legal/LegalDocumentPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const doc = getLegalDocument("privacy", locale as Locale);
  return {
    title: `${doc.title} | NES`,
    description: doc.intro.slice(0, 160),
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalDocumentPage documentKey="privacy" />;
}
