import 'package:flint_dart/ui.dart';

class BuildFor extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 64),
        md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 64)),
        lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 72)),
        xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 80)),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 10,
            maxWidth: 760,
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                width: SizeValue('fit-content'),
                padding:
                    const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                radius: 999,
                background: const Color.rgba(52, 211, 153, 0.12),
                border: Border.all(color: const Color.rgba(52, 211, 153, 0.3)),
              ),
              children: [
                Icon(Icons.layers, size: 13, color: const Color('#34d399')),
                Text.span(
                  'End-to-End Capabilities',
                  dartStyle: const DartStyle(
                    color: Color('#34d399'),
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 0.5,
                  ),
                ),
              ],
            ),
            Text.h2(
              'Built for Complete Modern Applications',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1.15,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'The Flint Ecosystem eliminates fragmentation across your entire technology stack. Every layer speaks the same expressive language.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 16,
            width: const SizeValue.percent(100),
            margin: const EdgeInsets.only(top: 32, bottom: 0),
            md: DartStyle(
                gridTemplateColumns:
                    GridTemplateColumns.repeat(2, GridTrack.oneFr)),
            lg: DartStyle(
                gridTemplateColumns:
                    GridTemplateColumns.repeat(3, GridTrack.oneFr)),
          ),
          children: _capabilities
              .map((item) => _capability(item.$1, item.$2, item.$3, item.$4))
              .toList(),
        ),
      ],
    );
  }

  FlintNode _capability(String label, String title, String body, String color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 10,
        padding: const EdgeInsets.all(22),
        radius: 14,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        hover: DartStyle(
          border: Border(color: Color(color), width: 1),
        ),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: Color(color),
            letterSpacing: 0.5,
          ),
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 17,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }
}

const _capabilities = [
  (
    'FULL-STACK WEB',
    'Server, SSR & Declarative UI',
    'High-performance HTTP server, SEO-first server-side rendering, and declarative Web UI without client bloat.',
    '#34d399',
  ),
  (
    'CROSS-PLATFORM CLIENT',
    'Universal SDK & Sync',
    'Multi-tier caching, offline mutation replay, streaming WebSocket channels, and seamless database queries.',
    '#38bdf8',
  ),
  (
    'AI AGENT MESH',
    'Multimodal Inference & Tools',
    'Autonomous agents with tool policies, memory persistence, streaming responses, and vector embeddings.',
    '#a78bfa',
  ),
  (
    'ROBOTICS & HARDWARE',
    'Edge Firmware & Sensors',
    'Sonar distance sensors, IMU motion trackers, motor drivers, and instant Wokwi browser simulation.',
    '#f97316',
  ),
  (
    'SECURE DATA GATEWAY',
    'Row-Level Security & Wire Protocol',
    'Owner-isolated CRUD policies, concealed fields, query AST compilers, and relational data hydration.',
    '#ec4899',
  ),
  (
    'DEVELOPER EXPERIENCE',
    '100% Type-Safe Pure Dart',
    'Shared data models, end-to-end type checking, instant worker hot reload, and streamlined CLI tooling.',
    '#f59e0b',
  ),
];
