/**
 * Organization profile used for JSON-LD (Organization, WebPage, BlogPosting publisher).
 * Official site profile for GitHub指南 (githubzhinan.homes).
 */
export const siteProfile = {
  name: 'GitHub指南',
  email: 'contact@githubzhinan.homes',
  sameAs: ['https://githubzhinan.homes'],
  /** Served from each app's `public/` folder. */
  logoPath: '/logo.svg',
  /** First publication of the site — used as WebPage `datePublished`. */
  launchDate: '2026-03-01',
};

/** Official site credits for humans.txt */
export const siteCredits = {
  team: [{ name: 'GitHub指南团队', role: 'Architect & Core Maintainers' }],
  thanks: ['Astro, Svelte, Tailwind CSS and the global open-source community'],
  technology: ['Astro', 'TypeScript', 'Svelte', 'Tailwind CSS', 'Cloudflare Workers'],
  note: 'GitHub指南 (githubzhinan.homes) — 开发者加速与开源进阶导航',
};
