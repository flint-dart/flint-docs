import 'package:flint_dart/flint_dart.dart';

class EcosystemApiKeyMiddleware extends Middleware {
  String _configuredKey() {
    final direct = FlintEnv.get('EULOGIA_ECOSYSTEM_API_KEY', '').trim();
    if (direct.isNotEmpty) return direct;
    return FlintEnv.get('ECOSYSTEM_API_KEY', '').trim();
  }

  String _providedKey(Request req) {
    final auth =
        (req.headers['authorization'] ?? req.headers['Authorization'] ?? '')
            .toString()
            .trim();
    if (auth.toLowerCase().startsWith('bearer ')) {
      return auth.substring(7).trim();
    }

    return (req.headers['x-eulogia-api-key'] ??
            req.headers['X-Eulogia-Api-Key'] ??
            req.headers['x-api-key'] ??
            req.headers['X-Api-Key'] ??
            req.headers['x-key'] ??
            req.headers['X-Key'] ??
            '')
        .toString()
        .trim();
  }

  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final req = ctx.req;
      final res = ctx.res;
      if (res == null) return next(ctx);

      final configured = _configuredKey();
      if (configured.isEmpty) {
        return res.status(503).json({
          'status': false,
          'message': 'Eulogia ecosystem API key is not configured',
        });
      }

      if (_providedKey(req) != configured) {
        return res.status(401).json({
          'status': false,
          'message': 'Unauthorized ecosystem request',
        });
      }

      return next(ctx);
    };
  }
}
