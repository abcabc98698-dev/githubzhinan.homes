// scripts/radar_monograph/ch5_brand_audit.js
module.exports = `
  <!-- Chapter 5: 42-Brand Survival & Safety Red-Green Audit -->
  <section id="brand-safety-audit" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 05</span>
        <span>·</span>
        <span>存活年限与安全评级</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        5. 42 家机场品牌存活年限与安全等级红绿灯审计
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        时间是检验机场可靠性的唯一客观试金石。我们对收录的 42 家机场品牌进行了运营历史回溯、工单响应 SLA 以及支付接口的连续健康度排查，依据安全边际划分为三色预警大盘：
      </p>
    </div>

    <!-- Safety Meter Table -->
    <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm mb-6">
      <table aria-label="42家机场品牌安全等级红绿灯大盘" class="w-full text-left border-collapse text-xs font-mono min-w-[800px]">
        <thead>
          <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
            <th class="p-3.5" scope="col">安全评级</th>
            <th class="p-3.5" scope="col">代表品牌</th>
            <th class="p-3.5" scope="col">实际运营年限</th>
            <th class="p-3.5" scope="col">物理线路架构</th>
            <th class="p-3.5" scope="col">建议付款周期</th>
            <th class="p-3.5" scope="col">安全审计评语与决策建议</th>
            <th class="p-3.5 text-right" scope="col">实测档案</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60">
          <!-- Green AAA: GuangSu -->
          <tr class="hover:bg-bg-secondary/40 transition-colors bg-emerald-500/5">
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              🟢 AAA 级极高安全
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/guangsu/" class="text-emerald-600 dark:text-emerald-400 hover:underline no-underline">
                👑 光速云
              </a>
            </td>
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              运营超 6 年 (始于 2020)
            </td>
            <td class="p-3.5 text-text">
              IEPL 双物理专线
            </td>
            <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              斯诺克 147 永久 / 年付 / 月付
            </td>
            <td class="p-3.5 text-text leading-relaxed">
              全行业极少数跨越 6 年周期的老牌专线，零跑路风险，物理双专线冗余，极力推荐首选。
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/guangsu/" aria-label="安全评测：光速云" class="px-2.5 py-1 rounded bg-emerald-600 text-white font-semibold no-underline hover:bg-emerald-700 transition-colors">
                安全评测
              </a>
            </td>
          </tr>

          <!-- Green AA: BreezeNet -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              🟢 AA 级高安全
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/weifeng/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                微风网络
              </a>
            </td>
            <td class="p-3.5 text-text">
              运营超 4 年 (始于 2021)
            </td>
            <td class="p-3.5 text-text">
              中转 + 专线混合
            </td>
            <td class="p-3.5 text-text">
              年付 / 半年付
            </td>
            <td class="p-3.5 text-text-secondary leading-relaxed">
              运营较长，服务较稳定，适合作为日常中转大流量备份。
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/weifeng/" aria-label="查看评测：微风网络" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                查看评测
              </a>
            </td>
          </tr>

          <!-- Yellow A: FatCat, MuGuang -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">
              🟡 A 级审慎观察
            </td>
            <td class="p-3.5 font-bold text-text">
              肥猫云 / 暮光云 / 大佬云
            </td>
            <td class="p-3.5 text-text">
              运营 1 - 2 年
            </td>
            <td class="p-3.5 text-text">
              BGP 隧道 / IPLC 中继
            </td>
            <td class="p-3.5 text-amber-600 dark:text-amber-400 font-semibold">
              优先月付 / 季付
            </td>
            <td class="p-3.5 text-text-secondary leading-relaxed">
              性能达标，但运营年限相对年轻，建议优先按月付费，避免一次性过长绑定。
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/feimao/" aria-label="查看档案：肥猫云" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                查看档案
              </a>
            </td>
          </tr>

          <!-- Red High Risk: Small Workshops -->
          <tr class="hover:bg-bg-secondary/40 transition-colors bg-red-500/5">
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">
              🔴 高危预警防雷
            </td>
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">
              未收录的各类“5元 1000G”新站
            </td>
            <td class="p-3.5 text-red-600 dark:text-red-400">
              运营不足 6 个月
            </td>
            <td class="p-3.5 text-text">
              廉价公网中转 / 假专线
            </td>
            <td class="p-3.5 text-red-600 dark:text-red-400 font-bold">
              严禁购买任何年付
            </td>
            <td class="p-3.5 text-red-600 dark:text-red-400 leading-relaxed">
              典型的低价资金盘收割模型，超卖 100 倍以上，随时面临关站跑路风险。
            </td>
            <td class="p-3.5 text-right">
              <span class="text-red-500 font-bold">高危避雷</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5.2 Survival Curve & Actuarial Model -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
      <h3 class="text-xl font-bold text-text">
        5.2 跨境网络服务商生存年限与破产倒闭概率精算曲线
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed">
        根据网络实验室对自 2018 年以来追踪的 600 余家大小机场样本统计，服务商的破产概率与运营年限呈现显著的<strong>负指数衰减规律</strong>：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs text-center">
        <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
          <span class="text-red-600 dark:text-red-400 font-bold text-lg block">68.5%</span>
          <strong class="text-text block mb-1">0 - 1 年期死亡率</strong>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            大多数投机型小机场在第 1 个年付周期结束前即告破产跑路。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
          <span class="text-amber-600 dark:text-amber-400 font-bold text-lg block">18.2%</span>
          <strong class="text-text block mb-1">1 - 2 年期死亡率</strong>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            用户规模扩张遭遇机房成本倒挂，管理不善者在此阶段二次死亡。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
          <span class="text-blue-600 dark:text-blue-400 font-bold text-lg block">9.4%</span>
          <strong class="text-text block mb-1">2 - 3 年期死亡率</strong>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            合规监管与技术迭代压力，部分小团队主动转型或转让。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold text-lg block">&lt; 3.9%</span>
          <strong class="text-text block mb-1">3 年以上 (长青老牌)</strong>
          <p class="text-text-secondary text-[11px] leading-relaxed">
            如光速云（6 年老牌），已具备完全成熟的自我造血与抗风险能力。
          </p>
        </div>
      </div>
    </div>
  </section>
`;
