import 'dart:io';

void main() async {
  final routes = [
    // Ecosystem Root
    '/',
    // Fullstack Framework & Guides
    '/fullstack',
    '/fullstack/guides',
    '/fullstack/guides/routing',
    '/fullstack/guides/models',
    '/fullstack/guides/authentication',
    '/fullstack/guides/websockets',
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
  ];

  print('Testing ${routes.length} live routes against http://localhost:8080...\n');
  int passed = 0;
  int failed = 0;
  final client = HttpClient();

  for (final path in routes) {
    final uri = Uri.parse('http://127.0.0.1:8080$path');
    try {
      final req = await client.getUrl(uri);
      final res = await req.close();
      final body = await res.fold<List<int>>([], (prev, element) => prev..addAll(element));

      if (res.statusCode == 200) {
        passed++;
        print('  [200 OK] $path (${body.length} bytes)');
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
  print('Results: $passed Passed, $failed Failed out of ${routes.length} total routes.');
  print('----------------------------------------');

  if (failed > 0) {
    exit(1);
  }
}
