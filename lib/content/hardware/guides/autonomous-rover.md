# Autonomous Rover & Kinematics 🤖

Flint Hardware includes built-in drivers for differential drives, ultrasonic distance sensors, 6-axis IMUs, and radar sweeping servos.

---

## 🎯 2-Wheel Differential Drive with Sonar Avoidance

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);

  // 1. Ultrasonic Sonar & 6-Axis IMU
  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);
  final imu = rover.imu(sdaPin: 21, sclPin: 22);

  // 2. 2-Wheel Differential Drive (L298N / TB6612FNG)
  final drive = rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  // 3. 50Hz PWM Radar Servo
  final radarServo = rover.pwmOutput(13, frequencyHz: 50);

  // 4. Closed-Loop Execution Loop
  rover.loop((ctx) {
    final distanceCm = ctx.readSonar(sonar);

    if (distanceCm < 20.0) {
      // Obstacle detected: reverse & turn
      ctx.setPwm(drive.leftPwmPin, -0.6);
      ctx.setPwm(drive.rightPwmPin, 0.6);
      ctx.delay(const Duration(milliseconds: 400));
    } else {
      // Clear path: drive forward
      ctx.setPwm(drive.leftPwmPin, 0.8);
      ctx.setPwm(drive.rightPwmPin, 0.8);
    }

    // Sweep radar servo
    ctx.setPwm(radarServo, 0.05); // Left
    ctx.delay(const Duration(milliseconds: 100));
    ctx.setPwm(radarServo, 0.10); // Right
  });
}
```

---

## ⚙️ Pin Assignments & Voltage Safety

- **Sonar HC-SR04**: Trigger pin (5), Echo pin (18). Use a 5V-to-3.3V voltage divider resistor on the Echo pin.
- **Motor Driver L298N**: Dual PWM pins (14, 12) and direction GPIOs (27, 26).
- **IMU MPU6050**: I2C SDA (GPIO 21), SCL (GPIO 22).
