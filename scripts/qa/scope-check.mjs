import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const scanRoots = ['src/app', 'src/components', 'src/styles', 'prototype'];
const banned = [
  'Zine Collective', 'Printify', 'POD', 'fulfillment', 'Browse our latest products',
  'Horizon Homepage Shell Draft', 'gid://shopify/Product', 'MyDesigns', 'merch', 'apparel', 'totes', 'bookmarks', 'drops'
];
function files(dir) {
  try {
    return readdirSync(dir).flatMap((name) => {
      const path = join(dir, name);
      return statSync(path).isDirectory() ? files(path) : [path];
    });
  } catch { return []; }
}
let failures = [];
for (const base of scanRoots) {
  for (const path of files(join(root, base))) {
    const rel = path.replace(root + '/', '');
    if (!/\.(md|tsx|ts|js|json|css|html)$/.test(rel)) continue;
    const text = readFileSync(path, 'utf8');
    for (const term of banned) {
      if (text.includes(term)) failures.push(`${rel}: banned public term ${term}`);
    }
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Scope check passed: public website is Lainey-only and product-lane-free.');
