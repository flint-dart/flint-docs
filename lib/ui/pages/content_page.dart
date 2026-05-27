import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class ContentPage extends FlintComponent {
  ContentPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';

  @override
  FlintNode build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: _pageWrap,
        children: [
          HtmlContent(id: 'content-page', html: _contentHtml),
        ],
      ),
    );
  }
}

const _pageWrap = DartStyle(
  width: SizeValue.percent(100),
  minWidth: 0,
);
