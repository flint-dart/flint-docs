import 'package:flint_dart/db.dart';
import 'package:flint_dart/logs.dart';

class BlogPostSeeder {
  static Future<void> run() async {
    await DB.autoConnect();

    final qb = QueryBuilder(table: 'blog_posts');
    final count = await qb.count();
    if (count > 0) {
      Log.debug('BlogPostSeeder skipped (data already present).');
      return;
    }

    await qb.insert({
      'title': 'FlintDart Controller Request Scope (Why useController Exists)',
      'slug': 'controller-request-scope-usecontroller',
      'excerpt':
          'Why FlintDart added request-scoped controllers with useController(...) and how it prevents cross-request state leaks.',
      'body': '''# FlintDart Controller Request Scope (Why `useController` Exists)

## Short answer

Your old code was valid and could work fine.

FlintDart added `Controller` + `useController(...)` to make apps safer as they grow, especially when requests happen at the same time.

## Old style (works, but can be risky later)

```dart
final controller = OrdersController();

app.get('/orders', controller.index);
```

This uses one shared controller instance for every request.

## The bug this can cause (shared state leak)

```dart
class OrdersController {
  String? currentUserId; // request-scoped data stored on a shared instance

  Future<Response> index(Request req, Response res) async {
    final user = await req.authUser;
    currentUserId = user?.id;

    await Future.delayed(Duration(milliseconds: 50)); // simulate async work

    return res.json({'userIdUsed': currentUserId});
  }
}
```

### What can happen

1. Request A starts and sets `currentUserId = "A"`.
2. Before A finishes, Request B starts and sets `currentUserId = "B"`.
3. Request A resumes and returns `"B"` by mistake.

This is a cross-request data leak.

## New FlintDart style (request-scoped controller)

```dart
app.get(
  '/orders',
  useController(OrdersController.new, (c) => c.index()),
);
```

```dart
import 'package:flint_dart/flint_dart.dart';

class OrdersController extends Controller {
  String? currentUserId;

  Future<Response> index() async {
    final user = await req.authUser;
    currentUserId = user?.id;

    await Future.delayed(Duration(milliseconds: 50));

    return res.json({'userIdUsed': currentUserId});
  }
}
```

## Why this is safer

`useController(...)` creates a fresh controller for each request, binds request context, runs the action, then unbinds it.

That means:

- Request A gets its own `OrdersController`
- Request B gets a different `OrdersController`
- Their state cannot overwrite each other

## Why FlintDart added this

Frameworks need structure for:

- concurrent request safety
- consistent controller lifecycle (`bind` / `unbind`)
- request-scoped context (`req`, `res`, `socket`)
- future features (typed injection, middleware integrations, websocket support)

## Practical takeaway

- Small/stateless apps: old style can still work.
- Growing apps/teams: `useController(...)` is the better default because it prevents subtle bugs before they happen.
''',
      'author': 'Docs Team',
      'tag': 'Architecture',
      'published_at': DateTime(2026, 2, 26).toIso8601String(),
    });

    await qb.insert({
      'title': 'Route Groups in FlintDart: Organize APIs Before They Get Messy',
      'slug': 'route-groups-organize-apis',
      'excerpt':
          'Use RouteGroup to keep growing APIs modular, readable, and easier to maintain.',
      'body': '''# Route Groups in FlintDart: Organize APIs Before They Get Messy

## Why this matters

Small apps can start with routes in one file.

But once you add auth, users, billing, admin, and web pages, a flat route list becomes hard to scan and easy to break.

FlintDart's `RouteGroup` helps you keep routes grouped by feature.

## The problem with one big route file

```dart
app.get('/users', userController.index);
app.post('/users', userController.store);
app.get('/admin/users', adminController.users);
app.get('/admin/logs', adminController.logs);
app.get('/billing/invoices', billingController.invoices);
```

This works, but it scales poorly.

## Better: split by feature with RouteGroup

```dart
class UserRoutes extends RouteGroup {
  @override
  String get prefix => '/users';

  @override
  void register(Flint app) {
    app.get('/', (req, res) => UserController().index(req, res));
    app.post('/', (req, res) => UserController().store(req, res));
  }
}
```

Then mount it:

```dart
app.routes(UserRoutes());
```

## Practical structure

- `AuthRoutes` for sign-in/register flows
- `UserRoutes` for profile and account operations
- `AdminRoutes` for protected dashboards/tools
- `WebRoutes` for server-rendered pages

## Takeaway

Use route groups early. They reduce merge conflicts, make code reviews easier, and keep route ownership clear across teams.
''',
      'author': 'Docs Team',
      'tag': 'Architecture',
      'published_at': DateTime(2026, 2, 24).toIso8601String(),
    });

    await qb.insert({
      'title': 'Request Validation in FlintDart: Fail Fast, Return Better Errors',
      'slug': 'request-validation-fail-fast',
      'excerpt':
          'Use request validation to protect handlers, simplify controllers, and produce consistent API errors.',
      'body': '''# Request Validation in FlintDart: Fail Fast, Return Better Errors

## The goal

Controllers should focus on application logic, not manual field checking.

FlintDart validation lets you validate input at the request boundary and return consistent error responses.

## Without validation (harder to maintain)

```dart
app.post('/users', (req, res) async {
  final body = await req.body();
  if (body['email'] == null || body['email'].toString().isEmpty) {
    return res.status(422).json({'error': 'email is required'});
  }
  // more checks...
});
```

## With FlintDart validation

```dart
app.post('/users', (req, res) async {
  final data = await req.validate({
    'name': 'required|string|min:2',
    'email': 'required|email',
    'password': 'required|string|min:8',
  });

  // data is validated here
  return res.json({'ok': true, 'user': data});
});
```

## Why this helps

- less repeated validation code
- more consistent error responses
- clearer controller methods
- safer input handling by default

## Team rule worth adopting

Validate at the route/controller boundary, not deep inside service logic. That keeps bad input from spreading through your app.
''',
      'author': 'Docs Team',
      'tag': 'Guide',
      'published_at': DateTime(2026, 2, 21).toIso8601String(),
    });

    await qb.insert({
      'title': 'FlintDart WebSockets: Keep the HTTP Route, Move the Realtime Logic',
      'slug': 'websockets-http-route-realtime-logic',
      'excerpt':
          'A practical mental model for structuring WebSocket endpoints and events in FlintDart.',
      'body': '''# FlintDart WebSockets: Keep the HTTP Route, Move the Realtime Logic

## Common mistake

Teams often mix route setup, auth checks, and event handlers in one large closure.

That works for prototypes, but becomes hard to reason about quickly.

## A better mental model

- HTTP route accepts the connection
- WebSocket handler owns events
- Shared services hold business logic

## Example

```dart
app.websocket('/chat', (Context ctx) {
  final socket = ctx.socket;

  socket?.on('ping', (_) {
    socket.emit('pong', {'ok': true});
  });

  socket?.on('message', (payload) async {
    // validate, persist, broadcast
  });
});
```

## What to keep out of the socket closure

- database query composition details
- authorization policy branching for every event
- formatting logic for API responses and broadcasts

Move those into small functions/services so the event map stays readable.

## Takeaway

Treat WebSocket handlers like controllers: thin orchestration at the edge, reusable logic underneath.
''',
      'author': 'Realtime Team',
      'tag': 'Deep Dive',
      'published_at': DateTime(2026, 2, 18).toIso8601String(),
    });

    await qb.insert({
      'title': 'Deploying FlintDart Apps: A Simple Production Checklist',
      'slug': 'deploying-flintdart-production-checklist',
      'excerpt':
          'A practical checklist for environment config, security, logging, and operational readiness.',
      'body': '''# Deploying FlintDart Apps: A Simple Production Checklist

## Before you ship

FlintDart can get you productive quickly, but production reliability comes from the basics.

## Production checklist

- set a strong `JWT_SECRET`
- confirm `DB_*` values for production
- disable debug-only defaults
- configure session behavior intentionally
- verify CORS and auth routes
- enable log rotation/retention
- test database connectivity from the deploy host
- run a smoke test after deploy

## Example smoke test flow

1. Open `/` and `/guides`
2. Hit a health or test API route
3. Test sign-in flow
4. Create/read one DB-backed record
5. Check logs for warnings/errors

## Why this matters

Most deployment issues are configuration issues, not framework issues. A checklist prevents repeat mistakes and helps teams deploy consistently.
''',
      'author': 'Ops',
      'tag': 'Deployment',
      'published_at': DateTime(2026, 2, 15).toIso8601String(),
    });

    await qb.insert({
      'title': 'Sessions vs Cache in FlintDart: Use the Right Tool',
      'slug': 'sessions-vs-cache-right-tool',
      'excerpt':
          'Sessions and cache solve different problems. Here is a simple rule set for choosing correctly.',
      'body': '''# Sessions vs Cache in FlintDart: Use the Right Tool

## Short version

- Session = user-specific state
- Cache = reusable computed data

## Session examples

- flash messages after a form submit
- authenticated user session state
- multi-step form progress (short-lived)

## Cache examples

- expensive dashboard summaries
- frequently requested public data
- rendered fragments or query results

## What goes wrong when they are mixed up

If you store user-specific data in cache keys that are too broad, users can see stale or incorrect data.

If you store shared computed data in sessions, you lose reuse and increase memory usage.

## Practical rule

Ask: "Is this value tied to one user session?"

- Yes -> session
- No -> cache

That simple question prevents a lot of subtle bugs.
''',
      'author': 'Docs Team',
      'tag': 'Guide',
      'published_at': DateTime(2026, 2, 12).toIso8601String(),
    });

    await qb.insert({
      'title': 'Introducing Role-Based Publishing in Flint',
      'slug': 'role-based-publishing',
      'excerpt':
          'Learn how to protect authoring routes with role guards and policy checks.',
      'body':
          'Role-based publishing lets you define who can create or publish content. '
          'In Flint, you can implement this by attaching a middleware that checks '
          'the authenticated user role against an allowlist. This pattern keeps your '
          'authoring routes safe while keeping read access public.\n\n'
          'Start by adding a role column on users, then create a RoleGuard middleware '
          'that rejects requests without the required role. Apply it to post creation '
          'routes and you have a simple, effective permissions system.',
      'author': 'Flint Core Team',
      'tag': 'Release',
      'published_at': DateTime(2026, 3, 12).toIso8601String(),
    });

    await qb.insert({
      'title': 'Building a Q&A Workflow with Flint',
      'slug': 'qa-workflow',
      'excerpt':
          'Design question, answer, and comment flows with clean routing patterns.',
      'body':
          'A Q&A workflow benefits from clear route design and consistent validation. '
          'Use dedicated endpoints for questions and answers, and attach role guards '
          'to protect write access. Pair that with QueryBuilder filters and you have '
          'a fast, maintainable API.\n\n'
          'This guide walks through building the main flows and structuring controllers '
          'to keep responsibilities clean.',
      'author': 'Docs Team',
      'tag': 'Guide',
      'published_at': DateTime(2026, 2, 28).toIso8601String(),
    });

    await qb.insert({
      'title': 'Scaling APIs with QueryBuilder',
      'slug': 'query-builder-scaling',
      'excerpt': 'Pagination, filtering, and eager loading patterns that scale.',
      'body':
          'QueryBuilder provides a fluent API for common database tasks. To scale, '
          'combine pagination, filters, and eager loading where possible. Be careful '
          'to keep your WHERE clauses selective and use proper indexes.\n\n'
          'This article covers practical patterns for building fast endpoints.',
      'author': 'Flint Core Team',
      'tag': 'Deep Dive',
      'published_at': DateTime(2026, 2, 10).toIso8601String(),
    });

    await qb.insert({
      'title': 'Production-Ready Auth with JWT and Sessions',
      'slug': 'auth-jwt-sessions',
      'excerpt': 'Combine JWT and session workflows for secure deployments.',
      'body':
          'JWTs are great for stateless APIs, while sessions are convenient for server '
          'rendered workflows. You can use both depending on the endpoint. Flint supports '
          'JWT auth via Auth helpers and session management via SessionManager.\n\n'
          'This guide explains how to choose the right approach for each use case.',
      'author': 'Security',
      'tag': 'Security',
      'published_at': DateTime(2026, 1, 22).toIso8601String(),
    });

    Log.debug('BlogPostSeeder ran successfully.');
  }
}
