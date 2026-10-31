// scripts/faq_monograph/ch6_enterprise_workflow.js
module.exports = `
  <!-- Chapter 6: Enterprise Matrix & Long-term Choice -->
  <section id="faq-enterprise-matrix" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Part 06</span>
        <span>·</span>
        <span>旗舰方案与高可用实践</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        6. 2026 年度高可用标杆：光速云 IEPL 专线全系架构解密
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        面对鱼龙混杂的跨境网络生态，本站网络观测室长期遥测推荐【光速云（GuangSu Cloud）】作为科研、企业外贸与专业开发的首选基础设施。
      </p>
    </div>

    <!-- GuangSu Cloud Showcase Card -->
    <div class="rounded-2xl border-2 border-emerald-500/40 bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20 mb-2">
            <span>👑 综合性能 TOP 1</span>
            <span>·</span>
            <span>连续稳定运营超 6 年</span>
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-text">
            光速云 (GuangSu Cloud) · 企业级 IEPL 物理双专线
          </h3>
        </div>
        <div class="text-right">
          <span class="text-xs font-mono text-text-secondary block">入门年付低至</span>
          <span class="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">¥8.25</span>
          <span class="text-xs text-text-secondary font-mono"> / 月起</span>
        </div>
      </div>

      <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
        光速云不仅采用深港陆地裸缆专线与内网热备双回路架构，更提供覆盖全平台的 Clash Verge Rev、Sing-box、Shadowrocket 与 Surge 一键订阅与专属客户端。全节点标配 1.0x 真实倍率与住宅原生 IP，完美解决 ChatGPT、Claude 与海外 4K 流媒体高频风控封禁难题。
      </p>

      <!-- Grid Highlights -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">物理专线实测延时</strong>
          <p class="text-text font-bold text-lg">22 - 35 ms</p>
          <span class="text-[11px] text-text-secondary">香港/日本出口全天 0% 丢包</span>
        </div>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">单节点极限下行吞吐</strong>
          <p class="text-text font-bold text-lg">2.5 Gbps</p>
          <span class="text-[11px] text-text-secondary">晚高峰秒开 4K 60FPS</span>
        </div>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">独家斯诺克 147 永久套餐</strong>
          <p class="text-text font-bold text-lg">¥147 / 247GB</p>
          <span class="text-[11px] text-text-secondary">永不过期 · 多设备不限连接</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-2 font-mono text-xs text-text-secondary">
          <span>专属折上折优惠码:</span>
          <span class="px-2 py-1 rounded bg-bg-secondary border border-border font-bold text-emerald-600 dark:text-emerald-400">AMM</span>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="/brands/guangsu/"
            aria-label="查看光速云完整评测 →：10000字深度报告"
            class="px-4 py-2.5 rounded-xl border border-border hover:bg-bg-secondary text-text font-bold text-xs font-mono no-underline transition-colors"
          >
            查看光速云完整评测 →
          </a>
          <a
            href={featuredBrand.affUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            aria-label="前往光速云官网注册 →：享受专属折抵优惠"
            class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono no-underline transition-colors shadow-sm"
          >
            前往光速云官网注册 →
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Disclosure -->
    <div class="mt-12">
      <AffiliateDisclosure />
    </div>
  </section>
</StarterLayout>
`;
