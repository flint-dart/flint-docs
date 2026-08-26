# Wireless Swarm Mesh & BLE Telemetry 📡

Flint Hardware allows multiple microcontroller nodes to form self-healing wireless swarms and broadcast telemetry over Bluetooth Low Energy (BLE).

---

## 🎯 Swarm Mesh on Nordic nRF52840

```dart
import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final beacon = FirmwareBuilder('swarm_beacon', target: BoardTarget.nrf52840);

  // 1. Strongly-typed BLE Services
  beacon.bluetooth(
    deviceName: 'Flint-Swarm-01',
    services: [
      BleService.battery(initialLevelPercent: 95),
      BleService.deviceInfo(manufacturer: 'Eulogia', model: 'Beacon-X1'),
    ],
  );

  // 2. Strongly-typed Swarm Domain & Radio Channel
  beacon.meshSwarm(
    swarm: SwarmId.robotics,
    channel: WifiChannel.ch6,
  );

  // 3. Telemetry Broadcast Loop
  beacon.loop((ctx) {
    ctx.log('Broadcasting swarm state packet...');
    ctx.delay(const Duration(seconds: 2));
  });
}
```

---

## 🔒 Mesh Security & Channel Allocation

- **Channels**: Strongly typed `WifiChannel.ch1` through `WifiChannel.ch13`.
- **Swarm IDs**: `SwarmId.robotics`, `SwarmId.environmental`, `SwarmId.industrial`.
- **BLE Characteristics**: Battery level percentage and Device Info UUIDs auto-mapped to Bluetooth SIG standard services.
