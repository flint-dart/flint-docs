import 'package:flint_dart/flint_dart.dart';

class AuthMiddleware extends Middleware {
  @override
  Handler handle(Handler next) {
    return (context) async {
      final token = context.req.bearerToken;
      if (token == null || token != "expected_token") {
        return context.res?.status(401).send("Unauthorized");
      }
      return await next(context);
    };
  }
}
