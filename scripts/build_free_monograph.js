// scripts/build_free_monograph.js
const fs = require('fs');
const path = require('path');

const frontmatter = require('./free_monograph/frontmatter.js');
const ch1 = require('./free_monograph/ch1_free_truth.js');
const ch2 = require('./free_monograph/ch2_honeypot_teardown.js');
const ch3 = require('./free_monograph/ch3_verified_trials.js');
const ch4 = require('./free_monograph/ch4_cloudflare_warp.js');
const ch5 = require('./free_monograph/ch5_cost_audit.js');
const ch7 = require('./free_monograph/ch7_academic_research.js');
const ch8 = require('./free_monograph/ch8_security_hardening.js');
const ch9 = require('./free_monograph/ch9_community_audit.js');
const ch10 = require('./free_monograph/ch10_enterprise_free_myths.js');
const ch6 = require('./free_monograph/ch6_guangsu_bridge.js');

const fullPage = [
  frontmatter,
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch7,
  ch8,
  ch9,
  ch10,
  ch6,
].join('\n');

const targetDir = path.resolve(__dirname, '../apps/starter/src/pages/free');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetPath = path.join(targetDir, 'index.astro');
fs.writeFileSync(targetPath, fullPage, 'utf8');

const pureChineseMatches = fullPage.match(/[\u4e00-\u9fa5]/g) || [];
console.log('Free Monograph generated successfully!');
console.log('Target file:', targetPath);
console.log('Pure Chinese Characters count:', pureChineseMatches.length);
