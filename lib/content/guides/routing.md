## Routing

Define routes in `lib/main.dart` or a route group.

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint(
    withDefaultMiddleware: true,
    enableSwaggerDocs: true,
    autoConnectDb: false,
  );

  app.get('/', (Context ctx) async {
    return ctx.res?.json({'status': 'ok'});
  });

  app.get('/users/:id', (Context ctx) async {
    final id = ctx.req.params['id'];
    return ctx.res?.json({'id': id});
  });

  app.post('/users', (Context ctx) async {
    final data = await ctx.req.json();
    return ctx.res?.json({'created': true, 'data': data});
  });

  app.listen(port: 3000);
}
```

Attach middleware per route:

```dart
app.post('/profile', handler)
  .use(AuthMiddleware());
```

### Route Params

Use `:param` segments. Read them with `ctx.req.param()`. The raw map is `ctx.req.params`.

```dart
app.get('/users/:id', (Context ctx) async {
  final id = ctx.req.param('id');
  return ctx.res?.json({'id': id});
});
```

### Query Params

Read query string values from `ctx.req.queryParam()` or `ctx.req.query` (e.g. `?page=2&limit=10`).

```dart
app.get('/users', (Context ctx) async {
  final page = ctx.req.queryParam('page') ?? '1';
  final limit = ctx.req.queryParam('limit') ?? '10';
  return ctx.res?.json({'page': page, 'limit': limit});
});
```

### Unified Context

Route handlers receive a single `Context` object: `ctx.req` (always), `ctx.res` (HTTP), and `ctx.socket` (WebSocket).

### Request & Response

Common helpers you’ll use in most handlers.

```dart
app.post('/users', (Context ctx) async {
  final body = await ctx.req.json(); // parse JSON body
  final token = ctx.req.bearerToken; // read Authorization token
  final ip = ctx.req.ipAddress; // client IP

  return ctx.res
      .status(201)
      .json({'created': true, 'data': body, 'ip': ip, 'token': token});
});
```

### Response Methods

Use the right response method based on what you’re returning.

```dart
app.get('/text', (Context ctx) async {
  return ctx.res?.send('Plain text');
});

app.get('/json', (Context ctx) async {
  return ctx.res?.json({'status': 'ok'});
});

app.get('/auto', (Context ctx) async {
  return ctx.res?.respond({'auto': 'json'}); // infers JSON/HTML/text
});

app.get('/page', (Context ctx) async {
  return ctx.res?.view('home', data: {'title': 'Flint Docs'});
});
```

`send()` is for plain text or custom content types. `json()` sets JSON headers and encodes safely. `respond()` auto-detects the best type. `view()` renders a template.

For form workflows, you can combine flash messages with redirect-back: `withSuccess()`, `withError()`, and `back()`.

```dart
app.post('/settings', (Context ctx) async {
  final data = await ctx.req.validate({'name': 'required|string|min:2'});
  // ... save settings
  return ctx.res
      ?.withSuccess('Settings updated.')
      .back(fallback: '/settings');
});
```

You can also return values directly from the route handler. Flint will serialize `Map`/`List` as JSON and custom classes that implement `toMap()` or `toJson()`.

```dart
class UserDto {
  final int id;
  final String email;
  UserDto(this.id, this.email);

  Map toMap() => {'id': id, 'email': email};
}

app.get('/me', (Context ctx) async {
  return UserDto(1, 'ada@example.com'); // auto JSON
});
```

### Request Body

Choose the right body reader based on the incoming content type.

```dart
app.post('/raw', (Context ctx) async {
  final text = await ctx.req.body(); // raw string body
  return ctx.res?.send(text);
});

app.post('/json', (Context ctx) async {
  final data = await ctx.req.json(); // Map
  return ctx.res?.json({'received': data});
});

app.post('/form', (Context ctx) async {
  final fields = await ctx.req.form(); // Map
  return ctx.res?.json({'fields': fields});
});
```

`body()` returns a raw string. `json()` parses JSON into a map. `form()` reads `application/x-www-form-urlencoded` or `multipart/form-data`.

### File Uploads & Storage

Uploads come from `multipart/form-data`. You can read files, check if they exist, or store them on disk.

- `ctx.req.file('avatar')` — get a single uploaded file.

- `ctx.req.files('photos')` — get multiple files for the same field.

- `ctx.req.hasFile('avatar')` / `ctx.req.hasFiles('photos')` — check if files were sent.

- `ctx.req.storeFile(...)` / `ctx.req.storeFiles(...)` — save to disk and return path(s).

```dart
app.post('/avatar', (Context ctx) async {
  // Access the uploaded file
  final upload = await ctx.req.file('avatar');
  if (upload == null) {
    return ctx.res?.status(400).json({'error': 'No file uploaded'});
  }

  // Save with a custom name
  final path = await ctx.req.storeFile(
    'avatar',
    directory: 'public/uploads',
    filename: 'user-1.png',
  );

  return ctx.res?.json({'saved_to': path});
});
```

```dart
app.post('/gallery', (Context ctx) async {
  if (!await ctx.req.hasFiles('photos')) {
    return ctx.res?.status(400).json({'error': 'No photos uploaded'});
  }

  final paths = await ctx.req.storeFiles('photos', directory: 'public/uploads');
  return ctx.res?.json({'saved_to': paths});
});
```

Tip: you can also save manually using `upload.saveTo(path)` if you want full control.
