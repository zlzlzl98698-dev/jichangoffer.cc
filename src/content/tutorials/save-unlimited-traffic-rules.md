---
title: "永久不限时机场（与小流量年包）如何配置 Clash 省流量规则：把珍贵配额全留给刚需"
description: "专为买了 100GB–247GB 永久不限时包或 ¥96–¥99 轻量年付小包的用户编写：教你如何通过精准分流规则把 B 站视频、网盘下载、Windows 更新、Steam 与代码国内镜像严格锁死直连不偷跑流量。"
primaryKeyword: "不限时机场 Clash 省流量分流规则"
secondaryKeywords: ["省流量分流规则", "不限时机场怎么省流量", "Clash 直连规则设置", "防止偷跑代理流量"]
searchIntent: "Informational"
pillar: "价格与套餐"
cluster: "unlimited-time"
parentTopicHref: "/pricing/unlimited-time/"
parentTopicLabel: "不限时机场"
contentType: "tutorial"
ctaMode: "task-only"
audience: "手持光速云147永久包、唯兔云100GB包或60GB轻年付套餐，最怕某天大下载或系统自动更新一夜抽干珍贵流量额度的节约实用派用户"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "routing-rules"
slugName: "save-unlimited-traffic-rules"
platforms: ["Windows", "macOS", "iOS", "Android"]
prerequisites: ["使用支持第三方规则的客户端（Clash Verge Rev / Karing / Shadowrocket 等）", "拥有一份需长期精细省着用的小额/不限时流量套餐"]
difficulty: "常规配置"
relatedBrandSlugs: ["guangsuyun", "weitu", "xingdaomeng", "ermao"]
answerFirst: "买了不限时永久包（如 ¥147/247GB 不过期）最憋屈的事，不是正常查资料用掉流量，而是在没察觉的情况下因为 **开了全局模式、Windows/macOS 后台系统大包推送、Steam/苹果商店下载 CDN 或国内开发包镜像（npm/pip/Homebrew）误走代理节点**，一夜间白白蒸发掉几十 GB 永久配额！守住流量的三个标准操作：① 在 `规则 (Rule)` 模式下用全局扩展脚本把系统大下载更新、Steam 下载域名与国内开发镜像站全部置顶强制指向 `DIRECT`；② 若开着 TUN 模式，不要长期挂机下载 BT/网盘；③ 挑全节点明确 **`1x` 扣费倍率** 的套餐（如光速云极速/147口碑路线或星岛梦 1x）避免暗中双倍抽血。"
sources:
  - "Mihomo 规则匹配引擎与高流量 CDN 直连名单维护指南"
  - "不限时永久流量包成本核算 (/pricing/unlimited-time/)"
faqs:
  - question: "我明明只用 Google 查几个网页、问几句 ChatGPT，怎么后台一下子掉出去 15GB 流量？"
    answer: "头号元凶几乎都藏在后台！典型场景包括：**① 开着 Clash 的「全局 Global」模式却在下载 iPhone iOS 更新或 Win11 大补丁**；**② 开了 TUN 虚拟网卡，而电脑在后台自动更新 Steam 游戏库、OneDrive 同步或者迅雷/云盘正在传输超大包**，一旦其中几个 CDN 域名没写进订阅的 `DIRECT` 名单，就全部命中了末尾的 `MATCH -> Proxy` 飞奔出国消耗节点额度！"
  - question: "为什么看 YouTube 同一部教学视频，有人半小时才走 200MB，有人走了整整 3GB？"
    answer: "第一是分辨率设定不同！YouTube 桌面端在网速极其流畅时会自动飙进 `2160p 4K (60fps)`（1 小时轻松吞掉 **4–7 GB**！），而纯听课看代码的教学视频在播放器齿轮里手动固定选 `720p` 或 `1080p`，流量消耗直接暴降 70%–80%；第二务必检查你连上的节点名字后面有没有写着 **`2x` / `3x` / `5x` 高倍率扣费**！用着 `3x` 节点看视频，消耗相当于再翻三倍。"
  - question: "打开微信看公众号视频号和下载群文件，也会偷偷扣掉我机场套餐里的流量吗？"
    answer: "如果在正常的 **`规则 (Rule)` 模式** 下配合完善的中国 IP 绕过（`GEOIP,CN,DIRECT` + `GEOSITE,cn,DIRECT`），微信与国产 App 全部直连本地不扣机场 1KB 流量；**但如果不小心误切成了 `全局 (Global)` 模式**，那微信收发的每一条高清小视频、淘宝瀑布流图片、甚至国内测速全部都会先去香港绕一圈再回来，瞬间浪费大量额度。"
  - question: "手机用 Shadowrocket / Karing 怎么配合省流量，防止夜间自动耗流？"
    answer: "第一保证首页永远在 **`配置 (Config)`**；第二非重度使用期间（尤其是睡前或去挂 App Store 批量更新几 GB 游戏前）顺手点掉代理总开关让更新直接走本地高速宽带下载；第三可以在小火箭规则里核实 `MATCH` 前排好完善国内规则，避免任何漏网国产下载域跑进外网隧道。"
