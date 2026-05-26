import type { Locale } from "@/i18n/routing";
import type { SolutionId } from "./site";

type AppImages = {
  hero: string;
  promo: string;
  story: string;
  screenshot1: string;
  screenshot2: string;
  screenshot3: string;
  screenshot4: string;
};

type CatlImages = {
  hero: string;
  osvaldo: string;
  brand1: string;
  brand2: string;
  brand3: string;
};

type VehicleImages = {
  hero: string;
  photo2: string;
  carousel1: string;
  carousel2: string;
  carousel3: string;
  carousel4: string;
  carousel5: string;
};

type OmnibusImages = {
  hero: string;
  gallery: readonly string[];
};

export type SiteImageSet = {
  app: AppImages;
  catl: CatlImages;
  vehicles: VehicleImages;
  omnibus: OmnibusImages;
};

function imagePath(locale: Locale, segment: string): string {
  return `/images/${locale}/${segment}`;
}

const OMNIBUS_GALLERY = (locale: Locale) =>
  Array.from({ length: 10 }, (_, index) =>
    imagePath(locale, `omnibus/gallery-${String(index + 1).padStart(2, "0")}.jpg`),
  ) as readonly string[];

const SITE_IMAGES_ES: SiteImageSet = {
  app: {
    hero: imagePath("es", "app/hero.jpg"),
    promo: imagePath("es", "app/promo.png"),
    story: imagePath("es", "app/story.png"),
    screenshot1: imagePath("es", "app/screenshot-1.jpg"),
    screenshot2: imagePath("es", "app/screenshot-2.jpg"),
    screenshot3: imagePath("es", "app/screenshot-3.jpg"),
    screenshot4: imagePath("es", "app/screenshot-4.jpg"),
  },
  catl: {
    hero: imagePath("es", "catl/hero.jpeg"),
    osvaldo: imagePath("es", "catl/osvaldo.jpeg"),
    brand1: imagePath("es", "catl/brand-01.png"),
    brand2: imagePath("es", "catl/brand-02.png"),
    brand3: imagePath("es", "catl/brand-03.png"),
  },
  vehicles: {
    hero: imagePath("es", "vehicles/photo-01.jpg"),
    photo2: imagePath("es", "vehicles/photo-02.jpg"),
    carousel1: imagePath("es", "vehicles/carousel-01.png"),
    carousel2: imagePath("es", "vehicles/carousel-02.png"),
    carousel3: imagePath("es", "vehicles/carousel-03.png"),
    carousel4: imagePath("es", "vehicles/carousel-04.png"),
    carousel5: imagePath("es", "vehicles/carousel-05.png"),
  },
  omnibus: {
    hero: imagePath("es", "omnibus/hero.jpg"),
    gallery: OMNIBUS_GALLERY("es"),
  },
};

/** English uses photo-led assets to avoid Spanish copy baked into marketing graphics. */
const SITE_IMAGES_EN: SiteImageSet = {
  app: {
    hero: imagePath("en", "app/hero.jpg"),
    promo: imagePath("en", "app/promo.jpg"),
    story: imagePath("en", "app/story.jpg"),
    screenshot1: imagePath("en", "app/screenshot-1.jpg"),
    screenshot2: imagePath("en", "app/screenshot-2.jpg"),
    screenshot3: imagePath("en", "app/screenshot-3.jpg"),
    screenshot4: imagePath("en", "app/screenshot-4.jpg"),
  },
  catl: {
    hero: imagePath("en", "catl/hero.jpeg"),
    osvaldo: imagePath("en", "catl/osvaldo.jpeg"),
    brand1: imagePath("en", "catl/brand-01.png"),
    brand2: imagePath("en", "catl/brand-02.png"),
    brand3: imagePath("en", "catl/brand-03.png"),
  },
  vehicles: {
    hero: imagePath("en", "vehicles/photo-01.jpg"),
    photo2: imagePath("en", "vehicles/photo-02.jpg"),
    carousel1: imagePath("en", "vehicles/photo-01.jpg"),
    carousel2: imagePath("en", "vehicles/photo-02.jpg"),
    carousel3: imagePath("en", "omnibus/gallery-04.jpg"),
    carousel4: imagePath("en", "omnibus/gallery-05.jpg"),
    carousel5: imagePath("en", "omnibus/gallery-06.jpg"),
  },
  omnibus: {
    hero: imagePath("en", "omnibus/hero.jpg"),
    gallery: OMNIBUS_GALLERY("en"),
  },
};

