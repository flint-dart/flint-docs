import 'dart:async';

import 'package:flint_dart/ui.dart';

import '../components/copy_text.dart';
import '../shared/page_shell.dart';

class HardwarePage extends StatefulComponent {
  HardwarePage(this.props);

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
          width: const SizeValue.percent(100),
          maxWidth: const SizeValue.percent(100),
          background: ThemeToken.color('bg'),
          color: ThemeToken.color('text'),
          display: Display.flex,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
          overflow: Overflow.hidden,
        ),
        children: [
          _heroSection(currentSnippet),
          _architecturePipeline(),
          _deepPillarsSection(),
          _targetMatrixSection(),
          _starterBlueprintsSection(),
          _finalCtaSection(),
        ],
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // 1. HARDWARE HERO SECTION
  // ---------------------------------------------------------------------------
  FlintNode _heroSection(_HardwareSnippet snippet) {
    const installCmd = 'dart pub add flint_hardware';

    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        width: const SizeValue.percent(100),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('bg'),
        light: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(20, 0),
              stops: const [
                GradientStop(Color.rgba(249, 115, 22, 0.15), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(80, 10),
              stops: const [
                GradientStop(Color.rgba(234, 179, 8, 0.12), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.linear(
              155,
              const [
                GradientStop(Color('#fffbf5'), 0),
                GradientStop(Color('#faf4eb'), 48),
                GradientStop(Color('#f5eee2'), 100),
              ],
            ),
          ]),
        ),
        dark: DartStyle(
          background: Background.layers([
            Gradient.radialCircle(
              at: const GradientPosition.percent(15, 0),
              stops: const [
                GradientStop(Color.rgba(249, 115, 22, 0.18), 0),
                GradientStop(Colors.transparent, 42),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(85, 15),
              stops: const [
                GradientStop(Color.rgba(234, 179, 8, 0.12), 0),
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
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 32),
            md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 48)),
            lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 64)),
            xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72)),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 32,
                alignItems: AlignItems.center,
                width: const SizeValue.percent(100),
                lg: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
                  gap: 40,
                ),
                xl: DartStyle(
                  gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
                  gap: 64,
                ),
              ),
              children: [
                // Left Column: Copy, Badges, CTAs
                Column(
                  dartStyle: const DartStyle(
                    gap: 18,
                    alignItems: AlignItems.start,
                    minWidth: 0,
                    width: SizeValue.percent(100),
                  ),
                  children: [
                    // Live Status Pill
                    Container(
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        flexWrap: FlexWrap.wrap,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        radius: 999,
                        background: const Color.rgba(249, 115, 22, 0.12),
                        border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
                      ),
                      children: [
                        Container(
                          dartStyle: const DartStyle(
                            width: 8,
                            height: 8,
                            radius: 999,
                            background: Color('#f97316'),
                          ),
                        ),
                        Text.span(
                          'FLINT HARDWARE & ROBOTICS',
                          dartStyle: const DartStyle(
                            color: Color('#f97316'),
                            fontSize: 11,
                            fontWeight: 900,
                            letterSpacing: 0.8,
                          ),
                        ),
                        Text.span(
                          '•',
                          dartStyle: const DartStyle(color: Color('#f97316'), fontSize: 11),
                        ),
                        Text.span(
                          'BARE-METAL DART',
                          dartStyle: const DartStyle(
                            color: Color('#d97706'),
                            fontSize: 11,
                            fontWeight: 800,
                          ),
                        ),
                      ],
                    ),

                    // Title
                    Text.h1(
                      'Declarative Robotics, Edge AI & Embedded Systems in Pure Dart.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 28,
                        fontWeight: 900,
                        lineHeight: 1.15,
                        letterSpacing: -0.8,
                        color: ThemeToken.color('text'),
                        md: const DartStyle(fontSize: 40),
                        lg: const DartStyle(fontSize: 46),
                        xl: const DartStyle(fontSize: 52),
                      ),
                    ),

                    // Subtitle
                    Text.p(
                      'Build autonomous rovers, Edge AI computer vision pipelines, wireless swarm meshes, and multi-sensor telemetry—with compile-time safety, zero runtime bloat, and instant 1-click Wokwi simulation export.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: ThemeToken.color('muted'),
                        md: const DartStyle(fontSize: 16),
                      ),
                    ),

                    // Quick Install CLI Box
                    Container(
                      dartStyle: DartStyle(
                        display: Display.flex,
                        alignItems: AlignItems.center,
                        justifyContent: JustifyContent.between,
                        width: const SizeValue.percent(100),
                        maxWidth: 520,
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                        radius: 12,
                        background: ThemeToken.color('panelStrong'),
                        border: Border.all(color: ThemeToken.color('line')),
                        gap: 8,
                      ),
                      children: [
                        Row(
                          dartStyle: const DartStyle(
                            display: Display.flex,
                            alignItems: AlignItems.center,
                            gap: 8,
                            minWidth: 0,
                            overflow: 'hidden',
                          ),
                          children: [
                            Text.span(
                              '\$',
                              dartStyle: const DartStyle(
                                color: Color('#f97316'),
                                fontWeight: 900,
                                fontSize: 13,
                              ),
                            ),
                            Text.span(
                              installCmd,
                              dartStyle: DartStyle(
                                color: ThemeToken.color('text'),
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: 0.2,
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
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                            radius: 8,
                            background: _copiedCmd
                                ? const Color.rgba(16, 185, 129, 0.2)
                                : const Color.rgba(249, 115, 22, 0.1),
                            color: _copiedCmd ? const Color('#10b981') : const Color('#f97316'),
                            fontSize: 11,
                            fontWeight: 800,
                            flexShrink: 0,
                          ),
                          children: [
                            Text.span(_copiedCmd ? 'COPIED!' : 'COPY'),
                          ],
                        ),
                      ],
                    ),

                    // Action Buttons
                    Row(
                      dartStyle: const DartStyle(
                        display: Display.flex,
                        flexWrap: FlexWrap.wrap,
                        gap: 10,
                        padding: EdgeInsets.only(top: 6),
                      ),
                      children: [
                        Link(
                          href: '/hardware/guides',
                          dartStyle: DartStyle(
                            display: Display.inlineFlex,
                            alignItems: AlignItems.center,
                            gap: 8,
                            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                            radius: 12,
                            background: const Color('#f97316'),
                            color: const Color('#ffffff'),
                            fontWeight: 800,
                            fontSize: 14,
                          ),
                          children: [
                            Text.span(
                              'Explore Hardware SDK',
                              dartStyle: const DartStyle(color: Color('#ffffff'), fontWeight: 800),
                            ),
                            Icon(Icons.arrowRight, size: 16, color: const Color('#ffffff')),
                          ],
                        ),
                        Link(
                          href: 'https://wokwi.com',
                          dartStyle: DartStyle(
                            display: Display.inlineFlex,
                            alignItems: AlignItems.center,
                            gap: 8,
                            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
                            radius: 12,
                            background: ThemeToken.color('panel'),
                            border: Border.all(color: ThemeToken.color('line')),
                            color: ThemeToken.color('text'),
                            fontWeight: 700,
                            fontSize: 14,
                          ),
                          children: [
                            Icon(Icons.play, size: 16, color: const Color('#f97316')),
                            Text.span('Launch Simulator'),
                          ],
                        ),
                      ],
                    ),

                    // Quick Metric Strip
                    Row(
                      dartStyle: const DartStyle(
                        display: Display.flex,
                        flexWrap: FlexWrap.wrap,
                        gap: 14,
                        padding: EdgeInsets.only(top: 10),
                      ),
                      children: [
                        _heroPill(Icons.zap, 'Sub-ms Loop Latency', const Color('#f97316')),
                        _heroPill(Icons.server, 'ESP32 • nRF • STM32 • RP2040', const Color('#d97706')),
                        _heroPill(Icons.layers, 'TFLite Micro Quantization', const Color('#0284c7')),
                        _heroPill(Icons.shield, 'C99 & ROS 2 Code Gen', const Color('#10b981')),
                      ],
                    ),
                  ],
                ),

                // Right Column: Interactive 4-Tier Hardware Code Studio
                Container(
                  dartStyle: const DartStyle(
                    minWidth: 0,
                    width: SizeValue.percent(100),
                  ),
                  children: [
                    _hardwareCodeStudio(snippet),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _heroPill(IconData icon, String label, Color color) {
    return Row(
      dartStyle: const DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 6,
      ),
      children: [
        Icon(icon, size: 14, color: color),
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 700,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // INTERACTIVE HARDWARE CODE STUDIO
  // ---------------------------------------------------------------------------
  FlintNode _hardwareCodeStudio(_HardwareSnippet snippet) {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        minWidth: 0,
        radius: 16,
        overflow: Overflow.hidden,
        background: const Color('#060b13'),
        border: Border.all(color: const Color.rgba(249, 115, 22, 0.3)),
      ),
      children: [
        // Tab Header Strip
        Container(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            background: const Color('#03070d'),
            borderBottom: Border(color: const Color.rgba(255, 255, 255, 0.08), width: 1),
            gap: 8,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 6,
                flexShrink: 0,
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
                gap: 4,
                overflow: Overflow.auto,
                minWidth: 0,
              ),
              children: [
                for (var i = 0; i < _snippets.length; i++)
                  Button(
                    variant: ButtonVariant.ghost,
                    size: ComponentSize.sm,
                    onPressed: (_) => setState(() => _activeTab = i),
                    dartStyle: DartStyle(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      radius: 6,
                      background: _activeTab == i
                          ? const Color.rgba(249, 115, 22, 0.2)
                          : Colors.transparent,
                      color: _activeTab == i ? const Color('#f97316') : const Color('#94a3b8'),
                      fontSize: 11,
                      fontWeight: _activeTab == i ? 800 : 600,
                      flexShrink: 0,
                    ),
                    children: [
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
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                radius: 6,
                background: _copiedCode
                    ? const Color.rgba(16, 185, 129, 0.2)
                    : const Color.rgba(255, 255, 255, 0.06),
                color: _copiedCode ? const Color('#10b981') : const Color('#cbd5e1'),
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
              ),
              children: [
                Text.span(_copiedCode ? 'COPIED' : 'COPY'),
              ],
            ),
          ],
        ),

        // Subheader Info Strip
        Container(
          dartStyle: DartStyle(
            display: Display.flex,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            background: const Color.rgba(249, 115, 22, 0.05),
            borderBottom: Border(color: const Color.rgba(255, 255, 255, 0.05), width: 1),
            gap: 8,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 6,
                minWidth: 0,
              ),
              children: [
                Icon(snippet.icon, size: 14, color: snippet.accentColor),
                Text.span(
                  snippet.layerTitle,
                  dartStyle: DartStyle(
                    color: snippet.accentColor,
                    fontSize: 11,
                    fontWeight: 800,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  ),
                ),
              ],
            ),
            Text.span(
              snippet.statusMessage,
              dartStyle: const DartStyle(
                color: Color('#10b981'),
                fontSize: 10,
                fontWeight: 700,
                flexShrink: 0,
              ),
            ),
          ],
        ),

        // Code Body Box
        Container(
          dartStyle: const DartStyle(
            padding: EdgeInsets.all(16),
            overflow: Overflow.auto,
            maxHeight: 420,
            whiteSpace: 'pre',
            width: SizeValue.percent(100),
          ),
          children: [
            _syntaxBlock(snippet.lines),
          ],
        ),
      ],
    );
  }

  FlintNode _syntaxBlock(List<_HardwareLine> lines) {
    return Column(
      dartStyle: const DartStyle(gap: 2, alignItems: AlignItems.start, whiteSpace: 'pre'),
      children: [
        for (var i = 0; i < lines.length; i++)
          Row(
            dartStyle: const DartStyle(
              display: Display.flex,
              alignItems: AlignItems.baseline,
              gap: 12,
              whiteSpace: 'pre',
            ),
            children: [
              Text.span(
                '${i + 1}'.padLeft(2),
                dartStyle: const DartStyle(
                  color: Color('#475569'),
                  fontSize: 12,
                  width: 20,
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
                        fontSize: 12,
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

  // ---------------------------------------------------------------------------
  // 2. HARDWARE COMPILATION & EXECUTION PIPELINE
  // ---------------------------------------------------------------------------
  FlintNode _architecturePipeline() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        background: ThemeToken.color('panelStrong'),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 12,
            alignItems: AlignItems.center,
            textAlign: TextAlign.center,
            margin: EdgeInsets.only(bottom: 36),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 999,
                background: const Color.rgba(249, 115, 22, 0.12),
                border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
              ),
              children: [
                Icon(Icons.layers, size: 14, color: const Color('#f97316')),
                Text.span(
                  'COMPILATION & TARGET SYNTHESIS',
                  dartStyle: const DartStyle(
                    color: Color('#f97316'),
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  ),
                ),
              ],
            ),
            Text.h2(
              'End-to-End Hardware Execution Pipeline',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                md: const DartStyle(fontSize: 36),
              ),
            ),
            Text.p(
              'From high-level declarative Dart definitions to bare-metal C99, quantized TFLite inference, and instant Wokwi browser circuits.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                color: ThemeToken.color('muted'),
                maxWidth: 720,
              ),
            ),
          ],
        ),

        // 5-Stage Diagram Grid (Responsive: 1 col on mobile, 2 on md, 5 on lg)
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 14,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(5, GridTrack.oneFr),
            ),
          ),
          children: [
            _pipelineNode(
              step: '01',
              title: 'Declarative Dart',
              desc: 'Sensors, actuators, TFLite models, and BLE services configured in pure Dart.',
              accentColor: '#f97316',
              icon: Icons.code,
            ),
            _pipelineNode(
              step: '02',
              title: 'AST & Pin Arbiter',
              desc: 'Static validation of pin multiplexing, PWM timers, and memory arena limits.',
              accentColor: '#d97706',
              icon: Icons.shield,
            ),
            _pipelineNode(
              step: '03',
              title: 'C99 / ROS 2 Gen',
              desc: 'High-speed transpilation into zero-overhead C99, C++, MicroPython, and ROS 2 nodes.',
              accentColor: '#0284c7',
              icon: Icons.zap,
            ),
            _pipelineNode(
              step: '04',
              title: 'Wokwi & Flash',
              desc: 'Instant browser simulation or serial flashing to ESP32, nRF52840, or STM32.',
              accentColor: '#10b981',
              icon: Icons.play,
            ),
            _pipelineNode(
              step: '05',
              title: 'Swarm & Telemetry',
              desc: 'Live BLE telemetry sync to Flint Server DB and real-time mesh swarm broadcast.',
              accentColor: '#9333ea',
              icon: Icons.globe,
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pipelineNode({
    required String step,
    required String title,
    required String desc,
    required String accentColor,
    required IconData icon,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(18),
        radius: 14,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        hover: DartStyle(
          border: Border.all(color: Color(accentColor)),
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 10, alignItems: AlignItems.start),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                width: const SizeValue.percent(100),
              ),
              children: [
                Text.span(
                  step,
                  dartStyle: DartStyle(
                    color: Color(accentColor),
                    fontSize: 12,
                    fontWeight: 900,
                  ),
                ),
                Icon(icon, size: 16, color: Color(accentColor)),
              ],
            ),
            Text.h3(
              title,
              dartStyle: DartStyle(
                fontSize: 15,
                fontWeight: 800,
                color: ThemeToken.color('text'),
                margin: const EdgeInsets.all(0),
              ),
            ),
            Text.p(
              desc,
              dartStyle: DartStyle(
                fontSize: 12,
                lineHeight: 1.5,
                color: ThemeToken.color('muted'),
                margin: const EdgeInsets.all(0),
              ),
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 3. ARCHITECTURAL PILLARS (6 DEEP CARDS)
  // ---------------------------------------------------------------------------
  FlintNode _deepPillarsSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        background: ThemeToken.color('bg'),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 12,
            alignItems: AlignItems.start,
            margin: EdgeInsets.only(bottom: 36),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 999,
                background: const Color.rgba(249, 115, 22, 0.12),
                border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
              ),
              children: [
                Icon(Icons.shield, size: 14, color: const Color('#f97316')),
                Text.span(
                  'ROBOTICS ARCHITECTURE',
                  dartStyle: const DartStyle(
                    color: Color('#f97316'),
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  ),
                ),
              ],
            ),
            Text.h2(
              'Engineered for Precision, Edge AI & Swarms',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                md: const DartStyle(fontSize: 36),
              ),
            ),
            Text.p(
              'Flint Hardware bridges high-level Dart programming with the strictest demands of embedded microcontrollers.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                color: ThemeToken.color('muted'),
                maxWidth: 720,
              ),
            ),
          ],
        ),

        // 6 Pillars Grid
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 20,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr),
            ),
          ),
          children: [
            _pillarCard(
              title: 'Universal MCU Targets',
              badge: 'BoardTarget',
              accentColor: '#f97316',
              icon: Icons.server,
              desc: 'Target ESP32, ESP32-S3/CAM, nRF52840, STM32F4, and Raspberry Pi Pico from a unified codebase.',
              bullets: [
                'Type-safe BoardTarget enum definitions',
                'Automatic pin map mapping for each MCU',
                'Memory layout & flash partition validation',
              ],
            ),
            _pillarCard(
              title: 'Edge AI & Computer Vision',
              badge: 'TFLite Micro',
              accentColor: '#d97706',
              icon: Icons.zap,
              desc: 'Run quantized TensorFlow Lite Micro models and stream camera frames with zero memory copies.',
              bullets: [
                'On-board OV2640 / OV3660 camera drivers',
                'Int8 tensor arena allocation & quantization',
                '15+ FPS on-device person/object detection',
              ],
            ),
            _pillarCard(
              title: 'Robotics Kinematics & Motor Drivers',
              badge: 'Differential Drive',
              accentColor: '#0284c7',
              icon: Icons.layers,
              desc: 'Orchestrate 2-wheel/4-wheel differential drives, sweep radar servos, and stepper motor actuators.',
              bullets: [
                'L298N & TB6612FNG H-bridge drivers',
                'Precise 50Hz PWM radar sweeping servos',
                'Encoder odometry & PID closed-loop velocity',
              ],
            ),
            _pillarCard(
              title: 'Sensor Fusion & Peripherals',
              badge: 'HC-SR04 & IMU',
              accentColor: '#10b981',
              icon: Icons.shield,
              desc: 'Read ultrasonic distance, 6-axis gyro/accelerometers, and environmental telemetry concurrently.',
              bullets: [
                'HC-SR04 ultrasonic sonar distance driver',
                'MPU6050 6-axis IMU over I2C bus',
                'DHT22 / BME280 temperature & humidity sensors',
              ],
            ),
            _pillarCard(
              title: 'Wireless Swarm Mesh & BLE',
              badge: 'SwarmId & BLE',
              accentColor: '#9333ea',
              icon: Icons.globe,
              desc: 'Create peer-to-peer self-healing robot swarms with typed channels and Bluetooth Low Energy telemetry.',
              bullets: [
                'Zero-config radio mesh swarm broadcasting',
                'Standard BLE Battery & Device Info services',
                'Seamless real-time bridge to Flint Cloud DB',
              ],
            ),
            _pillarCard(
              title: 'Wokwi & ROS 2 Code Export',
              badge: 'exportBundle()',
              accentColor: '#0891b2',
              icon: Icons.play,
              desc: '1-click export to complete C99/C++ codebases, ROS 2 pub/sub nodes, and Wokwi browser circuits.',
              bullets: [
                'Generates diagram.json for Wokwi simulation',
                'Publishes /cmd_vel and /scan ROS 2 topics',
                'Zero external build tools needed to start',
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _pillarCard({
    required String title,
    required String badge,
    required String accentColor,
    required IconData icon,
    required String desc,
    required List<String> bullets,
  }) {
    final r = int.parse(accentColor.substring(1, 3), radix: 16);
    final g = int.parse(accentColor.substring(3, 5), radix: 16);
    final b = int.parse(accentColor.substring(5, 7), radix: 16);

    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        padding: const EdgeInsets.all(20),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        hover: DartStyle(
          border: Border.all(color: Color(accentColor)),
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 12, alignItems: AlignItems.start),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                width: const SizeValue.percent(100),
                gap: 10,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 36,
                    height: 36,
                    radius: 10,
                    background: Color.rgba(r, g, b, 0.15),
                    border: Border.all(color: Color.rgba(r, g, b, 0.35)),
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                  ),
                  children: [
                    Icon(icon, size: 18, color: Color(accentColor)),
                  ],
                ),
                Text.span(
                  badge,
                  dartStyle: DartStyle(
                    fontSize: 10,
                    fontWeight: 800,
                    color: Color(accentColor),
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    radius: 999,
                    background: Color.rgba(r, g, b, 0.1),
                    border: Border.all(color: Color.rgba(r, g, b, 0.25)),
                  ),
                ),
              ],
            ),
            Text.h3(
              title,
              dartStyle: DartStyle(
                fontSize: 17,
                fontWeight: 800,
                color: ThemeToken.color('text'),
                margin: const EdgeInsets.all(0),
              ),
            ),
            Text.p(
              desc,
              dartStyle: DartStyle(
                fontSize: 13,
                lineHeight: 1.55,
                color: ThemeToken.color('muted'),
                margin: const EdgeInsets.all(0),
              ),
            ),
            Column(
              dartStyle: const DartStyle(gap: 6, alignItems: AlignItems.start),
              children: [
                for (final bullet in bullets)
                  Row(
                    dartStyle: const DartStyle(
                      display: Display.flex,
                      alignItems: AlignItems.baseline,
                      gap: 6,
                    ),
                    children: [
                      Icon(Icons.sparkles, size: 10, color: Color(accentColor)),
                      Text.span(
                        bullet,
                        dartStyle: DartStyle(
                          fontSize: 12,
                          color: ThemeToken.color('text'),
                          fontWeight: 600,
                        ),
                      ),
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
  // 4. MCU TARGET MATRIX
  // ---------------------------------------------------------------------------
  FlintNode _targetMatrixSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        background: ThemeToken.color('panelStrong'),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 12,
            alignItems: AlignItems.center,
            textAlign: TextAlign.center,
            margin: EdgeInsets.only(bottom: 36),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 999,
                background: const Color.rgba(249, 115, 22, 0.12),
                border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
              ),
              children: [
                Icon(Icons.server, size: 14, color: const Color('#f97316')),
                Text.span(
                  'SUPPORTED TARGETS',
                  dartStyle: const DartStyle(
                    color: Color('#f97316'),
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  ),
                ),
              ],
            ),
            Text.h2(
              'Microcontroller Target Comparison Matrix',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                md: const DartStyle(fontSize: 36),
              ),
            ),
            Text.p(
              'Flint Hardware generates highly optimized C99 and register-level drivers for your target architecture.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                color: ThemeToken.color('muted'),
                maxWidth: 720,
              ),
            ),
          ],
        ),

        // Responsive Comparison Cards Grid (1 col mobile, 2 md, 4 lg)
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 16,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(4, GridTrack.oneFr),
            ),
          ),
          children: [
            _targetCard(
              name: 'ESP32-CAM',
              enumTarget: 'BoardTarget.esp32Cam',
              clock: '240 MHz (Dual Core)',
              ram: '520 KB + 4MB PSRAM',
              radio: 'Wi-Fi + BLE 4.2',
              aiReady: 'TFLite Quantized',
              idealFor: 'Edge AI Vision & Security',
              accentColor: '#f97316',
            ),
            _targetCard(
              name: 'ESP32-S3 Node',
              enumTarget: 'BoardTarget.esp32',
              clock: '240 MHz (Dual Core)',
              ram: '512 KB + 8MB Flash',
              radio: 'Wi-Fi + BLE 5.0 + Mesh',
              aiReady: 'Vector Extensions',
              idealFor: 'Autonomous Rovers & IoT',
              accentColor: '#d97706',
            ),
            _targetCard(
              name: 'nRF52840 Dongle',
              enumTarget: 'BoardTarget.nrf52840',
              clock: '64 MHz (Cortex-M4)',
              ram: '256 KB + 1MB Flash',
              radio: 'BLE 5.3 + Thread',
              aiReady: 'Low Power Telemetry',
              idealFor: 'Swarm Beacons & Wearables',
              accentColor: '#0284c7',
            ),
            _targetCard(
              name: 'RP2040 Pico',
              enumTarget: 'BoardTarget.rp2040',
              clock: '133 MHz (Cortex-M0+)',
              ram: '264 KB + 2MB Flash',
              radio: 'Programmable PIO',
              aiReady: 'Precision Steppers',
              idealFor: 'Robotics Actuators & CNC',
              accentColor: '#10b981',
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _targetCard({
    required String name,
    required String enumTarget,
    required String clock,
    required String ram,
    required String radio,
    required String aiReady,
    required String idealFor,
    required String accentColor,
  }) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(18),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        display: Display.flex,
        flexDirection: FlexDirection.column,
        hover: DartStyle(
          border: Border.all(color: Color(accentColor)),
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 10, alignItems: AlignItems.start),
          children: [
            Text.h3(
              name,
              dartStyle: DartStyle(
                fontSize: 17,
                fontWeight: 800,
                color: ThemeToken.color('text'),
                margin: const EdgeInsets.all(0),
              ),
            ),
            Text.span(
              enumTarget,
              dartStyle: DartStyle(
                fontSize: 11,
                fontWeight: 800,
                color: Color(accentColor),
              ),
            ),
            Container(
              dartStyle: DartStyle(
                margin: const EdgeInsets.symmetric(vertical: 6),
                height: 1,
                width: const SizeValue.percent(100),
                background: ThemeToken.color('line'),
              ),
            ),
            _targetSpec('Clock', clock),
            _targetSpec('Memory', ram),
            _targetSpec('Radio', radio),
            _targetSpec('AI Engine', aiReady),
            Container(
              dartStyle: DartStyle(
                margin: const EdgeInsets.symmetric(vertical: 6),
                height: 1,
                width: const SizeValue.percent(100),
                background: ThemeToken.color('line'),
              ),
            ),
            Text.p(
              'Best for: $idealFor',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 700,
                color: ThemeToken.color('text'),
                margin: const EdgeInsets.all(0),
              ),
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _targetSpec(String label, String val) {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        justifyContent: JustifyContent.between,
        width: SizeValue.percent(100),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(fontSize: 11, color: ThemeToken.color('muted'), fontWeight: 600),
        ),
        Text.span(
          val,
          dartStyle: DartStyle(fontSize: 11, color: ThemeToken.color('text'), fontWeight: 700),
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 5. HARDWARE STARTER BLUEPRINTS
  // ---------------------------------------------------------------------------
  FlintNode _starterBlueprintsSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        background: ThemeToken.color('bg'),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 12,
            alignItems: AlignItems.start,
            margin: EdgeInsets.only(bottom: 36),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                radius: 999,
                background: const Color.rgba(249, 115, 22, 0.12),
                border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
              ),
              children: [
                Icon(Icons.zap, size: 14, color: const Color('#f97316')),
                Text.span(
                  'ROBOTICS STARTERS',
                  dartStyle: const DartStyle(
                    color: Color('#f97316'),
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 0.8,
                  ),
                ),
              ],
            ),
            Text.h2(
              'Production Hardware Starter Blueprints',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 900,
                color: ThemeToken.color('text'),
                md: const DartStyle(fontSize: 36),
              ),
            ),
            Text.p(
              'Instant starting points with pre-wired sensor pins, motor controllers, and simulation bundles.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                color: ThemeToken.color('muted'),
                maxWidth: 720,
              ),
            ),
          ],
        ),

        // 4 Starters Grid (1 col mobile, 2 md, 4 lg)
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 16,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(4, GridTrack.oneFr),
            ),
          ),
          children: [
            _starterCard(
              title: 'Edge AI Vision Guard',
              tag: 'Computer Vision',
              desc: 'ESP32-CAM with OV2640 camera & quantized TFLite Micro person detect pipeline.',
              cliCmd: 'flint create guard --template=vision',
              accentColor: '#f97316',
            ),
            _starterCard(
              title: 'Autonomous Rover',
              tag: 'Differential Drive',
              desc: '2-wheel obstacle-avoiding rover with ultrasonic sonar, 6-axis IMU, and Wokwi sim.',
              cliCmd: 'flint create rover --template=rover',
              accentColor: '#d97706',
            ),
            _starterCard(
              title: 'Swarm Mesh Beacon',
              tag: 'BLE Telemetry',
              desc: 'nRF52840 low-power mesh node with BME280 sensor and BLE battery telemetry.',
              cliCmd: 'flint create beacon --template=swarm',
              accentColor: '#0284c7',
            ),
            _starterCard(
              title: 'ROS 2 Teleop Node',
              tag: 'ROS 2 Bridge',
              desc: 'ESP32 robotics driver publishing /scan and subscribing to /cmd_vel kinematics.',
              cliCmd: 'flint create ros_bot --template=ros2',
              accentColor: '#10b981',
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _starterCard({
    required String title,
    required String tag,
    required String desc,
    required String cliCmd,
    required String accentColor,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        padding: const EdgeInsets.all(18),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        hover: DartStyle(
          border: Border.all(color: Color(accentColor)),
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(gap: 8, alignItems: AlignItems.start),
          children: [
            Text.span(
              tag,
              dartStyle: DartStyle(
                fontSize: 10,
                fontWeight: 800,
                color: Color(accentColor),
              ),
            ),
            Text.h3(
              title,
              dartStyle: DartStyle(
                fontSize: 16,
                fontWeight: 800,
                color: ThemeToken.color('text'),
                margin: const EdgeInsets.all(0),
              ),
            ),
            Text.p(
              desc,
              dartStyle: DartStyle(
                fontSize: 12,
                lineHeight: 1.5,
                color: ThemeToken.color('muted'),
                margin: const EdgeInsets.all(0),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 14),
            padding: const EdgeInsets.all(8),
            radius: 8,
            background: ThemeToken.color('panelStrong'),
            border: Border(color: ThemeToken.color('line'), width: 1),
            overflow: 'hidden',
          ),
          children: [
            Text.span(
              cliCmd,
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 10,
                fontWeight: 700,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              ),
            ),
          ],
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // 6. FINAL CTA SECTION
  // ---------------------------------------------------------------------------
  FlintNode _finalCtaSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64)),
        lg: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 48, vertical: 80)),
        xl: const DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96)),
        background: ThemeToken.color('panelStrong'),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: const SizeValue.percent(100),
            padding: const EdgeInsets.all(24),
            radius: 20,
            background: ThemeToken.color('panel'),
            border: Border.all(color: const Color.rgba(249, 115, 22, 0.35)),
            md: const DartStyle(padding: EdgeInsets.all(40)),
            lg: const DartStyle(padding: EdgeInsets.all(56)),
          ),
          children: [
            Column(
              dartStyle: const DartStyle(
                gap: 16,
                alignItems: AlignItems.center,
                textAlign: TextAlign.center,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    width: 50,
                    height: 50,
                    radius: 999,
                    background: const Color.rgba(249, 115, 22, 0.15),
                    border: Border.all(color: const Color.rgba(249, 115, 22, 0.4)),
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                  ),
                  children: [
                    Icon(Icons.zap, size: 24, color: const Color('#f97316')),
                  ],
                ),
                Text.h2(
                  'Start Building Hardware with Pure Dart Today',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 24,
                    fontWeight: 900,
                    color: ThemeToken.color('text'),
                    md: const DartStyle(fontSize: 34),
                    lg: const DartStyle(fontSize: 40),
                  ),
                ),
                Text.p(
                  'Join engineers building autonomous rovers, Edge AI cameras, and swarm robotics without fighting C++ pointers or fragmented toolchains.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: ThemeToken.color('muted'),
                    maxWidth: 680,
                  ),
                ),
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 12,
                    justifyContent: JustifyContent.center,
                    padding: EdgeInsets.only(top: 8),
                  ),
                  children: [
                    Link(
                      href: '/hardware/guides',
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                        radius: 12,
                        background: const Color('#f97316'),
                        color: const Color('#ffffff'),
                        fontWeight: 800,
                        fontSize: 14,
                      ),
                      children: [
                        Text.span(
                          'Read Hardware Guides',
                          dartStyle: const DartStyle(color: Color('#ffffff'), fontWeight: 800),
                        ),
                        Icon(Icons.arrowRight, size: 16, color: const Color('#ffffff')),
                      ],
                    ),
                    Link(
                      href: 'https://github.com/flint-dart/flint_hardware',
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                        radius: 12,
                        background: ThemeToken.color('panelStrong'),
                        border: Border.all(color: ThemeToken.color('line')),
                        color: ThemeToken.color('text'),
                        fontWeight: 700,
                        fontSize: 14,
                      ),
                      children: [
                        Icon(Icons.code, size: 16, color: const Color('#f97316')),
                        Text.span('View GitHub Source'),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}

