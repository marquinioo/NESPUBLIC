import { getTranslations } from "next-intl/server";
import { HOME_STATS } from "@/lib/site";
import { StatBadge } from "@/components/ui/StatBadge";
import { Container } from "@/components/ui/Container";
import { GradientDivider } from "@/components/ui/GradientDivider";

export async function StatsSection() {
  const t = await getTranslations("home.stats");

  return (
    <section id="stats" className="bg-bg-surface py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {HOME_STATS.map((stat, index) => (
            <div key={stat.key} className="relative flex items-center justify-center">
              {index > 0 && (
                <div
                  className="absolute left-0 hidden h-16 w-px -translate-x-4 bg-border md:block"
                  aria-hidden
                />
              )}
              <StatBadge
                value={stat.value}
                label={t(`${stat.key}.label`)}
              />
            </div>
          ))}
        </div>
      </Container>
      <GradientDivider />
    </section>
  );
}
