// scripts/home_monograph/ch3_methodology.js
module.exports = `
  <!-- Chapter 3: Selection Methodology & Ponzi Audit -->
  <section id="selection-methodology" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 03</span>
        <span>·</span>
        <span>深度避坑白皮书</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        3. 2026 跨境网络选型方法论与“跑路周期律”避坑审计
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        在跨境网络加速领域，技术原理与商业模式密不可分。任何脱离物理成本谈论“超低价大流量”的宣传，本质上都是建立在严重超卖与资金盘风险之上的投机行为。了解行业真实的带宽采购成本与生命周期规律，是每一位跨境出海工作者保护财产与业务连续性的必修课。
      </p>
    </div>

    <div class="space-y-8">
      <!-- Section 3.1: Economic Realities of Bandwidth -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          3.1 跨境网络带宽采购的经济学硬约束与“廉价大碗”陷阱
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          正规物理跨境内网专线（如深港 IEPL 裸光纤、沪日专线）与公网优质 BGP 入口，需要向下游电信运营商或持牌通信企业支付高昂的保底带宽月租。在主流一级电信机房中，1Gbps（千兆）独享物理专线的对等采购成本每月高达数万元人民币。折算到每个千兆用户端，每 1GB 真实物理传输的纯电力、光缆折旧与机房托管成本存在天然的硬底线（通常不低于 0.08 - 0.15 元/GB）。
        </p>
        <p class="text-sm text-text-secondary leading-relaxed">
          当市场上出现“¥5 元 1000GB/年”或“¥9.9 元无限流量”的超廉价套餐时，其背后的运营逻辑只有两种可能：<strong>一是高达 50 - 100 倍的极限超卖</strong>，利用 95% 的用户不在线的概率对赌，一旦晚高峰（20:00 - 23:00）全体并发，单用户实际分配带宽骤降至不足 2Mbps，丢包率飙升至 40% 以上，导致连基本网页都无法加载；<strong>二是资金盘跑路模型</strong>，运营者并不打算长期维护线路，仅靠低价年付吸纳一笔资金池，在带宽成本超过收入时迅速关站失联。
        </p>

        <!-- Overcommit Comparison Visual -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/60 text-xs font-mono">
          <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <span class="font-bold text-red-600 dark:text-red-400 block mb-1">❌ 劣质超卖机场（晚高峰崩溃模型）</span>
            <ul class="space-y-1 text-text-secondary list-disc list-inside">
              <li>总带宽 1Gbps，接入 10,000 名并发用户（超卖 100 倍）</li>
              <li>晚高峰单人可用带宽: &lt; 0.5 Mbps</li>
              <li>晚高峰平均丢包率: 35% - 65%（严重断流）</li>
              <li>IP 属性: 廉价二手广播 IP，被 OpenAI/Claude 全面拉黑</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">✅ 旗舰级专线机场（如光速云 SLA 模型）</span>
            <ul class="space-y-1 text-text-secondary list-disc list-inside">
              <li>物理专线 2.5Gbps 双线路冗余，严格限制并发峰值</li>
              <li>晚高峰单节点实测下行: 500+ Mbps 持续跑满</li>
              <li>晚高峰实测丢包率: 0% 稳定无抖动（RTT 抖动 &lt; 0.38ms）</li>
              <li>IP 属性: 商业原生住宅 ISP，全节点通过 IPQS 认证</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 3.2: 3-stage Lifecycle -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          3.2 机场行业的“跑路周期律”三部曲深度解密
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          回顾过去 8 年跨境网络服务行业的发展史，倒闭或跑路的机场大多精准复刻了以下三个发展阶段：
        </p>

        <div class="space-y-3 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">第一阶段：低价吸客期（生命周期 0 - 6 个月）</strong>
            <p class="text-text-secondary leading-relaxed">
              新生运营团队利用廉价中转隧道搭建节点，通过打折促销、论坛大额返佣疯狂裂变吸引新客。此时由于总用户量较少，带宽尚有冗余，用户在测速时往往能跑出极高速度，形成“便宜好用”的虚假口碑。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">第二阶段：拥堵崩塌期（生命周期 6 - 18 个月）</strong>
            <p class="text-text-secondary leading-relaxed">
              随着前期低价年付用户剧增，实际产生的跨境流量使机房带宽费用成倍暴涨。运营者陷入收支倒挂，无力续费昂贵的高质量专线，只得降低 QoS 优先级、提高节点倍率或私自降速。客户支持群开始频繁以“上游机房故障”、“海缆光纤抢修”为由推脱责任。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">第三阶段：收割跑路期（生命周期 18 - 24 个月）</strong>
            <p class="text-text-secondary leading-relaxed">
              在资金链即将断裂前夕，运营者通常会发起一次前所未有的“五周年庆”或“五年付超级买断”特惠活动，以极其诱人的折扣诱导老用户续费锁定长约。待大笔资金归集后，官方 Telegram 频道开启全员禁言，随后彻底关闭官网与节点，完成跑路收割。
            </p>
          </div>
        </div>

        <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-xs text-text-secondary leading-relaxed">
          💡 <strong>黄金避坑守则：</strong>永远优先选择运营年限超过 3 年（如光速云自 2020 年运营已超 6 年）的老牌品牌。切忌在任何未经时间检验的新生小机场进行大额年付或多年付；选择支持月付或小额永久套餐（如斯诺克 147）的服务商，才能从根源上杜绝资金损失风险。
        </div>
      </div>

      <!-- Section 3.3: How to Distinguish Real Dedicated Line -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          3.3 辨别“真物理专线”与“公网伪专线”的 4 大硬核测试法
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          许多劣质商家常把廉价公网中转甚至直连节点虚标为“IEPL/IPLC 物理专线”。普通用户可以通过以下 4 个技术手段进行客观实测鉴别：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/50">
            <strong class="text-text block mb-1">1. MTR 跨境路由跳数检测</strong>
            <p class="text-text-secondary leading-relaxed">
              使用终端命令 <code>mtr</code> 追踪数据包。真实 IEPL 专线在境内入口（如深圳机房）之后直接跳入香港出口机房，中间不存在公网跳数。若中间出现 <code>202.97.*</code> 或公网 <code>59.43.*</code> 路由，则证明属于伪专线。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/50">
            <strong class="text-text block mb-1">2. 晚高峰 RTT 延迟抖动方差</strong>
            <p class="text-text-secondary leading-relaxed">
              连续发送 1,000 个 ICMP 数据包。公网中转受主干网 QoS 调度影响，延迟抖动标准差通常在 15-45ms 之间；而物理裸纤专线受物理介质保护，抖动标准差始终小于 0.5ms。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/50">
            <strong class="text-text block mb-1">3. TTL (生存时间) 跃点逆向审计</strong>
            <p class="text-text-secondary leading-relaxed">
              二层以太网私网专线（Layer 2）不会消耗 IP 层的 TTL 计数值。通过对比直连境外服务器与经专线代理后的 TTL 减量，能够精准判断底层是否经过三层公网路由封装。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/50">
            <strong class="text-text block mb-1">4. 境外落地 ASN 真实归属查询</strong>
            <p class="text-text-secondary leading-relaxed">
              查询落地 IP 归属的自治系统（ASN）。优质专线落地直连 Equinix、HKT、HKBN 等顶级网络提供商，绝不会套用被全球黑名单标记的廉价机房 IP。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
