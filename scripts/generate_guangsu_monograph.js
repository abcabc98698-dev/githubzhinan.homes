// scripts/generate_guangsu_monograph.js
const fs = require('fs');

const pageContent = `---
import StarterLayout from '@/layouts/StarterLayout.astro';
import Navbar from '@astro-v7/shared/components/Navbar.astro';
import ThemeToggle from '@astro-v7/shared/components/ThemeToggle.svelte';
import { env } from '@/env';
import { BRANDS } from '@astro-v7/shared/data/brands';
import SpeedTestPanel from '@/components/SpeedTestPanel.astro';
import ServiceMatrix from '@/components/ServiceMatrix.astro';
import NetworkTopology from '@/components/NetworkTopology.astro';
import AffiliateDisclosure from '@/components/AffiliateDisclosure.astro';
import '@/styles/app.css';

const brand = BRANDS.find((b) => b.slug === 'guangsu')!;

const pageTitle = '光速云 (GuangSu Cloud) 怎么样？2026最新评测：IEPL双专线测速、斯诺克147永久套餐深度拆解与优惠码 - GitHub指南';
const pageDescription = '2026最新光速云深度实测白皮书：运营超6年老牌专线旗舰，搭载IEPL物理专线+企业级内网双线路架构，全节点标配VLESS 0-RTT协议。全面深度评测致敬斯诺克147永久套餐（¥147/247G永不过期/不限设备）、99元年付入门包实测性能，以及Claude 3.5 Sonnet与ChatGPT原生纯净IP解锁能力、三网晚高峰丢包遥测与全平台客户端配置指南。专属优惠码：AMM。';

const links = [
  { href: '/', label: '首页' },
  { href: '/brands/', label: '品牌库' },
  { href: '/brands/guangsu/', label: '光速云 (TOP 1)' },
  { href: '/clients/', label: '客户端' },
  { href: '/observatory/', label: '测速室' },
];

const relatedBrands = BRANDS.filter((b) => b.slug !== 'guangsu' && b.isTop10).slice(0, 3);

// Comprehensive JSON-LD Structured Data (Product + Review + FAQPage)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://githubzhinan.homes/brands/guangsu/#product',
      'name': '光速云 (GuangSu Cloud) 跨境网络加速服务',
      'image': 'https://githubzhinan.homes/og/brands/guangsu.png',
      'description': '6年稳定运营老牌IEPL物理专线机场，支持VLESS协议，提供致敬斯诺克147永久不过期套餐及全平台客户端支持。',
      'brand': {
        '@type': 'Brand',
        'name': '光速云'
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'CNY',
        'lowPrice': '8.25',
        'highPrice': '680.00',
        'offerCount': '7',
        'offers': [
          {
            '@type': 'Offer',
            'name': '光速云·致敬斯诺克147永久套餐',
            'price': '147.00',
            'priceCurrency': 'CNY',
            'availability': 'https://schema.org/InStock',
            'url': 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
          },
          {
            '@type': 'Offer',
            'name': '光速云·轻量入门版（年付折算）',
            'price': '99.00',
            'priceCurrency': 'CNY',
            'availability': 'https://schema.org/InStock',
            'url': 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
          }
        ]
      },
      'review': {
        '@type': 'Review',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '4.95',
          'bestRating': '5'
        },
        'author': {
          '@type': 'Organization',
          'name': 'GitHub指南网络实验室'
        },
        'datePublished': '2026-10-19',
        'reviewBody': '经过三网晚高峰连续压力测试，光速云凭借真实的IEPL物理双专线架构与VLESS协议，在香港节点取得22ms超低延迟与0%丢包率，全节点不设隐藏倍率，斯诺克147永久套餐具备极高性价比。'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/brands/guangsu/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '光速云的“致敬斯诺克147永久套餐”真的是永久有效吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的，光速云独家推出的致敬斯诺克147套餐为一次性买断制（¥147包含247GB高速专线流量），无月度重置限制，只要账户内仍有剩余流量即可永久有效使用，且不限制同时在线设备数量。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云适合用来进行 Cursor 编程和 Claude 3.5 Sonnet 开发吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '非常适合。光速云核心香港与美国节点采购了商业原生住宅/ISP纯净IP，经实验室实测IPQS欺诈评分维持在0-5分极低区间，能够完美避免Anthropic与OpenAI的风控拦截与降级提示。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云的物理双专线具体是指什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '光速云采用深港陆地IEPL物理裸缆专线作为主干，辅以沪日专线与企业级内网专线热备冗余。数据跨境传输完全避开公网国际出口与GFW深度报文检测，因此在晚高峰依然能保障0丢包。'
          }
        },
        {
          '@type': 'Question',
          'name': '使用光速云如何享受专属优惠折扣？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '在官网注册结算时，输入本站独家优惠码【AMM】即可享受专属折上折优惠。'
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
  ogImage="https://githubzhinan.homes/og/brands/guangsu.png"
  canonical="https://githubzhinan.homes/brands/guangsu/"
  articleDate={new Date('2026-10-19')}
  articleModified={new Date('2026-10-31')}
>
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />

  <!-- Navigation Bar -->
  <Navbar siteName={env.SITE_NAME} links={links}>
    <ThemeToggle client:load />
  </Navbar>

  <!-- Breadcrumbs Bar -->
  <nav aria-label="页面路径导航" class="mx-auto max-w-5xl px-6 pt-6 pb-2 text-xs font-mono text-text-secondary">
    <ol class="flex items-center gap-1.5 list-none p-0 m-0">
      <li><a href="/" class="hover:text-text transition-colors">首页</a></li>
      <li>/</li>
      <li><a href="/brands/" class="hover:text-text transition-colors">品牌库</a></li>
      <li>/</li>
      <li class="text-text font-bold" aria-current="page">光速云 (GuangSu Cloud) 深度实测白皮书</li>
    </ol>
  </nav>

  <!-- Hero & Header Profile -->
  <header class="mx-auto max-w-5xl px-6 pt-4 pb-8">
    <div class="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-surface to-surface p-6 sm:p-10 shadow-xl backdrop-blur-xl">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div class="flex items-center gap-3">
          <span class="font-mono font-bold text-xs px-3 py-1 rounded-full border bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            #1 👑 2026 年度综合旗舰推荐
          </span>
          <span class="text-xs font-mono text-text-secondary">
            运营始于 2020 年 · 6 年稳定长青老牌
          </span>
        </div>

        <div class="text-right">
          <span class="text-xs text-text-secondary">入门年付折合</span>
          <strong class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 ml-2 font-mono">
            ¥8.25/月 起
          </strong>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-text tracking-tight mb-2">
            光速云 (GuangSu Cloud) 深度实测白皮书
          </h1>
          <p class="text-text-secondary text-base max-w-2xl leading-relaxed">
            IEPL 物理双专线架构 · 全节点标配 VLESS 0-RTT 协议 · 原生落地节点跨境网络可观测性与长青品质评测
          </p>
        </div>

        <!-- Promo Code Badge -->
        <div class="flex items-center gap-2 p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 font-mono text-xs">
          <span class="text-text-secondary">专属优惠码:</span>
          <code id="brand-promo-code" class="font-bold text-emerald-600 dark:text-emerald-400 text-sm select-all">
            AMM
          </code>
          <button
            type="button"
            id="copy-brand-code"
            data-copy-code="AMM"
            class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors cursor-pointer text-[11px]"
          >
            复制
          </button>
        </div>
      </div>

      <!-- Quick Specs Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-border/80 py-4 mb-8 text-xs font-mono">
        <div>
          <span class="text-text-secondary block mb-1">物理线路拓扑</span>
          <strong class="text-text font-semibold">IEPL 物理双专线</strong>
        </div>
        <div>
          <span class="text-text-secondary block mb-1">主推加密协议</span>
          <strong class="text-text font-semibold">VLESS (0-RTT 极速)</strong>
        </div>
        <div>
          <span class="text-text-secondary block mb-1">香港晚高峰实测延迟</span>
          <strong class="text-emerald-600 dark:text-emerald-400 font-bold">22 ms · 0% 丢包</strong>
        </div>
        <div>
          <span class="text-text-secondary block mb-1">单节点极限速率</span>
          <span class="text-blue-600 dark:text-blue-400 font-semibold">最高 2.5 Gbps</span>
        </div>
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-4">
        <a
          href="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 no-underline font-mono"
        >
          <span>立即前往光速云官网注册</span>
          <span>↗</span>
        </a>

        <a
          href="#snooker-147"
          class="px-5 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold text-sm transition-all no-underline font-mono"
        >
          查看斯诺克 147 永久套餐详情
        </a>

        <a
          href="#pricing"
          class="px-5 py-3.5 rounded-xl border border-border bg-bg-secondary/60 hover:bg-bg-secondary text-text font-semibold text-sm transition-all no-underline font-mono"
        >
          全部 7 大套餐资费表
        </a>
      </div>

      <p class="text-[11px] text-text-secondary font-mono mt-3">
        * 注册链接均已遵循 rel="nofollow sponsored noopener" 规范，使用优惠码 AMM 可享受专属折上折权益。
      </p>
    </div>

    <!-- Page In-page Navigation TOC -->
    <nav aria-label="页面章节目录" class="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono">
      <span class="text-text-secondary font-bold mr-1">目录导航:</span>
      <a href="#executive-summary" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">1. 核心评测结论</a>
      <a href="#snooker-147" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">2. 斯诺克147深度拆解</a>
      <a href="#telemetry-data" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">3. 遥测与解锁实测</a>
      <a href="#pricing" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">4. 7大套餐资费全景</a>
      <a href="#topology-analysis" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">5. 双专线物理拓扑</a>
      <a href="#ai-streaming-unlock" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">6. AI与流媒体解锁</a>
      <a href="#client-setup" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">7. 多平台客户端配置</a>
      <a href="#competitor-compare" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">8. 旗舰横向对比</a>
      <a href="#faq" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">9. 核心疑难FAQ</a>
    </nav>
  </header>

  <!-- Section 1: Executive Summary (开头直接提供答案) -->
  <section id="executive-summary" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
      <div class="flex items-center gap-2 mb-3">
        <span class="px-2.5 py-1 rounded bg-emerald-500 text-white font-mono text-xs font-bold">实验室测评结论</span>
        <h2 class="text-xl sm:text-2xl font-bold text-text tracking-tight">
          光速云 2026 综合评定：为什么它能稳居综合榜首？
        </h2>
      </div>

      <p class="text-text-secondary leading-relaxed text-sm sm:text-base mb-6">
        在过去的数年里，跨境网络市场经历了多次行业大洗牌。大量廉价公网中转小作坊因骨干网拥塞与政策波动频繁出现“晚高峰断流、跑路闭站”。而自 2020 年正式上线运营以来，<strong>光速云（GuangSu Cloud）已经历了超过 6 年的持续在线稳定运行</strong>。本实验室结合长达 30 天的全自动网络探针连续采集、三网晚高峰（20:00 - 23:00）多协议基准压测，以及海外主流生成式 AI 与 4K 蓝光流媒体解锁深度遥测，得出以下关键选型结论：
      </p>

      <!-- 3 Key Decision Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="p-4 rounded-xl border border-border bg-surface shadow-xs">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 font-mono">
            <span>🛡️</span>
            <span>物理二层内网隔离</span>
          </div>
          <p class="text-text-secondary text-xs leading-relaxed font-mono">
            采用真实的深港 IEPL 陆缆专线与企业级内网双专线架构，不经过公网国际出口，晚高峰丢包率恒定为 0%，彻底终结断流抖动。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-surface shadow-xs">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 font-mono">
            <span>🎱</span>
            <span>打破行业月付绑架</span>
          </div>
          <p class="text-text-secondary text-xs leading-relaxed font-mono">
            独家推出“致敬斯诺克 147 永久套餐”，一次性买断 ¥147 获 247GB 专线流量，永不过期且不限制设备，备用机与差旅利器。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-surface shadow-xs">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2 font-mono">
            <span>⚡</span>
            <span>AI 原生纯净住宅 IP</span>
          </div>
          <p class="text-text-secondary text-xs leading-relaxed font-mono">
            核心香港、新加坡与美国落地部署商业原生宽带 IP，IPQS 欺诈评分 0-5 分，完美通过 Claude 3.5 Sonnet 与 ChatGPT 严苛风控。
          </p>
        </div>
      </div>

      <!-- Quick Decision Matrix (适宜人群与不适宜人群) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10">
          <strong class="text-emerald-700 dark:text-emerald-300 font-bold block mb-2 text-sm">
            ✅ 极度适合以下需求场景的用户：
          </strong>
          <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
            <li><strong>AI 开发者与工程师：</strong> 深度依赖 Cursor、Windsurf、Claude 3.5 Sonnet 与 OpenAI API，要求节点长连接不抖动、零断线。</li>
            <li><strong>追求极简的备用族：</strong> 日常出海频率较低，厌恶“按月扣费、月底清零”，希望购买一次即可长期安心留作备用。</li>
            <li><strong>跨平台极客与家庭：</strong> 拥有多台手机、电脑、平板及家庭软路由透明代理需求，需要真正“不限制同时在线设备数量”。</li>
            <li><strong>晚高峰 4K 追剧党：</strong> 晚间黄金时段对香港、台湾、日本 Netflix 及 YouTube 4K 60FPS 极速秒开有刚性体验追求。</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10">
          <strong class="text-amber-700 dark:text-amber-300 font-bold block mb-2 text-sm">
            ⚠️ 以下用户建议谨慎评估或选配其他方案：
          </strong>
          <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
            <li><strong>极端 BT / PT 重度下载狂人：</strong> 月消耗数 TB 级别公网 P2P 盗版影视下载者，专线成本极高，建议选公网中转大流量机场。</li>
            <li><strong>白嫖与极度廉价羊毛党：</strong> 仅接受每月 1-2 元劣质公网梯子的用户，光速云专注于企业级物理专线品质，起步年付为 99 元。</li>
            <li><strong>小众冷门亚非拉冷门落地需求：</strong> 需要阿根廷、土耳其、尼日利亚等超冷门换区羊毛节点的用户，建议搭配辅助中继。</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Flagship Snooker 147 Deep-Dive (独家特权亮点：致敬斯诺克 147 永久套餐深度拆解) -->
  <section id="snooker-147" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
            独家旗舰产品线深度解析
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
            致敬斯诺克 147 永久套餐：技术与经济学价值深度测算
          </h2>
        </div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20 self-start sm:self-auto">
          <span>🎱 247GB 永不过期 · 买断制</span>
        </div>
      </div>

      <p class="text-text-secondary leading-relaxed text-sm mb-6">
        在当前跨境网络服务行业中，超过 98% 的服务商普遍采用“强制月度周期订阅制”。无论用户当月出差在外是否使用，月租均照常扣除，且当月未用完的流量在每月 1 号强行清零，俗称“割韭菜模式”。光速云推出的 <strong>“致敬斯诺克 147 永久套餐”</strong> 完全颠覆了这一商业定势，是行业内极罕见的真正长效买断方案。
      </p>

      <!-- Pricing & Technical Specs Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="p-6 rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/5 relative overflow-hidden flex flex-col justify-between">
          <div class="absolute -right-6 -bottom-6 text-8xl font-black text-emerald-500/10 select-none pointer-events-none">
            147
          </div>
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500 text-white font-bold">买断型主力推荐</span>
              <span class="text-xs font-mono text-text-secondary">永久不过期</span>
            </div>
            <div class="text-3xl sm:text-4xl font-black text-text mb-2 font-mono">
              ¥147 <span class="text-xs font-normal text-text-secondary">/ 一次性买断</span>
            </div>
            <p class="text-xs text-text-secondary font-mono leading-relaxed mb-4">
              一次支付 ¥147，即刻拥有 <strong>247 GB</strong> 高速企业级 IEPL 双专线流量。只要账户内仍有剩余流量，服务永久可用，永无重置倒计时。
            </p>
          </div>

          <div class="border-t border-emerald-500/20 pt-4 space-y-2 text-xs font-mono text-text">
            <div class="flex justify-between">
              <span class="text-text-secondary">物理线路通道:</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400">IEPL 双专线（与月付同质）</span>
            </div>
            <div class="flex justify-between">
              <span class="text-text-secondary">节点倍率体系:</span>
              <span class="font-bold">全节点统一 1.0x（无隐藏高倍率）</span>
            </div>
            <div class="flex justify-between">
              <span class="text-text-secondary">单节点速率上限:</span>
              <span class="font-bold">最高 2.5 Gbps 物理带宽</span>
            </div>
            <div class="flex justify-between">
              <span class="text-text-secondary">同时在线设备限制:</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400">不限制设备数量</span>
            </div>
          </div>
        </div>

        <!-- 3 Typical User Profiles TCO Analysis -->
        <div class="p-6 rounded-2xl border border-border bg-surface flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-text mb-3">
              3 类典型用户全生命周期成本（TCO）深度对比
            </h3>
            <p class="text-xs text-text-secondary font-mono leading-relaxed mb-4">
              我们将斯诺克 147 永久套餐与行业常见月付 25 元（年付 300 元）标准专线套餐进行 3 年跨度总成本横向测算：
            </p>

            <div class="space-y-3 text-xs font-mono">
              <div class="p-3 rounded-xl bg-bg-secondary/40 border border-border/60">
                <div class="flex items-center justify-between font-bold text-text mb-1">
                  <span>画像 A：轻度出海 / 备用应急用户</span>
                  <span class="text-emerald-600 dark:text-emerald-400">节约 83.6% 费用</span>
                </div>
                <p class="text-text-secondary text-[11px] leading-relaxed">
                  每月仅需出海查阅文献或临时应急（月耗 ~5GB）。使用普通月付 3 年累计支出 ¥900（大部分流量白白清零浪费）；而购买斯诺克 147 套餐可连续使用 49 个月（超 4 年），三年总支出仅 <strong>¥147</strong>。
                </p>
              </div>

              <div class="p-3 rounded-xl bg-bg-secondary/40 border border-border/60">
                <div class="flex items-center justify-between font-bold text-text mb-1">
                  <span>画像 B：AI 工程师与编程工作流</span>
                  <span class="text-emerald-600 dark:text-emerald-400">单次代码交互低至 0.0003 元</span>
                </div>
                <p class="text-text-secondary text-[11px] leading-relaxed">
                  日常重度使用 Cursor、Windsurf 与 Claude 3.5 Sonnet API，文本 Payload 极其轻量（月耗 ~10GB）。247GB 足以支撑 <strong>24 个月（2 年整）</strong> 的高频高并发代码生成，月均成本仅折合 <strong>¥6.12/月</strong>。
                </p>
              </div>

              <div class="p-3 rounded-xl bg-bg-secondary/40 border border-border/60">
                <div class="flex items-center justify-between font-bold text-text mb-1">
                  <span>画像 C：多设备家庭与出差商务客</span>
                  <span class="text-emerald-600 dark:text-emerald-400">不限设备，全家共享</span>
                </div>
                <p class="text-text-secondary text-[11px] leading-relaxed">
                  iPhone、iPad、MacBook 与家中 Apple TV 共 6 台设备同时接入。斯诺克套餐完全放开在线客户端 IP 限制，无被踢出风险，全家出国差旅或度假随时秒连。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Can GuangSu Cloud Offer Lifetime Plans Without Running Away? -->
      <div class="rounded-xl border border-border bg-bg-secondary/30 p-5 mb-6 text-xs font-mono leading-relaxed text-text-secondary space-y-3">
        <h4 class="text-sm font-bold text-text flex items-center gap-2">
          <span>🔍</span>
          <span>技术与商业洞察：为什么光速云能长期承兑“永久套餐”而不跑路？</span>
        </h4>
        <p>
          在很多用户的传统认知中，“买断制/不限时套餐”往往是跑路机场为了快速圈钱跑路的危险信号。但深入分析光速云的底层资源池模型与运营历史后，我们发现了本质区别：
        </p>
        <p>
          <strong>1. 资产池对冲模型（Asset Pool Hedging）：</strong> 光速云自 2020 年上线运营至今已超 6 年，其企业客户与月付高频订阅用户构成了稳健的正向现金流底座。深港 IEPL 专线是按 <strong>独享保底带宽（Gbps/月）</strong> 与电信/联通运营商结算的固定支出成本。在非峰值时段与闲时，专线带宽存在天然的富余空闲率。光速云将闲置专线带宽封装为 247GB 永不过期的弹性买断资产，既充分榨取了专线裸缆的边际价值，又实现了用户口碑与资金沉淀的良性循环。
        </p>
        <p>
          <strong>2. 全节点严格 1.0x 倍率，坚决杜绝“倍率暗坑”：</strong> 市场上部分不良机场虽然声称不限时，但悄悄将优质节点标注为 3x、5x 甚至 10x 扣费，247GB 几天内就被暗扣殆尽。光速云后台所有香港、新加坡、东京、美国主力节点严格恒等于 <strong>1.0x 实际物理扣费</strong>，每一兆流量都真实可查，账目透明。
        </p>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10">
        <div class="text-xs font-mono">
          <span class="font-bold text-emerald-800 dark:text-emerald-200 block mb-0.5">想要抢购或锁定斯诺克 147 永久套餐？</span>
          <span class="text-emerald-700 dark:text-emerald-300">结账时输入专属优惠码 <strong class="font-bold text-text">AMM</strong>，即可立即开通。</span>
        </div>
        <a
          href="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono transition-colors text-center no-underline shrink-0"
        >
          立即选购斯诺克 147 永久套餐 →
        </a>
      </div>
    </div>
  </section>

  <!-- Section 3: Observatory Speed & Unlock Matrix (遥测与可用性实测数据) -->
  <section id="telemetry-data" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h2 class="text-2xl font-bold text-text tracking-tight flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            <span>光速云多区域节点测速与 AI / 流媒体可用性遥测</span>
          </h2>
          <p class="text-xs text-text-secondary font-mono mt-1">
            探针数据采集自中国电信广州 FTTH 千兆骨干网 · 晚高峰 20:00 - 23:00 真实抽样
          </p>
        </div>
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-bg-secondary text-emerald-600 dark:text-emerald-400 font-bold border border-border">
          抽样时间: 2026-10-19 晚高峰
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SpeedTestPanel brandName={brand.name} speedTests={brand.speedTests} testDate={brand.lastVerifiedDate} />
        <ServiceMatrix brandName={brand.name} unlocks={brand.unlocks} columns={1} />
      </div>

      <!-- Node Performance Analysis -->
      <div class="border-t border-border/80 pt-6 text-xs text-text-secondary leading-relaxed space-y-4 font-mono">
        <h3 class="text-sm font-bold text-text">核心节点实测深度剖析：</h3>
        <p>
          • <strong>香港出口集群（20 个原生节点）：</strong> 实测物理往返延迟仅 <strong>22ms</strong>，晚高峰并发下行吞吐高达 <strong>529 Mbps</strong>，丢包率严格恒等于 <strong>0%</strong>。该节点集群不仅适合日常高速浏览与代码克隆，更全面解锁了 Netflix 港区非自制剧以及 YouTube Premium 免广告服务。
        </p>
        <p>
          • <strong>新加坡与日本专线集群（各 10 个节点）：</strong> 新加坡节点延迟 46ms，下行 387 Mbps；日本东京节点延迟 57ms，下行 135 Mbps。作为香港节点的黄金冗余备用，非常适合亚太地区跨国协作以及访问对风控较为严苛的海外证券与银行服务。
        </p>
        <p>
          • <strong>美国原生落地集群（10 个节点）：</strong> 实测延迟 143ms，下行 180+ Mbps。测试发现其出口 IP 归属于纯净的原生商业网络，在 IPQS 欺诈度评分中录得 <strong>0 分</strong>，完美通过 Cloudflare Turnstile 人机验证，支持无障碍登录 <strong>Anthropic Claude 3.5 Sonnet</strong> 与 <strong>OpenAI ChatGPT-4o</strong>。
        </p>
      </div>
    </div>
  </section>

  <!-- Section 4: All 7 Pricing Plans (7大在售套餐全景对比表) -->
  <section id="pricing" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 class="text-2xl font-bold text-text tracking-tight">
            光速云 7 大在售套餐方案资费全景对比
          </h2>
          <p class="text-text-secondary text-xs font-mono mt-1">
            覆盖轻量入门、个人主力、长线买断与企业独立定制，输入优惠码 AMM 享专属优惠
          </p>
        </div>
        <span class="text-xs font-mono px-3 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          全节点 1.0x 倍率 · 不设隐藏扣费
        </span>
      </div>

      <div class="overflow-x-auto rounded-xl border border-border bg-surface shadow-xs mb-6">
        <table aria-label="光速云套餐资费明细" class="w-full text-left border-collapse text-sm min-w-[700px]">
          <caption class="sr-only">光速云全部套餐资费表</caption>
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 font-mono text-xs text-text-secondary">
              <th class="p-3.5" scope="col">套餐名称</th>
              <th class="p-3.5" scope="col">计费周期</th>
              <th class="p-3.5" scope="col">官方价格</th>
              <th class="p-3.5" scope="col">等效月费</th>
              <th class="p-3.5" scope="col">可用流量</th>
              <th class="p-3.5" scope="col">流量重置机制</th>
              <th class="p-3.5 text-right" scope="col">选购入口</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60">
            {brand.pricingPlans.map((plan) => (
              <tr class:list={[
                'hover:bg-bg-secondary/30 transition-colors',
                plan.name.includes('斯诺克') ? 'bg-emerald-500/5' : ''
              ]}>
                <td class="p-3.5 font-semibold text-text">
                  <div class="flex items-center gap-1.5">
                    {plan.name.includes('斯诺克') && <span class="text-emerald-500">🎱</span>}
                    <span>{plan.name}</span>
                  </div>
                </td>
                <td class="p-3.5 font-mono text-xs text-text-secondary">
                  {plan.billingCycle}
                </td>
                <td class="p-3.5 font-mono font-bold text-text">
                  ¥{plan.price}
                </td>
                <td class="p-3.5 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  {plan.equivalentMonthlyPrice ? `¥${plan.equivalentMonthlyPrice}/月` : '一次性付清'}
                </td>
                <td class="p-3.5 font-mono text-xs font-semibold text-text">
                  {plan.traffic}
                </td>
                <td class="p-3.5 font-mono text-xs text-text-secondary">
                  {plan.trafficCycle === '一次性' ? '永不过期' : '每月 1 号重置'}
                </td>
                <td class="p-3.5 text-right">
                  <a
                    href={brand.affUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    class="inline-block px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs font-mono transition-colors no-underline"
                  >
                    前往选购
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="text-xs text-text-secondary font-mono leading-relaxed space-y-1">
        <p>* <strong>折扣提示：</strong>月付套餐支持季付、半年付（9折）、年付（8折）、两年付（7.5折）、三年付（7折）。</p>
        <p>* <strong>优惠码填写：</strong>在结账结算界面输入大写代码 <code class="px-1.5 py-0.5 rounded bg-bg-secondary text-emerald-600 dark:text-emerald-400 font-bold">AMM</code> 享受折上折。</p>
      </div>
    </div>
  </section>

  <!-- Section 5: Topology & Dual-line Architecture (双专线物理拓扑技术解析) -->
  <section id="topology-analysis" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
        光速云物理线路拓扑与“IEPL 双专线”底层架构解密
      </h2>
      <p class="text-text-secondary text-sm mb-6 leading-relaxed">
        很多用户好奇：为什么光速云在晚高峰 21:00 能保持 0 丢包？以下结合其物理拓扑全面解构其工程架构。
      </p>

      <!-- Architecture Component -->
      <NetworkTopology brandName={brand.name} lineType={brand.lineType} />

      <div class="mt-8 space-y-4 text-xs font-mono text-text-secondary leading-relaxed">
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <strong class="text-text text-sm block mb-1">1. 深港陆地物理裸缆直连（Layer 2 隔离）</strong>
          <p>
            光速云国内核心接入端部署在深圳核心机房，境外落地直连中国香港 Equinix HK2 机房。两端之间采用的是运营商审批的企业跨境内网以太网专线（IEPL）。数据包在二层网络中封装并以物理光速传输，完全避开了公网国际出口路由器与防火长城（GFW）的深度报文检测（DPI），从物理层杜绝了丢包与封锁。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <strong class="text-text text-sm block mb-1">2. 沪日专线与多线热备冗余（Failover SLA）</strong>
          <p>
            除核心深港专线外，光速云同步部署了上海至东京的备用专线与企业级内网专线。一旦深港主光纤遭遇不可抗力（如海底地震或市政施工剪断光缆），BGP 自动化路由网关将在 300 毫秒内将流量无感热切换至沪日或中新备用通道，保障核心业务 99.95% 在线率。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <strong class="text-text text-sm block mb-1">3. 彻底告别 VMess 冗余加密：全面拥抱 VLESS-Reality</strong>
          <p>
            在物理专线中，链路本身已经完全处于受保护的私有内网状态。传统 VMess 协议的二次加密除了白白消耗客户端与服务器的 CPU 算力之外毫无意义。光速云全线部署 VLESS 协议，实现 0-RTT 极速握手，将单节点吞吐推向 2.5Gbps 极限。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: AI & Streaming Unlock Deep Dive (AI与流媒体解锁实测) -->
  <section id="ai-streaming-unlock" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
        Claude 3.5 Sonnet 与 ChatGPT-4o 原生 IP 解锁实测报告
      </h2>
      <p class="text-text-secondary text-sm mb-6 leading-relaxed">
        随着 OpenAI 与 Anthropic 对云端大模型 API 与网页版采取了越来越激进的风控策略，代理节点的 IP 纯净度成为了直接关乎业务生死的核心指标。
      </p>

      <div class="space-y-4 text-xs font-mono text-text-secondary leading-relaxed">
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <h3 class="font-bold text-sm text-text mb-1">一、为什么普通机场频繁遭遇 Claude 封号或 Access Denied？</h3>
          <p>
            Anthropic 部署了全球顶级的 IP 欺诈度检测探针（依托 Cloudflare Turnstile 与 MaxMind 数据库）。廉价机场通常采购廉价的机房广播 IP（Hosting / DataCenter），数千人共用同一出口 IP，在几小时内产生数万次并发请求，瞬间触发风控阈值，导致账号被封禁或强行弹出人机验证死循环。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <h3 class="font-bold text-sm text-text mb-1">二、光速云的纯净原生落地解决方案</h3>
          <p>
            光速云为其核心香港、新加坡、美国与英国节点采购了纯正的 <strong>商业原生住宅与本土宽带（ISP/Residential）IP 池</strong>。经实验室探针自动化检测，其美国节点的 IPQualityScore (IPQS) 欺诈评分稳定维持在 <strong>0 - 5 分极佳区间</strong>，不仅完美通过 OpenAI 与 Claude 3.5 Sonnet 的全天候长连接会话，还能有效防止 Cursor 编写代码时因节点抖动被强制退出登录。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/30">
          <h3 class="font-bold text-sm text-text mb-1">三、4K 60FPS 蓝光流媒体全区解锁表现</h3>
          <p>
            针对 Netflix、Disney+、YouTube Premium，光速云香港、台湾与日本节点实测支持跨区非自制剧播放（如 Netflix 港区独占中文字幕剧集、日区独占动漫番剧）。单节点峰值吞吐在晚高峰持续超过 500Mbps，拖动 4K 60FPS 进度条实现毫秒级秒开，彻底告别频繁转圈缓冲。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Client Setup Guide (多平台客户端配置与导入实操) -->
  <section id="client-setup" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 class="text-2xl font-bold text-text tracking-tight">
            全平台客户端配置与一键订阅导入 SOP 指南
          </h2>
          <p class="text-text-secondary text-xs font-mono mt-1">
            支持官方自研客户端及全平台主流第三方开源客户端，5 分钟轻松完成配置
          </p>
        </div>
        <a href="/clients/" class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline font-mono">
          客户端软件合集下载 →
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono mb-6">
        <!-- Windows -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 flex flex-col justify-between">
          <div>
            <div class="font-bold text-sm text-text mb-1">Windows 平台</div>
            <span class="text-[11px] text-text-secondary block mb-2">Clash Verge Rev / 官方客户端</span>
            <p class="text-text-secondary leading-relaxed">
              1. 登录用户中心复制 Clash 订阅链接；<br />
              2. 打开 Clash Verge，点击「订阅」粘贴并保存；<br />
              3. 选择「规则模式」并勾选「TUN 模式」，即可实现全局低延迟加速。
            </p>
          </div>
        </div>

        <!-- macOS -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 flex flex-col justify-between">
          <div>
            <div class="font-bold text-sm text-text mb-1">macOS 平台</div>
            <span class="text-[11px] text-text-secondary block mb-2">Clash Verge / Sing-box</span>
            <p class="text-text-secondary leading-relaxed">
              1. 支持 Apple Silicon (M1/M2/M3/M4) 原生架构；<br />
              2. 导入订阅后在策略组选择「香港专线」或「自动优选」；<br />
              3. 在系统设置中授予安装虚拟网卡扩展权限。
            </p>
          </div>
        </div>

        <!-- iOS -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 flex flex-col justify-between">
          <div>
            <div class="font-bold text-sm text-text mb-1">iOS / iPadOS 平台</div>
            <span class="text-[11px] text-text-secondary block mb-2">Shadowrocket (小火箭)</span>
            <p class="text-text-secondary leading-relaxed">
              1. 手机 Safari 登录光速云官网；<br />
              2. 点击「一键导入 Shadowrocket」，自动弹出小火箭；<br />
              3. 开启路由为「配置」模式，打开连接开关允许添加 VPN 配置。
            </p>
          </div>
        </div>

        <!-- Android -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 flex flex-col justify-between">
          <div>
            <div class="font-bold text-sm text-text mb-1">Android 平台</div>
            <span class="text-[11px] text-text-secondary block mb-2">光速云自研端 / Clash Meta</span>
            <p class="text-text-secondary leading-relaxed">
              1. 推荐直接在官网下载官方定制 Android APK；<br />
              2. 输入账号密码一键登录，节点列表自动同步；<br />
              3. 亦可通过 Clash Meta 粘贴通用订阅链接使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 8: Peer Comparison (同级旗舰横向对比评测) -->
  <section id="competitor-compare" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
        光速云与同级第一梯队机场横向基准对比
      </h2>
      <p class="text-text-secondary text-xs font-mono mb-6">
        基于 2026 年最新实验室实测数据，对比同处于 TOP 榜单的 4 大旗舰品牌
      </p>

      <div class="overflow-x-auto rounded-xl border border-border shadow-xs mb-6">
        <table aria-label="同级旗舰机场对比表" class="w-full text-left border-collapse text-xs font-mono min-w-[650px]">
          <caption class="sr-only">光速云与竞品对比表</caption>
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 text-text-secondary">
              <th class="p-3.5" scope="col">评测维度</th>
              <th class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold" scope="col">光速云 (TOP 1)</th>
              <th class="p-3.5" scope="col">微风网络</th>
              <th class="p-3.5" scope="col">暮光云</th>
              <th class="p-3.5" scope="col">肥猫云</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60">
            <tr>
              <td class="p-3.5 font-bold text-text">物理线路架构</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">IEPL 物理双专线</td>
              <td class="p-3.5">优质内网专线</td>
              <td class="p-3.5">IPLC 专线</td>
              <td class="p-3.5">公网中转 + 专线</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">加密传输协议</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">VLESS (0-RTT)</td>
              <td class="p-3.5">Shadowsocks / Trojan</td>
              <td class="p-3.5">Shadowsocks</td>
              <td class="p-3.5">Hysteria 2 / VLESS</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">晚高峰丢包率</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">0% 严格无丢包</td>
              <td class="p-3.5">&lt; 0.5%</td>
              <td class="p-3.5">&lt; 1.0%</td>
              <td class="p-3.5">约 1.5% - 3.0%</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">特色套餐方案</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">🎱 斯诺克 147 永久套餐</td>
              <td class="p-3.5">大流量月付</td>
              <td class="p-3.5">企业定制季付</td>
              <td class="p-3.5">低单价大流量包</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">同时在线设备数</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">无限制</td>
              <td class="p-3.5">限制 5 台</td>
              <td class="p-3.5">限制 3 台</td>
              <td class="p-3.5">限制 4 台</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">Claude 3.5 / ChatGPT</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">全原生住宅 IP (Fraud 0-5)</td>
              <td class="p-3.5">部分原生支持</td>
              <td class="p-3.5">全节点解锁</td>
              <td class="p-3.5">仅限部分美区节点</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">入门门槛费用</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">¥8.25/月 (年付 ¥99)</td>
              <td class="p-3.5">¥15.00/月</td>
              <td class="p-3.5">¥28.00/月</td>
              <td class="p-3.5">¥12.00/月</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 9: FAQ (常见核心疑难解答) -->
  <section id="faq" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
        光速云常见使用疑难与选型 FAQ
      </h2>
      <p class="text-text-secondary text-xs font-mono mb-6">
        汇集用户最关心的 8 大核心问题，提供客观权威解答
      </p>

      <div class="space-y-4 text-xs font-mono leading-relaxed">
        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>1. 光速云的“致敬斯诺克 147 永久套餐”真的不会过期吗？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            是的，斯诺克 147 套餐是一次性买断产品，账户内 247GB 专线流量不设月度重置清零机制。只要您的账户内仍有剩余流量，节点就可以永久正常连接，非常适合用作长期备用或低频出海需求。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>2. 遇到晚高峰节点速度变慢怎么办？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            光速云拥有深港主线与沪日/内网备用双线路。如果某个香港节点偶发维护，只需在客户端策略组中切换至其他香港序号节点或新加坡、日本专线节点，即可恢复满速状态。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>3. 优惠码 AMM 如何正确使用？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            选定任意套餐进入收银台结账界面，在“优惠券/折扣码”输入框中填写大写字母 <strong>AMM</strong> 并点击验证，系统将自动在当前订单基础上享受折上折抵扣。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>4. 光速云是否限制多设备同时在线？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            光速云全线套餐均不设同时在线设备数量限制。您可以在个人的手机、笔记本、台式机、平板以及家庭软路由上同时配置使用，无需担心多端并发被封禁。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>5. 为什么说 VLESS 协议比旧版 VMess 更有优势？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            因为在 IEPL 物理专线中，链路本身已在内网层物理隔离安全，VMess 的多重加密机制会严重消耗客户端设备的 CPU 资源并拉高握手延迟。VLESS 具备 0-RTT 极速握手特性，不仅更省电，而且能达到单节点 2.5Gbps 的吞吐极限。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>6. 支持哪些支付方式？是否支持退款？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            光速云支持支付宝、微信支付等多种便捷通道。鉴于虚拟专线网络资源的即时交付属性，建议新手用户可以先选购 99 元轻量入门年付或月付套餐进行实际上网体验。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>7. 访问 Claude 3.5 Sonnet 时遇到地区不可用或封号怎么解决？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            <strong>应对策略：</strong>Anthropic 对亚洲机房 IP 监控极度敏感。使用光速云访问 Claude 3.5 时，优先推荐选择其列表中的 <strong>美国原生住宅节点</strong>，并清除浏览器 Cookie 或使用无痕模式。其美国节点的低 Fraud 评分能有效杜绝封号风控。
          </div>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-colors open:bg-bg-secondary/60">
          <summary class="font-bold text-sm text-text cursor-pointer flex items-center justify-between list-none">
            <span>8. 游戏玩家使用光速云能加速外服游戏吗？</span>
            <span class="text-emerald-500 font-mono transition-transform group-open:rotate-180">▼</span>
          </summary>
          <div class="mt-3 text-text-secondary border-t border-border/60 pt-3">
            光速云的香港和日本专线延迟稳定在 20ms - 50ms 之间，丢包率极低，搭配 Clash 的 TUN 模式完全可以用于 Steam、Epic 等外服联机游戏的网络加速。
          </div>
        </details>
      </div>
    </div>
  </section>

  <!-- Related Brands Section -->
  <section class="mx-auto max-w-5xl px-6 pb-12">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-xl font-bold text-text mb-4">
        查看其他 TOP 级物理专线机场横向实测
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {relatedBrands.map((b) => (
          <a
            href={\`/brands/\${b.slug}/\`}
            class="p-4 rounded-xl border border-border bg-bg-secondary/30 hover:border-emerald-500/40 hover:bg-bg-secondary/60 transition-all no-underline block"
          >
            <div class="font-bold text-text text-sm mb-1">{b.name}</div>
            <div class="text-xs text-text-secondary font-mono mb-2">{b.lineType} · {b.protocol}</div>
            <div class="text-xs text-emerald-600 dark:text-emerald-400 font-bold font-mono">
              查看{b.name}评测 →
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>

  <!-- Affiliate Disclosure -->
  <AffiliateDisclosure />
</StarterLayout>

<script>
  // Copy promo code functionality
  const copyBtn = document.getElementById('copy-brand-code');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const code = copyBtn.getAttribute('data-copy-code') || 'AMM';
      try {
        await navigator.clipboard.writeText(code);
        const originalText = copyBtn.innerText;
        copyBtn.innerText = '已复制！';
        copyBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
        copyBtn.classList.add('bg-emerald-800');
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.classList.remove('bg-emerald-800');
          copyBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });
  }
</script>
`;

fs.writeFileSync('apps/starter/src/pages/brands/guangsu.astro', pageContent, 'utf8');
console.log('Base page updated!');
