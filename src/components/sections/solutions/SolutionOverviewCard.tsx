import { cn } from "@/lib/cn";
import type { SolutionId } from "@/lib/site";
import { solutionHref } from "@/lib/site";
import { getSolutionIcon } from "@/lib/solution-icons";
import Image from "next/image";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { Button } from "@/components/ui/Button";

type SolutionOverviewCardProps = {
  id: SolutionId;
  icon: string;
  index: number;
  title: string;
  description: string;
  features: string[];
  learnMore: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function SolutionOverviewCard({
  id,
  icon,
  index,
  title,
  description,
  features,
  learnMore,
  imageSrc,
  imageAlt,
}: SolutionOverviewCardProps) {
  const Icon = getSolutionIcon(icon);
  const reversed = index % 2 === 1;
  const href = solutionHref(id);

  return (
    <AnimateOnView>
      <article
        className={cn(
          "overflow-hidden rounded-2xl border border-border bg-bg-surface",
          "grid md:grid-cols-2",
        )}
      >
        <div
          className={cn(
            "relative aspect-[16/9] min-h-[200px] overflow-hidden md:aspect-auto md:min-h-[280px]",
            reversed && "md:order-2",
          )}
        >
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
                priority={false}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-bg-subtle/60 to-accent-green/10"
                aria-hidden
              />
            </>
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-bg-subtle to-accent-green/20"
              aria-hidden
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Icon className="h-20 w-20 text-accent-green/40 md:h-28 md:w-28" />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col justify-center p-6 md:p-10",
            reversed && "md:order-1",
          )}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-3 leading-relaxed text-text-muted">{description}</p>
          <ul className="mt-5 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-primary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={href} variant="primary" className="!px-6 !py-2.5 text-sm">
              {learnMore}
            </Button>
          </div>
        </div>
      </article>
    </AnimateOnView>
  );
}
