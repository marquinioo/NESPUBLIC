import { getTranslations } from "next-intl/server";
import { Leaf, Factory, Building2, Cloud } from "lucide-react";
import { ROUTES, SUSTAINABILITY_SDGS } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const SDG_ICONS: Record<(typeof SUSTAINABILITY_SDGS)[number], typeof Leaf> = {
  "7": Leaf,
  "9": Factory,
  "11": Building2,
  "13": Cloud,
};

const SDG_COLORS: Record<(typeof SUSTAINABILITY_SDGS)[number], string> = {
  "7": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  "9": "text-accent-blue border-accent-blue/30 bg-accent-blue/10",
  "11": "text-accent-green border-accent-green/30 bg-accent-green/10",
  "13": "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};

export async function SustainabilityPage() {
  const sustainability = await getTranslations("sustainability");
  const shared = await getTranslations("solutionDetail");

  return (
    <>
      <PageHero
        title={sustainability("hero.h1")}
        subtitle={sustainability("hero.tagline")}
      />

      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {sustainability("intro.body")}
        </p>
      </Section>

      <Section className="bg-bg-surface" title={sustainability("sdg.h2")}>
        <div className="grid gap-6 md:grid-cols-2">
          {SUSTAINABILITY_SDGS.map((num, i) => {
            const Icon = SDG_ICONS[num];
            return (
              <AnimateOnView key={num} delay={i * 0.06}>
                <article
                  className={`flex gap-4 rounded-2xl border p-6 ${SDG_COLORS[num]}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-bg-primary/50 text-lg font-bold">
                    {num}
                  </div>
                  <div className="min-w-0 flex-1">
                    <Icon className="mb-2 h-5 w-5 opacity-80" aria-hidden />
                    <p className="text-sm leading-relaxed md:text-base">
                      {sustainability(`sdg.${num}`)}
                    </p>
                  </div>
                </article>
              </AnimateOnView>
            );
          })}
        </div>
      </Section>

      <Section title={sustainability("commitment.h2")}>
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
          {sustainability("commitment.body")}
        </p>
        <AnimateOnView className="mt-10">
          <div className="rounded-2xl border border-accent-green/30 bg-accent-green/5 p-8 text-center md:p-10">
            <p className="text-xl font-semibold">{sustainability("cta")}</p>
            <div className="mt-6">
              <Button href={ROUTES.contact} variant="primary">
                {shared("contactCta")}
              </Button>
            </div>
          </div>
        </AnimateOnView>
      </Section>
    </>
  );
}
