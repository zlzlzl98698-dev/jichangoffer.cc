---
title: "2026 TUN 模式详解：虚拟网卡接管原理、服务模式安装与终端/UWP/游戏不走代理修复"
description: "彻底讲懂 Clash TUN 模式（虚拟网卡全局路由拦截）与普通系统代理的底层天壤之别：何时必须开、Windows 服务模式怎么装及防冲突排雷清单。"
h1: "什么是代理客户端 TUN 模式？原理图解、服务安装教程及何时切不可用"
primaryKeyword: "TUN 模式"
secondaryKeywords: ["Clash TUN", "TUN 模式原理", "TUN 模式无法启动", "终端不走代理怎么办"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "tutorials-tun-mode"
categoryId: "tutorials"
topicSlug: "tun-mode"
fullPath: "/tutorials/tun-mode/"
intentMode: "tutorial-workflow"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "**TUN 模式（虚拟网卡模式）**是通过客户端向操作系统底层注册一张虚拟三层网络适配器来拦截接管全部进出流量，哪怕该程序根本不读取操作系统的“HTTP/SOCKS 系统代理”开关，流量同样会乖乖进入 Clash/v2rayN 引擎（**注意：开 TUN 之后客户端依然严格执行 `Rule` 国内外分流规则，并不会变成卡顿的全局代理！**）。当遇到浏览器能上 Google 但 **终端命令行（git/curl/npm/pip）、WSL2、Docker、Claude Code 桌面/CLI、Antigravity 扩展或 UWP 应用报错超时**时，只需在设置安装 **Service Mode（服务模式）** 再打开 **TUN 模式**即可一劳永逸解决。唯一大禁忌是：打外服游戏开专业游戏加速器前，务必先关掉 TUN 模式防双网卡路由冲突瘫痪。"
entityChain:
  - "核心底层差异（系统代理 = 在桌面挂个告示牌等浏览器主动来问 · TUN = 直接把整台电脑网口垫一层虚拟网卡兜底）"
  - "适用触发信号（浏览器全通但 Terminal/Git/桌面独立客户端死活卡死超时）"
  - "必要权限前置（Windows 必须安装服务模式 / macOS 授权输入开机密码创建 utun 设备）"
  - "严禁共存场景（玩竞技网游开网易 UU/雷神/奇游等加速器、或连公司 EasyConnect VPN 时先关 TUN）"
decisionCriteria:
  - "很多新手误以为“TUN 模式 = 全局 Global 模式”而不敢开——完全错误！“TUN vs 系统代理”决定**软件能不能抓到流量包**；抓到包之后到底走国内直连还是国外，依然 100% 由你主页的 **`Rule`（规则模式）** 说了算。"
  - "如果 Windows 点开 TUN 按钮瞬间自动弹回或者报错 `Start Tun Failed`，90% 是没点设置旁边那个齿轮先装「服务模式」，或者本地杀毒软件悄悄隔离了核心程序 `mihomo.exe`。"
  - "日常只用普通网页浏览器查资料看视频，普通“系统代理”已经完全足够且极省微弱 CPU 资源，无需无脑全天常驻最高驱动权限。"
recommendedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu", "feimao", "weifeng"]
articleClusters:
  - clusterName: "TUN 模式深入原理与系统安装步骤"
    clusterDesc: "看透桌面、手机和虚拟网卡之间在三层通信下各自在干什么。"
    articles:
      - title: "TUN 模式工作原理、服务模式安装与终端 CLI 代理验证全教程"
        keyword: "Clash Verge TUN 模式怎么开"
        intent: "Informational"
        href: "/tutorials/tun-mode/tun-mode-explained/"
        status: "published"
      - title: "Clash Verge Rev 桌面核心安装与权限说明"
        keyword: "Clash 服务模式安装"
        intent: "Informational"
        href: "/clients/clash-verge-rev/"
        status: "published"
  - clusterName: "TUN 启动失败与多驱动冲突自救排雷"
    clusterDesc: "搞定杀软误杀核心、加速器打架和关闭软件断网疑难杂症。"
    articles:
      - title: "游戏加速器与代理 TUN 模式并发抢路死机原因与切换规范"
        keyword: "开TUN打游戏卡死"
        intent: "Informational"
        href: "/vpn/game-accelerator/"
        status: "published"
      - title: "客户端无法启动或 TUN 报错服务失败快速检查指南"
        keyword: "TUN 模式打不开怎么修"
        intent: "Troubleshooting"
        href: "/troubleshooting/client-wont-start/"
        status: "published"
      - title: "macOS & Windows 关闭代理软件后彻底断网的系统残余端口清理方法"
        keyword: "开启 TUN 后断网"
        intent: "Troubleshooting"
        href: "/tutorials/tun-mode/tun-mode-explained/"
        status: "published"
crossTopicLinks:
  - label: "AI 客户端及终端（Claude Code / ChatGPT App）代理必读"
    href: "/ai-streaming/claude/"
    reason: "终端编程与桌面 AI 软件常彻底无视传统系统代理，必须靠 TUN 与防 DNS 泄漏护航"
  - label: "Fake-IP 与 DNS 泄漏深层原理解析"
    href: "/articles/fake-ip-vs-redir-host-dns-leak/"
    reason: "配合 TUN 启用正确的 Fake-IP / Redir-Host 避免局域网/公司私域解析紊乱"
  - label: "客户端无法启动与权限报错排查"
    href: "/troubleshooting/client-wont-start/"
    reason: "排查杀毒软件拦截、UAC 管理员提权失败导致核心服务起不来问题"
  - label: "返回使用教程一级总专题"
    href: "/tutorials/"
    reason: "回到四步标准配置全局攻略"
sources:
  - "教程库：tun-mode-explained.md"
  - "文章库：vpn-vs-airport-vs-game-accelerator.md"
dataGapNotes:
  - "Linux 无桌面桌面发行版与特定容器（Docker / WSL2 NAT vs Mirrored）网络环境下，TUN 的网段穿透与路由权属还需配合 `auto-route` 或主机转发参数（例如 `ip route` 放行），超出通用桌面常规一键按钮覆盖范围。"
faqs:
  - question: "开了“系统代理”还要同时开“TUN 模式”吗，两项开关是不是选一个开就行？"
    answer: "日常使用推荐二选一：**普通轻度只刷网页看视频 ➔ 只开「系统代理」**，轻快不碰底层系统驱动；**遇到要写代码用终端 `git/npm/pip`、拉 Docker、用 UWP 应用、或发现浏览器安全 DNS/QUIC 漏掉系统代理导致 AI 报错 ➔ 关掉系统代理或保持协同、直接开启「TUN 模式」**。实际上当 TUN 模式成功生效并接管整机虚拟网关路由后，绝大多数场景下即使把“系统代理”关掉，浏览器依然照常通过虚拟网卡顺畅走规则代理。"
  - question: "开启 TUN 之后在 Clash Verge Rev 里面为什么依然可以同时让淘宝、微信走直连不慢？"
    answer: "因为 TUN 只不过换了一种更彻底的“流量抓捕搬运方式”（把原本会从物理网口偷溜出去的命令行与桌面 App 一块全揪回代理客户端手里）！流量一旦进了 Clash 内核，**它紧接着依然严格按你的 `Rule`（规则模式）列表一一核对放行**——微信和淘宝命中中国大陆 IP/域名，立刻被原地踢走回你的物理真网卡直连出去，没有任何绕路减速！"
  - question: "在 Windows 上点 TUN 模式开关立马自己灰掉弹回关闭，或者弹错缺少服务权限怎么办？"
    answer: "请做三步排障：① 必须先在软件设置界面找到 **「服务模式 (Service Mode)」** 右边的管理小图标点击 **安装（Install）** 并同意弹出的 Windows 系统管理员 UAC 放行；② 若还是装不上或核心秒退，进 Windows 安全中心或第三方杀软（360/火绒/迈克菲）的隔离区看看是不是把文件夹里的 **`mihomo.exe` 当黑客工具误删隔离** 了，恢复且整包加进信任白名单；③ 临时测试可彻底关闭客户端后，右键桌面图标点击**「以管理员身份运行」**再开一遍验证。"
---

## 一、直观对照：系统代理 vs TUN 虚拟网卡到底差在哪？

| 对比维度 | 普通「系统代理 (System Proxy)」 | 底层「TUN 模式 (虚拟网卡接管)」 |
| :--- | :--- | :--- |
| **实现工作机制** | 仅仅改写 Windows/Mac 系统登记处的一个本地接口号（如 `127.0.0.1:7897`），依赖各个软件**自己主动懂规矩去读取** | 像装好一根硬件网卡驱动一样直接介入操作系统三层默认路由网关，**所有软件发出去的数据包一概拦下过检** |
| **能覆盖的常见软件** | Chrome、Edge、Safari 等主流常规浏览器与部分老实读系统代理的软件 | **全盘通吃**：Git Bash、PowerShell、Python `pip`、Node `npm`、WSL、Docker、ChatGPT/Claude 桌面端及微软商店 UWP 应用 |
| **系统权限门槛** | 普通标准用户即可瞬间开启关闭 | 需要系统管理员权限安装服务或创建网卡驱动（macOS 首次需填电脑锁屏密码） |
| **常见大忌风险点** | 部分浏览器开着 HTTP/3 (QUIC) UDP 请求会无视代理直接直连泄漏真实内地位置 | **绝对不可与外服专业游戏加速器、或公司 EasyConnect VPN 在同一时刻双开**（会互夺驱动路由导致全断网） |

---

## 二、标准启用与日常安全维护操作流

1. **Windows Clash Verge Rev 安装服务启用 TUN**：
   - 打开左边 **「设置 (Settings)」** ➔ 找到 **「服务模式 (Service Mode)」** 点右侧设置图标，按弹窗点 **`Install`** 完成系统后台服务注册；
   - 出现提示服务处于绿色就绪状态后，打开紧挨着的 **`TUN 模式`** 滑动开关（此时看右上或底层虚拟网卡即多出一张名为 `Meta / Mihomo` 的适配器）；
   - 验证法：打开任意系统 CMD/PowerShell 窗口运行 `curl -I https://www.google.com`，出现清晰 HTTP 200/301 返回即证明全部终端已被彻底成功接管！
2. **macOS 用户快速启用 TUN 提示**：
   - 拨动打开 `TUN 模式` 时系统会弹出指纹或输入密码授权创建系统级 `utun` 接口，批准即可立刻工作；务必记得如果不想用了需要彻底卸载软件时，提前点关掉 `TUN` 与 `系统代理` 再点退出软件。
