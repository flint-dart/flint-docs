## Cache

Application cache stores for memory, filesystem, and Redis-backed data.

### CacheDriver

```dart
enum CacheDriver { memory, file, redis }
```

`CacheDriver.parse(String value)` accepts `memory`, `file`, or `redis`
case-insensitively and throws `FormatException` for unsupported values.

### CacheStore

Contract implemented by cache stores.

```dart
abstract class CacheStore {
  Future<void> set(String key, dynamic value, {Duration? ttl});
  Future<dynamic> get(String key);
  Future<void> remove(String key);
  Future<void> removeMany(Iterable<String> keys);
  Future<void> removeWhere(bool Function(String key) shouldRemove);
  Future<void> clear();

  Future<T> remember<T>(
    String key,
    Duration ttl,
    Future<T> Function() loader,
  );
}
```

### MemoryCacheStore

```dart
MemoryCacheStore({int maxSize = 100})
```

In-memory cache with optional max size and TTL.

### FileCacheStore

```dart
FileCacheStore({String? directory})
```

File-based cache persisted under `cache/` by default.

### RedisCacheStore

Redis-backed cache for JSON values shared across server processes.

```dart
RedisCacheStore(
  Command command, {
  String prefix = 'flint:cache:',
  int scanCount = 1000,
  int deleteBatchSize = 500,
})
```

#### connect

Connect with individual settings:

```dart
static Future<RedisCacheStore> connect({
  String host = 'localhost',
  int port = 6379,
  bool secure = false,
  String? username,
  String? password,
  int? database,
  String prefix = 'flint:cache:',
  int scanCount = 1000,
  int deleteBatchSize = 500,
})
```

```dart
final cache = await RedisCacheStore.connect(
  host: 'localhost',
  port: 6379,
  username: 'default',
  password: redisPassword,
  database: 0,
);
```

#### connectFromUrl

Connect from a `redis://` or TLS `rediss://` URL. The URL may contain an ACL
username, password, port, and zero-based database path.

```dart
static Future<RedisCacheStore> connectFromUrl(
  String url, {
  String prefix = 'flint:cache:',
  int scanCount = 1000,
  int deleteBatchSize = 500,
})
```

```dart
final cache = await RedisCacheStore.connectFromUrl(
  'rediss://default:password@redis.example.com:6379/0',
);
```

#### Redis behavior

- Values are encoded and decoded as JSON.
- Positive TTLs use Redis's native millisecond expiration.
- Zero or negative TTLs remove the key.
- `clear()` and `removeWhere()` scan only the configured key prefix and never
  call `FLUSHDB`.
- `close()` closes the store's Redis connection.
- Redis writes do not write to Flint's SQL database.

```dart
Future<void> close()
```

### Flint Cache Integration

`Flint` owns one store and shares it through `app.cache`, `ctx.cache` in routes
and middleware, and `cache` in controllers.

```dart
CacheDriver get cacheDriver
CacheStore get cache
bool get isRedisConnected

Future<RedisCacheStore> connectRedis({
  String? url,
  String? host,
  int port = 6379,
  bool secure = false,
  String? username,
  String? password,
  int? database,
  String prefix = 'flint:cache:',
})

Future<void> closeRedis()
```

Flint reads `CACHE_DRIVER` when no constructor driver is supplied and defaults
to memory. The supported environment settings are:

```env
CACHE_DRIVER=memory|file|redis
CACHE_DIRECTORY=storage/cache
CACHE_MEMORY_MAX_SIZE=100
REDIS_URL=redis://default:password@localhost:6379/0
```

Connect explicitly when URL configuration is not appropriate. Redis connection
details stay on `connectRedis(...)`, not `Flint(...)`:

```dart
final app = Flint();

await app.connectRedis(
  host: 'localhost',
  port: 6379,
  secure: false,
  username: 'default',
  password: redisPassword,
  database: 0,
  prefix: 'my-app:cache:',
);
```

Selecting Redis connects before the HTTP server or dedicated jobs worker
starts by reading `REDIS_URL` through `FlintEnv`. `autoConnectRedis: true` remains a
compatibility shortcut for `cacheDriver: CacheDriver.redis`.

```dart
app.get('/products', (ctx) async {
  final products = await ctx.cache.remember(
    'products.index',
    const Duration(minutes: 5),
    () => Product().get(),
  );
  return {'data': products};
});
```

See the [Caching guide](/fullstack/guides/cache) for URL encoding, values, TTL,
prefix cleanup, connection lifecycle, deployment, and security guidance.

### remember

`remember` returns the cached value when it exists. Otherwise it runs the loader, stores the result with the TTL, and returns it.

```dart
final cache = MemoryCacheStore(maxSize: 500);

final products = await cache.remember(
  'landing.products',
  const Duration(minutes: 5),
  () async => Product().withRelation('category').get(),
);
```

### Invalidation

```dart
await cache.remove('landing.products');

await cache.removeMany([
  'landing.products',
  'products.category.vps-hosting',
]);

await cache.removeWhere((key) => key.startsWith('products.category.'));
await cache.clear();
```

### HTTP Cache Helpers

Use `CacheMiddleware` or response helpers when the browser or CDN should cache the whole response.

```dart
app.get('/products', productsController.index).useMiddleware(
  CacheMiddleware.public(
    const Duration(minutes: 5),
    sharedMaxAge: const Duration(minutes: 10),
    mustRevalidate: true,
  ),
);

app.get('/dashboard', dashboardController.index).useMiddleware(
  CacheMiddleware.noStore(),
);
```

```dart
res.cachePublic(const Duration(minutes: 5));
res.cachePrivate(const Duration(minutes: 2));
res.revalidate();
res.noStore();
res.etag('products-v1');
res.lastModified(DateTime.now().toUtc());
```
