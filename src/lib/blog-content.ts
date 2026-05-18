const MAX_PARAGRAPHS = 10;

type BlogTranslator = {
  has: (key: string) => boolean;
  (key: string): string;
};

/** Collect p1, p2, … paragraph keys for a blog post slug. */
export function getBlogParagraphs(t: BlogTranslator, slug: string): string[] {
  const paragraphs: string[] = [];
  for (let i = 1; i <= MAX_PARAGRAPHS; i++) {
    const key = `posts.${slug}.p${i}`;
    if (!t.has(key)) break;
    paragraphs.push(t(key));
  }
  return paragraphs;
}
