import 'package:flint_ui/flint_ui.dart';

import '../components/api/sidebar.dart';
import '../shared/page_shell.dart';

class ApiPage extends Component {
  final Map<String, dynamic> props;

  ApiPage(this.props);

  String get _active => props['initialSection']?.toString() ?? 'flint-class';
  String get _contentHtml => props['contentHtml']?.toString() ?? '';
  String? get _previousTitle => props['previousApiTitle']?.toString();
  String? get _previousUrl => props['previousApiUrl']?.toString();
  String? get _nextTitle => props['nextApiTitle']?.toString();
  String? get _nextUrl => props['nextApiUrl']?.toString();

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        ),
        children: [
          Row(
            dartStyle: const DartStyle(
              display: Display.flex,
              flexDirection: FlexDirection.column,
              alignItems: AlignItems.start,
              gap: 20,
              md: DartStyle(
                flexDirection: FlexDirection.row,
                gap: 32,
              ),
            ),
            children: [
              ApiSidebar(active: _active),
              Container(
                dartStyle: const DartStyle(
                  display: Display.grid,
                  gap: 28,
                  width: SizeValue.percent(100),
                  minWidth: 0,
                  overflow: Overflow.hidden,
                  md: DartStyle(flex: '1 1 0'),
                ),
                children: [
                  _header(),
                  _content(),
                  _prevNext(),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  View _header() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 8,
        padding: EdgeInsets.only(bottom: 8),
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        radius: 12,
      ),
      children: [
        Text.p(
          'API Reference',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 12,
            fontWeight: 800,
            color: Color('#a7f3d0'),
          ),
        ),
        Text.h1(
          _titleFor(_active),
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 34,
            lineHeight: 1.12,
            color: Color('#f8fafc'),
          ),
        ),
        Text.p(
          'Focused reference for Flint Dart and Flint UI APIs, with copyable examples and practical notes.',
          dartStyle: const DartStyle(
            maxWidth: 720,
            margin: EdgeInsets.all(0),
            fontSize: 15,
            lineHeight: 1.7,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }

  View _content() {
    if (_contentHtml.isEmpty) {
      return Container(
        dartStyle: const DartStyle(
          padding: EdgeInsets.symmetric(vertical: 48),
          display: Display.flex,
          justifyContent: JustifyContent.center,
        ),
        children: [
          Text.p(
            'This API page is being written.',
            dartStyle: const DartStyle(
              color: Color('#64748b'),
              margin: EdgeInsets.all(0),
            ),
          ),
        ],
      );
    }

    return HtmlContent(
      id: 'api-content',
      html: _contentHtml,
      className: 'api-md markdown-body',
      props: {
        'style': {
          'min-width': '0',
          'max-width': '100%',
          'overflow-wrap': 'break-word',
        },
      },
    );
  }

  View _prevNext() {
    if ((_previousTitle == null || _previousTitle!.isEmpty) &&
        (_nextTitle == null || _nextTitle!.isEmpty)) {
      return h('span', props: {}, children: []);
    }

    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 16,
      ),
      children: [
        if (_previousTitle != null &&
            _previousTitle!.isNotEmpty &&
            _previousUrl != null)
          Link(
            href: _previousUrl!,
            dartStyle: const DartStyle(
              display: Display.flex,
              flex: '1 1 240px',
              gap: 4,
              padding: EdgeInsets.all(16),
              radius: 12,
              border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
              background: Color.rgba(15, 23, 42, 0.5),
            ),
            children: [
              Text.p(
                'Previous API',
                dartStyle: const DartStyle(
                  fontSize: 11,
                  color: Color('#64748b'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                _previousTitle!,
                dartStyle: const DartStyle(
                  fontSize: 13,
                  fontWeight: 600,
                  color: Color('#e2e8f0'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            ],
          )
        else
          h('span', props: {}, children: []),
        if (_nextTitle != null && _nextTitle!.isNotEmpty && _nextUrl != null)
          Link(
            href: _nextUrl!,
            dartStyle: const DartStyle(
              display: Display.flex,
              flex: '1 1 240px',
              gap: 4,
              padding: EdgeInsets.all(16),
              radius: 12,
              border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
              background: Color.rgba(15, 23, 42, 0.5),
            ),
            children: [
              Text.p(
                'Next API',
                dartStyle: const DartStyle(
                  fontSize: 11,
                  color: Color('#64748b'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                _nextTitle!,
                dartStyle: const DartStyle(
                  fontSize: 13,
                  fontWeight: 600,
                  color: Color('#e2e8f0'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            ],
          ),
      ],
    );
  }

  String _titleFor(String slug) {
    return apiTitleFor(slug);
  }
}
