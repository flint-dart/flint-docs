## Middleware

Wrap handlers to add auth, logging, validation, or transforms.

A middleware implements `Middleware.handle` and returns a new handler that can short-circuit or augment the request/response pipeline.

abstract class Middleware { Handler handle(Handler next); }

Implement this contract to create custom middleware.

void use(Middleware middleware)

Register a global middleware on the app.

RouteBuilder.useMiddleware(Middleware middleware)

Attach middleware to a specific route.

void websocket(String path, Object handler, {List<Middleware> middlewares = const []})

Attach middleware directly to a WebSocket route via the `middlewares` argument.

Built-ins: ExceptionMiddleware, CorsMiddleware, LoggerMiddleware, StaticFileMiddleware, CookieSessionMiddleware

Drop-in middleware shipped with Flint.

StaticFileMiddleware({String publicFolder = 'public', Duration cacheDuration = const Duration(days: 30), int maxFileSize = 104857600, bool enableCompression = true, bool enableRangeRequests = true})

Optimized static file serving with cache headers, ETag, and byte-range support.

### Declare Middleware

```dart
class AuthGuard extends Middleware {
  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final token = ctx.req.headers['authorization'];
      if (token == null || token.isEmpty) {
        if (ctx.res != null) {
          return ctx.res!.status(401).json({'error': 'Unauthorized'});
        }
        return null;
      }
      return await next(ctx);
    };
  }
}
```

### Use on HTTP

```dart
app.get('/private', (Context ctx) async => ctx.res?.send('ok'))
  .useMiddleware(AuthGuard());

app.use(AuthGuard()); // global
```

### Use on WebSocket

```dart
app.websocket(
  '/chat',
  (Context ctx) {
    final socket = ctx.socket;
    if (socket == null) return;
    socket.on('ping', (_) => socket.emit('pong', {'ok': true}));
  },
  middlewares: [AuthGuard()],
);
```

### Recommended Static Setup

```dart
app.use(StaticFileMiddleware()); // serves files from public/
app.static('/assets', 'assets'); // serves framework/site assets
```
