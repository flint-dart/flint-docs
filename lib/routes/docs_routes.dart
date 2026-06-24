import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/docs_controller.dart';

class DocsRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final docs = app.controller(DocsController.new);
    docs.get('/', (c) => c.home());
    docs.get('/guides', (c) => c.guidesIndex());
    docs.get('/guides/:topic', (c) => c.guidesTopic());
    docs.get('/ui', (c) => c.ui());
    docs.get('/client', (c) => c.client());
    docs.get('/ai', (c) => c.ai());
    docs.get('/dart', (c) => c.dartLessons());
    docs.get('/api', (c) => c.apiIndex());
    docs.get('/api/:topic', (c) => c.apiTopic());
    docs.get('/examples', (c) => c.examples());
    docs.get('/changelog', (c) => c.changelog());
    docs.get('/whats-new', (c) => c.whatsNew());
  }
}