relatedLinks:
  - label: "永久不限时流量包机场全盘横向对比"
    href: "/pricing/unlimited-time/"
  - label: "月付、年付与不限时套餐精准算账对比"
    href: "/articles/monthly-vs-annual-vs-unlimited/"
  - label: "TUN 虚拟网卡安全使用及何时关闭防止泄漏"
    href: "/tutorials/tun-mode/tun-mode-explained/"
  - label: "光速云 147 永久包与唯兔云 100GB 包详情"
    href: "/compare/guangsuyun-vs-weitu/"
---

## 一、适用人群与日常省流第一铁律

无论你买的是 **光速云致敬斯诺克147永久套餐（¥147 / 247GB）**、**唯兔云不限时 100GB（¥100）**、**二猫云 128GB（¥128）**，还是每月仅 **60–69GB 的轻量化年付小包**，按照单 GB 真实价值来说，永久包的每 1GB 往往值 **¥0.60–¥1.00**！

省着用不等于让你委屈巴巴不敢查资料，而是**坚决不能把每 GB 价值一块钱的高速跨境通道，傻傻浪费在“明明本地宽带零成本直接能下载”的超大文件传输与高分辨率无感缓存上**。

---

## 二、五大“流量偷跑黑洞”清单及拦截方案

在开始配置脚本前，先把后台最能悄无声息抽干账户流量的 5 个元凶揪出来：

| 偷跑黑洞 | 为什么它会绕进机场耗光流量？ | 正确封堵解决招数 | 预计省流比例 |
|---|---|---|---|
| **1. 游戏平台与系统大更新（Steam / Xbox / Apple Store / WinUpdate）** | 在规则匹配不够精确的订阅中，部分海外分发节点域名或苹果更新 CDN 往往命中了境外代理规则甚至被 `MATCH` 吞掉，下载一次 60GB 游戏包直接清空账户 | 在覆写规则最顶部明确把系统更新、游戏内容下载域名（如 `steamcontent.com`、`dl.delivery.mp.microsoft.com`、`updates.cdn-apple.com`）强制指回 **`DIRECT`** | 单次即可挽回 **20–80 GB** 冤枉亏损 |
| **2. 高清视频默认自动拉满 4K HDR** | 桌面浏览器看 YouTube / X 视频，专线够快时播放器默认自动锁定 2160p 最高码率 | 纯看科普/教程/资讯视频时点播放器设置手动固定选 `1080p` 或 `720p` | 立省 **65%–80%** 视频流量消耗 |
| **3. 开发环境大包与容器镜象（Docker / npm / pip / conda / Maven）** | 开发者开着 **TUN 模式** 在终端拉几 GB 的开源仓库或者模型权重，全额吞噬节点流量 | 把 `docker.mirrors`、国内高校源与国内可直连代码镜像设 **`DIRECT`**，或大文件下载期间临时关掉代理/改走国内加速镜像 | 单日可省 **10–50 GB** |
| **4. 误点“全局模式 (Global)”忘切回来** | 只要忘了切回 `Rule`，连腾讯会议、爱奇艺、网易云音乐和百度云同步全走了一遍海外专线 | 养成锁死 **`Rule` (规则模式)** 习惯，用完特殊全局测试立刻切回，彻底杜绝全局误挂 | 避免全网日常流媒体白耗 |
| **5. 踩中“隐形高倍率节点”（如 3x / 5x）** | 没看清节点末尾括号里写的 `(x3)` 或 `(×5)`，实际在网页看 1GB 视频直接从账户里减去 5GB 配额 | 优先选用像[星岛梦全线 1x](/reviews/xingdaomeng/)或标明 `1x` 节点；在客户端里给标注了 `2x`/`3x`/`5x` 的高倍数节点取消自动选用权 | 直接防止 **2–5 倍** 额外扣除 |

---

## 三、手把手实操配置：把“高耗流 CDN 直连白名单”注入 Clash Verge Rev

无需逐行去机场原文件中乱改，使用 **Clash Verge Rev → 订阅 → 全局扩展脚本（Script）** 将高耗流更新域名与常见国内镜像加速点全部优先拦截回 **`DIRECT`（本地直连，100% 走你家里拉的免费宽带）**：

