const fs = require('fs');
const path = require('path');

// 1. Files with navLinks:
const navFiles = [
  'apps/starter/src/components/HomePage.astro',
  'apps/starter/src/pages/brands/index.astro',
  'apps/starter/src/pages/brands/[slug].astro',
  'apps/starter/src/pages/clients/index.astro',
  'apps/starter/src/pages/observatory/index.astro',
];

for (const f of navFiles) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/\s*\{\s*href:\s*'\/contact\/',\s*label:\s*'反馈'\s*\},?/g, '');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated navLinks in:', f);
  }
}

// 2. StarterLayout.astro:
if (fs.existsSync('apps/starter/src/layouts/StarterLayout.astro')) {
  let layout = fs.readFileSync('apps/starter/src/layouts/StarterLayout.astro', 'utf8');
  layout = layout.replace(/\s*<a href="\/contact\/" class="hover:text-text no-underline">联系与反馈<\/a>/g, '');
  fs.writeFileSync('apps/starter/src/layouts/StarterLayout.astro', layout, 'utf8');
  console.log('Updated StarterLayout.astro');
}

// 3. Remove files if they exist
const filesToDelete = [
  'apps/starter/src/pages/contact.astro',
  'apps/starter/src/pages/en/contact.astro',
  'apps/starter/src/components/ContactPage.astro',
  'apps/starter/src/actions/contact.ts',
  'apps/starter/public/og/contact.png',
  'apps/starter/public/og/en/contact.png'
];

for (const f of filesToDelete) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log('Deleted:', f);
  }
}

// 4. apps/starter/src/actions/index.ts
fs.writeFileSync('apps/starter/src/actions/index.ts', 'export const server = {};\n', 'utf8');
console.log('Updated actions/index.ts');

// 5. astro.config.mjs
if (fs.existsSync('apps/starter/astro.config.mjs')) {
  let astroConfig = fs.readFileSync('apps/starter/astro.config.mjs', 'utf8');
  astroConfig = astroConfig.replace(
    "const onDemandRoutes = ['/contact/', '/en/contact/'];",
    "const onDemandRoutes = [];"
  );
  astroConfig = astroConfig.replace(
    /\{\s*title:\s*'Contact',\s*url:\s*'\/contact\/',\s*description:\s*'Example contact form\.'\s*\},?/g,
    ""
  );
  astroConfig = astroConfig.replace(
    /\{\s*title:\s*'English contact',\s*url:\s*'\/en\/contact\/',\s*description:\s*'German localized contact form\.'\s*\},?/g,
    ""
  );
  fs.writeFileSync('apps/starter/astro.config.mjs', astroConfig, 'utf8');
  console.log('Updated astro.config.mjs');
}

// 6. generate-og.ts
if (fs.existsSync('apps/starter/scripts/generate-og.ts')) {
  let ogScript = fs.readFileSync('apps/starter/scripts/generate-og.ts', 'utf8');
  ogScript = ogScript.replace(
    /\{\s*file:\s*'contact\.png'[\s\S]*?\},\s*/g,
    ''
  );
  ogScript = ogScript.replace(
    /\{\s*file:\s*'en\/contact\.png'[\s\S]*?\},\s*/g,
    ''
  );
  fs.writeFileSync('apps/starter/scripts/generate-og.ts', ogScript, 'utf8');
  console.log('Updated generate-og.ts');
}

console.log('--- ALL CLEANUP COMPLETED ---');
