export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SubTopicPageData {
  categoryId: string;
  slug: string;
  fullPath: string;
  title: string;
  h1: string;
  description: string;
  primaryKeyword: string;
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Transactional' | 'Navigational' | 'Troubleshooting';
  answerFirst: string;
  keyFacts: string[];
  sections: TopicSection[];
  recommendedBrandSlugs?: string[];
  relatedClientSlugs?: string[];
  relatedLinks: Array<{ label: string; href: string }>;
  faqs: TopicFaq[];
  updatedAt: string;
}
