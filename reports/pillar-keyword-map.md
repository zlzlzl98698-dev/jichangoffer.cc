# 10 个一级专题（Pillar Pages）关键词与搜索意图映射表

本表汇总全站 10 个一级专题各自承担的核心关键词（Primary Keyword）、二级扩展词（Secondary Keywords）、搜索意图定位（`searchIntent`）及其与二级栏目（44 个子专题）的层级承接边界，确保一级枢纽承担高维度决策词/概念聚合词，避免与具体操作教程或单品牌评测页发生关键词自相残杀（Cannibalization）。

全站关键词管道运行结果（`npm run keywords:update`）：**265 个关键词、54 个词簇**。

| 一级专题路由 | 核心词 (`primaryKeyword`) | 覆盖二级扩展词 (`secondaryKeywords`) | 搜索意图定位 | 承接的二级长尾页面矩阵（`src/config/navigation.ts`） |
| :--- | :--- | :--- | :--- | :--- |
| `/jichang/` | 机场推荐 | 机场排行、靠谱机场、稳定机场、好用的机场、性价比机场推荐 | `Commercial Investigation` | `/jichang/recommend/`、`/jichang/ranking/`、`/jichang/reliable/`、`/jichang/stable/`、`/jichang/best-to-use/` |
| `/pricing/` | 机场价格与套餐 | 便宜机场、一元机场、一分机场、月付机场、不限时机场、性价比机场 | `Transactional` | `/pricing/cheap/`、`/pricing/one-yuan/`、`/pricing/one-cent/`、`/pricing/monthly/`、`/pricing/unlimited-time/`、`/pricing/value/` |
| `/brands/` | 机场品牌大全 | 机场品牌评测、机场官网导航、机场套餐价格、机场优惠码、机场替代方案 | `Navigational` | `/brands/`、`/reviews/`、`/brands/official-links/`、`/brands/pricing-table/`、`/brands/coupons/`、`/compare/` + 32 个 `/brands/[slug]/` |
| `/vpn/` | VPN推荐 | VPN 与加速器、免费 VPN 风险、手机 VPN、安卓 VPN、游戏加速器区别、VPN 软件评测 | `Informational` | `/vpn/recommend/`、`/vpn/free/`、`/vpn/mobile/`、`/vpn/android/`、`/vpn/reviews/`、`/vpn/game-accelerator/` |
| `/clients/` | 代理客户端 | Clash Verge Rev、Clash Meta、v2rayN、Shadowrocket、Mihomo、sing-box | `Informational` | `/clients/clash-verge-rev/`、`/clients/clash-meta/`、`/clients/v2rayn/`、`/clients/shadowrocket/`、`/clients/mihomo/`、`/clients/sing-box/` 等 11 个专页 |
| `/ai-streaming/` | AI 机场推荐 | ChatGPT 机场、Claude 机场、Gemini 机场、Netflix 解锁、YouTube 加速、TikTok 节点 | `Commercial Investigation` | `/ai-streaming/chatgpt/`、`/ai-streaming/claude/`、`/ai-streaming/gemini/`、`/ai-streaming/netflix/`、`/ai-streaming/youtube/` |
| `/routes/` | 机场线路与节点 | IEPL 专线、IPLC 专线、香港节点、日本节点、低延迟节点、线路倍率 | `Informational` | `/routes/iepl/`、`/routes/iplc/`、`/routes/hong-kong/`、`/routes/japan/`、`/routes/low-latency/`、`/routes/multiplier/` |
| `/tutorials/` | 机场使用教程 | 机场订阅教程、Clash 配置、分流规则、TUN 模式、客户端安装、Shadowrocket 教程 | `Informational` | `/tutorials/subscription/`、`/tutorials/clash-config/`、`/tutorials/routing-rules/`、`/tutorials/tun-mode/`、`/tutorials/client-install/` + 7 篇实操图解 |
| `/troubleshooting/` | 代理故障排查 | 节点超时、订阅失败、连接不上、DNS 错误、客户端无法启动、系统时间不同步 | `Troubleshooting` | `/troubleshooting/node-timeout/`、`/troubleshooting/subscription-failed/`、`/troubleshooting/cannot-connect/`、`/troubleshooting/dns-error/`、`/troubleshooting/client-wont-start/` |
| `/risks/` | 机场避坑 | 机场跑路、机场替代、机场退款问题、机场安全性、买前风控检查、同源马甲识别 | `Informational` | `/risks/exit-scam/`、`/risks/avoid-traps/`、`/risks/alternatives/`、`/risks/refund-issues/`、`/risks/security/` |
