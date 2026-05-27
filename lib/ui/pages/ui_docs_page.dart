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
        dartStyle: const DartStyle(
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
        border: const Border(color: Color.rgba(30, 41, 59, 0.95), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(52, 211, 153, 0.18), 0),
              GradientStop(Color.rgba(14, 165, 233, 0.12), 52),
              GradientStop(Color.rgba(15, 23, 42, 0.84), 100),
            ],
          ),
          const Color.rgba(15, 23, 42, 0.74),
        ]),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 24,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 680,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 10,
                  ),
                  children: [
                    _pill('Flint UI', const Color('#a7f3d0')),
                    _pill('Dart components', const Color('#bae6fd')),
                  ],
                ),
                Text.h1(
                  'Build browser UI with Dart components.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 34,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: Colors.white,
                    md: DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'Flint UI keeps components, state, events, styling, server props, and trusted HTML rendering inside the Dart ecosystem.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    maxWidth: 660,
                    fontSize: 16,
                    lineHeight: 1.72,
                    color: Color('#cbd5e1'),
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
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
          dartStyle: const DartStyle(
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
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 13,
        padding: EdgeInsets.all(18),
        radius: 16,
        border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
        background: Color.rgba(2, 6, 23, 0.48),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.sparkles, size: 16, color: const Color('#a7f3d0')),
            Text.span(
              'Pure Dart UI',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#a7f3d0'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 8,
            padding: EdgeInsets.all(14),
            radius: 12,
            background: Color.rgba(2, 6, 23, 0.88),
            border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
          ),
          children: [
            Text.span(
              'class Counter extends Component',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#dbeafe'),
              ),
            ),
            Text.span(
              'setState(() => count++)',
              dartStyle: const DartStyle(
                fontSize: 12,
                color: Color('#94a3b8'),
              ),
            ),
          ],
        ),
        Text.p(
          'The public API teaches Component, View, DartStyle, and state without exposing internal nodes.',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.6,
            color: Color('#94a3b8'),
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
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(18),
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
      ),
      children: [
        Icon(icon, size: 20, color: color),
        Text.h3(
          title,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 17,
            lineHeight: 1.25,
            color: Colors.white,
          ),
        ),
        Text.p(
          body,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.65,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }

  View _articleShell() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 20,
        width: SizeValue.percent(100),
        maxWidth: 880,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.all(18),
        radius: 20,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.54),
        overflow: Overflow.hidden,
        md: DartStyle(padding: EdgeInsets.all(26)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(display: Display.grid, gap: 5),
              children: [
                Text.h2(
                  'UI documentation',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 24,
                    color: Colors.white,
                  ),
                ),
                Text.p(
                  'Components, props, state, styling, page registration, client requests, and trusted HTML.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 13,
                    color: Color('#94a3b8'),
                  ),
                ),
              ],
            ),
            Link(
              href: '#a-component-is-a-dart-class',
              dartStyle: const DartStyle(
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
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    fontWeight: 800,
                    color: Color('#a7f3d0'),
                  ),
                ),
                Icon(Icons.arrowRight, size: 14, color: const Color('#a7f3d0')),
              ],
            ),
          ],
        ),
        if (_contentHtml.isEmpty)
          Text.p(
            'The Flint UI guide is being written.',
            dartStyle: const DartStyle(color: Color('#94a3b8')),
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
      dartStyle: const DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        padding: EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        radius: 10,
        border: Border(color: Color.rgba(51, 65, 85, 0.92), width: 1),
        background: Color.rgba(2, 6, 23, 0.34),
        color: Color('#cbd5e1'),
        fontSize: 13,
        fontWeight: 800,
      ),
      child: label,
    );
  }

  View _pill(String label, Color color) {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue('max-content'),
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
        background: Color.rgba(52, 211, 153, 0.08),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: color,
          ),
        ),
      ],
    );
  }
}
