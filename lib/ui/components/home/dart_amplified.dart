import 'package:flint_dart/ui.dart';

class DartAmplified extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 72),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 80)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 96)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 104)),
        border: Border(color: const Color.rgba(56, 189, 248, 0.15), width: 1),
        background: const Color('#050b14'),
      ),
      children: [
        // Section Header
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 14,
            maxWidth: 840,
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                width: const SizeValue('fit-content'),
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 999,
                background: const Color.rgba(56, 189, 248, 0.12),
                border: Border.all(color: const Color.rgba(56, 189, 248, 0.35)),
              ),
              children: [
                Icon(Icons.sparkles, size: 14, color: const Color('#38bdf8')),
                Text.span(
                  'THE DART LANGUAGE RENAISSANCE',
                  dartStyle: const DartStyle(
                    color: Color('#38bdf8'),
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  ),
                ),
              ],
            ),
            Text.h2(
              'How Flint Amplifies the Dart Language',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 34,
                fontWeight: 900,
                lineHeight: 1.15,
                color: const Color('#ffffff'),
                letterSpacing: -0.5,
                md: const DartStyle(fontSize: 42),
              ),
            ),
            Text.p(
              'For years, developers loved Dart’s elegance, sound null safety, and fast compilation — but were confined to client UI. Flint unlocks Dart across the entire computing spectrum: Cloud Backends, WebAssembly SSR, Autonomous AI Agents, and Bare-Metal Robotics.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 16,
                lineHeight: 1.7,
                color: const Color('#94a3b8'),
              ),
            ),
          ],
        ),

        // 6 Pillars of Dart Amplification Grid
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 20,
            margin: const EdgeInsets.only(top: 48, bottom: 40),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr),
            ),
          ),
          children: [
            _superpowerCard(
              number: '01',
              title: 'Universal Computing Surface',
              subtitle: 'Beyond the Client Sandbox',
              body:
                  'No longer confined to mobile apps. Flint makes Dart a first-class language for High-Concurrency Cloud APIs, Real-Time Web, Edge AI, and Microcontroller Firmware.',
              accentColor: '#38bdf8',
              icon: Icons.globe,
              badge: 'Universal Dart',
            ),
            _superpowerCard(
              number: '02',
              title: 'End-to-End Null Safety',
              subtitle: 'Zero Runtime Type Drift',
              body:
                  'Experience absolute type certainty. From PostgreSQL database schema columns, HTTP Context payloads, AI tool parameters, down to GPIO pins — everything is verified at compile time.',
              accentColor: '#10b981',
              icon: Icons.shield,
              badge: 'Sound Types',
            ),
            _superpowerCard(
              number: '03',
              title: 'Dual Compilation Prowess',
              subtitle: 'Sub-Second JIT + Native AOT',
              body:
                  'Instant hot reload during local development, and sub-millisecond cold starts in production via native AOT binaries with zero JRE/Node runtime bloat.',
              accentColor: '#f59e0b',
              icon: Icons.zap,
              badge: 'JIT & AOT',
            ),
            _superpowerCard(
              number: '04',
              title: 'Lock-Free Concurrency',
              subtitle: 'Actor Isolates & Zero Deadlocks',
              body:
                  'Dart Isolates provide true shared-nothing memory actor concurrency. Handle high-throughput WebSocket broadcasts and parallel AI agent streaming without mutex bugs.',
              accentColor: '#a855f7',
              icon: Icons.layers,
              badge: 'Isolate Actors',
            ),
            _superpowerCard(
              number: '05',
              title: 'Bare-Metal & C-FFI Transpilation',
              subtitle: 'Direct Hardware & C99 Code Gen',
              body:
                  'Flint Hardware transpiles declarative Dart robotics definitions directly into native C99, C++, and MicroPython for ESP32, nRF52, and ROS 2 robotics nodes.',
              accentColor: '#f43f5e',
              icon: Icons.code,
              badge: 'C99 & ROS 2',
            ),
            _superpowerCard(
              number: '06',
              title: 'Zero Context Switching',
              subtitle: 'One Mindset. One Team. One pub.dev',
              body:
                  'Unify your entire engineering organization. Share models, validation rules, utility logic, and client SDKs seamlessly across backend, frontend, and hardware teams.',
              accentColor: '#06b6d4',
              icon: Icons.server,
              badge: '10x Velocity',
            ),
          ],
        ),

        // Deep Matrix / Summary Banner
        Container(
          dartStyle: DartStyle(
            width: const SizeValue.percent(100),
            padding: const EdgeInsets.all(28),
            radius: 18,
            background: const Color.rgba(15, 23, 42, 0.75),
            border: Border.all(color: const Color.rgba(56, 189, 248, 0.2)),
            md: const DartStyle(padding: EdgeInsets.all(36)),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 24,
                alignItems: AlignItems.center,
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
                ),
              ),
              children: [
                Column(
                  dartStyle: const DartStyle(gap: 12, alignItems: AlignItems.start),
                  children: [
                    Text.h3(
                      'Dart Was Built for Modern Software Engineering',
                      dartStyle: const DartStyle(
                        fontSize: 22,
                        fontWeight: 800,
                        color: Color('#ffffff'),
                        margin: EdgeInsets.all(0),
                      ),
                    ),
                    Text.p(
                      'Flint finishes the vision: elevating Dart from an exceptional UI language into the most unified, productive, and versatile programming ecosystem on earth.',
                      dartStyle: const DartStyle(
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: Color('#94a3b8'),
                        margin: EdgeInsets.all(0),
                      ),
                    ),
                  ],
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 12,
                    justifyContent: JustifyContent.start,
                    lg: const DartStyle(justifyContent: JustifyContent.end),
                  ),
                  children: [
                    Link(
                      href: '/fullstack',
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                        radius: 10,
                        background: const Color('#38bdf8'),
                        color: const Color('#050b14'),
                        fontWeight: 800,
                        fontSize: 13,
                      ),
                      children: [
                        Text.span(
                          'Explore Fullstack Dart',
                          dartStyle: const DartStyle(color: Color('#050b14'), fontWeight: 800),
                        ),
                        Icon(Icons.arrowRight, size: 16, color: const Color('#050b14')),
                      ],
                    ),
                    Link(
                      href: '/hardware',
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                        radius: 10,
                        background: const Color.rgba(255, 255, 255, 0.05),
                        border: Border.all(color: const Color.rgba(255, 255, 255, 0.15)),
                        color: const Color('#ffffff'),
                        fontWeight: 700,
                        fontSize: 13,
                      ),
                      children: [
                        Text.span(
                          'See Dart on Hardware',
                          dartStyle: const DartStyle(color: Color('#ffffff'), fontWeight: 700),
                        ),
                        Icon(Icons.zap, size: 15, color: const Color('#f97316')),
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

  FlintNode _superpowerCard({
    required String number,
    required String title,
    required String subtitle,
    required String body,
    required String accentColor,
    required IconData icon,
    required String badge,
  }) {
    final r = int.parse(accentColor.substring(1, 3), radix: 16);
    final g = int.parse(accentColor.substring(3, 5), radix: 16);
    final b = int.parse(accentColor.substring(5, 7), radix: 16);

    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        padding: const EdgeInsets.all(24),
        radius: 16,
        background: const Color.rgba(15, 23, 42, 0.6),
        border: Border.all(color: const Color.rgba(255, 255, 255, 0.08)),
        position: Position.relative,
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 14, alignItems: AlignItems.start),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                width: const SizeValue.percent(100),
                gap: 12,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 42,
                    height: 42,
                    radius: 10,
                    background: Color.rgba(r, g, b, 0.15),
                    border: Border.all(color: Color.rgba(r, g, b, 0.35)),
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                  ),
                  children: [
                    Icon(icon, size: 20, color: Color(accentColor)),
                  ],
                ),
                Text.span(
                  badge,
                  dartStyle: DartStyle(
                    fontSize: 10,
                    fontWeight: 800,
                    color: Color(accentColor),
                    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
                    radius: 999,
                    background: Color.rgba(r, g, b, 0.1),
                    border: Border.all(color: Color.rgba(r, g, b, 0.25)),
                  ),
                ),
              ],
            ),
            Column(
              dartStyle: const DartStyle(gap: 4, alignItems: AlignItems.start),
              children: [
                Text.h3(
                  title,
                  dartStyle: const DartStyle(
                    fontSize: 18,
                    fontWeight: 800,
                    color: Color('#ffffff'),
                    margin: EdgeInsets.all(0),
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
              ],
            ),
            Text.p(
              body,
              dartStyle: const DartStyle(
                fontSize: 13,
                lineHeight: 1.6,
                color: Color('#94a3b8'),
                margin: EdgeInsets.all(0),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
