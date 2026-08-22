# Flint Hardware ⚡

Flint Hardware brings **declarative Dart, robotics state machines, and multi-MCU compilation** to embedded systems and robotics. Write your hardware firmware, state transitions, and telemetry streaming in 100% pure Dart, and deploy to ESP32, Raspberry Pi Pico, and STM32 without struggling with raw C pointers.

---

## 🎯 Key Pillars

| Pillar | Description | Example Target |
| :--- | :--- | :--- |
| **Multi-MCU Compilation** | Compiles declarative Dart ASTs into MicroPython, C++ Arduino, or native C. | ESP32, Raspberry Pi Pico, STM32 |
| **Robotics State Machines** | Type-safe declarative state transitions (`patrol` ➔ `avoidance` ➔ `docking`). | Autonomous Rovers & Robot Arms |
| **Robotics Drivers Pack** | High-level drivers for Sonar, 6-Axis IMU, Differential Drive, & Climate sensors. | HC-SR04, MPU-6050, L298N, DHT22 |
| **Wokwi Simulator Exporter** | Auto-generates `diagram.json` circuits with auto-wiring for instant browser simulation. | Instant browser debugging |
| **Flutter Live Telemetry** | Low-latency binary/JSON streaming bridge to Flutter mobile & desktop UIs. | Live Robot Dashboards |

---

## 📦 Quick Installation

Add `flint_hardware` to your project:

```bash
dart pub add flint_hardware
```

---

## 💡 Quickstart: Autonomous Robot Rover

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final firmware = FirmwareBuilder(
    target: McuTarget.esp32,
    projectName: 'MarsRover',
  )
    // Hardware Peripherals
    .led(pin: 2, name: 'statusLed')
    .sonar(triggerPin: 5, echoPin: 18, name: 'frontSonar')
    .imu(sdaPin: 21, sclPin: 22, name: 'gyro')
    .differentialDrive(
      leftPwmPin: 14,
      leftDirPin: 27,
      rightPwmPin: 12,
      rightDirPin: 13,
      name: 'drive',
    )
    // Robotics State Machine
    .stateMachine(
      initialState: 'patrol',
      states: [
        RobotState(
          name: 'patrol',
          onEnter: (ctx) => ctx.call('drive.forward', [0.8]),
          transitions: [
            RobotTransition(
              event: 'obstacle_detected',
              targetState: 'avoidance',
            ),
          ],
        ),
        RobotState(
          name: 'avoidance',
          onEnter: (ctx) => ctx.call('drive.rotate', [-0.5]),
          transitions: [
            RobotTransition(
              event: 'path_cleared',
              targetState: 'patrol',
            ),
          ],
        ),
      ],
    )
    .build();

  // Export to MicroPython, C++, or Wokwi Simulation Bundle
  final exporter = FirmwareBundleExporter(firmware);
  exporter.exportToDirectory('build/mars_rover');
}
```

---

## 🧪 Browser Simulation with Wokwi

Flint Hardware includes an automated **Wokwi Diagram Generator**. When you export a firmware bundle, Flint automatically generates:
1. `diagram.json` — Auto-wires all MCU pins, LEDs, Sonar, and motors on a virtual breadboard.
2. `main.py` / `sketch.cpp` — The compiled target executable.
3. `wokwi.toml` — Ready for 1-click browser simulation!

---

## 📱 Flutter Live Telemetry Bridge

Stream high-frequency sensor telemetry (acceleration, obstacle distance, battery voltage) directly into Flutter apps:

```dart
final bridge = TelemetryBridge(
  onPacketReceived: (packet) {
    print('Distance: ${packet.sonarDistanceCm} cm | Speed: ${packet.speed}');
  },
);

// Subscribe to UDP or Serial telemetry stream
bridge.connectSerial('/dev/ttyUSB0', baudRate: 115200);
```
