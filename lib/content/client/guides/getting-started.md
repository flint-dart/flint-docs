# Getting Started with FlintClient 🚀

`flint_client` is a high-performance, resilient HTTP & WebSocket client for Dart and Flutter applications featuring built-in retries, caching, cancellation tokens, structured error diagnostics, and observability hooks.

---

## 📦 Installation

Add `flint_client` to your Dart/Flutter project:

```bash
dart pub add flint_client
```

---

## ⚙️ Initializing FlintClient

```dart
import 'package:flint_client/flint_client.dart';

final client = FlintClient(
  baseUrl: 'https://api.myapp.com/v1',
  timeout: const Duration(seconds: 15),
  defaultHeaders: {
    'Accept': 'application/json',
  },
  debug: true,
);
```

---

## 💡 Quick GET / POST Request

```dart
// Typed GET request
final response = await client.get('/users/me');
print(response.data['name']);

// Typed POST request
final created = await client.post(
  '/projects',
  body: {
    'title': 'Autonomous Rover',
    'status': 'active',
  },
);
print(created.statusCode); // 201
```
