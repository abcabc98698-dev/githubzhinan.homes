// scripts/radar_monograph/ch3_eight_signs.js
module.exports = `
  <!-- Chapter 3: 8 Warning Signs Radar -->
  <section id="eight-warning-signs" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 03</span>
        <span>·</span>
        <span>高危前兆雷达</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        3. 机场跑路前兆 8 大特征风险雷达
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        绝大多数跑路事件绝非“毫无征兆”。在最终关站失联前的 15 至 30 天内，运营团队通常会出现一系列反常的商业与技术异动。只要掌握以下 8 大核心特征，您就能在资金受损前精准识别并提前撤离。
      </p>
    </div>

    <!-- 8 Warning Signs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs mb-8">
      <!-- Sign 1 -->
      <div class="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-2">
        <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
          <span>🚩 特征 1：</span>
          <span>突发超大折扣“三年付 / 五年付 / 终身买断”大促</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          正规物理专线的采购合约是按月或按年滚动支付的，没有任何良心服务商会去承诺“未来 5 年的带宽成本不变”。当平时从不大促的机场突然弹窗“5 周年特别狂欢：三年付立减 60%、五年付立享 3 折”时，这几乎是资金链濒临断裂前<strong>最后一次集中收割现金流</strong>的经典诱饵。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">真实案例：2022 年速蛙云跑路前两周，突发 5 折大额三年付促销，吸纳数百万资金后即刻人间蒸发。</span>
      </div>

      <!-- Sign 2 -->
      <div class="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-2">
        <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
          <span>🚩 特征 2：</span>
          <span>官方 Telegram 群组全员禁言，关闭评论区</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          原本活跃的技术交流群突然被管理员设置为“仅限管理员发言”，或者关联的讨论组被彻底解散。运营者企图通过信息黑箱压制节点断流的负面舆情，防止老用户在群里提醒新人停止充值。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">真实案例：布丁网络在关站前 10 天将官方群开启全员禁言，公告声称“维护网络秩序”，实为阻止受害者串联。</span>
      </div>

      <!-- Sign 3 -->
      <div class="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-2">
        <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
          <span>🚩 特征 3：</span>
          <span>客服工单响应停滞，周期从小时级拖长至数天</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          后台提交的技术支持工单长期显示“处理中”或“已读不回”，在线即时客服图标变成离线状态。这表明一线运维与客服人员可能已经被遣散或欠薪罢工，网站已进入无人维护的“半瘫痪僵尸阶段”。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">判断标准：正常老牌专线（如光速云）工单平均在 2 小时内响应；超过 72 小时无回复即属极度危险。</span>
      </div>

      <!-- Sign 4 -->
      <div class="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-2">
        <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
          <span>🚩 特征 4：</span>
          <span>核心节点连续数天断联，借口总是“上游拔线”</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          拥有实体专线架构的服务商均备有冷热双线路冗余（如光速云的深港裸纤与内网专线互备）。如果一家机场超过 70% 的节点连续 3 天以上超时断联，且公告反复复读“上游机房故障抢修中”，说明其根本没有备用物理线路，且已无力向机房补交欠费。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">真相复盘：所谓“海缆挖断”在绝大多数情况下只是无力支付机房月租遭强制拔线的托词。</span>
      </div>

      <!-- Sign 5 -->
      <div class="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-2">
        <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
          <span>🚩 特征 5：</span>
          <span>核心官网域名频繁被墙，更换周期缩短至 1 周</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          优质老牌机场通常拥有多套 Anycast 智能防阻断前端，而濒危小机场因防护策略简陋，官网域名频繁被封。当您发现收藏的登录入口每周都在更换新数字后缀时，说明其技术防风控能力已全面失守。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">技术分析：频繁更换域名意味着其缺少正规离岸域名保护与 CDN 伪装，已进入合规高危清洗名单。</span>
      </div>

      <!-- Sign 6 -->
      <div class="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-2">
        <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
          <span>🚩 特征 6：</span>
          <span>偷偷调高节点倍率（从 1.0x 偷改至 3.0x - 5.0x）</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          为了在不增加带宽成本的前提下削减用户负载，不良商家会悄悄修改节点消耗倍率。原本下载 10GB 流量的文件，账户后台实际被扣除了 30GB 至 50GB。这种隐蔽的“偷跑流量”行径，是运营者资金捉襟见肘的明确信号。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">避坑建议：认准光速云等全节点坚持 1.0x 真实计费的诚信服务商，拒绝高倍率偷跑套路。</span>
      </div>

      <!-- Sign 7 -->
      <div class="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-2">
        <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
          <span>🚩 特征 7：</span>
          <span>支付通道频繁跳单，强制切换为个人收款码或 USDT</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          正规第三方聚合支付渠道会进行严格的资金结算风控。当机场的正规商户收款接口因投诉过多被冻结后，会开始频繁采用“个人微信赞赏码”、“个人转账”甚至“只支持虚拟货币 USDT 充值”。虚拟币支付意味着资金完全无法追溯，维权成功率为零。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">风险警示：凡是只接受虚拟币支付的不知名小机场，跑路概率在 90% 以上。</span>
      </div>

      <!-- Sign 8 -->
      <div class="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-2">
        <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
          <span>🚩 特征 8：</span>
          <span>域名 Whois 到期时间不足 30 天且未续费</span>
        </div>
        <p class="text-text-secondary leading-relaxed">
          通过 <code>whois</code> 工具查询官网根域名注册周期。正常长期经营的品牌（如光速云）域名通常一次性续费 5 至 10 年。若一家宣称是“老牌专线”的机场，其域名将在未来 1 个月内到期却迟迟未续费，说明管理者已做好随时弃站跑路的准备。
        </p>
        <span class="text-[10px] text-text-secondary/80 block italic">自查命令：在终端输入 whois 官网域名，重点观察 Registry Expiry Date 字段。</span>
      </div>
    </div>

    <!-- Risk Level Meter Table -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-3 font-mono text-xs">
      <h3 class="text-base font-bold text-text">
        📊 风险预警等级对照与自查行动指南
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">🟢 绿色安全区 (0 个异常特征)</span>
          <p class="text-text-secondary leading-relaxed">
            运营时间 &ge; 3年，正常月付/年付，工单在 12 小时内响应，节点保持 99.9% 在线。可放心正常使用。
          </p>
        </div>

        <div class="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5">
          <span class="text-amber-600 dark:text-amber-400 font-bold block mb-1">🟡 黄色预警区 (命中 1 - 2 个特征)</span>
          <p class="text-text-secondary leading-relaxed">
            存在偶发节点断联或客服变慢。<strong>立即停止任何续费</strong>，将套餐降级为单月订阅，并准备备用第二线路。
          </p>
        </div>

        <div class="p-3.5 rounded-xl border border-red-500/30 bg-red-500/5">
          <span class="text-red-600 dark:text-red-400 font-bold block mb-1">🔴 红色高危区 (命中 3 个及以上特征)</span>
          <p class="text-text-secondary leading-relaxed">
            跑路概率高达 95% 以上！<strong>立即撤出账号信息</strong>，对未履约订单向支付渠道发起投诉退款止损。
          </p>
        </div>
      </div>
    </div>
  </section>
`;
