import { getTranslations } from "next-intl/server";
import type { SolutionDetailId } from "@/lib/solution-pages";
import { getSolutionIcon } from "@/lib/solution-icons";
import { PageHero } from "@/components/ui/PageHero";
import { SolutionDetailSections } from "./detail/SolutionDetailSections";

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
      <SolutionDetailSections solutionId={solutionId} />
    </>
  );
}
