import 'package:flint_dart/ui.dart';

import '../code_board.dart';

class CounterProof extends Component {
  int count = 0;

  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 28),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            alignItems: AlignItems.center,
            gap: 22,
            padding: EdgeInsets.all(20),
            radius: 8,
            border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
            background: ThemeToken.color('panelStrong'),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.tracks([
                GridTrack.minmax(SizeValue.zero, SizeValue.fr(0.9)),
                GridTrack.minmax(360, GridTrack.oneFr),
              ]),
              gap: 24,
            ),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 18,
                minWidth: 280,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    display: Display.grid,
                    gap: 9,
                  ),
                  children: [
                    Text.span(
                      'Live proof',
                      dartStyle: DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: ThemeToken.color('primary'),
                      ),
                    ),
                    Text.h2(
                      'This counter is a real Flint component.',
                      dartStyle: DartStyle(
                        margin: EdgeInsets.all(0),
                        maxWidth: 560,
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1.16,
                        color: ThemeToken.color('text'),
                      ),
                    ),
                    Text.p(
                      'Click it and the state updates through Dart in the browser, inside the same docs page.',
                      dartStyle: DartStyle(
                        margin: EdgeInsets.all(0),
                        maxWidth: 620,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: ThemeToken.color('muted'),
                      ),
                    ),
                  ],
                ),
                _counterControls(),
                _themeModeControls(),
              ],
            ),
            CodeBoard(
              filename: 'counter_proof.dart',
              code: _counterCode,
            ),
          ],
        ),
      ],
    );
  }

  View _counterControls() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        gap: 12,
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            minWidth: 92,
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            radius: 8,
            border: Border(color: Color.rgba(148, 163, 184, 0.18), width: 1),
            background: ThemeToken.color('panel'),
          ),
          children: [
            Text.span(
              count,
              dartStyle: DartStyle(
                fontSize: 34,
                fontWeight: 900,
                lineHeight: 1,
                color: ThemeToken.color('primary'),
              ),
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 8,
          ),
          children: [
            Button(
              child: '-',
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
              child: '+',
              tone: Tone.primary,
              onPressed: (_) => setState(() => count++),
            ),
          ],
        ),
      ],
    );
  }

  View _themeModeControls() {
    return StateSignalListener(flintTheme.mode, (mode) {
      final isDark = mode == FlintThemeMode.dark;

      return Container(
        dartStyle: DartStyle(
          display: Display.flex,
          flexWrap: FlexWrap.wrap,
          alignItems: AlignItems.center,
          justifyContent: JustifyContent.between,
          gap: 12,
          padding: const EdgeInsets.all(14),
          radius: ThemeToken.radius('md'),
          background: ThemeToken.color('panel'),
          color: ThemeToken.color('text'),
          light: DartStyle(
            border: Border.all(color: ThemeToken.color('line')),
            shadow: const Shadow(
              y: 12,
              blur: 32,
              spread: -24,
              color: Color.rgba(15, 23, 42, 0.22),
            ),
          ),
          dark: DartStyle(
            border: Border.all(color: Color.rgba(52, 211, 153, 0.24)),
            shadow: ThemeToken.shadow('glow'),
          ),
        ),
        children: [
          Column(
            dartStyle: DartStyle(
              display: Display.grid,
              gap: 4,
            ),
            children: [
              Text.strong(
                'Theme state',
                dartStyle: DartStyle(fontSize: 13),
              ),
              Text.span(
                isDark ? 'Dark mode is active' : 'Light mode is active',
                dartStyle: DartStyle(
                  fontSize: 12,
                  color: ThemeToken.color('muted'),
                ),
              ),
            ],
          ),
          Button(
            child: isDark ? 'Switch to light' : 'Switch to dark',
            variant: ButtonVariant.soft,
            tone: Tone.primary,
            onPressed: (_) => flintTheme.toggle(),
          ),
        ],
      );
    });
  }
}

const _counterCode = '''class CounterProof extends Component {
  int count = 0;

  @override
  View build() {
    return Row(
      children: [
        Text.span(count),
        Button(
          child: '+',
          onPressed: (_) => setState(() => count++),
        ),
      ],
    );
  }
}''';
