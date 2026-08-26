## Create & Run

### Create a new project

```bash
flint create my_app
cd my_app
```

### Run the server

```bash
flint run
```

`flint run` runs `lib/main.dart`.

If you are using hot reload for Flint templates, set `PORT` in your `.env`. The framework will use this when `app.listen()` is called without a port:

```bash
PORT=3001
```

Dart-friendly workflow

Keep your project clean and fast with standard Dart tools. Run these anytime to format and catch issues early:

```bash
dart format .
dart analyze
```

### Env Helper

Use the top-level `env()` helper anywhere to read values from `.env`. It will coerce types based on the default value you pass.

```dart
final port = env('PORT', 3001);      // int
final debug = env('DEBUG', false);   // bool
final name = env('APP_NAME', 'Flint');
```
