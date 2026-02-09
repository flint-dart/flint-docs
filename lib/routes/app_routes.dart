// src/routes/app_routes.dart
import 'package:flint_dart/flint_dart.dart';
import 'auth_routes.dart';
import 'user_routes.dart';
import 'web_routes.dart';

/// Main route group for the entire app
class AppRoutes extends RouteGroup {
  @override
  String get prefix => ''; // root

  @override
  List<Middleware> get middlewares => []; // optional global middlewares

  @override
  void register(Flint app) {
    // Web template routes
    app.routes(WebRoutes());

    // Auth routes
    app.routes(AuthRoutes());

    // User routes with optional middleware
    app.routes(
      UserRoutes(),
      children: [],
    );
  }
}
