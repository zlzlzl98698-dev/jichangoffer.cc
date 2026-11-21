---
title: "Clash Verge Rev 新手安装与订阅导入完整教程（Windows / macOS / Linux）"
description: "手把手教你从官方 GitHub Releases 安全下载正版 Clash Verge Rev，按 x64/Apple Silicon 准确选包安装、导入第三方机场订阅、启用规则模式并完成测速与验证。"
primaryKeyword: "Clash Verge Rev 使用教程"
secondaryKeywords: ["Clash Verge Rev 下载", "Clash 订阅导入", "Mihomo 客户端配置", "Windows安装Clash"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "clash-config"
parentTopicHref: "/tutorials/clash-config/"
parentTopicLabel: "Clash 配置指南"
contentType: "tutorial"
ctaMode: "task-only"
audience: "准备在 Windows、Mac 或 Linux 电脑端安装开源代理客户端并完成首次联网的零基础用户"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "clash-config"
slugName: "clash-verge-rev-guide"
platforms: ["Windows", "macOS", "Linux"]
prerequisites: ["已购买明确支持 Clash / Mihomo 第三方通用订阅的机场账号", "Windows 10/11 需保证电脑具备微软 WebView2 环境"]
difficulty: "新手入门"
relatedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu"]
answerFirst: "原版 Clash for Windows 已停更且存在已知旧安全缺陷，目前桌面端替代接班主流是内置 Mihomo 内核的开源客户端 **Clash Verge Rev**。标准新手部署只需 4 步：从唯一官方 GitHub Releases 仓库 (`clash-verge-rev/clash-verge-rev`) 核对处理器架构后下载安装 → 登录机场后台复制标准 **Clash 订阅 URL** → 在软件「订阅」栏粘贴点击导入并激活配置文件 → 切到「设置」把 **系统代理 (System Proxy)** 开关拨亮，确认底部运行模式为「规则 (Rule)」即可联网。"
sources:
  - "第三方代理客户端.txt（2026-10-19 全平台官方源验证）"
  - "Clash Verge Rev 与 Mihomo 官方项目发布构架对照说明"
faqs:
  - question: "苹果 M 系列芯片 Mac 和旧款 Intel Mac 如果选错了安装包会有什么现象？"
    answer: "苹果 M1 / M2 / M3 / M4 芯片必须下载带有 `aarch64.dmg` 字样的原生安装包；只有较老的 Intel 芯片 Mac 才选 `x64.dmg`。如果 M 系列电脑强行运行 x64 转译包，极易发生内存无端暴涨、发热以及安装「服务模式」触发异常失败。"
  - question: "打开搜索引擎排第一的“Clash Verge 中文官网下载站”能下载吗？"
    answer: "绝对禁止！目前百度、必应甚至部分广告站搜出来的所谓“Clash 中文网 / 极速下载站”充斥着打包植入恶意木马、窃取剪贴板加密货币地址或捆绑垃圾流氓软件的假包。正版只有 GitHub 官方开源仓库或正规机场官网面板内明确提供校验哈希的镜像入口。"
  - question: "为什么把机场复制来的订阅地址粘到输入框点击导入时，一直提示 Error 或没有出现节点卡片？"
    answer: "常见有三类原因：① 你买的可能是**纯专属客户端机场**（如飞猫云、SOGO 云、Firefly 等不提供第三方订阅 URL），只能用它们自己的官方客户端登录；② 从机场复制时错复制成 `V2Ray Base64` 节点链而不是 `Clash` 格式链接（一般机场后台有多个复制按钮，或带参数 `&flag=clash`）；③ 本身电脑已开启某个旧失效代理，占用了本地环回端口导致下载拉取订阅失败（关掉所有代理开关再点一次导入）。"
  - question: "每次电脑开机都要手动重新点击一次开启“系统代理”吗？"
    answer: "不需要。安装稳定后进入 Clash Verge Rev 左侧「设置」，同时勾选 **「开机自启 (Auto Launch)」** 和 **「静默启动 (Silent Start)」**（如常用系统代理，退出前未主动关闭它一般会自动保持开启状态）。"
relatedLinks:
  - label: "Clash Verge Rev 详细档案与芯片下载地址说明"
    href: "/clients/clash-verge-rev/"
  - label: "TUN 虚拟网卡开启实战（解决命令行/终端不走代理）"
    href: "/tutorials/tun-mode/tun-mode-explained/"
  - label: "机场订阅导入失败 5 种高频报错修复"
    href: "/troubleshooting/subscription-failed/"
  - label: "给 AI 工具配独立新加坡分流规则"
    href: "/tutorials/routing-rules/clash-verge-override-ai-routing/"
---

## 一、适用系统与安全下载选包指南

**Clash Verge Rev** 是基于 Tauri 框架与现代 **Mihomo（Clash.Meta）** 内核打造的新一代开源多平台桌面端。相比早年已停止维护的老版本 Clash for Windows / ClashX，它完整兼容 **VLESS-Reality、Hysteria 2、TUIC、Trojan 与 Shadowsocks** 等当代主流协议，内存占用更紧凑且持续跟进安全更新。

### 唯一正版下载原则与 CPU 架构选包对照表
- **官方来源**：GitHub `clash-verge-rev/clash-verge-rev` Releases 页面（切勿随便点第三方搜索引擎推广站、高速下载器）。
- **如果电脑还完全没法连 GitHub 怎么办？** 可在购买支持自研+双支持的品牌（如光速云等）或找已有网络的朋友从正规 GitHub 下载离线安装包校验后拷贝到 U 盘，切勿冒险去国内网盘随机搜索压缩包。

| 你的电脑操作系统 | 常见 CPU 处理器 | 正确对应的安装包后缀 | 新手首次安装关键提示 |
|---|---|---|---|
| **Windows 10 / 11** | 主流 Intel / AMD (64位) | **`..._x64-setup.exe`** | 安装完成首次双击如报缺少 `WebView2`，按弹窗引导从微软官方补装轻量运行库即可（极少部分精简系统需注意） |
| **Windows 11 ARM** | 骁龙 ARM 芯片笔记本 | `..._arm64-setup.exe` | 切勿误下 x64，性能折损大 |
| **macOS** | Apple Silicon (**M1/M2/M3/M4**) | **`..._aarch64.dmg`** | 下载完拖入「应用程序」首次打开如提示无法验证开发者，进「系统设置 → 隐私与安全性」点「仍要打开」 |
| **macOS** | 老款 Intel Mac 笔记本/iMac | **`..._x64.dmg`** | 安装前若装过老款 ClashX，先彻底关闭并清空系统网口残留代理 |
| **Linux 桌面** | Ubuntu / Debian / Arch (x86_64) | `.deb` / `.rpm` / `.AppImage` | 安装后记得从设置补装授权以支撑系统代理及 TUN 权限 |

---

## 二、准备事项：安装与导入前必须核对的 3 件小事

1. **退出并卸载冲突旧版代理软件**：电脑上绝不允许同时运行两款代理软件（例如同时开着老版 Clash for Windows、v2rayN 或某款游戏加速器），否则 7890/7897 本地端口与系统路由必定互抢报错。
2. **确认操作系统时间准确无误**：右击桌面右下角时间（Mac 右上角），保证与北京时间同步（误差不要超过 60 秒！否则任何 HTTPS 节点和 TLS 订阅连接都会莫名其妙超时失败）。
3. **拿到正确的机场订阅链接**：登录你购买的机场官方网站后台用户中心（注意选择“**导入 Clash / 一键导入 Clash Verge**”对应的链接，不要复制成 V2Ray/Shadowrocket 链接）。*注：若你选购的是仅提供官方专属一键登录软件的品牌（如飞猫云、SOGO 云、Firefly），请直接使用其品牌专属桌面端，不必往下看通用订阅导入步骤。*

---

## 三、手把手实操配置 5 步走

### 第 1 步：安装软件并切换中文界面
1. 双击运行对应平台的安装包（Windows 建议以普通用户按默认路径安装即可，不用硬装进 `System32` 等极端权限路径）；
2. 启动后左侧边栏找到最下方的齿轮图标 **Settings（设置）**；
3. 在 **Clash Verge / 界面设置** 区域将 `Language` 下拉选中 **`简体中文`**，整个操作界面立即变成清晰中文。

### 第 2 步：把机场订阅网址导入软件中
1. 点击左侧栏 **「订阅 (Profiles)」**；
2. 在顶部最显眼的网址输入框里粘贴刚才从机场面板复制出来的 **Clash 订阅 URL**（通常以 `https://` 开头）；
3. 点击右侧 **`导入 (Import)`** 按钮；
4. 稍等 1–3 秒，下方列表会出现一张带有你的机场名字、剩余流量进度条和到期时间的配置卡片 → **务必用鼠标左键点一下这张新卡片（看到卡片出现明显高亮边框或左侧绿条代表“已选中激活”）**！很多人导入完毕忘了选中那一张卡，一直停留在默认的空白模板上自然连不上网。

*(注：在机场面板网页直接点“一键导入 Clash”按钮有时会拉起电脑弹窗确认打开 Clash Verge Rev，效果相同；如被浏览器拦截，用手工复制粘贴 URL 最稳。)*

### 第 3 步：测试节点延迟与手动选一条绿灯线路
1. 切换到左侧 **「代理 (Proxies)」** 页面；
2. 观察页面最上方确认工作模式处于 **`规则 (Rule)`**（这是核心！**千万不要无脑选「全局 Global」**，否则微信、百度、B 站与腾讯会议全都绕去海外再回来，既慢得要死又狂烧你买来的宝贵套餐流量）；
3. 往下看到几个策略大组（常见叫 `节点选择` / `Proxy` 或带有小火箭图标的主组）：
   - 点击策略组右侧那个 **小闪电图标 ⚡** 进行全组连通延迟测试；
   - 稍候 2 秒，各个地区节点右侧会冒出绿色数字（如 `35 ms`、`68 ms`）；
   - 点击任意一个延迟健康的节点（例如日常网页选 **香港 01**，如果需要使用 ChatGPT/Gemini 请参照 [AI 分流覆写教程](/tutorials/routing-rules/clash-verge-override-ai-routing/) 或选 **新加坡/日本**）。

### 第 4 步：真正把网连上——打开“系统代理”开关
不少新手前三步做完发现测试延迟全绿，激动地打开 Chrome 访问 Google 却转圈打不开——十有八九忘了第四步：
1. 点击左侧边栏 **「设置 (Settings)」**；
2. 在最靠前的核心开关组里，把 **「系统代理 (System Proxy)」** 后面的按钮拨到打开亮起状态！
3. *新手提示*：此时不需要盲目勾选下面的「TUN 模式」，日常先用稳定的系统代理把网页打通，确认需要写代码终端走代理时再按需学习开启 [TUN 模式指南](/tutorials/tun-mode/tun-mode-explained/)。

### 第 5 步：设定自动更新定时（保持节点列表常新）
1. 回到 **「订阅」** 页面，鼠标右键点击你的那张机场订阅卡 → 选择 **「设置 / 编辑信息」**；
2. 检查 **「更新间隔 (Update Interval)」**（推荐填 `1440` 分钟，即每 24 小时自动检查刷新一次节点列表，避免机场更换服务器 IP 后本地不知情失联）。

---

## 四、成功验证：确认 3 项指标才算真正配置完毕

1. **海外主流站与国内主流站分别验证**：
   - 打开浏览器访问 `youtube.com` 或 `google.com`，应在 1–2 秒内清爽弹出网页；
   - 同时打开国内站如 `baidu.com` 或 `bilibili.com` 播一段视频，观察左侧「连接 (Connections)」或机场官网已用流量统计——确认国内站命中 **`DIRECT`**，完全不扣你的跨境配额。
2. **系统右下角托盘检查**：确认系统托盘（或 Mac 顶部菜单栏）出现 Clash 小图标，下次需临时彻底停用代理时，右键点击图标取消勾选系统代理即可一键恢复本地纯直连。

---

## 五、新手最易踩的 5 个报错排查直通车

| 常见故障报错现象 | 最大可能性原因 | 快速急救指令 |
|---|---|---|
| **导入时提示 `Connection refused` / `tcp connect error`** | 你之前打开过“系统代理”，目前没有有效节点能通，系统又试图通过死掉的旧代理去请求订阅网址 | 先去「设置」把「系统代理」彻底关掉，再回来点「导入」 |
| **所有节点测速全是蓝色/红色 `Timeout`（超时）** | ① 电脑本地时间不准（超 60 秒）；② 本地宿舍/公司网关屏蔽端口；③ 机场订阅本身失效 | 对时 → 切手机热点一试便知，详细按[全节点超时排查手册](/tutorials/subscription/subscription-troubleshooting/)走 5 步检查 |
| **测试延迟全是绿灯，但浏览器还是完全打不开 Google** | 忘了打开「设置 → 系统代理」、或浏览器装有强行接管代理的老插件（如 SwitchyOmega 冲突设为无效端口） | 打开系统代理开关，并禁用浏览器里多余老旧代理插件，选回“使用系统代理” |
| **系统代理每隔几小时就会自己突然被取消变灰** | 同电脑上的某些国内管家软件、或某些 VPN 助手/系统安全组件定时刷新覆盖系统注册表 Proxy 键值 | 排查退出第三方杀毒管家或同时运行的其他加速客户端 |
| **打开某大型桌面端软件（如 git clone、Docker）还是超时** | 命令行工具与不少桌面客户端默认直接忽视系统的 HTTP 代理设置 | 需要安装服务模式后打开 **TUN 虚拟网卡**，详细查看[TUN 模式完整操作步骤](/tutorials/tun-mode/tun-mode-explained/) |
