// scripts/build_radar_monograph.js
const fs = require('fs');
const path = require('path');

const frontmatter = require('./radar_monograph/frontmatter.js');
const ch1 = require('./radar_monograph/ch1_risk_executive.js');
const ch2 = require('./radar_monograph/ch2_scam_history.js');
const ch3 = require('./radar_monograph/ch3_eight_signs.js');
const ch4 = require('./radar_monograph/ch4_ponzi_math.js');
const ch5 = require('./radar_monograph/ch5_brand_audit.js');
const ch6 = require('./radar_monograph/ch6_fake_lines.js');
const ch7 = require('./radar_monograph/ch7_chargeback_sop.js');
const ch8 = require('./radar_monograph/ch8_disaster_redundancy.js');
const ch9 = require('./radar_monograph/ch9_long_term_choice.js');
const ch10 = require('./radar_monograph/ch10_enterprise_procurement.js');
const ch11 = require('./radar_monograph/ch11_blacklist_submission.js');
const ch12 = require('./radar_monograph/ch12_faqs.js');

const fullPage = [
  frontmatter,
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  ch7,
  ch8,
  ch9,
  ch10,
  ch11,
  ch12,
].join('\n');

const targetDir = path.resolve(__dirname, '../apps/starter/src/pages/radar');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetPath = path.join(targetDir, 'index.astro');
fs.writeFileSync(targetPath, fullPage, 'utf8');

const pureChineseMatches = fullPage.match(/[\u4e00-\u9fa5]/g) || [];
console.log('Radar Monograph generated successfully!');
console.log('Target file:', targetPath);
console.log('Pure Chinese Characters count:', pureChineseMatches.length);
