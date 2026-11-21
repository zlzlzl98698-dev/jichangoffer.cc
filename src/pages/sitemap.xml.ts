import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

/**
 * Provides /sitemap.xml alongside @astrojs/sitemap's /sitemap-index.xml + /sitemap-0.xml
 * so search consoles accepting /sitemap.xml work identically with zero duplicate rules.
 */
export const GET: APIRoute = () => {
  const siteBase = siteConfig.siteUrl.replace(/\/+$/, '');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteBase}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
