/** Single source of truth for routes, solutions, and partner names. */

export const SITE = {
  name: "NES",
  domain: "nes.uy",
  url: "https://nes.uy",
} as const;

export const ROUTES = {
  home: "/",
  solutions: "/soluciones",
  about: "/nosotros",
  sustainability: "/sostenibilidad",
  stories: "/historias",
  app: "/app",
  contact: "/contacto",
  terms: "/terminos",
  privacy: "/privacidad",
} as const;

export type SolutionId =
  | "catl"
  | "charging"
  | "vehicles"
  | "bess"
  | "iot"
  | "app";

export const SOLUTIONS: {
  id: SolutionId;
  slug: string;
  icon: string;
  menuKey: string;
  cardKey: string;
}[] = [
  {
    id: "catl",
    slug: "baterias-catl",
    icon: "battery",
    menuKey: "catl",
    cardKey: "card1",
  },
  {
    id: "charging",
    slug: "infraestructura-de-carga",
    icon: "zap",
    menuKey: "charging",
    cardKey: "card2",
  },
  {
    id: "vehicles",
    slug: "vehiculos-electricos",
    icon: "truck",
    menuKey: "vehicles",
    cardKey: "card3",
  },
  {
    id: "bess",
    slug: "almacenamiento-bess",
    icon: "battery-charging",
    menuKey: "bess",
    cardKey: "card4",
  },
  {
    id: "iot",
    slug: "iot-telemetria",
    icon: "radio",
    menuKey: "iot",
    cardKey: "card5",
  },
  {
    id: "app",
    slug: "",
    icon: "smartphone",
    menuKey: "app",
    cardKey: "card6",
  },
];

export const SOLUTION_DETAIL_IDS = SOLUTIONS.filter(
  (s): s is (typeof SOLUTIONS)[number] & { slug: string } => Boolean(s.slug),
).map((s) => s.id) as Exclude<SolutionId, "app">[];

export function solutionHref(id: SolutionId): string {
  const item = SOLUTIONS.find((s) => s.id === id);
  if (!item) return ROUTES.solutions;
  if (id === "app") return ROUTES.app;
  return `${ROUTES.solutions}/${item.slug}`;
}

export const PARTNER_NAMES = [
  "CATL",
  "KinWin",
  "InfyPower",
  "GTK",
  "XCMG",
  "SSE",
] as const;

export const ABOUT_PARTNER_NAMES = [
  "CATL",
  "KinWin",
  "Guangtong",
  "InfyPower",
  "GTK",
  "SL New Energy",
] as const;

export const ABOUT_VALUES = ["v1", "v2", "v3", "v4"] as const;

export const APP_FEATURES = ["f1", "f2", "f3", "f4"] as const;

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";
export const GOOGLE_PLAY_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#";

export const NAV_LINKS = [
  { key: "home", href: ROUTES.home },
  { key: "solutions", href: ROUTES.solutions, megaMenu: true },
  { key: "about", href: ROUTES.about },
  { key: "sustainability", href: ROUTES.sustainability },
  { key: "stories", href: ROUTES.stories },
  { key: "app", href: ROUTES.app },
] as const;

export const FOOTER_SOLUTION_LINKS = SOLUTIONS.filter((s) => s.id !== "app");
export const FOOTER_COMPANY_LINKS = [
  { key: "about", href: ROUTES.about },
  { key: "sustainability", href: ROUTES.sustainability },
  { key: "stories", href: ROUTES.stories },
  { key: "contact", href: ROUTES.contact },
] as const;

export const FOOTER_POLICY_LINKS = [
  { key: "terms", href: ROUTES.terms },
  { key: "privacy", href: ROUTES.privacy },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/nesuy/",
    label: "LinkedIn",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/newenergysolutions.uy/",
    label: "Instagram",
  },
] as const;

export const HOME_STATS = [
  { key: "s1", value: "+10" },
  { key: "s2", value: "+3 MW" },
  { key: "s3", value: "+50" },
  { key: "s4", value: "+40" },
] as const;

export const WHY_NES_ITEMS = ["d1", "d2", "d3", "d4"] as const;

/** Feature bullet keys per solution on the overview page (messages: solutions.items.{menuKey}.{key}) */
export const SOLUTION_OVERVIEW_FEATURES = ["f1", "f2", "f3"] as const;

export const CONTACT_INTEREST_OPTIONS: {
  value: SolutionId | "other";
  menuKey?: string;
}[] = [
  { value: "catl", menuKey: "catl" },
  { value: "charging", menuKey: "charging" },
  { value: "vehicles", menuKey: "vehicles" },
  { value: "bess", menuKey: "bess" },
  { value: "iot", menuKey: "iot" },
  { value: "app", menuKey: "app" },
  { value: "other" },
];

export const SUSTAINABILITY_SDGS = ["7", "9", "11", "13"] as const;

export const MASCOT_LINKS: { key: string; href: string; icon: string }[] = [
  { key: "link1", href: solutionHref("vehicles"), icon: "🚛" },
  { key: "link2", href: solutionHref("catl"), icon: "🔋" },
  { key: "link3", href: ROUTES.app, icon: "📱" },
  { key: "link4", href: solutionHref("bess"), icon: "⚡" },
];
