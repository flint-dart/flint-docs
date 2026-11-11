# Response Caching & TTL ⚡

FlintClient has built-in in-memory and persistent caching strategies to eliminate duplicate API requests and power instant offline reads.

---

## 🕒 Cache Options per Request

```dart
final response = await client.get(
  '/dashboard/stats',
  cachePolicy: CachePolicy(
    maxAge: const Duration(minutes: 5),
    strategy: CacheStrategy.cacheFirst, // Or networkFirst, staleWhileRevalidate
  ),
);
```

---

## 🔄 Cache Strategies

| Strategy | Description |
| :--- | :--- |
| `CacheStrategy.cacheFirst` | Returns cached response if valid, otherwise makes network call. |
| `CacheStrategy.networkFirst` | Tries network first; falls back to cache if offline or on failure. |
| `CacheStrategy.staleWhileRevalidate` | Immediately returns cached data while asynchronously updating cache in background. |
| `CacheStrategy.noCache` | Bypasses cache completely and updates cache on response. |
