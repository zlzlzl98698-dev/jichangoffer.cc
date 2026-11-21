# 全站二级专题（Level-2 Topic Hubs）完整审计与 78 规划主题归属报告

- **核验日期**：2026-11-21
- **技术框架**：Astro（静态输出模式，保留全站原有 URL、导航栏、一级专题与 32 家品牌库）
- **现有二级专题实存总数**：**59 个已部署独立页面**（含 `[pillar]/[slug]` 下 43 个、`brands/` 下 5 个子枢纽页及 `clients/` 下 11 个独立客户端专题页），另有规划扩增候选建议与意图合并记录如下。

## 一、10 大一级主题 × 现有 59 个真实页面与规划 78 个主题映射总索引

> **规划原则遵循**：依据《二级专题升级》第 3 节，“不无条件新增 78 个 URL；与一级或已有二级搜索意图完全重叠者就地合并，已上线路由全部保留升级，欠缺独立页面的规划词记录在本表按批次推进”。

### 01 机场推荐（Batch 1 · 已全部完成深度扩展）
| 规划编号 | 规划名称 | 站内映射状态 | 真实 URL | Batch 1 执行结果 |
| :--- | :--- | :--- | :--- | :--- |
| 01.1 / 01.7 | 机场推荐选型 & 方法（防与 `/jichang/` 重合） | 已上线调整定位 | `/jichang/recommend/` | **已完成**（转为“4象限实战选型落地页”，`<main>` 5,451 汉字） |
| 01.1 | 机场排行 | 已上线升级 | `/jichang/ranking/` | **已完成**（商业置顶与实测分离榜单，`<main>` 5,545 汉字） |
| 01.2 | 靠谱机场 | 已上线升级 | `/jichang/reliable/` | **已完成**（年限/一致性/售后四标审计，`<main>` 5,424 汉字） |
| 01.3 | 稳定机场 | 已上线升级 | `/jichang/stable/` | **已完成**（晚高峰 IEPL/IPLC 工程解析 + SVG，`<main>` 4,777 汉字） |
| 01.4 / 01.5 | 好用的机场（合并“新手机场推荐”意图） | 已上线升级 | `/jichang/best-to-use/` | **已完成**（双支持 vs 独占客户端对比，`<main>` 4,917 汉字） |
| 01.6 | 高性价比机场 | 归并路由避免自相竞争 | 统一归 `/pricing/value/` | 避免与“性价比机场套餐”抢同一商业核心词 |

### 02 价格与套餐（Batch 1 · 已全部完成深度扩展）
| 规划编号 | 规划名称 | 站内映射状态 | 真实 URL | Batch 1 执行结果 |
| :--- | :--- | :--- | :--- | :--- |
| 02.1 | 便宜机场 | 已上线升级 | `/pricing/cheap/` | **已完成**（¥5.6 年付档 vs 老牌百元对比，`<main>` 4,679 汉字） |
| 02.2 | 一元机场 | 已上线升级 | `/pricing/one-yuan/` | **已完成**（成本账本与合规替代拆解，`<main>` 4,875 汉字） |
| 02.3 | 一分机场 | 已上线升级 | `/pricing/one-cent/` | **已完成**（超低价钓鱼拆解与合规月付推荐，`<main>` 4,580 汉字） |
| 02.4 | 月付机场 | 已上线升级 | `/pricing/monthly/` | **已完成**（¥14.9–¥25 真实单月试错榜，`<main>` 4,358 汉字） |
| 02.5 | 不限时机场 | 已上线升级 | `/pricing/unlimited-time/` | **已完成**（一次性永久包精算与热备，`<main>` 4,712 汉字） |
| 02.6 | 性价比机场 | 已上线升级 | `/pricing/value/` | **已完成**（单 GB 含倍率真实测算式，`<main>` 4,651 汉字） |
| 02.7 / 02.8 | 年付机场 / 大流量机场 | 候选后续独立扩充或承接于总表 | 暂归 `/pricing/` 与 `/brands/pricing-table/` | 列入未来可建增量清单，先避免未建空路由 |

