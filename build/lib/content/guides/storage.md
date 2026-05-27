## Storage

Use the Storage helper for file operations and path management.

### Read & Write

```dart
final storage = Storage();

await storage.put('uploads/hello.txt', 'Hello Flint');
final contents = await storage.get('uploads/hello.txt');
await storage.delete('uploads/hello.txt');
```

### Paths & Existence

```dart
final exists = await storage.exists('uploads/hello.txt');
final fullPath = storage.path('uploads/hello.txt');
```
