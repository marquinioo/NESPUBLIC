import type { Locale } from "@/i18n/routing";
import type { LegalDocument, LegalDocumentKey } from "./types";
import { privacyContent } from "./privacy";
import { termsContent } from "./terms";

const DOCUMENTS: Record<LegalDocumentKey, Record<Locale, LegalDocument>> = {
  terms: termsContent,
  privacy: privacyContent,
};

export function getLegalDocument(
  key: LegalDocumentKey,
  locale: Locale,
): LegalDocument {
  return DOCUMENTS[key][locale];
}
