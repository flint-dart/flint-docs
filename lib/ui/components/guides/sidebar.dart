import 'package:flint_ui/flint_ui.dart';

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
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        gap: 2,
        padding: EdgeInsets.all(16),
        radius: 12,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.6),
      ).merge(
        mobileDrawer
            ? const DartStyle(display: Display.grid)
            : const DartStyle(
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
    const auth = ['authentication', 'security'];
    const models = ['models', 'orm', 'orm-query', 'orm-relations'];

    if (routing.contains(section)) _open['routing'] = true;
    if (middleware.contains(section)) _open['middleware'] = true;
    if (auth.contains(section)) _open['auth'] = true;
    if (models.contains(section)) _open['models'] = true;
  }

  View _sidebarItem((String, String, List<(String, String)>?) item) {
    final (slug, label, children) = item;
    if (children == null) {
      return Link(
        href: '/guides/$slug',
        dartStyle: slug == active
            ? const DartStyle(
                display: Display.block,
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                radius: 8,
                fontSize: 13,
                fontWeight: 600,
                color: Color('#a7f3d0'),
                background: Color.rgba(52, 211, 153, 0.1),
                border: Border(color: Color.rgba(52, 211, 153, 0.2), width: 1),
              )
            : const DartStyle(
                display: Display.block,
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                radius: 8,
                fontSize: 13,
                color: Color('#cbd5e1'),
              ),
        child: label,
      );
    }

    final groupKey = slug;
    final isOpen = _open[groupKey] == true;
    final groupActive = children.any((c) => c.$1 == active);

    return Container(
      dartStyle: const DartStyle(display: Display.grid, gap: 2),
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
            color:
                groupActive ? const Color('#a7f3d0') : const Color('#cbd5e1'),
          ),
          children: [
            Text.span(
              label,
              dartStyle: const DartStyle(display: Display.block),
            ),
            Icon(
              Icons.chevronDown,
              size: 14,
              color: groupActive ? Color('#a7f3d0') : Color('#94a3b8'),
            ),
          ],
        ),
        if (isOpen)
          Container(
            dartStyle: const DartStyle(
              display: Display.grid,
              gap: 1,
              padding: EdgeInsets.only(left: 12),
            ),
            children: [
              for (final child in children)
                Link(
                  href: '/guides/${child.$1}',
                  dartStyle: child.$1 == active
                      ? const DartStyle(
                          display: Display.block,
                          padding:
                              EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          radius: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          color: Color('#a7f3d0'),
                          background: Color.rgba(52, 211, 153, 0.08),
                        )
                      : const DartStyle(
                          display: Display.block,
                          padding:
                              EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          radius: 6,
                          fontSize: 12,
                          color: Color('#94a3b8'),
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
  ('introduction', 'Introduction', null),
  ('flint-story', 'Flint Story', null),
  ('installation', 'Install', null),
  ('create-run', 'Create & Run', null),
  ('cli', 'CLI', null),
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
    'Authentication',
    [
      ('authentication', 'Overview'),
      ('security', 'Security'),
    ]
  ),
  ('sessions', 'Sessions & Cookies', null),
  ('cache', 'Caching', null),
  ('storage', 'Storage', null),
  ('logging', 'Logging', null),
  ('errors', 'Errors & Exceptions', null),
  ('helpers', 'Helpers & Utils', null),
  ('architecture', 'Controllers & Services', null),
  ('mail', 'Mail', null),
  ('ai', 'AI Runtime', null),
  ('isolate', 'Isolate', null),
  ('swagger-docs', 'Swagger Docs', null),
  ('database', 'Database', null),
  ('websockets', 'WebSockets', null),
  ('views', 'Views', null),
  (
    'models',
    'Models & Tables',
    [
      ('models', 'Overview'),
      ('orm', 'ORM'),
      ('orm-query', 'Query'),
      ('orm-relations', 'Relations'),
    ]
  ),
  ('table-sync', 'Table Sync', null),
  ('deployment', 'Deployment', null),
];
