import 'package:flint_ui/flint_ui.dart';

import '../../../support/product_versions.dart';

class HomeHero extends FlintComponent {
  @override
  FlintNode build() {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        minHeight: SizeValue('calc(100vh - 68px)'),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('bg'),
        light: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(10, 0),
              stops: const [
                GradientStop(Color.rgba(52, 211, 153, 0.24), 0),
                GradientStop(Colors.transparent, 42),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(92, 6),
              stops: const [
                GradientStop(Color.rgba(56, 189, 248, 0.24), 0),
                GradientStop(Colors.transparent, 44),
              ],
            ),
            Gradient.linear(
              160,
              const [
                GradientStop(Color('#f8fff9'), 0),
                GradientStop(Color('#eefaf3'), 52),
                GradientStop(Color('#e8f8fd'), 100),
              ],
            ),
          ]),
        ),
        dark: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(12, 0),
              stops: const [
                GradientStop(Color.rgba(52, 211, 153, 0.18), 0),
                GradientStop(Colors.transparent, 38),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(90, 8),
              stops: const [
                GradientStop(Color.rgba(56, 189, 248, 0.2), 0),
                GradientStop(Colors.transparent, 42),
              ],
            ),
            Gradient.linear(
              160,
              [
                GradientStop(ThemeToken.color('bg'), 0),
                GradientStop(ThemeToken.color('panel'), 58),
                GradientStop(ThemeToken.color('panelStrong'), 100),
              ],
            ),
          ]),
        ),
      ),
      children: [
        _meshOverlay(),
        _ambientGlass(
          left: '4%',
          top: '16%',
          width: 190,
          height: 88,
          delayMilliseconds: 0,
        ),
        _ambientGlass(
          right: '7%',
          bottom: '16%',
          width: 240,
          height: 108,
          delayMilliseconds: 850,
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.relative,
            zIndex: 1,
            width: ThemeToken.space('pageX'),
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.symmetric(vertical: 42),
            lg: DartStyle(padding: EdgeInsets.symmetric(vertical: 64)),
          ),
          children: [
            _statusBar(),
            Row(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 36,
                alignItems: AlignItems.center,
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.tracks([
                    GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.04)),
                    GridTrack.minmax(430, GridTrack.oneFr),
                  ]),
                  gap: 52,
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

  FlintNode _meshOverlay() {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.5,
        maskImage: Gradient.linearTo(GradientDirection.bottom, const [
          GradientStop(Colors.black, 0),
          GradientStop(Colors.black, 72),
          GradientStop(Colors.transparent, 100),
        ]),
        background: Gradient.linear(135, [
          GradientStop(ThemeToken.color('line'), 0),
          const GradientStop(Colors.transparent, 48),
          const GradientStop(Color.rgba(16, 185, 129, 0.08), 100),
        ]),
      ),
    );
  }

  FlintNode _ambientGlass({
    String? left,
    String? right,
    String? top,
    String? bottom,
    required double width,
    required double height,
    required int delayMilliseconds,
  }) {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        width: width,
        height: height,
        radius: 8,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        backdropFilter: StyleFilter.blur(16),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.36),
          shadow: Shadow(
            y: 28,
            blur: 70,
            spread: -46,
            color: Color.rgba(15, 23, 42, 0.28),
          ),
        ),
        dark: DartStyle(
          background: Color.rgba(15, 23, 42, 0.48),
          shadow: ThemeToken.shadow('glow'),
        ),
        animation: StyleAnimation.named(
          'flint-docs-float',
          milliseconds: 7000,
          timing: TransitionTiming.easeInOut,
          delayMilliseconds: delayMilliseconds,
          iteration: AnimationIteration.infinite,
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            left: 18,
            right: 18,
            top: 18,
            height: 9,
            radius: 999,
            background: Color.rgba(52, 211, 153, 0.28),
          ),
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            left: 18,
            right: 58,
            bottom: 22,
            height: 9,
            radius: 999,
            background: Color.rgba(56, 189, 248, 0.24),
          ),
        ),
      ],
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
        margin: const EdgeInsets.only(bottom: 40),
        padding: const EdgeInsets.all(10),
        radius: 8,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        backdropFilter: StyleFilter.blur(18),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.74),
          shadow: Shadow(
            y: 18,
            blur: 54,
            spread: -42,
            color: Color.rgba(15, 23, 42, 0.2),
          ),
        ),
        dark: DartStyle(
          background: Color.rgba(15, 23, 42, 0.72),
          shadow: ThemeToken.shadow('glow'),
        ),
        animation: StyleAnimation.named(
          'flint-docs-rise',
          milliseconds: 620,
          timing: TransitionTiming.easeOut,
          fillMode: AnimationFillMode.both,
        ),
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
            _badge(
              Icons.sparkles,
              'Flint Dart ${ProductVersions.flintDartVersionLabel}',
              _mint,
            ),
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
            Icon(Icons.activity, size: 16, color: _mintStrong),
            Text.span(
              'Production docs, APIs, and UI in one Dart stack',
              dartStyle: DartStyle(
                color: ThemeToken.color('muted'),
                fontSize: 12,
                fontWeight: 800,
              ),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _copy() {
    return Container(
      dartStyle: DartStyle(display: Display.grid, gap: 0),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            gap: 8,
            width: SizeValue('fit-content'),
            padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 7),
            radius: 999,
            border: Border(color: Color.rgba(16, 185, 129, 0.2), width: 1),
            background: ThemeToken.color('panel'),
            light: const DartStyle(
              background: Color.rgba(236, 253, 245, 0.82),
            ),
            dark: const DartStyle(
              background: Color.rgba(52, 211, 153, 0.12),
            ),
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 660,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 70,
              fillMode: AnimationFillMode.both,
            ),
          ),
          children: [
            Icon(Icons.cloud, size: 15, color: _mintStrong),
            Text.span(
              'The Unified Dart Ecosystem',
              dartStyle: DartStyle(
                color: ThemeToken.color('primary'),
                fontSize: 12,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 0,
              ),
            ),
          ],
        ),
        Text.h1(
          'Flint Ecosystem',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 20, bottom: 0),
            maxWidth: 760,
            color: Color('transparent'),
            fontSize: 56,
            lineHeight: 0.92,
            fontWeight: 900,
            letterSpacing: 0,
            background: Gradient.linear(
              90,
              [
                GradientStop(ThemeToken.color('text'), 0),
                GradientStop(ThemeToken.color('primary'), 48),
                GradientStop(ThemeToken.color('accent'), 100),
              ],
            ),
            backgroundClip: BackgroundClip.text,
            webkitBackgroundClip: BackgroundClip.text,
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 700,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 130,
              fillMode: AnimationFillMode.both,
            ),
            lg: DartStyle(fontSize: 92),
          ),
        ),
        Text.h2(
          'One language across your entire stack: Full-Stack Web, Client SDK, Native AI, and Robotics.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 760,
            color: ThemeToken.color('text'),
            fontSize: 24,
            lineHeight: 1.15,
            fontWeight: 850,
            letterSpacing: 0,
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 720,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 190,
              fillMode: AnimationFillMode.both,
            ),
            lg: DartStyle(fontSize: 36),
          ),
        ),
        Text.p(
          'Build end-to-end full-stack web applications with Flint Dart, universal cross-platform clients with Flint Client, autonomous AI agents with Flint AI, and connected hardware & robotics with Flint Hardware.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 22, bottom: 0),
            maxWidth: 690,
            color: ThemeToken.color('muted'),
            fontSize: 17,
            lineHeight: 1.7,
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 760,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 250,
              fillMode: AnimationFillMode.both,
            ),
          ),
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 12,
            margin: const EdgeInsets.only(top: 30),
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 780,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 310,
              fillMode: AnimationFillMode.both,
            ),
          ),
          children: [
            Link(
              href: '/fullstack',
              tone: Tone.primary,
              children: [
                Icon(Icons.layers, size: 17),
                Text.span('Full-Stack Web'),
              ],
            ),
            Link(
              href: '/client',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              children: [
                Icon(Icons.globe, size: 17),
                Text.span('Client SDK'),
              ],
            ),
            Link(
              href: '/ai',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              children: [
                Icon(Icons.sparkles, size: 17),
                Text.span('AI Engine'),
              ],
            ),
            Link(
              href: '/hardware',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              children: [
                Icon(Icons.zap, size: 17),
                Text.span('Hardware & Robotics'),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 12,
            margin: const EdgeInsets.only(top: 34),
            animation: StyleAnimation.named(
              'flint-docs-rise',
              milliseconds: 820,
              timing: TransitionTiming.easeOut,
              delayMilliseconds: 380,
              fillMode: AnimationFillMode.both,
            ),
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
        position: Position.relative,
        minHeight: 460,
        display: Display.grid,
        alignItems: AlignItems.center,
        animation: StyleAnimation.named(
          'flint-docs-rise',
          milliseconds: 780,
          timing: TransitionTiming.easeOut,
          delayMilliseconds: 260,
          fillMode: AnimationFillMode.both,
        ),
      ),
      children: [
        _orbitalVisual(),
        Container(
          dartStyle: DartStyle(
            position: Position.relative,
            zIndex: 2,
            display: Display.grid,
            gap: 14,
            padding: const EdgeInsets.all(16),
            radius: 16,
            border: Border.all(color: ThemeToken.color('line')),
            background: ThemeToken.color('panel'),
            backdropFilter: StyleFilter.blur(18),
            light: const DartStyle(
              background: Color.rgba(255, 255, 255, 0.88),
              shadow: Shadow(
                y: 32,
                blur: 92,
                spread: -44,
                color: Color.rgba(15, 23, 42, 0.28),
              ),
            ),
            dark: DartStyle(
              background: Color.rgba(15, 23, 42, 0.85),
              shadow: ThemeToken.shadow('glow'),
            ),
            transition: StyleTransition.transform(milliseconds: 220),
            hover: DartStyle(transform: StyleTransform.translateY(-6)),
          ),
          children: [
            _previewHeader(),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 10,
                sm: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
                ),
              ),
              children: [
                _ecosystemNodeCard(
                  title: 'Full-Stack Web',
                  subtitle: 'Server & SSR Engine',
                  status: 'Online',
                  statusColor: '#34d399',
                  detail: 'HTTP Server, RLS Gateway, WebSockets',
                  href: '/fullstack',
                  icon: Icons.layers,
                ),
                _ecosystemNodeCard(
                  title: 'Client SDK',
                  subtitle: 'Cross-Platform App Layer',
                  status: 'Synced',
                  statusColor: '#38bdf8',
                  detail: 'Offline Cache, Retry Sync, Channels',
                  href: '/client',
                  icon: Icons.globe,
                ),
                _ecosystemNodeCard(
                  title: 'AI Engine',
                  subtitle: 'Agent Mesh & Workflows',
                  status: 'Active',
                  statusColor: '#a78bfa',
                  detail: 'Function Calling, Streaming Chat',
                  href: '/ai',
                  icon: Icons.sparkles,
                ),
                _ecosystemNodeCard(
                  title: 'Hardware & Robotics',
                  subtitle: 'Edge Telemetry & Sensors',
                  status: 'Streaming',
                  statusColor: '#f97316',
                  detail: 'Sonar, IMU, Motor State Machines',
                  href: '/hardware',
                  icon: Icons.zap,
                ),
              ],
            ),
            _metricsBar(),
          ],
        ),
      ],
    );
  }

  FlintNode _ecosystemNodeCard({
    required String title,
    required String subtitle,
    required String status,
    required String statusColor,
    required String detail,
    required String href,
    required IconData icon,
  }) {
    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 8,
        padding: const EdgeInsets.all(14),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
        transition: StyleTransition.all(milliseconds: 160),
        hover: DartStyle(
          border: Border(color: Color(statusColor), width: 1),
          background: Color.rgba(15, 23, 42, 0.95),
        ),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 8,
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 8,
              ),
              children: [
                Icon(icon, size: 16, color: Color(statusColor)),
                Text.span(
                  title,
                  dartStyle: DartStyle(
                    color: ThemeToken.color('text'),
                    fontSize: 13,
                    fontWeight: 800,
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 4,
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                radius: 999,
                background: Color.rgba(52, 211, 153, 0.1),
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 6,
                    height: 6,
                    radius: 999,
                    background: Color(statusColor),
                  ),
                ),
                Text.span(
                  status,
                  dartStyle: DartStyle(
                    fontSize: 10,
                    fontWeight: 700,
                    color: Color(statusColor),
                  ),
                ),
              ],
            ),
          ],
        ),
        Text.p(
          detail,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            color: ThemeToken.color('muted'),
            fontSize: 11,
            lineHeight: 1.4,
          ),
        ),
      ],
    );
  }

  FlintNode _orbitalVisual() {
    return Container(
      props: const {'aria-hidden': 'true'},
      dartStyle: DartStyle(
        position: Position.absolute,
        top: 10,
        right: 20,
        bottom: 10,
        left: 20,
        zIndex: 1,
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            top: 42,
            right: 52,
            width: 300,
            height: 300,
            radius: 999,
            border: Border(color: Color.rgba(16, 185, 129, 0.22), width: 1),
            animation: StyleAnimation.infinite(
              'flint-docs-orbit',
              milliseconds: 18000,
            ),
          ),
          children: [_orbitDot(top: 18, right: 42, color: _mintStrong)],
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            right: 0,
            top: 88,
            width: 220,
            height: 220,
            radius: 999,
            border: Border(color: Color.rgba(14, 165, 233, 0.2), width: 1),
            animation: StyleAnimation.named(
              'flint-docs-orbit',
              milliseconds: 12000,
              timing: TransitionTiming.linear,
              iteration: AnimationIteration.infinite,
              direction: AnimationDirection.reverse,
            ),
          ),
          children: [_orbitDot(bottom: 26, left: 26, color: _skyStrong)],
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            right: 86,
            top: 134,
            width: 132,
            height: 132,
            radius: 999,
            background: Color.rgba(52, 211, 153, 0.28),
            shadow: Shadow(
              y: 18,
              blur: 80,
              spread: -24,
              color: Color.rgba(20, 184, 166, 0.5),
            ),
            animation: StyleAnimation.named(
              'flint-docs-pulse',
              milliseconds: 4000,
              timing: TransitionTiming.easeInOut,
              iteration: AnimationIteration.infinite,
            ),
          ),
        ),
      ],
    );
  }

  FlintNode _orbitDot({
    Object? top,
    Object? right,
    Object? bottom,
    Object? left,
    required Color color,
  }) {
    return Container(
      dartStyle: DartStyle(
        position: Position.absolute,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: 12,
        height: 12,
        radius: 999,
        background: color,
        shadow: Shadow(y: 0, blur: 28, spread: 3, color: color),
      ),
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
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panelStrong'),
        light: const DartStyle(
          background: Color.rgba(248, 250, 252, 0.86),
        ),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 10,
          ),
          children: [
            _trafficLights(),
            Text.span(
              'flint_workspace',
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 13,
                fontWeight: 900,
              ),
            ),
          ],
        ),
        _badge(Icons.cloud, 'Live build', _skyStrong),
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
        _metric('4 Pillars', 'Full-Stack, Client, AI, Hardware'),
        _metric('0 Glue', '100% pure Dart across layers'),
        _metric('Unified', 'shared schemas and types'),
      ],
    );
  }

  FlintNode _proofStrip() {
    return Row(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.one,
        gap: 12,
        margin: const EdgeInsets.only(top: 36),
        padding: const EdgeInsets.all(12),
        radius: 8,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.62),
        ),
        dark: const DartStyle(
          background: Color.rgba(15, 23, 42, 0.62),
        ),
        backdropFilter: StyleFilter.blur(18),
        animation: StyleAnimation.named(
          'flint-docs-rise',
          milliseconds: 840,
          timing: TransitionTiming.easeOut,
          delayMilliseconds: 430,
          fillMode: AnimationFillMode.both,
        ),
        sm: DartStyle(
          gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.fluid),
        ),
      ),
      children: [
        _proof(Icons.layers, 'Server HTTP, SSR & Declarative UI'),
        _proof(Icons.globe, 'Universal Client & Offline Sync'),
        _proof(Icons.zap, 'AI Agent Mesh & Robotics Hardware'),
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
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panelStrong'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.76),
        ),
      ),
      children: [
        Icon(icon, size: 14, color: color),
        Text.span(
          label,
          dartStyle: DartStyle(
            color: ThemeToken.color('text'),
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
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panel'),
        light: const DartStyle(
          background: Color.rgba(255, 255, 255, 0.72),
        ),
        backdropFilter: StyleFilter.blur(12),
        transition: StyleTransition.transform(milliseconds: 180),
        hover: DartStyle(transform: StyleTransform.translateY(-4)),
      ),
      children: [
        Icon(icon, size: 20, color: _skyStrong),
        Container(
          dartStyle: DartStyle(display: Display.grid, gap: 2),
          children: [
            Text.span(
              title,
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 13,
                fontWeight: 900,
              ),
            ),
            Text.span(
              label,
              dartStyle:
                  DartStyle(color: ThemeToken.color('muted'), fontSize: 12),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _metric(String value, String label) {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        padding: const EdgeInsets.all(12),
        radius: 8,
        border: Border.all(color: ThemeToken.color('line')),
        background: ThemeToken.color('panelStrong'),
        light: const DartStyle(
          background: Color.rgba(248, 250, 252, 0.86),
        ),
      ),
      children: [
        Container(
          props: const {'aria-hidden': 'true'},
          dartStyle: DartStyle(
            position: Position.absolute,
            top: 0,
            bottom: 0,
            width: SizeValue('55%'),
            background: Color.rgba(52, 211, 153, 0.14),
            animation: StyleAnimation.named(
              'flint-docs-scan',
              milliseconds: 4200,
              timing: TransitionTiming.easeInOut,
              iteration: AnimationIteration.infinite,
            ),
          ),
        ),
        Text.span(
          value,
          dartStyle: DartStyle(
            position: Position.relative,
            color: ThemeToken.color('text'),
            fontSize: 18,
            fontWeight: 900,
          ),
        ),
        Text.span(
          label,
          dartStyle: DartStyle(
            position: Position.relative,
            color: ThemeToken.color('muted'),
            fontSize: 12,
          ),
        ),
      ],
    );
  }

  FlintNode _proof(IconData icon, String label) {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 10,
        padding: EdgeInsets.all(8),
      ),
      children: [
        Icon(icon, size: 18, color: _mintStrong),
        Text.span(
          label,
          dartStyle: DartStyle(
            color: ThemeToken.color('text'),
            fontSize: 13,
            fontWeight: 800,
          ),
        ),
      ],
    );
  }

  FlintNode _trafficLights() {
    return Row(
      dartStyle: DartStyle(display: Display.flex, gap: 6),
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
const _mintStrong = Color('#059669');
const _skyStrong = Color('#0284c7');
const _sky = Color('#38bdf8');
const _violet = Color('#8b5cf6');
