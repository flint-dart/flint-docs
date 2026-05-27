## The Flint Story

Flint Dart began in a classroom with a practical goal: help developers understand how the web works before asking them to trust a framework.

The first lessons were about requests, responses, routes, and backend fundamentals. Over time, that teaching foundation grew into a production-minded full-stack Dart ecosystem for building real applications with a clear mental model.

### Learning from other frameworks

Flint was shaped by studying the tools Dart developers already use and respect.

Dart Frog showed how simple and direct server-side Dart can feel. It proved that routing and request handling in Dart can be clean, approachable, and fast to understand.

Serverpod showed the power of an integrated backend system. Its structure, tooling, and generated workflows are valuable for teams building large applications with strong conventions.

Vania brought a familiar full-stack backend experience to Dart, with ideas that feel comfortable to developers coming from established web frameworks.

Flint learns from that landscape while choosing its own path. It is inspired by the developer experience of frameworks like Laravel, Next.js, and Rails: productive defaults, clear structure, and enough convention to move quickly.

### Why Flint exists

Flint exists for developers who want structure without mystery.

A framework should help you move faster, but it should not make your own app feel hidden from you. Flint gives projects a familiar shape: routes, controllers, models, middleware, views, and UI components, all written as readable Dart.

Flint is built around that balance:

- productive enough for real applications
- clear enough for learning and onboarding
- structured enough for teams
- visible enough that the framework never feels like magic

### What makes Flint different

Many frameworks begin with abstraction. Flint begins with understanding.

In Flint, the important parts of your application stay visible.

A route should still look like a route.
A controller should still feel like a Dart class.
A request should still feel like a request.
A response should still feel like a response.

The framework helps you move faster without disconnecting you from what your application is doing underneath.

That philosophy extends across the entire stack:

- Flint Dart keeps backend architecture understandable.
- Flint UI keeps frontend development inside Dart.
- The CLI reduces repetition without hiding the generated code.
- Models, middleware, validation, and state remain readable as applications grow.

That balance between clarity and capability is what defines Flint.

### What that means in practice

Routes should be clear. A route should show what URL is being handled and what response is returned.

```dart
app.get('/health', (req, res) {
  return res.json({
    'status': 'ok',
    'framework': 'Flint Dart',
  });
});
```

Controllers should be normal Dart classes. As an application grows, route logic can move into controllers without becoming hard to follow.

```dart
class UserController {
  Future<Response> index(Request req, Response res) async {
    final users = await User().all();

    return res.json({
      'data': users,
    });
  }
}
```

Models should be easy to explain. A model should make the relationship between Dart code and application data feel direct.

```dart
import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class User extends Model<User> {
  User() : super(() => User());

  String? get name => getAttribute('name');
  String? get email => getAttribute('email');
  String? get role => getAttribute('role');

  @override
  Table get table => Table(
        name: 'users',
        columns: [
          Column(name: 'name', type: ColumnType.string, length: 255),
          Column(name: 'email', type: ColumnType.string, length: 255),
          Column(name: 'role', type: ColumnType.string, length: 50),
        ],
      );
}
```

Middleware should be visible in the request flow. Developers should be able to see how a request is checked, changed, or stopped before it reaches the main handler.

```dart
class AuthMiddleware extends Middleware {
  @override
  Future<Response?> handle(Request req, Response res) async {
    final user = await req.user;

    if (user == null) {
      return res.status(401).json({'message': 'Unauthorized'});
    }

    return null;
  }
}
```

The CLI should help developers without hiding the framework. Commands can create files, reduce repetition, and keep projects consistent.

```bash
flint make:controller UserController
flint make:model User
flint run
```

Flint UI should make frontend development possible in Dart. A component can hold state, render UI, and respond to events without forcing the developer to leave the Dart ecosystem.

```dart
class CounterCard extends Component {
  int count = 0;

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(20),
        radius: 12,
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

### From HTTP to full-stack Dart

Flint starts with the core of the web: a request comes in, Dart code runs, and a response goes out.

From there, it grows into the pieces modern applications need: routing, controllers, middleware, validation, authentication, sessions, caching, database models, table sync, views, deployment, and interactive UI.

Flint Dart handles the server. Flint UI brings the frontend into the same language. Together, they create a Dart-first workflow where backend and frontend code share the same mental model.

### Built with Flint

Flint is already being used to build real projects, not only examples.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:22px 0 24px;">
<article style="display:grid;gap:10px;padding:18px;border:1px solid rgba(30,41,59,1);border-radius:14px;background:linear-gradient(180deg,rgba(15,23,42,0.92),rgba(3,7,18,0.78));box-shadow:0 18px 45px rgba(2,6,23,0.2);">
<span style="width:max-content;padding:4px 8px;border-radius:999px;background:rgba(52,211,153,0.1);color:#a7f3d0;font-size:11px;font-weight:800;">Hosting</span>
<strong style="display:block;color:#f8fafc;font-size:18px;">Eucloudhost</strong>
<p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.65;">A hosting platform built with Flint for real product workflows and cloud services.</p>
</article>
<article style="display:grid;gap:10px;padding:18px;border:1px solid rgba(30,41,59,1);border-radius:14px;background:linear-gradient(180deg,rgba(15,23,42,0.92),rgba(3,7,18,0.78));box-shadow:0 18px 45px rgba(2,6,23,0.2);">
<span style="width:max-content;padding:4px 8px;border-radius:999px;background:rgba(125,211,252,0.1);color:#7dd3fc;font-size:11px;font-weight:800;">Education</span>
<strong style="display:block;color:#f8fafc;font-size:18px;">Stucoach</strong>
<p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.65;">An education-focused product shaped by Flint's clear full-stack Dart workflow.</p>
</article>
<article style="display:grid;gap:10px;padding:18px;border:1px solid rgba(30,41,59,1);border-radius:14px;background:linear-gradient(180deg,rgba(15,23,42,0.92),rgba(3,7,18,0.78));box-shadow:0 18px 45px rgba(2,6,23,0.2);">
<span style="width:max-content;padding:4px 8px;border-radius:999px;background:rgba(251,191,36,0.1);color:#fbbf24;font-size:11px;font-weight:800;">Production</span>
<strong style="display:block;color:#f8fafc;font-size:18px;">Eulogia</strong>
<p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.65;">A production application built around Flint's backend structure and Dart-first approach.</p>
</article>
<article style="display:grid;gap:10px;padding:18px;border:1px solid rgba(30,41,59,1);border-radius:14px;background:linear-gradient(180deg,rgba(15,23,42,0.92),rgba(3,7,18,0.78));box-shadow:0 18px 45px rgba(2,6,23,0.2);">
<span style="width:max-content;padding:4px 8px;border-radius:999px;background:rgba(167,139,250,0.1);color:#c4b5fd;font-size:11px;font-weight:800;">Docs</span>
<strong style="display:block;color:#f8fafc;font-size:18px;">Flint Docs</strong>
<p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.65;">The official documentation site, built with Flint Dart and Flint UI.</p>
</article>
</div>

These projects show the direction of Flint: a framework that begins with clear fundamentals and grows into real application work.

### The promise

Flint is not trying to replace the tools that inspired it. They are strong projects with their own goals, communities, and design choices.

Flint exists for a specific path: build full-stack Dart applications where the important pieces stay visible. It gives developers a productive framework without asking them to surrender understanding.

Start with the request. Understand the response. Then grow into a real app one visible piece at a time.
