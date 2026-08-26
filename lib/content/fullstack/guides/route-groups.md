## Route Groups

Group related endpoints under a prefix and mount them with `app.routes()`.

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/auth_controller.dart';

class AuthRoutes extends RouteGroup {
  @override
  String get prefix => '/auth';

  @override
  void register(Flint app) {
    final authController = AuthController();
    app.post('/register', authController.register);
    app.post('/login', authController.login);
  }
}

void main() {
  final app = Flint();
  app.routes(AuthRoutes());
  app.listen(port: 3000);
}
```

## Route Groups with Controllers

For request-scoped controller actions, create a controller route builder with `app.controller(...)` inside a `RouteGroup`. This keeps controller methods clean while still creating a fresh controller per request/socket.

```dart
import 'package:flint_dart/flint_dart.dart';

class HttpUserController extends Controller {
  Future create() async {
    final body = await req.json();
    return res.json({'created': true, 'data': body});
  }

  Future showProfile() async {
    return res.json({'id': req.params['id']});
  }
}

class ChatController extends Controller {
  void connect() {
    socket.emit('connected', {'id': socket.id});
  }
}

class UserRoutes extends RouteGroup {
  @override
  String get prefix => '/users';

  @override
  void register(Flint app) {
    final users = app.controller(HttpUserController.new);

    users.post('/', (c) => c.create());
    users.get('/:id', (c) => c.showProfile());
  }
}

class ChatRoutes extends RouteGroup {
  @override
  String get prefix => '/ws';

  @override
  void register(Flint app) {
    final chat = app.controller(ChatController.new);

    chat.websocket('/chat', (c) {
      c.connect();
    });
  }
}
```
