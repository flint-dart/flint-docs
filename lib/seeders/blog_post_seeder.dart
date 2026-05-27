import 'package:flint_dart/db.dart';
import 'package:flint_dart/logs.dart';

class BlogPostSeeder {
  static Future<void> run() async {
    if (!DB.isConnected) {
      await DB.autoConnect();
    }

    for (final post in _posts) {
      final existing = await (QueryBuilder(table: 'blog_posts')
            ..where('slug', '=', post['slug']))
          .first();

      if (existing == null) {
        await QueryBuilder(table: 'blog_posts').insert(post);
      } else {
        await (QueryBuilder(table: 'blog_posts')
              ..where('slug', '=', post['slug']))
            .update(post);
      }
    }

    Log.debug('BlogPostSeeder synced ${_posts.length} blog posts.');
  }
}

final List<Map<String, dynamic>> _posts = [
  {
    'title': 'Introducing Role-Based Publishing in Flint',
    'slug': 'role-based-publishing',
    'excerpt':
        'A practical look at protecting write actions with roles while keeping public pages fast and readable.',
    'body': _roleBasedPublishing,
    'author': 'Flint Core Team',
    'tag': 'Release',
    'published_at': DateTime(2026, 3, 12).toIso8601String(),
  },
  {
    'title': 'Building a Q&A Workflow with Flint',
    'slug': 'qa-workflow',
    'excerpt':
        'How the questions feature is structured with clear routes, models, controllers, and guarded answer flows.',
    'body': _qaWorkflow,
    'author': 'Docs Team',
    'tag': 'Guide',
    'published_at': DateTime(2026, 2, 28).toIso8601String(),
  },
  {
    'title': 'Controller Request Scope in FlintDart',
    'slug': 'controller-request-scope-usecontroller',
    'excerpt':
        'Why request-scoped controllers make concurrent apps safer and keep controller state tied to one request.',
    'body': _controllerScope,
    'author': 'Flint Core Team',
    'tag': 'Architecture',
    'published_at': DateTime(2026, 2, 26).toIso8601String(),
  },
  {
    'title': 'Route Groups: Organize APIs Before They Get Messy',
    'slug': 'route-groups-organize-apis',
    'excerpt':
        'Use route groups to keep growing Flint applications organized by feature, team, and request boundary.',
    'body': _routeGroups,
    'author': 'Docs Team',
    'tag': 'Architecture',
    'published_at': DateTime(2026, 2, 24).toIso8601String(),
  },
  {
    'title': 'Request Validation: Fail Fast and Return Better Errors',
    'slug': 'request-validation-fail-fast',
    'excerpt':
        'Move validation to the request boundary so controllers stay small and API errors stay consistent.',
    'body': _requestValidation,
    'author': 'Docs Team',
    'tag': 'Guide',
    'published_at': DateTime(2026, 2, 21).toIso8601String(),
  },
  {
    'title': 'WebSockets in Flint: Keep the Route, Move the Logic',
    'slug': 'websockets-http-route-realtime-logic',
    'excerpt':
        'A clean mental model for real-time features: the route accepts the socket, handlers coordinate events, services own work.',
    'body': _webSockets,
    'author': 'Realtime Team',
    'tag': 'Deep Dive',
    'published_at': DateTime(2026, 2, 18).toIso8601String(),
  },
  {
    'title': 'Deploying Flint Apps: A Production Checklist',
    'slug': 'deploying-flintdart-production-checklist',
    'excerpt':
        'A practical checklist for environment config, database readiness, sessions, auth, logs, and smoke tests.',
    'body': _deploymentChecklist,
    'author': 'Ops',
    'tag': 'Deployment',
    'published_at': DateTime(2026, 2, 15).toIso8601String(),
  },
  {
    'title': 'Sessions vs Cache: Use the Right Tool',
    'slug': 'sessions-vs-cache-right-tool',
    'excerpt':
        'Sessions and cache both store data, but they solve different production problems. Here is the simple rule.',
    'body': _sessionsVsCache,
    'author': 'Docs Team',
    'tag': 'Guide',
    'published_at': DateTime(2026, 2, 12).toIso8601String(),
  },
  {
    'title': 'Scaling APIs with QueryBuilder',
    'slug': 'query-builder-scaling',
    'excerpt':
        'Pagination, filtering, ordering, and indexing patterns for cleaner Flint API endpoints.',
    'body': _queryBuilderScaling,
    'author': 'Flint Core Team',
    'tag': 'Deep Dive',
    'published_at': DateTime(2026, 2, 10).toIso8601String(),
  },
  {
    'title': 'Production-Ready Auth with JWT and Sessions',
    'slug': 'auth-jwt-sessions',
    'excerpt':
        'How to choose between token auth and sessions, and when a Flint app can use both together.',
    'body': _authJwtSessions,
    'author': 'Security',
    'tag': 'Security',
    'published_at': DateTime(2026, 1, 22).toIso8601String(),
  },
];

