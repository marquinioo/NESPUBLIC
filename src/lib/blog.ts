import { ROUTES } from "./site";

export const BLOG_CATEGORIES = [
  "project",
  "partnership",
  "innovation",
  "press",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostMeta = {
  slug: string;
  category: BlogCategory;
  date: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "omnibus-electrico-buquebus-uruguay",
    category: "project",
    date: "2026-05-18",
    featured: true,
  },
  {
    slug: "recambio-baterias-buses-montevideo",
    category: "project",
    date: "2026-01-12",
  },
  {
    slug: "alianza-estrategica-catl",
    category: "partnership",
    date: "2025-11-08",
  },
  {
    slug: "flota-camiones-electricos-uruguay",
    category: "project",
    date: "2025-09-20",
  },
  {
    slug: "sistema-bess-industrial",
    category: "innovation",
    date: "2025-07-14",
  },
  {
    slug: "lanzamiento-app-nes-charge",
    category: "innovation",
    date: "2025-05-03",
  },
  {
    slug: "nes-movilidad-electrica-prensa",
    category: "press",
    date: "2025-03-18",
  },
];

export const BLOG_POSTS_PER_PAGE = 7;

export function blogPostHref(slug: string) {
  return `${ROUTES.stories}/${slug}`;
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const rest = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function formatBlogDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "en" ? "en-US" : "es-UY",
    { year: "numeric", month: "long", day: "numeric" },
  );
}
