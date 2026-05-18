import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  leading?: React.ReactNode;
};

export function PageHero({
  label,
  title,
  subtitle,
  className,
  leading,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-bg-primary py-16 md:py-24",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.1),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        {leading && <div className="mb-6">{leading}</div>}
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1
          className={cn(
            "max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl",
            label && "mt-3",
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
