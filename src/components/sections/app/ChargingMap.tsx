"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  URUGUAY_BOUNDS,
  URUGUAY_CHARGING_TOWNS,
} from "@/lib/charging-locations";
import { NES_MAP_STYLES } from "@/lib/google-map-styles";
import type { Locale } from "@/i18n/routing";

const MAP_SCRIPT_ID = "google-maps-js";
const LOCALE_TO_MAP_LANG: Record<Locale, string> = {
  es: "es",
  en: "en",
  zh: "zh-CN",
};

/** Country-level embed when the JavaScript API key is not configured. */
const URUGUAY_EMBED_FALLBACK =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068380!2d-56!3d-32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95fcc0656f33fbd5%3A0x9e1417d1e1215b9f!2sUruguay!5e0!3m2!1ses!2suy!4v1716050000000!5m2!1ses!2suy";

function loadGoogleMaps(apiKey: string, language: string): Promise<typeof google.maps> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return;

    if (window.google?.maps?.Map) {
      resolve(window.google.maps);
      return;
    }

    const existing = document.getElementById(MAP_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google!.maps));
      existing.addEventListener("error", () => reject(new Error("Google Maps failed to load")));
      return;
    }

    const script = document.createElement("script");
    script.id = MAP_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&language=${language}&region=UY`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google!.maps);
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });
}

function MapFallback({ title, hint }: { title: string; hint: string }) {
  const src =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? URUGUAY_EMBED_FALLBACK;

  return (
    <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border bg-bg-primary">
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="absolute bottom-3 left-3 right-3 rounded-lg bg-bg-surface/95 px-3 py-2 text-xs text-text-muted backdrop-blur">
        {hint}
      </p>
    </div>
  );
}

export function ChargingMap() {
  const t = useTranslations("app.map");
  const locale = useLocale() as Locale;
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [useFallback, setUseFallback] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      setUseFallback(true);
      return;
    }

    let cancelled = false;

    loadGoogleMaps(apiKey, LOCALE_TO_MAP_LANG[locale])
      .then((maps) => {
        if (cancelled || !containerRef.current) return;

        const bounds = new maps.LatLngBounds(
          { lat: URUGUAY_BOUNDS.south, lng: URUGUAY_BOUNDS.west },
          { lat: URUGUAY_BOUNDS.north, lng: URUGUAY_BOUNDS.east },
        );

        const map = new maps.Map(containerRef.current, {
          styles: NES_MAP_STYLES as google.maps.MapTypeStyle[],
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: "cooperative",
          backgroundColor: "#0A0E14",
        });

        map.fitBounds(bounds, { top: 40, right: 40, bottom: 40, left: 40 });

        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = URUGUAY_CHARGING_TOWNS.map((town) => {
          return new maps.Marker({
            map,
            position: { lat: town.lat, lng: town.lng },
            title: t(`towns.${town.id}`),
            icon: {
              path: maps.SymbolPath.CIRCLE,
              scale: 9,
              fillColor: "#22C55E",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          });
        });
      })
      .catch(() => {
        if (!cancelled) setUseFallback(true);
      });

    return () => {
      cancelled = true;
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];
    };
  }, [apiKey, locale, t]);

  if (useFallback) {
    return <MapFallback title={t("iframeTitle")} hint={t("fallbackHint")} />;
  }

  return (
    <div
      ref={containerRef}
      className="aspect-[16/7] w-full overflow-hidden rounded-2xl border border-border bg-bg-primary"
      role="region"
      aria-label={t("iframeTitle")}
    />
  );
}

declare global {
  interface Window {
    google?: { maps: typeof google.maps };
  }
}
