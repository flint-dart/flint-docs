import 'package:flint_dart/db.dart';
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/question_model.dart';

/// Routes that render Flint templates from lib/views
class WebRoutes extends RouteGroup {
  @override
  String get prefix => ''; // root

  @override
  List<Middleware> get middlewares => [];

  @override
  void register(Flint app) {
    // Home
    app.get('/', (req, res) async {
      return res.view('home', data: {
        ...await _baseData(req),
        'title': 'Flint Dart - Modern Dart Backend Framework',
        'description':
            'Hot reload for views and routes, Flint templates, first-class CLI, built-in Swagger docs, unified data layer, and batteries included.',
        'keywords':
            'Flint Dart, Dart backend framework, hot reload, template engine, CLI scaffolding, Swagger docs, ORM, QueryBuilder, sessions, cache, storage, mail, WebSockets',
        'url': '/',
      });
    });

    // Guides
    app.get(
      '/guides/getting-started',
      (req, res) async => res.view(
        'guides.getting-started',
        data: await _baseData(req),
      ),
    );

    // API
    app.get('/api', (req, res) async {
      return res.view('api.index', data: await _baseData(req));
    });

    // Examples
    app.get('/examples', (req, res) async {
      return res.view('examples.index', data: await _baseData(req));
    });

    // Blog list
    app.get('/blog', (req, res) async {
      final posts = await _fetchBlogPosts();
      return res.view('blog.index', data: {
        ...await _baseData(req),
        'posts': posts,
        'title': 'Flint Blog',
        'description':
            'Updates, guides, and best practices from the Flint team.',
        'url': '/blog',
      });
    });

    // Write blog post
    app.get('/blog/write', (req, res) async {
      final user = await req.user;
      final role = user?['role'];
      if (user == null ||
          (role != 'admin' &&
              role != 'contributor' &&
              role != 'collaborator')) {
        return res.status(403).send('Forbidden');
      }

      return res.view('blog.write', data: {
        ...await _baseData(req),
        'title': 'Write a Blog Post',
        'description': 'Draft a new Flint blog post.',
        'url': '/blog/write',
      });
    });

    app.post('/blog/write', (req, res) async {
      final user = await req.user;
      if (user == null) {
        return res.status(401).json({'error': 'Unauthorized'});
      }

      final role = user['role'];
      if (role != 'admin' && role != 'contributor' && role != 'collaborator') {
        return res.status(403).json({'error': 'Forbidden'});
      }

      final data = await req.validate({
        'title': 'required|string|min:6',
        'tag': 'required|string',
        'body': 'required|string|min:40',
      });

      final slug = _slugify(data['title'].toString());
      final body = data['body'].toString();
      final excerpt = body.length > 160 ? '${body.substring(0, 160)}...' : body;

      final post = await BlogPost().create({
        'title': data['title'],
        'slug': slug,
        'excerpt': excerpt,
        'body': body,
        'tag': data['tag'],
        'author': user['name'] ?? user['email'] ?? 'Anonymous',
        'published_at': DateTime.now().toIso8601String(),
      });

      final created = post?.toMap();
      if (created == null) {
        return res.status(500).json({'error': 'Failed to create post'});
      }

      return res.redirect('/blog/${created['slug']}');
    });

    // Blog detail
    app.get('/blog/:slug', (req, res) async {
      final slug = req.param('slug');
      if (slug == null) {
        return res.status(404).send('Not found');
      }

      final post = await BlogPost().firstWhere('slug', slug);
      if (post == null) {
        return res.status(404).send('Post not found');
      }

      final viewModel = _toBlogViewModel(post.toMap());
      final comments = await _fetchCommentsForPost(post.toMap());
      return res.view('blog.show', data: {
        ...await _baseData(req),
        'post': viewModel,
        'comments': comments,
        'commentsCount': comments.length,
        'title': viewModel['title'],
        'description': viewModel['excerpt'],
        'url': viewModel['href'],
      });
    });

    // Blog comments
    app.post('/blog/:slug/comments', (req, res) async {
      final slug = req.param('slug');
      if (slug == null) {
        return res.status(404).send('Not found');
      }

      final user = await req.user;
      if (user == null) {
        return res.status(401).json({'error': 'Unauthorized'});
      }

      final post = await BlogPost().firstWhere('slug', slug);
      if (post == null) {
        return res.status(404).send('Post not found');
      }

      try {
        final data = await req.validate({
          'body': 'required|string|min:3',
        });

        await Comment().create({
          'body': data['body'],
          'post_id': post.getAttribute('id')?.toString(),
          'user_id': user['id'],
          'author': user['name'] ?? user['email'] ?? 'Anonymous',
          'published_at': DateTime.now().toIso8601String(),
        });

        return res.redirect('/blog/$slug#comments');
      } on ValidationException catch (e) {
        return res.status(422).json({'status': false, 'errors': e.errors});
      } catch (e) {
        return res.status(500).json({'status': false, 'message': e.toString()});
      }
    });

    // Questions list
    app.get('/questions', (req, res) async {
      final questions = await _fetchQuestions();
      return res.view('questions.index', data: {
        ...await _baseData(req),
        'questions': questions,
        'title': 'Flint Questions',
        'description': 'Ask and answer Flint questions with clean permalinks.',
        'url': '/questions',
      });
    });

    // Ask question
    app.get('/questions/ask', (req, res) async {
      final user = await req.user;
      return res.view('questions.ask', data: {
        ...await _baseData(req),
        'isAuthenticated': user != null,
        'user': user,
        'title': 'Ask a Question',
        'description': 'Post a new Flint question and get community help.',
        'url': '/questions/ask',
      });
    });

    // Submit question
    app.post('/questions/ask', (req, res) async {
      final user = await req.user;
      if (user == null) {
        return res.status(401).json({'error': 'Unauthorized'});
      }

      final role = user['role'];
      if (role != 'dev' && role != 'admin' && role != 'contributor') {
        return res.status(403).json({'error': 'Forbidden'});
      }

      final data = await req.validate({
        'title': 'required|string|min:6',
        'tag': 'required|string',
        'body': 'required|string|min:20',
      });

      final slug = _slugify(data['title'].toString());
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
        return res.status(500).json({'error': 'Failed to create question'});
      }

      return res.redirect('/questions/${created['slug']}');
    });

