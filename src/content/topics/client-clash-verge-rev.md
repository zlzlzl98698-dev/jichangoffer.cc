---
title: "2026 Clash Verge Rev 下载渠道、安装配置与 AI 分流覆写完全指南"
description: "详述 Windows / macOS / Linux 主流桌面端 Clash Verge Rev 的 GitHub 官方下载校验、WebView2 依赖处理、订阅导入与 TUN 服务模式实战。"
h1: "Clash Verge Rev 使用全指南：正版 GitHub 安装、订阅导入与全局覆写实战"
primaryKeyword: "Clash Verge Rev"
secondaryKeywords: ["Clash Verge 下载", "Clash Verge 教程", "Clash Verge Rev macOS", "Clash 桌面客户端"]
searchIntent: "Informational"
pillar: "客户端软件"
cluster: "client-clash-verge-rev"
categoryId: "clients"
topicSlug: "clash-verge-rev"
fullPath: "/clients/clash-verge-rev/"
intentMode: "client-handbook"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "在原版 Clash for Windows (CFW) 停更删库之后，基于 Rust (Tauri) 与 **Mihomo** 内核构建的 **Clash Verge Rev** 成为 2026 年 Windows、macOS（区分 Intel `x64` 与 Apple Silicon `aarch64`）与 Linux 桌面的主流图形客户端。标准启用只需 4 步：① 唯一认准官方 GitHub 仓库 **`clash-verge-rev/clash-verge-rev`** 的 Releases 页面下载安装包（坚决避开百度竞价“中文假官网”木马包）；② 进入「订阅 (Profiles)」粘贴支持 Clash YAML 的机场订阅链接并点击启用；③ 主页确认保持 **`Rule（规则模式）`** 后，在「设置」打开系统代理；④ 如需让命令行 `git/curl`、Docker 与 AI 桌面端同步走代理，安装「服务模式」并打开 **TUN 虚拟网卡模式**。"
entityChain:
  - "渠道防毒核验（认准 GitHub clash-verge-rev/clash-verge-rev，严禁国内野鸡站）"
  - "系统架构与依赖适配（Win x64 + WebView2 / Mac M系用 aarch64 / Linux 包）"
  - "核心日常开关（Profiles 激活订阅 + Rule 模式 + System Proxy vs Service TUN）"
  - "高阶长期稳用（Global Extend Script 覆写保留自定义 AI 策略组不丢失）"
decisionCriteria:
  - "必须检查你的机场是否开放标准 Clash YAML 订阅：仅支持专属客户端的封闭品牌（如 SOGO 云、Firefly、白月光）无法导入本软件。"
  - "macOS 退出或重装软件前务必先在软件设置里关闭「系统代理」与「TUN」，否则系统网络设置会残留 `127.0.0.1` 假代理端口导致整机断网。"
  - "修改分流规则请使用软件自带的「全局扩展覆写 / Script」，切勿直接改单次拉取的原始文件（下次点刷新订阅就会被覆盖还原）。"
recommendedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu", "feimao", "weifeng"]
articleClusters:
  - clusterName: "零基础安装与系统适配教程"
    clusterDesc: "覆盖 Windows、macOS 与 Linux 不同体系的初次装机与依赖修复。"
    articles:
      - title: "Clash Verge Rev 图文完全上手指南：下载、导入订阅到连接验证"
        keyword: "Clash Verge Rev 教程"
        intent: "Informational"
        href: "/tutorials/clash-config/clash-verge-rev-guide/"
        status: "published"
      - title: "TUN 虚拟网卡模式详解：服务安装与全终端接管操作步骤"
        keyword: "Clash Verge TUN 模式设置"
        intent: "Informational"
        href: "/tutorials/tun-mode/tun-mode-explained/"
        status: "published"
      - title: "Windows 安装 Clash Verge Rev 提示缺少 Edge WebView2 运行库怎么办"
        keyword: "Clash Verge 无法启动白屏"
        intent: "Troubleshooting"
        href: "/troubleshooting/client-wont-start/"
        status: "published"
  - clusterName: "覆写脚本（Override）与 AI / 流媒体分流实战"
    clusterDesc: "学会不用手切节点、永不被远程订阅刷新冲掉的全局规则配置法。"
    articles:
      - title: "Clash Verge Rev 一键锁定 AI 工具（ChatGPT/Claude/Gemini 走新加坡）覆写代码"
        keyword: "Clash Verge 覆写规则 AI"
        intent: "Informational"
        href: "/tutorials/routing-rules/clash-verge-override-ai-routing/"
        status: "published"
      - title: "订阅拉取提示 EOF 或 Network Error 怎么自助修复"
        keyword: "Clash Verge 更新订阅失败"
        intent: "Troubleshooting"
        href: "/tutorials/subscription/subscription-troubleshooting/"
        status: "published"
