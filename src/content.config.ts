import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseContentFields = {
  title: z.string(),
  description: z.string(),
  h1: z.string().optional(),
  primaryKeyword: z.string(),
  secondaryKeywords: z.array(z.string()).default([]),
  searchIntent: z.enum([
    'Informational',
    'Commercial Investigation',
    'Transactional',
    'Navigational',
    'Troubleshooting',
  ]),
  pillar: z.string(),
  cluster: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date(),
  author: z.string().default('机场优惠评测编辑部'),
  contentStatus: z
    .enum(['idea', 'planned', 'researching', 'draft', 'review', 'published', 'needs-update', 'archived'])
    .default('published'),
  answerFirst: z.string(),
  sources: z.array(z.string()).default([]),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .default([]),
  relatedLinks: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .default([]),
  draft: z.boolean().default(false),
};

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    ...baseContentFields,
    brandSlug: z.string(),
    reviewDepthStatus: z.enum(['deep-completed', 'structured-outline-with-evidence', 'evidence-pending']),
    wordCountTarget: z.number().default(10000),
    currentDepthNote: z.string(),
    dataConfidence: z.enum(['measured', 'vendor', 'mixed', 'unverified']),
    dataGapNotes: z.array(z.string()).default([]),
    upstreamTopics: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
  }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: z.object({
    ...baseContentFields,
    topic: z.string(),
    slugName: z.string(),
    parentTopicHref: z.string().optional(),
    parentTopicLabel: z.string().optional(),
    contentType: z
      .enum(['tutorial', 'troubleshooting', 'comparison', 'knowledge', 'pricing', 'risk'])
      .default('tutorial'),
    ctaMode: z.enum(['task-only', 'review-first', 'commercial-compare']).default('task-only'),
    audience: z.string().optional(),
    platforms: z.array(z.string()).default(['全平台']),
    prerequisites: z.array(z.string()).default([]),
    difficulty: z.enum(['新手入门', '常规配置', '进阶排错']).default('新手入门'),
    relatedBrandSlugs: z.array(z.string()).default([]),
    relatedArticleSlugs: z.array(z.string()).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    ...baseContentFields,
    category: z.string(),
    parentTopicHref: z.string().optional(),
    parentTopicLabel: z.string().optional(),
    contentType: z
      .enum(['tutorial', 'troubleshooting', 'comparison', 'knowledge', 'pricing', 'risk'])
      .default('knowledge'),
    ctaMode: z.enum(['task-only', 'review-first', 'commercial-compare']).default('review-first'),
    audience: z.string().optional(),
    relatedBrandSlugs: z.array(z.string()).default([]),
    relatedArticleSlugs: z.array(z.string()).default([]),
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparisons' }),
  schema: z.object({
    ...baseContentFields,
    comparisonSlug: z.string(),
    brandASlug: z.string(),
    brandBSlug: z.string(),
    focusDimension: z.string(),
    dataGapNotes: z.array(z.string()).default([]),
  }),
});

const pillars = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pillars' }),
  schema: z.object({
    ...baseContentFields,
    pillarId: z.string(),
    targetRoute: z.string(),
    layoutMode: z.enum([
      'selection-comparison',
      'pricing-decision',
      'brand-directory',
      'product-comparison',
      'client-operations',
      'scenario-validation',
      'technical-testing',
      'step-by-step-task',
      'diagnostic-triage',
      'risk-and-alternatives',
    ]),
    entityChain: z.array(z.string()).default([]),
    crossPillarLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          reason: z.string(),
        })
      )
      .default([]),
    recommendedBrandSlugs: z.array(z.string()).default([]),
    dataGapNotes: z.array(z.string()).default([]),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/topics' }),
  schema: z.object({
    ...baseContentFields,
    categoryId: z.string(),
    topicSlug: z.string(),
    fullPath: z.string(),
    intentMode: z
      .enum([
        'scenario-selection',
        'ranking-methodology',
        'trust-audit',
        'stability-engineering',
        'usability-beginners',
        'budget-tier',
        'low-price-reality',
        'monthly-trial',
        'unlimited-backup',
        'unit-cost-value',
        'technical-guide',
        'vpn-boundary',
        'client-handbook',
        'ai-unlock-guide',
        'streaming-decode',
        'route-architecture',
        'tutorial-workflow',
        'diagnostic-playbook',
        'risk-control',
      ])
      .default('scenario-selection'),
    entityChain: z.array(z.string()).default([]),
    decisionCriteria: z.array(z.string()).default([]),
    articleClusters: z
      .array(
        z.object({
          clusterName: z.string(),
          clusterDesc: z.string(),
          articles: z.array(
            z.object({
              title: z.string(),
              keyword: z.string(),
              intent: z.string(),
              href: z.string().optional(),
              status: z.enum(['published', 'planned']).default('planned'),
            })
          ),
        })
      )
      .default([]),
    crossTopicLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          reason: z.string(),
        })
      )
      .default([]),
    recommendedBrandSlugs: z.array(z.string()).default([]),
    dataGapNotes: z.array(z.string()).default([]),
  }),
});

export const collections = {
  reviews,
  tutorials,
  articles,
  comparisons,
  pillars,
  topics,
};
