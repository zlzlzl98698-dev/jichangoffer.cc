# 全站内部链接矩阵映射 (Internal Link Map)

- **首页 (/)** → 十大专题枢纽 + 精选品牌库 + 最新 9 篇教程/评测/文章 + 客户端知识库 + 高频对比与故障排错
- **知识教程体系 (A)**：`/clients/` & `/tutorials/` & `/troubleshooting/` → 互链至 `/routes/`（原理）、`/brands/`（兼容第三方订阅推荐）及 `/risks/alternatives/`（断联备用）
- **品牌评测体系 (B)**：`/brands/` ↔ `/brands/{slug}/` ↔ `/reviews/{slug}/` ↔ `/compare/{slug}/`
- **商业专题体系 (C)**：`/jichang/*` & `/pricing/*` & `/ai-streaming/*` → 引导至对应条件适配品牌详情页 `/brands/{slug}/` 及深度评测 `/reviews/{slug}/`
- **全站内链断链扫描结果**：0 断链（全部已验证通过）