crossTopicLinks:
  - label: "Mihomo 内核生态原理"
    href: "/clients/mihomo/"
    reason: "理解驱动 Clash Verge Rev 的底层内核如何解析代理策略与 DNS 规则"
  - label: "FlClash（Flutter 跨桌面与安卓端平滑替代品）"
    href: "/clients/flclash/"
    reason: "如果希望电脑与安卓手机使用高度统一的同一套 UI 习惯，比对 FlClash"
  - label: "全站支持 Clash 第三方通用订阅机场筛选"
    href: "/brands/"
    reason: "快速过滤掉纯封闭端机场，挑出原生下发标准 YAML 配置的品牌"
  - label: "返回客户端软件总枢纽"
    href: "/clients/"
    reason: "对照所有 11 款工具与 6 大操作系统全矩阵"
sources:
  - "第三方代理客户端.txt（GitHub officialSourceUrl & commonPitfalls）"
  - "教程库：clash-verge-rev-guide.md & clash-verge-override-ai-routing.md"
dataGapNotes:
  - "软件界面布局细节与具体小版本号随 GitHub 开源团队持续迭代更新可能微调，所有安全来源一律指向唯一官方仓库为准。"
faqs:
  - question: "网上搜出来的“Clash Verge 中文官网下载站”是不是官方出品的快捷国内下载源？"
    answer: "绝对不是！Clash Verge Rev 没有任何独立运营商业中文官网，也绝不投放百度竞价排名广告。中文搜索前排挂着各种 `.com` / `.cn` / `中文版高速下载` 的页面几乎 100% 是黑产搭建的钓鱼站，下载下来的安装包早就被捆绑植入窃密木马（专偷浏览器保存密码、Telegram 会话或修改数字钱包剪贴板）。请务必认准开源主页 `github.com/clash-verge-rev/clash-verge-rev`。"
  - question: "macOS M1/M2/M3/M4 电脑安装时在官网 Release 列表里应该下载哪个后缀文件？"
    answer: "Apple Silicon（M 系列）芯片的 MacBook 必须下载名字里包含 **`aarch64.dmg`** 的版本，运行效率与省电表现极佳；只有早年的老款 Intel 芯片 Mac 才下载 **`x64.dmg`**。若遇到 macOS 提示“无法打开，因为无法验证开发者/文件已损坏”，在隐私与安全性设置允许或于终端执行常规解除隔离属性指令后即可打开（详见官方说明与安装教程）。"
  - question: "为什么我已经开了系统代理、网页都能打开了，但我写代码用终端 `git clone` 或运行 Claude Code 还是报错连不上外网？"
    answer: "因为“系统代理”只相当于在桌面广播了一个端口（如 `127.0.0.1:7897`），大部分命令行软件（Terminal、PowerShell、Docker）以及游戏桌面客户端并不主动去读系统代理设置！在 Clash Verge Rev 的设置页先点击「服务模式（Service Mode）」右侧齿轮按提示安装服务，紧接着把 **TUN 模式开关打开**，即可从底层虚拟网卡全盘无缝接管全部工具（详看 [TUN 模式专篇](/tutorials/tun-mode/tun-mode-explained/)）。"
