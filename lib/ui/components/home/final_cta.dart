import 'package:flint_ui/flint_ui.dart';

class FinalCta extends Component {
  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 64),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 12,
            padding: EdgeInsets.all(28),
            radius: 8,
            border: Border(color: Color.rgba(52, 211, 153, 0.38), width: 1),
            background: Color.rgba(8, 47, 73, 0.25),
          ),
          children: [
            Text.span(
              'Ready path',
              dartStyle: const DartStyle(
                display: Display.block,
                fontSize: 12,
                fontWeight: 800,
                color: Color('#67e8f9'),
              ),
            ),
            Text.h2(
              'Start with the guide, then jump into the API.',
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1.18,
                color: Colors.white,
              ),
            ),
            Text.p(
              'The docs now point users into Markdown-backed guides and Dart-powered pages, with no old view templates in the way.',
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: Color('#a8b3c5'),
              ),
            ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                gap: 12,
                margin: EdgeInsets.only(top: 24, bottom: 0),
              ),
              children: [
                Link(href: '/guides', child: 'Open guides', tone: Tone.primary),
                Link(
                  href: '/examples',
                  child: 'See examples',
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
