import 'package:flint_dart/db.dart';
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'dart:io';

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
        'features': _homeFeatures(),
        'gettingStartedSteps': _homeGettingStartedSteps(),
        'codeExamples': _homeCodeExamples(),
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

    // Changelog
    app.get('/changelog', (req, res) async {
      final changelogMarkdown = await _loadFrameworkChangelog();
      final changelogEntries = _parseChangelogEntries(changelogMarkdown);
      return res.view('changelog', data: {
        ...await _baseData(req),
        'title': 'Changelog - Flint Dart',
        'description':
            'Track framework releases, fixes, and breaking changes in Flint Dart.',
        'url': '/changelog',
        'changelogEntries': changelogEntries,
      });
    });

    // What's New
    app.get('/whats-new', (req, res) async {
      return res.view('whats-new', data: {
        ...await _baseData(req),
        'title': "What's New - Flint Dart",
        'description':
            'See the latest improvements and newly added capabilities in Flint Dart.',
        'url': '/whats-new',
      });
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

    // Write/create blog post
    Future<Response> showBlogCreate(Request req, Response res) async {
      final user = await req.user;
      final role = user?['role'];
      if (user == null || !_canWriteBlogRole(role?.toString())) {
        return res.status(403).send('Forbidden');
      }

      return res.view('blog.write', data: {
        ...await _baseData(req),
        'title': 'Write a Blog Post',
        'description': 'Draft a new Flint blog post.',
        'url': '/blog/create',
      });
    }

    Future<Response> submitBlogCreate(Request req, Response res) async {
      final user = await req.user;
      if (user == null) {
        return res.status(401).json({'error': 'Unauthorized'});
      }

      final role = user['role']?.toString();
      if (!_canWriteBlogRole(role)) {
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
    }

    app.get('/blog/create', showBlogCreate);
    app.get('/blog/write', (req, res) => res.redirect('/blog/create', status: 301));

    app.post('/blog/create', submitBlogCreate);
    app.post('/blog/write', submitBlogCreate);

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
      final user = await req.user;
      final comments = await _fetchCommentsForPost(
        post.toMap(),
        user?['id']?.toString(),
        user?['name']?.toString(),
        user?['email']?.toString(),
      );
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

    // Update blog comment (owner only)
    app.post('/blog/:slug/comments/:id/update', (req, res) async {
      final slug = req.param('slug');
      final commentId = req.param('id');
      if (slug == null || commentId == null) {
        return res.status(404).send('Not found');
      }

      final user = await req.user;
      if (user == null) {
        return res
            .status(401)
            .json({'status': false, 'message': 'Unauthorized'});
      }

      final post = await BlogPost().firstWhere('slug', slug);
      if (post == null) {
        return res.status(404).send('Post not found');
      }

      final comment = await Comment().find(commentId);
      if (comment == null) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Comment not found'});
      }

      final commentMap = comment.toMap();
      final commentPostId = commentMap['post_id']?.toString();
      final postId = post.getAttribute('id')?.toString();
      if (commentPostId != postId) {
        return res
            .status(404)
            .json({'status': false, 'message': 'Comment not found'});
      }

      final canEdit = _canEditComment(
        commentMap,
        user['id']?.toString(),
        user['name']?.toString(),
        user['email']?.toString(),
      );
      if (!canEdit) {
        return res.status(403).json({'status': false, 'message': 'Forbidden'});
      }

      try {
        final data = await req.validate({
          'body': 'required|string|min:3',
        });

        await comment.update(data: {
          'body': data['body'],
        });

        final refreshed = await Comment().find(commentId);
        final updatedMap = refreshed?.toMap();
        final persistedBody = updatedMap?['body']?.toString().trim();
        final requestedBody = data['body']?.toString().trim();
        if (updatedMap == null ||
            persistedBody == null ||
            requestedBody == null ||
            persistedBody != requestedBody) {
          return res.status(500).json({
            'status': false,
            'message': 'Failed to update comment.',
          });
        }

        return res.json({
          'status': true,
          'comment': _toCommentViewModel(updatedMap),
        });
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
      print(user);
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
      final currentUserName = user?['name']?.toString();
      final currentUserEmail = user?['email']?.toString();
      final answers = await _fetchAnswersForQuestion(
        question.toMap(),
        currentUserId,
        currentUserName,
        currentUserEmail,
      );

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

      final canEdit = _canEditAnswer(
        answerMap,
        user['id']?.toString(),
        user['name']?.toString(),
        user['email']?.toString(),
      );
      if (!canEdit) {
        return res.status(403).json({'status': false, 'message': 'Forbidden'});
      }

      await answer.delete();
      return res.json({'status': true});
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

      final canEdit = _canEditAnswer(
        answerMap,
        user['id']?.toString(),
        user['name']?.toString(),
        user['email']?.toString(),
      );
      if (!canEdit) {
        return res.status(403).json({'status': false, 'message': 'Forbidden'});
      }

      try {
        final data = await req.validate({
          'body': 'required|string|min:10',
        });

        await answer.update(data: {
          'body': data['body'],
        });

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
          'answer': _toAnswerViewModel(updatedMap),
        });
      } on ValidationException catch (e) {
        return res.status(422).json({'status': false, 'errors': e.errors});
      } catch (e) {
        return res.status(500).json({'status': false, 'message': e.toString()});
      }
    });
  }

  Future<String> _loadFrameworkChangelog() async {
    final candidates = <String>[
      '../flint_dart/CHANGELOG.md',
      'flint_dart/CHANGELOG.md',
      'CHANGELOG.md',
    ];

    for (final filePath in candidates) {
      final file = File(filePath);
      if (await file.exists()) {
        return await file.readAsString();
      }
    }

    return '# Changelog not found\n\nUnable to locate `flint_dart/CHANGELOG.md`.';
  }

  List<Map<String, String>> _parseChangelogEntries(String markdown) {
    final lines = markdown.replaceAll('\r\n', '\n').split('\n');
    final entries = <Map<String, String>>[];
    final buffer = <String>[];
    String? currentVersion;

    void flush() {
      final version = currentVersion;
      if (version == null) return;
      final content = buffer.join('\n').trim();
      entries.add({
        'version': version,
        'content': content.isEmpty ? 'No details provided.' : content,
      });
      buffer.clear();
    }

    for (final rawLine in lines) {
      final line = rawLine.trimRight();
      final version = _extractVersion(line);
      if (version != null) {
        flush();
        currentVersion = version;

        final headerDetails = _extractHeaderDetails(line, version);
        if (headerDetails.isNotEmpty) {
          buffer.add(headerDetails);
        }
        continue;
      }

      if (currentVersion == null) continue;
      final cleaned = _cleanChangelogLine(line);
      if (cleaned.isEmpty && buffer.isNotEmpty && buffer.last.isEmpty) continue;
      buffer.add(cleaned);
    }

    flush();
    return entries;
  }

  String? _extractVersion(String line) {
    final bracketMatch =
        RegExp(r'\[(\d+\.\d+\.\d+(?:\+\d+)?)\]').firstMatch(line);
    if (bracketMatch != null) return bracketMatch.group(1);

    final versionTextMatch =
        RegExp(r'Version\s+(\d+\.\d+\.\d+(?:\+\d+)?)', caseSensitive: false)
            .firstMatch(line);
    if (versionTextMatch != null) return versionTextMatch.group(1);

    return null;
  }

  String _extractHeaderDetails(String line, String version) {
    String cleaned = line;
    final escapedVersion = RegExp.escape(version);
    final bracketMatch = RegExp('\\[$escapedVersion\\]').firstMatch(cleaned);
    if (bracketMatch != null) {
      cleaned = cleaned.substring(bracketMatch.end);
    } else {
      cleaned = cleaned.replaceAll(
        RegExp('Version\\s+$escapedVersion', caseSensitive: false),
        '',
      );
    }
    cleaned = cleaned.replaceAll(RegExp(r'^[\s#\-\–—:]+'), '').trim();
    return cleaned;
  }

  String _cleanChangelogLine(String line) {
    return line
        .replaceAll(RegExp(r'^\s*---+\s*'), '')
        .replaceAll(RegExp(r'^```+\s*$'), '')
        .trimRight();
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
      Map<String, dynamic> post,
      String? currentUserId,
      String? currentUserName,
      String? currentUserEmail) async {
    final postId = post['id']?.toString();
    if (postId == null) return [];
    final qb = QueryBuilder(table: 'comments')
      ..where('post_id', "=", postId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map((row) {
      return {
        ..._toCommentViewModel(row),
        'can_edit': _canEditComment(
          row,
          currentUserId,
          currentUserName,
          currentUserEmail,
        ),
      };
    }).toList();
  }

  Future<List<Map<String, dynamic>>> _fetchAnswersForQuestion(
      Map<String, dynamic> question,
      String? currentUserId,
      String? currentUserName,
      String? currentUserEmail) async {
    final questionId = question['id']?.toString();
    if (questionId == null) return [];
    final qb = QueryBuilder(table: 'answers')
      ..where('question_id', "=", questionId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map((row) {
      final viewModel = _toAnswerViewModel(row);
      final data = {
        ...viewModel,
        'can_edit': _canEditAnswer(
          row,
          currentUserId,
          currentUserName,
          currentUserEmail,
        ),
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
    final body = row['body']?.toString() ?? '';
    return {
      ...row,
      'body': _escapeHtml(body),
      'user_id': row['user_id']?.toString(),
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

  bool _canEditAnswer(
    Map<String, dynamic> answer,
    String? userId,
    String? userName,
    String? userEmail,
  ) {
    final ownerId =
        answer['user_id']?.toString() ?? answer['userId']?.toString();
    if (ownerId != null && userId != null) {
      final normalizedOwner = ownerId.trim().toLowerCase();
      final normalizedUser = userId.trim().toLowerCase();
      if (normalizedOwner == normalizedUser) {
        return true;
      }
    }
    final author = answer['author']?.toString();
    if (author == null) return false;
    final normalizedAuthor = author.trim().toLowerCase();
    final normalizedName = userName?.trim().toLowerCase();
    final normalizedEmail = userEmail?.trim().toLowerCase();
    if (normalizedName != null &&
        (normalizedAuthor == normalizedName ||
            normalizedAuthor.contains(normalizedName))) {
      return true;
    }
    if (normalizedEmail != null &&
        (normalizedAuthor == normalizedEmail ||
            normalizedAuthor.contains(normalizedEmail))) {
      return true;
    }
    return false;
  }

  bool _canEditComment(
    Map<String, dynamic> comment,
    String? userId,
    String? userName,
    String? userEmail,
  ) {
    return _canEditAnswer(comment, userId, userName, userEmail);
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
    final canWriteBlog = _canWriteBlogRole(role?.toString());
    final canAnswer = role == 'admin' || role == 'contributor' || role == 'dev';
    final canComment = user != null;
    final currentUserLabel =
        user?['name']?.toString() ?? user?['email']?.toString() ?? 'Signed in';
    return {
      'user': user,
      'isAuthenticated': user != null,
      'canWriteBlog': canWriteBlog,
      'canAnswer': canAnswer,
      'canComment': canComment,
      'currentUserId': user?['id']?.toString(),
      'currentUserLabel': currentUserLabel,
    };
  }

  bool _canWriteBlogRole(String? role) {
    if (role == null) return false;
    return role == 'admin' ||
        role == 'contributor' ||
        role == 'collaborator' ||
        role == 'dev' ||
        role == 'developer';
  }

  List<Map<String, String>> _homeFeatures() {
    return [
      {
        'icon': '🧱',
        'title': 'Simple Routing',
        'description': 'Intuitive routing APIs for clean, expressive endpoints',
      },
      {
        'icon': '🛡️',
        'title': 'Middleware Stack',
        'description': 'Protect and transform requests with composable middleware',
      },
      {
        'icon': '🔐',
        'title': 'JWT Authentication',
        'description': 'Built-in JWT auth utilities and guard support',
      },
      {
        'icon': '🔒',
        'title': 'Password Hashing',
        'description': 'Secure hashing helpers for user credentials',
      },
      {
        'icon': '♻️',
        'title': 'Hot Reload',
        'description': 'Instant feedback while developing',
      },
      {
        'icon': '🧪',
        'title': 'Modular Structure',
        'description': 'Organize large apps with a scalable layout',
      },
      {
        'icon': '🗄️',
        'title': 'ORM for MySQL/Postgres',
        'description': 'Active Record ORM with migrations and models',
      },
      {
        'icon': '🛠️',
        'title': 'CLI Tooling',
        'description': 'Scaffold migrations, models, and more',
      },
      {
        'icon': '📚',
        'title': 'Swagger Docs',
        'description': 'Generate API docs with Swagger/OpenAPI',
      },
    ];
  }

  List<Map<String, String>> _homeGettingStartedSteps() {
    return [
      {'title': 'Install the CLI', 'command': 'dart pub global activate flint_dart'},
      {'title': 'Create Your App', 'command': 'flint create new_app'},
      {'title': 'Run the Server', 'command': 'flint run'},
      {
        'title': 'Open Your App',
        'command': 'Visit your app URL (local or deployed) in your browser',
      },
    ];
  }

  List<Map<String, String>> _homeCodeExamples() {
    return [
      {
        'title': 'Quick Start',
        'code': '''import 'dart:io';
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint();

  app.get('/', (Context ctx) async {
    return ctx.res?.send('Welcome to Flint Dart!');
  });

  final port = int.tryParse(Platform.environment['PORT'] ?? '') ?? 3000;
  app.listen(port: port, hotReload: false);
}''',
      },
      {
        'title': 'Middleware',
        'code': '''class AuthMiddleware extends Middleware {
  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final token = ctx.req.bearerToken;
      if (token == null || token != "expected_token") {
        return ctx.res?.status(401).send("Unauthorized");
      }
      return await next(ctx);
    };
  }
}

app.put('/:id', AuthMiddleware().handle(controller.update));''',
      },
      {
        'title': 'JWT Auth',
        'code': '''final token = JwtUtil.generateToken({'userId': 123});
final payload = JwtUtil.verifyToken(token);''',
      },
      {
        'title': 'Model',
        'code': '''class User extends Model<User> {
  User() : super(() => User());

  @override
  Table get table => Table(
    name: 'users',
    columns: [
      Column(name: 'name', type: ColumnType.string, length: 255),
      Column(name: 'email', type: ColumnType.string, length: 255),
    ],
  );
}

final users = await User().where('name', 'Ada').get();
final user = await User().create({
  'name': 'Ada',
  'email': 'ada@example.com',
});''',
      },
      {
        'title': 'Controller',
        'code': '''class UserController {
  Future<Response> index(Request req, Response res) async {
    final users = await User().get();
    return res.json({'users': users.map((u) => u.toMap()).toList()});
  }
}

final controller = UserController();
app.get('/users', controller.index);''',
      },
      {
        'title': 'WebSocket',
        'code': '''app.websocket('/chat', (Context ctx) {
  ctx.socket?.on('ping', (_) {
    ctx.socket?.emit('pong', {'ok': true});
  });
});''',
      },
      {
        'title': 'Flash + Back Redirect',
        'code': '''app.post('/settings', (Context ctx) async {
  final data = await ctx.req.validate({'name': 'required|string'});
  // ... persist settings
  return ctx.res
      ?.withSuccess('Settings updated successfully.')
      .back(fallback: '/settings');
});''',
      },
    ];
  }
}
