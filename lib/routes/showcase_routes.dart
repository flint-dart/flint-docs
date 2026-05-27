import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/showcase_controller.dart';

class ShowcaseRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final showcase = app.controller(ShowcaseController.new);

    showcase.get('/showcase', (controller) => controller.index());
    showcase.get('/showcase/submit', (controller) => controller.submit());
    showcase.post('/showcase/submit', (controller) => controller.store());
    showcase.get('/showcase/:slug', (controller) => controller.show());
  }
}
