import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SolutionDetailPage } from "@/components/sections/solutions/SolutionDetailPage";
import {
  getSolutionBySlug,
  isSolutionDetailId,
  SOLUTION_DETAIL_SLUGS,
} from "@/lib/solution-pages";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SOLUTION_DETAIL_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution || !isSolutionDetailId(solution.id)) {
    return { title: "NES" };
  }

  const t = await getTranslations({
    locale,
    namespace: solution.id,
  });

  return {
    title: `${t("hero.h1")} | NES`,
    description: t("hero.tagline"),
  };
}

export default async function SolutionSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const solution = getSolutionBySlug(slug);
  if (!solution || !isSolutionDetailId(solution.id)) {
    notFound();
  }

  return (
    <SolutionDetailPage solutionId={solution.id} icon={solution.icon} />
  );
}
