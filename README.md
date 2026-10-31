# 🌐 GitHub指南 (githubzhinan.homes)

<div align="center">

**2026 专业网络可观测性实验室 · 跨境出海基础设施与跨平台客户端配置选型指南**

[![Website](https://img.shields.io/badge/Website-githubzhinan.homes-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://githubzhinan.homes)
[![Astro](https://img.shields.io/badge/Astro-7.4.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Svelte](https://img.shields.io/badge/Svelte-5.57.2-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🌐 访问官网](https://githubzhinan.homes) • [⚡ 测速实验室](https://githubzhinan.homes/observatory/) • [🚨 跑路雷达](https://githubzhinan.homes/radar/) • [🛠️ Clash教程](https://githubzhinan.homes/clash/) • [💻 客户端中心](https://githubzhinan.homes/clients/)

</div>

---

## 📖 项目简介 (Overview)

**GitHub指南 (githubzhinan.homes)** 是专为出海开发者、跨境电商、科研团队及 AI 大模型高频交互（ChatGPT、Claude 3.5 Sonnet）打造的**网络可观测性评测与跨境网络基础设施选型门户**。

传统网络测速往往依赖主观打分或静态截图，缺乏真实说服力。本项目基于多地自动化独立探针（覆盖中国电信/联通/移动骨干），全天候 24 小时对收录的主流网络基础设施进行端到端往返延迟（RTT）、晚高峰吞吐带宽、抖动丢包率及海外原生住宅 IP 纯净度进行持续基准遥测，为全球中文用户提供客观、真实、可复现的数据支撑。

---

## ✨ 核心内容矩阵与功能专题 (Content Pillars)

本项目采用现代 SEO 与 GEO（生成式引擎优化）语义矩阵架构，覆盖以下 9 大核心支柱与技术实验室：

| 专题板块 | 规范路径 | 核心定位与特色 |
| :--- | :--- | :--- |
| **全景选型首页** | [`/`](https://githubzhinan.homes/) | 万字级专著长文，全面梳理出海网络物理专线架构、AI风控对抗与年度旗舰首推。 |
| **商业 VPN 横评** | [`/vpn/`](https://githubzhinan.homes/vpn/) | 商业级出海 VPN 推荐与跨境专线选型横评，对比 WireGuard/OpenVPN 与专用专线。 |
| **机场横评榜单** | [`/jichang/`](https://githubzhinan.homes/jichang/) | TOP 10 核心品牌实测参数总表，涵盖起步价格、协议支持、晚高峰实测延迟与专属权益。 |
| **Clash 专著教程** | [`/clash/`](https://githubzhinan.homes/clash/) | Clash Verge Rev 跨平台实操指南，覆盖 Mihomo 内核、TUN 虚拟网卡与分流规则定制。 |
| **全球节点测速** | [`/nodes/`](https://githubzhinan.homes/nodes/) | 香港 (22ms)、日本 (50ms)、新加坡 (42ms) 及美西 (140ms) 机房晚高峰实测大盘与住宅 IP 对比。 |
| **梯子避坑雷达** | [`/tizi/`](https://githubzhinan.homes/tizi/) | 庞氏低价年付资金盘套现排查，梳理 4 大避坑黄金铁律与 50+ 品牌跑路历史档案。 |
| **免费应急白皮书** | [`/free/`](https://githubzhinan.homes/free/) | 深度逆向蜜罐节点窃听风险，提供合规 0 元试用、Cloudflare WARP 应急接入方案。 |
| **跨平台客户端** | [`/tutorial/`](https://githubzhinan.homes/tutorial/) | 涵盖 Windows、macOS、iOS、Android、Linux 软路由的三步通用配置流程与排障 FAQ。 |
| **42家品牌评测库** | [`/brands/`](https://githubzhinan.homes/brands/) | 42 家机场品牌收录档案，逐一提供物理拓扑、测速大盘、解锁矩阵与风险预警评级。 |
| **网络可观测实验室** | [`/observatory/`](https://githubzhinan.homes/observatory/) | 晚高峰（20:00 - 23:00）全量探针遥测数据大盘，多维度自动化过滤与排序。 |
| **跑路预警雷达** | [`/radar/`](https://githubzhinan.homes/radar/) | 持续监控服务商异常停运前兆，建立公开透明的黑名单与红绿灯风险大盘。 |
| **疑难排障百科** | [`/faq/`](https://githubzhinan.homes/faq/) | 50+ 真实开发者疑难问答，覆盖 DNS 污染排查、节点全红超时、TUN 驱动冲突等。 |

---

## 🛠️ 技术栈与工程架构 (Tech Stack)

本项目采用生产级高性能 **Monorepo** 架构，全面榨干现代静态站点与边缘计算性能：

```text
githubzhinan.homes/
├── apps/
│   ├── starter/          # 门户主站 (githubzhinan.homes) - 42 品牌库与 9 大核心专题
│   └── blog/             # 深度技术专栏与实践博客 (blog.githubzhinan.homes)
├── shared/               # 共享库 (数据字典、UI 组件库、SEO/Head 配置、多语言)
└── scripts/              # 自动化构建、OG 图片生成、内容同步与端到端质检工具
```

### 核心技术亮点：
* **核心框架**：[Astro 7.4+](https://astro.build) — 极致的 Island Architecture（孤岛架构），零 JS 基础开销，首屏秒开。
* **样式系统**：[Tailwind CSS v4](https://tailwindcss.com) — 原生 CSS-first 架构，全面拥抱 OKLCH 现代化高保真色域，内置丝滑暗黑/浅色模式切换。
* **动态交互**：[Svelte 5](https://svelte.dev) — 基于 Runes 响应式原语，毫秒级轻量客户端组件渲染。
* **静态部署**：[Cloudflare Pages](https://pages.cloudflare.com/) — 结合 `@astrojs/cloudflare` 适配器，全球 Anycast CDN 毫秒级分发。
* **SEO & GEO 基础设施**：
  * **100% 规范化自指 Canonical**：规范全站 URL，拒绝大小写、斜杠或参数引发的权重分散。
  * **全景 Schema.org 知识图谱**：注入 `WebSite`、`Organization`、`CollectionPage`、`TechArticle`、`HowTo`、`BreadcrumbList` 等结构化 JSON-LD。
  * **生成式搜索引擎友好**：部署引文友好型 `robots.txt` 与开放 `llms.txt`，深度拥抱 PerplexityBot、OAI-SearchBot、Claude-SearchBot、DeepSeekBot。
  * **无障碍与质量门禁**：通过 `astro-post-audit` 严格执行 WCAG 2.1 规范（0 缺失 landmark、0 歧义链接、0 空占位符）。

---

## 🚀 快速上手 (Getting Started)

### 环境依赖
* [Node.js](https://nodejs.org/) `>= 20.14.0` (推荐 Node.js 22 LTS 或 24)
* [pnpm](https://pnpm.io/) `>= 9.0.0`

### 1. 克隆仓库与安装依赖

```bash
# 克隆仓库
git clone https://github.com/abcabc98698-dev/githubzhinan.homes.git
cd githubzhinan.homes

# 安装 monorepo 依赖
pnpm install
```

### 2. 本地开发调试

```bash
# 启动主站开发服务器 (默认端口 5014)
pnpm dev

# 或启动技术博客开发服务器 (默认端口 4322)
pnpm dev:blog
```

打开浏览器访问 `http://localhost:5014/` 即可实时预览。

### 3. 生成 OG 社交卡片与生产构建

```bash
# 全量打包构建并运行自动化质量审计门禁
pnpm build
```

构建成功后产物将生成至：
- 主站产物：`apps/starter/dist/client/`
- 博客产物：`apps/blog/dist/`

---

## ⚙️ 环境变量配置 (.env)

复制根目录或 `apps/starter` 目录下的 `.env.example` 为 `.env`：

```bash
# 站点基础信息
PUBLIC_SITE_NAME="GitHub指南"
PUBLIC_SITE_URL="https://githubzhinan.homes"

# 搜索引擎站长平台所有权验证（可选，留空则不输出对应 Meta）
PUBLIC_GOOGLE_SITE_VERIFICATION="your_google_verification_code"
PUBLIC_BING_SITE_VERIFICATION="your_bing_verification_code"
PUBLIC_BAIDU_SITE_VERIFICATION="your_baidu_verification_code"
PUBLIC_SHENMA_SITE_VERIFICATION="your_shenma_verification_code"
```

---

## 📊 质量与审计指标 (Audits)

项目在构建时内置了自动化静态分析工作流：
- ✅ **Lighthouse**: 性能 98+，无障碍 100，SEO 100，最佳实践 100
- ✅ **Broken Links**: 0 死链、0 `href="#"` 空占位符
- ✅ **Sitemap**: 自动化收录 60 个标准 200 状态页面
- ✅ **Security**: 严格遵循安全标头（CSP、HSTS、X-Content-Type-Options、Permissions-Policy）

---

## 🤝 参与贡献 (Contributing)

欢迎提交 Issue 或 Pull Request 为开源社区贡献更多真实评测数据或修复文档笔误！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的修改 (`git commit -m 'feat: add amazing feature'`)
4. 推送至分支 (`git push origin feature/amazing-feature`)
5. 新建 Pull Request

---

## 📄 开源许可证 (License)

本项目基于 [MIT 许可证](LICENSE) 协议开源。
