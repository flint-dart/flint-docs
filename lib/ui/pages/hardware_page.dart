import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class HardwarePage extends Component {
  HardwarePage(this.props);

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
          _quickGrid(),
          _articleShell(),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 26,
        padding: const EdgeInsets.all(24),
        radius: 24,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(const Color.rgba(249, 115, 22, 0.18), 0),
              GradientStop(const Color.rgba(234, 179, 8, 0.1), 48),
              GradientStop(ThemeToken.color('panel'), 100),
            ],
          ),
          ThemeToken.color('panel'),
        ]),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 24,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 680,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 10,
                  ),
                  children: [
                    _pill('FlintHardware'),
                    _pill('Robotics & Embedded Dart'),
                  ],
                ),
                Text.h1(
                  'Declarative Embedded Systems & Robotics for Dart.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 34,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: ThemeToken.color('text'),
                    md: const DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'Build firmware, sensors, robotics state machines, and Wokwi simulation circuits in 100% pure Dart — compiled directly to ESP32, Raspberry Pi Pico, and STM32.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            _heroActions(),
          ],
        ),
      ],
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        radius: 9999,
        background: const Color.rgba(249, 115, 22, 0.12),
        border: Border.all(color: const Color.rgba(249, 115, 22, 0.32)),
      ),
      children: [
        Text.span(
          label,
          dartStyle: const DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: Color('#ea580c'),
            dark: DartStyle(color: Color('#fdba74')),
          ),
        ),
      ],
    );
  }

  View _heroActions() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 10,
      ),
      children: [
        Link(
          href: 'https://github.com/flint-dart/flint-hardware',
          target: '_blank',
          child: 'View on GitHub',
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            radius: ThemeToken.radius('md'),
            background: ThemeToken.color('accent'),
            color: ThemeToken.color('panel'),
            fontSize: 14,
            fontWeight: 800,
          ),
        ),
        Link(
          href: 'https://pub.dev/packages/flint_hardware',
          target: '_blank',
          child: 'Pub.dev',
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: ThemeToken.color('line')),
            color: ThemeToken.color('text'),
            fontSize: 14,
            fontWeight: 800,
          ),
        ),
      ],
    );
  }

  View _quickGrid() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 14,
      ),
      children: [
        _quickCard('⚡ Multi-MCU', 'Compile to MicroPython, Arduino C++, or C for ESP32 and RP2040.'),
        _quickCard('🤖 Robotics State Machine', 'Declarative state transitions with patrol, avoidance, and docking.'),
        _quickCard('🕹️ Drivers Pack', 'Built-in drivers for HC-SR04, MPU-6050, Differential Drive, and DHT22.'),
        _quickCard('🌐 Wokwi Simulator', 'Auto-generates diagram.json circuits for 1-click browser simulation.'),
      ],
    );
  }

  View _quickCard(String title, String desc) {
    return Container(
      dartStyle: DartStyle(
        flex: 1,
        minWidth: 220,
        padding: const EdgeInsets.all(16),
        radius: ThemeToken.radius('md'),
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(bottom: 6),
            fontSize: 15,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.5,
            color: ThemeToken.color('muted'),
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
          id: 'hardware-content',
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
