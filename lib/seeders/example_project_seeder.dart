import 'package:flint_dart/flint_dart.dart';

class ExampleProjectSeeder extends Seeder {
  @override
  Future<void> run() async {
    await runSync();
  }

  static Future<void> runSync() async {
    if (!DB.isConnected) {
      try {
        await DB.autoConnect();
      } catch (_) {}
    }

    final projects = [
      {
        'title': 'Flint E-Commerce Suite',
        'slug': 'ecommerce',
        'description':
            'Full-featured, production-ready digital and physical storefront built entirely in pure Dart and Flint UI.',
        'what_it_does':
            'Includes dynamic product catalog, multi-currency pricing, reactive shopping cart, multi-step checkout workflow, Stripe payments integration, transactional email confirmation with Flint Mailer, order management, and an embedded live customer support chat widget.',
        'category': 'Full-Stack Apps',
        'pillar': 'fullstack',
        'badge': 'Featured Storefront',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/ecommerce',
        'demo_url': 'https://flintdart.dev/examples#ecommerce',
        'clone_command': 'flint create my_shop --template=ecommerce',
        'features':
            'Product Catalog,Persistent Cart,Checkout Flow,Transactional Mail,Customer Auth,Live Support Chat,Inventory Admin',
        'tech_stack':
            'Flint Dart, Flint UI, PostgreSQL ORM, Flint Mail, WebSockets, DartStyle',
        'complexity': 'Production Ready',
        'author': 'Flint Core Team',
        'icon_name': 'shopping-bag',
        'accent_color': '#10b981',
        'published_at': DateTime.now().toIso8601String(),
      },
      {
        'title': 'AI Agent & Prompt Studio',
        'slug': 'aiapp',
        'description':
            'Intelligent multi-model conversational assistant and autonomous tool-calling pipeline powered by Flint AI.',
        'what_it_does':
            'Delivers high-speed SSE streaming chat responses, multi-turn LLM agent execution, automated tool and function invocation, structured JSON schema parsing, and model switching between OpenAI, Anthropic Claude, and Google Gemini.',
        'category': 'Artificial Intelligence',
        'pillar': 'ai',
        'badge': 'AI & LLM Pipeline',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/aiapp',
        'demo_url': 'https://flintdart.dev/examples#aiapp',
        'clone_command': 'flint create my_ai_app --template=aiapp',
        'features':
            'SSE Stream Responses,Multi-Turn Memory,Tool Calling,Multi-Provider Switching,JSON Schema Parser,Prompt Studio',
        'tech_stack':
            'Flint AI, Flint Dart, Flint UI, OpenAI / Anthropic / Gemini, Server-Sent Events',
        'complexity': 'Advanced',
        'author': 'Flint Core Team',
        'icon_name': 'sparkles',
        'accent_color': '#8b5cf6',
        'published_at': DateTime.now().toIso8601String(),
      },
      {
        'title': 'Canva Studio Graphic Editor',
        'slug': 'canva',
        'description':
            'Interactive vector design and layout manipulation tool built with pure Dart UI components without external JS canvas.',
        'what_it_does':
            'Provides drag-and-drop layer hierarchy, shape and typography transformers, real-time color styling, canvas zoom and panning controls, design preset templates, and high-resolution SVG and PNG export capabilities.',
        'category': 'UI & Creative Tools',
        'pillar': 'client',
        'badge': 'Interactive Canvas',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/canva',
        'demo_url': 'https://flintdart.dev/examples#canva',
        'clone_command': 'flint create my_canva --template=canva',
        'features':
            'Vector Canvas Engine,Layer Management,Shape Manipulation,Live Style Inspector,Preset Templates,High-Res Export',
        'tech_stack':
            'Flint UI, Pure Dart Canvas, DartStyle System, Vector Geometry, DOM Engine',
        'complexity': 'Intermediate',
        'author': 'Flint Core Team',
        'icon_name': 'palette',
        'accent_color': '#f59e0b',
        'published_at': DateTime.now().toIso8601String(),
      },
      {
        'title': 'Modern Blog & Publishing Hub',
        'slug': 'blogs',
        'description':
            'High-velocity publication engine with role-based access guards, Markdown processing, threaded comments, and SEO optimization.',
        'what_it_does':
            'Features granular role guards (Admin, Contributor, Dev, Reader), live Markdown editing with syntax highlighting, nested moderation threads, tag taxonomy, RSS feeds, OpenGraph meta tags, and instant full-text article indexing.',
        'category': 'Full-Stack Apps',
        'pillar': 'fullstack',
        'badge': 'Content Engine',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/blogs',
        'demo_url': 'https://flintdart.dev/examples#blogs',
        'clone_command': 'flint create my_blog --template=blog',
        'features':
            'Role Guard Middleware,Rich Markdown Engine,Threaded Comments,Tag Taxonomy,SEO Canonical Headers,RSS Feed',
        'tech_stack':
            'Flint Dart, Flint ORM, Flint UI, Role Guards, Markdown AST Pipeline',
        'complexity': 'Starter Friendly',
        'author': 'Flint Core Team',
        'icon_name': 'book-open',
        'accent_color': '#06b6d4',
        'published_at': DateTime.now().toIso8601String(),
      },
      {
        'title': 'Flint DB API Backend (PostgreSQL)',
        'slug': 'flint-db-api-backend',
        'description':
            'Convention-based RESTful database backend generating protected CRUD operations directly from Flint ORM models.',
        'what_it_does':
            'Demonstrates automatic HTTP endpoint generation (`FlintDbResource`), JWT bearer authentication, multi-tenant role policies, field concealing, relational verification (Todo -> Subtasks), and PostgreSQL database migrations.',
        'category': 'Backend & Database',
        'pillar': 'fullstack',
        'badge': 'Automated DB API',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/flint_db_api_backend',
        'demo_url': 'https://flintdart.dev/examples#flint-db-api-backend',
        'clone_command':
            'git clone https://github.com/flint-dart/flint.git && cd flint/examples/flint_db_api_backend',
        'features':
            'Auto CRUD Resources,JWT Bearer Auth,Role Policies,Relational Cascades,Field Concealing,PostgreSQL Migrations',
        'tech_stack':
            'Flint Dart, PostgreSQL, Flint DB API, JWT Security, Role Engine',
        'complexity': 'Intermediate',
        'author': 'Flint Core Team',
        'icon_name': 'database',
        'accent_color': '#3b82f6',
        'published_at': DateTime.now().toIso8601String(),
      },
      {
        'title': 'Flint DB API Flutter Client',
        'slug': 'flint-db-api-flutter',
        'description':
            'Cross-platform Flutter mobile and desktop application connected to the Flint DB API backend with zero raw HTTP strings.',
        'what_it_does':
            'Uses the high-level `FlintDatabaseClient` interface for reactive data synchronisation, persistent JWT login sessions, recursive subtask hierarchy management, and cross-platform native execution across iOS, Android, macOS, Windows, and Web.',
        'category': 'Flutter & Mobile',
        'pillar': 'client',
        'badge': 'Cross-Platform App',
        'github_url':
            'https://github.com/flint-dart/flint/tree/main/examples/flint_db_api_flutter',
        'demo_url': 'https://flintdart.dev/examples#flint-db-api-flutter',
        'clone_command':
            'git clone https://github.com/flint-dart/flint.git && cd flint/examples/flint_db_api_flutter',
        'features':
            'FlintDatabaseClient SDK,Zero Raw URLs,JWT Session Store,Subtask Tree UI,Offline Persistence,Cross-Platform',
        'tech_stack':
            'Flutter, FlintDatabaseClient, Flint Client SDK, Dart 3, Reactive Architecture',
        'complexity': 'Intermediate',
        'author': 'Flint Core Team',
        'icon_name': 'smartphone',
        'accent_color': '#ec4899',
        'published_at': DateTime.now().toIso8601String(),
      },
    ];

    var seededCount = 0;
    for (final data in projects) {
      try {
        final existing = await (QueryBuilder(table: 'example_projects')
              ..where('slug', '=', data['slug']))
            .first();

        if (existing == null) {
          await QueryBuilder(table: 'example_projects').insert(data);
          seededCount++;
        } else {
          await (QueryBuilder(table: 'example_projects')
                ..where('slug', '=', data['slug']))
              .update(data);
          seededCount++;
        }
      } catch (e) {
        Log.debug('Error seeding example project ${data['slug']}: $e');
      }
    }

    Log.debug(
        'ExampleProjectSeeder synced $seededCount / ${projects.length} example projects.');
  }
}
