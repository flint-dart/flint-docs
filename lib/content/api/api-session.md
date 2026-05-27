## Session

Session management with memory, file, or DB storage.

SessionManager()

Singleton session manager configured via `SESSION_DRIVER`.

Future<String> ctx.req.startSession(Map<String, dynamic> data, {Duration? ttl})

Create a session and set the `FLINTSESSID` cookie.

Future<Map<String, dynamic>?> ctx.req.session

Read session data for the current request.

Future<void> ctx.req.destroySession()

Destroy the current session and clear the cookie.

### Example

```dart
app.post('/session', (Context ctx) async {
  await ctx.req.startSession({'id': 'user-1', 'role': 'admin'});
  return ctx.res.json({'ok': true});
});
```
