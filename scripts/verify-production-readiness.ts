import { existsSync, readFileSync, statSync } from 'fs';
import { resolve } from 'path';

interface CheckResult {
  category: string;
  check: string;
  passed: boolean;
  details?: string;
}

const results: CheckResult[] = [];

function record(category: string, check: string, passed: boolean, details?: string) {
  results.push({ category, check, passed, details });
  const icon = passed ? '✓' : '✗';
  console.log(`  ${icon} [${category}] ${check}${details ? ` (${details})` : ''}`);
}

console.log('\n======================================================');
console.log('   PRODUCTION READINESS & INTEGRITY VERIFICATION');
console.log('======================================================\n');

// 1. Static Assets & SEO files
const seoFiles = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  'public/favicon.svg',
  'public/apple-touch-icon.svg',
  'public/resume.html',
  'public/health.json',
  'public/_headers',
  'vercel.json',
];

for (const file of seoFiles) {
  const fullPath = resolve(file);
  const exists = existsSync(fullPath);
  const size = exists ? statSync(fullPath).size : 0;
  record('SEO & Assets', `File exists: ${file}`, exists && size > 0, `${size} bytes`);
}

// 2. Project images integrity
const projectImages = [
  'src/assets/cusown-dashboard.jpg',
  'src/assets/ledgeros-dashboard.jpg',
  'src/assets/clykur-studio-platform.jpg',
  'src/assets/neev-digital-library.jpg',
  'src/assets/drapeva-saree-platform.jpg',
  'src/assets/careernova-dashboard.jpg',
  'src/assets/karthik-professional.png',
];

for (const img of projectImages) {
  const fullPath = resolve(img);
  const exists = existsSync(fullPath);
  const size = exists ? statSync(fullPath).size : 0;
  record('Visual Assets', `Image exists: ${img}`, exists && size > 20000, `${Math.round(size / 1024)} KB`);
}

// 3. Navigation & Anchor Target Consistency
const headerPath = resolve('src/components/Header.tsx');
const indexPath = resolve('src/pages/Index.tsx');
if (existsSync(headerPath) && existsSync(indexPath)) {
  const headerContent = readFileSync(headerPath, 'utf-8');
  const _indexContent = readFileSync(indexPath, 'utf-8');
  
  const navMatches = [...headerContent.matchAll(/href:\s*"(#[a-zA-Z0-9_-]+)"/g)].map(m => m[1]);
  record('Navigation', `Found ${navMatches.length} navigation anchors in Header`, navMatches.length >= 4);

  // Check each anchor target in components
  const componentsPath = resolve('src/components');
  for (const nav of navMatches) {
    const id = nav.replace('#', '');
    // Check if any component in src/components declares this id
    let found = false;
    for (const comp of ['Projects.tsx', 'About.tsx', 'Experience.tsx', 'Skills.tsx', 'Contact.tsx', 'Hero.tsx', 'CurrentlyBuilding.tsx']) {
      const p = resolve(componentsPath, comp);
      if (existsSync(p) && readFileSync(p, 'utf-8').includes(`id="${id}"`)) {
        found = true;
        break;
      }
    }
    record('Navigation', `Anchor target id="${id}" exists in DOM`, found);
  }
}

// 4. Security Headers & CSP
const headersPath = resolve('public/_headers');
if (existsSync(headersPath)) {
  const content = readFileSync(headersPath, 'utf-8');
  record('Security Headers', 'HSTS configured', content.includes('Strict-Transport-Security'));
  record('Security Headers', 'X-Frame-Options: DENY configured', content.includes('X-Frame-Options: DENY'));
  record('Security Headers', 'X-Content-Type-Options: nosniff configured', content.includes('nosniff'));
  record('Security Headers', 'Content-Security-Policy configured', content.includes('Content-Security-Policy'));
}

// 5. Health probe validation
const healthPath = resolve('public/health.json');
if (existsSync(healthPath)) {
  try {
    const parsed = JSON.parse(readFileSync(healthPath, 'utf-8'));
    record('Health Monitoring', 'health.json valid JSON', parsed.status === 'healthy');
  } catch {
    record('Health Monitoring', 'health.json parse failed', false);
  }
}

// Summary
const total = results.length;
const passed = results.filter(r => r.passed).length;
const failed = total - passed;

console.log('\n------------------------------------------------------');
console.log(`TOTAL CHECKS: ${total} | PASSED: ${passed} | FAILED: ${failed}`);
console.log('------------------------------------------------------\n');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All automated integrity verification checks passed.\n');
}
