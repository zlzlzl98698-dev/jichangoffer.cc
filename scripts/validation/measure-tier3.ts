import fs from 'node:fs';
import path from 'node:path';

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countHanzi(s: string): number {
  return (s.match(/[\u4e00-\u9fff]/g) || []).length;
}

function getMainProseHanzi(distRelPath: string): { mainHanzi: number; proseHanzi: number } {
  const fullPath = path.resolve('dist', distRelPath, 'index.html');
  if (!fs.existsSync(fullPath)) return { mainHanzi: 0, proseHanzi: 0 };
  const html = fs.readFileSync(fullPath, 'utf-8');
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const proseMatch = html.match(/class="[^"]*prose-zh[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
  return {
    mainHanzi: countHanzi(stripTags(mainMatch?.[1] || '')),
    proseHanzi: countHanzi(stripTags(proseMatch?.[1] || '')),
  };
}

function printSection(title: string, dirPath: string, routeBuilder: (file: string, raw: string) => string) {
  console.log(`\n=== ${title} ===`);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md')).sort();
  let sumProse = 0;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const route = routeBuilder(file, raw);
    const { mainHanzi, proseHanzi } = getMainProseHanzi(route);
    const bodyOnly = raw.replace(/^---[\s\S]*?---\s*/, '');
    const mdHanzi = countHanzi(bodyOnly);
    sumProse += proseHanzi;
    console.log(
      `${('/' + route + '/').padEnd(46)} md_body:${String(mdHanzi).padStart(5)} | html_prose:${String(proseHanzi).padStart(5)} | main:${String(mainHanzi).padStart(5)}`
    );
  }
  console.log(`Total files: ${files.length}, Avg html_prose: ${files.length ? Math.round(sumProse / files.length) : 0}`);
}

printSection('三级长尾文章 (articles)', 'src/content/articles', (f) => `articles/${f.replace(/\.md$/, '')}`);
printSection('三级实操教程 (tutorials)', 'src/content/tutorials', (_f, raw) => {
  const topic = raw.match(/^topic:\s*["']?([^"'\r\n]+)["']?/m)?.[1]?.trim() || 'subscription';
  const slugName = raw.match(/^slugName:\s*["']?([^"'\r\n]+)["']?/m)?.[1]?.trim() || '';
  return `tutorials/${topic}/${slugName}`;
});
printSection('单品牌深度评测 (reviews)', 'src/content/reviews', (f) => `reviews/${f.replace(/\.md$/, '')}`);
printSection('品牌横向对比 (comparisons)', 'src/content/comparisons', (f) => `compare/${f.replace(/\.md$/, '')}`);
