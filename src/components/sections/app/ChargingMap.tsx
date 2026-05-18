"use client";

import { useTranslations } from "next-intl";

/** Montevideo — NES charging network area. Override via NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL */
const DEFAULT_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209534.6!2d-56.2349694!3d-34.8695637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959fad875977a25d%3A0x10e690b177ccdb42!2sMontevideo%2C%20Uruguay!5e0!3m2!1ses!2suy!4v1716050000000!5m2!1ses!2suy";

export function ChargingMap() {
  const t = useTranslations("app.map");
  const src =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? DEFAULT_EMBED_URL;

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
