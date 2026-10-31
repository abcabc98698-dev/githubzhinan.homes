// scripts/faq_monograph/frontmatter.js
module.exports = `---
import StarterLayout from '@/layouts/StarterLayout.astro';
import Navbar from '@astro-v7/shared/components/Navbar.astro';
import ThemeToggle from '@astro-v7/shared/components/ThemeToggle.svelte';
import { env } from '@/env';
import { BRANDS, getFeaturedBrand } from '@astro-v7/shared/data/brands';
import AffiliateDisclosure from '@/components/AffiliateDisclosure.astro';
import '@/styles/app.css';

const featuredBrand = getFeaturedBrand(); // 光速云

const pageTitle = '机场疑难技术百科：2026百问百答与排障全指南 - GitHub指南';
const pageDescription = '2026跨境网络服务疑难百科全书：精选50+核心技术问答。涵盖物理专线与中转鉴别、ChatGPT与Claude风控解封、Clash与Sing-box TUN模式故障排障与DNS防污染分流。收录42家机场运维实战经验，助您彻底解决断流与超时。';

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
      '@id': 'https://githubzhinan.homes/faq/#webpage',
      'url': 'https://githubzhinan.homes/faq/',
      'name': pageTitle,
      'description': pageDescription,
      'isPartOf': { '@id': 'https://githubzhinan.homes/#website' },
      'datePublished': '2026-10-19',
      'dateModified': '2026-10-31'
    },
    {
      '@type': 'ItemList',
      '@id': 'https://githubzhinan.homes/faq/#categories',
      'name': '机场疑难技术百问百答核心分类目录',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '网络工程与基础选型篇 (Q01-Q10)',
          'url': 'https://githubzhinan.homes/faq/#faq-fundamentals'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': '故障诊断与网络超时排障篇 (Q11-Q20)',
          'url': 'https://githubzhinan.homes/faq/#faq-troubleshooting'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '海外 AI 与流媒体风控解锁篇 (Q21-Q30)',
          'url': 'https://githubzhinan.homes/faq/#faq-ai-streaming'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': '客户端配置、TUN模式与分流篇 (Q31-Q40)',
          'url': 'https://githubzhinan.homes/faq/#faq-clients-tun'
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': '商业模式、容灾备份与避震篇 (Q41-Q50)',
          'url': 'https://githubzhinan.homes/faq/#faq-commercial-safety'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/faq/#faqpage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '为什么节点测试有延迟（显示绿色），但浏览器完全打不开任何外网？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '客户端“延迟测试”默认仅测试本地到国内入口中转服务器的 TCP/ICMP 握手时间，不代表跨境隧道或落地机能正常工作。常见原因包括：订阅节点海外落地端欠费关机、本地系统时间与国际标准时间偏差超过 90 秒导致协议握手失败、DNS 解析被本地营运商污染或客户端代理端口被其他杀毒软件占用。'
          }
        },
        {
          '@type': 'Question',
          'name': '访问 ChatGPT 提示“Access Denied 1020”或“Sorry, you have been blocked”如何解决？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cloudflare 和 OpenAI 对数据中心机房 IP（Hosting/Data Center）实施了极严的 IP 纯净度过滤。解决方案是切换至具备海外住宅 ISP 原生 IP（Residential Native IP）的节点，同时清空浏览器 openai.com 域下的 LocalStorage 缓存与 Cookie，并在客户端开启 Fake-IP 模式防止 DNS 本地泄漏。'
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
    { label: '疑难技术百科', href: '/faq/' },
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
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-4 border border-blue-500/20">
      <span class="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
      <span>2026 跨境网络工程百科 · 50 组高频疑难深度精析</span>
    </div>
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight mb-4 leading-tight">
      机场疑难技术百科与实战排障全指南
    </h1>
    <p class="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
      告别玄学排障与经验主义！汇聚计算机网络实验室工程师、海外出海架构师与 42 家主流品牌运维实测，针对节点断流、DNS 污染、ChatGPT 封锁、TUN 模式冲突与专线真伪展开全景技术拆解。
    </p>
  </header>

  <!-- Sticky In-page Chapter Navigation Pill Bar -->
  <nav aria-label="文章章节快速定位" class="sticky top-14 z-20 bg-bg/90 backdrop-blur border-b border-border py-2.5 px-4 overflow-x-auto no-scrollbar">
    <div class="max-w-6xl mx-auto flex items-center gap-2 text-xs font-mono whitespace-nowrap">
      <span class="text-text-secondary font-bold">分类定位:</span>
      <a href="#faq-fundamentals" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">01. 基础选型 (Q01-10)</a>
      <a href="#faq-troubleshooting" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">02. 超时排障 (Q11-20)</a>
      <a href="#faq-ai-streaming" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">03. AI与流媒体 (Q21-30)</a>
      <a href="#faq-clients-tun" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">04. 客户端与TUN (Q31-40)</a>
      <a href="#faq-commercial-safety" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">05. 商业与容灾 (Q41-50)</a>
      <a href="#faq-enterprise-matrix" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">06. 旗舰长青方案</a>
    </div>
  </nav>
`;
