# 二级专题关键词归属与防竞争边界矩阵（Keyword Ownership Map）

本表明确一级专题、全站 59 个二级页面及重要文章之间的主关键词边界，坚决杜绝同站点两个独立页面争抢同一核心词。

## 一、Batch 1 已升级核心商业页主词归属（14 页）

| 二级页面路径 | 唯一锁定主关键词 | 二级扩展长尾词 | 搜索意图 | 与一级/同级页边界说明 |
| :--- | :--- | :--- | :--- | :--- |
| `/jichang/recommend/` | 机场推荐选型 | 按场景机场推荐、多设备机场选择、新手买什么机场 | Commercial Investigation | 一级 `/jichang/` 负责总方法论；本页直接对应“四象限选型方案” |
| `/jichang/ranking/` | 机场排行 | 机场排行榜、2026 机场排名、好机场榜单怎么排 | Commercial Investigation | 专注揭露榜单口径并对比三个真实梯队，不抢“推荐”主词 |
| `/jichang/reliable/` | 靠谱机场 | 靠谱机场推荐、机场是否靠谱、长期运营机场 | Commercial Investigation | 围绕运营年限、售后响应与多文档无冲突审计，区分性能 |
| `/jichang/stable/` | 稳定机场 | 稳定机场推荐、晚高峰稳定机场、IEPL 稳定吗 | Commercial Investigation | 聚焦晚上 20:00–23:00 低丢包工程原因（边界不抢 `/routes/iepl/` 定义词） |
| `/jichang/best-to-use/` | 好用的机场 | 新手好用机场、一键直连机场、容易使用的机场 | Commercial Investigation | 专注双支持 vs 独占软件上手门槛与新手顺手程度 |
| `/pricing/cheap/` | 便宜机场 | 低价机场、便宜机场推荐、5.6元机场靠谱吗 | Transactional | 围绕“真实总额 <= ¥100 年付 / <= ¥20 月付”，不虚构 ¥1 月付 |
| `/pricing/one-yuan/` | 一元机场 | 一元机场推荐、1元机场官网、一元梯子是真的吗 | Commercial Investigation | 剖析“一元”词真实硬件成本、短期试用及正规替代方案 |
| `/pricing/one-cent/` | 一分机场 | 一分机场套餐、一分钱机场、0.01元机场真相 | Commercial Investigation | 与“一元”分写：侧重支付极小面额引流套路与安全账号隔离 |
| `/pricing/monthly/` | 月付机场 | 月付机场推荐、按月付费机场、不买年付的机场 | Transactional | 严格限制为“实付可买单自然月 ¥14.9–¥25”的品牌清单与 7 天测法 |
| `/pricing/unlimited-time/` | 不限时机场 | 永久流量机场、不限时流量包、备用机场不限时 | Transactional | 针对 `one-time` 一次性不限时流量包精算及容灾备用用途 |
| `/pricing/value/` | 性价比机场 | 机场套餐性价比、机场每GB成本、流量性价比排行 | Commercial Investigation | 用单位有效成本公式统算，并合并“高性价比机场”词以免两页互搏 |
| `/brands/pricing-table/` | 机场套餐价格表 | 机场资费对比、月付年付不限时价格汇总 | Transactional | 全站 32 家结构化比价工具页 |
| `/brands/coupons/` | 机场优惠码 | 机场折扣码、新人优惠券限制 | Transactional | 专注汇总优惠代码、周期限制及文档冲突备注 |
| `/brands/official-links/` | 机场官网导航 | 机场入口地址、防钓鱼官网验证 | Navigational | 专注外链集中管理及缺失 `#/` 异常提示 |

## 二、Batch 2 & Batch 3 待升级 45 页主词占位边界（预设校验无冲突）

- **VPN 与加速器 (`/vpn/*`)**：`recommend` 锁“VPN 推荐”（区分传统 VPN 与机场）、`free` 锁“免费 VPN 风险”、`mobile` 锁“手机 VPN / iOS”、`android` 锁“安卓 VPN”、`reviews` 锁“VPN 软件评测”、`game-accelerator` 锁“游戏加速器”。
- **客户端软件 (`/clients/*`)**：11 个 `[slug]` 各自精确锁定对应软件名主词（`Clash Verge Rev`、`Clash Meta`、`v2rayN`、`Shadowrocket`、`Mihomo`、`sing-box`、`FlClash`、`Hiddify`、`Karing`、`v2rayNG`、`NekoBox`），避免教程页抢软件百科核心词。
- **AI 与流媒体 (`/ai-streaming/*`)**：`chatgpt`、`claude`、`gemini`、`netflix`、`youtube` 一对一精准锚定单服务解锁与分流策略，长文详情由 `/reviews/guangsuyun/` 等评测页承接截图佐证。
- **线路与节点 (`/routes/*`)**：`iepl`、`iplc`、`hong-kong`、`japan`、`low-latency`、`multiplier` 分别覆盖技术概念及倍率计费规则，互不越界。
- **使用教程 (`/tutorials/*`)**：5 个目录页承接概念、系统门槛与集群聚合，具体如 `Clash Verge Rev 安装配置` 等单个实操步骤分流给对应三级 `/tutorials/[topic]/[slug]/`。
- **故障排查 (`/troubleshooting/*`)**：5 大报错词（`节点超时`、`订阅失败`、`连接不上`、`DNS 错误`、`客户端无法启动`）严格按表象症状切割。
- **风险与替代 (`/risks/*`)**：`exit-scam` 锁“机场跑路征兆”、`avoid-traps` 锁“机场避坑”、`alternatives` 锁“机场替代（与 `/compare/` 具体品牌对抗互补）”、`refund-issues` 锁“退款规则”、`security` 锁“机场安全性”。
