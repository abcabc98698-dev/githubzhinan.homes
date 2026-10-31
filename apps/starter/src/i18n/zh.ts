export default {
  // Nav
  'nav.home': '首页',
  'nav.contact': '联系与反馈',

  // Home
  'home.title': 'GitHub指南 (githubzhinan.homes)',
  'home.description':
    '精选高效的 GitHub 开发技巧、Actions 自动化工作流实战、开源项目成长与开发者加速导航。',
  'home.cta.docs': '查阅指南',
  'home.cta.contact': '联系与反馈',

  // Feature cards
  'feature.astro.title': '现代化架构',
  'feature.astro.desc':
    '基于高性能现代 Web 技术栈驱动，零运行时冗余，秒级页面渲染与极速响应。',
  'feature.tailwind.title': 'Tailwind CSS v4',
  'feature.tailwind.desc': '采用原生 CSS 变量与 OKLCH 广色域色彩空间，现代化设计系统与容器查询。',
  'feature.svelte.title': '轻量交互岛屿',
  'feature.svelte.desc': 'Svelte 5 响应式微前端岛屿，仅在需要交互时按需激活，保持整站轻巧高效。',
  'feature.biome.title': '极速代码规范',
  'feature.biome.desc': '端到端统一的代码格式化与静态检查，保持工程代码一致性与高维护度。',
  'feature.zod.title': '严谨类型校验',
  'feature.zod.desc': '全链路环境变量校验与表单接口防护，确保系统稳定可靠、零隐患运行。',
  'feature.darkmode.title': '全天候暗黑模式',
  'feature.darkmode.desc': '智能跟随系统偏好，支持平滑一键切换，为开发者提供舒适的阅读与工作体验。',
  'feature.webvitals.title': 'Core Web Vitals 极致优化',
  'feature.webvitals.desc':
    '真实用户性能监测 (RUM)，首屏加载、布局稳定性与交互延迟全绿指标保障。',

  // prop-for-that demo
  'demo.title': '交互特性与动态演示',
  'demo.description':
    '纯 CSS 驱动的响应式状态反馈与交互效果，不占用主线程 JS 渲染时间。',
  'demo.pointer.title': '指针倾角透视',
  'demo.pointer.desc':
    '将光标悬停在此卡片上，卡片将根据指针相对位置产生平滑的 3D 透视倾斜。',
  'demo.scroll.title': '视口渐入动效',
  'demo.scroll.desc':
    '当卡片随滚动进入视口范围时，自动平滑呈现，提升页面浏览韵律感。',
  'demo.range.title': '实时范围滑动条',
  'demo.range.desc': '拖动滑块查看数值变化，进度条通过纯 CSS 变量实时自适应映射。',
  'demo.scrollvelocity.title': '滚动速度感应',
  'demo.scrollvelocity.desc':
    '快速滚动页面，仪表条将根据滚动速度与方向产生实时动态响应。',
  'demo.clock.title': '实时高精度时钟',
  'demo.clock.desc': '硬件加速驱动的秒针指示，无需复杂 JavaScript 循环计算。',
  'demo.random.title': '随机色阶与角度',
  'demo.random.desc':
    '每个色块加载时独立生成专属色彩饱和度与微角度，打破单调视觉布局。',
  'demo.viewport.title': '视口尺寸实时读数',
  'demo.viewport.desc':
    '随意缩放当前浏览器窗口，尺寸数值通过 CSS 动态计算实时更新显示。',
  'demo.size.title': '容器自适应尺寸追踪',
  'demo.size.desc':
    '拖动边角改变容器尺寸，内置状态机制自动追踪宽高变化而无需额外监听器。',
  'demo.truncated.title': '文本截断自适应检测',
  'demo.truncated.desc': '当文本超出指定行数被折叠截断时，系统将自适应显示折叠标签。',
  'demo.truncated.sample':
    '这是一段专门用于演示自适应截断效果的长文本，当文本在容器内超出两行高度时，将自动激活省略状态并显示对应提示徽章。',
  'demo.truncated.badge': '已折叠截断',
  'demo.color.title': '动态拾色器绑定',
  'demo.color.desc': '选择不同颜色，色块背景将即时与颜色输入值完成双向绑定呈现。',

  // Contact
  'contact.title': '联系我们与意见反馈',
  'contact.description': '欢迎对 GitHub指南 提出宝贵建议、合作意向或技术反馈。',
  'contact.name': '称呼 / 开发者昵称',
  'contact.email': '联系邮箱',
  'contact.subject': '反馈主题',
  'contact.message': '详细说明',
  'contact.send': '提交反馈',
  'contact.success': '感谢您的留言！我们已收到您的反馈。',
  'contact.demoNotice':
    '您也可以直接通过 contact@githubzhinan.homes 发送邮件与团队取得联系。',

  // 404
  '404.title': '404 - 页面未找到',
  '404.text': '您访问的页面不存在或已被移动。',
  '404.back': '返回网站首页',

  // Footer
  'footer.built': '驱动于',
} as const;
