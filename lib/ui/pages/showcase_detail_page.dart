import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class ShowcaseDetailPage extends Component {
  final Map<String, dynamic> props;

  ShowcaseDetailPage(this.props);

  Map<String, dynamic> get _project =>
      (props['project'] as Map?)?.cast<String, dynamic>() ?? const {};

  @override
  View build() {
    final project = _project;
    final title = project['title']?.toString() ?? 'Flint build';
    final images = _list(project['images']);
    final links = _mapList(project['links']);
    final builtWith = project['built_with']?.toString() ?? '';

    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1050,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 34),
          display: Display.grid,
          gap: 24,
          overflow: Overflow.hidden,
          md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48)),
        ),
        children: [
          _hero(project, title, builtWith, links),
          if (images.isNotEmpty) _imageGrid(title, images),
          _contentGrid(project, links),
        ],
      ),
    );
  }

  View _hero(
    Map<String, dynamic> project,
    String title,
    String builtWith,
    List<Map<String, dynamic>> links,
  ) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 18,
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
            gap: 10,
          ),
          children: [
            _pill('Built with Flint'),
            if (builtWith.isNotEmpty) _pill(builtWith),
          ],
        ),
        Text.h1(
          title,
          dartStyle: DartStyle(
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.12,
            color: ThemeToken.color('text'),
            margin: EdgeInsets.all(0),
            md: DartStyle(fontSize: 44),
          ),
        ),
        Text.p(
          project['description']?.toString() ?? '',
          dartStyle: DartStyle(
            maxWidth: 780,
            fontSize: 16,
            lineHeight: 1.75,
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
            gap: 14,
          ),
          children: [
            Text.span(
              'By ${project['author']?.toString() ?? 'Flint developer'}',
              dartStyle:
                  DartStyle(fontSize: 13, color: ThemeToken.color('muted')),
            ),
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                gap: 10,
              ),
              children: [
                for (final link in links) _externalLink(link),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _imageGrid(String title, List<String> images) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: '1fr',
        gap: 14,
        md: DartStyle(gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'),
      ),
      children: [
        for (var i = 0; i < images.length; i++) _image(title, images[i], i),
      ],
    );
  }

  View _image(String title, String src, int index) {
    return Container(
      dartStyle: DartStyle(
        overflow: Overflow.hidden,
        minHeight: 210,
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        h(
          'img',
          props: {
            'src': src,
            'alt': '$title screenshot ${index + 1}',
            'loading': 'lazy',
            'style': const {
              'width': '100%',
              'height': '100%',
              'min-height': '210px',
              'object-fit': 'cover',
              'display': 'block',
            },
          },
        ),
      ],
    );
  }

  View _contentGrid(
    Map<String, dynamic> project,
    List<Map<String, dynamic>> links,
  ) {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.start,
        gap: 18,
        md: DartStyle(flexDirection: FlexDirection.row),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            flex: Flex.fill(),
            display: Display.grid,
            gap: 14,
            padding: EdgeInsets.all(22),
            radius: 18,
            border: Border(color: ThemeToken.color('line'), width: 1),
            background: ThemeToken.color('panel'),
          ),
          children: [
            Text.h2(
              'What the app does',
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 22,
                margin: EdgeInsets.all(0),
              ),
            ),
            Text.p(
              project['what_it_does']?.toString() ?? '',
              dartStyle: DartStyle(
                color: ThemeToken.color('muted'),
                fontSize: 15,
                lineHeight: 1.75,
                margin: EdgeInsets.all(0),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            width: SizeValue.percent(100),
            display: Display.grid,
            gap: 12,
            padding: EdgeInsets.all(18),
            radius: 16,
            border: Border(color: ThemeToken.color('line'), width: 1),
            background: ThemeToken.color('panelStrong'),
            md: DartStyle(width: SizeValue('min(300px, 100%)')),
          ),
          children: [
            Text.h2(
              'Project links',
              dartStyle: DartStyle(
                color: ThemeToken.color('text'),
                fontSize: 16,
                margin: EdgeInsets.all(0),
              ),
            ),
            if (links.isEmpty)
              Text.p(
                'No external links were added.',
                dartStyle: DartStyle(
                  color: ThemeToken.color('muted'),
                  fontSize: 13,
                  margin: EdgeInsets.all(0),
                ),
              )
            else
              for (final link in links) _sideLink(link),
            Link(
              href: '/showcase',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 9),
                radius: 10,
                border:
                    Border(color: Color.rgba(125, 211, 252, 0.32), width: 1),
                background: Color.rgba(14, 165, 233, 0.09),
              ),
              children: [
                Icon(Icons.arrowLeft, size: 15),
                Text.span('Back to showcase'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _externalLink(Map<String, dynamic> link) {
    return Link(
      href: link['url']?.toString() ?? '#',
      target: '_blank',
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 8,
        padding: EdgeInsets.symmetric(horizontal: 13, vertical: 9),
        radius: 10,
        border: Border(color: Color.rgba(52, 211, 153, 0.36), width: 1),
        background: Color.rgba(52, 211, 153, 0.1),
      ),
      children: [
        Icon(Icons.link, size: 15),
        Text.span(link['label']?.toString() ?? 'Open link'),
      ],
    );
  }

  View _sideLink(Map<String, dynamic> link) {
    return _externalLink(link);
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
