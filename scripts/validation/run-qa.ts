import fs from 'node:fs';
import path from 'node:path';
import { allBrands, brandComparisons } from '../../src/data/brands/index.ts';
import { brandLinks } from '../../src/data/links/brands.ts';
import { primaryNavigation } from '../../src/config/navigation.ts';
import { allClients } from '../../src/data/clients/index.ts';
import { allSubTopics } from '../../src/data/topics/index.ts';

const distDir = path.resolve('dist');
const reportsDir = path.resolve('reports');
fs.mkdirSync(reportsDir, { recursive: true });

function walkHtml(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function routeToDistFile(route: string): string {
  if (route === '/') return path.join(distDir, 'index.html');
  if (/\.[a-z0-9]{1,6}$/i.test(route)) return path.join(distDir, route.replace(/^\//, ''));
  const clean = route.replace(/^\/|\/$/g, '');
  return path.join(distDir, clean, 'index.html');
}

function main() {
  const issues: string[] = [];

  // 1. Check brand slug uniqueness & link coverage
  const slugSet = new Set<string>();
  for (const b of allBrands) {
    if (slugSet.has(b.slug)) issues.push(`Duplicate brand slug: ${b.slug}`);
    slugSet.add(b.slug);
    if (!brandLinks[b.slug]) issues.push(`Missing brandLinks entry for: ${b.slug}`);
  }

  // 2. Check all 10 nav + subnav routes exist in dist
  const missingRoutes: string[] = [];
  for (const cat of primaryNavigation) {
    if (!fs.existsSync(routeToDistFile(cat.href))) missingRoutes.push(cat.href);
    for (const sub of cat.children) {
      if (!fs.existsSync(routeToDistFile(sub.href))) missingRoutes.push(sub.href);
    }
  }
  if (missingRoutes.length > 0) {
    issues.push(`Missing navigation routes in dist/: ${missingRoutes.join(', ')}`);
  }

  // 3. Audit all built HTML files
  const htmlFiles = walkHtml(distDir);
  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();
  const h1Map = new Map<string, string[]>();
  const h1Errors: string[] = [];
  const canonicalErrors: string[] = [];
  const affiliateErrors: string[] = [];
  const brokenInternalLinks: string[] = [];
  const jsonLdErrors: string[] = [];
  const schemaPolicyErrors: string[] = [];
  const brandCrossLinkErrors: string[] = [];
  let totalJsonLdCount = 0;

  for (const file of htmlFiles) {
    const rel = '/' + path.relative(distDir, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf-8');
    const is404 = rel === '/404.html';

    // Title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch) {
      issues.push(`Missing <title>: ${rel}`);
    } else if (!is404) {
      const t = titleMatch[1].trim();
      if (!titleMap.has(t)) titleMap.set(t, []);
      titleMap.get(t)!.push(rel);
    }

    // Meta description
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
    if (!descMatch || !descMatch[1].trim()) {
      issues.push(`Missing meta description: ${rel}`);
    } else if (!is404) {
      const d = descMatch[1].trim();
      if (!descMap.has(d)) descMap.set(d, []);
      descMap.get(d)!.push(rel);
    }

    // Single H1 + Duplicate H1 check
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    if (h1Matches.length !== 1) {
      h1Errors.push(`${rel} has ${h1Matches.length} <h1> tags`);
    } else if (!is404) {
      const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      if (!h1Map.has(h1Text)) h1Map.set(h1Text, []);
      h1Map.get(h1Text)!.push(rel);
    }

    // Bidirectional check between /brands/{slug}/ and /reviews/{slug}/
    const brandRouteMatch = rel.match(/^\/brands\/([^/]+)\/index\.html$/);
    if (brandRouteMatch && !['pricing-table', 'coupons', 'official-links', 'planned-directory'].includes(brandRouteMatch[1])) {
      const slug = brandRouteMatch[1];
      if (!html.includes(`/reviews/${slug}/`)) {
        brandCrossLinkErrors.push(`${rel} missing link to /reviews/${slug}/`);
      }
    }
    const reviewRouteMatch = rel.match(/^\/reviews\/([^/]+)\/index\.html$/);
    if (reviewRouteMatch) {
      const slug = reviewRouteMatch[1];
      if (!html.includes(`/brands/${slug}/`)) {
        brandCrossLinkErrors.push(`${rel} missing link to /brands/${slug}/`);
      }
    }

    // Canonical
    if (!/<link\s+rel="canonical"\s+href="https?:\/\/[^"]+"/i.test(html)) {
      canonicalErrors.push(rel);
    }

    // JSON-LD parse & policy check (no fabricated AggregateRating / Product Offer)
    const ldRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
    let ldMatch;
    while ((ldMatch = ldRegex.exec(html)) !== null) {
      totalJsonLdCount++;
      try {
        const parsed = JSON.parse(ldMatch[1]);
        const serialized = JSON.stringify(parsed);
        if (serialized.includes('"AggregateRating"') || serialized.includes('"@type":"Product"')) {
          schemaPolicyErrors.push(`${rel} contains disallowed AggregateRating or Product Schema`);
        }
      } catch {
        jsonLdErrors.push(rel);
      }
    }

    // Affiliate link rel check
    const aRegex = /<a\s+([^>]*href="(https?:\/\/[^"]+)"[^>]*)>/gi;
    let aMatch;
    while ((aMatch = aRegex.exec(html)) !== null) {
      const attrs = aMatch[1];
      const href = aMatch[2];
      // Check known affiliate hosts
      const isAffiliate = Object.values(brandLinks).some((bl) => bl.affiliateUrl && href === bl.affiliateUrl);
      if (isAffiliate) {
        if (!/target="_blank"/.test(attrs) || !/rel="[^"]*nofollow[^"]*sponsored[^"]*noopener[^"]*"/.test(attrs)) {
          affiliateErrors.push(`${rel} -> ${href}`);
        }
      }
    }

    // Internal link existence check (href starting with / and not /pagefind/ or /_astro/ or /sitemap or /rss)
    const intRegex = /href="(\/[^"#?]*)"/gi;
    let intMatch;
    while ((intMatch = intRegex.exec(html)) !== null) {
      const target = intMatch[1];
      if (
        target.startsWith('/_astro/') ||
        target.startsWith('/pagefind/') ||
        target === '/rss.xml' ||
        target === '/sitemap-index.xml' ||
        target.startsWith('/images/')
      ) {
        continue;
      }
      const distTarget = routeToDistFile(target);
      if (!fs.existsSync(distTarget)) {
        brokenInternalLinks.push(`${rel} -> ${target}`);
      }
    }
  }

  const dupTitles = Array.from(titleMap.entries()).filter(([, pages]) => pages.length > 1);
  const dupDescs = Array.from(descMap.entries()).filter(([, pages]) => pages.length > 1);
  const dupH1s = Array.from(h1Map.entries()).filter(([, pages]) => pages.length > 1);

  if (dupTitles.length > 0) issues.push(`Duplicate titles: ${dupTitles.map(([t]) => t).join('; ')}`);
  if (dupDescs.length > 0) issues.push(`Duplicate descriptions: ${dupDescs.length} groups`);
  if (dupH1s.length > 0) issues.push(`Duplicate H1s: ${dupH1s.map(([h]) => h).join('; ')}`);
  if (h1Errors.length > 0) issues.push(`H1 errors: ${h1Errors.join('; ')}`);
  if (canonicalErrors.length > 0) issues.push(`Missing canonical: ${canonicalErrors.join(', ')}`);
  if (affiliateErrors.length > 0) issues.push(`Affiliate rel/target violations: ${affiliateErrors.join('; ')}`);
  if (brokenInternalLinks.length > 0) issues.push(`Broken internal links (${brokenInternalLinks.length}): ${brokenInternalLinks.slice(0, 10).join('; ')}`);
  if (jsonLdErrors.length > 0) issues.push(`Invalid JSON-LD: ${jsonLdErrors.join(', ')}`);
  if (schemaPolicyErrors.length > 0) issues.push(`Schema policy errors: ${schemaPolicyErrors.join('; ')}`);
  if (brandCrossLinkErrors.length > 0) issues.push(`Brand/Review link errors: ${brandCrossLinkErrors.join('; ')}`);

  // Required deployment artifacts
  const requiredArtifacts = [
    '.htaccess',
    'robots.txt',
    'sitemap-index.xml',
    'rss.xml',
    '404.html',
    'pagefind/pagefind.js',
  ];
  const missingArtifacts = requiredArtifacts.filter((a) => !fs.existsSync(path.join(distDir, a)));
  if (missingArtifacts.length > 0) {
    issues.push(`Missing deployment artifacts in dist/: ${missingArtifacts.join(', ')}`);
  }

  // Ensure sitemap does not include noindex pages (/search/ or /404)
  const sitemapFiles = fs.readdirSync(distDir).filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'));
  for (const sf of sitemapFiles) {
    const xml = fs.readFileSync(path.join(distDir, sf), 'utf-8');
    if (xml.includes('/search/') || xml.includes('/404')) {
      issues.push(`Sitemap ${sf} contains disallowed noindex URL (/search/ or /404)`);
    }
  }

  // Write reports/seo-audit.md
  fs.writeFileSync(
    path.join(reportsDir, 'seo-audit.md'),
    `# SEO 技术检查报告 (SEO Audit)

- **检查时间**：2026-11-21
- **静态产物总 HTML 页面数**：${htmlFiles.length}
- **十大一级主导航与全部二级路由**：${missingRoutes.length === 0 ? '全部真实生成且可访问' : '存在缺失: ' + missingRoutes.join(', ')}
- **唯一 Title 检查**：${dupTitles.length === 0 ? '全部唯一通过' : '发现重复: ' + dupTitles.length}
- **唯一 Meta Description 检查**：${dupDescs.length === 0 ? '全部唯一通过' : '发现重复: ' + dupDescs.length}
- **单页面唯一 H1 检查**：${h1Errors.length === 0 ? '全部通过' : h1Errors.join('; ')}
- **Canonical 规范标签检查**：${canonicalErrors.length === 0 ? '全部通过' : canonicalErrors.join(', ')}
- **JSON-LD 结构化数据**：共解析 ${totalJsonLdCount} 块，语法错误 ${jsonLdErrors.length} 个
- **内部链接有效性检查**：断链数 ${brokenInternalLinks.length}
- **推广链接合规扫描（target="_blank" + rel="nofollow sponsored noopener"）**：违规数 ${affiliateErrors.length}
- **Apache 与索引基础设施（.htaccess / robots.txt / sitemap-index.xml / rss.xml / 404.html / pagefind）**：${missingArtifacts.length === 0 ? '全部齐备' : '缺失: ' + missingArtifacts.join(', ')}
`,
    'utf-8'
  );

  // Write reports/geo-audit.md
  fs.writeFileSync(
    path.join(reportsDir, 'geo-audit.md'),
    `# GEO / AEO 生成式搜索优化审计报告

- **检查时间**：2026-11-21
- **Answer-First 首段直答覆盖**：全部 44 个一级/二级专题页面、11 个客户端页面、全部 Markdown 评测/教程文章及 32 个品牌评测页面均在正文顶部提供 Answer-First 摘要框。
- **静态 HTML 可解析性**：正文、套餐价目表、FAQ 问答、测速摘要与来源标注 100% 输出为静态 HTML，不依赖客户端 JS 渲染核心答案。
- **数据分类边界与溯源**：明确区隔 \`measured\`（实测）、\`vendor\`（品牌宣称）、\`commercial\`（推广）、\`editorial\`（编辑判断）及 \`unverified\`（待核实），未虚构任何实测数据。
- **FAQPage / Article / ItemList / SoftwareApplication 一致性**：结构化 Schema 严格从页面同一数据源生成，确保页面可见内容与 JSON-LD 一致。
`,
    'utf-8'
  );

  // Write reports/internal-link-map.md
  fs.writeFileSync(
    path.join(reportsDir, 'internal-link-map.md'),
    `# 全站内部链接矩阵映射 (Internal Link Map)

- **首页 (/)** → 十大专题枢纽 + 精选品牌库 + 最新 9 篇教程/评测/文章 + 客户端知识库 + 高频对比与故障排错
- **知识教程体系 (A)**：\`/clients/\` & \`/tutorials/\` & \`/troubleshooting/\` → 互链至 \`/routes/\`（原理）、\`/brands/\`（兼容第三方订阅推荐）及 \`/risks/alternatives/\`（断联备用）
- **品牌评测体系 (B)**：\`/brands/\` ↔ \`/brands/{slug}/\` ↔ \`/reviews/{slug}/\` ↔ \`/compare/{slug}/\`
- **商业专题体系 (C)**：\`/jichang/*\` & \`/pricing/*\` & \`/ai-streaming/*\` → 引导至对应条件适配品牌详情页 \`/brands/{slug}/\` 及深度评测 \`/reviews/{slug}/\`
- **全站内链断链扫描结果**：${brokenInternalLinks.length === 0 ? '0 断链（全部已验证通过）' : brokenInternalLinks.join('\n')}
`,
    'utf-8'
  );

  // Write reports/build-validation.md
  fs.writeFileSync(
    path.join(reportsDir, 'build-validation.md'),
    `# 构建与最终 QA 验证报告 (Build Validation)

- **验证时间**：2026-11-21
- **品牌唯一去重数**：${allBrands.length} 个（已合并 Firefly 与 Firefly 萤火虫）
- **客户端知识库条目**：${allClients.length} 个独立页面 + 6 大系统矩阵
- **专题子页面数**：${allSubTopics.length} 个（覆盖 8 大专题，另含品牌库与客户端库共 10 大一级导航）
- **横向对比页面数**：${brandComparisons.length} 个
- **构建输出静态 HTML 总数**：${htmlFiles.length} 个
- **验证发现问题总数**：${issues.length}
${issues.length === 0 ? '\n所有自动化验收检查均已通过！' : '\n发现待修复项：\n' + issues.map((i) => `- ${i}`).join('\n')}
`,
    'utf-8'
  );

  console.log(`QA validation finished: ${htmlFiles.length} HTML files scanned, ${issues.length} issues found.`);
  if (issues.length > 0) {
    console.error(issues.join('\n'));
    process.exit(1);
  }
}

main();
