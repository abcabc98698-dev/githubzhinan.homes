// scripts/free_monograph/ch3_verified_trials.js
module.exports = `
  <!-- Chapter 3: Verified Free Trial Airports & Safe Testing Matrix -->
  <section id="verified-trials" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 03</span>
        <span>·</span>
        <span>合规试用严选大盘</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        3. 42 家主流品牌合法 0 元试用与低门槛安全体验全景大盘
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        不想冒风险使用公共黑客节点，又想在付款前真实验证线路速度与晚高峰质量？我们对收录的 42 家品牌进行了逐一实测，筛选出支持真实可用试用与小额体验的梯队矩阵：
      </p>
    </div>

    <!-- Verified Trial Comparison Table -->
    <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm mb-8">
      <table aria-label="主流机场品牌安全试用与低门槛体验方案对比表" class="w-full text-left border-collapse text-xs font-mono min-w-[850px]">
        <thead>
          <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
            <th class="p-3.5" scope="col">推荐评级</th>
            <th class="p-3.5" scope="col">服务商品牌</th>
            <th class="p-3.5" scope="col">试用 / 体验方案形式</th>
            <th class="p-3.5" scope="col">体验流量配额</th>
            <th class="p-3.5" scope="col">物理线路类型</th>
            <th class="p-3.5" scope="col">流媒体与 AI 解锁</th>
            <th class="p-3.5" scope="col">隐藏限制说明</th>
            <th class="p-3.5 text-right" scope="col">获取与评测</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60">
          <!-- Top 1: GuangSu -->
          <tr class="hover:bg-bg-secondary/40 transition-colors bg-emerald-500/5">
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              👑 TOP 1 终极体验
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/guangsu/" class="text-emerald-600 dark:text-emerald-400 hover:underline no-underline">
                光速云 (GuangSu Cloud)
              </a>
            </td>
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              斯诺克 147 永久套餐 / ¥9.9 体验月付
            </td>
            <td class="p-3.5 text-text">
              247GB 永不过期 / 50GB 试用
            </td>
            <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              深港 IEPL 双物理专线
            </td>
            <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">
              全原生 IP 完美解锁
            </td>
            <td class="p-3.5 text-emerald-600 dark:text-emerald-400">
              无任何隐藏偷跑，1.0x 真实倍率
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/guangsu/" aria-label="查看评测：光速云" class="px-2.5 py-1 rounded bg-emerald-600 text-white font-semibold no-underline hover:bg-emerald-700 transition-colors">
                查看评测
              </a>
            </td>
          </tr>

          <!-- Top 2: BreezeNet -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
              🟢 AA 级良好
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/weifeng/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                微风网络
              </a>
            </td>
            <td class="p-3.5 text-text">
              新用户 ¥1 元试用包
            </td>
            <td class="p-3.5 text-text">
              10GB (限时 3 天)
            </td>
            <td class="p-3.5 text-text">
              BGP 公网中转
            </td>
            <td class="p-3.5 text-text-secondary">
              部分支持流媒体
            </td>
            <td class="p-3.5 text-text-secondary">
              仅限新用户一次，超时自动回收
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/weifeng/" aria-label="体验套餐：微风网络" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                体验套餐
              </a>
            </td>
          </tr>

          <!-- Top 3: FatCat -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">
              🟡 A 级普通
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/feimao/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                肥猫云
              </a>
            </td>
            <td class="p-3.5 text-text">
              签到赠送免费流量
            </td>
            <td class="p-3.5 text-text">
              每次签到 500MB
            </td>
            <td class="p-3.5 text-text">
              公网中转
            </td>
            <td class="p-3.5 text-text-secondary">
              视节点而定
            </td>
            <td class="p-3.5 text-text-secondary">
              需每日手动在网站前端打卡
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/feimao/" aria-label="体验套餐：肥猫云" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                体验套餐
              </a>
            </td>
          </tr>

          <!-- Top 4: MuGuang -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">
              🟡 A 级普通
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/muguang/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                暮光云
              </a>
            </td>
            <td class="p-3.5 text-text">
              注册赠送 2 小时测试
            </td>
            <td class="p-3.5 text-text">
              5GB (超时自动失效)
            </td>
            <td class="p-3.5 text-text">
              隧道中继
            </td>
            <td class="p-3.5 text-text-secondary">
              基础网页浏览
            </td>
            <td class="p-3.5 text-text-secondary">
              有效测试窗口较窄，需集中测试
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/muguang/" aria-label="体验套餐：暮光云" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                体验套餐
              </a>
            </td>
          </tr>

          <!-- Top 5: DaLaoYun -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">
              🟡 A 级普通
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/dalaoyun/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                大佬云
              </a>
            </td>
            <td class="p-3.5 text-text">
              优惠体验季付
            </td>
            <td class="p-3.5 text-text">
              100GB / 季
            </td>
            <td class="p-3.5 text-text">
              混合专线中继
            </td>
            <td class="p-3.5 text-text-secondary">
              基础流媒体
            </td>
            <td class="p-3.5 text-text-secondary">
              需按季度预先付费
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/dalaoyun/" aria-label="体验套餐：大佬云" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                体验套餐
              </a>
            </td>
          </tr>

          <!-- Top 6: XingDaoMeng -->
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">
              🟡 A 级普通
            </td>
            <td class="p-3.5 font-bold text-text">
              <a href="/brands/xingdaomeng/" class="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline no-underline">
                星岛梦
              </a>
            </td>
            <td class="p-3.5 text-text">
              新用户新人优惠券包
            </td>
            <td class="p-3.5 text-text">
              按月充值折抵
            </td>
            <td class="p-3.5 text-text">
              BGP 隧道
            </td>
            <td class="p-3.5 text-text-secondary">
              支持部分海外服务
            </td>
            <td class="p-3.5 text-text-secondary">
              需手动领取新人券码
            </td>
            <td class="p-3.5 text-right">
              <a href="/brands/xingdaomeng/" aria-label="体验套餐：星岛梦" class="px-2.5 py-1 rounded bg-bg-secondary hover:bg-border text-text font-semibold no-underline transition-colors">
                体验套餐
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Free Trial Safety Protocol Checklist -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
      <h3 class="text-lg font-bold text-text">
        🔒 试用防套路四大安全军规与测试要点
      </h3>
      <ul class="list-disc pl-5 font-mono text-xs text-text-secondary space-y-2 leading-relaxed">
        <li><strong>军规 1：绝不绑定自动循环扣费（Auto-Renew）。</strong>某些不良服务商在提供“0 元试用 3 天”时，要求用户授权支付宝免密支付或信用卡预授权，3 天后自动按原价扣除 199 元年付账单！遇到此类强制绑卡试用，立即关闭页面。</li>
        <li><strong>军规 2：使用独立别名邮箱注册。</strong>绝不要用您的日常主力邮箱注册试用账号，防止试用结束后被营销垃圾邮件轰炸。</li>
        <li><strong>军规 3：先测试晚高峰，再决定是否订阅。</strong>下午 2 点测速飞快说明不了任何问题，真正的试金石是在 <strong>21:00 至 23:00</strong> 晚高峰期间打开 YouTube 4K 或让 ChatGPT 连续生成长文，观察丢包与延迟波动。</li>
        <li><strong>军规 4：试用期满前主动清理配置。</strong>若试用后决定不续费，请在客户端中右键彻底删除该订阅，防止未来域名被抢注后被植入恶意后门节点。</li>
      </ul>
    </div>
  </section>
`;
