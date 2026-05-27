## Swagger UI Docs

What is an app without docs? Flint Dart ships with auto-generated Swagger UI so your team and API users can explore endpoints instantly. Enable docs and visit `http://localhost:3000/docs`.

```dart
void main() {
  final app = Flint(
    enableSwaggerDocs: true,
  );

  app.listen(port: 3000);
}
```

Swagger docs are auto-generated during development when you restart the server, so you stay productive. The JSON is written to `docs/swagger.json` and Swagger UI reads it automatically at runtime.

### Route Annotations

Use doc comments above routes to describe your API.

```dart
/// @summary Create a new user
/// @auth bearer
/// @response 201 Created
/// @response 400 Bad request
/// @param id path string required User ID
/// @query page integer optional Page number
/// @body {"name": "string", "email": "string"}
app.post('/users', controller.create);
```

- `@summary` - short description shown in Swagger UI.

- `@auth` - auth type (default: `bearer`).

- `@response` - status code + description.

- `@param` - path or query parameters (`name location type required`).

- `@query` - query parameter (`name type required`).

- `@body` - JSON body schema example.

- `@prefix` - override prefix for a RouteGroup.

- `@server` - add server URLs for docs.

### WebSocket Handshake Docs

Flint now includes `app.websocket(...)` routes in generated docs. They are emitted as Swagger-friendly `GET` operations with a `101 Switching Protocols` response plus Flint-specific metadata such as `x-websocket`, `x-flint-transport`, and a top-level `x-websockets` block.

```dart
/// @summary Chat websocket handshake
/// @response 101 Switching Protocols
app.websocket('/ws/chat', (Context ctx) {
  ctx.socket?.join('lobby');
});
```

This keeps the generated OpenAPI document valid while still making WebSocket routes visible in the docs.
