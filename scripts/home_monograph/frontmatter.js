// scripts/home_monograph/frontmatter.js
module.exports = `---
import StarterLayout from '@/layouts/StarterLayout.astro';
import Navbar from '@astro-v7/shared/components/Navbar.astro';
import ThemeToggle from '@astro-v7/shared/components/ThemeToggle.svelte';
import { env } from '@/env';
import { BRANDS, getFeaturedBrand, getTop10Brands } from '@astro-v7/shared/data/brands';
import FeaturedHero from '@/components/FeaturedHero.astro';
import BrandCard from '@/components/BrandCard.astro';
import AffiliateDisclosure from '@/components/AffiliateDisclosure.astro';
import '@/styles/app.css';

const featuredBrand = getFeaturedBrand(); // 光速云
const top10Brands = getTop10Brands();
const otherTopBrands = top10Brands.filter((b) => b.slug !== featuredBrand.slug).slice(0, 5);

const pageTitle = '2026机场推荐与网络选型指南：IEPL双专线实测与出海加速 - GitHub指南';
const pageDescription = '2026专业网络可观测性评测与机场选型指南：基于42家机场物理专线晚高峰实测，深度评测光速云等旗舰品牌。涵盖IEPL双专线架构、斯诺克147永久套餐、ChatGPT/Claude原生住宅IP解锁实测及6大平台客户端配置。';

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
      '@type': 'WebSite',
      '@id': 'https://githubzhinan.homes/#website',
      'url': 'https://githubzhinan.homes/',
      'name': 'GitHub指南',
      'description': '2026 跨境网络可观测性实验室与出海基础设施选型指南',
      'publisher': {
        '@type': 'Organization',
        'name': 'GitHub指南网络实验室'
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://githubzhinan.homes/#webpage',
      'url': 'https://githubzhinan.homes/',
      'name': pageTitle,
      'description': pageDescription,
      'isPartOf': { '@id': 'https://githubzhinan.homes/#website' },
      'datePublished': '2026-10-19',
      'dateModified': '2026-10-31'
    },
    {
      '@type': 'ItemList',
      '@id': 'https://githubzhinan.homes/#top-airports',
      'name': '2026 年度第一梯队优质机场推荐榜单',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '光速云 (GuangSu Cloud)',
          'url': 'https://githubzhinan.homes/brands/guangsu/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': '微风网络 (BreezeNet)',
          'url': 'https://githubzhinan.homes/brands/weifeng/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '暮光云 (MuGuang Cloud)',
          'url': 'https://githubzhinan.homes/brands/muguang/'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': '肥猫云 (FatCat Cloud)',
          'url': 'https://githubzhinan.homes/brands/feimao/'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '2026 年选购网络机场的核心指标有哪些？如何避免踩坑跑路？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '首要看物理线路类型：优先选择运营 3 年以上、拥有真实 IEPL/IPLC 物理专线的老牌机场（如光速云自 2020 年运营）。专线不走公网 GFW，晚高峰极度稳定且防 QoS 封锁。新手切忌一次性大额年付未知小作坊，建议优先选择月付或小额不限时套餐进行晚高峰测速验证。'
          }
        },
        {
          '@type': 'Question',
          'name': 'IEPL 物理专线与普通公网中转有何技术差异？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '普通公网中转走公网隧道，敏感时期入口 IP 极易被墙或遭运营商限速；而 IEPL（国际以太网私有专线）属于二层物理硬隔离传输，全程不经过公网网关与 GFW 深度包检测，具备抖动极低、零丢包与毫秒级延迟优势。'
          }
        },
        {
          '@type': 'Question',
          'name': '为什么访问 ChatGPT、Claude 或 Netflix 经常遇到地域受限？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'OpenAI 与 Anthropic 对数据中心机房 IP 进行严苛的风控封锁。本站推荐的优质品牌均配备商业原生家庭住宅/ISP 落地 IP，经 IPQS 欺诈分检测维持在极低区间，能够稳定防识别、防降级。'
          }
        },
        {
          '@type': 'Question',
          'name': '刚购买机场套餐，电脑和手机应该安装什么客户端？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Windows / macOS 推荐使用现代开源的 Clash Verge Rev（内置 Mihomo 内核，支持 VLESS 与 TUN 虚拟网卡）；iOS 设备推荐在非大陆区 App Store 下载 Shadowrocket (小火箭)；Android 推荐 Sing-box。在机场后台一键复制订阅即可导入使用。'
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
  ogImage="https://githubzhinan.homes/og/home.png"
  canonical="https://githubzhinan.homes/"
  articleDate={new Date('2026-10-19')}
  articleModified={new Date('2026-10-31')}
  siteName={env.PUBLIC_SITE_NAME || 'GitHub指南'}
>
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />

  <!-- Navigation Bar -->
  <Navbar slot="header" siteName={env.PUBLIC_SITE_NAME || 'GitHub指南'} links={links}>
    <ThemeToggle client:load />
  </Navbar>

  <!-- Hero Header & Value Proposition -->
  <header class="mx-auto max-w-6xl px-6 pt-12 pb-8 text-center">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold mb-6">
      <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
      2026 网络可观测性实验室 · 42 家机场多维度逐测
    </div>

    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight max-w-5xl mx-auto leading-tight mb-6">
      专业网络可观测性评测与<br class="hidden sm:inline" />
      <span class="bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
        跨境出海基础设施选型指南
      </span>
    </h1>

    <p class="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
      基于真实独立探针，持续监控 42 家机场物理专线延迟、晚高峰吞吐与 ChatGPT/流媒体解锁可用性。彻底摒弃主观评分，以客观遥测数据、二层专线拓扑解密与全平台客户端实战教程，助您畅联全球跨境网络。
    </p>

    <!-- Quick CTA Navigation -->
    <div class="flex flex-wrap items-center justify-center gap-3 text-sm font-mono mb-8">
      <a
        href="/brands/guangsu/"
        class="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20 transition-all no-underline"
      >
        👑 查看 TOP 1 主推：光速云
      </a>
      <a
        href="#core-comparison"
        class="px-5 py-3 rounded-xl border border-border bg-surface hover:bg-bg-secondary text-text font-semibold transition-all no-underline"
      >
        📊 梯队基准实测大表
      </a>
      <a
        href="/observatory/"
        class="px-5 py-3 rounded-xl border border-border bg-surface hover:bg-bg-secondary text-text font-semibold transition-all no-underline"
      >
        ⚡ 测速实验室 (RTT 遥测)
      </a>
      <a
        href="/clients/"
        class="px-5 py-3 rounded-xl border border-border bg-surface hover:bg-bg-secondary text-text font-semibold transition-all no-underline"
      >
        💻 客户端下载配置指南
      </a>
    </div>

    <!-- Telemetry Real-time Summary Pills -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left font-mono">
      <div class="p-3 rounded-xl border border-border bg-surface">
        <span class="text-[11px] text-text-secondary block">香港专线延迟基准</span>
        <strong class="text-lg font-bold text-emerald-600 dark:text-emerald-400">22 - 35 ms</strong>
      </div>
      <div class="p-3 rounded-xl border border-border bg-surface">
        <span class="text-[11px] text-text-secondary block">晚高峰丢包波动</span>
        <strong class="text-lg font-bold text-emerald-600 dark:text-emerald-400">&lt; 0.1%</strong>
      </div>
      <div class="p-3 rounded-xl border border-border bg-surface">
        <span class="text-[11px] text-text-secondary block">原生住宅 IP 认证</span>
        <strong class="text-lg font-bold text-emerald-600 dark:text-emerald-400">98.5% 通过</strong>
      </div>
      <div class="p-3 rounded-xl border border-border bg-surface">
        <span class="text-[11px] text-text-secondary block">独立探针监测机制</span>
        <strong class="text-lg font-bold text-text">24/7 自动化</strong>
      </div>
    </div>
  </header>

  <!-- Page Navigation Index (Table of Contents) -->
  <nav aria-label="核心导读目录" class="mx-auto max-w-6xl px-6 pb-8">
    <div class="p-4 rounded-2xl border border-border bg-bg-secondary/40 font-mono text-xs">
      <div class="flex items-center gap-2 mb-2 font-bold text-text">
        <span>📖</span>
        <span>本页核心章节与专著级导读索引</span>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <a href="#executive-recommendation" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">1. 核心选型结论与综合旗舰</a>
        <a href="#core-comparison" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">2. 第一梯队基准实测大表</a>
        <a href="#selection-methodology" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">3. 选型方法论与跑路避坑</a>
        <a href="#decision-matrix" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">4. 预算与场景决策模型</a>
        <a href="#physical-topology" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">5. 物理双专线拓扑解密</a>
        <a href="#protocol-evolution" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">6. 新一代 VLESS 协议演进</a>
        <a href="#ai-unlock-system" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">7. 海外 AI 原生住宅 IP 解锁</a>
        <a href="#dev-workflow-accelerate" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">8. 研发出海实战配置</a>
        <a href="#client-matrix-guide" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">9. 全平台客户端选型</a>
        <a href="#rule-routing-dns" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">10. 规则分流与 DNS 治理</a>
        <a href="#brand-ecosystem-ladder" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">11. 42 家品牌全景梯队</a>
        <a href="#frequently-asked-questions" class="px-2.5 py-1 rounded bg-surface border border-border/80 hover:border-emerald-500/50 text-text no-underline">12. 12 大疑难 FAQ</a>
      </div>
    </div>
  </nav>
`;
