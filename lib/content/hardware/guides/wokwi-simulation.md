# 1-Click Wokwi Browser Simulation & ROS 2 Export 🧪

Test your Dart firmware in an interactive web-based hardware simulator without physical wiring or risk of hardware damage.

---

## 🚀 Exporting a Simulation Bundle

```dart
import 'dart:io';
import 'package:flint_hardware/flint_hardware.dart';

void main() async {
  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);

  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);
  final drive = rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  // 1-Click Multi-Language Export
  final outputDir = Directory('build/rover_demo');
  await rover.exportBundle(outputDir);

  print('Simulation bundle generated in ${outputDir.path}/');
}
```

---

## 📦 Generated Bundle Artifacts

When `exportBundle()` is invoked, Flint Hardware generates:

1. **`diagram.json`**: An auto-wired Wokwi breadboard schematic connecting MCU GPIOs to ultrasonic sensors, DC motors, and LEDs.
2. **`wokwi.toml`**: Simulator configuration file ready for browser execution.
3. **`firmware.c` / `firmware.cpp`**: Zero-overhead register-level C99 firmware.
4. **`ros2_node.py`**: A ROS 2 node that subscribes to `/cmd_vel` for velocity commands and publishes `/scan` sonar ranges.

---

## 🌐 Launching Wokwi

1. Open [wokwi.com](https://wokwi.com).
2. Load the exported `diagram.json` and `firmware.c`.
3. Press **Play** to simulate sensor readings and motor responses in real time!
