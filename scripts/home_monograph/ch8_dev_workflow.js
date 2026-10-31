// scripts/home_monograph/ch8_dev_workflow.js
module.exports = `
  <!-- Chapter 8: Developer & Academic Acceleration SOP -->
  <section id="dev-workflow-accelerate" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 08</span>
        <span>·</span>
        <span>研发出海实战加速</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        8. 跨国研发与科研工作流加速实战指南
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        现代软件工程与跨国科研高度依赖开源生态。然而，许多工程师常常遇到“浏览器明明能科学上网，但在终端命令行里执行 Git clone、Docker pull 或 pip install 依然超时失败”的怪现象。本章提供开箱即用的工业级配置代码。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 8.1 Terminal Environment Variables -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.1 终端命令行全局代理配置 (PowerShell / Bash / Zsh)
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          操作系统的“系统代理”仅接管基于系统网络库的浏览器软件，终端进程默认直接向公网发起裸连。要让命令行通过代理转发，必须显式声明环境变量（以本地 Clash / Sing-box 默认 <code>7890</code> 端口为例）：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <!-- Windows PowerShell -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">🪟 Windows PowerShell 配置：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 临时为当前 PowerShell 会话启用代理
$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"

# 验证当前外部公网 IP
curl https://api.ipify.org</code></pre>
          </div>

          <!-- macOS & Linux -->
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">🍎 macOS / Linux (Bash / Zsh) 配置：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 临时为当前终端启用代理
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
export all_proxy="socks5://127.0.0.1:7890"

# 验证当前外部公网 IP
curl cip.cc</code></pre>
          </div>
        </div>
      </div>

      <!-- 8.2 Git Precision Acceleration -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.2 GitHub 精准加速配置（支持 HTTP 与 SSH 双协议）
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          许多工程师误将 <code>git config --global http.proxy</code> 设为全局代理，导致访问公司内网私有 GitLab 时也走海外节点而报错。最佳实践是仅针对 <code>github.com</code> 域名配置局部加速：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">📌 HTTPS 协议局部代理：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 仅对 github.com 域名生效的精准配置
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

# 若日后需取消配置，执行：
git config --global --unset http.https://github.com.proxy</code></pre>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">🔑 SSH 协议专用代理 (~/.ssh/config)：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 编辑 ~/.ssh/config 文件追加如下内容：
Host github.com
  User git
  # Windows 系统使用 connect.exe:
  ProxyCommand connect -H 127.0.0.1:7890 %h %p
  # macOS / Linux 系统使用 nc (netcat):
  # ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p</code></pre>
          </div>
        </div>
      </div>

      <!-- 8.3 Docker & HuggingFace Acceleration -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.3 Docker Hub 镜像拉取与 HuggingFace 大模型加速
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          对于深度学习科研与容器化部署场景，Docker 与 HuggingFace 频繁需要拉取几 GB 到几十 GB 的权重文件，必须配置可靠的守护进程转发：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">🐳 Docker Daemon 守护进程代理：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 创建 systemd 扩展目录
sudo mkdir -p /etc/systemd/system/docker.service.d
# 写入代理配置
cat &lt;&lt;EOF | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
EOF
# 重载并重启服务
sudo systemctl daemon-reload
sudo systemctl restart docker</code></pre>
          </div>

          <div class="p-4 rounded-xl border border-border bg-bg-secondary/60">
            <span class="font-bold text-text block mb-2">🤗 HuggingFace 权重极速拉取：</span>
            <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code># 开启国内镜像缓存或配置多线程下载
export HF_ENDPOINT="https://hf-mirror.com"

# 在 Python 代码中通过代理拉取
import os
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"
from huggingface_hub import snapshot_download</code></pre>
          </div>
        </div>
      </div>

      <!-- 8.4 VS Code & Cursor IDE Proxy Setup -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          8.4 Cursor AI 与 VS Code 智能编程辅助网络配置
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          在现代 AI 辅助研发中，Cursor 与 VS Code GitHub Copilot 会向远端模型 API 发起持续的高频流式（SSE）长连接。如果网络存在丢包或被墙，代码补全会出现长达数秒的卡顿停滞：
        </p>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 font-mono text-xs">
          <span class="font-bold text-text block mb-2">🛠️ settings.json 代理集成配置：</span>
          <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code>&#123;
  // 指定本地代理客户端端口
  "http.proxy": "http://127.0.0.1:7890",
  // 严格 SSL 证书校验模式 (配合专线建议设为 true，若有自建证书可设为 false)
  "http.proxyStrictSSL": false,
  // 代理支持模式：优先使用操作系统环境支持
  "http.proxySupport": "override"
&#125;</code></pre>
        </div>
      </div>
    </div>
  </section>
`;
