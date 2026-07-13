## Caching

Flint supports two useful kinds of caching:

- HTTP cache headers for browsers, CDNs, and reverse proxies.
- Server-side data cache stores for repeated database or API work.

Use HTTP cache headers when the response itself can be reused by a browser or proxy. Use a server-side cache when your app still needs to render a fresh response, but part of the data is expensive to rebuild.

### Cache Public Pages And APIs

Public catalogue data, blog lists, pricing tables, TLD lists, and landing page product blocks are good candidates for short public cache headers.

```dart
class WebRoutes extends RouteGroup {
  @override
  List<Middleware> get middlewares => [
        CacheMiddleware.public(
          const Duration(minutes: 5),
          sharedMaxAge: const Duration(minutes: 10),
          mustRevalidate: true,
        ),
      ];
}
```

You can also set cache headers directly on a response.

```dart
Future<Response> products(Request req, Response res) async {
  res.cachePublic(const Duration(minutes: 5));
  return res.json({'products': []});
}
```

### Do Not Public Cache Private Pages

Dashboards, admin pages, auth pages, checkout, payment callbacks, and customer-specific pages should not be public cached.

```dart
class CustomerWebRoutes extends RouteGroup {
  @override
  List<Middleware> get middlewares => [
        AuthMiddleware(),
        CacheMiddleware.noStore(),
      ];
}
```

For user-specific responses that may still be stored by the browser, use private cache headers only when the data is safe for that user's browser cache.

```dart
res.cachePrivate(const Duration(minutes: 2), mustRevalidate: true);
```

### Server-Side Cache Stores

`MemoryCacheStore` keeps values inside the running server process. It is fast and simple for product lists, navigation counts, landing page data, and other short-lived data.

```dart
final cache = MemoryCacheStore(maxSize: 500);

final products = await cache.remember<List<Map<String, dynamic>>>(
  'landing.products',
  const Duration(minutes: 3),
  () async {
    return Product()
        .withRelation('category')
        .orderBy('sort_order')
        .get();
  },
);
```

`remember` first checks the cache key. If a value exists and has not expired, it returns that value. If not, it runs the loader, stores the result with the TTL, and returns the new value.

### File Cache

`FileCacheStore` stores JSON cache entries on disk. Use it for values that may survive a process restart and are safe to serialize.

```dart
final cache = FileCacheStore(directory: 'storage/cache');

await cache.set(
  'tlds.popular',
  popularTlds,
  ttl: const Duration(minutes: 30),
);

final cached = await cache.get('tlds.popular');
```

### Invalidate Related Keys

When an admin updates a product, category, blog post, or TLD, clear the related cache keys immediately.

```dart
await cache.remove('landing.products');

await cache.removeMany([
  'landing.products',
  'products.category.vps-hosting',
  'products.category.shared-hosting',
]);

await cache.removeWhere((key) => key.startsWith('products.category.'));
```

Use stable key names that include the important filters:

```dart
String productsByCategoryKey(String category) {
  return 'products.category.$category';
}
```

If a cached value depends on tenant, user, currency, locale, page, or query filters, include those values in the key.

### Practical Pattern

For a public product page, combine both layers:

- Server cache prevents repeated database work.
- HTTP cache lets repeat visitors and proxies reuse the response briefly.
- Admin writes clear the affected server cache keys.

```dart
class ProductController {
  ProductController(this.cache);

  final CacheStore cache;

  Future<Response> byCategory(Request req, Response res) async {
    final category = req.query['category']?.toString() ?? 'all';
    final key = 'products.category.$category';

    final products = await cache.remember(
      key,
      const Duration(minutes: 5),
      () => Product()
          .withRelation('category')
          .where('category_slug', '=', category)
          .get(),
    );

    res.cachePublic(const Duration(minutes: 5), mustRevalidate: true);
    return res.json({'products': products});
  }

  Future<Response> update(Request req, Response res) async {
    // Update the product first.
    await cache.remove('landing.products');
    await cache.removeWhere((key) => key.startsWith('products.category.'));
    return res.json({'ok': true});
  }
}
```

### Production Notes

`MemoryCacheStore` is in-process. If your app runs multiple server processes or containers, each process has its own memory cache. Keep TTLs short for data that changes often, or use an external shared cache when your deployment needs cross-process invalidation.

Do not cache sensitive customer, admin, auth, checkout, or payment data with public headers. For private data, prefer `CacheMiddleware.noStore()` unless you have a clear reason to cache it.
