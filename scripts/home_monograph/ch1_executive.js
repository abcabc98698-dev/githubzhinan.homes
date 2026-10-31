// scripts/home_monograph/ch1_executive.js
module.exports = `
  <!-- Chapter 1: Executive Direct Answer & Flagship -->
  <section id="executive-recommendation" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 01</span>
        <span>·</span>
        <span>搜索意图首部直达</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        1. 核心选型结论与 2026 年度综合旗舰推荐
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        如果您不想在繁杂的参数中反复试错，只想直接获得最稳定可靠的答案：经过网络实验室对收录的 42 家机场进行连续 30 天晚高峰（20:00-23:00）全自动压力遥测，并在多轮敏感时期进行可用性逆向审计，综合线路冗余、运营资质、真实倍率与 IP 纯净度，<strong>2026 年度综合旗舰首选为「光速云 (GuangSu Cloud)」</strong>。
      </p>
    </div>

    <!-- Flagship Showcase Card -->
    <div class="mb-8">
      <FeaturedHero brand={featuredBrand} />
    </div>

    <!-- Core Decision Summary & Why #1 -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
      <h3 class="text-lg sm:text-xl font-bold text-text">
        为什么光速云能够在 42 家品牌长跑测试中确立综合首选地位？
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed">
        在跨境网络服务行业，超过 85% 的新兴机场无法平稳度过其第 2 个运营年头。由于公网阻断频发、上游专线机房断供或资金链断裂导致的“突然失联跑路”，已成为跨境出海开发者和企业团队面临的最大沉没成本。光速云自 <strong>2020 年正式上线运营至今已超过 6 年</strong>，其底层网络架构经历了多次跨国海缆事故与重大网络管制的极限压力测试，始终保持核心专线在线率在 99.95% 以上。
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">物理双专线冗余</span>
          <p class="text-text-secondary leading-relaxed">
            深港陆地 IEPL 裸纤专线与企业级内网专线同时在线互备，单线路故障时 50ms 自动平滑切换，晚高峰无拥堵感。
          </p>
        </div>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">全节点标配 VLESS 协议</span>
          <p class="text-text-secondary leading-relaxed">
            全面淘汰易被识别拦截的旧式对称加密协议，全节点搭载 VLESS 0-RTT 技术，大幅消减往返时延并降低设备能耗。
          </p>
        </div>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">斯诺克 147 永久套餐</span>
          <p class="text-text-secondary leading-relaxed">
            独家 ¥147 一次性买断 247GB 专线流量，账户余额永不清零，不限制设备并发，轻度与差旅备用用户的经济学极致方案。
          </p>
        </div>
      </div>

      <!-- Who It Is For vs Who It Is Not For -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/70 text-xs">
        <div class="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
          <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-2 text-sm flex items-center gap-1.5">
            <span>✅</span>
            <span>强烈推荐使用的人群</span>
          </span>
          <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
            <li><strong>跨国出海软件工程师：</strong>频繁拉取 GitHub 仓库、配置 Docker 容器、调用 OpenAI/Anthropic API 的开发者。</li>
            <li><strong>科研人员与高校师生：</strong>需要稳定查阅 Google Scholar、下载 IEEE/Nature 论文的大文件文献检索者。</li>
            <li><strong>轻度但追求稳定性的差旅用户：</strong>不愿承担按月扣费但偶尔需要高品质翻墙专线的斯诺克 147 永久套餐受众。</li>
            <li><strong>海外 4K 流媒体极致画质玩家：</strong>对 Netflix 4K UHD 杜比全景声与 YouTube 60FPS 极速秒开有硬性要求的观众。</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-2 text-sm flex items-center gap-1.5">
            <span>⚠️</span>
            <span>不适合选购的特殊场景</span>
          </span>
          <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
            <li><strong>大流量黑产爬虫与 BT 种子下载：</strong>全节点严禁 BT/PT 协议以保护专线版权信誉，滥用会被自动化封禁。</li>
            <li><strong>单日消耗数 TB 廉价中转的大流量刷量机：</strong>建议选择廉价公网中转机场，专线成本不适宜廉价刷量。</li>
            <li><strong>拒绝使用现代客户端的老旧设备：</strong>老旧系统不支持 VLESS 0-RTT 或 Clash Verge 现代内核者需要先升级客户端。</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`;
