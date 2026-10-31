// scripts/home_monograph/ch12_faqs.js
module.exports = `
  <!-- Chapter 12: 12 Core Technical FAQs -->
  <section id="frequently-asked-questions" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 12</span>
        <span>·</span>
        <span>疑难问题百科</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        12. 12 大核心疑难技术与避坑 FAQ 库
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        根据本站用户长期反馈与实验室一线排障经验，整理了关于合规、选型、网络排障与 AI 封控的 12 组高频硬核问答。
      </p>
    </div>

    <div class="space-y-4">
      <!-- FAQ 1 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>1. 跨境网络加速在法律与合规层面的边界是什么？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>中国法律法规明确规定，未经电信主管部门批准，不得建立或租用非法定信道开展跨境通信业务。同时，国家支持正常的跨国学术科研、软件开源协作与国际贸易往来。</p>
          <p><strong>合规守则：</strong>仅将网络加速工具用于合法学术文献查阅（如 Google Scholar、ArXiv）、海外开源代码同步（GitHub、HuggingFace）与合规企业出海商务。严禁使用任何代理从事危害国家安全、散布谣言、侵犯他人隐私或从事电信网络诈骗等违法犯罪活动。</p>
        </div>
      </details>

      <!-- FAQ 2 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>2. “按月付费”与“永久不过期套餐”（如斯诺克 147）究竟该如何取舍？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p><strong>按月/按年套餐：</strong>适合每月有固定大流量需求的用户（如每天观看 4K 流媒体、持续拉取大体积 Docker 镜像）。月付单 G 成本相对较低，每月流量定时重置。</p>
          <p><strong>永久买断套餐（光速云斯诺克 147）：</strong>适合轻度出海、差旅备用、或偶尔查询学术资料的用户。买断后流量永不清零，不用担心“没用完按月清零”的经济损耗。实测双机轻度差旅可用 5 至 8 年，折合月均仅需 1 - 2 元。</p>
        </div>
      </details>

      <!-- FAQ 3 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>3. 刚导入订阅后，客户端所有节点都显示“Timeout”或延迟为“-1”，如何自查？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>请按以下 4 步标准排查流程排查：</p>
          <ol class="list-decimal list-inside space-y-1 font-mono text-xs">
            <li><strong>检查本地系统时间：</strong>这是最常见的诱因！TLS/VLESS 加密协议要求本地系统时间与全球原子钟时间偏差在 60 秒以内。请打开系统“日期与时间设置”，点击“立即同步”。</li>
            <li><strong>检查分流模式与内核状态：</strong>确认客户端内核是否已正常启动（查看日志是否有 Port Listen 成功），分流模式切勿误选为“Direct（直连）”。</li>
            <li><strong>更新订阅链接：</strong>机场节点域名可能因轮换而更新，在客户端配置列表右键点击“更新订阅”。</li>
            <li><strong>检查安全杀毒软件：</strong>部分第三方杀毒软件（如 360 或火绒）可能误拦截了虚拟网卡驱动或本地 7890 代理端口，将客户端添加进信任区即可。</li>
          </ol>
        </div>
      </details>

      <!-- FAQ 4 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>4. 为什么访问 ChatGPT 或 Claude 时经常遭遇“Access Denied”报错？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>这是因为您连接的节点出口 IP 属于云厂商机房 IP（Hosting ASN），已被 Cloudflare Turnstile 与 OpenAI 标记为高欺诈分。请选用光速云等标配商业原生住宅 ISP 落地 IP 的节点，并在浏览器中关闭 WebRTC 穿透，即可 100% 避免封锁。</p>
        </div>
      </details>

      <!-- FAQ 5 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>5. 为什么使用代理后，部分国内 App 提示“异地登录”或验证码增多？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>您大概率误开启了“全局代理模式（Global）”，导致国内 App 的流量也被强行发送至香港或美国节点。请务必将客户端切换为“规则分流模式（Rule）”，使国内直连、海外代理，彻底杜绝此类风控。</p>
        </div>
      </details>

      <!-- FAQ 6 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>6. 中国电信、联通与移动宽带在专线选型上有何差异？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p><strong>中国联通：</strong>国际互联质量最好，境内骨干网跳数少，直连与专线延迟均表现极佳。</p>
          <p><strong>中国移动：</strong>CMI 出口带宽充裕，但部分省份内网存在较重的 NAT 限制，建议优先选择支持 BGP Anycast 入口的品牌。</p>
          <p><strong>中国电信：</strong>普通 163 骨干网晚高峰极度拥堵，直连极易丢包，强烈建议电信用户必须选用 IEPL 物理专线以避开公网出口瓶颈。</p>
        </div>
      </details>

      <!-- FAQ 7 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>7. 什么是节点“倍率”？1.0x 与 3.0x 有什么实际区别？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>节点倍率代表您消耗流量的放大系数。1.0x 倍率意味着下载 1GB 文件扣除 1GB 账户流量；而 3.0x 倍率意味着下载 1GB 文件会扣除 3GB 流量。本站主推的光速云全节点均为 1.0x 真实倍率，无任何隐形缩水。</p>
        </div>
      </details>

      <!-- FAQ 8 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>8. 为什么看 YouTube 4K 很流畅，但在 Telegram 传文件却很慢？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>YouTube 拥有强大的全球 CDN 边缘节点（如香港本地缓存），走香港专线即可跑满带宽；而 Telegram 的文件存储服务器位于欧洲或美国数据中心。若要加速 Telegram 大文件下载，建议在客户端策略组中为 Telegram 单独指定新加坡或美西高速节点。</p>
        </div>
      </details>

      <!-- FAQ 9 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>9. 外贸跨境电商多店铺（Amazon / eBay）能否直接使用共享机场？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p><strong>严禁直接使用！</strong>跨境电商平台对店铺防关联审查极度严格。共享机场节点的出口 IP 会被数百名用户共同使用，极易引发店铺被判定关联封禁。多店铺管理必须使用独享原生静态 IP 或专业的防关联紫鸟/AdsPower 指纹浏览器环境。</p>
        </div>
      </details>

      <!-- FAQ 10 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>10. 手机开启代理后耗电快、发热大，如何通过设置优化？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>首选支持 VLESS 零拷贝协议的节点；在 Shadowrocket / Sing-box 设置中关闭“流量抓包（Mitm / Decrypt）”功能；分流规则开启本地 Fake-IP 缓存，避免客户端频繁唤醒 CPU 进行 DNS 递归查询。</p>
        </div>
      </details>

      <!-- FAQ 11 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>11. 为什么购买了 2.5Gbps 专线，本地测速依然跑不满千兆？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>单线程 TCP 传输受到物理延迟与 TCP 拥塞控制窗口限制。要跑满 500M - 1000M 宽带，需要应用具备多线程并发能力（如 IDM、多线程下载器）。此外，路由器 CPU 性能（是否支持硬件 AES-NI 加速）也会成为单机测速瓶颈。</p>
        </div>
      </details>

      <!-- FAQ 12 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>12. 优惠码「AMM」在光速云官网结账时如何使用？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>在光速云后台选择任意按月、按年或斯诺克 147 永久套餐，进入结算页面时，在“折价券 / 优惠码”输入框中填写大写字母 <code>AMM</code> 并点击验证，即可立享专属折上折优惠。该优惠码与年付折扣（8折）可叠加生效。</p>
        </div>
      </details>
    </div>

    <!-- Bottom Affiliate Disclosure -->
    <div class="mt-12">
      <AffiliateDisclosure />
    </div>
  </section>
</StarterLayout>
`;
