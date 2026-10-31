// scripts/radar_monograph/ch12_faqs.js
module.exports = `
  <!-- Chapter 12: 12 Core Scam & Risk FAQs -->
  <section id="radar-faqs" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 12</span>
        <span>·</span>
        <span>防坑避雷百科</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        12. 跑路预警与资金安全 12 大核心技术 FAQ 问答库
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        根据本站网络观测实验室长期抓取的 42 家服务商遥测数据与真实用户维权反欺诈审计实战，深度整理了关于跑路前兆、资金追回、二层专线真伪鉴别与防坑避雷的 12 组高价值硬核问答。
      </p>
    </div>

    <div class="space-y-4">
      <!-- FAQ 1 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>1. 为什么平时测速飞快的机场，也会毫无预警地突然跑路？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>“测速飞快”在网络工程中只能代表在极短的基准测试时间内，节点上的并发带宽占空比相对较低，或者商家临时开启了高优先级的单线程突发带宽，这丝毫不代表该服务商具备长久的财务抗风险能力与基础设施运维储备。许多初创小微机场在前期为了在各大测速频道迅速打响名气，往往自掏腰包租用几天昂贵的大带宽公网中转服务器，在测速图中跑出满屏千兆甚至跑满万兆的虚假繁荣；但由于月付 5 元或 10 元的畸形低价导致收支严重倒挂，当存量用户达到几千人后，机房高昂的次月续约月租无力承担，最终迅速关门大吉卷款蒸发。</p>
        </div>
      </details>

      <!-- FAQ 2 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>2. 购买机场时，优先选择支付宝、微信还是信用卡？虚拟币有什么致命隐患？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p><strong>资深网络工程师与法务风控专家的推荐排序：外币信用卡 &gt; 支付宝/微信 &gt;&gt; 绝不使用虚拟货币。</strong></p>
          <p>外币信用卡（Visa/Mastercard）受国际卡组织严格的规则保护，享有长达 180 天的争议拒付保护期（Chargeback），只要商户无法出具持续服务履约的技术凭证，发卡行通常会强制将资金退回；国内正规支付宝或微信商户支付在商户清算账期内（通常为 T+1 至 T+7），用户若在 72 小时内发起未提供服务的投诉，平台风控会直接冻结商家收款账户；而虚拟货币（如 USDT-TRC20 / BTC）具有不可篡改的去中心化匿名与不可逆性，一旦链上转账确认，任何银行、监管司法机构或第三方都无法协助冻结或追回，这是不良机场策划终极卷款跑路的最爱通道。</p>
        </div>
      </details>

      <!-- FAQ 3 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>3. 为什么网络上有那么多博主或测评群疯狂推荐容易跑路的小机场？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p><strong>根源在于畸形且违背商业规律的高额循环返佣（Affiliate）：</strong>许多不良小机场为了在极短周期内汇集资金池，向推广博主开出高达 60% 至 85% 的永久循环充值返佣！这意味着用户充值 100 元，推手博主直接抽走 85 元，商家实际仅剩 15 元用于采购机房与带宽，这从数学模型上注定了必然爆仓跑路。部分不良推广推手明知其财务模型不可持续，但在暴利面前依然选择为高风险资金盘站台；一旦跑路发生，他们便迅速删除推文与测评视频，换个新品牌继续收割下一批受害者。</p>
        </div>
      </details>

      <!-- FAQ 4 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>4. 商家公告声称“上游机房遭受大流量 DDoS 攻击”，是真的还是跑路借口？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>在计算机网络拓扑中，真正的物理专线（如 IEPL / IPLC）采用的是二层或二层半的点对点硬件信道隔离，其内网传输根本不对公网广播 IP 地址，外网黑客绝不可能通过公网 IP 对物理专线发起分布式拒绝服务（DDoS）攻击。如果一家号称“物理专线”的机场频繁在频道以“机房遭遇 500Gbps 大流量攻击导致节点全挂”为由停机，说明其底层采用的根本就是廉价的公网服务器中转端口转发，存在严重的虚假宣传。此外，“机房被攻击、正在紧急抢修”也是 80% 以上资金盘在卷款跑路前为了拖延用户维权与转移资产所编制的经典借口。</p>
        </div>
      </details>

      <!-- FAQ 5 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>5. 机场如果跑路了，保存在客户端里的订阅链接会泄露我的个人隐私吗？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>跑路发生后，原机场的订阅后端服务器通常由于欠费已经关机停机，不会主动回传您本地的历史上网记录。但请注意：<strong>必须立即在 Clash Verge、Sing-box 等客户端中右键彻底删除该订阅配置</strong>！因为跑路团队放弃域名后，该域名很快会被黑产灰产团伙抢注。一旦攻击者通过 DNS 劫持重新托管该订阅域名，便可向未删除配置的客户端下发带有恶意后门节点的虚假配置，从而在您访问银行、电商或社交软件时实施中间人解密窃听与流量劫持。</p>
        </div>
      </details>

      <!-- FAQ 6 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>6. 为什么说“大额三年付/五年付”是机场跑路最危险的前兆？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>正规的企业级物理专线（如深港 IEPL、京德专线）均需每月按实际带宽规格向中国电信、中国联通等持牌运营商缴纳不可减免的硬性账单，机房不可能向服务商提供“一次付清五年折旧”的优惠政策。当一家平日按月计费的机场突然无缘无故推出“三周年狂欢：三年付仅需 99 元、五年付立享 2 折”时，其底层本质是当月现金流已经彻底断裂、无法支付下月数十万元的机房账单，运营团队试图通过极度夸张的虚假长期承诺榨干最后一波用户现金流入，随后在 7 至 15 天内关闭服务器隐匿失联。</p>
        </div>
      </details>

      <!-- FAQ 7 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>7. 遭遇机场突然断网失联，如何通过支付平台止损追回资金？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>维权成功的关键在于把握事发后 72 小时的黄金冻结窗口：</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>支付宝/微信支付：</strong>打开账单找到该笔付款记录，点击“对此订单有疑问”或“投诉商户”，选择“未收到商品/服务或商户失联”。上传机场官网打不开的报错截图、Telegram 频道禁言截图、节点大面积红色的测速凭证，申请平台风控干预拦截尚未结算的款项。</li>
            <li><strong>外币信用卡（Visa/Mastercard）：</strong>拨打银行背面的客服电话，向反欺诈争议处理部门提出 Chargeback 申诉，理由陈述为“Service Not Provided / Merchant Ceased Operations”，由银行向收单行发出资金冻结追讨。</li>
          </ul>
        </div>
      </details>

      <!-- FAQ 8 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>8. “永久有效套餐”本身是不是一种庞氏骗局？光速云的斯诺克 147 为什么能长期成立？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>如果是市场上宣称“永久无限量免费使用”的套餐，100% 是资金盘击鼓传花的骗局！但<strong>光速云（GuangSu Cloud）推出的「致敬斯诺克 147 永久套餐」是严格按照不可再生的固定总流量计费的（¥147 买断 247GB 物理专线流量）</strong>。</p>
          <p>从精算学模型分析：用户购买的是 247GB 的专线数据配额，不限制过期时间。用户在日常用于备用、突发查阅论文或临时出差时消耗，用完即止；若需要继续使用需重新充值。对于光速云运营团队而言，247GB 专线流量折合每 GB 单价约 ¥0.59，该单价不仅完全覆盖了二层 IEPL 物理裸缆的数据传输成本，而且沉淀了高质量的长周期忠实用户，平时也不会产生全天候跑满千兆的恶性带宽空耗，因此具备严谨扎实的商业财务正向循环。</p>
        </div>
      </details>

      <!-- FAQ 9 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>9. 如果我已经买了一家出现异常特征的机场年付，现在应该怎么做？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>第一，立刻进入用户后台取消所有绑定的“自动循环扣费”协议，防止下个周期被强制续约；第二，如果支付时间在 30 天以内，且商家已出现官方群全员禁言或节点故障超 72 小时无修复，立即向支付平台或发卡行发起未履约投诉，尽量抢救剩余资金；第三，立即配置第二家经过 6 年以上时间检验的长青老牌专线（如光速云），采用 Active-Active 双主热备架构部署到本地客户端，彻底隔离生产业务与日常科研的网络中断风险。</p>
        </div>
      </details>

      <!-- FAQ 10 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>10. 老牌长青机场（如光速云）在重大网络管制时期，是如何保障线路不失联的？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>核心在于物理架构的二层硬隔离与线路冗余容灾体系。光速云采用深港陆地裸缆专线与企业内网专线双回路热备架构，出海数据完全在闭环的物理专线中传输，不经过公网国际出口路由，彻底绕开了 GFW 的主动探测与深度包检测。同时在境内采用三地 BGP Anycast 入口，当某省入口遭遇运营商临时检修或光缆被施工挖断时，BGP 路由协议在 50ms 内自动将流量无感平滑切换至华南或华东正常省份入口，保障全天候 99.95% 的电信级高可用性。</p>
        </div>
      </details>

      <!-- FAQ 11 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>11. 跑路机场的原团队会不会将用户的注册邮箱与密码拿到黑市倒卖？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>这是真实存在且极度普遍的安全风险！许多不良小微机场直接使用开源的旧版本 SSPanel 或 V2Board 面板搭建，数据库往往未经过加盐哈希（Salted Hash）处理，甚至明文保存用户密码。在策划跑路后，部分运营者会将包含数万条用户账号、常用密码、绑定邮箱与充值记录的完整数据库打包挂在暗网或 Telegram 灰产群组进行撞库出售。因此，<strong>在注册任何未知背景的机场时，强烈建议使用专门的别名邮箱，并严禁使用与银行卡、Apple ID 或日常核心社交账号相同的密码组合</strong>。</p>
        </div>
      </details>

      <!-- FAQ 12 -->
      <details class="group rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all">
        <summary class="font-bold text-base sm:text-lg text-text cursor-pointer list-none flex items-center justify-between">
          <span>12. 如果我发现了某家新跑路的机场，如何向本站实名提交反欺诈线索与黑名单核验？</span>
          <span class="text-text-secondary font-mono text-lg transition-transform group-open:rotate-180">↓</span>
        </summary>
        <div class="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/70 space-y-2">
          <p>本站开设了完全公开透明的社区反欺诈审查工作流。您可以直接向安全审计邮箱（<code class="text-emerald-600 dark:text-emerald-400">security@githubzhinan.homes</code>）发送线索报告，需附带：① 机场注册主域名与 Telegram 官方频道链接；② 节点全红或持续无法连通的 Clash / Sing-box 测速截图；③ 官网打不开或后台工单超时超 48 小时未回复的证据；④ 付款商户号或订单凭证。本站技术团队在完成多地独立探针交叉验证后，会在 24 小时内将其收录至全网跑路预警雷达黑名单库，向全网跨境科研与开发者同步风险提示。</p>
        </div>
      </details>
    </div>

    <!-- Bottom Disclosure -->
    <div class="mt-12">
      <AffiliateDisclosure />
    </div>
  </section>
</StarterLayout>
`;
