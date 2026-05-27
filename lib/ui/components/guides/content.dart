import 'package:flint_ui/flint_ui.dart';

class GuidesContent extends Component {
  final bool loading;
  final String? contentHtml;
  final String? previousTitle;
  final String? previousUrl;
  final String? nextTitle;
  final String? nextUrl;

  GuidesContent({
    required this.loading,
    this.contentHtml,
    this.previousTitle,
    this.previousUrl,
    this.nextTitle,
    this.nextUrl,
  });

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 32,
        width: SizeValue.percent(100),
        minWidth: 0,
        overflow: Overflow.hidden,
        md: DartStyle(flex: '1 1 0'),
      ),
      children: [
        if (loading)
          Container(
            dartStyle: const DartStyle(
              padding: EdgeInsets.symmetric(vertical: 48),
              display: Display.flex,
              justifyContent: JustifyContent.center,
            ),
            children: [
              Text.p(
                'Loading...',
                dartStyle: const DartStyle(
                  color: Color('#64748b'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            ],
          )
        else
          HtmlContent(
            id: 'guide-content',
            html: contentHtml ?? '',
            className: 'guide-md markdown-body',
            props: {
              'style': {
                'min-width': '0',
                'max-width': '100%',
                'overflow-wrap': 'break-word',
              },
            },
          ),
        _prevNext(),
      ],
    );
  }

  View _prevNext() {
    if ((previousTitle == null || previousTitle!.isEmpty) &&
        (nextTitle == null || nextTitle!.isEmpty)) {
      return h('span', props: {}, children: []);
    }

    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 16,
      ),
      children: [
        if (previousTitle != null &&
            previousTitle!.isNotEmpty &&
            previousUrl != null)
          Link(
            href: previousUrl!,
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
                'Previous Topic',
                dartStyle: const DartStyle(
                  fontSize: 11,
                  color: Color('#64748b'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                previousTitle!,
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
        if (nextTitle != null && nextTitle!.isNotEmpty && nextUrl != null)
          Link(
            href: nextUrl!,
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
                'Next Topic',
                dartStyle: const DartStyle(
                  fontSize: 11,
                  color: Color('#64748b'),
                  margin: EdgeInsets.all(0),
                ),
              ),
              Text.p(
                nextTitle!,
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
}
