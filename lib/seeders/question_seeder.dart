import 'package:flint_dart/db.dart';
import 'package:flint_dart/logs.dart';

class QuestionSeeder {
  static Future<void> run() async {
    await DB.autoConnect();

    final qb = QueryBuilder(table: 'questions');
    final count = await qb.count();
    if (count > 0) {
      Log.debug('QuestionSeeder skipped (data already present).');
      return;
    }

    await qb.insert({
      'title': 'How do I add middleware to a single route?',
      'slug': 'route-middleware',
      'body':
          'I want to protect one endpoint without adding a global middleware. What is the recommended approach?',
      'author': 'Dev Advocate',
      'tag': 'Routing',
      'published_at': DateTime(2026, 3, 8).toIso8601String(),
    });

    await qb.insert({
      'title': 'What is the best way to structure RouteGroups?',
      'slug': 'route-groups-structure',
      'body':
          'Should I nest RouteGroups or keep them flat for large apps?',
      'author': 'Community',
      'tag': 'Architecture',
      'published_at': DateTime(2026, 2, 20).toIso8601String(),
    });

    await qb.insert({
      'title': 'How can I paginate QueryBuilder results?',
      'slug': 'querybuilder-pagination',
      'body':
          'Looking for a clean pattern to return pagination metadata and rows.',
      'author': 'Docs Team',
      'tag': 'Database',
      'published_at': DateTime(2026, 2, 2).toIso8601String(),
    });

    Log.debug('QuestionSeeder ran successfully.');
  }
}
