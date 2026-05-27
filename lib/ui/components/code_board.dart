import 'dart:async';

import 'package:flint_ui/flint_ui.dart';

import 'copy_text.dart';

class CodeBoard extends Component {
  final String filename;
  final String label;
  final String code;
  bool _copied = false;

  CodeBoard({
    required this.filename,
    required this.code,
    this.label = 'pure Dart',
  });

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 10,
        minWidth: 0,
        padding: EdgeInsets.all(14),
        radius: 8,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(3, 7, 18, 0.78),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
          ),
          children: [
            Text.span(
              filename,
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#cbd5e1'),
              ),
            ),
            Text.span(
              label,
              dartStyle: const DartStyle(
                fontSize: 11,
                fontWeight: 800,
                color: Color('#a7f3d0'),
              ),
            ),
            Button(
              size: ComponentSize.sm,
              variant: ButtonVariant.soft,
              tone: _copied ? Tone.success : Tone.neutral,
              onPressed: (_) => _copyCode(),
              children: [
                Icon(_copied ? Icons.check : Icons.clipboard, size: 14),
                Text.span(_copied ? 'Copied' : 'Copy'),
              ],
            ),
          ],
        ),
        h(
          'pre',
          props: const {
            'style': {
              'margin': '0',
              'overflow-x': 'auto',
              'padding': '14px',
              'border-radius': '8px',
              'background': 'rgba(2, 6, 23, 0.9)',
            },
          },
          children: [
            h(
              'code',
              props: const {
                'style': {
                  'display': 'block',
                  'white-space': 'pre',
                  'font-family':
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                  'font-size': '12px',
                  'line-height': '1.62',
                  'color': '#dbeafe',
                },
              },
              children: [text(code)],
            ),
          ],
        ),
      ],
    );
  }

  Future<void> _copyCode() async {
    copyText(code);

    setState(() => _copied = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copied = false);
    });
  }
}
