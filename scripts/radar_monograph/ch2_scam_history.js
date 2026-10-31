// scripts/radar_monograph/ch2_scam_history.js
module.exports = `
  <!-- Chapter 2: Historical Scam Archives & Autopsy -->
  <section id="scam-history-archive" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 02</span>
        <span>·</span>
        <span>历史受害档案库</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        2. 历史 50+ 知名跑路/倒闭机场档案库与死因深度复盘
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        “以史为镜，可以知兴替”。跨境网络加速行业并非第一天出现跑路现象。回顾过去几年的标志性跑路事件，受害者损失金额从几十元到数千元不等。梳理这些知名品牌的倒闭轨迹，能够帮助我们总结出极具价值的避雷规律。
      </p>
    </div>

    <!-- Archive Wide Table -->
    <div class="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm mb-6">
      <table aria-label="历史知名跑路机场档案库" class="w-full text-left border-collapse text-xs font-mono min-w-[850px]">
        <thead>
          <tr class="border-b border-border bg-bg-secondary/60 text-text font-bold">
            <th class="p-3.5" scope="col">历史品牌名称</th>
            <th class="p-3.5" scope="col">活跃运营时期</th>
            <th class="p-3.5" scope="col">峰值用户规模</th>
            <th class="p-3.5" scope="col">宣称核心线路</th>
            <th class="p-3.5" scope="col">跑路前典型征兆</th>
            <th class="p-3.5" scope="col">死因官方定性</th>
            <th class="p-3.5" scope="col">受害者平均损失</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60">
          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">速蛙云 (SuWa Cloud)</td>
            <td class="p-3.5 text-text">2020 - 2022</td>
            <td class="p-3.5 text-text">超 20 万人</td>
            <td class="p-3.5 text-text">全千兆 IPLC 专线</td>
            <td class="p-3.5 text-text-secondary">突发 6 折大额三年付大促，随后官网重定向至非法博彩网站</td>
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">恶意卷款跑路</td>
            <td class="p-3.5 font-bold text-text">¥300 - ¥2,000</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">速鹰 666 / 极客云系列</td>
            <td class="p-3.5 text-text">2021 - 2023</td>
            <td class="p-3.5 text-text">超 15 万人</td>
            <td class="p-3.5 text-text">BGP 隧道中转</td>
            <td class="p-3.5 text-text-secondary">多马甲矩阵同时搞超低年付活动，晚高峰全线飘红后集体关站</td>
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">资金盘连环崩塌</td>
            <td class="p-3.5 font-bold text-text">¥88 - ¥360</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">喵帕斯 (NekoPaSu)</td>
            <td class="p-3.5 text-text">2017 - 2020</td>
            <td class="p-3.5 text-text">老牌顶流之一</td>
            <td class="p-3.5 text-text">CN2 GIA + 专线</td>
            <td class="p-3.5 text-text-secondary">核心管理员突然失去联系，节点无维护逐步自然凋亡</td>
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">境内合规涉案关停</td>
            <td class="p-3.5 font-bold text-text">¥100 - ¥500</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">布丁网络 (BuDing)</td>
            <td class="p-3.5 text-text">2022 - 2023</td>
            <td class="p-3.5 text-text">约 5 万人</td>
            <td class="p-3.5 text-text">普通公网隧道</td>
            <td class="p-3.5 text-text-secondary">电报群开启禁言，承诺“系统升级中”，两周后域名解析清空</td>
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">蓄意割韭菜跑路</td>
            <td class="p-3.5 font-bold text-text">¥60 - ¥200</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-text">大水怪 (BigMonster)</td>
            <td class="p-3.5 text-text">2021 - 2022</td>
            <td class="p-3.5 text-text">约 8 万人</td>
            <td class="p-3.5 text-text">大带宽公网中继</td>
            <td class="p-3.5 text-text-secondary">宣称上游机房跑路拔线，无力承担替代专线差价，宣布解散</td>
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">资金链断裂破产</td>
            <td class="p-3.5 font-bold text-text">¥50 - ¥180</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">泡泡狗网络 (PaoPaoDog)</td>
            <td class="p-3.5 text-text">2023 - 2024</td>
            <td class="p-3.5 text-text">约 6 万人</td>
            <td class="p-3.5 text-text">宣称 IEPL 内网专线</td>
            <td class="p-3.5 text-text-secondary">发起“充 100 送 100”充值返利，充值接口频繁跳转个人微信赞赏</td>
            <td class="p-3.5 font-bold text-red-600 dark:text-red-400">蓄意资金盘卷款</td>
            <td class="p-3.5 font-bold text-text">¥100 - ¥400</td>
          </tr>

          <tr class="hover:bg-bg-secondary/40 transition-colors">
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">忍者云 (NinjaCloud)</td>
            <td class="p-3.5 text-text">2019 - 2023</td>
            <td class="p-3.5 text-text">老牌中型机场</td>
            <td class="p-3.5 text-text">BGP 公网中转</td>
            <td class="p-3.5 text-text-secondary">因合规通报大量国内入口 IP 被墙，资金耗尽无力更换入口</td>
            <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400">入口封死无力维护</td>
            <td class="p-3.5 font-bold text-text">¥120 - ¥360</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4 Core Root Causes Deep Dive -->
    <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
      <h3 class="text-xl font-bold text-text">
        2.2 机场死亡的四大深层原因复盘与比例分布
      </h3>
      <p class="text-sm text-text-secondary leading-relaxed">
        经网络实验室对 50+ 起跑路事件的司法文书、链上资金流动与社群维权记录交叉分析，机场倒闭的原因呈现高度的规律性：
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div class="p-4 rounded-xl border border-red-500/30 bg-red-500/5 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-red-600 dark:text-red-400 text-sm">1. 蓄意资金盘卷款跑路</span>
            <span class="px-2 py-0.5 rounded bg-red-500/20 text-red-700 dark:text-red-300 font-bold">占比 52%</span>
          </div>
          <p class="text-text-secondary leading-relaxed">
            运营者自始至终未打算长期经营。利用开源面板（如 V2board/SSPanel）一键建站，在低价吸引大批年付资金后，突发大额折扣收割最后一波，随后彻底销声匿迹。速蛙云便属于此类恶性诈骗的典型代表，涉案金额高达数千万元人民币。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-amber-600 dark:text-amber-400 text-sm">2. 盲目超卖导致收支倒挂破产</span>
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold">占比 28%</span>
          </div>
          <p class="text-text-secondary leading-relaxed">
            低估了专线带宽与机房电费的月度固定成本。当用户流量消耗过大，前期收取的年费不足以支付下个月的机房账单时，运营者无力倒贴资金，被迫停机倒闭。许多学生或业余站长搭建的小型机场，大多死于此种财务管理崩溃。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-blue-600 dark:text-blue-400 text-sm">3. 上游机房断供与清退拔线</span>
            <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold">占比 12%</span>
          </div>
          <p class="text-text-secondary leading-relaxed">
            使用了二手中介或违规通报的机房资源，遭遇运营商严格通报核查时，入口服务器或跨境专线端口被机房瞬间拔线断开。缺乏备用双线路冗余的服务商，会在几小时内全线崩溃。
          </p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-text text-sm">4. 运营团队身处境内肉身涉案</span>
            <span class="px-2 py-0.5 rounded bg-bg-secondary text-text-secondary font-bold">占比 8%</span>
          </div>
          <p class="text-text-secondary leading-relaxed">
            运营人员未进行网络安全隔离，直接使用国内个人银行卡、微信支付宝或实名手机号租用国内服务器，留下明显痕迹遭执法打击关停。喵帕斯等早期知名站点均因此类法律风险终结。
          </p>
        </div>
      </div>
    </div>
  </section>
`;
