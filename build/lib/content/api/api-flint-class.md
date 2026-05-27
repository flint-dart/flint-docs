## Flint

Application root that wires routes, middleware, static assets, WebSockets, and server lifecycle.

A `Flint` instance is the entry point for your server. It registers HTTP routes, WebSocket endpoints, mounts route groups, and controls server startup with optional hot reload and auto-connect services.

Flint({String rootPath = "lib", String? viewPath, bool autoConnectDb = true, bool autoConnectMail = true, bool withDefaultMiddleware = true, bool enableSwaggerDocs = false})

Create a new app instance with optional defaults for middleware, DB, mail, and Swagger docs.

RouteBuilder get/post/put/delete/patch(String path, Object handler)

Register HTTP routes using Context handlers (or legacy handlers) with optional route-level middleware via `RouteBuilder.useMiddleware`.

RouteBuilder route(String method, String path, Handler handler)

Register a custom HTTP method (e.g. `OPTIONS`, `HEAD`).

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
