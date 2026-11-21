import type { SubTopicPageData } from './types';

export const knowledgeTopicPages: SubTopicPageData[] = [
  // ④ VPN 与加速器 /vpn/*
  {
    categoryId: 'vpn',
    slug: 'recommend',
    fullPath: '/vpn/recommend/',
    title: 'VPN 推荐与代理机场区别：商业 VPN、分流客户端和加速器的技术选型',
    h1: 'VPN 推荐还是选机场？先分清三种产品的技术边界',
    description: '严谨区分传统海外商业 VPN（WireGuard/OpenVPN 全局隧道）、分流代理机场（VLESS/Trojan/SS）与游戏加速器的原理与适用场景。',
    primaryKeyword: 'VPN 推荐',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '商业 VPN（如采用 WireGuard/OpenVPN 的全系统虚拟网卡隧道）默认接管全部流量且针对国内网络环境并未做跨境中转优化；代理机场则基于 VLESS/Trojan/Shadowsocks 等协议结合规则分流（国内外自动分流）和 IEPL/BGP 中转接入，对中文用户日常访问海外资料、AI 工具与 4K 流媒体的速度与分流体验通常更匹配。游戏加速器则专注特定游戏进程 UDP 低抖动联机，不解决通用网页与 AI 访问。',
    keyFacts: [
      '传统海外商业 VPN 在国内直连极易被阻断或掉速，且缺乏对国内微信、淘宝、网银的细粒度域名分流。',
      '代理机场必须配合客户端（Clash Verge Rev、Shadowrocket 或服务商自研 App）才能按规则工作。',
    ],
    sections: [
      {
        heading: '三类工具的核心差异对照',
        paragraphs: ['不要用游戏加速器代替日常上网，也不要拿未针对国内优化的纯海外 VPN 强行追晚高峰 4K：'],
        bullets: [
          '传统商业 VPN：系统级三层隧道加密全部流量，强隐私合规审计场景优先，但国内连通率波动大、多需全局切换、国内网站同时变慢。',
          '分流代理机场：应用层或 TUN 接管配合 Rule 分流，国内直连、海外走专线，对 AI、海外文档、YouTube/Netflix 效率极高，但需自行甄别品牌运营周期与月付止损。',
          '正规游戏加速器：针对特定游戏服务器优化 UDP 路由与 NAT（FullCone），通常按游戏进程白名单转发，无法也不合规用于普通海外网站浏览。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'yifan'],
    relatedClientSlugs: ['clash-verge-rev', 'shadowrocket'],
    relatedLinks: [
      { label: '免费 VPN 的常见风险拆解', href: '/vpn/free/' },
      { label: '游戏加速器为什么不等于机场？', href: '/vpn/game-accelerator/' },
      { label: '2026 机场推荐综合指南', href: '/jichang/recommend/' },
    ],
    faqs: [
      {
        question: '买了代理机场后，还需要同时开商业 VPN 吗？',
        answer: '不需要，两个代理或 VPN 软件同时抢占系统网卡或本地端口会直接导致断网或 DNS 冲突。如需同时使用，请先关闭其中一个。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'vpn',
    slug: 'free',
    fullPath: '/vpn/free/',
    title: '免费 VPN 能用吗？真实带宽限制、隐私隐患与低成本替代建议',
    h1: '免费 VPN 指南：为什么绝大多数免费 VPN 不适合日常稳定办公？',
    description: '分析免费 VPN 普遍存在的限速、公共污染 IP、广告追踪及隐私边界问题，并说明合理的低成本平替思路。',
    primaryKeyword: '免费 VPN',
    searchIntent: 'Informational',
    answerFirst:
      '公开可见的纯免费 VPN 往往存在三项硬伤：① 出口 IP 被万人共享，极易触发 ChatGPT 封禁、Google 无限验证码及流媒体黑屏；② 带宽限制严重且晚高峰基本不可用；③ 部分来路不明的免费软件靠出售用户流量日志或注入广告变现。如果只是极低频应急，建议用每月仅几块钱的正规年付小包或 ¥99–¥147 一次性永久包替代免费软件。',
    keyFacts: [
      '跨境带宽与专线服务器需要持续成本，“长期完全免费+无限流量+高速不卡”在商业逻辑上几乎不可能成立。',
      '唯一可接受的免费方式是受信任开源协议（如 Cloudflare WARP 等官方客户端）在特定网络下作局部网络优化，而非未知小厂免费 VPN。',
    ],
    sections: [
      {
        heading: '低预算用户的安全替代方案',
        paragraphs: ['与其把个人账号安全交给未知的免费 VPN，不如控制在一杯咖啡钱以内的正规低价方案：'],
        bullets: [
          '低频备用不限时包：二猫云（¥99/100GB）、唯兔云（¥100/100GB）、光速云（¥147/247GB 不过期）。',
          '学生党/轻量年付：飞猫云学生版（¥84/年）、无忧链接 MINI（¥79/年）、星岛梦（¥96/年）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'feimao', 'ermao'],
    relatedLinks: [
      { label: '便宜机场推荐与真实低价档位', href: '/pricing/cheap/' },
      { label: '机场安全性与隐私常识', href: '/risks/security/' },
    ],
    faqs: [
      {
        question: '开源客户端软件（如 Clash Verge Rev、v2rayN）是免费 VPN 吗？',
        answer: '不是。Clash Verge Rev、v2rayN、sing-box 只是免费的“本地代理工具壳/内核”，它们本身不自带任何服务器节点，必须导入你自己购买或搭建的服务器订阅才能联网。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'vpn',
    slug: 'mobile',
    fullPath: '/vpn/mobile/',
    title: '手机 VPN 与移动端代理设置：iPhone / Android 稳定连接方案',
    h1: '手机 VPN 怎么选与配置？iOS 与安卓移动网络实战指南',
    description: '针对 4G/5G 蜂窝网络与 Wi-Fi 切换场景，对比手机端专属客户端和 Shadowrocket / FlClash / Karing 第三方工具。',
    primaryKeyword: '手机 VPN',
    searchIntent: 'Informational',
    answerFirst:
      '手机端稳定使用代理服务有两种路线：一是选择提供专属 App 的机场（如飞猫云、无忧链接、光速云自研版），下载登录即用，省去海外 Apple ID 烦恼；二是 iPhone 搭配 Shadowrocket（美区付费）或 Karing/SFI，Android 搭配 v2rayNG / FlClash / Hiddify，导入通用机场订阅并保留“规则分流”避免消耗国内 App 流量。',
    keyFacts: [
      '移动网络（4G/5G）IP 频繁变化，支持 QUIC/Hysteria2 或快速重连的客户端在地铁、电梯等弱网下恢复更快。',
      'iPhone 锁屏后默认可能休眠部分后台网络扩展连接，需开启按需连接（On Demand）或在打开软件时自动保持。',
    ],
    sections: [
      {
        heading: '手机端省电与稳定连接设置要点',
        paragraphs: ['手机端最常见的断流问题来自系统省电清理或全局代理误开：'],
        bullets: [
          '务必保持「规则模式 / 配置路由」：让微信、抖音、支付宝直连本地网络，只让海外域名走节点。',
          'iOS 用户若没有海外 Apple ID 购买 Shadowrocket，可先选用支持自研客户端或免费开源 SFI/Karing 的方案。',
        ],
      },
    ],
    relatedClientSlugs: ['shadowrocket', 'karing', 'flclash'],
    relatedLinks: [
      { label: '安卓 VPN 与客户端详细说明', href: '/vpn/android/' },
      { label: 'Shadowrocket 小火箭完整教程', href: '/clients/shadowrocket/' },
    ],
    faqs: [
      {
        question: '手机开热点给电脑能共享手机上的 VPN/机场连接吗？',
        answer: '普通手机系统热点默认不转发手机内部的 VPN 虚拟网卡流量，除非手机已 Root/越狱或电脑端连接同一 Wi-Fi 并配置手机代理端口（如小火箭的代理共享 HTTP 端口），更推荐直接在电脑上也安装对应客户端。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'vpn',
    slug: 'android',
    fullPath: '/vpn/android/',
    title: '安卓 VPN 软件与代理客户端选择：v2rayNG、FlClash、Hiddify 与安全提示',
    h1: '安卓 VPN 与代理客户端怎么选？2026 Android 端对比与避坑',
    description: '梳理 Android 平台主流开源客户端（v2rayNG、FlClash、CMFA、Hiddify、Karing）的协议差异与电池后台保活技巧。',
    primaryKeyword: '安卓 VPN',
    searchIntent: 'Informational',
    answerFirst:
      '安卓用户无需像 iOS 那样跨区买付费软件，主流开源客户端均免费：纯 VLESS/V2Ray 订阅首选轻量稳定的 `v2rayNG`；习惯 Clash YAML 规则分流可选 `FlClash` 或 `Clash Meta for Android`；想要兼容多种订阅格式自动选点则选 `Hiddify` 或 `Karing`。特别提醒：切勿使用 Google Play 上已被第三方接管的 NekoBox 版本。',
    keyFacts: [
      '资料明确警告：NekoBox 官方项目维护资源有限且存在被第三方控制的 Google Play 风险包。',
      '国产安卓系统（MIUI/HyperOS、ColorOS、HarmonyOS 等）需要在系统设置中将代理 App 设为“无限制后台运行”并锁定多任务卡片。',
    ],
    sections: [
      {
        heading: '安卓分应用代理的实用技巧',
        paragraphs: ['利用 Android VpnService 的原生优势，你可以精确控制哪些 App 走代理：'],
        bullets: [
          '在 Clash Meta for Android 或 FlClash 的「访问控制模式」中采用“黑名单模式（绕过以下应用）”，勾选国内银行、网盘、地图与支付类软件。',
          '若只想让浏览器和 ChatGPT App 走代理，可改用“白名单模式（仅代理以下应用）”，彻底杜绝后台偷跑机场流量。',
        ],
      },
    ],
    relatedClientSlugs: ['v2rayng', 'clash-meta', 'flclash', 'hiddify', 'nekobox'],
    relatedLinks: [
      { label: '客户端安全下载与平台矩阵', href: '/clients/' },
      { label: '节点超时排查步骤', href: '/troubleshooting/node-timeout/' },
    ],
    faqs: [
      {
        question: '为什么安卓锁屏几分钟后代理就自动断开了？',
        answer: '绝大多数原因是手机省电策略限制了后台进程。请在手机「应用管理 → 电池优化」中将代理软件设为“不优化/允许后台高耗电”，并在最近任务界面下拉锁定该应用。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'vpn',
    slug: 'reviews',
    fullPath: '/vpn/reviews/',
    title: 'VPN 软件评测与代理客户端架构横评：Mihomo vs sing-box vs 传统 VPN',
    h1: 'VPN 软件与代理工具评测：不同协议栈和内核的实际表现差异',
    description: '从内存占用、规则解析、TUN 模式、多协议兼容与跨平台维护活跃度维度评测主流代理客户端软件。',
    primaryKeyword: 'VPN 软件评测',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '在跨平台桌面与移动端软件中，基于 `Mihomo` 内核的 Clash Verge Rev / FlClash 生态最为成熟，YAML 覆写与图形化策略组体验最佳；基于 `sing-box` 的官方客户端（SFA/SFI/SFM）及 Karing、Hiddify 则在多协议统一架构和轻量化上表现优异；而仅需单协议或极简测速管理时，Windows 下的 v2rayN 依旧是最稳健的工具箱。',
    keyFacts: [
      '不要使用已于 2023 年停止维护的原版 Clash for Windows，避免内核安全漏洞及无法解析 VLESS-Reality / Hysteria 2 节点的兼容性问题。',
      '部分项目（如 Mihomo Party）应提前核查其最新维护动态后再决定是否作为主力。',
    ],
    sections: [
      {
        heading: '核心工具选型推荐矩阵',
        paragraphs: ['按系统与技术背景选择最适合自己的工具：'],
        bullets: [
          'Windows/macOS 综合主力：Clash Verge Rev（界面现代、社区教程最多）。',
          'Windows 协议全能工具箱：v2rayN（同时驱动 Xray 与 sing-box 双核）。',
          '全平台极简无脑配置：Hiddify / Karing（自动兼容多种订阅格式）。',
          'iOS 生态高阶：Shadowrocket（通用性价比高）、Quantumult X / Surge（重写与抓包发烧友）。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'mihomo', 'sing-box', 'shadowrocket'],
    relatedLinks: [
      { label: '查看全部 11 款客户端详细档案', href: '/clients/' },
      { label: 'Mihomo 与 sing-box 内核技术差异', href: '/clients/mihomo/' },
    ],
    faqs: [
      {
        question: '换用不同的客户端软件会影响机场本身的速度吗？',
        answer: '只要协议一致（例如同样走 VLESS 或 Shadowsocks）且硬件不构成瓶颈，同一节点在不同现代客户端下的物理上限差异很小；但部分支持 Hysteria 2 或带更好 Fake-IP DNS 缓存的客户端会让网页首包体感更快。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'vpn',
    slug: 'game-accelerator',
    fullPath: '/vpn/game-accelerator/',
    title: '游戏加速器与机场的区别：为什么机场不适合代替外服联机加速器？',
    h1: '游戏加速器 vs 机场：UDP FullCone、抖动与进程劫持的本质区别',
    description: '解释主机/PC 外服联机所需的 NAT 类型（FullCone）与低抖动路由原理，说明两类产品为何不宜互相替代。',
    primaryKeyword: '游戏加速器',
    searchIntent: 'Informational',
    answerFirst:
      '常规机场主要面向网页、流媒体和 AI 工具等 TCP/HTTPS 请求，虽然部分机场实测截图（如 2026-08-19 光速云 VLESS 测试与 2026-08-11 部分品牌测试）显示某些节点支持 UDP FullCone，但大量节点仍为 Unknown 或 RestrictedCone，且缺少针对特定游戏区服的路由调优；因此主机（PS5/Switch）和竞技网游联机仍应优先使用正规专职游戏加速器。',
    keyFacts: [
      '游戏联机极其看重 UDP 转发完整性（NAT Type A/B 即 FullCone）和毫秒级抖动（Jitter），而不是 500Mbps 的下载峰值。',
      '在 2026-08-19 实测截图中可以看到：光速云 Shadowsocks 组多数节点 UDP 类型显示 Unknown，而 VLESS 组多数节点显示 FullCone——同品牌不同协议节点间的 UDP 能力也可能差异显著。',
    ],
    sections: [
      {
        heading: '如果临时想通过机场连海外游戏端，最低前提是什么？',
        paragraphs: ['仅在非高对抗竞技或更新游戏客户端补丁时可作临时替代，且需满足三项条件：'],
        bullets: [
          '桌面端开启 Clash Verge Rev / v2rayN 的 TUN 模式（系统代理只拦截浏览器 HTTP/SOCKS，无法接管游戏客户端底层 UDP 包）。',
          '在订阅配置中确认节点开启了 `udp: true` 支持。',
          '使用实测显示为 FullCone NAT 且距离游戏服务器较近的日/港/新专线节点。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn'],
    relatedLinks: [
      { label: 'TUN 模式原理解析与开启步骤', href: '/tutorials/tun-mode/' },
      { label: '低延迟节点如何看懂 RTT 与抖动', href: '/routes/low-latency/' },
    ],
    faqs: [
      {
        question: '游戏加速器能用来上 Google 或 ChatGPT 吗？',
        answer: '不能。正规游戏加速器仅针对游戏服务器 IP 与端口白名单放行，既不代理常规网页流量，也不解决海外网站与 AI 工具访问。',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ⑦ 线路与节点 /routes/*
  {
    categoryId: 'routes',
    slug: 'iepl',
    fullPath: '/routes/iepl/',
    title: 'IEPL 专线机场是什么？工作原理、特点与真伪辨别指南',
    h1: 'IEPL 专线解析：为什么越来越多中高端机场强调 IEPL 架构？',
    description: '通俗讲清 IEPL 国际以太网专线从国内 BGP 入口到海外落地的传输路径，以及如何理性看待商家宣传与实测。',
    primaryKeyword: 'IEPL 专线',
    searchIntent: 'Informational',
    answerFirst:
      'IEPL（International Ethernet Private Line，国际以太网专线）是一种工作在数据链路层的点对点二层私有专线。当机场使用 IEPL 架构时，你的加密流量从国内三网 BGP 入口服务器接入后，跨境段走运营商内部私有专线通道直达香港/日本/新加坡等海外机房，绕开拥挤的公网国际出口带宽，从而在晚高峰保持更低的丢包率与延迟抖动。',
    keyFacts: [
      'IEPL 跨境传输成本远高于普通公网直连或公网隧道中转，这也是真正全线 IEPL 机场月付通常在 ¥18–¥25+ 的客观原因。',
      '注意：单张第三方测速图本身并不能直接证明“后台一定走了 IEPL 专线”；线路类型需结合独立延迟路由测试、成本逻辑与品牌公开资料交叉判断。',
    ],
    sections: [
      {
        heading: 'IEPL 专线数据链路流程示意',
        paragraphs: [
          '典型 IEPL 机场的流量路径为：用户设备（VLESS/Trojan 加密） → 国内 BGP 入口节点（深圳/上海/广州等，优化三网接入） ══[IEPL 私有专线跨境]══▶ 海外中转/落地机房（香港/日本/新加坡） → 目标网站（ChatGPT/Netflix/GitHub）。',
        ],
        bullets: [
          '国内入口负责隐藏真实跨境特征并针对电信/联通/移动就近接入。',
          'IEPL 内网通道不受公网国际出口晚高峰拥塞影响。',
          '海外落地 IP 的纯净度决定了能否解锁 Netflix 与 OpenAI——也就是说“传输走 IEPL”与“落地 IP 解锁 AI”是两件独立的事情！',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'yifan', 'weifeng'],
    relatedLinks: [
      { label: 'IPLC 专线与 IEPL 有何异同？', href: '/routes/iplc/' },
      { label: '支持 IEPL 专线的稳定机场推荐', href: '/jichang/stable/' },
    ],
    faqs: [
      {
        question: '标称 IEPL 的机场就一定能解锁 ChatGPT 或永不掉线吗？',
        answer: '不一定。IEPL 只保证“国内到海外机房这一段跨境传输快且稳”，而 ChatGPT/Gemini/Netflix 是否可用取决于“海外落地机房的出口 IP 归属和风控情况”；同时如果国内 BGP 入口机房本身被攻击或维护，一样会短暂断连。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'routes',
    slug: 'iplc',
    fullPath: '/routes/iplc/',
    title: 'IPLC 专线是什么意思？IPLC 与 IEPL 及公网中转的核心区别',
    h1: 'IPLC 专线详解：原理、优缺点与在机场中的应用现状',
    description: '对比 IPLC 国际私有租用线路与普通公网隧道中转在晚高峰、丢包率和价格成本上的差别。',
    primaryKeyword: 'IPLC 专线',
    searchIntent: 'Informational',
    answerFirst:
      'IPLC（International Private Leased Circuit，国际私有租用线路）是跨越国境的点对点私有通信电路。与 IEPL 类似，IPLC 同样不经过拥挤的公网国际出口，具有抗 QoS 干扰强、延迟稳定和丢包率低的特点；两者的工程差异主要在底层封装协议（IPLC 偏物理/一层TDM，IEPL 偏二层以太网灵活组网），在面向机场最终用户的体验上两者均代表“内网跨境专线级别”。',
    keyFacts: [
      '品牌库中明确标注 IPLC 专线的代表有唯兔云、Firefly（萤火虫）、U1S1、闪跃、隐形人，以及光速云（IEPL+IPLC 混合资料）与全球云。',
      '普通公网直连（如早期无中转节点）在晚高峰常出现 20%–50% 丢包，而健康运行的 IPLC/IEPL 在晚高峰通常可保持低丢包。',
    ],
    sections: [
      {
        heading: '专线（IPLC/IEPL）vs 公网中转 vs 直连',
        paragraphs: ['选型时不需要死抠商业术语名称，重点看其在本地宽带下的三项实测表现：'],
        bullets: [
          '直连线路：成本最低，但晚间国内运营商国际出口拥塞严重，极易断流或限速。',
          '公网隧道中转：使用国内高防/大带宽机房转发加密流量，性价比高，但跨境段仍走公网骨干，特殊时段仍有波动风险。',
          'IPLC/IEPL 专线：跨境段走企业级私有通道，成本最高但晚高峰综合体验最稳。',
        ],
      },
    ],
    recommendedBrandSlugs: ['weitu', 'guangsuyun', 'u1s1', 'shanyue'],
    relatedLinks: [
      { label: 'IEPL 专线详细介绍', href: '/routes/iepl/' },
      { label: '香港节点延迟与用途解析', href: '/routes/hong-kong/' },
    ],
    faqs: [
      {
        question: '为什么有些低价品牌 ¥5.6/月也敢标 IPLC 或 IEPL 专线？',
        answer: '低价入门档通常通过限制月流量（如年付 45–60GB/月）、限制单用户并发或与其他用户共享更大倍率复用带宽来摊平成本；但仍需警惕部分小站把普通中转虚标为专线的宣传行为，务必结合测速与实际体验检验。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'routes',
    slug: 'hong-kong',
    fullPath: '/routes/hong-kong/',
    title: '香港节点怎么样？低延迟优势与 ChatGPT / Gemini 地区限制应对',
    h1: '香港节点深度解析：速度最快、延迟最低，但不适合拿来直接用 AI',
    description: '基于 2026-08-19 实测数据说明香港节点 20–30ms 低延迟优势，以及为何 OpenAI/Gemini 会限制香港出口 IP。',
    primaryKeyword: '香港节点',
    searchIntent: 'Informational',
    answerFirst:
      '香港节点是中国内地用户物理距离最近、延迟最低（常见 20–35ms RTT）且带宽最高（500Mbps+ 很常见）的首选节点区域，非常适合 GitHub、Google 搜索、YouTube 4K、Netflix/Disney+ 港台片库及日常办公。但注意：香港不在 OpenAI（ChatGPT）、Anthropic（Claude）与 Google Gemini 的官方开放地区名单内，因此不适合直接用于 AI 工具！',
    keyFacts: [
      '在 2026-10-19 清单记录中，光速云、飞猫云、一翻云、星岛梦等品牌香港节点延迟集中在 21–27ms、下载 477–548Mbps。',
      '在光速云 2026-08-19 MiaoKo 实测中，20 个香港专线节点 Netflix/Disney+/YouTube 全解锁，但 Gemini 全部失败、OpenAI 仅 APP 可用。',
    ],
    sections: [
      {
        heading: '香港节点的最佳分流搭配策略',
        paragraphs: ['正确的用法不是放弃香港节点，而是让它各司其职：'],
        bullets: [
          '默认代理组（Proxy）：首选香港低延迟节点，获得极快的网页秒开体验。',
          'AI 专属策略组：将 OpenAI、Claude、Gemini 域名匹配分流到日本、新加坡或美国节点，避开香港地区限制。',
        ],
      },
    ],
    relatedLinks: [
      { label: '日本节点特点与 AI/流媒体兼容性', href: '/routes/japan/' },
      { label: 'ChatGPT 机场分流配置思路', href: '/ai-streaming/chatgpt/' },
    ],
    faqs: [
      {
        question: '为什么有些机场的香港节点反而能打开 ChatGPT？',
        answer: '那是机场老板在后台对 OpenAI 域名做了二次流媒体/AI DNS 转发或把特定出口伪装/中继到了美国或新加坡机房，并不代表香港 IP 本身被官方解封。如果后台中继临时维护就会立刻失效。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'routes',
    slug: 'japan',
    fullPath: '/routes/japan/',
    title: '日本节点怎么用？东亚次低延迟、ChatGPT 与日区流媒体黄金区域',
    h1: '日本节点指南：兼顾低延迟与 AI 工具/日区服务的全能选择',
    description: '分析日本节点（通常 50–80ms 延迟）在 ChatGPT、Claude、日本流媒体与跨国协作中的综合表现。',
    primaryKeyword: '日本节点',
    searchIntent: 'Informational',
    answerFirst:
      '日本节点是继香港之后中文用户使用率最高的区域：其物理延迟适中（华南/华东常见 50–75ms）、国际出口带宽充沛，同时完整位于 ChatGPT 与 Claude 的官方支持区域内，并且能解锁日区 Netflix、Abema、DMM 等日本本土内容。如果在部分机场中发现香港节点用不了 AI，日本节点通常是响应速度最快的替代目标。',
    keyFacts: [
      '2026-08-19 MiaoKo 实测显示，光速云日本节点（JP01–JP10）对 Netflix、Disney+、YouTube 与 OpenAI 全部解锁，但对 Gemini 同样部分存在失败记录，需在新加坡与日本间按需切换。',
      '华东与北方联通/电信用户连接日本节点延迟有时比南方更低，体感极佳。',
    ],
    sections: [
      {
        heading: '日本节点适用场景清单',
        paragraphs: ['建议将日本节点设为“AI 工具备用首选”与“东亚综合第二主力”：'],
        bullets: [
          'ChatGPT 网页端、Claude 及 Copilot 开发辅助：延迟比美西低一半以上，交互打字流畅不卡顿。',
          '日本动画、日区游戏（Nintendo/PSN 日服）及 Netflix 日本独家动漫库。',
        ],
      },
    ],
    relatedLinks: [
      { label: '香港节点特点与分流配合', href: '/routes/hong-kong/' },
      { label: 'Gemini 节点选择实测观察', href: '/ai-streaming/gemini/' },
    ],
    faqs: [
      {
        question: '为什么日本节点在 Clash 里测速只有 50ms，实际打开网页有时感觉不如香港？',
        answer: '除了跨境传输延迟，如果本地网络到日本某家机房存在特定时段绕路，TLS 握手延迟（HTTPS Ping）可能会升到 200ms+，建议结合真连接（URL-Test）而不是单看 ICMP Ping。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'routes',
    slug: 'low-latency',
    fullPath: '/routes/low-latency/',
    title: '低延迟节点怎么看？看懂 TCP Ping、TLS RTT 与 HTTPS 延迟的区别',
    h1: '低延迟节点指标解读：为什么客户端显示的 30ms 不等于真实上网速度？',
    description: '结合测速图中的 TLS RTT、HTTPS Ping 与均值速度，教会读者读懂真连接延迟而非被虚假 Ping 值迷惑。',
    primaryKeyword: '低延迟节点',
    searchIntent: 'Informational',
    answerFirst:
      '客户端里的“低延迟”常有三种截然不同的口径：① **ICMP / TCP Ping**：仅测国内入口机房的握手延迟，经常显示极漂亮的 15–30ms，但完全不反映海外落地是否卡顿；② **TLS RTT**：一次真实 TLS 数据交换延迟，反映专线到海外节点的物理距离；③ **HTTPS 延迟（URL-Test）**：真实向海外目标网站（如 Google）发起完整请求的首包体感延迟。选节点应看 **HTTPS 真连接延迟** 与 **丢包率**。',
    keyFacts: [
      '在 2026-08-19 光速云实测图中，香港专线 TLS RTT 仅 22–28ms，HTTPS 延迟约 81–106ms；而日本节点 TLS RTT 73–86ms，HTTPS 延迟约 220–248ms——这是物理光缆与完整握手开销下的正常数值。',
      '如果某个节点 TCP 只有 20ms 但 HTTPS 延迟高达 1500ms+ 或超时，说明海外落地段或代理服务端正在拥堵或已失效。',
    ],
    sections: [
      {
        heading: '挑选低延迟节点的实操方法',
        paragraphs: ['不要迷信单次测速最低数值，养成下面两个习惯更重要：'],
        bullets: [
          '在 Clash Verge Rev / Shadowrocket 中开启「URL Test（HTTP/HTTPS 真连接测速）」而不是 TCP Ping。',
          '查看测速结果时，若某节点虽然 20ms 但测速图出现红条超时或速度跌至 KB 级，立即手动切走。',
        ],
      },
    ],
    relatedLinks: [
      { label: '节点超时常见原因与排查', href: '/troubleshooting/node-timeout/' },
      { label: 'Clash 配置与自动测速组教程', href: '/tutorials/clash-config/' },
    ],
    faqs: [
      {
        question: '为什么美国节点延迟动辄 140–220ms，算慢吗？',
        answer: '不算异常。中美之间跨越太平洋海底光缆受光速物理极限限制，直连或专线正常 RTT 本就在 130–200ms 左右，只要不丢包，打开网页与调用美国原生 AI 服务完全够用。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'routes',
    slug: 'multiplier',
    fullPath: '/routes/multiplier/',
    title: '机场线路倍率是什么意思？1x 倍率、高倍率与流量消耗计算',
    h1: '线路倍率是什么？买前算清 100GB 套餐实际能用多少流量',
    description: '解释机场节点名字后面的 0.5x、1x、2x、5x 倍率含义，并汇总全库明确标注 1x 无倍率计费的代表品牌。',
    primaryKeyword: '线路倍率',
    searchIntent: 'Informational',
    answerFirst:
      '线路倍率指机场后台按节点成本设置的流量扣费乘数。例如：连接标注 `2x` 的专线节点下载 10GB 文件，账号后台会扣除 `10 × 2 = 20GB` 套餐流量；若标注 `0.5x` 则只扣 `5GB`；标注 `1x`（一倍流量 / 无倍率）则实际消耗等于后台扣除流量。如果预算有限却常看 4K 视频，买前务必确认主力节点是否为 1x 倍率。',
    keyFacts: [
      '品牌库中明确标注全线 1x 倍率的代表包括：光速云（极速版标全节点×1）、星岛梦（1倍流量）、唯兔云（1倍流量）、无忧链接（全线节点无倍率）、灵猫网络（1倍流量）。',
      '某些机场会把 IPLC/原生住宅 IP 节点设成 2x–5x 高倍率来平衡带宽成本，若没注意提示就会发现月流量几天内就见底。',
    ],
    sections: [
      {
        heading: '三类倍率节点的正确用法',
        paragraphs: ['倍率本身不是骗局，只要定价界面提前写清楚就属合理资源定价：'],
        bullets: [
          '低倍率（0.1x–0.5x）：适合下载大型安装包、挂机同步网盘等大吞吐但对地区/解锁要求不高的任务。',
          '标准 1x 倍率：最省心、账单透明度最高，推荐日常主力优先选择。',
          '高倍率（2x+）：如遇到仅限少数高质量家宽/原生 IP 节点为高倍率，配合 Clash 分流规则“仅让 ChatGPT/Netflix 走高倍率节点”，其它常规视频与下载走 1x 节点即可完美省流。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'wuyou'],
    relatedLinks: [
      { label: '高性价比机场横向对比', href: '/pricing/value/' },
      { label: 'Clash 精细分流省流教程', href: '/tutorials/routing-rules/' },
    ],
    faqs: [
      {
        question: '节点名称后面没写倍率，就是 1x 吗？',
        answer: '多数情况下默认未标注节点为 1x，但最保险的做法是在机场后台「节点列表」或「流量明细」中查看扣费系数，确认跑 1GB 流量后后台余额是否只减 1GB。',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ⑧ 使用教程 /tutorials/*
  {
    categoryId: 'tutorials',
    slug: 'subscription',
    fullPath: '/tutorials/subscription/',
    title: '机场订阅导入教程：Clash / V2Ray / Shadowrocket 订阅链接全平台配置',
    h1: '机场订阅教程：如何获取、识别并安全导入订阅链接？',
    description: '手把手教学从购买机场套餐后复制订阅地址，到在 Clash Verge Rev、v2rayN、Shadowrocket、FlClash 中导入与自动更新的完整流程。',
    primaryKeyword: '机场订阅教程',
    searchIntent: 'Informational',
    answerFirst:
      '导入机场订阅只需 4 步：① 确认你选择的机场提供第三方订阅（注：飞猫云、SOGO 云、Firefly 等纯专属客户端机场不提供订阅链接，只需下载其官方 App 登录）；② 登录机场用户面板点击「一键导入」或「复制订阅地址」；③ 在 Clash Verge Rev / Shadowrocket / v2rayN 的「订阅/配置」栏粘贴 URL 并拉取；④ 设为当前配置并开启系统代理或连接开关。',
    keyFacts: [
      '请先区分订阅格式：Clash 系列软件（Clash Verge Rev / FlClash / CMFA）需要 Clash YAML 格式链接；v2rayN / v2rayNG 通常使用 Base64 通用订阅；sing-box 官方端需要 JSON 格式。',
      '导入或更新订阅前，若此时系统代理正指向已失效的旧节点，务必先关闭系统代理再点击更新。',
    ],
    sections: [
      {
        heading: '各主流客户端导入路径速查',
        paragraphs: ['按照你正在使用的设备选择对应导入入口：'],
        bullets: [
          'Clash Verge Rev（Win/Mac/Linux）：左侧「订阅 (Profiles)」→ 顶部输入框粘贴链接 → 点击「导入」→ 左键单击新建卡片使其高亮激活。',
          'v2rayN（Win/Mac）：顶部「订阅分组 → 订阅分组设置 → 添加」→ 填入别名与 URL → 确定后点击「更新全部订阅（不通过代理）」。',
          'Shadowrocket（iPhone/iPad）：首页右上角「+」→ 类型选择「Subscribe」→ 粘贴 URL → 右上角完成并下拉刷新节点列表。',
          'FlClash / Clash Meta for Android：进入「配置 (Profiles)」→ 点击右下角「+」→ 选择「从 URL 导入」→ 保存并勾选启用。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'shadowrocket', 'flclash'],
    relatedLinks: [
      { label: '遇到“订阅更新失败”怎么排查？', href: '/troubleshooting/subscription-failed/' },
      { label: 'Clash 配置文件与策略组说明', href: '/tutorials/clash-config/' },
    ],
    faqs: [
      {
        question: '为什么在后台复制的订阅链接放浏览器直接打开是一堆乱码？',
        answer: '那是正常的 Base64 编码或专供客户端读取的 YAML 文本，不需要人在浏览器里直接阅读，只需完整复制网址粘贴进代理客户端即可自动解析出节点列表。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'tutorials',
    slug: 'clash-config',
    fullPath: '/tutorials/clash-config/',
    title: 'Clash 配置教程：策略组切换、自动测速与全局/规则模式说明',
    h1: 'Clash 配置指南：看懂规则（Rule）、全局（Global）与自动选点',
    description: '详述 Clash Verge Rev / Mihomo 客户端的出站模式选择、策略组测速、定时更新订阅与日常防卡顿配置习惯。',
    primaryKeyword: 'Clash 配置',
    searchIntent: 'Informational',
    answerFirst:
      '日常使用 Clash 系列客户端，出站模式请始终保持在 **规则（Rule）** 模式，不要长期放在“全局（Global）”或“直连（Direct）”。在「代理 (Proxies)」页面中，机场通常会预设「节点选择」「自动选择」「AI/OpenAI」「流媒体」等策略组——当自动选择误切到不支持 AI 的节点时，直接在对应策略组里手动固定指定国家节点即可。',
    keyFacts: [
      '「规则模式」自动让百度、微信、国内网银直连本地宽带，海外网站自动走你选中的代理节点。',
      '「全局模式」会让所有非局域网请求强行绕道海外再回国内，不仅拖慢国内网站，还会白白浪费昂贵机场流量。',
    ],
    sections: [
      {
        heading: '新导入配置后的三项必做优化',
        paragraphs: ['花 1 分钟检查下面三个小开关，后续使用会稳定很多：'],
        bullets: [
          '设置自动更新周期：右键订阅卡片选择「编辑信息」，将更新间隔设为 1440 分钟（每天自动同步最新节点 IP）。',
          '开启「开机自启」与「静默启动」，但确保退出时能正常关闭系统代理（开启增强保护）。',
          '定期点一次策略组右上角的「闪电/测速图标」，查看当前宽带下哪些节点真连接延迟最低且没有超时红字。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'mihomo', 'flclash'],
    relatedLinks: [
      { label: '进阶分流规则设置方法', href: '/tutorials/routing-rules/' },
      { label: '什么是 TUN 模式？何时需要开启？', href: '/tutorials/tun-mode/' },
    ],
    faqs: [
      {
        question: '为什么我选中了香港节点，浏览器还是走美国或无法切换？',
        answer: '请检查「代理」页面最顶层的主策略组（常叫“节点选择”或“Proxy”）当前是否正指向“自动选择 (url-test)”或“故障转移”，只有把主策略组切到你想手动控制的组或具体节点，手动切换才会生效。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'tutorials',
    slug: 'routing-rules',
    fullPath: '/tutorials/routing-rules/',
    title: '分流规则配置教程：国内外分流、AI 独立路由与覆写（Override）实操',
    h1: '分流规则怎么配？让国内直连、常规海外走香港、AI 自动走日/新/美',
    description: '手把手讲解 Clash Verge Rev 中的规则优先顺序与 AI 工具独立分流策略，避免香港节点导致 ChatGPT/Gemini 报错。',
    primaryKeyword: '分流规则',
    searchIntent: 'Informational',
    answerFirst:
      '分流规则遵循“自上而下、首次匹配生效（First Match）”原则：越精细具体的域名规则（如 `DOMAIN-SUFFIX,openai.com,AI节点组`）必须排在顶部，通用地区规则（如 `GEOSITE,cn,DIRECT`）放中间，最后的兜底规则 `MATCH` 放最底部。借助 Clash Verge Rev 的「全局扩展覆写（Merge/Script）」，你可以把 AI 网站固定指向日本或新加坡节点，同时保留主节点在 20ms 的香港高速线路上。',
    keyFacts: [
      '大部分正规机场订阅已经自带了 GeoSite/GeoIP 国内外基础分流，无需从头手写上千条规则。',
      '唯一高频需要用户微调的场景，就是当“主组选中了香港节点，但需要使用 ChatGPT / Claude / Gemini”时，为 AI 域名绑定单独地区策略组。',
    ],
    sections: [
      {
        heading: '四层常见规则优先顺序参考',
        paragraphs: ['排查自己或他人分享的规则配置时，核对是否符合以下顺序逻辑：'],
        bullets: [
          '第 1 层（高优先级直连/屏蔽）：局域网 IP（192.168.x.x / 10.x.x.x）与自定义必须直连的公司内网域名。',
          '第 2 层（特定业务独立分流）：`openai.com`、`chatgpt.com`、`claude.ai`、`gemini.google.com` → 指向非港台地区（日/新/美）节点组。',
          '第 3 层（常规国内外分流）：`GEOSITE,cn` / `GEOIP,CN` → `DIRECT`（直连）；海外常用网站 → `Proxy`。',
          '第 4 层（兜底 MATCH）：`MATCH,Proxy`（未命中任何规则的未知海外域名默认走代理，确保冷门外网工具也能正常访问）。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'mihomo', 'shadowrocket'],
    relatedLinks: [
      { label: 'ChatGPT 机场地区要求与节点选择', href: '/ai-streaming/chatgpt/' },
      { label: 'DNS 错误与 Fake-IP 冲突修复', href: '/troubleshooting/dns-error/' },
    ],
    faqs: [
      {
        question: '为什么配置了分流规则，访问某个国内网站还是很慢？',
        answer: '可能该国内网站的 CDN 域名未被及时收录进老旧的 GeoSite 数据库，可在客户端日志中查看该请求命中了哪条规则；若命中了 `MATCH` 走了代理，在自定义规则顶部为其加上 `DOMAIN-SUFFIX,目标域名,DIRECT` 即可。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'tutorials',
    slug: 'tun-mode',
    fullPath: '/tutorials/tun-mode/',
    title: 'TUN 模式是什么？Clash Verge Rev 开启虚拟网卡模式解决终端不走代理',
    h1: 'TUN 模式教程：解决命令行（Git/npm/Python）、Docker 与桌面软件不走代理',
    description: '解释系统代理（HTTP/SOCKS）与 TUN 虚拟网卡模式的工作层级差异，并给出 Windows/macOS 安全开启服务模式的步骤。',
    primaryKeyword: 'TUN 模式',
    searchIntent: 'Informational',
    answerFirst:
      '系统代理（System Proxy）只在操作系统注册一个本地 HTTP/SOCKS 端口，浏览器会主动读取它，但很多终端工具（Git、curl、npm、pip、WSL2）、游戏客户端或部分桌面 App 默认无视系统代理。开启 **TUN 模式** 后，客户端会在系统中创建一张三层虚拟网卡接管全局网络数据包并送入 Mihomo/sing-box 引擎按规则分流，从而让所有软件自动遵从代理规则。',
    keyFacts: [
      'Windows 与 macOS 下开启 TUN 模式通常需要先授予「服务模式（Service Mode）」管理员权限。',
      '日常如果只用浏览器上网，开普通「系统代理」更省电且兼容某些校园网认证页；需要跑终端开发、拉取镜像或游戏更新时再打开 TUN。',
    ],
    sections: [
      {
        heading: 'Clash Verge Rev 开启 TUN 模式标准步骤',
        paragraphs: ['首次配置仅需两分钟，后续可随时一键开关：'],
        bullets: [
          '打开 Clash Verge Rev → 进入「设置（Settings）」。',
          '找到「服务模式（Service Mode）」右侧的小图标点击安装并输入系统管理员密码授权（Windows UAC 确认或 macOS Touch ID/密码）。',
          '确保服务状态变为已运行（绿色标识）后，打开「TUN 模式（Tun Mode）」开关，并建议将系统代理暂时关闭以免双重拦截。',
          '打开终端执行 `curl -I https://www.google.com` 验证是否直接返回 200 OK。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'mihomo'],
    relatedLinks: [
      { label: '连接不上或客户端无法启动排查', href: '/troubleshooting/client-wont-start/' },
      { label: 'DNS 错误与解析冲突解决', href: '/troubleshooting/dns-error/' },
    ],
    faqs: [
      {
        question: '开了 TUN 模式后公司内网 VPN 或本地虚拟机连不上怎么办？',
        answer: 'TUN 虚拟网卡与企业 VPN（如 Cisco AnyConnect / EasyConnect）或部分 WSL2 桥接网段可能发生路由表冲突。使用公司内网 VPN 时请临时关闭 TUN 模式，或把公司内网网段加入 TUN 的 `route-exclude-address` 排除列表。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'tutorials',
    slug: 'client-install',
    fullPath: '/tutorials/client-install/',
    title: '代理客户端安装教程：Windows / macOS / Android / iPhone 安全下载与首配',
    h1: '客户端安装指南：四大平台从下载验证到成功联网的完整步骤',
    description: '分平台梳理 Clash Verge Rev、v2rayN、FlClash、v2rayNG 与 Shadowrocket 的安全获取渠道及系统常见拦截处理。',
    primaryKeyword: '客户端安装',
    searchIntent: 'Informational',
    answerFirst:
      '安装代理客户端最关键的是“找对官方发布渠道与芯片架构”：Windows / macOS / Linux / Android 开源客户端统一认准 GitHub 官方 Releases（Windows 选 x64 安装包，Apple M 芯片 Mac 选 aarch64/arm64，安卓手机绝大多数选 arm64-v8a）；iPhone/iPad 则务必在海外区 Apple App Store 购买或下载正版应用，切勿轻信搜索引擎广告里的第三方捆绑下载站。',
    keyFacts: [
      'macOS 安装开源 App 若提示“已损坏，无法打开”或“无法验证开发者”，通常是因为未公证导致的 Gatekeeper 拦截，在「系统设置 → 隐私与安全性」点击仍要打开或按官方文档处理隔离属性即可。',
      'Windows 下若将绿色解压版（如 v2rayN）放在桌面中文路径或受限系统盘目录，容易在更新内核时遇到权限报错，建议统一放到纯英文路径（如 `D:\\Tools\\v2rayN`）。',
    ],
    sections: [
      {
        heading: '四平台首装防踩坑要点',
        paragraphs: ['对应你的操作系统核对以下细节：'],
        bullets: [
          'Windows 10/11：优先下载 Clash Verge Rev (`x64-setup.exe`) 或 v2rayN (`With-Core.zip`)；若杀毒软件误报开源内核文件，确认校验 SHA256 后添加信任目录。',
          'macOS：M1/M2/M3/M4 芯片选 `aarch64` / `arm64`，旧款 Intel Mac 选 `x64`。',
          'Android：从 GitHub Releases 下载 `.apk`，系统弹出风险提示时核对开源项目包名后选择继续安装。',
          'iPhone/iPad：准备已购买 Shadowrocket 的海外区 Apple ID，或使用开源免费上架的 Karing / sing-box (SFI)；若不想切换 ID，可选择提供官方自研客户端体系的机场。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'shadowrocket', 'v2rayng'],
    relatedLinks: [
      { label: '查看全平台客户端软件库', href: '/clients/' },
      { label: '机场订阅导入教程', href: '/tutorials/subscription/' },
    ],
    faqs: [
      {
        question: '为什么百度搜“Clash 下载”排在前面的网站提示要收费或扫码进群？',
        answer: '所有开源客户端（Clash Verge Rev、v2rayN、FlClash、v2rayNG、Hiddify、Karing）在 GitHub 都是完全免费开源的，任何要求付费购买安装包或捆绑下载器的网页均为商业引流或高风险山寨站，请立即关闭！',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ⑨ 故障排查 /troubleshooting/*
  {
    categoryId: 'troubleshooting',
    slug: 'node-timeout',
    fullPath: '/troubleshooting/node-timeout/',
    title: '机场节点超时怎么办？6 步快速排查本地时间、网络与节点失效',
    h1: '机场节点超时怎么解决？按优先级逐一排除这 6 个原因',
    description: 'Answer-First 排错清单：快速判断节点全红超时是系统时间误差、本地网络防火墙拦截、订阅过期还是节点临时维护引起。',
    primaryKeyword: '节点超时',
    searchIntent: 'Troubleshooting',
    answerFirst:
      '如果客户端里所有节点测速全部显示 `Timeout`（超时），90% 并非所有服务器同时故障，请严格按以下顺序排查：① 先检查电脑/手机系统时间与北京时间误差是否超过 60 秒（最常见隐形元凶，VLESS/VMess 对时间戳极其敏感）；② 确认本地是不是刚切换过网络（或开着另一款加速器/VPN 冲突）；③ 确认机场套餐流量未耗尽或未到期；④ 更新一次订阅同步最新节点 IP；⑤ 检查本地宽带（如部分校园网/公司内网）是否阻断了高端口或 UDP。',
    keyFacts: [
      'Windows 双系统或主板电池亏电常导致开机后时间快慢几小时，同步 NTP 时间即可一秒恢复所有节点。',
      '如果“只有 1–2 个节点超时、其它地区正常”，那只是单个节点临时维护或被上游短暂阻断，手动换其它可用节点即可。',
    ],
    sections: [
      {
        heading: '完整 6 步排错流程',
        paragraphs: ['从成本最低、概率最高的原因开始查起：'],
        bullets: [
          '步骤 1（核对系统时间）：Windows 右键任务栏时钟 → 调整日期和时间 → 点击「立即同步」，确保误差在 10 秒以内。',
          '步骤 2（关闭其它代理与系统旧配置）：检查是否同时开启了两个代理客户端、浏览器代理扩展（如 SwitchyOmega 旧配置）或公司安全客户端。',
          '步骤 3（检查套餐余额与到期时间）：登录机场官网确认剩余流量 > 0、账号未被封禁且订阅未重置过 Token。',
          '步骤 4（更新订阅）：关闭系统代理后在客户端点一次「更新订阅」，拉取服务商刚更换的新入口 IP。',
          '步骤 5（切换传输协议或网络环境）：用手机 5G 热点连接电脑再测一次。若 5G 正常而宽带全红，说明本地宽带或路由器防火墙拦截。',
          '步骤 6（联系客服或启用备用机场）：若多网络均全超时且官方无公告，及时切换备用机场。',
        ],
      },
    ],
    relatedLinks: [
      { label: '订阅更新失败怎么修复？', href: '/troubleshooting/subscription-failed/' },
      { label: '连接不上问题汇总', href: '/troubleshooting/cannot-connect/' },
      { label: '备用与替代机场推荐', href: '/risks/alternatives/' },
    ],
    faqs: [
      {
        question: '为什么测速显示节点超时（Timeout），但我打开浏览器却能上外网？',
        answer: '部分测速接口（URL-Test）访问的目标 URL（如 `cp.cloudflare.com` 或 `gstatic.com`）被某个落地节点临时限制或延迟阈值设置过短（如仅 1500ms），实际节点隧道是通的。试着调高测速超时阈值到 5000ms 再测。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'troubleshooting',
    slug: 'subscription-failed',
    fullPath: '/troubleshooting/subscription-failed/',
    title: '机场订阅更新失败怎么解决？DNS 劫持、代理未关与 UA 拦截修复',
    h1: '订阅更新失败怎么办？五种高频报错的快速解决方法',
    description: '针对导入或更新机场订阅时提示 Network Error、TLS Handshake Failed、格式错误或节点数为 0 的实战修复方案。',
    primaryKeyword: '订阅失败',
    searchIntent: 'Troubleshooting',
    answerFirst:
      '导入或更新订阅失败，最常见的四个原因和对应解法是：① **客户端正挂着已失效的系统代理**——先关闭“系统代理”开关再点击更新，或勾选「直连更新」；② **订阅域名被本地运营商 DNS 劫持**——改用手机 4G/5G 流量或先开一个可用节点走代理更新；③ **使用了机场自带格式不匹配的链接**——例如把 V2Ray Base64 链接直接粘进了 Clash（或未带 Clash UA 参数）；④ **账号重置过订阅 Token**——登录后台重新复制最新链接。',
    keyFacts: [
      '部分机场会检测请求订阅时的 `User-Agent` 来决定返回 Clash YAML 还是 V2Ray Base64，若用浏览器手动下载再导入有时反而需要选对格式参数（如 `&flag=clash`）。',
    ],
    sections: [
      {
        heading: '按具体报错提示对症处理',
        paragraphs: ['对照软件弹出的错误关键词即可快速定位：'],
        bullets: [
          '`connection refused` / `127.0.0.1:7890` 报错：代表软件正试图“通过自己旧的代理端口去拉取新订阅”，结果死循环。请先关闭系统代理或取消软件设置里的“使用代理更新订阅”。',
          '`EOF` / `TLS handshake timeout`：订阅域名在国内被 SNI 阻断，请临时借用可用节点（开启系统代理后再更新）或用手机流量热点更新。',
          '`unsupported proxy type`：所用客户端内核太老（如已停更的原版 Clash）不支持 VLESS-Reality 或 Hysteria 2，升级替换为 Clash Verge Rev / FlClash / v2rayN。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn'],
    relatedLinks: [
      { label: '机场订阅标准导入流程', href: '/tutorials/subscription/' },
      { label: '客户端无法启动怎么处理？', href: '/troubleshooting/client-wont-start/' },
    ],
    faqs: [
      {
        question: '订阅更新成功了，但为什么只有“剩余流量”信息没有节点？',
        answer: '首先登录机场面板确认账单未欠费、套餐未到期；其次排查订阅链接是否复制了仅含说明页的首页 URL 而不是带加密 Token 的专属订阅 URL。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'troubleshooting',
    slug: 'cannot-connect',
    fullPath: '/troubleshooting/cannot-connect/',
    title: '机场连接不上或显示已连接却打不开网页？端口冲突与代理接管排查',
    h1: '连上机场却打不开网页怎么办？端口占用、浏览器插件与协议排查',
    description: '解决“客户端亮绿灯/测速正常，但浏览器就是打不开 Google”的经典假连接故障。',
    primaryKeyword: '连接不上',
    searchIntent: 'Troubleshooting',
    answerFirst:
      '客户端已经选好节点且测速有延迟，但浏览器依然显示无法访问互联网，几乎都是**流量根本没进客户端**：① 忘了打开「系统代理」或「TUN 模式」开关（只选了节点没开接管）；② 浏览器装了 SwitchyOmega 等代理插件并锁死了错误的旧端口（如指向 10809 而 Clash 开在 7897）；③ 本地端口被其它软件占用；④ 浏览器开启了“安全 DNS (DoH)”绕过了客户端 Fake-IP 解析。',
    keyFacts: [
      'Clash Verge Rev 默认混合端口为 `7897`（早期 Clash 为 `7890`），v2rayN 默认混合端口为 `10808`。浏览器插件若端口不一致就会全部断网。',
    ],
    sections: [
      {
        heading: '四步验证流量是否真正进入代理客户端',
        paragraphs: ['花 30 秒验证即可锁定问题在软件外还是软件内：'],
        bullets: [
          '打开客户端「连接 / 日志 (Connections/Logs)」页面，刷新一次 Google，看页面里有没有跳出对应域名的实时记录——如果一条新记录都没有，说明流量根本没经过客户端（立刻查系统代理开关、浏览器代理扩展或开启 TUN）。',
          '检查 Windows「设置 → 网络和 Internet → 代理」里的手动代理地址和端口是否与当前软件一致。',
          '如果是微信电脑版、Telegram 或命令行工具连不上而 Chrome 正常，请开启客户端的 TUN 虚拟网卡模式，或在 Telegram 设置里填好本地 SOCKS5 端口。',
        ],
      },
    ],
    relatedLinks: [
      { label: 'DNS 错误与浏览器 DoH 冲突修复', href: '/troubleshooting/dns-error/' },
      { label: '开启 TUN 虚拟网卡模式教程', href: '/tutorials/tun-mode/' },
    ],
    faqs: [
      {
        question: '关闭代理软件后，为什么国内网站也全部打不开了？',
        answer: '这是客户端非正常闪退或关机前未退出，导致 Windows/macOS 系统代理开关还停留在开启状态指向已关闭的 `127.0.0.1:7897`。只需重新打开软件再点「退出」，或手动进入系统网络设置关闭“使用代理服务器”即可立刻恢复。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'troubleshooting',
    slug: 'dns-error',
    fullPath: '/troubleshooting/dns-error/',
    title: '代理 DNS 错误与泄漏解决：Fake-IP 冲突、浏览器 DoH 与国内域名异常',
    h1: 'DNS 错误排查：解决开启代理后国内网站卡顿、DNS 泄漏或域名解析失败',
    description: '理清代理客户端内置 DNS（Fake-IP / Redir-Host）、浏览器 DoH（安全 DNS）与本地网卡 DNS 之间的优先级与冲突解决。',
    primaryKeyword: 'DNS 错误',
    searchIntent: 'Troubleshooting',
    answerFirst:
      '开启代理后出现“找不到服务器 IP 地址 (`DNS_PROBE_FINISHED_NXDOMAIN`)”或海外流媒体仍识别成国内网络，核心排查三点：① 在 Chrome/Edge 浏览器设置中**关闭“使用安全 DNS (DoH)”**，避免浏览器直接向第三方 DNS 发查询绕过 Clash 的 Fake-IP 分流机制；② 确保国内 DNS（`nameserver`）使用本地干净高速 DNS（如 `223.5.5.5` / `119.29.29.29`）而海外域名通过 `fallback` 走加密远程解析；③ 修改 DNS 后刷新系统 DNS 缓存或重启浏览器。',
    keyFacts: [
      'Fake-IP（198.18.0.x）能大幅提升分流匹配速度并防止本地 DNS 泄漏，但与企业内网或特定需要真实 IP 连通的软件不兼容时可临时切回 `redir-host`。',
    ],
    sections: [
      {
        heading: '三类典型 DNS 异常处理方式',
        paragraphs: ['对应实际症状快速处理：'],
        bullets: [
          'Chrome/Edge 开了代理依然打不开页面或极慢：进入 `chrome://settings/security`，关闭「使用安全 DNS」。',
          '关闭代理后部分网站依然指向 `198.18.x.x` Fake-IP 打不开：Windows 终端运行 `ipconfig /flushdns`，macOS 运行 `sudo killall -HUP mDNSResponder`，并刷新浏览器 `chrome://net-internals/#dns`。',
          '国内软件出现解析失败：检查机场自带配置里的 `nameserver` 是否填了仅海外可达的 DNS 地址导致国内域名走远端或超时。',
        ],
      },
    ],
    relatedLinks: [
      { label: '连接不上与端口接管排查', href: '/troubleshooting/cannot-connect/' },
      { label: '分流规则工作原理', href: '/tutorials/routing-rules/' },
    ],
    faqs: [
      {
        question: '什么是 DNS 泄漏，普通用户需要担心吗？',
        answer: '指虽然网页流量走了代理节点，但域名查询请求却顺着本地宽带直接发给了国内 ISP，导致某些严格地区校验的流媒体或 AI 服务察觉异常。使用带完整分流和 Fake-IP/DoH 远端解析的现代 Mihomo/sing-box 配置即可有效避免。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'troubleshooting',
    slug: 'client-wont-start',
    fullPath: '/troubleshooting/client-wont-start/',
    title: '代理客户端无法启动怎么办？WebView2 缺失、macOS 拦截与内核权限修复',
    h1: '客户端无法启动或打开闪退？分系统修复白屏、报错与服务启动失败',
    description: '解决 Windows 下 Clash Verge Rev 白屏/缺 WebView2、v2rayN 缺 .NET 运行库，以及 macOS 已损坏弹窗和内核端口占用问题。',
    primaryKeyword: '客户端无法启动',
    searchIntent: 'Troubleshooting',
    answerFirst:
      '开源客户端打不开或闪退几乎都属于环境依赖或权限问题：① **Windows Clash Verge Rev 白屏/报错**——安装微软官方 Microsoft Edge WebView2 Runtime；② **Windows v2rayN 无法双击打开**——按官方说明补装 `.NET Desktop Runtime`（如 .NET 8）且勿将软件放入需要管理员权限的 `Program Files` 目录；③ **macOS 弹窗“已损坏/无法验证”**——在系统设置「隐私与安全性」点“仍要打开”；④ **内核启动失败**——检查任务管理器是否残留上次未退净的 `mihomo.exe` / `xray.exe` 占用端口。',
    keyFacts: [
      '部分杀毒软件（如 360、火绒或 Windows Defender 实时保护）会误删刚解压出的 `mihomo.exe` 或 `xray.exe`，导致界面能打开但点连接毫无反应。',
    ],
    sections: [
      {
        heading: '分系统快速修复命令与操作',
        paragraphs: ['对应系统直接照做即可解决绝大多数启动失败：'],
        bullets: [
          'Windows 解压版无法启动：确认路径不含中文与空格（如放到 `D:\\Proxy\\v2rayN`），查验杀毒软件隔离区是否拦截了内核 `.exe`。',
          'macOS 提示“App 已损坏，无法打开”：打开终端确认软件位于 `/Applications` 后，执行官方排查步骤或在隐私与安全性中放行（切勿盲目在未知来源包上强行关闭全盘 SIP）。',
          'Linux `.AppImage` 双击无反应：赋予执行权限 `chmod +x *.AppImage`，Ubuntu 24.04+ 缺失 FUSE 依赖时可加 `--appimage-extract` 解包运行或改用 `.deb` 包。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'flclash'],
    relatedLinks: [
      { label: '四大平台安全安装前置条件', href: '/tutorials/client-install/' },
      { label: '节点超时 6 步排查', href: '/troubleshooting/node-timeout/' },
    ],
    faqs: [
      {
        question: '客户端图标在托盘显示了，但点开主界面一直白屏怎么办？',
        answer: 'Windows 下九成以上是 WebView2 损坏或显卡硬件加速兼容问题；安装最新微软 WebView2 常驻引导程序后重启软件通常即可恢复。',
      },
    ],
    updatedAt: '2026-11-21',
  },
];
