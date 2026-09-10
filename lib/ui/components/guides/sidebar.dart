import 'package:flint_dart/ui.dart';

class GuidesSidebar extends Component {
  final String active;
  final bool mobileDrawer;
  final Map<String, bool> _open = {};

  GuidesSidebar({required this.active, this.mobileDrawer = false}) {
    _openGroupForSection(active);
  }

  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        gap: 2,
        padding: const EdgeInsets.all(16),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ).merge(
        mobileDrawer
            ? DartStyle(display: Display.grid)
            : DartStyle(
                display: Display.none,
                md: DartStyle(
                  display: Display.grid,
                  width: SizeValue.auto,
                  minWidth: 220,
                  maxWidth: 240,
                ),
              ),
      ),
      children: [
        for (final item in _sidebarItems) _sidebarItem(item),
      ],
    );
  }

  void _openGroupForSection(String section) {
    const start = [
      'introduction',
      'getting-started',
      'installation',
      'create-run',
      'cli',
      'project-structure',
      'building-a-feature',
      'common-patterns',
      'testing',
    ];
    const routing = [
      'routing',
      'route-params',
      'query-params',
      'request-response',
      'request-body',
      'file-uploads',
      'route-groups'
    ];
    const middleware = ['middleware', 'validation'];
    const auth = [
      'authentication',
      'sessions',
      'sessions-and-cookies',
      'security',
      'security-and-utilities',
      'errors',
      'helpers',
    ];
    const data = [
      'models',
      'models-and-database',
      'database',
      'database-api',
      'orm',
      'orm-query',
      'orm-relations',
      'table-sync',
      'seeders',
      'cache',
      'storage',
    ];
    const ui = [
      'build-and-rendering',
      'frontend-ui',
      'ui-widgets',
      'views',
      'templates',
      'theme-mode',
    ];
    const background = [
      'websockets',
      'jobs-and-workers',
      'isolate',
      'isolate-tasks',
      'logging',
    ];
    const reference = [
      'mail',
      'ai',
      'swagger-docs',
      'swagger-and-api-docs',
      'deployment',
    ];

    if (start.contains(section)) _open['start'] = true;
    if (routing.contains(section)) _open['routing'] = true;
    if (middleware.contains(section)) _open['middleware'] = true;
    if (auth.contains(section)) _open['auth'] = true;
    if (data.contains(section)) _open['data'] = true;
    if (ui.contains(section)) _open['ui'] = true;
    if (background.contains(section)) _open['background'] = true;
    if (reference.contains(section)) _open['reference'] = true;
  }

  View _sidebarItem((String, String, List<(String, String)>?) item) {
    final (slug, label, children) = item;
    if (children == null) {
      return Link(
        href: '/fullstack/guides/$slug',
        dartStyle: slug == active
            ? DartStyle(
                display: Display.block,
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                radius: 8,
                fontSize: 13,
                fontWeight: 600,
                color: ThemeToken.color('primary'),
                background: Color.rgba(5, 150, 105, 0.08),
                border: Border(color: Color.rgba(5, 150, 105, 0.2), width: 1),
                dark: const DartStyle(
                  color: Color('#a7f3d0'),
                  background: Color.rgba(52, 211, 153, 0.1),
                  border:
                      Border(color: Color.rgba(52, 211, 153, 0.2), width: 1),
                ),
              )
            : DartStyle(
                display: Display.block,
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                radius: 8,
                fontSize: 13,
                color: ThemeToken.color('muted'),
              ),
        child: label,
      );
    }

    final groupKey = slug;
    final isOpen = _open[groupKey] == true;
    final groupActive = children.any((c) => c.$1 == active);

    return Container(
      dartStyle: DartStyle(display: Display.grid, gap: 2),
      children: [
        Button(
          variant: ButtonVariant.ghost,
          tone: Tone.neutral,
          onPressed: (_) => setState(() => _open[groupKey] = !isOpen),
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.start,
            gap: 6,
            width: SizeValue.percent(100),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            radius: 8,
            border: const Border(color: Color.rgba(0, 0, 0, 0), width: 0),
            background: Color.rgba(0, 0, 0, 0),
            fontSize: 13,
            fontWeight: groupActive ? 600 : 500,
            color: groupActive
                ? ThemeToken.color('primary')
                : ThemeToken.color('muted'),
          ),
          children: [
            Text.span(
              label,
              dartStyle: DartStyle(display: Display.block),
            ),
            Icon(
              Icons.chevronDown,
              size: 14,
              color: groupActive
                  ? ThemeToken.color('primary')
                  : ThemeToken.color('muted'),
            ),
          ],
        ),
        if (isOpen)
          Container(
            dartStyle: DartStyle(
              display: Display.grid,
              gap: 1,
              padding: EdgeInsets.only(left: 12),
            ),
            children: [
              for (final child in children)
                Link(
                  href: '/fullstack/guides/${child.$1}',
                  dartStyle: child.$1 == active
                      ? DartStyle(
                          display: Display.block,
                          padding:
                              EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          radius: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          color: ThemeToken.color('primary'),
                          background: Color.rgba(5, 150, 105, 0.08),
                          dark: const DartStyle(
                            color: Color('#a7f3d0'),
                            background: Color.rgba(52, 211, 153, 0.08),
                          ),
                        )
                      : DartStyle(
                          display: Display.block,
                          padding: const EdgeInsets.symmetric(
                              horizontal: 12, vertical: 6),
                          radius: 6,
                          fontSize: 12,
                          color: ThemeToken.color('muted'),
                        ),
                  child: child.$2,
                ),
            ],
          ),
      ],
    );
  }
}

