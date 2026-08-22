import 'package:flint_dart/ui.dart';

import '../shared/page_shell.dart';

class ShowcasePage extends Component {
  final Map<String, dynamic> props;

  ShowcasePage(this.props);

  List<Map<String, dynamic>> get _projects {
    final raw = props['projects'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((project) => project.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;

  @override
  View build() {
    final projects = _projects;
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 34),
          display: Display.grid,
          gap: 28,
          overflow: Overflow.hidden,
          md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48)),
        ),
        children: [
          _hero(projects.length),
          if (projects.isEmpty) _emptyState() else _projectGrid(projects),
        ],
      ),
    );
  }

  View _hero(int count) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 24,
        padding: EdgeInsets.all(24),
        radius: 24,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        md: DartStyle(padding: EdgeInsets.all(40)),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 18,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 12,
                maxWidth: 760,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 10,
                  ),
                  children: [
                    _pill('Built with Flint'),
                    _pill('Community apps'),
                  ],
                ),
                Text.h1(
                  'See what developers are shipping with Flint',
                  dartStyle: DartStyle(
                    fontSize: 32,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: ThemeToken.color('text'),
                    margin: EdgeInsets.all(0),
                    md: DartStyle(fontSize: 43),
                  ),
                ),
                Text.p(
                  'A living gallery of dashboards, SaaS products, tools, portals, and backend-first fullstack apps built with pure Dart, Flint Dart, and Flint UI.',
                  dartStyle: DartStyle(
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: ThemeToken.color('muted'),
                    margin: EdgeInsets.all(0),
                  ),
                ),
              ],
            ),
            Link(
              href: _isAuthenticated
                  ? '/showcase/submit'
                  : '/showcase/submit?mode=register',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                radius: 10,
                border: Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
                background: Color.rgba(52, 211, 153, 0.12),
              ),
              children: [
                Icon(Icons.rocket, size: 16),
                Text.span(
                  _isAuthenticated ? 'Submit your build' : 'Create and submit',
                  dartStyle: DartStyle(
                    fontSize: 13,
                    fontWeight: 800,
                    color: ThemeToken.color('primary'),
                  ),
                ),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 12,
          ),
          children: [
            _statCard('$count', 'Community builds'),
            _statCard('3', 'Images per build'),
            _statCard('2', 'Links per build'),
          ],
        ),
      ],
    );
  }

  View _projectGrid(List<Map<String, dynamic>> projects) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: '1fr',
        gap: 18,
        md: DartStyle(gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'),
        lg: DartStyle(gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'),
      ),
      children: [
        for (final project in projects) _projectCard(project),
      ],
    );
  }

  View _projectCard(Map<String, dynamic> project) {
    final title = project['title']?.toString() ?? 'Untitled build';
    final href = project['href']?.toString() ?? '/showcase';
    final excerpt = project['excerpt']?.toString() ?? '';
    final builtWith = project['built_with']?.toString() ?? '';
    final author = project['author']?.toString() ?? 'Flint developer';
    final date = project['date']?.toString() ?? '';
    final images = _list(project['images']);
    final links = _mapList(project['links']);

    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        minWidth: 0,
        overflow: Overflow.hidden,
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        _imagePanel(title, images),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 12,
            padding: EdgeInsets.all(18),
          ),
          children: [
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                gap: 8,
              ),
              children: [
                _pill(builtWith.isEmpty ? 'Flint app' : builtWith),
                if (images.length > 1) _pill('${images.length} images'),
              ],
            ),
            Text.h2(
              title,
              dartStyle: DartStyle(
                fontSize: 20,
                lineHeight: 1.3,
                fontWeight: 800,
                color: ThemeToken.color('text'),
                margin: EdgeInsets.all(0),
              ),
            ),
            if (excerpt.isNotEmpty)
              Text.p(
                excerpt,
                dartStyle: DartStyle(
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: ThemeToken.color('muted'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Text.span(
                  date.isEmpty ? 'By $author' : 'By $author · $date',
                  dartStyle:
                      DartStyle(fontSize: 12, color: ThemeToken.color('muted')),
                ),
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                  ),
                  children: [
                    Text.span(
                      links.isEmpty ? 'View build' : '${links.length} links',
                      dartStyle: DartStyle(
                        fontSize: 12,
                        fontWeight: 800,
                        color: ThemeToken.color('primary'),
                      ),
                    ),
                    Icon(Icons.arrowRight, size: 14),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _imagePanel(String title, List<String> images) {
    if (images.isEmpty) {
      return Container(
        dartStyle: DartStyle(
          display: Display.flex,
          alignItems: AlignItems.center,
          justifyContent: JustifyContent.center,
          background: ThemeToken.color('panelStrong'),
        ),
        children: [
          Icon(Icons.layers, size: 34, color: const Color('#67e8f9')),
        ],
      );
    }

    return h(
      'img',
      props: {
        'src': images.first,
        'alt': title,
        'loading': 'lazy',
        'style': const {
          'width': '100%',
          'height': '100%',
          'object-fit': 'cover',
          'display': 'block',
          'background': '#020617',
        },
      },
    );
  }

  View _emptyState() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(28),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Text.h2(
          'No builds submitted yet',
          dartStyle: DartStyle(
            fontSize: 22,
            fontWeight: 800,
            color: ThemeToken.color('text'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          'Be the first developer to show what Flint can do in production.',
          dartStyle: DartStyle(
            color: ThemeToken.color('muted'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Link(
          href: '/showcase/submit',
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            width: SizeValue('max-content'),
            alignItems: AlignItems.center,
            gap: 8,
            padding: EdgeInsets.symmetric(horizontal: 14, vertical: 9),
            radius: 10,
            background: Color.rgba(52, 211, 153, 0.12),
            border: Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
          ),
          children: [
            Icon(Icons.plus, size: 15),
            Text.span('Submit a build'),
          ],
        ),
      ],
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(5, 150, 105, 0.24), width: 1),
        background: Color.rgba(5, 150, 105, 0.08),
        dark: const DartStyle(
          border: Border(color: Color.rgba(52, 211, 153, 0.24), width: 1),
          background: Color.rgba(52, 211, 153, 0.08),
        ),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: ThemeToken.color('primary'),
          ),
        ),
      ],
    );
  }

  View _statCard(String value, String label) {
    return Container(
      dartStyle: DartStyle(
        minWidth: 132,
        flex: '1 1 132px',
        padding: EdgeInsets.all(14),
        radius: 14,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        Text.p(
          value,
          dartStyle: DartStyle(
            fontSize: 22,
            fontWeight: 800,
            color: ThemeToken.color('text'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          label,
          dartStyle: DartStyle(
            fontSize: 12,
            color: ThemeToken.color('muted'),
            margin: EdgeInsets.only(top: 2, bottom: 0),
          ),
        ),
      ],
    );
  }

  List<String> _list(Object? raw) {
    if (raw is List) return raw.map((value) => value.toString()).toList();
    return const [];
  }

  List<Map<String, dynamic>> _mapList(Object? raw) {
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((item) => item.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }
}
