---
title: "iPhone 没买小火箭怎么用机场？免费开源客户端 sing-box (SFI) 与 Karing 指南"
description: "专为没有购买付费 Shadowrocket 的 iOS/iPadOS 用户打造：全面对比 Karing、sing-box (SFI) 与自研专属 App 三条免费路径，含 Karing 完整导入步骤与美区防坑注意。"
primaryKeyword: "iPhone 免费代理客户端"
secondaryKeywords: ["sing-box iOS SFI教程", "Karing iOS教程", "替代小火箭免费软件", "iPhone免费用机场"]
searchIntent: "Informational"
pillar: "使用教程"
cluster: "subscription"
parentTopicHref: "/tutorials/subscription/"
parentTopicLabel: "订阅与新手使用"
contentType: "tutorial"
ctaMode: "task-only"
audience: "手里用着 iPhone/iPad、不想专门花钱购买 Shadowrocket（小火箭）却希望安全免费跑通正版开源客户端的用户"
pubDate: 2026-11-21
updatedDate: 2026-11-21
topic: "subscription"
slugName: "ios-free-sfi-karing-guide"
platforms: ["iOS", "iPadOS"]
prerequisites: ["拥有一个常规可正常切换商店的非大陆区（如美区/港区/台区）免费 Apple ID，或直接选购自带自研客户端的机场"]
difficulty: "新手入门"
relatedBrandSlugs: ["guangsuyun", "feimao", "tiziyun", "yifan"]
answerFirst: "正版 Shadowrocket（小火箭）在海外 App Store 属于付费买断软件；但如果不愿为软件本身再花一笔钱，iOS 端依然有三条完全合法、免费且开源稳妥的方案：① **Karing**（目前对新手最友好的海外区免费开源 App，无需买小火箭就能直接兼容 Clash YAML、V2Ray 和 sing-box 订阅）；② **sing-box (SFI)**（官方原生免费内核客户端，极为省电流畅，但仅认原生 sing-box JSON 格式，要求机场后台明确提供 JSON 转换）；③ 直接选用配发自研独立客户端的品牌（如飞猫云、梯子云、光速云自研版），用账号登录即可省去导入。切忌在大陆区 App Store 下载任何标榜免费的小火箭仿冒壳。"
sources:
  - "第三方代理客户端.txt（三、iOS / iPadOS 平台开源生态说明）"
  - "Karing 与 sing-box (SFI) 官方架构文档对比 (/clients/karing/, /clients/sing-box/)"
faqs:
  - question: "Karing 和官方原版 sing-box (SFI) 相比，为什么更建议大多数 iPhone 新手先试 Karing？"
    answer: "关键在“订阅格式包容度”。市面上 90% 的机场面板默认只给你输出 Clash 订阅链接或 V2Ray 链接。官方的 sing-box (SFI) 对格式极为挑剔，直接往里贴标准 Clash YAML 是无法解析识别的；而 Karing 底层同样跑着高效的 sing-box 内核，却在前端自己内置了一层极好用的全格式转换器，直接贴上机场给的 Clash 链接一秒导入就能连。"
  - question: "下载 Karing 或 sing-box (SFI) 一定要自己花钱去注册美区带信用卡的 Apple ID 吗？"
    answer: "注册一个普通的海外区（比如美区、新加坡区）免费 Apple ID 在官网选择“无付款方式（None）”即可免费下载 Karing 与 sing-box (SFI)，不需要绑定海外银行卡也不必花钱买礼品卡充值。但**严禁去手机“系统设置 → 最顶部 iCloud”里登录别人分享的公共 Apple ID**，只在 App Store 商店应用右上角内部临时登录切换！最省心长远之计依然是按规范自己注册一个独享海外 ID。"
  - question: "中国大陆区 App Store 里确实搜出来一个“免费小火箭”或带 VPN 图标的简体中文 App，能下载吗？"
    answer: "千万别装！根据地区商店规则，包括 Shadowrocket、Karing、sing-box (SFI)、Stash、Quantumult X 在内的正规海外代理客户端全部未在中国大陆区上架。在国区能搜到的任何类似中文名称工具，基本都是蹭关键词上架的弹窗广告壳、山寨收费订阅坑或恶意数据收集包。"
  - question: "连海外 Apple ID 也不想注册的话，还有什么办法在 iPhone 上用吗？"
    answer: "如果完全不打算接触海外商店，你唯一安全稳妥的途径是选购**在文档或后台明确提供了官方自研 iOS 生态/TestFlight/企业描述方案的品牌**（如[飞猫云](/reviews/feimao/)、[光速云](/reviews/guangsuyun/)等自研端指南），或先用电脑配软路由给 Wi-Fi 分流。不过即便如此，拥有一个自己的海外免费 Apple ID 依然是最长远、不受品牌限制的底层投资。"
