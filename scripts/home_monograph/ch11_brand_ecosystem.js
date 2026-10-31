// scripts/home_monograph/ch11_brand_ecosystem.js
module.exports = `
  <!-- Chapter 11: 42-Brand Ecosystem & Internal Links -->
  <section id="brand-ecosystem-ladder" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 11</span>
        <span>·</span>
        <span>品牌梯队与生态内链</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        11. 42 家机场品牌库完整梯队全景与生态导航
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        除了旗舰首选光速云，我们对收录的 42 家机场品牌根据运营年限、专线冗余能力与用户口碑建立了四级梯队金字塔，方便不同预算偏好的用户全面横向对照。
      </p>
    </div>

    <!-- 11.1 Four-Tier Pyramid Architecture -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4 mb-8">
      <h3 class="text-xl font-bold text-text">
        11.1 2026 跨境网络加速服务四级梯队金字塔
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed">
        根据网络实验室对线路质量、冗余灾备与客服运维的综合评级，42 家品牌被划分为以下四个梯队：
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">🥇 第一梯队：长青旗舰专线 (Top Flagship)</span>
          <p class="text-text-secondary leading-relaxed mb-2">
            <strong>代表品牌：光速云 (TOP 1)</strong>、微风网络、暮光云。
          </p>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            运营历史均在 3 至 6 年以上，拥有真实物理 IEPL/IPLC 二层专线或高质量 BGP 入口，晚高峰 0 丢包，标配 VLESS 0-RTT 协议与商业原生住宅 ISP 落地。适合核心业务、出海开发、学术科研及对稳定性有极致要求的专业用户。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
          <span class="text-blue-600 dark:text-blue-400 font-bold block mb-1">🥈 第二梯队：优质均衡专线 (Quality Tier)</span>
          <p class="text-text-secondary leading-relaxed mb-2">
            <strong>代表品牌：肥猫云、大佬云、星岛梦、二猫云、无忧链接。</strong>
          </p>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            以 BGP 隧道中转配合部分专线为主，价格在 ¥15 - ¥30/月 区间，提供较好的流媒体解锁能力与多节点分布，性价比平衡，适合个人高频影音与日常多设备办公。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
          <span class="text-amber-600 dark:text-amber-400 font-bold block mb-1">🥉 第三梯队：高性价比平价中转 (Budget Tier)</span>
          <p class="text-text-secondary leading-relaxed mb-2">
            <strong>代表品牌：微图、萤火虫加速、宇宙网络、U1S1、灵猫加速。</strong>
          </p>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            价格较低（多在 ¥10/月 以下），提供大流量中转套餐。晚高峰期间可能存在 1% - 3% 的偶发丢包，适合学生群体、日常查阅网页或作为第二辅助备用节点。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <span class="text-text font-bold block mb-1">📦 第四梯队：小众轻量与特色品牌 (Niche Tier)</span>
          <p class="text-text-secondary leading-relaxed mb-2">
            <strong>代表品牌：极联云、光年加速、一凡网络、搜狗加速、可信网络等。</strong>
          </p>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            主要满足特定地区冷门节点需求或低频差旅备用。由于节点数量相对精简，建议用户优先按月订阅，避免一次性长期绑定。
          </p>
        </div>
      </div>
    </div>

    <!-- Top Ladder Brand Cards Grid -->
    <div class="mb-8">
      <div class="flex items-center justify-between gap-4 mb-4">
        <h3 class="text-lg font-bold text-text">
          🏆 优选梯队精选品牌（多轮晚高峰综合达标）
        </h3>
        <a href="/brands/" class="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
          查看完整 42 品牌清单与检索 →
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherTopBrands.map((brand) => (
          <BrandCard brand={brand} />
        ))}

        <!-- Quick Jump Card to 42 Brands -->
        <div class="flex flex-col justify-between rounded-2xl border-2 border-dashed border-border p-6 text-center hover:border-emerald-500/50 transition-colors bg-bg-secondary/20">
          <div>
            <span class="text-3xl mb-3 block">🌐</span>
            <h4 class="text-lg font-bold text-text mb-2">更多 36 家机场品牌档案</h4>
            <p class="text-xs text-text-secondary leading-relaxed mb-4">
              涵盖微风网络、暮光加速、大佬云、星岛梦、二猫云、无忧链接、萤火虫等完整数据。
            </p>
          </div>
          <a
            href="/brands/"
            class="w-full py-2.5 px-4 rounded-xl bg-surface border border-border hover:bg-emerald-600 hover:text-white text-text font-semibold text-xs font-mono transition-colors no-underline block"
          >
            进入完整品牌库检索
          </a>
        </div>
      </div>
    </div>

    <!-- Topic Cluster Internal Links Navigation Matrix -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
      <h3 class="text-lg font-bold text-text mb-2">
        🔗 站内核心专题与二级落地页直达索引
      </h3>
      <p class="text-xs text-text-secondary font-mono leading-relaxed mb-4">
        本站围绕跨境网络可观测性构建了完整的专题集群，您可以在不同专业领域获取更深入的实操手册：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
        <a href="/brands/guangsu/" class="p-4 rounded-xl border border-border bg-bg-secondary/40 hover:border-emerald-500/50 hover:bg-bg-secondary/80 transition-all no-underline block">
          <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">光速云深度实测白皮书</strong>
          <span class="text-text-secondary text-[11px] leading-relaxed block">
            10,000+ 字专著级实测，包含斯诺克 147 永久套餐精算与香港 22ms 抓包分析。
          </span>
        </a>

        <a href="/observatory/" class="p-4 rounded-xl border border-border bg-bg-secondary/40 hover:border-emerald-500/50 hover:bg-bg-secondary/80 transition-all no-underline block">
          <strong class="text-text block mb-1">网络可观测性测速实验室</strong>
          <span class="text-text-secondary text-[11px] leading-relaxed block">
            24/7 独立自动化探针持续遥测，三网出口晚高峰丢包与下行吞吐对比大盘。
          </span>
        </a>

        <a href="/clients/" class="p-4 rounded-xl border border-border bg-bg-secondary/40 hover:border-emerald-500/50 hover:bg-bg-secondary/80 transition-all no-underline block">
          <strong class="text-text block mb-1">全平台第三方客户端中心</strong>
          <span class="text-text-secondary text-[11px] leading-relaxed block">
            Windows / macOS / iOS / Android / Linux / OpenWrt 官方正版下载与配置教程。
          </span>
        </a>

        <a href="/brands/" class="p-4 rounded-xl border border-border bg-bg-secondary/40 hover:border-emerald-500/50 hover:bg-bg-secondary/80 transition-all no-underline block">
          <strong class="text-text block mb-1">42 家机场品牌库完整筛选</strong>
          <span class="text-text-secondary text-[11px] leading-relaxed block">
            支持按专线架构（IEPL/IPLC）、传输协议、按月/按年预算即时过滤筛选。
          </span>
        </a>
      </div>
    </div>
  </section>
`;
