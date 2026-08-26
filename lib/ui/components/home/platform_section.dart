import 'package:flint_dart/ui.dart';

class PlatformSection extends Component {
  @override
  View build() {
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
                background: const Color.rgba(56, 189, 248, 0.12),
                border: Border.all(color: const Color.rgba(56, 189, 248, 0.3)),
              ),
              children: [
                Icon(Icons.layers, size: 13, color: const Color('#38bdf8')),
                Text.span(
                  'Four Ecosystem Pillars',
                  dartStyle: const DartStyle(
                    color: Color('#38bdf8'),
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 0.5,
                  ),
                ),
              ],
            ),
            Text.h2(
              'The Complete Dart Technology Stack',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1.15,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'From server routes and browser UI to cross-platform client SDKs, AI agent mesh, and hardware robotics — everything runs in Dart.',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
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
                    GridTemplateColumns.repeat(4, GridTrack.oneFr)),
          ),
          children: [
            _pillarCard(
              title: 'Flint Dart',
              subtitle: 'Full-Stack Web Framework',
              body:
                  'Server HTTP routes, SSR, declarative Web UI, Row-Level Security database API gateway, and migrations.',
              linkHref: '/fullstack',
              linkLabel: 'Explore Fullstack',
              accentColor: '#34d399',
              icon: Icons.server,
            ),
            _pillarCard(
              title: 'Flint Client',
              subtitle: 'Universal Client SDK',
              body:
                  'Cross-platform HTTP & WebSocket client with memory/disk caching, offline sync, and real-time DB channels.',
              linkHref: '/client',
              linkLabel: 'Explore Client',
              accentColor: '#38bdf8',
              icon: Icons.globe,
            ),
            _pillarCard(
              title: 'Flint AI',
              subtitle: 'Autonomous AI Engine',
              body:
                  'Multi-provider agent mesh, streaming chat, embeddings, function calling, audio transcription, and persistent memory.',
              linkHref: '/ai',
              linkLabel: 'Explore AI Engine',
              accentColor: '#a78bfa',
              icon: Icons.sparkles,
            ),
            _pillarCard(
              title: 'Flint Hardware',
              subtitle: 'Robotics & IoT SDK',
              body:
                  'Robotics state machines, HC-SR04 sonar, MPU6050 IMU, motor drivers, and Wokwi virtual simulator bundles.',
              linkHref: '/hardware',
              linkLabel: 'Explore Hardware',
              accentColor: '#f97316',
              icon: Icons.zap,
            ),
          ],
        ),
      ],
    );
  }

  View _pillarCard({
    required String title,
    required String subtitle,
    required String body,
    required String linkHref,
    required String linkLabel,
    required String accentColor,
    required IconData icon,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        justifyContent: JustifyContent.between,
        gap: 16,
        padding: EdgeInsets.all(20),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        hover: DartStyle(
          border: Border(color: Color(accentColor), width: 1),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(display: Display.grid, gap: 10),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 40,
                height: 40,
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                radius: 10,
                background: Color.rgba(15, 23, 42, 0.6),
                border: Border.all(color: Color(accentColor)),
              ),
              children: [
                Icon(icon, size: 20, color: Color(accentColor)),
              ],
            ),
            Text.h3(
              title,
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 18,
                fontWeight: 800,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.span(
              subtitle,
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 700,
                color: Color(accentColor),
              ),
            ),
            Text.p(
              body,
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 13,
                lineHeight: 1.55,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Link(
          href: linkHref,
          child: linkLabel,
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            fontSize: 13,
            fontWeight: 800,
            color: Color(accentColor),
            hover: const DartStyle(textDecoration: 'underline'),
          ),
        ),
      ],
    );
  }
}
