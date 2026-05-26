import type { SolutionId } from "./site";

export const SITE_IMAGES = {
  app: {
    hero: "/images/app/hero.jpg",
    promo: "/images/app/promo.png",
    story: "/images/app/story.png",
    screenshot1: "/images/app/screenshot-1.jpg",
    screenshot2: "/images/app/screenshot-2.jpg",
    screenshot3: "/images/app/screenshot-3.jpg",
    screenshot4: "/images/app/screenshot-4.jpg",
  },
  catl: {
    hero: "/images/catl/hero.jpeg",
    osvaldo: "/images/catl/osvaldo.jpeg",
    brand1: "/images/catl/brand-01.png",
    brand2: "/images/catl/brand-02.png",
    brand3: "/images/catl/brand-03.png",
  },
  vehicles: {
    hero: "/images/vehicles/photo-01.jpg",
    photo2: "/images/vehicles/photo-02.jpg",
    carousel1: "/images/vehicles/carousel-01.png",
    carousel2: "/images/vehicles/carousel-02.png",
    carousel3: "/images/vehicles/carousel-03.png",
    carousel4: "/images/vehicles/carousel-04.png",
    carousel5: "/images/vehicles/carousel-05.png",
  },
  omnibus: {
    hero: "/images/omnibus/hero.jpg",
    gallery: [
      "/images/omnibus/gallery-01.jpg",
      "/images/omnibus/gallery-02.jpg",
      "/images/omnibus/gallery-03.jpg",
      "/images/omnibus/gallery-04.jpg",
      "/images/omnibus/gallery-05.jpg",
      "/images/omnibus/gallery-06.jpg",
      "/images/omnibus/gallery-07.jpg",
      "/images/omnibus/gallery-08.jpg",
      "/images/omnibus/gallery-09.jpg",
      "/images/omnibus/gallery-10.jpg",
    ] as const,
  },
} as const;

export function solutionHeroImageSrc(id: SolutionId): string | null {
  switch (id) {
    case "catl":
      return SITE_IMAGES.catl.hero;
    case "vehicles":
      return SITE_IMAGES.vehicles.hero;
    case "charging":
      return SITE_IMAGES.vehicles.carousel2;
    case "bess":
      return SITE_IMAGES.catl.brand2;
    case "iot":
      return SITE_IMAGES.vehicles.carousel4;
    case "app":
      return SITE_IMAGES.app.hero;
    default:
      return null;
  }
}

export function blogHeroImageSrc(slug: string): string {
  switch (slug) {
    case "omnibus-electrico-buquebus-uruguay":
      return SITE_IMAGES.omnibus.hero;
    case "recambio-baterias-buses-montevideo":
      return SITE_IMAGES.catl.osvaldo;
    case "alianza-estrategica-catl":
      return SITE_IMAGES.catl.brand1;
    case "flota-camiones-electricos-uruguay":
      return SITE_IMAGES.vehicles.photo2;
    case "sistema-bess-industrial":
      return SITE_IMAGES.catl.brand3;
    case "lanzamiento-app-nes-charge":
      return SITE_IMAGES.app.story;
    case "nes-movilidad-electrica-prensa":
      return SITE_IMAGES.omnibus.gallery[4] ?? SITE_IMAGES.omnibus.hero;
    default:
      return SITE_IMAGES.omnibus.hero;
  }
}

