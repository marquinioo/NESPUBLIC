import { getTranslations, getLocale } from "next-intl/server";
import { BLOG_POSTS } from "@/lib/blog";
import { formatBlogDate, blogPostHref } from "@/lib/blog";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogHeroImageSrc } from "@/lib/site-images";
import type { Locale } from "@/i18n/routing";

export async function BlogIndexPage() {
  const locale = (await getLocale()) as Locale;
  const blog = await getTranslations("blog");
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        label={blog("hero.label")}
        title={blog("hero.h1")}
        subtitle={blog("hero.subhead")}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured && (
              <BlogCard
                featured
                title={blog(`posts.${featured.slug}.title`)}
                excerpt={blog(`posts.${featured.slug}.excerpt`)}
                learnMore={blog("readMore")}
                href={blogPostHref(featured.slug)}
                tag={blog(`categories.${featured.category}`)}
                date={formatBlogDate(featured.date, locale)}
                imageSrc={blogHeroImageSrc(locale, featured.slug)}
                imageAlt={blog(`posts.${featured.slug}.title`)}
              />
            )}
            {rest.map((post) => (
              <BlogCard
                key={post.slug}
                title={blog(`posts.${post.slug}.title`)}
                excerpt={blog(`posts.${post.slug}.excerpt`)}
                learnMore={blog("readMore")}
                href={blogPostHref(post.slug)}
                tag={blog(`categories.${post.category}`)}
                date={formatBlogDate(post.date, locale)}
                imageSrc={blogHeroImageSrc(locale, post.slug)}
                imageAlt={blog(`posts.${post.slug}.title`)}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
