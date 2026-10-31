// scripts/free_monograph/ch8_security_hardening.js
module.exports = `
  <!-- Chapter 8: Security Hardening & Privacy Isolation SOP -->
  <section id="security-hardening" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 08</span>
        <span>·</span>
        <span>终端隐私安全加固</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        8. 免费与试用环境下的终端隐私加固与防泄漏 SOP
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        如果您因为临时应急不得不使用未经时间检验的免费节点或初创试用机场，必须严格遵循以下四重终端安全隔离防护规范，将设备遭受黑客嗅探与勒索木马的风险降至零：
      </p>
    </div>

    <div class="space-y-6">
      <!-- Step 1: Sandbox & Profiles -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.1 建立独立应用容器：浏览器 Profile 深度物理隔离
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          绝不能直接在您平时登录了 Google 个人主账号、微信网页版或网银的主浏览器中连接未知公共免费节点！因为恶意节点可以在您浏览网页时嗅探已保存的 Cookie 或注入虚假登录框。
        </p>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs space-y-2 text-text-secondary leading-relaxed">
          <strong class="text-emerald-600 dark:text-emerald-400 block text-sm">💡 浏览器隔离操作标准：</strong>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li>在 Chrome 或 Edge 右上角点击头像，选择「添加新个人资料（Add Profile）」，创建一个名为 <code>Guest-Sandbox</code> 的全新隔离窗口。</li>
            <li>在隔离窗口中，不登录任何个人核心邮箱，不同步任何密码与历史书签。</li>
            <li>在该隔离窗口中仅用于临时查阅目标技术文档或外文文献，查阅完毕后一键彻底关闭。</li>
          </ol>
        </div>
      </div>

      <!-- Step 2: WebRTC & IPv6 Disabling -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.2 彻底切断 WebRTC 与 IPv6 真实 IP 泄漏后门
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          如我们在技术百科中所揭示的，现代浏览器默认启用的 WebRTC 协议具备绕过普通代理、直接向海外网站出卖您本地真实国内宽带 IPv4/IPv6 地址的特权：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block text-sm">WebRTC 防泄漏插件</strong>
            <p class="text-text-secondary leading-relaxed">
              在浏览器扩展商店中搜索安装「WebRTC Control」，将其状态切换为蓝色/红色阻止模式（Disable WebRTC），使任何网站的 STUN 探测均返回假 IP 或空值。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block text-sm">禁用系统 IPv6 优先解析</strong>
            <p class="text-text-secondary leading-relaxed">
              在客户端网络适配器中取消勾选「Internet 协议版本 6 (TCP/IPv6)」，防止国内电信/联通分配的公网 IPv6 流量未经代理加密直接裸奔出境。
            </p>
          </div>
        </div>
      </div>

      <!-- Step 3: Strict No-Login Rule -->
      <div class="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-red-600 dark:text-red-400">
          ⚠️ 免费节点网络环境下的绝对红线禁区
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          只要您当前处于公共免费节点或未知小微机场的连接状态中，以下操作属于<strong>绝对严禁执行的自杀式高危行为</strong>：
        </p>
        <ul class="list-disc pl-5 font-mono text-xs text-text-secondary space-y-2 leading-relaxed">
          <li><strong>绝对禁止登录海外银行、PayPal、Stripe 或加密货币交易所：</strong>公共节点的黑产特征会被金融系统直接标记，不仅可能导致资金被冻结 180 天，还可能被中间人嗅探记录二次验证码。</li>
          <li><strong>绝对禁止输入任何个人常用密码：</strong>很多黑客蜜罐会针对 HTTP 登录表单以及部分未开启 HSTS 的老旧网站实施降级劫持，明文抓取账号密码。</li>
          <li><strong>绝对禁止下载运行任何 <code>.exe</code>、<code>.dmg</code>、<code>.bat</code> 二进制可执行文件：</strong>黑客节点可以通过 DNS 劫持将常用软件的官方下载链接替换为捆绑了勒索木马或远控后门的恶意安装包。</li>
        </ul>
      </div>
    </div>
  </section>
`;
