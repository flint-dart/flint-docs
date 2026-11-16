# Introduction

Flint Dart is a fullstack Dart framework for building HTTP APIs,
server-rendered pages, browser UI, WebSockets, database-backed apps, background
jobs, mail, storage, validation, and AI workflows from one Dart codebase.

Use Flint when you want the backend and frontend to share the same language and
project shape:

```text
lib/
  main.dart
  routes/
  controllers/
  models/
  middlewares/
  services/
  mail/
  ui/
public/
  assets/
  uploads/
```

## Core Ideas

- Routes receive a unified `Context`.
- HTTP code reads `ctx.req` and writes through `ctx.res`.
- WebSocket code reads the same `Context` and uses `ctx.socket`.
- Controllers extend `Controller` and are bound with `app.controller(...)`.
- Models describe database tables and expose query helpers.
- Flint UI source lives in `lib/ui`.
- Generated browser bundles live under `public/assets/js/flint-ui`.
- One class, component, page, section, middleware, job, or reusable helper should live in one file.

## Minimal App

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint(
    withDefaultMiddleware: true,
    enableSwaggerDocs: true,
  );

  app.get('/', (Context ctx) {
    return ctx.res?.json({'message': 'Hello Flint'});
  });

  app.listen(port: 3000);
}
```

## Controller-Based App

```dart
class CourseController extends Controller {
  Future<Response> index() async {
    final courses = await Course().all();
    return res.json({'data': courses});
  }
}
```

```dart
class CourseRoutes extends RouteGroup {
  @override
  String get prefix => '/courses';

  @override
  void register(Flint app) {
    final courses = app.controller(CourseController.new);
    courses.get('/', (controller) => controller.index());
  }
}
```

Register the route group:

```dart
app.routes(CourseRoutes());
```

## What To Read Next

- [Installation](/fullstack/guides/installation)
- [Getting Started](/fullstack/guides/getting-started)
- [CLI](/fullstack/guides/cli)
- [Routing](/fullstack/guides/routing)
- [Project Structure](/fullstack/guides/project-structure)
- [Building A Feature](/fullstack/guides/building-a-feature)
