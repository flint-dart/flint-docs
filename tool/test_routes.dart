import 'dart:io';

void main() async {
  final baseUrl = Platform.environment['FLINT_TEST_BASE_URL'] ??
      'http://127.0.0.1:${Platform.environment['PORT'] ?? '3001'}';
  final routes = [
    // Ecosystem Root
    '/',
    // Fullstack Framework & Guides
    '/fullstack',
    '/fullstack/guides',
    '/fullstack/guides/introduction',
    '/fullstack/guides/getting-started',
    '/fullstack/guides/templates',
    '/fullstack/guides/testing',
    '/fullstack/guides/routing',
    '/fullstack/guides/route-groups',
    '/fullstack/guides/models',
    '/fullstack/guides/authentication',
    '/fullstack/guides/mail',
    '/fullstack/guides/validation',
    '/fullstack/guides/websockets',
    '/fullstack/guides/database-api',
    '/fullstack/guides/jobs-and-workers',
    '/fullstack/guides/seeders',
    '/fullstack/guides/build-and-rendering',
    '/fullstack/guides/ui-widgets',
    '/fullstack/guides/security-and-utilities',
    '/fullstack/guides/sessions-and-cookies',
    '/fullstack/guides/swagger-and-api-docs',
    '/fullstack/api',
    '/fullstack/api/api-request',
    '/fullstack/api/api-response',
    '/fullstack/whats-new',
    '/fullstack/changelog',
    '/fullstack/examples',
    // Hardware & Robotics
    '/hardware',
    '/hardware/guides',
    '/hardware/guides/getting-started',
    '/hardware/guides/edge-ai-vision',
    '/hardware/guides/autonomous-rover',
    '/hardware/guides/swarm-mesh',
    '/hardware/guides/wokwi-simulation',
    // AI Engine
    '/ai',
    '/ai/guides',
    '/ai/guides/getting-started',
    '/ai/guides/providers',
    '/ai/guides/agents',
    '/ai/guides/tools',
    // Client SDK
    '/client',
    '/client/guides',
    '/client/guides/getting-started',
    '/client/guides/requests',
    '/client/guides/caching',
    '/client/guides/retries-cancellation',
    // Dart Core
    '/dart',
    '/dart/guides',
    // Backward Compatibility
    '/guides',
    '/api',
    '/examples',
    '/whats-new',
    '/changelog',
    '/llms.txt',
    '/sitemap.xml',
  ];

  print('Testing ${routes.length} live routes against $baseUrl...\n');
  int passed = 0;
  int failed = 0;
  final client = HttpClient();

  for (final path in routes) {
    final uri = Uri.parse('$baseUrl$path');
    try {
      final req = await client.getUrl(uri);
      final res = await req.close();
      final body = await res
          .fold<List<int>>([], (prev, element) => prev..addAll(element));

      if (res.statusCode >= 200 && res.statusCode < 400) {
        passed++;
        print('  [${res.statusCode} OK] $path (${body.length} bytes)');
      } else {
        failed++;
        print('  [${res.statusCode} FAIL] $path');
      }
    } catch (e) {
      failed++;
      print('  [ERROR] $path -> $e');
    }
  }

  client.close();

  print('\n----------------------------------------');
  print(
    'Results: $passed Passed, $failed Failed out of ${routes.length} total routes.',
  );
  print('----------------------------------------');

  if (failed > 0) {
    exit(1);
  }
}
