import 'package:flint_dart/flint_dart.dart';

class DocumentationRoutes {
  static void register(Flint app) {
    // Home page
    app.get('/', (req, res) async {
      final features = [
        {
          'icon': '🧱',
          'title': 'Simple Routing',
          'description':
              'Intuitive routing APIs for clean, expressive endpoints'
        },
        {
          'icon': '🛡️',
          'title': 'Middleware Stack',
          'description':
              'Protect and transform requests with composable middleware'
        },
        {
          'icon': '🔐',
          'title': 'JWT Authentication',
          'description': 'Built-in JWT auth utilities and guard support'
        },
        {
          'icon': '🔒',
          'title': 'Password Hashing',
          'description': 'Secure hashing helpers for user credentials'
        },
        {
          'icon': '♻️',
          'title': 'Hot Reload',
          'description': 'Instant feedback while developing'
        },
        {
          'icon': '🧪',
          'title': 'Modular Structure',
          'description': 'Organize large apps with a scalable layout'
        },
        {
          'icon': '🗄️',
          'title': 'ORM for MySQL/Postgres',
          'description': 'Active Record ORM with migrations and models'
        },
        {
          'icon': '🛠️',
          'title': 'CLI Tooling',
          'description': 'Scaffold migrations, models, and more'
        },
        {
          'icon': '📚',
          'title': 'Swagger Docs',
          'description': 'Generate API docs with Swagger/OpenAPI'
        },
      ];

      final gettingStartedSteps = [
        {
          'title': 'Install the CLI',
          'command': 'dart pub global activate flint_dart'
        },
        {'title': 'Create Your App', 'command': 'flint create new_app'},
        {'title': 'Run the Server', 'command': 'flint run'},
        {
          'title': 'Open Your App',
          'command': 'Visit http://localhost:3000 in your browser'
        },
      ];

      final codeExamples = [
        {
          'title': 'Quick Start',
          'code': '''import 'package:flint_dart/flint_dart.dart';

void main() {
  final app = Flint();

  app.get('/', (req, res) async {
    return res.send('Welcome to Flint Dart!');
  });

  app.listen(port: 3000);
}'''
        },
        {
          'title': 'Middleware',
          'code': '''class AuthMiddleware extends Middleware {
  @override
  Handler handle(Handler next) {
    return (Request req, Response res) async {
      final token = req.bearerToken;
      if (token == null || token != "expected_token") {
        return res.status(401).send("Unauthorized");
      }
      return await next(req, res);
    };
  }
}

app.put('/:id', AuthMiddleware().handle(controller.update));'''
        },
        {
          'title': 'JWT Auth',
          'code': '''final token = JwtUtil.generateToken({'userId': 123});
final payload = JwtUtil.verifyToken(token);'''
        },
        {
          'title': 'Flash + Back Redirect',
          'code': '''app.post('/settings', (Context ctx) async {
  final data = await ctx.req.validate({'name': 'required|string'});
  // ... persist settings
  return ctx.res
      ?.withSuccess('Settings updated successfully.')
      .back(fallback: '/settings');
});'''
        },
      ];

      return res.view('home', data: {
        'title': 'FlintDart - Modern Dart Web Framework',
        'features': features,
        'gettingStartedSteps': gettingStartedSteps,
        'codeExamples': codeExamples,
      });
    });

    // Getting Started Guide
    app.get('/guides/getting-started', (req, res) async {
      return res.view('guides.getting-started', data: {
        'title': 'Getting Started - FlintDart Documentation',
      });
    });

    // API Documentation
    app.get('/api', (req, res) async {
      return res.view('api.index', data: {
        'title': 'API Documentation - FlintDart',
      });
    });

    // Examples
    app.get('/examples', (req, res) async {
      final examples = [
        {
          'title': 'Blog Platform',
          'description':
              'Complete blog with posts, comments, and user authentication',
          'features': [
            'User registration and login',
            'CRUD operations for posts',
            'Comment system',
            'Admin dashboard',
            'RESTful API'
          ],
          'tutorial_url': '#blog-tutorial',
          'source_url': 'https://github.com/flintdart/blog-example',
        },
        {
          'title': 'Task Management API',
          'description':
              'RESTful API for task management with teams and projects',
          'features': [
            'JWT authentication',
            'Team management',
            'Project organization',
            'Task tracking',
            'Real-time updates'
          ],
          'tutorial_url': '#task-api-tutorial',
          'source_url': 'https://github.com/flintdart/task-api-example',
        },
        {
          'title': 'E-commerce Store',
          'description':
              'Online store with products, cart, and payment processing',
          'features': [
            'Product catalog',
            'Shopping cart',
            'Order processing',
            'Payment integration',
            'Inventory management'
          ],
          'tutorial_url': '#ecommerce-tutorial',
          'source_url': 'https://github.com/flintdart/ecommerce-example',
        },
        {
          'title': 'Chat Application',
          'description': 'Real-time chat with WebSocket support and rooms',
          'features': [
            'WebSocket communication',
            'Chat rooms',
            'Online users',
            'Message history',
            'File sharing'
          ],
          'tutorial_url': '#chat-tutorial',
          'source_url': 'https://github.com/flintdart/chat-example',
        },
        {
          'title': 'Weather Dashboard',
          'description':
              'Weather app with API integration and data visualization',
          'features': [
            'Third-party API integration',
            'Data caching',
            'Location services',
            'Weather forecasts',
            'Responsive UI'
          ],
          'tutorial_url': '#weather-tutorial',
          'source_url': 'https://github.com/flintdart/weather-example',
        },
        {
          'title': 'File Manager',
          'description':
              'Cloud file manager with upload, download, and sharing',
          'features': [
            'File upload/download',
            'Folder organization',
            'File sharing',
            'Access control',
            'Storage management'
          ],
          'tutorial_url': '#file-manager-tutorial',
          'source_url': 'https://github.com/flintdart/file-manager-example',
        },
      ];

      return res.view('examples.index', data: {
        'title': 'Examples & Tutorials - FlintDart',
        'examples': examples,
      });
    });

    // Static assets
    app.static('/assets', 'public/assets');
  }
}
