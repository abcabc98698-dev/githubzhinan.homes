// scripts/free_monograph/ch4_cloudflare_warp.js
module.exports = `
  <!-- Chapter 4: Enterprise Cloud & Cloudflare WARP Free Tiers -->
  <section id="cloudflare-warp" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 04</span>
        <span>·</span>
        <span>大厂合规白嫖指南</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        4. 真正合规安全的 0 元方案：Cloudflare WARP 与大厂免费层全景实操
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        如果不愿花钱购买商业机场，又坚决拒绝黑客蜜罐节点，全球顶级云计算基础设施巨头提供的官方免费层（Free Tier）是唯一的安全合规白嫖路径：
      </p>
    </div>

    <div class="space-y-6">
      <!-- Plan 1: Cloudflare WARP -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-xl font-bold text-text">
            4.1 方案 A：Cloudflare 1.1.1.1 (WARP / WireGuard) 官方免费出海加速
          </h3>
          <span class="px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
            官方 0 成本
          </span>
        </div>

        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Cloudflare 是全球最大的 CDN 与边缘安全服务商，其面向公众推出的 <strong>1.1.1.1 with WARP</strong> 客户端基于现代化 WireGuard UDP 协议，由 Cloudflare 遍布全球 300+ 城市的超级数据中心全免费承载。
        </p>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-3 font-mono text-xs">
          <strong class="text-text block text-sm">💡 国内直连 WARP 优化实操三步法：</strong>
          <ol class="list-decimal pl-5 space-y-1.5 text-text-secondary leading-relaxed">
            <li><strong>生成合法 WireGuard 配置：</strong>在开源社区下载 <code>warp-reg</code> 工具，本地一键注册获取专属于您的 WARP 免费许可证与 <code>wg0.conf</code> 私钥。</li>
            <li><strong>本地 IP 优选（Endpoint Optimization）：</strong>国内直连 Cloudflare 默认 IP 经常被限速或丢包。运行开源 <code>CloudflareST（测速优选脚本）</code>，在本地测量到香港、新加坡、台湾 Anycast 节点的丢包率，筛选出延迟低于 80ms 的优选 IP 节点。</li>
            <li><strong>导入 Clash Verge 或 Sing-box：</strong>将筛选出的优选 Endpoint（如 <code>162.159.193.10:2408</code>）填入客户端 WireGuard 节点配置中，即可享受无限量免费加密出海。</li>
          </ol>
        </div>

        <div class="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 font-mono text-xs text-text-secondary leading-relaxed">
          <strong class="text-amber-600 dark:text-amber-400 block mb-1">⚠️ WARP 方案的局限性客观提示：</strong>
          <p>
            由于 Cloudflare 的出口 IP 全部属于公共机房 IP，且 IP 归属地大多由 Cloudflare 边缘节点动态分配，因此<strong>无法稳定解锁 ChatGPT、Claude 3.5 Sonnet 与 Netflix 非自制剧</strong>；此外晚高峰时期部分省份运营商会对 UDP 端口实施 QoS 限速（速度限制在 1-5Mbps），适合轻量文本搜索、维基百科查阅与紧急备用。
          </p>
        </div>
      </div>

      <!-- Plan 2: Cloudflare Zero Trust Free Tier -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-xl font-bold text-text">
            4.2 方案 B：Cloudflare Zero Trust（Cloudflare One 免费 50 席位）私有网关
          </h3>
          <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
            企业级免费层
          </span>
        </div>

        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          针对 50 人以下的小团队或个人极客，Cloudflare 官方免费提供了极具诚意的 <strong>Cloudflare Zero Trust</strong> 免费套餐：
        </p>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs space-y-2 text-text-secondary leading-relaxed">
          <p><strong>核心架构优势：</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>官方 50 个免费席位：</strong>可以为自己的电脑、手机、以及最多 50 名亲友分配独立的 Zero Trust 客户端身份证书。</li>
            <li><strong>内置安全 DNS 过滤：</strong>在 Cloudflare 控制台内可直接配置 DoH 过滤策略，自动拦截全网恶意钓鱼网站与成人不良内容。</li>
            <li><strong>Cloudflare Tunnel（内网穿透）：</strong>无需公网固定 IP，即可将本地家庭 NAS、本地 Web 服务通过安全的 HTTPS 隧道免费反代发布到公网。</li>
          </ul>
        </div>
      </div>

      <!-- Plan 3: Public Cloud Free Tiers -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          4.3 方案 C：AWS / Oracle Cloud / Google Cloud 免费层避坑要诀
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          全球主流云计算巨头均设有面向开发者的免费层，但如果缺乏经验，极易产生巨额“反向扣费账单”：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block text-sm">AWS 免费套餐</strong>
            <p class="text-text-secondary">每月免费赠送 100GB 出站流量与 750 小时 EC2 微型实例。注意：超过 100GB 后每 GB 按 ¥0.65 强制扣信用卡，严禁用于跑 BT 下载。</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block text-sm">Oracle 甲骨文永久免费</strong>
            <p class="text-text-secondary">提供最高 4 核心 24GB 内存的 ARM 实例与每月 10TB 免费出站流量。缺点是注册审核极其严苛，且常有无预警封号收回实例的“玄学砍单”风险。</p>
          </div>
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-2">
            <strong class="text-text block text-sm">Google Cloud 试用金</strong>
            <p class="text-text-secondary">新用户赠送 $300 美元抵扣金（有效期 90 天）。必须在控制台设置严格的“预算警报（Budget Alert）”，防止抵扣金耗尽后信用卡被直接透支扣款。</p>
          </div>
        </div>
      </div>

      <!-- Plan 4: GitHub Speedup Mirros -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          4.4 方案 D：面向科研与开发者的 0 成本 GitHub 极速镜像工具箱
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          如果您科学上网的核心诉求仅仅是拉取 GitHub 开源代码、下载 Release 发布包或编译依赖，完全无需挂代理，直接利用国内合规学术镜像即可跑满千兆带宽：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-1.5 overflow-hidden">
            <strong class="text-emerald-600 dark:text-emerald-400 block text-sm">Git Clone 终端镜像加速</strong>
            <p class="text-text-secondary">在 Git 仓库链接前直接添加免费反向代理前缀：</p>
            <code class="block p-2 rounded bg-bg text-text border border-border break-all overflow-x-auto text-[11px]">git clone https://ghproxy.net/https://github.com/user/repo.git</code>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 space-y-1.5 overflow-hidden">
            <strong class="text-emerald-600 dark:text-emerald-400 block text-sm">Release 大文件高速下载加速</strong>
            <p class="text-text-secondary">使用国内高校或公益 CDN 镜像节点加速二进制文件下载：</p>
            <code class="block p-2 rounded bg-bg text-text border border-border break-all overflow-x-auto text-[11px]">https://mirror.ghproxy.com/https://github.com/.../release.zip</code>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
