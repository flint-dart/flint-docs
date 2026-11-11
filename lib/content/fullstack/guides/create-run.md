# Create And Run

Use `flint create` for a new app and `flint run` for local development.

## Create

```bash
flint create course_app
cd course_app
dart pub get
```

The command creates a fresh Flint project from the sample app, updates
`pubspec.yaml`, rewrites package imports, and installs dependencies.

You can also run the command through Dart:

```bash
dart run flint_dart:flint create course_app
```

## Run

Start the development server:

```bash
flint run
```

Choose a port:

```bash
flint run --port=3000
flint run --port 3000
flint run 3000
```

Port resolution order:

1. `--port=3000`
2. `--port 3000`
3. a positional number such as `3000`
4. `PORT` from `.env`
5. default `8080`

## Web Builds During Run

By default, `flint run` may build Flint UI browser assets when the app has UI
entrypoints. Skip that step when you only want the server:

```bash
flint run --no-web-build
```

Use the build guide when working on browser UI, SSR, generated bundles, or page
registry issues:

- [Build And Rendering](/fullstack/guides/build-and-rendering)

## First Route

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint(withDefaultMiddleware: true);

  app.get('/health', (Context ctx) {
    return ctx.res?.json({'ok': true});
  });

  app.listen(port: 3000);
}
```

Open:

```text
http://localhost:3000/health
```

## Useful Follow-Up Commands

```bash
flint migrate --no-interaction
flint seed
flint agent
flint --make-controller Course
flint --make-route Course
flint --make-ui --page Courses
```

The older `make:*` aliases are legacy compatibility and are scheduled for
removal in Flint Dart `1.5.0`.
