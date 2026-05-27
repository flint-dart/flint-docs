import 'package:flint_dart/flint_dart.dart';
import 'blog_routes.dart';
import 'docs_api_routes.dart';
import 'docs_routes.dart';
import 'meta_routes.dart';
import 'questions_routes.dart';

/// Top-level docs route composer.
class WebRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  List<Middleware> get middlewares => [];

  @override
  void register(Flint app) {
    app.routes(MetaRoutes());
    app.routes(DocsApiRoutes());
    app.routes(DocsRoutes());
    app.routes(BlogRoutes());
    app.routes(QuestionsRoutes());
  }
}