const SITE_IMAGES_ZH: SiteImageSet = {
  app: {
    hero: imagePath("zh", "app/hero.jpg"),
    promo: imagePath("zh", "app/promo.jpg"),
    story: imagePath("zh", "app/story.jpg"),
    screenshot1: imagePath("zh", "app/screenshot-1.jpg"),
    screenshot2: imagePath("zh", "app/screenshot-2.jpg"),
    screenshot3: imagePath("zh", "app/screenshot-3.jpg"),
    screenshot4: imagePath("zh", "app/screenshot-4.jpg"),
  },
  catl: {
    hero: imagePath("zh", "catl/hero.jpeg"),
    osvaldo: imagePath("zh", "catl/osvaldo.jpeg"),
    brand1: imagePath("zh", "catl/brand-01.png"),
    brand2: imagePath("zh", "catl/brand-02.png"),
    brand3: imagePath("zh", "catl/brand-03.png"),
  },
  vehicles: {
    hero: imagePath("zh", "vehicles/photo-01.jpg"),
    photo2: imagePath("zh", "vehicles/photo-02.jpg"),
    carousel1: imagePath("zh", "vehicles/photo-01.jpg"),
    carousel2: imagePath("zh", "vehicles/photo-02.jpg"),
    carousel3: imagePath("zh", "omnibus/gallery-04.jpg"),
    carousel4: imagePath("zh", "omnibus/gallery-05.jpg"),
    carousel5: imagePath("zh", "omnibus/gallery-06.jpg"),
  },
  omnibus: {
    hero: imagePath("zh", "omnibus/hero.jpg"),
    gallery: OMNIBUS_GALLERY("zh"),
  },
};

const SITE_IMAGES_BY_LOCALE: Record<Locale, SiteImageSet> = {
  es: SITE_IMAGES_ES,
  en: SITE_IMAGES_EN,
  zh: SITE_IMAGES_ZH,
};

export function getSiteImages(locale: Locale): SiteImageSet {
  return SITE_IMAGES_BY_LOCALE[locale] ?? SITE_IMAGES_ES;
}

export function mascotImageSrc(locale: Locale): string {
  return `/images/mascot-${locale}.png`;
}

export function solutionHeroImageSrc(
  locale: Locale,
  id: SolutionId,
): string | null {
  const images = getSiteImages(locale);

  switch (id) {
    case "catl":
      return images.catl.hero;
    case "vehicles":
      return images.vehicles.hero;
    case "charging":
      return images.vehicles.carousel2;
    case "bess":
      return images.catl.brand2;
    case "iot":
      return images.vehicles.carousel4;
    case "app":
      return images.app.hero;
    default:
      return null;
  }
}

export function blogHeroImageSrc(locale: Locale, slug: string): string {
  const images = getSiteImages(locale);

  switch (slug) {
    case "omnibus-electrico-buquebus-uruguay":
      return images.omnibus.hero;
    case "recambio-baterias-buses-montevideo":
      return images.catl.osvaldo;
    case "alianza-estrategica-catl":
      return images.catl.brand1;
    case "flota-camiones-electricos-uruguay":
      return images.vehicles.photo2;
    case "sistema-bess-industrial":
      return images.catl.brand3;
    case "lanzamiento-app-nes-charge":
      return images.app.story;
    case "nes-movilidad-electrica-prensa":
      return images.omnibus.gallery[4] ?? images.omnibus.hero;
    default:
      return images.omnibus.hero;
  }
}
