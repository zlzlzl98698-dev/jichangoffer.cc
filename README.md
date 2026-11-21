<div align="center">

# ✈️ 机场优惠 (`jichangoffer.cc`)

**中文跨境代理工具知识库 · 32 家机场品牌实证档案 · SEO / GEO 三层内容矩阵系统**

[![Astro](https://img.shields.io/badge/Astro-7.4.13-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Pagefind](https://img.shields.io/badge/Search-Pagefind_77k_Words-1E293B?style=flat-square)](https://pagefind.app/)
[![Static Build](https://img.shields.io/badge/Static_Pages-183_HTML-10B981?style=flat-square)](#%E4%B8%80%E9%A1%B9%E7%9B%AE%E4%B8%8E%E5%86%85%E5%AE%B9%E8%A7%84%E6%A8%A1)
[![QA Validation](https://img.shields.io/badge/SEO_QA-0_Issues-0F52BA?style=flat-square)](#%E5%9B%9B%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E4%B8%8E%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%81%E6%B0%B4%E7%BA%BF)

[**线上主域 (`jichangoffer.cc`)**](https://jichangoffer.cc/) · [**品牌数据库**](/src/data/brands) · [**QA 自动门禁**](/scripts/validation/run-qa.ts) · [**SEO / GEO 审计报告**](/reports/Preventive_SEO_Audit_Report.md)

</div>

---

## 一、项目与内容规模

基于 **Astro 7 + Tailwind CSS v4 + Content Collections + Pagefind + `@astrojs/sitemap` + `@astrojs/rss`** 构建的零数据库静态知识与决策站，围绕**证据溯源真实性（不虚构评分与测速数字）**与**三层倒三角内链架构**组织全站内容：

| 内容维度 | 页面规模与构成 | 核心工程能力 |
| :--- | :---: | :--- |
| **全站静态页面** | **`183` 页** HTML（Pagefind 收录 `181` 页 / `77,358` 词） | 纯静态 SSG 输出、`0` 后端依赖、`npm run validate` 自动零错门禁 |
| **一级 Pillar 专题** | **`10` 大核心栏目** | 涵盖机场推荐、价格套餐、机场品牌、VPN 加速器、客户端、AI/流媒体、线路、教程、排障、避坑与替代 |
| **二级 Topic / 聚合页** | **`59` 个独立页面** | `54` 篇 Content Collections 专题长文 + `5` 个增强数据库/聚合中心（客户端矩阵、品牌对比、价格总表等） |
| **三级长尾文章与教程** | **`31` 篇**（`22` 篇文章 + `9` 篇教程） | 全文 `Answer-First` 直答框、三层面包屑、客户端 `<details>` 目录与 `task-only` 商业降噪开关 |
| **机场品牌库与评测** | **`32` 家去重品牌档案 + `32` 篇独立评测** | `/brands/{slug}/` 专注套餐 `¥/GB` 与优惠入口，`/reviews/{slug}/` 专注实测原图溯源与跨文档冲突披露 |
| **品牌横向对比专题** | **`10` 组竞品对比页** | 9 维参数对比矩阵 + 独立 Markdown 决策剖析 + 双方商业档案与评测双向互链 |
| **程序化关键词工程** | **`349` 词 / `105` 话题集群** | 由 `scripts/keywords/run-pipeline.ts` 自动扫描去重并检验跨 URL 意图互抢冲突（`0` 冲突） |

---

## 二、核心技术与 SEO / GEO 架构特性

- **双轨实体边界与防互抢设计**：同一品牌严格区隔 `/brands/{slug}/`（套餐价目、优惠码、官网核验）与 `/reviews/{slug}/`（实测 PNG 证据、历史冲突、适用边界），`run-qa.ts` 强制校验双向互链与合规。
- **严谨的证据与冲突分级体系**：所有评测区分 `measured`（带时间戳与机房局限说明的存档测速截图）、`vendor`（品牌官方宣传）、`commercial`（推广券码）与 `unverified / conflict`（待核实与跨文档口径差异），拒绝编造星级或 `AggregateRating` Schema。
- **全站结构化数据与搜索引擎基础设施**：
  - 统一输出唯一规范 `<link rel="canonical">`、唯一 `<title>` / `<meta name="description">`、全站 `1200×630` `og:image` 与 `Article` / `CollectionPage` / `FAQPage` / `BreadcrumbList` / `SoftwareApplication` / `AboutPage` JSON-LD。
  - 同时提供 `/sitemap.xml` 与 `/sitemap-index.xml`（收录 `181` 条 HTTPS 规范网址），`robots.txt` 明确放行 `Googlebot`、`bingbot`、`Baiduspider`、`yisouspider`（神马/UC/夸克）。
  - 在 `src/config/site.ts` 内置 **Google / Bing / 神马 / 百度** 四大站长平台 `<meta>` 静态验证预留位，填入验证码重新构建即直出 HTML `<head>`。
- **商业外链与隐私保护**：所有外部跳转统一由 `src/data/links/brands.ts` 集中托管，QA 校验 100% 强制携带 `rel="nofollow sponsored noopener"`；全站默认零追踪代码注入，支持按需启用 Umami / Plausible / 自定义 Beacon。

---

## 三、目录结构

```text
├── public/
│   ├── .htaccess                  # Apache HTTPS / 裸域 301 / 尾斜杠重写、缓存与安全响应头
│   ├── og-default.png             # 全站默认 1200×630 Open Graph 社交卡片图
│   └── favicon.{ico,svg,webp}     # 站点图标资源
├── src/
│   ├── assets/
│   │   ├── evidence/              # 2025-12-02 / 2026-08-11 / 2026-08-19 实测原始截图（astro:assets 优化）
│   │   └── logos/                 # 品牌图标与站点头像
│   ├── components/                # 导航、SEOHead、BrandCard、Observatory 图表、Topic Shell 等组件
│   ├── config/
│   │   ├── site.ts                # 唯一正式主域、站长验证预留、披露文案与分析开关
│   │   └── navigation.ts          # 十大一级栏目与全部二级专题导航树
│   ├── content/                   # Content Collections (articles / tutorials / reviews / comparisons / topics / pillars)
│   ├── data/
│   │   ├── brands/                # 32 家去重机场品牌结构化档案与 10 组对比定义
│   │   ├── clients/               # 11 款主流代理客户端详解与全平台安装矩阵
│   │   ├── links/brands.ts        # 集中管理推广链接、优惠码与链接异常状态
│   │   ├── tests/                 # speedtest-manifest.json 与原始测速资料归档说明
│   │   └── topics/                # 二级专题数据结构
│   ├── layouts/BaseLayout.astro   # 全站统一 HTML 骨架与 Pagefind 索引边界控制
│   ├── lib/                       # inlineMarkdown 解析/清洗与上下游内链关联工具
│   ├── pages/                     # 静态路由、404、/about/、robots.txt.ts、sitemap.xml.ts、rss.xml.ts
│   └── content.config.ts          # Astro Content Collections Zod Schema 定义
├── data/keywords/                 # 自动化流水线产出的词库总表、集群图谱与优先级 CSV/JSON
├── scripts/
│   ├── keywords/run-pipeline.ts   # 长尾关键词去重、意图分类与互抢检查流水线
│   └── validation/                # run-qa.ts（全站 HTML SEO/内链/外链门禁）与字数统计脚本
└── reports/                       # 一/二/三级升级验收、关键词冲突、预防性 SEO/GEO 审计报告
```

---

## 四、常用命令与自动化流水线

> 运行环境要求：`Node.js >= 22.0.0`

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发预览 (http://localhost:4321)
npm run dev

# 3. 执行 Astro 模板与 TypeScript 类型校验
npm run check

# 4. 运行长尾关键词与聚类流水线（更新 data/keywords/* 与部分 reports）
npm run keywords:update

# 5. 构建全站静态页面（dist/）并生成 Pagefind 全文搜索索引
npm run build

# 6. 扫描 dist/ 执行全站死链、H1/Canonical/Schema 规范及外链 rel 自动验收
npm run validate
```

---

## 五、上线部署与站长接入清单

1. **托管与重定向规范**：将 `npm run build` 生成的 `dist/` 全部文件（含 `.htaccess`）上传至正式主机并绑定 `https://jichangoffer.cc/`；如非 Apache 环境，请在 CDN / 托管规则中配置 `www.jichangoffer.cc` → `https://jichangoffer.cc` 301 与统一尾部斜杠重定向。
2. **站长平台验证**：在 Google Search Console、Bing Webmaster Tools、神马站长平台及百度搜索资源平台获取 HTML 验证 Meta 的 `content` 值，填入 [src/config/site.ts](src/config/site.ts) 的 `verification` 对象并重新执行 `npm run build` 部署即可，验证完成后提交 `https://jichangoffer.cc/sitemap.xml`。
3. **可选转化统计**：在 [src/config/site.ts](src/config/site.ts) 将 `analytics.enabled` 调整为 `true` 并填入 Umami / Plausible / 自定义后端地址即可启用脱敏 CTA 点击追踪。
