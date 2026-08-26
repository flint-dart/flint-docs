## Cache

Simple cache stores for memory and filesystem-backed data caching.

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
