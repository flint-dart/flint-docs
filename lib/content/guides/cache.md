## Caching

Flint ships with a simple cache manager and built-in stores for memory and file caching.

### Memory Cache

```dart
final cache = MemoryCacheStore();
cache.set('users.count', 42, ttl: Duration(minutes: 10));

final value = cache.get('users.count'); // 42
cache.delete('users.count');
```

### File Cache

```dart
final cache = FileCacheStore(directory: 'storage/cache');
cache.set('report', {'ok': true}, ttl: Duration(hours: 1));

final report = cache.get('report');
cache.clear();
```
