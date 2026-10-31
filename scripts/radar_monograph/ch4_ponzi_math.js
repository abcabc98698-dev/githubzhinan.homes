// scripts/radar_monograph/ch4_ponzi_math.js
module.exports = `
  <!-- Chapter 4: Ponzi Math & Cash Flow Autopsy -->
  <section id="ponzi-math-model" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 04</span>
        <span>·</span>
        <span>金融模型与现金流破裂</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        4. 机场资金盘的数学模型与现金流崩塌推演
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        绝大多数劣质机场的倒闭，并非死于“不可抗力”，而是死于其天生违背经济规律的<strong>“资金池期限错配”庞氏模型</strong>。通过量化其每月现金流的流向，我们能清晰看见资金盘走向终局的数学必然性。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 4.1 Cash Flow Time Mismatch -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          4.1 致命的期限错配：一次性年费收入 vs 持续流出的月度刚性带宽账单
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          正规物理跨境内网专线（如 IEPL 物理裸缆）与一级机房机柜的采购，要求运营方每月 1 号必须结清当月的保底带宽账单。无论用户当月是否上网，运营商的账单<strong>不会减少一分钱</strong>。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          而廉价小机场通常以“年付 ¥88 送 1000GB”的形式向用户收款。这笔资金是在<strong>第 1 个月一次性入账</strong>的。然而，这位用户将在接下来的 12 个月里持续消耗物理带宽。如果机场运营者没有把年费资金存入银行专项储备账户，而是挪作私用或分红，那么在第 6 个月之后，老用户持续消耗的机房成本将彻底超过当月的新增入账，形成<strong>“进水小于出水”的致命负现金流</strong>。
        </p>

        <!-- Math Simulation Box -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs leading-relaxed space-y-3">
          <div class="text-text font-bold">🧮 劣质资金盘机场的 12 个月生命周期现金流推演：</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-3 rounded-lg border border-border bg-surface">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">第 1 - 3 个月 (蜜月期)</strong>
              <p class="text-text-secondary text-[11px]">
                新客蜂拥而至，单月收取 1,000 名年付用户（入账 ¥88,000）。机房月成本仅需 ¥15,000，账面盈余大，速度极快。
              </p>
            </div>
            <div class="p-3 rounded-lg border border-border bg-surface">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">第 6 - 9 个月 (倒挂期)</strong>
              <p class="text-text-secondary text-[11px]">
                存量用户突破 5,000 人，晚高峰流量暴涨，机房月租飙升至 ¥55,000；而当月新增用户放缓仅入账 ¥30,000，现金流转负。
              </p>
            </div>
            <div class="p-3 rounded-lg border border-border bg-surface">
              <strong class="text-red-600 dark:text-red-400 block mb-1">第 12 - 14 个月 (崩塌期)</strong>
              <p class="text-text-secondary text-[11px]">
                上游机房催缴续费欠款。运营者发现倒贴无望，立刻发起“五年付超级半价”进行最后一轮资金收割，随后关站跑路。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4.2 Why Sustainable Pricing Works -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          4.2 为什么光速云等长青老牌能够跨越 6 年周期持续健康运转？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          反观光速云（自 2020 年运营至今已超 6 年）等行业领军品牌，其商业模式建立在严格的<strong>“成本-流量守恒原则”</strong>之上：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">1. 真实按月计费的健康正循环：</strong>
            <p class="text-text-secondary leading-relaxed">
              月付套餐（如 ¥25/月、¥35/月）将用户缴费周期与机房带宽结算周期精准锁定在同一时间轴上（按月收、按月付），绝不搞期限错配，从根本上杜绝了资金链断裂的系统性风险。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">2. 斯诺克 147 永久套餐的精算设计：</strong>
            <p class="text-text-secondary leading-relaxed">
              ¥147 买断 247GB 专线流量，单 G 成本约为 ¥0.59。这一定价足以完全覆盖高端二层 IEPL 物理裸缆的真实采购与折旧成本，且不产生“无限空耗”的无底洞，因而能实现真正意义上的“永久有效、不限设备、永不失联”。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
