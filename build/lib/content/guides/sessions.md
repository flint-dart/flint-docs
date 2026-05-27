## Sessions & Cookies

Flint includes session helpers built on cookies. Use `ctx.req.startSession()`, `ctx.req.session`, and `ctx.req.destroySession()` to manage login state.

### Start a Session

```dart
app.post('/login', (Context ctx) async {
  final user = {'id': 1, 'email': 'user@example.com'};
  await ctx.req.startSession(user, ttl: Duration(hours: 8));
  return ctx.res.json({'ok': true});
});
```

### Cookies

Sessions are stored server-side and linked by a cookie named `FLINTSESSID`. The cookie is set automatically when you call `ctx.req.startSession()`.

```dart
final sessionId = ctx.req.cookies['FLINTSESSID'];
final isAuthed = sessionId != null;
```

You can also set your own cookies directly on the response:

```dart
app.get('/set-cookie', (Context ctx) async {
  res
    .setCookie('theme', 'dark', maxAge: 3600, httpOnly: true, sameSite: 'Lax')
    .setCookie('lang', 'en', path: '/');
  return ctx.res.json({'ok': true});
});

app.get('/clear-cookie', (Context ctx) async {
  ctx.res.clearCookie('theme');
  return ctx.res.json({'ok': true});
});
```

### Read Session Data

```dart
app.get('/me', (Context ctx) async {
  final session = await ctx.req.session;
  if (session == null) return ctx.res.status(401).json({'error': 'Unauthorized'});
  return ctx.res.json({'user': session});
});
```

### Update or Destroy

```dart
await ctx.req.updateSession({'role': 'admin'});
await ctx.req.destroySession();
```

Sessions are powered by `CookieSessionMiddleware`, which is always registered by default.
