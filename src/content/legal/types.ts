import type { Locale } from "@/i18n/routing";

export type LegalSection = {
  heading?: string;
  paragraphs: string[];
  listItems?: string[];
};

export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalDocumentKey = "terms" | "privacy";

export type LocalizedLegalDocument = Record<Locale, LegalDocument>;
