import { commercialTopicPages } from './pillar-commercial';
import { knowledgeTopicPages } from './pillar-knowledge';
import type { SubTopicPageData } from './types';

export * from './types';

export const allSubTopics: SubTopicPageData[] = [
  ...commercialTopicPages,
  ...knowledgeTopicPages,
];

export function getSubTopicsByCategory(categoryId: string): SubTopicPageData[] {
  return allSubTopics.filter((item) => item.categoryId === categoryId);
}

export function getSubTopic(categoryId: string, slug: string): SubTopicPageData | undefined {
  return allSubTopics.find((item) => item.categoryId === categoryId && item.slug === slug);
}
