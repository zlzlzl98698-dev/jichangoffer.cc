---
title: "Fake-IP 与 Redir-Host 有什么区别？DNS 泄漏自测与浏览器 DoH 冲突修复"
description: "深入对比 Mihomo 与 sing-box 客户端中的 Fake-IP 与 Redir-Host 两种 DNS 解析架构；手把手解决关代理后 198.18.x.x 断网残留、Chrome DoH 冲突与 AI 节点防泄露。"
primaryKeyword: "Fake-IP和Redir-Host区别"
secondaryKeywords: ["DNS泄漏怎么解决", "浏览器安全DNS冲突", "198.18.0.1打不开", "Redir-Host模式"]
searchIntent: "Informational"
pillar: "故障排查"
cluster: "dns-error"
parentTopicHref: "/troubleshooting/dns-error/"
parentTopicLabel: "DNS 错误排查"
contentType: "knowledge"
ctaMode: "task-only"
audience: "使用 Clash Verge Rev、Mihomo、sing-box 或 OpenWrt 插件且遇到域名解析缓慢、断网残留或地址定位露馅的用户"
relatedArticleSlugs: ["campus-enterprise-network-protocols", "ai-unlock-node-selection", "openwrt-nikki-vs-openclash"]
pubDate: 2026-11-21
updatedDate: 2026-11-21
category: "故障排查"
relatedBrandSlugs: ["guangsuyun", "yifan", "xingdaomeng"]
answerFirst: "Fake-IP 与 Redir-Host 的核心差别在于“本地拿到的解析结果是不是真实公网 IP”：Fake-IP 会由代理客户端内核直接给应用程序返回一个内网保留段虚拟 IP（典型为 `198.18.0.1/16`），等真正建立连接时再由远端代理节点直接用域名去发起解析，响应几乎零等待且彻底避免本地发海外 DNS 请求造成的污染与泄漏；Redir-Host 则向外部 DNS 查回真实 IP 并记录域名映射后再分流，开销略高但更兼容企业内网 VPN、虚拟机或必须验证真实 IP 的专业软件。"
sources:
  - "Mihomo 内核与 sing-box 官方 DNS 路由架构规范"
  - "站内故障排查指南（DNS 错误与 TUN 模式协同恢复记录）"
faqs:
  - question: "为什么彻底退出代理软件后，打开某个海外或国内开发站点直接报错，ping 一下显示 198.18.0.x？"
    answer: "这就是典型的 Fake-IP DNS 缓存残留。当软件正常运行时曾向浏览器或操作系统返回 `198.18.x.x` 这个临时假地址，如果软件闪退、死机或强行杀进程而没来得及刷新缓存，浏览器在关掉代理后仍按记录访问假地址，自然无法通信。执行 `ipconfig /flushdns`（Windows）或刷新系统 DNS 缓存并彻底重启浏览器即可恢复。"
  - question: "打开 Chrome 或 Edge 的“使用安全 DNS（DoH）”功能为什么会让分流大面积乱套？"
    answer: "因为一旦浏览器启用内部 DoH，它会自己走 HTTPS 直接去问外部加密 DNS 服务器解析目标 IP，客户端监听的 53/1053 DNS 拦截口压根没拿到这次域名请求。结果浏览器拿着真实 IP 发起连接，代理客户端看不到域名字符串，就既无法精准执行 `DOMAIN-SUFFIX` 规则，也不可能生效 Fake-IP 替换。"
  - question: "开启 Fake-IP 模式后，国内视频网站（如 B 站、爱奇艺、银行网银）会不会也拿到 198.18 假 IP 然后变卡？"
    answer: "正确配置下不会。正规支持分流的规则体系都会配合 `fake-ip-filter`（假 IP 跳过白名单），将国内常用域、局域网地址、时间同步域名（`ntp`）和连接测试接口排除出假 IP 池，让它们直接拿到直连真实 IP，只把需要规则审视或海外访问的域名留给 Fake-IP 处理。"
  - question: "公司内网需要用企业 VPN，开 Fake-IP 就连接失败，必须彻底放弃吗？"
    answer: "不必彻底放弃。只需把公司内部专用域名后缀（如 `*.corp.example.com`）加进客户端的 `fake-ip-filter` 跳过列表并设为 `DIRECT`；如果公司 VPN 对底层虚拟网卡要求极其苛刻，直接在当前 Profile 改为 `Redir-Host` 模式往往更省心。"
