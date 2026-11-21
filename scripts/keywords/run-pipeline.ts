import fs from 'node:fs';
import path from 'node:path';
import { seedKeywords, type KeywordSeedItem, type SearchIntent } from '../../src/data/keywords/seed-keywords.ts';
import { allBrands, brandComparisons } from '../../src/data/brands/index.ts';
import { primaryNavigation } from '../../src/config/navigation.ts';

interface KeywordRecord extends KeywordSeedItem {
  normalizedKeyword: string;
  priorityScore: number;
  priorityTier: 'P0' | 'P1' | 'P2' | 'P3';
  searchVolume: string;
  impressions: string;
  clicks: string;
  ctr: string;
  averagePosition: string;
  lastReviewedAt: string;
  secondaryKeywords?: string[];
  parentTopic?: string;
  audience?: string;
  sourceRequirements?: string[];
}

function normalizeKw(kw: string): string {
  return kw.trim().toLowerCase().replace(/\s+/g, ' ');
}

function inferIntent(kw: string): SearchIntent {
  if (/超时|失败|连不上|错误|无法启动|打不开|怎么解决|修复|断流|排查/.test(kw)) return 'Troubleshooting';
  if (/官网|登录|入口|下载|网址/.test(kw)) return 'Navigational';
  if (/优惠码|折扣|买|价格|套餐|便宜|月付|不限时|年付|学生/.test(kw)) return 'Transactional';
  if (/推荐|排行|评测|测评|对比|哪个好|靠谱|稳定|替代|vs/.test(kw)) return 'Commercial Investigation';
  return 'Informational';
}

function scorePriority(item: KeywordSeedItem): { score: number; tier: 'P0' | 'P1' | 'P2' | 'P3' } {
  const gapBonus = item.contentStatus === 'published' ? 2 : 5;
  const raw =
    item.editorialDemandSignal * 0.4 +
    item.commercialValueSignal * 0.4 +
    (10 - item.competitionSignal) * 0.15 +
    gapBonus * 0.5;
  const score = Math.round(raw * 10) / 10;
  let tier: 'P0' | 'P1' | 'P2' | 'P3' = 'P3';
  if (score >= 8.2) tier = 'P0';
  else if (score >= 6.8) tier = 'P1';
  else if (score >= 5.2) tier = 'P2';
  return { score, tier };
}

function parseFrontmatterSimple(raw: string): Record<string, string | string[]> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = match[1];
  const out: Record<string, string | string[]> = {};
  const scalarKeys = [
    'title', 'primaryKeyword', 'searchIntent', 'pillar', 'cluster',
    'parentTopicHref', 'parentTopicLabel', 'contentType', 'contentStatus',
    'brandSlug', 'reviewDepthStatus', 'comparisonSlug', 'topic', 'slugName', 'audience',
  ];
  for (const key of scalarKeys) {
    const m = fm.match(new RegExp(`^${key}:\\s*["']?([^"'\r\n]+)["']?\\s*$`, 'm'));
    if (m) out[key] = m[1].trim();
  }
  const secMatch = fm.match(/^secondaryKeywords:\s*\[([^\]]*)\]/m);
  if (secMatch) {
    out.secondaryKeywords = secMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return out;
}

