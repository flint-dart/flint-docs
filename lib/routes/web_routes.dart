import 'package:flint_dart/db.dart';
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/helper.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'dart:convert';
import 'dart:io';

/// Routes that render Flint templates from lib/views
class WebRoutes extends RouteGroup {
  static const List<String> _guideTopics = [
    'introduction',
    'installation',
    'create-run',
    'cli',
    'routing',
    'route-params',
    'query-params',
    'request-response',
    'request-body',
    'file-uploads',
    'middleware',
    'validation',
    'authentication',
    'security',
    'sessions',
    'cache',
    'storage',
    'logging',
    'errors',
    'helpers',
    'architecture',
    'mail',
    'isolate',
    'swagger-docs',
    'database',
    'websockets',
    'route-groups',
    'views',
    'models',
    'orm',
    'orm-query',
    'orm-relations',
    'table-sync',
    'deployment',
  ];

  static const List<String> _apiTopics = [
    'flint-class',
    'request',
    'response',
    'router',
    'middleware',
    'model',
    'query-builder',
    'migration',
    'schema',
    'auth',
    'guards',
    'providers',
    'components',
    'layout',
    'forms',
    'cache',
    'session',
    'storage',
    'mail',
    'validation',
  ];

  @override
  String get prefix => ''; // root

  @override
  List<Middleware> get middlewares => [];

  @override
  void register(Flint app) {
    app.get('/favicon.ico', (req, res) async {
      return res.redirect(
        '/assets/images/logo-icon.png?v=20260212',
        status: 302,
      );
    });

    app.get('/robots.txt', (req, res) async {
      return res.send(
        _buildRobotsTxt(),
        contentType: 'text/plain; charset=utf-8',
      );
    });

    app.get('/sitemap.xml', (req, res) async {
      final xml = await _buildSitemapXml();
      return res.send(
        xml,
        contentType: 'application/xml; charset=utf-8',
      );
    });

    app.get('/llms.txt', (req, res) async {
      final txt = await _buildLlmsTxt();
      return res.send(
        txt,
        contentType: 'text/plain; charset=utf-8',
      );
    });

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
        '/guides',
        (req, res) async =>
            _renderGettingStartedTopic(req, res, 'introduction'));
    app.get('/guides/:topic', (req, res) async {
      final topic = req.param('topic') ?? 'introduction';
      return _renderGettingStartedTopic(req, res, topic);
    });

    // Flint Client guide
    app.get('/client', (req, res) async {
      return res.view('client.index', data: {
        ...await _baseData(req),
        'title': 'FlintClient Guide - Flint Dart',
        'description':
            'Official FlintClient guide: setup, requests, retries, caching, cancellation, parse modes, and observability hooks.',
        'keywords':
            'FlintClient, Dart HTTP client, retries, caching, cancellation, request hooks, parse mode',
        'url': '/client',
      });
    });

    // Dart lessons/docs
    app.get('/dart', (req, res) async {
      return res.view('dart.index', data: {
        ...await _baseData(req),
        'title': 'Dart Lessons - Learn Dart Clearly',
        'description':
            'Learn Dart with simple, practical lessons: syntax, functions, classes, null safety, and async.',
        'keywords':
            'Dart tutorial, Dart lessons, learn Dart, Dart basics, null safety, async await',
        'url': '/dart',
      });
    });

