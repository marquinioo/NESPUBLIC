import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BLOG_POSTS, blogPostHref, formatBlogDate } from "@/lib/blog";
import { ROUTES } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/ui/BlogCard";

export async function BlogPreviewSection() {
  const locale = await getLocale();
  const t = await getTranslations("home.blog");
  const blog = await getTranslations("blog");
  const previewPosts = BLOG_POSTS.slice(0, 3);

  return (
    <Section label={t("label")} title={t("h2")}>
      <div className="grid gap-6 md:grid-cols-3">
        {previewPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={blog(`posts.${post.slug}.title`)}
            excerpt={blog(`posts.${post.slug}.excerpt`)}
            learnMore={blog("readMore")}
            href={blogPostHref(post.slug)}
            tag={blog(`categories.${post.category}`)}
            date={formatBlogDate(post.date, locale)}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={ROUTES.stories}
          className="text-sm font-semibold text-accent-green hover:text-accent-green-dark"
        >
          {t("viewAll")}
        </Link>
      </div>
    </Section>
  );
}
