// scripts/home_monograph/ch9_clients_tun.js
module.exports = `
  <!-- Chapter 9: 6-Platform Clients & TUN Mode Guide -->
  <section id="client-matrix-guide" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 09</span>
        <span>·</span>
        <span>客户端全景生态</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        9. 全平台客户端生态矩阵与 TUN 虚拟网卡排障 SOP
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        客户端是连接用户设备与跨境专线的桥梁。选择一个活跃维护、内核先进的客户端，不仅能避免安全漏洞，还能显著降低设备耗电发热并实现全系统无感代理。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 9.1 Platform Recommendation Grid -->
      <div class="rounded-3xl border border-border bg-gradient-to-b from-surface to-bg-secondary/30 p-6 sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-text">
              6 大平台主流客户端选型推荐总览
            </h3>
            <p class="text-xs text-text-secondary font-mono mt-1">
              基于 Mihomo (Clash.Meta) 与 Sing-box 新一代内核体系构建
            </p>
          </div>
          <a
            href="/clients/"
            class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs font-mono transition-colors no-underline"
          >
            直达客户端官方下载中心 →
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-center mb-6">
          <a href="/clients/#platform-windows" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">🪟</span>
            <span class="text-xs font-bold text-text block">Windows</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">首选 Verge Rev</span>
            <span class="text-[10px] text-text-secondary">内核: Mihomo</span>
          </a>

          <a href="/clients/#platform-macos" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">🍎</span>
            <span class="text-xs font-bold text-text block">macOS</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">Verge / Surge</span>
            <span class="text-[10px] text-text-secondary">支持 M 系列原生</span>
          </a>

          <a href="/clients/#platform-ios" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">📱</span>
            <span class="text-xs font-bold text-text block">iOS / iPad</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">Shadowrocket</span>
            <span class="text-[10px] text-text-secondary">美区 App Store</span>
          </a>

          <a href="/clients/#platform-android" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">🤖</span>
            <span class="text-xs font-bold text-text block">Android</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">Sing-box / Meta</span>
            <span class="text-[10px] text-text-secondary">开源纯净无广告</span>
          </a>

          <a href="/clients/#platform-linux" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">🐧</span>
            <span class="text-xs font-bold text-text block">Linux</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">v2rayA / Verge</span>
            <span class="text-[10px] text-text-secondary">支持 WebUI 管理</span>
          </a>

          <a href="/clients/#platform-openwrt" class="p-3.5 rounded-xl border border-border bg-surface hover:border-blue-500/50 transition-all no-underline block">
            <span class="text-2xl mb-1 block">🌐</span>
            <span class="text-xs font-bold text-text block">OpenWrt</span>
            <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">OpenClash</span>
            <span class="text-[10px] text-text-secondary">旁路由全局分流</span>
          </a>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 font-mono text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          ⚠️ <strong>安全警示：请彻底卸载停更的旧版 Clash for Windows (CFW)！</strong> 原作者早已于 2023 年底停更并删库。网络上流传的大量二次打包汉化版被植入了木马后门与挖矿木马，且旧版内核存在已公开的远程代码执行漏洞（RCE）。请认准社区唯一官方继承者 <strong>Clash Verge Rev</strong>。
        </div>
      </div>

      <!-- 9.2 TUN Mode Deep Dive -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          9.2 什么是 TUN 虚拟网卡模式？为什么它是解决命令行与联机游戏的核心？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          许多新手在开启代理后发现：“为什么浏览器能看视频，但在 Steam 里联机游戏延迟依然很高？为什么在终端里打命令还是连不上？”
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          这是因为传统的<strong>“系统代理”（System Proxy）</strong>仅仅是操作系统在注册表或系统网络设置里暴露的一个 HTTP/SOCKS 端口。它只能被主动遵循系统代理 API 的软件（如 Chrome、Firefox）读取。绝大多数终端命令行工具、网络游戏客户端、以及底层 UDP 通信应用，会直接无视系统代理，向路由器网关发起直连。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          而 <strong>TUN 模式（虚拟网络网卡）</strong>会在操作系统中安装一个虚拟的网络适配器驱动。它在操作系统的网络栈（Network Stack）中将整台设备的所有入站与出站 IP 报文进行<strong>底层透明劫持</strong>，无论应用是否支持代理协议，所有流量都会无感重定向至代理内核进行路由分流。
        </p>

        <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 font-mono text-xs text-text-secondary leading-relaxed">
          💡 <strong>开启建议：</strong>在 Clash Verge Rev 的设置界面中，找到「TUN 模式（TUN Mode）」，点击安装服务模式（Service Mode），随后开启 TUN 模式开关。开启后，无需再手动配置任何终端环境变量，整台电脑的所有软件即可无缝享受科学加速。
        </div>
      </div>

      <!-- 9.3 OpenWrt Router Deployment SOP -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          9.3 OpenWrt 旁路由部署与全屋智能家电无感分流 SOP
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          对于拥有 Apple TV、海外游戏主机（PS5/Switch）或多台研发笔记本的家庭与工作室，旁路由（Side Gateway）是实现全网无感科学加速的终极方案：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <span class="font-bold text-text block mb-1">Step 1. 旁路由 IP 配置：</span>
            <p class="text-text-secondary leading-relaxed">
              将 OpenWrt 设备的 LAN 口静态 IP 设为主路由同网段（如主路由为 <code>192.168.1.1</code>，旁路由设为 <code>192.168.1.2</code>），网关和 DNS 填入主路由 IP。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <span class="font-bold text-text block mb-1">Step 2. 部署 OpenClash 内核：</span>
            <p class="text-text-secondary leading-relaxed">
              在 OpenWrt 软件包中安装 OpenClash，运行模式选择「Fake-IP (TUN 混合模式)」，并导入光速云提供的 Clash 通用订阅链接。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <span class="font-bold text-text block mb-1">Step 3. 终端设备网关指向：</span>
            <p class="text-text-secondary leading-relaxed">
              在需要加速的电脑或电视上，手动将「默认网关」与「首选 DNS」修改为旁路由 IP（<code>192.168.1.2</code>），无需安装任何客户端即可全自动科学分流。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
