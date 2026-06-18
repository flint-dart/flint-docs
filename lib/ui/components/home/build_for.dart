import 'package:flint_ui/flint_ui.dart';

class BuildFor extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 64),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 10,
            maxWidth: 720,
          ),
          children: [
            Text.h2(
              'Built for real full-stack work',
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 32,
                fontWeight: 700,
                lineHeight: 1.15,
                color: Colors.white,
              ),
            ),
            Text.p(
              'The home page should show the framework, not a demo toy. These are the pieces teams reach for first.',
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: Color('#a8b3c5'),
              ),
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 14,
            margin: EdgeInsets.only(top: 26, bottom: 0),
          ),
          children: _capabilities
              .map((item) => _capability(item.$1, item.$2, item.$3))
              .toList(),
        ),
      ],
    );
  }

  FlintNode _capability(String label, String title, String body) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 10,
        minWidth: 320,
        padding: EdgeInsets.all(20),
        radius: 8,
        border: Border(color: Color.rgba(51, 65, 85, 0.82), width: 1),
        background: Color.rgba(15, 23, 42, 0.62),
      ),
      children: [
        Text.span(
          label,
          dartStyle: const DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: Color('#fbbf24'),
          ),
        ),
        Text.h3(
          title,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 16,
            fontWeight: 700,
            color: Colors.white,
          ),
        ),
        Text.p(
          body,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: Color('#9ca8ba'),
          ),
        ),
      ],
    );
  }
}

const _capabilities = [
  (
    'HTTP',
    'Routing and controllers',
    'Define feature routes and keep request logic in plain Dart controllers.'
  ),
  (
    'DATA',
    'Models and QueryBuilder',
    'Use the active-record style model layer when your docs app needs persistent content.'
  ),
  (
    'AUTH',
    'Guards and sessions',
    'Protect write flows for blog posts, questions, comments, and admin actions.'
  ),
  (
    'DOCS',
    'Swagger and Markdown',
    'Serve API references, guides, changelog pages, and AI-friendly docs from clean content.'
  ),
  (
    'OPS',
    'Cache, storage, mail',
    'Reach for production utilities without pulling in a pile of unrelated packages.'
  ),
  (
    'UI',
    'Flint UI browser pages',
    'Hydrate modern Dart components on server-rendered pages when interaction matters.'
  ),
];
