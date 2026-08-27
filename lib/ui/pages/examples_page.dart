import 'dart:async';

import 'package:flint_dart/ui.dart';

import '../components/copy_text.dart';
import '../shared/page_shell.dart';

class ExamplesPage extends StatefulComponent {
  ExamplesPage(this.props);

  final Map<String, dynamic> props;
  String _selectedCategory = 'all';
  int _activeHeroTab = 0;
  String? _copiedSlug;
  bool _copiedHeroCmd = false;

  List<Map<String, dynamic>> get _examples {
    final raw = props['examples'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((item) => item.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  void _copyCommand(String cmd, String slug) {
    copyText(cmd);
    setState(() => _copiedSlug = slug);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedSlug = null);
    });
  }

  void _copyHeroCommand(String cmd) {
    copyText(cmd);
    setState(() => _copiedHeroCmd = true);
    Timer(const Duration(seconds: 2), () {
      setState(() => _copiedHeroCmd = false);
    });
  }

  @override
  FlintNode build() {
    final allExamples = _examples;
    final filtered = _selectedCategory == 'all'
        ? allExamples
        : allExamples.where((e) {
            final cat = (e['category'] ?? '').toString().toLowerCase();
            final pil = (e['pillar'] ?? '').toString().toLowerCase();
            final filter = _selectedCategory.toLowerCase();
            return cat.contains(filter) || pil.contains(filter);
          }).toList();

    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: const SizeValue.percent(100),
          minWidth: 0,
          overflowX: Overflow.hidden,
          background: ThemeToken.color('bg'),
          color: ThemeToken.color('text'),
          display: Display.flex,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
        ),
        children: [
          _heroSection(allExamples),
          _filterAndGridSection(filtered, allExamples.length),
          _howToRunSection(),
          _communityCtaSection(),
        ],
      ),
    );
  }

  // ===========================================================================
  // 1. HERO SECTION (2-COLUMN RESPONSIVE SPLIT)
  // ===========================================================================
  FlintNode _heroSection(List<Map<String, dynamic>> allExamples) {
    final currentApp = allExamples.isNotEmpty && _activeHeroTab < allExamples.length
        ? allExamples[_activeHeroTab]
        : (allExamples.isNotEmpty ? allExamples[0] : null);

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
              at: const GradientPosition.percent(15, 0),
              stops: const [
                GradientStop(Color.rgba(16, 185, 129, 0.16), 0),
                GradientStop(Colors.transparent, 45),
              ],
            ),
            Gradient.radialCircle(
              at: const GradientPosition.percent(85, 10),
              stops: const [
                GradientStop(Color.rgba(59, 130, 246, 0.14), 0),
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
                GradientStop(Color.rgba(59, 130, 246, 0.16), 0),
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
            minWidth: 0,
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 32),
            md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 36, vertical: 56),
            ),
            lg: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 56, vertical: 64),
            ),
            xl: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72),
            ),
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gridTemplateColumns: GridTemplateColumns.one,
                gap: 36,
                alignItems: AlignItems.center,
                width: const SizeValue.percent(100),
                minWidth: 0,
                lg: DartStyle(
                  gridTemplateColumns:
                      GridTemplateColumns.repeat(2, GridTrack.oneFr),
                  gap: 40,
                ),
                xl: DartStyle(
                  gridTemplateColumns:
                      GridTemplateColumns.repeat(2, GridTrack.oneFr),
                  gap: 64,
                ),
              ),
              children: [
                // Left Column: Copy, Quick CLI, Metrics
                Column(
                  dartStyle: const DartStyle(
                    gap: 18,
                    alignItems: AlignItems.start,
                    minWidth: 0,
                    width: SizeValue.percent(100),
                  ),
                  children: [
                    // Badge Pill
                    Container(
                      dartStyle: DartStyle(
                        display: Display.inlineFlex,
                        alignItems: AlignItems.center,
                        gap: 8,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 12, vertical: 6),
                        radius: 999,
                        background: const Color.rgba(16, 185, 129, 0.12),
                        border: Border.all(
                            color: const Color.rgba(16, 185, 129, 0.35)),
                        color: const Color('#10b981'),
                        fontSize: 11.5,
                        fontWeight: 900,
                        letterSpacing: 0.8,
                      ),
                      children: [
                        Icon(Icons.box, size: 14, color: const Color('#10b981')),
                        Text.span('OPEN-SOURCE APPS & BLUEPRINTS'),
                      ],
                    ),

                    // Main Heading
                    Text.h1(
                      'Production Apps Built With Pure Dart',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: const SizeValue(
                            'clamp(2.2rem, 5.2vw, 4.2rem)'),
                        lineHeight: 1.06,
                        fontWeight: 900,
                        color: const Color('transparent'),
                        background: Gradient.linear(
                          110,
                          const [
                            GradientStop(Color('#10b981'), 0),
                            GradientStop(Color('#06b6d4'), 50),
                            GradientStop(Color('#3b82f6'), 100),
                          ],
                        ),
                        backgroundClip: BackgroundClip.text,
                        webkitBackgroundClip: BackgroundClip.text,
                      ),
                    ),

                    // Subtitle
                    Text.p(
                      'Real-world open source applications, full-stack blueprints, AI agents, and Flutter clients created with the Flint ecosystem. Explore complete source code on GitHub, scaffold templates directly via CLI, or study battle-tested architecture.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 15,
                        lineHeight: 1.68,
                        color: ThemeToken.color('muted'),
                        md: const DartStyle(fontSize: 16.5),
                      ),
                    ),

                    // Quickstart CLI Box
                    Container(
                      dartStyle: DartStyle(
                        width: const SizeValue.percent(100),
                        maxWidth: 540,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 14, vertical: 10),
                        radius: 12,
                        border: Border.all(
                            color: const Color.rgba(16, 185, 129, 0.3)),
                        background: const Color.rgba(3, 7, 18, 0.88),
                        display: Display.flex,
                        alignItems: AlignItems.center,
                        justifyContent: JustifyContent.between,
                        gap: 12,
                        margin: const EdgeInsets.only(top: 4),
                      ),
                      children: [
                        Container(
                          dartStyle: const DartStyle(
                            display: Display.flex,
                            alignItems: AlignItems.center,
                            gap: 10,
                            minWidth: 0,
                            overflow: Overflow.hidden,
                          ),
                          children: [
                            Text.span(
                              r'$',
                              dartStyle: const DartStyle(
                                color: Color('#10b981'),
                                fontWeight: 900,
                                fontSize: 14,
                                fontFamily: FontFamily.monospace,
                              ),
                            ),
                            Text.span(
                              currentApp?['clone_command']?.toString() ??
                                  'flint create my_shop --template=ecommerce',
                              dartStyle: const DartStyle(
                                color: Color('#f8fafc'),
                                fontSize: 12.5,
                                fontFamily: FontFamily.monospace,
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
                          onPressed: (_) => _copyHeroCommand(
                              currentApp?['clone_command']?.toString() ??
                                  'flint create my_shop --template=ecommerce'),
                          dartStyle: DartStyle(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 10, vertical: 6),
                            radius: 6,
                            background: const Color.rgba(255, 255, 255, 0.08),
                            color: _copiedHeroCmd
                                ? const Color('#10b981')
                                : const Color('#cbd5e1'),
                            fontSize: 12,
                            fontWeight: 700,
                            flexShrink: 0,
                          ),
                          children: [
                            Icon(_copiedHeroCmd ? Icons.check : Icons.copy,
                                size: 13),
                            Text.span(_copiedHeroCmd ? 'Copied' : 'Copy'),
                          ],
                        ),
                      ],
                    ),

                    // Signal Badges
                    Container(
                      dartStyle: DartStyle(
                        display: Display.flex,
                        flexWrap: FlexWrap.wrap,
                        gap: 8,
                        margin: const EdgeInsets.only(top: 4),
                      ),
                      children: [
                        _metricPill('6 Standalone Apps', '#10b981'),
                        _metricPill('100% Pure Dart', '#06b6d4'),
                        _metricPill('Zero JS Frameworks', '#3b82f6'),
                        _metricPill('MIT Licensed', '#8b5cf6'),
                      ],
                    ),
                  ],
                ),

                // Right Column: Interactive Blueprint Browser & Code Studio Card
                _heroBlueprintCard(allExamples, currentApp),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _metricPill(String label, String color) {
    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 8,
        background: Color.rgba(255, 255, 255, 0.04),
        border: Border.all(color: ThemeToken.color('line')),
        color: ThemeToken.color('text'),
        fontSize: 12,
        fontWeight: 600,
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 6,
            height: 6,
            radius: 999,
            background: Color(color),
            margin: const EdgeInsets.only(right: 6),
            display: Display.inlineBlock,
          ),
        ),
        Text.span(label),
      ],
    );
  }

  FlintNode _heroBlueprintCard(
      List<Map<String, dynamic>> allExamples, Map<String, dynamic>? app) {
    final title = app?['title']?.toString() ?? 'eCommerce Suite';
    final desc = app?['what_it_does']?.toString() ?? app?['description']?.toString() ?? '';
    final stack = app?['tech_stack']?.toString() ?? 'Flint Dart';
    final github = app?['github_url']?.toString() ??
        'https://github.com/flint-dart/flint/tree/main/examples';
    final accent = app?['accent_color']?.toString() ?? '#10b981';

    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        minWidth: 0,
        radius: 16,
        border: Border.all(color: Color.rgba(16, 185, 129, 0.25)),
        background: const Color('#050b14'),
        overflow: Overflow.hidden,
        shadow: const Shadow(
          y: 20,
          blur: 60,
          spread: -20,
          color: Color.rgba(0, 0, 0, 0.8),
        ),
      ),
      children: [
        // Top macOS Header & App Selector Tabs
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            background: const Color.rgba(255, 255, 255, 0.04),
            borderBottom: const Border(
              color: Color.rgba(255, 255, 255, 0.08),
              width: 1,
            ),
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 12,
            flexWrap: FlexWrap.wrap,
          ),
          children: [
            Container(
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
            Container(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 4,
                overflow: 'auto',
                minWidth: 0,
              ),
              children: [
                for (var i = 0; i < allExamples.length; i++)
                  Button(
                    variant: ButtonVariant.ghost,
                    size: ComponentSize.sm,
                    onPressed: (_) => setState(() => _activeHeroTab = i),
                    dartStyle: DartStyle(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 8, vertical: 4),
                      radius: 6,
                      fontSize: 11,
                      fontWeight: _activeHeroTab == i ? 800 : 500,
                      color: _activeHeroTab == i
                          ? Colors.white
                          : const Color('#94a3b8'),
                      background: _activeHeroTab == i
                          ? const Color.rgba(16, 185, 129, 0.2)
                          : const Color('transparent'),
                    ),
                    children: [
                      Text.span(allExamples[i]['slug']?.toString() ?? 'app'),
                    ],
                  ),
              ],
            ),
          ],
        ),

        // Body Content Info
        Container(
          dartStyle: const DartStyle(
            padding: EdgeInsets.all(20),
            display: Display.grid,
            gap: 16,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                width: SizeValue.percent(100),
                gap: 8,
              ),
              children: [
                Text.h3(
                  title,
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 18,
                    fontWeight: 800,
                    color: Color('#f8fafc'),
                  ),
                ),
                Container(
                  dartStyle: DartStyle(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 8, vertical: 3),
                    radius: 6,
                    background: Color.rgba(16, 185, 129, 0.15),
                    color: Color(accent),
                    fontSize: 11,
                    fontWeight: 800,
                  ),
                  children: [
                    Text.span(app?['category']?.toString() ?? 'App'),
                  ],
                ),
              ],
            ),

            Text.p(
              desc,
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 13,
                lineHeight: 1.6,
                color: Color('#cbd5e1'),
              ),
            ),

            // Code Preview Box
            Container(
              dartStyle: const DartStyle(
                padding: EdgeInsets.all(14),
                radius: 8,
                background: Color('#020617'),
                border: Border(
                  color: Color.rgba(255, 255, 255, 0.08),
                  width: 1,
                ),
                fontFamily: FontFamily.monospace,
                fontSize: 12,
                lineHeight: 1.6,
                color: Color('#a7f3d0'),
                overflow: 'auto',
                maxHeight: 160,
                whiteSpace: 'pre',
              ),
              children: [
                Text.span(
                    '// Scaffold & start ${app?['slug'] ?? 'app'} project\n\$ ${app?['clone_command'] ?? 'flint create my_app'}\n\$ cd ${app?['slug'] ?? 'my_app'}\n\$ flint run'),
              ],
            ),

            // Bottom Stack & Link
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                width: SizeValue.percent(100),
                gap: 8,
                flexWrap: FlexWrap.wrap,
              ),
              children: [
                Text.span(
                  'Stack: $stack',
                  dartStyle: const DartStyle(
                    fontSize: 11.5,
                    color: Color('#94a3b8'),
                    fontWeight: 600,
                  ),
                ),
                Link(
                  href: github,
                  tone: Tone.primary,
                  dartStyle: const DartStyle(
                    padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    fontSize: 12,
                    fontWeight: 700,
                  ),
                  children: [
                    Icon(Icons.code, size: 13),
                    Text.span('GitHub'),
                  ],
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

  // ===========================================================================
  // 2. FILTER & FULLSCREEN RESPONSIVE GRID SECTION (3-COL XL, 2-COL MD/LG)
  // ===========================================================================
  FlintNode _filterAndGridSection(
      List<Map<String, dynamic>> items, int totalCount) {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 36, vertical: 56),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 64),
        ),
        xl: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72),
        ),
        borderBottom: Border(
          color: ThemeToken.color('line'),
          width: 1,
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 32,
            width: SizeValue.percent(100),
          ),
          children: [
            // Header Title & Description
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.end,
                justifyContent: JustifyContent.between,
                width: SizeValue.percent(100),
                flexWrap: FlexWrap.wrap,
                gap: 16,
              ),
              children: [
                Column(
                  dartStyle: const DartStyle(
                    gap: 6,
                    alignItems: AlignItems.start,
                    maxWidth: 720,
                  ),
                  children: [
                    Text.span(
                      'DISCOVER & DOWNLOAD',
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        fontWeight: 900,
                        color: Color('#10b981'),
                        letterSpacing: 0.5,
                      ),
                    ),
                    Text.h2(
                      'All Ecosystem Applications',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 28,
                        fontWeight: 800,
                        color: ThemeToken.color('text'),
                      ),
                    ),
                    Text.p(
                      'Click on any application card below to copy its template scaffold command or open the complete source code on GitHub.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: ThemeToken.color('muted'),
                      ),
                    ),
                  ],
                ),

                // Category Filter Pills
                Container(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                    flexWrap: FlexWrap.wrap,
                  ),
                  children: [
                    _filterPill('all', 'All ($totalCount)'),
                    _filterPill('fullstack', 'Full-Stack'),
                    _filterPill('ai', 'AI & Agents'),
                    _filterPill('client', 'UI & Canvas'),
                    _filterPill('database', 'DB API'),
                  ],
                ),
              ],
            ),

            // Projects Grid: 3-column on XL, 2-column on MD/LG, 1-column on SM
            if (items.isEmpty)
              _emptyState()
            else
              Container(
                dartStyle: const DartStyle(
                  display: Display.grid,
                  gridTemplateColumns: 'minmax(0, 1fr)',
                  gap: 24,
                  width: SizeValue.percent(100),
                  md: DartStyle(
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: 24,
                  ),
                  xl: DartStyle(
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: 28,
                  ),
                ),
                children: [
                  for (final item in items) _exampleCard(item),
                ],
              ),
          ],
        ),
      ],
    );
  }

  FlintNode _filterPill(String categoryKey, String label) {
    final active = _selectedCategory == categoryKey;
    return Button(
      variant: ButtonVariant.ghost,
      size: ComponentSize.sm,
      onPressed: (_) => setState(() => _selectedCategory = categoryKey),
      dartStyle: DartStyle(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        radius: 999,
        fontSize: 12.5,
        fontWeight: active ? 800 : 600,
        color: active ? Colors.white : ThemeToken.color('muted'),
        background: active
            ? const Color('#10b981')
            : Color.rgba(255, 255, 255, 0.05),
        border: Border.all(
          color: active
              ? const Color('#10b981')
              : ThemeToken.color('line'),
        ),
        transition: StyleTransition.all(milliseconds: 150),
      ),
      children: [Text.span(label)],
    );
  }

  FlintNode _exampleCard(Map<String, dynamic> item) {
    final title = item['title']?.toString() ?? 'Example Project';
    final slug = item['slug']?.toString() ?? '';
    final description = item['description']?.toString() ?? '';
    final whatItDoes = item['what_it_does']?.toString() ?? '';
    final category = item['category']?.toString() ?? 'App';
    final badge = item['badge']?.toString() ?? 'Official';
    final githubUrl = item['github_url']?.toString() ??
        'https://github.com/flint-dart/flint/tree/main/examples';
    final cloneCommand = item['clone_command']?.toString() ??
        'flint create $slug --template=$slug';
    final techStack = item['tech_stack']?.toString() ?? '';
    final complexity = item['complexity']?.toString() ?? 'Production';
    final accentColor = item['accent_color']?.toString() ?? '#10b981';
    final features = (item['features'] is List)
        ? (item['features'] as List).cast<String>()
        : <String>[];

    final isCopied = _copiedSlug == slug;

    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        justifyContent: JustifyContent.between,
        padding: const EdgeInsets.all(22),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        shadow: ThemeToken.shadow('sm'),
        transition: StyleTransition.all(milliseconds: 200),
        hover: DartStyle(
          border: Border(color: Color(accentColor), width: 1),
          transform: StyleTransform.translateY(-3),
          shadow: ThemeToken.shadow('md'),
        ),
        md: const DartStyle(padding: EdgeInsets.all(24)),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 14,
            alignItems: AlignItems.start,
            width: SizeValue.percent(100),
          ),
          children: [
            // Top Badge Row
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                width: SizeValue.percent(100),
                flexWrap: FlexWrap.wrap,
                gap: 8,
              ),
              children: [
                Container(
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    gap: 6,
                    padding:
                        const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                    radius: 6,
                    background: Color.rgba(16, 185, 129, 0.12),
                    border: Border.all(color: Color(accentColor)),
                    color: Color(accentColor),
                    fontSize: 10.5,
                    fontWeight: 900,
                    letterSpacing: 0.5,
                  ),
                  children: [
                    Text.span(badge.toUpperCase()),
                  ],
                ),
                Container(
                  dartStyle: DartStyle(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    radius: 6,
                    background: ThemeToken.color('panelStrong'),
                    color: ThemeToken.color('muted'),
                    fontSize: 11,
                    fontWeight: 700,
                  ),
                  children: [Text.span(complexity)],
                ),
              ],
            ),

            // Title & Category
            Column(
              dartStyle: const DartStyle(
                gap: 3,
                alignItems: AlignItems.start,
                width: SizeValue.percent(100),
              ),
              children: [
                Text.span(
                  category,
                  dartStyle: DartStyle(
                    fontSize: 11,
                    fontWeight: 800,
                    color: ThemeToken.color('muted'),
                    letterSpacing: 0.5,
                  ),
                ),
                Text.h3(
                  title,
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 19,
                    fontWeight: 800,
                    color: ThemeToken.color('text'),
                    lineHeight: 1.25,
                  ),
                ),
              ],
            ),

            // Description
            Text.p(
              description,
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 13.5,
                lineHeight: 1.6,
                color: ThemeToken.color('muted'),
              ),
            ),
            if (whatItDoes.isNotEmpty)
              Text.p(
                whatItDoes,
                dartStyle: DartStyle(
                  margin: const EdgeInsets.all(0),
                  fontSize: 12.5,
                  lineHeight: 1.55,
                  color: ThemeToken.color('text'),
                ),
              ),

            // Feature Tag Pills
            if (features.isNotEmpty)
              Container(
                dartStyle: DartStyle(
                  display: Display.flex,
                  flexWrap: FlexWrap.wrap,
                  gap: 5,
                  margin: const EdgeInsets.symmetric(vertical: 2),
                ),
                children: [
                  for (final f in features)
                    Container(
                      dartStyle: DartStyle(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 7, vertical: 2.5),
                        radius: 5,
                        background: Color.rgba(255, 255, 255, 0.05),
                        border:
                            Border.all(color: ThemeToken.color('line')),
                        color: ThemeToken.color('text'),
                        fontSize: 11,
                        fontWeight: 600,
                      ),
                      children: [Text.span(f)],
                    ),
                ],
              ),

            // Tech Stack Strip
            if (techStack.isNotEmpty)
              Container(
                dartStyle: DartStyle(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  radius: 6,
                  background: ThemeToken.color('panelStrong'),
                  border: Border(color: ThemeToken.color('line'), width: 1),
                  width: const SizeValue.percent(100),
                ),
                children: [
                  Text.span(
                    'Stack: $techStack',
                    dartStyle: DartStyle(
                      fontSize: 11,
                      fontWeight: 600,
                      color: ThemeToken.color('muted'),
                    ),
                  ),
                ],
              ),
          ],
        ),

        // Bottom Action Bar: Copy CLI Command + GitHub Source Button
        Column(
          dartStyle: const DartStyle(
            gap: 10,
            margin: EdgeInsets.only(top: 18),
            width: SizeValue.percent(100),
          ),
          children: [
            // CLI Box
            Container(
              dartStyle: DartStyle(
                padding:
                    const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
                radius: 7,
                background: const Color('#030712'),
                border: Border.all(color: const Color.rgba(255, 255, 255, 0.1)),
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 8,
                width: const SizeValue.percent(100),
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                    minWidth: 0,
                    overflow: Overflow.hidden,
                  ),
                  children: [
                    Text.span(
                      r'$',
                      dartStyle: const DartStyle(
                        color: Color('#10b981'),
                        fontSize: 11.5,
                        fontFamily: FontFamily.monospace,
                        fontWeight: 900,
                      ),
                    ),
                    Text.span(
                      cloneCommand,
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        fontFamily: FontFamily.monospace,
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
                  onPressed: (_) => _copyCommand(cloneCommand, slug),
                  dartStyle: DartStyle(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 7, vertical: 2.5),
                    radius: 4,
                    background: const Color.rgba(255, 255, 255, 0.08),
                    color: isCopied
                        ? const Color('#10b981')
                        : const Color('#cbd5e1'),
                    fontSize: 10.5,
                    fontWeight: 700,
                    flexShrink: 0,
                  ),
                  children: [
                    Icon(isCopied ? Icons.check : Icons.copy, size: 11),
                    Text.span(isCopied ? 'Copied' : 'Copy'),
                  ],
                ),
              ],
            ),

            // Action Links
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                width: SizeValue.percent(100),
                gap: 8,
              ),
              children: [
                Link(
                  href: githubUrl,
                  tone: Tone.primary,
                  dartStyle: const DartStyle(
                    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    fontSize: 12,
                    fontWeight: 700,
                  ),
                  children: [
                    Icon(Icons.code, size: 13),
                    Text.span('GitHub Source'),
                  ],
                ),
                Text.span(
                  'Pure Dart',
                  dartStyle: DartStyle(
                    fontSize: 11,
                    fontWeight: 600,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _emptyState() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(40),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border(color: ThemeToken.color('line'), width: 1),
        textAlign: TextAlign.center,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
      ),
      children: [
        Icon(Icons.box, size: 32, color: ThemeToken.color('muted')),
        Text.h3(
          'No examples matching this category',
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 18,
            fontWeight: 700,
            color: ThemeToken.color('text'),
          ),
        ),
        Button(
          variant: ButtonVariant.outline,
          onPressed: (_) => setState(() => _selectedCategory = 'all'),
          children: [Text.span('Show All Examples')],
        ),
      ],
    );
  }

  // ===========================================================================
  // 3. HOW TO RUN & DOWNLOAD SECTION
  // ===========================================================================
  FlintNode _howToRunSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        md: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 36, vertical: 56),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 64),
        ),
        xl: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 72),
        ),
        borderBottom: Border(
          color: ThemeToken.color('line'),
          width: 1,
        ),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 28,
            width: SizeValue.percent(100),
          ),
          children: [
            Column(
              dartStyle: const DartStyle(
                gap: 8,
                maxWidth: 720,
                alignItems: AlignItems.start,
              ),
              children: [
                Text.span(
                  'QUICKSTART WORKFLOW',
                  dartStyle: const DartStyle(
                    fontSize: 11,
                    fontWeight: 900,
                    color: Color('#10b981'),
                    letterSpacing: 0.5,
                  ),
                ),
                Text.h2(
                  'How to Run Any Example in 3 Steps',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 26,
                    fontWeight: 800,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.p(
                  'Every example is completely standalone, fully typed, and ready to run locally with zero configuration overhead.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: 16,
                width: SizeValue.percent(100),
                md: DartStyle(
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                ),
              ),
              children: [
                _stepCard(
                  step: 'Step 1',
                  title: 'Scaffold or Clone',
                  desc:
                      'Use `flint create my_app --template=<name>` or clone the repo directly from GitHub.',
                  accent: '#10b981',
                ),
                _stepCard(
                  step: 'Step 2',
                  title: 'Install Dependencies',
                  desc:
                      'Run `dart pub get` (or `flutter pub get` for Flutter client apps) to fetch packages.',
                  accent: '#06b6d4',
                ),
                _stepCard(
                  step: 'Step 3',
                  title: 'Start Dev Server',
                  desc:
                      'Run `flint run` for full-stack hot reload or `dart run lib/main.dart` to start immediate execution.',
                  accent: '#3b82f6',
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _stepCard({
    required String step,
    required String title,
    required String desc,
    required String accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 10,
        padding: const EdgeInsets.all(22),
        radius: 16,
        background: ThemeToken.color('panel'),
        border: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Text.span(
          step,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 900,
            color: Color(accent),
            letterSpacing: 0.5,
          ),
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 17,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.55,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  // ===========================================================================
  // 4. COMMUNITY CTA SECTION
  // ===========================================================================
  FlintNode _communityCtaSection() {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue.percent(100),
        maxWidth: const SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 64),
        md: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 36, vertical: 80),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 96),
        ),
        xl: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        ),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        Column(
          dartStyle: const DartStyle(
            gap: 24,
            alignItems: AlignItems.center,
            width: SizeValue.percent(100),
          ),
          children: [
            Text.h2(
              'Built something awesome with Flint?',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: const SizeValue('clamp(1.6rem, 4vw, 2.4rem)'),
                fontWeight: 900,
                textAlign: TextAlign.center,
                color: const Color('transparent'),
                background: Gradient.linear(
                  110,
                  const [
                    GradientStop(Color('#10b981'), 0),
                    GradientStop(Color('#06b6d4'), 50),
                    GradientStop(Color('#3b82f6'), 100),
                  ],
                ),
                backgroundClip: BackgroundClip.text,
                webkitBackgroundClip: BackgroundClip.text,
              ),
            ),
            Text.p(
              'Submit your open-source application to be featured in the official Flint Examples directory and help other Dart developers learn from real code.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 16,
                lineHeight: 1.6,
                color: ThemeToken.color('muted'),
                textAlign: TextAlign.center,
                maxWidth: 640,
              ),
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                justifyContent: JustifyContent.center,
                gap: 12,
                margin: EdgeInsets.only(top: 8),
              ),
              children: [
                Link(
                  href: 'https://github.com/flint-dart/flint/tree/main/examples',
                  tone: Tone.primary,
                  children: [
                    Icon(Icons.plus, size: 16),
                    Text.span('Submit an Example on GitHub'),
                  ],
                ),
                Link(
                  href: '/fullstack',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  children: [
                    Icon(Icons.layers, size: 14),
                    Text.span('Explore Full-Stack Docs'),
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
