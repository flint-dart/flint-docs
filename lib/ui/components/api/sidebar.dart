import 'package:flint_dart/ui.dart';

class ApiSidebar extends Component {
  final String active;
  final bool mobileDrawer;

  ApiSidebar({required this.active, this.mobileDrawer = false});

  @override
  View build() {
    String? lastGroup;
    final items = <View>[];
    for (final (slug, label, group) in apiSections) {
      if (group != lastGroup) {
        items.add(
          Text.p(
            group,
            dartStyle: DartStyle(
              fontSize: 10,
              fontWeight: 700,
              color: ThemeToken.color('muted'),
              margin: const EdgeInsets.only(top: 12, bottom: 4),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 0),
            ),
          ),
        );
        lastGroup = group;
      }
      items.add(
        Link(
          href: '/fullstack/api/$slug',
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
        ),
      );
    }

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
      children: items,
    );
  }
}

String apiTitleFor(String slug) {
  final match = apiSections.where((item) => item.$1 == slug).firstOrNull;
  if (match != null) return match.$2;
  return slug
      .split('-')
      .where((part) => part.isNotEmpty)
      .map((part) => '${part[0].toUpperCase()}${part.substring(1)}')
      .join(' ');
}

const apiSections = [
  ('flint-class', 'Flint Class', 'Core Framework'),
  ('request', 'Request', 'Core Framework'),
  ('response', 'Response', 'Core Framework'),
  ('router', 'Router', 'Core Framework'),
  ('middleware', 'Middleware', 'Core Framework'),
  ('model', 'Model', 'Database'),
  ('query-builder', 'Query Builder', 'Database'),
  ('migration', 'Migration', 'Database'),
  ('schema', 'Schema', 'Database'),
  ('auth', 'Auth Manager', 'Authentication'),
  ('guards', 'Auth Guards', 'Authentication'),
  ('providers', 'Auth Providers', 'Authentication'),
  ('components', 'Components', 'Flint UI'),
  ('layout', 'Layout', 'Flint UI'),
  ('forms', 'Forms', 'Flint UI'),
  ('cache', 'Cache', 'Utilities'),
  ('session', 'Session', 'Utilities'),
  ('storage', 'Storage', 'Utilities'),
  ('mail', 'Mail', 'Utilities'),
  ('validation', 'Validation', 'Utilities'),
];