relatedLinks:
  - label: "DNS 错误与断网恢复排查总表"
    href: "/troubleshooting/dns-error/"
  - label: "TUN 虚拟网卡开关与断网急救教程"
    href: "/tutorials/tun-mode/"
  - label: "OpenWrt 24.10 插件方案比较"
    href: "/articles/openwrt-nikki-vs-openclash/"
  - label: "校园网与企业内网协议兼容性分析"
    href: "/articles/campus-enterprise-network-protocols/"
---

## 一、底层原理解剖：一次网页请求里的两条分叉路

绝大多数刚接触 Clash Verge Rev、sing-box 或 OpenClash 的用户在配置界面看到 **“enhanced-mode: fake-ip / redir-host”** 开关时都会感到困惑。其实理解两者的差异，只需要看清系统在发起访问的“第 0.01 秒”发生了什么：

### 1. Redir-Host 模式的流程（先查出真地址，再决定去哪边）
1. 你在浏览器敲下目标域名；
2. 客户端拦截 DNS 查询，按照规则判断该域名属国内（发给阿里/腾讯公共 DNS 查真实国内 IP）还是属海外（通过加密通道查海外 DoH 得到真实海外 IP，或结合 `fallback-filter` 检查结果污染度）；
3. 客户端把查回来的真实 IP 递给浏览器，并在内存里悄悄记住“这个真实 IP 刚才对应的是某个域名”；
4. 浏览器拿着真实 IP 发起连接时，客户端靠映射表（以及近年的 TLS SNI 嗅探补充）认出目标站点，再匹配最终的直连或香港/新加坡节点策略。

**痛点所在**：步骤 2 往往要等一次甚至多次真实远端 DNS 往返，如果规则判断和远端解析略卡顿，首屏开启瞬间就慢半拍；更关键的是如果某个 App 自己缓存了真实 IP 或跳过本地 DNS，本地很容易把国内解析的污染结果传给系统，引起 **DNS 泄漏（DNS Leak）**。

### 2. Fake-IP 模式的流程（先发临时“取餐号”，真正出站再核对）
1. 你在浏览器敲下目标域名；
2. 如果域名不在 `fake-ip-filter` 直连白名单里，客户端**甚至不先向任何外部 DNS 发起耗时等待查询**，直接在微秒级内从保留网段（通常是 `198.18.0.1/16`）抽一个虚拟假地址（例如 `198.18.1.42`）回给浏览器；
3. 浏览器立刻兴冲冲地带着 `198.18.1.42` 把数据塞给本地代理客户端/TUN 网卡；
4. 客户端一翻账本发现 `198.18.1.42 = openai.com`，直接拿着原始域名字符串匹配路由规则，如果该走新加坡节点，就把 `openai.com` 交给远端新加坡节点服务端自己去就地解析与建连。

**优势所在**：本地几乎永远零等待，且真正访问海外敏感工具、流媒体时，本地运营商宽带压根没有向外发过海外域名的真实 DNS 查询包，防泄漏天然拉满，海外节点的就地 DNS 也往往能直接匹配最近的 CDN 边缘节点！

---

## 二、全面对比矩阵：日常什么时候选 Fake-IP，什么时候退回 Redir-Host？

| 比较维度 | Fake-IP（默认现代推荐） | Redir-Host（经典兼容模式） |
|---|---|---|
| **域名首次握手响应** | **微秒级返回**，不卡顿本地递归等待 | 受 `nameserver` 与 `fallback` 质量影响，偶有首次发呆 |
| **防 DNS 泄漏表现** | **极强**（海外请求不在本地做传统 A/AAAA 真实解析） | 依赖 `fallback` 分流链配得是否严格，配置稍有遗漏易泄漏 |
| **规则引擎识别准确度** | **100% 原始域名精准直连**（不依赖反查/Sniffer 碰运气） | 若多线程并发同 IP 不同域名（如共享 CDN），映射记录偶尔发生错位 |
| **与游戏/企业 VPN/特定工具兼容度** | 若未在 `fake-ip-filter` 排除特定内网/联机域，虚拟 `198.18` 地址会导致第三方程序校验异常 | **天然返回真实可校验 IP，兼容性最为稳定扎实** |
| **意外崩溃残留破坏** | 进程被强杀后系统短时间内仍可能存留假 IP 缓存 | 几乎不存在“返回保留内网假地址导致断网”的后遗症 |

---

## 三、四个因 DNS 冲突引发的真实高频故障怎么一步修复？

