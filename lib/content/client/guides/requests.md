# Requests & HTTP Methods 📡

FlintClient supports standard HTTP verbs, file uploads, query parameters, and custom serializers.

---

## 🎯 Supported HTTP Verbs

```dart
// GET with query parameters
final users = await client.get(
  '/users',
  queryParams: {'page': '1', 'limit': '20'},
);

// POST with JSON payload
final postRes = await client.post(
  '/orders',
  body: {'item': 'Sensor Module', 'qty': 2},
);

// PUT update
final putRes = await client.put(
  '/orders/108',
  body: {'status': 'shipped'},
);

// PATCH partial update
final patchRes = await client.patch(
  '/users/42',
  body: {'theme': 'dark'},
);

// DELETE
final deleteRes = await client.delete('/orders/108');
```

---

## 📁 File Uploads (Multipart)

```dart
final uploadRes = await client.uploadFile(
  '/users/avatar',
  fileField: 'avatar',
  filePath: '/path/to/profile.png',
  extraFields: {'userId': '42'},
);
```
