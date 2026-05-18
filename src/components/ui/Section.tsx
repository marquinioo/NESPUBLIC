import { cn } from "@/lib/cn";
import { SectionLabel } from "./SectionLabel";

type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  centered?: boolean;
};

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
  innerClassName,
  centered = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("mx-auto max-w-content px-6 md:px-12", innerClassName)}>
        {(label || title || subtitle) && (
          <header
            className={cn(
              "mb-10 md:mb-14",
              centered && "mx-auto max-w-3xl text-center",
            )}
          >
            {label && <SectionLabel>{label}</SectionLabel>}
            {title && (
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed text-text-muted",
                  centered ? "mx-auto max-w-2xl" : "max-w-2xl",
                )}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
