import 'package:flint_dart/ui.dart';

class WorkflowSection extends Component {
  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        minWidth: 0,
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 56),
        md: DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 36, vertical: 64)),
        lg: DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 56, vertical: 72)),
        xl: DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 80, vertical: 80)),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            alignItems: AlignItems.center,
            gap: 32,
            width: const SizeValue.percent(100),
            minWidth: 0,
            lg: const DartStyle(
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 48,
            ),
          ),
          children: [
            _ecosystemFlowVisual(),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 14,
                minWidth: 0,
                width: SizeValue.percent(100),
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
                    fontSize: 28,
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: ThemeToken.color('text'),
                    md: const DartStyle(fontSize: 32),
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
                    width: SizeValue.percent(100),
                    margin: const EdgeInsets.only(top: 12),
                  ),
                  children: [
                    Link(
                      href: '/fullstack',
                      tone: Tone.primary,
                      dartStyle: const DartStyle(
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: DartStyle(width: SizeValue.auto),
                      ),
                      children: [
                        Text.span('Full-Stack Web'),
                        Icon(Icons.arrowRight, size: 16),
                      ],
                    ),
                    Link(
                      href: '/hardware',
                      variant: ButtonVariant.outline,
                      tone: Tone.neutral,
                      dartStyle: const DartStyle(
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: DartStyle(width: SizeValue.auto),
                      ),
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
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.all(16),
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        sm: const DartStyle(padding: EdgeInsets.all(20)),
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
        minWidth: 0,
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
            flexShrink: 0,
            radius: 8,
            background: Color.rgba(15, 23, 42, 0.7),
            border: Border.all(color: Color(color)),
          ),
          children: [
            Icon(icon, size: 18, color: Color(color)),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 3,
            minWidth: 0,
            flex: '1 1 0',
          ),
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
