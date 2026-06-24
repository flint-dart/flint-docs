import 'package:flint_ui/flint_ui.dart';

class HomeHero extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        minHeight: SizeValue('calc(100vh - 68px)'),
        borderBottom: Border(color: Color.rgba(51, 65, 85, 0.72), width: 1),
        background: Background.layers([
          Gradient.linear(
            115,
            const [
              GradientStop(Color.rgba(5, 7, 13, 0.82), 0),
              GradientStop(Color.rgba(12, 30, 45, 0.96), 44),
              GradientStop(Color.rgba(4, 8, 18, 1), 100),
            ],
          ),
          Color('#05070d'),
        ]),
      ),
      children: [
        _gridOverlay(),
        Container(
          dartStyle: DartStyle(
            position: Position.relative,
            zIndex: 1,
            width: ThemeToken.space('pageX'),
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.symmetric(vertical: 48),
            lg: const DartStyle(padding: EdgeInsets.symmetric(vertical: 72)),
          ),
          children: [
            _statusBar(),
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 34,
                alignItems: AlignItems.center,
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(0.96)),
                    GridTrack.minmax(420, GridTrack.oneFr),
                  ]),
                  gap: 48,
                ),
              ),
              children: [
                _copy(),
                _productPreview(),
              ],
            ),
            _proofStrip(),
          ],
        ),
      ],
    );
  }

  FlintNode _gridOverlay() {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.56,
        maskImage: Gradient.linearTo(GradientDirection.bottom, const [
          GradientStop(Colors.transparent, 0),
          GradientStop(Colors.black, 15),
          GradientStop(Colors.black, 82),
          GradientStop(Colors.transparent, 100),
        ]),
        background: Background.layers([
          const Color(
            'linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px)',
          ),
          const Color(
            'linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px)',
          ),
        ]),
      ),
      style: const {
        'background-size': '56px 56px',
      },
    );
  }

  FlintNode _statusBar() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.between,
        gap: 14,
        margin: const EdgeInsets.only(bottom: 42),
        padding: const EdgeInsets.all(10),
        radius: ThemeToken.radius('md'),
        border: Border.all(color: Color.rgba(148, 163, 184, 0.16)),
        background: Color.rgba(15, 23, 42, 0.42),
        backdropFilter: StyleFilter.blur(18),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            _badge(Icons.sparkles, 'Flint Dart v 1.1.14', _mint),
            _badge(Icons.zap, 'Hot reload ready', _sky),
            _badge(Icons.shield, 'Typed by default', _violet),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.activity, size: 16, color: _mint),
            Text.span(
              'Production docs, APIs, and UI in one Dart stack',
              dartStyle: const DartStyle(
                color: Color('#cbd5e1'),
                fontSize: 12,
                fontWeight: 700,
              ),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _copy() {
    return Container(
      dartStyle: const DartStyle(display: Display.grid, gap: 0),
      children: [
        Text.h1(
          'Flint Dart',
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            maxWidth: 760,
            color: Colors.white,
            fontSize: 58,
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: SizeValue('-0.04em'),
            lg: DartStyle(fontSize: 104),
          ),
        ),
        Text.h2(
          'The full-stack framework that feels designed, fast, and finished.',
          dartStyle: DartStyle(
            margin: EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 760,
            color: Color('#d7e2f1'),
            fontSize: 25,
            lineHeight: 1.08,
            fontWeight: 800,
            letterSpacing: SizeValue('-0.025em'),
            lg: DartStyle(fontSize: 40),
          ),
        ),
        Text.p(
          'Ship routes, controllers, auth, models, OpenAPI docs, server-rendered views, and Dart-first web UI without stitching together half a stack.',
          dartStyle: const DartStyle(
            margin: EdgeInsets.only(top: 22, bottom: 0),
            maxWidth: 690,
            color: Color('#aebbd0'),
            fontSize: 18,
            lineHeight: 1.72,
          ),
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 12,
            margin: EdgeInsets.only(top: 30),
          ),
          children: [
            Link(
              href: '/guides',
              tone: Tone.primary,
              children: [
                Text.span('Start building'),
                Icon(Icons.arrowRight, size: 17),
              ],
            ),
            Link(
              href: '/api',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              children: [
                Icon(Icons.book, size: 17),
                Text.span('Browse API'),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 12,
            margin: EdgeInsets.only(top: 34),
            sm: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(
                3,
                GridTrack.fluid,
              ),
            ),
          ),
          children: [
            _signal(Icons.server, 'Full-stack', 'unified backend & UI'),
            _signal(Icons.database, 'Models', 'query fluently'),
            _signal(Icons.rocket, 'Deployable', 'built to ship'),
          ],
        ),
      ],
    );
  }

  FlintNode _productPreview() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        padding: const EdgeInsets.all(14),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.18)),
        background: Background.layers([
          Gradient.linear(
            135,
            const [
              GradientStop(Color.rgba(56, 189, 248, 0.18), 0),
              GradientStop(Color.rgba(52, 211, 153, 0.08), 45),
              GradientStop(Color.rgba(15, 23, 42, 0.92), 100),
            ],
          ),
          const Color.rgba(2, 6, 23, 0.94),
        ]),
        shadow: const Shadow(
          y: 32,
          blur: 90,
          spread: -42,
          color: Color.rgba(56, 189, 248, 0.5),
        ),
      ),
      children: [
        _previewHeader(),
        Row(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 14,
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.tracks(const [
                GridTrack.oneFr,
                const GridTrack.fr(0.74),
              ]),
            ),
          ),
          children: [
            _codePanel(),
            _pipelinePanel(),
          ],
        ),
        _metricsBar(),
      ],
    );
  }

  FlintNode _previewHeader() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.between,
        gap: 14,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.14)),
        background: Color.rgba(15, 23, 42, 0.74),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 10,
          ),
          children: [
            _trafficLights(),
            Text.span(
              'flint_workspace',
              dartStyle: const DartStyle(
                color: Color('#e2e8f0'),
                fontSize: 13,
                fontWeight: 800,
              ),
            ),
          ],
        ),
        _badge(Icons.cloud, 'Live build', _sky),
      ],
    );
  }

  FlintNode _codePanel() {
    return Container(
      dartStyle: DartStyle(
        overflow: Overflow.hidden,
        radius: 8,
        border: Border.all(color: Color.rgba(30, 41, 59, 1)),
        background: const Color('#050814'),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 10,
            padding: EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            background: Color('#090f1e'),
            borderBottom: Border(color: Color.rgba(51, 65, 85, 0.75), width: 1),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 8,
              ),
              children: [
                Icon(Icons.terminal, size: 16, color: _mint),
                Text.span(
                  'lib/main.dart',
                  dartStyle: const DartStyle(
                    color: Color('#dbeafe'),
                    fontSize: 12,
                    fontWeight: 800,
                  ),
                ),
              ],
            ),
            Text.span(
              '12ms reload',
              dartStyle: const DartStyle(
                color: _mint,
                fontSize: 11,
                fontWeight: 800,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(padding: EdgeInsets.all(18)),
          children: [
            Text.p(
              _heroCode,
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                color: Color('#d7e5ff'),
                fontFamily: FontFamily.monospace,
                fontSize: 12,
                lineHeight: 1.72,
              ),
              style: const {'white-space': 'pre-wrap'},
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pipelinePanel() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        alignItems: AlignItems.center,
        padding: const EdgeInsets.all(14),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.15)),
        background: Color.rgba(15, 23, 42, 0.66),
      ),
      children: [
        Text.span(
          'Ship loop',
          dartStyle: const DartStyle(
            color: Colors.white,
            fontSize: 14,
            fontWeight: 900,
          ),
        ),
        _pipelineStep(Icons.route, 'Routes', 'grouped and guarded'),
        _pipelineStep(Icons.lock, 'Auth', 'sessions + middleware'),
        _pipelineStep(Icons.document, 'OpenAPI', 'generated docs'),
        _pipelineStep(Icons.upload, 'Deploy', 'public assets ready'),
      ],
    );
  }

  FlintNode _metricsBar() {
    return Row(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.one,
        gap: 10,
        sm: DartStyle(
          gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.fluid),
        ),
      ),
      children: [
        _metric('1 file', 'from route to page'),
        _metric('0 glue', 'Dart end to end'),
        _metric('100%', 'typed UI surface'),
      ],
    );
  }

  FlintNode _proofStrip() {
    return Row(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.one,
        gap: 12,
        margin: const EdgeInsets.only(top: 44),
        padding: const EdgeInsets.all(12),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.14)),
        background: Color.rgba(15, 23, 42, 0.36),
        sm: DartStyle(
          gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.fluid),
        ),
      ),
      children: [
        _proof(Icons.code, 'Controllers, middleware, validation'),
        _proof(Icons.chartLine, 'Models and database workflows'),
        _proof(Icons.palette, 'Dart-first UI components'),
      ],
    );
  }

  FlintNode _badge(IconData icon, String label, Color color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 7,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        radius: ThemeToken.radius('pill'),
        border: Border.all(color: Color.rgba(148, 163, 184, 0.16)),
        background: Color.rgba(15, 23, 42, 0.68),
      ),
      children: [
        Icon(icon, size: 14, color: color),
        Text.span(
          label,
          dartStyle: const DartStyle(
            color: Color('#dbeafe'),
            fontSize: 12,
            fontWeight: 800,
            lineHeight: 1,
          ),
        ),
      ],
    );
  }

  FlintNode _signal(IconData icon, String title, String label) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 12,
        padding: const EdgeInsets.all(12),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.14)),
        background: Color.rgba(15, 23, 42, 0.42),
      ),
      children: [
        Icon(icon, size: 20, color: _sky),
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 2),
          children: [
            Text.span(
              title,
              dartStyle: const DartStyle(
                color: Colors.white,
                fontSize: 13,
                fontWeight: 900,
              ),
            ),
            Text.span(
              label,
              dartStyle: const DartStyle(color: Color('#94a3b8'), fontSize: 12),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pipelineStep(IconData icon, String title, String label) {
    return Row(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.tracks([
          const SizeValue.px(26),
          GridTrack.oneFr,
        ]),
        gap: 10,
        alignItems: AlignItems.center,
      ),
      children: [
        Icon(icon, size: 18, color: _mint),
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 2),
          children: [
            Text.span(
              title,
              dartStyle: const DartStyle(
                color: Color('#e2e8f0'),
                fontSize: 12,
                fontWeight: 900,
              ),
            ),
            Text.span(
              label,
              dartStyle: const DartStyle(color: Color('#94a3b8'), fontSize: 11),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _metric(String value, String label) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(12),
        radius: 8,
        border: Border.all(color: Color.rgba(148, 163, 184, 0.12)),
        background: Color.rgba(2, 6, 23, 0.42),
      ),
      children: [
        Text.span(
          value,
          dartStyle: const DartStyle(
            color: Colors.white,
            fontSize: 18,
            fontWeight: 900,
          ),
        ),
        Text.span(
          label,
          dartStyle: const DartStyle(color: Color('#94a3b8'), fontSize: 12),
        ),
      ],
    );
  }

  FlintNode _proof(IconData icon, String label) {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 10,
        padding: EdgeInsets.all(8),
      ),
      children: [
        Icon(icon, size: 18, color: _mint),
        Text.span(
          label,
          dartStyle: const DartStyle(
            color: Color('#cbd5e1'),
            fontSize: 13,
            fontWeight: 700,
          ),
        ),
      ],
    );
  }

  FlintNode _trafficLights() {
    return Row(
      dartStyle: const DartStyle(display: Display.flex, gap: 6),
      children: [
        _dot(const Color('#fb7185')),
        _dot(const Color('#fbbf24')),
        _dot(_mint),
      ],
    );
  }

  FlintNode _dot(Color color) {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        width: 10,
        height: 10,
        radius: 999,
        background: color,
      ),
    );
  }
}

const _mint = Color('#34d399');
const _sky = Color('#38bdf8');
const _violet = Color('#a78bfa');

const _heroCode = "import 'package:flint_dart/flint_dart.dart';\n"
    "import 'package:flint_ui/flint_ui.dart';\n\n"
    "void main() {\n"
    "  final app = Flint();\n\n"
    "  // Render browser page with Flint UI\n"
    "  app.get('/dashboard', (ctx) async {\n"
    "    final users = await User().all();\n"
    "    return ctx.res?.page(\n"
    "      'DashboardPage',\n"
    "      props: {'users': users.asMaps()},\n"
    "    );\n"
    "  });\n\n"
    "  app.listen(port: 3030);\n"
    "}";
