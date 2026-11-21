---
title: "2026 代理分流规则完全指南：Rule 模式匹配顺序、DOMAIN/GEOIP 语法与 AI 分流组实战"
description: "拆解 Clash / Mihomo 与 sing-box 分流规则工作底层原理：详解规则从上到下优先命中逻辑、常用直连/代理语法词条，以及如何解决日常香港看视频与 AI 必须分家的痛点。"
h1: "代理分流规则怎么写才不出错？规则匹配顺序、国内直连防漏与 AI 分流实战"
primaryKeyword: "分流规则"
secondaryKeywords: ["Clash 分流规则", "规则模式原理", "代理分流怎么设", "AI 独立策略组规则"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "tutorials-routing-rules"
categoryId: "tutorials"
topicSlug: "routing-rules"
fullPath: "/tutorials/routing-rules/"
intentMode: "tutorial-workflow"
pubDate: 2026-11-21
updatedDate: 2026-11-21
answerFirst: "分流规则（Routing Rules）是决定哪些流量走你家宽带直连（`DIRECT`）、哪些走香港看 4K 视频、哪些送去新加坡解锁 ChatGPT/Gemini 的“交通指挥灯”。所有规则核心遵循唯一一条铁律：**从第一行到最后一行依次向下严格匹配，只要在前面率先命中任何一条规则，就会立即停止检查并执行动作！** 因此把特定精准域名（比如 `gemini.google.com`、`aistudio.google.com`、`claude.ai`）写在通用域名规则（比如 `google.com` 或 `MATCH` 兜底）的最上面，是解决“既能平时死守低延迟香港节点刷网页、又能在同一秒顺畅打开不封号的 AI 工具”的根本技术解法；如果写反放在末尾就会永远无法生效。"
entityChain:
  - "交通优先级机制（自上而下顺序检查，命中即截停执行，MATCH 永远放最后一行兜底）"
  - "核心匹配指令词典（DOMAIN-SUFFIX 域名后缀 / DOMAIN-KEYWORD 关键词 / GEOIP,CN 大陆 IP / FINAL or MATCH）"
  - "高频业务冲突痛点（为何 google.com 默认带跑香港导致 Gemini 报错地区受限）"
  - "一劳永逸方案（Global Extend Script 脚本自动前置插队 + 定期维护 GeoSite）"
decisionCriteria:
  - "不要轻易往分流末尾加规则希望“抢过前面的大类规则”——前面如果有 `DOMAIN-SUFFIX,google.com,香港组`，写在后面的 `gemini.google.com` 永远排不上号！必须前置或用 JS 脚本 `unshift` 插到规则数组最顶部。"
  - "国内银行、高校内网与企业内网（如 `.edu.cn` / 公司私有后缀），遇到打不开时把对应精准后缀置于列表顶部指派 `DIRECT` 放行，切勿图省事直接开启 `Global` 全局毁坏全套分流。"
  - "规则精细生效的前提之一是配合客户端允许做完整包/域名感知（部分系统 App 或命令行如果不走系统代理、直接连原始硬编码 IP，则需同步开启 TUN 与内置 Sniffer 嗅探）。"
recommendedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu", "feimao", "weifeng"]
articleClusters:
  - clusterName: "零基础抄作业：现成分流模板与代码"
    clusterDesc: "不需要从头自己学着敲几百条复杂语法，直接套用经过实测检验的安全配置模版。"
    articles:
      - title: "Clash Verge Rev 覆写分流脚本全代码（一键实现 AI 锁死新加坡 + 日常香港直用）"
        keyword: "Clash AI 分流覆写脚本"
        intent: "Informational"
        href: "/tutorials/routing-rules/clash-verge-override-ai-routing/"
        status: "published"
      - title: "Shadowrocket 小火箭 iOS 远程分流配置同步教程（防国内手机 App 变慢费流量）"
        keyword: "小火箭远程分流配置"
        intent: "Informational"
        href: "/tutorials/client-install/shadowrocket-remote-config-sync/"
        status: "published"
  - clusterName: "底层防误杀：Sniffer、DNS 与白名单协同"
    clusterDesc: "搞懂为什么有些域名规则明明写了出来，浏览器依然像是没看到一样失效。"
    articles:
      - title: "Fake-IP vs Redir-Host 原理全解与消除浏览器泄漏规则失效故障"
        keyword: "规则失效 DNS 泄漏排查"
        intent: "Informational"
        href: "/articles/fake-ip-vs-redir-host-dns-leak/"
        status: "published"
      - title: "客户端常见五大规则关键词（SUFFIX / KEYWORD / IP-CIDR / GEOIP / MATCH）详解"
        keyword: "Clash rule 规则怎么读"
        intent: "Informational"
        status: "planned"
crossTopicLinks:
  - label: "Gemini 与 AI Studio 专门漏抓规则列表"
    href: "/ai-streaming/gemini/"
    reason: "拷取完整 9 条涵盖 DeepMind、AI Studio 与 API 接口的域名防漏规则清单"
  - label: "Clash 基础配置与策略组模式教程"
    href: "/tutorials/clash-config/"
    reason: "确保界面确实停在 Rule（规则模式）并学会利用全局扩展脚本安全加载规则"
  - label: "DNS 解析故障排查手册"
    href: "/troubleshooting/dns-error/"
    reason: "解决部分公司内网域、特定本地网站被分流规则误拦转圈问题"
  - label: "返回使用教程一级总专题"
    href: "/tutorials/"
    reason: "查看客户端装机与订阅导入完整前置顺序"
sources:
  - "教程库：clash-verge-override-ai-routing.md & shadowrocket-remote-config-sync.md"
  - "文章库：fake-ip-vs-redir-host-dns-leak.md"
dataGapNotes:
  - "主流客户端（Mihomo YAML 生态与 sing-box JSON 生态）虽然配置字段格式有所区别（如单行逗号串 vs 结构化 `domain_suffix` 数组），但自顶向下按第一命中截停（First-Match Wins）的核心逻辑全网完全一致。"
faqs:
  - question: "为什么我已经把 `gemini.google.com` 加进去了，它依然走了我的香港默认线路报地区不支持？"
    answer: "第一大概率原因就是：**你加在了整张规则表太靠下的位置！** 假如在你的机场原始规则第 120 行已经写了一句覆盖很宽的 `DOMAIN-SUFFIX,google.com,🚀 节点选择（你现在挂着香港）`，而你自己补充的那句 `DOMAIN-SUFFIX,gemini.google.com,🤖 AI 专用` 却排在了第 850 行，软件从头扫到第 120 行发现“咦 `gemini.google.com` 符合后缀是 `.google.com`”，当下立刻就按香港发出去、压根不会往下看你的第 850 行！所有精准自定义覆写规则在脚本里必须使用顶部前置（`unshift` 挤到最前面 1–10 行去）。"
  - question: "规则里经常看到的 `DOMAIN-SUFFIX`、`DOMAIN-KEYWORD` 和 `GEOIP,CN,DIRECT` 分别什么意思？"
    answer: "用最通俗的语言对照：\n- **`DOMAIN-SUFFIX,openai.com,🤖 AI`**：“后缀匹配”——不管是主站 `openai.com` 还是前面加任何前缀（`chat.openai.com`、`platform.openai.com`）全数命中；\n- **`DOMAIN-KEYWORD,claude,🤖 AI`**：“关键词包含匹配”——只要网址任何一个字母段里出现了 `claude` 统统捕获命中（用起来省事但忌太短常用词误伤）；\n- **`GEOIP,CN,DIRECT`**：如果前面域名没识别出来，核对目标 IP 地理位置库只要属于中国大陆境内服务器（`CN`），直接走本地宽带直连（`DIRECT`）；\n- **`MATCH,🚀 节点选择`**（永远放最末行）：万一前面全部几千条都没命中任何规则，拿这个兜底出口去代理。"
  - question: "使用“规则模式 (Rule)”下如果发现公司局域网内网、或者一个刚注册的冷门海外网站打不开怎么处理？"
    answer: "① 若是国内官网/公司内部 OA 网站莫名卡顿走偏了海外线路：在顶部覆写规则最前插入一条 `DOMAIN-SUFFIX,你公司后缀.com,DIRECT` 强制它原地直连即秒好；② 若是一个冷门海外科研站国内明明直连不了、而老规则又没收录它的域名导致走了 `GEOIP,CN` 或意外被直接卡住：先临时切两分钟 `Global` 测试能打开即证明只是规则漏抓了它，紧接着在顶部规则加一条 `DOMAIN-SUFFIX,冷门站点.org,🚀 节点选择` 再切回 `Rule` 就永远妥妥收录进去了！"
---

## 一、直观解剖一条高质量规则文件的标准垂直排列顺序

在写规则或者审视机场预设规则是否科学时，永远遵循以下**由精到粗、从特例到兜底**的金字塔顺序：

1. **最顶端（第 1 层 · 最高优先级特例修正）**：
   - 本地局域网及私有地址（`IP-CIDR,192.168.0.0/16,DIRECT`）
   - 特定高频 AI 全域强制拆分（`openai` / `chatgpt` / `claude` / `anthropic` / `gemini.google.com` / `aistudio.google.com` ➔ 指向独立固定非港组 **`🤖 AI 专用`**）
   - 自己常遇故障被迫直连的高校内网、银行域或特殊软件（`DIRECT`）
2. **中上层（第 2 层 · 流媒体及常规国际分类规则集）**：
   - Netflix / Disney+ / YouTube / Spotify / GitHub / Apple / Microsoft 等各自常见媒体及开发组（其中苹果国内加速区或微软国区下载常配 `DIRECT` 以防白耗境外流量）
3. **中下层（第 3 层 · 国家级大陆域名 & GeoIP 兜底拦截放行）**：
   - `GEOSITE,cn,DIRECT`（全部已知中国常见站点全部直接本机直走）
   - `GEOIP,CN,DIRECT,no-resolve`（哪怕直接写数字 IP，只要查询属于中国境内机房一样直接原地放走）
4. **最末行（第 4 层 · 漏网白名单兜底总开关）**：
   - `MATCH,🚀 日常节点选择`（前面全都不算国内，全送去你当前选定的常规主力节点）。

---

## 二、不想研究规则语法，一招“抄现成方案”全搞定

如果你并不是热衷折腾代码行的硬核玩家，根本不需要自己打开记事本一条条手写规则：
- **Windows / macOS (Clash Verge Rev) 用户**：直接复制使用我们已校验通过的全量 AI+直连增强覆写片段（教程直达：[Clash Verge Rev 覆写配置实战指南](/tutorials/routing-rules/clash-verge-override-ai-routing/)），30 秒贴入启用即成全自动；
- **iPhone (Shadowrocket 小火箭) 用户**：不要手写任何条目，按 [小火箭远程配置文件同步教程](/tutorials/client-install/shadowrocket-remote-config-sync/) 一键挂载成熟维护好的远程分流规则文件，再将路由保持在「配置（Config）」即可。
