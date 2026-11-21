# SEO 与 GEO 合规验证报告 (`seo-geo-validation.md`)

- **最后校验时间**：2026-11-21
- **类型校验 (`npm run check`)**：`Result (65 files): 0 errors, 0 warnings, 0 hints`
- **构建与索引 (`npm run build`)**：`183 page(s) built in 3.10s`，Pagefind 收录 `181` 页 / `77,031` 词
- **自动化 QA 门禁 (`npm run validate`)**：`183 HTML files scanned, 0 issues found`

## 一、Technical SEO 自动化硬检查通过项

1. **Meta & 标题规范**：全站 183 页均存在唯一 `<h1>`（`dupH1s: 0`）、唯一 `<title>` 与非空 `<meta name="description">`，Canonical URL 与站点规范一致。
2. **Schema JSON-LD 政策合规（`schemaPolicyErrors: 0`）**：
   - 长尾文章、教程、评测与对比专页输出标准 `Article` + `BreadcrumbList` + `FAQPage`（`FAQPage` 文本经过 `stripInlineMarkdown` 清洗，无星号或括号源码残留）。
   - 自动化检测器严禁对无真实评分体系的测评伪造 `AggregateRating` 或非适用的 `Product` 聚合评分 Schema。
3. **行内 Markdown 渲染清理**：首轮桌面巡检发现 CJK 标点贴连 `**` 导致 11 处 CommonMark 侧翼判定失灵，已全部修复并在 `dist/{articles,tutorials,reviews,comparisons}/` 静态扫描确认 **未解析 `**` 残留数为 `0`**。

## 二、GEO（AI 搜索引擎引用友好性）验证

1. **Answer-First 首段直答结构**：全部 22 篇长尾文章、9 篇实操教程、32 篇品牌评测与 10 组品牌对比均在正文核心上方提供前置结论框，便于大模型直接提取关键价格、协议及适用前提。
2. **数据诚实度分级体系**：所有测图均保留截图日期与测量环境条件（如 `measured` 实测 vs `vendor` 官方宣传 vs `unverified` 未核验 vs `conflict` 跨文档冲突）；17 家资料欠缺品牌的评测正文中明文写明 `dataGapNotes`，从源头防止 AI 抓取后误当作实测铁证引用。
3. **Pagefind 搜索就绪**：`181 / 183` 页纳入全中文离线全文检索索引（仅 `/404.html` 等非内容页除外），全站搜索词条增至 `77,031` 词。
