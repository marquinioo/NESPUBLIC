import { getTranslations, getLocale } from "next-intl/server";
import {
  SOLUTIONS,
  SOLUTION_OVERVIEW_FEATURES,
} from "@/lib/site";
import { solutionHeroImageSrc } from "@/lib/site-images";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SolutionOverviewCard } from "./SolutionOverviewCard";

export async function SolutionsOverviewPage() {
  const locale = (await getLocale()) as Locale;
  const hero = await getTranslations("solutions.hero");
  const menu = await getTranslations("menu");
  const homeSolutions = await getTranslations("home.solutions");
  const items = await getTranslations("solutions.items");
  const shared = await getTranslations("shared");

  return (
    <>
      <PageHero title={hero("h1")} subtitle={hero("intro")} />
      <section className="py-16 md:py-24">
        <Container className="space-y-8 md:space-y-12">
          {SOLUTIONS.map((solution, index) => {
            const features = SOLUTION_OVERVIEW_FEATURES.map((f) =>
              items(`${solution.menuKey}.${f}`),
            );

            return (
              <SolutionOverviewCard
                key={solution.id}
                id={solution.id}
                icon={solution.icon}
                index={index}
                title={menu(`${solution.menuKey}.title`)}
                description={homeSolutions(`${solution.cardKey}.desc`)}
                features={features}
                learnMore={shared("learnMore")}
                imageSrc={solutionHeroImageSrc(locale, solution.id) ?? undefined}
                imageAlt={menu(`${solution.menuKey}.title`)}
              />
            );
          })}
        </Container>
      </section>
    </>
  );
}