### 03 机场品牌（Batch 1 · 核心运营子枢纽已加固）
| 规划编号 | 规划名称 | 真实 URL | 升级与规划状态 |
| :--- | :--- | :--- | :--- |
| 03.1 | 机场品牌库 | `/brands/` | 一级升级已涵盖完整 32 家实时筛选器 + 方法论长文与 FAQ |
| 03.2 | 机场品牌评测 | `/reviews/` | `<main>` 2,588 汉字（已有 12 篇单品牌深评，留待细化集群汇总表） |
| 03.3 | 机场官网导航 | `/brands/official-links/` | **Batch 1 已升级**（增补链核验规则 + 关联导航 + 3 题 FAQ，`<main>` 1,408 汉字） |
| 03.4 | 品牌套餐价格 | `/brands/pricing-table/` | **Batch 1 已升级**（增补 3 条审价准则 + 延伸专题 + 4 题 FAQ，`<main>` 1,575 汉字） |
| 03.5 | 机场优惠码 | `/brands/coupons/` | **Batch 1 已升级**（增补周期冲突排除说明 + 3 题 FAQ，`<main>` 1,469 汉字） |
| 03.6 | 机场替代品 | `/compare/`（及 `/risks/alternatives/`） | `<main>` 722 汉字（与 `/risks/alternatives/` 分工，待后续批次扩充） |
| 03.7 | 品牌运营风险与状态 | 归并入 `/risks/exit-scam/` 与 `/brands/official-links/` | 避免拆分过多空白二级状态页 |

### 04–06 工具与场景专题（Batch 2 · 22 页已全部完成深度扩展）
- **04 VPN 与加速器（6 页已升级）**：`/vpn/recommend/` (4,440字)、`/vpn/free/` (4,540字)、`/vpn/mobile/` (3,944字)、`/vpn/android/` (3,985字)、`/vpn/reviews/` (4,297字)、`/vpn/game-accelerator/` (4,187字) — 合计 6 页已上线升级完成。*(规划中的 `Windows VPN`、`VPN 与代理区别` 暂由 `/vpn/` 一级长文与 `vpn-vs-airport-vs-game-accelerator` 承接，不制造同义重复页面)*
- **05 客户端软件（11 页已升级）**：11 个独立客户端页 `/clients/clash-verge-rev/` 至 `/clients/nekobox/` 已通过 `clients/[slug].astro` 与 `src/content/topics/client-*.md` 全面扩展至 2,199–2,904 汉字并接入三级集群与官方源码警告。
- **06 AI 与流媒体（5 页已升级）**：`/ai-streaming/chatgpt/` (4,239字)、`/ai-streaming/claude/` (4,432字)、`/ai-streaming/gemini/` (3,920字)、`/ai-streaming/netflix/` (4,346字)、`/ai-streaming/youtube/` (4,176字) — 5 页已上线升级完成。

### 07–10 专业知识与问题专题（Batch 3 · 23 页已全部完成深度扩展）
- **07 线路与节点（6 页已升级）**：`/routes/iepl/` (4,130字)、`/routes/iplc/` (3,688字)、`/routes/hong-kong/` (3,788字)、`/routes/japan/` (3,774字)、`/routes/low-latency/` (3,847字)、`/routes/multiplier/` (3,963字) — 6 页全部上线升级完成。
- **08 使用教程（5 页已升级）**：`/tutorials/subscription/` (4,006字)、`/tutorials/clash-config/` (3,934字)、`/tutorials/routing-rules/` (3,984字)、`/tutorials/tun-mode/` (4,033字)、`/tutorials/client-install/` (3,872字) — 5 页全部上线升级完成。
- **09 故障排查（5 页已升级）**：`/troubleshooting/node-timeout/` (3,922字)、`/troubleshooting/subscription-failed/` (3,761字)、`/troubleshooting/cannot-connect/` (3,832字)、`/troubleshooting/dns-error/` (3,873字)、`/troubleshooting/client-wont-start/` (3,896字) — 5 页全部上线升级完成。
- **10 风险与替代 + 聚合页（7 页已升级）**：`/risks/exit-scam/` (4,018字)、`/risks/avoid-traps/` (3,896字)、`/risks/alternatives/` (3,851字)、`/risks/refund-issues/` (4,152字)、`/risks/security/` (4,255字) + `/reviews/` (3,140字) + `/compare/` (1,299字) — 全部收官上线。
