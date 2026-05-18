import { getTranslations } from "next-intl/server";
import { Lightbulb, MapPin, Globe, BarChart3, type LucideIcon } from "lucide-react";
import { ABOUT_PARTNER_NAMES, ABOUT_VALUES } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";

const VALUE_ICONS: Record<(typeof ABOUT_VALUES)[number], LucideIcon> = {
  v1: Lightbulb,
  v2: MapPin,
  v3: Globe,
  v4: BarChart3,
};

export async function AboutPage() {
  const hero = await getTranslations("about.hero");
  const story = await getTranslations("about.story");
  const mission = await getTranslations("about.mission");
  const values = await getTranslations("about.values");
  const partners = await getTranslations("about.partners");

  return (
    <>
      <PageHero title={hero("h1")} subtitle={hero("tagline")} />

      <Section label={story("label")} title={story("h2")}>
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {story("body")}
        </p>
      </Section>

      <Section
        className="bg-bg-surface"
        label={mission("label")}
        title={mission("h2")}
      >
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {mission("body")}
        </p>
      </Section>

      <Section label={values("label")}>
        <div className="grid gap-6 sm:grid-cols-2">
          {ABOUT_VALUES.map((key, i) => {
            const Icon = VALUE_ICONS[key];
            return (
              <AnimateOnView key={key} delay={i * 0.06}>
                <article className="rounded-2xl border border-border bg-bg-surface p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {values(`${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {values(`${key}.body`)}
                  </p>
                </article>
              </AnimateOnView>
            );
          })}
        </div>
      </Section>

      <Section
        className="border-t border-border bg-bg-surface/50"
        title={partners("h2")}
      >
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {partners("body")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {ABOUT_PARTNER_NAMES.map((name) => (
            <PartnerLogo key={name} name={name} />
          ))}
        </div>
      </Section>

      <FinalCtaSection />
    </>
  );
}
