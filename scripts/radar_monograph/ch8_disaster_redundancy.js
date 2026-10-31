// scripts/radar_monograph/ch8_disaster_redundancy.js
module.exports = `
  <!-- Chapter 8: Active-Active Disaster Redundancy Architecture -->
  <section id="disaster-redundancy" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 08</span>
        <span>·</span>
        <span>防断网双活冗余工程</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        8. 个人与企业双活 (Active-Active) 防失联冗余架构配置
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        在系统架构设计中，最大的工程禁忌是<strong>单点故障（Single Point of Failure，SPOF）</strong>。许多跨境出海工作者习惯只依赖一家机场，一旦突发敏感时期断网，海外客户邮件无法回复、生产环境事故无法远程 SSH 排查，造成的间接商业损失往往远超几年机场订阅费的总和。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 8.1 Active-Active Architecture Matrix -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.1 主备双活架构配置方案（主力专线 + 斯诺克 147 永久备用）
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          过去构建备用线路的最大痛点是<strong>“按月缴费空耗”</strong>：如果买两家月付机场，备用机场平时几乎不用，每个月几十元月租白白打水漂。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          <strong>光速云独家推出的「致敬斯诺克 147 永久套餐」</strong>完美解决了该工程难题：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block mb-1">主干线路 (Primary Link)：</strong>
            <p class="text-text-secondary leading-relaxed">
              选用常规按月/按年专线套餐（如光速云轻量入门年付 ¥99 或标准版），支撑日常 4K 流媒体播放、大型 Docker 镜像下载与高频高带宽任务。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">兜底备用线路 (Secondary Backup Link)：</strong>
            <p class="text-text-secondary leading-relaxed">
              配置「斯诺克 147 永久套餐」（¥147 一次性买断 247GB 流量）。平时不产生任何月租支出，账户余额永不过期。一旦主干线路断连，立即无感平滑接管关键业务通信。
            </p>
          </div>
        </div>
      </div>

      <!-- 8.2 Client Fallback Config (Clash & Sing-box) -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.2 客户端自动故障转移 (Fallback) 工业级配置代码
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          在客户端配置中，可以通过编写策略组实现全自动毫秒级故障倒换。以下分别提供 Clash Verge Rev 与 Sing-box 的配置代码：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <!-- Clash Verge YAML -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">🪟 Clash Verge Rev (YAML 策略组配置)：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># Clash Verge / Mihomo 自动故障转移
proxy-groups:
  - name: "🛡️ 双活高可用网关"
    type: fallback
    # 健康探测地址与检测周期
    url: "http://www.gstatic.com/generate_204"
    interval: 300
    proxies:
      - "光速云·香港 IEPL 01 (主线路)"
      - "光速云·斯诺克 147 永久备用 01"
      - "光速云·新加坡内网专线 01"</code></pre>
          </div>

          <!-- Sing-box JSON -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">📱 Sing-box (JSON 出站策略配置)：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code>&#123;
  "tag": "🛡️ 自动故障转移",
  "type": "urltest",
  "outbounds": [
    "光速云·香港 01",
    "光速云·斯诺克147 备用",
    "光速云·日本 01"
  ],
  "url": "https://cp.cloudflare.com/generate_204",
  "interval": "3m",
  "tolerance": 50
&#125;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
