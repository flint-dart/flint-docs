# Retries & Cancellation 🛡️

Handle network instability gracefully with exponential backoff retries and explicit cancellation tokens.

---

## 🔁 Automatic Retries & Backoff

```dart
final client = FlintClient(
  baseUrl: 'https://api.example.com',
  retryPolicy: RetryPolicy(
    maxRetries: 3,
    initialDelay: const Duration(milliseconds: 500),
    maxDelay: const Duration(seconds: 5),
    retryOnStatus: [500, 502, 503, 504, 429],
    useExponentialBackoff: true,
  ),
);
```

---

## 🛑 Request Cancellation

Cancel requests when screens are unmounted or searches are superseded:

```dart
final cancelToken = CancellationToken();

// Pass token to request
final future = client.get('/search', queryParams: {'q': 'rover'}, cancelToken: cancelToken);

// Cancel anytime
cancelToken.cancel('User navigated away');
```
