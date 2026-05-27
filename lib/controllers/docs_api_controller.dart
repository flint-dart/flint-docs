import 'dart:io';

import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'package:flint_docs/support/docs_support.dart';

class DocsApiController extends Controller {
  final docs = DocsSupport();

  Future<Response> me() async {
    final user = await req.user;
    if (user == null) {
      return res.json({
        'isAuthenticated': false,
        'canWriteBlog': false,
        'canAnswer': false,
        'canComment': false,
        'currentUserId': null,
        'currentUserLabel': null,
      });
    }
    final role = user['role']?.toString();
    return res.json({
      'isAuthenticated': true,
      'canWriteBlog': docs.canWriteBlogRole(role),
      'canAnswer': role == 'admin' || role == 'contributor' || role == 'dev',
      'canComment': true,
      'currentUserId': user['id']?.toString(),
      'currentUserLabel':
          user['name']?.toString() ?? user['email']?.toString() ?? 'Signed in',
    });
  }

  Future<Response> blogIndex() async {
    try {
      final posts = await docs.fetchBlogPosts();
      return res.json({'posts': posts});
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> blogShow() async {
    final slug = req.param('slug');
    if (slug == null) return res.status(400).json({'error': 'Missing slug'});
    try {
      final post = await BlogPost().firstWhere('slug', slug);
      if (post == null) return res.status(404).json({'error': 'Not found'});
      final postMap = docs.toBlogViewModel(post.toMap());
      final postBodyHtml = docs
          .renderMarkdownToHtml(post.getAttribute('body')?.toString() ?? '');
      final user = await req.user;
      final comments = await docs.fetchCommentsForPost(
        post.toMap(),
        user?['id']?.toString(),
        user?['name']?.toString(),
        user?['email']?.toString(),
      );
      return res.json({
        'post': postMap,
        'postBodyHtml': postBodyHtml,
        'comments': comments,
        'commentsCount': comments.length,
      });
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> questionsIndex() async {
    try {
      final questions = await docs.fetchQuestions();
      return res.json({'questions': questions});
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> questionsShow() async {
    final slug = req.param('slug');
    if (slug == null) return res.status(400).json({'error': 'Missing slug'});
    try {
      final question = await Question().firstWhere('slug', slug);
      if (question == null) {
        return res.status(404).json({'error': 'Not found'});
      }
      final questionMap = docs.toQuestionViewModel(question.toMap());
      final user = await req.user;
      final answers = await docs.fetchAnswersForQuestion(
        question.toMap(),
        user?['id']?.toString(),
        user?['name']?.toString(),
        user?['email']?.toString(),
      );
      return res.json({
        'question': questionMap,
        'answers': answers,
        'answersCount': answers.length,
      });
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> changelog() async {
    try {
      final md = await docs.loadFrameworkChangelog();
      final entries = docs
          .parseChangelogEntries(md)
          .map((e) => {
                'version': e['version'],
                'content': e['content'],
                'contentHtml': docs.renderMarkdownToHtml(e['content'] ?? ''),
              })
          .toList();
      return res.json({'entries': entries});
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> guideSection() async {
    final name = req.param('name') ?? '';
    const allowed = {
      'introduction',
      'installation',
      'create-run',
      'cli',
      'routing',
      'route-groups',
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
      'views',
      'models',
      'table-sync',
      'deployment',
    };
    if (!allowed.contains(name)) {
      return res.status(404).json({'error': 'Not found'});
    }
    try {
      final file = File('lib/content/guides/$name.md');
      if (!await file.exists()) {
        return res.status(404).json({'error': 'Partial not found'});
      }
      final html = docs.renderMarkdownToHtml(await file.readAsString());
      return res.json({'html': html});
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }

  Future<Response> reference() async {
    const sections = [
      'api-header',
      'api-flint-class',
      'api-request',
      'api-response',
      'api-router',
      'api-middleware',
      'api-model',
      'api-query-builder',
      'api-migration',
      'api-schema',
      'api-auth',
      'api-guards',
      'api-providers',
      'api-components',
      'api-layout',
      'api-forms',
      'api-cache',
      'api-session',
      'api-storage',
      'api-mail',
      'api-validation',
      'api-rest-example',
    ];
    try {
      final buffer = StringBuffer();
      for (final section in sections) {
        final file = File('lib/content/api/$section.md');
        if (await file.exists()) {
          buffer.write(
            docs.renderMarkdownToHtml(await file.readAsString()),
          );
        }
      }
      return res.json({'html': buffer.toString()});
    } catch (e) {
      return res.status(500).json({'error': e.toString()});
    }
  }
}