const _roleBasedPublishing = '''# Introducing Role-Based Publishing in Flint

Public reading and protected writing are common in real products.

A documentation site may let everyone read articles, but only contributors can publish. A community app may let visitors browse questions, but require an account before posting an answer. Flint keeps that pattern explicit: routes stay visible, roles stay simple, and controllers decide what happens next.

## The shape of the feature

In Flint Docs, blog publishing is protected by the user role. The page can be public, but the create action checks the authenticated user before it writes anything.

```dart
Future<Response> store() async {
  final user = await req.user;
  if (user == null) {
    return res.status(401).json({'error': 'Unauthorized'});
  }

  final role = user['role']?.toString();
  if (!docs.canWriteBlogRole(role)) {
    return res.status(403).json({'error': 'Forbidden'});
  }

  final data = await req.validate({
    'title': 'required|string|min:6',
    'tag': 'required|string',
    'body': 'required|string|min:40',
  });

  final post = await BlogPost().create({
    'title': data['title'],
    'slug': await docs.uniqueBlogSlug(data['title'].toString()),
    'excerpt': docs.excerptFromMarkdown(data['body'].toString()),
    'body': data['body'],
    'author': user['name'] ?? user['email'] ?? 'Anonymous',
    'tag': data['tag'],
    'published_at': DateTime.now().toIso8601String(),
  });

  return res.redirect('/blog/\${post?.slug}');
}
```

The important part is not only the role check. It is where the check lives. The controller receives the request, checks the user, validates the body, creates the model, and redirects. Nothing is hidden from the developer.

## Roles should be boring

Role systems become hard when they try to become policy engines too early. Flint starts with a simple rule: make the common path readable first.

```dart
bool canWriteBlogRole(String? role) {
  return role == 'admin' || role == 'contributor';
}
```

That function can grow later. It can move into a policy class. It can check teams, ownership, subscriptions, or organization membership. But the first version stays easy to explain and easy to test.

## Good defaults for real apps

For production, role-based publishing should also include:

- validation at the request boundary
- clear 401 and 403 responses
- server-side checks even if the UI hides the button
- stable slugs for published content
- audit-friendly fields like author and published date

Flint does not need to hide those pieces. The framework gives structure, while the application code remains visible.

That is the goal of role-based publishing in Flint: a small feature that teaches the shape of serious application security.
''';

