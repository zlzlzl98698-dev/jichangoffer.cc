import type { SubTopicPageData } from './types';

export const commercialTopicPages: SubTopicPageData[] = [
  // ① 机场推荐 /jichang/*
  {
    categoryId: 'jichang',
    slug: 'recommend',
    fullPath: '/jichang/recommend/',
    title: '2026 机场推荐：按预算、线路与客户端需求筛选的客观选购指南',
    h1: '2026 机场推荐：不同预算与场景下怎么选更稳妥？',
    description: '结合运营年份、IEPL/IPLC 专线架构、客户端兼容性与实测截图证据，梳理 2026 年适合日常办公、AI 工具与流媒体的机场选择标准。',
    primaryKeyword: '机场推荐',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '选择机场没有“唯一全能冠军”。若优先看重运营年限（2020 年起）、双线路冗余（IEPL+企业内网）且同时需要自研客户端与 Clash/Shadowrocket 订阅，可优先考察光速云或星岛梦；若完全不想折腾订阅配置，可对比飞猫云、无忧链接或梯子云；若预算在 ¥20/月以内且看重多协议支持，一翻云与唯兔云更具参考价值。',
    keyFacts: [
      '先确定自己能否安装第三方客户端（如 Clash Verge Rev、Shadowrocket），再筛选“纯专属客户端”或“支持订阅导入”的品牌。',
      '年付低至 ¥5.6–¥8.25/月适合轻度备用，首次体验新品牌建议先选月付或低额永久包测试当地晚高峰表现。',
      '所有速度与解锁数据均受测试时间与本地运营商影响，下单前请核对“实测证据”与“厂商宣称”的区分标注。',
    ],
    sections: [
      {
        heading: '一、按核心需求快速分流',
        paragraphs: [
          '大多数用户买错机场，源于把“极限低价”和“全时段高稳 AI/4K 流媒体”混为一谈。建议按以下四条主线对应选型：',
        ],
        bullets: [
          '综合主力与长期运营参考：光速云（2020 年运营，VLESS+IEPL，年付 ¥99 起、月付 ¥25 起、¥147 永久包，保留三网 MiaoKo 多节点测试图）、星岛梦（2020 年运营，Trojan+IEPL，1 倍流量不限设备）。',
          '零配置新手入门：飞猫云（专属客户端登录即用，学生版 ¥84/年）、无忧链接（¥79/年，TikTok 电商导向）、梯子云（自研客户端 + 通用订阅双支持）。',
          '高流量月付性价比：一翻云（¥20/月 150GB，支持 Hysteria 2 / VLESS-Reality / SS 三协议）、唯兔云（¥19.9/月 150GB，IPLC 专线）。',
          'AI 工具针对性场景：速界（¥25/月 150GB，资料明确主打 AI 场景且提示规则限制）、光速云（2026-08-19 实测日/新/美节点解锁 OpenAI，港线多为仅 App）。',
        ],
      },
      {
        heading: '二、买前必查的四项客观门槛',
        paragraphs: [
          '避免仅凭宣传页“4K/8K 秒开”“永不跑路”口号下单，建议依次核查以下四项真实字段：',
        ],
        bullets: [
          '计费口径：区分“年付折算月价”与“真实月付起价”，例如 ¥99/年折合 ¥8.25/月并不等于可按 ¥8.25 单买一个月。',
          '客户端自由度：若您使用 OpenWrt 软路由或习惯 Clash Verge Rev 自定义分流规则，务必避开仅支持官方封闭客户端的服务。',
          '证据日期：核对品牌资料核实日期与测速图片拍摄时段（凌晨/上午与晚高峰 20:00–23:00 体验差异很大）。',
          '退款与止损：虚拟代理服务多数标注不支持无理由退款，首购控制单笔金额比追求长期大折扣更安全。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'feimao'],
    relatedLinks: [
      { label: '查看 32 家机场品牌库与实时筛选', href: '/brands/' },
      { label: '光速云深度评测与三网 MiaoKo 实测拆解', href: '/reviews/guangsuyun/' },
      { label: '便宜机场与年付低价套餐对比', href: '/pricing/cheap/' },
    ],
    faqs: [
      {
        question: '新手第一次买机场，选年付还是月付更合适？',
        answer: '建议优先选月付（如 ¥18–¥25 档）或低额不限时体验包（如 ¥99–¥147），在实际宽带环境下连续测试一周晚高峰与目标服务连通性后，再决定是否转年付降本。',
      },
      {
        question: '为什么不把所有品牌按“第一到第十”绝对排名？',
        answer: '不同用户当地运营商（电信/联通/移动）、常用设备（软路由 vs iOS）及核心用途（AI 办公 vs 流媒体 vs 低频备用）权重不同，且 2026-08-11 原始测速图测试时间段并不完全一致，因此本站坚持条件化推荐而非伪科学绝对榜单。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'jichang',
    slug: 'ranking',
    fullPath: '/jichang/ranking/',
    title: '2026 机场排行：基于资料完整度、运营周期与实测证据的客观参考榜',
    h1: '2026 机场排行：如何区分商业推广位与客观评测证据？',
    description: '透明拆解本站机场参考排序逻辑：将商业主推位与运营年限、套餐透明度、测速截图留存及 AI/流媒体证据分开列示，避免误导性排名。',
    primaryKeyword: '机场排行',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '本站明确将“商业主推优先级”与“客观实测数据”分离管理。在已核验的 32 家品牌资料中，光速云因具备 2020 年起运营背景、完整价目表、2026-08-11 及 2026-08-19 多批次实测截图而被列为重点推荐与评测样本；星岛梦、微风网络、飞猫云、一翻云、唯兔云、二猫云等均保留有可追溯的 2026-08-11 原始测速图可供按条件横向比对。',
    keyFacts: [
      '16 家品牌保留有 2026-08-11 统一格式 MAI-TEST-BOT / Miaosu 原始测速截图，但因各品牌测试时段跨度从凌晨 00:21 到晚间 22:46，严禁据此制作伪精确速度第一名榜单。',
      '存在资料冲突或缺少测速截图的品牌（如灵动云、浪网、EdgeNova 及 5.6 元同质化档位）已在榜单中靠后或单独标注待核实。',
    ],
    sections: [
      {
        heading: '参考分层维度的透明说明',
        paragraphs: [
          '与市面上只按佣金高低暗箱排名的“榜单站”不同，我们把机场参考分层拆为四个可查验维度：',
        ],
        bullets: [
          '第一梯队（资料与证据最完整）：光速云、星岛梦、微风网络、飞猫云、唯兔云、一翻云、二猫云、无忧链接。',
          '第二梯队（含原始测速图但部分字段待补充或存在冲突）：U1S1、SOGO 云、灵猫网络、全球云、极连云、光年梯、速界、可信云、宇宙云。',
          '第三梯队（缺原始测速图或定位特殊场景）：暮光加速、Firefly（萤火虫）、闪跃、隐形人、梯子云、神行加速、闪电鼠/大佬云/云界线/榴莲云/环球梯。',
          '历史档案与纯测速存档：灵动云（2026-08-09 档案）、浪网（缺项较多）、EdgeNova（缺测速）、快狸（仅保留 2026-08-11 截图，无报价链接）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'weifeng', 'feimao', 'yifan', 'weitu'],
    relatedLinks: [
      { label: '查看完整品牌数据库', href: '/brands/' },
      { label: '品牌数据审计与冲突报告说明', href: '/risks/avoid-traps/' },
      { label: '机场评测矩阵总览', href: '/reviews/' },
    ],
    faqs: [
      {
        question: '为什么光速云放在主推位，但你们仍指出其香港节点 Gemini 失败？',
        answer: '商业合作关系（通过推广链接带来佣金）不影响客观证据披露。我们在 2026-08-19 MiaoKo 实测原图中真实观察到光速云香港专线节点对 Gemini 失败、OpenAI 仅 APP，如实写出反而能帮助用户切换日本或新加坡节点，减少买后踩坑。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'jichang',
    slug: 'reliable',
    fullPath: '/jichang/reliable/',
    title: '靠谱机场怎么判断？2026 老牌运营年限与信息透明度筛选',
    h1: '靠谱机场推荐：看运营周期、协议透明度与数据诚实度',
    description: '总结判断机场是否靠谱的硬核指标：成立年份、套餐历史一致性、退款边界披露及代表性老牌机场样本分析。',
    primaryKeyword: '靠谱机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '判断一家机场是否“靠谱”，首要看运营持续时间与信息透明度而非单次跑分。目前资料库中最早可追溯至 2020 年运营的品牌包括光速云与星岛梦；2023 年起步且保留完整测速证据的有飞猫云、微风网络、二猫云、唯兔云与暮光加速；另外可信云在资料中主动承认“缺乏统一 AI/流媒体实测数据”，透明度同样值得参考。',
    keyFacts: [
      '运营 3 年以上（2020–2023 年起步）的品牌经历了多轮网络环境波动，通常抗风险能力相对优于刚上线数月的新站。',
      '“靠谱”不等于“永不宕机”或“免退款无忧”，仍需坚持小周期续费与双备用策略。',
    ],
    sections: [
      {
        heading: '重点老牌与高透明度样本',
        paragraphs: [
          '筛选靠谱机场时，建议结合运营年份、数据留存与第三方客户端退路综合判断：',
        ],
        bullets: [
          '2020 年老牌双雄：光速云（IEPL + 企业内网双线路，支持自研+Clash/Shadowrocket）、星岛梦（IEPL + Trojan 1x 流量不限设备）。',
          '2023 年稳健梯队：微风网络（IEPL+VLESS，7×24 客服体系）、唯兔云（IPLC+Trojan）、二猫云（全线 IEPL，不限设备）。',
          '透明标注样本：可信云在官方资料中明确不虚夸 AI 与流媒体解锁保证，对理性决策用户更友好。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'weifeng', 'weitu', 'kexin'],
    relatedLinks: [
      { label: '机场跑路征兆与风控自查', href: '/risks/exit-scam/' },
      { label: '光速云 vs 星岛梦深度对比', href: '/compare/guangsuyun-vs-xingdaomeng/' },
    ],
    faqs: [
      {
        question: '2025–2026 年刚上线的新机场一定不靠谱吗？',
        answer: '并非一定不靠谱，部分新机场（如一翻云、U1S1）在协议栈与流量给付上很有诚意；但由于运营历史短、缺乏多轮周期验证，前期建议只选月付试水。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'jichang',
    slug: 'stable',
    fullPath: '/jichang/stable/',
    title: '稳定机场推荐：IEPL/IPLC 专线架构与晚高峰可用性解析',
    h1: '稳定机场推荐：为什么晚高峰体验取决于专线架构与冗余？',
    description: '剖析晚高峰卡顿的真实原因，整理明确标注 IEPL 或 IPLC 专线架构且具备测速或带宽冗余说明的机场品牌。',
    primaryKeyword: '稳定机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '影响晚高峰（20:00–23:00）稳定性的核心不是最高峰值跑多少 Mbps，而是跨境段是否走公网拥堵路由。具备 IEPL 或 IPLC 专线接入（如光速云、星岛梦、唯兔云、微风网络、一翻云、SOGO 云、闪跃）在晚间跨境丢包率通常明显低于纯公网直连或廉价单线中转。',
    keyFacts: [
      'IEPL（国际以太网专线）与 IPLC（国际私有租用线路）可减少公网跨境段拥塞与随机 QoS 干扰。',
      '单看一次凌晨测速不能证明晚高峰稳定，需留意是否同时持有晚间时段实测与多地区备用节点。',
    ],
    sections: [
      {
        heading: '明确标注 IEPL / IPLC 专线且资料较完整的代表品牌',
        paragraphs: [
          '在全部 32 个收录品牌中，建议重点关注以下几类有专线标注及测速抓手的服务：',
        ],
        bullets: [
          '光速云：IEPL 专线 + 企业级内网双线路，保留三网（电信/移动/联通）实测数据，香港专线平均速度在 2Gbps 测试端可达 30–42 MB/s 以上。',
          '一翻云：全节点 IEPL 物理专线 + Hysteria 2/VLESS-Reality 多协议切换，单协议遇限流时可切协议保底。',
          'U1S1 & 极连云：在 2026-08-11 资料包中均保留了 22:30–22:50 晚间实测原图，具有时段参考价值。',
          '唯兔云 & 星岛梦：IPLC/IEPL 专线且保持全节点 1x 倍率，长期负载核算透明。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'yifan', 'xingdaomeng', 'weitu', 'u1s1'],
    relatedLinks: [
      { label: 'IEPL 专线原理与真伪辨别', href: '/routes/iepl/' },
      { label: 'IPLC 专线与普通中转差异', href: '/routes/iplc/' },
    ],
    faqs: [
      {
        question: '为什么标了 IEPL 专线还是会偶尔节点超时？',
        answer: 'IEPL 解决的是跨境骨干传输质量，但用户本地宽带到国内 BGP 入口的最后一公里、本地 DNS 污染、系统时间偏差或目标落地服务器被上游风控，同样会导致单节点超时。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'jichang',
    slug: 'best-to-use',
    fullPath: '/jichang/best-to-use/',
    title: '好用的机场推荐：免折腾专属客户端与通用订阅兼容双线方案',
    h1: '好用的机场推荐：怎样才算真正“省心好用”？',
    description: '“好用”对新手和进阶用户含义不同：对比一键登录专属客户端与开放第三方订阅（Clash/Shadowrocket）的代表品牌。',
    primaryKeyword: '好用的机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '对零基础用户而言，下载 App 登录即用的专属客户端（如飞猫云、无忧链接）最省心；对需要多设备精细分流、软路由或 AI 策略组的用户而言，同时提供自研客户端且开放 Clash/Shadowrocket 订阅的品牌（如光速云、梯子云、速界）才真正长期好用。',
    keyFacts: [
      '纯专属客户端优点是无需找海外 Apple ID 下载小火箭或配置 YAML；缺点是无法在 OpenWrt 软路由或 Clash Verge Rev 中与其他机场混用分流。',
      '“双支持”品牌兼顾入门与后期进阶，迁移成本最低。',
    ],
    sections: [
      {
        heading: '两类“好用”代表品牌对照',
        paragraphs: ['按自身技术偏好对号入座，可以大幅减少买后不会配置的挫败感：'],
        bullets: [
          '双支持最稳妥（自研客户端 + 第三方订阅）：光速云、梯子云、速界、光年梯、极连云。',
          '纯自研一键极简（不开放第三方订阅）：飞猫云、无忧链接、SOGO 云、Firefly、灵猫网络、闪跃、全球云、隐形人。',
          '纯开放通用订阅（搭配 Clash Verge Rev / Shadowrocket）：一翻云、唯兔云、星岛梦。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'tiziyun', 'feimao', 'yifan'],
    relatedLinks: [
      { label: '第三方代理客户端大全（Win/Mac/iOS/Android）', href: '/clients/' },
      { label: '机场订阅导入完整图文步骤', href: '/tutorials/subscription/' },
    ],
    faqs: [
      {
        question: '专属客户端安全吗？',
        answer: '正规自研客户端能降低配置门槛，但闭源客户端在系统权限与透明审计上不如 Clash Verge Rev / sing-box 等开源软件。注重桌面权限隔离的进阶用户仍建议选开放第三方订阅的品牌。',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ② 价格与套餐 /pricing/*
  {
    categoryId: 'pricing',
    slug: 'cheap',
    fullPath: '/pricing/cheap/',
    title: '便宜机场推荐：¥5.6–¥15/月低预算与年付入门套餐横向梳理',
    h1: '便宜机场推荐：低预算下如何区分真实月付与年付折算价？',
    description: '梳理品牌库中月均 12 元以下的真实平价套餐，明确拆解年付总价与月付价格差异，避免被“几块钱一月”的营销口径误导。',
    primaryKeyword: '便宜机场',
    searchIntent: 'Transactional',
    answerFirst:
      '当前品牌库中月均成本最低的是 ¥5.6/月档（大佬云、闪电鼠、云界线、榴莲云、环球梯，多为年付 60GB/月折算口径），其次是 ¥6.58–¥8.25/月档（无忧链接 ¥79/年、唯兔云限量 ¥79.9/年、飞猫云学生版 ¥84/年、灵猫 ¥85/年、星岛梦/Firefly/U1S1 ¥96/年、光速云轻量版 ¥99/年）。若只接受真正按月单买，最低月付起价集中在 ¥14.9–¥20/月。',
    keyFacts: [
      '低价档几乎全是通过“一次性购买一年轻量套餐”实现月均 5–9 元，并非支持每月单独充 5 元。',
      '¥5.6/月档五家品牌资料高度同质化且缺少实测 PNG，可靠性验证成本高于 ¥96–¥99 年付有测速原图的品牌。',
    ],
    sections: [
      {
        heading: '低预算三档分层对比',
        paragraphs: ['建议根据“可接受的一次性预付金额”与“对实测证据的要求”做选择：'],
        bullets: [
          '极限年付档（折合 ~¥5.6/月，60GB/月）：闪电鼠、大佬云、云界线（缺#号链接）、榴莲云（协议未明）、环球梯（缺#号链接）。注意该档缺实测截图。',
          '有实测/详表支撑的低门槛年付（¥79–¥99/年）：无忧链接（¥79/40G）、唯兔云（¥79.9/45G）、飞猫云（¥84/50G）、灵猫（¥85/45G）、星岛梦（¥96/60G）、光速云轻量版（¥99/69G，年付且不限设备）。',
          '低门坎真实月付（¥14.9–¥20/月）：唯兔云节假日限时 ¥14.9/100G、边缘节点限时月付 ¥15/72G、极连云/光年梯 ¥18（100G/110G）、无忧链接 ¥19/100G、一翻云/二猫云/U1S1 ¥20。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'feimao', 'weitu', 'jilian'],
    relatedLinks: [
      { label: '关于“一元机场”搜索需求的真实解析', href: '/pricing/one-yuan/' },
      { label: '全站 32 品牌套餐价格总表', href: '/brands/pricing-table/' },
      { label: '按月付费机场专题', href: '/pricing/monthly/' },
    ],
    faqs: [
      {
        question: '为什么光速云 ¥99/年（69GB/月）比很多标称 ¥5.6/月的更值得优先看？',
        answer: '¥99/年折合 ¥8.25/月，每年只差约 30 元，但光速云自 2020 年运营至今，流量给到 69GB/月且保留多批次原始测速与 62 节点 AI/流媒体实测图，不确定性明显更低。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'pricing',
    slug: 'one-yuan',
    fullPath: '/pricing/one-yuan/',
    title: '一元机场靠谱吗？“一元机场”真实行情与低价陷阱避坑指南',
    h1: '一元机场存在吗？真实成本与平价替代方案解析',
    description: '客观回答“一元机场”搜索需求：拆解公网与专线带宽成本结构，说明本站为何不凭空虚构“一元机场”品牌，并提供正规平价替代参考。',
    primaryKeyword: '一元机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '本站收录的 32 家可核验机场品牌中，没有任何一家提供“长期 ¥1/月”的正规稳定套餐。在跨境服务器、公网中转或 IEPL 专线成本下，¥1/月往往只对应极短期体验券、严重超售的失效免费节点转发、或以低价引流后再诱导高价续费/采集隐私的营销噱头。',
    keyFacts: [
      '严谨原则：不得因为“一元机场”搜索词热门，就凭空编造或强行把年付品牌写成“一元机场”。',
      '正规服务商可核实的最低长期年付折算价通常在 ¥5.6–¥8.5/月区间，低频用户更推荐购买 ¥99–¥147 的永久不限时流量包摊薄月均支出。',
    ],
    sections: [
      {
        heading: '如果你预算确实极低，该如何替代？',
        paragraphs: [
          '把“每月只花几块钱”拆解为“实际消费流量”，会发现不限时包往往比追逐虚假一元机场更划算：',
        ],
        bullets: [
          '极低频刚需（每月只查几 GB 资料）：选择二猫云（¥99/100GB）、唯兔云（¥100/100GB）或光速云致敬斯诺克147永久包（¥147/247GB），用满 18–24 个月则摊薄月均成本仅 ¥5–¥8 且不浪费过期流量。',
          '轻度日常年付：选择飞猫云学生版（¥84/年）、星岛梦（¥96/年）或光速云轻量版（¥99/年）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'ermao', 'weitu', 'xingdaomeng'],
    relatedLinks: [
      { label: '一分机场套路解析', href: '/pricing/one-cent/' },
      { label: '不限时永久流量包机场汇总', href: '/pricing/unlimited-time/' },
      { label: '便宜机场推荐榜单', href: '/pricing/cheap/' },
    ],
    faqs: [
      {
        question: '为什么有些网站上能搜到“一元机场”推荐？',
        answer: '一类是早期曾存在过低价公网直连实验站（多数节点易失联或限速到无法看视频）；另一类则是利用“1 元试用 1 天/1GB”作为关键词标题诱饵，实际续费仍是 ¥15–¥30/月。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'pricing',
    slug: 'one-cent',
    fullPath: '/pricing/one-cent/',
    title: '一分机场是真的吗？低价试用套路识别与安全平价选择',
    h1: '一分机场：为什么 ¥0.01 节点几乎无法长期使用？',
    description: '剖析“一分机场”背后的一次性试用、IP 滥用风控与跑路引流特征，帮助新手避开低价无效消耗。',
    primaryKeyword: '一分机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '本站 32 家核验品牌数据库中不存在任何“¥0.01/月”常规在售套餐。“一分机场”在中文搜索中多指极个别机场为防白嫖设置的 ¥0.01/1 天试用验证支付链接，或是已失效的历史低价噱头。指望长期 1 分钱获取稳定 IEPL 专线与 ChatGPT 可用节点在商业成本上并不成立。',
    keyFacts: [
      '即便是普通公网 BGP 出口，落地 IP 被大量低价用户并发请求也会迅速触发 OpenAI、Cloudflare 与流媒体验证码封锁。',
      '真正降低试错成本的办法是选择支持月付（¥15–¥20）或一次性小额流量包的透明品牌。',
    ],
    sections: [
      {
        heading: '识别“一分/超低价”引流页面的三个信号',
        paragraphs: ['遇到声称 1 分钱包月包年的推广站时，建议先核查以下异常信号：'],
        bullets: [
          '强制要求下载来源不明的闭源安装包或关闭系统安全拦截。',
          '页面没有任何协议说明、流量周期规则与清晰更新日期，仅堆砌夸张测速图片。',
          '支付 ¥0.01 后仅给 1–3GB 极短有效期流量，随后自动续费扣款或弹窗要求充值高额年费。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'jilian', 'guangnian', 'yifan'],
    relatedLinks: [
      { label: '一元机场真相与平价替代', href: '/pricing/one-yuan/' },
      { label: '机场避坑指南', href: '/risks/avoid-traps/' },
    ],
    faqs: [
      {
        question: '没有免费或一分钱试用，如何避免买错机场？',
        answer: '优先查看已有实测截图（如 2026-08-11 / 2026-08-19 测试记录），首单购买 ¥18–¥25 的单月套餐试跑一周即可把最大试错成本锁定在一杯奶茶钱以内。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'pricing',
    slug: 'monthly',
    fullPath: '/pricing/monthly/',
    title: '月付机场推荐：按月灵活续费、降低预付风险的品牌清单',
    h1: '月付机场推荐：支持单月购买的高性价比品牌与套餐对比',
    description: '汇总支持真实月付的品牌与起步价（¥14.9–¥27/月），对比流量额度、协议与客户端支持，帮你用最小试错成本验证线路。',
    primaryKeyword: '月付机场',
    searchIntent: 'Transactional',
    answerFirst:
      '坚持月付是防范机场跑路或线路降级最有效的方式。当前数据库明确提供月付档位的品牌中，入门门槛最低的是唯兔云节假日限时月付（¥14.9/100GB，常规 ¥19.9/150GB）、极连云（¥18/100GB）、光年梯（¥18/110GB）、无忧链接（¥19/100GB），以及 ¥20 档的一翻云（150GB）、二猫云（130GB）、U1S1（120GB）与暮光加速（120GB）；光速云极速版月付为 ¥25/168GB。',
    keyFacts: [
      '支持月付的品牌总数超过 20 家，其中 ¥18–¥25/月即可获得 100GB–168GB 的 IEPL/IPLC 专线月流量。',
      '部分品牌仅公布年付起步价（如大佬云、闪电鼠、梯子云），是否开放低价月付需注册后台进一步核实。',
    ],
    sections: [
      {
        heading: '月付核心档位横评（按月付起步价升序）',
        paragraphs: ['以下数据均来自品牌套餐表原文，未混入年付折算价：'],
        bullets: [
          '¥18/月档：极连云（100GB，IEPL，自研+第三方）、光年梯（110GB，IEPL+VLESS，自研+第三方）。',
          '¥19–¥20/月档：无忧链接（¥19/100GB，专属客户端）、唯兔云普通版（¥19.9/150GB，IPLC+Trojan）、一翻云轻享版（¥20/150GB，Hysteria2/VLESS-Reality/SS）、二猫云白猫（¥20/130GB）、U1S1（¥20/120GB）、暮光加速基础版（¥20/120GB）、全球云入门（¥20/120GB）。',
          '¥24–¥25/月档：闪跃闪动（¥24/150GB，8折码后约 ¥19.2）、隐形人白银（¥24/144GB）、光速云极速版（¥25/168GB，IEPL+VLESS）、星岛梦（¥25/150GB）、飞猫云（¥25/150GB）、SOGO 云（¥25/150GB）、速界（¥25/150GB）、可信云（¥25/150GB）、Firefly Lite（¥25/150GB）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['yifan', 'weitu', 'guangsuyun', 'jilian', 'guangnian'],
    relatedLinks: [
      { label: '按价格筛选全部 32 家机场', href: '/brands/' },
      { label: '全站月付与年付价格总表', href: '/brands/pricing-table/' },
    ],
    faqs: [
      {
        question: '月付 ¥25 的光速云极速版和 ¥20 的一翻云怎么选？',
        answer: '如果更注重 2020 年以来的老牌运营背景以及 62/70 节点详细三网实测记录，可选光速云极速版（168GB）；如果希望月付门槛低至 ¥20 且需要 Hysteria 2 协议对抗晚高峰丢包，可先试一翻云轻享版（150GB）。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'pricing',
    slug: 'unlimited-time',
    fullPath: '/pricing/unlimited-time/',
    title: '不限时机场推荐：永久流量包价格、单位 GB 成本与适用人群',
    h1: '不限时机场推荐：一次性付费永久流量包对比指南',
    description: '汇总提供不限时不过期流量包的 13 家机场品牌，计算每 GB 成本，说明为什么不限时包适合低频与备用场景。',
    primaryKeyword: '不限时机场',
    searchIntent: 'Transactional',
    answerFirst:
      '不限时机场（一次性付费永久流量包，用完为止、不按月清零）最适合每月用量低于 20–30GB 的轻度用户或作为主力机场的应急备用。资料库中性价比最高的小额不限时入门包为光速云致敬斯诺克147永久套餐（¥147 / 247GB，折合约 ¥0.60/GB），其次是唯兔云（¥100/100GB、¥160/200GB、¥340/500GB）、一翻云（¥100/100GB、¥200/250GB）、二猫云（¥99/100GB）与星岛梦（¥100/100GB、¥600/1TB）。',
    keyFacts: [
      '绝大多数常规流量包单位成本在 ¥0.60–¥1.00/GB 左右，只有月均消耗较低时才比月付/年付划算。',
      '“永久有效”的前提是机场本身持续运营，不建议一次性囤积 ¥800–¥1200 以上的超大额永久包。',
    ],
    sections: [
      {
        heading: '重点品牌不限时流量包单 GB 成本横向对比',
        paragraphs: ['以下按单位流量价格梳理已核实的不限时方案：'],
        bullets: [
          '光速云·致敬斯诺克147永久套餐：¥147 / 247GB（约 ¥0.595/GB），不限设备，2020 年老牌背景。',
          '唯兔云·永久不限时：¥100/100GB（¥1.00/GB）、¥160/200GB（¥0.80/GB）、¥340/500GB（¥0.68/GB）。',
          '星岛梦·永久不限时：¥100/100GB（¥1.00/GB）、¥300/300GB、¥600/1000GB（¥0.60/GB）。',
          '一翻云·不限时包：¥100/100GB、¥200/250GB（¥0.80/GB）、¥400/500GB（¥0.80/GB）。',
          '其他支持品牌：二猫云（¥99/100GB）、Firefly（¥100/100GB）、无忧链接（¥108/100GB）、SOGO 云（¥120/120GB）、全球云（¥100/100GB）、微风网络（¥200/270GB，约 ¥0.74/GB）、暮光加速（¥219/150GB）、隐形人（¥229/160GB）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'weitu', 'xingdaomeng', 'yifan', 'ermao'],
    relatedLinks: [
      { label: '机场停服替代与备用方案搭配指南', href: '/risks/alternatives/' },
      { label: '光速云套餐体系全解析', href: '/brands/guangsuyun/' },
    ],
    faqs: [
      {
        question: '不限时流量包和年付小包哪个更省钱？',
        answer: '假设每月只用 10–15GB，年付 ¥99（每月 69GB 浪费大半）一年花 ¥99；而买光速云 ¥147/247GB 不限时包可用约 16–24 个月，月均成本反降到 ¥6–¥9 且完全没有月度过期焦虑。反之若每月用 60GB+，年付或月付更划算。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'pricing',
    slug: 'value',
    fullPath: '/pricing/value/',
    title: '性价比机场推荐：单位 GB 成本、IEPL 专线与设备限制综合比较',
    h1: '性价比机场推荐：不能只看标价，要算“有效可用流量成本”',
    description: '综合价格、线路倍率（1x vs 高倍率）、不限设备数量与实际可用率，给出不同流量消耗区间的高性价比选型建议。',
    primaryKeyword: '性价比机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '高性价比的核心公式是：真实可用带宽 ÷（实际月支出 × 节点倍率）。中低流量（每月 50–70GB）性价比代表为光速云轻量版（¥99/年 69GB/月）、星岛梦贴心小包（¥96/年 60GB/月）；中等主力月付（150GB/月）代表为一翻云轻享版（¥20/150GB）、唯兔云普通版（¥19.9/150GB）与光速云极速版（¥25/168GB，全节点 ×1 且不限设备）。',
    keyFacts: [
      '部分看似便宜的机场若将主力专线节点设为 2x 或 3x 倍率，实际可用流量直接缩水一半甚至三分之二。',
      '支持不限设备数量的套餐（如光速云、星岛梦、唯兔云、一翻云）能让电脑、手机、平板共享一份账单，变相提升性价比。',
    ],
    sections: [
      {
        heading: '四个典型消费层级的性价比最优解',
        paragraphs: ['按真实月度用量选套餐，避免为用不完的流量或用不起的倍率买单：'],
        bullets: [
          '轻度办公与查资料（<60GB/月）：光速云轻量版（¥99/年 69GB/月）或星岛梦贴心小包（¥96/年 60GB/月）。',
          '标准高频日常（100–160GB/月）：一翻云轻享版（¥20/150GB）、唯兔云普通版（¥19.9/150GB）、光速云极速版（¥25/168GB）。',
          '重度 4K 与开发者（300–600GB/月）：一翻云舒享/尊享版（¥35/350GB、¥55/600GB）、光速云流光/量子版（¥34/268GB、¥68/568GB）。',
          '备用防失联（不定期消耗）：光速云 147 永久包（¥147/247GB）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'yifan', 'weitu', 'xingdaomeng'],
    relatedLinks: [
      { label: '什么是线路倍率？流量扣费计算详解', href: '/routes/multiplier/' },
      { label: '全站优惠码汇总页', href: '/brands/coupons/' },
    ],
    faqs: [
      {
        question: '为什么不把最便宜的 ¥5.6/月档排为性价比第一？',
        answer: '性价比包含“稳定性与证据支撑”。¥5.6/月档五家目前缺乏独立测速截图与完整多档资料，无法验证高峰期可用性，一旦卡顿不可用，再便宜也是沉没成本。',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ⑥ AI 与流媒体 /ai-streaming/*
  {
    categoryId: 'ai-streaming',
    slug: 'chatgpt',
    fullPath: '/ai-streaming/chatgpt/',
    title: 'ChatGPT 机场推荐：OpenAI 地区限制、香港节点失败排查与节点筛选',
    h1: 'ChatGPT 机场怎么选？为什么香港节点经常打不开网页版？',
    description: '基于 2026-08-19 实测证据解析 OpenAI 对香港/美国/日本/新加坡节点 IP 的风控差异，给出可稳定访问 ChatGPT 的配置策略。',
    primaryKeyword: 'ChatGPT 机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '能否稳定使用 ChatGPT 取决于出口节点 IP 所在地区与风控干净度，而不是机场宣传口号。由于香港不在 OpenAI 官方支持服务区内，实测中香港节点常出现网页端报错或仅限 iOS/Android App 使用；建议优先选择提供高质量日本、新加坡、美国或台湾节点的机场，并在 Clash 中为 OpenAI 单独配置分流策略组锁定美/日/新节点。',
    keyFacts: [
      '在光速云 2026-08-19 MiaoKo 实测中，20 个香港专线节点在 OpenAI 检测项全部显示“仅 APP(HK)”，而日本、新加坡、美国节点绝大多数显示“解锁”。',
      '灵动云在 2026-07-20/21 实测中表现为主流 OpenAI 地区基本全解锁；速界则在品牌资料中重点强调 AI 工具使用场景（同时声明受平台规则动态影响）。',
    ],
    sections: [
      {
        heading: '一、ChatGPT 访问异常的三大常见技术原因',
        paragraphs: ['多数无法登录或频繁跳人机验证的情况，排查后集中在这三点：'],
        bullets: [
          '误连香港或澳门节点：即使机场宣称全解锁，香港原生/机房 IP 在 OpenAI 网页端极易触发地区不支持提示。',
          '开启了自动测速（url-test）策略组：延迟最低的通常是香港节点，自动切回香港后就会导致 ChatGPT 突然断连或报错。',
          '多人共享高风险数据中心 IP：低价超售机场多人共用少数出口 IP，短时间高频请求容易触发 403 / 降智 / 反复验证。',
        ],
      },
      {
        heading: '二、推荐的分流与品牌选型策略',
        paragraphs: [
          '使用支持第三方客户端（Clash Verge Rev / Shadowrocket）的机场（如光速云、一翻云、速界、星岛梦），新建一个名为 `AI / OpenAI` 的独立策略组，将香港节点排除在外，手动固定为日本、新加坡或美国节点。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'sujie', 'yifan', 'xingdaomeng'],
    relatedClientSlugs: ['clash-verge-rev', 'shadowrocket'],
    relatedLinks: [
      { label: 'Claude 机场与严格风控应对指南', href: '/ai-streaming/claude/' },
      { label: 'Gemini 机场节点要求', href: '/ai-streaming/gemini/' },
      { label: 'Clash 分流规则配置教程', href: '/tutorials/routing-rules/' },
    ],
    faqs: [
      {
        question: '用了日本或美国节点还是提示“Access Denied”或反复验证怎么办？',
        answer: '先清理浏览器 Cookie/开启无痕模式测试，确认系统未开启多代理软件冲突，并尝试切换至该机场的新加坡或冷门美国节点；如使用网页版同时登录账号，注意避免 5 分钟内跨多国节点频繁切换触发风控。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'ai-streaming',
    slug: 'claude',
    fullPath: '/ai-streaming/claude/',
    title: 'Claude 机场推荐：Anthropic 风控限制与原生 IP 节点选择',
    h1: 'Claude 机场指南：降低账号风控与地区不可用的实操原则',
    description: '解释为什么 Claude（Anthropic）比 ChatGPT 更敏感，并整理支持美/日/新多地区独立策略分流的机场参考。',
    primaryKeyword: 'Claude 机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      'Anthropic 对节点 IP 纯净度与地区一致性（特别是禁止香港与未开放地区、严查共享数据中心 IP 滥用）的要求明显高于 ChatGPT。建议选择支持自由切换美/日/新/英节点的第三方订阅机场，在日常使用 Claude 时固定单一国家节点，不要使用会自动漂移地区的“自动选择”组。',
    keyFacts: [
      '虽然多家品牌清单宣称支持 Claude（如光速云、暮光加速、飞猫云、微风网络、星岛梦、一翻云、速界等），但各家目前仍缺乏像 OpenAI 那样统一逐节点实测截图，因此实际使用需保留单节点锁定习惯。',
      '高风控场景下，避免同一个账号在短时间内从美国 IP 跳变到新加坡或英国 IP。',
    ],
    sections: [
      {
        heading: '降低 Claude 封号与地区阻断的三条守则',
        paragraphs: ['相比盲目更换机场，规范客户端路由设置往往更重要：'],
        bullets: [
          '为 anthropic.com / claude.ai 配置独立分流规则并固定选择美国或日本低风险节点。',
          '尽量避开“仅支持香港/台湾且无欧美独立线路”的低端机场，因为香港同样不在 Anthropic 支持列表内。',
          '若需高强度生产环境调用（如 Claude Code / API），可优先考察支持独立 IP 定制或高质量专线节点方案。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'sujie', 'yifan', 'xingdaomeng'],
    relatedLinks: [
      { label: 'ChatGPT 机场指南', href: '/ai-streaming/chatgpt/' },
      { label: '分流规则配置教程', href: '/tutorials/routing-rules/' },
    ],
    faqs: [
      {
        question: '所有宣称支持 Claude 的机场都能保证不封号吗？',
        answer: '不能。没有任何机场能单方面承诺账号零风控——账号注册地、支付卡段、浏览器指纹及高频 IP 切换都会影响 Anthropic 风控判定。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'ai-streaming',
    slug: 'gemini',
    fullPath: '/ai-streaming/gemini/',
    title: 'Gemini 机场推荐：实测为什么多数香港/日本节点 Gemini 会失败？',
    h1: 'Gemini 机场怎么选？从实测证据看 Google AI 的地区要求',
    description: '结合 2026-08-19 MiaoKo 实测数据，揭示 Gemini 在香港、日本、新加坡与台湾节点上的真实解锁率差异。',
    primaryKeyword: 'Gemini 机场',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '在 32 家机场品牌资料中，Gemini 是最常被标注为“视节点而定”的 AI 服务。以光速云 2026-08-19 的 62 节点实测图为例：所有新加坡节点（SG）及部分台湾/马来西亚节点均成功解锁 Gemini，而 20 个香港节点以及多组日本、美国机房 IP 节点在该次测试中显示为“失败”。因此使用 Gemini 必须精确挑选支持的新加坡、台湾或指定解锁节点。',
    keyFacts: [
      '2026-08-19 MiaoKo 实测显示：新加坡节点（SG01–SG10）与马来西亚节点（MY01–MY02）对 Gemini 解锁率远高于香港和普通机房节点。',
      '同时要留意 Google 账号归属地与浏览器定位设置，即使节点 IP 正确，账号区域锁定为未开放区也可能触发提示。',
    ],
    sections: [
      {
        heading: '使用 Gemini 的节点与分流实战建议',
        paragraphs: ['如果日常高频使用 Gemini 网页版或 Gemini API，可按以下顺序排查与分流：'],
        bullets: [
          '在品牌库筛选时重点关注包含新加坡（SG）或台湾、马来西亚节点的机场（如光速云、星岛梦、微风网络、一翻云）。',
          '不要把 Gemini 和 ChatGPT 放在同一默认“自动选择”组：香港节点延迟低会抢占默认路由，直接导致 Gemini 提示“所在地区暂不可用”。',
          '对 `gemini.google.com`、`aisuite`/`aistudio.google.com`、`generativelanguage.googleapis.com` 单独匹配新加坡或美国确认可用节点。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'yifan', 'weifeng'],
    relatedLinks: [
      { label: '查看光速云 2026-08-19 实测原图拆解', href: '/reviews/guangsuyun/' },
      { label: 'ChatGPT 机场选型对比', href: '/ai-streaming/chatgpt/' },
    ],
    faqs: [
      {
        question: '为什么同一个美国节点能用 ChatGPT 却打不开 Gemini？',
        answer: 'Google 对特定机房 ASN（如部分被识别为代理或未标注支持区域的段）有独立地理库校验，两者风控库并不相同，实测中新加坡及原生家宽/商宽段通常表现更好。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'ai-streaming',
    slug: 'netflix',
    fullPath: '/ai-streaming/netflix/',
    title: 'Netflix 解锁机场：全区非自制剧、原生 IP 与 DNS 解锁差异',
    h1: 'Netflix 解锁怎么看懂？原生 IP 与 DNS 解锁有什么区别？',
    description: '解释 Netflix 仅解锁自制剧与全解锁非自制剧的区别，并结合流媒体实测数据说明港/台/日/新节点观影表现。',
    primaryKeyword: 'Netflix 解锁',
    searchIntent: 'Informational',
    answerFirst:
      '如果某个节点只显示“仅解锁自制剧”，说明 Netflix 识别到了机房代理 IP，但允许观看 Netflix 原创内容；而标注“全解锁（如解锁 HK/TW/JP/SG/US）”则可观看对应地区的全部版权电影与番剧（通常通过原生 IP 或落地 DNS 解锁实现）。在光速云 2026-08-19 62 节点实测中，港/台/日/新/美节点均完整显示对应区域 Netflix 解锁。',
    keyFacts: [
      '观影体验不仅看能否打开片单，还取决于晚高峰单线程带宽（4K HDR 通常需要稳定 25Mbps+ 持续吞吐）。',
      'Disney+ 比 Netflix 对台湾部分机房 IP 更挑剔（如 2026-08-19 实测中光速云台湾节点能解 Netflix 但 Disney+ 失败），追 Disney+ 建议切香港、新加坡或日本。',
    ],
    sections: [
      {
        heading: '流媒体解锁实测观察要点',
        paragraphs: ['阅读测速与解锁图表时，建议结合以下三个细节判断真实观影能力：'],
        bullets: [
          '看清解锁区域标识：例如 Netflix(HK)、Netflix(TW)、Netflix(JP)，部分节点可能虽然解锁但被识别到欧洲地区（如灵动云 2026-07 实测台湾落地曾识别为 ES），会影响字幕与片库。',
          '关注 Disney+ 与 HBO Max 协同：港澳台日新节点是中文剧集字幕最全的黄金区域。',
          '若在电视端（Apple TV / Android TV）观看，需确认机场支持 Clash/Shadowrocket 订阅，以便配置软路由或局域网共享。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'yifan'],
    relatedLinks: [
      { label: 'YouTube 加速与“送中”排查', href: '/ai-streaming/youtube/' },
      { label: 'OpenWrt 软路由客户端推荐', href: '/clients/' },
    ],
    faqs: [
      {
        question: '为什么用 DNS 解锁的流媒体节点偶尔会跳区？',
        answer: 'DNS 流媒体解锁依赖中继服务器的分流策略，当上游解锁机临时维护时可能回退为本地机房 IP；而真正的本地原生/家宽落地 IP 通常地区归属更稳定。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'ai-streaming',
    slug: 'youtube',
    fullPath: '/ai-streaming/youtube/',
    title: 'YouTube 加速与 4K/8K 流畅播放：什么是节点“送中”？',
    h1: 'YouTube 加速指南：带宽要求、Premium 跨区与“送中”排查',
    description: '说明 YouTube 4K/8K 视频对持续下载带宽与丢包率的要求，并解释测速图中常见的“送中(CN)”识别异常。',
    primaryKeyword: 'YouTube 加速',
    searchIntent: 'Informational',
    answerFirst:
      '流畅观看 YouTube 1080P/4K 视频通常只需 20–50Mbps 稳定下载带宽与低丢包率（多数 IEPL 专线机场在非故障时段均可轻松满足），8K 码率则建议 80–120Mbps+。更常见的痛点是节点“送中(CN)”——即 Google 地理位置库误将节点 IP 判定为中国内地，导致无广告或 YouTube Premium / 推荐流受限，需切换到实测标注明确海外地区的节点。',
    keyFacts: [
      '“送中”不代表不能打开网页，而是导致无法启用 YouTube 后台播放、无法定位到港/日/美区或影响 Gemini 访问。',
      '在 2026-08-19 70 节点测试图中，部分早期 VLESS 新加坡/台湾节点曾出现过送中标记，而香港/日本/美国节点及 Shadowsocks 组 62 节点均正常识别海外地区。',
    ],
    sections: [
      {
        heading: '遇到 YouTube 卡顿或送中的快速处理步骤',
        paragraphs: ['可按以下顺序自查节点与本地客户端：'],
        bullets: [
          '在手机端关闭 YouTube App 定位权限或系统精确定位上报，避免手机 GPS 将当前位置回传给 Google 导致“送中”。',
          '避开测速图上出现严重丢包或只有几百 KB/s 的异常节点，在 Clash/小火箭中挑选均速稳定且延迟在 25–70ms 之间的香港、新加坡、日本节点。',
          '如需购买低价 YouTube Premium，注意部分地区对支付卡归属与节点一致性要求严格，切勿频繁跨区切换。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'feimao', 'weifeng', 'xingdaomeng'],
    relatedLinks: [
      { label: 'Netflix 与流媒体解锁指南', href: '/ai-streaming/netflix/' },
      { label: '低延迟节点延迟指标解读', href: '/routes/low-latency/' },
    ],
    faqs: [
      {
        question: '为什么测速有 300Mbps，看 YouTube 4K 还是缓冲转圈？',
        answer: '测速通常是多线程短时爆发吞吐，而视频播放更依赖单线程持续稳定性与无丢包；如遇到 UDP QUIC 被运营商限速，可在浏览器或客户端规则中尝试屏蔽 UDP 443 端口强制走 TCP HTTPS 播放测试。',
      },
    ],
    updatedAt: '2026-11-21',
  },

  // ⑩ 风险与替代 /risks/*
  {
    categoryId: 'risks',
    slug: 'exit-scam',
    fullPath: '/risks/exit-scam/',
    title: '机场跑路征兆识别与资金止损：如何避免大额预付打水漂？',
    h1: '机场跑路有哪些前兆？客观辨别谣言与真实风险信号',
    description: '严谨区分已证实跑路、暂时维护与未证实传闻，总结高风险运营信号与“月付优先+双备用”防踩坑纪律。',
    primaryKeyword: '机场跑路',
    searchIntent: 'Informational',
    answerFirst:
      '判断一家机场是否面临高跑路风险，不能靠论坛一句未证实的传言，而应观察“多节点大面积连续多日离线、工单客服长期无回应、官网域名频繁无公告失联的同时却推出超低价多年付大促清仓”。最有效的止损原则永远是：对成立未满 1 年的新品牌坚持月付，不囤积大额多年预付套餐。',
    keyFacts: [
      '合规与事实边界：本站不凭空认定任何特定品牌“已跑路”或存在违法行为；仅记录资料缺失、链接异常或历史档案待核实状态。',
      '超低价三年付/五年付大折扣往往是最容易放大沉没成本的诱因。',
    ],
    sections: [
      {
        heading: '买前与使用中的四项风控红线',
        paragraphs: ['通过日常习惯就能将跑路损失降到最低：'],
        bullets: [
          '不把全部鸡蛋放进一个篮子：主力机场按月/季续费，再配一个 ¥100–¥147 的永久不限时包作备用。',
          '警惕同系同源集群：部分品牌底层使用同一批前端面板或线路商（例如资料明确记录 Firefly 与微风等存在同系关系），做备用组合时尽量选不同技术路线与运营年份的组合。',
          '关注域名与公告通道：保存官网发布页或客服邮箱，区分“局部节点维护”与“整站失联”。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'xingdaomeng', 'yifan'],
    relatedLinks: [
      { label: '机场停服后的平滑替代方案', href: '/risks/alternatives/' },
      { label: '月付机场推荐清单', href: '/pricing/monthly/' },
    ],
    faqs: [
      {
        question: '官网打不开就一定是机场跑路了吗？',
        answer: '不一定。国内网络环境常导致机场推广域名或后台面板域名被临时屏蔽，此时已导入客户端的订阅节点往往仍可正常连接；可先切换已有节点再访问备用发布页或联系客服核实。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'risks',
    slug: 'avoid-traps',
    fullPath: '/risks/avoid-traps/',
    title: '机场避坑指南：拆解虚假倍率、假客户端、超低价钓鱼与参数冲突',
    h1: '机场避坑指南：购买前后最容易踩的 6 个隐形陷阱',
    description: '基于 32 家品牌资料审计发现的真实冲突案例，教你识别套餐文字游戏、链接异常、伪造测速图与山寨客户端陷阱。',
    primaryKeyword: '机场避坑',
    searchIntent: 'Informational',
    answerFirst:
      '买机场最常见的 6 类坑分别是：① 把“年付折算月价”当成可以月付的价格；② 忽略“高倍率扣费”导致 200GB 实际只能用 40GB；③ 买了不提供订阅的“专属客户端机场”却想用 Clash/软路由；④ 搜到山寨“Clash/小火箭”带毒安装包；⑤ 盲信凌晨单次测速图当晚高峰保证；⑥ 忽略优惠码适用周期限制。',
    keyFacts: [
      '在本站对 32 家品牌数据的交叉审计中，发现包括 Firefly 同源别名重复、部分品牌正文与总表优惠码不一致、云界线与环球梯推广链接缺 #/ 等真实细节，均已在品牌详情页透明列明。',
    ],
    sections: [
      {
        heading: '六个典型避坑检查点',
        paragraphs: ['下单前对照这 6 条检查一遍，基本可避开 90% 的纠纷：'],
        bullets: [
          '核对“年付折算”与“月付价格”：所有标“5元/8元一月”的基本都是按 12 个月一次性付款折算的轻量包。',
          '确认客户端模式：需软路由或自定义分流者，避开飞猫云、SOGO 云、Firefly 等不提供第三方订阅链接的品牌。',
          '查看测试图时段与单位：注意 `MB/s`（字节）与 `Mbps`（比特，1 MB/s = 8 Mbps）的区别，同时区分“上午/凌晨测试”和“20:00–23:00 晚高峰测试”。',
          '防假客户端：只从官方 GitHub 仓库或正版海外区 App Store 下载客户端，切勿用百度前排陌生下载站或 Google Play 已被第三方接管的 NekoBox。',
        ],
      },
    ],
    relatedLinks: [
      { label: '机场安全性与隐私边界说明', href: '/risks/security/' },
      { label: '退款政策与试错原则', href: '/risks/refund-issues/' },
      { label: '全部 32 品牌数据库（含冲突标注）', href: '/brands/' },
    ],
    faqs: [
      {
        question: '为什么同一个品牌在不同地方看到的套餐价格或优惠码不一样？',
        answer: '机场服务商经常在季度或大促期微调套餐流量和优惠码（如光速云 9 月 docx 文档与 10/11 月最新清单即有微调）。本站保留变更记录并明确标注最新核实日期，付款前务必以官方结算页面最终显示金额为准。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'risks',
    slug: 'alternatives',
    fullPath: '/risks/alternatives/',
    title: '机场替代方案：主力机场波动、涨价或不支持第三方订阅时的平替思路',
    h1: '机场替代方案：如何按协议、价格与客户端平滑切换备选机场？',
    description: '针对常用机场失联、卡顿或取消第三方订阅后，按同等预算和生态习惯给出客观可替代的品牌映射方案。',
    primaryKeyword: '机场替代',
    searchIntent: 'Commercial Investigation',
    answerFirst:
      '选择替代机场的核心是“保留操作习惯并弥补原机场短板”：如果原机场取消了第三方 Clash/Shadowrocket 订阅，可转向光速云、星岛梦、一翻云或唯兔云；如果是作为防断联第二备用机场，推荐搭配一份 ¥99–¥147 的永久不限时流量包，保证主线波动时 1 分钟内切流恢复工作。',
    keyFacts: [
      '最佳韧性配置是“1 个主用月付/年付 + 1 个异源不限时永久包”。',
      '切换新机场时，尽量确保主力与备用采用不同底层技术路线或运营年份背景，减少同源波动。',
    ],
    sections: [
      {
        heading: '按不同痛点的常见替代路径',
        paragraphs: ['对应你当前最想解决的问题挑选下一家：'],
        bullets: [
          '原纯专属客户端限制太多，想换回 Clash Verge Rev / 小火箭：可迁移至光速云（双支持）、星岛梦（Trojan 1x）、一翻云（Hysteria2/VLESS-Reality）或唯兔云。',
          '原低价中转晚高峰丢包严重，想升级 IEPL/IPLC 专线：可考虑光速云、微风网络、一翻云或极连云/光年梯。',
          '只需要一个低频应急备份：优先考虑光速云 147 永久包（247GB）、二猫云（¥99/100GB）或唯兔云（¥100/100GB）。',
        ],
      },
    ],
    recommendedBrandSlugs: ['guangsuyun', 'yifan', 'xingdaomeng', 'weitu'],
    relatedLinks: [
      { label: '品牌横向对比专题', href: '/compare/' },
      { label: '不限时永久流量包对比', href: '/pricing/unlimited-time/' },
    ],
    faqs: [
      {
        question: '换了新机场后，原来的 Clash Verge Rev 或小火箭需要卸载重装吗？',
        answer: '不需要。只要新机场支持第三方订阅，直接将新订阅 URL 添加为新的配置档案（Profile）即可随时切换，甚至可以在规则里把备用机场节点作为故障转移分组。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'risks',
    slug: 'refund-issues',
    fullPath: '/risks/refund-issues/',
    title: '机场退款问题说明：虚拟数字服务退款政策与买前自保策略',
    h1: '机场退款为什么普遍受限？购买前的正确决策顺序',
    description: '解释跨境代理服务普遍存在“不支持无理由退款”或“特殊商品不退”的原因，并提供先试后买的防损失策略。',
    primaryKeyword: '机场退款',
    searchIntent: 'Informational',
    answerFirst:
      '绝大多数机场属于即时开通且流量不可逆消耗的数字服务，加之支付通道手续费与风控成本，很多品牌在规则中明确写明“不支持退款”或“特殊/活动商品不支持退款”（例如光速云资料即明确提示特殊商品不支持退款）。因此千万不要抱着“不好用再申请全额退款”的心态直接购买高价年付或定制版。',
    keyFacts: [
      '即便个别商家口头允许工单协商退回余额，也常扣除已用流量、手续费或仅退至站内钱包余额。',
      '唯一稳妥的维权前移方案就是“首单最小周期、实测通过再续费”。',
    ],
    sections: [
      {
        heading: '降低“买后无法退款”损失的三步策略',
        paragraphs: ['用交易结构控制风险，比事后扯皮有效得多：'],
        bullets: [
          '第一步：优先挑选提供 ¥15–¥25 月付档的品牌试用一个月。',
          '第二步：在购买后前 48 小时内，集中测试当地晚高峰（20:30–22:30）常用网站、AI 工具与客户端兼容性。',
          '第三步：如果品牌只提供年付没有月付，先查验本站是否有其独立测速截图与完整价格记录，再结合个人风险承受度下单。',
        ],
      },
    ],
    relatedLinks: [
      { label: '月付机场推荐（低门槛先试）', href: '/pricing/monthly/' },
      { label: '机场避坑检查表', href: '/risks/avoid-traps/' },
    ],
    faqs: [
      {
        question: '买完后发现自己用的是校园网/公司内网导致连不上，能退款吗？',
        answer: '通常很难以此要求全额退款。建议先按《故障排查》手册核查是否是系统代理、防火墙或端口限制引起，确认是否本地网络封锁了代理端口。',
      },
    ],
    updatedAt: '2026-11-21',
  },
  {
    categoryId: 'risks',
    slug: 'security',
    fullPath: '/risks/security/',
    title: '机场安全性指南：HTTPS 加密边界、专属客户端权限与隐私习惯',
    h1: '机场安全性解析：流量是如何加密的？哪些风险需要注意？',
    description: '客观讲解代理节点对网络流量的可见性边界、HTTPS 端到端加密的作用，以及使用开源客户端与专属客户端的安全建议。',
    primaryKeyword: '机场安全性',
    searchIntent: 'Informational',
    answerFirst:
      '通过机场访问网站时，你设备与节点之间通过 VLESS/Trojan/Shadowsocks 加密传输，防止本地网络运营商嗅探；而节点落地与目标网站之间（如银行、邮箱、ChatGPT 等 `https://` 站点）还有一层端到端 TLS/HTTPS 加密，机场服务器只能看到你访问了哪个域名/IP，看不到你在 HTTPS 网页内提交的密码和正文内容。',
    keyFacts: [
      '不要在未启用 HTTPS（纯 `http://`）的网页中传输敏感账号密码。',
      '安装客户端时优先选 GitHub 开源审计透明的项目（如 Clash Verge Rev、v2rayN、sing-box），对第三方闭源专属客户端注意权限最小化。',
    ],
    sections: [
      {
        heading: '日常安全用网的四个实用原则',
        paragraphs: ['把安全控制权掌握在自己的客户端与系统配置里：'],
        bullets: [
          '绝不从百度竞价推广或来路不明的网盘下载代理客户端，务必核对官方 GitHub Releases 或正版 App Store。',
          '开启「分流/规则模式（Rule）」而非全局模式，让网银、政务、微信及国内敏感应用直连本地网络。',
          '不要随意安装来路不明的“机场自签根证书（Root CA）”——正常代理转发不需要向操作系统信任列表安装根证书。',
          '定期检查订阅链接隐私，不要把包含自己账号 Token 的个人订阅地址直接发到公开群聊或 GitHub。',
        ],
      },
    ],
    relatedClientSlugs: ['clash-verge-rev', 'v2rayn', 'sing-box'],
    relatedLinks: [
      { label: '客户端安全下载渠道大全', href: '/clients/' },
      { label: 'DNS 错误与泄漏排查', href: '/troubleshooting/dns-error/' },
    ],
    faqs: [
      {
        question: '开启代理后，机场老板能看到我的微信聊天或支付宝密码吗？',
        answer: '第一，使用规则分流时国内 App 根本不经过机场节点；第二，现代通讯与支付 App 全程使用 HTTPS/TLS 及自有加密协议，中间代理节点无法解密具体内容。但使用未校验来源的闭源软件或安装恶意根证书才存在设备本地隐私风险。',
      },
    ],
    updatedAt: '2026-11-21',
  },
];
