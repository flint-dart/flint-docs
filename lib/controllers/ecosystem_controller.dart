import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/answer_model.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/question_model.dart';
import 'package:flint_docs/models/showcase_project_model.dart';
import 'package:flint_docs/models/user_model.dart';

class EcosystemController extends Controller {
  String _dateText(dynamic value) {
    if (value == null) return '';
    if (value is DateTime) return value.toIso8601String();
    return value.toString();
  }

  String _firstNonEmpty(List<dynamic> values) {
    for (final value in values) {
      final text = value?.toString().trim() ?? '';
      if (text.isNotEmpty) return text;
    }
    return '';
  }

  Map<String, dynamic> _userRow(User user) {
    return {
      'id': user.id?.toString() ?? '',
      'productId': 'flintdocs',
      'productName': 'FlintDocs',
      'name': _firstNonEmpty([user.name, user.email, 'FlintDocs user']),
      'email': user.email ?? '',
      'phone': '',
      'role': _firstNonEmpty([user.role, 'READER']).toUpperCase(),
      'tenant': 'FlintDocs',
      'status': 'active',
      'lastLogin': _dateText(user.getAttribute('updated_at')),
      'syncStatus': 'api',
      'createdAt': _dateText(user.getAttribute('created_at')),
    };
  }

  Map<String, dynamic> _recentContentRow(dynamic row, String type) {
    return {
      'id': row.id?.toString() ?? '',
      'type': type,
      'title': _firstNonEmpty([
        row.getAttribute('title'),
        row.getAttribute('slug'),
        row.getAttribute('author'),
      ]),
      'author': row.getAttribute('author')?.toString() ?? '',
      'publishedAt': _dateText(row.getAttribute('published_at')),
    };
  }

  Future<Response> users() async {
    final users = await User().all();
    final rows = users.map(_userRow).toList();

    return res.json({
      'status': true,
      'data': {
        'product': {'id': 'flintdocs', 'name': 'FlintDocs'},
        'users': rows,
        'total': rows.length,
      },
    });
  }

  Future<Response> summary() async {
    final users = await User().all();
    final posts = await BlogPost().all();
    final questions = await Question().all();
    final answers = await Answer().all();
    final comments = await Comment().all();
    final showcases = await ShowcaseProject().all();

    final recentPosts =
        await BlogPost().orderBy('published_at', desc: true).limit(5).get();
    final recentQuestions =
        await Question().orderBy('published_at', desc: true).limit(5).get();

    return res.json({
      'status': true,
      'data': {
        'product': {'id': 'flintdocs', 'name': 'FlintDocs'},
        'metrics': {
          'users': users.length,
          'blogPosts': posts.length,
          'questions': questions.length,
          'answers': answers.length,
          'comments': comments.length,
          'showcaseProjects': showcases.length,
          'contentItems': posts.length +
              questions.length +
              answers.length +
              comments.length +
              showcases.length,
        },
        'recentContent': [
          ...recentPosts.map((post) => _recentContentRow(post, 'blog')),
          ...recentQuestions.map(
            (question) => _recentContentRow(question, 'question'),
          ),
        ],
        'syncedAt': DateTime.now().toIso8601String(),
      },
    });
  }
}
