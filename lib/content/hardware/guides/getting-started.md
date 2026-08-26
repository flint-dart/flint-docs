# Getting Started with Flint Hardware ⚡

`flint_hardware` is a declarative, type-safe embedded systems and robotics framework written in pure Dart. It compiles declarative hardware definitions into optimized C99, C++, MicroPython, and ROS 2 nodes, while automatically generating instant Wokwi browser circuits.

---

## 📦 Installation

Add `flint_hardware` to your Dart project's `pubspec.yaml`:

```bash
dart pub add flint_hardware
```

Or add it directly to `pubspec.yaml`:

```yaml
dependencies:
  flint_hardware: ^0.1.0
```

---

## 🎯 Supported Board Targets

Flint Hardware uses the strongly-typed `BoardTarget` enum to configure MCU registers, pin maps, and clock speeds:

```dart
enum BoardTarget {
  esp32,       // Standard ESP32 Dual Core (240MHz, WiFi + BLE)
  esp32Cam,    // ESP32-CAM with OV2640 camera & PSRAM
  nrf52840,    // Nordic Semiconductor nRF52840 (ARM Cortex-M4, BLE 5)
  stm32f4,     // STM32F4 BlackPill (ARM Cortex-M4, 84MHz)
  rp2040,      // Raspberry Pi Pico (Dual ARM Cortex-M0+, PIO)
}
```

---

## 🚀 Creating Your First Firmware

Create a file named `firmware/main.dart`:

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  // 1. Initialize Firmware Builder
  final bot = FirmwareBuilder('beacon_node', target: BoardTarget.esp32);

  // 2. Configure Peripherals
  final statusLed = bot.digitalOutput(2, name: 'status_led');

  // 3. Define Real-Time Control Loop
  bot.loop((ctx) {
    ctx.setHigh(statusLed);
    ctx.delay(const Duration(milliseconds: 500));
    ctx.setLow(statusLed);
    ctx.delay(const Duration(milliseconds: 500));
  });
}
```

---

## ⚡ Multi-Language Export & Simulation

Export your firmware directly to native C99 or an interactive Wokwi browser circuit:

```dart
import 'dart:io';
import 'package:flint_hardware/flint_hardware.dart';

void main() async {
  final bot = FirmwareBuilder('beacon_node', target: BoardTarget.esp32);
  bot.digitalOutput(2);

  final outputDir = Directory('build/beacon');
  await bot.exportBundle(outputDir);

  print('Firmware bundle exported to ${outputDir.path}/');
}
```
