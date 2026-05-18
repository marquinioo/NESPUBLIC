import { getTranslations } from "next-intl/server";
import { PARTNER_NAMES } from "@/lib/site";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { Container } from "@/components/ui/Container";

export async function PartnersSection() {
  const t = await getTranslations("home.partners");

  return (
    <section className="border-y border-border bg-bg-surface/50 py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-text-muted">
          {t("heading")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PARTNER_NAMES.map((name) => (
            <PartnerLogo key={name} name={name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
