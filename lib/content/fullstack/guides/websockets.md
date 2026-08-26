## WebSockets

Flint includes a Socket.IO-like WebSocket API with events, rooms, and auth middleware. WebSocket connections are established via explicit routes registered with `app.websocket()`. Once connected, you can emit or broadcast from anywhere using the global `wsManager`.

As of `1.0.3`, WebSocket paths act like namespaces. A room joined inside `/chat` is isolated from the same room name inside `/notification` unless you explicitly target the other namespace.

### Server (Context style)

```dart
app.websocket('/chat', (Context ctx) {
  final client = ctx.socket;
  if (client == null) return;

  client.on('message', (data) {
    client.emitToRoom('chat', 'message', {
      'text': data.toString(),
      'sent_at': DateTime.now(),
    });
  });

  client.on('join', (data) {
    client.join('chat');
  });
});
```

### Namespace Isolation

```dart
app.websocket('/notification', (Context ctx) {
  ctx.socket?.join('admins');
});

app.websocket('/chat', (Context ctx) {
  final client = ctx.socket;
  if (client == null) return;

  client.emitToRoom('admins', 'notify', {'message': 'chat-only'});
  // Only /chat clients in room "admins" will receive this.

  client.emitToRoomIn('/notification', 'admins', 'notify', {
    'message': 'cross-namespace'
  });
  // Explicitly targets the /notification namespace.

  client.emitToNamespace('/notification', 'presence', {'online': true});
  // Sends to every connected client in /notification.
});
```

### Client

```dart
final ws = FlintWebSocketClient('wss://api.example.com/chat');

ws.on('message', (data) {
  print('Received: $data');
});

ws.emit('join', {'room': 'chat'});
ws.emit('message', {'text': 'Hello world'});
```

### Middleware

WebSocket routes support route middleware via the `middlewares` argument. Use middleware to apply auth, logging, or validation logic around the connected socket handler.

```dart
app.websocket(
  '/chat',
  (Context ctx) {
    // Connected clients only
    final client = ctx.socket;
    if (client == null) return;
  },
  middlewares: [AuthMiddleware()],
);
```

Tip: HTTP middleware does not run for WebSockets. Reuse shared logic by placing it in a middleware class used by both your HTTP routes and WebSocket routes.

### Emit Without Touching a Route

You still need a route to accept the connection, but you do _not_ need to be inside that route to emit or broadcast. Use `wsManager` anywhere after clients are connected:

```dart
wsManager.emitToAll('server:notice', {'message': 'Hello, all clients'});
wsManager.emitToRoom('admins', 'audit', {'action': 'login'}, namespace: '/chat');
wsManager.emitToNamespace('/notification', 'presence', {'online': true});
wsManager.emitToClient('clientId123', 'private', {'ok': true});
```

You can protect WebSocket routes the same way you protect HTTP routes by using middleware. If you need legacy behavior, `emitToPathRoom(...)` still exists as a deprecated alias for `emitToRoomIn(...)`.
