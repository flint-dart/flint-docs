import 'package:flint_dart/flint_dart.dart';

class ValidationMiddleware extends Middleware {
  final Map<String, String> rules;

  ValidationMiddleware(this.rules);

  @override
  Handler handle(Handler next) {
    return (Context context) async {
      try {
        final data = await context.req.json();
        await Validator.validate(data, rules);
        return await next(context);
      } catch (e) {
        return context.res?.status(400).json({'error': e.toString()});
      }
    };
  }
}