const _sidebarItems = [
  ('flint-story', 'Flint Story', null),
  (
    'start',
    'Start',
    [
      ('introduction', 'Introduction'),
      ('getting-started', 'Getting Started'),
      ('installation', 'Install'),
      ('create-run', 'Create & Run'),
      ('cli', 'CLI'),
      ('project-structure', 'Project Structure'),
      ('building-a-feature', 'Building A Feature'),
      ('common-patterns', 'Common Patterns'),
      ('testing', 'Testing'),
    ]
  ),
  (
    'routing',
    'Routing',
    [
      ('routing', 'Overview'),
      ('route-params', 'Route Params'),
      ('query-params', 'Query Params'),
      ('request-response', 'Request & Response'),
      ('request-body', 'Request Body'),
      ('file-uploads', 'File Uploads'),
      ('route-groups', 'Route Groups'),
    ]
  ),
  (
    'middleware',
    'Middleware',
    [
      ('middleware', 'Overview'),
      ('validation', 'Input Validation'),
    ]
  ),
  (
    'authentication',
    'Auth & Security',
    [
      ('authentication', 'Overview'),
      ('sessions', 'Sessions & Cookies'),
      ('sessions-and-cookies', 'Session Details'),
      ('security', 'Security'),
      ('security-and-utilities', 'Security Utilities'),
      ('errors', 'Errors & Exceptions'),
      ('helpers', 'Helpers & Utils'),
    ]
  ),
  (
    'data',
    'Data',
    [
      ('models', 'Overview'),
      ('models-and-database', 'Models And Database'),
      ('database', 'Database'),
      ('database-api', 'Database API'),
      ('orm', 'ORM'),
      ('orm-query', 'Query'),
      ('orm-relations', 'Relations'),
      ('table-sync', 'Table Sync'),
      ('seeders', 'Seeders'),
      ('cache', 'Caching'),
      ('storage', 'Storage'),
    ]
  ),
  (
    'ui',
    'Web UI',
    [
      ('build-and-rendering', 'Build & Rendering'),
      ('frontend-ui', 'Frontend UI'),
      ('ui-widgets', 'UI Widgets & State'),
      ('views', 'Views'),
      ('templates', 'Template Engine'),
      ('theme-mode', 'Light & Dark Mode'),
    ]
  ),
  (
    'background',
    'Realtime & Workers',
    [
      ('websockets', 'WebSockets'),
      ('jobs-and-workers', 'Jobs & Workers'),
      ('isolate', 'Isolate Tasks'),
      ('isolate-tasks', 'Isolate Details'),
      ('logging', 'Logging'),
    ]
  ),
  (
    'reference',
    'Reference',
    [
      ('architecture', 'Architecture'),
      ('mail', 'Mail'),
      ('ai', 'AI Runtime'),
      ('swagger-docs', 'Swagger Docs'),
      ('swagger-and-api-docs', 'Swagger Details'),
      ('deployment', 'Deployment'),
    ]
  ),
];
