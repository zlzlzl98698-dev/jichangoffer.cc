# 未完成项与上线前人工核验清单 (Remaining Work)

1. **其余 31 个品牌万字深度评测扩写**：光速云（`guangsuyun.md`）已完成深度完稿；其余 31 家已在 `/reviews/{slug}/` 落地结构化实证评测页，需按批次补充独立晚高峰三网实测与逐节点 AI/流媒体截图后，逐步扩写为万字长文（见 `reports/brand-review-progress.md`）。
2. **2026-08-11 批次 PNG 的 `review-required` 人工复核**：尤其 `可信云-节点测速实测.png` 底部完整日历日期在截图中未清晰显示，需编辑复核原始测试记录后再转为 `approved`。
3. **10 家缺实测图品牌补充测试**：大佬云、闪电鼠、云界线、榴莲云、神行加速、环球梯、隐形人、梯子云、浪网、边缘节点 EdgeNova 目前均诚实标注“暂无可核实实测数据”，需安排统一条件下的节点采样测试。
4. **3 家异常格式链接与缺链品牌复核**：云界线（两套 code 冲突且缺 `#/`）、环球梯（缺 `#/`）、榴莲云（域名后缺 `/`）及快狸（缺报价与注册链接）需人工在浏览器打开确认最新官网地址并更新 `src/data/links/brands.ts`。
5. **搜索平台数据接入**：当站点部署上线至 `https://jichangoffer.cc` 后，将 Google Search Console 与 Bing Webmaster Tools 导出的关键词表现 CSV/JSON 放入 `src/data/keywords/imports/` 并运行 `npm run keywords:update` 替换当前的定性评估状态。
6. **上线前统计开关（可选）**：如站点需要真实点击转化统计，可在 `src/config/site.ts` 配置 `analytics.enabled = true` 并接入自有轻量统计端点。
