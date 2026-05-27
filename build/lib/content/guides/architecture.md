## Controllers, Services & Routes

A clean structure separates HTTP routing (controllers) from business logic (services). Flint controllers can now extend the request-scoped `Controller` base, which provides `req`, `res`, `socket`, and transport checks like `isHttp` / `isWebSocket`.

```dart
// lib/src/services/user_service.dart
class UserService {
  Future> listUsers() async {
    final users = await User().orderBy('created_at', desc: true).get();
    return {'data': users};
  }

  Future> createUser(Map data) async {
    final user = await User().create(data);
    return {'user': user};
  }
}

// lib/src/controllers/user_controller.dart
class UserController extends Controller {
  final UserService service;
  UserController(this.service);

  Future index() async {
    final result = await service.listUsers();
    return res.json(result);
  }

  Future store() async {
    final data = await req.json();
    final result = await service.createUser(data);
    return res.json(result);
  }
}

// lib/routes/user_routes.dart
class UserRoutes extends RouteGroup {
  @override
  String get prefix => '/users';

  @override
  void register(Flint app) {
    final users = app.controller(() => UserController(UserService()));

    users.get('/', (c) => c.index());
    users.post('/', (c) => c.store());
  }
}

// Alternative without RouteGroup helper
app.get(
  '/users/:id',
  controller(
    () => UserController(UserService()),
    (c) => c.index(),
  ),
);
```

Use `app.controller(...)` inside route groups, or the lower-level `controller(...)` / `controllerVoid(...)` helpers, so each request gets a bound controller instance automatically. The base controller also supports typed request-scoped extras via `read()` and `write()` for future session/user injection patterns. If you access `res` in a WebSocket action (or `socket` in HTTP), Flint throws a clear controller context error to help catch route misuse early.
