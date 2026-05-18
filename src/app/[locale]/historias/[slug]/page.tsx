import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { BlogPostPage } from "@/components/sections/blog/BlogPostPage";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "NES" };

  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t(`posts.${slug}.title`)} | NES`,
    description: t(`posts.${slug}.excerpt`),
  };
}

export default async function HistoriaPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostPage post={post} />;
}
