import 'package:flint_ui/flint_ui.dart';

import '../components/api/sidebar.dart';
import '../components/guides/sidebar.dart';

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
        borderBottom: Border(color: Color.rgba(51, 65, 85, 0.74), width: 1),
        background: Background.layers([
          Gradient.linear(
            90,
            const [
              GradientStop(Color.rgba(56, 189, 248, 0.08)),
              GradientStop(Color.rgba(52, 211, 153, 0.08)),
              GradientStop(Color.rgba(5, 7, 13, 0.94)),
            ],
          ),
          Color.rgba(5, 7, 13, 0.94),
        ]),
        backdropFilter: StyleFilter.blur(18),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: ThemeToken.space('pageX'),
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.symmetric(vertical: 14),
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

  FlintNode _brandCluster() {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 10,
        minWidth: 0,
      ),
      children: [
        _logo(),
        if (_showGuideMenu) _guideToggle(),
        if (_showApiMenu) _apiToggle(),
      ],
    );
  }

  FlintNode _logo() {
    return Link(
      href: '/',
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
            Text.span(
              'F',
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 18,
                fontWeight: 900,
                lineHeight: 1,
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 2),
          children: [
            Text.span(
              'Flint Dart',
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 15,
                fontWeight: 800,
              ),
            ),
            Text.span(
              'Docs',
              dartStyle: DartStyle(
                color: ThemeToken.color('muted'),
                fontSize: 11,
                fontWeight: 700,
              ),
            ),
          ],
        ),
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
            : Color.rgba(15, 23, 42, 0.72),
        color: const Color('#a7f3d0'),
        md: const DartStyle(display: Display.none),
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
            : Color.rgba(15, 23, 42, 0.72),
        color: const Color('#bae6fd'),
        md: const DartStyle(display: Display.none),
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
    return Row(
      dartStyle: const DartStyle(
        display: Display.none,
        alignItems: AlignItems.center,
        gap: 6,
        lg: DartStyle(display: Display.flex),
      ),
      children: [
        _navLink('/#features', 'Features'),
        _navLink('/guides', 'Guides'),
        _navLink('/ui', 'UI'),
        _navLink('/client', 'Client'),
        _navLink('/api', 'API'),
        _navLink('/blog', 'Blog'),
        _navLink('/questions', 'Questions'),
        _navLink('/whats-new', "What's New"),
        _navLink('/changelog', 'Changelog'),
      ],
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
      dartStyle: const DartStyle(
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
              color: Color('#bbf7d0'),
              fontSize: 13,
              fontWeight: 800,
              md: const DartStyle(display: Display.inlineFlex),
            ),
          ),
        if (_isAuth) _userBadge(),
        Link(
          href: 'https://github.com/flint-dart/flint_dart',
          target: '_blank',
          child: 'GitHub',
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            radius: ThemeToken.radius('md'),
            border: Border.all(color: Color.rgba(56, 189, 248, 0.32)),
            background: Color.rgba(14, 165, 233, 0.1),
            color: Color('#bae6fd'),
            fontSize: 13,
            fontWeight: 800,
            transition: StyleTransition.all(milliseconds: 160),
            hover: const DartStyle(
              background: Color.rgba(14, 165, 233, 0.18),
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
            background: Color.rgba(15, 23, 42, 0.72),
            color: Color('#cbd5e1'),
            fontSize: 12,
            fontWeight: 800,
            lg: const DartStyle(display: Display.none),
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
        md: const DartStyle(display: Display.flex),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: 8,
            height: 8,
            radius: 9999,
            background: Color('#6ee7b7'),
          ),
        ),
        Text.span(
          _label,
          dartStyle: const DartStyle(
            color: Color('#d1fae5'),
            fontSize: 12,
            fontWeight: 800,
          ),
        ),
      ],
    );
  }

  FlintNode _mobileDrawer() {
    return Container(
      dartStyle: const DartStyle(
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
            background: Color.rgba(5, 7, 13, 0.98),
            shadow: Shadow(
              y: 18,
              blur: 54,
              spread: -24,
              color: Color.rgba(0, 0, 0, 0.58),
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
                Text.span(
                  'Navigation',
                  dartStyle: DartStyle(
                    color: ThemeToken.color('text'),
                    fontSize: 14,
                    fontWeight: 900,
                  ),
                ),
                Button(
                  child: 'Close',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  dartStyle: DartStyle(
                    minWidth: 58,
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                    radius: ThemeToken.radius('md'),
                    border: Border.all(color: Color.rgba(51, 65, 85, 0.95)),
                    background: Color.rgba(15, 23, 42, 0.76),
                    color: ThemeToken.color('muted'),
                    fontSize: 12,
                    fontWeight: 800,
                  ),
                  onPressed: (_) => setState(() => _drawerOpen = false),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 6,
                margin: EdgeInsets.only(top: 18),
              ),
              children: [
                _drawerLink('/#features', 'Features'),
                _drawerLink('/guides', 'Guides'),
                _drawerLink('/ui', 'UI'),
                _drawerLink('/client', 'Client'),
                _drawerLink('/api', 'API'),
                _drawerLink('/blog', 'Blog'),
                _drawerLink('/questions', 'Questions'),
                _drawerLink('/whats-new', "What's New"),
                _drawerLink('/changelog', 'Changelog'),
                if (_canWrite) _drawerLink('/blog/write', 'Write Blog Post'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  FlintNode _guideDrawer() {
    return Container(
      dartStyle: const DartStyle(
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
            background: Color.rgba(5, 7, 13, 0.98),
            shadow: Shadow(
              y: 18,
              blur: 54,
              spread: -24,
              color: Color.rgba(0, 0, 0, 0.58),
            ),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
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
                  dartStyle: const DartStyle(
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
                    background: Color.rgba(15, 23, 42, 0.76),
                    color: ThemeToken.color('muted'),
                  ),
                  onPressed: (_) => setState(() => _guideDrawerOpen = false),
                  child: Icon(Icons.x, size: 16),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
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
      dartStyle: const DartStyle(
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
            background: Color.rgba(5, 7, 13, 0.98),
            shadow: Shadow(
              y: 18,
              blur: 54,
              spread: -24,
              color: Color.rgba(0, 0, 0, 0.58),
            ),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
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
                  dartStyle: const DartStyle(
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
                    background: Color.rgba(15, 23, 42, 0.76),
                    color: ThemeToken.color('muted'),
                  ),
                  onPressed: (_) => setState(() => _apiDrawerOpen = false),
                  child: Icon(Icons.x, size: 16),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
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
        background: Color.rgba(15, 23, 42, 0.54),
        hover: DartStyle(
          color: ThemeToken.color('text'),
          background: Color.rgba(255, 255, 255, 0.07),
        ),
      ),
    );
  }
}