---

## 一、快速区分三个极易混淆的架构角色

新入手的电脑用户最常问：“Clash 不是早停更了吗？为什么还有 Clash Verge Rev？” 这其实就是分清以下三者的结构分工：

| 软件 / 核心名称 | 实际所属层级 | 当下真实状态 | 它负责做什么工作 |
| :--- | :--- | :--- | :--- |
| **原版 Clash / Clash for Windows** | 早期闭源桌面端 | **2023 年已停更删库** | 缺乏 VLESS-Reality 与 Hysteria2 现代协议支持，强烈不建议到处搜残留历史版 |
| **[Mihomo](/clients/mihomo/)**（原 Clash.Meta） | 底层开源核心引擎 | **MetaCubeX 活跃维护** | 真正跑在幕后处理加密包、算分流规则、建虚拟网卡的核心“发动机” |
| **Clash Verge Rev** | 现代桌面图形外壳 | **活跃持续迭代** | 用 Rust (Tauri) 构建漂亮轻量的操控面板来调度驱动 Mihomo 内核，也是普通人直接下载安装的前端软件 |

---

## 二、Windows / macOS / Linux 下载匹配表与前置排雷

前往唯一权威地址 `https://github.com/clash-verge-rev/clash-verge-rev/releases` 获取安装包时，精准核对下表文件标识不要下错：

| 您的电脑系统与硬件 | 必须挑选的正确安装包尾缀 | 首次启动常见卡点与一键解法 |
| :--- | :--- | :--- |
| **Windows 10 / 11 (64 位主流 PC)** | `..._x64-setup.exe`（安装版）或便携压缩包 | 如启动白屏或弹缺 WebView2：先行微软官网下载安装 **Edge WebView2 Runtime** 即可治愈 |
| **Windows ARM64（如骁龙本）** | `..._arm64-setup.exe` | 不可与普通 x64 版混用 |
| **macOS Apple Silicon（M1/M2/M3/M4）** | `..._aarch64.dmg` | 首次点开被系统拦截可在「系统设置 -> 隐私与安全性」点击仍要打开；**退出前记得先手动关掉代理开关** |
| **macOS Intel 旧款芯片** | `..._x64.dmg` | 同上；注意老机器系统版本兼容要求 |
| **Linux 桌面（Ubuntu / Arch / Fedora）** | `.deb` / `.rpm` / `.AppImage` | 若开启 TUN 失败报错权限不够，检查赋予内核 `CAP_NET_ADMIN` 权限或安装官方服务 |

---

## 三、日常最高频实用的 2 项进阶设定

### 1. 让订阅每次自动刷出节点，却永远保留我自己的 AI 策略组
千万不要直接右键你那张订阅点击“编辑规则”。只要到了半夜客户端执行自动更新订阅，机场后台下发过来的新 YAML 文件就会瞬间冲刷覆盖你改的所有内容！
**标准工程姿势**：进入左栏 **「订阅 (Profiles)」**，针对顶部通用栏的 **「全局扩展配置 (Global Extend Config)」** 或 **「全局扩展脚本 (Global Extend Script)」** 写入一段简洁规则覆写逻辑（全套现成可用代码见教程：[Clash Verge Rev 一键锁定 AI 地区覆写代码](/tutorials/routing-rules/clash-verge-override-ai-routing/)）。这样以后任何一天刷新订阅增删节点，你的“日常走香港专线 + ChatGPT/Claude/Gemini 自动锁死新加坡或日本”分组永远自动重挂生效。

### 2. 开启系统代理后关闭软件前必守的一条习惯
特别是 macOS 与部分 Windows 安全限制环境下，软件意外崩溃或直接强制杀进程退出后，系统网络配置面板中登记的 `127.0.0.1:7897` 代理指向不会被清除，导致第二天开机发现**全网假死（连国内百度也打不开）**。养成好习惯：关软件或卸载重装之前，先点掉界面里的 **「系统代理」和「TUN 模式」两个滑动开关** 再 Quit 退出。
