# Installation

Install Flint with Dart, then create or run an app from the command line.

## Requirements

- Dart SDK installed and available as `dart`
- Git installed if you will use `flint create`
- A terminal with access to your project folder
- A database connection only when your app uses models, migrations, sessions, auth tables, queues, or AI persistence

Check Dart first:

```bash
dart --version
```

## Install The CLI

Install the Flint CLI globally:

```bash
dart pub global activate flint_dart
```

After activation, the `flint` command should be available:

```bash
flint --help
```

If your shell cannot find `flint`, add Dart's global pub cache bin directory to
your `PATH`.

On Windows this is usually:

```text
%LOCALAPPDATA%\Pub\Cache\bin
```

On macOS and Linux this is usually:

```text
$HOME/.pub-cache/bin
```

You can also run the CLI through Dart without global activation:

```bash
dart run flint_dart:flint --help
```

## Create A New App

Create a new Flint app:

```bash
flint create course_app
cd course_app
dart pub get
```

Run it:

```bash
flint run --port=3000
```

The same command works through Dart:

```bash
dart run flint_dart:flint run --port=3000
```

## Add Flint To An Existing Dart Package

Use this when you already have a Dart package:

```bash
dart pub add flint_dart
```

Then create a basic server entrypoint:

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint();

  app.get('/', (Context ctx) {
    return ctx.res?.json({'message': 'Hello Flint'});
  });

  app.listen(port: 3000);
}
```

## Useful First Commands

```bash
flint --help
flint create course_app
flint run --port=3000
flint migrate --no-interaction
flint seed
flint agent
```

Use the Dart-style generator flags for new files:

```bash
flint --make-controller Course
flint --make-route Course
flint --make-middleware Auth
flint --make-ui --component CourseCard
```

The older `make:*` command aliases are legacy compatibility and are scheduled
for removal in Flint Dart `1.5.0`.

## Next Steps

Read these next:

- [Getting Started](/fullstack/guides/getting-started)
- [Create & Run](/fullstack/guides/create-run)
- [CLI](/fullstack/guides/cli)
- [Project Structure](/fullstack/guides/project-structure)
