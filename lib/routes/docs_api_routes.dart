import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/docs_api_controller.dart';

class DocsApiRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final api = app.controller(DocsApiController.new);
    api.get('/api/me', (c) => c.me());
    api.get('/api/blog', (c) => c.blogIndex());
    api.get('/api/blog/:slug', (c) => c.blogShow());
    api.get('/api/questions', (c) => c.questionsIndex());
    api.get('/api/questions/:slug', (c) => c.questionsShow());
    api.get('/api/changelog', (c) => c.changelog());
    api.get('/api/guides/section/:name', (c) => c.guideSection());
    api.get('/api/reference', (c) => c.reference());
  }
}
