# 品牌横向对比专题落地清单 (`brand-comparison-plan.md`)

- **上线时间**：2026-11-21
- **总计页面**：**10 组**高搜索转化对比专页（`/compare/{slug}/`）
- **模板与内容升级**：`src/pages/compare/[slug].astro` 已全面升级为 **9 维参数对比矩阵 + 独立 `comparisons` Markdown 深度剖析 + `Article` / `FAQPage` / `BreadcrumbList` 结构化 Schema + 双方官方档案/评测双轨 CTA 卡片**。

## 一、10 组品牌横向对比全量清单

| # | 对比路由 Slug | 对比双方 | 决策核心冲突 | Markdown 正文 / `<main>` 汉字 |
| :---: | :--- | :--- | :--- | :---: |
| 1 | `guangsuyun-vs-xingdaomeng` | 光速云 vs 星岛梦 | 全面多线月/年/永久生态 vs 1 倍不限设备纯 Trojan 专线 | `725` / `2,137` |
| 2 | `guangsuyun-vs-ermao` | 光速云 vs 二猫云 | 成熟多维 AI 实测样本 vs 低月门槛新线对比及新加坡冲突披露 | `606` / `2,092` |
| 3 | `guangsuyun-vs-weitu` | 光速云 vs 唯兔云 | 老牌全周期高配线 vs ¥18 真月付入门灵活性 | `632` / `2,062` |
| 4 | `guangsuyun-vs-feimao` | 光速云 vs 飞猫云 | 开放 Clash/小火箭第三方生态 vs 官方专属一键端封闭便利性 | `569` / `2,066` |
| 5 | `feimao-vs-xingdaomeng` | 飞猫云 vs 星岛梦 | 专属软件省心门槛 vs 全平台开放订阅不限设备 | `501` / `1,840` |
| 6 | `feimao-vs-tiziyun` | 飞猫云 vs 梯子云 | 均有明确测速图依据品牌 vs 缺少完整公开测图与细节档案品牌 | `451` / `1,837` |
| 7 | `yifan-vs-sogo` | 一翻云 vs SOGO 云 | Hysteria2 开放订阅体系 vs 2026 年新自研客户端路线 | `531` / `1,749` |
| 8 | `yifan-vs-weitu` | 一翻云 vs 唯兔云 | 年付+不限时多协议 vs 月付 ¥18 低资金试错成本 | `448` / `1,637` |
| 9 | `jilian-vs-guangnian` | 极连云 vs 光年梯 | 同批次晚间/下午 PNG 速度参考下的两款轻中量选择 | `469` / `1,681` |
| 10 | `shandianshu-vs-dalaoyun` | 闪电鼠 vs 大佬云 | 5.6 元 60GB/年同质族群内链透明度（URL/协议）实测拆解 | `388` / `1,721` |

## 二、反向内链融合情况

1. 上述 10 组对比均已通过 `src/lib/contentLinks.ts` 的 `findBrandComparisons(slug)` 自动回流渲染到各自涉及品牌的 `/brands/{slug}/` 与 `/reviews/{slug}/` 页面底部推荐区。
2. 所有对比页面同时嵌入 `/compare/` 聚合列表，点击即达，全库 `0` 孤岛对比页。
