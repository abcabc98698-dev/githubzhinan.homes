// scripts/free_monograph/ch5_cost_audit.js
module.exports = `
  <!-- Chapter 5: Time Cost & Actuarial Analysis of "Free Hunting" -->
  <section id="cost-audit" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 05</span>
        <span>·</span>
        <span>时间成本精算学</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        5. “白嫖折腾党”隐形代价精算：为什么免费才是最昂贵的消费？
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        很多用户潜意识里认为：只要没有从支付宝或微信扣款，自己就“赚到了”。然而从微观经济学与个人精力管理精算，沉溺于全网寻找免费节点是一个巨大的<strong>负收益时间黑洞</strong>。
      </p>
    </div>

    <!-- Actuarial Grid -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
      <h3 class="text-xl font-bold text-text">
        📊 “每天找免费节点”真实隐性成本精算模型
      </h3>

      <div class="overflow-x-auto rounded-xl border border-border">
        <table aria-label="免费折腾时间成本与专业专线经济价值对比表" class="w-full text-left border-collapse text-xs font-mono min-w-[650px]">
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
              <th class="p-3.5" scope="col">精算项目</th>
              <th class="p-3.5 text-red-600 dark:text-red-400" scope="col">白嫖免费节点折腾方案</th>
              <th class="p-3.5 text-emerald-600 dark:text-emerald-400" scope="col">老牌 IEPL 专线方案（光速云）</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60">
            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">日均耗费精力</td>
              <td class="p-3.5 text-red-600 dark:text-red-400">30 - 60 分钟（找节点、测速、换配置、排障）</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">0 分钟（开机自动无感连接）</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">年化时间消耗</td>
              <td class="p-3.5 text-red-600 dark:text-red-400 font-bold">约 243 小时（相当于 30 个完整 8 小时工作日）</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">0 小时</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">时间折算经济价值</td>
              <td class="p-3.5 text-red-600 dark:text-red-400 font-bold">¥7,290 - ¥24,300（按时薪 30-100 元折算）</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">年付仅 ¥99 / 斯诺克 147 永久买断</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">业务中断损失风险</td>
              <td class="p-3.5 text-red-600 dark:text-red-400">极高（开会、提交代码、查论文关键时刻掉线）</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">99.95% 电信级 SLA 可用性保障</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">账号安全与风控</td>
              <td class="p-3.5 text-red-600 dark:text-red-400">高危（ChatGPT 封号、网银风控、明文泄露）</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">住宅原生纯净 IP，防降级防封号</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 font-mono text-xs leading-relaxed text-text">
        <strong class="text-emerald-600 dark:text-emerald-400 block text-sm mb-1">💡 精算师决策建议：</strong>
        <p>
          如果您的核心任务是撰写学术论文、跨境协同办公、调试代码或使用 ChatGPT 提高生产力，将宝贵的 240+ 小时核心注意力浪费在反复寻找免费节点上，本质上是以数万元的潜在生产力为代价去节省不到一百元的网络支出。真正的理性选择是花极少的固定成本购买高品质基础设施，将全部注意力聚焦于个人技能成长与核心商业变现。
        </p>
      </div>
    </div>
  </section>
`;
