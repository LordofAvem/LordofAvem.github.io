# 基于 Playwright 与 Bark 推送的网页签到监控方案

本方案通过 Python 脚本结合 Playwright 自动化浏览器，实现对浙江大学课程平台签到页面的实时监控；当检测到“雷达点名”或“数字点名”等关键字时，立即触发 Windows 本地弹窗与 iPhone 推送提醒，适用于在线课程签到场景下的辅助提醒。


## 🛠️ 环境要求

* **操作系统**: Windows 10 / 11
* **运行环境**: Python 3.13+
* **移动端设备**: iOS 26.0+


## 🚀 运行流程

### 0. 环境配置
* **安装依赖**:
    ```bash
    pip install -r requirements.txt
    ```

* **Bark 配置**:
  * 在 iPhone 上安装 Bark App
  * 获取设备 Token（即 Bark Key）
  * 填入脚本中的 `BARK_KEY`


### 1. 启动监控脚本
* **运行脚本**:
    ```bash
    python main.py
    ```

* **登录流程**:
  * 浏览器自动打开签到页面
  * 手动完成登录
  * 回到终端按回车，开始监控


### 2. 自动检测逻辑

脚本将执行以下循环流程：

1. 定时刷新页面（默认每 5 秒）
2. 检测页面中是否出现以下关键字：
   * “雷达点名”
   * “数字点名”
3. 若检测到关键字：
   * 触发 Windows 系统提示音
   * 弹出最上层提醒窗口
   * 通过 Bark 推送至 iPhone
4. 若关键字消失：
   * 重置状态，等待下一次检测


## 🔔 提醒机制

### 本地提醒（Windows）
* 使用 `winsound` 播放系统提示音
* 使用 `tkinter` 创建最上层弹窗（避免被遮挡）

### 移动端提醒（iPhone）
* 基于 Bark 推送服务
* 支持：
  * 锁屏通知
  * 声音提醒
  * 后台接收（无需打开 App）


## ⚠️ 注意事项

> [!IMPORTANT]
> * **登录状态**: 脚本依赖浏览器登录态，请勿关闭浏览器或退出登录。
> * **关键字匹配**: 若平台更新文案（如“签到”替代“点名”），需同步修改 `KEYWORDS`。
> * **网络环境**: iPhone 需保持联网状态以接收 Bark 推送。
> * **频率控制**: 过低的刷新间隔可能增加服务器压力，建议 ≥5 秒。


## 🔗 参考与工具

* [Playwright 官方文档](https://playwright.dev/python/)
* [Bark 推送服务](https://github.com/Finb/Bark)
* [浙江大学课程平台](https://mcourses.zju.edu.cn/ongoing-rollcall-list)
