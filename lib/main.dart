import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/routes/app_routes.dart';

void main() {
  final app = Flint(
    withDefaultMiddleware: true,
    autoConnectDb: true,
    enableSwaggerDocs: true,
  );

  // Serve static assets (css/js/images)
  app.static('/assets', 'assets');

  // Mount the main AppRoutes
  app.routes(AppRoutes());
  // Start the server
  app.listen(hotReload: false);
}
