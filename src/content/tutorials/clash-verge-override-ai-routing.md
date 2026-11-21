---
title: "Clash Verge Rev 全局扩展覆写实战：自动把 ChatGPT / Gemini 分流到新加坡节点"
description: "通过 Clash Verge Rev 全局扩展脚本（Script / Merge），在不覆盖原始机场订阅的情况下，为 OpenAI、Claude、Gemini 与 Cursor 建立独立新加坡/日本手动锁定策略组。"
primaryKeyword: "Clash Verge Rev 覆写教程"
secondaryKeywords: ["Clash AI分流", "ChatGPT分流规则", "Clash Verge Script", "Mihomo 覆写规则"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "routing-rules"
parentTopicHref: "/tutorials/routing-rules/"
parentTopicLabel: "分流规则教程"
contentType: "tutorial"
ctaMode: "task-only"
audience: "日常高频使用 ChatGPT、Claude 或 Gemini，希望在不损失香港日常低延迟前提下固定分流 AI 域名的桌面端用户"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "routing-rules"
slugName: "clash-verge-override-ai-routing"
platforms: ["Windows", "macOS", "Linux"]
prerequisites: ["已安装 Clash Verge Rev 桌面端并导入支持标准 YAML 的第三方机场订阅", "订阅节点列表中包含新加坡、日本或美国地区节点"]
difficulty: "常规配置"
relatedBrandSlugs: ["guangsuyun", "xingdaomeng", "yifan", "weitu"]
answerFirst: "直接在编辑器里修改机场订阅下载后的本地 YAML，每次更新订阅都会被服务端重新覆盖回原样。唯一持久化且不断线的标准工程做法，是使用 Clash Verge Rev 内置的「全局扩展脚本（Script）」或针对单一订阅的「编辑扩展脚本」：在脚本内基于节点名称正则过滤出新加坡、日本与美国节点组建独立 `select` 策略组（命名为 `AI-专用分组`），再通过 `rules.unshift` 把 `openai.com`、`chatgpt.com`、`claude.ai`、`gemini.google.com` 置顶拦截，即可同时保住香港 20ms 看日常网页、AI 流量自动落到最稳地区。"
sources:
  - "Mihomo 内核配置规范与 Clash Verge Rev 扩展脚本接口（main(config)）"
  - "2026-08-19 光速云 62 节点实测 AI 解锁分布对比"
faqs:
  - question: "为什么我手改完订阅文件一更新就被还原回去了，甚至导致部分规则丢失？"
    answer: "机场订阅的常规工作方式是每隔 12–24 小时或手动点击更新时向服务器重新拉取一份全量 YAML 覆盖本地缓存。因此本地临时手改属于一次性修改；只有保存在「全局扩展脚本 / 扩展配置」里的规则才会在每次下载完成后自动被重新注入执行。"
  - question: "如果我的机场自带的 YAML 订阅里原本就已经划分出 AI / ChatGPT 分组，还要装这段脚本吗？"
    answer: "可以先不急着装。进入 Clash Verge Rev 的「代理」页面观察机场原本组名：如果里面本来就有独立的 `ChatGPT` / `AI` 组，只要你手动把它定在新加坡节点且检查其命中 `gemini.google.com`、`claude.ai` 正常，就可以直接用；只有当你发现机场订阅没有独立拆组、缺少 Gemini 或把香港也塞进去自动测速时，才建议接入本教程脚本。"
  - question: "AI 专用分组为什么设置成 `select`（手动选）而不设成 `url-test`（自动按最低延迟跳选）？"
    answer: "因为 `url-test` 每几分钟就会按延迟微差把节点从新加坡跳到日本、甚至节点波动时切到台湾或美国——对敏感度较高的 ChatGPT Plus 与 Claude 账号来说，短时间高频跨越多个国家和城市 IP 是最容易招致风控封号和验证码循环的诱因。固定单选一台稳定的 `SG03` 或 `JP02` 是最佳习惯。"
  - question: "配置了扩展脚本以后为什么桌面客户端 ChatGPT App、Claude Desktop 或 Cursor 依然报错地区不可用？"
    answer: "规则脚本虽然已经写对，但许多基于 Electron 或终端底层栈开发的桌面端、命令行工具并不会去读取系统设置的 HTTP 代理端口！遇到这种情况请在 Clash Verge Rev 的「设置」页面配合打开 **TUN 虚拟网卡模式**，强制三层全接管。"
relatedLinks:
  - label: "分流规则与优先级总览教程"
    href: "/tutorials/routing-rules/"
  - label: "为什么用了专线还是打不开 ChatGPT 和 Gemini？"
    href: "/articles/ai-unlock-node-selection/"
  - label: "Claude 防封号策略与固定 IP 规则"
    href: "/articles/claude-anti-ban-ip-rules/"
  - label: "TUN 虚拟网卡开启全攻略"
    href: "/tutorials/tun-mode/tun-mode-explained/"
---

## 一、适用系统与适用前确认

本教程适用于桌面全平台客户端 **Clash Verge Rev**（Windows 10/11 x64/ARM、macOS Apple Silicon/Intel、主流 Linux 发行版），也同样兼容所有内置 **Mihomo** 内核并支持 JS Extension 的桌面端（注意版本以官方最新 GitHub Release 主分支界面逻辑为准，旧版早已停更的 Clash for Windows 扩展脚本格式语法存在局部差异，建议优先升级）。

### 开始配置前的两项检查
1. 确认你购买的机场服务支持 **标准 Clash 订阅导入**（纯专属客户端机场无法使用本地客户端扩展覆写）。
2. 在节点列表里肉眼确认你至少有 2 个以上的 **新加坡 (SG)**、**日本 (JP)** 或 **美国 (US)** 节点（不能只有一个香港池）。参考站内 [2026-08-19 逐地区 AI 解锁样本数据](/reviews/guangsuyun/)，香港节点对网页版 OpenAI 和 Gemini 失败率极高，而新加坡则表现最为均衡。

---

## 二、为什么必须用“全局扩展脚本（Script）”而不能直接改 YAML？

理解这一点能帮你彻底告别重复劳动：
- 机场后台给的订阅 URL 是动态生成的配置文件，里面节点 IP 或端口变动时需要通过订阅自动同步拉新；
- 一旦点击“刷新订阅”，原 YAML 文本里所有你自己手工敲入的规则都会瞬间蒸发。

而 Clash Verge Rev 提供的 **Global Extension Script（全局扩展脚本）** 机制是一个在拉取后执行的 JavaScript 钩子 `function main(config)`：订阅更新拉好原始对象之后，由这个本地函数在内存里自动给 `config['proxy-groups']` 和 `config.rules` **动态打补丁（Patch）**，再交给 Mihomo 内核运行。**原始订阅保持干净自动更新，你的个性 AI 分流逻辑永远不会丢失！**

---

## 三、手把手实操配置：4 步建立永不串区的 `AI-专用分组`

### 第 1 步：打开“全局扩展脚本”编辑窗口
1. 打开 **Clash Verge Rev**，在左侧菜单点击 **「订阅 (Profiles)」**；
2. 观察右侧上方（或订阅栏底部面板，依最新 UI 布局排列，若为单独控制某一订阅也可右键目标订阅选择「编辑脚本 / Extension Script」）：找到并进入 **「全局扩展脚本 (Global Extension Script)」**（确认文件语言格式为 JavaScript `.js`，而非 YAML Merge，防止语法混乱）。

### 第 2 步：核对现有节点名称里的地区命名习惯
进入左侧 **「代理 (Proxies)」** 看一眼你家机场节点是怎么写地区名的：
- 多数正规中文机场写成：`新加坡 01`、`SG-02`、`日本 Tokyo 03`、`美国 01`。
- 极少数使用纯英文简写或国旗 Emoji，如：`🇸🇬 SG01`、`🇯🇵 JP01`。确认包含常见中文地区字样或国际双字母缩写。

### 第 3 步：粘贴并保存标准覆写脚本
把原有的空模板全选替换为下面这段结构清晰、带有容错校验的安全脚本：

```javascript
function main(config) {
  const allProxies = config.proxies || [];
  if (allProxies.length === 0) return config;

  // 1. 从现有订阅节点中筛选出新加坡、日本与美国节点，彻底排除香港和台湾
  const aiCandidates = allProxies
    .filter((p) => /新加坡|狮城|SG|Singapore|日本|东京|大阪|JP|Japan|美国|美西|US|America/i.test(p.name))
    .filter((p) => !/剩余流量|套餐到期|官网|失联|距离/i.test(p.name))
    .map((p) => p.name);

  if (aiCandidates.length === 0) {
    // 若该订阅无任何新/日/美节点，保持原配置避免引擎报错
    return config;
  }

  // 2. 将新加坡节点置顶排前（基于已实测：新加坡节点同时兼容 OpenAI 与 Gemini 比例最高）
  const sgGroup = aiCandidates.filter((name) => /新加坡|狮城|SG|Singapore/i.test(name));
  const otherGroup = aiCandidates.filter((name) => !/新加坡|狮城|SG|Singapore/i.test(name));
  const sortedAiNodes = [...sgGroup, ...otherGroup];

  // 3. 插入独立的手动选择策略组 AI-专用分组（type 严格使用 select 防止乱跳 IP）
  config['proxy-groups'] = config['proxy-groups'] || [];
  const exists = config['proxy-groups'].some((g) => g.name === 'AI-专用分组');
  if (!exists) {
    config['proxy-groups'].unshift({
      name: 'AI-专用分组',
      type: 'select',
      proxies: sortedAiNodes,
    });
  }

  // 4. 在所有原始规则最顶部（unshift）插队拦截各大 AI 工具域与关键子域名
  const aiRules = [
    // OpenAI / ChatGPT 全家桶
    'DOMAIN-SUFFIX,openai.com,AI-专用分组',
    'DOMAIN-SUFFIX,chatgpt.com,AI-专用分组',
    'DOMAIN-SUFFIX,oaistatic.com,AI-专用分组',
    'DOMAIN-SUFFIX,oaiusercontent.com,AI-专用分组',
    'DOMAIN-SUFFIX,auth0.com,AI-专用分组',
    // Anthropic Claude
    'DOMAIN-SUFFIX,anthropic.com,AI-专用分组',
    'DOMAIN-SUFFIX,claude.ai,AI-专用分组',
    'DOMAIN-SUFFIX,claudeusercontent.com,AI-专用分组',
    // Google Gemini & AI Studio
    'DOMAIN-SUFFIX,gemini.google.com,AI-专用分组',
    'DOMAIN-SUFFIX,aistudio.google.com,AI-专用分组',
    'DOMAIN-SUFFIX,generativelanguage.googleapis.com,AI-专用分组',
    'DOMAIN-SUFFIX,proactivebackend-pa.googleapis.com,AI-专用分组',
    // Perplexity & Cursor（可选扩展生产力工具）
    'DOMAIN-SUFFIX,perplexity.ai,AI-专用分组',
    'DOMAIN-SUFFIX,cursor.sh,AI-专用分组',
    'DOMAIN-SUFFIX,cursor.com,AI-专用分组',
  ];

  config.rules = [...aiRules, ...(config.rules || [])];
  return config;
}
```

### 第 4 步：保存脚本、重载订阅并手动锁好单个节点
1. 点击编辑框右下角 **保存 (Save)**；
2. 回到 **「订阅」** 页面，右键你正在激活的那张订阅卡，如果之前没勾过扩展，可以确认左上/右上“激活”处于高亮状态；最稳妥点一下顶部工具栏或卡片上的 **更新 / 重载配置** 图标；
3. 切到左侧 **「代理 (Proxies)」** 页面：
   - 顶上第一栏应该已经多出了一个全新的策略组 **`AI-专用分组`**！
   - 里面的节点排在前列的全部是新加坡节点（排后的是日本/美国）；
   - 点击组名里的 **测速小闪电图标** 测一轮连接耗时，然后 **点选并锁定一个有数字延迟的新加坡节点（例如 `新加坡 02`）**；
   - 而原来的 `Proxy / 节点选择` 默认日常组依然可以安安心心挂在 `香港 01` 上享最低延迟，**两路互相完全物理并行**！

---

## 四、成功验证：两分钟确认规则真正命中了“新加坡”，没偷跑回香港

不要光凭“能不能打开网页”猜测自己成功与否，一定要用客户端自带连接监视器亲自核验：

1. 点击左侧菜单 **「连接 (Connections)」** 页面，先清一遍旧日志（点击垃圾桶清除历史已闭合连接，防止旧残留误导）；
2. 用浏览器打开 `chatgpt.com` 或 `gemini.google.com` 并发送一句简短对话；
3. 切回 **「连接」** 页面，在上方搜索过滤框输入 `chatgpt` 或 `gemini`：
   - **正确生效状态**：你会看见匹配行的 `规则 (Rule)` 列清晰写着 **`DOMAIN-SUFFIX`**，而最右侧的 `链路 (Chains)` 列清晰指向 **`AI-专用分组 → 新加坡 02`**（即使你的主日常组此时依然连着香港 01！）；
   - **异常状况**：如果链路列写着 `MATCH` 或直接进了你的默认日常组指向了香港，说明第 1 步保存后配置未成功重载、或者扩展脚本开关在目标订阅里被屏蔽了。

---

## 五、5 个常见出错原因及立即解决办法

| 遇到的问题现象 | 根本技术原因 | 现场解决步骤 |
|---|---|---|
| **保存脚本时弹出语法报错提示** | 复制时漏掉最后的大括号 `}`、或把全角中文逗号引号粘进了代码里 | 删除重贴完整脚本；确保编辑文件框打开的是 `.js` 脚本编辑弹窗，不是 `.yaml` 文本合并框 |
| **规则没报错，但代理栏没有出现 `AI-专用分组`** | 目标机场给的节点命名根本没有使用上述常见地名（比如全写 `Singapore` 少见代号），或订阅脚本中已有同名组冲突 | 去「代理」页面抄写一两个该机场新加坡节点的精确名字字符串，替换到脚本第 6 行和第 15 行的正则表达式 `/.../i` 里 |
| **规则列显示命中 `AI-专用分组`，但浏览 ChatGPT 仍弹 `Unsupported country` 或 1020** | ① 浏览器存有前一次连香港节点种下的地区风控 Cookie；② 浏览器开着“安全 DNS (DoH)”绕开了拦截；③ 新加坡该尾号 IP 本身这几天临时被 OpenAI/CF 限制了 | ① 用无痕窗口测试；② 进 Chrome 设置关闭「使用安全 DNS」；③ 在 `AI-专用分组` 里手动往后点换一个新加坡冷门尾号或美国/日本节点 |
| **Claude 账号要求极严格，希望和 ChatGPT 分开锁定固定美西或日本节点怎么办？** | 上述示范将全部 AI 放在同一 `AI-专用分组` 里。只需复制脚本里的第 22–31 行，单独建一个名为 `Claude-单线锁定` 的策略组并只填入美/日节点，再把 `anthropic.com` / `claude.ai` 规则改指向 `Claude-单线锁定` 即可 |
| **普通网页好了，但终端用 Cursor 或 Claude Code 命令依然报错区域受限** | 桌面应用与终端不遵循浏览器的系统代理设置 | 到 Clash Verge Rev 的「设置」先确保已装「服务模式」并打开 **TUN 模式** 开关，让全部三层网络包一并进入脚本规则拦截 |
