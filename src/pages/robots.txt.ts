import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const siteBase = siteConfig.siteUrl.replace(/\/+$/, '');
  const body = `User-agent: *
Allow: /
Disallow: /404.html
Disallow: /search/

# Explicit search spider access declarations (Google / Bing / Baidu / Shenma)
User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

Sitemap: ${siteBase}/sitemap.xml
Sitemap: ${siteBase}/sitemap-index.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
