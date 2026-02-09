import 'package:flint_dart/db.dart';
import 'package:flint_dart/logs.dart';

class BlogPostSeeder {
  static Future<void> run() async {
    await DB.autoConnect();

    final qb = QueryBuilder(table: 'blog_posts');
    final count = await qb.count();
    if (count > 0) {
      Log.debug('BlogPostSeeder skipped (data already present).');
      return;
    }

    await qb.insert({
      'title': 'Introducing Role-Based Publishing in Flint',
      'slug': 'role-based-publishing',
      'excerpt':
          'Learn how to protect authoring routes with role guards and policy checks.',
      'body':
          'Role-based publishing lets you define who can create or publish content. '
          'In Flint, you can implement this by attaching a middleware that checks '
          'the authenticated user role against an allowlist. This pattern keeps your '
          'authoring routes safe while keeping read access public.\n\n'
          'Start by adding a role column on users, then create a RoleGuard middleware '
          'that rejects requests without the required role. Apply it to post creation '
          'routes and you have a simple, effective permissions system.',
      'author': 'Flint Core Team',
      'tag': 'Release',
      'published_at': DateTime(2026, 3, 12).toIso8601String(),
    });

    await qb.insert({
      'title': 'Building a Q&A Workflow with Flint',
      'slug': 'qa-workflow',
      'excerpt':
          'Design question, answer, and comment flows with clean routing patterns.',
      'body':
          'A Q&A workflow benefits from clear route design and consistent validation. '
          'Use dedicated endpoints for questions and answers, and attach role guards '
          'to protect write access. Pair that with QueryBuilder filters and you have '
          'a fast, maintainable API.\n\n'
          'This guide walks through building the main flows and structuring controllers '
          'to keep responsibilities clean.',
      'author': 'Docs Team',
      'tag': 'Guide',
      'published_at': DateTime(2026, 2, 28).toIso8601String(),
    });

    await qb.insert({
      'title': 'Scaling APIs with QueryBuilder',
      'slug': 'query-builder-scaling',
      'excerpt': 'Pagination, filtering, and eager loading patterns that scale.',
      'body':
          'QueryBuilder provides a fluent API for common database tasks. To scale, '
          'combine pagination, filters, and eager loading where possible. Be careful '
          'to keep your WHERE clauses selective and use proper indexes.\n\n'
          'This article covers practical patterns for building fast endpoints.',
      'author': 'Flint Core Team',
      'tag': 'Deep Dive',
      'published_at': DateTime(2026, 2, 10).toIso8601String(),
    });

    await qb.insert({
      'title': 'Production-Ready Auth with JWT and Sessions',
      'slug': 'auth-jwt-sessions',
      'excerpt': 'Combine JWT and session workflows for secure deployments.',
      'body':
          'JWTs are great for stateless APIs, while sessions are convenient for server '
          'rendered workflows. You can use both depending on the endpoint. Flint supports '
          'JWT auth via Auth helpers and session management via SessionManager.\n\n'
          'This guide explains how to choose the right approach for each use case.',
      'author': 'Security',
      'tag': 'Security',
      'published_at': DateTime(2026, 1, 22).toIso8601String(),
    });

    Log.debug('BlogPostSeeder ran successfully.');
  }
}
