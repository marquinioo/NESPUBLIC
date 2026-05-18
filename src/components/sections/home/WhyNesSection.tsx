import { getTranslations } from "next-intl/server";
import { Layers, Globe, Award, MapPin } from "lucide-react";
import { WHY_NES_ITEMS } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const ICONS = [Layers, Award, Globe, MapPin];

export async function WhyNesSection() {
  const t = await getTranslations("home.why");

  return (
    <Section label={t("label")} title={t("h2")}>
      <div className="grid gap-6 md:grid-cols-2">
        {WHY_NES_ITEMS.map((key, index) => {
          const Icon = ICONS[index];
          return (
            <AnimateOnView key={key} delay={index * 0.06}>
              <article className="flex gap-4 rounded-2xl border border-border bg-bg-surface p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {t(`${key}.body`)}
                  </p>
                </div>
              </article>
            </AnimateOnView>
          );
        })}
      </div>
    </Section>
  );
}
