import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_POLICY_LINKS,
  FOOTER_SOLUTION_LINKS,
  ROUTES,
  SITE,
  solutionHref,
} from "@/lib/site";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { FooterSocialLinks } from "./FooterSocialLinks";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const menu = await getTranslations("menu");
  const legal = await getTranslations("legal");

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-content px-6 py-16 md:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="New Energy Solutions"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t("col2Title")}
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_SOLUTION_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={solutionHref(item.id)}
                    className="text-sm text-text-muted transition-colors hover:text-accent-green"
                  >
                    {menu(`${item.menuKey}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t("col3Title")}
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent-green"
                  >
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <FooterSocialLinks />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t("col4Title")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href={ROUTES.app}
                  className="transition-colors hover:text-accent-green"
                >
                  {nav("app")}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.contact}
                  className="transition-colors hover:text-accent-green"
                >
                  {nav("contact")}
                </Link>
              </li>
              <li>
                <a
                  href={`https://${SITE.domain}`}
                  className="transition-colors hover:text-accent-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.domain}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              {t("col5Title")}
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_POLICY_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent-green"
                  >
                    {legal(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GradientDivider />
        <p className="mt-8 text-center text-xs text-text-muted md:text-left">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
