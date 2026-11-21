export interface SiteBranding {
  shortName: string;
  tagline: string;
  accentHex: string;
  observatoryBgHex: string;
  logoText: string;
}

export interface SiteAnalyticsConfig {
  enabled: boolean;
  provider: 'none' | 'umami' | 'plausible' | 'custom';
  scriptUrl?: string;
  websiteId?: string;
  domain?: string;
  endpoint?: string;
  trackOutboundCta: boolean;
}

export interface SiteVerificationConfig {
  google?: string;
  bing?: string;
  shenma?: string;
  baidu?: string;
}

export interface SiteConfig {
  name: string;
  siteUrl: string;
  domainStatus: 'configured' | 'placeholder';
  language: string;
  locale: string;
  description: string;
  editorialEntity: string;
  contactEmail: string;
  branding: SiteBranding;
  affiliateDisclosure: string;
  shortDisclosure: string;
  lastUpdated: string;
  verification: SiteVerificationConfig;
  analytics: SiteAnalyticsConfig;
}

export const siteConfig: SiteConfig = {
  name: '机场优惠',
  siteUrl: 'https://jichangoffer.cc',
  domainStatus: 'configured',
  language: 'zh-CN',
  locale: 'zh_CN',
  description:
    '专注中文互联网用户的机场评测、代理客户端教程、线路技术解析与套餐价格对比指南。基于可追溯资料与实测证据，提供客观选型建议与透明优惠入口。',
  editorialEntity: '机场优惠评测编辑部',
  contactEmail: 'editorial@jichangoffer.cc',
  branding: {
    shortName: 'JCO',
    tagline: '中文代理服务评测与网络工具知识库',
    accentHex: '#0F52BA',
    observatoryBgHex: '#0B1220',
    logoText: '机场优惠',
  },
  affiliateDisclosure:
    '本文可能包含推广链接。通过相关链接注册可能为本站带来佣金，不影响用户实际支付价格；具体套餐、折扣与服务条款请以各品牌官方页面为准。',
  shortDisclosure: '含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格。',
  lastUpdated: '2026-11-21',
  verification: {
    // 在各站长平台获取验证 Meta 的 content 值后填入以下字段，重新 build 即静态直出到全站 <head>
    google: '',
    bing: '',
    shenma: '',
    baidu: '',
  },
  analytics: {
    // 切换为 'umami' / 'plausible' / 'custom' 并填入对应参数、设 enabled: true 即可立即启用转化追踪
    enabled: false,
    provider: 'umami',
    scriptUrl: 'https://analytics.jichangoffer.cc/script.js',
    websiteId: 'REPLACE_WITH_UMAMI_WEBSITE_ID',
    domain: 'jichangoffer.cc',
    endpoint: '/api/cta-collect.php',
    trackOutboundCta: true,
  },
};

export function getCanonicalUrl(pathname: string): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (cleanPath === '/') return `${base}/`;
  if (cleanPath.endsWith('.html')) return `${base}${cleanPath}`;
  return cleanPath.endsWith('/') ? `${base}${cleanPath}` : `${base}${cleanPath}/`;
}