const _qaWorkflow = '''# Building a Q&A Workflow with Flint

A good Q&A feature looks simple on the surface: list questions, show one question, let signed-in users answer.

Under the surface, it exercises many parts of a real web application. You need routes, controllers, models, validation, authorization, readable URLs, and a UI that changes based on the current session. That makes it a useful example for learning how Flint applications are shaped.

## Start with the routes

The route file should tell the story quickly. A developer should be able to open it and understand the feature without jumping through generated files.

```dart
class QuestionRoutes extends RouteGroup {
  @override
  void register(Flint app) {
    final questions = app.controller(QuestionsController.new);

    questions.get('/questions', (c) => c.index());
    questions.get('/questions/ask', (c) => c.ask());
    questions.post('/questions/ask', (c) => c.store());
    questions.get('/questions/:slug', (c) => c.show());
    questions.post('/questions/:slug/answers', (c) => c.storeAnswer());
  }
}
```

This is the first design rule: routes should be obvious. The URL, HTTP method, and controller action should all be visible.

## Keep the model close to the data

The question model describes the table and exposes the fields the rest of the app reads.

```dart
class Question extends Model<Question> {
  Question() : super(() => Question());

  String? get title => getAttribute('title');
  String? get slug => getAttribute('slug');
  String? get body => getAttribute('body');
  String? get author => getAttribute('author');
  String? get tag => getAttribute('tag');

  @override
  Table get table => Table(
        name: 'questions',
        columns: [
          Column(name: 'title', type: ColumnType.string, length: 255),
          Column(name: 'slug', type: ColumnType.string, length: 255),
          Column(name: 'body', type: ColumnType.text),
          Column(name: 'author', type: ColumnType.string, length: 255),
          Column(name: 'tag', type: ColumnType.string, length: 100),
          Column(name: 'published_at', type: ColumnType.timestamp),
        ],
      );
}
```

There is no separate file format to explain before the model makes sense. The table is Dart. The fields are Dart. The relationship between code and database stays visible.

## Controllers own the request behavior

The controller decides what the current user can do. If the user is not signed in, Flint can show an auth panel. If the user is signed in, the same page can show the answer form.

```dart
Future<Response> show() async {
  final question = await Question().firstWhere('slug', req.param('slug'));
  if (question == null) return res.status(404).send('Question not found');

  final user = await req.user;
  final answers = await docs.fetchAnswersForQuestion(
    question.toMap(),
    user?['id']?.toString(),
    user?['name']?.toString(),
    user?['email']?.toString(),
  );

  return res.page('QuestionDetail', props: {
    ...await docs.baseData(req),
    'question': docs.toQuestionViewModel(question.toMap()),
    'answers': answers,
    'canAnswer': user != null,
  });
}
```

That is enough structure for a real feature, but not so much structure that the request disappears.

## The frontend can stay in Dart

The question detail page is a Flint UI component. It reads props from the server, renders the question, then chooses whether to show an answer form or a sign-in panel.

```dart
class QuestionDetailPage extends Component {
  QuestionDetailPage(this.props);

  final Map<String, dynamic> props;

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(display: Display.grid, gap: 22),
        children: [
          _questionCard(),
          _answersList(),
          if (props['isAuthenticated'] == true)
            _answerForm()
          else
            AuthPanel(title: 'Sign in to answer', body: 'Join the discussion.'),
        ],
      ),
    );
  }
}
```

The full feature stays in one language: route, controller, model, and UI.

## Why this matters

Q&A is not just a demo. It is a pattern:

- public index pages
- SEO-friendly slugs
- signed-in write actions
- role-aware UI
- validation before database writes
- comments or answers attached to parent records

Once that pattern is clear, the same structure can power docs discussions, support forums, blog comments, product feedback, and internal knowledge bases.

Flint is designed for that path: start with understandable HTTP, then grow into a real product feature one visible piece at a time.
''';

const _controllerScope = '''# Controller Request Scope in FlintDart

Controllers are where request behavior becomes readable. They let you move route logic into named methods without losing the shape of the request.

But there is one important production detail: controller state must belong to one request, not every request.

## The risk with shared controller instances

This code looks clean at first:

```dart
final controller = OrdersController();

app.get('/orders', controller.index);
```

The problem is that one controller instance can now serve many requests. If the controller stores request-specific state, two users can accidentally affect each other.

```dart
class OrdersController {
  String? currentUserId;

  Future<Response> index(Request req, Response res) async {
    final user = await req.user;
    currentUserId = user?['id']?.toString();

    await Future.delayed(Duration(milliseconds: 50));

    return res.json({'userIdUsed': currentUserId});
  }
}
```

If request A sets `currentUserId`, then request B changes it before request A finishes, request A can return the wrong value. That is the kind of bug that is hard to see in development and painful in production.

## Request-scoped controllers

Flint's controller flow is built to avoid that class of bug. A controller is created and bound to the current request, then released after the action finishes.

```dart
class OrdersController extends Controller {
  Future<Response> index() async {
    final user = await req.user;
    final orders = await Order().where('user_id', user?['id']).get();

    return res.json({'data': orders});
  }
}
```

The route can stay clean:

```dart
final orders = app.controller(OrdersController.new);

orders.get('/orders', (c) => c.index());
```

The controller reads like normal Dart, but `req` and `res` are tied to the current request.

## Why Flint does this

Request scope gives the framework a safer lifecycle:

- each request gets its own controller context
- controller state cannot leak across users
- middleware and auth helpers can bind consistently
- WebSocket and HTTP handlers can share a clearer mental model

The goal is not magic. The goal is a safer default that still looks like Dart when you open the file.

## Practical rule

Use controllers for orchestration. Keep request-specific values local to the action unless they are deliberately part of the controller lifecycle.

That one habit keeps Flint apps easier to reason about as traffic and teams grow.
''';