relatedLinks:
  - label: "Karing 客户端深入档案与下载验证"
    href: "/clients/karing/"
  - label: "sing-box 官方客户端 (SFI/SFA) 简介"
    href: "/clients/sing-box/"
  - label: "付费版 Shadowrocket (小火箭) 从零设置教程"
    href: "/tutorials/client-install/shadowrocket-ios-setup/"
  - label: "自研一键端 vs 开放第三方订阅机场怎么挑？"
    href: "/articles/exclusive-client-vs-third-party/"
---

## 一、适用设备与三条合规免费路线对比

很多刚换 iPhone 或给家人 iPad 配网络的读者都会问：“必须再掏钱买海外付费的 Shadowrocket 吗？”答案其实是否定的。随着近两年基于现代多核 **sing-box** 内核的新一代 iOS 开源生态崛起，不买小火箭也完全能用上丝毫不亚于付费工具的干净体验。

| 免费路径方案 | 代表应用 / 方案 | App Store 获取位置与成本 | 对机场订阅链接的要求 | 最适合哪类苹果用户？ |
|---|---|---|---|---|
| **方案 1：全格式免费开源之选** | **Karing** / Hiddify | **海外区 App Store 免费下载** | 极高兼容度：**Clash YAML / V2Ray / sing-box 全支持** | **绝大多数普通 iPhone/iPad 用户**（不愿买小火箭，又不想研究格式转换） |
| **方案 2：极客纯净原内核** | **sing-box (SFI)** | **海外区 App Store 免费下载** | 较严苛：**必须为原生 sing-box JSON** | 机场明确提供 sing-box 接口，或会自建转换规则追求极低耗电的用户 |
| **方案 3：品牌直供零配置端** | 飞猫云 / 光速云等自研 App | 随部分品牌官方指引渠道分发 | **免链接**，使用注册邮箱密码一键直连 | 连通用客户端与订阅界面都懒得看的纯小白 |

---

## 二、准备事项：安全切换商店与拿到对的订阅

1. **安全获取海外区免费 ID 的铁律**：
   - 在 iPhone 桌面打开蓝色图标的 **「App Store」** → 点右上角头像 → 拖到最底下点退出当前账号 → 登录你自己的海外免费账号即可下载（**绝对不能进系统灰色的「设置 → iCloud」换账号！防止远程被别人锁机抹除数据**）。
   - 下载完成后立刻退出海外商店重新登回自己的国区常用账号，已经装进桌面的 Karing 或 SFI **不会失效**（只需未来大版本更新时再次切回应用商店内部点一下更新）。
2. **核对订阅链接格式**：
   - 准备用 **Karing** 的用户，从机场后台复制最通用的 **Clash 订阅 URL**（几乎所有主流开放订阅品牌如光速云、星岛梦、一翻云、唯兔云都标配提供）；
   - 准备用 **sing-box (SFI)** 的用户，需专门在机场后台或转换菜单找到 **`sing-box` 专属 JSON 链接**；若没有，切回推荐度更高的 Karing 即可免去全部转换烦忧！

---

## 三、首选方案实战：Karing 从安装到联网完整 4 步