### 故障 A：为什么开了全局或规则分流，ChatGPT/Netflix 还是识别出我本地真实国家？
- **首要元凶**：Chrome / Edge / Firefox 浏览器内置的 **「安全 DNS / DNS over HTTPS」** 开关处于开启状态。
- **修复步骤**：
  1. Chrome 地址栏输入 `chrome://settings/security`（Edge 为 `edge://settings/privacy`）；
  2. 找到 **「使用安全 DNS」**，将其彻底关闭；
  3. 同步检查 Mac/Windows 系统“网络适配器设置”里是否以前手动填写过写死的公共 DoH，并确保客户端已接管 DNS 监听或开启 TUN。

### 故障 B：在微信里点不开卡片、QQ 空间/网银加载极慢，甚至公司钉钉发不出图？
- **原因诊断**：机场订阅自带的 `fake-ip-filter` 列表过于简陋，把微信长连接、腾讯文件 CDN、网银安全控件域名也吞进了 `198.18.x.x` 虚拟 IP 池里，部分国产客户端硬核检查发现目标地址居然不是真实公网段就直接罢工。
- **修复步骤**：
  1. 检查并在订阅规则/全局覆写里补齐完善的国内直连 Skip 池（包含 `*.qq.com`、`*.weixin.com`、`+.msftconnecttest.com`、国内常用 ntp 授时域名以及路由器管理网域）；
  2. 如你是高度依赖内网 ERP、远程桌面 RDP 的办公人员，直接将该设备固定切换回 **Redir-Host** 并保持 DNS `nameserver` 为 `223.5.5.5` / `119.29.29.29`。

### 故障 C：在软路由（OpenWrt）搭配小米盒子/Switch 玩主机联机时 Fake-IP 频繁抽风？
- **原因诊断**：主机系统、智能电视和特定局域网 NAT 测试工具会主动检测本地获取到的真实公网路由连通性（如 `stun.*` STUN NAT 穿透包）。一旦 STUN 域名被回成假 IP，游戏主机直接显示 NAT D 或断网。
- **修复步骤**：将所有主流游戏大厅域名、PSN/Xbox/Nintendo 测速与 STUN 域名放入 `fake-ip-filter`，或在 OpenWrt OpenClash/Nikki 设置内将相关主机设备 MAC/IP 从复杂假 IP 接管池里隔离，改用更稳健的真实 IP 策略。

### 故障 D：强行关机或卸载软件后，部分网站彻底死活打不开（显示 198.18.x.x）
按对应系统清理全部残留 DNS 缓存：
- **Windows**：右键开始菜单打开管理员终端（PowerShell / CMD），运行：
  `ipconfig /flushdns`
- **macOS**：打开终端运行：
  `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
- **Chrome 专属内置池**：地址栏访问 `chrome://net-internals/#dns` 点击一次 **Clear host cache**，随后彻底退出并重启整个浏览器进程。

---

## 四、怎么客观检查当前存不存在 DNS 泄漏？

配置完之后，不需要靠猜，用两个干净无干扰的方法 30 秒验真：
1. 在确认已经关闭浏览器内置 DoH、并且代理模式保持为日常 `Rule`（规则模式）下，打开公开的网络与 DNS 检测站点（如 BrowserLeaks DNS 页面）；
2. 观察页面列出的 **DNS Server Country / ISP Flag**：
   - 如果你在用新加坡或香港节点，结果栏里出现的 DNS 解析点**全部归属海外服务器（如对应机场出口当地机房/Cloudflare/Google 边缘点）**，且**没有出现你本地国内省份宽带运营商名称（如某省电信/联通/移动 DNS）**，说明海外分支无泄漏；
   - 如果页面赫然挂着你老家省会的运营商 DNS IP，立刻检查代理客户端的 `DNS` 功能是否根本没启用，或者是否因为浏览器 DoH/iOS 私有地址干扰导致分流落空。

---

## 五、总结选择口诀

日常浏览、高强度依赖 AI 工具或流媒体解锁、想追求最低延迟秒开感受，**首选开启 Fake-IP + 完善 `fake-ip-filter` + 关掉浏览器 DoH**；只要碰到企业 VPN 阻断、特定 P2P/金融控件校验真实 IP、或者需要跟局域网特定服务做强绑定，**毫不犹豫切回 Redir-Host**。工具模式本身没有绝对谁更好，选贴合自己机器软件栈的那一档才是稳定之道。
