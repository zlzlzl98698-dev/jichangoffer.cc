---
title: "2026 sing-box 完全指南：SFI / SFA / SFM 下载与生态"
description: "详解新一代高性能通用代理平台 sing-box：包含苹果 iOS 端全免费官方客户端 SFI 安装方式、与 Clash YAML 的订阅差异，以及衍生工具 Hiddify/Karing/HomeProxy 选择。"
h1: "sing-box 使用与生态指南：新一代高性能通用内核，及 iOS 免费官方 SFI 客户端入门"
primaryKeyword: "sing-box"
secondaryKeywords: ["sing-box 客户端", "sing-box 教程", "sing-box SFI", "sing-box 怎么导入 Clash 订阅"]
searchIntent: "Informational"
pillar: "客户端软件"
cluster: "client-sing-box"
categoryId: "clients"
topicSlug: "sing-box"
fullPath: "/clients/sing-box/"
intentMode: "client-handbook"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "**sing-box**（官方网站 `sing-box.sagernet.org`）是当下与 Mihomo 分庭抗礼的新一代高性能通用开源代理平台与核心引擎。对于普通手机与电脑用户来说，它的最大现实价值在于：① 由 SagerNet 原班人马直出维护了 **iOS 官方客户端 SFI（完全免费、在非国区 App Store 获取，免去购买 $2.99 小火箭费用）**、Android 官方 **SFA** 与 macOS 官方 **SFM**，极其轻量省电且支持全主流新协议；② 同样是全平台开源网红软件 **[Karing](/clients/karing/)**、**[Hiddify](/clients/hiddify/)** 与 OpenWrt 官方插件 **HomeProxy** 的底层驱动心脏。需要提前注意：**原生官方 SFI/SFA 客户端严格只读取 sing-box JSON 格式配置文件，直接往里贴普通 Clash YAML 链接会报错**——若买回来的机场暂未下发 JSON 专用订阅，建议直接改用底层同样跑 sing-box 但原生自动兼吃 Clash/V2Ray 的 Karing 或 Hiddify。"
entityChain:
  - "跨端体系解析（核心 sing-box JSON Engine -> 官方原厂 SFI/SFA/SFM vs 多格式壳 Karing/Hiddify）"
  - "核心优势亮眼场景（iOS 零软件成本替代 $2.99 小火箭 / OpenWrt 现代路由 HomeProxy / 极高并发省电）"
  - "新手最常见报错点（原生 SFI 拒认 Clash YAML 订阅格式 + 大版本 JSON 字段变更兼容提醒）"
  - "无缝变通解决（机场有下发 JSON 直导 SFI；未提供 JSON 则直接上 Karing/Hiddify 无痛通吃）"
decisionCriteria:
  - "准备下载 SFI (iOS) 前，必须先看清自己买好的机场官网后台到底有没有「sing-box 格式订阅链接」；如果没有，切勿折腾来路不明的在线未知订阅转换站（会泄露你的订阅 Token 流量密钥！），请改下载 Karing 或 Hiddify 本地安全兼容导入。"
  - "sing-box 从 1.10 到 1.11 / 1.12+ 迭代速度很快且会废弃旧版 JSON 字段，如果某份老手写的 JSON 模板报过时 warning 或语法无效，应参照官方新版本模板或靠机场后台最新转换更新。"
recommendedBrandSlugs: ["xingdaomeng", "yifan", "weitu", "guangsuyun", "feimao", "weifeng"]
articleClusters:
  - clusterName: "iOS 零支出与 sing-box 官方全端实操"
    clusterDesc: "手把手教会苹果手机用户怎么一分软件费不花合规安装并跑通。"
    articles:
      - title: "iOS 免费替代小火箭完全攻略：官方 SFI 与 Karing 实操上手"
        keyword: "sing-box iOS 怎么用"
        intent: "Informational"
        href: "/tutorials/subscription/ios-free-sfi-karing-guide/"
        status: "published"
      - title: "Karing 使用教程档案：能直接吃下 Clash 订阅的 sing-box 跨全端神器"
        keyword: "Karing vs sing-box"
        intent: "Informational"
        href: "/clients/karing/"
        status: "published"
      - title: "Hiddify 客户端指南：多端统一免费且自动识别全部机场订阅格式"
        keyword: "Hiddify sing-box 内核"
        intent: "Informational"
        href: "/clients/hiddify/"
        status: "published"
  - clusterName: "sing-box 底层机制、`.srs` 规则集与版本迁移避坑"
    clusterDesc: "适合 OpenWrt 路由玩家与进阶极客了解 JSON 模板为什么快、为何常报错旧参数。"
    articles:
      - title: "OpenWrt 软路由 HomeProxy / PassWall2 与 sing-box 内核协同部署参考"
        keyword: "OpenWrt HomeProxy sing-box"
        intent: "Informational"
        href: "/articles/openwrt-proxy-guide/"
        status: "published"
      - title: "官方 sing-box 1.11/1.12 版本废弃旧 DNS 与 inbound 参数升级报错修复清单"
        keyword: "sing-box 版本配置报错"
        intent: "Troubleshooting"
        status: "planned"
crossTopicLinks:
  - label: "Karing（推荐小白首选 sing-box 系免费客户端）"
    href: "/clients/karing/"
    reason: "省去自行转换 JSON 麻烦，全平台免费直接导入 Clash 与 V2Ray 订阅"
  - label: "Shadowrocket（iOS 付费买断传统标杆）"
    href: "/clients/shadowrocket/"
    reason: "对比是否值得花 $2.99 买小火箭，或用本页官方 SFI/Karing 零元打平"
  - label: "Mihomo 内核全生态对比"
    href: "/clients/mihomo/"
    reason: "了解当今两大核心平台（YAML 体系 Mihomo vs JSON 体系 sing-box）风格区别"
  - label: "返回客户端软件中心"
    href: "/clients/"
    reason: "对比 Windows / macOS / iOS / Android 官方仓库清单"
