import 'dart:async';

import 'package:flint_dart/ui.dart';

import '../components/copy_text.dart';
import '../shared/page_shell.dart';

class FullstackPage extends StatefulComponent {
  FullstackPage(this.props);

  final Map<String, dynamic> props;
  int _activeTab = 0;
  bool _copiedCmd = false;
  bool _copiedCode = false;

  void _copyCommand(String cmd) {
    copyText(cmd);
    setState(() => _copiedCmd = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedCmd = false);
    });
  }

  void _copyCode(String code) {
    copyText(code);
    setState(() => _copiedCode = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedCode = false);
    });
  }

  @override
  FlintNode build() {
    final currentSnippet = _snippets[_activeTab];

    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          background: ThemeToken.color('bg'),
          color: ThemeToken.color('text'),
          display: Display.flex,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
        ),
        children: [
          _heroSection(currentSnippet),
          _architecturePipeline(),
          _deepPillarsSection(),
          _comparisonMatrixSection(),
          _starterTemplatesSection(),
          _finalCtaSection(),
        ],
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // 1. FULLSTACK HERO SECTION
  // ---------------------------------------------------------------------------
  FlintNode _heroSection(_FullstackSnippet snippet) {
    const installCmd = 'flint create my_app --template=fullstack';

    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        width: SizeValue.percent(100),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('bg'),
        light: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(20, 0),
              stops: const [
                GradientStop(Color.rgba(16, 185, 129, 0.18), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(80, 10),
              stops: const [
                GradientStop(Color.rgba(56, 189, 248, 0.18), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.linear(
              155,
              const [
                GradientStop(Color('#f8fffb'), 0),
                GradientStop(Color('#f0faf5'), 48),
                GradientStop(Color('#eaf6fa'), 100),
              ],
            ),
          ]),
        ),
        dark: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(15, 0),
              stops: const [
                GradientStop(Color.rgba(16, 185, 129, 0.18), 0),
                GradientStop(Colors.transparent, 42),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(85, 15),
              stops: const [
                GradientStop(Color.rgba(14, 165, 233, 0.18), 0),
                GradientStop(Colors.transparent, 44),
              ],
            ),
            Gradient.linear(
              160,
              [
                GradientStop(ThemeToken.color('bg'), 0),
                GradientStop(ThemeToken.color('panel'), 55),
                GradientStop(ThemeToken.color('panelStrong'), 100),
              ],
            ),
          ]),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            position: Position.relative,
            zIndex: 2,
            width: SizeValue.percent(100),
            maxWidth: SizeValue.percent(100),
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
            md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 56)),
            lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 64)),
            xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72)),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 40,
                alignItems: AlignItems.center,
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.05)),
                    GridTrack.minmax(540, SizeValue.fr(1.18)),
                  ]),
                  gap: 48,
                ),
                xl: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.05)),
                    GridTrack.minmax(620, SizeValue.fr(1.2)),
                  ]),
                  gap: 64,
                ),
              ),
              children: [
                _heroLeftText(installCmd),
                _heroRightIde(snippet),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _heroLeftText(String installCmd) {
    return Column(
      dartStyle: const DartStyle(gap: 0, alignItems: AlignItems.start),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 8,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            radius: 999,
            background: Color.rgba(16, 185, 129, 0.12),
            border: Border.all(color: Color.rgba(16, 185, 129, 0.28)),
            color: Color('#10b981'),
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 0.5,
          ),
          children: [
            Icon(Icons.layers, size: 15, color: Color('#10b981')),
            Text.span('FLINT DART FULL-STACK WEB FRAMEWORK'),
          ],
        ),
        Text.h1(
          'Server, ORM, Web UI & Realtime. All Pure Dart.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 820,
            fontSize: const SizeValue('clamp(2.5rem, 5.2vw, 4.4rem)'),
            lineHeight: 1.05,
            fontWeight: 900,
            color: Color('transparent'),
            background: Gradient.linear(
              110,
              const [
                GradientStop(Color('#10b981'), 0),
                GradientStop(Color('#06b6d4'), 48),
                GradientStop(Color('#3b82f6'), 100),
              ],
            ),
            backgroundClip: BackgroundClip.text,
            webkitBackgroundClip: BackgroundClip.text,
          ),
        ),
        Text.h2(
          'Build end-to-end full-stack web applications without JavaScript fatigue.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 720,
            fontSize: 22,
            lineHeight: 1.35,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          'A cohesive web platform providing sub-millisecond controller routing, declarative pure-Dart UI components with SSR, type-safe ORM query builders, Row-Level Security, and bidirectional WebSockets in one unified runtime.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 16, bottom: 0),
            maxWidth: 680,
            fontSize: 16,
            lineHeight: 1.7,
            color: ThemeToken.color('muted'),
          ),
        ),
        // CLI Quickstart Pill
        Container(
          dartStyle: DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 600,
            margin: const EdgeInsets.only(top: 24),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            radius: 8,
            border: Border.all(color: Color.rgba(56, 189, 248, 0.25)),
            background: Color.rgba(3, 7, 18, 0.78),
            color: Colors.white,
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
            backdropFilter: StyleFilter.blur(14),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 10,
                minWidth: 0,
                overflow: 'hidden',
              ),
              children: [
                Text.span(
                  '\$',
                  dartStyle: const DartStyle(
                    color: Color('#34d399'),
                    fontWeight: 900,
                    fontFamily: FontFamily.monospace,
                    fontSize: 14,
                  ),
                ),
                Text.span(
                  installCmd,
                  dartStyle: const DartStyle(
                    fontFamily: FontFamily.monospace,
                    fontSize: 13,
                    color: Color('#e2e8f0'),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  ),
                ),
              ],
            ),
            Button(
              variant: ButtonVariant.ghost,
              size: ComponentSize.sm,
              onPressed: (_) => _copyCommand(installCmd),
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 6,
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                radius: 6,
                background: _copiedCmd
                    ? Color.rgba(16, 185, 129, 0.25)
                    : Color.rgba(255, 255, 255, 0.1),
                color: _copiedCmd ? Color('#34d399') : Colors.white,
                fontSize: 12,
                fontWeight: 800,
                transition: StyleTransition.all(milliseconds: 150),
              ),
              children: [
                Icon(
                  _copiedCmd ? Icons.check : Icons.copy,
                  size: 13,
                  color: _copiedCmd ? Color('#34d399') : Colors.white,
                ),
                Text.span(_copiedCmd ? 'Copied' : 'Copy'),
              ],
            ),
          ],
        ),
        // Action CTAs
        Wrap(
          gap: 12,
          dartStyle: const DartStyle(margin: EdgeInsets.only(top: 24)),
          children: [
            Link(
              href: '/guides/installation',
              tone: Tone.primary,
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                minHeight: 46,
                padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                radius: 8,
                fontSize: 15,
                fontWeight: 900,
                shadow: Shadow(
                  y: 12,
                  blur: 32,
                  spread: -10,
                  color: Color.rgba(16, 185, 129, 0.5),
                ),
              ),
              children: [
                Text.span('Quickstart in 30s'),
                Icon(Icons.arrowRight, size: 18),
              ],
            ),
            Link(
              href: '/api',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              dartStyle: const DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                minHeight: 46,
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                radius: 8,
                fontSize: 14,
                fontWeight: 800,
              ),
              children: [
                Icon(Icons.book, size: 16),
                Text.span('Full API Reference'),
              ],
            ),
            Link(
              href: '/examples',
              variant: ButtonVariant.ghost,
              tone: Tone.neutral,
              dartStyle: const DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                minHeight: 46,
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                radius: 8,
                fontSize: 14,
                fontWeight: 800,
              ),
              children: [
                Icon(Icons.sparkles, size: 16),
                Text.span('Live Examples'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _heroRightIde(_FullstackSnippet snippet) {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        zIndex: 2,
        width: SizeValue.percent(100),
        radius: 12,
        border: Border.all(color: Color.rgba(56, 189, 248, 0.25)),
        background: Color('#050b0a'),
        color: Colors.white,
        shadow: Shadow(
          y: 28,
          blur: 70,
          spread: -28,
          color: Color.rgba(0, 0, 0, 0.8),
        ),
        overflow: Overflow.hidden,
      ),
      children: [
        // Editor Header Tabs
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            borderBottom: Border(color: Color.rgba(255, 255, 255, 0.1), width: 1),
            background: Color.rgba(255, 255, 255, 0.03),
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
                gap: 6,
              ),
              children: [
                _macDot(const Color('#ef4444')),
                _macDot(const Color('#f59e0b')),
                _macDot(const Color('#10b981')),
              ],
            ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                flexWrap: FlexWrap.wrap,
                gap: 4,
              ),
              children: [
                for (var i = 0; i < _snippets.length; i++)
                  Button(
                    variant: ButtonVariant.ghost,
                    size: ComponentSize.sm,
                    onPressed: (_) => setState(() => _activeTab = i),
                    dartStyle: DartStyle(
                      display: Display.inlineFlex,
                      alignItems: AlignItems.center,
                      gap: 6,
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      radius: 6,
                      fontSize: 12,
                      fontWeight: _activeTab == i ? 900 : 600,
                      color: _activeTab == i ? Colors.white : const Color('#94a3b8'),
                      background: _activeTab == i
                          ? Color.rgba(255, 255, 255, 0.1)
                          : Colors.transparent,
                      borderBottom: _activeTab == i
                          ? Border(color: _snippets[i].accentColor, width: 2)
                          : Border.none,
                    ),
                    children: [
                      Icon(_snippets[i].icon,
                          size: 13,
                          color: _activeTab == i
                              ? _snippets[i].accentColor
                              : const Color('#64748b')),
                      Text.span(_snippets[i].tabLabel),
                    ],
                  ),
              ],
            ),
            Button(
              variant: ButtonVariant.ghost,
              size: ComponentSize.sm,
              onPressed: (_) => _copyCode(snippet.code),
              dartStyle: DartStyle(
                padding: const EdgeInsets.all(6),
                height: 28,
                width: 28,
                radius: 6,
                color: _copiedCode ? Color('#34d399') : Color('#94a3b8'),
                background: Color.rgba(255, 255, 255, 0.05),
              ),
              children: [
                Icon(
                  _copiedCode ? Icons.check : Icons.copy,
                  size: 13,
                ),
              ],
            ),
          ],
        ),
        // File Title Bar
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            background: Color.rgba(255, 255, 255, 0.02),
            borderBottom: Border(color: Color.rgba(255, 255, 255, 0.06), width: 1),
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 8,
              ),
              children: [
                Icon(snippet.icon, size: 16, color: snippet.accentColor),
                Text.strong(
                  snippet.layerTitle,
                  dartStyle: const DartStyle(
                    fontSize: 13,
                    fontWeight: 900,
                    color: Colors.white,
                  ),
                ),
                Text.span(
                  '• ${snippet.filename}',
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    color: Color('#94a3b8'),
                    fontFamily: FontFamily.monospace,
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                radius: 4,
                background: Color.rgba(16, 185, 129, 0.15),
                color: Color('#34d399'),
                fontSize: 11,
                fontWeight: 800,
              ),
              children: [
                Text.span(snippet.tag),
              ],
            ),
          ],
        ),
        // Code Block
        Container(
          dartStyle: const DartStyle(
            padding: EdgeInsets.all(20),
            maxHeight: 380,
            overflow: 'auto',
            fontFamily: FontFamily.monospace,
            fontSize: 13,
            lineHeight: 1.65,
            background: Color('#040807'),
            whiteSpace: 'pre',
          ),
          children: [
            _syntaxBlock(snippet.lines),
          ],
        ),
        // Status Strip
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            borderTop: Border(color: Color.rgba(255, 255, 255, 0.08), width: 1),
            background: Color.rgba(255, 255, 255, 0.03),
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 8,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 6,
                    height: 6,
                    radius: 999,
                    background: snippet.accentColor,
                  ),
                ),
                Text.span(
                  snippet.statusMessage,
                  dartStyle: const DartStyle(
                    fontSize: 11,
                    color: Color('#94a3b8'),
                    fontFamily: FontFamily.monospace,
                  ),
                ),
              ],
            ),
            Text.span(
              'Flint Dart Full-Stack',
              dartStyle: const DartStyle(
                fontSize: 11,
                fontWeight: 800,
                color: Color('#64748b'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 2. VISUAL ARCHITECTURE PIPELINE FLOW
  // ---------------------------------------------------------------------------
  FlintNode _architecturePipeline() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 48),
        md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 56)),
        lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 64)),
        xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72)),
        borderBottom: Border(color: Color.rgba(255, 255, 255, 0.08), width: 1),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 8, alignItems: AlignItems.center),
          children: [
            Text.span(
              'THE UNIFIED REQUEST LIFECYCLE',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#10b981'),
                letterSpacing: 1,
              ),
            ),
            Text.h2(
              'One Language From DOM to Database',
              dartStyle: DartStyle(
                fontSize: 32,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                textAlign: TextAlign.center,
              ),
            ),
            Text.p(
              'No REST code generation drift. No dual TypeScript/Go models. Single unified typed contracts across the entire stack.',
              dartStyle: DartStyle(
                fontSize: 16,
                color: ThemeToken.color('muted'),
                textAlign: TextAlign.center,
                maxWidth: 680,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(margin: EdgeInsets.only(top: 36)),
          children: [
            Grid(
              columns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
              children: [
                _pipelineNode(
                  step: '01',
                  title: 'Declarative Web UI',
                  sub: 'SSR & Reactive Signals',
                  desc: 'Pure Dart widgets rendered on server or client with instant hydration.',
                  icon: Icons.palette,
                  accent: Color('#10b981'),
                ),
                _pipelineNode(
                  step: '02',
                  title: 'Routing & Auth Guard',
                  sub: 'Middleware Pipeline',
                  desc: 'Typed route params, session/JWT auth, and rate-limiting filters.',
                  icon: Icons.shield,
                  accent: Color('#06b6d4'),
                ),
                _pipelineNode(
                  step: '03',
                  title: 'Controller & Service',
                  sub: 'Business Logic Core',
                  desc: 'Controllers receive typed requests and return JSON or SSR Page views.',
                  icon: Icons.server,
                  accent: Color('#3b82f6'),
                ),
                _pipelineNode(
                  step: '04',
                  title: 'ORM & RLS Gateway',
                  sub: 'Row-Level Security',
                  desc: 'PostgreSQL / MySQL / SQLite query builder with automated tenant isolation.',
                  icon: Icons.database,
                  accent: Color('#8b5cf6'),
                ),
                _pipelineNode(
                  step: '05',
                  title: 'Realtime Channels',
                  sub: 'WebSocket Pub/Sub',
                  desc: 'Sub-millisecond broadcast channels for real-time live events.',
                  icon: Icons.zap,
                  accent: Color('#f59e0b'),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pipelineNode({
    required String step,
    required String title,
    required String sub,
    required String desc,
    required IconData icon,
    required Color accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(20),
        radius: 12,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: 10,
        transition: StyleTransition.all(milliseconds: 180),
        hover: DartStyle(
          border: Border.all(color: accent),
          transform: StyleTransform.translateY(-3),
        ),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 36,
                height: 36,
                radius: 8,
                background: Color.rgba(16, 185, 129, 0.12),
                color: accent,
                display: Display.grid,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
              ),
              child: Icon(icon, size: 18),
            ),
            Text.span(
              step,
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#64748b'),
                fontFamily: FontFamily.monospace,
              ),
            ),
          ],
        ),
        Column(
          dartStyle: const DartStyle(gap: 2),
          children: [
            Text.strong(
              title,
              dartStyle: DartStyle(
                fontSize: 15,
                fontWeight: 900,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.span(
              sub,
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 700,
                color: accent,
              ),
            ),
          ],
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            fontSize: 13,
            lineHeight: 1.5,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 3. DEEP ARCHITECTURE CORE PILLARS
  // ---------------------------------------------------------------------------
  FlintNode _deepPillarsSection() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 64),
        md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 72)),
        lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80)),
        xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 8, alignItems: AlignItems.center),
          children: [
            Text.span(
              'BATTERIES INCLUDED',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#06b6d4'),
                letterSpacing: 1,
              ),
            ),
            Text.h2(
              'Everything You Need For Production Web Apps',
              dartStyle: DartStyle(
                fontSize: 34,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                textAlign: TextAlign.center,
              ),
            ),
            Text.p(
              'No need to stitch together 15 disparate npm packages. Flint Dart comes with fully integrated, battle-tested fullstack primitives.',
              dartStyle: DartStyle(
                fontSize: 16,
                color: ThemeToken.color('muted'),
                textAlign: TextAlign.center,
                maxWidth: 720,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(margin: EdgeInsets.only(top: 48)),
          children: [
            Grid(
              columns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
              children: [
                _pillarCard(
                  icon: Icons.server,
                  title: 'Sub-Millisecond Controller Routing',
                  desc: 'High-speed asynchronous HTTP router with parametric matching, route grouping, middleware pipelines, and automatic CORS & rate-limiting.',
                  bullets: [
                    'Controller routing with req.params, req.query, req.json()',
                    'Typed middleware guards for auth & permissions',
                    'Automatic HTTP error handling & JSON responses',
                  ],
                  accent: Color('#10b981'),
                ),
                _pillarCard(
                  icon: Icons.palette,
                  title: 'Pure Dart Declarative UI & SSR',
                  desc: 'Compose web pages using pure Dart components. Server-Side Render (SSR) for blazing SEO speeds with lightweight client hydration.',
                  bullets: [
                    'Zero HTML/JSX templates: 100% typed Dart widget tree',
                    'Tokenized design system with instant dark/light themes',
                    'Canvas 2D, WebGL 3D scenes & reactive signal state',
                  ],
                  accent: Color('#06b6d4'),
                ),
                _pillarCard(
                  icon: Icons.database,
                  title: 'Flint ORM & Row-Level Security',
                  desc: 'Fluent query builder for PostgreSQL, MySQL, and SQLite. Built-in Row-Level Security (RLS) guarantees automated tenant isolation.',
                  bullets: [
                    'Type-safe relations: hasMany, belongsTo, withRelation()',
                    'Automatic migration runner and seeder pipelines',
                    'Owner-level policy guards for multi-tenant SaaS',
                  ],
                  accent: Color('#3b82f6'),
                ),
                _pillarCard(
                  icon: Icons.zap,
                  title: 'Real-Time WebSockets & Channels',
                  desc: 'Multiplex live WebSocket connections into named channels. Stream live events, user presence, and collaborative updates seamlessly.',
                  bullets: [
                    'Channel broadcast pub/sub with room filtering',
                    'Live heartbeat & automatic reconnect handlers',
                    'Sub-millisecond packet serialization in Dart',
                  ],
                  accent: Color('#f59e0b'),
                ),
                _pillarCard(
                  icon: Icons.shield,
                  title: 'Built-in Auth, Sessions & RBAC',
                  desc: 'Turnkey authentication engine supporting encrypted HTTP cookie sessions, JWT bearer tokens, password hashing, and role hierarchies.',
                  bullets: [
                    'Session cookies with SameSite & Secure flags',
                    'Role-based authorization (@hasRole, _hasPermission)',
                    'Pre-built login, register, and password reset flows',
                  ],
                  accent: Color('#8b5cf6'),
                ),
                _pillarCard(
                  icon: Icons.cloud,
                  title: 'Zero-Config Native Deployment',
                  desc: 'Compile your entire full-stack app into a single native AOT executable or lightweight 25MB Docker container with instant cold starts.',
                  bullets: [
                    'Single binary deployment: No Node runtime dependencies',
                    'Instant sub-10ms container cold starts on Linux',
                    'Built-in static asset compression and caching headers',
                  ],
                  accent: Color('#ec4899'),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pillarCard({
    required IconData icon,
    required String title,
    required String desc,
    required List<String> bullets,
    required Color accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(24),
        radius: 14,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: 14,
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 40,
                height: 40,
                radius: 10,
                background: Color.rgba(16, 185, 129, 0.14),
                color: accent,
                display: Display.grid,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
              ),
              child: Icon(icon, size: 20),
            ),
            Text.h3(
              title,
              dartStyle: DartStyle(
                fontSize: 17,
                fontWeight: 900,
                color: ThemeToken.color('text'),
              ),
            ),
          ],
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            fontSize: 14,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
        Container(
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 6),
            padding: const EdgeInsets.only(top: 12),
            borderTop: Border(color: ThemeToken.color('line'), width: 1),
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: 6,
          ),
          children: [
            for (final bullet in bullets)
              Row(
                dartStyle: const DartStyle(
                  display: Display.flex,
                  alignItems: AlignItems.center,
                  gap: 8,
                ),
                children: [
                  Icon(Icons.check, size: 14, color: accent),
                  Text.span(
                    bullet,
                    dartStyle: DartStyle(
                      fontSize: 12,
                      fontWeight: 600,
                      color: ThemeToken.color('text'),
                    ),
                  ),
                ],
              ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 4. COMPARISON & BENCHMARK MATRIX
  // ---------------------------------------------------------------------------
  FlintNode _comparisonMatrixSection() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 64),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 72)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 8, alignItems: AlignItems.center),
          children: [
            Text.span(
              'WHY CHOOSE DART FOR FULLSTACK',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#10b981'),
                letterSpacing: 1,
              ),
            ),
            Text.h2(
              'Stack Comparison & Developer Experience',
              dartStyle: DartStyle(
                fontSize: 34,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                textAlign: TextAlign.center,
              ),
            ),
            Text.p(
              'How Flint Dart stacks up against traditional ecosystems like Node.js, Next.js, Go Gin, and Python Django.',
              dartStyle: DartStyle(
                fontSize: 16,
                color: ThemeToken.color('muted'),
                textAlign: TextAlign.center,
                maxWidth: 720,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            margin: EdgeInsets.only(top: 40),
            overflow: 'auto',
            width: SizeValue.percent(100),
          ),
          children: [
            Grid(
              columns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
              children: [
                _matrixCard(
                  stack: 'Flint Dart',
                  tag: 'The Unified Stack',
                  isHero: true,
                  lang: 'Pure Dart (Single Language)',
                  types: '100% Shared End-to-End',
                  latency: '< 0.5ms Async Core',
                  binary: 'Single Native Binary (~25MB)',
                  ui: 'Pure Dart Declarative + SSR',
                  orm: 'Built-in ORM + RLS Security',
                ),
                _matrixCard(
                  stack: 'Next.js / Node',
                  tag: 'JS/TS Ecosystem',
                  isHero: false,
                  lang: 'TypeScript + Node Runtime',
                  types: 'Fragile npm ecosystem drift',
                  latency: '~12ms Cold Overhead',
                  binary: 'Heavy Node.js + node_modules',
                  ui: 'React JSX + Server Components',
                  orm: 'Prisma / Drizzle third-party',
                ),
                _matrixCard(
                  stack: 'Go + Gin / Fiber',
                  tag: 'Backend Only',
                  isHero: false,
                  lang: 'Go (Backend) + JS (Frontend)',
                  types: 'Requires code generation (OpenAPI)',
                  latency: '< 0.5ms Compiled',
                  binary: 'Single Go Binary',
                  ui: 'Split stack (React/Vue needed)',
                  orm: 'Gorm third-party',
                ),
                _matrixCard(
                  stack: 'Python / Django',
                  tag: 'Classic MVC',
                  isHero: false,
                  lang: 'Python (Backend) + JS (Frontend)',
                  types: 'Dynamic / Partial type hints',
                  latency: '~25ms Interpreter overhead',
                  binary: 'Interpreted / Heavy venv',
                  ui: 'HTML Django templates',
                  orm: 'Django ORM',
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _matrixCard({
    required String stack,
    required String tag,
    required bool isHero,
    required String lang,
    required String types,
    required String latency,
    required String binary,
    required String ui,
    required String orm,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(22),
        radius: 12,
        border: isHero
            ? Border.all(color: const Color('#10b981'), width: 2)
            : Border.all(color: ThemeToken.color('line')),
        background: isHero
            ? Color.rgba(16, 185, 129, 0.06)
            : ThemeToken.color('bg'),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: 12,
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Text.strong(
              stack,
              dartStyle: DartStyle(
                fontSize: 18,
                fontWeight: 900,
                color: isHero ? const Color('#10b981') : ThemeToken.color('text'),
              ),
            ),
            Container(
              dartStyle: DartStyle(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                radius: 4,
                background: isHero
                    ? Color.rgba(16, 185, 129, 0.2)
                    : Color.rgba(255, 255, 255, 0.08),
                color: isHero ? Color('#34d399') : ThemeToken.color('muted'),
                fontSize: 11,
                fontWeight: 800,
              ),
              children: [
                Text.span(tag),
              ],
            ),
          ],
        ),
        _matrixRow('Language Stack', lang, isHero),
        _matrixRow('Type Consistency', types, isHero),
        _matrixRow('HTTP Latency', latency, isHero),
        _matrixRow('Deployment Artifact', binary, isHero),
        _matrixRow('Frontend UI', ui, isHero),
        _matrixRow('ORM & Security', orm, isHero),
      ],
    );
  }

  FlintNode _matrixRow(String label, String value, bool isHero) {
    return Column(
      dartStyle: const DartStyle(gap: 2),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 700,
            color: ThemeToken.color('muted'),
          ),
        ),
        Text.span(
          value,
          dartStyle: DartStyle(
            fontSize: 13,
            fontWeight: isHero ? 800 : 500,
            color: isHero ? Colors.white : ThemeToken.color('text'),
          ),
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 5. STARTER BLUEPRINT SHOWCASE
  // ---------------------------------------------------------------------------
  FlintNode _starterTemplatesSection() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 64),
        md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 72)),
        lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80)),
        xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 8, alignItems: AlignItems.center),
          children: [
            Text.span(
              'PRODUCTION-READY STARTERS',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#3b82f6'),
                letterSpacing: 1,
              ),
            ),
            Text.h2(
              'Jumpstart Your Next Project in Seconds',
              dartStyle: DartStyle(
                fontSize: 34,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                textAlign: TextAlign.center,
              ),
            ),
            Text.p(
              'Pre-configured fullstack templates with auth, database seeders, declarative UI dashboards, and API routes.',
              dartStyle: DartStyle(
                fontSize: 16,
                color: ThemeToken.color('muted'),
                textAlign: TextAlign.center,
                maxWidth: 720,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(margin: EdgeInsets.only(top: 48)),
          children: [
            Grid(
              columns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
              children: [
                _starterCard(
                  title: 'E-Commerce Marketplace',
                  desc: 'Full store with shopping cart, customer checkout, product catalogue, and order admin panel.',
                  cmd: 'flint create store --template=ecommerce',
                  tag: 'Starter',
                  icon: Icons.server,
                  accent: Color('#10b981'),
                ),
                _starterCard(
                  title: 'Multi-Tenant SaaS Admin',
                  desc: 'Subscription billing ready, role permissions, analytics telemetry, and RLS tenant isolation.',
                  cmd: 'flint create saas_app --template=saas',
                  tag: 'Popular',
                  icon: Icons.layers,
                  accent: Color('#06b6d4'),
                ),
                _starterCard(
                  title: 'Real-Time Chat & Collab',
                  desc: 'WebSocket pub/sub rooms, live message streams, presence indicators, and notification tray.',
                  cmd: 'flint create chat --template=realtime',
                  tag: 'WebSocket',
                  icon: Icons.zap,
                  accent: Color('#f59e0b'),
                ),
                _starterCard(
                  title: 'Multi-Author Blog & Media',
                  desc: 'Markdown publishing engine, comment threads, SEO metadata headers, and category archives.',
                  cmd: 'flint create publication --template=blog',
                  tag: 'SSR & SEO',
                  icon: Icons.book,
                  accent: Color('#8b5cf6'),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _starterCard({
    required String title,
    required String desc,
    required String cmd,
    required String tag,
    required IconData icon,
    required Color accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(22),
        radius: 12,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        justifyContent: JustifyContent.between,
        gap: 16,
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 12),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 36,
                    height: 36,
                    radius: 8,
                    background: Color.rgba(16, 185, 129, 0.12),
                    color: accent,
                    display: Display.grid,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                  ),
                  child: Icon(icon, size: 18),
                ),
                Container(
                  dartStyle: DartStyle(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                    radius: 4,
                    background: Color.rgba(16, 185, 129, 0.15),
                    color: accent,
                    fontSize: 11,
                    fontWeight: 800,
                  ),
                  children: [
                    Text.span(tag),
                  ],
                ),
              ],
            ),
            Text.strong(
              title,
              dartStyle: DartStyle(
                fontSize: 16,
                fontWeight: 900,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              desc,
              dartStyle: DartStyle(
                fontSize: 13,
                lineHeight: 1.5,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            radius: 6,
            background: Color.rgba(0, 0, 0, 0.4),
            border: Border.all(color: Color.rgba(255, 255, 255, 0.08)),
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Text.span(
              cmd,
              dartStyle: const DartStyle(
                fontSize: 11,
                fontFamily: FontFamily.monospace,
                color: Color('#e2e8f0'),
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              ),
            ),
            Button(
              variant: ButtonVariant.ghost,
              size: ComponentSize.sm,
              onPressed: (_) => _copyCommand(cmd),
              dartStyle: const DartStyle(padding: EdgeInsets.all(4)),
              children: [
                Icon(Icons.copy, size: 12, color: const Color('#94a3b8')),
              ],
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 6. FINAL CALL TO ACTION
  // ---------------------------------------------------------------------------
  FlintNode _finalCtaSection() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        maxWidth: SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 64),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 72)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.radialCircle(
            at: const GradientPosition.percent(50, 50),
            stops: const [
              GradientStop(Color.rgba(16, 185, 129, 0.15), 0),
              GradientStop(Colors.transparent, 60),
            ],
          ),
          ThemeToken.color('bg'),
        ]),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            maxWidth: 820,
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.all(36),
            radius: 20,
            border: Border.all(color: const Color('#10b981')),
            background: ThemeToken.color('panel'),
            shadow: Shadow(
              y: 20,
              blur: 50,
              spread: -15,
              color: Color.rgba(16, 185, 129, 0.2),
            ),
            display: Display.flex,
            flexDirection: FlexDirection.column,
            alignItems: AlignItems.center,
            textAlign: TextAlign.center,
            gap: 18,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 48,
                height: 48,
                radius: 12,
                background: Color.rgba(16, 185, 129, 0.15),
                color: Color('#10b981'),
                display: Display.grid,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
              ),
              child: Icon(Icons.rocket, size: 24),
            ),
            Text.h2(
              'Start Building Fullstack Dart Apps Today',
              dartStyle: DartStyle(
                fontSize: 32,
                fontWeight: 900,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'Install the Flint CLI, create your first project, and deploy native binaries in minutes.',
              dartStyle: DartStyle(
                fontSize: 16,
                color: ThemeToken.color('muted'),
                maxWidth: 580,
              ),
            ),
            Wrap(
              gap: 12,
              dartStyle: const DartStyle(margin: EdgeInsets.only(top: 8)),
              children: [
                Link(
                  href: '/guides/installation',
                  tone: Tone.primary,
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    gap: 8,
                    minHeight: 46,
                    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    radius: 8,
                    fontSize: 15,
                    fontWeight: 900,
                  ),
                  children: [
                    Text.span('Read Installation Guide'),
                    Icon(Icons.arrowRight, size: 18),
                  ],
                ),
                Link(
                  href: 'https://github.com/flint-dart/flint_dart',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  dartStyle: const DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    gap: 8,
                    minHeight: 46,
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                    radius: 8,
                    fontSize: 14,
                    fontWeight: 800,
                  ),
                  children: [
                    Icon(Icons.code, size: 16),
                    Text.span('GitHub Repository'),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // MONOSPACE CODE RENDERING
  // ---------------------------------------------------------------------------
  FlintNode _syntaxBlock(List<_FullstackLine> lines) {
    return Column(
      dartStyle: const DartStyle(gap: 2, alignItems: AlignItems.start, whiteSpace: 'pre'),
      children: [
        for (var i = 0; i < lines.length; i++)
          Row(
            dartStyle: const DartStyle(
              display: Display.flex,
              alignItems: AlignItems.baseline,
              gap: 14,
              width: SizeValue.percent(100),
              whiteSpace: 'pre',
            ),
            children: [
              Text.span(
                '${i + 1}'.padLeft(2),
                dartStyle: const DartStyle(
                  color: Color('#475569'),
                  fontSize: 12,
                  width: 22,
                  display: Display.inlineBlock,
                ),
              ),
              Container(
                dartStyle: const DartStyle(
                  display: Display.inlineBlock,
                  whiteSpace: 'pre',
                ),
                children: [
                  for (final token in lines[i].tokens)
                    Text.span(
                      token.text,
                      dartStyle: DartStyle(
                        color: token.color,
                        fontWeight: token.bold ? 800 : 400,
                        whiteSpace: 'pre',
                      ),
                    ),
                ],
              ),
            ],
          ),
      ],
    );
  }

  FlintNode _macDot(Color color) {
    return Container(
      dartStyle: DartStyle(
        width: 10,
        height: 10,
        radius: 999,
        background: color,
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// FULLSTACK CODE SNIPPETS
// ---------------------------------------------------------------------------
class _FullstackSnippet {
  final String tabLabel;
  final String layerTitle;
  final String filename;
  final String tag;
  final IconData icon;
  final Color accentColor;
  final String statusMessage;
  final String code;
  final List<_FullstackLine> lines;

  _FullstackSnippet({
    required this.tabLabel,
    required this.layerTitle,
    required this.filename,
    required this.tag,
    required this.icon,
    required this.accentColor,
    required this.statusMessage,
    required this.code,
    required this.lines,
  });
}

class _FullstackLine {
  final List<_FullstackToken> tokens;
  _FullstackLine(this.tokens);
}

class _FullstackToken {
  final String text;
  final Color color;
  final bool bold;
  _FullstackToken(this.text, this.color, {this.bold = false});
}

final _kw = Color('#f43f5e'); // Keyword (import, class, async)
final _fn = Color('#38bdf8'); // Function / Method
final _typ = Color('#34d399'); // Type / Class
final _str = Color('#fbbf24'); // String literal
final _txt = Color('#e2e8f0'); // Plain text

final List<_FullstackSnippet> _snippets = [
  _FullstackSnippet(
    tabLabel: 'routes.dart',
    layerTitle: 'Unified Routing & Context (ctx)',
    filename: 'lib/routes/api_routes.dart',
    tag: 'Context Route',
    icon: Icons.server,
    accentColor: Color('#10b981'),
    statusMessage: 'HTTP 200 OK • 0.3ms latency • Unified Context',
    code: '''import 'package:flint_dart/flint_dart.dart';
import 'package:app/models/project_model.dart';

void registerRoutes(Flint app) {
  app.get('/api/projects', (ctx) async {
    final user = await ctx.req.auth;
    final projects = await Project()
        .where('user_id', '=', user.id)
        .withRelation('deployments')
        .get();

    return ctx.res?.json({
      'status': 'success',
      'data': projects.map((p) => p.toMap()).toList(),
    });
  });
}''',
    lines: [
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:flint_dart/flint_dart.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:app/models/project_model.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('void ', _typ),
        _FullstackToken('registerRoutes', _fn),
        _FullstackToken('(', _txt),
        _FullstackToken('Flint', _typ, bold: true),
        _FullstackToken(' app) {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  app.', _txt),
        _FullstackToken('get', _fn),
        _FullstackToken("('/api/projects', (ctx) ", _str),
        _FullstackToken('async', _kw, bold: true),
        _FullstackToken(' {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    final ', _kw),
        _FullstackToken('user = ', _txt),
        _FullstackToken('await ', _kw),
        _FullstackToken('ctx.req.', _txt),
        _FullstackToken('auth', _fn),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    final ', _kw),
        _FullstackToken('projects = ', _txt),
        _FullstackToken('await ', _kw),
        _FullstackToken('Project', _typ, bold: true),
        _FullstackToken('()', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        .', _txt),
        _FullstackToken('where', _fn),
        _FullstackToken("('user_id', '=', user.id)", _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        .', _txt),
        _FullstackToken('withRelation', _fn),
        _FullstackToken("('deployments')", _str),
      ]),
      _FullstackLine([
        _FullstackToken('        .', _txt),
        _FullstackToken('get', _fn),
        _FullstackToken('();', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('    return ', _kw, bold: true),
        _FullstackToken('ctx.res?.', _txt),
        _FullstackToken('json', _fn),
        _FullstackToken('({', _txt),
      ]),
      _FullstackLine([
        _FullstackToken("      'status': ", _txt),
        _FullstackToken("'success'", _str),
        _FullstackToken(',', _txt),
      ]),
      _FullstackLine([
        _FullstackToken("      'data': projects.", _txt),
        _FullstackToken('map', _fn),
        _FullstackToken('((p) => p.', _txt),
        _FullstackToken('toMap', _fn),
        _FullstackToken('()).', _txt),
        _FullstackToken('toList', _fn),
        _FullstackToken('(),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    });', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  });', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('}', _txt),
      ]),
    ],
  ),
  _FullstackSnippet(
    tabLabel: 'ui_page.dart',
    layerTitle: 'Declarative Web UI & SSR',
    filename: 'lib/ui/pages/dashboard_page.dart',
    tag: 'Frontend Component',
    icon: Icons.palette,
    accentColor: Color('#06b6d4'),
    statusMessage: 'SSR Hydrated • 60fps Reactive Signals • Theme Aware',
    code: '''import 'package:flint_dart/ui.dart';

class DashboardPage extends Component {
  final Map<String, dynamic> props;
  DashboardPage(this.props);

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(padding: EdgeInsets.all(24)),
      children: [
        Text.h1('Active Deployments', dartStyle: _headingStyle),
        ResourceView<List<Project>>(
          data: props['projects'],
          builder: (projects) => ProjectGrid(projects),
        ),
      ],
    );
  }
}''',
    lines: [
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:flint_dart/ui.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('class ', _kw, bold: true),
        _FullstackToken('DashboardPage ', _typ, bold: true),
        _FullstackToken('extends ', _kw),
        _FullstackToken('Component', _typ),
        _FullstackToken(' {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  final ', _kw),
        _FullstackToken('Map<String, dynamic> props;', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  DashboardPage(this.props);', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('  @override', _fn),
      ]),
      _FullstackLine([
        _FullstackToken('  View ', _typ),
        _FullstackToken('build', _fn),
        _FullstackToken('() {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    return ', _kw, bold: true),
        _FullstackToken('Container', _typ, bold: true),
        _FullstackToken('(', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('      dartStyle: ', _txt),
        _FullstackToken('const ', _kw),
        _FullstackToken('DartStyle', _typ),
        _FullstackToken('(padding: ', _txt),
        _FullstackToken('EdgeInsets.', _typ),
        _FullstackToken('all', _fn),
        _FullstackToken('(24)),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('      children: [', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        Text.', _txt),
        _FullstackToken('h1', _fn),
        _FullstackToken("('Active Deployments', dartStyle: _headingStyle),", _str),
      ]),
      _FullstackLine([
        _FullstackToken('        ResourceView<', _typ),
        _FullstackToken('List<Project>', _typ, bold: true),
        _FullstackToken('>(', _txt),
      ]),
      _FullstackLine([
        _FullstackToken("          data: props['projects'],", _txt),
      ]),
      _FullstackLine([
        _FullstackToken('          builder: (projects) => ', _txt),
        _FullstackToken('ProjectGrid', _typ),
        _FullstackToken('(projects),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        ),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('      ],', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    );', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  }', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('}', _txt),
      ]),
    ],
  ),
  _FullstackSnippet(
    tabLabel: 'model.dart',
    layerTitle: 'Flint ORM & Database Layer',
    filename: 'lib/models/project_model.dart',
    tag: 'ORM & RLS Model',
    icon: Icons.database,
    accentColor: Color('#3b82f6'),
    statusMessage: 'PostgreSQL Active • Relations Typed • RLS Policy Enforced',
    code: '''import 'package:flint_dart/model.dart';
import 'package:flint_dart/schema.dart';

class Project extends Model<Project> {
  Project() : super(() => Project());

  String get name => getAttribute('name') ?? '';
  String get status => getAttribute('status') ?? 'draft';
  String get userId => getAttribute('user_id') ?? '';

  @override
  Table get table => Table(
        name: 'projects',
        columns: [
          Column(name: 'name', type: ColumnType.string, length: 255),
          Column(name: 'status', type: ColumnType.string, length: 50),
          Column(name: 'user_id', type: ColumnType.string, length: 100),
        ],
      );
}''',
    lines: [
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:flint_dart/model.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:flint_dart/schema.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('class ', _kw, bold: true),
        _FullstackToken('Project ', _typ, bold: true),
        _FullstackToken('extends ', _kw),
        _FullstackToken('Model<Project>', _typ),
        _FullstackToken(' {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  Project() : ', _txt),
        _FullstackToken('super', _kw, bold: true),
        _FullstackToken('(() => ', _txt),
        _FullstackToken('Project', _typ),
        _FullstackToken('());', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('  String ', _typ),
        _FullstackToken('get ', _kw),
        _FullstackToken('name => ', _txt),
        _FullstackToken('getAttribute', _fn),
        _FullstackToken("('name') ?? ", _str),
        _FullstackToken("''", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  String ', _typ),
        _FullstackToken('get ', _kw),
        _FullstackToken('status => ', _txt),
        _FullstackToken('getAttribute', _fn),
        _FullstackToken("('status') ?? ", _str),
        _FullstackToken("'draft'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('  @override', _fn),
      ]),
      _FullstackLine([
        _FullstackToken('  Table ', _typ),
        _FullstackToken('get ', _kw),
        _FullstackToken('table => ', _txt),
        _FullstackToken('Table', _typ, bold: true),
        _FullstackToken('(', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        name: ', _txt),
        _FullstackToken("'projects'", _str),
        _FullstackToken(',', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        columns: [', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('          Column(name: ', _txt),
        _FullstackToken("'name'", _str),
        _FullstackToken(', type: ', _txt),
        _FullstackToken('ColumnType.', _typ),
        _FullstackToken('string', _txt),
        _FullstackToken(', length: 255),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('          Column(name: ', _txt),
        _FullstackToken("'status'", _str),
        _FullstackToken(', type: ', _txt),
        _FullstackToken('ColumnType.', _typ),
        _FullstackToken('string', _txt),
        _FullstackToken(', length: 50),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('        ],', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('      );', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('}', _txt),
      ]),
    ],
  ),
  _FullstackSnippet(
    tabLabel: 'websocket.dart',
    layerTitle: 'Real-Time WebSocket Layer',
    filename: 'lib/routes/ws_routes.dart',
    tag: 'Live Channels',
    icon: Icons.zap,
    accentColor: Color('#f59e0b'),
    statusMessage: '0.1ms Room Broadcast • Presence Active • Sub-millisecond',
    code: '''import 'package:flint_dart/flint_dart.dart';

void registerWebSockets(Flint app) {
  app.websocket('/ws/deployments', (req, socket) {
    final projectId = req.query['id'] ?? 'global';
    socket.join(projectId);

    socket.on('deploy', (data) {
      socket.emitToRoom(projectId, 'deployment_updated', {
        'status': 'building',
        'timestamp': DateTime.now().toIso8601String(),
      });
    });
  });
}''',
    lines: [
      _FullstackLine([
        _FullstackToken('import ', _kw, bold: true),
        _FullstackToken("'package:flint_dart/flint_dart.dart'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('void ', _typ),
        _FullstackToken('registerWebSockets', _fn),
        _FullstackToken('(', _txt),
        _FullstackToken('Flint', _typ, bold: true),
        _FullstackToken(' app) {', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  app.', _txt),
        _FullstackToken('websocket', _fn),
        _FullstackToken("('/ws/deployments', (req, socket) {", _str),
      ]),
      _FullstackLine([
        _FullstackToken('    final ', _kw),
        _FullstackToken("projectId = req.query['id'] ?? ", _txt),
        _FullstackToken("'global'", _str),
        _FullstackToken(';', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    socket.', _txt),
        _FullstackToken('join', _fn),
        _FullstackToken('(projectId);', _txt),
      ]),
      _FullstackLine([]),
      _FullstackLine([
        _FullstackToken('    socket.', _txt),
        _FullstackToken('on', _fn),
        _FullstackToken("('deploy', (data) {", _str),
      ]),
      _FullstackLine([
        _FullstackToken('      socket.', _txt),
        _FullstackToken('emitToRoom', _fn),
        _FullstackToken("(projectId, 'deployment_updated', {", _str),
      ]),
      _FullstackLine([
        _FullstackToken("        'status': ", _txt),
        _FullstackToken("'building'", _str),
        _FullstackToken(',', _txt),
      ]),
      _FullstackLine([
        _FullstackToken("        'timestamp': ", _txt),
        _FullstackToken('DateTime.', _typ),
        _FullstackToken('now', _fn),
        _FullstackToken('().', _txt),
        _FullstackToken('toIso8601String', _fn),
        _FullstackToken('(),', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('      });', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('    });', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('  });', _txt),
      ]),
      _FullstackLine([
        _FullstackToken('}', _txt),
      ]),
    ],
  ),
];
