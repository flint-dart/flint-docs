import 'package:flint_ui/flint_ui.dart';

const docsLightTheme = FlintTheme(
  name: 'flint-docs-light',
  colors: {
    'bg': Color('#f8fafc'),
    'text': Color('#0f172a'),
    'muted': Color('#475569'),
    'panel': Color('#ffffff'),
    'panelStrong': Color('#f1f5f9'),
    'line': Color.rgba(148, 163, 184, 0.42),
    'primary': Color('#059669'),
    'accent': Color('#0284c7'),
    'warning': Color('#b45309'),
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
      color: Color.rgba(2, 132, 199, 0.2),
    ),
  },
  fonts: {
    'sans': FontFamily.systemSans,
    'mono': FontFamily.monospace,
  },
);

const docsDarkTheme = FlintTheme(
  name: 'flint-docs-dark',
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
  themeProvider: const FlintThemeProvider(
    light: docsLightTheme,
    dark: docsDarkTheme,
    initialMode: FlintThemeMode.dark,
  ),
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
  keyframes: [
    StyleKeyframes(
      'flint-docs-rise',
      [
        KeyframeStep.from(
          DartStyle(
            opacity: 0,
            transform: StyleTransform.translate3d(y: 22),
          ),
        ),
        KeyframeStep.to(
          DartStyle(
            opacity: 1,
            transform: StyleTransform.translate3d(),
          ),
        ),
      ],
    ),
    StyleKeyframes(
      'flint-docs-float',
      [
        KeyframeStep.percent(
          0,
          DartStyle(
            transform: StyleTransform.combine([
              StyleTransform.translate3d(),
              StyleTransform.rotate(0),
            ]),
          ),
        ),
        KeyframeStep.percent(
          50,
          DartStyle(
            transform: StyleTransform.combine([
              StyleTransform.translate3d(y: -16),
              StyleTransform.rotate('3deg'),
            ]),
          ),
        ),
        KeyframeStep.percent(
          100,
          DartStyle(
            transform: StyleTransform.combine([
              StyleTransform.translate3d(),
              StyleTransform.rotate(0),
            ]),
          ),
        ),
      ],
    ),
    StyleKeyframes(
      'flint-docs-orbit',
      [
        KeyframeStep.from(DartStyle(transform: StyleTransform.rotate(0))),
        KeyframeStep.to(DartStyle(transform: StyleTransform.rotate('360deg'))),
      ],
    ),
    StyleKeyframes(
      'flint-docs-scan',
      [
        KeyframeStep.from(
          DartStyle(
              transform: StyleTransform.translateX(SizeValue.percent(-120))),
        ),
        KeyframeStep.to(
          DartStyle(
              transform: StyleTransform.translateX(SizeValue.percent(120))),
        ),
      ],
    ),
    StyleKeyframes(
      'flint-docs-pulse',
      [
        KeyframeStep.percent(0, DartStyle(opacity: 0.42)),
        KeyframeStep.percent(50, DartStyle(opacity: 0.86)),
        KeyframeStep.percent(100, DartStyle(opacity: 0.42)),
      ],
    ),
  ],
);
