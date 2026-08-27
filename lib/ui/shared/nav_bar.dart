import 'package:flint_dart/ui.dart';

import '../components/api/sidebar.dart';
import '../components/guides/sidebar.dart';
import 'brand_logo.dart';

class NavBar extends FlintComponent {
  final Map<String, dynamic> props;
  NavBar(this.props);

  bool get _isAuth =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canWrite =>
      props['canWriteBlog'] == true || _hasRole({'admin', 'contributor'});
  bool get _showGuideMenu => props['showGuideMenu'] == true;
  bool get _showApiMenu => props['showApiMenu'] == true;
  String get _activeGuide =>
      props['initialSection']?.toString() ?? 'introduction';
  String get _activeApi => props['initialSection']?.toString() ?? 'flint-class';
  String get _label =>
      props['currentUserLabel']?.toString() ??
      authSession.user['name']?.toString() ??
      authSession.user['email']?.toString() ??
      'Signed in';

  bool _drawerOpen = false;
  bool _guideDrawerOpen = false;
  bool _apiDrawerOpen = false;

  bool _hasRole(Set<String> roles) {
    final role = authSession.role;
    return role != null && roles.contains(role);
  }

  @override
  FlintNode build() {
    return Container(
      dartStyle: DartStyle(
        position: Position.sticky,
        top: 0,
        zIndex: 50,
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        backdropFilter: StyleFilter.blur(18),
        light: DartStyle(
          background: Color.rgba(255, 255, 255, 0.9),
        ),
        dark: DartStyle(
          background: Background.layers([
            Gradient.linear(
              90,
              const [
                GradientStop(Color.rgba(56, 189, 248, 0.08)),
                GradientStop(Color.rgba(52, 211, 153, 0.08)),
                GradientStop(Color.rgba(5, 7, 13, 0.94)),
              ],
            ),
            const Color.rgba(5, 7, 13, 0.94),
          ]),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            maxWidth: SizeValue.percent(100),
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            md: DartStyle(padding: EdgeInsets.symmetric(horizontal: 36, vertical: 14)),
            lg: DartStyle(padding: EdgeInsets.symmetric(horizontal: 56, vertical: 14)),
            xl: DartStyle(padding: EdgeInsets.symmetric(horizontal: 80, vertical: 14)),
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 16,
          ),
          children: [
            _brandCluster(),
            _desktopLinks(),
            _mobileActions(),
          ],
        ),
        if (_drawerOpen) _mobileDrawer(),
        if (_guideDrawerOpen) _guideDrawer(),
        if (_apiDrawerOpen) _apiDrawer(),
      ],
    );
  }

  String get _currentPillar {
    final explicit = props['activePillar']?.toString();
    if (explicit != null && explicit.isNotEmpty) return explicit;
    final path = props['currentPath']?.toString() ?? '';
    if (path == '/examples' || path.startsWith('/examples/')) {
      return 'ecosystem';
    }
    if (path.startsWith('/fullstack') ||
        path.startsWith('/guides') ||
        path.startsWith('/api') ||
        path.startsWith('/whats-new') ||
        path.startsWith('/changelog') ||
        path.startsWith('/ui')) {
      return 'fullstack';
    }
    if (path.startsWith('/client')) return 'client';
    if (path.startsWith('/ai')) return 'ai';
    if (path.startsWith('/hardware')) return 'hardware';
    return 'ecosystem';
  }

  FlintNode _brandCluster() {
    final pillar = _currentPillar;
    final isPillarPage = pillar != 'ecosystem';

    String pillarLabel = 'Ecosystem';
    String pillarHref = '/';
    String? pillarVersion;
    Color accentColor = const Color('#38bdf8');

    if (pillar == 'fullstack') {
      pillarLabel = 'Fullstack';
      pillarHref = '/fullstack';
      pillarVersion = 'v${props['flintDartVersion'] ?? '1.3.2'}';
      accentColor = const Color('#34d399');
    } else if (pillar == 'client') {
      pillarLabel = 'Client SDK';
      pillarHref = '/client';
      pillarVersion = 'v${props['flintClientVersion'] ?? '0.1.0'}';
      accentColor = const Color('#38bdf8');
    } else if (pillar == 'ai') {
      pillarLabel = 'AI Engine';
      pillarHref = '/ai';
      pillarVersion = 'v0.1.0';
      accentColor = const Color('#a78bfa');
    } else if (pillar == 'hardware') {
      pillarLabel = 'Hardware';
      pillarHref = '/hardware';
      pillarVersion = 'v0.1.0';
      accentColor = const Color('#f97316');
    }

    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 10,
        minWidth: 0,
      ),
      children: [
        Link(
          href: pillarHref,
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                width: 38,
                height: 38,
                radius: ThemeToken.radius('md'),
                border: Border.all(color: Color.rgba(56, 189, 248, 0.34)),
                background: Background.layers([
                  Gradient.linear(
                    135,
                    const [
                      GradientStop(Color.rgba(56, 189, 248, 0.24)),
                      GradientStop(Color.rgba(52, 211, 153, 0.18)),
                    ],
                  ),
                  ThemeToken.color('panel'),
                ]),
                shadow: ThemeToken.shadow('glow'),
              ),
              children: [
                brandLogoMark(size: 30),
              ],
            ),
            Container(
              dartStyle: DartStyle(display: Display.grid, gap: 2),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                  ),
                  children: [
                    Text.span(
                      'Flint',
                      dartStyle: DartStyle(
                        color: ThemeToken.color('text'),
                        fontSize: 15,
                        fontWeight: 800,
                      ),
                    ),
                    if (pillarVersion != null)
                      Container(
                        dartStyle: DartStyle(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 5, vertical: 1),
                          radius: 999,
                          background: Color.rgba(52, 211, 153, 0.12),
                          border:
                              Border.all(color: Color.rgba(52, 211, 153, 0.3)),
                        ),
                        children: [
                          Text.span(
                            pillarVersion,
                            dartStyle: const DartStyle(
                              fontSize: 10,
                              fontWeight: 800,
                              color: Color('#34d399'),
                            ),
                          ),
                        ],
                      ),
                  ],
                ),
                Text.span(
                  pillarLabel,
                  dartStyle: DartStyle(
                    color:
                        isPillarPage ? accentColor : ThemeToken.color('muted'),
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 0.3,
                  ),
                ),
              ],
            ),
          ],
        ),
        if (isPillarPage)
          Link(
            href: '/',
            dartStyle: DartStyle(
              display: Display.none,
              alignItems: AlignItems.center,
              gap: 4,
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              radius: 999,
              background: Color.rgba(255, 255, 255, 0.05),
              border: Border.all(color: ThemeToken.color('line')),
              color: ThemeToken.color('muted'),
              fontSize: 11,
              fontWeight: 700,
              hover: DartStyle(
                color: ThemeToken.color('text'),
                background: Color.rgba(255, 255, 255, 0.1),
              ),
              sm: DartStyle(display: Display.inlineFlex),
            ),
            children: [
              Icon(Icons.arrowLeft, size: 12),
              Text.span('Ecosystem'),
            ],
          ),
        if (_showGuideMenu) _guideToggle(),
        if (_showApiMenu) _apiToggle(),
      ],
    );
  }

  FlintNode _guideToggle() {
    return Button(
      variant: ButtonVariant.outline,
      tone: Tone.neutral,
      props: {
        'aria-label': _guideDrawerOpen
            ? 'Close guide navigation'
            : 'Open guide navigation',
      },
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
        width: 38,
        height: 38,
        padding: const EdgeInsets.all(0),
        radius: ThemeToken.radius('md'),
        border: Border.all(color: Color.rgba(52, 211, 153, 0.34)),
        background: _guideDrawerOpen
            ? Color.rgba(52, 211, 153, 0.16)
            : ThemeToken.color('panel'),
        color: ThemeToken.color('primary'),
        dark: const DartStyle(
          background: Color.rgba(15, 23, 42, 0.72),
          color: Color('#a7f3d0'),
        ),
        md: DartStyle(display: Display.none),
      ),
      onPressed: (_) => setState(() {
        _drawerOpen = false;
        _guideDrawerOpen = !_guideDrawerOpen;
      }),
      child: Icon(_guideDrawerOpen ? Icons.x : Icons.book, size: 17),
    );
  }

  FlintNode _apiToggle() {
    return Button(
      variant: ButtonVariant.outline,
      tone: Tone.neutral,
      props: {
        'aria-label':
            _apiDrawerOpen ? 'Close API navigation' : 'Open API navigation',
      },
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
        width: 38,
        height: 38,
        padding: const EdgeInsets.all(0),
        radius: ThemeToken.radius('md'),
        border: Border.all(color: Color.rgba(56, 189, 248, 0.34)),
        background: _apiDrawerOpen
            ? Color.rgba(14, 165, 233, 0.18)
            : ThemeToken.color('panel'),
        color: ThemeToken.color('accent'),
        dark: const DartStyle(
          background: Color.rgba(15, 23, 42, 0.72),
          color: Color('#bae6fd'),
        ),
        md: DartStyle(display: Display.none),
      ),
      onPressed: (_) => setState(() {
        _drawerOpen = false;
        _guideDrawerOpen = false;
        _apiDrawerOpen = !_apiDrawerOpen;
      }),
      child: Icon(_apiDrawerOpen ? Icons.x : Icons.document, size: 17),
    );
  }

  FlintNode _desktopLinks() {
    final pillar = _currentPillar;
    final List<FlintNode> links;

    if (pillar == 'fullstack') {
      links = [
        _navLink('/fullstack', 'Overview'),
        _navLink('/fullstack#features', 'Features'),
        _navLink('/fullstack/guides', 'Guides'),
        _navLink('/fullstack/api', 'API'),
        _navLink('/fullstack/whats-new', "What's New"),
        _navLink('/fullstack/changelog', 'Changelog'),
        _navLink('/fullstack/examples', 'Examples'),
        _navLink('/', 'Ecosystem ↗'),
      ];
    } else if (pillar == 'client') {
      links = [
        _navLink('/client', 'Overview'),
        _navLink('/client#features', 'Features'),
        _navLink('/client#caching', 'Caching'),
        _navLink('/client#channels', 'Real-Time'),
        _navLink('https://pub.dev/packages/flint_client', 'pub.dev ↗'),
        _navLink('/', 'Ecosystem ↗'),
      ];
    } else if (pillar == 'ai') {
      links = [
        _navLink('/ai', 'Overview'),
        _navLink('/ai#agents', 'Agents'),
        _navLink('/ai#tools', 'Tool Policies'),
        _navLink('/ai#chat', 'Streaming'),
        _navLink('https://pub.dev/packages/flint_ai', 'pub.dev ↗'),
        _navLink('/', 'Ecosystem ↗'),
      ];
    } else if (pillar == 'hardware') {
      links = [
        _navLink('/hardware', 'Overview'),
        _navLink('/hardware#sensors', 'Sensors'),
        _navLink('/hardware#statemachine', 'State Machine'),
        _navLink('/hardware#wokwi', 'Wokwi Simulator'),
        _navLink('https://pub.dev/packages/flint_hardware', 'pub.dev ↗'),
        _navLink('/', 'Ecosystem ↗'),
      ];
    } else {
      links = [
        _navLink('/', 'Ecosystem'),
        _navLink('/fullstack', 'Fullstack'),
        _navLink('/client', 'Client'),
        _navLink('/ai', 'AI'),
        _navLink('/hardware', 'Hardware'),
        _navLink('/examples', 'Examples'),
        _navLink('/api', 'API'),
        _navLink('/blog', 'Blog'),
        _navLink('/questions', 'Questions'),
      ];
    }

    return Row(
      dartStyle: DartStyle(
        display: Display.none,
        alignItems: AlignItems.center,
        gap: 6,
        lg: DartStyle(display: Display.flex),
      ),
      children: links,
    );
  }

  FlintNode _navLink(String href, String label) {
    return Link(
      href: href,
      child: label,
      dartStyle: DartStyle(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        radius: ThemeToken.radius('md'),
        color: ThemeToken.color('muted'),
        fontSize: 13,
        fontWeight: 700,
        transition: StyleTransition.all(milliseconds: 160),
        hover: DartStyle(
          color: ThemeToken.color('text'),
          background: Color.rgba(255, 255, 255, 0.06),
        ),
        focusVisible: DartStyle(
          shadow: Shadow(
            y: 0,
            blur: 0,
            spread: 3,
            color: Color.rgba(56, 189, 248, 0.28),
          ),
        ),
      ),
    );
  }

  FlintNode _mobileActions() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 10,
      ),
      children: [
        if (_canWrite)
          Link(
            href: '/blog/write',
            child: 'Write',
            dartStyle: DartStyle(
              display: Display.none,
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              radius: ThemeToken.radius('md'),
              border: Border.all(color: Color.rgba(52, 211, 153, 0.34)),
              background: Color.rgba(52, 211, 153, 0.1),
              color: ThemeToken.color('primary'),
              fontSize: 13,
              fontWeight: 800,
              md: DartStyle(display: Display.inlineFlex),
            ),
          ),
        _themeToggle(),
        if (_isAuth) _userBadge(),
        Link(
          href: 'https://github.com/flint-dart/flint_dart',
          target: '_blank',
          child: 'GitHub',
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(2, 132, 199, 0.28)),
            background: Color.rgba(2, 132, 199, 0.08),
            color: ThemeToken.color('accent'),
            fontSize: 13,
            fontWeight: 800,
            transition: StyleTransition.all(milliseconds: 160),
            hover: DartStyle(
              background: Color.rgba(2, 132, 199, 0.14),
            ),
            dark: const DartStyle(
              border: Border(color: Color.rgba(56, 189, 248, 0.32), width: 1),
              background: Color.rgba(14, 165, 233, 0.1),
              color: Color('#bae6fd'),
            ),
          ),
        ),
        Button(
          child: 'Menu',
          variant: ButtonVariant.outline,
          tone: Tone.neutral,
          dartStyle: DartStyle(
            minWidth: 56,
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(51, 65, 85, 0.95)),
            background: ThemeToken.color('panel'),
            color: ThemeToken.color('muted'),
            fontSize: 12,
            fontWeight: 800,
            lg: DartStyle(display: Display.none),
          ),
          onPressed: (_) => setState(() {
            _guideDrawerOpen = false;
            _apiDrawerOpen = false;
            _drawerOpen = true;
          }),
        ),
      ],
    );
  }

  FlintNode _themeToggle({bool withLabel = false}) {
    return StateSignalListener(flintTheme.mode, (mode) {
      final isDark = mode == FlintThemeMode.dark;
      final label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

      return Button(
        variant: ButtonVariant.outline,
        tone: Tone.neutral,
        props: {
          'aria-label': label,
          'title': label,
        },
        dartStyle: DartStyle(
          display: Display.inlineFlex,
          alignItems: AlignItems.center,
          justifyContent: JustifyContent.center,
          width: withLabel ? SizeValue.auto : 38,
          height: 38,
          padding: withLabel
              ? const EdgeInsets.symmetric(horizontal: 12, vertical: 0)
              : const EdgeInsets.all(0),
          radius: ThemeToken.radius('md'),
          border: Border.all(color: ThemeToken.color('line')),
          background: ThemeToken.color('panel'),
          color: ThemeToken.color('text'),
          gap: withLabel ? 8 : null,
          transition: StyleTransition.all(milliseconds: 160),
          hover: DartStyle(
            background: ThemeToken.color('panelStrong'),
            color: ThemeToken.color('primary'),
          ),
        ),
        onPressed: (_) => flintTheme.toggle(),
        children: [
          Icon(isDark ? Icons.sun : Icons.moon, size: 17),
          if (withLabel)
            Text.span(
              isDark ? 'Light mode' : 'Dark mode',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 800,
              ),
            ),
        ],
      );
    });
  }

  FlintNode _userBadge() {
    return Container(
      dartStyle: DartStyle(
        display: Display.none,
        alignItems: AlignItems.center,
        gap: 8,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
        radius: ThemeToken.radius('pill'),
        border: Border.all(color: Color.rgba(52, 211, 153, 0.34)),
        background: Color.rgba(52, 211, 153, 0.1),
        md: DartStyle(display: Display.flex),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 8,
            height: 8,
            radius: 9999,
            background: Color('#6ee7b7'),
          ),
        ),
        Text.span(
          _label,
          dartStyle: DartStyle(
            color: ThemeToken.color('primary'),
            fontSize: 12,
            fontWeight: 800,
          ),
        ),
      ],
    );
  }

  FlintNode _mobileDrawer() {
    return Container(
      dartStyle: DartStyle(
        position: Position.fixed,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
      ),
      children: [
        h(
          'button',
          props: {
            'type': 'button',
            'aria-label': 'Close navigation',
            'onClick': (_) => setState(() => _drawerOpen = false),
            'style': const {
              'position': 'absolute',
              'inset': '0',
              'display': 'block',
              'width': '100%',
              'height': '100%',
              'padding': '0',
              'margin': '0',
              'border': '0',
              'border-radius': '0',
              'background': 'rgba(2, 6, 23, 0.78)',
              'appearance': 'none',
              'cursor': 'pointer',
            },
          },
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            top: 12,
            right: 12,
            width: SizeValue('min(360px, calc(100% - 24px))'),
            padding: const EdgeInsets.all(18),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(71, 85, 105, 0.8)),
            background: ThemeToken.color('panel'),
            light: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 44,
                spread: -28,
                color: Color.rgba(15, 23, 42, 0.22),
              ),
            ),
            dark: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 54,
                spread: -24,
                color: Color.rgba(0, 0, 0, 0.58),
              ),
            ),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Text.span(
                  'Navigation',
                  dartStyle: DartStyle(
                    color: ThemeToken.color('text'),
                    fontSize: 14,
                    fontWeight: 900,
                  ),
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    _themeToggle(withLabel: true),
                    Button(
                      child: 'Close',
                      variant: ButtonVariant.outline,
                      tone: Tone.neutral,
                      dartStyle: DartStyle(
                        minWidth: 58,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 6,
                        ),
                        radius: ThemeToken.radius('md'),
                        border: Border.all(color: Color.rgba(51, 65, 85, 0.95)),
                        background: ThemeToken.color('panel'),
                        color: ThemeToken.color('muted'),
                        fontSize: 12,
                        fontWeight: 800,
                      ),
                      onPressed: (_) => setState(() => _drawerOpen = false),
                    ),
                  ],
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 6,
                margin: const EdgeInsets.only(top: 18),
              ),
              children: [
                if (_currentPillar == 'fullstack') ...[
                  Text.span(
                    'FLINT FULLSTACK',
                    dartStyle: const DartStyle(
                      fontSize: 11,
                      fontWeight: 800,
                      color: Color('#34d399'),
                      letterSpacing: 0.5,
                      margin: EdgeInsets.only(bottom: 4),
                    ),
                  ),
                  _drawerLink('/fullstack', 'Overview'),
                  _drawerLink('/fullstack#features', 'Features'),
                  _drawerLink('/fullstack/guides', 'Guides'),
                  _drawerLink('/fullstack/api', 'API Reference'),
                  _drawerLink('/fullstack/whats-new', "What's New"),
                  _drawerLink('/fullstack/changelog', 'Changelog'),
                  _drawerLink('/fullstack/examples', 'Examples'),
                  Container(
                    dartStyle: DartStyle(
                      height: 1,
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      background: ThemeToken.color('line'),
                    ),
                  ),
                  Text.span(
                    'ECOSYSTEM',
                    dartStyle: DartStyle(
                      fontSize: 11,
                      fontWeight: 800,
                      color: ThemeToken.color('muted'),
                      letterSpacing: 0.5,
                      margin: const EdgeInsets.only(bottom: 4),
                    ),
                  ),
                  _drawerLink('/', 'Ecosystem Overview'),
                  _drawerLink('/client', 'Client SDK'),
                  _drawerLink('/ai', 'AI Engine'),
                  _drawerLink('/hardware', 'Hardware & Robotics'),
                  _drawerLink('/blog', 'Blog'),
                  _drawerLink('/questions', 'Questions'),
                ] else if (_currentPillar == 'client') ...[
                  Text.span(
                    'FLINT CLIENT SDK',
                    dartStyle: const DartStyle(
                      fontSize: 11,
                      fontWeight: 800,
                      color: Color('#38bdf8'),
                      letterSpacing: 0.5,
                      margin: EdgeInsets.only(bottom: 4),
                    ),
                  ),
                  _drawerLink('/client', 'Overview'),
                  _drawerLink('/client#features', 'Features'),
                  _drawerLink('/client#caching', 'Caching'),
                  _drawerLink('/client#channels', 'Real-Time Channels'),
                  _drawerLink('https://pub.dev/packages/flint_client',
                      'pub.dev Package'),
                  Container(
                    dartStyle: DartStyle(
                      height: 1,
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      background: ThemeToken.color('line'),
                    ),
                  ),
                  _drawerLink('/', 'Ecosystem Overview'),
                  _drawerLink('/fullstack', 'Fullstack Framework'),
                  _drawerLink('/ai', 'AI Engine'),
                  _drawerLink('/hardware', 'Hardware & Robotics'),
                ] else if (_currentPillar == 'ai') ...[
                  Text.span(
                    'FLINT AI ENGINE',
                    dartStyle: const DartStyle(
                      fontSize: 11,
                      fontWeight: 800,
                      color: Color('#a78bfa'),
                      letterSpacing: 0.5,
                      margin: EdgeInsets.only(bottom: 4),
                    ),
                  ),
                  _drawerLink('/ai', 'Overview'),
                  _drawerLink('/ai#agents', 'Agents & Workflows'),
                  _drawerLink('/ai#tools', 'Tool Policies'),
                  _drawerLink('/ai#chat', 'Streaming Chat'),
                  _drawerLink(
                      'https://pub.dev/packages/flint_ai', 'pub.dev Package'),
                  Container(
                    dartStyle: DartStyle(
                      height: 1,
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      background: ThemeToken.color('line'),
                    ),
                  ),
                  _drawerLink('/', 'Ecosystem Overview'),
                  _drawerLink('/fullstack', 'Fullstack Framework'),
                  _drawerLink('/client', 'Client SDK'),
                  _drawerLink('/hardware', 'Hardware & Robotics'),
                ] else if (_currentPillar == 'hardware') ...[
                  Text.span(
                    'FLINT HARDWARE & ROBOTICS',
                    dartStyle: const DartStyle(
                      fontSize: 11,
                      fontWeight: 800,
                      color: Color('#f97316'),
                      letterSpacing: 0.5,
                      margin: EdgeInsets.only(bottom: 4),
                    ),
                  ),
                  _drawerLink('/hardware', 'Overview'),
                  _drawerLink('/hardware#sensors', 'Sensors & IMU'),
                  _drawerLink('/hardware#statemachine', 'State Machine'),
                  _drawerLink('/hardware#wokwi', 'Wokwi Simulator'),
                  _drawerLink('https://pub.dev/packages/flint_hardware',
                      'pub.dev Package'),
                  Container(
                    dartStyle: DartStyle(
                      height: 1,
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      background: ThemeToken.color('line'),
                    ),
                  ),
                  _drawerLink('/', 'Ecosystem Overview'),
                  _drawerLink('/fullstack', 'Fullstack Framework'),
                  _drawerLink('/client', 'Client SDK'),
                  _drawerLink('/ai', 'AI Engine'),
                ] else ...[
                  _drawerLink('/', 'Ecosystem'),
                  _drawerLink('/fullstack', 'Fullstack'),
                  _drawerLink('/client', 'Client'),
                  _drawerLink('/ai', 'AI'),
                  _drawerLink('/hardware', 'Hardware'),
                  _drawerLink('/examples', 'Examples'),
                  _drawerLink('/api', 'API'),
                  _drawerLink('/blog', 'Blog'),
                  _drawerLink('/questions', 'Questions'),
                  if (_canWrite) _drawerLink('/blog/write', 'Write Blog Post'),
                ],
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _guideDrawer() {
    return Container(
      dartStyle: DartStyle(
        position: Position.fixed,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        md: DartStyle(display: Display.none),
      ),
      children: [
        h(
          'button',
          props: {
            'type': 'button',
            'aria-label': 'Close guide navigation',
            'onClick': (_) => setState(() => _guideDrawerOpen = false),
            'style': const {
              'position': 'absolute',
              'inset': '0',
              'display': 'block',
              'width': '100%',
              'height': '100%',
              'padding': '0',
              'margin': '0',
              'border': '0',
              'border-radius': '0',
              'background': 'rgba(2, 6, 23, 0.78)',
              'appearance': 'none',
              'cursor': 'pointer',
            },
          },
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            top: 82,
            left: 16,
            right: 16,
            maxHeight: SizeValue('calc(100vh - 104px)'),
            overflow: Overflow.auto,
            padding: const EdgeInsets.all(0),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(71, 85, 105, 0.8)),
            background: ThemeToken.color('panel'),
            light: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 44,
                spread: -28,
                color: Color.rgba(15, 23, 42, 0.22),
              ),
            ),
            dark: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 54,
                spread: -24,
                color: Color.rgba(0, 0, 0, 0.58),
              ),
            ),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
                padding: EdgeInsets.all(14),
                borderBottom:
                    Border(color: Color.rgba(30, 41, 59, 1), width: 1),
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Icon(Icons.book, size: 16, color: const Color('#a7f3d0')),
                    Text.span(
                      'Guides',
                      dartStyle: DartStyle(
                        color: ThemeToken.color('text'),
                        fontSize: 14,
                        fontWeight: 900,
                      ),
                    ),
                  ],
                ),
                Button(
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  props: const {'aria-label': 'Close guide navigation'},
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                    width: 34,
                    height: 34,
                    padding: const EdgeInsets.all(0),
                    radius: ThemeToken.radius('md'),
                    border: Border.all(color: Color.rgba(51, 65, 85, 0.95)),
                    background: ThemeToken.color('panel'),
                    color: ThemeToken.color('muted'),
                  ),
                  onPressed: (_) => setState(() => _guideDrawerOpen = false),
                  child: Icon(Icons.x, size: 16),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                padding: EdgeInsets.all(14),
              ),
              children: [
                GuidesSidebar(active: _activeGuide, mobileDrawer: true),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _apiDrawer() {
    return Container(
      dartStyle: DartStyle(
        position: Position.fixed,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        md: DartStyle(display: Display.none),
      ),
      children: [
        h(
          'button',
          props: {
            'type': 'button',
            'aria-label': 'Close API navigation',
            'onClick': (_) => setState(() => _apiDrawerOpen = false),
            'style': const {
              'position': 'absolute',
              'inset': '0',
              'display': 'block',
              'width': '100%',
              'height': '100%',
              'padding': '0',
              'margin': '0',
              'border': '0',
              'border-radius': '0',
              'background': 'rgba(2, 6, 23, 0.78)',
              'appearance': 'none',
              'cursor': 'pointer',
            },
          },
        ),
        Container(
          dartStyle: DartStyle(
            position: Position.absolute,
            top: 82,
            left: 16,
            right: 16,
            maxHeight: SizeValue('calc(100vh - 104px)'),
            overflow: Overflow.auto,
            padding: const EdgeInsets.all(0),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(71, 85, 105, 0.8)),
            background: ThemeToken.color('panel'),
            light: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 44,
                spread: -28,
                color: Color.rgba(15, 23, 42, 0.22),
              ),
            ),
            dark: DartStyle(
              shadow: Shadow(
                y: 18,
                blur: 54,
                spread: -24,
                color: Color.rgba(0, 0, 0, 0.58),
              ),
            ),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
                padding: EdgeInsets.all(14),
                borderBottom:
                    Border(color: Color.rgba(30, 41, 59, 1), width: 1),
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Icon(
                      Icons.document,
                      size: 16,
                      color: const Color('#bae6fd'),
                    ),
                    Text.span(
                      'API',
                      dartStyle: DartStyle(
                        color: ThemeToken.color('text'),
                        fontSize: 14,
                        fontWeight: 900,
                      ),
                    ),
                  ],
                ),
                Button(
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  props: const {'aria-label': 'Close API navigation'},
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                    width: 34,
                    height: 34,
                    padding: const EdgeInsets.all(0),
                    radius: ThemeToken.radius('md'),
                    border: Border.all(color: Color.rgba(51, 65, 85, 0.95)),
                    background: ThemeToken.color('panel'),
                    color: ThemeToken.color('muted'),
                  ),
                  onPressed: (_) => setState(() => _apiDrawerOpen = false),
                  child: Icon(Icons.x, size: 16),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                padding: EdgeInsets.all(14),
              ),
              children: [
                ApiSidebar(active: _activeApi, mobileDrawer: true),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _drawerLink(String href, String label) {
    return Link(
      href: href,
      child: label,
      dartStyle: DartStyle(
        display: Display.block,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
        radius: ThemeToken.radius('md'),
        color: ThemeToken.color('muted'),
        fontSize: 14,
        fontWeight: 800,
        background: ThemeToken.color('panel'),
        hover: DartStyle(
          color: ThemeToken.color('text'),
          background: Color.rgba(255, 255, 255, 0.07),
        ),
      ),
    );
  }
}
