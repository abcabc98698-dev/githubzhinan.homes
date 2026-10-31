// scripts/home_monograph/ch4_decision_tree.js
module.exports = `
  <!-- Chapter 4: Decision Matrix & Budget Strategy -->
  <section id="decision-matrix" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 04</span>
        <span>·</span>
        <span>选型决策模型</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        4. 预算与应用场景精准选型决策模型
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        没有一种套餐适合所有人。脱离实际预算、并发设备数与业务场景的选型，往往会导致资金浪费或性能瓶颈。我们基于上万名开发者的真实使用画像，提炼出以下四维选型决策体系，助您在 30 秒内锁定最优解。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 4-Tier Budget & Scenario Decision Table -->
      <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table aria-label="预算与场景决策对照表" class="w-full text-left border-collapse text-xs font-mono min-w-[700px]">
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
              <th class="p-3.5" scope="col">预算梯度</th>
              <th class="p-3.5" scope="col">典型核心场景</th>
              <th class="p-3.5" scope="col">最佳推荐方案</th>
              <th class="p-3.5" scope="col">折合月度开销</th>
              <th class="p-3.5" scope="col">选型核心逻辑与优势</th>
              <th class="p-3.5 text-right" scope="col">操作入口</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60">
            <tr class="hover:bg-bg-secondary/40 transition-colors bg-emerald-500/5">
              <td class="p-3.5 font-bold text-text">
                年预算 &lt; ¥150<br />
                <span class="text-text-secondary text-[11px] font-normal">极低频备用</span>
              </td>
              <td class="p-3.5 text-text">
                差旅应急、偶发科研检索、偶尔登录海外社媒
              </td>
              <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
                光速云 · 斯诺克 147 永久套餐
              </td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">
                ¥1.49 - ¥4.16 / 月<br />
                <span class="text-text-secondary text-[10px] font-normal">一次性付清，无月费</span>
              </td>
              <td class="p-3.5 text-text leading-relaxed">
                247GB 专线流量永不过期，彻底避免按月扣费的空耗陷阱，不限设备数，单节点极速 2.5Gbps。
              </td>
              <td class="p-3.5 text-right">
                <a href="/brands/guangsu/#snooker-147" aria-label="深度测算：斯诺克147永久套餐价值" class="px-2.5 py-1 rounded bg-emerald-600 text-white font-semibold no-underline hover:bg-emerald-700 transition-colors">
                  深度测算
                </a>
              </td>
            </tr>

            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">
                月预算 ¥8 - ¥15<br />
                <span class="text-text-secondary text-[11px] font-normal">个人日常高频</span>
              </td>
              <td class="p-3.5 text-text">
                日常浏览网页、学术文献搜索、常规开发环境
              </td>
              <td class="p-3.5 font-bold text-text">
                光速云 · 轻量入门版 (年付)
              </td>
              <td class="p-3.5 font-bold text-text">
                折合 ¥8.25 / 月<br />
                <span class="text-text-secondary text-[10px] font-normal">年付实付 ¥99</span>
              </td>
              <td class="p-3.5 text-text leading-relaxed">
                每月 69GB 高速专线流量，全节点 1.0x 真实倍率，三网优化直连，性价之王。
              </td>
              <td class="p-3.5 text-right">
                <a href="/brands/guangsu/#pricing" aria-label="查看套餐：轻量入门版" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                  查看套餐
                </a>
              </td>
            </tr>

            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">
                月预算 ¥25 - ¥55<br />
                <span class="text-text-secondary text-[11px] font-normal">出海极客 / AI</span>
              </td>
              <td class="p-3.5 text-text">
                Claude 3.5 高频对话、Cursor 编程、跨国 4K HDR 追剧
              </td>
              <td class="p-3.5 font-bold text-text">
                光速云 · 标准 / 进阶版
              </td>
              <td class="p-3.5 font-bold text-text">
                ¥25.00 - ¥35.00 / 月<br />
                <span class="text-text-secondary text-[10px] font-normal">支持年付折抵 8 折</span>
              </td>
              <td class="p-3.5 text-text leading-relaxed">
                全系标配商业原生住宅 ISP 落地，IPQS 欺诈分极低，彻底杜绝 Claude/ChatGPT 封号。
              </td>
              <td class="p-3.5 text-right">
                <a href="/brands/guangsu/#pricing" aria-label="查看套餐：进阶版" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                  查看套餐
                </a>
              </td>
            </tr>

            <tr class="hover:bg-bg-secondary/40 transition-colors">
              <td class="p-3.5 font-bold text-text">
                月预算 ¥95 - ¥180+<br />
                <span class="text-text-secondary text-[11px] font-normal">跨国团队 / 企业</span>
              </td>
              <td class="p-3.5 text-text">
                多研发协同、跨境电商多店铺管理、海外直播推流
              </td>
              <td class="p-3.5 font-bold text-text">
                光速云 · 至尊版 / 团队企业专线
              </td>
              <td class="p-3.5 font-bold text-text">
                ¥95.00 - ¥180.00 / 月<br />
                <span class="text-text-secondary text-[10px] font-normal">最高 2000GB 独立配额</span>
              </td>
              <td class="p-3.5 text-text leading-relaxed">
                享有最高 QoS 网络调度优先级，企业级独立专线带宽，支持多设备同时无感并发。
              </td>
              <td class="p-3.5 text-right">
                <a href="/brands/guangsu/#pricing" aria-label="查看套餐：团队企业专线" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                  查看套餐
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Snooker 147 In-depth Cost Calculation Table -->
      <div class="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 to-surface p-6 sm:p-8 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-xl font-bold text-text flex items-center gap-2">
              <span>🎱 独家拆解：为什么“致敬斯诺克 147 永久套餐”被称为轻度用户的终极退烧方案？</span>
            </h3>
            <p class="text-xs text-text-secondary font-mono mt-1">
              按月计费模式的痛点在于：即使整月未出差或未用流量，月费依然照扣。147 永久套餐彻底重构了商业交付逻辑。
            </p>
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/40">
            一次付费 · 永久生效
          </span>
        </div>

        <div class="overflow-x-auto rounded-xl border border-border bg-surface">
          <table aria-label="斯诺克147使用时长经济学测算" class="w-full text-left border-collapse text-xs font-mono min-w-[650px]">
            <thead>
              <tr class="border-b border-border bg-bg-secondary/50 text-text font-bold">
                <th class="p-3" scope="col">用户使用画像</th>
                <th class="p-3" scope="col">月均预估流量</th>
                <th class="p-3" scope="col">247GB 可用时长</th>
                <th class="p-3" scope="col">折合等效月均成本</th>
                <th class="p-3" scope="col">经济学评价与选型建议</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border/60">
              <tr class="hover:bg-bg-secondary/40">
                <td class="p-3 font-semibold text-text">双机轻度差旅用户</td>
                <td class="p-3">2.5 GB / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">98.8 个月 (约 8.2 年)</td>
                <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">¥1.49 / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400">极力推荐 · 彻底摆脱续费烦恼</td>
              </tr>
              <tr class="hover:bg-bg-secondary/40">
                <td class="p-3 font-semibold text-text">跨国科研文献检索</td>
                <td class="p-3">4.0 GB / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">61.8 个月 (约 5.1 年)</td>
                <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">¥2.38 / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400">极力推荐 · 满足硕博学术周期</td>
              </tr>
              <tr class="hover:bg-bg-secondary/40">
                <td class="p-3 font-semibold text-text">出海软件工程师 (Git+API)</td>
                <td class="p-3">7.0 GB / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400 font-bold">35.3 个月 (约 2.9 年)</td>
                <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">¥4.16 / 月</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400">极佳性价比 · 开发机稳定伴侣</td>
              </tr>
              <tr class="hover:bg-bg-secondary/40">
                <td class="p-3 font-semibold text-text">外贸企业主备用线路</td>
                <td class="p-3">12.0 GB / 月</td>
                <td class="p-3 font-medium text-text">20.6 个月 (约 1.7 年)</td>
                <td class="p-3 font-bold text-text">¥7.14 / 月</td>
                <td class="p-3 text-text">推荐备用 · 作为第二兜底冗余</td>
              </tr>
              <tr class="hover:bg-bg-secondary/40 bg-amber-500/5">
                <td class="p-3 font-semibold text-text">重度 4K 流媒体影音追剧</td>
                <td class="p-3">50.0 GB / 月</td>
                <td class="p-3 text-amber-600 dark:text-amber-400 font-medium">4.9 个月</td>
                <td class="p-3 font-bold text-amber-600 dark:text-amber-400">¥30.00 / 月</td>
                <td class="p-3 text-amber-600 dark:text-amber-400">不推荐买永久 · 建议选购月付版</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
`;
