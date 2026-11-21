---
title: "2026 Shadowrocket（小火箭）iOS 正版获取避坑、订阅导入与远程规则分流全指南"
description: "详述 iPhone / iPad 核心软件 Shadowrocket（小火箭）非国区 App Store 正版 $2.99 购买边界、严禁在设置登共享 iCloud 防锁机红线及配置分流模式教程。"
h1: "Shadowrocket（小火箭）全指南：iOS 安全购买、订阅导入与远程规则分流设置"
primaryKeyword: "Shadowrocket"
secondaryKeywords: ["小火箭", "Shadowrocket 下载", "小火箭使用教程", "Shadowrocket 规则配置"]
searchIntent: "Informational"
pillar: "客户端软件"
cluster: "client-shadowrocket"
categoryId: "clients"
topicSlug: "shadowrocket"
fullPath: "/clients/shadowrocket/"
intentMode: "client-handbook"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "**Shadowrocket（中文常称小火箭）** 是 Apple iOS / iPadOS（以及搭载 M 系列芯片的 macOS）上生态最为成熟的规则分流代理客户端，原生通吃 Trojan、VLESS、Shadowsocks、VMess、Hysteria 2 与 WireGuard，且仅需在非中国大陆区 App Store（例如美区）一次性买断 **$2.99**。使用时务必严守两条硬安全边界：① **绝对禁止**在系统灰色齿轮「设置 → 顶栏 iCloud 账户」登录任何网盘搜到的共享 Apple ID（仅可在蓝色 App Store 应用商店内安全切换自己或极可信账号），防止触发“查找我的 iPhone”恶意锁机勒索；② 买正版后在「**全局路由**」保持选择 **`配置（Config）`** 并接入开源远程分流规则，千万别用“代理（Proxy）”模式白耗月流量且拖死国内微信支付。"
entityChain:
  - "安全获取来源（非国区 App Store $2.99 正版买断 vs 国区盗版假名字 & 免费共享锁机黑产）"
  - "协议与格式适配（通吃机场通用 V2Ray / Shadowrocket 订阅，部分支持 Clash YAML 直导）"
  - "核心日常模式（全局路由设为「配置」+ 开启设置中“打开时更新订阅”）"
  - "低成本平替选项（如不愿花这 $2.99，iPhone 可完全零支出改用官方 SFI 或 Karing）"
decisionCriteria:
  - "中国大陆区 App Store 里面任何挂着中文名称“小火箭”、“Shadowrocket极速”的免费/内购订阅软件全都是仿冒诈骗应用！正版英文唯一全称是 Shadowrocket，开发者为 Shadow Launch Technology Limited。"
  - "机场买前须看清“支持第三方订阅”才能导入小火箭；仅限自家专属封闭客户端的小品牌（SOGO 云、Firefly 等）无法导进 Shadowrocket。"
  - "用小火箭同时跑微信国内直连 + ChatGPT/Gemini 锁死新加坡，必须用远程配置规则模块将两者分开走。"
recommendedBrandSlugs: ["xingdaomeng", "guangsuyun", "yifan", "weitu", "feimao", "weifeng"]
articleClusters:
  - clusterName: "iPhone 安全入手与从零导入订阅"
    clusterDesc: "一步步安全搞定下载来源、导入节点并完成第一次连通验证。"
    articles:
      - title: "Shadowrocket iOS 入门图文完整教程（注册下载到导入连接）"
        keyword: "Shadowrocket 怎么下载配置"
        intent: "Informational"
        href: "/tutorials/client-install/shadowrocket-ios-setup/"
        status: "published"
      - title: "不想花这 $2.99？苹果手机零费用装官方 SFI (sing-box) 与 Karing 指南"
        keyword: "iPhone 免费代替小火箭"
        intent: "Informational"
        href: "/tutorials/subscription/ios-free-sfi-karing-guide/"
        status: "published"
      - title: "手机 VPN 与苹果端安全隔离避坑总结"
        keyword: "苹果用共享 ID 下载小火箭会锁机吗"
        intent: "Informational"
        href: "/vpn/mobile/"
        status: "published"
  - clusterName: "远程分流配置文件同步与 AI 地区锁死"
    clusterDesc: "把默认简陋规则升级成精准国内直连 + 海外流媒体/AI 全分流。"
    articles:
      - title: "Shadowrocket 远程配置文件同步教程（实现国内直连 + AI 自动分走新加坡）"
        keyword: "小火箭远程配置规则"
        intent: "Informational"
        href: "/tutorials/client-install/shadowrocket-remote-config-sync/"
        status: "published"
      - title: "机场订阅刷新报错与节点全超时 iPhone 自检流程"
        keyword: "小火箭订阅更新失败"
        intent: "Troubleshooting"
        href: "/tutorials/subscription/subscription-troubleshooting/"
        status: "published"
crossTopicLinks:
  - label: "Karing（iOS 外区免费全功能开源替代）"
    href: "/clients/karing/"
    reason: "如果不愿购美区礼品卡支付 $2.99，用全免费开源的 Karing 同样导入即走"
  - label: "sing-box 官方 SFI（极致省电轻量免费端）"
    href: "/clients/sing-box/"
    reason: "体验由 sing-box 官方维护发布的零广告免费原生 iOS 端"
  - label: "ChatGPT / Gemini 苹果手机地区设置"
    href: "/ai-streaming/chatgpt/"
    reason: "学会在手机小火箭配好节点地区，不再遇到香港节点打不开 AI App 报错"
  - label: "返回客户端软件中心"
    href: "/clients/"
    reason: "查看 Windows/macOS/Android 桌面协同客户端清单"
