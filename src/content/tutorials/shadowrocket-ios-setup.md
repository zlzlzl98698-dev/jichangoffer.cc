---
title: "Shadowrocket（小火箭）iPhone / iPad 安装、订阅导入与分流防坑教程"
description: "详述 iOS 正版 Shadowrocket 购买前 Apple ID 避坑守则、5 步标准机场订阅导入流程、全局路由必须选「配置 (Config)」的原因与防封防断流细节设置。"
primaryKeyword: "Shadowrocket 使用教程"
secondaryKeywords: ["小火箭下载", "iOS 机场客户端", "Shadowrocket 订阅导入", "小火箭全局路由设置"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "client-install"
parentTopicHref: "/tutorials/client-install/"
parentTopicLabel: "客户端安装教程"
contentType: "tutorial"
ctaMode: "task-only"
audience: "已经在 iPhone/iPad 上购买或准备获取正版 Shadowrocket（小火箭），从零完成配置的新手用户"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "client-install"
slugName: "shadowrocket-ios-setup"
platforms: ["iOS", "iPadOS"]
prerequisites: ["已备有非大陆区（如美区）Apple ID 且已在 App Store 正版付费买断", "所用机场支持开放第三方通用/Shadowrocket订阅"]
difficulty: "新手入门"
relatedBrandSlugs: ["guangsuyun", "xingdaomeng", "weitu", "yifan"]
answerFirst: "Shadowrocket（俗称小火箭）属于海外区 App Store 买断制付费应用，**未在中国大陆区上架**（国区同名应用均属山寨仿冒）。正版新手落地只需记住三个关键动作：① 只在「App Store 内部」切换海外账号下载，严禁去手机系统设置的 iCloud 登录任何不明共享 ID；② 复制机场后台推荐的通用订阅链接后点软件首页右上角 `+` 选 `Subscribe` 导入；③ 首页下方「全局路由」必须设为 **`配置 (Config)`**（绝不能保持 `代理`），这样国内微信、抖音全部高速直连且不会白烧套餐流量。"
sources:
  - "第三方代理客户端.txt（三、iOS / iPadOS 收费正版生态与购买风控警告）"
  - "Shadowrocket 官方功能规范及客户常见误配统计"
faqs:
  - question: "为什么中国区商店里搜出来的中文“免费小火箭”或者同名 VPN 绝对不能下？"
    answer: "苹果已将合规区域外的此类工具下架出中国大陆区商店。在大陆区任何能搜出带火箭图标或“Shadowrocket 指南/免流版”的免费应用，要么是骗充值的套壳订阅坑、要么里面插满了垃圾全屏广告甚至可能收集剪贴板输入内容。正版 Shadowrocket 在海外商店由固定开发者账号持续多年更新，且属于一次性买断制。"
  - question: "不想自己注册和充值购买美区礼品卡买小火箭，听说网上十几块买“共享号登录下载”可行吗？"
    answer: "极高风险！千万不要把不明商家给的共享 ID 登录进 iPhone **「设置 → 顶部姓名头像（Apple ID / iCloud）」**里——对方完全可以立刻通过网页端「查找我的 iPhone」把你的机器锁死变成板砖实施敲诈！实在不想自己购入海外付费应用，宁可免费注册个无卡海外号用开源的 [Karing / sing-box (SFI)](/tutorials/subscription/ios-free-sfi-karing-guide/)，安全得多。"
  - question: "为什么开了小火箭以后，微信图片半天发不出去、淘宝一直转圈，还把一个月 100GB 流量三天刷光了？"
    answer: "99% 的原因是首页正中间那个 **「全局路由 (Global Routing)」** 被错误点成了 **`代理 (Proxy)`**！只要变成代理模式，手机上的所有国产高清视频、网盘下载和 App 更新全部统统绕去海外节点再拉回国内，又卡又巨费流量。点进去改选回 **`配置 (Config)`** 并点开启重连即可秒好。"
  - question: "机场面板上给了 Clash 链接、V2Ray 链接和 Shadowrocket 一键导入按钮，小火箭用哪种最好？"
    answer: "最推荐直接在机场用户中心网页点「导入到 Shadowrocket」或在“复制通用 / Shadowrocket 订阅”拿到对应 Base64/标准列表网址手动贴进 `Subscribe`。如果不小心复制到了纯粹给 Clash 用的重度规则 `.yaml` 文件 URL，老部分版本小火箭解析规则结构不如专用或 `Subscribe` 链接来得干净。"
relatedLinks:
  - label: "Shadowrocket 客户端完整参数与定位档案"
    href: "/clients/shadowrocket/"
  - label: "Shadowrocket 分流优化与 iCloud 同步教程"
    href: "/tutorials/client-install/shadowrocket-remote-config-sync/"
  - label: "不想买收费小火箭？看 iPhone 免费 Karing 指南"
    href: "/tutorials/subscription/ios-free-sfi-karing-guide/"
  - label: "支持 Shadowrocket 通用订阅的机场数据库"
    href: "/brands/"
---

## 一、适用平台与安全获取正版前提

**Shadowrocket（小火箭）** 运行于全系 **iPhone（iOS）**、**iPad（iPadOS）** 以及配备 **Apple Silicon M 系列芯片的 macOS** 设备上，凭借极低内存消耗、极全主流协议支持（Shadowsocks、VMess、VLESS-Reality、Trojan、Hysteria 2、WireGuard 等），多年来一直是苹果生态里最受欢迎的第三方收费全能代理软件。

### 下载前必须守住的两条防线
1. **核实机场订阅开放度**：如果你买的机场明确是“只用自家官方 App，不发第三方链接”（如飞猫云、SOGO 云等），那买了小火箭也没订阅链接能往里导；小火箭适合所有支持标准订阅的品牌（比如光速云、星岛梦、一翻云、唯兔云等）。
2. **仅用安全自有海外 ID 在 App Store 下载**：使用自己注册的海外区 Apple ID 充值正规官方礼品卡正版买断，**彻底杜绝在系统 iCloud 输入陌生人账密**。如不打算花这笔软件费，直接转向站内免费替代攻略：[iOS 开源免费替代工具 Karing 与 SFI 使用手册](/tutorials/subscription/ios-free-sfi-karing-guide/)。

---

## 二、准备事项：登录下载与拷贝订阅地址

1. 在 iPhone 桌面进入 **蓝色图标 App Store** → 点右上角人像退出现有国区账户 → 登录后搜索 **`Shadowrocket`**（开发商为 **Shadow Launch Technology Limited**）下载安装，随后即刻在商店内切回常用国区 ID；
2. 用手机自带 Safari 浏览器登录你购买好的机场个人中心，找到“我的订阅 / 节点导入”栏：
   - 方法 A（一键法）：如面板提供 **`导入到 Shadowrocket`** 快捷按钮，直接点按并允许 Safari 弹窗“在 Shadowrocket 中打开”；
   - 方法 B（手工最稳法）：点击复制通用订阅 / Shadowrocket 订阅网址（即一串以 `https://` 开头的极长 URL 字符串）。

---

## 三、手把手实操配置：5 步完成安全导入与首次开机

### 第 1 步：手动导入机场订阅链接（如未用一键法）
1. 打开桌面安装好的 **Shadowrocket**；
2. 点击首页右上角的 **`+`** 加号按钮；
3. 顶端第一行 `类型 (Type)` 默认可能不是 `Subscribe`，点进去明确选为 **`Subscribe（订阅）`**！
4. 在 `URL` 输入框长按粘贴刚才复制的订阅地址；下面 `备注 (Remarks)` 随便填你的机场名称（例如 `光速云` 或 `星岛梦`）方便日后辨识多条订阅；
5. 点击右上角 **`完成 (Save)`**。此时软件会自动发起联网请求并拉取一整列表海外节点回首页。*(如果这一步转了半天报错无法获取，说明原机场官网主域在国内直连阻断，请先用手机网盘或官方发布备用订阅地址试试。)*

### 第 2 步：修正最致命的默认值——设置「全局路由」为 `配置`
回到 Shadowrocket 的最主屏 `首页`，重点检查中间靠上这一栏：
- 点进 **`全局路由 (Global Routing)`**；
- 里面有四项：`配置 (Config)`、`代理 (Proxy)`、`直连 (Direct)`、`场景 (Scene)`；
- **必须且只能点选 `配置 (Config)`（右边打上蓝色对勾）**！选好之后回到首页确认那行显示 **`全局路由 > 配置`**。

### 第 3 步：打开自动更新与测速选项优化
1. 点击右下角进入 **`设置 (Settings)`** → **`订阅 (Subscribe)`**；
2. 强烈建议开启 **`打开时更新 (Update on Open)`**，这样每次机场临时切换端口或增补新节点时，打开小火箭刷一下节点就是最新的。
3. 退回一层到 **`设置`** → **`延迟测试方法 (Latency Test Method)`**：
   - 将默认的 `ICMP`（极易被运营商防火墙拦截导致假超时）调整为 **`CONNECT`**（TCP 真实握手延迟，准确率更高）。

### 第 4 步：执行节点测速并挑一条适合当前用途的绿灯线
1. 回到主屏 **`首页`**，往下拉找到 **`连通性测试`** 蓝字按钮点击；
2. 等待两三秒，各个节点名字右侧会陆续亮出绿色毫秒数字（例如 `42 ms`、`79 ms`）；
3. 用手轻触点选你需要的节点（节点前面小黄圆点移动到这一行代表已激活当前出口）：
   - 平时刷网页看 YouTube：选延迟最小的 **香港** 节点；
   - 专门用来打开网页版 ChatGPT / Gemini：按照站内 [AI 节点分布实测](/articles/ai-unlock-node-selection/)，手动往下翻选一个 **新加坡** 或 **日本/美国** 绿色节点（或用下一篇配置进阶自动分组分流）。

### 第 5 步：拉亮顶部开关并通过 iOS 系统授权
1. 轻拨首页最顶端左侧那个灰色 **`未连接`** 总开关；
2. 系统首次弹出提示框：**`“Shadowrocket”想添加 VPN 配置`** → 点击 **`允许 (Allow)`** 并按屏幕指纹或 Face ID 解锁授权；
3. 几秒内顶部状态文字变为节点名、状态栏右上角或控制中心出现 `VPN` 标识，即代表正式跑通！

---

## 四、成功验证：确认两条边界没出偏差

1. **海外连通验真**：打开 Safari 或 YouTube App，观察视频缩略图与 Google 搜索能否一两秒加载出来。
2. **确认没误烧国内直连流量**：打开微信发一张高清图、打开 B 站看一集视频，此时切换到小火箭的 **底部「数据 / 统计」** 或 **「代理日志」** 查看（也可在测试前记一眼订阅剩余额度）：确认微信、百度、B 站都在走 `DIRECT`（不绕路、不走节点流量消耗）。

---

## 五、新手常见的 4 个报错与恢复方式

| 遇到问题现象 | 原因判断 | 解决做法 |
|---|---|---|
| **点首页加号添加之后报错解析失败 / 节点列表空的** | ① 错把其他软件的 YAML 链接直接按普通格式糊了；② 原本订阅 URL 复制残缺 | 登录机场中心确认复制的是「通用 / Shadowrocket」接口；若在受限校园网无法拉取，先切 5G 流量刷新订阅列表 |
| **点击连通性测试，几十个节点全部超时（Timeout）** | 若只是全部写着超时但实际其实能打开 Google，这是 `ICMP` 被禁所致；如果真一个网页都打不开，看流量余额/系统时间 | 先把「延迟测试方法」换为 **`CONNECT`** 再测！如果真断了，先核对手机系统时间与机场套餐是否到期、然后参考[全节点超时排查手册](/tutorials/subscription/subscription-troubleshooting/) |
| **原本都能连，切了一趟公司 Wi-Fi 回来后彻底连不上了** | 软件停留在旧网卡路由缓存没更新重连 | 首页先关闭最顶端总开关 → 切回 5G 或稳定 Wi-Fi 等待 3 秒 → 重新拨亮开关即可刷新底层隧道 |
| **连上之后普通网页很顺畅，但是 Claude/ChatGPT 依然报错** | 默认停在了最低延迟的香港节点上，或者没配分流规则单独将 AI 域送往新/日/美 | 手动点选新加坡节点测试；若不想天天来回切香港和新加坡，请紧接着配置进阶分流教程：[Shadowrocket 远程配置与多场景分流同步指南](/tutorials/client-install/shadowrocket-remote-config-sync/) |
