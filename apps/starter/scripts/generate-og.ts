/**
 * Generate OG images for all static pages.
 * Run with: npx tsx scripts/generate-og.ts
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateOgImage } from '@astro-v7/shared/utils/og';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const fontPath = require.resolve('@fontsource/inter/files/inter-latin-700-normal.woff');
const fontData = readFileSync(fontPath);

const outDir = join(__dirname, '..', 'public', 'og');

const pages = [
  {
    file: 'home.png',
    title: 'GitHub指南 (githubzhinan.homes)',
    description: '精选高效的 GitHub 开发技巧、Actions 工作流实操与开源工程实践。',
  },
  {
    file: 'en/home.png',
    title: 'GitHub Guide (githubzhinan.homes)',
    description:
      'Curated GitHub developer practices, Actions CI/CD automation, and open-source project accelerators.',
  },
  ];

async function main() {
  for (const page of pages) {
    const outPath = join(outDir, page.file);
    mkdirSync(join(outPath, '..'), { recursive: true });

    const png = await generateOgImage(
      { title: page.title, description: page.description, siteName: 'GitHub指南' },
      fontData
    );

    writeFileSync(outPath, png);
    console.log(`  ✓ ${page.file}`);
  }
}

console.log('Generating OG images...');
main().then(() => console.log('Done.'));
