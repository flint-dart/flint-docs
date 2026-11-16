# Flint Dart vs Jaspr

Both **Flint Dart** and **Jaspr** are modern Dart frameworks that render native HTML DOM elements (unlike traditional Flutter Web, which renders onto canvas elements). However, they are built with different scopes and architectural goals.

- **Jaspr** is a **frontend and SSR-focused framework** modeled directly on Flutter's widget and element tree.
- **Flint Dart** is a **batteries-included, full-stack application platform** combining a declarative Web DOM UI with an HTTP router, database ORM, background queues, WebSockets, and API generation.

---

## At a Glance

| Feature | **Flint Dart** | **Jaspr** |
| :--- | :--- | :--- |
| **Primary Scope** | Full-Stack (Frontend UI + Backend API + Database + Workers) | Frontend UI, Server-Side Rendering (SSR), and Static Sites (SSG) |
| **Architectural Model** | Full-stack platform (inspired by Laravel, Next.js, and Rails) | Flutter for the Web DOM (Component, Element, and Render trees) |
| **Output Target** | Native Web DOM elements (`div`, `input`, `form`, etc.) | Native Web DOM elements (`div`, `span`, custom tags) |
| **Form Inputs** | First-class `TextEditingController`, `FormController`, `FormErrors` | Component state (`setState`), standard web event handlers |
| **State Management** | Signals (`StateSignal`), Controllers, Stateful Components | InheritedComponent, Riverpod integration, Component State |
| **Styling** | Native CSS-in-Dart (`DartStyle`, theme tokens, style sheets) | CSS utility classes, styled components, or external CSS/Tailwind |
| **Backend & Routing** | Built-in HTTP router, controllers, route groups, and middleware | Relies on Shelf or external backend servers for endpoints |
| **Database & ORM** | Built-in ORM, query builders, migrations, and seeders | Bring your own (Drift, Postgres, Supabase, etc.) |
| **Background Queues** | Built-in durable queue workers (`QueueJob`, `FlintJobStore`) | None (requires external message queues or worker services) |
| **Realtime WebSockets** | Built-in typed WebSocket server and client dispatchers | Requires custom Shelf WebSocket implementations |
| **API Documentation** | Automatic OpenAPI / Swagger generation | None (manual specification or third-party packages) |

---

## Architectural Differences

### 1. Full-Stack Batteries-Included vs. Frontend Layer

* **Jaspr** focuses on rendering HTML components with Dart. If your application needs database connections, authentication sessions, file uploads, background emails, or background job queues, you must configure separate packages (such as Shelf, Drift, or external microservices).
* **Flint Dart** provides an entire unified application architecture:
  ```text
  lib/
    controllers/    # HTTP and API endpoint logic
    models/         # Database models and ORM queries
    routes/         # Route groups and route definitions
    jobs/           # Durable background queues and workers
    middlewares/    # Auth, session, and rate-limiting guards
    ui/             # Declarative Web DOM components and pages
  ```
  Everything shares the same data models and validation rules without code generators or serialization glue between separate backend and frontend projects.

---

### 2. Form Architecture & Input Performance

One of the most notable design distinctions between the two frameworks is how form inputs are handled:

* **Jaspr** follows Flutter's virtual element tree. Updating state during typing can cause parent components to re-run their build methods unless carefully isolated into sub-components.
* **Flint Dart** provides native **`TextEditingController`** and **`FormController`** primitives. When a `TextField` is bound to a controller:
  ```dart
  final TextEditingController nameController = TextEditingController();

  TextField(
    label: 'Account name',
    controller: nameController,
  )
  ```
  Input typing directly synchronizes with the browser's native DOM element in memory without triggering parent `build()` re-renders. Validation runs cleanly on submit (`onSave`), keeping typing smooth and preventing cursor jumping or re-render flashes.

---

### 3. Styling & Design System

* **Jaspr** typically integrates with external CSS files, Tailwind CSS setups, or CSS-in-JS style wrappers.
* **Flint Dart** features a built-in typed styling engine (`DartStyle`):
  ```dart
  Container(
    dartStyle: DartStyle(
      display: Display.flex,
      padding: const EdgeInsets.all(16),
      radius: 8,
      background: EuTheme.panel,
      border: Border(color: EuTheme.line),
    ),
    child: Text.p('Styled entirely in Dart'),
  )
  ```
  Design tokens, color palettes, responsive grids, and layout rules are verified at compile time with strong Dart types.

---

### 4. Background Workers & Realtime

Modern web applications frequently require background work that outlasts an HTTP request—such as sending emails, provisioning servers, or processing files.

* In **Jaspr**, background processing requires an external queue infrastructure (such as Redis with a separate daemon or cloud queue).
* In **Flint Dart**, queue jobs and isolate workers are built directly into the framework:
  ```dart
  class SendWelcomeEmailJob extends QueueJob {
    @override
    Future<void> handle(FlintJobContext context) async {
      // Runs durably in background worker
    }
  }
  ```
  Jobs can be dispatched with retries, exponential backoff, and database persistence with zero third-party services.

---

## Summary: When to Choose Each

### Choose Jaspr When:
1. You are building **static documentation, blogs, or marketing websites** where static site generation (SSG) and search engine optimization (SEO) are your primary requirements.
2. Your backend is already built in another language (Node.js, Go, Python) or hosted on a BaaS (Firebase, Supabase), and you only need a Dart-powered frontend.
3. Your team is composed primarily of Flutter mobile engineers who want an exact replica of the Flutter widget tree for simple web pages.

### Choose Flint Dart When:
1. You are building a **production SaaS, platform, or interactive portal** that requires both rich client interfaces and backend services.
2. You want a **single full-stack language**: write database queries, API endpoints, background jobs, and reactive UI pages in one shared codebase.
3. You need **structured, productive defaults**: built-in authentication, database migrations, typed controllers, and automatic Swagger/OpenAPI documentation.
