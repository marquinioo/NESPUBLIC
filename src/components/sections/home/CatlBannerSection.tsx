import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/ui/Section";
import { getSiteImages } from "@/lib/site-images";

export async function CatlBannerSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.catl");
  const images = await getTranslations("images");
  const { catl } = getSiteImages(locale);

  return (
    <Section className="bg-bg-surface" innerClassName="!px-0">
      <div className="mx-auto grid max-w-content items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-green">
            {t("label")}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("h2")}</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-text-muted">
            {t("body")}
          </p>
          <span className="mt-6 inline-block rounded-full border border-accent-green/40 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green">
            {t("badge")}
          </span>
        </div>
        <div className="flex items-center justify-center rounded-2xl border border-border bg-bg-primary p-12">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={catl.hero}
              alt={images("catlBanner")}
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover"
              quality={90}
              priority={false}
            />
            <div className="absolute inset-0 bg-bg-primary/70" aria-hidden />
            <p className="relative z-10 text-center text-5xl font-extrabold tracking-tighter text-text-muted/80">
              CATL
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
