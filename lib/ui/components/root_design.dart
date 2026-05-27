import 'package:flint_ui/flint_ui.dart';

const docsTheme = FlintTheme(
  colors: {
    'bg': Color('#05070d'),
    'text': Colors.white,
    'muted': Color('#a8b3c5'),
    'panel': Color('#0f172a'),
    'panelStrong': Color('#111827'),
    'line': Color.rgba(51, 65, 85, 0.82),
    'primary': Color('#34d399'),
    'accent': Color('#38bdf8'),
    'warning': Color('#f59e0b'),
  },
  spacing: {
    'pageX': SizeValue('min(1152px, calc(100% - 32px))'),
    'sectionY': 64,
  },
  radii: {
    'md': 8,
    'pill': 9999,
  },
  shadows: {
    'glow': Shadow(
      y: 18,
      blur: 54,
      spread: -30,
      color: Color.rgba(56, 189, 248, 0.42),
    ),
  },
  fonts: {
    'sans': FontFamily.systemSans,
    'mono': FontFamily.monospace,
  },
);

final docsRootDesign = RootDesign(
  name: 'flint-docs-root',
  theme: docsTheme,
  all: const DartStyle(boxSizing: BoxSizing.borderBox),
  html: const DartStyle(scrollBehavior: ScrollBehavior.smooth),
  body: DartStyle(
    margin: const EdgeInsets.all(0),
    background: Background.layers([
      Gradient.radialCircle(
        at: const GradientPosition.percent(18, 0),
        stops: const [
          GradientStop(Color.rgba(56, 189, 248, 0.16)),
          GradientStop(Colors.transparent, 32),
        ],
      ),
      Gradient.radialCircle(
        at: const GradientPosition.percent(88, 8),
        stops: const [
          GradientStop(Color.rgba(52, 211, 153, 0.12)),
          GradientStop(Colors.transparent, 28),
        ],
      ),
      ThemeToken.color('bg'),
    ]),
    color: ThemeToken.color('text'),
    fontFamily: ThemeToken.font('sans'),
  ),
  links: const DartStyle(
    color: Color('inherit'),
    textDecoration: TextDecorationStyle.none,
  ),
);
