# iOS Virtual Path Campus Run Solution based on Xcode and Python Scripts

This solution generates standardized GPX path files via custom Python scripts, combined with Xcode developer tools to achieve mobile displacement simulation on iOS devices. It is suitable for campus run path testing and developer debugging.

## 🛠️ Environment Requirements

* **iOS Device**: iOS 26.0+
* **Control Node**: macOS 26.0+
* **Development Tool**: Xcode (Matching version)
* **Environment Dependency**: Python 3.x

## 🚀 Core Process

### 1. Generating Path File
* **Github Repository**: See `GPXroute.py` in the [Awesome-ZJU-Toolkit](https://github.com/lordofavem/awesome-zju-toolkit) subfolder. You can quickly generate `.gpx` path data conforming to track specifications using the `GPXroute.py` script. This script supports **400m/200m** standard running track path picking.

* **Get Coordinates**: It is recommended to use [Google Maps](https://www.google.com/maps) to obtain the precise start point latitude and longitude.
* **Run**:
    ```bash
    python GPXroute.py
    ```
* **Usage**: Input various indicators according to the prompt. The script will automatically export the `route.gpx` path file and `preview.html` preview file. Open `preview.html` in the browser to view the path effect and fine-tune the initial latitude/longitude and deflection angle based on this.

### 2. Xcode Configuration
1.  **Enable Developer Mode**: On the iOS device, go to `Settings > Privacy & Security > Developer Mode` and enable it; a device restart may be required.
2.  **Connect**: Connect the iPhone to the Mac using a data cable. Ensure your iPhone is in the Connected state in Xcode `Window > Devices and Simulators` under Devices.
3.  **Import Path**:
    * Create a new iOS Xcode project.
    * Drag the generated `.gpx` file into the Xcode project.
4.  **Start Debugging**: 
    * The first build requires writing a personal developer certificate, complete according to Xcode prompts.
    * Click the Xcode **Run** button. After the app is deployed on the iPhone, return to Xcode, select the virtual coordinates in the console bar, and choose your imported `route.gpx`. At this point, the phone's coordinates will start to change continuously according to the path file.

## ⚠️ Notes

> [!IMPORTANT]
> * **Coordinate Accuracy**: Please ensure the input starting coordinates use the same map coordinate system as the campus running app to prevent deviation from the actual track.
> * **Compliance**: This scheme is only for developer technical exchange and application path testing. Please abide by the relevant school and application usage codes.

## 🔗 References & Tools
* [Google Maps Coordinate Picking](https://www.google.com/maps)
* [Apple Developer - Simulating Locations](https://developer.apple.com/documentation/xcode/simulating-locations-during-development)

**Date** 2026.04.06
