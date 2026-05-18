"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NAV_LINKS, ROUTES, SOLUTIONS, solutionHref } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "./LanguageToggle";
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";

export function Navbar() {
  const t = useTranslations("nav");
  const menu = useTranslations("menu");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeAll = () => {
    setSolutionsOpen(false);
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/80 bg-bg-primary/95 backdrop-blur-md"
      onMouseLeave={() => setSolutionsOpen(false)}
    >
      <nav className="relative mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4 md:px-12">
        <Link
          href={ROUTES.home}
          className="relative z-50 shrink-0"
          onClick={closeAll}
        >
          <Image
            src="/images/logo-white.png"
            alt="New Energy Solutions"
            width={160}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) =>
            "megaMenu" in item && item.megaMenu ? (
              <button
                key={item.key}
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  solutionsOpen
                    ? "text-accent-green"
                    : "text-text-muted hover:text-accent-green",
                )}
                aria-expanded={solutionsOpen}
                aria-controls="solutions-mega-menu"
                onMouseEnter={() => setSolutionsOpen(true)}
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                {t(item.key)}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    solutionsOpen && "rotate-180",
                  )}
                />
              </button>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-accent-green"
                onMouseEnter={() => setSolutionsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Button
            href={ROUTES.contact}
            variant="primary"
            className="hidden !px-5 !py-2 text-sm lg:inline-flex"
          >
            {t("contact")}
          </Button>
          <button
            type="button"
            className="relative z-50 rounded-lg p-2 text-text-primary lg:hidden"
            onClick={() => {
              setSolutionsOpen(false);
              setMobileOpen(!mobileOpen);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <SolutionsMegaMenu
        open={solutionsOpen}
        onClose={() => setSolutionsOpen(false)}
        onMouseEnter={() => setSolutionsOpen(true)}
      />

      {mobileOpen && (
        <div className="border-t border-border bg-bg-primary px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href={ROUTES.home}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-bg-surface"
              onClick={closeAll}
            >
              {t("home")}
            </Link>

            <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {t("solutions")}
            </p>
            {SOLUTIONS.map((item) => (
              <Link
                key={item.id}
                href={solutionHref(item.id)}
                className="rounded-lg px-3 py-2.5 text-sm hover:bg-bg-surface"
                onClick={closeAll}
              >
                <span className="font-medium">{menu(`${item.menuKey}.title`)}</span>
                <span className="mt-0.5 block text-xs text-text-muted">
                  {menu(`${item.menuKey}.desc`)}
                </span>
              </Link>
            ))}

            {NAV_LINKS.filter(
              (item) => !("megaMenu" in item && item.megaMenu) && item.key !== "home",
            ).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-bg-surface"
                onClick={closeAll}
              >
                {t(item.key)}
              </Link>
            ))}

            <div className="mt-4 border-t border-border pt-4">
              <Button
                href={ROUTES.contact}
                variant="primary"
                className="w-full text-center"
              >
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
