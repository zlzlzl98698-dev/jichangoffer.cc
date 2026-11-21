# 三级长尾关键词映射与规划池说明 (`longtail-keyword-map.md`)

- **生成脚本**：`npm run keywords:update`（[scripts/keywords/run-pipeline.ts](file:///c:/Users/Pro%20User/Desktop/jichangoffer.cc/scripts/keywords/run-pipeline.ts)）
- **统计时点**：2026-11-21
- **关键词总规模**：**349** 个去重长尾关键词，归并入 **105** 个话题聚类集群（`cluster-map.json`）

## 一、程序化数据产出一览

| 输出文件 | 路径 | 用途说明 |
| :--- | :--- | :--- |
| 长尾词总表 | `data/keywords/longtail-master.csv` | 全站 349 词主词/变体词、所属栏目、意图、落地页 URL 与状态标注 |
| 文章关键词映射 | `data/keywords/article-keyword-map.json` | 每个已发布文章/教程/评测/对比页对应的主词、辅词与内链目标 |
| 话题集群图谱 | `data/keywords/cluster-map.json` | 105 个聚类的中心词、发布状态（`published` / `planned`）及分支清单 |
| 优先级排序队列 | `data/keywords/content-priority.csv` | 按 P0 (`94`) / P1 (`250`) / P2 (`1`) / P3 (`4`) 标明的优先级排队 |

## 二、搜索意图分布与零冲突校验

1. **互抢检查（`reports/keyword-cannibalization-report.md`）**：跨 URL 意图冲突组数为 **`0`**。
2. **明确分离案例**：
   - `openwrt-nikki-vs-openclash`：承接插件核心差异与规则引擎对比（Comparison）。
   - `openwrt-proxy-guide`：承接旁路由网关接管架构、防火墙与家庭终端上线配置（Tutorial / Deployment）。
   - `{brand} 评测` → `/reviews/{slug}/`；`{brand} 官网 / 优惠码 / 套餐价格` → `/brands/{slug}/`。
3. **诚实数据边界声明**：当前站点尚未接入 Google Search Console 或 Bing Webmaster Tools 外部真实曝光/点击导出，因此流水线产出的优先级评分全部标注为 `editorial-judgment`，所有 `searchVolume`、`impressions`、`clicks` 字段保持留空不杜撰。
