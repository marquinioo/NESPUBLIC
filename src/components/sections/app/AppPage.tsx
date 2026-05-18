import { getTranslations } from "next-intl/server";
import {
  MapPin,
  CreditCard,
  History,
  Bell,
  type LucideIcon,
} from "lucide-react";
import { APP_FEATURES, APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const FEATURE_ICONS: Record<(typeof APP_FEATURES)[number], LucideIcon> = {
  f1: MapPin,
  f2: CreditCard,
  f3: History,
  f4: Bell,
};

export async function AppPage() {
  const hero = await getTranslations("app.hero");
  const cta = await getTranslations("app.cta");
  const features = await getTranslations("app.features");
  const map = await getTranslations("app.map");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.12),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-green">
                {hero("label")}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
                {hero("h1")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                {hero("subhead")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_STORE_URL}
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta("appStore")}
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta("googlePlay")}
                </a>
              </div>
            </div>
            <AnimateOnView>
              <PhoneMockup />
            </AnimateOnView>
          </div>
        </Container>
      </section>

      <Section title={features("h2")} innerClassName="!max-w-none">
        <div className="grid gap-6 sm:grid-cols-2">
          {APP_FEATURES.map((key, i) => {
            const Icon = FEATURE_ICONS[key];
            return (
              <AnimateOnView key={key} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-border bg-bg-surface p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{features(`${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {features(`${key}.desc`)}
                  </p>
                </article>
              </AnimateOnView>
            );
          })}
        </div>
      </Section>

      <section className="border-t border-border bg-bg-surface py-16 md:py-24">
        <Container>
          <AnimateOnView>
            <h2 className="text-3xl font-bold md:text-4xl">{map("h2")}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">{map("desc")}</p>
          </AnimateOnView>
          <AnimateOnView className="mt-10">
            <div
              className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border bg-bg-primary"
              role="img"
              aria-label={map("h2")}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)]" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(34,197,94,0.5) 2px, transparent 2px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              {[
                { top: "35%", left: "45%" },
                { top: "50%", left: "55%" },
                { top: "40%", left: "30%" },
                { top: "60%", left: "65%" },
                { top: "25%", left: "60%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent-green shadow-lg shadow-accent-green/50"
                  style={pos}
                />
              ))}
              <div className="absolute bottom-4 left-4 rounded-lg bg-bg-surface/90 px-3 py-2 text-xs font-medium backdrop-blur">
                Montevideo · Uruguay
              </div>
            </div>
          </AnimateOnView>
        </Container>
      </section>
    </>
  );
}
