export interface NavSubItem {
  label: string;
  href: string;
  description: string;
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational' | 'troubleshooting';
}

export interface NavCategory {
  id: string;
  label: string;
  href: string;
  pillarTitle: string;
  summary: string;
  system: 'A' | 'B' | 'C';
  children: NavSubItem[];
}

export const primaryNavigation: NavCategory[] = [
  {
    id: 'jichang',
    label: '机场推荐',
    href: '/jichang/',
    pillarTitle: '综合机场推荐与选购专题',
    summary: '按稳定性、性价比、新手门槛与真实场景筛选机场服务，避免盲目买错套餐。',
    system: 'C',
    children: [
      {
        label: '机场推荐',
        href: '/jichang/recommend/',
        description: '综合场景下的机场选购框架与重点推荐入口',
        intent: 'commercial',
      },
      {
        label: '机场排行',
        href: '/jichang/ranking/',
        description: '区分客观实测证据与编辑推荐条件的横向参考榜',
        intent: 'commercial',
      },
      {
        label: '靠谱机场',
        href: '/jichang/reliable/',
        description: '运营年限、协议透明度与售后响应维度的筛选清单',
        intent: 'commercial',
      },
      {
        label: '稳定机场',
        href: '/jichang/stable/',
        description: '侧重晚高峰可用性、IEPL/IPLC 专线架构的服务梳理',
        intent: 'commercial',
      },
      {
        label: '好用的机场',
        href: '/jichang/best-to-use/',
        description: '兼顾自研一键客户端与第三方订阅兼容性的实用方案',
        intent: 'commercial',
      },
    ],
  },
  {
    id: 'pricing',
    label: '价格与套餐',
    href: '/pricing/',
    pillarTitle: '机场套餐价格体系与计费指南',
    summary: '明确区分月付、年付折算月价与永久不限时流量包，看清单位流量成本与真实门槛。',
    system: 'C',
    children: [
      {
        label: '便宜机场',
        href: '/pricing/cheap/',
        description: '月均 10 元以内与低预算入门套餐客观对比',
        intent: 'transactional',
      },
      {
        label: '一元机场',
        href: '/pricing/one-yuan/',
        description: '关于“一元机场”搜索词的真实行情解析与风险提示',
        intent: 'commercial',
      },
      {
        label: '一分机场',
        href: '/pricing/one-cent/',
        description: '“一分机场”低价引流套路拆解与正规平价替代参考',
        intent: 'commercial',
      },
      {
        label: '月付机场',
        href: '/pricing/monthly/',
        description: '支持按月灵活续费、降低跑路沉没成本的月付套餐汇总',
        intent: 'transactional',
      },
      {
        label: '不限时机场',
        href: '/pricing/unlimited-time/',
        description: '一次性付费永久流量包对比，适合低频备用用户',
        intent: 'transactional',
      },
      {
        label: '性价比机场',
        href: '/pricing/value/',
        description: '结合单 GB 成本、线路类型与设备数限制的综合性价比分析',
        intent: 'commercial',
      },
    ],
  },
  {
    id: 'brands',
    label: '机场品牌',
    href: '/brands/',
    pillarTitle: '机场品牌数据库与深度评测中心',
    summary: '收录 32 个机场品牌原始资料、套餐结构、优惠码、官网入口与测速证据状态。',
    system: 'B',
    children: [
      {
        label: '机场品牌大全',
        href: '/brands/',
        description: '支持搜索、按价格/线路/客户端/AI 场景实时筛选的品牌库',
        intent: 'navigational',
      },
      {
        label: '机场品牌评测',
        href: '/reviews/',
        description: '独立结构、区分官方宣称与实测证据的品牌深度评测矩阵',
        intent: 'commercial',
      },
      {
        label: '机场官网导航',
        href: '/brands/official-links/',
        description: '集中核验的各品牌注册入口与链接格式异常提醒',
        intent: 'navigational',
      },
      {
        label: '机场套餐价格',
        href: '/brands/pricing-table/',
        description: '全站收录品牌的入门月付、年付折算与永久包价格总表',
        intent: 'transactional',
      },
      {
        label: '机场优惠码',
        href: '/brands/coupons/',
        description: '已核验优惠码、折扣适用范围与冲突记录汇总',
        intent: 'transactional',
      },
      {
        label: '机场替代方案',
        href: '/compare/',
        description: '同价位品牌横向对比与停服/涨价后的平替选择',
        intent: 'commercial',
      },
    ],
  },
  {
    id: 'vpn',
    label: 'VPN 与加速器',
    href: '/vpn/',
    pillarTitle: 'VPN、代理客户端与游戏加速器技术辨析',
    summary: '严谨区分传统加密隧道 VPN、分流代理机场与低延迟游戏加速器的原理与适用场景。',
    system: 'A',
    children: [
      {
        label: 'VPN 推荐',
        href: '/vpn/recommend/',
        description: '海外商业 VPN 与分流机场的选型边界与适用场景',
        intent: 'commercial',
      },
      {
        label: '免费 VPN',
        href: '/vpn/free/',
        description: '免费 VPN 的带宽限制、隐私风险与合规替代方案',
        intent: 'informational',
      },
      {
        label: '手机 VPN',
        href: '/vpn/mobile/',
        description: 'iOS 与移动网络环境下稳定连接的工具配置方案',
        intent: 'informational',
      },
      {
        label: '安卓 VPN',
        href: '/vpn/android/',
        description: 'Android 端代理客户端与全局/分应用代理区别',
        intent: 'informational',
      },
      {
        label: 'VPN 软件评测',
        href: '/vpn/reviews/',
        description: '主流跨平台代理软件与商业 VPN 协议栈对比',
        intent: 'commercial',
      },
      {
        label: '游戏加速器',
        href: '/vpn/game-accelerator/',
        description: 'UDP FullCone NAT 与外服联机场景为何不同于常规机场',
        intent: 'informational',
      },
    ],
  },
  {
    id: 'clients',
    label: '客户端软件',
    href: '/clients/',
    pillarTitle: '第三方代理客户端下载、内核与配置库',
    summary: '覆盖 Windows、macOS、Android、iOS、Linux 与 OpenWrt 主流开源与商业客户端。',
    system: 'A',
    children: [
      {
        label: 'Clash Verge Rev',
        href: '/clients/clash-verge-rev/',
        description: '基于 Mihomo 内核的跨平台主流桌面端软件指南',
        intent: 'informational',
      },
      {
        label: 'Clash Meta',
        href: '/clients/clash-meta/',
        description: 'Mihomo / Clash Meta 生态与安卓/桌面端兼容说明',
        intent: 'informational',
      },
      {
        label: 'v2rayN',
        href: '/clients/v2rayn/',
        description: '支持 Xray 与 sing-box 双核心的 Windows/macOS/Linux 客户端',
        intent: 'informational',
      },
      {
        label: 'Shadowrocket',
        href: '/clients/shadowrocket/',
        description: 'iOS / iPadOS 小火箭购买提示、订阅导入与分流规则',
        intent: 'informational',
      },
      {
        label: 'Mihomo',
        href: '/clients/mihomo/',
        description: 'Mihomo 内核配置结构、内核迁移与衍生客户端矩阵',
        intent: 'informational',
      },
      {
        label: 'sing-box',
        href: '/clients/sing-box/',
        description: '新一代通用代理平台与 SFA/SFI/SFM 官方客户端指南',
        intent: 'informational',
      },
    ],
  },
  {
    id: 'ai-streaming',
    label: 'AI 与流媒体',
    href: '/ai-streaming/',
    pillarTitle: 'AI 生产力工具与流媒体解锁专题',
    summary: '针对 ChatGPT、Claude、Gemini、Netflix、YouTube、Disney+ 与 TikTok 的节点条件解析。',
    system: 'B',
    children: [
      {
        label: 'ChatGPT 机场',
        href: '/ai-streaming/chatgpt/',
        description: 'OpenAI 网页版与 App 端对节点 IP 纯净度与地区的要求',
        intent: 'commercial',
      },
      {
        label: 'Claude 机场',
        href: '/ai-streaming/claude/',
        description: 'Anthropic 严格风控下的原生 IP 与可用地区筛选建议',
        intent: 'commercial',
      },
      {
        label: 'Gemini 机场',
        href: '/ai-streaming/gemini/',
        description: 'Google Gemini 地区限制及香港/台湾节点常见失败原因',
        intent: 'commercial',
      },
      {
        label: 'Netflix 解锁',
        href: '/ai-streaming/netflix/',
        description: '原生 IP 与 DNS 解锁自制剧/全区非自制剧的差异说明',
        intent: 'informational',
      },
      {
        label: 'YouTube 加速',
        href: '/ai-streaming/youtube/',
        description: '4K/8K 码率带宽要求与“送中”IP 识别排查',
        intent: 'informational',
      },
    ],
  },
  {
    id: 'routes',
    label: '线路与节点',
    href: '/routes/',
    pillarTitle: '跨境网络线路架构与节点地区解析',
    summary: '拆解 IEPL、IPLC 专线原理、公网隧道中转差异、节点倍率规则与亚洲/欧美区域延迟规律。',
    system: 'A',
    children: [
      {
        label: 'IEPL 专线',
        href: '/routes/iepl/',
        description: '国际以太网专线原理、成本构成与真伪辨别方法',
        intent: 'informational',
      },
      {
        label: 'IPLC 专线',
        href: '/routes/iplc/',
        description: '点对点国际专线与普通 BGP 公网中转的晚高峰差异',
        intent: 'informational',
      },
      {
        label: '香港节点',
        href: '/routes/hong-kong/',
        description: '低延迟首选与 AI 工具受限的权衡使用指南',
        intent: 'informational',
      },
      {
        label: '日本节点',
        href: '/routes/japan/',
        description: '兼顾东亚延迟、AI 服务与流媒体解锁的主力节点地区',
        intent: 'informational',
      },
      {
        label: '低延迟节点',
        href: '/routes/low-latency/',
        description: 'RTT、TLS RTT 与 HTTPS Ping 三类延迟指标的正确解读',
        intent: 'informational',
      },
      {
        label: '线路倍率',
        href: '/routes/multiplier/',
        description: '0.5x、1x 与高倍率专线节点的流量消耗计算方法',
        intent: 'informational',
      },
    ],
  },
  {
    id: 'tutorials',
    label: '使用教程',
    href: '/tutorials/',
    pillarTitle: '代理配置实操教程与新手入门指南',
    summary: '按操作任务拆分的单主题教程：从零安装客户端、导入订阅、启用 TUN 到精细分流。',
    system: 'A',
    children: [
      {
        label: '机场订阅教程',
        href: '/tutorials/subscription/',
        description: '订阅链接格式、Clash/V2Ray 转换与自动更新设置',
        intent: 'informational',
      },
      {
        label: 'Clash 配置',
        href: '/tutorials/clash-config/',
        description: 'Profiles、覆写规则与策略组自动测速配置步骤',
        intent: 'informational',
      },
      {
        label: '分流规则',
        href: '/tutorials/routing-rules/',
        description: '国内外直连分流、AI 独立策略组与绕过局域网设置',
        intent: 'informational',
      },
      {
        label: 'TUN 模式',
        href: '/tutorials/tun-mode/',
        description: '虚拟网卡全局接管原理，解决终端/游戏/桌面 App 不走代理',
        intent: 'informational',
      },
      {
        label: '客户端安装',
        href: '/tutorials/client-install/',
        description: 'Windows、macOS、Android、iOS 四平台安全安装流程',
        intent: 'informational',
      },
    ],
  },
  {
    id: 'troubleshooting',
    label: '故障排查',
    href: '/troubleshooting/',
    pillarTitle: '代理连接故障诊断与异常排查手册',
    summary: 'Answer-First 排错流程：快速定位节点超时、订阅失败、DNS 污染与系统代理冲突。',
    system: 'A',
    children: [
      {
        label: '节点超时',
        href: '/troubleshooting/node-timeout/',
        description: '系统时间校准、本地网络阻断与节点失效的排查顺序',
        intent: 'troubleshooting',
      },
      {
        label: '订阅失败',
        href: '/troubleshooting/subscription-failed/',
        description: 'DNS 劫持、代理未关闭与 UA 拦截导致拉取失败的修复',
        intent: 'troubleshooting',
      },
      {
        label: '连接不上',
        href: '/troubleshooting/cannot-connect/',
        description: '端口占用、流量耗尽与协议客户端不匹配排查指南',
        intent: 'troubleshooting',
      },
      {
        label: 'DNS 错误',
        href: '/troubleshooting/dns-error/',
        description: 'Fake-IP 冲突、DNS 泄漏与浏览器安全 DNS 配置冲突处理',
        intent: 'troubleshooting',
      },
      {
        label: '客户端无法启动',
        href: '/troubleshooting/client-wont-start/',
        description: 'Windows 运行库缺失、macOS 权限拦截与内核服务异常修复',
        intent: 'troubleshooting',
      },
    ],
  },
  {
    id: 'risks',
    label: '风险与替代',
    href: '/risks/',
    pillarTitle: '机场风险评估、避坑指南与替代选择',
    summary: '客观区分已证实风险与未证实传闻，提供买前风控检查表与平替品牌转移思路。',
    system: 'B',
    children: [
      {
        label: '机场跑路',
        href: '/risks/exit-scam/',
        description: '跑路前常见征兆识别与降低长期预付资金风险的方法',
        intent: 'informational',
      },
      {
        label: '机场避坑',
        href: '/risks/avoid-traps/',
        description: '虚假倍率、夸大带宽、超低价钓鱼与假客户端识别指南',
        intent: 'informational',
      },
      {
        label: '机场替代',
        href: '/risks/alternatives/',
        description: '老机场停服或体验下降后的平滑迁移与备用方案搭配',
        intent: 'commercial',
      },
      {
        label: '退款问题',
        href: '/risks/refund-issues/',
        description: '虚拟数字商品退款政策与先月付试用再续费的决策原则',
        intent: 'informational',
      },
      {
        label: '机场安全性',
        href: '/risks/security/',
        description: 'HTTPS 端到端加密边界、专属客户端权限与隐私安全常识',
        intent: 'informational',
      },
    ],
  },
];
