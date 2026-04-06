# 基于 Xcode 与 Python 脚本的 iOS 虚拟路径校园跑方案

本方案通过自定义 Python 脚本生成标准化 GPX 路径文件，配合 Xcode 开发者工具实现 iOS 设备上的模拟位移，适用于校园跑路径测试与开发者调试。


## 🛠️ 环境要求

* **iOS 设备**: iOS 26.0+
* **控制端**: macOS 26.0+
* **开发工具**: Xcode (配套版本)
* **环境依赖**: Python 3.x


## 🚀 核心流程

### 1. 生成路径文件
* **Github仓库**: `GPXroute.py`见[Awesome-ZJU-Toolkit](https://github.com/lordofavem/awesome-zju-toolkit)子文件夹。使用脚本 `GPXroute.py` 可以快速生成符合操场规格的`.gpx`路径数据。该脚本支持 **400m/200m** 标准操场路径拾取。

* **获取坐标**: 推荐前往 [Google Maps](https://www.google.com/maps) 获取起始点的精确经纬度。
* **运行**:
    ```bash
    python GPXroute.py
    ```
* **使用**: 根据提示输入各项指标，脚本将自动导出 `route.gpx` 路径文件和 `preview.html` 预览文件，浏览器打开`preview.html`可查看路径效果，并基于此微调初始经纬度及偏转角度。

### 2. Xcode 配置
1.  **开启开发者模式**: 在 iOS 设备上进入 `设置 > 隐私与安全性 > 开发者模式` 并开启，可能需要设备重启。
2.  **连接**: 使用数据线将 iPhone 连接至 Mac，在 Xcode `Window > Devices and Simulators` 的Devices中确保自己的iPhone处于Connected状态。
3.  **导入路径**:
    * 新建一个iOS Xcode项目。
    * 将生成的 `.gpx` 文件拖入 Xcode 项目中。
4.  **启动调试**: 
    * 初次构建需要写入个人开发者证书，按照 Xcode 提示完成
    * 点击 Xcode 的 **Run** 按钮，应用部署在iPhone后，回到 Xcode，选中控制台栏中虚拟坐标，选择自己导入的`route.gpx`，此时手机的坐标就开始按照路径文件开始连续改变了。


## ⚠️ 注意事项

> [!IMPORTANT]
> * **坐标精度**: 请确保输入的起始点经纬度采用校园跑软件相同地图坐标系，以保证定位不偏离实际跑道。
> * **合规性**: 本方案仅供开发者技术交流与应用路径测试使用，请遵守相关学校及应用的使用守则。


## 🔗 参考与工具
* [Google Maps 坐标拾取](https://www.google.com/maps)
* [Apple Developer - Simulating Locations](https://developer.apple.com/documentation/xcode/simulating-locations-during-development)


**日期** 2026.04.06