const _routeGroups = '''# Route Groups: Organize APIs Before They Get Messy

Small applications can keep every route in one file.

Real applications rarely stay small. Auth arrives. Admin pages arrive. Billing, docs, questions, uploads, dashboards, and API endpoints all start competing for space. A flat route file becomes hard to scan, and a hard-to-scan route file becomes easy to break.

Route groups give each feature a clear home.

## A route group owns one feature

```dart
class BlogRoutes extends RouteGroup {
  @override
  void register(Flint app) {
    final blog = app.controller(BlogController.new);

    blog.get('/blog', (c) => c.index());
    blog.get('/blog/create', (c) => c.create());
    blog.post('/blog/create', (c) => c.store());
    blog.get('/blog/:slug', (c) => c.show());
    blog.post('/blog/:slug/comments', (c) => c.storeComment());
  }
}
```

This file does not need to explain the whole app. It only explains the blog.

## Compose route groups at the app boundary

```dart
class AppRoutes extends RouteGroup {
  @override
  void register(Flint app) {
    app.routes(HomeRoutes());
    app.routes(BlogRoutes());
    app.routes(QuestionRoutes());
    app.routes(DocsRoutes());
  }
}
```

That composition is easy to teach and easy to review. The main route file becomes a map of the application, while each feature route file owns the details.

## Why it scales

Route groups help with:

- code review, because route changes are feature-local
- onboarding, because developers can find the feature quickly
- testing, because route ownership is clear
- team work, because fewer people edit the same giant file
- production debugging, because URL patterns match feature boundaries

## Keep routes thin

Routes should point to behavior. Controllers should own behavior.

```dart
final questions = app.controller(QuestionsController.new);

questions.get('/questions', (c) => c.index());
questions.post('/questions/ask', (c) => c.store());
```

That is the balance Flint aims for: the routing layer is visible, but it does not become the entire application.
''';

const _requestValidation =
    '''# Request Validation: Fail Fast and Return Better Errors

Every write endpoint has a boundary. Data enters the application, and the controller has to decide whether it is safe to continue.

If that decision is scattered through service code, the app becomes harder to reason about. Flint encourages validation at the request boundary so controllers can fail early and return predictable errors.

## Without validation

Manual checks work, but they grow badly:

```dart
app.post('/users', (req, res) async {
  final body = await req.body();

  if (body['email'] == null || body['email'].toString().isEmpty) {
    return res.status(422).json({'email': 'Email is required'});
  }

  if (!body['email'].toString().contains('@')) {
    return res.status(422).json({'email': 'Email is invalid'});
  }

  return res.json({'ok': true});
});
```

The controller starts caring about every field detail. That makes the real behavior harder to see.

## With Flint validation

```dart
Future<Response> store() async {
  final data = await req.validate({
    'name': 'required|string|min:2',
    'email': 'required|email',
    'password': 'required|string|min:8',
  });

  final user = await User().create(data);
  return res.json({'data': user?.toMap()}, status: 201);
}
```

Now the controller reads in order:

1. validate the request
2. create the model
3. return the response

That is the request lifecycle, visible in Dart.

## Better errors are part of the API

Validation is not only for security. It is part of the developer experience of your API. A good validation response tells the client exactly what went wrong.

```dart
try {
  final data = await req.validate({
    'title': 'required|string|min:6',
    'body': 'required|string|min:40',
  });

  return res.json({'data': data});
} on ValidationException catch (e) {
  return res.status(422).json({
    'status': 'errors',
    'errors': e.errors,
  });
}
```

## The rule

Validate before the application does work.

That rule protects models, keeps services cleaner, and makes frontend errors easier to display. In Flint, the request boundary stays obvious, so validation belongs there.
''';

