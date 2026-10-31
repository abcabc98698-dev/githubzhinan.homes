// scripts/faq_monograph/ch4_clients_tun.js
module.exports = `
  <!-- Chapter 4: Client Ecosystem, TUN Mode & Custom Rules (Q31-Q40) -->
  <section id="faq-clients-tun" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Part 04</span>
        <span>·</span>
        <span>客户端配置、TUN模式与分流</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        4. 现代客户端生态、TUN 模式与终端开发分流篇 (Q31 - Q40)
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        对比 Clash Verge Rev、Sing-box 与 Surge 全平台利弊，彻底解决终端 Git/Docker 超时、TUN 模式虚拟网卡配置与多设备透明共享难题。
      </p>
    </div>

    <div class="space-y-4">
      <!-- Q31 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all" open>
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q31. 2026 年主流第三方客户端横向选型对比：Clash Verge Rev、Sing-box、Surge 该如何选？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>针对不同操作系统与技术偏好，全景横向选型决策矩阵：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Clash Verge Rev（Windows / macOS / Linux 首推）：</strong>基于 Rust + Tauri 框架重构，搭载强悍的开源 Mihomo（Clash.Meta）内核，内存占用极低（仅 50-80MB），原生集成图形化 TUN 模式与精美现代 UI，全网生态教程最丰富，普通用户与开发者的首选。</li>
            <li><strong>Sing-box（极客与极简主义者推荐）：</strong>下一代通用代理网络平台，纯 Go 语言编写，原生支持所有最新黑科技协议（VLESS、Trojan、ShadowTLS、Hysteria2），性能消耗极致，适合追求极致资源利用与软路由配置的高阶极客。</li>
            <li><strong>Surge（macOS / iOS 旗舰天花板）：</strong>商业付费软件（授权费用昂贵），拥有全行业无出其右的脚本引擎、抓包调试器与网络可观测大盘，适合预算充足的 Apple 生态专业开发者与网络工程师。</li>
            <li><strong>Shadowrocket（小火箭，iOS 入门神器）：</strong>仅需 ¥20 一次性买断，界面直观，扫码秒导，支持所有主流协议，手机端装机必备。</li>
          </ul>
        </div>
      </details>

      <!-- Q32 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q32. 什么是 TUN 模式？为什么海外游戏对战、终端 CLI 开发或部分软件必须开启 TUN？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>技术机制：</strong>传统的“系统代理（System Proxy）”只是修改了 Windows 或 macOS 的注册表设置，告诉应用程序“我这里有一个 HTTP/SOCKS5 代理端口（如 127.0.0.1:7897）”。然而，只有遵循系统代理协议的现代浏览器（Chrome、Edge）才会主动去读取这个端口！</p>
          <p>而像 <strong>Steam/Epic 联机对战游戏（UDP 协议）、终端 CLI（git、ssh、curl）、Docker 守护进程、以及 Telegram 等独立软件</strong>，根本不读取系统代理注册表，直接向网卡发起网络请求，从而直接触发丢包或超时阻断。</p>
          <p><strong>TUN 模式（TUN Virtual Network Interface）的作用：</strong>在操作系统内核层创建一张虚拟网卡，强制将电脑发出的<strong>所有三层网络数据包（Layer 3 IP Packets）</strong>全部劫持并接管，无死角走代理分流，彻底终结各类软件漏代理的难题。</p>
        </div>
      </details>

      <!-- Q33 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q33. 终端命令行（Git clone、Docker pull、npm/pip）开了客户端依然超时，如何彻底搞定？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>如 Q32 所述，命令行终端默认不走系统代理。有两种标准工业级解法：</p>
          <p><strong>解法 A（最推荐）：开启客户端的 TUN 虚拟网卡模式。</strong>无需配置任何终端代码，全局所有终端命令自动透明加速。</p>
          <p><strong>解法 B：配置终端代理环境变量。</strong>在 PowerShell 中运行以下命令（假设客户端本地混合端口为 7897）：</p>
          <div class="p-3 rounded-xl bg-bg-secondary border border-border font-mono text-[11px] text-text">
            $env:HTTP_PROXY="http://127.0.0.1:7897"<br />
            $env:HTTPS_PROXY="http://127.0.0.1:7897"<br />
            git config --global http.proxy http://127.0.0.1:7897
          </div>
          <p>若需持久化，可将上述环境变量写入用户的 PowerShell <code>$PROFILE</code> 文件或 <code>~/.zshrc</code> 中。</p>
        </div>
      </details>

      <!-- Q34 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q34. 如何编写高级自定义分流规则（Rule-Providers），实现特定海外服务精准分流？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>在 Clash Verge Rev 或 Sing-box 中，可以通过订阅社区高质量规则集（Rule Provider）实现秒级自动化更新。典型的路由优先级自顶向下匹配规则：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><code>GEOIP,private,DIRECT</code> —— 私有局域网必须走直连。</li>
            <li><code>RULE-SET,OpenAI,OpenAI-Group</code> —— 绑定新加坡/美区原生专线节点。</li>
            <li><code>RULE-SET,Claude,Claude-Group</code> —— 绑定固定的独占专线节点。</li>
            <li><code>RULE-SET,Streaming,Streaming-Group</code> —— 绑定支持流媒体解锁的原生节点。</li>
            <li><code>GEOSITE,cn,DIRECT</code> —— 所有国内域名全部极速直连。</li>
            <li><code>GEOIP,cn,DIRECT</code> —— 所有国内 IP 全部直连。</li>
            <li><code>MATCH,Final-Proxy</code> —— 其余未知流量走保底代理。</li>
          </ol>
        </div>
      </details>

      <!-- Q35 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q35. 什么是“混合端口（Mixed Port）”？它为什么优于单独的 HTTP 或 SOCKS5 端口？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>早期代理软件需要分别开放两个不同端口：HTTP 代理端口（如 7890）与 SOCKS5 代理端口（如 7891）。这给配置环境变量和不同软件带来了繁琐的端口记忆负担。</p>
          <p><strong>混合端口（Mixed Port，通常默认设为 7897 或 7890）：</strong>在同一个本地 TCP 端口上，同时动态自适应支持 HTTP、HTTPS 以及 SOCKS5 协议握手。无论客户端发来的是标准的 HTTP GET 请求，还是 SOCKS5 的二进程协商包，本地核心都能自动智能识别并无缝转发，极大简化了各类开发工具与路由器的配置复杂性。</p>
        </div>
      </details>

      <!-- Q36 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q36. 什么是局域网共享（Allow LAN）？如何让同局域网的电视、PS5 或 Switch 共享代理？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>实现步骤：</strong></p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>在电脑客户端开启开关：</strong>打开 Clash Verge Rev，在设置中开启「局域网连接（Allow LAN）」。</li>
            <li><strong>获取电脑内网 IP：</strong>在电脑终端运行 <code>ipconfig</code>，记录当前内网 IPv4 地址（例如 <code>192.168.1.100</code>）。</li>
            <li><strong>在电视盒子或游戏主机中设置：</strong>进入电视或 PS5 的 Wi-Fi 高级设置，将「HTTP 代理」设为手动。服务器填入电脑内网 IP（<code>192.168.1.100</code>），端口填入混合端口（<code>7897</code>）。</li>
            <li><strong>注意防火墙放行：</strong>确保 Windows Defender 防火墙允许 Clash 接收局域网入站请求。此时电视盒子即可畅看 YouTube 4K！</li>
          </ol>
        </div>
      </details>

      <!-- Q37 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q37. 关闭客户端后电脑彻底无法上网（微信、百度全断），重启也没用，怎么解除死锁？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这是因为在电脑关机或客户端异常退出（Crash）时，未能及时清理 Windows 系统的系统代理注册表键值，导致系统依然向已经关闭的 <code>127.0.0.1:7897</code> 端口发送网络流量，从而造成死锁断网！</p>
          <p><strong>10 秒快速解除方法：</strong></p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li>在 Windows 按 <code>Win + I</code> 打开设置，搜索「代理服务器设置（Proxy Settings）」。</li>
            <li>在「手动设置代理（Manual proxy setup）」项下，将「使用代理服务器」开关<strong>彻底滑动到“关（Off）”</strong>并点击保存。电脑网络即刻满血恢复！</li>
          </ul>
        </div>
      </details>

      <!-- Q38 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q38. 软路由透明网关（OpenWrt/HomeProxy）与单机客户端相比，各有哪些优势与适用场景？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>软路由透明网关：</strong>在家庭主路由或旁路由部署，接入该 Wi-Fi 的所有设备（手机、电视、扫地机器人、Apple TV）无需安装任何软件，全部自动走透明代理。适合多设备智能家居、家庭影院与游戏重度玩家。但缺点是维护门槛高，一旦配置出错会导致全家断网。</p>
          <p><strong>单机客户端：</strong>直接在个人电脑或手机运行，按需开启，排障简单，移动办公出差不受任何家庭局域网限制，适合绝大多数个人科研与开发者。</p>
        </div>
      </details>

      <!-- Q39 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q39. 什么是 GEOIP 与 GEOSITE 数据库？为什么定期更新它们能显著提升分流精确度？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>GEOSITE：</strong>按互联网服务对全球域名进行的归类数据库（如将 <code>*.openai.com</code>、<code>*.chatgpt.com</code> 归类为 <code>geosite:openai</code>；将国内数十万域名归类为 <code>geosite:cn</code>）。</p>
          <p><strong>GEOIP：</strong>按国家或自治系统对全球数十亿 IP 段进行的映射数据库（如 <code>geoip:cn</code>）。</p>
          <p>由于互联网大厂的 CDN IP 与新业务域名每周都在动态变动（例如新上线的海外 AI 接口），如果客户端长期不更新 GEO 数据库，会导致新域名被错误判定为国内直连，从而产生无法连接的故障。建议在客户端中开启「每周自动更新 GEO 数据库」功能。</p>
        </div>
      </details>

      <!-- Q40 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q40. 如何在客户端配置自动故障转移（Fallback）与低延迟优选（Url-Test）？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>在策略组（Proxy Groups）中，合理使用自动化测试组能极大提升无感可用性：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>url-test（低延迟自动优选）：</strong>每隔设定时间（如 300 秒）向 <code>http://cp.cloudflare.com/generate_204</code> 发送轻量探针，自动将流量切换至当前测速延迟最低的健康节点。</li>
            <li><strong>fallback（严格故障转移）：</strong>按节点列表顺序排列，只要第 1 个主力专线节点保持健康，所有流量严格走第 1 个节点；只有当第 1 个节点连续三次握手超时，才顺位降级切换到备用节点，最大程度保障节点出口 IP 的稳定不跳跃。</li>
          </ul>
        </div>
      </details>
    </div>
  </section>
`;
