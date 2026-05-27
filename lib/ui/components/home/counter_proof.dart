import 'package:flint_ui/flint_ui.dart';

import '../code_board.dart';

class CounterProof extends Component {
  int count = 0;

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
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
            background: Color.rgba(2, 6, 23, 0.5),
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
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 18,
                minWidth: 280,
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    display: Display.grid,
                    gap: 9,
                  ),
                  children: [
                    Text.span(
                      'Live proof',
                      dartStyle: const DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: Color('#a7f3d0'),
                      ),
                    ),
                    Text.h2(
                      'This counter is a real Flint component.',
                      dartStyle: const DartStyle(
                        margin: EdgeInsets.all(0),
                        maxWidth: 560,
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1.16,
                        color: Colors.white,
                      ),
                    ),
                    Text.p(
                      'Click it and the state updates through Dart in the browser, inside the same docs page.',
                      dartStyle: const DartStyle(
                        margin: EdgeInsets.all(0),
                        maxWidth: 620,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: Color('#9ca8ba'),
                      ),
                    ),
                  ],
                ),
                _counterControls(),
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
      dartStyle: const DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        gap: 12,
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            minWidth: 92,
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            radius: 8,
            border: Border(color: Color.rgba(148, 163, 184, 0.18), width: 1),
            background: Color.rgba(15, 23, 42, 0.76),
          ),
          children: [
            Text.span(
              count,
              dartStyle: const DartStyle(
                fontSize: 34,
                fontWeight: 900,
                lineHeight: 1,
                color: Color('#a7f3d0'),
              ),
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
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