const _webSockets = '''# WebSockets in Flint: Keep the Route, Move the Logic

Realtime features are exciting, but they can become messy quickly.

The common mistake is putting everything inside the socket closure: authentication, validation, database writes, broadcasting, formatting, and business rules. It works for a prototype, but it becomes hard to maintain.

Flint's mental model is simple: the route accepts the connection, handlers coordinate events, and services own the real work.

## A small socket route

```dart
app.websocket('/chat', (ctx) {
  final socket = ctx.socket;

  socket?.on('ping', (_) {
    socket.emit('pong', {'ok': true});
  });

  socket?.on('message', (payload) async {
    await ChatService().send(socket, payload);
  });
});
```

The route is still visible. The WebSocket endpoint is easy to find. But the feature logic does not have to live inside one growing closure.

## Move business logic into services

```dart
class ChatService {
  Future<void> send(dynamic socket, dynamic payload) async {
    final data = MessageValidator.validate(payload);
    final message = await Message().create(data);

    socket.emit('message.created', {
      'id': message?.getAttribute('id'),
      'body': message?.getAttribute('body'),
    });
  }
}
```

This is the same pattern you use for HTTP controllers: thin orchestration at the edge, reusable logic underneath.

## Keep HTTP thinking visible

Even with WebSockets, the important questions are familiar:

- who is connecting?
- what event is being received?
- what data is valid?
- what response or broadcast should be sent?
- what should be stored?

Flint does not need realtime code to feel like a separate world. It can follow the same visible structure as the rest of the app.

## Production notes

For production realtime features, plan for:

- authentication before accepting sensitive events
- validation on every payload
- rate limits for high-volume events
- clear event names
- small services for database writes and broadcasts

Realtime code should be fast to understand when something goes wrong. That is the design bar Flint aims for.
''';

const _deploymentChecklist = '''# Deploying Flint Apps: A Production Checklist

Production readiness is usually not one big secret. It is a collection of small decisions made carefully.

Flint gives you the structure to build quickly, but deployment still deserves a checklist. The goal is to make every environment predictable: local, staging, and production.

## Environment values

Start by checking the values your app needs to boot.

```env
PORT=3030
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=flint_docs
DB_USER=root
DB_PASSWORD=secret
JWT_SECRET=change-me
SESSION_DRIVER=memory
```

Do not ship weak secrets. Do not assume local database values match production. Configuration is part of the application.

## Database readiness

Before traffic reaches the app, confirm the database exists and migrations have run.

```bash
flint db:migrate --create-db
dart run lib/seeders/seeder.dart
```

The migration command should help, but the result should still be understandable: tables are created, columns are synced, and seed data appears where expected.

## Auth and session checks

Run a real sign-in flow after deployment.

1. create an account
2. sign in
3. refresh the page
4. confirm the UI changes
5. test a protected write action

This catches cookie, session, and proxy issues early.

## Smoke test public pages

At minimum, open:

- `/`
- `/guides`
- `/api`
- `/blog`
- `/questions`
- one blog slug
- one question slug

These pages test routing, database reads, server-rendered props, and Flint UI hydration.

## Logs matter

Production logs should answer simple questions:

- did the app boot?
- did the database connect?
- did migrations run?
- are requests failing?
- are auth errors expected or broken?

Deployments become calmer when logs are useful.

## The practical promise

A Flint app should not be mysterious in production. The same pieces you learned locally should be the pieces you verify after deployment: request, response, route, controller, model, UI, and database.
''';

const _sessionsVsCache = '''# Sessions vs Cache: Use the Right Tool

Sessions and cache both store data, but they should not be used for the same reason.

A session belongs to a user. Cache belongs to reuse.

That one sentence prevents many subtle bugs.

## Use sessions for user-specific state

Sessions are right when the value belongs to one browser or one signed-in user.

```dart
await req.startSession({
  'id': user.id,
  'email': user.email,
  'role': user.role,
});
```

Good session examples:

- authenticated user data
- short-lived form progress
- flash messages after redirects
- role information for server-rendered UI

If another user should not see it, session is probably the better tool.

## Use cache for reusable work

Cache is right when the value can be reused safely.

```dart
final posts = await cache.remember('blog:index', Duration(minutes: 5), () {
  return BlogPost().latest().get();
});
```

Good cache examples:

- public blog indexes
- expensive dashboard summaries
- generated navigation data
- repeated API lookups

If many users can safely share the result, cache may be the better tool.

## What goes wrong

User data in cache can leak information if the key is too broad. Shared data in sessions wastes memory and prevents reuse.

The fix is not complicated. Before storing anything, ask:

> Is this value tied to one user session?

If yes, use session. If no, consider cache.

## Flint keeps both visible

Flint exposes sessions through the request and cache through explicit app utilities. You can see what your application stores and why.

That visibility matters. State bugs are easier to solve when the storage decision is clear in the code.
''';

