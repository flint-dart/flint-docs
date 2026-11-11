# Edge AI & Computer Vision on ESP32-CAM 📸

Flint Hardware provides zero-copy camera frame acquisition and on-device machine learning inference powered by TensorFlow Lite Micro.

---

## 🎯 Target: ESP32-CAM

The `BoardTarget.esp32Cam` target configures the on-board OV2640 camera sensor and initializes the 4MB external PSRAM memory arena for high-resolution image tensors.

---

## 💡 Complete Pipeline Example

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final visionGuard = FirmwareBuilder('cam_guard', target: BoardTarget.esp32Cam);

  // 1. Configure On-Board OV2640 Camera
  visionGuard.camera(
    resolution: CameraResolution.qvga, // 320x240
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

  // 3. Real-Time Inference Loop
  visionGuard.loop((ctx) {
    ctx.log('Running on-device TFLite inference...');
  });
}
```

---

## ⚡ Quantization & Memory Budget

| Parameter | Recommended Value | Description |
| :--- | :--- | :--- |
| `quantization` | `TensorQuantization.int8` | 8-bit quantized weights reduce model size by 75% |
| `tensorArenaSizeKb` | `128` | Scratchpad memory allocated in fast internal SRAM |
| `resolution` | `CameraResolution.qvga` | Balanced 320x240 resolution for edge vision |
| `frameRate` | `15` | Target FPS for real-time edge processing |
