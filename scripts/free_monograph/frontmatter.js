// scripts/free_monograph/frontmatter.js
module.exports = `---
import StarterLayout from '@/layouts/StarterLayout.astro';
import Navbar from '@astro-v7/shared/components/Navbar.astro';
import ThemeToggle from '@astro-v7/shared/components/ThemeToggle.svelte';
import { env } from '@/env';
import { BRANDS, getFeaturedBrand } from '@astro-v7/shared/data/brands';
import AffiliateDisclosure from '@/components/AffiliateDisclosure.astro';
import '@/styles/app.css';

const featuredBrand = getFeaturedBrand(); // 光速云

const pageTitle = '免费机场与节点资源合集：2026安全试用与白嫖避坑指南 - GitHub指南';
const pageDescription = '2026免费机场与免费节点实测白皮书：全网公共免费订阅与蜜罐节点安全逆向，收录主流机场合法0元试用清单。提供Cloudflare WARP官方合规加速配置与学生开发应急方案，告别丢包与中间人窃听风险。';

const links = [
  { href: '/', label: '首页' },
  { href: '/brands/guangsu/', label: '光速云 (TOP 1)' },
  { href: '/radar/', label: '🚨 跑路雷达' },
  { href: '/observatory/', label: '⚡ 测速室' },
  { href: '/clients/', label: '💻 客户端' },
  { href: '/faq/', label: '📖 疑难百科' },
  { href: '/free/', label: '🎁 免费资源' },
  { href: '/brands/', label: '42家品牌库' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://githubzhinan.homes/free/#webpage',
      'url': 'https://githubzhinan.homes/free/',
      'name': pageTitle,
      'description': pageDescription,
      'isPartOf': { '@id': 'https://githubzhinan.homes/#website' },
      'datePublished': '2026-10-19',
      'dateModified': '2026-10-31'
    },
    {
      '@type': 'ItemList',
      '@id': 'https://githubzhinan.homes/free/#resources',
      'name': '2026 安全免费网络资源与试用方案导航',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '免费资源真相与安全红线',
          'url': 'https://githubzhinan.homes/free/#free-truth'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': '全网公共订阅与蜜罐节点逆向',
          'url': 'https://githubzhinan.homes/free/#honeypot-teardown'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '合规 0 元免费试用机场清单',
          'url': 'https://githubzhinan.homes/free/#verified-trials'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': '大厂合规免费出海方案 (WARP)',
          'url': 'https://githubzhinan.homes/free/#cloudflare-warp'
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': '免费折腾与时间成本精算',
          'url': 'https://githubzhinan.homes/free/#cost-audit'
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'name': '终极长青物理专线跨越方案',
          'url': 'https://githubzhinan.homes/free/#guangsu-bridge'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/free/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '网上搜到的“每日更新免费节点订阅”，到底安不安全？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '极不安全！根据网络实验室安全审计，全网超过 70% 的所谓“公共免费节点”为黑产团伙部署的蜜罐服务器（Honeypot），运营者通过注入恶意自签名证书或透明代理窃取用户未加密的 Cookies、登录 Token 与上网浏览足迹；另外 30% 为已被 GFW 标记的脏 IP，丢包率常年高达 80% 以上。'
          }
        },
        {
          '@type': 'Question',
          'name': '有没有完全正规、不泄露隐私的 0 元免费科学上网方案？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '有且只有两种合规途径：一是使用跨国大厂提供的合规免费层工具，如 Cloudflare 官方推出的 1.1.1.1 / WARP（配合优选 IP 脚本）；二是正规商业机场（如优质老牌服务商）向新注册用户提供的限时限额体验试用包。'
          }
        }
      ]
    }
  ]
};
---

<StarterLayout
  title={pageTitle}
  description={pageDescription}
  structuredData={structuredData}
  breadcrumbs={[
    { label: '首页', href: '/' },
    { label: '免费资源合集', href: '/free/' },
  ]}
>
  <Navbar
    slot="header"
    siteName={env.PUBLIC_SITE_NAME || 'GitHub指南'}
    homeUrl="/"
    links={links}
  >
    <div slot="actions" class="flex items-center gap-2">
      <ThemeToggle client:load />
      <a
        href={featuredBrand.affUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        class="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
      >
        <span>主推：{featuredBrand.name}</span>
      </a>
    </div>
  </Navbar>

  <!-- Top Hero Header -->
  <header class="mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-4 border border-emerald-500/20">
      <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>2026 安全免费网络资源 · 蜜罐防坑与正规试用白皮书</span>
    </div>
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight mb-4 leading-tight">
      免费机场与节点资源合集：安全试用与白嫖避坑指南
    </h1>
    <p class="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
      天下没有免费的午餐，但有合法的安全试用与大厂福利。拒绝被蜜罐节点窃听明文凭证，全景解密公共免费节点黑幕，提供 42 家主流品牌中真实有效的 0 元试用清单与 Cloudflare WARP 优化指南。
    </p>
  </header>

  <!-- Sticky In-page Chapter Navigation Pill Bar -->
  <nav aria-label="文章章节快速定位" class="sticky top-14 z-20 bg-bg/90 backdrop-blur border-b border-border py-2.5 px-4 overflow-x-auto no-scrollbar">
    <div class="max-w-6xl mx-auto flex items-center gap-2 text-xs font-mono whitespace-nowrap">
      <span class="text-text-secondary font-bold">章节速览:</span>
      <a href="#free-truth" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">01. 免费真相与红线</a>
      <a href="#honeypot-teardown" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">02. 公共蜜罐逆向</a>
      <a href="#verified-trials" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">03. 42家试用大盘</a>
      <a href="#cloudflare-warp" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">04. 大厂合规方案</a>
      <a href="#cost-audit" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">05. 时间成本精算</a>
      <a href="#academic-research" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">06. 高校科研专题</a>
      <a href="#security-hardening" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">07. 终端隐私加固</a>
      <a href="#community-audit" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">08. 42家白嫖审计</a>
      <a href="#enterprise-free-myths" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">09. 跨境电商合规</a>
      <a href="#guangsu-bridge" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">10. 长青物理专线</a>
      <a href="#free-faqs" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">11. 问答百科</a>
    </div>
  </nav>
`;
