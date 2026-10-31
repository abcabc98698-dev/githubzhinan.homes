// scripts/build_home_monograph.js
const fs = require('fs');
const path = require('path');

const frontmatter = require('./home_monograph/frontmatter.js');
const ch1 = require('./home_monograph/ch1_executive.js');
const ch2 = require('./home_monograph/ch2_matrix_table.js');
const ch3 = require('./home_monograph/ch3_methodology.js');
const ch4 = require('./home_monograph/ch4_decision_tree.js');
const ch5 = require('./home_monograph/ch5_physical_topology.js');
const ch6 = require('./home_monograph/ch6_protocols.js');
const ch7 = require('./home_monograph/ch7_ai_unlock.js');
const ch8 = require('./home_monograph/ch8_dev_workflow.js');
const ch9 = require('./home_monograph/ch9_clients_tun.js');
const ch10 = require('./home_monograph/ch10_rule_routing.js');
const ch11 = require('./home_monograph/ch11_brand_ecosystem.js');
const ch12 = require('./home_monograph/ch12_faqs.js');

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

const targetPath = path.resolve(__dirname, '../apps/starter/src/pages/index.astro');
fs.writeFileSync(targetPath, fullPage, 'utf8');

const pureChineseMatches = fullPage.match(/[\u4e00-\u9fa5]/g) || [];
console.log('Homepage Monograph generated successfully!');
console.log('Target file:', targetPath);
console.log('Pure Chinese Characters count:', pureChineseMatches.length);
