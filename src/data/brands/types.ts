export type DataStatus = 'measured' | 'vendor' | 'editorial' | 'unverified' | 'conflict';

export type BillingCycle =
  | 'monthly'
  | 'quarterly'
  | 'semi-annual'
  | 'annual'
  | 'biennial'
  | 'triennial'
  | 'one-time';

export interface PricingPlan {
  name: string;
  billingCycle: BillingCycle;
  billingLabel: string;
  priceCny: number;
  monthlyEquivalentCny?: number;
  trafficGb: number | null;
  trafficDisplay: string;
  trafficCycle: string;
  multiplier?: string;
  deviceLimit?: string;
  suitableFor?: string;
  dataStatus: 'vendor' | 'unverified';
  verifiedAt: string;
}

export type ServiceSupportStatus =
  | 'verified-supported'
  | 'partial-or-node-dependent'
  | 'verified-unsupported'
  | 'vendor-claimed'
  | 'not-tested';

export interface UnlockServiceStatus {
  service: 'ChatGPT' | 'Claude' | 'Gemini' | 'Netflix' | 'Disney+' | 'YouTube' | 'TikTok' | 'Spotify' | 'HBO Max';
  status: ServiceSupportStatus;
  detail: string;
  sourceType: 'measured' | 'vendor' | 'not-tested';
  testedAt?: string;
  nodeScope?: string;
}

export interface NodeSpeedSnapshot {
  region: string;
  latencyMs: number | null;
  downloadMbps: number | null;
  uploadMbps?: number | null;
  packetLoss?: string;
  note?: string;
}

export interface SpeedtestReport {
  id: string;
  date: string;
  timeWindow: string;
  location: string;
  isp: string;
  software: string;
  protocolDisplayed: string;
  dataStatus: 'measured' | 'vendor' | 'unverified';
  reviewStatus: 'approved' | 'review-required';
  evidenceImage?: string;
  limitations: string[];
  snapshots: NodeSpeedSnapshot[];
  summaryNote: string;
}

export interface BrandRecord {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  logoMonogram: string;
  brandColor: string;
  summary: string;
  officialWebsiteNote: string;
  foundedYear: number | null;
  foundedYearNote?: string;
  operatingStatus: 'active-in-source' | 'historical-needs-verification';
  protocols: string[];
  routeTypes: string[];
  nodeRegions: string[];
  nodeCountLabel: string;
  deviceSupport: string[];
  clientMode: 'self-built-and-third-party' | 'exclusive-client-only' | 'third-party-supported' | 'unverified';
  clientModeLabel: string;
  clients: string[];
  pricingPlans: PricingPlan[];
  lowestMonthlyCny: number | null;
  lowestMonthlyLabel: string;
  lowestMonthlyType: 'monthly' | 'annual-equivalent' | 'unverified';
  hasMonthlyPlan: boolean;
  hasAnnualPlan: boolean;
  hasUnlimitedTimePlan: boolean;
  paymentMethods: string[];
  aiCompatibility: UnlockServiceStatus[];
  streamingCompatibility: UnlockServiceStatus[];
  advantages: string[];
  limitations: string[];
  riskNotes: string[];
  conflictNotes: string[];
  testReports: SpeedtestReport[];
  sourceReferences: string[];
  dataStatus: DataStatus;
  verifiedAt: string;
  updatedAt: string;
  editorialPriority: number;
  commercialPriority: number;
  featuredPlacement?: 'primary-sponsor' | 'featured' | 'standard' | 'archive-only';
  hasDeepReview: boolean;
  tags: string[];
}
