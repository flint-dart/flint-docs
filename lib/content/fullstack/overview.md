# Flint Dart Full-Stack Web Framework

**Flint Dart** is the first official, full-stack, declarative, SEO-first Dart web framework created by Eulogia Technologies. It unifies backend server routes, server-side rendering, declarative UI components, secure database gateways, authentication, and background jobs into one cohesive Dart codebase.

---

## 1. Architecture Overview

Flint Dart eliminates context switching between backend servers and frontend frameworks. With Flint Dart, your models, schemas, validators, business logic, and UI components are all written in pure Dart.

```
┌────────────────────────────────────────────────────────┐
│                   Flint Dart Full-Stack                │
├──────────────────────────┬─────────────────────────────┤
│      Server Engine       │       Web UI Engine         │
│  - Fast HTTP Routing     │  - Declarative Components   │
│  - Middleware Pipeline   │  - Reactive State Signals   │
│  - Controller Dispatch   │  - 2D Canvas & 3D WebGL     │
│  - WebSocket Hub         │  - Typed CSS & Tokens       │
├──────────────────────────┴─────────────────────────────┤
│                 Data & Security Layer                  │
│  - Secure DB API Gateway (Row-Level Security)          │
│  - Fluent ORM, Migrations & Transactions               │
│  - JWT & Session Auth (bcrypt password hashing)        │
│  - Automatic SEO Meta & Server-Side Rendering (SSR)    │
└────────────────────────────────────────────────────────┘
```

---

## 2. Fast HTTP Server & Routing

Flint Dart provides an intuitive routing API supporting route groups, middleware chaining, JSON responses, and server-rendered HTML pages.

```dart
import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint();

  // Middleware pipeline
  app.use(CorsMiddleware());
  app.use(SecurityMiddleware());

  // REST API Route
  app.get('/api/health', (ctx) async {
    return ctx.res?.json({'status': 'healthy', 'uptime': '99.99%'});
  });

  // Server-Rendered UI Page
  app.get('/dashboard', (ctx) async {
    return ctx.res?.page(
      'DashboardPage',
      title: 'Analytics Dashboard',
      props: {'user': ctx.req.session['user']},
    );
  });

  app.listen(port: 8080);
}
```

---

## 3. Declarative Web UI Engine (`package:flint_dart/ui.dart`)

Build modern browser interfaces with declarative Dart components, typed styling, and reactive signals.

```dart
import 'package:flint_dart/ui.dart';

class CounterWidget extends StatelessComponent {
  final count = StateSignal<int>(0);

  @override
  View build() {
    return StateSignalListener(count, (value) {
      return Container(
        dartStyle: const DartStyle(
          display: Display.flex,
          alignItems: AlignItems.center,
          gap: 12,
          padding: EdgeInsets.all(16),
          radius: 8,
          background: Color.rgba(15, 23, 42, 0.8),
        ),
        children: [
          Text.h3('Count: $value'),
          Button(
            child: 'Increment',
            onPressed: (_) => count.value++,
          ),
        ],
      );
    });
  }
}
```

---

## 4. First-Class SEO & Server-Side Rendering (SSR)

Every Flint UI page is instantly rendered into static HTML on the server before client hydration, guaranteeing blazing fast First Contentful Paint (FCP) and full indexability by Google and OpenGraph crawlers.

```dart
return ctx.res?.page(
  'ProductDetails',
  title: 'Solar Rover V2 - Flint Hardware',
  meta: MetaConfig(
    description: 'Autonomous exploration rover with dual HC-SR04 obstacle detection.',
    openGraph: {
      'og:title': 'Solar Rover V2',
      'og:image': 'https://flintdart.dev/images/rover.png',
    },
  ),
  props: {'product': product.toJson()},
);
```

---

## 5. Secure Database API Gateway (`package:flint_dart/db_api.dart`)

Expose database models directly over secure REST APIs with built-in Row-Level Security (RLS), attribute concealed fields, and AST query compilers:

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/db_api.dart';

void main() {
  final app = Flint();

  final dbApi = FlintDatabaseApi(
    resources: [
      Todo().resource,      // Protected with owner-level isolation automatically
      Project().resource,
    ],
  );

  dbApi.register(app);
  app.listen(port: 8080);
}
```

---

## 6. Fluent ORM, Migrations & Database Drivers

Flint Dart supports PostgreSQL, MySQL, and SQLite out of the box with schema migrations and transactions.

```dart
// Run complex transactions safely
await DB.transaction((tx) async {
  final user = await tx.table('users').insertGetId({
    'name': 'Alex',
    'email': 'alex@example.com',
  });

  await tx.table('profiles').insert({
    'user_id': user,
    'bio': 'Full-stack Dart engineer',
  });
});
```

---

## 7. Built-in Authentication & Security

Includes battle-tested authentication out of the box:
- **JWT & Session Auth**: Token signing, expiration, and refresh rotations.
- **Bcrypt Hashing**: Secure salted password hashing.
- **CSRF & CORS Protection**: Built-in headers and cross-origin controls.
- **Rate Limiting**: Defend endpoints against brute-force attacks.

```dart
// Authenticate user with bcrypt verification & JWT generation
final result = await Auth.login(email, password);
final token = result['token'];
```

---

## 8. CLI Tooling & Instant Hot Reload

Flint CLI makes managing fullstack applications effortless:

```bash
# Start dev server with instant worker hot reload
flint run

# Create a new UI page component
flint make:page Dashboard

# Compile production bundles with precompressed gzip/brotli assets
flint build --release

# Run database migrations
flint db:migrate
```
