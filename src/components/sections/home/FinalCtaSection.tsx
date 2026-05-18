import { getTranslations } from "next-intl/server";
import { ROUTES } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export async function FinalCtaSection() {
  const t = await getTranslations("home.cta");

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-surface to-accent-green/10 px-8 py-16 text-center md:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)]"
            aria-hidden
          />
          <h2 className="relative text-3xl font-bold md:text-4xl">{t("h2")}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            {t("body")}
          </p>
          <div className="relative mt-8">
            <Button href={ROUTES.contact} variant="primary">
              {t("button")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
