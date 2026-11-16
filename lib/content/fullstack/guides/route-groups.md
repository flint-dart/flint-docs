# Route Groups

Route groups keep related routes in their own file. Use them for features such
as courses, users, admin dashboards, billing, auth, and web pages.

## Basic Group

Create a class that extends `RouteGroup`:

```dart
import 'package:flint_dart/flint_dart.dart';

class CourseRoutes extends RouteGroup {
  @override
  String get prefix => '/courses';

  @override
  String get tag => 'Courses';

  @override
  void register(Flint app) {
    app.get('/', (Context ctx) {
      return Course().all();
    });

    app.get('/:id', (Context ctx) {
      return Course().find(ctx.req.param('id'));
    });
  }
}
```

Register the group from `lib/main.dart` or a parent route group:

```dart
app.routes(CourseRoutes());
```

`prefix` is added to every route inside the group. `tag` is used by route docs
and tooling.

## Controllers In Groups

For real features, bind controllers through `app.controller(...)`. This gives
each request its own controller instance and lets the controller use `req`,
`res`, and `context`.

```dart
class CourseController extends Controller {
  Future<Response> index() async {
    final courses = await Course().all();
    return res.json({'data': courses});
  }

  Future<Response> show() async {
    final course = await Course().find(req.param('id'));
    if (course == null) {
      return res.status(404).json({'message': 'Course not found'});
    }
    return res.json({'data': course});
  }
}
```

```dart
class CourseRoutes extends RouteGroup {
  @override
  String get prefix => '/courses';

  @override
  String get tag => 'Courses';

  @override
  void register(Flint app) {
    final courses = app.controller(CourseController.new);

    courses.get('/', (controller) => controller.index());
    courses.get('/:id', (controller) => controller.show());
  }
}
```

Do not instantiate one controller and reuse it across requests.

## Group Middleware

Use `middlewares` when every route in the group needs the same guard:

```dart
class AdminRoutes extends RouteGroup {
  @override
  String get prefix => '/admin';

  @override
  List<Middleware> get middlewares => [
        AuthMiddleware(),
        RoleMiddleware('admin'),
      ];

  @override
  void register(Flint app) {
    final admin = app.controller(AdminController.new);
    admin.get('/dashboard', (controller) => controller.dashboard());
  }
}
```

Use `.useMiddleware(...)` when only one route needs the guard:

```dart
courses
    .post('/', (controller) => controller.store())
    .useMiddleware(AuthMiddleware());
```

## Nested Groups

`app.routes(group, children: [...])` registers a parent group and child groups
under the same tree.

```dart
app.routes(
  ApiRoutes(),
  children: [
    CourseRoutes(),
    UserRoutes(),
  ],
);
```

If `ApiRoutes.prefix` is `/api` and `CourseRoutes.prefix` is `/courses`, the
final path is `/api/courses`.

Child groups inherit the parent prefix and middleware.

## Mounting

Use `mount(...)` when you need to register a small sub-application:

```dart
app.mount('/api', (api) {
  api.get('/health', (Context ctx) => {'ok': true});
}, middlewares: [
  ApiMiddleware(),
]);
```

Use `RouteGroup` for normal app features. Use `mount(...)` for modules or
package-owned route sets.

## File Layout

Keep route groups, controllers, middleware, models, services, and UI files
separate:

```text
lib/routes/course_routes.dart
lib/controllers/course_controller.dart
lib/middlewares/course_access_middleware.dart
lib/services/courses/create_course_action.dart
lib/models/course.dart
```

Each route group should mostly describe URL shape, middleware, tags, and
controller binding. Business workflows belong in controllers and service/action
classes.

## Checklist

- The route group extends `RouteGroup`.
- The group has a clear `prefix`.
- The group uses `tag` when Swagger docs should group the endpoints.
- Controllers extend `Controller`.
- Controllers are bound with `app.controller(YourController.new)`.
- Route-specific middleware uses `.useMiddleware(...)`.
- Group middleware goes in `middlewares`.
- One route group class lives in one file.
