# 商业转化链路与联盟合规审计报告 (`conversion-audit.md`)

- **审计日期**：2026-11-21
- **QA 属性验证 (`npm run validate`)**：全站 `183` 个 HTML 页面外链推广标签 **`rel="nofollow sponsored noopener"` 零遗漏（`0` 违规）**

## 一、分级 CTA 节制策略（反强买骚扰设计）

1. **`task-only` 场景克制（纯教程/排错）**：
   - 在 `src/pages/articles/[slug].astro` 与 `src/pages/tutorials/[topic]/[slug].astro` 中落地的 `ctaMode` 字段支持识别纯工具实操/故障排查页面（例如 `clash-verge-override-ai-routing` 等）；实机渲染检查证实其 `<main>` 内无侵略性商业横幅，仅保留相关评测与同专题技术指南延伸，优先保障教学流畅度与用户信任。
2. **中意图决策页自然承接**：
   - 长尾选型文（如 `monthly-20-cny-comparison`、`five-six-yuan-budget-tier-comparison`、`isp-telecom-unicom-mobile-routing`）先列全表成本、单 GB 摊销、三网差异与风险前置警示，再通过对应品牌的 `/reviews/{slug}/` 与 `/brands/{slug}/` 入口分流，不以虚高推荐替代客观条件过滤。
3. **高意图交易枢纽优化 (`/brands/{slug}/` & `/compare/{slug}/`)**：
   - **4 档以上套餐直观比价卡**：在 `/brands/{slug}/` 页面，针对套餐数 `>= 4` 的品牌自动提取代表套餐卡片（`pickRepresentativePlans`）并标明 `¥ / GB` 单价参考，解决长表格筛选疲劳。
   - **客户端兼容性卡片与前置风险提醒**：同时展示支持自研/第三方客户端形式、是否存在跨文档优惠码/价格冲突（如微风网络、暮光加速、隐形人等）或链接格式异常（如云界线等）。
   - **双边核验对比转换**：`/compare/{slug}/` 底部配置左右对称双品牌卡片，同步提供「查看详细评测」与「查看最新价目与官方入口」。
