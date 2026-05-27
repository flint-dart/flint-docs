import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class ChangelogPage extends Component {
  final Map<String, dynamic> props;

  ChangelogPage(this.props);

  List<Map<String, dynamic>> get _entries {
    final raw = props['entries'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((entry) => entry.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

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
          _header(),
          if (_entries.isEmpty) _emptyState() else _list(),
        ],
      ),
    );
  }

  View _header() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 18,
        padding: EdgeInsets.all(40),
        radius: 24,
        border: Border(color: Color.rgba(30, 41, 59, 0.7), width: 1),
        background: Color.rgba(15, 23, 42, 0.72),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            _pill('Release Notes', const Color('#a7f3d0')),
            _pill('Changelog', const Color('#d1fae5')),
          ],
        ),
        Text.h1(
          'Flint Dart Changelog',
          dartStyle: const DartStyle(
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.12,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          'A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.',
          dartStyle: const DartStyle(
            fontSize: 15,
            lineHeight: 1.7,
            color: Color('#cbd5e1'),
            margin: EdgeInsets.all(0),
            maxWidth: 720,
          ),
        ),
      ],
    );
  }

  View _pill(String label, Color color) {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        radius: 9999,
        border: Border(color: Color.rgba(52, 211, 153, 0.32), width: 1),
        background: Color.rgba(52, 211, 153, 0.1),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 700,
            color: color,
          ),
        ),
      ],
    );
  }

  View _emptyState() {
    return Container(
      dartStyle: const DartStyle(
        margin: EdgeInsets.only(top: 28),
        padding: EdgeInsets.all(24),
        radius: 14,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.52),
      ),
      children: [
        Text.p(
          'No changelog entries are available yet.',
          dartStyle: const DartStyle(
            color: Color('#94a3b8'),
            margin: EdgeInsets.all(0),
          ),
        ),
      ],
    );
  }

  View _list() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 20,
        margin: EdgeInsets.only(top: 32),
      ),
      children: [
        for (var i = 0; i < _entries.length; i++) _entryCard(i, _entries[i]),
      ],
    );
  }

  View _entryCard(int index, Map<String, dynamic> entry) {
    final isLatest = index == 0;
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        padding: const EdgeInsets.all(24),
        radius: 16,
        border: Border(
          color: isLatest
              ? const Color.rgba(52, 211, 153, 0.35)
              : const Color.rgba(30, 41, 59, 1),
          width: 1,
        ),
        background: isLatest
            ? const Color.rgba(52, 211, 153, 0.06)
            : const Color.rgba(15, 23, 42, 0.6),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Text.h2(
              'v${entry['version'] ?? ''}',
              dartStyle: const DartStyle(
                fontSize: 21,
                fontWeight: 700,
                color: Colors.white,
                margin: EdgeInsets.all(0),
              ),
            ),
            if (isLatest)
              Container(
                dartStyle: const DartStyle(
                  padding: EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  radius: 9999,
                  border:
                      Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
                  background: Color.rgba(52, 211, 153, 0.1),
                ),
                children: [
                  Text.span(
                    'Latest',
                    dartStyle: const DartStyle(
                      fontSize: 10,
                      fontWeight: 700,
                      color: Color('#a7f3d0'),
                    ),
                  ),
                ],
              ),
          ],
        ),
        HtmlContent(
          id: 'cl-entry-$index',
          html: entry['contentHtml']?.toString() ?? '',
          className: 'cl-md',
        ),
      ],
    );
  }
}
