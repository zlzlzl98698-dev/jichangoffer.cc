import { tier1Brands } from './tier1-featured';
import { tier2Brands } from './tier2-mid';
import { tier3Brands } from './tier3-extended';
import type { BrandRecord } from './types';

export * from './types';

export const allBrands: BrandRecord[] = [...tier1Brands, ...tier2Brands, ...tier3Brands];

export function getBrandBySlug(slug: string): BrandRecord | undefined {
  return allBrands.find((b) => b.slug === slug);
}

export function getFeaturedBrands(): BrandRecord[] {
  return allBrands
    .filter((b) => b.featuredPlacement === 'primary-sponsor' || b.featuredPlacement === 'featured')
    .sort((a, b) => b.editorialPriority - a.editorialPriority);
}

export function getMonthlyBrands(): BrandRecord[] {
  return allBrands.filter((b) => b.hasMonthlyPlan);
}

export function getUnlimitedTimeBrands(): BrandRecord[] {
  return allBrands.filter((b) => b.hasUnlimitedTimePlan);
}

export function getCheapBrands(maxMonthlyCny = 12): BrandRecord[] {
  return allBrands
    .filter((b) => b.lowestMonthlyCny !== null && b.lowestMonthlyCny <= maxMonthlyCny)
    .sort((a, b) => (a.lowestMonthlyCny ?? 999) - (b.lowestMonthlyCny ?? 999));
}

export function getBrandsWithMeasuredPng(): BrandRecord[] {
  return allBrands.filter((b) =>
    b.testReports.some((r) => Boolean(r.evidenceImage))
  );
}

export function getSimilarBrands(slug: string, limit = 4): BrandRecord[] {
  const current = getBrandBySlug(slug);
  if (!current) return [];
  return allBrands
    .filter((b) => b.slug !== slug && b.featuredPlacement !== 'archive-only')
    .sort((a, b) => {
      const aDiff = Math.abs((a.lowestMonthlyCny ?? 20) - (current.lowestMonthlyCny ?? 20));
      const bDiff = Math.abs((b.lowestMonthlyCny ?? 20) - (current.lowestMonthlyCny ?? 20));
      return aDiff - bDiff;
    })
    .slice(0, limit);
}

export interface BrandComparisonPair {
  slug: string;
  title: string;
  description: string;
  brandASlug: string;
  brandBSlug: string;
  focusDimension: string;
}

export const brandComparisons: BrandComparisonPair[] = [
  {
    slug: 'guangsuyun-vs-xingdaomeng',
    title: '光速云 vs 星岛梦：两家 2020 年起运营老牌 IEPL 专线机场怎么选？',
    description: '对比光速云与星岛梦的年付/月付/不限时套餐、VLESS 与 Trojan 协议差异、自研客户端支持及 AI 解锁实测记录。',
    brandASlug: 'guangsuyun',
    brandBSlug: 'xingdaomeng',
    focusDimension: '老牌 IEPL 专线、多设备与永久流量包成本对比',
  },
  {
    slug: 'guangsuyun-vs-feimao',
    title: '光速云 vs 飞猫云：双支持订阅与纯专属客户端新手方案差异对比',
    description: '从客户端自由度、套餐门槛、IEPL 专线定位与测速证据角度对比光速云和飞猫云。',
    brandASlug: 'guangsuyun',
    brandBSlug: 'feimao',
    focusDimension: '第三方订阅扩展性 vs 纯专属客户端零配置上手',
  },
  {
    slug: 'guangsuyun-vs-weitu',
    title: '光速云 vs 唯兔云：月付 ¥25/168GB 与 ¥19.9/150GB 专线对比',
    description: '逐项拆解光速云与唯兔云在单 GB 价格、不限时包、协议（VLESS vs Trojan）与地区节点上的真实区别。',
    brandASlug: 'guangsuyun',
    brandBSlug: 'weitu',
    focusDimension: '月付性价比与不限时包单位成本',
  },
  {
    slug: 'jilian-vs-guangnian',
    title: '极连云 vs 光年梯：两款 18 元月付 IEPL 入门方案对比',
    description: '同为 ¥18/月档且同持 2026-08-11 实测截图，比较 100GB 与 110GB 流量、协议标注与运营周期差异。',
    brandASlug: 'jilian',
    brandBSlug: 'guangnian',
    focusDimension: '18 元月付入门 IEPL 档位对比',
  },
  {
    slug: 'yifan-vs-sogo',
    title: '一翻云 vs SOGO 云：多协议开放订阅 vs 15 国节点自研客户端对比',
    description: '对比一翻云（Hysteria2/VLESS-Reality/SS，¥20/150GB）与 SOGO 云（15 国覆盖、纯自研客户端，¥25/150GB）。',
    brandASlug: 'yifan',
    brandBSlug: 'sogo',
    focusDimension: '多协议第三方客户端自由度 vs 多国节点广度',
  },
  {
    slug: 'shandianshu-vs-dalaoyun',
    title: '闪电鼠 vs 大佬云 vs 云界线：5.6 元年付平价档同质化差异排查',
    description: '客观说明 5.6 元/60GB 极限平价档的共性规格、链接格式差异及缺少独立测速时的选型风控建议。',
    brandASlug: 'shandianshu',
    brandBSlug: 'dalaoyun',
    focusDimension: '5.6 元平价档规格同质化与链接核验',
  },
  {
    slug: 'yifan-vs-weitu',
    title: '一翻云 vs 唯兔云：20 元档开放第三方订阅专线机场怎么选？',
    description: '对比一翻云（¥20/150GB、Hysteria2+VLESS-Reality+SS）与唯兔云（¥19.9/150GB、IPLC+Trojan+1x倍率+节假日¥14.9）的性价比与技术细节。',
    brandASlug: 'yifan',
    brandBSlug: 'weitu',
    focusDimension: '20元开放订阅月付性价比与协议栈差异',
  },
  {
    slug: 'feimao-vs-tiziyun',
    title: '飞猫云 vs 梯子云：纯封闭新手客户端 vs 自研+通用订阅双支持怎么选？',
    description: '对比同样主打新手低门槛的飞猫云与梯子云，解析客户端自由度、带宽冗余标注与测速证据差异。',
    brandASlug: 'feimao',
    brandBSlug: 'tiziyun',
    focusDimension: '新手零门槛客户端路线 vs 双支持未来扩展性',
  },
  {
    slug: 'guangsuyun-vs-ermao',
    title: '光速云 vs 二猫云：月付梯队、年付轻量与不限时永久流量包深度对比',
    description: '从 7 档/6 档套餐跨度、年付 ¥99/69GB vs ¥120/80GB、多设备支持及实测图时间窗口拆解光速云与二猫云的真实差异。',
    brandASlug: 'guangsuyun',
    brandBSlug: 'ermao',
    focusDimension: '全周期套餐梯度、单位成本与节点实测验证完整度',
  },
  {
    slug: 'feimao-vs-xingdaomeng',
    title: '飞猫云 vs 星岛梦：专属客户端新手路线与老牌 Trojan 1 倍家庭盘差异比较',
    description: '对比主打学生党与小白一键客户端的飞猫云与 2020 年起运营、全线 1x 倍率不限设备的星岛梦，帮不同基础用户选对入坑路径。',
    brandASlug: 'feimao',
    brandBSlug: 'xingdaomeng',
    focusDimension: '零门槛快速上手 vs 开放订阅多端兼容与永久包梯队',
  },
];
