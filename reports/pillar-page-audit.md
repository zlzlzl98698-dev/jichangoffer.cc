# 一级专题（Pillar Pages）结构与升级前后对比审计报告

- **核验日期**：2026-11-21
- **工作区路径**：`c:\Users\Pro User\Desktop\jichangoffer.cc`
- **技术架构识别与保留决策**：实际工作区采用 **Astro v5/v7 静态输出站点**（`output: "static"` + Tailwind CSS v4 + Content Collections + Pagefind），而非示例文档中的 VitePress。依据《一级专题升级》第 1 节保留现有架构与真实 URL 约束，保留全部原有导航栏、首页、32 家品牌页及既有一级真实路由，未做任何跨框架迁移或 URL 破坏性更改。

## 1. 10 个一级专题真实路由与布局模式对照

| 序号 | 一级栏目 | 真实 URL | 所属体系 | 升级前模板状态 | 升级后专属 `layoutMode` 与差异化模块 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | 机场推荐 | `/jichang/` | 体系 C | 通用 `[pillar]/index.astro`（891 汉字） | `selection-comparison`：四象限速选卡 + `ComparisonMatrixTable` + 双栏目录 + 8 题 FAQ |
| 02 | 价格与套餐 | `/pricing/` | 体系 C | 通用 `[pillar]/index.astro`（1135 汉字） | `pricing-decision`：四档预算阶梯 + 单位流量计算表 + `ComparisonMatrixTable` + 8 题 FAQ |
| 03 | 机场品牌 | `/brands/` | 体系 B | 仅 32 家筛选网格，无长文攻略与 FAQ（4420 汉字多为卡片摘要） | `brand-directory`：保留完整 32 家实时筛选器 + 增补数据治理卡 + 深度方法论正文 + 8 题 FAQ |
| 04 | VPN 与加速器 | `/vpn/` | 体系 A | 通用 `[pillar]/index.astro`（942 汉字） | `product-comparison`：三类跨网产品边界矩阵 + `tun-vs-proxy` SVG 原理图 + 品牌表 + 9 题 FAQ |
| 05 | 客户端软件 | `/clients/` | 体系 A | 仅 11 款客户端与 6 系统矩阵卡片（1267 汉字） | `client-operations`：保留 11 款客户端 + 6 系统矩阵 + 三大底层内核（Mihomo/sing-box/Xray）对比 + 9 题 FAQ |
| 06 | AI 与流媒体 | `/ai-streaming/` | 体系 B | 通用 `[pillar]/index.astro`（870 汉字） | `scenario-validation`：2026-08-19 实测地区解锁矩阵表（HK/SG/JP/US）+ `ComparisonMatrixTable` + 9 题 FAQ |
| 07 | 线路与节点 | `/routes/` | 体系 A | 通用 `[pillar]/index.astro`（1014 汉字） | `technical-testing`：`iepl-vs-transit` SVG 架构图 + 节点倍率与测速口径说明卡 + 专线对比表 + 8 题 FAQ |
| 08 | 使用教程 | `/tutorials/` | 体系 A | 通用 `[pillar]/index.astro`（1141 汉字） | `step-by-step-task`：4 步零基础通网路线看板 + `tun-vs-proxy` SVG 原理图 + 实操分流对照 + 8 题 FAQ |
| 09 | 故障排查 | `/troubleshooting/` | 体系 A | 通用 `[pillar]/index.astro`（1010 汉字） | `diagnostic-triage`：30 秒症状定位看板（Timeout/订阅失败/断网/校园网）+ `dns-fakeip` SVG 图 + 8 题 FAQ |
| 10 | 风险与替代 | `/risks/` | 体系 B | 通用 `[pillar]/index.astro`（1018 汉字） | `risk-and-alternatives`：L1–L4 五级风险分层卡 + 六大避坑点 + 应急转移矩阵 + 8 题 FAQ |

## 2. 技术升级实现明细

1. **内容集合校验层**：在 `src/content.config.ts` 新增 `pillars` Content Collection Schema，强制约束 `pillarId`、`targetRoute`、`layoutMode`（10 个专属枚举值）、`entityChain`、`crossPillarLinks`、`recommendedBrandSlugs`、`dataGapNotes` 与结构化 `faqs`。
2. **差异化决策组件层**：新建 `src/components/pillars/PillarIntentModules.astro` 与 `src/components/pillars/PillarGuideSection.astro`，分别为商业决策、定价预算、客户端运维、AI 实测矩阵、线路架构图、排错看板及风险分层输出独立 UI 结构，避免 10 个页面同质化。
3. **GEO / SEO 底座增强**：全 10 个一级专题页均已注入 Answer-First 核心直答模块、知识实体链（Entity Chain）、桌面端右侧粘性目录（`sticky top-20`）、移动端可折叠目录（`<details>`）、结构化 `<details>` FAQ 手风琴与 `CollectionPage` + `ItemList` + `FAQPage` + `BreadcrumbList` 6 组 JSON-LD。
4. **移动适配加固**：在 `src/styles/global.css` 对 `.prose-zh table` 增加 `display: block; overflow-x: auto; -webkit-overflow-scrolling: touch;`，避免宽 Markdown 对比表在 375px 窄屏撑破横向容器。
