// scripts/home_monograph/ch6_protocols.js
module.exports = `
  <!-- Chapter 6: Protocol Evolution & VLESS Zero-Copy -->
  <section id="protocol-evolution" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 06</span>
        <span>·</span>
        <span>加密协议与抗审查</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        6. 新一代网络代理协议深度演进与技术解析
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        除了物理专线链路，数据传输协议决定了通信的隐蔽性、握手延迟与设备能耗。从早期脆弱的对称加密，到伪装 TLS，再到现代基于 Reality 的零证书反探测，协议层正在经历一场划时代的自我革命。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 6.1 Protocol Comparison Matrix -->
      <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table aria-label="主流代理协议技术对比表" class="w-full text-left border-collapse text-xs font-mono min-w-[700px]">
          <thead>
            <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
              <th class="p-3.5" scope="col">协议名称</th>
              <th class="p-3.5" scope="col">技术实现基石</th>
              <th class="p-3.5" scope="col">抗审查探测能力</th>
              <th class="p-3.5" scope="col">首次握手开销</th>
              <th class="p-3.5" scope="col">客户端 CPU 负荷</th>
              <th class="p-3.5" scope="col">2026 适用评价</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/60">
            <tr class="hover:bg-bg-secondary/40">
              <td class="p-3.5 font-bold text-text">Shadowsocks (SS)</td>
              <td class="p-3.5 text-text">流密码 / AEAD 对称加密</td>
              <td class="p-3.5 text-amber-600 dark:text-amber-400">弱 · 易被特征识别</td>
              <td class="p-3.5 text-text">1 RTT</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400">极轻量</td>
              <td class="p-3.5 text-text-secondary">仅适合在物理专线内跑，公网直连极易被封</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40">
              <td class="p-3.5 font-bold text-text">Trojan</td>
              <td class="p-3.5 text-text">标准 TLS 1.3 仿冒 HTTPS</td>
              <td class="p-3.5 text-text">中等 · 需自建证书</td>
              <td class="p-3.5 text-text">2 - 3 RTT (重握手)</td>
              <td class="p-3.5 text-text">中等</td>
              <td class="p-3.5 text-text-secondary">兼容性好，但证书易被针对性主动探测阻断</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40 bg-emerald-500/5">
              <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">VLESS-Reality</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">借用大厂 TLS 证书 + 零拷贝</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">极强 · 彻底阻断主动探测</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">0-RTT 极速握手</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">极低 (支持零拷贝)</td>
              <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">2026 最优协议 · 旗舰机场标配首选</td>
            </tr>
            <tr class="hover:bg-bg-secondary/40">
              <td class="p-3.5 font-bold text-text">Hysteria 2 (歇斯底里)</td>
              <td class="p-3.5 text-text">魔改 QUIC / UDP 拥塞控制</td>
              <td class="p-3.5 text-text">较强 · 伪装 HTTP/3</td>
              <td class="p-3.5 text-text">0-1 RTT</td>
              <td class="p-3.5 text-amber-600 dark:text-amber-400">较高 (UDP 计算大)</td>
              <td class="p-3.5 text-text-secondary">劣质丢包网络表现优异，但易被运营商 UDP QoS 限速</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 6.2 Why Reality is the Ultimate Anti-Probing Tech -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          6.2 为什么 VLESS-Reality 是当前最抗审查的传输协议？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          过去几年，网络审查系统广泛引入了<strong>“主动探测”（Active Probing）</strong>机制。当防火墙发现某个境外 IP 频繁接收未知 TLS 流量时，会主动向该 IP 发起模拟 HTTPS 请求。如果目标服务器返回自建签名的野鸡证书，或直接拒绝握手，防火墙就会将其识别为代理服务端并执行 IP 阻断。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          <strong>VLESS-Reality</strong> 彻底重构了握手逻辑：它不需要服务端购买或申请任何证书，而是直接将外部目标伪装为全球合法的境外大型网站（如 <code>www.apple.com</code> 或 <code>aws.amazon.com</code>）。当审查系统发起主动探测时，Reality 服务端会原封不动地将流量<strong>重定向（Fallback）</strong>至真正的苹果或亚马逊服务器，并返回 100% 正规的官方证书，使探测系统完全判定其为合法国际站点。只有持有专属私钥的客户端发起握手时，才能解锁真实的代理隧道通道。
        </p>
      </div>

      <!-- 6.3 0-RTT and Zero-Copy Advantages -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          6.3 0-RTT 往返时延消减与移动端零拷贝 (Zero-Copy) 节能机制
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          在网络交互中，不仅“传输速率”重要，“首包往返延迟”更决定了人机交互的流畅度：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">0-RTT 握手消减：</strong>
            <p class="text-text-secondary leading-relaxed">
              传统的 TLS 代理建立连接需要 2 至 3 次握手（额外消耗 60-120ms 延时）。VLESS 0-RTT 允许客户端在首个 TCP 数据包中直接附加认证载荷，使终端命令行 API 请求与网页跳转直接进入数据传输阶段，主观感受“即点即开”。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">Zero-Copy (零拷贝) 节能：</strong>
            <p class="text-text-secondary leading-relaxed">
              数据帧无需在操作系统内核空间与用户空间之间进行多次内存搬运和加解密循环，直接在网卡缓冲区通过 DMA（直接内存访问）完成流水线转发。实测使 iPhone 与 Android 设备连续代理时的发热降低 35%，电池续航显著延长。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
