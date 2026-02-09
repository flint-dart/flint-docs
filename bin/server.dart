import 'package:flint_dart/flint_dart.dart';
import '../lib/src/routes/documentation.dart';

void main() async {
  final app = Flint();

  // Register documentation routes
  DocumentationRoutes.register(app);

  // Start the server
  await app.listen(port: 3000);
  print('📚 FlintDart Documentation Server');
  print('🚀 Running on http://localhost:3000');
  print('📖 Documentation: http://localhost:3000');
  print('🔧 Getting Started: http://localhost:3000/guides/getting-started');
  print('📚 API Reference: http://localhost:3000/api');
  print('💡 Examples: http://localhost:3000/examples');
}
