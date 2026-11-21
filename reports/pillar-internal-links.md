# 10 个一级专题（Pillar Pages）内链矩阵与连通性校验报告

- **校验脚本**：`npx tsx scripts/validation/run-qa.ts`（`npm run validate`）
- **最新校验结果**：**扫描全站 169 个 HTML 文件，0 个死链（Broken internal links: 0），0 项 SEO/Schema/联盟属性异常**。
- **推广链接治理规范**：所有跨向外部服务商注册入口的链接均统一由 `src/data/links/brands.ts` 集中调度，自动携带 `target="_blank" rel="nofollow sponsored noopener"`，并在对应模块旁保留商业合作披露文本；遇到链接格式异常的品牌（如云界线、环球梯缺失 `#/` 路由符）统一在侧边栏改指向站内档案 `/brands/[slug]/` 先行提示核查。

## 1. 全站十专题内链实测统计表（基于 `dist/` HTML 真实解析）

| 一级专题路由 | `<main>` 独立内链数 | 二级子专题闭环 | 关联跨专题枢纽 (`crossPillarLinks`) | 代表文章 / 评测 / 品牌桥接数 |
| :--- | :---: | :--- | :--- | :--- |
| `/jichang/` | 29 | 5 个二级商业子专题 | `/pricing/`、`/brands/`、`/routes/`、`/risks/` | 多家品牌评测页 + 32家比较矩阵 + 特色品牌卡 |
| `/pricing/` | 28 | 6 个价格/周期子专题 | `/brands/pricing-table/`、`/brands/coupons/`、`/jichang/`、`/risks/` | `five-six-yuan-budget-tier-comparison`、`monthly-vs-annual-vs-unlimited` |
| `/brands/` | 73 | 4 个子数据库入口 + 32 品牌详情页 | `/brands/pricing-table/`、`/brands/coupons/`、`/brands/official-links/`、`/compare/` | 全库 32 家 `/brands/[slug]/` + 12 家 `/reviews/[slug]/` + 规划池 |
| `/vpn/` | 44 | 6 个对比/终端子专题 | `/clients/`、`/jichang/`、`/risks/`、`/ai-streaming/` | `vpn-vs-airport-vs-game-accelerator`、`openwrt-proxy-guide` 等文章与客户端页 |
| `/clients/` | 29 | 11 个客户端独立档案 + 6 OS 矩阵 | `/tutorials/`、`/brands/`、`/troubleshooting/`、`/ai-streaming/` | `openwrt-nikki-vs-openclash`、11 个 `/clients/[slug]/`、代表兼容品牌 |
| `/ai-streaming/` | 28 | 5 个服务解锁子专题 | `/reviews/guangsuyun/`、`/articles/hong-kong-vs-singapore-vs-japan-nodes/`、`/tutorials/routing-rules/clash-verge-override-ai-routing/`、`/jichang/` | `how-to-read-speedtest-charts`、`ai-unlock-node-selection`、`/compare/` |
| `/routes/` | 27 | 6 个线路/延迟/倍率子专题 | `/articles/how-to-read-speedtest-charts/`、`/articles/iepl-vs-iplc-vs-transit/`、`/ai-streaming/`、`/pricing/` | `campus-enterprise-network-protocols`、主力专线品牌页 |
| `/tutorials/` | 36 | 5 个教程主题目录 | `/clients/`、`/troubleshooting/`、`/brands/`、`/ai-streaming/` | 7 篇真实教程（含 `clash-verge-rev-guide`、`tun-mode-explained`、`shadowrocket-ios-setup` 等） |
| `/troubleshooting/` | 23 | 5 个故障排查子专题 | `/tutorials/`、`/tutorials/subscription/subscription-troubleshooting/`、`/articles/fake-ip-vs-redir-host-dns-leak/`、`/risks/` | `campus-enterprise-network-protocols`、`/brands/official-links/` |
| `/risks/` | 27 | 5 个风险/避坑/替代子专题 | `/brands/official-links/`、`/compare/`、`/articles/airport-exit-scam-migration-checklist/`、`/brands/coupons/` | 32 家品牌页、`/pricing/unlimited-time/`、`/clients/` |

## 2. 本轮发现并立即修复的内链异常记录

在首轮构建校验（`task-445`）时，`run-qa.ts` 精准定位了 4 处失效链接：
1. `/clients/index.html`、`/jichang/index.html`、`/vpn/index.html` 中的 `/brands/tizi/`（真实品牌 slug 为 `tiziyun`，已在 `vpn.md`、`tutorials.md`、`clients.md` 及 `PillarIntentModules.astro` 更正为 `/brands/tiziyun/`）。
2. `/clients/index.html` 中的 `/brands/qimiaoyun/`（“七秒云”不在已去重 32 家直入品牌库内，已在 `clients.md` 替换为已收录并开放第三方通用订阅的 `/brands/u1s1/`）。

复建并重跑校验后（`task-457`），**全站 169 个 HTML 页面保持 0 死链通过**。
