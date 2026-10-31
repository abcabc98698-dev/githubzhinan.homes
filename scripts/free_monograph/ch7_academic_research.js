// scripts/free_monograph/ch7_academic_research.js
module.exports = `
  <!-- Chapter 7: Academic Research & University Student Free Tools Guide -->
  <section id="academic-research" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 07</span>
        <span>·</span>
        <span>高校学术与科研加速专题</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        7. 高校科研与研究生文献检索合规 0 成本加速方案
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        针对广大学生群体与高校科研人员在阅读 Google Scholar、IEEE Xplore、Nature、Science 与 arXiv 论文时的现实困境，本章梳理教育部正规 CARSI 联盟、校园网 IPv6 绿色通道与学术镜像方案。
      </p>
    </div>

    <div class="space-y-6">
      <!-- Section 7.1: CARSI -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.1 充分利用国家级教育网资源：CARSI 联盟校外文献直连
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          许多高校研究生在校外租房或寒暑假回家时，以为必须购买代理才能下载知网或外文文献，这实际上忽视了教育部提供的最强官方免费工具——<strong>CARSI（中国教育科研计算机网统一认证与资源共享基础设施）</strong>。
        </p>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs space-y-2 text-text-secondary leading-relaxed">
          <strong class="text-indigo-600 dark:text-indigo-400 block text-sm">💡 CARSI 零成本使用指南：</strong>
          <p>
            访问外文数据库（如 ScienceDirect / SpringerLink / IEEE Xplore）登录页面时，不要点击账号密码登录，而是寻找 <strong>“Institutional Login（机构登录）”</strong> 或 <strong>“Sign in via your institution”</strong>。在所属联盟中选择“China CERNET Federation (CARSI)”，输入您所在高校的校名，页面将跳转至您学校的统一身份认证（教务系统/学号密码），登录成功后即可完全免费、不限流量下载全库 PDF 论文。
          </p>
        </div>
      </div>

      <!-- Section 7.2: IPv6 Free Gateway -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.2 高校校园网 IPv6 免流量直连海外学术站点
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          国内绝大多数 985/211 高校的 CERNET2 骨干网原生开通了纯正的 IPv6 双栈。在教育网内部，<strong>IPv6 流量不计入校园网月度付费流量账单</strong>，且对部分海外教育网节点（如海外高校互联、OpenStreetMap、维基百科 IPv6 节点）具备直连低延时路由。
        </p>
        <ul class="list-disc pl-5 font-mono text-xs text-text-secondary space-y-2 leading-relaxed">
          <li><strong>校园网 IPv6 Host 直连优化：</strong>通过配置开源的学术 IPv6 Hosts 文件，将 <code>scholar.google.com</code>、<code>arxiv.org</code> 强制解析到海外教育网权威纯 IPv6 地址上，可实现零成本直连访问。</li>
          <li><strong>局限性说明：</strong>该方案仅适用于文本学术浏览，无法绕过海外商业 AI（ChatGPT、Claude）对国内教育网 IP 的地域限制。</li>
        </ul>
      </div>

      <!-- Section 7.3: Academic Proxying vs IEPL -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.3 为什么科研写论文严禁使用公共免费节点？
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          学术诚信与学术成果安全是科研人员的生命线。将公共免费节点用于学术研究存在三大致命隐患：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-1.5">
            <strong class="text-red-600 dark:text-red-400 block text-sm">实验数据与代码外泄</strong>
            <p class="text-text-secondary">在通过免费节点连接 HuggingFace、GitHub Private 仓库拉取未发表的实验代码时，未加密的 Token 可能被蜜罐节点完全捕获，导致毕业研究成果被抢先发表。</p>
          </div>
          <div class="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-1.5">
            <strong class="text-red-600 dark:text-red-400 block text-sm">文献下载频繁触发人机验证</strong>
            <p class="text-text-secondary">Cloudflare 会对公共节点 IP 弹出极其严苛的验证码，甚至在连续点击 3 篇文献后直接将 IP 封禁 24 小时，严重拖慢毕业论文开题进度。</p>
          </div>
          <div class="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1.5">
            <strong class="text-emerald-600 dark:text-emerald-400 block text-sm">推荐：低成本专线备用</strong>
            <p class="text-text-secondary">研究生群体推荐光速云斯诺克 147 永久套餐或入门年付 ¥99，全实验室多台设备共享专线，彻底杜绝学术断网与数据安全隐患。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
