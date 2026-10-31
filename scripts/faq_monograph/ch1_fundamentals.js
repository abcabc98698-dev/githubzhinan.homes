// scripts/faq_monograph/ch1_fundamentals.js
module.exports = `
  <!-- Chapter 1: Fundamentals & Architecture Selection (Q01-Q10) -->
  <section id="faq-fundamentals" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Part 01</span>
        <span>·</span>
        <span>网络工程与基础选型</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        1. 跨境网络底层架构、协议与基础选型篇 (Q01 - Q10)
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        涵盖机场与 VPS 的本质区别、IEPL 与 IPLC 物理专线真伪、VLESS 与 Trojan 协议选型、以及住宅原生 IP 对现代科研出海的核心技术价值。
      </p>
    </div>

    <div class="space-y-4">
      <!-- Q01 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all" open>
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q01. “机场”到底是什么？它与自己购买 VPS 搭建节点、传统企业 VPN 有何本质区别？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>“机场”是业内对以订阅链接（Subscription URL）形式分发分布式代理节点集群服务的通俗称呼。从计算机网络工程拓扑来看：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>自建 VPS：</strong>通常仅有一台海外公网服务器，您的本地电脑通过公共公网国际出口直连海外机房。一旦该 VPS 的 IP 触发流量模式特征被防火墙封锁，整个节点瞬间瘫痪，需要重新换 IP 或重新租服务器；且晚高峰公网丢包率常达 30% 以上。</li>
            <li><strong>传统企业 VPN：</strong>基于 IPSec 或 OpenVPN 协议在公网建立加密隧道。由于特征码极度明显，在现代深度包检测（DPI）面前极易被针对性丢包或阻断，且无法做到精细化的域名和 IP 分流（往往导致国内微信、网银同样走海外代理，造成延迟暴增）。</li>
            <li><strong>专业机场网络：</strong>采用“国内前置入口（BGP Anycast）+ 跨境私有通道（物理专线/隧道）+ 海外优质落地机房”三层解耦架构。用户流量在国内经专用骨干内网或专线安全过境，不仅延时稳定在 20-50ms，且具备数十条多国家冗余线路热备，单点故障自动无感切换。</li>
          </ul>
        </div>
      </details>

      <!-- Q02 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q02. 什么是 IPLC 和 IEPL？真正的物理专线到底具备哪些不可替代的技术特性？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>IPLC（International Private Leased Circuit）</strong>为国际私有租用线路；<strong>IEPL（International Ethernet Private Line）</strong>为国际以太网私有专线。</p>
          <p>它们共同的核心技术特征是：<strong>数据完全在点对点的封闭光纤物理介质中传输，物理二层隔离，根本不经过中国公网国际互联网交换中心（不碰 GFW）</strong>。因此具备三大降维优势：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>0% 晚高峰丢包率：</strong>公网直连在晚高峰（20:00-24:00）经常遭遇国际出口信道拥塞，而 IEPL 专线享有电信运营商硬件级独享 QoS 保障，抖动小于 2ms。</li>
            <li><strong>绝对稳定性：</strong>由于不走公网路由，不会因敏感时期的公网特征拦截而产生节点全线断流。</li>
            <li><strong>极低网络往返时延（RTT）：</strong>深港 IEPL 专线单向物理延迟仅约 3-5ms，全国多地经 BGP 优化后到香港综合延迟可压缩至 20-35ms。</li>
          </ol>
        </div>
      </details>

      <!-- Q03 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q03. 为什么现在主流机场纷纷抛弃传统 Shadowsocks/SSR，全面转向 VLESS 与 Trojan？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>这反映了网络安全对抗中“主动伪装与轻量化”的技术演变：</p>
          <p>早期的 Shadowsocks 和 SSR 基于对称加密流，其传输字节流具有极强的“高信息熵（High Entropy）”特征，现代基于人工智能的流量检测算法能够通过统计包长度、熵值分布轻易识别并定点干扰。而现代协议采取了完全不同的思路：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Trojan 协议：</strong>完全模仿互联网最广泛的 HTTPS/TLS 握手。在审查探针看来，它与用户访问正常海外电商网站完全一致，只要握手密码校验失败，服务器会立即返回合法的真实 Web 页面，实现完美的抗主动探测。</li>
            <li><strong>VLESS 协议：</strong>去除了 VMess 复杂的本地时钟校验与多余对称加密层，改为纯净的无状态路由控制，由底层标准的 TLS/XTLS 或物理二层隧道承载加密。具有极其卓越的吞吐性能，极低 CPU 负载，完美适配千兆以上高并发流媒体与海外算力拉取。</li>
          </ul>
        </div>
      </details>

      <!-- Q04 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q04. 什么是“全节点 1.0x 倍率”？市面上常见的 2.0x、5.0x 甚至 0.1x 倍率有哪些陷阱？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>节点倍率是指“用户实际下载/上传的数据量，在机场账单中所乘以的扣费系数”。例如：您下载了一个 1GB 的文件，若连接 1.0x 节点扣除 1GB 流量；若连接 5.0x 节点，您的订阅额度将被扣除整整 5GB！</p>
          <p><strong>常见猫腻与陷阱：</strong></p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>高倍率隐蔽吸血：</strong>部分宣称“10 元 500G”的廉价机场，将可用速度较快的 IEPL 专线节点偷偷设置为 3.0x 至 8.0x，用户看一场 4K 电影（消耗 15GB）实际被扣除 120GB，几天内额度即见底，迫使用户高频加购。</li>
            <li><strong>超低倍率（0.1x）钓鱼：</strong>0.1x 节点绝大多数为严重超卖的废弃公网线路，丢包率高达 60% 以上，不仅网页加载经常报错，还可能记录用户未加密的访问元数据。</li>
            <li><strong>黄金标准：</strong>如光速云等头部良心品牌，全系节点坚持 <strong>1.0x 真实倍率</strong>，消耗多少扣多少，透明诚信无暗坑。</li>
          </ul>
        </div>
      </details>

      <!-- Q05 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q05. 什么是“住宅原生 IP（Residential Native IP）”？为什么对海外业务不可或缺？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>在互联网自治系统（ASN）注册数据库中，IP 地址通常被分为两类：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>数据中心机房 IP（Hosting / Data Center）：</strong>属于 AWS、Google Cloud、DigitalOcean 等商业机房。由于成本廉价且经常被爬虫黑客滥用，被 OpenAI（ChatGPT）、Anthropic（Claude）、Netflix、TikTok 以及海外网银风控数据库列为重点监控对象，极易被直接拒访或封号。</li>
            <li><strong>原生住宅 IP（Residential / ISP）：</strong>由当地正规宽带运营商（如香港 HKBN、台湾中华电信、美国 AT&amp;T / Comcast）分配给真实居民家庭宽带的真实 IP 段。</li>
          </ul>
          <p>在 ChatGPT 等 AI 平台的反欺诈检测中，住宅原生 IP 被判定为“真人可信流量”，能够享受极低的验证码弹出率，彻底免去“Access Denied 1020”或账号批量误封的噩梦。</p>
        </div>
      </details>

      <!-- Q06 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q06. 为什么香港、台湾、新加坡和日本是国内跨境网络的最优四件套？各地区适合什么场景？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>受光速在光纤中的传播极限（约 200km/ms）与地缘物理距离制约，亚太周边地区拥有不可逆的低延迟优势：</p>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>香港（HK，20-35ms）：</strong>全国直连延迟最低，适合网页浏览、日常办公、GitHub 协同与超快搜索。注意：部分香港节点不支持直接访问 ChatGPT 和 Disney+（受当地政策与平台限制），需要使用分流或原生代理。</li>
            <li><strong>台湾（TW，35-50ms）：</strong>中文语系友好，完美解锁巴哈姆特动画疯、Line 以及所有海外流媒体，且 ChatGPT 访问通畅。</li>
            <li><strong>新加坡（SG，40-60ms）：</strong>东南亚国际数据枢纽，网络环境极度自由，原生支持全量海外 AI 平台（ChatGPT/Claude/Gemini/Midjourney），访问 Google 生态速度极佳。</li>
            <li><strong>日本（JP，45-65ms）：</strong>华东、华北地区直达延时极优，拥有海量本土流媒体原生资源（AbemaTV、DMM、Netflix 日区专属片库）以及日服游戏低延迟加速。</li>
          </ul>
        </div>
      </details>

      <!-- Q07 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q07. 什么是 BGP 隧道中转？它与普通公网直连相比有哪些优势与局限性？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>BGP（Border Gateway Protocol）边界网关协议中转</strong>，是指机场在中国境内租赁接入了电信、联通、移动、教育网等全网多线 BGP 机房的服务器作为“入口接入点”。</p>
          <p><strong>优势：</strong>不同运营商的用户连接该 BGP 入口时，系统自动匹配本网最佳内网路由接入，有效规避了“移动连联通绕大半个中国”的跨网互联恶性延迟。</p>
          <p><strong>局限性：</strong>BGP 隧道从境内中转机到境外落地机之间，如果走的仍是公网加密隧道（如公网 TLS 隧道），在特殊敏感时期依然可能被国际出口防火墙实施针对性丢包或 QoS 限速，稳定性次于二层物理硬隔离的 IEPL 专线。</p>
        </div>
      </details>

      <!-- Q08 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q08. 为什么不建议个人在电脑或手机上长期挂着全全局代理（Global Proxy）？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>开启全局代理（Global）意味着本机产生的 100% 网络数据包均经由海外代理服务器中转，这会带来三大严重负面后果：</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>国内日常软件极度卡顿：</strong>访问微信、淘宝、抖音、网易云音乐等国内服务时，流量需先绕道香港或美国再回到国内，延迟从 10ms 骤增至 300ms 以上，且可能因海外 IP 被微信或网银触发异地安全风控锁定。</li>
            <li><strong>极度消耗宝贵专线流量：</strong>在看国内 B 站或爱奇艺超清视频时，数个 GB 的流量全额走机场专线扣费，迅速耗尽月度额度。</li>
            <li><strong>最佳实践：</strong>始终保持客户端为<strong>规则分流模式（Rule Mode）</strong>，实现“国内直连（Direct）、海外走代理（Proxy）、广告拦截（Reject）”的智能动态分流。</li>
          </ol>
        </div>
      </details>

      <!-- Q09 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q09. 购买机场订阅后，为什么通常有“设备连接数（Online Devices）”限制？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p>设备连接数限制是服务商防止账号被恶意转售（合租套利）与保护全网节点信道公平的核心风控手段。后端通过 Redis 计数器每隔 60 秒轮询统计当前正在活跃发送 TCP/UDP 会话的独立内网/外网 IP 数量。</p>
          <p>若一个允许 3 台设备的账号同时在 5 个不同城市的公网 IP 下发起大并发拉流，系统会自动将超出的会话临时 RST 重置。对于个人多设备用户（手机 + 平板 + 笔记本 + 软路由），建议选择允许多设备或不限设备的长效套餐（如光速云斯诺克 147 永久套餐）。</p>
        </div>
      </details>

      <!-- Q10 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>Q10. 什么是 Anycast 技术？顶级机场是如何通过 Anycast 实现全国就近接入的？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-3">
          <p><strong>Anycast（任播）</strong>是一种基于 BGP 路由协议的高级寻址技术：在全网不同地理位置的多台入口服务器上，对外广播<strong>同一个相同的 IP 地址</strong>。</p>
          <p>当北京用户发起请求时，运营商骨干网路由器根据最小跳数算法，自动将数据包引导至光速云北京中转节点；广州用户发起请求时，则自动命中深圳节点。当华北机房突发断电时，BGP 路由协议在 50ms 内自动撤销华北路由广播，全国流量秒级自动重定向至华东机房，用户侧几乎毫无卡顿感知。</p>
        </div>
      </details>
    </div>
  </section>
`;