function buildContentCollectionKeywords(): KeywordRecord[] {
  const results: KeywordRecord[] = [];
  const collectDir = (dirPath: string, type: 'article' | 'tutorial' | 'comparison') => {
    if (!fs.existsSync(dirPath)) return;
    for (const file of fs.readdirSync(dirPath).filter((f) => f.endsWith('.md')).sort()) {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const fm = parseFrontmatterSimple(raw);
      const kw = (fm.primaryKeyword as string) || (fm.title as string) || slug;
      const targetUrl =
        type === 'article'
          ? `/articles/${slug}/`
          : type === 'comparison'
          ? `/compare/${(fm.comparisonSlug as string) || slug}/`
          : `/tutorials/${(fm.topic as string) || 'subscription'}/${(fm.slugName as string) || slug}/`;
      const pillarLabel = (fm.pillar as string) || '使用教程';
      const intent = ((fm.searchIntent as SearchIntent) || inferIntent(kw));
      const base: KeywordSeedItem = {
        keyword: kw,
        primaryTopic: pillarLabel,
        secondaryTopics: Array.isArray(fm.secondaryKeywords) ? fm.secondaryKeywords : [],
        searchIntent: intent,
        userStage: intent === 'Troubleshooting' ? 'troubleshooting' : intent === 'Transactional' ? 'decision' : 'consideration',
        entity: kw,
        source: `content-collection:${type}`,
        sourceDate: '2026-11-21',
        confidence: 'editorial-judgment',
        targetUrl,
        pillarPage: (fm.parentTopicHref as string) || '/',
        cluster: (fm.cluster as string) || `${type}-cluster`,
        contentType: type === 'tutorial' ? 'tutorial' : type === 'comparison' ? 'comparison' : 'topic',
        contentStatus: ((fm.contentStatus as KeywordSeedItem['contentStatus']) || 'published'),
        conversionTarget: type === 'comparison' ? '/brands/' : (fm.parentTopicHref as string) || '/brands/',
        editorialDemandSignal: type === 'comparison' ? 8 : 7,
        commercialValueSignal: type === 'comparison' ? 9 : intent === 'Transactional' ? 8 : 6,
        competitionSignal: 5,
      };
      const { score, tier } = scorePriority(base);
      results.push({
        ...base,
        normalizedKeyword: normalizeKw(kw),
        priorityScore: score,
        priorityTier: tier,
        searchVolume: '未接入第三方统计(留空)',
        impressions: '',
        clicks: '',
        ctr: '',
        averagePosition: '',
        lastReviewedAt: '2026-11-21',
        secondaryKeywords: Array.isArray(fm.secondaryKeywords) ? fm.secondaryKeywords : [],
        parentTopic: (fm.parentTopicHref as string) || '',
        audience: (fm.audience as string) || '',
      });
    }
  };

  collectDir(path.resolve('src/content/articles'), 'article');
  collectDir(path.resolve('src/content/tutorials'), 'tutorial');
  collectDir(path.resolve('src/content/comparisons'), 'comparison');
  return results;
}

function buildPlannedTopicClusterKeywords(existingNorms: Set<string>): KeywordRecord[] {
  const results: KeywordRecord[] = [];
  const topicsDir = path.resolve('src/content/topics');
  if (!fs.existsSync(topicsDir)) return results;

  for (const file of fs.readdirSync(topicsDir).filter((f) => f.endsWith('.md')).sort()) {
    const raw = fs.readFileSync(path.join(topicsDir, file), 'utf-8');
    const fm = parseFrontmatterSimple(raw);
    const parentTopic = (fm.pillar as string) || '专题规划';
    const fullPathMatch = raw.match(/^fullPath:\s*["']?([^"'\r\n]+)["']?/m);
    const parentUrl = fullPathMatch ? fullPathMatch[1].trim() : '/';
    const blockRegex = /- title:\s*"([^"]+)"\r?\n\s+keyword:\s*"([^"]+)"\r?\n\s+intent:\s*"([^"]+)"(?:\r?\n\s+href:\s*"([^"]+)")?\r?\n\s+status:\s*"([^"]+)"/g;
    let m;
    while ((m = blockRegex.exec(raw)) !== null) {
      const [, title, keyword, intentStr, href, status] = m;
      const norm = normalizeKw(keyword);
      if (existingNorms.has(norm) || status !== 'planned') continue;
      const intent = (['Informational', 'Commercial Investigation', 'Transactional', 'Navigational', 'Troubleshooting'].includes(intentStr)
        ? intentStr
        : inferIntent(keyword)) as SearchIntent;
      const base: KeywordSeedItem = {
        keyword,
        primaryTopic: parentTopic,
        secondaryTopics: [title],
        searchIntent: intent,
        userStage: intent === 'Troubleshooting' ? 'troubleshooting' : 'consideration',
        entity: title,
        source: `topic-cluster-backlog:${file}`,
        sourceDate: '2026-11-21',
        confidence: 'editorial-judgment',
        targetUrl: href || '',
        pillarPage: parentUrl,
        cluster: `${file.replace(/\.md$/, '')}-planned`,
        contentType: 'topic',
        contentStatus: 'planned',
        conversionTarget: '/brands/',
        editorialDemandSignal: 7,
        commercialValueSignal: intent === 'Transactional' ? 8 : 6,
        competitionSignal: 5,
      };
      const { score, tier } = scorePriority(base);
      results.push({
        ...base,
        normalizedKeyword: norm,
        priorityScore: score,
        priorityTier: tier,
        searchVolume: '未接入第三方统计(留空)',
        impressions: '',
        clicks: '',
        ctr: '',
        averagePosition: '',
        lastReviewedAt: '2026-11-21',
        parentTopic: parentUrl,
        secondaryKeywords: [title],
      });
    }
  }
  return results;
}

