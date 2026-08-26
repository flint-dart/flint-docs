import 'package:flint_dart/ui.dart';

class DartAmplified extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80)),
        xl: const DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        // Section Header
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 14,
            maxWidth: 840,
            minWidth: 0,
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                flexWrap: FlexWrap.wrap,
                gap: 8,
                maxWidth: SizeValue.percent(100),
                width: const SizeValue('fit-content'),
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 14,
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
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.15,
                color: ThemeToken.color('text'),
                letterSpacing: -0.5,
                md: const DartStyle(fontSize: 36),
                lg: const DartStyle(fontSize: 42),
              ),
            ),
            Text.p(
              'For years, developers loved Dart’s elegance, sound null safety, and fast compilation — but were confined to client UI. Flint unlocks Dart across the entire computing spectrum: Cloud Backends, WebAssembly SSR, Autonomous AI Agents, and Bare-Metal Robotics.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: ThemeToken.color('muted'),
                md: const DartStyle(fontSize: 16),
              ),
            ),
          ],
        ),

        // 6 Pillars of Dart Amplification Grid
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 20,
            minWidth: 0,
            margin: const EdgeInsets.only(top: 48, bottom: 40),
            md: const DartStyle(
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            ),
            lg: const DartStyle(
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
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
            minWidth: 0,
            padding: const EdgeInsets.all(18),
            radius: 18,
            background: const Color.rgba(15, 23, 42, 0.75),
            border: Border.all(color: const Color.rgba(56, 189, 248, 0.2)),
            sm: const DartStyle(padding: EdgeInsets.all(28)),
            md: const DartStyle(padding: EdgeInsets.all(36)),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: 24,
                alignItems: AlignItems.center,
                minWidth: 0,
                lg: const DartStyle(
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                ),
              ),
              children: [
                Column(
                  dartStyle: const DartStyle(
                    gap: 8,
                    alignItems: AlignItems.start,
                    maxWidth: 620,
                  ),
                  children: [
                    Text.h3(
                      'Dart Was Built for Modern Software Engineering',
                      dartStyle: DartStyle(
                        fontSize: 20,
                        fontWeight: 800,
                        color: ThemeToken.color('text'),
                        margin: const EdgeInsets.all(0),
                      ),
                    ),
                    Text.p(
                      'Flint finishes the vision: elevating Dart from an exceptional UI language into the most unified, productive, and versatile programming ecosystem on earth.',
                      dartStyle: DartStyle(
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: ThemeToken.color('muted'),
                        margin: const EdgeInsets.all(0),
                      ),
                    ),
                  ],
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 12,
                    width: SizeValue.percent(100),
                    minWidth: 0,
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
                        padding: const EdgeInsets.symmetric(
                            horizontal: 20, vertical: 12),
                        radius: 10,
                        background: const Color('#38bdf8'),
                        color: const Color('#050b14'),
                        fontWeight: 800,
                        fontSize: 13,
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: const DartStyle(width: SizeValue.auto),
                      ),
                      children: [
                        Text.span(
                          'Explore Fullstack Dart',
                          dartStyle: const DartStyle(
                              color: Color('#050b14'), fontWeight: 800),
                        ),
                        Icon(Icons.arrowRight,
                            size: 16, color: const Color('#050b14')),
                      ],
                    ),
                    Link(
                      href: '/hardware',
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 20, vertical: 12),
                        radius: 10,
                        background: ThemeToken.color('panelStrong'),
                        border: Border.all(color: ThemeToken.color('line')),
                        color: ThemeToken.color('text'),
                        fontWeight: 700,
                        fontSize: 13,
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: const DartStyle(width: SizeValue.auto),
                      ),
                      children: [
                        Text.span(
                          'See Dart on Hardware',
                          dartStyle: DartStyle(
                              color: ThemeToken.color('text'), fontWeight: 700),
                        ),
                        Icon(Icons.zap,
                            size: 15, color: const Color('#f97316')),
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
        minWidth: 0,
        padding: const EdgeInsets.all(18),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        position: Position.relative,
        hover: DartStyle(
          border: Border.all(color: Color(accentColor)),
        ),
        sm: const DartStyle(padding: EdgeInsets.all(20)),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 12, alignItems: AlignItems.start),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                flexWrap: FlexWrap.wrap,
                width: const SizeValue.percent(100),
                gap: 12,
                minWidth: 0,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 40,
                    height: 40,
                    radius: 10,
                    background: Color.rgba(r, g, b, 0.15),
                    border: Border.all(color: Color.rgba(r, g, b, 0.35)),
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                    flexShrink: 0,
                  ),
                  children: [
                    Icon(icon, size: 18, color: Color(accentColor)),
                  ],
                ),
                Text.span(
                  badge,
                  dartStyle: DartStyle(
                    fontSize: 10,
                    fontWeight: 800,
                    color: Color(accentColor),
                    padding:
                        const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
                    radius: 999,
                    background: Color.rgba(r, g, b, 0.1),
                    border: Border.all(color: Color.rgba(r, g, b, 0.25)),
                    maxWidth: SizeValue.percent(100),
                  ),
                ),
              ],
            ),
            Column(
              dartStyle: const DartStyle(gap: 4, alignItems: AlignItems.start),
              children: [
                Text.h3(
                  title,
                  dartStyle: DartStyle(
                    fontSize: 17,
                    fontWeight: 800,
                    color: ThemeToken.color('text'),
                    margin: const EdgeInsets.all(0),
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
              dartStyle: DartStyle(
                fontSize: 13,
                lineHeight: 1.55,
                color: ThemeToken.color('muted'),
                margin: const EdgeInsets.all(0),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
