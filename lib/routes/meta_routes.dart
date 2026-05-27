import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/meta_controller.dart';

class MetaRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final meta = app.controller(MetaController.new);
    meta.get('/robots.txt', (c) => c.robots());
    meta.get('/sitemap.xml', (c) => c.sitemap());
    meta.get('/llms.txt', (c) => c.llms());
  }
}
