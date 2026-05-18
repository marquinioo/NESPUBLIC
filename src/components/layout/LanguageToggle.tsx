"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  zh: "中文",
};

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex rounded-full border border-border bg-bg-surface p-0.5"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "rounded-full px-2 py-1 text-[11px] font-medium transition-colors sm:px-2.5 sm:text-xs md:px-3",
            locale === loc
              ? "bg-accent-green text-black"
              : "text-text-muted hover:text-text-primary",
          )}
          aria-pressed={locale === loc}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