sources:
  - "第三方代理客户端.txt（sing-box 官方 SFI/SFA/SFM 文档、JSON 格式注意及版本升级提示）"
  - "教程库：ios-free-sfi-karing-guide.md"
dataGapNotes:
  - "sing-box 底层参数体系（如旧式 inbound sniff、dns rules 格式变更）紧随 SagerNet 主干大版本急速演进，自写 JSON 配置需与客户端当前版本号严格对齐。"
faqs:
  - question: "苹果手机直接在美区 App Store 搜 `sing-box` 装好的官方 SFI，直接把我在机场复制的 Clash 订阅链接粘贴进去为什么红字报错无法启动？"
    answer: "因为原厂 **SFI (sing-box for iOS)** 与 **SFA** 极其“专一”：**只识别自己标准的 `sing-box JSON` 配置文件！** 绝大多数普通中文机场主推下发的链接是 Clash YAML 或者 V2Ray Base64。解决办法有两个：① 看一下机场后台“导入订阅”下拉里有没有专门单列的 **「sing-box 订阅 / 导入 sing-box」** 按钮（很多支持现代后端面板的机场如光速云、一翻云等按平台适配后即下发或转化）；② 如果机场后台实在没有输出原生 JSON 格式，**别去搜陌生第三方转换网站**，直接去同一外区商店免费下载基于同个 sing-box 内核但兼容直接读 Clash YAML 的 **[Karing](/clients/karing/)** 或 **[Hiddify](/clients/hiddify/)** 即可一秒搞定！"
  - question: "官方免费的 SFI 比起付费的 Shadowrocket（小火箭），在日常苹果手机上续航和稳定表现会差很多吗？"
    answer: "日常稳定性和续航完全不输甚至在极高并发与底层资源控制上表现非常出色！SFI 因为本身精简原生采用 Go 与底层 Apple NetworkExtension 深度打通、无花哨额外插件包袱，内存占用与耗电表现一直获得极客极高评价；它唯一输给 Shadowrocket 的地方只是界面不够保姆级图形可视化（看日志查故障、手选局部规则覆写没小火箭丰富）以及只吃纯 JSON 格式订阅。"
  - question: "什么是 sing-box 经常提到的 `.srs` 二进制规则集，为什么比传统文本规则更省内存？"
    answer: "在几万行国内直连域名清单下，文本文件每次加载正则逐行匹配都非常占用手机或低配软路由的内存与 CPU 算力；sing-box 独创性地推进把常见 GeoSite 与 GeoIP 编译压缩成了高度结构化的二进制规则文件 **`.srs`**，内存占用常能压低到十几 MB 且毫秒级查表匹配完毕。目前这套 `.srs` 生态已经反哺并成为行业高效路由新标准。"
---

## 一、看清 sing-box 官方原厂族 vs 第三方壳生态分工

不要看到软件都基于 `sing-box` 就混为一谈，先分清官方出的原装工具与社区做的友善包裹软件：

| 产品体系划分 | 具体代表应用名称 | 适用系统环境 | 格式兼容与日常门槛定位 |
| :--- | :--- | :--- | :--- |
| **原厂直出官方端** *(sing-box Official)* | **SFI** (iOS)<br>**SFA** (Android)<br>**SFM** (macOS / Apple TV) | 非国区 Apple App Store 与官方 GitHub Releases 免费获取 | **纯粹极客官方体验，最省电最轻量**；但要求机场后端明确提供原生 **sing-box JSON** 格式配置 |
| **多格式友好的社区跨端壳** *(同样内置 sing-box)* | **[Karing](/clients/karing/)**<br>**[Hiddify](/clients/hiddify/)**<br>**NekoBox** *(警示维护现状)* | Win / Mac / Linux / iOS / Android 全覆盖开源免费 | 内置本地格式转换引擎——**直接贴 Clash YAML 或 V2Ray 订阅它自己就在本地安全转成 sing-box 执行**，最贴合小白零折腾需求！ |
| **软路由核心引擎插件** | **HomeProxy** *(OpenWrt 23.05+ 官方系)*<br>**PassWall2** *(可选 core)* | OpenWrt 固件家庭主机网关 | 与现代 `firewall4 / nftables` 底层兼容性极其干净高效，不依赖过时旧防火墙包 |

---

## 二、新手使用官方 sing-box (SFI/SFA) 绝不翻车的 3 个动作

1. **导入前先点开确认你的机场订阅地址吐出来是不是 `{ ... }` 大括号 JSON 文本**；如果看到的是 `proxies:` 开头 YAML 或者一长串字母乱码 Base64，请立刻停止硬往官方 SFI 里强填，直接换用同宗免费软件 **[Karing](/clients/karing/)** 即可零阻力导入。
2. **切勿拿过往网上搜出来的两年前老 JSON 模板直接往最新客户端里生搬硬套**：由于 SagerNet 保持着高频重构与废弃过时接口字段的工程节奏，去 `sing-box.sagernet.org` 对照自己安装的精确版本（或用机场直接生成的适配新版模板）最为稳妥。
3. **苹果手机千万别在安全风险位置登录借来的共享 ID**：与小火箭一样，SFI / Karing 虽然本身免费 `$0`，但同样只有在非中国大陆区 App Store 才有上架——请仅在蓝色 App Store 页面安全切换自己独立注册的非国区账号下载安装！
