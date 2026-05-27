FlintClient

# FlintClient Guide

A production-ready Dart HTTP client with retries, caching, cancellation, structured errors, lifecycle hooks, and strict or lenient parsing.

            [pub.dev](https://pub.dev/packages/flint_client)
            [GitHub](https://github.com/flintdart/flint-client)
            [Examples](/examples)

## On This Page

                [Basics](#basics)
                [HTTP Methods](#methods)
                [Files](#files)
                [WebSocket](#websocket)
                [Error Handling](#error-handling)
                [Parse Modes](#parse-modes)
                [Observability](#observability)

## What Is FlintClient Used For?

FlintClient is used to call APIs from Dart/Flutter apps: GET data, send POST/PUT/PATCH/DELETE requests, upload files, handle timeouts, retry failures, cache responses, and cancel in-flight requests.

- Mobile app calling backend endpoints

- Dashboard fetching reports from APIs

- CLI tools that consume web services

- Apps that need retry + cache + cancellation built-in

## Why Use FlintClient Instead of Another Package?

If you need only basic requests, many packages can work. Use FlintClient when you want advanced behavior already integrated and consistent.

- Built-in cache layer with TTL control

- Idempotency-aware retries with backoff and Retry-After support

- Cancellation support with dedicated cancellation error kind

- Structured error model (`timeout`, `network`, `http`, `parse`, `cancelled`)

- Request lifecycle hooks for observability and correlation IDs

- Strict vs lenient parse modes with serializer chains

## Step-by-Step (Beginner Friendly)

**Step 1:** Open terminal in your Dart/Flutter project folder.

**Step 2:** Install from pub.dev:

```bash
dart pub add flint_client
```

**Step 3:** Confirm dependency in `pubspec.yaml`:

```yaml
dependencies:
  flint_client: ^x.y.z
```

Tip: your exact version may be different. Use the version shown on pub.dev.

**Step 4:** Import and create a client:

```dart
import 'package:flint_client/flint_client.dart';

final client = FlintClient(
  baseUrl: 'https://api.example.com',
  timeout: const Duration(seconds: 10),
  debug: true,
  defaultParseMode: ResponseParseMode.lenient,
);
```

**Step 5:** Make your first request:

```dart
final response = await client.get>('/users/42');
print(response.data);
```

## Basic Requests

```dart
final user = await client.get>('/users/42');

final created = await client.post>(
  '/users',
  body: {'name': 'Ada', 'role': 'admin'},
);

final replaced = await client.put>(
  '/users/42',
  body: {'id': 42, 'name': 'Ada Lovelace', 'role': 'admin'},
);

final patched = await client.patch>(
  '/users/42',
  body: {'role': 'owner'},
);

final removed = await client.delete('/users/42');
print(removed.statusCode);
```

## File Download + Upload

```dart
import 'dart:io';

final tempDir = Directory.systemTemp;
final savePath = '${tempDir.path}/report.pdf';

final downloadedFile = await client.downloadFile(
  'https://example.com/report.pdf',
  savePath: savePath,
  onProgress: (received, total) {
    if (total > 0) {
      final percent = (received / total * 100).toStringAsFixed(0);
      print('Download: $percent%');
    }
  },
);

final upload = await client.uploadFile>(
  '/files/upload',
  file: downloadedFile,
  fieldName: 'file',
  body: {'folder': 'invoices'},
);

final multiUpload = await client.uploadFiles>(
  '/files/upload-many',
  files: {
    'invoice': File('invoice.pdf'),
    'avatar': File('avatar.png'),
  },
  body: {'ownerId': 42},
);
```

## Error Handling

By default, FlintClient returns an error response object for failed requests (4xx/5xx). This means your request resolves with `response.isError == true` and details in `response.error`.

```dart
final client = FlintClient(baseUrl: 'https://api.example.com');

final response = await client.get>('/users/42');
if (response.isError) {
  print(response.error?.message);
  print(response.error?.statusCode);
}
```

### Access Raw Backend Error Payload

Use `FlintError.data` to read the exact backend payload. It can be a `Map`, `List`, `String`, or `null` (empty body).

```dart
if (response.isError) {
  final raw = response.error?.data;
  // raw can be Map/List/String/null based on backend response body
  print(raw);
}
```

### Throw Instead of Returning Error Response

If you prefer exception flow, enable `throwIfError` on the client.

```dart
final client = FlintClient(
  baseUrl: 'https://api.example.com',
  throwIfError: true,
);

try {
  await client.get>('/users/42');
} on FlintError catch (e) {
  print(e.statusCode);
  print(e.data); // exact backend payload
}
```

## Practical Examples You Can Use Today

### 1) Login Request

```dart
final login = await client.post>(
  '/auth/login',
  body: {'email': 'user@mail.com', 'password': 'secret'},
);

if (login.isSuccess) {
  final token = login.data?['token'];
  print(token);
}
```

### 2) Product List With Cache

```dart
final products = await client.get
- ( '/products', cacheConfig: const CacheConfig(maxAge: Duration(minutes: 5)), ); ``` ### 3) Retry a Flaky Endpoint ```dart final report = await client.get( '/reports/daily', retryConfig: RetryConfig( maxAttempts: 3, delay: const Duration(milliseconds: 300), ), ); ``` ### 4) Cancel Long Request ```dart final token = CancelToken(); final pending = client.get('/export/huge', cancelToken: token); token.cancel('user left page'); final response = await pending; print(response.error?.kind); // FlintErrorKind.cancelled ``` ### 5) Upload File ```dart final upload = await client.post>( '/files/upload', files: {'file': File('report.pdf')}, body: {'folder': 'invoices'}, ); ``` ## Retry and Cache ### Why Retry? Retry means: if a request fails for temporary reasons (network glitch, timeout, server busy), try again automatically. Internet can fail for a moment.

- Server can return temporary errors (`500`, `503`, `429`).

- User sees fewer random failures.

### What Is Cache?

Cache is saved response data kept for a short time, so you do not call the server again for the same request.

Example: open product list once, save for 5 minutes, open again and show instantly.

### Why Use Retry + Cache Together?

- **Retry** improves reliability.

- **Cache** improves speed and reduces API calls.

- Together, your app feels faster and fails less.

```dart
final client = FlintClient(
  baseUrl: 'https://api.example.com',
  defaultRetryConfig: RetryConfig(
    maxAttempts: 3,
    delay: const Duration(milliseconds: 250),
    maxRetryTime: const Duration(seconds: 2),
    honorRetryAfter: true,
  ),
  defaultCacheConfig: const CacheConfig(maxAge: Duration(minutes: 2)),
);
```

## Cancellation

Cancellation means stopping a request before it finishes. Use it when user leaves a page, presses cancel, or the response is no longer needed.

```dart
final token = CancelToken();
final pending = client.get('/reports/slow', cancelToken: token);

token.cancel('user aborted');
final response = await pending;
if (response.isError) {
  print(response.error?.kind); // FlintErrorKind.cancelled
}
```

## What Is Cancellation? Why and When?

Cancellation means stopping an API request before it finishes.

**Why use it?**

- User leaves page/screen.

- User changes search/filter quickly.

- Request is slow and no longer needed.

- Prevents old responses from overwriting new UI data.

**When to use it?**

- Live search/autocomplete

- Navigation between pages

- Long exports/downloads

- Rapid repeated requests

## client.request() Explained

`client.request()` is the generic request method. `get/post/put/patch/delete` are convenience shortcuts.

**Use request() when:**

- HTTP method is dynamic at runtime.

- You want one reusable request function.

- You want full control via `RequestOptions`.

```dart
final response = await client.request>(
  'POST',
  '/users',
  options: RequestOptions>(
    body: {'name': 'Ada'},
    headers: {'Content-Type': 'application/json'},
    parseMode: ResponseParseMode.lenient,
    cancelToken: CancelToken(),
  ),
);
```

Quick model: `get()` is quick shortcut, `request()` is full-control entrypoint.

## WebSocket vs Socket.IO (Important)

FlintClient supports **WebSocket** only. It can look like Socket.IO style because it uses event-style `emit/on` writing, but it does **not** implement Socket.IO protocol.

With FlintDart, you can create a simple “glue” convention: event names + JSON payload format, so it feels Socket.IO-like while staying pure WebSocket.

```dart
final ws = client.ws('/chat');
await ws.connect();

ws.on('message', (data) => print(data));
ws.emit('message', {'text': 'Hello from client'});
```

## WebSocket Auth (Client Examples)

You can authenticate WebSocket connections in 3 common ways: Bearer header, query token, or app-level auth event.

### 1) Bearer Header via `FlintClient.ws()`

```dart
final client = FlintClient(
  baseUrl: 'http://localhost:8080',
  headers: {'Authorization': 'Bearer your-token'},
);

final ws = client.ws('/ws');
await ws.connect();
```

### 2) Token in Query

```dart
final ws = FlintWebSocketClient(
  'ws://localhost:8080/ws',
  sendTokenAsQuery: true,
  queryTokenKey: 'token',
  tokenProvider: () async => await loadTokenFromStorage(),
);

await ws.connect();
```

### 3) Auth Event After Connect

```dart
final ws = FlintWebSocketClient(
  'ws://localhost:8080/ws',
  autoAuthEvent: true,
  authEventName: 'auth',
  authPayload: {'token': 'your-token'},
);

await ws.connect();
```

## Run the WebSocket Auth Example

For a full runnable demo (header auth + query auth + auth event), use:

```bash
dart run example/lib/websocket_auth_example.dart
```

Keep tests in `test/` and usage examples in `example/lib/`.

## Full WebSocket Auth Example Code

```dart
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flint_client/flint_client.dart';

Future main() async {
  final server = await _startMockWsServer();
  final httpBaseUrl = 'http://localhost:${server.port}';
  final wsUrl = 'ws://localhost:${server.port}/ws';

  await _headerAuthExample(httpBaseUrl);
  await _queryAuthExample(wsUrl);
  await _authEventExample(wsUrl);

  await server.close(force: true);
}

Future _headerAuthExample(String httpBaseUrl) async {
  final client = FlintClient(
    baseUrl: httpBaseUrl,
    headers: {'Authorization': 'Bearer header-token-123'},
    debug: true,
  );

  final ws = client.ws('/ws', params: {'example': 'header'});
  ws.on('connect', (_) => print('Connected with header token'));
  ws.on('ack', (data) => print('Server ack: $data'));

  await ws.connect();
  ws.emit('message', {'text': 'hello from header auth'});

  await Future.delayed(const Duration(milliseconds: 300));
  ws.dispose();
  client.dispose();
}

Future _queryAuthExample(String wsUrl) async {
  final ws = FlintWebSocketClient(
    wsUrl,
    params: {'example': 'query'},
    sendTokenAsQuery: true,
    queryTokenKey: 'token',
    tokenProvider: () async => 'query-token-456',
    debug: true,
  );

  ws.on('connect', (_) => print('Connected with query token'));
  ws.on('ack', (data) => print('Server ack: $data'));

  await ws.connect();
  ws.emit('message', {'text': 'hello from query auth'});

  await Future.delayed(const Duration(milliseconds: 300));
  ws.dispose();
}

Future _authEventExample(String wsUrl) async {
  final ws = FlintWebSocketClient(
    wsUrl,
    params: {'example': 'event'},
    autoAuthEvent: true,
    authEventName: 'auth',
    authPayload: {'token': 'event-token-789'},
    debug: true,
  );

  ws.on('connect', (_) => print('Connected, auth event will auto-send'));
  ws.on('authed', (data) => print('Auth accepted: $data'));
  ws.on('ack', (data) => print('Server ack: $data'));

  await ws.connect();
  ws.emit('message', {'text': 'hello after auth event'});

  await Future.delayed(const Duration(milliseconds: 300));
  ws.dispose();
}

Future _startMockWsServer() async {
  final server = await HttpServer.bind('localhost', 0);

  server.listen((request) async {
    if (request.uri.path != '/ws') {
      request.response
        ..statusCode = 404
        ..write('Not found')
        ..close();
      return;
    }

    final authHeader = request.headers.value(HttpHeaders.authorizationHeader);
    final tokenFromQuery = request.uri.queryParameters['token'];
    final exampleType = request.uri.queryParameters['example'] ?? 'unknown';

    final socket = await WebSocketTransformer.upgrade(request);
    socket.add(
      jsonEncode({
        'event': 'ack',
        'data': {
          'example': exampleType,
          'authHeader': authHeader,
          'tokenFromQuery': tokenFromQuery,
        },
      }),
    );

    socket.listen((raw) {
      try {
        final msg = jsonDecode(raw.toString()) as Map;
        final event = msg['event']?.toString() ?? '';
        final data = msg['data'];

        if (event == 'auth') {
          socket.add(jsonEncode({'event': 'authed', 'data': data}));
          return;
        }
        if (event == 'ping') {
          socket.add(jsonEncode({'event': 'pong'}));
          return;
        }

        socket.add(
          jsonEncode({
            'event': 'message',
            'data': {'echo': data},
          }),
        );
      } catch (_) {}
    });
  });

  return server;
}
```

## Strict vs Lenient Parse Modes

Parse mode controls how FlintClient handles response data type mismatches.

### Strict Mode

Strict mode fails fast. If response data cannot be parsed to expected type, FlintClient returns a parse error.

Use strict mode when data correctness is critical (finance, billing, admin rules).

### Lenient Mode

Lenient mode tries best-effort conversion/fallback instead of failing immediately.

Use lenient mode for flexible APIs or UI pages where partial data is acceptable.

### Example Mismatch

If you expect `int` but server returns text:

- **Strict:** returns parse error.

- **Lenient:** may fallback or coerce value.

```dart
// Global default
final strictClient = FlintClient(
  baseUrl: 'https://api.example.com',
  defaultParseMode: ResponseParseMode.strict,
);

// Per-request override
final response = await strictClient.get(
  '/stats/value',
  parseMode: ResponseParseMode.lenient,
);
```

## Observability Hooks and Context

Observability means seeing what your HTTP client is doing in real time: request start, retry events, cache hits, errors, and request end.

`RequestContext` is the shared request state that flows through hooks/interceptors. It carries things like correlation ID, attempt number, timing, and cache metadata.

### Why Use Hooks?

- Debug production issues faster.

- Measure latency and retry patterns.

- Track cache efficiency (hit/miss behavior).

- Attach correlation IDs for tracing across services.

### Hook Quick Meaning

- `onRequestStart`: request just started.

- `onRetry`: request failed and will retry.

- `onCacheHit`: response served from cache.

- `onError`: error happened (with retry intent flag).

- `onRequestEnd`: request completed (success or error).

### Common Flow

Start → (maybe cache hit) or network call → (maybe retry/error) → end. The same `RequestContext` follows the whole flow.

```dart
final client = FlintClient(
  baseUrl: 'https://api.example.com',
  lifecycleHooks: RequestLifecycleHooks(
    onRequestStart: (ctx) => print('START ${ctx.correlationId}'),
    onRetry: (ctx, err, delay) => print('RETRY ${ctx.attempt} in $delay'),
    onCacheHit: (ctx, key, _) => print('CACHE HIT $key'),
    onError: (ctx, err, willRetry) =>
        print('ERROR ${err.kind} willRetry=$willRetry'),
    onRequestEnd: (ctx, response, error) =>
        print('END status=${response?.statusCode} duration=${ctx.totalDuration}'),
  ),
  contextualRequestInterceptor: (request, ctx) async {
    request.headers.set('X-Correlation-Id', ctx.correlationId);
  },
);
```

## Run Full Local Demo

Use the end-to-end mock server example in the client repo to test cache/retry/cancel/hook behavior quickly.

```bash
dart run example/lib/full_observability_mock_example.dart
```

```bash
dart run example/lib/http_methods_and_download_example.dart
```
