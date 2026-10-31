// scripts/radar_monograph/ch6_fake_lines.js
module.exports = `
  <!-- Chapter 6: Fake Line Scams & Reverse Engineering -->
  <section id="fake-line-scam" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 06</span>
        <span>·</span>
        <span>技术造假打假</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        6. 真假专线骗局深度拆解与反向打假技术
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        在机场营销中，“挂羊头卖狗肉”是极其普遍的欺诈行径。许多商家仅仅租用了两台廉价的公网云服务器（例如阿里云或腾讯云轻量服务器），用开源软件在服务器之间拉一条公网加密隧道，就在节点列表里赫然标上“【香港 IEPL 专线】”或“【日本 IPLC 游戏物理专线】”，向用户收取比普通中转高出 3 至 5 倍的昂贵费用。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 6.1 Fake Dedicated Line Mechanisms -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          6.1 伪专线的技术原理与致命脆弱性
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          伪专线的数据包实际上<strong>依然运行在公共互联网（Public Internet）之上</strong>。它虽然在国内中转机与境外落地机之间做了数据加密，但数据流在跨越国境时，<strong>依然必须经过中国电信 163 骨干网或联通 169 的公网国际出口路由器</strong>。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          一旦遭遇晚高峰公网海缆拥堵，或者重大管制时期国际出口流量被 GFW 深度包检测（DPI）干扰，伪专线会出现瞬间丢包、延迟从 30ms 暴增至 300ms 甚至直接断流。而真正的 <strong>IEPL 物理裸缆专线</strong>数据直接走二层物理光纤传输，完全不进公网出口，因而具备真正的不受审查与 0 丢包特性。
        </p>
      </div>

      <!-- 6.2 4-Step Reverse Engineering Commands -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          6.2 终端命令行 4 步戳破“伪专线”谎言
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          使用以下开源网络诊断命令，只需 1 分钟即可让虚假专线原形毕露：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <!-- MTR Hop Detection -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">1. MTR 跨境路由跳数检测：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 针对节点域名或 IP 执行路由追踪
mtr -rw -c 50 节点IP</code></pre>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              <strong>判断准则：</strong>真 IEPL 专线在进入深圳/上海机房后，下一跳直接显示香港/东京内网或落地 IP；如果中间出现 <code>202.97.*</code> 或多个公网 IP 跳数，100% 为公网中转伪装。
            </p>
          </div>

          <!-- Jitter Variance -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">2. 晚高峰延迟抖动标准差测试：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 连续发送 1000 个 ICMP 探测包
ping -c 1000 节点IP</code></pre>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              <strong>判断准则：</strong>观察 <code>mdev / stddev</code> 抖动方差。真物理专线受物理介质保护，抖动标准差 &lt; 0.5ms；公网中转因公网抖动，标准差普遍在 15-45ms 之间。
            </p>
          </div>

          <!-- TTL Hop Analysis -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">3. TTL 生存时间逆向递减推算：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># Linux / macOS 查看返回数据包 TTL 值
ping -c 5 节点IP | grep ttl</code></pre>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              <strong>判断准则：</strong>二层数据链路层专线不经过 IP 路由减量，返回的初始 TTL 通常为 64 或 128 减去本地到入口跳数（约 50-60）；伪专线中间嵌套多层公网转发，TTL 损耗异常庞大。
            </p>
          </div>

          <!-- ASN Query -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 space-y-2">
            <span class="font-bold text-text block">4. 落地出口 ASN 资质反查：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 查询当前代理出口的 ASN 自治域
curl https://ipinfo.io/org</code></pre>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              <strong>判断准则：</strong>顶级专线（如光速云）直连 Equinix (AS13335)、HKT、HKBN 等持牌顶级网络；伪专线多显示为廉价小作坊 VPS 云服务商 ASN。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
