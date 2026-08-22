import 'package:flint_dart/ui.dart';

class WorkflowSection extends Component {
  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 64),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            alignItems: AlignItems.center,
            gap: 36,
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.tracks([
                GridTrack.minmax(420, GridTrack.oneFr),
                GridTrack.minmax(SizeValue.zero, SizeValue.fr(0.9)),
              ]),
              gap: 48,
            ),
          ),
          children: [
            _ecosystemFlowVisual(),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 14,
                minWidth: 300,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Icon(Icons.route, size: 16, color: const Color('#38bdf8')),
                    Text.span(
                      'Cross-Stack Synergy',
                      dartStyle: const DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: Color('#38bdf8'),
                        letterSpacing: 0.5,
                      ),
                    ),
                  ],
                ),
                Text.h2(
                  'Four Pillars. One Seamless Workflow.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 32,
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.p(
                  'Data moves effortlessly from embedded hardware sensors into autonomous AI workflows, through secure backend database gateways, and up to real-time client dashboards — without converting data formats or switching languages.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: ThemeToken.color('muted'),
                  ),
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 12,
                    margin: const EdgeInsets.only(top: 12),
                  ),
                  children: [
                    Link(
                      href: '/fullstack',
                      tone: Tone.primary,
                      children: [
                        Text.span('Full-Stack Web'),
                        Icon(Icons.arrowRight, size: 16),
                      ],
                    ),
                    Link(
                      href: '/hardware',
                      variant: ButtonVariant.outline,
                      tone: Tone.neutral,
                      children: [
                        Text.span('Robotics Guide'),
                        Icon(Icons.arrowRight, size: 16),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _ecosystemFlowVisual() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(20),
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        _flowStep(
          step: '1',
          title: 'Edge Hardware & Sensors',
          desc: 'HC-SR04 sonar & IMU sensors capture real-time telemetry.',
          color: '#f97316',
          icon: Icons.zap,
        ),
        _flowConnector(),
        _flowStep(
          step: '2',
          title: 'Autonomous AI Engine',
          desc: 'Multimodal agents analyze telemetry & invoke decision tools.',
          color: '#a78bfa',
          icon: Icons.sparkles,
        ),
        _flowConnector(),
        _flowStep(
          step: '3',
          title: 'Full-Stack Server & DB Gateway',
          desc:
              'Flint Dart enforces Row-Level Security & persists event models.',
          color: '#34d399',
          icon: Icons.server,
        ),
        _flowConnector(),
        _flowStep(
          step: '4',
          title: 'Universal Client & Web UI',
          desc: 'Clients stream live updates over real-time reactive signals.',
          color: '#38bdf8',
          icon: Icons.globe,
        ),
      ],
    );
  }

  View _flowStep({
    required String step,
    required String title,
    required String desc,
    required String color,
    required IconData icon,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.start,
        gap: 14,
        padding: const EdgeInsets.all(14),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
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
            background: Color.rgba(15, 23, 42, 0.7),
            border: Border.all(color: Color(color)),
          ),
          children: [
            Icon(icon, size: 18, color: Color(color)),
          ],
        ),
        Container(
          dartStyle: DartStyle(display: Display.grid, gap: 3),
          children: [
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
              desc,
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 12,
                lineHeight: 1.45,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  View _flowConnector() {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
        padding: const EdgeInsets.symmetric(vertical: 2),
      ),
      children: [
        Icon(Icons.arrowDown, size: 16, color: ThemeToken.color('muted')),
      ],
    );
  }
}
