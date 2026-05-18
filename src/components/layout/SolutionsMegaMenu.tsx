"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SOLUTIONS, solutionHref } from "@/lib/site";
import { getSolutionIcon } from "@/lib/solution-icons";
import { cn } from "@/lib/cn";

type SolutionsMegaMenuProps = {
  open: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
};

export function SolutionsMegaMenu({
  open,
  onClose,
  onMouseEnter,
}: SolutionsMegaMenuProps) {
  const t = useTranslations("menu");
  const nav = useTranslations("nav");

  if (!open) return null;

  return (
    <div
      id="solutions-mega-menu"
      className="absolute inset-x-0 top-full z-40 border-b border-border bg-bg-primary shadow-2xl"
      role="navigation"
      aria-label={nav("solutions")}
      onMouseEnter={onMouseEnter}
    >
      <div className="mx-auto max-w-content px-6 py-8 md:px-12 md:py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {SOLUTIONS.map((item) => {
            const Icon = getSolutionIcon(item.icon);
            return (
              <Link
                key={item.id}
                href={solutionHref(item.id)}
                onClick={onClose}
                className={cn(
                  "group flex gap-4 rounded-xl border border-border/60 bg-bg-surface/50 p-4 transition-colors",
                  "hover:border-accent-green/40 hover:bg-accent-green/5",
                )}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug text-text-primary group-hover:text-accent-green">
                    {t(`${item.menuKey}.title`)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {t(`${item.menuKey}.desc`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