function buildBrandKeywords(): KeywordSeedItem[] {
  const items: KeywordSeedItem[] = [];
  const reviewsDir = path.resolve('src/content/reviews');
  const reviewStatusMap = new Map<string, 'published' | 'draft'>();
  if (fs.existsSync(reviewsDir)) {
    for (const file of fs.readdirSync(reviewsDir).filter((f) => f.endsWith('.md'))) {
      const raw = fs.readFileSync(path.join(reviewsDir, file), 'utf-8');
      const fm = parseFrontmatterSimple(raw);
      const slug = (fm.brandSlug as string) || file.replace(/\.md$/, '');
      reviewStatusMap.set(
        slug,
        fm.reviewDepthStatus === 'deep-completed' ? 'published' : 'draft'
      );
    }
  }

  for (const b of allBrands) {
    const isSponsor = b.slug === 'guangsuyun';
    const baseScore = b.featuredPlacement === 'archive-only' ? 5 : isSponsor ? 10 : 8;
    const commScore = b.featuredPlacement === 'archive-only' ? 4 : isSponsor ? 10 : 8;
    const revStatus = reviewStatusMap.get(b.slug) || (b.hasDeepReview ? 'published' : 'draft');

    items.push({
      keyword: `${b.name}评测`,
      primaryTopic: '机场品牌',
      secondaryTopics: [`${b.name}测速`, `${b.name}怎么样`],
      searchIntent: 'Commercial Investigation',
      userStage: 'consideration',
      entity: b.name,
      source: 'brand-database-generator',
      sourceDate: '2026-11-21',
      confidence: 'editorial-judgment',
      targetUrl: `/reviews/${b.slug}/`,
      pillarPage: '/reviews/',
      cluster: `brand-${b.slug}`,
      contentType: 'review',
      contentStatus: revStatus,
      conversionTarget: `/brands/${b.slug}/`,
      editorialDemandSignal: baseScore,
      commercialValueSignal: commScore,
      competitionSignal: isSponsor ? 6 : 4,
    });

    items.push({
      keyword: `${b.name}官网与套餐价格`,
      primaryTopic: '机场品牌',
      secondaryTopics: [`${b.name}优惠码`, `${b.name}替代方案`],
      searchIntent: 'Navigational',
      userStage: 'decision',
      entity: b.name,
      source: 'brand-database-generator',
      sourceDate: '2026-11-21',
      confidence: 'editorial-judgment',
      targetUrl: `/brands/${b.slug}/`,
      pillarPage: '/brands/',
      cluster: `brand-${b.slug}`,
      contentType: 'brand-detail',
      contentStatus: 'published',
      conversionTarget: `/brands/${b.slug}/`,
      editorialDemandSignal: Math.max(4, baseScore - 1),
      commercialValueSignal: commScore,
      competitionSignal: 4,
    });
  }

  for (const cmp of brandComparisons) {
    items.push({
      keyword: cmp.title.split('：')[0],
      primaryTopic: '机场品牌',
      secondaryTopics: [cmp.focusDimension],
      searchIntent: 'Commercial Investigation',
      userStage: 'decision',
      entity: cmp.slug,
      source: 'brand-comparison-generator',
      sourceDate: '2026-11-21',
      confidence: 'editorial-judgment',
      targetUrl: `/compare/${cmp.slug}/`,
      pillarPage: '/compare/',
      cluster: 'brand-comparisons',
      contentType: 'comparison',
      contentStatus: 'published',
      conversionTarget: `/brands/${cmp.brandASlug}/`,
      editorialDemandSignal: 8,
      commercialValueSignal: 9,
      competitionSignal: 4,
    });
  }
  return items;
}