```javascript
function main(config) {
  // 1. 定义需要严格锁定走本地宽带直连 (DIRECT) 的高消耗更新/下载/软件分发域名
  const saveTrafficDirectRules = [
    // 游戏平台超大文件包下载域（保留商店登录走代理，仅让几十 GB 游戏包下载走国内 CDN 直连！）
    'DOMAIN-SUFFIX,steamcontent.com,DIRECT',
    'DOMAIN-SUFFIX,steamserver.net,DIRECT',
    'DOMAIN-KEYWORD,steamcache,DIRECT',
    'DOMAIN-SUFFIX,epicgames.com,DIRECT',
    // 微软 Windows 系统大型补丁更新与 Microsoft Store 大包分发
    'DOMAIN-SUFFIX,windowsupdate.com,DIRECT',
    'DOMAIN-SUFFIX,update.microsoft.com,DIRECT',
    'DOMAIN-SUFFIX,dl.delivery.mp.microsoft.com,DIRECT',
    // 苹果生态固件更新与 App Store 大型本地分发 CDN
    'DOMAIN-SUFFIX,updates.cdn-apple.com,DIRECT',
    'DOMAIN-SUFFIX,updates-http.cdn-apple.com,DIRECT',
    'DOMAIN-SUFFIX,iosapps.itunes.apple.com,DIRECT',
    'DOMAIN-SUFFIX,osxapps.itunes.apple.com,DIRECT',
    // 常见国产网盘及学术/开发镜像直连加固防穿透
    'DOMAIN-SUFFIX,baidupcs.com,DIRECT',
    'DOMAIN-SUFFIX,aliyundrive.com,DIRECT',
    'DOMAIN-SUFFIX,alipan.com,DIRECT',
    'DOMAIN-SUFFIX,tsinghua.edu.cn,DIRECT',
    'DOMAIN-SUFFIX,ustc.edu.cn,DIRECT',
    'DOMAIN-SUFFIX,npmmirror.com,DIRECT',
    // 常见进程强制直连（如装有 BT 工具/国内下载器开 TUN 时彻底屏蔽）
    'PROCESS-NAME,qbittorrent.exe,DIRECT',
    'PROCESS-NAME,Thunder.exe,DIRECT',
    'PROCESS-NAME,BaiduNetdisk.exe,DIRECT',
  ];

  // 注意：若你已有 AI 分流脚本（如 openai 走新加坡），可将两段脚本合并放在一个 main(config) 里！
  config.rules = [...saveTrafficDirectRules, ...(config.rules || [])];
  return config;
}
```

### 操作检查与生效步骤
1. 打开 **Clash Verge Rev → 订阅 → 全局扩展脚本**（若你前面已经配好了 [AI 独立分流脚本](/tutorials/routing-rules/clash-verge-override-ai-routing/)，**不要建两个冲突函数**，直接把上面那个 `saveTrafficDirectRules` 数组插合并在原有 `main(config)` 里面的 `aiRules` 前后即可！）；
2. 保存脚本 → 重新点击生效卡的刷新加载；
3. 进入 **代理 (Proxies)**，确认模式保持在 **`规则 (Rule)`**，且把任何带有 `2x / 3x / 5x / 10x` 字符的高倍率专线全部挪开不予选用。

---

## 四、移动端（Shadowrocket / Karing）配套省流 3 个习惯

在 iPhone 与安卓手机上虽然较少一口气下几十 GB 软件，但照样有几个极容易偷耗电及流量的细节要卡住：
1. **在苹果系统设置关掉“App Store 自动后台更新”或下载大更新前顺手断开代理**：虽然上面写了苹果部分分发直连域，可遇到整包 4GB 游戏切换更新源时，直接下拉控制中心/切掉代理总开关让宽带跑直连最为彻底安心；
2. **绝不把微信视频号与抖音刷图带进全球代理**（保持在小火箭「配置 (Config)」与 Karing「规则 (Rule)」状态）；
3. **养成每两周点开一次机场官网用户中心“流量明细图”的习惯**：观察每日柱状图如果发现某一天柱子异常冲破 10GB，回想一下那天电脑是不是一直在跑什么同步备份进程或下错大模型安装包，立刻把对应的 `PROCESS-NAME` 进程名放进上面直连表即可。

---

## 五、成功验证与省流上限评估

按照上述方式隔离高耗大包之后，查看客户端 **「连接 (Connections)」** 搜索测试：
- 当启动一次 Steam 游戏大更新下载或从阿里/清华开发镜像拉包时，规则列表稳稳显示 **`DOMAIN-SUFFIX -> DIRECT`**，而右侧上传下载速度跑满你本地千兆宽带且机场节点计数器纹丝不动！
- 此时像 **光速云 147 永久包（247GB）** 配合日常文字 AI + 查学术资料 + 偶尔看 1080P 教程视频，正常轻度消费者妥妥使用 **18–24 个月以上** 完全绰绰有余！
