import { getTranslations } from "next-intl/server";
import { MapPin, Globe } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export async function ContactPage() {
  const hero = await getTranslations("contact.hero");
  const info = await getTranslations("contact.info");
  const menu = await getTranslations("menu");

  const interestLabels = Object.fromEntries(
    (
      [
        "catl",
        "charging",
        "vehicles",
        "bess",
        "iot",
        "app",
      ] as const
    ).map((key) => [key, menu(`${key}.title`)]),
  );

  return (
    <>
      <PageHero title={hero("h1")} subtitle={hero("tagline")} />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold">{info("heading")}</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-accent-green" />
                  <span className="text-text-muted">{info("location")}</span>
                </li>
                <li className="flex gap-4">
                  <Globe className="h-5 w-5 shrink-0 text-accent-green" />
                  <a
                    href={`https://${SITE.domain}`}
                    className="text-text-muted transition-colors hover:text-accent-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info("website")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-surface p-6 md:p-8">
              <ContactForm interestLabels={interestLabels} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