function buildNavSubpageKeywords(): KeywordSeedItem[] {
  const existingTargets = new Set(seedKeywords.map((k) => k.targetUrl));
  const items: KeywordSeedItem[] = [];
  for (const cat of primaryNavigation) {
    for (const sub of cat.children) {
      if (existingTargets.has(sub.href)) continue;
      items.push({
        keyword: sub.label,
        primaryTopic: cat.label,
        secondaryTopics: [cat.pillarTitle],
        searchIntent: inferIntent(sub.label),
        userStage: sub.intent === 'transactional' ? 'decision' : sub.intent === 'troubleshooting' ? 'troubleshooting' : 'consideration',
        entity: sub.label,
        source: 'navigation-ia-sync',
        sourceDate: '2026-11-21',
        confidence: 'editorial-judgment',
        targetUrl: sub.href,
        pillarPage: cat.href,
        cluster: `${cat.id}-cluster`,
        contentType: 'topic',
        contentStatus: 'published',
        conversionTarget: cat.system === 'C' ? '/brands/guangsuyun/' : cat.href,
        editorialDemandSignal: 7,
        commercialValueSignal: cat.system === 'C' ? 8 : 6,
        competitionSignal: 6,
      });
    }
  }
  return items;
}

function loadImportedCsvKeywords(): KeywordSeedItem[] {
  const importDir = path.resolve('src/data/keywords/imports');
  if (!fs.existsSync(importDir)) return [];
  const files = fs.readdirSync(importDir).filter((f) => f.endsWith('.csv') || f.endsWith('.json'));
  const imported: KeywordSeedItem[] = [];

  for (const file of files) {
    const full = path.join(importDir, file);
    if (file.endsWith('.json')) {
      const parsed = JSON.parse(fs.readFileSync(full, 'utf-8').replace(/^\uFEFF/, ''));
      if (Array.isArray(parsed)) {
        for (const row of parsed) {
          if (row.keyword) {
            imported.push({
              keyword: String(row.keyword),
              primaryTopic: row.primaryTopic || '待聚类扩展',
              secondaryTopics: Array.isArray(row.secondaryTopics) ? row.secondaryTopics : [],
              searchIntent: row.searchIntent || inferIntent(String(row.keyword)),
              userStage: row.userStage || 'consideration',
              entity: row.entity || String(row.keyword),
              source: `import:${file}`,
              sourceDate: row.sourceDate || '2026-11-21',
              confidence: row.confidence || 'editorial-judgment',
              targetUrl: row.targetUrl || '',
              pillarPage: row.pillarPage || '/jichang/',
              cluster: row.cluster || 'imported-opportunities',
              contentType: row.contentType || 'topic',
              contentStatus: row.targetUrl ? 'planned' : 'idea',
              conversionTarget: row.conversionTarget || '/brands/',
              editorialDemandSignal: Number(row.editorialDemandSignal || 6),
              commercialValueSignal: Number(row.commercialValueSignal || 6),
              competitionSignal: Number(row.competitionSignal || 5),
            });
          }
        }
      }
    }
  }
  return imported;
}

