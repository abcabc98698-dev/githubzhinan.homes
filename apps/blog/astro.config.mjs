import {
  baseAstroConfig,
  configEnv,
  postAuditOptions,
  securityTxt,
  sitemapI18n,
  viteSsrConfig,
} from '@astro-v7/shared/config/astro';
import { siteCredits } from '@astro-v7/shared/config/site';
import { validateEnv } from '@astro-v7/shared/utils/env';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import postAudit from '@casoon/astro-post-audit';
import siteFiles from '@casoon/astro-site-files';
import speedMeasure from '@casoon/astro-speed-measure';
import structuredData from '@casoon/astro-structured-data';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import propsForThat from '../../integrations/props-for-that.mjs';
import { envSchema } from './src/env.ts';
import {
  getBlogLlmsSection,
  getBlogRssItems,
  getBlogSitemapEntries,
} from './src/utils/blog-rss.js';

// Astro v7: remark-gfm and rehype-slug removed — Sätteri provides both natively.

/** Shiki transformer: reads title="..." from fence meta and sets data-title on <pre> */
const codeBlockTitleTransformer = {
  name: 'code-block-title',
  pre(node) {
    const meta = this.options?.meta?.__raw ?? '';
    if (!meta) return;
    const m = meta.match(/title="([^"]+)"|title='([^']+)'/);
    if (m) node.properties['data-title'] = m[1] ?? m[2];
  },
};

const env = validateEnv(envSchema, configEnv(new URL('.env', import.meta.url)));

export default defineConfig({
  ...baseAstroConfig,
  site: env.PUBLIC_SITE_URL,
  adapter: cloudflare(),

  // Fixed, unique port so projects scaffolded from this template don't all default to 4321 —
  // sharing a port across projects means the browser serves stale cached assets/cookies from
  // whichever project last ran on it. Change this to a free port when starting a new project
  // (check other repos under ~/GitHub for ports already in use).
  server: {
    host: true,
    port: 4322,
  },

  integrations: [
    svelte(),
    propsForThat({ enabled: true }),
    mdx({
      shikiConfig: {
        wrap: true,
        transformers: [codeBlockTitleTransformer],
      },
    }),
    siteFiles({
      sitemap: {
        i18n: sitemapI18n,
        // Posts come from sources exactly once, with their real frontmatter dates.
        exclude: [/\/blog(?:\/|$)/],
        // Matches priority/changefreq rules against the locale-stripped path, so
        // /de/blog/x/ gets the same 0.7 as /blog/x/ instead of falling back to depth-based default.
        localeAgnosticRules: true,
        priority: [
          { pattern: '/$', priority: 1.0 },
          { pattern: '/blog/', priority: 0.7 },
        ],
        changefreq: [
          { pattern: '/$', changefreq: 'weekly' },
          { pattern: '/blog/', changefreq: 'monthly' },
        ],
        // gray-matter reads MDX frontmatter directly — getCollection() unavailable in build hooks
        sources: [getBlogSitemapEntries],
        audit: {
          warnOnEmpty: true,
          errorOnDuplicates: true,
        },
      },
      robots: { preset: 'seoOnly' },
      humans: siteCredits,
      security: securityTxt(env.PUBLIC_SECURITY_CONTACT, env.PUBLIC_SITE_URL),
      // The English feed keeps its Astro RSS route; this demonstrates build-time RSS.
      rss: {
        filename: 'en/rss.xml',
        title: `${env.PUBLIC_SITE_NAME} — English`,
        description: 'Demo-Artikel über Astro, Tailwind und die Funktionen dieses Templates.',
        language: 'en-US',
        getItems: () => getBlogRssItems('en'),
      },
      llms: {
        title: env.PUBLIC_SITE_NAME,
        description: 'GitHub指南官方博客与技术实践专栏。',
        details:
          'GitHub指南技术博客，汇集 Git 工作流、GitHub Actions 自动化、开源项目最佳实践与开发技巧。',
        sources: [() => getBlogLlmsSection('zh'), () => getBlogLlmsSection('en')],
        sections: [
          {
            title: 'Pages',
            links: [
              { title: 'Home', url: '/', description: 'Blog template overview.' },
              { title: 'English home', url: '/en/', description: 'Blog English homepage.' },
              { title: 'English RSS', url: '/rss.xml', description: 'Published English articles.' },
              {
                title: 'English RSS',
                url: '/en/rss.xml',
                description: 'Published German articles.',
              },
            ],
          },
        ],
      },
    }),
    structuredData({
      generateMeta: true,
      siteName: env.PUBLIC_SITE_NAME,
      defaultArticlePublisher: { name: env.PUBLIC_SITE_NAME },
      // Recommended-field warnings ask for business data (address, phone, sameAs, …) that a
      // template can't provide. JSON-LD validity is still checked by post-audit (check_json_ld).
      warnOnMissingRecommended: false,
    }),
    speedMeasure(),
    postAudit(postAuditOptions(['blog/index.html', '404.html'])),
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: viteSsrConfig(),
  },
});
