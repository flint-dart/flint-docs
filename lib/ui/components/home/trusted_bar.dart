import 'package:flint_ui/flint_ui.dart';

class TrustedBar extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 28),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 20,
            padding: EdgeInsets.all(18),
            radius: 8,
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
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.end,
                justifyContent: JustifyContent.between,
                gap: 18,
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    display: Display.grid,
                    gap: 8,
                    minWidth: 280,
                  ),
                  children: [
                    Text.span(
                      'Why it feels different',
                      dartStyle: const DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: Color('#67e8f9'),
                      ),
                    ),
                    Text.h2(
                      'Framework pieces that stay close together.',
                      dartStyle: const DartStyle(
                        margin: EdgeInsets.all(0),
                        maxWidth: 560,
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1.14,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 8,
                  ),
                  children: [
                    _trustPill('1 app', 'routes, docs, UI'),
                    _trustPill('0 templates', 'when Dart can render it'),
                    _trustPill('3 steps', 'install, create, run'),
                  ],
                ),
              ],
            ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                justifyContent: JustifyContent.center,
                gap: 14,
              ),
              children: [
                _signal(
                  Icons.route,
                  'Controllers',
                  'Route logic stays small and readable.',
                  _accentSky,
                ),
                _signal(
                  Icons.document,
                  'Markdown content',
                  'Docs stay editable without touching templates.',
                  _accentAmber,
                ),
                _signal(
                  Icons.palette,
                  'Browser UI',
                  'Interactive pages hydrate from Dart components.',
                  _accentRose,
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
  ) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 10,
        minWidth: 280,
        padding: EdgeInsets.all(18),
        radius: 8,
        border: Border(color: Color.rgba(148, 163, 184, 0.18), width: 1),
        background: Color.rgba(2, 6, 23, 0.36),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                width: 34,
                height: 34,
                radius: 8,
                border:
                    Border(color: Color.rgba(255, 255, 255, 0.1), width: 1),
                background: Color.rgba(15, 23, 42, 0.92),
              ),
              children: [Icon(icon, size: 16, color: Colors.white)],
            ),
            Container(dartStyle: accent),
          ],
        ),
        Text.h3(
          title,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 14,
            fontWeight: 700,
            color: Colors.white,
          ),
        ),
        Text.p(
          body,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.5,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }

  FlintNode _trustPill(String value, String label) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 2,
        minWidth: 130,
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        radius: 8,
        border: Border(color: Color.rgba(148, 163, 184, 0.16), width: 1),
        background: Color.rgba(2, 6, 23, 0.32),
      ),
      children: [
        Text.span(
          value,
          dartStyle: const DartStyle(
            fontSize: 13,
            fontWeight: 800,
            color: Color('#e0f2fe'),
          ),
        ),
        Text.span(
          label,
          dartStyle: const DartStyle(
            fontSize: 11,
            fontWeight: 700,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }
}

const _accentSky = DartStyle(
  minWidth: 56,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#38bdf8'),
);

const _accentAmber = DartStyle(
  minWidth: 56,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#f59e0b'),
);

const _accentRose = DartStyle(
  minWidth: 56,
  padding: EdgeInsets.all(2),
  radius: 9999,
  background: Color('#fb7185'),
);
