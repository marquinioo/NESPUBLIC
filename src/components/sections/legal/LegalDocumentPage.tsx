import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getLegalDocument } from "@/content/legal";
import type { LegalDocumentKey } from "@/content/legal/types";
import { Container } from "@/components/ui/Container";

type LegalDocumentPageProps = {
  documentKey: LegalDocumentKey;
};

export async function LegalDocumentPage({ documentKey }: LegalDocumentPageProps) {
  const locale = (await getLocale()) as Locale;
  const doc = getLegalDocument(documentKey, locale);

  return (
    <article className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-text-muted">{doc.updated}</p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-text-muted">{doc.intro}</p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
                {section.heading && (
                  <h2 className="text-xl font-bold text-text-primary">{section.heading}</h2>
                )}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="leading-relaxed text-text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="list-disc space-y-2 pl-6 text-text-muted">
                      {section.listItems.map((item) => (
                        <li key={item.slice(0, 40)} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
