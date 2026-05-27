## Router

Matches incoming requests to handlers and supports route params, regex, and wildcards.

Flint routes are defined on the `Flint` app, which internally uses `Router` and `RouteBuilder` for matching and middleware composition.

void add(String method, String path, Handler handler, {List<Middleware> middlewares = const []})

Low-level route registration used by the framework and builders.

RouteBuilder get/post/put/delete/patch(...)

Use the app-level helpers to register routes and attach middleware.

Path params: `/users/:id` or `/users/:id(\d+)`

Named params can include optional regex patterns for validation.

Wildcard: `/public/*`

Match all paths under a prefix (used by static file routing).

### Example

```dart
app.get('/users/:id(\\d+)', (Context ctx) async {
  final id = ctx.req.params['id'];
  return ctx.res?.json({'id': id});
});
```
