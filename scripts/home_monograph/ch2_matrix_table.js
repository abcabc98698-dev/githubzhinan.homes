// scripts/home_monograph/ch2_matrix_table.js
module.exports = `
  <!-- Chapter 2: Core Comparison Benchmark Table -->
  <section id="core-comparison" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 02</span>
        <span>·</span>
        <span>客观数据基准</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        2. 2026 第一梯队核心机场多维度基准实测大表
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        本对比表由独立网络实验室探针于 2026 年 10 月持续多轮晚高峰（20:00 - 23:00）全自动采集。所有品牌均在相同骨干宽带环境与三网（电信 163、联通 169、移动 CMI）测试节点下进行基准压测，数据客观统一，拒绝无依据的主观推测。
      </p>
    </div>

    <!-- Table Container with Horizontal Scroll -->
    <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm mb-6">
      <table aria-label="2026 第一梯队机场基准实测大表" class="w-full text-left border-collapse text-xs font-mono min-w-[900px]">
        <thead>
          <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
            <th class="p-4" scope="col">机场品牌</th>
            <th class="p-4" scope="col">代表套餐 / 付费周期</th>
            <th class="p-4" scope="col">折合月费</th>
            <th class="p-4" scope="col">物理线路架构</th>
            <th class="p-4" scope="col">传输协议</th>
            <th class="p-4" scope="col">香港延迟</th>
            <th class="p-4" scope="col">晚高峰丢包</th>
            <th class="p-4" scope="col">IP 纯净度</th>
            <th class="p-4" scope="col">AI / 流媒体解锁</th>
            <th class="p-4" scope="col">设备限制</th>
            <th class="p-4 text-right" scope="col">选购与详情</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60">
          <!-- GuangSu Cloud (Rank 1) -->
          <tr class="hover:bg-bg-secondary/40 transition-colors bg-emerald-500/5">
            <td class="p-4 font-bold text-text">
              <a href="/brands/guangsu/" class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5 no-underline">
                <span>👑 光速云</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">TOP 1</span>
              </a>
            </td>
            <td class="p-4 text-text">
              斯诺克 147 永久 / 一次性<br />
              <span class="text-text-secondary text-[11px]">或入门 ¥99/年</span>
            </td>
            <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">
              ¥8.25/月 起<br />
              <span class="text-text-secondary text-[10px] font-normal">永久包无月费</span>
            </td>
            <td class="p-4 text-text font-semibold">
              IEPL 双专线<br />
              <span class="text-text-secondary text-[10px] font-normal">陆地裸纤+内网热备</span>
            </td>
            <td class="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">
              VLESS 0-RTT
            </td>
            <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">
              22 ms
            </td>
            <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">
              0% (无波动)
            </td>
            <td class="p-4 text-text">
              商业原生 ISP<br />
              <span class="text-text-secondary text-[10px]">欺诈分 0-5 极优</span>
            </td>
            <td class="p-4 text-emerald-600 dark:text-emerald-400">
              ● ChatGPT / Claude<br />
              ● Netflix 4K 全解锁
            </td>
            <td class="p-4 text-text">
              不限设备
            </td>
            <td class="p-4 text-right">
              <a
                href="/brands/guangsu/"
                aria-label="查看光速云深度评测与选购"
                class="inline-block px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs no-underline transition-colors"
              >
                评测与选购
              </a>
            </td>
          </tr>

          <!-- BreezeNet (Rank 2) -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-4 font-bold text-text">
              <a href="/brands/weifeng/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                微风网络
              </a>
            </td>
            <td class="p-4 text-text">
              轻量年付套餐 / 年付
            </td>
            <td class="p-4 text-text">
              ¥10.00/月
            </td>
            <td class="p-4 text-text">
              公网中转 + 专线混合
            </td>
            <td class="p-4 text-text">
              Shadowsocks
            </td>
            <td class="p-4 text-text">
              35 ms
            </td>
            <td class="p-4 text-text">
              0.5%
            </td>
            <td class="p-4 text-text">
              机房原生广播
            </td>
            <td class="p-4 text-text">
              ● ChatGPT 解锁<br />
              ● Netflix 自制剧
            </td>
            <td class="p-4 text-text">
              3 台同时在线
            </td>
            <td class="p-4 text-right">
              <a
                href="/brands/weifeng/"
                aria-label="查看评测：微风网络"
                class="inline-block px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-border text-text font-semibold text-xs no-underline transition-colors"
              >
                查看评测
              </a>
            </td>
          </tr>

          <!-- MuGuang Cloud (Rank 3) -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-4 font-bold text-text">
              <a href="/brands/muguang/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                暮光云
              </a>
            </td>
            <td class="p-4 text-text">
              基础版套餐 / 月付
            </td>
            <td class="p-4 text-text">
              ¥15.00/月
            </td>
            <td class="p-4 text-text">
              BGP 公网中转专线
            </td>
            <td class="p-4 text-text">
              Shadowsocks / Trojan
            </td>
            <td class="p-4 text-text">
              42 ms
            </td>
            <td class="p-4 text-text">
              1.2%
            </td>
            <td class="p-4 text-text">
              商业机房 IP
            </td>
            <td class="p-4 text-text">
              ● ChatGPT 支持<br />
              ● 部分解锁 Claude
            </td>
            <td class="p-4 text-text">
              5 台同时在线
            </td>
            <td class="p-4 text-right">
              <a
                href="/brands/muguang/"
                aria-label="查看评测：暮光云"
                class="inline-block px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-border text-text font-semibold text-xs no-underline transition-colors"
              >
                查看评测
              </a>
            </td>
          </tr>

          <!-- FatCat Cloud (Rank 4) -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-4 font-bold text-text">
              <a href="/brands/feimao/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                肥猫云
              </a>
            </td>
            <td class="p-4 text-text">
              标准月付版 / 月付
            </td>
            <td class="p-4 text-text">
              ¥20.00/月
            </td>
            <td class="p-4 text-text">
              IPLC 专线中继
            </td>
            <td class="p-4 text-text">
              Trojan
            </td>
            <td class="p-4 text-text">
              38 ms
            </td>
            <td class="p-4 text-text">
              0.8%
            </td>
            <td class="p-4 text-text">
              数据中心优质 IP
            </td>
            <td class="p-4 text-text">
              ● 流媒体全解<br />
              ● ChatGPT 正常
            </td>
            <td class="p-4 text-text">
              4 台同时在线
            </td>
            <td class="p-4 text-right">
              <a
                href="/brands/feimao/"
                aria-label="查看评测：肥猫云"
                class="inline-block px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-border text-text font-semibold text-xs no-underline transition-colors"
              >
                查看评测
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Footnotes & Methodology Verification -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
      <h3 class="text-lg font-bold text-text">
        2.2 核心测评维度的技术标准与严苛取样方法论
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed">
        为了保证评测结果的严谨性与工业级复现能力，实验室探针坚持以下四大硬性测试规范：
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-text block mb-1">1. 往返时延 (RTT) 与抖动方差取样：</strong>
          <p class="text-text-secondary leading-relaxed">
            探针每隔 5 分钟向目标节点发起连续 1,000 次 TCP Ping 握手采样。记录平均时延、95 分位时延 (p95) 与标准差抖动，彻底剔除单次测速的偶然性。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-text block mb-1">2. 晚高峰饱和并发压力测试：</strong>
          <p class="text-text-secondary leading-relaxed">
            在全网骨干网拥堵最严重的 20:00 - 23:00 黄金时段，通过多线程并发拉取境外测试大文件，检验服务商专线上游带宽储备是否充足、是否存在超卖限速。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-text block mb-1">3. 原生住宅 IP 欺诈分双重校验：</strong>
          <p class="text-text-secondary leading-relaxed">
            联合 IPQualityScore 与 MaxMind 数据库对落地 IP 进行交叉反查。核实其 ASN 是否归属于商业住宅宽带提供商，确保 Claude 3.5 与 ChatGPT 无风控拦截。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
          <strong class="text-text block mb-1">4. 流媒体版权全区域解锁探针：</strong>
          <p class="text-text-secondary leading-relaxed">
            持续轮询 Netflix、Disney+、Amazon Prime Video 的非自制原创剧集版权库，确保节点支持 4K UHD 极速秒开与杜比视界高码率传输。
          </p>
        </div>
      </div>

      <div class="pt-4 border-t border-border/70 text-xs font-mono text-text-secondary flex flex-wrap items-center justify-between gap-2">
        <span>* 数据最近全量核查时间：2026 年 10 月 31 日</span>
        <a href="/observatory/" class="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
          查看网络可观测性测速实验室完整实时大盘 →
        </a>
      </div>
    </div>
  </section>
`;
