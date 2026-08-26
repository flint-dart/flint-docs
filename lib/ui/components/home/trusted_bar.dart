import 'package:flint_dart/ui.dart';

class TrustedBar extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 28),
        md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 28)),
        lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 32)),
        xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 36)),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 20,
            padding: const EdgeInsets.all(22),
            radius: 16,
            border: Border(color: ThemeToken.color('line'), width: 1),
            background: ThemeToken.color('panel'),
            shadow: ThemeToken.shadow('sm'),
            dark: DartStyle(
              border: Border(color: Color.rgba(56, 189, 248, 0.18), width: 1),
              background: Background.layers([
                Gradient.linear(
                  135,
                  [
                    GradientStop(Color.rgba(8, 47, 73, 0.52), 0),
                    GradientStop(Color.rgba(15, 23, 42, 0.72), 46),
                    GradientStop(Color.rgba(20, 83, 45, 0.24), 100),
                  ],
                ),
                Color.rgba(15, 23, 42, 0.72),
              ]),
            ),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.end,
                justifyContent: JustifyContent.between,
                gap: 18,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    display: Display.grid,
                    gap: 8,
                    minWidth: 280,
                  ),
                  children: [
                    Text.span(
                      'Unified Dart Power',
                      dartStyle: DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: ThemeToken.color('primary'),
                      ),
                    ),
                    Text.h2(
                      'Four official pillars engineered to work together.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        maxWidth: 560,
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1.14,
                        color: ThemeToken.color('text'),
                      ),
                    ),
                  ],
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 8,
                  ),
                  children: [
                    _trustPill('4 Pillars', 'Web, Client, AI, Robotics'),
                    _trustPill(
                        '0 Context Switch', 'pure Dart across all layers'),
                    _trustPill('100% Type-Safe', 'shared schemas and models'),
                  ],
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 14,
                width: const SizeValue.percent(100),
                md: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
                ),
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(4, GridTrack.oneFr),
                ),
              ),
              children: [
                _signal(
                  Icons.layers,
                  'Full-Stack Web',
                  'High-performance backend routes, SSR & Web UI.',
                  _accentMint,
                  '/fullstack',
                ),
                _signal(
                  Icons.globe,
                  'Universal Client',
                  'Cross-platform caching, offline sync & channels.',
                  _accentSky,
                  '/client',
                ),
                _signal(
                  Icons.sparkles,
                  'Autonomous AI',
                  'Agent workflows, tool execution & embeddings.',
                  _accentViolet,
                  '/ai',
                ),
                _signal(
                  Icons.zap,
                  'Robotics & Hardware',
                  'Sensors, motor telemetry & virtual simulation.',
                  _accentOrange,
                  '/hardware',
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _signal(
    IconData icon,
    String title,
    String body,
    DartStyle accent,
    String href,
  ) {
    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 10,
        width: const SizeValue.percent(100),
        padding: const EdgeInsets.all(16),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.92),
        ),
        dark: const DartStyle(
          border: Border(color: Color.rgba(148, 163, 184, 0.18), width: 1),
        ),
        hover: DartStyle(
          border: Border.all(color: ThemeToken.color('primary')),
        ),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                width: 34,
                height: 34,
                radius: 8,
                border: Border(color: ThemeToken.color('line'), width: 1),
                background: ThemeToken.color('panel'),
                dark: const DartStyle(
                  border:
                      Border(color: Color.rgba(255, 255, 255, 0.1), width: 1),
                ),
              ),
              children: [Icon(icon, size: 16, color: ThemeToken.color('text'))],
            ),
            Container(dartStyle: accent),
          ],
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 14,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.5,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  FlintNode _trustPill(String value, String label) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 2,
        minWidth: 130,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        radius: 8,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.88),
        ),
        dark: const DartStyle(
          border: Border(color: Color.rgba(148, 163, 184, 0.16), width: 1),
        ),
      ),
      children: [
        Text.span(
          value,
          dartStyle: DartStyle(
            fontSize: 13,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 700,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }
}

const _accentMint = DartStyle(
  minWidth: 44,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#34d399'),
);

const _accentSky = DartStyle(
  minWidth: 44,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#38bdf8'),
);

const _accentViolet = DartStyle(
  minWidth: 44,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#a78bfa'),
);

const _accentOrange = DartStyle(
  minWidth: 44,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#f97316'),
);
