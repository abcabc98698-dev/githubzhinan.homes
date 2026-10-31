// scripts/home_monograph/ch7_ai_unlock.js
module.exports = `
  <!-- Chapter 7: AI Model Unlock & Residential IP SOP -->
  <section id="ai-unlock-system" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 07</span>
        <span>·</span>
        <span>AI 风控与原生住宅 IP</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        7. 海外 AI 大模型 (Claude 3.5 / ChatGPT-4o) 原生住宅 IP 解锁体系
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        随着 OpenAI、Anthropic (Claude) 和 Google Gemini 全面收紧全球风控策略，传统的机房代理已经无法正常使用现代 AI 工具。很多用户遭遇的“账号莫名被封”、“对话被强制降级”或“拒绝访问”，其根源均在于出口 IP 的质量缺陷。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 7.1 Modern AI Risk Control Model -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.1 为什么普通数据中心机房 IP 无法稳定使用 Claude 3.5 Sonnet？
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          Anthropic 部署了全球最为苛刻的反欺诈风控引擎（由 Cloudflare Turnstile 与 IPQualityScore 联合驱动）。它不仅仅检测 IP 的地理归属地，更会直接读取 IP 的 <strong>ASN 类型与用途属性</strong>：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <span class="font-bold text-red-600 dark:text-red-400 block mb-1">❌ 广播数据中心 IP (Data Center / Hosting)</span>
            <p class="text-text-secondary leading-relaxed">
              归属于云厂商（如 AWS、DigitalOcean、Vultr、OVH 等）的机房 IP。在风控模型中，机房 IP 被默认标记为“黑客自动化脚本 / 爬虫风险来源”，直接触发“Access Denied”报错，或在登录后 24 小时内直接永久封禁账号（Account Suspended）。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">✅ 商业原生住宅 ISP 落地 (Residential / ISP)</span>
            <p class="text-text-secondary leading-relaxed">
              直接由海外本地一级电信运营商（如香港 HKT、PCCW、新加坡 Singtel、美国 AT&T）分配给居民宽带使用的纯净 IP。在数据库中被归类为真实“家庭宽带”，享有最高的信誉白名单评级，完全免受风控拦截。
            </p>
          </div>
        </div>
      </div>

      <!-- 7.2 IPQS Fraud Score Verification -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.2 IPQS 欺诈评分 (Fraud Score) 判定标准与实验室检测
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          用户可以通过专业风控检测数据库（如 IPQualityScore、Scamalytics）对当前使用的代理节点进行体检。评分区间与风险对应如下：
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-center">
          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <span class="text-emerald-600 dark:text-emerald-400 font-bold text-lg block">0 - 15 分</span>
            <span class="font-bold text-text block mb-1">极度安全 (原生住宅)</span>
            <p class="text-text-secondary text-[11px]">
              光速云核心节点实测水准，Claude 3.5、ChatGPT Plus 丝滑畅联，0 降级风险。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <span class="text-amber-600 dark:text-amber-400 font-bold text-lg block">16 - 65 分</span>
            <span class="font-bold text-text block mb-1">中度风险 (机房清洗)</span>
            <p class="text-text-secondary text-[11px]">
              偶发人机验证（Cloudflare Turnstile 循环点击），可能被限制高级 Canvas 功能。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <span class="text-red-600 dark:text-red-400 font-bold text-lg block">66 - 100 分</span>
            <span class="font-bold text-text block mb-1">高危封禁 (数据中心)</span>
            <p class="text-text-secondary text-[11px]">
              直接阻断访问，登录即提示账号异常封禁，严禁在此类节点上绑定支付信用卡。
            </p>
          </div>
        </div>
      </div>

      <!-- 7.3 SOP for Safe AI Usage -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.3 保障 Claude 3.5 与 ChatGPT 账号绝对安全的 5 大黄金 SOP
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          为了确保您的宝贵对话记录和绑卡账号长期安全，请严格执行以下网络操作规范：
        </p>

        <ol class="space-y-3 font-mono text-xs text-text-secondary list-decimal list-inside">
          <li><strong>固化单一国家与节点出口：</strong>选择一个低欺诈分的固定节点（如光速云香港原生或美国原生），避免在 1 小时内从香港切换到美国、又从美国切换到日本。频繁的跨洲地理漂移是触发 Anthropic 自动化封号的首要诱因。</li>
          <li><strong>强制关闭浏览器 WebRTC 穿透：</strong>WebRTC 协议会绕过常规代理直接向远端服务器发送 STUN 请求，泄漏您真实的境内物理 IP。请在 Chrome / Edge 中安装「WebRTC Control」扩展，将其设置为“Disable WebRTC”。</li>
          <li><strong>清理本地 Cookie 并启用纯净配置文件：</strong>在使用海外 AI 之前，建议在浏览器中创建独立的个人资料（Profile），或使用无痕模式（Incognito），避免与境内登录过的历史身份产生指纹关联。</li>
          <li><strong>禁用恶意的国内翻译或比价插件：</strong>部分国内浏览器插件会在后台静默扫描并注入脚本，破坏浏览器指纹环境的一致性。</li>
          <li><strong>客户端开启 TUN 虚拟网卡接管系统流量：</strong>确保 DNS 解析与所有并发请求百分之百走海外原生节点，杜绝任何本地 DNS 泄漏。</li>
        </ol>
      </div>
    </div>
  </section>
`;
