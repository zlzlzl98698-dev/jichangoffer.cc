export interface ClientRecord {
  slug: string;
  name: string;
  aliases: string[];
  category: 'third-party' | 'core';
  platforms: Array<'Windows' | 'macOS' | 'Android' | 'iOS' | 'Linux' | 'OpenWrt'>;
  maintenanceStatus: 'active' | 'caution-verify' | 'paid-appstore';
  maintenanceNote: string;
  coreEngine: string;
  protocols: string[];
  subscriptionFormats: string[];
  officialSourceLabel: string;
  officialSourceUrl: string;
  pricingModel: '免费开源' | 'App Store 付费应用' | '免费基础版 + 付费 Pro / 内购';
  summary: string;
  keyFeatures: string[];
  installSteps: string[];
  commonPitfalls: string[];
  verifiedAt: string;
  featuredInNav: boolean;
}

export const allClients: ClientRecord[] = [
  {
    slug: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    aliases: ['Clash Verge', 'Verge Rev'],
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: '当前桌面端活跃维护项目，接替已停更的原版 Clash for Windows 生态。',
    coreEngine: 'Mihomo (Clash Meta)',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'TUIC'],
    subscriptionFormats: ['Clash YAML', 'Mihomo Profile'],
    officialSourceLabel: 'GitHub 官方仓库 (clash-verge-rev/clash-verge-rev)',
    officialSourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    pricingModel: '免费开源',
    summary:
      '基于 Rust (Tauri) 与 Mihomo 内核开发的跨平台桌面图形客户端，支持订阅管理、精细规则分流、覆写脚本与系统级 TUN 虚拟网卡模式，适合 Windows、macOS（Intel / Apple Silicon）与 Linux 新手及进阶用户。',
    keyFeatures: [
      '原生内置 Mihomo 内核，支持 VLESS-Reality、Hysteria 2 等新协议',
      '内置系统代理开关与一键服务模式 + TUN 虚拟网卡模式',
      '支持全局 Script / YAML 覆写（Merge / Script），可自定义 AI 与流媒体分流组',
      'macOS 同时区分 x64 (Intel) 与 aarch64 (Apple Silicon) 安装包',
    ],
    installSteps: [
      '前往 GitHub Releases 官方发布页，按系统下载对应架构安装包（Windows 选 x64-setup.exe，M 系列 Mac 选 aarch64.dmg，Linux 按发行版选 .deb/.rpm/.AppImage）。',
      'Windows 首次安装如提示缺少 WebView2，按系统向导补齐微软官方 WebView2 Runtime。',
      '打开软件进入「订阅 (Profiles)」页，粘贴支持 Clash 格式的机场订阅 URL 并点击导入。',
      '在「设置」中开启「系统代理」；若终端命令行或 UWP/桌面 App 无法走代理，按需安装服务模式后开启 TUN 模式。',
    ],
    commonPitfalls: [
      '搜索引擎前排常出现假冒官网或捆绑木马的第三方下载站，务必核对 GitHub 仓库拼写。',
      'macOS 开启系统代理后若关闭软件前未正常退出，可能残留代理端口导致断网，需在系统网络设置检查或重启关闭。',
      '部分仅采用“专属客户端”的机场（如飞猫云、SOGO 云、Firefly）不提供 Clash 订阅，无法导入本软件。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'clash-meta',
    name: 'Clash Meta（生态与 Clash Meta for Android）',
    aliases: ['Clash.Meta', 'CMFA', 'Clash Meta for Android'],
    category: 'third-party',
    platforms: ['Android', 'Windows', 'macOS', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: '桌面端核心已演进更名为 Mihomo；安卓端对应 Clash Meta for Android (CMFA) 并持续提供发布版。',
    coreEngine: 'Mihomo (原 Clash.Meta)',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria', 'Hysteria 2', 'TUIC'],
    subscriptionFormats: ['Clash YAML', 'Mihomo YAML'],
    officialSourceLabel: 'GitHub (MetaCubeX/ClashMetaForAndroid)',
    officialSourceUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid',
    pricingModel: '免费开源',
    summary:
      'Clash Meta 是原 Clash 闭源停更后的主流开源延续分支（现内核已统一称 Mihomo）。在安卓端，Clash Meta for Android（CMFA）支持完整的 Clash YAML 规则分流、策略组测速与分应用代理。',
    keyFeatures: [
      '全面兼容 VLESS、Hysteria 2 等现代抗审查与低延迟协议',
      '支持安卓端「绕过/仅代理指定应用」分应用控制，节省国内 App 流量',
      '支持 GeoIP / GeoSite 规则自动更新与定时订阅拉取',
    ],
    installSteps: [
      '安卓设备从 GitHub MetaCubeX/ClashMetaForAndroid Releases 下载通用 arm64-v8a APK。',
      '打开软件进入「配置 → 新建配置 → 从 URL 导入」，粘贴机场 Clash 订阅链接。',
      '设置自动更新间隔（建议 1440 分钟）并保存配置。',
      '回到主界面选中刚刚导入的配置，点击「已停止 → 点击启动」并允许系统创建 VPN 隧道。',
    ],
    commonPitfalls: [
      '部分早期教程仍将“Clash Meta”与“Mihomo”混称，实际上内核代码库已经统一归属 MetaCubeX/mihomo。',
      '安卓手机开启省电策略或后台清理可能杀掉代理进程，需在电池设置中允许后台无限制运行。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'v2rayn',
    name: 'v2rayN',
    aliases: ['v2rayN Windows', 'v2rayN macOS'],
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: '长期活跃更新的多核心桌面客户端，已支持 Windows、macOS 与 Linux。',
    coreEngine: 'Xray-core / sing-box / Mihomo 多核心切换',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria 2', 'TUIC', 'Socks/HTTP'],
    subscriptionFormats: ['V2Ray Base64', 'VLESS/VMess/Trojan URI', 'sing-box JSON', 'Clash YAML（通过内置核心）'],
    officialSourceLabel: 'GitHub 官方仓库 (2dust/v2rayN)',
    officialSourceUrl: 'https://github.com/2dust/v2rayN',
    pricingModel: '免费开源',
    summary:
      '由 2dust 维护的跨平台多核心网络代理工具，可同时调度 Xray 与 sing-box 等内核，特别适合多协议节点管理、批量测真连接延迟以及习惯纯 V2Ray/VLESS 订阅的用户。',
    keyFeatures: [
      '支持 Xray-core 与 sing-box 核心按节点类型自动或手动切换',
      '支持导入 Base64 订阅与单节点分享链接（vless://, trojan:// 等）',
      '提供真连接（Real Delay）测速、批量测速排序与 TUN 模式接管',
    ],
    installSteps: [
      '从 GitHub 2dust/v2rayN 下载对应平台含核心的压缩包（如 Windows 选 v2rayN-windows-64-With-Core.zip）。',
      '解压至纯英文无空格路径后运行主程序（避免放入 C:\\Program Files 触发权限受限）。',
      '点击「订阅分组 → 订阅分组设置 → 添加」，填入机场订阅 URL 后执行「更新全部订阅（不通过代理）」。',
      '底部选择「自动配置系统代理」，选中目标节点按 Enter 设为活动服务器即可测试连通性。',
    ],
    commonPitfalls: [
      '若下载不含核心（Without Core）的版本，启动会提示找不到 Xray/sing-box 内核文件。',
      '系统本地时间与北京时间误差超过 90 秒会导致 VMess 等协议握手失败。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    aliases: ['小火箭', 'Rocket'],
    category: 'third-party',
    platforms: ['iOS'],
    maintenanceStatus: 'paid-appstore',
    maintenanceNote: '仅通过海外区（如美区）App Store 付费上架，不在中国区 App Store 提供。',
    coreEngine: 'Shadowrocket 原生网络扩展引擎',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'WireGuard', 'Socks5'],
    subscriptionFormats: ['Shadowrocket/V2Ray Base64', 'Clash YAML（部分兼容导入）', '标准节点 URI'],
    officialSourceLabel: 'Apple App Store（海外区付费应用）',
    officialSourceUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
    pricingModel: 'App Store 付费应用',
    summary:
      'iPhone 与 iPad 上普及度最高的规则代理工具，支持订阅管理、本地流量与请求抓包查看、按域名/GeoIP 自动分流以及 iCloud 配置同步。注意其为 App Store 付费应用，需使用对应地区 Apple ID 购买。',
    keyFeatures: [
      '支持 VLESS、Trojan、Shadowsocks、Hysteria 2 等几乎全部主流机场协议',
      '支持「配置 → 本地文件 / 远程规则」分流，日常开启「全局路由：配置」即可兼顾国内直连与海外加速',
      '自带连通性延迟测试与实时数据统计、DNS 覆写及模块脚本能力',
    ],
    installSteps: [
      '在 App Store 切换至已购或海外地区 Apple ID，搜索 Shadowrocket 并完成正版购买下载（切勿购买来路不明的共享 ID 或安装企业签名假冒包）。',
      '复制机场后台提供的 Shadowrocket 专属订阅链接（或通用 V2Ray 订阅），打开小火箭后系统常会自动提示导入，也可点击右上角「+」选择「类型：Subscribe」。',
      '在「设置 → 订阅」中开启「打开时更新」，并将「全局路由」保持为「配置（Config）」。',
      '在首页选择低延迟节点后打开顶部连接开关，首次需授权 iOS 添加 VPN 配置。',
    ],
    commonPitfalls: [
      '中国区 App Store 搜到的同名中文“小火箭”图标软件多为山寨广告应用，正版英文名为 Shadowrocket 且为付费买断。',
      '将「全局路由」误改为「代理（Proxy）」会导致访问微信、淘宝等国内服务变慢且额外消耗机场流量。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'mihomo',
    name: 'Mihomo（内核与配置生态）',
    aliases: ['Mihomo Kernel', 'Clash.Meta Kernel'],
    category: 'core',
    platforms: ['Windows', 'macOS', 'Android', 'Linux', 'OpenWrt'],
    maintenanceStatus: 'active',
    maintenanceNote: '当前 Clash 规则生态的底层核心引擎，由 MetaCubeX 维护。',
    coreEngine: 'Mihomo Core',
    protocols: ['Shadowsocks', 'VMess', 'VLESS-Reality', 'Trojan', 'Hysteria 2', 'TUIC v5', 'WireGuard'],
    subscriptionFormats: ['Clash/Mihomo YAML'],
    officialSourceLabel: 'GitHub 官方内核仓库 (MetaCubeX/mihomo)',
    officialSourceUrl: 'https://github.com/MetaCubeX/mihomo',
    pricingModel: '免费开源',
    summary:
      'Mihomo 是 Clash Verge Rev、FlClash、Clash Mi、OpenClash、Nikki 等十余款跨平台客户端共同依赖的核心网络引擎。理解 Mihomo 的配置结构（proxies、proxy-groups、rules、dns 与 tun），就能通用掌控绝大多数桌面与软路由客户端。',
    keyFeatures: [
      '支持 Sniffer 域名嗅探与 Fake-IP / Redir-Host 两种 DNS 解析模式',
      '统一配置语法可跨 Windows/macOS（Clash Verge Rev）、Android（FlClash）、OpenWrt（OpenClash/Nikki）复用',
      '内置自动测速（url-test）与故障转移（fallback）策略组',
    ],
    installSteps: [
      '普通桌面与手机用户无需单独运行命令行内核，直接安装 Clash Verge Rev、FlClash 或 Clash Mi 即可自带 Mihomo。',
      '服务器、NAS 或 Docker 用户可从 MetaCubeX/mihomo Releases 下载对应 CPU 架构二进制文件配合 Metacubexd Web 面板运行。',
      '路由用户可在 OpenWrt 中通过 OpenClash 或 Nikki（需 OpenWrt 24.10+）调用 Mihomo 内核实现透明网关代理。',
    ],
    commonPitfalls: [
      '旧版原版 Clash（2023 年停更）不支持 VLESS-Reality 与 Hysteria 2，导入新机场配置会报“unsupported proxy type”，必须使用 Mihomo 内核。',
      '注意第三方衍生客户端 Mihomo Party 的维护状态需单独核实，不宜不加确认就当作长期首选。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'sing-box',
    name: 'sing-box（官方客户端 SFA / SFI / SFM 与生态）',
    aliases: ['SFA', 'SFI', 'SFM', 'sing-box for Android', 'sing-box for iOS'],
    category: 'core',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'OpenWrt'],
    maintenanceStatus: 'active',
    maintenanceNote: '由 SagerNet 官方持续推进，提供原生 SFA（Android）、SFI（iOS）、SFM（macOS）客户端。',
    coreEngine: 'sing-box Core',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'TUIC', 'ShadowTLS'],
    subscriptionFormats: ['sing-box JSON（原生）'],
    officialSourceLabel: 'sing-box 官方文档 (sing-box.sagernet.org)',
    officialSourceUrl: 'https://sing-box.sagernet.org/',
    pricingModel: '免费开源',
    summary:
      '新一代高性能通用代理平台，以单一 JSON 配置驱动跨全平台路由、DNS 与透明代理。安卓（SFA）、iOS（SFI）、macOS（SFM）官方图形端轻量稳定，同时也是 Karing、Hiddify、NekoBox、HomeProxy 等客户端的底层引擎。',
    keyFeatures: [
      '统一跨平台 JSON 配置模型，内存占用与高并发连接表现优秀',
      'iOS 端官方 SFI 可在部分海外区免费安装，是 Shadowrocket 之外的合规开源选择',
      'OpenWrt 环境下有 HomeProxy 与 PassWall2 等成熟路由界面配合使用',
    ],
    installSteps: [
      '确认机场后台是否直接提供「sing-box 格式」订阅（如仅提供 Clash YAML，可搭配支持多格式的 Karing/Hiddify，或通过可信规则转换）。',
      '按设备从官方文档获取 SFA（Android）、SFI（App Store 海外区）或 SFM（macOS）。',
      '在 Profiles 中添加远程 JSON 订阅链接并启用连接。',
    ],
    commonPitfalls: [
      '官方 sing-box 客户端仅认原生 JSON 配置，直接粘贴 Clash YAML 或 V2Ray Base64 链接会报错无法解析。',
      '大版本升级（如 1.10 → 1.11/1.12）时旧式 inbound/outbound 字段可能废弃，订阅模板需随内核同步更新。',
    ],
    verifiedAt: '2026-10-19',
    featuredInNav: true,
  },
  {
    slug: 'flclash',
    name: 'FlClash',
    aliases: ['FlClash'],
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Android', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: '资料确认具备可核实的跨平台项目资料，Flutter 界面简洁且跨四端一致。',
    coreEngine: 'Mihomo',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2'],
    subscriptionFormats: ['Clash YAML'],
    officialSourceLabel: 'GitHub 开源仓库 (chen08209/FlClash)',
    officialSourceUrl: 'https://github.com/chen08209/FlClash',
    pricingModel: '免费开源',
    summary:
      '基于 Flutter 与 Mihomo 内核打造的跨平台客户端，界面直观干净，在 Windows、macOS、Android 与 Linux 上保持高度一致的操作逻辑，适合作为 Clash Verge Rev 与 CMFA 的轻量替代。',
    keyFeatures: ['跨四端统一 UI 与订阅同步体验', '规则分流与节点测速响应流畅', 'macOS 同样区分 Apple Silicon 与 Intel 安装包'],
    installSteps: ['从 GitHub Releases 下载对应系统及架构包', '在配置栏填入 Clash 订阅链接', '一键切换规则/全局模式并开启代理'],
    commonPitfalls: ['Linux 用户需根据系统选择 DEB / RPM / AppImage 对应格式。'],
    verifiedAt: '2026-10-19',
    featuredInNav: false,
  },
  {
    slug: 'hiddify',
    name: 'Hiddify',
    aliases: ['Hiddify Next'],
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: '全平台开源多协议客户端，对新手自动选择与多格式订阅兼容友好。',
    coreEngine: 'sing-box',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria 2', 'TUIC', 'SSH'],
    subscriptionFormats: ['sing-box', 'Clash YAML', 'V2Ray Base64'],
    officialSourceLabel: 'GitHub 官方仓库 (hiddify/hiddify-app)',
    officialSourceUrl: 'https://github.com/hiddify/hiddify-app',
    pricingModel: '免费开源',
    summary:
      '基于 sing-box 的跨平台开源客户端，原生同时覆盖五大桌面与移动系统，最大亮点是自动识别多种机场订阅格式并提供自动节点测速选择，新手学习成本低。',
    keyFeatures: ['同时兼容 Clash、V2Ray 与 sing-box 订阅链接', '默认支持自动选点与远程配置', 'iOS/Android/桌面全平台开源免费'],
    installSteps: ['前往 GitHub 或海外区商店安装 Hiddify', '点击「新增配置」粘贴剪贴板订阅链接', '点击中央大按钮开启连接即可'],
    commonPitfalls: ['精细手写复杂策略组规则的场景下，不如 Clash Verge Rev / Quantumult X 灵活。'],
    verifiedAt: '2026-10-19',
    featuredInNav: false,
  },
  {
    slug: 'karing',
    name: 'Karing',
    aliases: ['Karing App'],
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    maintenanceStatus: 'active',
    maintenanceNote: 'sing-box 系跨平台新锐客户端，iOS App Store 与 GitHub 均有提供。',
    coreEngine: 'sing-box',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria 2', 'TUIC'],
    subscriptionFormats: ['Clash', 'sing-box', 'V2Ray', 'Stash'],
    officialSourceLabel: 'GitHub & App Store (KaringX/karing)',
    officialSourceUrl: 'https://github.com/KaringX/karing',
    pricingModel: '免费开源',
    summary:
      '基于 sing-box 的全平台兼容客户端，面向新手简化多订阅融合与分流管理，同时支持 iOS、macOS、Windows、Android 与 Linux，适合不想在不同设备学不同软件的跨平台用户。',
    keyFeatures: ['支持多订阅合并、按地区与关键词自动分组', '支持 Clash/V2Ray/sing-box 混合导入', 'iOS 海外区免费获取'],
    installSteps: ['安装对应平台客户端并选择中文引导', '通过「添加配置」导入机场订阅', '开启分流模式后启动连接'],
    commonPitfalls: ['新手初次使用建议保持默认内置分流规则，勿随意修改底层路由策略。'],
    verifiedAt: '2026-10-19',
    featuredInNav: false,
  },
  {
    slug: 'v2rayng',
    name: 'v2rayNG',
    aliases: ['v2rayNG Android'],
    category: 'third-party',
    platforms: ['Android'],
    maintenanceStatus: 'active',
    maintenanceNote: '安卓端最经典稳定的 Xray 系开源客户端。',
    coreEngine: 'Xray-core',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Socks', 'WireGuard'],
    subscriptionFormats: ['V2Ray Base64', '节点分享 URI'],
    officialSourceLabel: 'GitHub 官方仓库 (2dust/v2rayNG)',
    officialSourceUrl: 'https://github.com/2dust/v2rayNG',
    pricingModel: '免费开源',
    summary:
      'Android 平台最轻巧可靠的 Xray 系协议客户端，适合导入 V2Ray/VLESS 订阅链接和单个节点二维码，资源占用极低，是安卓备用与轻量测试常备软件。',
    keyFeatures: ['极致轻量、稳定性高、兼容老旧安卓机型', '支持真连接延迟测试与绕过局域网/大陆地址路由设置'],
    installSteps: ['从 GitHub Releases 下载 arm64-v8a APK 安装', '点击左上角「订阅分组设置」添加机场 V2Ray 订阅', '返回主页点击右上角「更新订阅」，选节点并点击底部 V 字启动按钮'],
    commonPitfalls: ['不支持直接解析 Clash YAML 订阅，导入前需在机场后台复制「V2Ray/通用」格式链接。'],
    verifiedAt: '2026-10-19',
    featuredInNav: false,
  },
  {
    slug: 'nekobox',
    name: 'NekoBox for Android（含安全警告）',
    aliases: ['NekoBox'],
    category: 'third-party',
    platforms: ['Android'],
    maintenanceStatus: 'caution-verify',
    maintenanceNote: '官方项目已提示维护资源有限，且特别警告不要使用已被第三方控制的 Google Play 版本。',
    coreEngine: 'sing-box',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria 2', 'TUIC'],
    subscriptionFormats: ['V2Ray', 'sing-box', 'Clash Meta 转换'],
    officialSourceLabel: 'GitHub 官方项目（严禁从第三方 Google Play 渠道下载）',
    officialSourceUrl: 'https://github.com/MatsuriDayo/NekoBoxForAndroid',
    pricingModel: '免费开源',
    summary:
      '基于 sing-box 的安卓进阶客户端，协议支持全面，但鉴于原项目维护资源有限且 Google Play 上同名条目存在第三方控制风险，新用户建议优先改用 v2rayNG、FlClash、Hiddify 或 Karing。',
    keyFeatures: ['全协议覆盖与精细路由调试能力'],
    installSteps: ['仅限明确有维护验证能力的用户从官方 GitHub Releases 核验签名后安装，普通用户建议选择 FlClash / Hiddify / v2rayNG。'],
    commonPitfalls: ['切勿在 Google Play 搜索安装第三方控制的 NekoBox 版本！'],
    verifiedAt: '2026-10-19',
    featuredInNav: false,
  },
];

export interface PlatformClientMatrix {
  platform: 'Windows' | 'macOS' | 'Android' | 'iOS' | 'Linux' | 'OpenWrt';
  title: string;
  recommendedClients: string[];
  additionalClients: string[];
  platformTip: string;
}

export const platformMatrices: PlatformClientMatrix[] = [
  {
    platform: 'Windows',
    title: 'Windows 电脑端推荐客户端',
    recommendedClients: ['Clash Verge Rev', 'v2rayN', 'FlClash', 'Hiddify', 'Karing'],
    additionalClients: ['Clash Nyanpasu', 'Clash Mi', 'Mihomo Party（需关注维护状态）'],
    platformTip: 'Windows 下优先推荐 Clash Verge Rev（规则分流友好）或 v2rayN（多核心全协议），注意系统代理与 TUN 模式的区别。',
  },
  {
    platform: 'macOS',
    title: 'macOS 苹果电脑客户端',
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Karing', 'sing-box (SFM)'],
    additionalClients: ['Clash Nyanpasu', 'Hiddify', 'Clash Mi', 'Surge Mac（官网付费）'],
    platformTip: '下载安装包时务必区分 Intel（x64）与 Apple Silicon（M1/M2/M3/M4 的 arm64/aarch64）架构。',
  },
  {
    platform: 'Android',
    title: 'Android 安卓手机客户端',
    recommendedClients: ['v2rayNG', 'FlClash', 'Hiddify', 'Karing', 'Clash Meta for Android'],
    additionalClients: ['sing-box (SFA)', 'Clash Mi', 'NekoBox（维护有限，警惕 Play 商店假冒/第三方接管版）'],
    platformTip: '小白直接用 Hiddify 或 Karing；习惯 Clash 规则可选 FlClash / CMFA；纯 VLESS/V2Ray 订阅首选 v2rayNG。',
  },
  {
    platform: 'iOS',
    title: 'iPhone / iPad (iOS/iPadOS) 客户端',
    recommendedClients: ['Shadowrocket（小火箭，海外区付费）', 'Karing（海外区）', 'sing-box (SFI)'],
    additionalClients: ['Stash（付费）', 'Quantumult X（付费）', 'Surge 5（内购）', 'Hiddify', 'Clash Mi', 'Streisand', 'Potatso', 'OneClick'],
    platformTip: 'Shadowrocket、Stash、Quantumult X 在美区 App Store 均为付费软件，是否上架及实时售价以所用商店地区为准。',
  },
  {
    platform: 'Linux',
    title: 'Linux 桌面与服务器客户端',
    recommendedClients: ['Clash Verge Rev', 'v2rayN', 'FlClash', 'v2rayA（Web 界面透明代理）'],
    additionalClients: ['Clash Nyanpasu', 'Hiddify', 'Karing', 'Clash Mi', 'sing-box'],
    platformTip: 'Linux 页面需核对 DEB、RPM、AppImage 包格式与 x86_64/arm64 架构；无桌面主机或 NAS 推荐 v2rayA。',
  },
  {
    platform: 'OpenWrt',
    title: 'OpenWrt 软路由透明代理方案',
    recommendedClients: ['OpenClash（Mihomo 系）', 'PassWall2（Xray/sing-box）', 'Nikki（需 OpenWrt 24.10+）', 'HomeProxy（sing-box）'],
    additionalClients: ['v2rayA'],
    platformTip: '路由器端安装前必须确认 OpenWrt 固件版本、CPU 架构、包管理器（opkg/apk）与 nftables/firewall4 防火墙依赖。',
  },
];

export function getClientBySlug(slug: string): ClientRecord | undefined {
  return allClients.find((c) => c.slug === slug);
}
