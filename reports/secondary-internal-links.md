# 二级专题内部链接拓扑与连通性检查报告

- **校验命令**：`npm run validate`（调用 `scripts/validation/run-qa.ts`）
- **最新实测输出**：**全站（Batch 1 + Batch 2 + Batch 3 共 59 个二级页及全库）共扫描 169 个 HTML 文件，0 项错误（Broken internal links: 0，单页唯一 H1，Canonical/Schema/推广属性全部通过）**。
- **Pagefind 全文搜索索引**：由 Batch 2 结束时的 48,590 词进一步跃升至 **56,589 词**（167 页有效索引）。

## 一、三层上下游闭环逻辑检查（全站 59 个二级专题 100% 覆盖）

1. **上游一级枢纽 → 二级专题（Level-1 → Level-2）**：
   - `/jichang/` 通过子栏目卡片无缝指向下辖全部 5 个商业二级页。
   - `/pricing/` 通过价格阶梯卡及二级栏目卡片指向下辖 6 个定价子专题。
   - `/brands/` 与导航菜单清晰连往 `/brands/pricing-table/`、`/brands/coupons/`、`/brands/official-links/`。
2. **二级专题 → 同级交叉与回到一级枢纽（Level-2 ↔ Level-2 & → Level-1）**：
   - 每篇升级后的 Batch 1 页面右侧栏均放置直达返回所属一级枢纽按钮（`← 返回机场推荐专题总览` / `← 返回价格与套餐专题总览`），底部固定配 4 张高相关性「关联专题与下一步决策推荐」跨页卡片（锚文本精准描述用途，不做全站机械相同复制列表）。
3. **二级专题 → 三级文章集群 / 评测 / 品牌商业页（Level-2 → Level-3 / Reviews / Brands）**：
   - 每个升级二级页中同时布置三处商业与阅读桥梁：`ComparisonMatrixTable` 横向对比表、`#level3-clusters` 已上线长文直达与规划路线图，以及侧边栏含 `rel="nofollow sponsored noopener"` 且从 `src/data/links/brands.ts` 集中读取的官方注册入口卡。
   - **空链接红线控制**：`SecondaryTopicShell.astro` 对尚处于 `status === 'planned'` 的选题仅展示静态文本标题、核心关键词与标签，**绝不渲染空 `<a href="#">` 或死链页面**。

## 二、关于跨页面建议增补回链的非越界说明

遵守第 2 节边界规定（本次不批量改写已有三级文章正文及首页），建议下轮推进 Batch 2/3 时，可在相关旧教程/文章末尾按需补充指向 Batch 1 新升级页的自然回链（如 `five-six-yuan-budget-tier-comparison.md` 指向 `/pricing/cheap/`、`monthly-vs-annual-vs-unlimited.md` 指向 `/pricing/monthly/` 与 `/pricing/unlimited-time/`）。
