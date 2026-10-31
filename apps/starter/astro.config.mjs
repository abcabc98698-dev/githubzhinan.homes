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
import svelte from '@astrojs/svelte';
import postAudit from '@casoon/astro-post-audit';
import siteFiles from '@casoon/astro-site-files';
import speedMeasure from '@casoon/astro-speed-measure';
import structuredData from '@casoon/astro-structured-data';
import { webVitalsDashboard } from '@casoon/astro-webvitals/integration';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import propsForThat from '../../integrations/props-for-that.mjs';
import { envSchema } from './src/env.ts';

// Routes with `prerender = false` — no file in dist, so sitemap and link audit need them listed.
const onDemandRoutes = [];

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
    port: 5014,
  },

  integrations: [
    webVitalsDashboard({ route: '/web-vitals' }),
    svelte(),
    propsForThat({ enabled: true }),
    siteFiles({
      sitemap: {
        exclude: ['/web-vitals/'],
        sources: [() => onDemandRoutes.map((loc) => ({ loc }))],
        i18n: sitemapI18n,
        audit: {
          warnOnEmpty: true,
          errorOnDuplicates: true,
        },
      },
      robots: {
        preset: 'citationFriendly',
        disallow: ['/api/', '/web-vitals/'],
        bots: {
          DeepSeekBot: 'allow',
          QwenBot: 'allow',
        },
        extraBots: [
          { id: 'Baiduspider', provider: 'Baidu', userAgents: ['Baiduspider'], categories: ['search'], verified: true },
          { id: 'yisouspider', provider: 'Shenma', userAgents: ['yisouspider'], categories: ['search'], verified: true },
        ],
      },
      humans: siteCredits,
      security: securityTxt(env.PUBLIC_SECURITY_CONTACT, env.PUBLIC_SITE_URL),
      llms: {
        title: env.PUBLIC_SITE_NAME,
        description: 'GitHub指南 (githubzhinan.homes) — 开发者加速与开源进阶指南。',
        details:
          '本站致力于为开发者提供精选的 GitHub 高效开发技巧、开源项目实践、自动化工作流与工具链导航。',
        sections: [
          {
            title: 'Pages',
            links: [
              { title: 'Home', url: '/', description: 'GitHub指南首页与2026综合旗舰网络推荐。' },
              { title: 'GuangSu Cloud Review', url: '/brands/guangsu/', description: '光速云IEPL双专线实测与斯诺克147深度拆解白皮书。' },
              { title: 'Radar', url: '/radar/', description: '跑路预警雷达与资金安全白皮书，收录倒闭名单与防坑模型。' },
              { title: 'FAQ', url: '/faq/', description: '网络疑难技术百科与百问百答排障全指南。' },
              { title: 'Free Resources', url: '/free/', description: '免费机场与节点资源合集，蜜罐反编译与白嫖避坑。' },
              { title: 'Observatory', url: '/observatory/', description: '网络可观测性实验室与42家品牌延迟测速大盘。' },
              { title: 'Brands Directory', url: '/brands/', description: '42家精选机场评测与专线导航全库。' },
              { title: 'Clients Guide', url: '/clients/', description: '全平台代理客户端下载与配置指南。' },
              { title: 'About Laboratory', url: '/about/', description: '网络可观测性实验室背景与中立评测准则。' },
              { title: 'Methodology', url: '/methodology/', description: '晚高峰测速方法论与遥测基准规范。' },
              { title: 'English home', url: '/en/', description: 'GitHub Guide English homepage.' },
            ],
          },
          {
            title: 'Site files',
            links: [
              {
                title: 'Sitemap',
                url: '/sitemap.xml',
                description: 'Public pages with language alternates.',
              },
              {
                title: 'Crawler preferences',
                url: '/robots.txt',
                description: 'Search engines and citation-friendly AI crawlers allowed.',
              },
              {
                title: 'Team and credits',
                url: '/humans.txt',
                description: 'Example team and technology stack.',
              },
            ],
          },
        ],
      },
    }),
    structuredData({
      generateMeta: true,
      siteName: env.PUBLIC_SITE_NAME,
      // Recommended-field warnings ask for business data (address, phone, sameAs, …) that a
      // template can't provide. JSON-LD validity is still checked by post-audit (check_json_ld).
      warnOnMissingRecommended: false,
    }),
    speedMeasure(),
    postAudit(postAuditOptions(['404.html', 'web-vitals/index.html'], onDemandRoutes)),
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: viteSsrConfig(['@casoon/astro-webvitals']),
  },
});
