/**
 * Sitemap source helper for blog posts.
 * Uses gray-matter to read MDX frontmatter directly because Astro's
 * getCollection() is unavailable inside the astro:build:done hook.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const blogContentDir = fileURLToPath(new URL('../content/blog', import.meta.url));

function getPublishedPosts() {
  const files = readdirSync(blogContentDir, { recursive: true, encoding: 'utf-8' }).filter(
    (f) => f.endsWith('.mdx') || f.endsWith('.md')
  );

  return files
    .map((file) => {
      const raw = readFileSync(`${blogContentDir}/${file}`, 'utf-8');
      const { data } = matter(raw);
      if (data.draft) return null;
      // zh/<slug>.mdx → /blog/<slug>/, en/<slug>.mdx → /en/blog/<slug>/
      const [locale, ...segments] = file.replace(/\\/g, '/').replace(/\.(mdx|md)$/, '').split('/');
      const slug = segments.join('/');
      return { locale, data, url: `${locale === 'zh' ? '' : `/${locale}`}/blog/${slug}/` };
    })
    .filter(Boolean);
}

/**
 * Returns sitemap entries for all published blog posts with real lastmod
 * dates from MDX frontmatter. Used by siteFiles({ sitemap: { sources: [...] } }).
 * loc must be a relative path — the integration prepends the siteUrl.
 *
 * @returns {import('@casoon/astro-site-files').SitemapEntry[]}
 */
export function getBlogSitemapEntries() {
  return getPublishedPosts().map(({ data, url }) => ({
    loc: url,
    lastmod: new Date(data.lastmod ?? data.date).toISOString().split('T')[0],
  }));
}

/** Build hooks read frontmatter directly; Astro's content runtime is unavailable here. */
export function getBlogLlmsSection(locale) {
  return {
    title: locale === 'zh' ? '中文技术文章' : 'Articles in English',
    links: getPublishedPosts()
      .filter((post) => post.locale === locale)
      .map(({ data, url }) => ({ title: data.title, url, description: data.description })),
  };
}

export function getBlogRssItems(locale) {
  return getPublishedPosts()
    .filter((post) => post.locale === locale)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map(({ data, url }) => ({
      title: data.title,
      description: data.description,
      pubDate: new Date(data.date),
      link: url,
      categories: data.tags ?? [],
    }));
}
