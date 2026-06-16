import 'dart:async';

import 'package:flint_ui/flint_ui.dart';

import '../copy_text.dart';
import '../detect_os.dart';

class QuickStart extends Component {
  String? _copiedStep;
  String _selectedOs = 'linux';

  @override
  void didMount() {
    final detected = detectOperatingSystem();
    if (detected != null && detected != _selectedOs) {
      setState(() => _selectedOs = detected);
    }
  }

  @override
  View build() {
    final installCommand = _installCommand(_selectedOs);
    final shellLabel = _selectedOs == 'windows' ? 'cmd / powershell' : 'terminal';

    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: 1152,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 44),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(14, 116, 144, 0.16), 0),
              GradientStop(Color.rgba(15, 23, 42, 0.28), 48),
              GradientStop(Color.rgba(52, 211, 153, 0.1), 100),
            ],
          ),
          Color.rgba(15, 23, 42, 0.2),
        ]),
        sm: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 64),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            alignItems: AlignItems.center,
            gap: 20,
            padding: EdgeInsets.all(14),
            radius: 8,
            border: Border(color: Color.rgba(56, 189, 248, 0.18), width: 1),
            background: Background.layers([
              Gradient.linear(
                145,
                [
                  GradientStop(Color.rgba(2, 6, 23, 0.16), 0),
                  GradientStop(Color.rgba(8, 47, 73, 0.34), 100),
                ],
              ),
              Color.rgba(2, 6, 23, 0.48),
            ]),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.tracks([
                GridTrack.minmax(SizeValue.zero, SizeValue.fr(0.78)),
                GridTrack.minmax(390, GridTrack.oneFr),
              ]),
              gap: 34,
              padding: EdgeInsets.all(22),
            ),
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 14,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Icon(Icons.zap, size: 16, color: Color('#67e8f9')),
                    Text.span(
                      'Quick start',
                      dartStyle: const DartStyle(
                        display: Display.block,
                        fontSize: 12,
                        fontWeight: 800,
                        color: Color('#67e8f9'),
                      ),
                    ),
                  ],
                ),
                Text.h2(
                  'Three commands from empty folder to running app.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 25,
                    fontWeight: 700,
                    lineHeight: 1.18,
                    color: Colors.white,
                    sm: DartStyle(
                      fontSize: 32,
                      lineHeight: 1.15,
                    ),
                  ),
                ),
                Text.p(
                  'Copy each step as you go. Flint keeps the first path short, then the guides can fill in the details when you need them.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    maxWidth: 560,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: Color('#a8b3c5'),
                    sm: DartStyle(
                      fontSize: 15,
                      lineHeight: 1.65,
                    ),
                  ),
                ),
                _osSwitch(),
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 12,
                    margin: EdgeInsets.only(top: 24, bottom: 0),
                  ),
                  children: [
                    Link(href: '/guides/installation', child: 'Installation'),
                    Link(
                      href: '/guides/create-run',
                      child: 'Create and run',
                      variant: ButtonVariant.outline,
                      tone: Tone.neutral,
                    ),
                  ],
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 12,
                width: SizeValue.percent(100),
                minWidth: 0,
                maxWidth: SizeValue.percent(100),
                boxSizing: 'border-box',
                padding: EdgeInsets.all(12),
                radius: 8,
                border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
                background: Color.rgba(3, 7, 18, 0.62),
                sm: DartStyle(
                  padding: EdgeInsets.all(14),
                ),
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
                    Row(
                      dartStyle: const DartStyle(
                        display: Display.flex,
                        alignItems: AlignItems.center,
                        gap: 7,
                      ),
                      children: [
                        Icon(Icons.terminal, size: 15, color: Color('#a7f3d0')),
                        Text.span(
                          'terminal',
                          dartStyle: const DartStyle(
                            fontSize: 12,
                            fontWeight: 800,
                            color: Color('#cbd5e1'),
                          ),
                        ),
                      ],
                    ),
                    Text.span(
                      shellLabel,
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        fontWeight: 800,
                        color: Color('#64748b'),
                      ),
                    ),
                  ],
                ),
                _step(
                  '01',
                  'Install CLI',
                  installCommand,
                ),
                _step('02', 'Create app', 'flint create new_app'),
                _step('03', 'Run server', 'flint run'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _osSwitch() {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        width: SizeValue.percent(100),
        gap: 8,
        margin: EdgeInsets.only(top: 10),
      ),
      children: [
        _osButton('windows', 'Windows'),
        _osButton('macos', 'macOS'),
        _osButton('linux', 'Linux'),
      ],
    );
  }

  View _osButton(String value, String label) {
    final active = _selectedOs == value;

    return Button(
      child: label,
      size: ComponentSize.sm,
      variant: active ? ButtonVariant.solid : ButtonVariant.soft,
      tone: active ? Tone.primary : Tone.neutral,
      props: {
        'aria-pressed': active ? 'true' : 'false',
        'title': 'Show $label commands',
      },
      dartStyle: DartStyle(
        flex: '1 1 84px',
        minHeight: 30,
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        radius: 8,
        border: Border(
          color: active
              ? const Color.rgba(103, 232, 249, 0.52)
              : const Color.rgba(51, 65, 85, 0.72),
          width: 1,
        ),
        background: active
            ? Color.rgba(14, 165, 233, 0.2)
            : Color.rgba(15, 23, 42, 0.44),
        color: active ? const Color('#e0f2fe') : const Color('#94a3b8'),
      ),
      onPressed: (_) => setState(() => _selectedOs = value),
    );
  }

  View _step(String number, String title, String command) {
    final copied = _copiedStep == number;

    return Row(
      dartStyle: const DartStyle(
        position: Position.relative,
        display: Display.flex,
        alignItems: AlignItems.start,
        width: SizeValue.percent(100),
        minWidth: 0,
        boxSizing: 'border-box',
        gap: 10,
        padding: EdgeInsets.only(top: 14, right: 46, bottom: 14, left: 12),
        radius: 8,
        border: Border(color: Color.rgba(51, 65, 85, 0.72), width: 1),
        background: Color.rgba(15, 23, 42, 0.52),
        sm: DartStyle(
          gap: 14,
          padding: EdgeInsets.only(top: 16, right: 54, bottom: 16, left: 16),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            flex: '0 0 36px',
            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 8),
            radius: 8,
            background: Color.rgba(56, 189, 248, 0.12),
            border: Border(color: Color.rgba(56, 189, 248, 0.34), width: 1),
            sm: DartStyle(
              flex: '0 0 42px',
            ),
          ),
          children: [
            Text.span(
              number,
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#bae6fd'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 6,
            minWidth: 0,
            maxWidth: SizeValue.percent(100),
            overflow: 'hidden',
          ),
          children: [
            Text.h3(
              title,
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 16,
                fontWeight: 700,
                color: Colors.white,
              ),
            ),
            Text.p(
              command,
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontFamily: FontFamily.monospace,
                fontSize: 11,
                lineHeight: 1.5,
                maxWidth: SizeValue.percent(100),
                overflow: 'auto',
                color: Color('#cbd5e1'),
                sm: DartStyle(
                  fontSize: 12,
                ),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            position: Position.absolute,
            top: 10,
            right: 10,
          ),
          children: [
            Button(
              child: Icon(
                copied ? Icons.check : Icons.clipboard,
                size: 14,
              ),
              size: ComponentSize.sm,
              variant: ButtonVariant.soft,
              tone: copied ? Tone.success : Tone.neutral,
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                width: 28,
                height: 28,
                padding: EdgeInsets.all(0),
                minHeight: 0,
              ),
              onPressed: (_) => _copyStep(number, command),
            ),
          ],
        ),
      ],
    );
  }

  void _copyStep(String number, String command) {
    copyText(command);
    setState(() => _copiedStep = number);
    Timer(const Duration(seconds: 2), () {
      if (_copiedStep == number) {
        setState(() => _copiedStep = null);
      }
    });
  }

  String _installCommand(String os) {
    if (os == 'windows') {
      return 'powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://flintdart.dev/install.ps1 | iex"';
    }
    return 'curl -fsSL https://flintdart.dev/install.sh | sh';
  }
}
