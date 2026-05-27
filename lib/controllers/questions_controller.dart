import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/helper.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'package:flint_docs/models/user_model.dart';
import 'package:flint_docs/support/docs_support.dart';

class QuestionsController extends Controller {
  final docs = DocsSupport();

  Future<Response> index() async {
    final questions = await docs.fetchQuestions();
    return res.page(
      'Questions',
      title: 'Flint Questions - Community Q&A',
      meta: docs.pageMeta(
        title: 'Flint Questions - Community Q&A',
        description:
            'Ask and answer practical Flint Dart questions with searchable community Q&A.',
        canonicalPath: '/questions',
      ),
      props: {
        ...await docs.baseData(req),
        'questions': questions,
      },
    );
  }

  Future<Response> ask() async {
    final user = await req.user;
    return res.page(
      'AskQuestion',
      title: 'Ask a Question - Flint Docs',
      meta: docs.pageMeta(
        title: 'Ask a Question - Flint Docs',
        description:
            'Ask a Flint Dart question and get help from the community.',
        canonicalPath: '/questions/ask',
        meta: const {'robots': 'noindex, nofollow'},
      ),
      props: {
        ...await docs.baseData(req),
        'isAuthenticated': user != null,
        'authMode': req.queryParam('mode'),
      },
    );
  }