// ---------------------------------------------------------------------------
// HARDWARE CODE SNIPPETS
// ---------------------------------------------------------------------------
class _HardwareSnippet {
  final String tabLabel;
  final String layerTitle;
  final String filename;
  final IconData icon;
  final Color accentColor;
  final String statusMessage;
  final String code;
  final List<_HardwareLine> lines;

  _HardwareSnippet({
    required this.tabLabel,
    required this.layerTitle,
    required this.filename,
    required this.icon,
    required this.accentColor,
    required this.statusMessage,
    required this.code,
    required this.lines,
  });
}

class _HardwareLine {
  final List<_HardwareToken> tokens;
  _HardwareLine(this.tokens);
}

class _HardwareToken {
  final String text;
  final Color color;
  final bool bold;
  _HardwareToken(this.text, this.color, {this.bold = false});
}

final _kw = Color('#f43f5e'); // Keyword (import, void, final)
final _fn = Color('#38bdf8'); // Function / Method
final _typ = Color('#34d399'); // Type / Class
final _str = Color('#fbbf24'); // String literal
final _txt = Color('#e2e8f0'); // Plain text

final List<_HardwareSnippet> _snippets = [
  _HardwareSnippet(
    tabLabel: 'vision_guard.dart',
    layerTitle: 'Edge AI & Computer Vision',
    filename: 'firmware/cam_guard.dart',
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
      _HardwareLine([
        _HardwareToken('import ', _kw, bold: true),
        _HardwareToken("'package:flint_hardware/flint_hardware.dart'", _str),
        _HardwareToken(';', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('void ', _typ),
        _HardwareToken('main', _fn),
        _HardwareToken('() {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('visionGuard = ', _txt),
        _HardwareToken('FirmwareBuilder', _typ, bold: true),
        _HardwareToken("('cam_guard', target: ", _txt),
        _HardwareToken('BoardTarget', _typ),
        _HardwareToken('.esp32Cam);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  visionGuard.', _txt),
        _HardwareToken('camera', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    resolution: ', _txt),
        _HardwareToken('CameraResolution', _typ),
        _HardwareToken('.qvga,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    format: ', _txt),
        _HardwareToken('PixelFormat', _typ),
        _HardwareToken('.rgb565, frameRate: 15,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('model = visionGuard.', _txt),
        _HardwareToken('tfliteModel', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    name: ', _txt),
        _HardwareToken("'person_detect'", _str),
        _HardwareToken(',', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    assetPath: ', _txt),
        _HardwareToken("'models/person_detect.tflite'", _str),
        _HardwareToken(',', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    inputShape: ', _txt),
        _HardwareToken('const ', _kw),
        _HardwareToken('[1, 96, 96, 1],', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    outputShape: ', _txt),
        _HardwareToken('const ', _kw),
        _HardwareToken('[1, 2],', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    quantization: ', _txt),
        _HardwareToken('TensorQuantization', _typ),
        _HardwareToken('.int8,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    tensorArenaSizeKb: 128,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  visionGuard.', _txt),
        _HardwareToken('loop', _fn),
        _HardwareToken('((ctx) {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('log', _fn),
        _HardwareToken("('Running on-device TFLite inference...');", _str),
      ]),
      _HardwareLine([
        _HardwareToken('  });', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('}', _txt),
      ]),
    ],
  ),
  _HardwareSnippet(
    tabLabel: 'autonomous_rover.dart',
    layerTitle: 'Robotics Kinematics & Sonar Sweep',
    filename: 'firmware/rover_controller.dart',
    icon: Icons.layers,
    accentColor: Color('#fbbf24'),
    statusMessage: 'Differential Drive Active • 6-Axis IMU • 50Hz Servo Radar',
    code: '''import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);

  // Ultrasonic Sonar & 6-Axis IMU
  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);
  final imu = rover.imu(sdaPin: 21, sclPin: 22);

  // 2-Wheel Differential Drive (L298N)
  final drive = rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  final radarServo = rover.pwmOutput(13, frequencyHz: 50);

  rover.loop((ctx) {
    ctx.setPwm(drive.leftPwmPin, 0.75);
    ctx.setPwm(drive.rightPwmPin, 0.75);
    ctx.delay(const Duration(seconds: 1));

    ctx.setPwm(radarServo, 0.05); // Sweep radar left
  });
}''',
    lines: [
      _HardwareLine([
        _HardwareToken('import ', _kw, bold: true),
        _HardwareToken("'package:flint_hardware/flint_hardware.dart'", _str),
        _HardwareToken(';', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('void ', _typ),
        _HardwareToken('main', _fn),
        _HardwareToken('() {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('rover = ', _txt),
        _HardwareToken('FirmwareBuilder', _typ, bold: true),
        _HardwareToken("('rover_explorer', target: ", _txt),
        _HardwareToken('BoardTarget', _typ),
        _HardwareToken('.esp32);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('sonar = rover.', _txt),
        _HardwareToken('sonar', _fn),
        _HardwareToken('(triggerPin: 5, echoPin: 18);', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('imu = rover.', _txt),
        _HardwareToken('imu', _fn),
        _HardwareToken('(sdaPin: 21, sclPin: 22);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('drive = rover.', _txt),
        _HardwareToken('differentialDrive', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    leftPwmPin: 14, leftDirPin: 27,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    rightPwmPin: 12, rightDirPin: 26,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('radarServo = rover.', _txt),
        _HardwareToken('pwmOutput', _fn),
        _HardwareToken('(13, frequencyHz: 50);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  rover.', _txt),
        _HardwareToken('loop', _fn),
        _HardwareToken('((ctx) {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('setPwm', _fn),
        _HardwareToken('(drive.leftPwmPin, 0.75);', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('setPwm', _fn),
        _HardwareToken('(drive.rightPwmPin, 0.75);', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('delay', _fn),
        _HardwareToken('(const Duration(seconds: 1));', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('setPwm', _fn),
        _HardwareToken('(radarServo, 0.05);', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  });', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('}', _txt),
      ]),
    ],
  ),
  _HardwareSnippet(
    tabLabel: 'swarm_mesh.dart',
    layerTitle: 'Wireless Swarm Mesh & BLE Telemetry',
    filename: 'firmware/swarm_beacon.dart',
    icon: Icons.globe,
    accentColor: Color('#38bdf8'),
    statusMessage: 'Mesh Ch 6 Active • BLE Battery 95% • P2P Swarm Broadcasting',
    code: '''import 'package:flint_hardware/flint_hardware.dart';

void main() {
  final beacon = FirmwareBuilder('swarm_beacon', target: BoardTarget.nrf52840);

  // Strongly-typed BLE Services
  beacon.bluetooth(
    deviceName: 'Flint-Swarm-01',
    services: [
      BleService.battery(initialLevelPercent: 95),
      BleService.deviceInfo(manufacturer: 'Eulogia', model: 'Beacon-X1'),
    ],
  );

  // Strongly-typed Swarm Domain & Radio Channel
  beacon.meshSwarm(
    swarm: SwarmId.robotics,
    channel: WifiChannel.ch6,
  );

  beacon.loop((ctx) {
    ctx.log('Broadcasting swarm state packet...');
  });
}''',
    lines: [
      _HardwareLine([
        _HardwareToken('import ', _kw, bold: true),
        _HardwareToken("'package:flint_hardware/flint_hardware.dart'", _str),
        _HardwareToken(';', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('void ', _typ),
        _HardwareToken('main', _fn),
        _HardwareToken('() {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('beacon = ', _txt),
        _HardwareToken('FirmwareBuilder', _typ, bold: true),
        _HardwareToken("('swarm_beacon', target: ", _txt),
        _HardwareToken('BoardTarget', _typ),
        _HardwareToken('.nrf52840);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  beacon.', _txt),
        _HardwareToken('bluetooth', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    deviceName: ', _txt),
        _HardwareToken("'Flint-Swarm-01'", _str),
        _HardwareToken(',', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    services: [', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('      BleService.', _txt),
        _HardwareToken('battery', _fn),
        _HardwareToken('(initialLevelPercent: 95),', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('      BleService.', _txt),
        _HardwareToken('deviceInfo', _fn),
        _HardwareToken("(manufacturer: 'Eulogia', model: 'Beacon-X1'),", _str),
      ]),
      _HardwareLine([
        _HardwareToken('    ],', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  beacon.', _txt),
        _HardwareToken('meshSwarm', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    swarm: ', _txt),
        _HardwareToken('SwarmId', _typ),
        _HardwareToken('.robotics,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    channel: ', _txt),
        _HardwareToken('WifiChannel', _typ),
        _HardwareToken('.ch6,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  beacon.', _txt),
        _HardwareToken('loop', _fn),
        _HardwareToken('((ctx) {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    ctx.', _txt),
        _HardwareToken('log', _fn),
        _HardwareToken("('Broadcasting swarm state packet...');", _str),
      ]),
      _HardwareLine([
        _HardwareToken('  });', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('}', _txt),
      ]),
    ],
  ),
  _HardwareSnippet(
    tabLabel: 'simulation_export.dart',
    layerTitle: '1-Click Wokwi & C99 Code Generation',
    filename: 'tool/export_simulation.dart',
    icon: Icons.play,
    accentColor: Color('#10b981'),
    statusMessage: 'Wokwi JSON Generated • C99 / C++ / ROS 2 Code Exported',
    code: '''import 'dart:io';
import 'package:flint_hardware/flint_hardware.dart';

void main() async {
  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);

  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);
  final drive = rover.differentialDrive(
    leftPwmPin: 14, leftDirPin: 27,
    rightPwmPin: 12, rightDirPin: 26,
  );

  // 1-Click Multi-Language C99/ROS 2 & Wokwi Simulation
  final outputDir = Directory('build/rover_demo');
  await rover.exportBundle(outputDir);

  print('Simulation bundle exported to \${outputDir.path}/');
}''',
    lines: [
      _HardwareLine([
        _HardwareToken('import ', _kw, bold: true),
        _HardwareToken("'dart:io'", _str),
        _HardwareToken(';', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('import ', _kw, bold: true),
        _HardwareToken("'package:flint_hardware/flint_hardware.dart'", _str),
        _HardwareToken(';', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('void ', _typ),
        _HardwareToken('main', _fn),
        _HardwareToken('() ', _txt),
        _HardwareToken('async', _kw, bold: true),
        _HardwareToken(' {', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('rover = ', _txt),
        _HardwareToken('FirmwareBuilder', _typ, bold: true),
        _HardwareToken("('rover_explorer', target: ", _txt),
        _HardwareToken('BoardTarget', _typ),
        _HardwareToken('.esp32);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('sonar = rover.', _txt),
        _HardwareToken('sonar', _fn),
        _HardwareToken('(triggerPin: 5, echoPin: 18);', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('drive = rover.', _txt),
        _HardwareToken('differentialDrive', _fn),
        _HardwareToken('(', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    leftPwmPin: 14, leftDirPin: 27,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('    rightPwmPin: 12, rightDirPin: 26,', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('  );', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  final ', _kw),
        _HardwareToken('outputDir = ', _txt),
        _HardwareToken('Directory', _typ),
        _HardwareToken("('build/rover_demo');", _str),
      ]),
      _HardwareLine([
        _HardwareToken('  await ', _kw),
        _HardwareToken('rover.', _txt),
        _HardwareToken('exportBundle', _fn),
        _HardwareToken('(outputDir);', _txt),
      ]),
      _HardwareLine([]),
      _HardwareLine([
        _HardwareToken('  print(', _txt),
        _HardwareToken("'Simulation bundle exported to \${outputDir.path}/'", _str),
        _HardwareToken(');', _txt),
      ]),
      _HardwareLine([
        _HardwareToken('}', _txt),
      ]),
    ],
  ),
];
