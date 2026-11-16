import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/flint_ui_server.dart';
import 'package:flint_docs/ui/component_registry.dart';
import 'package:flint_docs/routes/app_routes.dart';

void main() {
  const serverRenderer = FlintServerRenderer();
  String? renderFlintPage(String component, Map<String, dynamic> props) {
    final rendered = serverRenderer.renderPage(
      componentRegistry,
      component,
      props: props,
    );
    return '<div id="flint-ssr-root" style="display: contents;">$rendered</div>';
  }

  final app = Flint(
    withDefaultMiddleware: true,
    autoConnectDb: false,
    enableSwaggerDocs: true,
    serverRenderFlintPages: true,
    flintPageServerRenderer: renderFlintPage,
  );

  // Mount the main AppRoutes
  app.routes(AppRoutes());
  // Start the server
  app.listen(hotReload: true);
}