  Future<Response> store() async {
    final user = await _currentUser();
    if (user == null) {
      return res.status(401).json({
        'status': false,
        'message': 'Unauthorized',
      });
    }

    if (!_canPost(user)) {
      return res.status(403).json({
        'status': false,
        'message': 'Forbidden',
      });
    }

    try {
      final data = await req.validate({
        'title': 'required|string|min:6',
        'tag': 'required|string',
        'body': 'required|string|min:20',
      });

      final baseSlug = Str.slugify(data['title'].toString()).trim();
      final slug = baseSlug.isEmpty
          ? 'question-${DateTime.now().millisecondsSinceEpoch}'
          : baseSlug;
      final question = await Question().create({
        'title': data['title'],
        'slug': slug,
        'body': data['body'],
        'tag': data['tag'],
        'author': user['name'] ?? user['email'] ?? 'Anonymous',
        'published_at': DateTime.now().toIso8601String(),
      });

      final created = question?.toMap();
      if (created == null) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to create question',
        });
      }

      final questionView = docs.toQuestionViewModel(created);
      final redirectTo = questionView['href']?.toString() ?? '/questions/$slug';
      if (_wantsJson()) {
        return res.status(201).json({
          'status': true,
          'question': questionView,
          'redirectTo': redirectTo,
        });
      }
      return res.redirect(redirectTo);
    } on ValidationException catch (e) {
      return res.status(422).json({
        'status': false,
        'errors': e.errors,
      });
    } catch (e) {
      return res.status(500).json({
        'status': false,
        'message': e.toString(),
      });
    }
  }

  Future<Response> show() async {
    final user = await _currentUser();
    final slug = req.param('slug');
    if (slug == null) return res.status(404).send('Not found');

    final question = await Question().firstWhere('slug', slug);
    if (question == null) return res.status(404).send('Question not found');

    final viewModel = docs.toQuestionViewModel(question.toMap());
    final answers = await docs.fetchAnswersForQuestion(
      question.toMap(),
      user?['id']?.toString(),
      user?['name']?.toString(),
      user?['email']?.toString(),
    );

    return res.page(
      'QuestionDetail',
      title: viewModel['title']?.toString() ?? 'Question',
      meta: docs.pageMeta(
        title: viewModel['title']?.toString() ?? 'Question',
        description: viewModel['excerpt']?.toString(),
        canonicalPath: '/questions/$slug',
        type: 'article',
      ),
      props: {
        ...await docs.baseData(req),
        'question': viewModel,
        'answers': answers,
        'answersCount': answers.length,
      },
    );
  }

  Future<Response> storeAnswer() async {
    final slug = req.param('slug');
    if (slug == null) return res.status(404).send('Not found');

    final user = await _currentUser();
    if (user == null) {
      return res.status(401).json({
        'status': false,
        'message': 'Unauthorized',
      });
    }

    if (!_canPost(user)) {
      return res.status(403).json({
        'status': false,
        'message': 'Forbidden',
      });
    }

    final question = await Question().firstWhere('slug', slug);
    if (question == null) {
      return res.status(404).json({
        'status': false,
        'message': 'Question not found',
      });
    }

    try {
      final data = await req.validate({
        'body': 'required|string|min:10',
        'slug': 'required|string',
      });
      final answer = await Answer().create({
        'body': data['body'],
        'question_id': question.getAttribute('id')?.toString(),
        'user_id': user['id'],
        'author': user['name'] ?? user['email'] ?? 'Anonymous',
        'published_at': DateTime.now().toIso8601String(),
      });
      final answerMap = answer?.toMap();
      if (answerMap == null) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to create answer',
        });
      }
      final answerView = {
        ...docs.toAnswerViewModel(answerMap),
        'can_edit': true,
      };
      if (_wantsJson()) {
        Log.info('[questions.live] broadcasting answer.created: $answerView');
        WebSocketManager.instance.emitToPathRoom(
          '/questions/$slug/live',
          'answers',
          'answer.created',
          answerView,
        );
        return res.status(201).json({
          'status': true,
          'answer': answerView,
          'redirectTo': '/questions/$slug#answers',
        });
      }
      return res.redirect('/questions/$slug#answers');
    } on ValidationException catch (e) {
      return res.status(422).json({'status': false, 'errors': e.errors});
    } catch (e) {
      return res.status(500).json({'status': false, 'message': e.toString()});
    }
  }

  Future<Response> deleteAnswer() async {
    final slug = req.param('slug');
    final answerId = req.param('id');
    final result = await _findOwnedAnswer();
    if (result.error != null) return result.error!;
    await result.answer!.delete();
    if (slug != null && answerId != null) {
      final payload = {'id': answerId, 'slug': slug};
      Log.info('[questions.live] broadcasting answer.deleted: $payload');
      WebSocketManager.instance.emitToPathRoom(
        '/questions/$slug/live',
        'answers',
        'answer.deleted',
        payload,
      );
    }
    return res.json({
      'status': true,
      'id': answerId,
      'message': 'Answer deleted.',
    });
  }

  Future<Response> updateAnswer() async {
    final result = await _findOwnedAnswer();
    if (result.error != null) return result.error!;
    final answer = result.answer!;
    final answerId = req.param('id')!;

    try {
      final data = await req.validate({
        'body': 'required|string|min:10',
        'slug': 'required|string',
        'id': 'required|string',
      });
      await answer.update(data: {'body': data['body']});
      final refreshed = await Answer().find(answerId);
      final updatedMap = refreshed?.toMap();
      final persistedBody = updatedMap?['body']?.toString().trim();
      final requestedBody = data['body']?.toString().trim();
      if (updatedMap == null ||
          persistedBody == null ||
          requestedBody == null ||
          persistedBody != requestedBody) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to update answer.',
        });
      }
      return res.json({
        'status': true,
        'answer': docs.toAnswerViewModel(updatedMap),
      });
    } on ValidationException catch (e) {
      return res.status(422).json({'status': false, 'errors': e.errors});
    } catch (e) {
      return res.status(500).json({'status': false, 'message': e.toString()});
    }
  }

  Future<_AnswerLookup> _findOwnedAnswer() async {
    final slug = req.param('slug');
    final answerId = req.param('id');
    if (slug == null || answerId == null) {
      return _AnswerLookup(error: res.status(404).send('Not found'));
    }

    final user = await _currentUser();
    if (user == null) {
      return _AnswerLookup(
        error: await res.status(401).json({
          'status': false,
          'message': 'Unauthorized',
        }),
      );
    }

    final question = await Question().firstWhere('slug', slug);
    if (question == null) {
      return _AnswerLookup(error: res.status(404).send('Question not found'));
    }

    final answer = await Answer().find(answerId);
    if (answer == null) {
      return _AnswerLookup(
        error: await res.status(404).json({
          'status': false,
          'message': 'Answer not found',
        }),
      );
    }

    final answerMap = answer.toMap();
    final answerQuestionId = answerMap['question_id']?.toString();
    final questionId = question.getAttribute('id')?.toString();
    if (answerQuestionId != questionId) {
      return _AnswerLookup(
        error: await res.status(404).json({
          'status': false,
          'message': 'Answer not found',
        }),
      );
    }

    final canEdit = docs.canEditAnswer(
      answerMap,
      user['id']?.toString(),
      user['name']?.toString(),
      user['email']?.toString(),
    );
    if (!canEdit) {
      return _AnswerLookup(
        error: await res.status(403).json({
          'status': false,
          'message': 'Forbidden',
        }),
      );
    }

    return _AnswerLookup(answer: answer);
  }

  Future<Map<String, dynamic>?> _currentUser() async {
    final user = await req.user;
    if (user == null) return null;

    final role = user['role']?.toString();
    if (role != null && role.isNotEmpty) return user;

    final id = user['id']?.toString();
    if (id != null && id.isNotEmpty) {
      final fullUser = await User().find(id);
      final data = fullUser?.toMap();
      if (data != null) return data;
    }

    final email = user['email']?.toString();
    if (email != null && email.isNotEmpty) {
      final fullUser = await User().firstWhere('email', email);
      final data = fullUser?.toMap();
      if (data != null) return data;
    }

    return user;
  }

  bool _canPost(Map<String, dynamic> user) {
    final role = user['role']?.toString();
    return role == 'dev' || role == 'admin' || role == 'contributor';
  }

  bool _wantsJson() {
    final accept = req.headers['accept'] ?? req.headers['Accept'] ?? '';
    final requestedWith = req.headers['x-requested-with'] ??
        req.headers['X-Requested-With'] ??
        '';
    return accept.contains('application/json') ||
        requestedWith == 'FlintClient' ||
        requestedWith == 'XMLHttpRequest';
  }
}

class _AnswerLookup {
  _AnswerLookup({this.answer, this.error});

  final Answer? answer;
  final Response? error;
}
