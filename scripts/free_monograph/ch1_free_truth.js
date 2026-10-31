// scripts/free_monograph/ch1_free_truth.js
module.exports = `
  <!-- Chapter 1: Free Proxy Truth & Risk Baseline -->
  <section id="free-truth" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 01</span>
        <span>·</span>
        <span>搜索意图直接解答</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        1. 搜索意图直答：免费机场与免费节点真的存在吗？
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        如果您正在搜索“免费机场”、“永久免费节点订阅”或“白嫖梯子”，请在输入任何网址前牢记互联网经济学的永恒铁律：<strong>“当一款网络基础设施服务对您完全免费时，您自己以及您设备上的全部隐私数据，就是服务商拿去变现的核心产品。”</strong>
      </p>
    </div>

    <!-- Core Free Safe Choice Hero Card -->
    <div class="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-surface p-6 sm:p-8 mb-8">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
          <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          🎁 2026 最优零焦虑白嫖/极低成本方案
        </span>
        <span class="text-xs font-mono text-text-secondary">
          安全审计等级：AAA 级
        </span>
      </div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 class="text-2xl font-bold text-text mb-2">
            光速云 (GuangSu Cloud) · 斯诺克 147 永久套餐（一次买断 · 永不过期）
          </h3>
          <p class="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed mb-4">
            彻底告别每天花两小时到处翻找失效免费节点的精神内耗！光速云独家推出「致敬斯诺克 147」永久有效套餐：仅需 ¥147 一次性买断 247GB 纯正 IEPL 物理专线高速流量，不设月度重置，永不清零，支持全平台多设备同时使用。同时提供轻量年付仅 ¥99（折合 ¥8.25/月），专属优惠码【AMM】支持全系列折上折。
          </p>
          <div class="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span class="px-2.5 py-1 rounded bg-bg-secondary text-text border border-border">专属优惠码: <strong>AMM</strong></span>
            <span class="px-2.5 py-1 rounded bg-bg-secondary text-emerald-600 dark:text-emerald-400 font-semibold border border-border">物理线路: 深港 IEPL 专线</span>
            <span class="px-2.5 py-1 rounded bg-bg-secondary text-text border border-border">流量属性: 永不清零 · 用完即止</span>
          </div>
        </div>

        <div class="shrink-0 space-y-2 text-right">
          <a
            href="/brands/guangsu/"
            aria-label="查看光速云永久套餐评测 →：告别免费节点断流内耗"
            class="inline-block px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all no-underline text-center w-full sm:w-auto"
          >
            查看光速云永久套餐评测 →
          </a>
          <span class="block text-[11px] text-text-secondary font-mono text-center">
            * 遵循合规规范，专属优惠码支持叠加折抵
          </span>
        </div>
      </div>
    </div>

    <!-- The 4 Hidden Costs of Free Proxies Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs mb-8">
      <div class="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-2">
        <strong class="text-red-600 dark:text-red-400 font-bold text-sm block">1. 流量劫持与恶意中间人窃听（MITM）：</strong>
        <p class="text-text-secondary leading-relaxed">
          公共免费节点的运营者控制着代理服务器。黑产团队通常在服务器端配置 SSL 剥离（SSL Stripping）或中间人嗅探脚本，记录用户通过该节点发送的全部明文请求、Cookie 会话 Token、甚至篡改网页注入恶意挖矿脚本或仿冒钓鱼弹窗。
        </p>
      </div>

      <div class="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-2">
        <strong class="text-amber-600 dark:text-amber-400 font-bold text-sm block">2. 本地设备被沦为僵尸肉鸡（Botnet）：</strong>
        <p class="text-text-secondary leading-relaxed">
          部分宣称“免费无限流量”的第三方客户端（特别是各种不知名包装版 VPN），在后台静默安装了后台代理驱动程序（如 Luminati / Bright Data 客户端插件），在您不知情的情况下，利用您的家庭宽带 IP 为境外黑产提供网络爬虫或分布式拒绝服务攻击（DDoS）转发，导致您的宽带被运营商封禁。
        </p>
      </div>

      <div class="p-5 rounded-2xl border border-border bg-surface space-y-2 p-5 rounded-2xl">
        <strong class="text-text font-bold text-sm block">3. 账号与个人敏感隐私打包倒卖：</strong>
        <p class="text-text-secondary leading-relaxed">
          以“免费注册即可领 50G”为幌子的小作坊网站，核心目的并非提供长期服务，而是收集跨境开发者的真实电子邮箱、常用密码组合与手机号。随后在黑市论坛按“出海高净值人群数据库”批量转卖，导致您收到海量海外赌博、杀猪盘与钓鱼邮件。
        </p>
      </div>

      <div class="p-5 rounded-2xl border border-border bg-surface space-y-2 p-5 rounded-2xl">
        <strong class="text-text font-bold text-sm block">4. 极度恶劣的连通率与时间黑洞：</strong>
        <p class="text-text-secondary leading-relaxed">
          公开流传在 Telegram 频道或 GitHub 上的公共订阅，几万名用户同时挤在同一台 100Mbps 廉价公网服务器上，晚高峰丢包率高达 80% 至 95%，打开一个 Google 搜索报错五次。平均存活时间不足 3 小时，用户每天浪费数小时在排障上，得不偿失。
        </p>
      </div>
    </div>
  </section>
`;