    // Question detail
    app.get('/questions/:slug', (req, res) async {
      final user = await req.user;
      final slug = req.param('slug');
      if (slug == null) {
        return res.status(404).send('Not found');
      }

      final question = await Question().firstWhere('slug', slug);
      if (question == null) {
        return res.status(404).send('Question not found');
      }

      final viewModel = _toQuestionViewModel(question.toMap());
      final currentUserId = user?['id']?.toString();
      final currentUserName =
          user?['name']?.toString() ?? user?['email']?.toString();
      final answers = await _fetchAnswersForQuestion(
        question.toMap(),
        currentUserId,
        currentUserName,
      );

      print(answers);
      return res.view('questions.show', data: {
        ...await _baseData(req),
        'question': viewModel,
        'answers': answers,
        'answersCount': answers.length,
        'title': viewModel['title'],
        'description': viewModel['excerpt'],
        'url': viewModel['href'],
      });
    });

    // Submit answer
    app.post('/questions/:slug/answers', (req, res) async {
      final slug = req.param('slug');
      if (slug == null) {
        return res.status(404).send('Not found');
      }

      final user = await req.user;
      if (user == null) {
        return res.status(401).json({'error': 'Unauthorized'});
      }

      final role = user['role'];
      if (role != 'dev' && role != 'admin' && role != 'contributor') {
        return res.status(403).json({'error': 'Forbidden'});
      }

      final question = await Question().firstWhere('slug', slug);
      if (question == null) {
        return res.status(404).send('Question not found');
      }

      try {
        final data = await req.validate({
          'body': 'required|string|min:10',
        });

        await Answer().create({
          'body': data['body'],
          'question_id': question.getAttribute('id')?.toString(),
          'user_id': user['id'],
          'author': user['name'] ?? user['email'] ?? 'Anonymous',
          'published_at': DateTime.now().toIso8601String(),
        });

        return res.redirect('/questions/$slug#answers');
      } on ValidationException catch (e) {
        return res.status(422).json({'status': false, 'errors': e.errors});
      } catch (e) {
        return res.status(500).json({'status': false, 'message': e.toString()});
      }
    });

    // Delete answer (owner only)
    app.post('/questions/:slug/answers/:id/delete', (req, res) async {
      final slug = req.param('slug');
      final answerId = req.param('id');
      if (slug == null || answerId == null) {
        return res.status(404).send('Not found');
      }

      final user = await req.user;
      if (user == null) {
        return res
            .status(401)
            .json({'status': false, 'message': 'Unauthorized'});
      }

      final question = await Question().firstWhere('slug', slug);
      if (question == null) {
        return res.status(404).send('Question not found');
      }

      final answer = await Answer().find(answerId);
      if (answer == null) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Answer not found'});
      }

      final answerMap = answer.toMap();
      final answerQuestionId = answerMap['question_id']?.toString();
      final questionId = question.getAttribute('id')?.toString();
      if (answerQuestionId != questionId) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Answer not found'});
      }

      final ownerId = answerMap['user_id']?.toString();
      final userId = user['id']?.toString();
      if (ownerId == null || userId == null || ownerId != userId) {
        return res.status(403).json({'status': false, 'message': 'Forbidden'});
      }