    // API
    app.get(
        '/api', (req, res) async => _renderApiTopic(req, res, 'flint-class'));
    app.get('/api/:topic', (req, res) async {
      final topic = req.param('topic') ?? 'flint-class';
      return _renderApiTopic(req, res, topic);
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
      final blogCanonicalUrl = _absoluteUrl('/blog');
      return res.view('blog.index', data: {
        ...await _baseData(req),
        'posts': posts,
        'title': 'Flint Blog',
        'description':
            'Updates, guides, and best practices from the Flint team.',
        'url': '/blog',
        'canonicalUrl': blogCanonicalUrl,
        'ogImageUrl': _defaultOgImageUrl(),
        'twitterCard': 'summary_large_image',
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

      final slug = await _uniqueBlogSlug(data['title'].toString());
      final body = data['body'].toString();
      final excerpt = _excerptFromMarkdown(body, maxLength: 160);

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
    app.get(
        '/blog/write', (req, res) => res.redirect('/blog/create', status: 301));

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
      final postHref = viewModel['href']?.toString() ?? '/blog/$slug';
      final canonicalUrl = _absoluteUrl(postHref);
      final ogImageUrl = _defaultOgImageUrl();
      final postBodyMarkdown = viewModel['body']?.toString() ?? '';
      final postBodyHtml = _renderMarkdownToHtml(postBodyMarkdown);
      final publishedAt = viewModel['published_at']?.toString() ?? '';
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
        'postBodyHtml': postBodyHtml,
        'title': viewModel['title'],
        'description': viewModel['excerpt'],
        'url': postHref,
        'canonicalUrl': canonicalUrl,
        'ogType': 'article',
        'ogImageUrl': ogImageUrl,
        'twitterCard': 'summary_large_image',
        'articlePublishedTime': publishedAt,
        'structuredDataJson': _jsonForHtmlScript({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': viewModel['title'],
          'description': viewModel['excerpt'],
          'datePublished': publishedAt,
          'dateModified': publishedAt,
          'author': {
            '@type': 'Person',
            'name': viewModel['author']?.toString() ?? 'Flint Docs',
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          if (ogImageUrl.isNotEmpty) 'image': [ogImageUrl],
        }),
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

  Future<Response> _renderGettingStartedTopic(
    Request req,
    Response res,
    String topic,
  ) async {
    if (!_guideTopics.contains(topic)) {
      return res.status(404).send('Topic not found');
    }
    final topicIndex = _guideTopics.indexOf(topic);
    final previousTopicSlug =
        topicIndex > 0 ? _guideTopics[topicIndex - 1] : null;
    final nextTopicSlug =
        topicIndex >= 0 && topicIndex < _guideTopics.length - 1
            ? _guideTopics[topicIndex + 1]
            : null;
    final previousGuideTitle = previousTopicSlug != null
        ? _topicHeading(previousTopicSlug).trim()
        : null;
    final nextGuideTitle =
        nextTopicSlug != null ? _topicHeading(nextTopicSlug).trim() : null;
    final hasPreviousGuide =
        previousTopicSlug != null && previousGuideTitle != null && previousGuideTitle.isNotEmpty;
    final hasNextGuide =
        nextTopicSlug != null && nextGuideTitle != null && nextGuideTitle.isNotEmpty;
    final heading = _topicHeading(topic);
    return res.view('guides.getting-started', data: {
      ...await _baseData(req),
      'initialSection': topic,
      'title': '$heading Guide - Flint Dart',
      'description':
          'Flint Dart getting started guide for $heading. Learn implementation details, examples, and best practices.',
      'keywords': 'Flint Dart, $heading, backend guide, Dart API, SEO docs',
      'url': '/guides/$topic',
      'previousGuideTitle': hasPreviousGuide ? previousGuideTitle : null,
      'previousGuideUrl':
          hasPreviousGuide ? '/guides/$previousTopicSlug' : null,
      'nextGuideTitle': hasNextGuide ? nextGuideTitle : null,
      'nextGuideUrl': hasNextGuide ? '/guides/$nextTopicSlug' : null,
    });
  }

  Future<Response> _renderApiTopic(
    Request req,
    Response res,
    String topic,
  ) async {
    if (!_apiTopics.contains(topic)) {
      return res.status(404).send('Topic not found');
    }
    final heading = _topicHeading(topic);
    return res.view('api.index', data: {
      ...await _baseData(req),
      'initialSection': topic,
      'title': '$heading API - Flint Dart',
      'description':
          'Flint Dart API reference for $heading with method details, examples, and usage notes.',
      'keywords': 'Flint Dart API, $heading, Dart backend, reference, SEO docs',
      'url': '/api/$topic',
    });
  }

  String _topicHeading(String slug) {
    return slug
        .split('-')
        .where((part) => part.isNotEmpty)
        .map((part) => '${part[0].toUpperCase()}${part.substring(1)}')
        .join(' ');
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
    final rawExcerpt = row['excerpt']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    final cleanedExcerpt = _excerptFromMarkdown(
      rawExcerpt.isNotEmpty ? rawExcerpt : body,
      maxLength: 160,
    );
    return {
      ...row,
      'date': _formatDate(publishedAt),
      'href': '/blog/${row['slug']}',
      'excerpt': cleanedExcerpt,
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

  Future<String> _uniqueBlogSlug(String title) async {
    final base = Str.slugify(title).trim();
    final root = base.isNotEmpty
        ? base
        : 'blog-${DateTime.now().millisecondsSinceEpoch}';

    var candidate = root;
    var suffix = 2;
    while (await BlogPost().firstWhere('slug', candidate) != null) {
      candidate = '$root-$suffix';
      suffix++;
    }
    return candidate;
  }

  String _excerptFromMarkdown(String source, {int maxLength = 160}) {
    final plain = _stripMarkdown(source).replaceAll(RegExp(r'\s+'), ' ').trim();
    if (plain.isEmpty) return '';
    if (plain.length <= maxLength) return plain;
    return '${plain.substring(0, maxLength).trimRight()}...';
  }

  String _stripMarkdown(String source) {
    if (source.isEmpty) return '';
    var text = source.replaceAll('\r\n', '\n');
    text = text.replaceAll(RegExp(r'```[\s\S]*?```'), ' ');
    text = text.replaceAll(RegExp(r'`([^`]*)`'), r'$1');
    text = text.replaceAll(RegExp(r'!\[([^\]]*)\]\([^)]+\)'), r'$1');
    text = text.replaceAll(RegExp(r'\[([^\]]+)\]\([^)]+\)'), r'$1');
    text = text.replaceAll(RegExp(r'^\s{0,3}#{1,6}\s*', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*>\s?', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*[-*+]\s+', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*\d+\.\s+', multiLine: true), '');
    text = text.replaceAll(RegExp(r'(\*\*|__|\*|_)'), '');
    text = text.replaceAll(RegExp(r'~~'), '');
    return text;
  }

  String _absoluteUrl(String pathOrUrl) {
    final trimmed = pathOrUrl.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    final base = FlintEnv.get('APP_URL', 'http://localhost:3030').trim();
    final normalizedBase = base.endsWith('/')
        ? base.substring(0, base.length - 1)
        : base;
    final normalizedPath = trimmed.startsWith('/') ? trimmed : '/$trimmed';
    return '$normalizedBase$normalizedPath';
  }

  String _defaultOgImageUrl() {
    return _absoluteUrl('/assets/images/logo-icon.png?v=20260212');
  }

  String _jsonForHtmlScript(Map<String, dynamic> value) {
    return jsonEncode(value).replaceAll('</script>', r'<\/script>');
  }

  String _renderMarkdownToHtml(String source) {
    if (source.trim().isEmpty) return '';

    final lines = source.replaceAll('\r\n', '\n').split('\n');
    final out = StringBuffer();
    final paragraph = <String>[];
    final listItems = <String>[];
    String? listType; // 'ul' | 'ol'
    var inCodeBlock = false;
    var codeLang = '';
    final codeLines = <String>[];

    void flushParagraph() {
      if (paragraph.isEmpty) return;
      final text = paragraph.join(' ').trim();
      if (text.isNotEmpty) {
        out.writeln('<p>${_renderInlineMarkdown(text)}</p>');
      }
      paragraph.clear();
    }

    void flushList() {
      if (listItems.isEmpty || listType == null) return;
      out.writeln('<$listType>');
      for (final item in listItems) {
        out.writeln('<li>${_renderInlineMarkdown(item)}</li>');
      }
      out.writeln('</$listType>');
      listItems.clear();
      listType = null;
    }

    void flushCodeBlock() {
      if (!inCodeBlock) return;
      final langClass = codeLang.isEmpty
          ? ''
          : ' class="language-${_escapeHtmlAttribute(codeLang)}"';
      final code = _escapeHtml(codeLines.join('\n'));
      out.writeln('<pre><code$langClass>$code</code></pre>');
      inCodeBlock = false;
      codeLang = '';
      codeLines.clear();
    }

    for (final rawLine in lines) {
      final line = rawLine.replaceAll('\t', '  ');
      final trimmed = line.trimRight();

      if (trimmed.trimLeft().startsWith('```')) {
        flushParagraph();
        flushList();
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          inCodeBlock = true;
          codeLang = trimmed.trim().substring(3).trim();
          codeLines.clear();
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.add(rawLine);
        continue;
      }

      final pure = trimmed.trim();
      if (pure.isEmpty) {
        flushParagraph();
        flushList();
        continue;
      }

      final heading = RegExp(r'^(#{1,6})\s+(.+)$').firstMatch(pure);
      if (heading != null) {
        flushParagraph();
        flushList();
        final level = heading.group(1)!.length;
        final text = heading.group(2)!.trim();
        out.writeln('<h$level>${_renderInlineMarkdown(text)}</h$level>');
        continue;
      }

      final ulMatch = RegExp(r'^[-*+]\s+(.+)$').firstMatch(pure);
      final olMatch = RegExp(r'^(\d+)\.\s+(.+)$').firstMatch(pure);
      if (ulMatch != null || olMatch != null) {
        flushParagraph();
        final nextType = ulMatch != null ? 'ul' : 'ol';
        if (listType != null && listType != nextType) {
          flushList();
        }
        listType = nextType;
        listItems.add((ulMatch?.group(1) ?? olMatch!.group(2)!).trim());
        continue;
      }

      if (listType != null) {
        // Continuation line for previous list item.
        listItems[listItems.length - 1] =
            '${listItems.last} ${pure.trimLeft()}'.trim();
        continue;
      }

      final blockquote = RegExp(r'^>\s?(.*)$').firstMatch(pure);
      if (blockquote != null) {
        flushParagraph();
        flushList();
        out.writeln(
            '<blockquote><p>${_renderInlineMarkdown(blockquote.group(1)!.trim())}</p></blockquote>');
        continue;
      }

      paragraph.add(pure);
    }

    flushParagraph();
    flushList();
    flushCodeBlock();

    return out.toString();
  }

  String _renderInlineMarkdown(String text) {
    var html = _escapeHtml(text);

    html = html.replaceAllMapped(RegExp(r'`([^`]+)`'), (m) {
      return '<code>${m.group(1)}</code>';
    });

    html = html.replaceAllMapped(
      RegExp(r'\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)'),
      (m) {
        final label = m.group(1)!;
        final href = _escapeHtmlAttribute(m.group(2)!);
        return '<a href="$href" rel="noopener noreferrer">$label</a>';
      },
    );

    html = html.replaceAllMapped(RegExp(r'\*\*([^*]+)\*\*'), (m) {
      return '<strong>${m.group(1)}</strong>';
    });
    html = html.replaceAllMapped(RegExp(r'__([^_]+)__'), (m) {
      return '<strong>${m.group(1)}</strong>';
    });
    html = html.replaceAllMapped(RegExp(r'\*([^*\n]+)\*'), (m) {
      return '<em>${m.group(1)}</em>';
    });
    html = html.replaceAllMapped(RegExp(r'_([^_\n]+)_'), (m) {
      return '<em>${m.group(1)}</em>';
    });

    return html;
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

  String _escapeHtmlAttribute(String input) {
    return _escapeHtml(input).replaceAll('`', '&#96;');
  }

  String _xmlEscape(String input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
  }

  String _buildRobotsTxt() {
    final sitemapUrl = _absoluteUrl('/sitemap.xml');
    return '''
User-agent: *
Allow: /

# AI crawlers / search bots
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: $sitemapUrl
'''.trim();
  }

  Future<String> _buildSitemapXml() async {
    final urls = await _collectSitemapEntries();
    final buffer = StringBuffer();
    buffer.writeln('<?xml version="1.0" encoding="UTF-8"?>');
    buffer.writeln(
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    for (final entry in urls) {
      final loc = _xmlEscape(entry['loc']!);
      final lastmod = entry['lastmod']?.trim() ?? '';
      final changefreq = entry['changefreq']?.trim() ?? '';
      final priority = entry['priority']?.trim() ?? '';
      buffer.writeln('  <url>');
      buffer.writeln('    <loc>$loc</loc>');
      if (lastmod.isNotEmpty) {
        buffer.writeln('    <lastmod>${_xmlEscape(lastmod)}</lastmod>');
      }
      if (changefreq.isNotEmpty) {
        buffer.writeln('    <changefreq>${_xmlEscape(changefreq)}</changefreq>');
      }
      if (priority.isNotEmpty) {
        buffer.writeln('    <priority>${_xmlEscape(priority)}</priority>');
      }
      buffer.writeln('  </url>');
    }
    buffer.writeln('</urlset>');
    return buffer.toString();
  }

  Future<List<Map<String, String>>> _collectSitemapEntries() async {
    final nowIso = DateTime.now().toUtc().toIso8601String();
    final entries = <Map<String, String>>[
      {
        'loc': _absoluteUrl('/'),
        'changefreq': 'daily',
        'priority': '1.0',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/guides'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/client'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/dart'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/api'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/blog'),
        'changefreq': 'daily',
        'priority': '0.8',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/questions'),
        'changefreq': 'daily',
        'priority': '0.8',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/examples'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/whats-new'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
      {
        'loc': _absoluteUrl('/changelog'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
    ];

    for (final topic in _guideTopics) {
      entries.add({
        'loc': _absoluteUrl('/guides/$topic'),
        'changefreq': 'monthly',
        'priority': '0.6',
        'lastmod': nowIso,
      });
    }

    for (final topic in _apiTopics) {
      entries.add({
        'loc': _absoluteUrl('/api/$topic'),
        'changefreq': 'monthly',
        'priority': '0.6',
        'lastmod': nowIso,
      });
    }

    try {
      final posts = await _fetchBlogPosts();
      for (final post in posts) {
        final href = post['href']?.toString();
        if (href == null || href.isEmpty) continue;
        entries.add({
          'loc': _absoluteUrl(href),
          'changefreq': 'monthly',
          'priority': '0.7',
          'lastmod': _sitemapDate(post['published_at']?.toString()) ?? nowIso,
        });
      }
    } catch (_) {}

    try {
      final questions = await _fetchQuestions();
      for (final question in questions) {
        final href = question['href']?.toString();
        if (href == null || href.isEmpty) continue;
        entries.add({
          'loc': _absoluteUrl(href),
          'changefreq': 'monthly',
          'priority': '0.6',
          'lastmod':
              _sitemapDate(question['published_at']?.toString()) ?? nowIso,
        });
      }
    } catch (_) {}

    final seen = <String>{};
    return entries.where((e) => seen.add(e['loc']!)).toList();
  }

  String? _sitemapDate(String? iso) {
    if (iso == null || iso.trim().isEmpty) return null;
    final parsed = DateTime.tryParse(iso);
    return parsed?.toUtc().toIso8601String();
  }

  Future<String> _buildLlmsTxt() async {
    final site = _absoluteUrl('/');
    final sitemap = _absoluteUrl('/sitemap.xml');
    final guides = _absoluteUrl('/guides');
    final client = _absoluteUrl('/client');
    final dart = _absoluteUrl('/dart');
    final api = _absoluteUrl('/api');
    final blog = _absoluteUrl('/blog');
    final questions = _absoluteUrl('/questions');

    final posts = <Map<String, dynamic>>[];
    try {
      posts.addAll((await _fetchBlogPosts()).take(12));
    } catch (_) {}

    final lines = <String>[
      '# Flint Dart Docs',
      '',
      '> Official documentation, guides, API reference, blog posts, and Q&A content for Flint Dart.',
      '',
      '## Crawl & Index',
      '',
      '- Site: $site',
      '- Sitemap: $sitemap',
      '- Guides: $guides',
      '- FlintClient Guide: $client',
      '- Dart Lessons: $dart',
      '- API Reference: $api',
      '- Blog: $blog',
      '- Questions: $questions',
      '',
      '## Recommended Sources',
      '',
      '- Start with the Getting Started guide and API reference for framework usage.',
      '- Use blog posts for architecture decisions, patterns, and release notes.',
      '- Use questions for community troubleshooting examples.',
    ];

    if (posts.isNotEmpty) {
      lines.add('');
      lines.add('## Recent Blog Posts');
      lines.add('');
      for (final post in posts) {
        final title = post['title']?.toString() ?? 'Untitled';
        final href = post['href']?.toString() ?? '/blog';
        final excerpt = post['excerpt']?.toString() ?? '';
        lines.add('- ${_absoluteUrl(href)} | $title');
        if (excerpt.isNotEmpty) {
          lines.add('  $excerpt');
        }
      }
    }

    lines.add('');
    lines.add('## Notes');
    lines.add('');
    lines.add(
        '- Content pages are intended for indexing by search engines and AI crawlers unless otherwise restricted.');

    return lines.join('\n');
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
        'description':
            'Protect and transform requests with composable middleware',
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
      {
        'title': 'Install the CLI',
        'command': 'dart pub global activate flint_dart'
      },
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
