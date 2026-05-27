import 'package:flint_ui/flint_ui.dart';

class CounterDemo extends FlintComponent {
  int count = 0;

  @override
  FlintNode build() {
    return Container(
      dartStyle: _cardStyle,
      children: [
        Row(
          dartStyle: _headerStyle,
          children: [
            Container(
              dartStyle: const DartStyle(minWidth: 0),
              children: [
                Text.span(
                  'Interactive Flint UI island',
                  dartStyle: _eyebrowStyle,
                ),
                Text.h2(
                  'Counter running in the browser',
                  dartStyle: _titleStyle,
                ),
                Text.p(
                  'This section is rendered by Flint UI inside the existing Flint template page.',
                  dartStyle: _bodyStyle,
                ),
              ],
            ),
            Container(
              dartStyle: _countShellStyle,
              children: [
                Text.span(count, dartStyle: _countStyle),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: _actionsStyle,
          children: [
            Button(
              child: 'Decrease',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              onPressed: (_) => setState(() => count--),
            ),
            Button(
              child: 'Reset',
              variant: ButtonVariant.soft,
              tone: Tone.neutral,
              onPressed: (_) => setState(() => count = 0),
            ),
            Button(
              child: 'Increase',
              tone: Tone.primary,
              onPressed: (_) => setState(() => count++),
            ),
          ],
        ),
      ],
    );
  }
}

const _cardStyle = DartStyle(
  display: Display.grid,
  gap: 20,
  padding: EdgeInsets.all(24),
  radius: 18,
  border: Border(color: Color.rgba(52, 211, 153, 0.34), width: 1),
  background: Color.rgba(15, 23, 42, 0.78),
  shadow: Shadow(
    y: 20,
    blur: 44,
    spread: -24,
    color: Color.rgba(16, 185, 129, 0.28),
  ),
);

const _headerStyle = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.between,
  gap: 20,
);

const _eyebrowStyle = DartStyle(
  display: Display.block,
  color: Color('#a7f3d0'),
  fontSize: 12,
  fontWeight: 800,
);

const _titleStyle = DartStyle(
  margin: EdgeInsets.only(top: 8, bottom: 0),
  color: Colors.white,
  fontSize: SizeValue.rem(1.75),
  lineHeight: 1.16,
);

const _bodyStyle = DartStyle(
  maxWidth: 640,
  margin: EdgeInsets.only(top: 8, bottom: 0),
  color: Color('#94a3b8'),
  fontSize: 14,
  lineHeight: 1.6,
);

const _countShellStyle = DartStyle(
  display: Display.flex,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.center,
  minWidth: 120,
  padding: EdgeInsets.symmetric(vertical: 16, horizontal: 24),
  radius: 18,
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(2, 6, 23, 0.72),
);

const _countStyle = DartStyle(
  color: Color('#a7f3d0'),
  fontSize: 44,
  fontWeight: 800,
  lineHeight: 1,
);

const _actionsStyle = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  gap: 12,
);