function escapeCsv(val: string | number | undefined): string {
  const str = val === undefined || val === null ? '' : String(val);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function main() {
  const collectionKws = buildContentCollectionKeywords();
  const baseSeeded = [
    ...collectionKws,
    ...seedKeywords,
    ...buildNavSubpageKeywords(),
    ...buildBrandKeywords(),
    ...loadImportedCsvKeywords(),
  ];

  const seenNorms = new Set<string>(baseSeeded.map((x) => normalizeKw(x.keyword)));
  const plannedClusterKws = buildPlannedTopicClusterKeywords(seenNorms);
  const combinedRaw = [...baseSeeded, ...plannedClusterKws];

  const dedupMap = new Map<string, KeywordRecord>();
  for (const item of combinedRaw) {
    const norm = normalizeKw(item.keyword);
    if (dedupMap.has(norm)) continue;
    const { score, tier } = scorePriority(item);
    dedupMap.set(norm, {
      ...item,
      normalizedKeyword: norm,
      priorityScore: score,
      priorityTier: tier,
      searchVolume: '未接入第三方统计(留空)',
      impressions: '',
      clicks: '',
      ctr: '',
      averagePosition: '',
      lastReviewedAt: '2026-11-21',
    });
  }

  const allRecords = Array.from(dedupMap.values()).sort((a, b) => b.priorityScore - a.priorityScore);

  fs.mkdirSync(path.resolve('reports'), { recursive: true });
  fs.mkdirSync(path.resolve('data/keywords'), { recursive: true });

  const headers = [
    'keyword',
    'normalizedKeyword',
    'primaryTopic',
    'secondaryTopics',
    'searchIntent',
    'userStage',
    'entity',
    'platform',
    'region',
    'priceSegment',
    'questionType',
    'source',
    'sourceDate',
    'confidence',
    'priorityScore',
    'priorityTier',
    'searchVolume',
    'impressions',
    'clicks',
    'ctr',
    'averagePosition',
    'targetUrl',
    'pillarPage',
    'cluster',
    'contentType',
    'contentStatus',
    'conversionTarget',
    'lastReviewedAt',
  ];

  const csvRows = [headers.join(',')];
  for (const r of allRecords) {
    csvRows.push(
      [
        r.keyword,
        r.normalizedKeyword,
        r.primaryTopic,
        r.secondaryTopics.join('|'),
        r.searchIntent,
        r.userStage,
        r.entity,
        r.platform || '',
        r.region || '',
        r.priceSegment || '',
        r.questionType || '',
        r.source,
        r.sourceDate,
        r.confidence,
        r.priorityScore,
        r.priorityTier,
        r.searchVolume,
        r.impressions,
        r.clicks,
        r.ctr,
        r.averagePosition,
        r.targetUrl,
        r.pillarPage,
        r.cluster,
        r.contentType,
        r.contentStatus,
        r.conversionTarget,
        r.lastReviewedAt,
      ]
        .map(escapeCsv)
        .join(',')
    );
  }
  const masterCsv = '\uFEFF' + csvRows.join('\n');
  fs.writeFileSync(path.resolve('reports/keyword-map.csv'), masterCsv, 'utf-8');
  fs.writeFileSync(path.resolve('data/keywords/longtail-master.csv'), masterCsv, 'utf-8');

  const clusters: Record<string, KeywordRecord[]> = {};
  for (const r of allRecords) {
    if (!clusters[r.cluster]) clusters[r.cluster] = [];
    clusters[r.cluster].push(r);
  }

  const clusterJson = JSON.stringify(
    {
      generatedAt: '2026-11-21',
      totalKeywords: allRecords.length,
      clusterCount: Object.keys(clusters).length,
      note: 'All priorityScore values use transparent editorial-judgment signals until GSC/Bing CSV exports are imported into src/data/keywords/imports/.',
      clusters,
    },
    null,
    2
  );
  fs.writeFileSync(path.resolve('src/data/keywords/keyword-clusters.json'), clusterJson, 'utf-8');
  fs.writeFileSync(path.resolve('data/keywords/cluster-map.json'), clusterJson, 'utf-8');

  // Export data/keywords/article-keyword-map.json (mapped per content page)
  const articleMap = allRecords
    .filter((r) => r.targetUrl || r.contentStatus === 'planned')
    .map((r) => ({
      keyword: r.keyword,
      primaryKeyword: r.keyword,
      secondaryKeywords: r.secondaryKeywords || r.secondaryTopics,
      searchIntent: r.searchIntent,
      contentType: r.contentType,
      parentTopic: r.parentTopic || r.pillarPage,
      parentCluster: r.cluster,
      targetUrl: r.targetUrl,
      contentPriority: r.priorityTier,
      priorityScore: r.priorityScore,
      contentStatus: r.contentStatus,
      conversionTarget: r.conversionTarget,
      lastReviewedAt: r.lastReviewedAt,
    }));
  fs.writeFileSync(
    path.resolve('data/keywords/article-keyword-map.json'),
    JSON.stringify(
      {
        generatedAt: '2026-11-21',
        totalEntries: articleMap.length,
        entries: articleMap,
      },
      null,
      2
    ),
    'utf-8'
  );

  // Cannibalization check
  const urlByEntityIntent = new Map<string, Set<string>>();
  for (const r of allRecords) {
    if (!r.targetUrl) continue;
    const key = `${r.entity}::${r.searchIntent}`;
    if (!urlByEntityIntent.has(key)) urlByEntityIntent.set(key, new Set());
    urlByEntityIntent.get(key)!.add(r.targetUrl);
  }

  const conflicts: Array<{ key: string; urls: string[] }> = [];
  for (const [k, urls] of urlByEntityIntent.entries()) {
    if (urls.size > 1) {
      conflicts.push({ key: k, urls: Array.from(urls) });
    }
  }

  const cannibalReport = `# 关键词互抢排查报告 (Keyword Cannibalization Report)

生成时间：2026-11-21
总入库关键词数：${allRecords.length}
聚类集群数量：${Object.keys(clusters).length}

## 检测规则

1. 同一个实体（如“光速云”）+ 同一搜索意图（如 Commercial Investigation vs Navigational）必须对应唯一主 URL：
   - \`/brands/{slug}/\` 承担 **Navigational / Transactional**（品牌官网、套餐价格、优惠码、链接核验）。
   - \`/reviews/{slug}/\` 承担 **Commercial Investigation**（深度评测、测速证据、AI/流媒体分析、优缺点与对比）。
2. 十大专题一级页（如 \`/jichang/\`）承担导航枢纽与 Pillar 总览，二级页（如 \`/jichang/stable/\`）承担细分长尾意图，三级长尾文章聚焦单一可执行搜索任务。

## 检测结果

- 检测到跨 URL 意图冲突组数：**${conflicts.length}**
${
  conflicts.length === 0
    ? '- 当前映射表中所有实体与主搜索意图均一对一映射至唯一目标 URL，无关键词互抢冲突。'
    : conflicts.map((c) => `- 冲突键 \`${c.key}\`: ${c.urls.join(' vs ')}`).join('\n')
}
`;
  fs.writeFileSync(path.resolve('reports/keyword-cannibalization-report.md'), cannibalReport, 'utf-8');

  const oppRows = ['keyword,primaryTopic,searchIntent,priorityTier,priorityScore,targetUrl,pillarPage,contentStatus,actionRequired'];
  for (const r of allRecords) {
    const action =
      r.contentStatus === 'published'
        ? '已发布上线（保持周期更新与内链验证）'
        : !r.targetUrl
        ? '已规划三级候选主题（待按需独立撰写发布）'
        : r.contentType === 'review'
        ? '补齐独立晚高峰测速证据后升级深度完稿'
        : '完善正文与实操步骤';
    oppRows.push(
      [r.keyword, r.primaryTopic, r.searchIntent, r.priorityTier, r.priorityScore, r.targetUrl, r.pillarPage, r.contentStatus, action]
        .map(escapeCsv)
        .join(',')
    );
  }
  const priorityCsv = '\uFEFF' + oppRows.join('\n');
  fs.writeFileSync(path.resolve('data/keywords/content-priority.csv'), priorityCsv, 'utf-8');

  const pendingOppRows = ['keyword,primaryTopic,searchIntent,priorityTier,priorityScore,targetUrl,contentStatus,actionRequired'];
  for (const r of allRecords.filter((x) => x.contentStatus !== 'published' || !x.targetUrl)) {
    const action = !r.targetUrl
      ? '新增独立专题或文章页面'
      : r.contentType === 'review'
      ? '扩写并补齐实测证据'
      : '完善正文与实操步骤';
    pendingOppRows.push(
      [r.keyword, r.primaryTopic, r.searchIntent, r.priorityTier, r.priorityScore, r.targetUrl, r.contentStatus, action]
        .map(escapeCsv)
        .join(',')
    );
  }
  fs.writeFileSync(path.resolve('reports/content-opportunities.csv'), '\uFEFF' + pendingOppRows.join('\n'), 'utf-8');

  const oppMd = `# 关键词机会与扩展系统说明

