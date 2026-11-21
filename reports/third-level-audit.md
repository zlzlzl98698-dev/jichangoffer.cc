# 全站三级架构与页面资产盘点报告 (`third-level-audit.md`)

- **核验日期**：2026-11-21
- **静态构建总页数**：`183` 页（`dist/` HTML 实扫）
- **Pagefind 检索覆盖**：`181` 页被索引，共 `77,031` 词（二级专题升级完成时为 `169` 页 / `56,589` 词，本次三级升级净增 `+14` 个独立页面与 `+20,442` 搜索索引词）
- **全站 QA 巡检**：`npm run check` **0 errors / 0 warnings / 0 hints**（65 个 Astro/TS 文件）；`npm run validate` **183 HTML files scanned, 0 issues found**

## 一、三级页面结构盘点总表

| 页面类型 | 路由形式 | 源码路径 / 数据源 | 数量 | 实测正文特征（纯汉字） |
| :--- | :--- | :--- | :---: | :--- |
| **长尾文章页** | `/articles/{slug}/` | `src/content/articles/*.md` | **22 篇** | `md_body` 1,060–2,086 字（均 `1,556`）；`<main>` 2,584–4,008 字 |
| **实操教程页** | `/tutorials/{topic}/{slug}/` | `src/content/tutorials/*.md` | **9 篇** | `md_body` 1,423–2,094 字（均 `1,738`）；`<main>` 2,670–3,568 字 |
| **品牌深度评测页** | `/reviews/{slug}/` | `src/content/reviews/*.md` | **32 篇** | `guangsuyun` 旗舰 `6,756` 正文 / `10,960` `<main>`；全库均值 `1,025` 正文汉字 |
| **品牌商业档案页** | `/brands/{slug}/` | `src/pages/brands/[slug].astro` + `src/data/brands/` | **32 页** | 4 档以上套餐品牌自动生成代表套餐卡片 + `¥/GB` + 客户端兼容性卡 |
| **品牌横向对比页** | `/compare/{slug}/` | `src/pages/compare/[slug].astro` + `src/content/comparisons/*.md` | **10 组** | 9 维差异对比矩阵 + 独立 Markdown 深度分析（均值 `532` 正文 / `<main>` 1,637–2,137 字） |

## 二、既有架构保护清单（严守 2.2 节约束）

1. **零改动区域**：首页 `/`、全站顶部导航菜单、全站 Footer、全站 10 大一级 Pillar 专题正文（`src/pages/[pillar]/index.astro`）、以及 54 篇二级 Topic 正文 prose 均未作任何非必要修改或重写。
2. **二级向三级自然引流机制**：通过修改 `src/pages/[pillar]/[slug].astro` 的关联文章读取逻辑（按 `exactMatch` 优先并取前 12 篇）以及更新 `src/content/topics/*.md` 中 `articleClusters` 前置元数据 `status: "planned"` → `"published"`，实现 **13 个精准匹配规划集群位** 自动转为站内可点击卡片，未修改二级正文主体。
3. **同品牌双页面意图边界**：明确 `/brands/{slug}/`（交易/官方入口/优惠码/全套价格单）与 `/reviews/{slug}/`（实测图/历史冲突/AI 流媒体/长期深度评判）双向互链但意图标注完全隔离，彻底防止自家站点关键词互抢。
