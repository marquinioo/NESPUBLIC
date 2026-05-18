"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { MASCOT_LINKS } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const MASCOT_IMAGES: Record<Locale, string> = {
  es: "/images/mascot-es.png",
  en: "/images/mascot-en.png",
  zh: "/images/mascot-zh.png",
};

export function MascotGuideSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("mascot");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[360px] md:max-w-[520px] lg:max-w-none">
            <div className="relative z-0 overflow-visible rounded-2xl border border-border bg-bg-surface/30 p-3 md:p-4">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={reduceMotion ? "" : "animate-mascot-idle"}
              >
                <Image
                  src={MASCOT_IMAGES[locale]}
                  alt="Voltio — NES mascot"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 768px) 360px, (max-width: 1024px) 520px, 560px"
                  quality={95}
                  className="relative z-0 h-auto w-full rounded-xl object-contain"
                  priority={false}
                />
              </motion.div>
            </div>

            <motion.div
              className="pointer-events-none absolute left-8 top-8 z-20 md:left-11 md:top-11"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pointer-events-auto relative max-w-[min(100%,14rem)] rounded-2xl border border-border bg-bg-surface px-4 py-3 text-sm font-medium text-text-primary shadow-xl ring-1 ring-black/10">
                {t("bubble")}
                <span
                  className="absolute -bottom-2 left-10 h-4 w-4 rotate-45 border-b border-r border-border bg-bg-surface"
                  aria-hidden
                />
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {MASCOT_LINKS.map((link, i) => (
              <AnimateOnView key={link.key} delay={i * 0.08}>
                <Link
                  href={link.href}
                  className="group flex items-start gap-4 rounded-2xl border border-border border-l-4 border-l-accent-green bg-bg-surface p-5 transition-colors hover:bg-accent-green/10"
                >
                  <span className="text-2xl" aria-hidden>
                    {link.icon}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold">{t(`${link.key}.hook`)}</p>
                    <p className="mt-1 text-sm text-text-muted">
                      {t(`${link.key}.desc`)}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent-green transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
