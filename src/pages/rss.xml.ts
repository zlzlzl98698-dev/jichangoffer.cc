import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '../config/site';

export async function GET(context: APIContext) {
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);
  const tutorials = await getCollection('tutorials', ({ data }) => !data.draft);
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  const items = [
    ...reviews.map((r) => ({
      title: r.data.title,
      pubDate: r.data.updatedDate,
      description: r.data.description,
      link: `/reviews/${r.data.brandSlug}/`,
    })),
    ...tutorials.map((t) => ({
      title: t.data.title,
      pubDate: t.data.updatedDate,
      description: t.data.description,
      link: `/tutorials/${t.data.topic}/${t.data.slugName}/`,
    })),
    ...articles.map((a) => ({
      title: a.data.title,
      pubDate: a.data.updatedDate,
      description: a.data.description,
      link: `/articles/${a.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site || siteConfig.siteUrl,
    items,
    customData: `<language>${siteConfig.language}</language>`,
  });
}
