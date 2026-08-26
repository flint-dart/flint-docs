import 'dart:async';

import 'package:flint_dart/ui.dart';

import '../../../support/product_versions.dart';
import '../copy_text.dart';
import '../detect_os.dart';

class HomeHero extends StatefulComponent {
  int _activeTab = 0;
  String _selectedOs = 'linux';
  bool _copiedInstall = false;
  bool _copiedCode = false;

  @override
  void didMount() {
    final detected = detectOperatingSystem();
    if (detected != null && detected != _selectedOs) {
      setState(() => _selectedOs = detected);
    }
  }

  void _copyInstallCommand(String command) {
    copyText(command);
    setState(() => _copiedInstall = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedInstall = false);
    });
  }

  void _copyCurrentCode(String code) {
    copyText(code);
    setState(() => _copiedCode = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedCode = false);
    });
  }

  String _getInstallCmd() {
    if (_selectedOs == 'windows') {
      return 'powershell -c "irm https://flintdart.dev/install.ps1 | iex"';
    }
    return 'curl -fsSL https://flintdart.dev/install.sh | sh';
  }

  @override
  FlintNode build() {
    final installCmd = _getInstallCmd();
    final currentSnippet = _snippets[_activeTab];

    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        width: SizeValue.percent(100),
        minHeight: SizeValue('calc(100vh - 68px)'),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('bg'),
        light: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(15, 0),
              stops: const [
                GradientStop(Color.rgba(52, 211, 153, 0.22), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(85, 10),
              stops: const [
                GradientStop(Color.rgba(56, 189, 248, 0.2), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(50, 60),
              stops: const [
                GradientStop(Color.rgba(167, 139, 250, 0.12), 0),
                GradientStop(Colors.transparent, 55),
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
              at: const GradientPosition.percent(12, 0),
              stops: const [
                GradientStop(Color.rgba(16, 185, 129, 0.18), 0),
                GradientStop(Colors.transparent, 42),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(88, 12),
              stops: const [
                GradientStop(Color.rgba(14, 165, 233, 0.18), 0),
                GradientStop(Colors.transparent, 44),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(50, 50),
              stops: const [
                GradientStop(Color.rgba(139, 92, 246, 0.1), 0),
                GradientStop(Colors.transparent, 55),
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
        _ambientGrid(),
        _ambientGlowOrb(
          top: '8%',
          left: '4%',
          width: 380,
          height: 380,
          color: Color.rgba(52, 211, 153, 0.15),
        ),
        _ambientGlowOrb(
          bottom: '12%',
          right: '5%',
          width: 440,
          height: 440,
          color: Color.rgba(56, 189, 248, 0.14),
        ),
        Container(
          dartStyle: const DartStyle(
            position: Position.relative,
            zIndex: 2,
            width: SizeValue.percent(100),
            maxWidth: SizeValue.percent(100),
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 36),
            md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 48)),
            lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 56)),
            xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 64)),
          ),
          children: [
            _topAnnouncementPill(),
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 36,
                alignItems: AlignItems.center,
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.05)),
                    GridTrack.minmax(520, SizeValue.fr(1.15)),
                  ]),
                  gap: 48,
                ),
                xl: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.05)),
                    GridTrack.minmax(600, SizeValue.fr(1.2)),
                  ]),
                  gap: 64,
                ),
              ),
              children: [
                _heroLeftColumn(installCmd),
                _heroRightIdeWindow(currentSnippet),
              ],
            ),
            _ecosystemProofBanner(),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 1. TOP ANNOUNCEMENT PILL
  // ---------------------------------------------------------------------------
  FlintNode _topAnnouncementPill() {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        justifyContent: JustifyContent.center,
        margin: EdgeInsets.only(bottom: 28),
      ),
      children: [
        Link(
          href: '/whats-new',
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 10,
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
            radius: 999,
            border: Border.all(color: Color.rgba(16, 185, 129, 0.3)),
            background: ThemeToken.color('panel'),
            shadow: Shadow(
              y: 8,
              blur: 24,
              spread: -8,
              color: Color.rgba(16, 185, 129, 0.25),
            ),
            light: const DartStyle(
              background: Color.rgba(255, 255, 255, 0.85),
            ),
            dark: const DartStyle(
              background: Color.rgba(15, 23, 42, 0.75),
            ),
            transition: StyleTransition.all(milliseconds: 180),
            hover: DartStyle(
              transform: StyleTransform.translateY(-1),
              border: Border.all(color: Color.rgba(52, 211, 153, 0.6)),
            ),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 8,
                height: 8,
                radius: 999,
                background: Color('#10b981'),
                shadow: const Shadow(
                  y: 0,
                  blur: 10,
                  spread: 2,
                  color: Color('#10b981'),
                ),
              ),
            ),
            Text.span(
              'Flint ${ProductVersions.flintDartVersionLabel} Released',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: ThemeToken.color('primary'),
              ),
            ),
            Text.span(
              '•',
              dartStyle: DartStyle(
                fontSize: 12,
                color: ThemeToken.color('muted'),
              ),
            ),
            Text.span(
              'Explore Multi-Provider AI & Full-Stack Dart',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 700,
                color: ThemeToken.color('text'),
              ),
            ),
            Icon(Icons.chevronRight, size: 14, color: ThemeToken.color('primary')),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 2. HERO LEFT COLUMN
  // ---------------------------------------------------------------------------
  FlintNode _heroLeftColumn(String installCmd) {
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
            Icon(Icons.zap, size: 15, color: Color('#10b981')),
            Text.span('THE UNIFIED DART ECOSYSTEM'),
          ],
        ),
        Text.h1(
          'Flint Ecosystem',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 820,
            fontSize: const SizeValue('clamp(3rem, 6.2vw, 5.2rem)'),
            lineHeight: 0.98,
            fontWeight: 900,
            color: Color('transparent'),
            background: Gradient.linear(
              110,
              const [
                GradientStop(Color('#10b981'), 0),
                GradientStop(Color('#06b6d4'), 45),
                GradientStop(Color('#8b5cf6'), 100),
              ],
            ),
            backgroundClip: BackgroundClip.text,
            webkitBackgroundClip: BackgroundClip.text,
          ),
        ),
        Text.h2(
          'One language across your entire stack: Full-Stack Web, Client SDK, Native AI, and Robotics.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 16, bottom: 0),
            maxWidth: 720,
            fontSize: 23,
            lineHeight: 1.28,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          'Build end-to-end full-stack web applications with Flint Dart, universal cross-platform clients with Flint Client, autonomous AI agents with Flint AI, and connected hardware & robotics with Flint Hardware.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 16, bottom: 0),
            maxWidth: 680,
            fontSize: 16,
            lineHeight: 1.7,
            color: ThemeToken.color('muted'),
          ),
        ),
        // Interactive Install Command Box
        Container(
          dartStyle: DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 620,
            margin: const EdgeInsets.only(top: 24),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            radius: 8,
            border: Border.all(
              color: Color.rgba(56, 189, 248, 0.25),
            ),
            background: Color.rgba(3, 7, 18, 0.75),
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
                    fontSize: 12,
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
              onPressed: (_) => _copyInstallCommand(installCmd),
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 6,
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                radius: 6,
                background: _copiedInstall
                    ? Color.rgba(16, 185, 129, 0.25)
                    : Color.rgba(255, 255, 255, 0.1),
                color: _copiedInstall ? Color('#34d399') : Colors.white,
                fontSize: 12,
                fontWeight: 800,
                transition: StyleTransition.all(milliseconds: 150),
              ),
              children: [
                Icon(
                  _copiedInstall ? Icons.check : Icons.copy,
                  size: 13,
                  color: _copiedInstall ? Color('#34d399') : Colors.white,
                ),
                Text.span(_copiedInstall ? 'Copied' : 'Copy'),
              ],
            ),
          ],
        ),
        // CTA Buttons
        Wrap(
          gap: 12,
          dartStyle: const DartStyle(margin: EdgeInsets.only(top: 24)),
          children: [
            Link(
              href: '/fullstack',
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
                Text.span('Get Started Free'),
                Icon(Icons.arrowRight, size: 18),
              ],
            ),
            Link(
              href: '/guides',
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
                Text.span('Documentation'),
              ],
            ),
            Link(
              href: 'https://github.com/flint-dart',
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
                Icon(Icons.code, size: 16),
                Text.span('GitHub'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 3. HERO RIGHT IDE / ECOSYSTEM LIVE PREVIEW
  // ---------------------------------------------------------------------------
  FlintNode _heroRightIdeWindow(_Snippet snippet) {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        zIndex: 2,
        width: SizeValue.percent(100),
        radius: 12,
        border: Border.all(
          color: Color.rgba(56, 189, 248, 0.25),
        ),
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
        // Editor Top Bar with macOS Window Controls & Tabs
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            borderBottom: Border(
              color: Color.rgba(255, 255, 255, 0.1),
              width: 1,
            ),
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
                  _ideTabButton(
                    index: i,
                    label: _snippets[i].tabLabel,
                    icon: _snippets[i].icon,
                    accent: _snippets[i].accentColor,
                    active: _activeTab == i,
                  ),
              ],
            ),
            Button(
              variant: ButtonVariant.ghost,
              size: ComponentSize.sm,
              onPressed: (_) => _copyCurrentCode(snippet.code),
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
        // Pillar Meta Header
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            background: Color.rgba(255, 255, 255, 0.02),
            borderBottom: Border(
              color: Color.rgba(255, 255, 255, 0.06),
              width: 1,
            ),
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
                  snippet.pillarTitle,
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
            Link(
              href: snippet.href,
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: snippet.accentColor,
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 4,
              ),
              children: [
                Text.span('Docs'),
                Icon(Icons.chevronRight, size: 14),
              ],
            ),
          ],
        ),
        // Code Display Window
        Container(
          dartStyle: const DartStyle(
            padding: EdgeInsets.all(20),
            maxHeight: 400,
            overflow: 'auto',
            fontFamily: FontFamily.monospace,
            fontSize: 13,
            lineHeight: 1.65,
            background: Color('#040807'),
            whiteSpace: 'pre',
          ),
          children: [
            _syntaxHighlightedBlock(snippet.lines),
          ],
        ),
        // Bottom Terminal Status Strip
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            borderTop: Border(
              color: Color.rgba(255, 255, 255, 0.08),
              width: 1,
            ),
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
              'Pure Dart • Zero Glue',
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

  FlintNode _ideTabButton({
    required int index,
    required String label,
    required IconData icon,
    required Color accent,
    required bool active,
  }) {
    return Button(
      variant: ButtonVariant.ghost,
      size: ComponentSize.sm,
      onPressed: (_) => setState(() => _activeTab = index),
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 6,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 6,
        fontSize: 12,
        fontWeight: active ? 900 : 600,
        color: active ? Colors.white : const Color('#94a3b8'),
        background: active
            ? Color.rgba(255, 255, 255, 0.1)
            : Colors.transparent,
        borderBottom: active
            ? Border(color: accent, width: 2)
            : Border.none,
      ),
      children: [
        Icon(icon, size: 13, color: active ? accent : const Color('#64748b')),
        Text.span(label),
      ],
    );
  }

  FlintNode _syntaxHighlightedBlock(List<_CodeLine> lines) {
    return Column(
      dartStyle: const DartStyle(
        gap: 2,
        alignItems: AlignItems.start,
        whiteSpace: 'pre',
      ),
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

  // ---------------------------------------------------------------------------
  // 4. ECOSYSTEM PROOF BANNER
  // ---------------------------------------------------------------------------
  FlintNode _ecosystemProofBanner() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        margin: const EdgeInsets.only(top: 48),
        padding: const EdgeInsets.all(16),
        radius: 10,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.75),
          shadow: Shadow(
            y: 12,
            blur: 32,
            spread: -16,
            color: Color.rgba(15, 23, 42, 0.15),
          ),
        ),
        dark: DartStyle(
          background: Color.rgba(15, 23, 42, 0.65),
          shadow: ThemeToken.shadow('glow'),
        ),
        backdropFilter: StyleFilter.blur(16),
      ),
      children: [
        Grid(
          columns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          children: [
            _proofPill(
              Icons.server,
              'Full-Stack Web (SSR & ORM)',
              'Reactive Flint UI & API gateway',
              Color('#10b981'),
            ),
            _proofPill(
              Icons.globe,
              'Universal Client SDK',
              'Offline sync & typed channels',
              Color('#06b6d4'),
            ),
            _proofPill(
              Icons.sparkles,
              'Autonomous AI Mesh',
              'Multi-provider tool calling & LLMs',
              Color('#a855f7'),
            ),
            _proofPill(
              Icons.zap,
              'Hardware & Robotics (R&D)',
              'ESP32, RP2040 & IMU telemetry',
              Color('#f97316'),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _proofPill(
    IconData icon,
    String title,
    String sub,
    Color accent,
  ) {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 12,
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 36,
            height: 36,
            display: Display.grid,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            radius: 8,
            background: Color.rgba(16, 185, 129, 0.14),
            color: accent,
          ),
          child: Icon(icon, size: 18),
        ),
        Column(
          dartStyle: const DartStyle(gap: 1),
          children: [
            Text.strong(
              title,
              dartStyle: DartStyle(
                fontSize: 13,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.span(
              sub,
              dartStyle: DartStyle(
                fontSize: 11,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // BACKGROUND AMBIENT GRAPHICS
  // ---------------------------------------------------------------------------
  FlintNode _ambientGrid() {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.45,
        maskImage: Gradient.linearTo(GradientDirection.bottom, const [
          GradientStop(Colors.black, 0),
          GradientStop(Colors.black, 65),
          GradientStop(Colors.transparent, 100),
        ]),
        background: Background.layers([
          const Color(
            'linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)',
          ),
          const Color(
            'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)',
          ),
        ]),
      ),
      style: const {'background-size': '44px 44px, 44px 44px'},
    );
  }

  FlintNode _ambientGlowOrb({
    String? top,
    String? bottom,
    String? left,
    String? right,
    required double width,
    required double height,
    required Color color,
  }) {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height,
        radius: 999,
        background: color,
        backdropFilter: StyleFilter.blur(70),
      ),
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
// DATA MODELS & PREVIEW SNIPPETS
// ---------------------------------------------------------------------------
class _Snippet {
  final String tabLabel;
  final String pillarTitle;
  final String filename;
  final String href;
  final IconData icon;
  final Color accentColor;
  final String statusMessage;
  final String code;
  final List<_CodeLine> lines;

  _Snippet({
    required this.tabLabel,
    required this.pillarTitle,
    required this.filename,
    required this.href,
    required this.icon,
    required this.accentColor,
    required this.statusMessage,
    required this.code,
    required this.lines,
  });
}

class _CodeLine {
  final List<_Token> tokens;
  _CodeLine(this.tokens);
}

class _Token {
  final String text;
  final Color color;
  final bool bold;

  _Token(this.text, this.color, {this.bold = false});
}

final _kw = Color('#f43f5e'); // Keyword (import, class, async)
final _fn = Color('#38bdf8'); // Function / Method
final _typ = Color('#34d399'); // Type / Class
final _str = Color('#fbbf24'); // String literal
final _txt = Color('#e2e8f0'); // Plain text

final List<_Snippet> _snippets = [
  _Snippet(
    tabLabel: 'server.dart',
    pillarTitle: 'Flint Dart Web Server',
    filename: 'lib/controllers/project_controller.dart',
    href: '/fullstack',
    icon: Icons.server,
    accentColor: Color('#10b981'),
    statusMessage: 'HTTP 200 OK • 0.4ms latency • RLS Active',
    code: '''import 'package:flint_dart/flint_dart.dart';

void registerRoutes(Flint app) {
  app.get('/api/projects', (ctx) async {
    final user = await ctx.req.auth;
    final projects = await Project()
        .where('user_id', '=', user.id)
        .withRelation('deployments')
        .get();

    return ctx.res?.json({'status': true, 'data': projects});
  });
}''',
    lines: [
      _CodeLine([
        _Token('import ', _kw, bold: true),
        _Token("'package:flint_dart/flint_dart.dart'", _str),
        _Token(';', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('void ', _typ),
        _Token('registerRoutes', _fn),
        _Token('(', _txt),
        _Token('Flint', _typ, bold: true),
        _Token(' app) {', _txt),
      ]),
      _CodeLine([
        _Token('  app.', _txt),
        _Token('get', _fn),
        _Token("('/api/projects', (ctx) ", _str),
        _Token('async', _kw, bold: true),
        _Token(' {', _txt),
      ]),
      _CodeLine([
        _Token('    final ', _kw),
        _Token('user = ', _txt),
        _Token('await ', _kw),
        _Token('ctx.req.', _txt),
        _Token('auth', _fn),
        _Token(';', _txt),
      ]),
      _CodeLine([
        _Token('    final ', _kw),
        _Token('projects = ', _txt),
        _Token('await ', _kw),
        _Token('Project', _typ, bold: true),
        _Token('()', _txt),
      ]),
      _CodeLine([
        _Token('        .', _txt),
        _Token('where', _fn),
        _Token("('user_id', '=', user.id)", _txt),
      ]),
      _CodeLine([
        _Token('        .', _txt),
        _Token('withRelation', _fn),
        _Token("('deployments')", _str),
      ]),
      _CodeLine([
        _Token('        .', _txt),
        _Token('get', _fn),
        _Token('();', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('    return ', _kw, bold: true),
        _Token('ctx.res?.', _txt),
        _Token('json', _fn),
        _Token("({'status': true, 'data': projects});", _txt),
      ]),
      _CodeLine([
        _Token('  });', _txt),
      ]),
      _CodeLine([
        _Token('}', _txt),
      ]),
    ],
  ),
  _Snippet(
    tabLabel: 'client.dart',
    pillarTitle: 'Flint Client SDK',
    filename: 'lib/services/api_sync.dart',
    href: '/client',
    icon: Icons.globe,
    accentColor: Color('#06b6d4'),
    statusMessage: 'Client Ready • Typed response • In-memory cache',
    code: '''import 'package:flint_client/flint_client.dart';

Future<void> main() async {
  final client = FlintClient(
    baseUrl: 'https://api.flintdart.dev',
    debug: true,
  );

  final response = await client.get<Map<String, dynamic>>('/api/projects');
  if (response.isSuccess) {
    print('Projects: \${response.data}');
  }
}''',
    lines: [
      _CodeLine([
        _Token('import ', _kw, bold: true),
        _Token("'package:flint_client/flint_client.dart'", _str),
        _Token(';', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('Future<', _typ),
        _Token('void', _typ),
        _Token('> ', _txt),
        _Token('main', _fn),
        _Token('() ', _txt),
        _Token('async', _kw, bold: true),
        _Token(' {', _txt),
      ]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('client = ', _txt),
        _Token('FlintClient', _typ, bold: true),
        _Token('(', _txt),
      ]),
      _CodeLine([
        _Token('    baseUrl: ', _txt),
        _Token("'https://api.flintdart.dev'", _str),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token('    debug: ', _txt),
        _Token('true', _kw, bold: true),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token('  );', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('response = ', _txt),
        _Token('await ', _kw),
        _Token('client.', _txt),
        _Token('get', _fn),
        _Token('<', _txt),
        _Token('Map<String, dynamic>', _typ),
        _Token(">(", _txt),
        _Token("'/api/projects'", _str),
        _Token(');', _txt),
      ]),
      _CodeLine([
        _Token('  if ', _kw, bold: true),
        _Token('(response.', _txt),
        _Token('isSuccess', _fn),
        _Token(') {', _txt),
      ]),
      _CodeLine([
        _Token('    print(', _txt),
        _Token("'Projects: \${response.data}'", _str),
        _Token(');', _txt),
      ]),
      _CodeLine([
        _Token('  }', _txt),
      ]),
      _CodeLine([
        _Token('}', _txt),
      ]),
    ],
  ),
  _Snippet(
    tabLabel: 'ai_agent.dart',
    pillarTitle: 'Flint AI Engine',
    filename: 'lib/agents/metrics_agent.dart',
    href: '/ai',
    icon: Icons.sparkles,
    accentColor: Color('#a855f7'),
    statusMessage: 'Multi-Provider Mesh • AiGoal -> AiPlan -> AiRunResult',
    code: '''import 'package:flint_ai/flint_ai.dart';

Future<void> main() async {
  final ai = FlintAi();

  final result = await ai.run(
    agent: TaskAgent(),
    goal: const AiGoal(
      task: 'Analyze production server metrics',
      input: {'clusterId': 'eu-central-1'},
    ),
    userId: 'user-1',
  );

  print(result.output);
}''',
    lines: [
      _CodeLine([
        _Token('import ', _kw, bold: true),
        _Token("'package:flint_ai/flint_ai.dart'", _str),
        _Token(';', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('Future<', _typ),
        _Token('void', _typ),
        _Token('> ', _txt),
        _Token('main', _fn),
        _Token('() ', _txt),
        _Token('async', _kw, bold: true),
        _Token(' {', _txt),
      ]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('ai = ', _txt),
        _Token('FlintAi', _typ, bold: true),
        _Token('();', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('result = ', _txt),
        _Token('await ', _kw),
        _Token('ai.', _txt),
        _Token('run', _fn),
        _Token('(', _txt),
      ]),
      _CodeLine([
        _Token('    agent: ', _txt),
        _Token('TaskAgent', _typ, bold: true),
        _Token('(),', _txt),
      ]),
      _CodeLine([
        _Token('    goal: ', _txt),
        _Token('const ', _kw),
        _Token('AiGoal', _typ, bold: true),
        _Token('(', _txt),
      ]),
      _CodeLine([
        _Token('      task: ', _txt),
        _Token("'Analyze production metrics'", _str),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token("      input: {'clusterId': 'eu-central-1'},", _txt),
      ]),
      _CodeLine([
        _Token('    ),', _txt),
      ]),
      _CodeLine([
        _Token('    userId: ', _txt),
        _Token("'user-1'", _str),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token('  );', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  print(', _txt),
        _Token('result.output', _txt),
        _Token(');', _txt),
      ]),
      _CodeLine([
        _Token('}', _txt),
      ]),
    ],
  ),
  _Snippet(
    tabLabel: 'robotics.dart',
    pillarTitle: 'Flint Hardware & Robotics',
    filename: 'firmware/cam_guard.dart',
    href: '/hardware',
    icon: Icons.zap,
    accentColor: Color('#f97316'),
    statusMessage: 'ESP32-CAM Native • TFLite Micro Model • 15 FPS Inference',
    code: '''import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final visionGuard = FirmwareBuilder('cam_guard', target: BoardTarget.esp32Cam);

  // 1. Configure On-Board Camera
  visionGuard.camera(
    resolution: CameraResolution.qvga,
    format: PixelFormat.rgb565,
    frameRate: 15,
  );

  // 2. Load Quantized TFLite Micro Model
  final model = visionGuard.tfliteModel(
    name: 'person_detect',
    assetPath: 'models/person_detect.tflite',
    inputShape: const [1, 96, 96, 1],
    outputShape: const [1, 2],
    quantization: TensorQuantization.int8,
    tensorArenaSizeKb: 128,
  );

  // 3. Real-Time Edge Inference Loop
  visionGuard.loop((ctx) {
    ctx.log('Running on-device TFLite inference...');
  });
}''',
    lines: [
      _CodeLine([
        _Token('import ', _kw, bold: true),
        _Token("'package:flint_hardware/flint_hardware.dart'", _str),
        _Token(';', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('void ', _typ),
        _Token('main', _fn),
        _Token('() {', _txt),
      ]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('visionGuard = ', _txt),
        _Token('FirmwareBuilder', _typ, bold: true),
        _Token("('cam_guard', target: ", _txt),
        _Token('BoardTarget', _typ),
        _Token('.esp32Cam);', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  visionGuard.', _txt),
        _Token('camera', _fn),
        _Token('(', _txt),
      ]),
      _CodeLine([
        _Token('    resolution: ', _txt),
        _Token('CameraResolution', _typ),
        _Token('.qvga,', _txt),
      ]),
      _CodeLine([
        _Token('    format: ', _txt),
        _Token('PixelFormat', _typ),
        _Token('.rgb565, frameRate: 15,', _txt),
      ]),
      _CodeLine([
        _Token('  );', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  final ', _kw),
        _Token('model = visionGuard.', _txt),
        _Token('tfliteModel', _fn),
        _Token('(', _txt),
      ]),
      _CodeLine([
        _Token('    name: ', _txt),
        _Token("'person_detect'", _str),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token('    assetPath: ', _txt),
        _Token("'models/person_detect.tflite'", _str),
        _Token(',', _txt),
      ]),
      _CodeLine([
        _Token('    inputShape: ', _txt),
        _Token('const ', _kw),
        _Token('[1, 96, 96, 1],', _txt),
      ]),
      _CodeLine([
        _Token('    outputShape: ', _txt),
        _Token('const ', _kw),
        _Token('[1, 2],', _txt),
      ]),
      _CodeLine([
        _Token('    quantization: ', _txt),
        _Token('TensorQuantization', _typ),
        _Token('.int8,', _txt),
      ]),
      _CodeLine([
        _Token('    tensorArenaSizeKb: 128,', _txt),
      ]),
      _CodeLine([
        _Token('  );', _txt),
      ]),
      _CodeLine([]),
      _CodeLine([
        _Token('  visionGuard.', _txt),
        _Token('loop', _fn),
        _Token('((ctx) {', _txt),
      ]),
      _CodeLine([
        _Token('    ctx.', _txt),
        _Token('log', _fn),
        _Token("('Running on-device TFLite inference...');", _str),
      ]),
      _CodeLine([
        _Token('  });', _txt),
      ]),
      _CodeLine([
        _Token('}', _txt),
      ]),
    ],
  ),
];
