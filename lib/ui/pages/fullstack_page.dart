import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class FullstackPage extends Component {
  FullstackPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1040,
          margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 34),
          display: Display.grid,
          gap: 22,
          md: const DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 18, vertical: 48),
            gap: 28,
          ),
        ),
        children: [
          _hero(),
          _featurePillars(),
          _articleShell(),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 24,
        padding: const EdgeInsets.all(26),
        radius: 24,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(const Color.rgba(52, 211, 153, 0.22), 0),
              GradientStop(const Color.rgba(56, 189, 248, 0.12), 48),
              GradientStop(ThemeToken.color('panel'), 100),
            ],
          ),
          ThemeToken.color('panel'),
        ]),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 10,
            width: SizeValue('fit-content'),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            radius: 999,
            background: const Color.rgba(52, 211, 153, 0.18),
            border: Border.all(color: const Color.rgba(52, 211, 153, 0.35)),
          ),
          children: [
            Icon(Icons.layers, size: 14, color: const Color('#34d399')),
            Text.span(
              'Flint Dart Full-Stack Web Framework',
              dartStyle: const DartStyle(
                color: Color('#34d399'),
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 0.5,
              ),
            ),
          ],
        ),
        Text.h1(
          'Unified Full-Stack Dart Web Framework',
          dartStyle: DartStyle(
            color: ThemeToken.color('text'),
            fontSize: 36,
            fontWeight: 900,
            lineHeight: 1.1,
            md: const DartStyle(fontSize: 44),
          ),
        ),
        Text.p(
          'Server APIs, declarative Web UI, Server-Side Rendering (SSR), Row-Level Security database gateways, and real-time WebSockets — all in pure Dart with zero context switching.',
          dartStyle: DartStyle(
            color: ThemeToken.color('muted'),
            fontSize: 16,
            lineHeight: 1.6,
          ),
        ),
      ],
    );
  }

  View _featurePillars() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.one,
        gap: 16,
        md: DartStyle(gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr)),
      ),
      children: [
        _featureCard(
          icon: Icons.server,
          title: 'HTTP & Controller Core',
          desc: 'High-performance HTTP server with middleware pipelines, controller routing, and session authentication.',
          accent: '#34d399',
        ),
        _featureCard(
          icon: Icons.palette,
          title: 'Declarative Web UI',
          desc: 'Pure Dart components, typed styling, reactive state signals, 2D canvas, and WebGL 3D scenes.',
          accent: '#38bdf8',
        ),
        _featureCard(
          icon: Icons.database,
          title: 'Secure DB API Gateway',
          desc: 'Built-in Row-Level Security (RLS), owner filters, query compilers, and protocol serialization.',
          accent: '#a78bfa',
        ),
      ],
    );
  }

  View _featureCard({
    required IconData icon,
    required String title,
    required String desc,
    required String accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(18),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 36,
            height: 36,
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            radius: 8,
            background: Color.rgba(52, 211, 153, 0.12),
          ),
          children: [
            Icon(icon, size: 18, color: Color(accent)),
          ],
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            color: ThemeToken.color('text'),
            fontSize: 16,
            fontWeight: 800,
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            color: ThemeToken.color('muted'),
            fontSize: 13,
            lineHeight: 1.5,
          ),
        ),
      ],
    );
  }

  View _articleShell() {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(24),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        HtmlContent(
          id: 'fullstack-content',
          html: _contentHtml,
          className: 'api-md markdown-body',
          props: const {
            'style': {
              'min-width': '0',
              'max-width': '100%',
              'overflow-wrap': 'break-word',
            },
          },
        ),
      ],
    );
  }
}
