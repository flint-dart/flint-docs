import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/ecosystem_controller.dart';
import 'package:flint_docs/middlewares/ecosystem_api_key_middleware.dart';

class EcosystemRoutes extends RouteGroup {
  final EcosystemApiKeyMiddleware ecosystemKey = EcosystemApiKeyMiddleware();

  @override
  String get prefix => '/api/ecosystem';

  @override
  List<Middleware> get middlewares => [];

  @override
  void register(Flint app) {
    app
        .get('/users', useController(EcosystemController.new, (c) => c.users()))
        .useMiddleware(ecosystemKey);
    app
        .get(
          '/summary',
          useController(EcosystemController.new, (c) => c.summary()),
        )
        .useMiddleware(ecosystemKey);
  }
}
