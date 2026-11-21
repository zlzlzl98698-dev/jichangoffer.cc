import fs from 'node:fs';
import path from 'node:path';

const routes = [
  '/jichang/',
  '/pricing/',
  '/brands/',
  '/vpn/',
  '/clients/',
  '/ai-streaming/',
  '/routes/',
  '/tutorials/',
  '/troubleshooting/',
  '/risks/',
];

function countTextStats(fragment: string) {
  const clean = fragment
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const hanChars = (clean.match(/[\u4e00-\u9fff]/g) || []).length;
  return { hanChars, totalChars: clean.length };
}

for (const r of routes) {
  const f = path.join('dist', r.replace(/^\/|\/$/g, ''), 'index.html');
  const html = fs.readFileSync(f, 'utf-8');
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const mainBody = mainMatch ? mainMatch[1] : html;
  const mainStats = countTextStats(mainBody);

  const proseMatch = mainBody.match(/<section[^>]*data-pillar-prose[^>]*>([\s\S]*?)<\/section>/i);
  const proseBody = proseMatch ? proseMatch[1] : '';
  const proseStats = countTextStats(proseBody);

  const faqMatch = mainBody.match(/<section[^>]*id="pillar-faq"[^>]*>([\s\S]*?)<\/section>/i);
  const faqBody = faqMatch ? faqMatch[1] : '';
  const faqStats = countTextStats(faqBody);
  const faqItems = (faqBody.match(/<details\b/gi) || []).length;

  const h2Count = (proseBody.match(/<h2\b/gi) || []).length;
  const h3Count = (proseBody.match(/<h3\b/gi) || []).length;
  const internalLinks = new Set(
    [...mainBody.matchAll(/href="(\/[^"#?]*\/?)"/gi)].map((m) => m[1])
  ).size;
  const jsonLdCount = (html.match(/type="application\/ld\+json"/gi) || []).length;

  console.log(
    `${r.padEnd(18)} 正文纯汉字:${String(proseStats.hanChars).padStart(5)} (加FAQ:${String(proseStats.hanChars + faqStats.hanChars).padStart(5)}) | <main>汉字:${String(mainStats.hanChars).padStart(5)} | H2:${h2Count} H3:${h3Count} | FAQ:${faqItems}题 | 内链:${internalLinks} | Schema:${jsonLdCount}`
  );
}
