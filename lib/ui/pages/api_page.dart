import 'package:flint_dart/ui.dart';

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
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        ),
        children: [
          Row(
            dartStyle: DartStyle(
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
                dartStyle: DartStyle(
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
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 8,
        padding: EdgeInsets.only(bottom: 8),
        border: Border(color: ThemeToken.color('line'), width: 1),
        radius: 12,
      ),
      children: [
        Text.p(
          'API Reference',
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 12,
            fontWeight: 800,
            color: ThemeToken.color('primary'),
          ),
        ),
        Text.h1(
          _titleFor(_active),
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 34,
            lineHeight: 1.12,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          'Focused reference for Flint Dart and Flint UI APIs, with copyable examples and practical notes.',
          dartStyle: DartStyle(
            maxWidth: 720,
            margin: EdgeInsets.all(0),
            fontSize: 15,
            lineHeight: 1.7,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _content() {
    if (_contentHtml.isEmpty) {
      return Container(
        dartStyle: DartStyle(
          padding: EdgeInsets.symmetric(vertical: 48),
          display: Display.flex,
          justifyContent: JustifyContent.center,
        ),
        children: [
          Text.p(
            'This API page is being written.',
            dartStyle: DartStyle(
              color: ThemeToken.color('muted'),
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
      dartStyle: DartStyle(
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
            dartStyle: DartStyle(
              display: Display.flex,
              flex: '1 1 240px',
              gap: 4,
              padding: EdgeInsets.all(16),
              radius: 12,
              border: Border(color: ThemeToken.color('line'), width: 1),
              background: ThemeToken.color('panel'),
            ),
            children: [
              Text.p(
                'Previous API',
                dartStyle: DartStyle(
                  fontSize: 11,
                  color: ThemeToken.color('muted'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                _previousTitle!,
                dartStyle: DartStyle(
                  fontSize: 13,
                  fontWeight: 600,
                  color: ThemeToken.color('text'),
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
            dartStyle: DartStyle(
              display: Display.flex,
              flex: '1 1 240px',
              gap: 4,
              padding: EdgeInsets.all(16),
              radius: 12,
              border: Border(color: ThemeToken.color('line'), width: 1),
              background: ThemeToken.color('panel'),
            ),
            children: [
              Text.p(
                'Next API',
                dartStyle: DartStyle(
                  fontSize: 11,
                  color: ThemeToken.color('muted'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                _nextTitle!,
                dartStyle: DartStyle(
                  fontSize: 13,
                  fontWeight: 600,
                  color: ThemeToken.color('text'),
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
