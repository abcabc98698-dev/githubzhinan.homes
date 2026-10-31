// scripts/faq_monograph/ch3_ai_streaming.js
module.exports = `
  <!-- Chapter 3: Overseas AI & Streaming Media Unblocking (Q21-Q30) -->
  <section id="faq-ai-streaming" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-xs font-semibold mb-2">
        <span>Part 03</span>
        <span>·</span>
        <span>海外 AI 与流媒体风控解锁</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        3. ChatGPT、Claude、Gemini 与流媒体风控防封篇 (Q21 - Q30)
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        深度解密大模型与流媒体平台的反欺诈防御矩阵（WAF、ASN 机房识别、WebRTC 穿透与地理围栏），助您构建坚不可摧的合规生产环境。
      </p>
    </div>

    <div class="space-y-4">
      <!-- Q21 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all" open>
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q21. 访问 ChatGPT 提示“Access Denied 1020”或“Sorry, you have been blocked”如何彻底根除？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是 Cloudflare 边缘 WAF 防火墙对恶意机房爬虫与批量账号行为执行的最高级别拦截阻断：</p>
          <p><strong>根除排查三步法：</strong></p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>切换住宅原生 IP 节点：</strong>廉价数据中心（如 DigitalOcean、Vultr、AWS 机房）由于被成千上万黑客与刷量脚本共用，其整个 IP 段在 Cloudflare 威胁情报库中的信誉分低于 10 分。必须换用如光速云等提供当地真实住宅 ISP 广播的专用节点。</li>
            <li><strong>彻底清理本地浏览器指纹：</strong>在 Chrome 中按 <code>F12</code> 打开开发者工具，进入「Application」-「Storage」，点击「Clear site data」彻底清空本地缓存的旧设备指纹。</li>
            <li><strong>防范 DNS 泄露：</strong>确保客户端未开启系统本地 DNS 查询，关闭浏览器的“安全 DNS”托管，开启 Fake-IP 模式。</li>
          </ol>
        </div>
      </details>

      <!-- Q22 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q22. Claude 3.5 Sonnet 注册与对话时账号被批量封禁（Your account has been disabled）的根本原因是什么？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>Anthropic（Claude 母公司）拥有全硅谷最为严苛甚至激进的跨维度风控引擎。账号被封通常是因为触发了<strong>“跨维度时空悖论”</strong>：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>节点跳跃导致的时空冲突：</strong>如果在 10 分钟前还在香港节点访问，突然切换到了美国洛杉矶节点，系统判定 10 分钟内物理不可能跨越太平洋，瞬间将账号送进风控黑名单。</li>
            <li><strong>浏览器环境与语言泄露：</strong>系统语言为中文（zh-CN）、时区为 GMT+8，但节点走的是美国西海岸，且未关闭 WebRTC 真实 IPv6 暴露。</li>
            <li><strong>防封黄金法则：</strong>专号专线！为 Claude 固定使用美国或英国的同一个原生专线节点；在浏览器新建独立的 Chrome Profile，将系统时区与语言调整为目标节点一致，严禁中途频繁切换节点。</li>
          </ul>
        </div>
      </details>

      <!-- Q23 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q23. Google Gemini 提示“Country not supported（您所在的国家/地区暂不支持该服务）”如何解决？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>Google Gemini 对地理围栏的判断不仅基于代理出口 IP，还深度联动了用户的 <strong>Google 账号常驻服务归属地（Play 商店与 Google Pay 账单归属区）</strong>：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>千万不要使用香港节点：</strong>受特定政策影响，Google 官方明确不在香港地区上线 Gemini 服务。访问 Gemini 必须且只能使用台湾、新加坡、日本或美国节点。</li>
            <li><strong>路由规则分流补漏：</strong>检查本地规则，确保 <code>bard.google.com</code>、<code>gemini.google.com</code> 与 <code>generativelanguage.googleapis.com</code> 均走支持地区的代理组，而不是直连或香港。</li>
          </ol>
        </div>
      </details>

      <!-- Q24 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q24. 为什么打开 Netflix（网飞）只能搜到自制剧（如《怪奇物语》），搜不到当地版权剧？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是 Netflix 对“识别出的商业机房代理”所采取的折中惩罚策略（非直接封号，而是降级限制）：</p>
          <p>自制剧（Netflix Originals）在全球享有 100% 独家全球播放权，因此 Netflix 允许任何 IP 观看；但非自制版权剧（如各好莱坞影业授权、日本独家番剧、华语经典电视剧）受严格的版权地域合同限制。当 Netflix 的风控系统检测到您的 IP 属于广播机房或被多人并发共享时，会自动隐藏全部非自制版权剧！</p>
          <p><strong>解决办法：</strong>必须切换支持 Netflix 非自制剧完整解锁的原生节点，通过 DNS 流媒体分流（SNI Proxy 解锁）实现原生住宅 IP 反向穿透。</p>
        </div>
      </details>

      <!-- Q25 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q25. 访问 Disney+ 提示“Error 83”或一直卡在深蓝色背景加载圈转圈无法播放怎么办？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>Error 83</strong> 是 Disney+ 针对“不兼容设备或被黑名单拦截的代理 IP”抛出的通用错误码。常见成因：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>IPv6 泄露：</strong>Disney+ 优先通过 IPv6 发起鉴权，而本地运营商分配的国内公网 IPv6 直接绕过了客户端代理向 Disney+ 握手，瞬间触发地域限制。必须在路由器或客户端中全局关闭 IPv6。</li>
            <li><strong>DRM 硬件级加密认证失败：</strong>在 PC 端部分未开启硬件加速的浏览器或精简版 Windows 系统上，Widevine CDM 模块损坏。建议使用官方认证的 Chrome 或 Edge 最新版，并确保开启“受保护内容播放”权限。</li>
          </ul>
        </div>
      </details>

      <!-- Q26 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q26. TikTok 跨境电商直播与发视频持续 0 播放（Zero Views）的技术内幕是什么？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>字节跳动拥有全球最顶尖的移动终端反欺诈雷达，对国内出海用户的设备环境检测包含多重闭环：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>SIM 卡硬件识别：</strong>插有国内移动/联通/电信 SIM 卡的手机，App 启动阶段即读取 MCC/MNC 码，直接静默标记并打入冷宫。</li>
            <li><strong>机房 IP 批量标记：</strong>若使用普通廉价机场节点，该 IP 段内有成千上万个刷量脚本，新账号发布的内容在进入推荐池前直接被初审拦截。</li>
            <li><strong>标准出海环境规范：</strong>海外版无锁 iPhone/Android（拔出国内卡）+ 开启全局原生住宅专线 + 系统底层关闭定位（GPS）+ 系统时区与语言改为美区 + 开启独占原生固定住宅 IP。</li>
          </ol>
        </div>
      </details>

      <!-- Q27 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q27. 什么是 WebRTC IP 泄露？它如何在代理完全开启的情况下偷偷出卖您的真实地理位置？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>WebRTC（Web Real-Time Communication）</strong>是浏览器原生用于音视频实时通信的底层协议。为了实现超低延时的点对点（P2P）连接，WebRTC 具备穿透普通浏览器代理、直接向系统网卡查询本地公网/局域网真实 IP 的特权接口（STUN 穿透）。</p>
          <p>这意味着即使您的浏览器已经挂了美国代理，恶意或高风控网站只需嵌入一段简单的 JavaScript 代码，即可通过 WebRTC 轻松读取并捕获您本地真实的中国电信/联通公网 IP 地址！</p>
          <p><strong>防护措施：</strong>在 Chrome 安装「WebRTC Control」扩展，彻底禁用 WebRTC，或使用 Clash Verge Rev 的 TUN 虚拟网卡模式接管系统全局网络协议栈。</p>
        </div>
      </details>

      <!-- Q28 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q28. 为什么登录海外银行（如 Wise、Chase）或 PayPal 时，会被直接判定高危并冻结账户？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>金融机构的反洗钱与反信用卡盗刷系统（AML / Fraud Detection）将以下特征列为最高预警：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>TOR 出口节点与公共黑产机房：</strong>许多廉价节点在反欺诈数据库（如 MaxMind、ThreatMetrix）中被标记为“High Risk Proxy / Tor Exit”。登录金融系统瞬间触发安全熔断机制。</li>
            <li><strong>频繁更换国家出口：</strong>今天在英国节点转账，明天在美国节点收汇，后天在新加坡节点登录，风控模型判定该账户疑似被异地盗用。</li>
            <li><strong>铁律：</strong>对所有金融账户设置专门的固定规则，绑定到同一条极度纯净的长青专线（如光速云），切忌使用公共免费节点。</li>
          </ul>
        </div>
      </details>

      <!-- Q29 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q29. 如何客观、量化地验证当前节点的出口 IP 是否为纯净的海外住宅原生 IP？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>不要相信商家的口头宣传，使用以下三个全球权威数据库交叉核验：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>IPinfo.io：</strong>输入当前节点的出口 IP，查看 <code>Type</code> 字段。如果是 <code>isp</code> 或 <code>hosting</code>？只有标明为 <code>isp</code> 才是真实的家庭宽带住宅原生 IP。</li>
            <li><strong>Scamalytics：</strong>输入 IP 查询欺诈分（Fraud Score）。合格的纯净住宅节点分数应严格低于 10 分（低风险绿色）；若超过 40 分，说明该 IP 曾参与过垃圾流量。</li>
            <li><strong>BrowserLeaks IP Test：</strong>检查 DNS 泄漏与 WebRTC 泄漏，确认没有泄露出任何中国境内的 IP 痕迹。</li>
          </ol>
        </div>
      </details>

      <!-- Q30 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q30. 为什么香港节点无法直接使用绝大多数海外前沿 AI？亚太地区有哪些最佳平替？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>受各 AI 巨头法务与合规政策限制，OpenAI、Google（Gemini）等均未向中国香港地区开放正式服务权限，若直接用香港 IP 访问会直接返回“Unsupported Country”。</p>
          <p><strong>最佳亚太平替推荐方案：</strong></p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>首选新加坡（SG）：</strong>网络环境全维度开放，延迟低至 40-55ms，完美原生支持 ChatGPT、Claude、Gemini、Midjourney 与所有海外开发 API。</li>
            <li><strong>次选台湾（TW）：</strong>与大陆同根同源语系，支持 ChatGPT 与 Claude，延迟低至 35-48ms。</li>
            <li><strong>备选日本（JP）：</strong>骨干光缆直达，延迟稳定在 50ms 左右，网络吞吐量充沛。</li>
          </ul>
        </div>
      </details>
    </div>
  </section>
`;
