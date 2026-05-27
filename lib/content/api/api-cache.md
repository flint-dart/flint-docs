## Cache

Simple cache stores for memory or filesystem-backed caching.

abstract class CacheStore { set/get/remove/clear }

Contract implemented by cache stores.

MemoryCacheStore({int maxSize = 100})

In-memory cache with optional max size and TTL.

FileCacheStore({String? directory})

File-based cache persisted under `cache/` by default.

### Example

```dart
final cache = MemoryCacheStore();

await cache.set('greeting', 'hello', ttl: Duration(minutes: 10));
final value = await cache.get('greeting');
```
