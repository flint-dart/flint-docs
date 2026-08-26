# Flint Hardware & Robotics ⚡

Flint Hardware brings **declarative Dart, Edge AI computer vision, robotics kinematics, and multi-MCU compilation** to embedded systems and robotics. Write firmware, sensor drivers, quantized TFLite inference loops, and swarm mesh telemetry in 100% pure Dart, and export to C99, C++, MicroPython, ROS 2, and instant Wokwi browser circuits.

---

## 🎯 Key Pillars

| Pillar | Description | Supported Targets |
| :--- | :--- | :--- |
| **Universal MCU Target Matrix** | Compiles declarative Dart ASTs into optimized C99, register-level drivers, or MicroPython. | ESP32, ESP32-CAM, nRF52840, STM32F4, RP2040 Pico |
| **Edge AI & Computer Vision** | On-board camera driver & quantized TensorFlow Lite Micro tensor arena for real-time vision. | ESP32-CAM (OV2640), ESP32-S3 |
| **Robotics Kinematics** | Differential drives, PWM H-bridge motor controllers, 50Hz radar sweep servos, and encoder odometry. | Autonomous Rovers, Robot Arms |
| **Sensor Fusion Drivers** | Built-in drivers for Sonar, 6-Axis IMU (gyro/accel), climate sensors, I2C, SPI, and UART. | HC-SR04, MPU6050, DHT22, BME280 |
| **Wireless Swarm Mesh & BLE** | P2P self-healing swarm broadcasting and Bluetooth Low Energy battery/device info services. | Multi-Robot Swarms, IoT Nodes |
| **1-Click Wokwi & ROS 2 Export** | Generates complete Wokwi `diagram.json` browser circuits and ROS 2 `/cmd_vel` & `/scan` nodes. | Instant Browser Simulation & ROS 2 |

---

## 📦 Installation

Add `flint_hardware` to your Dart project:

```bash
dart pub add flint_hardware
```

---

## 💡 Quickstart 1: Edge AI Vision Guard (ESP32-CAM + TFLite Micro)

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final visionGuard = FirmwareBuilder('cam_guard', target: BoardTarget.esp32Cam);

  // 1. Configure On-Board Camera (OV2640)
  visionGuard.camera(
    resolution: CameraResolution.qvga,
    format: PixelFormat.rgb565,
    frameRate: 15,
  );

  // 2. Load Quantized TFLite Micro Model
  final model = visionGuard.tfliteModel(
    name: 'person_detect',
    assetPath: 'models/person_detect.tflite',
    inputShape: const [1, 96, 96, 1],
    outputShape: const [1, 2],
    quantization: TensorQuantization.int8,
    tensorArenaSizeKb: 128,
  );

  // 3. Real-Time Edge Inference Loop
  visionGuard.loop((ctx) {
    ctx.log('Running on-device TFLite inference...');
  });
}
```

---

## 💡 Quickstart 2: Autonomous Obstacle Avoidance Rover (ESP32)

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);

  // 1. Configure Ultrasonic Sonar & 6-Axis IMU
  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);
  final imu = rover.imu(sdaPin: 21, sclPin: 22);

  // 2. Configure 2-Wheel Differential Drive (L298N)
  final drive = rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  // 3. Configure 50Hz PWM Radar Servo
  final radarServo = rover.pwmOutput(13, frequencyHz: 50);

  // 4. Execution Loop
  rover.loop((ctx) {
    final distanceCm = ctx.readSonar(sonar);
    if (distanceCm < 20.0) {
      // Obstacle detected: reverse & turn
      ctx.setPwm(drive.leftPwmPin, -0.6);
      ctx.setPwm(drive.rightPwmPin, 0.6);
    } else {
      // Clear path: drive forward
      ctx.setPwm(drive.leftPwmPin, 0.8);
      ctx.setPwm(drive.rightPwmPin, 0.8);
    }
  });
}
```

---

## 💡 Quickstart 3: Wireless Swarm Mesh & BLE Telemetry (nRF52840)

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final beacon = FirmwareBuilder('swarm_beacon', target: BoardTarget.nrf52840);

  // Strongly-typed BLE Services
  beacon.bluetooth(
    deviceName: 'Flint-Swarm-01',
    services: [
      BleService.battery(initialLevelPercent: 95),
      BleService.deviceInfo(manufacturer: 'Eulogia', model: 'Beacon-X1'),
    ],
  );

  // Strongly-typed Swarm Domain & Radio Channel
  beacon.meshSwarm(
    swarm: SwarmId.robotics,
    channel: WifiChannel.ch6,
  );

  beacon.loop((ctx) {
    ctx.log('Broadcasting swarm state packet...');
  });
}
```

---

## 🧪 1-Click Wokwi Browser Simulation & ROS 2 Export

Flint Hardware generates full simulation bundles and ROS 2 publish/subscribe nodes with one method call:

```dart
import 'dart:io';
import 'package:flint_hardware/flint_hardware.dart';

void main() async {
  final rover = FirmwareBuilder('rover_demo', target: BoardTarget.esp32);

  rover.sonar(triggerPin: 5, echoPin: 18);
  rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  // Export full multi-language simulation bundle
  final outputDir = Directory('build/rover_demo');
  await rover.exportBundle(outputDir);

  print('Simulation bundle created at ${outputDir.path}/');
}
```

The exported bundle contains:
1. `diagram.json` — Auto-wired breadboard circuit with ESP32, HC-SR04 sonar, and DC motors.
2. `wokwi.toml` — Ready for instant browser simulation in Wokwi.
3. `firmware.c` / `firmware.cpp` — Native register-level C99 firmware.
4. `ros2_node.py` — ROS 2 telemetry node publishing `/scan` and subscribing to `/cmd_vel`.
