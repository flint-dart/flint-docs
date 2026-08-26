## Middleware

Middleware runs before your handler. You can register it globally, per HTTP route, per route group, or per WebSocket route.

Default stack: `ExceptionMiddleware` is enabled when `withDefaultMiddleware: true` (default). `CookieSessionMiddleware` is always registered to enable cookies and sessions.

### Declare middleware

Custom middleware implements `Middleware` and wraps the next `Handler`.

```dart
class AuthMiddleware extends Middleware {
  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final token = ctx.req.headers['authorization'];

      if (token == null || token.isEmpty) {
        // For HTTP requests, return a response.
        if (ctx.res != null) {
          return ctx.res!.status(401).json({'error': 'Unauthorized'});
        }
        // For WebSocket contexts without HTTP response, just stop the chain.
        return null;
      }

      return await next(ctx);
    };
  }
}
```

### Global middleware

```dart
import 'package:flint_dart/flint_dart.dart';
import 'middlewares/auth_middleware.dart';

void main() {
  final app = Flint();
  app.use(AuthMiddleware());

  app.get('/profile', (Context ctx) async {
    return ctx.res?.json({'ok': true});
  });

  app.listen(port: 3000);
}
```

### HTTP route middleware

```dart
app.get('/admin', (Context ctx) async {
  return ctx.res?.send('Admin');
}).use(AuthMiddleware());
```

### Route group middleware

```dart
class AdminRoutes extends RouteGroup {
  @override
  String get prefix => '/admin';

  @override
  List get middlewares => [AuthMiddleware()];

  @override
  void register(Flint app) {
    app.get('/users', (Context ctx) async => ctx.res?.json([]));
  }
}
```

### WebSocket route middleware

Use the `middlewares` parameter in `app.websocket()`.

```dart
app.websocket(
  '/chat',
  (Context ctx) {
    final socket = ctx.socket;
    if (socket == null) return;

    socket.on('ping', (_) => socket.emit('pong', {'ok': true}));
  },
  middlewares: [AuthMiddleware()],
);
```

Route `middlewares` run around the connected WebSocket handler. Use middleware to gate access and return early when a request is not authorized.

### Built-in middleware

- `ExceptionMiddleware` — catches errors and returns JSON error responses.

- `CookieSessionMiddleware` — initializes cookies and sessions.

- `CorsMiddleware` — adds CORS headers and handles OPTIONS.

- `LoggerMiddleware` — logs request method, path, IP, and auth status.

- `StaticFileMiddleware` — serves files from `public/` with caching and range support.

### StaticFileMiddleware vs app.static

Use `app.use(StaticFileMiddleware())` for public files (favicons, uploads, downloadable files) when you want cache headers, conditional requests, and range support.

Keep `app.static('/assets', 'assets')` for framework/site assets under a URL prefix. This combination is common in production apps.

```dart
void main() {
  final app = Flint(
    withDefaultMiddleware: true,
    autoConnectDb: true,
  );

  // Optimized static serving for files inside public/
  app.use(StaticFileMiddleware(
    publicFolder: 'public',
    cacheDuration: Duration(days: 30),
    enableRangeRequests: true,
  ));

  // Versioned app assets under /assets
  app.static('/assets', 'assets');

  app.listen();
}
```
