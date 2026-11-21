# 关键词互抢排查报告 (Keyword Cannibalization Report)

生成时间：2026-11-21
总入库关键词数：349
聚类集群数量：105

## 检测规则

1. 同一个实体（如“光速云”）+ 同一搜索意图（如 Commercial Investigation vs Navigational）必须对应唯一主 URL：
   - `/brands/{slug}/` 承担 **Navigational / Transactional**（品牌官网、套餐价格、优惠码、链接核验）。
   - `/reviews/{slug}/` 承担 **Commercial Investigation**（深度评测、测速证据、AI/流媒体分析、优缺点与对比）。
2. 十大专题一级页（如 `/jichang/`）承担导航枢纽与 Pillar 总览，二级页（如 `/jichang/stable/`）承担细分长尾意图，三级长尾文章聚焦单一可执行搜索任务。

## 检测结果

- 检测到跨 URL 意图冲突组数：**0**
- 当前映射表中所有实体与主搜索意图均一对一映射至唯一目标 URL，无关键词互抢冲突。
