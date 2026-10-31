// scripts/build_faq_monograph.js
const fs = require('fs');
const path = require('path');

const frontmatter = require('./faq_monograph/frontmatter.js');
const ch1 = require('./faq_monograph/ch1_fundamentals.js');
const ch2 = require('./faq_monograph/ch2_troubleshooting.js');
const ch3 = require('./faq_monograph/ch3_ai_streaming.js');
const ch4 = require('./faq_monograph/ch4_clients_tun.js');
const ch5 = require('./faq_monograph/ch5_commercial_security.js');
const ch6 = require('./faq_monograph/ch6_enterprise_workflow.js');

const fullPage = [
  frontmatter,
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
].join('\n');

const targetDir = path.resolve(__dirname, '../apps/starter/src/pages/faq');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetPath = path.join(targetDir, 'index.astro');
fs.writeFileSync(targetPath, fullPage, 'utf8');

const pureChineseMatches = fullPage.match(/[\u4e00-\u9fa5]/g) || [];
console.log('FAQ Monograph generated successfully!');
console.log('Target file:', targetPath);
console.log('Pure Chinese Characters count:', pureChineseMatches.length);
