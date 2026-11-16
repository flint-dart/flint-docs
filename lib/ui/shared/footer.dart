import 'package:flint_dart/ui.dart';

import '../../support/product_versions.dart';
import 'brand_logo.dart';

class Footer extends Component {
  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        padding: const EdgeInsets.only(top: 48, bottom: 0),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 1152,
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.symmetric(horizontal: 20),
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: 36,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                justifyContent: JustifyContent.between,
                gap: 36,
              ),
              children: [
                _brand(),
                _linkColumn(
                  'Ecosystem Pillars',
                  [
                    ('/fullstack', 'Fullstack Framework'),
                    ('/client', 'Client SDK'),
                    ('/ai', 'AI Engine'),
                    ('/hardware', 'Hardware & Robotics'),
                    ('/examples', 'Ecosystem Examples'),
                    ('/fullstack/guides', 'Fullstack Guides'),
                    ('/fullstack/api', 'Fullstack API'),
                  ],
                ),
                _linkColumn(
                  'Updates & Resources',
                  [
                    ('/fullstack/whats-new', "What's New"),
                    ('/fullstack/changelog', 'Fullstack Changelog'),
                    ('/questions', 'Questions'),
                    ('/blog', 'Blog'),
                    ('/dart', 'Dart Lessons'),
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
            _bottomBar(),
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
        minWidth: 260,
        maxWidth: 380,
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
                background: Color.rgba(16, 185, 129, 0.12),
              ),
              children: [
                brandLogoMark(size: 26),
              ],
            ),
            Container(
              dartStyle: const DartStyle(display: Display.grid, gap: 2),
              children: [
                Text.span(
                  'Flint Ecosystem',
                  dartStyle: DartStyle(
                    fontSize: 16,
                    fontWeight: 900,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.span(
                  'The Unified Dart Technology Stack',
                  dartStyle: DartStyle(
                    fontSize: 11,
                    fontWeight: 700,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
          ],
        ),
        Text.p(
          'One language powering Full-Stack Web, Cross-Platform Clients, Native AI, and Connected Robotics.',
          dartStyle: DartStyle(
            maxWidth: 380,
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _linkColumn(String title, List<(String, String)> links) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 10,
        minWidth: 150,
      ),
      children: [
        Text.span(
          title,
          dartStyle: DartStyle(
            display: Display.block,
            margin: const EdgeInsets.only(bottom: 4),
            fontSize: 12,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        for (final (href, label) in links)
          Link(
            href: href,
            child: label,
            dartStyle: DartStyle(
              display: Display.block,
              fontSize: 13,
              color: ThemeToken.color('muted'),
            ),
          ),
      ],
    );
  }

  View _bottomBar() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.between,
        gap: 14,
        padding: const EdgeInsets.symmetric(vertical: 20),
        borderTop: Border(
          color: ThemeToken.color('line'),
          width: 1,
        ),
      ),
      children: [
        Text.span(
          'Copyright 2026 Flint Dart. Maintained by Eulogia Technologies.',
          dartStyle: DartStyle(
            fontSize: 12,
            color: ThemeToken.color('muted'),
          ),
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            _metaText('v${ProductVersions.flintDartVersion}'),
            _metaDot(),
            _metaText('MIT License'),
            _metaDot(),
            _metaText('Built with Dart'),
          ],
        ),
      ],
    );
  }

  View _metaText(String text) {
    return Text.span(
      text,
      dartStyle: DartStyle(
        fontSize: 12,
        fontWeight: 600,
        color: ThemeToken.color('muted'),
      ),
    );
  }

  View _metaDot() {
    return Text.span(
      '•',
      dartStyle: DartStyle(
        fontSize: 10,
        color: ThemeToken.color('muted'),
      ),
    );
  }
}
