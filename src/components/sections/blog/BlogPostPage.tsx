import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getBlogParagraphs } from "@/lib/blog-content";
import {
  formatBlogDate,
  blogPostHref,
  getRelatedPosts,
  type BlogPostMeta,
} from "@/lib/blog";
import { ROUTES } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/Button";

type BlogPostPageProps = {
  post: BlogPostMeta;
};

export async function BlogPostPage({ post }: BlogPostPageProps) {
  const locale = await getLocale();
  const blog = await getTranslations("blog");
  const cta = await getTranslations("home.cta");
  const paragraphs = getBlogParagraphs(blog, post.slug);
  const related = getRelatedPosts(post.slug);

  return (
    <article>
      <div className="aspect-[21/9] max-h-[420px] w-full bg-gradient-to-br from-bg-subtle via-accent-green/20 to-bg-primary" />
      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-accent-green/15 px-3 py-1 font-medium text-accent-green">
              {blog(`categories.${post.category}`)}
            </span>
            <time className="text-text-muted">
              {formatBlogDate(post.date, locale)}
            </time>
            <span className="text-text-muted">· {blog("author")}</span>
          </div>
          <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {blog(`posts.${post.slug}.title`)}
          </h1>
          <div className="prose prose-invert mt-10 max-w-none space-y-6">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-lg leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
          <Link
            href={ROUTES.stories}
            className="text-sm font-medium text-accent-green hover:text-accent-green-dark"
          >
            ← {blog("hero.h1")}
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-border pt-16">
            <h2 className="text-2xl font-bold">{blog("post.relatedLabel")}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <BlogCard
                  key={item.slug}
                  title={blog(`posts.${item.slug}.title`)}
                  excerpt={blog(`posts.${item.slug}.excerpt`)}
                  learnMore={blog("readMore")}
                  href={blogPostHref(item.slug)}
                  tag={blog(`categories.${item.category}`)}
                  date={formatBlogDate(item.date, locale)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button href={ROUTES.contact} variant="primary">
            {cta("button")}
          </Button>
        </div>
      </Container>
    </article>
  );
}
