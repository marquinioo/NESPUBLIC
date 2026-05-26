import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SOLUTIONS, ROUTES, solutionHref } from "@/lib/site";
import { solutionHeroImageSrc } from "@/lib/site-images";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/ui/Section";
import { SolutionCard } from "@/components/ui/SolutionCard";

export async function SolutionsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.solutions");
  const shared = await getTranslations("shared");

  return (
    <Section
      id="solutions"
      label={t("label")}
      title={t("h2")}
      subtitle={t("subtext")}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((item) => (
          <SolutionCard
            key={item.id}
            icon={item.icon}
            title={t(`${item.cardKey}.title`)}
            description={t(`${item.cardKey}.desc`)}
            href={solutionHref(item.id)}
            learnMore={shared("learnMore")}
            imageSrc={solutionHeroImageSrc(locale, item.id) ?? undefined}
            imageAlt={t(`${item.cardKey}.title`)}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={ROUTES.solutions}
          className="text-sm font-semibold text-accent-green hover:text-accent-green-dark"
        >
          {t("viewAll")} →
        </Link>
      </div>
    </Section>
  );
}
