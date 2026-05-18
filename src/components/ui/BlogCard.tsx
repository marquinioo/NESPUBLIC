import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type BlogCardProps = {
  title: string;
  excerpt: string;
  learnMore: string;
  href?: string;
  tag?: string;
  date?: string;
  className?: string;
  featured?: boolean;
};

export function BlogCard({
  title,
  excerpt,
  learnMore,
  href = "/historias",
  tag,
  date,
  className,
  featured,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface",
        featured && "md:col-span-2 md:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "shrink-0 bg-gradient-to-br from-bg-subtle to-accent-green/20",
          featured
            ? "aspect-[16/10] md:aspect-auto md:w-2/5"
            : "aspect-[16/10]",
        )}
      />
      <div className="flex flex-1 flex-col p-6">
        {(tag || date) && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {tag && (
              <span className="rounded-full bg-accent-green/15 px-3 py-1 text-xs font-medium text-accent-green">
                {tag}
              </span>
            )}
            {date && <time className="text-xs text-text-muted">{date}</time>}
          </div>
        )}
        <h3 className={cn("font-semibold", featured ? "text-xl" : "text-lg")}>
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {excerpt}
        </p>
        <Link
          href={href}
          className="mt-4 text-sm font-medium text-accent-green hover:text-accent-green-dark"
        >
          {learnMore}
        </Link>
      </div>
    </article>
  );
}
