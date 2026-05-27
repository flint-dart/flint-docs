## Introduction

Flint Dart is a full-stack Dart framework for building web apps with one language from server to screen.

Use Flint Dart for routing, controllers, middleware, validation, database models, views, and the app structure around them. Then use Flint UI when you want to build the frontend in Dart too, using components instead of writing separate JavaScript.

### Why Flint Dart

Flint is made for apps that should stay simple when they grow. Routes can point to controllers, controllers can call services, and models can describe the database shape close to the code that uses it.

The goal is not to hide Dart. The goal is to let Dart do more of the work.

### UI in Dart

Flint UI lets you create frontend components with Dart classes. A component returns a view, and the internal renderer turns that view into browser UI.

```dart
import 'package:flint_ui/flint_ui.dart';

class Counter extends Component {
  int count = 0;

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(16),
      ),
      children: [
        Text.h2('Count: $count'),
        Button(
          onPressed: (_) => setState(() => count++),
          children: [Text.span('Add one')],
        ),
      ],
    );
  }
}
```

### How the pieces fit

Flint Dart handles the server side: requests, responses, routing, middleware, controllers, models, and deployment.

Flint UI handles interactive pages: components, state, styling, layouts, and browser rendering.

Together, they let you build a complete web app while staying in Dart.

### What to read next

Start with installation when you are ready to create a project. After that, read routing, controllers, views, and models to understand the core workflow.
