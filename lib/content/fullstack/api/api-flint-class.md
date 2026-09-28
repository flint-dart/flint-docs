## Flint

Application root that wires routes, middleware, static assets, WebSockets, and server lifecycle.

A `Flint` instance is the entry point for your server. It registers HTTP routes, WebSocket endpoints, mounts route groups, and controls server startup with optional hot reload and auto-connect services.

```dart
Flint({
  String rootPath = 'lib',
  String? viewPath,
  bool autoConnectDb = true,
  bool autoConnectRedis = false,
  CacheDriver? cacheDriver,
  String? cacheDirectory,
  int? cacheMemoryMaxSize,
  bool autoConnectMail = true,
  bool withDefaultMiddleware = true,
  bool enableSwaggerDocs = false,
  // Migration, seeder, jobs, and rendering options omitted here.
})
```

Create an app with optional defaults for middleware, DB, application cache,
mail, jobs, rendering, and Swagger docs. `cacheDriver` overrides
`CACHE_DRIVER`; the default is `CacheDriver.memory`.

RouteBuilder get/post/put/delete/patch/query(String path, Object handler)

Register HTTP routes using Context handlers (or legacy handlers) with optional route-level middleware via `RouteBuilder.useMiddleware`.

`query(...)` registers an HTTP QUERY route. QUERY is safe and idempotent like GET, but can carry request content for complex search or filter expressions.

RouteBuilder route(String method, String path, Handler handler)

Register a custom HTTP method (e.g. `OPTIONS`, `HEAD`, `QUERY`).

void use(Middleware middleware)

Register global middleware executed for every request.

void mount(String prefix, void Function(Flint) callback, {List<Middleware> middlewares = const []})

Mount a sub-app under a URL prefix with optional scoped middleware.

void routes(RouteGroup group, {List<RouteGroup> children = const []})

Register a route group and optional nested groups with composed prefixes and middleware.

ControllerRouteBuilder<T> controller<T extends Controller>(ControllerFactory<T> factory)

Create a request-scoped controller route builder for concise HTTP and WebSocket controller registration.

void websocket(String path, Object handler, {List<Middleware> middlewares = const []})

Register a WebSocket endpoint with Context handler support and optional route middleware.

void static(String urlPrefix, String directoryPath)

Serve static files from a directory under a URL prefix.

### Application Cache

```dart
CacheDriver get cacheDriver
CacheStore get cache
```

`cache` is the one application store shared with `ctx.cache` in routes and
middleware and `Controller.cache` in controllers. Memory and file stores are
available immediately. A selected Redis store is connected during startup.

```dart
bool get isRedisConnected
```

Reports whether this app currently owns a connected Redis cache.

```dart
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
```

Connect using an explicit URL or host settings. With no arguments, Flint reads
`REDIS_URL`. Repeated and concurrent calls reuse the app's connection. Redis
connection details belong here rather than in the `Flint(...)` constructor.

```dart
Future<void> closeRedis()
```

Close the app's Redis connection. When Redis is selected by `cacheDriver`,
`CACHE_DRIVER`, or `autoConnectRedis`, Flint connects before serving HTTP
requests or starting a dedicated jobs worker and closes the connection during
normal framework shutdown.

See the [Cache API](/fullstack/api/cache) and
[Caching guide](/fullstack/guides/cache) for both URL and host/port examples.

Future<void> listen({int? port, bool hotReload = true})

Start the HTTP + WebSocket server, optionally with hot reload.

### Example

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint(enableSwaggerDocs: true);

	  app.get('/health', (Context ctx) async {
	    return ctx.res?.json({'status': 'ok'});
	  });

  app.listen(port: 3030, hotReload: true);
}
```
