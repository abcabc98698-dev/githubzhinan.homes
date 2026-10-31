import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const starterDist = path.join(rootDir, 'apps', 'starter', 'dist', 'client');
const blogDistBlog = path.join(rootDir, 'apps', 'blog', 'dist', 'client', 'blog');
const targetDist = path.join(rootDir, 'dist');

console.log('[prepare-dist] Preparing root dist folder for Cloudflare Pages deployment...');

if (!fs.existsSync(starterDist)) {
  console.error(`[prepare-dist] Error: Source directory does not exist: ${starterDist}`);
  process.exit(1);
}

// Clean target dist
if (fs.existsSync(targetDist)) {
  fs.rmSync(targetDist, { recursive: true, force: true });
}

// Copy starter/dist/client to root dist
fs.cpSync(starterDist, targetDist, { recursive: true });
console.log(`[prepare-dist] Copied starter client from ${starterDist} -> ${targetDist}`);

// If blog exists, copy /blog/ to targetDist/blog
if (fs.existsSync(blogDistBlog)) {
  const targetBlog = path.join(targetDist, 'blog');
  fs.cpSync(blogDistBlog, targetBlog, { recursive: true });
  console.log(`[prepare-dist] Copied blog content to ${targetBlog}`);
}

// Verify critical SEO files exist
const criticalFiles = ['index.html', 'robots.txt', 'sitemap.xml', '404.html'];
for (const file of criticalFiles) {
  const filePath = path.join(targetDist, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`[prepare-dist] Warning: Expected file missing: ${file}`);
  } else {
    console.log(`[prepare-dist] Verified: ${file} exists (${fs.statSync(filePath).size} bytes)`);
  }
}

console.log('[prepare-dist] Done! Root dist directory ready for Cloudflare Pages.');