sources:
  - "第三方代理客户端.txt（Shadowrocket App Store 渠道、付费模式与避坑提示）"
  - "教程库：shadowrocket-ios-setup.md & shadowrocket-remote-config-sync.md"
dataGapNotes:
  - "Shadowrocket 官方常规定价 $2.99 美元（一次性买断），随 Apple 外区（美区/港区/台区）汇率和平台政策不同实际价格略波动；此外需自备海外区商店下载资格。"
faqs:
  - question: "中国区苹果 App Store 搜出一堆标着“小火箭”图标甚至收费几十块会员的应用，是正版吗？"
    answer: "全都是冒牌假货！中国大陆区 App Store 因法规要求早已彻底下架所有合规或通用第三方代理客户端，你在大陆区商店搜到的中文“小火箭加速”、“免费小火箭”多为垃圾广告套壳或骗年费假包。正版 **Shadowrocket** 仅上架于非中国大陆区（如美区 US），蓝色背景白色火箭图标，英文开发商明确写明为买断制 `$2.99`，下载之前务必看清开发者名称及图标细节。"
  - question: "去网上买了个美区共享账号下小火箭，为什么都叮嘱绝对不要去系统设置登它？"
    answer: "苹果设备有一套极高权限的防盗机制：**如果在 iPhone 灰色“系统设置 → 顶部头像 (Apple ID / iCloud)”登录了他人账号，你的这台手机在对方账户列表里就被彻底接管了“查找我的 iPhone”锁定权限！** 黑产骗子只需在网页端顺手点一下开启丢失模式，你的 iPhone 立马锁死变砖，紧接着发短信勒索转几百上千块钱解绑费。**只要坚守只在蓝色「App Store 图标里」点右上角登录、下载完立马退回自己账号，彻底绝不碰“设置顶栏”，就 100% 绝对安全**（强烈建议花几分钟自己免费注册一个永久属于自己的外区账号）。"
  - question: "刚装好 Shadowrocket 导入订阅并点了连接，为什么淘宝、微信转圈而且手机变烫？"
    answer: "检查小火箭主界面正中间那一行：**「全局路由（Global Routing）」是不是被你自己切成了「代理 (Proxy)」**？选择「代理」相当于强制手机全部国内应用统统兜去香港/日本服务器转一圈再回来，能不慢、能不狂烧套餐流量吗！立刻点进去把它选回 **`配置（Config）`**，再按照教程导入一份包含大陆 IP 直连的远程规则配置文件（详见 [远程规则同步指南](/tutorials/client-install/shadowrocket-remote-config-sync/)），瞬间恢复极速丝滑。"
  - question: "买一次美区正版 Shadowrocket 之后，我的 iPad 和 M 系列 Mac 电脑还能免费跟着一起装吗？"
    answer: "可以！Shadowrocket 作为苹果生态买断通用 App，只要在你的 iPad 和 Apple Silicon（M1/M2/M3/M4）的 Mac App Store 上登录同一个购买过它的海外区 Apple ID，点小云朵图标直接下载同步安装即可，不需再反复花第二次钱。"
---

## 一、核心优势与机场后台“哪一条链接导进小火箭最顺”

Shadowrocket 之所以在 iPhone 圈常年占据第一口碑，主要靠三项极其扎实的工程特性：**全协议通吃（包含最新 VLESS-Reality 与 Hysteria2）**、**后台保活极其省电稳定**、以及**内建强大的规则与重写（Rewrite/模块）系统**。

当你从 [光速云](/brands/guangsuyun/)、[星岛梦](/brands/xingdaomeng/)、[一翻云](/brands/yifan/) 或 [唯兔云](/brands/weitu/) 等开放第三方订阅机场买完套餐进后台时，如何导入最标准？

1. 优先寻找机场仪表盘上的 **「导入 Shadowrocket / 一键导入小火箭」** 按钮（直接用 Safari 浏览器点击，会自动拉起跳转导入进 App 列表）；
2. 如果是手动复制链接粘贴，优先拷贝 **「通用 V2Ray / Shadowrocket 订阅链接」**，进入小火箭右上角 **`+`** 号 ➔ 「类型」选中 **`Subscribe`** ➔ 把地址粘进 URL 栏保存即可（小火箭最新版虽兼容部分 Clash YAML 直接解析，但原生通用格式往往支持最干净少报错）。

---

## 二、小火箭必开 3 个顺手日常设置

- **打开自动更新订阅**：进软件右下角 **「设置 (Settings)」 → 「订阅 (Subscribe)」**，开启 **`打开时更新 (Update on Open)`** 以及关闭不必要的繁琐校验提示。以后每次服务商更换或者增加新专线节点，打开一下小火箭后台就静默刷齐；
- **开启连通性测试方式改用 HTTP URL-Test**：在「设置 → 服务器测试」里，优先选用 **`CONNECT` 或 `URL` 延迟测速** 而非纯 ICMP/TCP 测试，测出来的延迟数字才代表真正能穿过海底线缆打开网页的端到端延迟；
- **保持全局路由锁定在「配置 (Config)」**：配合一份经过验证的开源远程配置规则文件（或自建基于规则的本地配置），让微信、淘宝、支付宝、国内游戏直接走手机原网，只让需要跨境的工具走向对应分组（同时配合规则可以把 OpenAI / Claude / Gemini 专门切进新加坡或日本分流节点，不与香港高速刷网冲突）。