      await answer.delete();
      return res.redirect('/questions/$slug#answers');
    });

    // Update answer (owner only)
    app.post('/questions/:slug/answers/:id/update', (req, res) async {
      final slug = req.param('slug');
      final answerId = req.param('id');
      if (slug == null || answerId == null) {
        return res.status(404).send('Not found');
      }

      final user = await req.user;
      if (user == null) {
        return res
            .status(401)
            .json({'status': false, 'message': 'Unauthorized'});
      }

      final question = await Question().firstWhere('slug', slug);
      if (question == null) {
        return res.status(404).send('Question not found');
      }

      final answer = await Answer().find(answerId);
      if (answer == null) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Answer not found'});
      }

      final answerMap = answer.toMap();
      final answerQuestionId = answerMap['question_id']?.toString();
      final questionId = question.getAttribute('id')?.toString();
      if (answerQuestionId != questionId) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Answer not found'});
      }

      final ownerId = answerMap['user_id']?.toString();
      final userId = user['id']?.toString();
      if (ownerId == null || userId == null || ownerId != userId) {
        return res.status(403).json({'status': false, 'message': 'Forbidden'});
      }

      try {
        final data = await req.validate({
          'body': 'required|string|min:10',
        });

        await answer.update(id: answerId, data: {
          'body': data['body'],
        });

        return res.json({'status': true});
      } on ValidationException catch (e) {
        return res.status(422).json({'status': false, 'errors': e.errors});
      } catch (e) {
        return res.status(500).json({'status': false, 'message': e.toString()});
      }
    });
  }

  Future<List<Map<String, dynamic>>> _fetchBlogPosts() async {
    final qb = QueryBuilder(table: 'blog_posts')
      ..orderBy('published_at', 'DESC');
    final rows = await qb.get();
    return rows.map(_toBlogViewModel).toList();
  }

  Future<List<Map<String, dynamic>>> _fetchQuestions() async {
    final qb = QueryBuilder(table: 'questions')
      ..orderBy('published_at', 'DESC');
    final rows = await qb.get();
    return rows.map(_toQuestionViewModel).toList();
  }

  Future<List<Map<String, dynamic>>> _fetchCommentsForPost(
      Map<String, dynamic> post) async {
    final postId = post['id']?.toString();
    if (postId == null) return [];
    final qb = QueryBuilder(table: 'comments')
      ..where('post_id', "=", postId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map(_toCommentViewModel).toList();
  }

  Future<List<Map<String, dynamic>>> _fetchAnswersForQuestion(
      Map<String, dynamic> question,
      String? currentUserId,
      String? currentUserName) async {
    final questionId = question['id']?.toString();
    if (questionId == null) return [];
    final qb = QueryBuilder(table: 'answers')
      ..where('question_id', "=", questionId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map((row) {
      final viewModel = _toAnswerViewModel(row);
      final ownerId = row['user_id']?.toString();
      final authorName = row['author']?.toString();
      final canEditByName =
          currentUserName != null && authorName == currentUserName;
      final data = {
        ...viewModel,
        'can_edit': (currentUserId != null && ownerId == currentUserId) ||
            canEditByName,
      };

      return data;
    }).toList();
  }

  Map<String, dynamic> _toBlogViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    return {
      ...row,
      'date': _formatDate(publishedAt),
      'href': '/blog/${row['slug']}',
    };
  }

  Map<String, dynamic> _toQuestionViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    final safeBody = _escapeHtml(body);
    final excerpt =
        safeBody.length > 140 ? '${safeBody.substring(0, 140)}...' : safeBody;
    return {
      ...row,
      'date': _formatDate(publishedAt),
      'href': '/questions/${row['slug']}',
      'body': safeBody,
      'excerpt': excerpt,
    };
  }

  Map<String, dynamic> _toAnswerViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    return {
      ...row,
      'body': _escapeHtml(body),
      'user_id': row['user_id']?.toString(),
      'date': _formatDate(publishedAt),
    };
  }

  Map<String, dynamic> _toCommentViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    return {
      ...row,
      'date': _formatDate(publishedAt),
    };
  }

  String _slugify(String value) {
    final normalized = value
        .toLowerCase()
        .replaceAll(RegExp(r'[^a-z0-9\\s-]'), '')
        .replaceAll(RegExp(r'\\s+'), '-')
        .replaceAll(RegExp(r'-+'), '-')
        .trim();
    if (normalized.isEmpty) {
      return 'question-${DateTime.now().millisecondsSinceEpoch}';
    }
    return normalized;
  }

  String _formatDate(String iso) {
    if (iso.isEmpty) return '';
    final date = DateTime.tryParse(iso);
    if (date == null) return iso;
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    final month = months[date.month - 1];
    return '$month ${date.day}, ${date.year}';
  }

  String _escapeHtml(String input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
  }

  Future<Map<String, dynamic>> _baseData(Request req) async {
    final user = await req.user;
    final role = user?['role'];
    final canWriteBlog =
        role == 'admin' || role == 'contributor' || role == 'collaborator';
    final canAnswer = role == 'admin' || role == 'contributor' || role == 'dev';
    final canComment = user != null;
    return {
      'user': user,
      'isAuthenticated': user != null,
      'canWriteBlog': canWriteBlog,
      'canAnswer': canAnswer,
      'canComment': canComment,
      'currentUserId': user?['id']?.toString(),
    };
  }
}
