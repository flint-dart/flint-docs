import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/questions_controller.dart';

class QuestionsRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final questions = app.controller(QuestionsController.new);
    questions.get('/questions', (c) => c.index());
    questions.get('/questions/ask', (c) => c.ask());
    questions.post('/questions/ask', (c) => c.store());
    questions.get('/questions/:slug', (c) => c.show());
    questions.post('/questions/:slug/answers', (c) => c.storeAnswer());
    app.websocket('/questions/:slug/live',
        (Request req, FlintWebSocket socket) {
      Log.info('[questions.live] socket connected: ${req.param('slug')}');
      socket.join('answers');
      final payload = {
        'room': 'answers',
        'slug': req.param('slug'),
      };
      Log.info('[questions.live] emitting connected: $payload');
      socket.emit('connected', payload);
    });
    questions.post(
      '/questions/:slug/answers/:id/delete',
      (c) => c.deleteAnswer(),
    );
    questions.post(
      '/questions/:slug/answers/:id/update',
      (c) => c.updateAnswer(),
    );
  }
}
