import 'package:flint_dart/ui.dart';

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
              dartStyle: DartStyle(minWidth: 0),
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

final _cardStyle = DartStyle(
  display: Display.grid,
  gap: 20,
  padding: EdgeInsets.all(24),
  radius: 18,
  border: Border(color: Color.rgba(52, 211, 153, 0.34), width: 1),
  background: ThemeToken.color('panel'),
  shadow: Shadow(
    y: 20,
    blur: 44,
    spread: -24,
    color: Color.rgba(16, 185, 129, 0.28),
  ),
);

final _headerStyle = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.between,
  gap: 20,
);

final _eyebrowStyle = DartStyle(
  display: Display.block,
  color: ThemeToken.color('primary'),
  fontSize: 12,
  fontWeight: 800,
);

final _titleStyle = DartStyle(
  margin: EdgeInsets.only(top: 8, bottom: 0),
  color: ThemeToken.color('text'),
  fontSize: SizeValue.rem(1.75),
  lineHeight: 1.16,
);

final _bodyStyle = DartStyle(
  maxWidth: 640,
  margin: EdgeInsets.only(top: 8, bottom: 0),
  color: ThemeToken.color('muted'),
  fontSize: 14,
  lineHeight: 1.6,
);

final _countShellStyle = DartStyle(
  display: Display.flex,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.center,
  minWidth: 120,
  padding: EdgeInsets.symmetric(vertical: 16, horizontal: 24),
  radius: 18,
  border: Border(color: ThemeToken.color('line'), width: 1),
  background: ThemeToken.color('panelStrong'),
);

final _countStyle = DartStyle(
  color: ThemeToken.color('primary'),
  fontSize: 44,
  fontWeight: 800,
  lineHeight: 1,
);

final _actionsStyle = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  gap: 12,
);
