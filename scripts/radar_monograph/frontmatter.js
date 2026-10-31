// scripts/radar_monograph/frontmatter.js
module.exports = `---
import StarterLayout from '@/layouts/StarterLayout.astro';
import Navbar from '@astro-v7/shared/components/Navbar.astro';
import ThemeToggle from '@astro-v7/shared/components/ThemeToggle.svelte';
import { env } from '@/env';
import { BRANDS, getFeaturedBrand } from '@astro-v7/shared/data/brands';
import AffiliateDisclosure from '@/components/AffiliateDisclosure.astro';
import '@/styles/app.css';

const featuredBrand = getFeaturedBrand(); // 光速云

const pageTitle = '机场跑路预警雷达：2026最新跑路黑名单与避坑防雷白皮书 - GitHub指南';
const pageDescription = '2026跨境网络服务风险雷达：实时追踪跑路倒闭机场名单，深度复盘知名机场死因。解密超卖庞氏模型与大额促销跑路前兆，提供42家品牌存活年限审计与维权止损SOP。认准6年长青老牌，远离资金盘风险。';

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
      '@id': 'https://githubzhinan.homes/radar/#webpage',
      'url': 'https://githubzhinan.homes/radar/',
      'name': pageTitle,
      'description': pageDescription,
      'isPartOf': { '@id': 'https://githubzhinan.homes/#website' },
      'datePublished': '2026-10-19',
      'dateModified': '2026-10-31'
    },
    {
      '@type': 'ItemList',
      '@id': 'https://githubzhinan.homes/radar/#risk-signs',
      'name': '机场跑路前兆 8 大高危特征雷达',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '突发 3-5 年大额超低折扣促销（资金盘最后的收割）',
          'url': 'https://githubzhinan.homes/radar/#eight-warning-signs'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': '官方 Telegram 频道禁言、关闭评论区',
          'url': 'https://githubzhinan.homes/radar/#eight-warning-signs'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '客服工单已读不回、响应时间超过 72 小时',
          'url': 'https://githubzhinan.homes/radar/#eight-warning-signs'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': '主要节点连续断联数天，借口总是上游拔线或海缆抢修',
          'url': 'https://githubzhinan.homes/radar/#eight-warning-signs'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://githubzhinan.homes/radar/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '为什么说“大额三年付/五年付”是机场跑路最危险的前兆？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '正规物理专线需要每月向电信运营商支付高昂的硬性月租。当机场资金链断裂时，运营者无力支付下月带宽账单，会发起超低折扣的长期套餐促销吸引大笔现金流入，随后迅速卷款跑路。'
          }
        },
        {
          '@type': 'Question',
          'name': '遭遇机场突然断网失联，如何通过支付平台止损追回资金？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '若通过支付宝或微信商户支付，请立即打开账单详情点击“对订单有疑问”，提交未提供服务的凭证发起欺诈投诉；若使用信用卡支付，可直接致电发卡行申请 Chargeback（拒付），以商品未交付为由冻结资金结算。'
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
    { label: '跑路预警雷达', href: '/radar/' },
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
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-4 border border-red-500/20">
      <span class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
      <span>2026 跨境网络风控雷达 · 42 家服务商真实存活审计</span>
    </div>
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight mb-4 leading-tight">
      机场跑路预警雷达与资金安全避坑防雷白皮书
    </h1>
    <p class="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
      实时追踪跑路倒闭黑名单，深度复盘知名机场死因。解密低价庞氏超卖模型与大额促销收割套路，提供 42 家机场存活年限审计、72小时维权退款 SOP 与高可用双活容灾配置。
    </p>
  </header>

  <!-- Sticky In-page Chapter Navigation Pill Bar -->
  <nav aria-label="文章章节快速定位" class="sticky top-14 z-20 bg-bg/90 backdrop-blur border-b border-border py-2.5 px-4 overflow-x-auto no-scrollbar">
    <div class="max-w-6xl mx-auto flex items-center gap-2 text-xs font-mono whitespace-nowrap">
      <span class="text-text-secondary font-bold">章节速览:</span>
      <a href="#risk-executive" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">01. 核心结论</a>
      <a href="#scam-history-archive" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">02. 跑路史复盘</a>
      <a href="#eight-warning-signs" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">03. 8大高危前兆</a>
      <a href="#ponzi-math-model" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">04. 庞氏模型数学</a>
      <a href="#brand-safety-audit" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">05. 42家红绿灯</a>
      <a href="#fake-line-scam" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">06. 假专线逆向</a>
      <a href="#chargeback-sop" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">07. 维权退款SOP</a>
      <a href="#disaster-redundancy" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">08. 双活容灾配置</a>
      <a href="#long-term-choice" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">09. 长青避震之道</a>
      <a href="#enterprise-risk-control" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">10. 企业采购清单</a>
      <a href="#blacklist-submission" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">11. 黑名单提报</a>
      <a href="#radar-faqs" class="px-2.5 py-1 rounded-md bg-surface hover:bg-bg-secondary text-text border border-border no-underline transition-colors">12. 问答百科</a>
    </div>
  </nav>
`;
