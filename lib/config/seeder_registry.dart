import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/seeders/example_project_seeder.dart';

class FlintDocsSeederRegistry extends SeederRegistry {
  const FlintDocsSeederRegistry();

  static const instance = FlintDocsSeederRegistry();

  @override
  List<Seeder> get seeders => [
        ExampleProjectSeeder(),
      ];
}

List<Seeder> flintDocsSeeders() => FlintDocsSeederRegistry.instance.seeders;

Future<void> registerFlintDocsSeeders({bool closeConnection = true}) =>
    FlintDocsSeederRegistry.instance.registerAll(
      closeConnection: closeConnection,
    );

Future<void> main() => registerFlintDocsSeeders();
