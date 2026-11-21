import fs from 'node:fs';
import path from 'node:path';
import { allSubTopics } from '../../src/data/topics';

const upgradedBatch1 = new Set([
  '/jichang/recommend/',
  '/jichang/ranking/',
  '/jichang/reliable/',
  '/jichang/stable/',
  '/jichang/best-to-use/',
  '/pricing/cheap/',
  '/pricing/one-yuan/',
  '/pricing/one-cent/',
  '/pricing/monthly/',
  '/pricing/unlimited-time/',
  '/pricing/value/',
  '/brands/pricing-table/',
  '/brands/coupons/',
  '/brands/official-links/',
]);

const upgradedBatch2 = new Set([
  '/vpn/recommend/',
  '/vpn/free/',
  '/vpn/mobile/',
  '/vpn/android/',
  '/vpn/reviews/',
  '/vpn/game-accelerator/',
  '/ai-streaming/chatgpt/',
  '/ai-streaming/claude/',
  '/ai-streaming/gemini/',
  '/ai-streaming/netflix/',
  '/ai-streaming/youtube/',
  '/clients/clash-verge-rev/',
  '/clients/clash-meta/',
  '/clients/v2rayn/',
  '/clients/shadowrocket/',
  '/clients/mihomo/',
  '/clients/sing-box/',
  '/clients/flclash/',
  '/clients/hiddify/',
  '/clients/karing/',
  '/clients/v2rayng/',
  '/clients/nekobox/',
]);

const routes = [
  ...allSubTopics.map((t) => t.fullPath),
  '/brands/pricing-table/',
  '/brands/coupons/',
  '/brands/official-links/',
  '/reviews/',
  '/compare/',
  '/clients/clash-verge-rev/',
  '/clients/clash-meta/',
  '/clients/v2rayn/',
  '/clients/shadowrocket/',
  '/clients/mihomo/',
  '/clients/sing-box/',
  '/clients/flclash/',
  '/clients/hiddify/',
  '/clients/karing/',
  '/clients/v2rayng/',
  '/clients/nekobox/',
];

function countHan(fragment: string) {
  const clean = fragment
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return (clean.match(/[\u4e00-\u9fff]/g) || []).length;
}

for (const r of routes) {
  const f = path.join('dist', r.replace(/^\/|\/$/g, ''), 'index.html');
  const html = fs.readFileSync(f, 'utf-8');
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const mainBody = mainMatch ? mainMatch[1] : html;
  const mainHan = countHan(mainBody);

  const proseMatch = mainBody.match(/<section[^>]*data-topic-prose[^>]*>([\s\S]*?)<\/section>/i);
  const proseHan = proseMatch ? countHan(proseMatch[1]) : 0;

  const faqMatch = mainBody.match(/<section[^>]*id="topic-faq"[^>]*>([\s\S]*?)<\/section>/i);
  const faqHan = faqMatch ? countHan(faqMatch[1]) : 0;

  const tag = upgradedBatch1.has(r)
    ? '[Batch1已升级]'
    : upgradedBatch2.has(r)
    ? '[Batch2已升级]'
    : '[Batch3已升级]';
  console.log(
    `${tag} ${r.padEnd(36)} <main>:${String(mainHan).padStart(5)} 汉字 | 正文:${String(proseHan).padStart(5)} | +FAQ:${String(proseHan + faqHan).padStart(5)}`
  );
}
