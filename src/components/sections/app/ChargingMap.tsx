"use client";

import { useTranslations } from "next-intl";

/** Full-country view of Uruguay — no API key required. */
const URUGUAY_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068380!2d-56!3d-32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95fcc0656f33fbd5%3A0x9e1417d1e1215b9f!2sUruguay!5e0!3m2!1ses!2suy!4v1716050000000!5m2!1ses!2suy";

export function ChargingMap() {
  const t = useTranslations("app.map");
  const src =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? URUGUAY_EMBED_URL;

  return (
    <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border bg-bg-primary">
      <iframe
        title={t("iframeTitle")}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
