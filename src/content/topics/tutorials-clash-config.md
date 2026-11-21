---
title: "2026 Clash 配置完全上手教程：Profiles 激活、Rule 模式与策略组测速调优"
description: "专为初次接触 Clash 系客户端（Clash Verge Rev / FlClash / CMFA）用户打造的实战操作手册：讲解规则/全局模式切换、策略组分类区别及覆盖脚本概念。"
h1: "Clash 配置入门与进阶设置：规则模式、策略组测速以及为什么不能直接改配置文件"
primaryKeyword: "Clash 配置"
secondaryKeywords: ["Clash 配置教程", "Clash 规则配置", "Clash 怎么切节点", "Rule 模式和 Global 区别"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "tutorials-clash-config"
categoryId: "tutorials"
topicSlug: "clash-config"
fullPath: "/tutorials/clash-config/"
intentMode: "tutorial-workflow"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "用好 **Clash 系客户端（Clash Verge Rev、FlClash、CMFA 与 OpenClash）** 的核心不在于去硬啃数千行复杂的 YAML 文本源码，而在于在图形界面里摆正 3 个关键日常设置：**①「出站模式（Mode）」日常 99% 时间死锁在 `Rule（规则模式）`**，保证境内淘宝微信原生直连不慢且不白扣套餐字节，只在排障特定怪网站加载不全时临时试一下 `Global`；**②「代理页策略组」弄懂 `select`（手动指定）、`url-test`（自动测最慢切线，AI 禁用！）与 `fallback`（故障顺延）的组合分工**；**③ 若需永久补充专属规则（比如强制所有 AI 走新加坡），千万用「全局扩展配置 / Script 覆写（Merge/Script）」挂载**，绝不直接手动改原始下载下来的 YAML 防止下次订阅更新时全部被冲掉！"
entityChain:
  - "基础出站模式（Rule 规则模式为主 · Global 仅作排错验证 · Direct 暂停全直连）"
  - "策略组机理（select 手动钉选 vs url-test 测优自动跳 vs fallback 断流替补）"
  - "正确测试尺度（将测速地址与策略改成标准 HTTPS 204 URL-Test 验实通性）"
  - "配置可维护性设计（通过 Extend Script 覆写叠加，完美兼容未来订阅动态同步）"
decisionCriteria:
  - "请记住：2023 年已停更删库的原版 Clash 与 Clash for Windows 已无法加载现代新协议（如 VLESS-Reality 与 Hysteria2），一切配置操作应当全部立足基于 Mihomo 内核的 Clash Verge Rev / FlClash 等活跃版本。"
  - "使用 Claude 和 ChatGPT 时，不能让所属那个分组设成 `url-test` 后台自动隔 5 分钟跳来跳去，务必用手动选择组（`select`）钉死一条节点。"
  - "任何改动如果写进了原始订阅的缓存配置正文，只要触发一次「更新订阅」就会瞬间灰飞烟灭！必须使用客户端自带覆写（Extend）区。"
recommendedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu", "feimao", "weifeng"]
articleClusters:
  - clusterName: "桌面端从安装到日常切换实操教程"
    clusterDesc: "手把手指导安装 Clash Verge Rev 并做好基础设置打开外网开关。"
    articles:
      - title: "Clash Verge Rev 下载、配置订阅与打开系统代理/TUN 全流程指南"
        keyword: "Clash Verge Rev 怎么配置"
        intent: "Informational"
        href: "/tutorials/clash-config/clash-verge-rev-guide/"
        status: "published"
      - title: "Clash Verge Rev 官方项目定位、各系统包名及坑点档案"
        keyword: "Clash Verge 下载与注意"
        intent: "Informational"
        href: "/clients/clash-verge-rev/"
        status: "published"
      - title: "Mihomo 内核五个关键 YAML 字段快速入门读图"
        keyword: "Clash YAML 结构怎么看"
        intent: "Informational"
        href: "/clients/mihomo/"
        status: "published"
  - clusterName: "策略组进阶覆写与防坑设置"
    clusterDesc: "不破坏订阅自动同步，同时轻松实现日常香港 + AI 新加坡并行分流。"
    articles:
      - title: "Clash Verge Rev 全局 AI 覆写脚本实战（抄作业直接启用）"
        keyword: "Clash 分流覆写脚本"
        intent: "Informational"
        href: "/tutorials/routing-rules/clash-verge-override-ai-routing/"
        status: "published"
      - title: "OpenWrt 家庭软路由 Clash 系配置选择（OpenClash vs Nikki）"
        keyword: "OpenClash 软路由配置"
        intent: "Informational"
        href: "/articles/openwrt-nikki-vs-openclash/"
        status: "published"
crossTopicLinks:
  - label: "分流规则（Routing Rules）深度教学"
    href: "/tutorials/routing-rules/"
    reason: "学透 DOMAIN-SUFFIX / GEOIP / MATCH 从上往下的精准匹配优先级"
  - label: "TUN 模式开启与服务授权指南"
    href: "/tutorials/tun-mode/"
    reason: "当浏览器能用、终端 git/npm 或游戏桌面依然超时时升级开启虚拟网卡"
  - label: "节点全超时与系统代理断网诊断"
    href: "/troubleshooting/node-timeout/"
    reason: "遇上所有节点红字打叉或关闭软件后国内彻底断网的 10 秒抢救方案"
  - label: "返回使用教程一级总专题"
    href: "/tutorials/"
    reason: "查看零基础 4 步标准化跑通路径"
sources:
  - "教程库：clash-verge-rev-guide.md & clash-verge-override-ai-routing.md"
  - "第三方代理客户端.txt（Clash Verge Rev & Mihomo 核心架构）"
dataGapNotes:
  - "不同机场厂商在服务器端生成的默认策略组命名（有的叫 Proxy、有的叫“🚀 节点选择”或“自动选择”）略有差，以下图形交互步骤基于通用的 Mihomo / Clash Verge Rev 标准视图描述。"
faqs:
  - question: "打开 Clash Verge Rev 的“代理 (Proxies)”界面，顶部 `Rule`、`Global`、`Direct` 这三个按钮分别干嘛的？"
    answer: "① **`Rule`（规则模式 · 99% 日常必须选它！）**：客户端会按照内置成千上万条国内外分流名单判断——访问微信、B站、公司官网或国内网盘直接走你家宽带（`DIRECT`）丝毫不经机场不扣流量；访问 Google、GitHub、YouTube 等则按规则送去你选的海外节点；② **`Global`（全局模式 · 仅限短期排错使用）**：所有国内国外流量不管三七二十一全部塞给全局组绕行一圈再出（非常慢且废流量，开着它国内购物软件能卡成瘫痪）；③ **`Direct`（直连模式）**：等于暂时停掉代理功能直接裸网连接，但代理端口和软件还开着随时等切回。"
  - question: "策略组里面的「手动选择」、「自动选择（延迟最低）」和「故障转移」该用哪个才合理？"
    answer: "日常看新闻看视频可以放心地用**手动选择**选一条高宽带的香港 IEPL 专线，或者用**自动选择**让它保底不卡顿；**但只要涉及对风控 IP 极其敏感的网站（特别是 Anthropic Claude、ChatGPT 与海外网银账号）时，绝不能开自动选择（它会隔几分钟来回跨国家切换 IP），必须另配或选中单独锁死某个节点的手动选择组**。"
  - question: "为什么我费很大劲用记事本在配置里加了十行域名规则，结果隔两天它全自动恢复原状了？"
    answer: "因为你改的是机场远端拉取回来存在硬盘里的**实时动态缓存配置原文件**！一旦客户端在后台运行定时更新订阅（或你自己手欠点了一次更新按钮），远端发过来的完整 YAML 文件就会把本地修改全部原地抹平覆盖！**正确修改姿势是右击订阅或进入左边全局扩展项，把新增调整放进「全局扩展配置 (Merge) / 全局扩展脚本 (Script)」**，这样每次更新后都会全自动叠加上去。"
---

## 一、核心界面与常见参数一览（再也不被英文单词搞晕）

| Clash 面板选项/标签位置 | 通俗真实意思解读 | 建议初学者日常标准停留设定 |
| :--- | :--- | :--- |
| **`Mode -> Rule` (规则模式)** | 聪明智能自动识别哪些网站放国内直走、哪些发国外代理 | **始终保持选定在此项** |
| **`Settings -> System Proxy`** | 告诉电脑上的 Chrome/Edge 浏览器把请求送来 Clash 本地监听端 | 上网开着；**彻底关闭软件前记得顺手点回关闭** |
| **`Settings -> Service Mode + TUN`** | 注册一张虚拟系统网卡，连终端命令行、`git`、Python 以及桌面软件一起全盘无缝接管 | 需要敲代码、终端工具不走代理、或开启无漏洞严格 AI/防泄漏时点亮启用 |
| **策略组小闪电测速按钮** | 向列表中节点批量发送探测求真连接往返耗时 | 日常推荐用设置好的 `URL-Test`（https 204）测出真实绿数字耗时再点选 |

---

## 二、老手如何做“零破坏性订阅配置扩展”？（Override 模型）

为了既能够享受机场不断推送维护好最新可用节点 IP 的好处，又能同时拥有属于自己的独立逻辑（比如：“我不管你机场更新成啥样，我要强制让全部 `claude.ai` 与 `gemini.google.com` 永远锁死在我的 `🇸🇬 新加坡` 节点”）：

1. 在左侧栏停在 **「订阅 (Profiles)」** 页，把顶层内置好的 **「全局扩展脚本 (Global Extend Script)」** 或面向单个配置的 **「编辑覆写」** 打开；
2. 把写好的 JavaScript 脚本规则片段粘贴复制进去并勾选启用（可完全零基础抄作业复制：[Clash Verge Rev 完整 AI 地区分流覆写代码教程](/tutorials/routing-rules/clash-verge-override-ai-routing/)）；
3. 当下次触发远端订阅自动刷新的时候，客户端会先安全吞下机场发过来的节点名单，紧接着自动跑完你的脚本在内存中把定制规则无缝叠加置顶，**从此一劳永逸既享远程更新又保住个性化规则！**
