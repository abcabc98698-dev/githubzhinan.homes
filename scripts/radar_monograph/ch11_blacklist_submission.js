// scripts/radar_monograph/ch11_blacklist_submission.js
module.exports = `
  <!-- Chapter 11: Community Blacklist & Clues Submission -->
  <section id="blacklist-submission" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 11</span>
        <span>·</span>
        <span>风险情报网络与线索核验</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        11. 社区实时风险情报网络与预警线索核验机制
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        为了打破机场运营方与消费者之间的严重信息不对称，GitHub指南网络实验室建立了常态化的异常服务商通报机制。任何用户遭遇的异常断网或跑路骗局，均可通过标准审计流程录入本站风险黑名单，警示全网出海同行。
      </p>
    </div>

    <div class="space-y-6">
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-lg font-bold text-text">
          线索核验与风控评级准则
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          为了防止恶意同行诬陷，实验室对所有提交的跑路曝光线索坚持执行“三重客观证据链核验”：
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">1. 节点连续性探针验证：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              实验室部署分布式探针对被举报节点进行连续 72 小时 ICMP/TCP 握手采样，确认是否属于实质性全节点断联。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">2. 官方通信渠道真实性：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              核验其官方 Telegram 频道是否开启禁言、客服工单系统是否已彻底关闭或拒绝接收新工单。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">3. 支付网关健康状态：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              测试其在线收银台是否已被第三方支付机构下线封禁，或频繁切换为高危个人转账通道。
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Topic Cluster Links -->
      <div class="p-6 rounded-2xl border border-border bg-bg-secondary/30">
        <h4 class="text-sm font-bold text-text mb-3">
          🔗 站内生态协同导航
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <a href="/brands/guangsu/" class="p-3 rounded-xl border border-border bg-surface hover:border-emerald-500/50 no-underline text-text block">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">光速云深度实测</strong>
            <span class="text-text-secondary text-[10px]">6 年长青 IEPL 物理专线与斯诺克 147</span>
          </a>
          <a href="/observatory/" class="p-3 rounded-xl border border-border bg-surface hover:border-emerald-500/50 no-underline text-text block">
            <strong class="text-text block mb-1">网络测速实验室</strong>
            <span class="text-text-secondary text-[10px]">24/7 独立自动化探针晚高峰遥测</span>
          </a>
          <a href="/clients/" class="p-3 rounded-xl border border-border bg-surface hover:border-emerald-500/50 no-underline text-text block">
            <strong class="text-text block mb-1">全平台客户端下载</strong>
            <span class="text-text-secondary text-[10px]">Clash Verge / Sing-box 官方正版</span>
          </a>
          <a href="/brands/" class="p-3 rounded-xl border border-border bg-surface hover:border-emerald-500/50 no-underline text-text block">
            <strong class="text-text block mb-1">42 家机场品牌库</strong>
            <span class="text-text-secondary text-[10px]">多维度参数即时对比与检索</span>
          </a>
        </div>
      </div>
    </div>
  </section>
`;
