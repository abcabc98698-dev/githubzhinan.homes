// scripts/home_monograph/ch5_physical_topology.js
module.exports = `
  <!-- Chapter 5: Physical Dedicated Line Topology Deep Dive -->
  <section id="physical-topology" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 05</span>
        <span>·</span>
        <span>网络工程底层拓扑</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        5. 物理传输拓扑与跨境骨干专线技术解密
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        绝大多数普通用户常把“翻墙”理解为一种简单的软件配置，却忽视了决定网络质量 90% 的物理传输介质。为什么真正的物理专线能够在敏感时期岿然不动？为什么公网中转在晚高峰必然丢包？本章从光纤物理层与二层网络协议栈为您解密。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 5.1 Layer 2 Isolation vs Public Internet -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          5.1 二层以太网硬隔离 (Layer 2) 与公网三层路由 (Layer 3) 的本质鸿沟
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          公网中转或普通直连节点，数据包是通过公网三层（Layer 3 IP 网络）跨国路由转发的。这意味着数据包必须经过中国电信 163 骨干网、联通 169 或移动 CMI 的公网国际出口路由器，这些路由器部署了深度报文检测系统（DPI）。在晚高峰或敏感时期，公网国际出口处于严重过载状态，运营商会对代理流量执行暴力丢包与 TCP 阻断（RST）。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          而 <strong>IEPL（International Ethernet Private Line，国际以太网私有专线）</strong>与 <strong>IPLC（国际点对点租赁电路）</strong>属于完全不同的电信级产物。它采用基于 SDH/OTN（光传送网）的<strong>二层数据链路层物理硬隔离管道</strong>。用户的数据帧在境内入口机房（如深圳南山数据中心）直接被封装进入物理光纤专线通道，点对点直达境外机房（如香港 Equinix HK2），<strong>全程完全不经过公网国际网关与 GFW 监测节点</strong>。这就是物理专线能够实现 0% 丢包、0 封锁与毫秒级低延迟的底层物理原理。
        </p>

        <!-- Technical Topology Flowchart -->
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs leading-relaxed space-y-3">
          <div class="text-text font-bold">📡 数据跨境物理流转拓扑对比：</div>
          <div class="p-3 rounded-lg border border-red-500/20 bg-red-500/5 text-text-secondary">
            <span class="text-red-600 dark:text-red-400 font-bold block mb-1">❌ 普通公网中转模式（易被墙、高峰卡顿）：</span>
            本地客户端 ➔ 境内公网跳数 (10-15跳) ➔ 国际出口 GFW (DPI 审查/限速丢包) ➔ 公网海底光缆 ➔ 境外机房 ➔ 目标网站
          </div>
          <div class="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-text-secondary">
            <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">✅ 光速云 IEPL 物理双专线架构（物理隔离、0丢包）：</span>
            本地客户端 ➔ BGP Anycast 极速直达境内入口 ➔ <strong>【二层物理裸纤专线管道 · 绕过 GFW】</strong> ➔ Equinix HK2 对等互联 ➔ 目标网站
          </div>
        </div>
      </div>

      <!-- 5.2 Speed of Light Limit & Latency Physics -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          5.2 光纤光速物理极限测算与真实时延基准
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          许多网络营销号声称“跨国零延迟”，这在物理学上是不可能的。光在石英玻璃光纤中的折射率约为 $n \\approx 1.468$，因此光在光纤中的传播速度约为：
        </p>
        <div class="p-3 rounded-xl bg-bg-secondary font-mono text-center text-sm font-bold text-emerald-600 dark:text-emerald-400">
          v = c / n ≈ 300,000 km/s / 1.468 ≈ 204,360 km/s (约 20.4 万公里/秒)
        </div>
        <p class="text-sm text-text-secondary leading-relaxed">
          根据单程物理时延公式 t = d / v，以及往返时延 RTT = 2 × t，我们可以计算出各大陆地专线与海缆的物理理论极限下限：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-surface">
            <span class="font-bold text-text block mb-1">深港专线 (深圳 ➔ 香港)</span>
            <span class="text-text-secondary block">物理光缆距离: 约 40 km</span>
            <span class="text-text-secondary block">理论双向光速时延: 0.39 ms</span>
            <strong class="text-emerald-600 dark:text-emerald-400 block mt-2 text-sm">实测 RTT: 2 - 5 ms</strong>
            <span class="text-[10px] text-text-secondary">包含光模块与交换机三层转发</span>
          </div>

          <div class="p-4 rounded-xl border border-border bg-surface">
            <span class="font-bold text-text block mb-1">沪日专线 (上海 ➔ 东京)</span>
            <span class="text-text-secondary block">物理海缆距离: 约 1,800 km</span>
            <span class="text-text-secondary block">理论双向光速时延: 17.6 ms</span>
            <strong class="text-emerald-600 dark:text-emerald-400 block mt-2 text-sm">实测 RTT: 22 - 26 ms</strong>
            <span class="text-[10px] text-text-secondary">经南汇海缆登陆站直出日本</span>
          </div>

          <div class="p-4 rounded-xl border border-border bg-surface">
            <span class="font-bold text-text block mb-1">中美直连 (香港 ➔ 洛杉矶)</span>
            <span class="text-text-secondary block">物理跨太平洋海缆: 约 11,500 km</span>
            <span class="text-text-secondary block">理论双向光速时延: 112.5 ms</span>
            <strong class="text-emerald-600 dark:text-emerald-400 block mt-2 text-sm">实测 RTT: 135 - 148 ms</strong>
            <span class="text-[10px] text-text-secondary">经跨太平洋 NCP/FASTER 骨干网</span>
          </div>
        </div>
      </div>

      <!-- 5.3 Equinix HK2 & Disaster Redundancy -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          5.3 Equinix HK2 双机房热备与 BGP Anycast 智能接入架构
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          以第一梯队旗舰品牌光速云为例，其核心落地节点部署在香港两大顶级通信中枢——<strong>Equinix HK2 与柴湾 Mega-i 数据中心</strong>。两大机房之间通过 100Gbps 双路暗光纤建立环网直连（Ring Topology），并与 Google Global Cache (GGC)、Cloudflare CDN、Microsoft Azure 完成本地公网交换（HKIX 对等互联）。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          在境内接入侧，系统采用 <strong>BGP Anycast 多入口智能调度</strong>。无论用户身处华南（深圳入口）、华东（上海入口）还是华北（北京入口），DNS 均会根据用户所在的运营商（电信/联通/移动）以毫秒级精度匹配最近的物理机房，消除跨省网络绕路带来的额外 20-40ms 延迟损耗。
        </p>
      </div>
    </div>
  </section>
`;
