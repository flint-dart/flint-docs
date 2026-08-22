import 'package:flint_dart/ui.dart';

class FinalCta extends Component {
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
            gap: 16,
            padding: const EdgeInsets.all(32),
            radius: 20,
            border: Border(color: ThemeToken.color('line'), width: 1),
            background: ThemeToken.color('panel'),
            shadow: ThemeToken.shadow('sm'),
            dark: const DartStyle(
              border: Border(color: Color.rgba(52, 211, 153, 0.38), width: 1),
              background: Color.rgba(8, 47, 73, 0.25),
            ),
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
                Icon(Icons.rocket, size: 13, color: const Color('#34d399')),
                Text.span(
                  'Explore The Ecosystem',
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
              'Choose your starting point in the Flint Ecosystem.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 28,
                fontWeight: 800,
                lineHeight: 1.18,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'Explore dedicated documentation guides, architectures, and examples for each of the four official ecosystem technologies.',
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
                margin: const EdgeInsets.only(top: 16, bottom: 0),
              ),
              children: [
                Link(
                  href: '/fullstack',
                  child: 'Full-Stack Web',
                  tone: Tone.primary,
                ),
                Link(
                  href: '/client',
                  child: 'Client SDK',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                ),
                Link(
                  href: '/ai',
                  child: 'AI Engine',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                ),
                Link(
                  href: '/hardware',
                  child: 'Hardware & Robotics',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}
