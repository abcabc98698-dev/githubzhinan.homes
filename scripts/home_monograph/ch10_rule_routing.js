// scripts/home_monograph/ch10_rule_routing.js
module.exports = `
  <!-- Chapter 10: Rule Routing & DNS Poisoning Defense -->
  <section id="rule-routing-dns" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 10</span>
        <span>·</span>
        <span>分流规则与 DNS 治理</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        10. 科学分流规则 (Rule Routing) 与 DNS 污染治理工程
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        一个成熟的代理系统不仅要“能连上”，更要做到“智能分流、精准避震”。不合理的分流配置会导致国内应用变慢、宝贵专线流量浪费，甚至触发国内银行金融账户的风控冻结。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 10.1 Why Avoid Global Mode -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          10.1 为什么日常上网严禁长期开启“全局代理 (Global Mode)”？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          新手最容易犯的错误就是为了省事直接选择全局模式（Global）。在全局模式下，您电脑或手机上的<strong>所有网络请求（包括微信、百度、网易云音乐、淘宝、招商银行 APP）都会被强制绕行境外专线节点</strong>：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <span class="font-bold text-red-600 dark:text-red-400 block mb-1">❌ 长期开启全局代理的恶果：</span>
            <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
              <li><strong>流量高速空耗：</strong>国内刷抖音、看 B 站的高清视频流量直接消耗昂贵的专线配额，几十 GB 流量几天见底。</li>
              <li><strong>金融风控冻结：</strong>国内银行与微信/支付宝检测到登录 IP 突变为境外机房，会强制要求重新人脸认证或冻结交易。</li>
              <li><strong>访问国内延迟暴增：</strong>原本 10ms 直连的国内服务器，被强制绕道香港或美国再折返回来，延迟飙升至 150-300ms。</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">✅ 启用「规则分流模式 (Rule)」的最佳实践：</span>
            <ul class="space-y-1.5 text-text-secondary list-disc list-inside">
              <li><strong>国内服务直连 (DIRECT)：</strong>微信、B站、知乎等完全走本地宽带直连，速度不受任何影响，0 流量消耗。</li>
              <li><strong>海外受限走代理 (PROXY)：</strong>Google、GitHub、Claude、Netflix 等自动精准走低延迟专线加速。</li>
              <li><strong>广告追踪直接丢弃 (REJECT)：</strong>各类弹窗广告与隐私埋点在本地网卡直接阻断，页面秒开无干扰。</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 10.2 Fake-IP vs Redir-Host -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          10.2 Fake-IP 模式如何从物理层杜绝 DNS 污染与 DNS 泄漏？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          DNS 污染是长城防火墙（GFW）最基础也是最普遍的拦截手段。当客户端向公网 DNS 发起未加密的 UDP 53 解析请求时，审查网关会先于真实服务器伪造一个错误的 IP 地址（如 <code>127.0.0.1</code> 或虚假海外 IP）抢答返回给客户端。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          现代代理客户端（如 Clash Verge Rev 与 Sing-box）通过 <strong>Fake-IP 机制</strong>彻底解决了此难题：
        </p>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs leading-relaxed space-y-2">
          <p>1. 当浏览器请求 <code>github.com</code> 时，内核拦截此 DNS 请求，直接在本地以 0ms 延迟返回一个保留网段的虚拟 IP（例如 <code>198.18.0.12</code>）。</p>
          <p>2. 浏览器立即向 <code>198.18.0.12</code> 发起 TCP 连接，内核在内存映射表中逆向查找出该连接对应的真实域名是 <code>github.com</code>。</p>
          <p>3. 内核将原始域名直接封装进代理报文，发送至光速云境外专线落地节点；由境外落地节点在本地无污染环境下执行权威 DNS 解析与目标建立握手。</p>
          <p><strong>结论：</strong>本地网络全程不向境内公网发送任何真实的 DNS 查询报文，DNS 泄漏率为 0，解析延迟降为 0ms，彻底终结 DNS 污染。</p>
        </div>
      </div>
    </div>
  </section>
`;
