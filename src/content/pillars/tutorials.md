---
title: "2026 客户端使用教程全集：订阅导入、分流规则与 TUN 模式"
description: "按真实操作任务拆分的零基础实操手册：涵盖客户端正版安装、订阅链接导入与转换、Clash 覆写分流规则、TUN 虚拟网卡开启及全平台系统入门。"
h1: "代理使用教程全集：从下载软件、导入订阅到设置分流与 TUN 模式怎么操作？"
primaryKeyword: "机场使用教程"
secondaryKeywords: ["机场订阅教程", "Clash 配置", "分流规则", "TUN 模式", "客户端安装", "Shadowrocket 教程"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "tutorials-pillar"
pillarId: "tutorials"
targetRoute: "/tutorials/"
layoutMode: "step-by-step-task"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "第一次把机场服务在电脑或手机上顺利跑通，只需要连续做好 4 个极简动作：① 从 GitHub 官方仓库或非国区 App Store 获取匹配设备 CPU 架构的正版客户端（Windows/macOS 推荐 Clash Verge Rev 或 v2rayN，iOS 推荐 Shadowrocket 或免费替代品 Karing/SFI，Android 推荐 FlClash 或 Clash Meta for Android）；② 从已购买品牌的管理后台复制“一键导入 / Clash 订阅链接”粘贴至客户端“订阅（Profiles）”栏刷新并选中；③ 打开“系统代理（System Proxy）”，在“代理（Proxies）”页选定一条可通延迟节点；④ 如需玩终端 CLI（git/npm/curl）、游戏或让特定桌面客户端也走代理，再补装服务模式开启“TUN 虚拟网卡”。需要让 ChatGPT 和 Gemini 固定走新加坡、淘宝微信走国内直连的进阶需求，直接套用一段几行代码的 Mihomo 全局覆写规则即可永久自动化生效。"
entityChain:
  - "第 1 步：选定平台正版客户端（Clash Verge Rev / v2rayN / Shadowrocket / CMFA / SFI）"
  - "第 2 步：获取机场后台订阅与格式适配（Clash YAML / Base64 / sing-box）"
  - "第 3 步：建立通道与验证流量（系统代理 vs TUN 虚拟网卡模式）"
  - "第 4 步：高级精细分流与覆写（Rule 模式 + AI 固定新加坡/日本策略组）"
  - "第 5 步：定期运维与排障（定时更新订阅、关闭前复位代理开关）"
recommendedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu", "feimao", "tiziyun"]
crossPillarLinks:
  - label: "全平台代理客户端软件与官方文档入口"
    href: "/clients/"
    reason: "按 Windows / macOS / Android / iOS / Linux / OpenWrt 找准正版仓库再下载安装"
  - label: "连接报错与异常快速排障手册"
    href: "/troubleshooting/"
    reason: "若订阅刷新超时、系统代理冲突断网或 TUN 内核权限报错，直接按症状排查"
  - label: "全站支持第三方通用订阅的品牌筛选"
    href: "/brands/"
    reason: "确认拟购机场支持输出标准订阅地址而非闭源专属客户端后再上手配置"
  - label: "AI 工具专项规则与解锁条件"
    href: "/ai-streaming/"
    reason: "理解为什么要为 OpenAI、Claude 和 Gemini 独立建立非香港路由策略组"
sources:
  - "教程库：clash-verge-rev-guide.md / shadowrocket-ios-setup.md / tun-mode-explained.md"
  - "教程库：clash-verge-override-ai-routing.md / ios-free-sfi-karing-guide.md / shadowrocket-remote-config-sync.md"
  - "第三方代理客户端.txt（11 款客户端架构及官方渠道说明）"
dataGapNotes:
  - "部分支持自研专属客户端的机场（如 SOGO 云、Firefly 等仅独占端品牌）由官方客户端直接接管登录过程，不适用本专题中提到的通用 Clash YAML / Shadowrocket 订阅粘贴教程。"
faqs:
  - question: "我已经买好了机场，在后台看到“一键导入 Clash”、“复制订阅链接”和“V2Ray 订阅”好几个按钮，应该点哪一个？"
    answer: "按你电脑或手机装好的软件匹配：如果你装的是 Clash Verge Rev、FlClash、Clash Meta for Android 或 OpenClash，直接点击「一键导入 Clash」或复制「Clash 订阅链接」；如果你装的是 iOS Shadowrocket（小火箭），点击「导入 Shadowrocket / 复制通用订阅」即可；如果你使用的是 v2rayN 或 v2rayNG，通常点击复制普通 V2Ray (Base64) 订阅或直接在 v2rayN 新版中也支持 Clash / sing-box 格式导入。"
  - question: "什么是“订阅链接”？为什么每次机场更新节点列表我都不用手动改密码？"
    answer: "订阅链接本质上是一个包含你个人身份令牌（Token）的专用静态配置网址（URL）。客户端定期访问这个 URL 就能自动拉取最新的一整套节点服务器地址、端口、加密密码以及预置规则文件。务必妥善保管订阅链接不要发给陌生人或截图露出来——谁拿到了你带 Token 的订阅地址，就能直接消耗你的套餐流量。"
  - question: "“规则模式 (Rule)”、“全局模式 (Global)”和“直连模式 (Direct)”平时怎么切才正确？"
    answer: "95% 的日常使用时间请永远保持在 **Rule（规则模式）** 下。在该模式下，客户端会自动查表把微信、百度、阿里系国内流量直接留在本地宽带直连（完全不扣机场流量也不拖慢速度），只把需要跨境的网站发往海外节点；只有遇到极其冷门小众且尚未被规则收录的网站加载不全时，才临时切一下 Global（全局）验证是否因漏规则导致，用完再切回 Rule。"
  - question: "开启了“系统代理”之后浏览器上外网没问题，为什么 Terminal/CMD 命令行里的 git clone、pip、curl 或 Docker 还是连不上甚至超时？"
    answer: "这是桌面端最经典的误区。“系统代理”仅在操作系统注册表写入本地代理端口，Chrome 等常规浏览器会主动去读这个系统设定，但命令行终端、WSL 子系统、某些游戏或底层 UWP 软件根本不读系统代理设置。解决办法非常简单：在 Clash Verge Rev 的设置页先点击「安装服务模式（Service Mode）」，随后把开关从单纯系统代理升级为开启 **TUN 模式**（此时会在系统安装一张虚拟网卡，无视应用是否读设置直接全流量接管并照常执行 Rule 国内外分流）。"
  - question: "macOS 关闭或卸载客户端前有什么必须先做的事？否则会发生什么？"
    answer: "在 Mac 上彻底退出（Quit）或删除客户端前，**一定要先在客户端里手动关掉“系统代理”开关和“TUN 模式”**。否则 macOS 系统网络偏好设置里的 HTTP/HTTPS/SOCKS 代理指向依然残留在 `127.0.0.1:7897` 等本地端口上，软件关掉了没人监听这个端口，结果会导致你的 Safari、微信连国内百度都打不开、彻底假死断网。"
  - question: "不想每次机场同步订阅覆盖掉我自己写的“ChatGPT 走新加坡、日常走香港”规则怎么办？"
    answer: "千万不要去直接改客户端下载下来的那份原始 YAML 文件（下次点“更新订阅”就会被机场远端文件全部冲掉覆盖）！正确的工程方法是在 Clash Verge Rev 里右键该订阅选择「编辑全局扩展配置 / 覆写脚本（Merge / Script）」或者写入全局 `Global Extend Script`，这样每次机场远程增删新节点时，你的自定义 AI 路由组都会自动重新叠加上去，一劳永逸。"
  - question: "iOS 苹果手机端用小火箭（Shadowrocket），如何同步到类似桌面端的分流规则防止国内网慢？"
    answer: "小火箭默认初始规则非常简陋，直接挂“配置 -> 全局路由 -> 代理”会把国内所有网都绕一圈极度耗电。你可以参考本站教程 [Shadowrocket 远程分流配置同步指南](/tutorials/client-install/shadowrocket-remote-config-sync/)，直接导入标准高可信远程分流配置（比如主流开源规则如 ACL4SSR 的远程模块），并切回“配置”模式即可自动分流国内直连与海外代理，以及针对 OpenAI/Netflix 分组选节点。"
  - question: "如果遇到“仅专属客户端（不支持第三方订阅）”的机场品牌，本页面的教程还适用吗？"
    answer: "不适用订阅粘贴步骤。例如数据库中收录的 SOGO 云、Firefly、白月光等品牌，直接官网登录下载自家 App（一键客户端），软件内部自己拉取配置连线即可；如果是光速云、飞猫云、梯子云这种“双支持”品牌，既可用它们自研一键端懒人直连，也可以拷贝后台 Clash/通用订阅链接照着本页面教程导入开源客户端自定义分流。"
---

## 一、全平台跑通的 4 步通用标准化路线图（Zero to Working）

不管是刚买回电脑的新手，还是换了新手机的老用户，所有基于第三方通用代理客户端的上网动作，拆到底层只有严谨的 4 步。只要一步接一步执行、不跳步，绝大多数“点半天不通”的低级折腾都能直接消除：

```text
[Step 1] 找准官方仓库获取正版客户端  ──▶  [Step 2] 复制机场订阅并点刷新加载配置
                                                       │
[Step 4] 进阶按需开启 TUN / 覆写规则    ◀──  [Step 3] 切「规则模式(Rule)」并开系统代理
```

### 第 1 步：去对地方安装匹配设备架构的正版软件

千万不要直接在中文通用搜索引擎前几条广告里点“Clash 中文高速下载”。请依据你手中的操作系统，对应前往本站已核验过仓库地址的 [代理客户端软件中心](/clients/) 下载，或对照下表直奔专题教程：

- **Windows 10 / 11 与 macOS 桌面主机**：主力首推 **[Clash Verge Rev](/tutorials/clash-config/clash-verge-rev-guide/)**（现代 UI + 内置 Mihomo 内核 + 方便设 AI 覆写规则）；技术极客与兼顾单条 VLESS/Xray 节点者可选 **[v2rayN](/clients/v2rayn/)**。安装前请核实 CPU 架构：Win 一般选 `x64`（极少数骁龙笔记本选 `arm64`）；Mac 请在左上角“关于本机”看清是 **Apple 芯片（下载 `aarch64/arm64`）** 还是旧款 **Intel 芯片（下载 `x64`）**。
- **Android 安卓手机/平板**：主力安装 **[Clash Meta for Android](/clients/clash-meta/)** 或 **[FlClash](/clients/flclash/)**；偏爱传统小巧省电与单线管理用 **[v2rayNG](/clients/v2rayng/)**。APK 架构通常一律选 `arm64-v8a`（切莫下成老款 `armeabi-v7a`）。
- **iOS iPhone / iPad**：首选非国区 App Store 买断 $2.99 的 **[Shadowrocket（小火箭）](/tutorials/client-install/shadowrocket-ios-setup/)**；不想产生这 $2.99 美金支出的用户，可直接在非国区商店免费下载 **[Karing](/clients/karing/)** 或官方 **[SFI (sing-box)](/tutorials/subscription/ios-free-sfi-karing-guide/)**。
- **OpenWrt 家庭软路由**：需要给客厅电视、Apple TV 与全部终端无感共享网络，见 [OpenWrt 代理插件选择指南](/articles/openwrt-proxy-guide/) 与 [Nikki vs OpenClash 实操对比](/articles/openwrt-nikki-vs-openclash/)。

### 第 2 步：正确导入订阅，避免“订阅转换乱码”与报错

购买并开通机场套餐后（如何选择见 [机场推荐专题](/jichang/) 或查品牌是否支持通用客户端见 [32 家品牌筛查表](/brands/)），登录机场官网后台仪表盘：
1. 在桌面或手机上优先找带有 **「一键导入 Clash」** 或 **「复制订阅地址」** 字样的区域；
2. 把复制出来的 `https://...` URL 粘贴进客户端顶部（如 Clash Verge Rev 左侧菜单「订阅 Profiles」的输入框），点右边「导入」按钮。正常网络下 1–3 秒后会刷出一张包含流量剩余进度条、套餐到期日的新配置卡片，**务必点击选中这张卡片让左侧亮起提示条激活它**；
3. 如果粘贴订阅一直报错 `Failed to fetch`、`EOF` 或拉取空白，请勿狂点刷新，直接移步专项教程 [订阅拉取失败自救排查全流程](/tutorials/subscription/subscription-troubleshooting/)（常见元凶是此前别的软件残留系统代理，或者当地宽带 DNS 污染拦截了订阅默认域名）。

### 第 3 步：打开“系统代理”并确认处于 `Rule（规则模式）`

导入并激活订阅卡片之后，软件其实还没有接管你电脑/手机的网络请求，需要最后临门两脚：
1. 切换到客户端的「代理（Proxies）」页面，在第一栏核心策略组（通常叫 `🚀 节点选择`、`Proxy` 或 `自动选择`）点击右上角的**小闪电 / 测速按钮**，验证各地区节点有没有出现 `45ms`、`120ms` 之类的绿色延迟数值（如果全红 `Timeout`，请检查本机系统时间误差是否超过了 60 秒！）；
2. **明确切在 `Rule（规则模式）` 选项卡**，切忌长期挂在 `Global（全局）` 下；
3. 回到客户端「设置（Settings）」，拨动打开 **「系统代理（System Proxy）」** 开关（Android 与 iOS 则在主界面点大号开关按钮并允许建立系统 VPN 连接授权）。此刻打开 Chrome 或 Safari 输入 Google，即刻完成通网。

### 第 4 步：进阶刚需必看——何时开 TUN 模式、如何锁死 AI 分流地区

| 进阶场景需求 | 你现在遇到的问题 | 立刻执行的正确进阶教程步骤 |
| :--- | :--- | :--- |
| **终端/游戏/桌面 App 不走代理** | 浏览器能翻墙，但终端里的 `git`、`curl`、`pip`、Docker、Antigravity/VS Code 扩展全部报错连接超时 | 在软件内安装服务模式并打开 **TUN 模式**（详情查看教程：[TUN 模式原理、服务安装与进程接管全解析](/tutorials/tun-mode/tun-mode-explained/)） |
| **香港日常丝滑但 AI 总报错不支持** | 香港节点刷网页飞快，切完新加坡又能用 ChatGPT/Claude/Gemini，每天手动切换快被烦死 | 在客户端安装一份固定 15 行的 **全局扩展覆写规则**（手把手抄作业教程：[Clash Verge Rev 自动锁定 AI 地区覆写规则](/tutorials/routing-rules/clash-verge-override-ai-routing/)） |
| **iPhone 打开小火箭国区网页转圈** | 手机一打开 Shadowrocket 连国外很快，但打开淘宝、高德地图却卡半天、甚至流量飞速见底 | 更换全局路由模式并导入开源分流远程配置（步骤教程：[Shadowrocket 远程分流配置文件同步与规则调试](/tutorials/client-install/shadowrocket-remote-config-sync/)） |
| **浏览器打不开 AI 提示定位仍在国内** | 客户端分明明明切去了美国/新加坡，浏览器照样弹窗不支持当前地区 | 清除站点历史 Cookies，检查客户端是否触发 **Fake-IP vs Redir-Host** 与浏览器 HTTP/3 泄漏（详阅：[Fake-IP 与 DNS 泄漏底层原理](/articles/fake-ip-vs-redir-host-dns-leak/)） |

---

## 二、常见日常维护习惯：这 4 件事养成习惯少出 90% 故障

1. **退出软件先关开关**：养成习惯，要右键退出桌面端或卸载重装软件之前，先点关闭「系统代理」与「TUN 模式」开关再点 Quit。Mac 和 Windows 端口残留是新手“突然彻底断网”的头号原因。
2. **不要把“系统代理”和“其他 VPN / 游戏加速器”同时打开**：在同一台机器上，代理软件的虚拟网卡驱动和网易 UU / 雷神 / 奇游等加速器驱动互相冲突概率高达 90%。要玩外服联机游戏先退出或关闭代理软件，玩完再开回来。
3. **订阅地址不要轻易分享、截图发群**：机场后台的“订阅 URL”就是你的唯一流量账号钥匙串。一旦图省事截了一张带有完整 `token=` 字符的屏幕截图发去群里求排查，别人拿去直接就能导入消耗光你的月包甚至恶意并发顶掉账号风控限制。如不慎泄漏，第一时间进机场官网点 **「重置订阅链接」** 即可立刻作废旧链，重新导入新链即可。
4. **保持每月手动更新 1 次订阅（或开自动更新）**：机场后台会依据跨境骨干状态悄悄停用老化 IP、上线新的专线节点。建议在 Clash Verge Rev 订阅卡设定里把自动更新间隔保持在 `1440 分钟（24 小时）` 左右，确保节点目录常新不掉队。
