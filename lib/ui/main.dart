import 'package:flint_dart/ui.dart';

import 'component_registry.dart';
import 'components/root_design.dart';

void main() {
  createFlintApp(
    '#app',
    registry: componentRegistry,
    rootDesign: docsRootDesign,
  );
}
