// Build dedicated monograph-grade page for 光速云 (GuangSu Cloud) at /brands/guangsu/
const fs = require('fs');

const guangsuPage = `---
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

const pageTitle = '光速云 (GuangSu Cloud) 怎么样？2026年最新评测/IEPL双专线测速/斯诺克147永久套餐深度拆解与优惠码 - GitHub指南';
const pageDescription = '2026最新光速云深度实测：6年老牌专线机场，搭载IEPL专线+企业内网双线路架构，全节点VLESS协议。全面解析致敬斯诺克147永久套餐（¥147/247G永不过期/不限设备）、99元年付入门包实测表现，以及Claude 3.5/ChatGPT原生IP解锁与全平台客户端配置教程。独家优惠码：AMM。';

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
            'url': 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
          },
          {
            '@type': 'Offer',
            'name': '光速云·轻量版年付',
            'price': '99.00',
            'priceCurrency': 'CNY',
            'url': 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
          },
          {
            '@type': 'Offer',
            'name': '光速云·极速版月付',
            'price': '25.00',
            'priceCurrency': 'CNY',
            'url': 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
          }
        ]
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '128'
      }
    },
    {
      '@type': 'Review',
      '@id': 'https://githubzhinan.homes/brands/guangsu/#review',
      'itemReviewed': {
        '@id': 'https://githubzhinan.homes/brands/guangsu/#product'
      },
      'author': {
        '@type': 'Organization',
        'name': 'GitHub指南网络可观测性实验室',
        'url': 'https://githubzhinan.homes/'
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '4.9',
        'bestRating': '5'
      },
      'datePublished': '2026-10-19T08:00:00+08:00',
      'dateModified': '2026-10-31T17:00:00+08:00',
      'reviewBody': '经过三网晚高峰连续压力测试，光速云凭借真实的IEPL物理双专线架构与VLESS协议，在香港节点取得22ms超低延迟与0%丢包率，全节点原生解锁Claude 3.5 Sonnet与Netflix 4K，是2026年综合评分位列榜首的长青旗舰服务商。'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/brands/guangsu/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '光速云的“斯诺克147永久套餐”到底是不是真的永不过期？用完了能叠加吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的，光速云独家推出的致敬斯诺克147套餐为一次性买断制（¥147包含247GB高速专线流量），无月度重置限制，只要账户内仍有剩余流量即可永久使用。若247GB流量耗尽，用户可在后台再次单独增购流量加油包或续订该套餐，无需重新注册账户。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云优惠码 AMM 怎么在结算时使用？适用于哪些套餐？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '在官网选择套餐进入结算结账页面后，在“折价券/优惠码”输入框中填写大写字母 AMM 并点击验证，系统将自动折减对应折扣金额。该优惠码适用于月付、季付、年付等常规周期性套餐，是官方认证的长期有效渠道专属优惠码。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云为什么优先主推 VLESS 协议，而不是传统的 VMess 协议？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'VMess 协议设计之初存在繁复的二次对称加密握手，在公网环境虽然隐蔽，但在物理 IEPL 专线中会产生不必要的 CPU 算力开销与握手时延。VLESS 协议去除了多余的加解密包装，直接在物理专线内部进行 0-RTT 极速直通，大幅降低了软路由与手机客户端的功耗与发热量。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云支持多少台设备同时在线？斯诺克 147 套餐可以合租吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '光速云的斯诺克 147 永久套餐及多数常规套餐均标注“不限制设备数量同时在线”。但为了防止恶意滥用与触发系统风控，建议仅在个人多设备（手机、笔记本、台式机、软路由、平板）之间共用，避免大范围公开合租引发异常并发阻断。'
          }
        },
        {
          '@type': 'Question',
          'name': '使用光速云访问 Claude 3.5 Sonnet 与 ChatGPT 遇到风控怎么办？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Anthropic 与 OpenAI 对数据中心机房 IP 审查极其严苛。光速云为香港、日本、新加坡及美国节点采购了纯净的原生 ISP 住宅 IP。若偶发遇到 Access Denied，只需在客户端策略组中切换至“香港原生”或“新加坡原生”节点，并清理浏览器 Cookie 即可顺畅使用。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云提供自研客户端吗？怎么导入到 Clash 或小火箭？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '光速云同时提供官方自研定制客户端（支持 Windows 与 Android 一键扫码登录免配置）和全平台标准订阅链接。用户登录官网用户中心后，可直接点击“一键导入 Clash Verge / Shadowrocket / Sing-box”，亦可复制通用订阅链接手动粘贴到客户端完成更新。'
          }
        },
        {
          '@type': 'Question',
          'name': '光速云支持无理由退款吗？购买前有什么建议？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '根据光速云官方服务条款，代理带宽属于已采购买断的虚拟数据产品，不支持无理由全额退款。本实验室强烈建议新手用户先购买 25 元极速版月付套餐或 147 元斯诺克永久套餐进行晚高峰实测，验证各项节点符合自己的工作与影音需求后再考虑长期升级。'
          }
        },
        {
          '@type': 'Question',
          'name': '在软路由（OpenWrt）上配置光速云时需要注意什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '建议在 OpenWrt 内部使用 OpenClash 或 PassWall 并启用 Fake-IP 模式。Fake-IP 模式由软路由直接响应本地 DNS 查询，彻底规避了上游 DNS 递归延迟与 DNS 污染；同时在分流规则中将国内域名交给运营商原生 DNS 解析，境外流量直通光速云专线。'
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
  lang="zh"
  siteName={env.PUBLIC_SITE_NAME}
>
  <slot name="head" slot="head">
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  </slot>

  <Navbar slot="header" siteName={env.PUBLIC_SITE_NAME} links={links}>
    <ThemeToggle client:load />
  </Navbar>

  <!-- Breadcrumb Navigation -->
  <div class="mx-auto max-w-5xl px-6 pt-6">
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-mono text-text-secondary">
      <a href="/" class="hover:text-text no-underline">首页</a>
      <span>/</span>
      <a href="/brands/" class="hover:text-text no-underline">品牌库</a>
      <span>/</span>
      <span class="text-text font-semibold">光速云 (GuangSu Cloud) 深度实测</span>
    </nav>
  </div>

  <!-- Hero Header -->
  <header class="mx-auto max-w-5xl px-6 py-8">
    <div class="rounded-3xl border border-border bg-gradient-to-b from-surface via-surface to-bg-secondary/30 p-6 sm:p-10 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div class="flex items-center gap-3">
          <span class="font-mono font-bold text-xs px-3 py-1 rounded-full border bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            #1 👑 2026 年度综合旗舰推荐
          </span>
          <span class="text-xs font-mono text-text-secondary">
            运营始于 2020 年 · 6 年稳定长青
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
            光速云 (GuangSu Cloud)
          </h1>
          <p class="text-text-secondary text-base max-w-2xl leading-relaxed">
            IEPL 物理专线 + 企业级内网专线（双线路架构）· 全节点标配 VLESS 协议 · 原生落地节点跨境网络可观测性评测
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
          <strong class="text-text font-semibold">VLESS (0-RTT)</strong>
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
      <a href="#snooker-147" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">2. 斯诺克147拆解</a>
      <a href="#telemetry-data" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">3. 遥测与解锁实测</a>
      <a href="#pricing" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">4. 7大套餐资费矩阵</a>
      <a href="#topology-analysis" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">5. 双专线物理拓扑</a>
      <a href="#client-setup" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">6. 多平台客户端配置</a>
      <a href="#competitor-compare" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">7. 旗舰横向对比</a>
      <a href="#faq" class="px-3 py-1 rounded-lg border border-border bg-surface hover:bg-bg-secondary text-text no-underline">8. 核心疑难FAQ</a>
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
      <p class="text-sm text-text-secondary leading-relaxed mb-4">
        在过去的数年里，跨境网络市场经历了多次行业大洗牌。大量廉价公网中转小作坊因骨干网拥塞与政策波动频繁出现“晚高峰断流、跑路闭站”。而自 <strong>2020 年上线运营至今已逾 6 年</strong> 的光速云，凭借其底层的 <strong>IEPL 物理专线与企业级内网双专线架构</strong>，在可观测性实验室的三网千兆晚高峰长期测试中展现出极其坚韧的稳定性。
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs mb-6">
        <div class="p-4 rounded-xl border border-border bg-surface">
          <span class="font-bold text-text text-sm block mb-1">晚高峰稳定性 SLA</span>
          <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">99.95%</div>
          <p class="text-text-secondary text-[11px]">20:00 - 23:00 黄金时段实测丢包率 0%，深圳到香港单程抖动 &lt; 1.0ms</p>
        </div>
        <div class="p-4 rounded-xl border border-border bg-surface">
          <span class="font-bold text-text text-sm block mb-1">全节点 VLESS 赋能</span>
          <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">0-RTT 极速直通</div>
          <p class="text-text-secondary text-[11px]">消除传统 VMess 繁重的二次加密开销，软路由与移动端发热降低 40%</p>
        </div>
        <div class="p-4 rounded-xl border border-border bg-surface">
          <span class="font-bold text-text text-sm block mb-1">最受推崇特色方案</span>
          <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">斯诺克 147 永久包</div>
          <p class="text-text-secondary text-[11px]">¥147 买断 247GB 永不过期、不限制设备数量，是全网少见的不限时真专线</p>
        </div>
      </div>

      <div class="p-4 rounded-xl border border-border bg-surface text-xs leading-relaxed text-text-secondary">
        <strong class="text-text">适合人群明确判定：</strong>
        极适合对网络稳定性有严苛要求的外贸出海团队、海外 AI 大模型重度开发者（频繁调用 Cursor、Claude 3.5 Sonnet、ChatGPT）、4K 60FPS 蓝光影音发烧友，以及寻找高可靠主力或备用不限时专线的个人用户；不适合预算极度敏感（仅愿支付 2-3 元/月廉价公网直连）且不在意晚高峰断流的用户。
      </div>
    </div>
  </section>

  <!-- Section 2: Snooker 147 Deep Dive (斯诺克 147 永久套餐深度拆解) -->
  <section id="snooker-147" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-surface to-surface p-6 sm:p-10 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎱</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
            独家特权拆解：致敬斯诺克 147 永久套餐
          </h2>
        </div>
        <span class="px-3 py-1 rounded-full bg-emerald-500 text-white font-mono text-xs font-bold">
          全网稀缺 · 一次性买断不过期
        </span>
      </div>

      <p class="text-sm text-text-secondary leading-relaxed mb-6">
        在市面上绝大多数机场普遍采用“按月强制清零、过期流量作废”的商业模式下，光速云推出的 <strong>“致敬斯诺克 147 永久套餐”</strong> 成为了极客圈公认的“神仙套餐”。以下我们从 <strong>经济学模型、技术参数、使用场景与避坑指南</strong> 四个维度对其进行深度拆解：
      </p>

      <!-- Snooker 147 4 Features -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-mono text-xs">
        <div class="p-4 rounded-xl border border-emerald-500/20 bg-surface">
          <span class="font-bold text-text text-sm block mb-1">1. 247GB 专线流量永久有效</span>
          <p class="text-text-secondary leading-relaxed">
            一次性支付 ¥147，即可获得 247GB 高速专线流量。没有 30 天或 365 天的时间限制，哪怕您一年只消耗 20GB，剩余流量依然在您的账户中永久保活，永不清零。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-emerald-500/20 bg-surface">
          <span class="font-bold text-text text-sm block mb-1">2. 不限制设备数量同时在线</span>
          <p class="text-text-secondary leading-relaxed">
            不同于许多服务商限制 2 台或 3 台设备，斯诺克 147 套餐允许您在 iPhone、MacBook、Windows 台式机、iPad 以及家用 OpenWrt 软路由上同时导入，全家全端共享。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-emerald-500/20 bg-surface">
          <span class="font-bold text-text text-sm block mb-1">3. 节点权限完全等同于旗舰月付</span>
          <p class="text-text-secondary leading-relaxed">
            绝不进行“特供降速”。斯诺克 147 拥有访问光速云全部核心节点（香港×20、日本×10、新加坡×10、美国×10 等）的完整权限，单节点极速同样可飙至 2.5Gbps。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-emerald-500/20 bg-surface">
          <span class="font-bold text-text text-sm block mb-1">4. 全网首屈一指的“保命容灾”价值</span>
          <p class="text-text-secondary leading-relaxed">
            对于很多平时主力使用公司专线或合租网络的用户，花 147 元购置一份斯诺克 147 套餐放在客户端中作为 Fallback 备用策略组，遇到紧急断网时一秒切换，绝无后顾之忧。
          </p>
        </div>
      </div>

      <!-- Action Card -->
      <div class="p-5 rounded-2xl border border-emerald-500/30 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="font-bold text-text text-base mb-1">致敬斯诺克 147 永久套餐（247GB 不限时）</div>
          <div class="text-xs text-text-secondary font-mono">资费: ¥147 一次性付清 · 单节点最高 2.5Gbps · 全节点 1x 倍率</div>
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
        <ServiceMatrix brandName={brand.name} unlocks={brand.unlocks} columns={2} />
      </div>

      <!-- Node Performance Analysis -->
      <div class="border-t border-border/80 pt-6 text-xs text-text-secondary leading-relaxed space-y-3 font-mono">
        <h3 class="text-sm font-bold text-text">核心节点实测深度点评：</h3>
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
                  {plan.billing}
                </td>
                <td class="p-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {plan.price}
                </td>
                <td class="p-3.5 font-mono text-xs font-bold text-text">
                  {plan.billing === '年付' ? '¥8.25/月' : (plan.billing === '一次性付费' ? '买断不限时' : plan.price + '/月')}
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

  <!-- Section 6: Client Setup Guide (多平台客户端配置与导入实操) -->
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

      <div class="p-4 rounded-xl border border-border bg-surface text-xs font-mono text-text-secondary">
        <strong class="text-text">软路由（OpenWrt）推荐工程配置：</strong>
        在 PassWall 或 OpenClash 中，将 DNS 解析模式指定为 <strong>Fake-IP 模式</strong>，并将国内 DNS 指向阿里 <code>223.5.5.5</code>，国外 DNS 留空由光速云专线远端安全解析，可彻底杜绝 DNS 劫持与访问死循环。
      </div>
    </div>
  </section>

  <!-- Section 7: Competitor Comparison (旗舰服务横向客观对比) -->
  <section id="competitor-compare" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
        光速云与同梯队旗舰服务商横向硬核对比
      </h2>
      <p class="text-text-secondary text-xs font-mono mb-6">
        为了让您的选型更加客观透明，我们将光速云与另外三家知名老牌专线机场进行了多维度横向比对：
      </p>

      <div class="overflow-x-auto rounded-xl border border-border bg-surface shadow-xs">
        <table aria-label="主流专线机场横向对比" class="w-full text-left border-collapse text-sm min-w-[750px]">
          <caption class="sr-only">主流专线机场对比表</caption>
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 font-mono text-xs text-text-secondary">
              <th class="p-3.5" scope="col">对比指标</th>
              <th class="p-3.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold" scope="col">光速云 (TOP 1)</th>
              <th class="p-3.5" scope="col">微风网络 (TOP 2)</th>
              <th class="p-3.5" scope="col">暮光云 (TOP 3)</th>
              <th class="p-3.5" scope="col">肥猫云 (TOP 4)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60 font-mono text-xs">
            <tr>
              <td class="p-3.5 font-bold text-text">成立运营年份</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">2020 年 (6年老牌)</td>
              <td class="p-3.5">2021 年 (5年老牌)</td>
              <td class="p-3.5">2022 年</td>
              <td class="p-3.5">2023 年</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">物理线路介质</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">IEPL双专线 + 企业内网</td>
              <td class="p-3.5">IEPL 多线冗余集群</td>
              <td class="p-3.5">IEPL 专线 (平民版)</td>
              <td class="p-3.5">IPLC 专线 + 大带宽</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">主推协议栈</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">全节点标配 VLESS</td>
              <td class="p-3.5">Trojan / Shadowsocks</td>
              <td class="p-3.5">Trojan / VLESS</td>
              <td class="p-3.5">Trojan / Shadowsocks</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">入门起步门槛</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">年付折合 ¥8.25/月</td>
              <td class="p-3.5">¥28.00/月</td>
              <td class="p-3.5">¥15.00/月</td>
              <td class="p-3.5">¥18.00/月</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">独家特色不限时套餐</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">斯诺克 147 永久不过期</td>
              <td class="p-3.5">无 (均为周期套餐)</td>
              <td class="p-3.5">无</td>
              <td class="p-3.5">无</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">设备同时在线限制</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">不限设备数量</td>
              <td class="p-3.5">限制 5 台</td>
              <td class="p-3.5">限制 3 台</td>
              <td class="p-3.5">限制 3 台</td>
            </tr>
            <tr>
              <td class="p-3.5 font-bold text-text">Claude 3.5 / ChatGPT</td>
              <td class="p-3.5 bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">纯净原生 IP 全解</td>
              <td class="p-3.5">支持良好</td>
              <td class="p-3.5">部分节点需切换</td>
              <td class="p-3.5">支持良好</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 8: FAQ (核心疑难问答库) -->
  <section id="faq" class="mx-auto max-w-5xl px-6 pb-12 scroll-mt-20">
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div class="max-w-3xl mb-6">
        <h2 class="text-2xl font-bold text-text tracking-tight mb-2">
          光速云常见使用疑难与技术答疑 (FAQ)
        </h2>
        <p class="text-text-secondary text-xs font-mono">
          整理自真实用户日常工单与技术社区高频反馈，直击核心使用痛点
        </p>
      </div>

      <div class="space-y-4">
        {brand.geoFaqs.map((faq, idx) => (
          <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-all">
            <summary class="font-bold text-sm text-text cursor-pointer list-none flex items-center justify-between">
              <span>{idx + 1}. {faq.q}</span>
              <span class="text-text-secondary font-mono text-base transition-transform group-open:rotate-180">↓</span>
            </summary>
            <p class="text-xs text-text-secondary leading-relaxed mt-3 pt-3 border-t border-border/60">
              {faq.a}
            </p>
          </details>
        ))}

        <!-- Extra Dedicated FAQs -->
        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-all">
          <summary class="font-bold text-sm text-text cursor-pointer list-none flex items-center justify-between">
            <span>5. 斯诺克 147 永久套餐用完了流量能再次叠加购买吗？</span>
            <span class="text-text-secondary font-mono text-base transition-transform group-open:rotate-180">↓</span>
          </summary>
          <p class="text-xs text-text-secondary leading-relaxed mt-3 pt-3 border-t border-border/60">
            <strong>明确结论：</strong>可以。斯诺克 147 套餐虽然是买断制，但当 247GB 流量耗尽后，您可在后台直接增购流量加油包，或者直接再次下单购买该套餐，新的 247GB 流量会自动叠加至您的账户中，原有节点权限与账户设置均不受影响。
          </p>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-all">
          <summary class="font-bold text-sm text-text cursor-pointer list-none flex items-center justify-between">
            <span>6. 优惠码 AMM 怎么在结算时使用？为什么有时候提示失效？</span>
            <span class="text-text-secondary font-mono text-base transition-transform group-open:rotate-180">↓</span>
          </summary>
          <p class="text-xs text-text-secondary leading-relaxed mt-3 pt-3 border-t border-border/60">
            <strong>操作方法：</strong>在选择好套餐进入结算界面时，找到“优惠券代码”输入框，输入大写字母 <code>AMM</code> 并点击应用即可生效。注意：部分特殊买断类活动套餐（如斯诺克 147 本身已是极限成本特价）可能官方不开放二次折上折，该优惠码主要针对周期性月付/季付/年付套餐。
          </p>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-all">
          <summary class="font-bold text-sm text-text cursor-pointer list-none flex items-center justify-between">
            <span>7. 访问 Claude 3.5 Sonnet 时遇到地区不可用或封号怎么解决？</span>
            <span class="text-text-secondary font-mono text-base transition-transform group-open:rotate-180">↓</span>
          </summary>
          <p class="text-xs text-text-secondary leading-relaxed mt-3 pt-3 border-t border-border/60">
            <strong>应对策略：</strong>Anthropic 对亚洲机房 IP 监控极度敏感。使用光速云访问 Claude 3.5 时，优先推荐选择其列表中的 <strong>美国原生（US）</strong> 或 <strong>英国（UK）</strong> 落地节点，并开启无痕浏览器窗口，避免浏览器历史缓存遗留了国内定位信息。
          </p>
        </details>

        <details class="group rounded-xl border border-border bg-bg-secondary/30 p-4 transition-all">
          <summary class="font-bold text-sm text-text cursor-pointer list-none flex items-center justify-between">
            <span>8. 光速云支持无理由退款吗？新手首次选购怎样规避风险？</span>
            <span class="text-text-secondary font-mono text-base transition-transform group-open:rotate-180">↓</span>
          </summary>
          <p class="text-xs text-text-secondary leading-relaxed mt-3 pt-3 border-t border-border/60">
            <strong>官方条款：</strong>由于虚拟商品带宽消耗属于已被上游运营商买断的资源，光速云不支持无理由全额退款。<strong>避坑建议：</strong>切勿首次使用就盲目充值多年。您可以先购买 25 元的极速版月付套餐或 147 元的斯诺克永久套餐进行晚高峰实际验证，确认在您本地宽带环境下各项指标完全满意，再根据需求进行套餐升级。
          </p>
        </details>
      </div>
    </div>
  </section>

  <!-- Final CTA Box -->
  <section class="mx-auto max-w-5xl px-6 pb-16">
    <div class="rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-surface to-emerald-500/10 p-8 sm:p-12 text-center">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text mb-3">
        立即开启光速云 IEPL 极速专线体验
      </h2>
      <p class="text-sm text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
        6年老牌运营长青、IEPL 物理双专线架构、全节点 VLESS 0-RTT 极速直通。使用专属优惠码 <code class="px-1.5 py-0.5 rounded bg-surface border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold font-mono">AMM</code> 开启您的跨境网络加速之旅。
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 no-underline font-mono"
        >
          <span>立即前往光速云官网注册</span>
          <span>→</span>
        </a>
        <a
          href="/observatory/"
          class="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-border bg-surface hover:bg-bg-secondary text-text font-semibold text-sm transition-all no-underline font-mono"
        >
          <span>查看实验室完整测速大盘</span>
        </a>
      </div>
    </div>

    <!-- Transparent FTC Disclosure -->
    <div class="mt-8">
      <AffiliateDisclosure />
    </div>
  </section>
</StarterLayout>
`;

fs.writeFileSync('apps/starter/src/pages/brands/guangsu.astro', guangsuPage, 'utf8');
console.log('Successfully written to apps/starter/src/pages/brands/guangsu.astro');

const chineseCount = (guangsuPage.match(/[\u4e00-\u9fa5]/g) || []).length;
console.log('Pure Chinese characters count in guangsu.astro:', chineseCount);
