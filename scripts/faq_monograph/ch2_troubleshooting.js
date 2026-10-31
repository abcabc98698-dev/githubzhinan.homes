// scripts/faq_monograph/ch2_troubleshooting.js
module.exports = `
  <!-- Chapter 2: Troubleshooting & Timeouts (Q11-Q20) -->
  <section id="faq-troubleshooting" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-semibold mb-2">
        <span>Part 02</span>
        <span>·</span>
        <span>故障诊断与超时排障</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        2. 网络连接异常、超时与排障排错篇 (Q11 - Q20)
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        针对日常使用中最令人抓狂的“绿灯打不开网页”、“时钟偏差握手失败”、“DNS 污染断网”以及“订阅更新报错”提供工业级排查 SOP。
      </p>
    </div>

    <div class="space-y-4">
      <!-- Q11 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all" open>
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q11. 为什么节点测速显示绿色低延时，但浏览器完全打不开任何 Google 或 YouTube 网页？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是跨境网络初学者最常见的“假死”误区：<strong>客户端的“延迟测速”默认只测本地到境内中转服务器的 TCP/ICMP 握手时间，根本不代表整条跨境链路已通！</strong></p>
          <p><strong>真实原因与快速排查四步法：</strong></p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>落地端失联：</strong>中转机活着，但境外的落地节点由于 IP 被墙或欠费已经关机。解决办法：切换到同机场的其他国家节点测试。</li>
            <li><strong>系统时间偏差（高发！）：</strong>电脑或手机时钟与国际标准时间（NTP）偏差超过 90 秒，加密协议拒绝握手。解决办法：进入系统设置，关闭再重新打开“自动设置时间”同步时钟。</li>
            <li><strong>本地系统代理端口未生效：</strong>某些安全软件（如 360、火绒）关闭了 Windows 系统的代理注册表。检查客户端中系统代理（System Proxy）开关是否亮起，或手动改用 TUN 虚拟网卡模式。</li>
            <li><strong>DNS 解析崩溃：</strong>本地网络把外网域名解析到了污染 IP。在客户端配置中开启 Fake-IP 与 DoH 模式。</li>
          </ol>
        </div>
      </details>

      <!-- Q12 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q12. 浏览器频繁提示“Connection Timed Out（连接超时）”与“Connection Reset（连接被重置）”各代表什么？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>从网络报文交互层面对比两者本质：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Connection Timed Out（连接超时，错误码 ERR_CONNECTION_TIMED_OUT）：</strong>客户端发送的 TCP SYN 同步握手报文在半路上被直接“静默丢弃（Drop）”或彻底物理阻断，超过 15-30 秒未收到任何应答。这说明中转服务器宕机、或该节点出口 IP 彻底被墙，链路处于物理不可达状态。</li>
            <li><strong>Connection Reset（连接重置，错误码 ERR_CONNECTION_RESET）：</strong>客户端与服务器建立了连接，但在传输数据的瞬间，中间链路审查设备或对端服务器主动向本地回送了一个 <strong>TCP RST（Reset）控制报文</strong>强行切断会话。这通常意味着您使用的代理协议（如纯文本 HTTP 或旧版 SS）特征被深度包检测拦截，或者该落地 IP 被目标网站（如 Cloudflare 防火墙）直接拉黑拒访。</li>
          </ul>
        </div>
      </details>

      <!-- Q13 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q13. 为什么系统本地时钟与国际标准时间偏差超过 90 秒，会导致代理完全无法连接？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是现代现代网络安全协议（如 VMess、VLESS、TLS 1.3）为了防御<strong>“重放攻击（Replay Attack）”</strong>所必须设置的强安全机制：</p>
          <p>在握手阶段，客户端会将本地的时间戳（Timestamp）纳入哈希算法中作为动态随机盐。当数据包到达服务端后，服务器会将包内的时间戳与服务器自身的系统时钟进行比对。如果发现时间差大于安全窗口（协议规定阈值通常为 90 秒至 120 秒），服务端会判定该报文为黑客截获并重新发送的恶意报文，从而立刻单向静默丢弃连接！</p>
          <p><strong>解决办法：</strong>在 Windows 中打开「日期和时间」设置，点击「立即同步」按钮；在 macOS 中开启「自动设置日期和时间」。只要时间恢复秒级同步，节点即可秒连恢复。</p>
        </div>
      </details>

      <!-- Q14 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q14. 什么是 DNS 污染？为什么开启 Fake-IP 与 DoH 模式能够彻底消除 DNS 劫持？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>DNS 污染机制：</strong>传统 DNS 使用明文 UDP 53 端口查询。当您在本地电脑查询 google.com 时，请求尚未到达境外 DNS 服务器，公网骨干网络上的审查设备就会抢先伪造一个错误的虚假 IP（如 127.0.0.1 或不可达 IP）返回给您的电脑，导致浏览器连接到死胡同。</p>
          <p><strong>彻底根除的解决方案：</strong></p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Fake-IP 模式：</strong>客户端在本地构建虚拟 DNS 映射池。当应用查询 google.com 时，客户端在 1ms 内瞬间给本地系统返回一个保留网段的假 IP（如 198.18.0.23），本地完全不发起任何真实 DNS 查询！随后在发送 TCP 数据时，客户端把域名还原并通过加密专线发送到海外落地端，由海外服务器在境外纯净环境进行真实 DNS 解析。</li>
            <li><strong>DoH（DNS-over-HTTPS）：</strong>将 DNS 解析请求封装进标准的 TLS 443 加密管道中传输，彻底杜绝中间人嗅探与伪造。</li>
          </ul>
        </div>
      </details>

      <!-- Q15 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q15. 开启代理客户端后，电脑连本地 NAS、局域网打印机或公司内网打不开了，怎么解决？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是因为客户端在接管系统流量时，默认将所有网段的流量都引导进了代理核心，导致发送到局域网地址（如 192.168.x.x、10.x.x.x）的数据包也被错误送往海外代理节点，海外节点当然无法找到您家里的内网设备。</p>
          <p><strong>修复指南：</strong></p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li>在客户端设置中，找到「系统代理忽略列表（Bypass Domain/IP List）」，确保包含：<code>127.0.0.1, localhost, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, *.local</code>。</li>
            <li>在路由配置（Rules）顶部，确认第一条规则为 <code>GEOIP,private,DIRECT</code>，强制所有私有内网 IP 走直连。</li>
          </ol>
        </div>
      </details>

      <!-- Q16 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q16. 机场订阅链接更新报错，提示“Fetch Error”、“Invalid Response”或“403 Forbidden”如何排查？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>按以下顺序进行逐项定位：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>排查 1：订阅域名被拦截。</strong> 机场的订阅下发域名经常遭到本地运营商 DNS 污染。尝试在关闭代理状态下，复制订阅链接中的主域名到浏览器打开，看能否正常加载；若打不开，先开启一个备用节点（或使用手机热点），再点击「更新订阅」。</li>
            <li><strong>排查 2：用户 User-Agent 被风控。</strong> 部分不良小机场后端拦截非官方或未经允许的客户端识别码。在订阅配置中，可尝试将 User-Agent 伪装为 <code>ClashMeta</code> 或 <code>v2rayng</code>。</li>
            <li><strong>排查 3：套餐已欠费过期或流量耗尽。</strong> 登录机场用户后台检查账单状态是否显示为 Active。</li>
          </ul>
        </div>
      </details>

      <!-- Q17 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q17. 为什么在 Speedtest 单线程测速有 500Mbps，但实际看 YouTube 4K 仍然卡顿转圈？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>测速网站与真实流媒体视频传输在技术底层有三大关键差异：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>突发突发带宽 vs 持续长流带宽：</strong>Speedtest 测试时间仅 10-15 秒，机房可以临时放开突发配额；但看 4K 60FPS 视频需要长达数十分钟持续稳定在 40-80Mbps 以上，许多超卖机场在持续高码率下会触发 QoS 限速惩罚。</li>
            <li><strong>测速服务器选址猫腻：</strong>部分机场测速时路由走向了就近的香港测速点，但实际访问 YouTube 时，视频流量是由美国或欧洲服务器分发的，跨洋链路带宽严重不足。</li>
            <li><strong>Google BBR 拥塞控制缺失：</strong>如果落地机房没有配置 Linux BBR 算法，一旦遭遇 1% 的微小丢包，TCP 窗口就会指数级缩水，导致码率暴跌卡顿。</li>
          </ol>
        </div>
      </details>

      <!-- Q18 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q18. 手机开热点给电脑使用时，为什么电脑上的代理客户端经常无法连通？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>主要根源在于移动通信网络的 <strong>CGNAT（运营商级大内网 NAT）</strong> 与 <strong>IPv6 兼容性</strong>冲突：</p>
          <p>手机移动数据通常开启了 IPv6 双栈，热点会向电脑下发移动蜂窝网的公共 IPv6 地址。而电脑上的客户端若没有正确配置 IPv6 路由接管，浏览器的请求会绕过本地代理直接走手机的 IPv6 公网直连，导致被防火墙阻断。解决办法：在电脑客户端设置中将「IPv6」开关彻底关闭，强制所有请求在 IPv4 栈下走隧道代理。</p>
        </div>
      </details>

      <!-- Q19 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q19. 浏览器访问海外网站弹出“您的连接不是私密连接（SSL Handshake Failed）”代表什么？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>高危警报！绝不要轻易点击“继续前往”！</strong></p>
          <p>在正常配置的代理环境下，浏览器端建立的是端到端真实 TLS 加密，证书由权威 CA（如 DigiCert、Let's Encrypt）签发。如果突然弹出证书错误，通常意味着：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>本地开启了未知杀毒软件的“HTTPS 流量扫描”并向系统强行注入了自签名中间人根证书。</li>
            <li>您正在使用的劣质机场节点在中间链路上实施了<strong>恶意的中间人解密（MITM Attack）</strong>，试图窃取您的传输明文！</li>
            <li>遇到此类报错，请立即关闭当前节点，并切换回光速云等经过第三方审计认证的老牌合规专线。</li>
          </ul>
        </div>
      </details>

      <!-- Q20 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q20. 如何使用命令行 MTR / Traceroute 工具精准判断断流究竟发生在哪一段？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>网络工程师的专业诊断三板斧：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>测试第一段（本地到中转入口）：</strong>在终端运行 <code>mtr -c 50 --report &lt;机场中转入口域名或IP&gt;</code>。若在第 1-3 跳（家庭路由器或本地局域网）即出现丢包，说明您本地 WiFi 或宽带光猫异常；若在骨干网中间跳数出现丢包，说明该省骨干网拥塞。</li>
            <li><strong>测试第二段（中转到落地）：</strong>通过机场提供的节点端对端探针（如本站网络观测室大盘）查看。若丢包率抖动大于 0% 且抖动超 50ms，说明该机场中转并非真正的二层 IEPL 专线，而是公网中转。</li>
            <li><strong>测试第三段（落地到目标网站）：</strong>在落地机上向目标服务（如 api.openai.com）发起 ping。若前两段完全正常唯独目标网站无响应，说明目标网站对该落地机所在 IP 段实施了地域风控封锁。</li>
          </ol>
        </div>
      </details>
    </div>
  </section>
`;
