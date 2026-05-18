import { getTranslations } from "next-intl/server";
import { ChevronDown } from "lucide-react";
import { ROUTES } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden md:min-h-[78vh]">
      <div
        className="absolute inset-0 bg-bg-primary"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.12),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary/40" />
      </div>

      <Container className="relative z-10 py-20 md:py-24">
        <SectionLabel>{t("label")}</SectionLabel>
        <h1 className="mt-3 max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          {t("h1")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
          {t("subhead")}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={ROUTES.solutions} variant="primary">
            {t("cta1")}
          </Button>
          <Button href={ROUTES.contact} variant="secondary">
            {t("cta2")}
          </Button>
        </div>
        <a
          href="#stats"
          className="mt-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-green"
          aria-label="Scroll to stats"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </Container>
    </section>
  );
}
