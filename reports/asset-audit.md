# 素材配图审计报告 (Asset Audit)

- **审计对象**：`c:\Users\Pro User\Desktop\光速云素材 (10) (3).docx` 解包出的 11 张图片
- **审计时间**：2026-11-21

| 原文件名 | 内容识别 | 审计结论 | 处理方式 |
|---|---|---|---|
| `image1.png` | `MiaoKo B1-订阅速度`（2025-12-02 13:08:40 CST，广东珠海联通 5Gbps，58/58 Trojan 节点，全节点 FullCone UDP） | **采用（Measured 历史证据）** | 复制至 `src/assets/evidence/guangsuyun-2025-12-02-trojan.png` 并接入光速云档案与评测报告 |
| `image2.png`–`image4.png` | 2025-12-11 62 节点广西移动/河北联通/长沙电信 MiaoKo 实测图 | **已去重** | 与 `光速云测试图解锁图/` 同源，保持既有实测图引用 |
| `image5.png` / `image6.png` | 旧版定价界面截图（显示极速版 ¥17/月 110GB、无界版 ¥130/月） | **淘汰不采用** | 与 2026-10/11 最新套餐价（¥25/168GB、¥138/900GB）冲突，避免误导用户 |
| `image7.png` | 光速云官方蓝底白 S 图标 Logo | **采用（Brand Logo）** | 复制至 `src/assets/logos/guangsuyun-icon.png` |
| `image8.jpeg` | 光速云横版图标 + 中文标准字 Logo | **采用（Brand Wordmark）** | 复制至 `src/assets/logos/guangsuyun-wordmark.jpg` |
| `image9.png` | 营销宣传图（含过时“月付17元”与绝对化承诺“不会跑路”） | **淘汰不采用** | 违反事实与合规边界规范 |
| `image10.png` / `image11.jpeg` | 3D 质感渲染图标（含右下角生成标识水印） | **保留作备选，优先使用无水印扁平 Logo (`image7`/`image8`)** | 暂不写入生产资产 |
