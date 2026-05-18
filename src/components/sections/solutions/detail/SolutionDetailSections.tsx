import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import {
  SOLUTION_DETAIL_SECTIONS,
  type DetailSection,
  type SolutionDetailId,
} from "@/lib/solution-pages";
import { ROUTES } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

type SolutionDetailSectionsProps = {
  solutionId: SolutionDetailId;
};

function prefixFromHeading(headingKey: string) {
  const parts = headingKey.split(".");
  parts.pop();
  return parts.length ? `${parts.join(".")}.` : "";
}

async function TextBlock({
  solutionId,
  sectionKey,
  variant,
}: {
  solutionId: SolutionDetailId;
  sectionKey: string;
  variant?: "default" | "highlight";
}) {
  const t = await getTranslations(solutionId);
  const hasHeading = t.has(`${sectionKey}.heading`);

  return (
    <AnimateOnView>
      <div
        className={cn(
          "rounded-2xl border p-6 md:p-8",
          variant === "highlight"
            ? "border-accent-green/30 bg-accent-green/5"
            : "border-border bg-bg-surface",
        )}
      >
        {hasHeading && (
          <h3 className="text-xl font-bold">{t(`${sectionKey}.heading`)}</h3>
        )}
        <p
          className={cn(
            "leading-relaxed text-text-muted",
            hasHeading && "mt-3",
          )}
        >
          {hasHeading ? t(`${sectionKey}.body`) : t(sectionKey)}
        </p>
      </div>
    </AnimateOnView>
  );
}

async function SectionBlock({
  solutionId,
  section,
}: {
  solutionId: SolutionDetailId;
  section: DetailSection;
}) {
  const t = await getTranslations(solutionId);
  const shared = await getTranslations("solutionDetail");

  switch (section.type) {
    case "overview":
      return (
        <AnimateOnView>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              {t("overview.h2")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              {t("overview.body")}
            </p>
          </div>
        </AnimateOnView>
      );

    case "bullets": {
      const prefix = prefixFromHeading(section.headingKey);
      return (
        <AnimateOnView>
          <h3 className="text-xl font-bold md:text-2xl">
            {t(section.headingKey)}
          </h3>
          <ul className="mt-6 space-y-4">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-bg-surface p-4 text-sm leading-relaxed md:text-base"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-green" />
                <span>{t(`${prefix}${item}`)}</span>
              </li>
            ))}
          </ul>
        </AnimateOnView>
      );
    }

    case "specs":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {section.items.map((key, i) => (
            <AnimateOnView key={key} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-l-4 border-l-accent-green border-border bg-bg-surface p-5 text-sm leading-relaxed md:text-base">
                {t(`specs.${key}`)}
              </div>
            </AnimateOnView>
          ))}
        </div>
      );

    case "text":
      return (
        <TextBlock
          solutionId={solutionId}
          sectionKey={section.key}
          variant={section.variant}
        />
      );

    case "grid": {
      const prefix = prefixFromHeading(section.headingKey);
      return (
        <AnimateOnView>
          <h3 className="text-xl font-bold md:text-2xl">
            {t(section.headingKey)}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-bg-surface p-5 text-sm leading-relaxed"
              >
                {t(`${prefix}${item}`)}
              </div>
            ))}
          </div>
        </AnimateOnView>
      );
    }

    case "cta":
      return (
        <AnimateOnView>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-bg-surface to-accent-green/10 p-8 text-center md:p-12">
            <p className="text-xl font-semibold md:text-2xl">{t("cta")}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={ROUTES.contact} variant="primary">
                {shared("contactCta")}
              </Button>
              <Button href={ROUTES.solutions} variant="secondary">
                {shared("backToSolutions")}
              </Button>
            </div>
          </div>
        </AnimateOnView>
      );

    default:
      return null;
  }
}

export async function SolutionDetailSections({
  solutionId,
}: SolutionDetailSectionsProps) {
  const sections = SOLUTION_DETAIL_SECTIONS[solutionId];

  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-14 md:space-y-20">
        {sections.map((section, index) => (
          <SectionBlock
            key={`${section.type}-${index}`}
            solutionId={solutionId}
            section={section}
          />
        ))}
      </Container>
    </section>
  );
}
