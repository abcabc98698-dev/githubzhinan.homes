// scripts/verify_and_capture_matrix.js
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\Pro User\\.gemini\\antigravity\\brain\\29f50a72-9e61-4f36-ba27-e4c474092cf5';

async function main() {
  const browser = await chromium.launch();
  const pages = [
    { urlPath: '/radar/', name: 'radar' },
    { urlPath: '/faq/', name: 'faq' },
    { urlPath: '/free/', name: 'free' },
  ];

  for (const p of pages) {
    console.log(`Checking ${p.urlPath}...`);

    // 1. Desktop 1280px
    const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(`http://localhost:5014${p.urlPath}`, { waitUntil: 'networkidle' });
    const desktopShot = path.join(artifactDir, `${p.name}-desktop.png`);
    await desktopPage.screenshot({ path: desktopShot, clip: { x: 0, y: 0, width: 1280, height: 900 } });
    console.log(`Captured ${desktopShot}`);
    await desktopContext.close();

    // 2. Mobile 375px (iPhone SE viewport)
    const mobileContext = await browser.newContext({ viewport: { width: 375, height: 667 } });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`http://localhost:5014${p.urlPath}`, { waitUntil: 'networkidle' });

    // Measure horizontal overflow
    const overflow = await mobilePage.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      return { scrollWidth, innerWidth, hasOverflow: scrollWidth > innerWidth };
    });
    console.log(`Mobile 375px overflow check for ${p.urlPath}:`, overflow);

    const mobileShot = path.join(artifactDir, `${p.name}-mobile.png`);
    await mobilePage.screenshot({ path: mobileShot, clip: { x: 0, y: 0, width: 375, height: 900 } });
    console.log(`Captured ${mobileShot}`);
    await mobileContext.close();
  }

  await browser.close();

  // Copy dist HTML files to artifacts directory for review
  const htmlCopies = [
    { src: 'apps/starter/dist/client/radar/index.html', dest: 'radar_review.html' },
    { src: 'apps/starter/dist/client/faq/index.html', dest: 'faq_review.html' },
    { src: 'apps/starter/dist/client/free/index.html', dest: 'free_review.html' },
  ];

  for (const item of htmlCopies) {
    if (fs.existsSync(item.src)) {
      const target = path.join(artifactDir, item.dest);
      fs.copyFileSync(item.src, target);
      console.log(`Copied ${item.src} to ${target}`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