const _queryBuilderScaling = '''# Scaling APIs with QueryBuilder

QueryBuilder exists for the common middle ground: you want clear database access, but you do not want every endpoint to become raw SQL.

It gives Flint apps a readable way to filter, order, paginate, and update data while keeping the query close to the controller or service that needs it.

## Start with clear filters

```dart
final posts = await (QueryBuilder(table: 'blog_posts')
      ..where('tag', '=', 'Guide')
      ..orderBy('published_at', 'DESC')
      ..limit(20))
    .get();
```

The query is not hidden. A developer can see the table, filter, order, and limit in one place.

## Pagination should return metadata

Clients need more than rows. They need to know whether another page exists.

```dart
Future<Response> index() async {
  final page = int.tryParse(req.queryParam('page') ?? '1') ?? 1;
  final perPage = 20;

  final query = QueryBuilder(table: 'questions')
    ..orderBy('published_at', 'DESC')
    ..limit(perPage)
    ..offset((page - 1) * perPage);

  final rows = await query.get();

  return res.json({
    'data': rows,
    'meta': {
      'page': page,
      'perPage': perPage,
      'hasMore': rows.length == perPage,
    },
  });
}
```

That response is easier for frontend code to consume and easier for API users to understand.

## Indexes are part of scaling

QueryBuilder can express the query, but the database still needs the right indexes.

If you frequently query by `slug`, `email`, `tag`, or `published_at`, those columns should be indexed in your schema strategy. A readable query does not replace database design.

## Keep controllers thin

When a query becomes part of a business workflow, move it into a small service or model helper.

```dart
class BlogRepository {
  Future<List<Map<String, dynamic>>> latestGuides() {
    return (QueryBuilder(table: 'blog_posts')
          ..where('tag', '=', 'Guide')
          ..orderBy('published_at', 'DESC')
          ..limit(10))
        .get();
  }
}
```

The controller can then focus on request behavior.

## The goal

QueryBuilder should make database work readable. It should not hide the database from you.

That is the Flint approach: helpful structure, visible behavior.
''';

const _authJwtSessions = '''# Production-Ready Auth with JWT and Sessions

Authentication is not one pattern for every endpoint.

Some parts of an app are better with sessions. Other parts are better with tokens. Flint supports both because full-stack applications often need both.

## Use sessions for browser flows

Server-rendered pages and Flint UI screens work naturally with sessions.

```dart
final result = await Auth.login(email, password);

if (result['user'] != null) {
  await req.startSession(Map<String, dynamic>.from(result['user']));
}

return res.json({'status': 'successful'});
```

After the session is created, the next page render can receive `isAuthenticated`, `currentUserLabel`, and role-based permissions as props.

That is ideal for:

- docs dashboards
- blog authoring
- questions and answers
- admin screens
- account settings

## Use JWT for API clients

JWTs are useful when a non-browser client needs stateless authentication.

```dart
final result = await Auth.login(email, password);

return res.json({
  'token': result['token'],
  'user': result['user'],
});
```

That pattern is useful for mobile apps, external clients, integrations, and APIs that do not rely on browser cookies.

## Do not confuse the two

Sessions are stored server-side and linked by a cookie. JWTs are carried by the client, usually in an authorization header.

Both can be secure. Both can be misused.

The decision should come from the client you are serving:

- browser pages: sessions are usually simpler
- public APIs: JWTs are often easier to integrate
- mixed apps: use both intentionally

## UI should react to auth state

In Flint Docs, the server sends auth state into the page props. Flint UI can then show the right action.

```dart
if (props['isAuthenticated'] == true)
  _commentForm()
else
  AuthPanel(title: 'Sign in to comment', body: 'Join the discussion.')
```

The UI does not guess. It responds to the server's view of the current request.

## Production checklist

Before shipping auth, verify:

- strong `JWT_SECRET`
- secure cookie settings behind HTTPS
- validation on register and login
- clear 401 responses
- role checks on the server
- UI refresh after login
- logout destroys the session

Authentication should feel boring in production. Boring auth is good auth.
''';
