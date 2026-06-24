import 'package:flint_ui/flint_ui.dart';

class Footer extends Component {
  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        borderTop: Border(color: Color.rgba(30, 41, 59, 0.72), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(8, 47, 73, 0.2), 0),
              GradientStop(Color.rgba(5, 7, 13, 0.98), 48),
              GradientStop(Color.rgba(20, 83, 45, 0.16), 100),
            ],
          ),
          Color.rgba(5, 7, 13, 0.98),
        ]),
        padding: EdgeInsets.only(top: 48, bottom: 0),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 28,
                padding: EdgeInsets.all(22),
                border: Border(color: Color.rgba(56, 189, 248, 0.16), width: 1),
                background: Color.rgba(2, 6, 23, 0.36),
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    width: SizeValue.percent(100),
                    maxWidth: 1152,
                    margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
                  ),
                  children: [
                    Row(
                      dartStyle: const DartStyle(
                        display: Display.flex,
                        flexWrap: FlexWrap.wrap,
                        justifyContent: JustifyContent.between,
                        gap: 34,
                      ),
                      children: [
                        _brand(),
                        _linkColumn(
                          'Product',
                          [
                            ('/guides', 'Guides'),
                            ('/ui', 'UI'),
                            ('/api', 'API'),
                            ('/examples', 'Examples'),
                            ('/client', 'Client'),
                            ('/ai', 'AI'),
                            ('/dart', 'Dart lessons'),
                          ],
                        ),
                        _linkColumn(
                          'Updates',
                          [
                            ('/whats-new', "What's New"),
                            ('/changelog', 'Changelog'),
                            ('/questions', 'Questions'),
                            ('/blog', 'Blog'),
                          ],
                        ),
                        _linkColumn(
                          'Community',
                          [
                            ('/showcase', 'Built with Flint'),
                            ('/showcase/submit', 'Submit a build'),
                            (
                              'https://github.com/flint-dart/flint_dart/issues',
                              'Issues'
                            ),
                            (
                              'https://github.com/flint-dart/flint_dart/discussions',
                              'Discussions'
                            ),
                            (
                              'https://github.com/flint-dart/flint_dart/pulls',
                              'Pull requests'
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
                Row(
                  dartStyle: const DartStyle(
                    width: SizeValue.percent(100),
                    maxWidth: 1152,
                    margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.between,
                    gap: 12,
                    padding: EdgeInsets.only(top: 22),
                    border: Border(
                      color: Color.rgba(30, 41, 59, 0.72),
                      width: 1,
                    ),
                  ),
                  children: [
                    Text.span(
                      'Copyright 2024 Flint Dart. Maintained by Eulogia Technologies.',
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        color: Color('#64748b'),
                      ),
                    ),
                    Row(
                      dartStyle: const DartStyle(
                        display: Display.flex,
                        flexWrap: FlexWrap.wrap,
                        alignItems: AlignItems.center,
                        gap: 8,
                      ),
                      children: [
                        _pill('v 1.1.14'),
                        _pill('MIT License'),
                        _pill('Built with Dart'),
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

  View _brand() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        minWidth: 280,
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
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
                radius: 8,
                border: Border(color: Color.rgba(56, 189, 248, 0.34), width: 1),
                background: Background.layers([
                  Gradient.linear(
                    135,
                    [
                      GradientStop(Color.rgba(56, 189, 248, 0.24), 0),
                      GradientStop(Color.rgba(52, 211, 153, 0.18), 100),
                    ],
                  ),
                  Color.rgba(15, 23, 42, 0.86),
                ]),
              ),
              children: [
                Text.span(
                  'F',
                  dartStyle: const DartStyle(
                    color: Colors.white,
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
                  dartStyle: const DartStyle(
                    fontSize: 16,
                    fontWeight: 900,
                    color: Colors.white,
                  ),
                ),
                Text.span(
                  'Backend framework and Dart UI docs',
                  dartStyle: const DartStyle(
                    fontSize: 11,
                    fontWeight: 700,
                    color: Color('#94a3b8'),
                  ),
                ),
              ],
            ),
          ],
        ),
        Text.p(
          'Build routes, controllers, APIs, docs, and browser UI from one Dart-shaped stack.',
          dartStyle: const DartStyle(
            maxWidth: 390,
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: Color('#94a3b8'),
          ),
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 8,
          ),
          children: [
            _pill('Controllers'),
            _pill('OpenAPI'),
            _pill('Flint UI'),
          ],
        ),
      ],
    );
  }

  View _linkColumn(String title, List<(String, String)> links) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 9,
        minWidth: 150,
      ),
      children: [
        Text.span(
          title,
          dartStyle: const DartStyle(
            display: Display.block,
            margin: EdgeInsets.only(bottom: 3),
            fontSize: 11,
            fontWeight: 900,
            color: Color('#67e8f9'),
          ),
        ),
        for (final (href, label) in links)
          Link(
            href: href,
            child: label,
            dartStyle: const DartStyle(
              display: Display.block,
              fontSize: 13,
              color: Color('#a8b3c5'),
            ),
          ),
      ],
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 9999,
        border: Border(color: Color.rgba(51, 65, 85, 0.76), width: 1),
        background: Color.rgba(15, 23, 42, 0.7),
      ),
      children: [
        Text.span(
          label,
          dartStyle: const DartStyle(
            fontSize: 11,
            fontWeight: 700,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }
}
