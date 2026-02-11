import 'dart:io';

import 'package:flint_dart/flint_dart.dart';
import '../lib/src/routes/documentation.dart';

void main() async {
  final app = Flint();

  // Register documentation routes
  DocumentationRoutes.register(app);

  // Start the server
  final port = int.tryParse(Platform.environment['PORT'] ?? '') ?? 3000;
  await app.listen(port: port);
  print('📚 FlintDart Documentation Server');
  print('🚀 Running on http://localhost:$port');
  print('📖 Documentation: http://localhost:$port');
  print('🔧 Getting Started: http://localhost:$port/guides/getting-started');
  print('📚 API Reference: http://localhost:$port/api');
  print('💡 Examples: http://localhost:$port/examples');
}
