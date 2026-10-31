import fs from 'node:fs';

const targets = process.argv.slice(2);
for (const target of targets) {
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch {
    // ignore errors
  }
}
