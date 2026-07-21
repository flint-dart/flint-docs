import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class UiDocsPage extends Component {
  UiDocsPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1040,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 14, vertical: 34),
          display: Display.grid,
          gap: 22,
          md: DartStyle(
            padding: EdgeInsets.symmetric(horizontal: 18, vertical: 48),
            gap: 28,
          ),
        ),
        children: [
          _hero(),
          _quickGrid(),
          _articleShell(),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 26,
        padding: const EdgeInsets.all(24),
        radius: 24,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(52, 211, 153, 0.18), 0),
              GradientStop(Color.rgba(14, 165, 233, 0.12), 52),
              GradientStop(ThemeToken.color('panel'), 100),
            ],
          ),
          ThemeToken.color('panel'),
        ]),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 24,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 680,
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
                    _pill('Flint UI'),
                    _pill('Dart components'),
                  ],
                ),
                Text.h1(
                  'Build browser UI with Dart components.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 34,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: ThemeToken.color('text'),
                    md: DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'Flint UI keeps components, state, events, styling, server props, and trusted HTML rendering inside the Dart ecosystem.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    maxWidth: 660,
                    fontSize: 16,
                    lineHeight: 1.72,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 12,
                width: SizeValue.percent(100),
                minWidth: 0,
                md: DartStyle(width: 290),
              ),
              children: [
                _previewCard(),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            _heroLink('Components', '#a-component-is-a-dart-class'),
            _heroLink('State', '#state-updates-with-setstate'),
            _heroLink('HtmlContent', '#render-trusted-html'),
          ],
        ),
      ],
    );
  }

  View _previewCard() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 13,
        padding: const EdgeInsets.all(18),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.sparkles, size: 16, color: ThemeToken.color('primary')),
            Text.span(
              'Pure Dart UI',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: ThemeToken.color('primary'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 8,
            padding: const EdgeInsets.all(14),
            radius: 12,
            background: ThemeToken.color('panelStrong'),
            border: Border(color: ThemeToken.color('line'), width: 1),
          ),
          children: [
            Text.span(
              'class Counter extends Component',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.span(
              'setState(() => count++)',
              dartStyle: DartStyle(
                fontSize: 12,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Text.p(
          'The public API teaches Component, View, DartStyle, and state without exposing internal nodes.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _quickGrid() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        gridTemplateColumns: GridTemplateColumns.one,
        md: DartStyle(
          gridTemplateColumns: GridTemplateColumns.autoFit(240),
        ),
      ),
      children: [
        _featureCard(
          Icons.box,
          'Components',
          'Build screens from Dart classes with a simple View build method.',
          const Color('#a7f3d0'),
        ),
        _featureCard(
          Icons.activity,
          'State',
          'Preserve component state and receive new constructor values with updateFrom.',
          const Color('#7dd3fc'),
        ),
        _featureCard(
          Icons.code,
          'DartStyle',
          'Keep layout, spacing, colors, and responsive rules beside the component.',
          const Color('#fbbf24'),
        ),
        _featureCard(
          Icons.clipboard,
          'HtmlContent',
          'Render trusted Markdown HTML without manual document selectors in app code.',
          const Color('#c4b5fd'),
        ),
      ],
    );
  }

  View _featureCard(IconData icon, String title, String body, Color color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(18),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Icon(icon, size: 20, color: color),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 17,
            lineHeight: 1.25,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.65,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _articleShell() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 20,
        width: SizeValue.percent(100),
        maxWidth: 880,
        margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: const EdgeInsets.all(18),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        overflow: Overflow.hidden,
        md: DartStyle(padding: EdgeInsets.all(26)),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: DartStyle(display: Display.grid, gap: 5),
              children: [
                Text.h2(
                  'UI documentation',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 24,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.p(
                  'Components, props, state, styling, page registration, client requests, and trusted HTML.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 13,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            Link(
              href: '#a-component-is-a-dart-class',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 7,
                padding: EdgeInsets.symmetric(horizontal: 13, vertical: 9),
                radius: 10,
                border: Border(color: Color.rgba(52, 211, 153, 0.36), width: 1),
                background: Color.rgba(52, 211, 153, 0.1),
              ),
              children: [
                Text.span(
                  'Start reading',
                  dartStyle: DartStyle(
                    fontSize: 12,
                    fontWeight: 800,
                    color: ThemeToken.color('primary'),
                  ),
                ),
                Icon(Icons.arrowRight,
                    size: 14, color: ThemeToken.color('primary')),
              ],
            ),
          ],
        ),
        if (_contentHtml.isEmpty)
          Text.p(
            'The Flint UI guide is being written.',
            dartStyle: DartStyle(color: ThemeToken.color('muted')),
          )
        else
          HtmlContent(
            id: 'ui-content',
            html: _contentHtml,
            className: 'api-md markdown-body',
            props: const {
              'style': {
                'min-width': '0',
                'max-width': '100%',
                'overflow-wrap': 'break-word',
              },
            },
          ),
      ],
    );
  }

  View _heroLink(String label, String href) {
    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        radius: 10,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        color: ThemeToken.color('muted'),
        fontSize: 13,
        fontWeight: 800,
      ),
      child: label,
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue('max-content'),
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(5, 150, 105, 0.28), width: 1),
        background: Color.rgba(5, 150, 105, 0.08),
        dark: const DartStyle(
          border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
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
}