- **最后更新**：2026-11-21
- **关键词总数**：${allRecords.length}（已去重，覆盖 \`articles\` / \`tutorials\` / \`comparisons\` / \`reviews\` / \`brands\` / \`topics\` 规划待办池）
- **P0 优先级**：${allRecords.filter((x) => x.priorityTier === 'P0').length} 条
- **P1 优先级**：${allRecords.filter((x) => x.priorityTier === 'P1').length} 条
- **P2 优先级**：${allRecords.filter((x) => x.priorityTier === 'P2').length} 条
- **P3 优先级**：${allRecords.filter((x) => x.priorityTier === 'P3').length} 条

> 注：当前尚未接入 Google Search Console 或 Bing Webmaster Tools 导出文件，因此 \`searchVolume\`、\`impressions\`、\`clicks\`、\`ctr\`、\`averagePosition\` 保留为空或标记“未接入第三方统计(留空)”，优先级评分明确标注为 \`editorial-judgment\`，杜绝伪造数据。

## 输出文件位置

- \`data/keywords/longtail-master.csv\`
- \`data/keywords/article-keyword-map.json\`
- \`data/keywords/cluster-map.json\`
- \`data/keywords/content-priority.csv\`
`;
  fs.writeFileSync(path.resolve('reports/keyword-opportunities.md'), oppMd, 'utf-8');

  console.log(`Keyword pipeline completed: ${allRecords.length} keywords, ${Object.keys(clusters).length} clusters.`);
}

main();
