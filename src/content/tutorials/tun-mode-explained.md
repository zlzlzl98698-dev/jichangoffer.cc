---
title: "TUN 模式是什么？一文讲透系统代理与虚拟网卡模式的区别与开启时机"
description: "深入解释为什么打开代理后浏览器能正常访问 Google，而 Git、npm、Python pip、Docker、Cursor 及命令行工具依然连接超时的底层原因；并提供 Windows/macOS 安全启用 TUN 虚拟网卡与防冲突回滚实操。"
primaryKeyword: "TUN 模式"
secondaryKeywords: ["虚拟网卡模式", "终端走代理", "Clash 服务模式", "Git和Docker走代理"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "tun-mode"
parentTopicHref: "/tutorials/tun-mode/"
parentTopicLabel: "TUN 虚拟网卡教程"
contentType: "tutorial"
ctaMode: "task-only"
audience: "发现开启系统代理后浏览器能正常出国、但终端 CLI/代码工具/桌面 App 依然直连卡死或想搞懂何时该用 TUN 模式的开发者与进阶玩家"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "tun-mode"
slugName: "tun-mode-explained"
platforms: ["Windows", "macOS", "Linux"]
prerequisites: ["已安装支持 TUN 内核的现代桌面客户端（Clash Verge Rev / FlClash / v2rayN / Hiddify）", "拥有操作系统的本地管理员安装授权密码"]
difficulty: "常规配置"
relatedBrandSlugs: ["guangsuyun", "yifan", "xingdaomeng"]
answerFirst: "「系统代理 (System Proxy)」只在操作系统里声明了一个应用层 HTTP/SOCKS 端口，只对 Chrome/Edge/Safari 等自觉遵守系统设置的应用生效；像 Git、Python pip、Docker CLI、npm 以及部分不听话的桌面端/游戏客户端默认直接无视该端口直连外网。而 **TUN 模式**会在系统底层的三层网络栈安装一张虚拟 TUN 网卡适配器，强制接管电脑中**几乎所有程序的 TCP、UDP 和 ICMP 数据包**再送入分流规则引擎。日常轻办公开系统代理省心低耗，需要命令行编程或接管不听话应用时打开服务模式并激活 TUN 即可一次性打通。"
sources:
  - "第三方代理客户端.txt（桌面客户端底层隧道与服务模式权限规范）"
  - "Mihomo / sing-box 虚拟网卡路由架构说明"
faqs:
  - question: "平时日常用电脑需要 24 小时一直保持开启 TUN 模式吗？"
    answer: "并不必须，甚至不推荐无脑全天候死开。如果平时仅仅看网页、听音乐和偶尔打开 AI 浏览器页面，普通的 **系统代理 (System Proxy)** 架构最轻巧、功耗和 CPU 占用近乎为零，且几乎不会跟企业办公 VPN 或学校内网发生路由冲突；只有在需要使用终端、VS Code 远程插件、Docker 或部分不读系统端口的桌面客户端时才打开 TUN。"
  - question: "为什么我每次在 Clash Verge Rev 里一点打开 TUN 模式，按钮闪一下就自动跳回关闭状态？"
    answer: "这是未取得虚拟网卡底层驱动挂载权限的典型现象。在 Windows 和 macOS 上生成虚拟三层网卡并修改全局系统默认路由，需要管理员级别后台常驻守护服务。解决：进入软件「设置 → 服务模式 (Service Mode)」旁边的小齿轮图标完成服务安装/授权，然后确保小地球（Service Status）变绿、重启一次程序，再拨动 TUN 开关就不会回弹。"
  - question: "开启 TUN 模式之后发现反而全网完全没网络（连国内百度也打不开）怎么恢复？"
    answer: "多见于以下三种冲突：① 同机还运行着另一款基于虚拟网卡的安全 VPN（如公司内部 Cisco/FortiClient/EasyConnect）或者游戏加速器驱动互咬默认路由；② 使用 Fake-IP 时本地网关出现环路；③ TUN 网卡接管了本地 DNS 但配置项里没开合法国内 DNS。急救步骤：**先立即关闭 TUN 模式开关** → 断开其他 VPN 软件 → 如需双跑仅开系统代理并去 [DNS 与 TUN 排障专题](/tutorials/tun-mode/)核对绕过网段。"
  - question: "我能只靠打开 TUN 模式就让电脑上玩主机/PC 联机游戏 NAT 全变成 FullCone 吗？"
    answer: "只能负责“把原本完全不走系统代理端口的游戏客户端 UDP 包顺利塞进机场节点通道里”，至于最后到底能不能实现 FullCone NAT 取决于两项额外条件：① 客户端与机场配置里把 `udp: true` 打通；② **节点服务器本身的真实协议与机房配置支持 FullCone**（若实测截图本就只给 Unknown，本地 TUN 模式开到天上去也无法凭空变出 FullCone）。"
relatedLinks:
  - label: "TUN 模式专题与断网自救手册"
    href: "/tutorials/tun-mode/"
  - label: "Fake-IP vs Redir-Host：决定 TUN 下解析速度的关键"
    href: "/articles/fake-ip-vs-redir-host-dns-leak/"
  - label: "Clash Verge Rev 服务模式安装指引"
    href: "/tutorials/clash-config/clash-verge-rev-guide/"
  - label: "为什么绝对不能和游戏加速器同时开着 TUN？"
    href: "/articles/vpn-vs-airport-vs-game-accelerator/"
---

## 一、适用范围与技术原理对照

在日常使用桌面端（Windows / macOS / Linux）时，为什么会反复遇到 **“浏览器秒开 Google，可旁边的终端执行 `git clone` 或 `pip install` 却疯狂报连接超时”** 这种分裂现象？答案完全取决于操作系统把“代理流量控制权”放到了网络协议栈的哪一层。

### 系统代理（System Proxy）vs TUN 虚拟网卡全景对照表

| 比较维度 | **系统代理 (System Proxy)** | **TUN 虚拟网卡模式 (Layer-3 Tunnel)** |
|---|---|---|
| **所处网络架构层级** | **应用层 (Layer 7/5)**：只是在系统登记了一行 `127.0.0.1:7897` 本地代理端口号 | **网络层 (Layer 3)**：通过系统底层创建虚拟网口并插入优先级最高的路由表规则 |
| **需要电脑管理员权限吗** | **不需要**，普通权限开箱即用 | **需要**（如 Windows 需运行 `Service Mode`，macOS 需输入开机管理员密码拉起授权核心） |
| **浏览器访问** | 全系（Chrome/Edge/Safari）完美遵守系统设置 | 完美支持（注意**关闭浏览器安全 DNS / DoH** 防绕过规则） |
| **命令行 CLI (Git / curl / npm / Docker / Claude Code)** | **默认全盘无视！** 必须手动繁琐地输入 `export https_proxy=...` 变量 | **零配置原生接管！** 终端软件以为自己直接出了网，流量平滑进入核心分流规则 |
| **各类不认端口的独立桌面客户端** | 经常失灵或连不上登录界面 | **强制拦截接管，几乎全端通吃** |
| **游戏联机 / UDP 流量承载** | 原生 HTTP 端口无法携带纯游戏裸 UDP 数据流 | 配合规则与支持 UDP 的节点可完整转发各类 UDP 协议包 |
| **与企业 VPN / 校园网冲突度** | **极低**，互不干扰网卡层路由表 | **高风险冲突区**：极易跟公司内网 VPN 及游戏加速驱动抢夺默认路由造成断网 |

---

## 二、准备事项：开启 TUN 前必须确认的三条红线

在把那颗 TUN 开关拨过去之前，花 30 秒核对以下三项前置确认，能为你省掉九成断网麻烦：

1. **彻底退出同一电脑上的竞争网卡软件**：如果此刻后台还挂着 **公司企业内网 VPN**、**网易 UU 等游戏加速器** 或 **另一款老版本代理软件**，**先退出它们**。两张虚拟 TUN 网卡在路由表 `0.0.0.0/0` 上同时争夺控制权是系统全盘断网的头号元凶。
2. **确保核心订阅规则里已经配好了合法 DNS 块（如 Fake-IP + 国内公共解析器）**：TUN 接管是三层接管，如果一份极其劣质的纯节点订阅里面连 `dns:` 字段都没配置就强开 TUN，系统虽然接管了一切包却没有地方做域名解析，往往立刻变砖断网！市面上现代主流第三方订阅（如光速云、星岛梦、一翻云、唯兔云等）以及 Clash Verge Rev 默认增强模版均已自带合法 `dns` 段。
3. **如果你刚好身处“刚连上需要弹网页登录密码的校园网/酒店 Wi-Fi”**：先别开 TUN，等网页把认证账号密码交过去、拿到能上国内网的状态后，再按以下步骤启动它。

---

## 三、手把手实操配置：4 步安全部署 TUN 虚拟网卡

以当前桌面生态最为标准通用的 **Clash Verge Rev** 为操作示范（FlClash 与新版 v2rayN 原理与步骤完全一致，均分「提权安装服务模式 → 开启 TUN」两步）：

### 第 1 步：提权安装并启动「服务模式 (Service Mode)」
1. 打开 **Clash Verge Rev**，进入左侧 **「设置 (Settings)」** 页面；
2. 向下找到 **「Clash 设置」**（或系统控制面板栏）中的 **`服务模式 (Service Mode)`**；
3. 点击旁边的小齿轮图标，在弹出框中点击 **`安装 (Install Service)`**：
   - Windows 弹出 UAC 用户账户控制提示，点击 **`是 (Allow)`**；
   - macOS 会跳出原生系统密码框，输入你的开机锁屏登录密码授权；
   - 正常装好后可以看到 `Service Mode` 右侧标志变绿/亮起，显示已激活（部分老系统提示重启软件生效，直接右键系统托盘彻底退出程序后重开一遍确保稳固）。

### 第 2 步：正确打开并微调 TUN 核心参数（防止断流关键）
不要只开开关不动里面的堆栈选择：在 **`服务模式`** 上下方，点击 **`TUN 模式`** 旁边的小设置齿轮进到内部参数区核对三项：
- **协议栈 (`Stack`)**：
  - Windows 与 macOS 首选推荐 **`Mixed`（混合栈，兼顾 TCP 高兼容性能与系统 UDP 高吞吐）** 或 **`System`**；如果某些老电脑驱动报兼容性错，再尝试切换至 **`gVisor`**。
- **自动设置路由 (`Auto Route`)**：保持 **开启**。
- **严格路由 (`Strict Route`)**：如你电脑同时要用本地局域网虚拟机、Docker Desktop 容器通信或需要连家里 NAS 共享文件夹，建议看情况决定——若开了“严格路由”后发现局域网连不上内网设备/虚拟机失联，将其**关闭**通常就能立马恢复局域网通信，同时不影响外网走 TUN！
- **自动检测接口 (`Auto Detect Interface`)**：保持 **开启**（让引擎自动咬住你当前正在用有线还是 Wi-Fi 网卡）。

### 第 3 步：拨亮「TUN 模式」总开关（可同时关闭系统代理）
1. 回到 **「设置」** 面板，点击开启 **`TUN 模式`** 开关；
2. 观察到此时你甚至可以把上面的 **`系统代理 (System Proxy)`** 开关关掉——因为 TUN 处于更底层，无论开不开应用层的系统代理，全部网页与终端流量都已经统一进入了 TUN 虚拟网卡管辖中；当然同时留着一般也不会出错。

### 第 4 步：确保配置自带国内防环路及私网跳过列表
如果使用了自定义覆写 YAML 或自写配置，务必检查配置文件顶层或者 DNS 栏确认未漏掉诸如 `192.168.0.0/16`、`10.0.0.0/8` 等 `skip` 段；Clash Verge Rev 默认内部自动处理了防自身流量二次套娃回环（`auto-route` + 本地接口绑定排除）。

---

## 四、成功验证：两招看穿终端到底走没走进来

1. **打开系统原生命令行终端验证**：
   - 在完全**没有输入过**任何 `export http_proxy=...` 或 `git config http.proxy` 变量的新干净 Terminal / PowerShell 窗口中执行一条测试抓取或仓库拉取命令（例如检测 `curl -I https://www.google.com` 看 HTTP 状态码，或在工程目录下运行 `git fetch`）；
   - **同时盯着 Clash Verge Rev 左侧「连接 (Connections)」面板**：如果看到列表里跳出了 `curl` / `git-remote-https` 发起的对 Google / GitHub 访问记录，并稳稳挂着 `香港 01` 或你的目标策略节点，**证明 TUN 虚拟网卡已经成功无感接管系统全层流量**！
2. **确认没影响国内应用或本地局域网**：
   - 顺手测试一下打开路由器后台网址（比如 `192.168.1.1`）以及打开国内微信和网页测速，保证全部秒响走 `DIRECT`（不滞后且不消耗月费流量包）。

---

## 五、出现异常与紧急恢复手段（退路清单）

万一打开 TUN 之后瞬间遇到特定软件发疯或所有网页无法连接，一分钟即可安全撤回，绝不伤及原系统：

| 突发故障状况 | 快速诊断归因 | 一键退回与解救方法 |
|---|---|---|
| **开完 TUN 之后所有网站死活打不开，报 `ERR_NAME_NOT_RESOLVED` 等 DNS 错误** | DNS 没能成功伴随 TUN 启动劫持、或公司内网强制劫持 53 端口冲突 | 立即关回 TUN 模式只用「系统代理」保联网；再到设置检查配置文件是否存在规范 `dns:` 段，或关闭浏览器“安全 DNS (DoH)” |
| **开发时连 Docker 本地容器 / 局域网 NAS IP（如 192.168.x.x）突然断连** | `strict-route（严格路由）` 或 DNS 劫持把部分内网段一起锁死进了虚拟网卡 | 进 TUN 详情设置页**取消勾选 `严格路由 (Strict Route)`**；并在规则确认 `IP-CIDR,192.168.0.0/16,DIRECT` 处于最高位置 |
| **关了整个软件退出后，突然整个系统直接死机断网** | 极少数情况内核进程异常卡死，造成虚拟适配器残留路由表未被注销 | 重新启动一次 Clash Verge Rev（让它再接管恢复控制权），然后点击软件内 **显式关闭「TUN 模式」开关** 再正常退出软件；或者直接重启一次电脑即可自动冲刷干净所有临时系统路由 |
| **明明是付费机场，开启 TUN 后发现 200GB 流量半天少了一大截！** | 因为 TUN 把电脑后台所有静默下载更新全接管了！如果有未写进直连清单的网盘、系统大更新、甚至后台偷偷下载的游戏大包走了默认 `MATCH -> 代理`，流量直接泄洪 | 平时**非必要不开全局大包围 TUN**；打开「连接」查看高耗流量的国内大软件进程名字/IP，把不需出国的下载工具或对应域加入 `DIRECT` 白名单 |
