# 三级内容与品牌内链矩阵报告 (`internal-link-matrix.md`)

- **盘点时间**：2026-11-21
- **全站静态扫描**：`npm run validate`（[scripts/validation/run-qa.ts](file:///c:/Users/Pro%20User/Desktop/jichangoffer.cc/scripts/validation/run-qa.ts)）实扫 `183` 个 HTML 页面，**站内断链 / 死链数为 `0`**；`/brands/{slug}/` ↔ `/reviews/{slug}/` 互链漏接数为 `0`。

## 一、三层倒三角与横向闭合网状路径

1. **Pillar (L1) → Topic (L2) → Article/Tutorial (L3) 纵向自动闭环**：
   - **下游导流**：`src/pages/[pillar]/[slug].astro` 按 `exactMatch` 优先及发布顺序自动拉取关联长尾文章（`.slice(0, 12)`），并与 `src/content/topics/*.md` 中 `13` 条已从 `"planned"` 转 `"published"` 的主题集群词卡联动，实现**不改二级正文即可自动露出新增三级长尾内容**。
   - **上游回链**：`src/pages/articles/[slug].astro` 与 `src/pages/tutorials/[topic]/[slug].astro` 顶部均强制输出完整三级面包屑（`首页 → 一级栏目 → 二级专题 → 当前标题`），底部自动聚合 `relatedArticleSlugs` 及同专栏兄弟文章。
2. **品牌双轨制与评测/对比交叉矩阵**：
   - `/brands/{slug}/` ↔ `/reviews/{slug}/` **32 家 100% 双向直达**（已在 `run-qa.ts` 新增 `brandCrossLinkErrors` 硬门禁）。
   - `10` 组 `/compare/{slug}/` 通过 `findBrandComparisons(slug)` 自动反向挂入对应品牌档案与评测正文底部，并在对比页内同时回链双方 `/brands/` 与 `/reviews/`。
   - 所有三级评测均支持配置 `upstreamTopics` 指回上层决策指南（如性价比月付、AI 解锁、三网专线分流），形成选型教育与商业核验的双向导流。
3. **同级长尾互斥避让机制**：
   - 相邻题材如 `openwrt-nikki-vs-openclash` 与 `openwrt-proxy-guide` 通过互斥正文定位加彼此文内互相导流，避免内部锚文本冲突。
