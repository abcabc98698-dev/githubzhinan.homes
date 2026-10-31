// scripts/radar_monograph/ch10_enterprise_procurement.js
module.exports = `
  <!-- Chapter 10: Enterprise Procurement & Risk Control -->
  <section id="enterprise-risk-control" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 10</span>
        <span>·</span>
        <span>企业出海内控防线</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        10. 跨境出海团队网络资产采购与内控规范指南
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        对于拥有跨国业务团队、海外店铺管理（亚马逊/TikTok Shop）或国际学术科研机构的企业而言，网络代理绝非个人玩具，而是直接关系到资金流与知识产权的核心基础设施。建立规范的企业级采购尽调制度，是杜绝生产事故的关键。
      </p>
    </div>

    <div class="space-y-6">
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
        <h3 class="text-lg font-bold text-text">
          企业采购尽职调查 Checklist（4 项关键安全红线）
        </h3>

        <div class="space-y-3 font-mono text-xs text-text-secondary leading-relaxed">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">✅ 检查项 1：服务商历史存活年限审查（必须 &ge; 3 年）</strong>
            <p>
              通过全球 Whois 数据库核查服务商官网域名的注册历史与所有权变更记录。坚决拒绝任何成立时间不足 2 年的年轻服务商作为企业级业务主力。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">✅ 检查项 2：技术物理架构必须为二层物理专线</strong>
            <p>
              要求服务商提供真实的 IEPL/IPLC 二层以太网专线，杜绝任何公网中转伪专线，确保研发团队代码提交（Git Push）与容器拉取不经过公网 GFW 审查。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">✅ 检查项 3：落地 IP 必须为商业原生住宅/ISP 级别</strong>
            <p>
              跨境电商运营（如 Amazon 卖家后台）与海外社媒运营，严禁使用廉价云厂商数据中心机房 IP，必须采购光速云进阶/企业版等商业原生住宅 IP，杜绝因 IP 关联导致店铺被封。
            </p>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40">
            <strong class="text-text block mb-1">✅ 检查项 4：企业主备双活冗余制度</strong>
            <p>
              公司内网路由器必须部署主备双专线策略，主力选用高速年付专线，备用选用光速云斯诺克 147 永久套餐，实现自动化 50ms 故障倒换。
            </p>
          </div>
        </div>
      </div>

      <!-- 10.2 Enterprise Business Continuity Drill -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          10.2 企业跨国网络业务连续性（BCP）应急演练规范
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          成熟出海团队应当每季度组织一次“断网红蓝对抗演练”：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-1">
            <strong class="text-text block">1. 模拟主干切断：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              在办公网关上人为拉断主力机场的出口路由，观察备用线路（如斯诺克 147 永久专线）是否在 60 秒内全自动无感顶上。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-1">
            <strong class="text-text block">2. IP 指纹漂移检查：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              检查切换后员工设备的公网出口 IP 是否依然维持在同一地理网段内，杜绝海外电商店铺或银行被动触发异地异常风控。
            </p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-1">
            <strong class="text-text block">3. 权限与凭据轮换：</strong>
            <p class="text-text-secondary text-[11px] leading-relaxed">
              确保所有员工均使用公司统一分配的带权限鉴权的订阅链接，禁止员工私自将公司代码上传至个人私购的不知名小机场中。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