### 第 1 步：去海外区商店安装正品 Karing
在海外区（例如美区、港区）App Store 搜索框输入准确英文拼写 **`Karing`**，核对开发者标识与开源项目一致性（谨防仿冒山寨名，详细仓库源核对详见 [Karing 客户端专题页](/clients/karing/)），点击 `Get` 免费安装。

### 第 2 步：首次进入引导配置（避免后续分流全走代理）
1. 首次打开 Karing 时，界面通常会出现干净的简明新手引导，在语言选择界面选中 **`简体中文`**；
2. 遇到 **「所在国家或地区规则预设」** 询问时，一定要选择 **`CN / 中国大陆（开启分流绕过）`**！这一步极其重要，软件会自动帮你建好国内外分离表，确保微信、支付宝和国内视频直连，绝对不会傻傻全部绕道机场。

### 第 3 步：一键导入你的机场订阅
1. 从 Safari 或对应渠道复制好你的机场 **Clash 订阅 URL**（或 V2Ray Base64 地址）；
2. 切回 Karing 主界面 → 点进 **「配置 / My Profiles」**（或首页中心显眼的「+ 添加配置 / Import」加号入口）；
3. 选 **「从剪贴板导入 / 添加配置链接 (Add Profile Link)」**，粘贴链接并把名称改写为容易识别的牌子名；
4. 点击右上角 **确认 / 完成**，Karing 会在 2–3 秒内自动联网拉取节点组与规则并完成一次底层的格式规范映射。

### 第 4 步：允许系统 VPN 描述文件权限并选线开启
1. 回到 Karing 首页大开关，把控制钮拨亮开启；
2. iOS 首次会弹出安全确认窗：`“Karing”想添加 VPN 配置` → 点击 **`允许 (Allow)`** 并按提示输入锁屏密码/扫 Face ID（苹果系统的所有网络代理均借此标准框架实现，`VPN` 图标挂起属全平台标准合规表现）；
3. 进首页下方或右上卡片的节点列表，触发一次延迟测试，挑出绿色延迟的香港（日常浏览器）或新加坡/日本（ChatGPT/Gemini），即可顺畅冲浪！

---

## 四、如果坚持想用官方极简版 sing-box (SFI)，这 3 步必须注意

如果你偏爱官方原汁原味没有任何冗余外观的 **sing-box for iOS (SFI)**（App Store 免费获取，开发者即为核心作者）：
1. **切勿拿 Clash `.yaml` 网址直接导入**，那必定会提示 JSON 格式语法解析出错；
2. 登录机场用户中心查看 **“一键导入”** 旁边是否标注了 **`sing-box` 专属订阅地址**；若有，打开 SFI → 切换到底栏 **`Profiles`** → **`New Profile`** → 选 `Type: Remote` 粘贴该 URL 创建；
3. 如果某家小机场只给 Clash / Shadowrocket URL 没有给原生 sing-box JSON，不要折腾自己搭不安全的野鸡公开后端转订阅（**野鸡订阅转换后端极易截留明文节点账号和密码**！），直接安装前面讲的 **Karing** 是目前最省心且数据本地化的安全办法。

---

## 五、成功验证与日常省电小贴士

1. **验证分流是否生效**：连上 Karing 后，用 Safari 打开一次 `google.com` 或 `youtube.com` 确认秒出页面；再去查看一次国内 IP 归属页，确认显示的依旧是你本地省份宽带运营商——若国内页也显示香港或新加坡 IP，进 Karing 设置核对「分流模式」是否误切为 `全局 (Global)`，将其调回 `规则 (Rule)` 即可。
2. **关于后台耗电**：相比多进程常驻方案，基于新版 `sing-box` 内核的 Karing 与 SFI 在 iPhone 上内存控制在 30–50MB 级别且极度克制唤醒频率；平时不开代理开关不掉任何多余电量，用时一键拉起即可。
3. **常见误区提示**：如果在移动 5G 和家里 Wi-Fi 之间频繁无缝切换后页面突然卡住几秒转不动，关闭重启一次软件主开关重新建立系统路由即可迅速恢复。
