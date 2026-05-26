import { getTranslations } from "next-intl/server";
import type { SolutionDetailId } from "@/lib/solution-pages";
import { getSolutionIcon } from "@/lib/solution-icons";
import { PageHero } from "@/components/ui/PageHero";
import { SolutionDetailSections } from "./detail/SolutionDetailSections";
import Image from "next/image";
import { solutionHeroImageSrc } from "@/lib/site-images";

type SolutionDetailPageProps = {
  solutionId: SolutionDetailId;
  icon: string;
};

export async function SolutionDetailPage({
  solutionId,
  icon,
}: SolutionDetailPageProps) {
  const t = await getTranslations(solutionId);
  const Icon = getSolutionIcon(icon);
  const heroImageSrc = solutionHeroImageSrc(solutionId);

  return (
    <>
      <PageHero
        title={t("hero.h1")}
        subtitle={t("hero.tagline")}
        leading={
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
            <Icon className="h-7 w-7" aria-hidden />
          </div>
        }
      />
      {heroImageSrc && (
        <section className="border-b border-border bg-bg-surface/50">
          <div className="mx-auto max-w-content px-6 py-10 md:px-12 md:py-14">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-border">
              <Image
                src={heroImageSrc}
                alt={t("hero.h1")}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                quality={90}
                priority={false}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-bg-primary/0 via-bg-primary/10 to-bg-primary/70"
                aria-hidden
              />
            </div>
          </div>
        </section>
      )}
      <SolutionDetailSections solutionId={solutionId} />
    </>
  );
}
