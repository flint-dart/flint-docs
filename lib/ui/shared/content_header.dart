import 'package:flint_ui/flint_ui.dart';

class ContentHeader extends FlintComponent {
  ContentHeader({
    required this.title,
    this.subtitle,
    this.eyebrow,
    this.tags = const [],
    this.version,
  });

  final String title;
  final String? subtitle;
  final String? eyebrow;
  final List<String> tags;
  final String? version;

  @override
  FlintNode build() {
    return Container(
      dartStyle: _wrap,
      children: [
        if (eyebrow != null || version != null) _badges(),
        Text.h1(title, dartStyle: _title),
        if (subtitle != null) Text.p(subtitle!, dartStyle: _subtitle),
        if (tags.isNotEmpty) _tagRow(),
      ],
    );
  }

  FlintNode _badges() {
    return Row(
      dartStyle: _badgeRow,
      children: [
        if (eyebrow != null)
          Container(
            dartStyle: _eyebrowPill,
            children: [Text.span(eyebrow!, dartStyle: _eyebrowText)],
          ),
        if (version != null)
          Container(
            dartStyle: _versionPill,
            children: [Text.span(version!, dartStyle: _versionText)],
          ),
      ],
    );
  }

  FlintNode _tagRow() {
    return Row(
      dartStyle: _tagsRow,
      children: tags
          .map((t) => Container(
                dartStyle: _tagPill,
                children: [Text.span(t, dartStyle: _tagText)],
              ))
          .toList(),
    );
  }
}

// ── Styles ───────────────────────────────────────────────────────────────────

const _wrap = DartStyle(
  display: Display.grid,
  gap: 12,
  padding: EdgeInsets.all(24),
  radius: 16,
  border: Border(color: Color.rgba(30, 41, 59, 0.7), width: 1),
  background: Color.rgba(15, 23, 42, 0.7),
);

const _badgeRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  gap: 8,
);

const _eyebrowPill = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(52, 211, 153, 0.3), width: 1),
  background: Color.rgba(52, 211, 153, 0.1),
);

const _eyebrowText = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#a7f3d0'),
);

const _versionPill = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(52, 211, 153, 0.3), width: 1),
  background: Color.rgba(52, 211, 153, 0.08),
);

const _versionText = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#d1fae5'),
);

const _title = DartStyle(
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 1.2,
  color: Colors.white,
  margin: EdgeInsets.all(0),
);

const _subtitle = DartStyle(
  fontSize: 15,
  lineHeight: 1.6,
  color: Color('#94a3b8'),
  margin: EdgeInsets.all(0),
);

const _tagsRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  gap: 8,
);

const _tagPill = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(15, 23, 42, 0.6),
);

const _tagText = DartStyle(
  fontSize: 11,
  color: Color('#64748b'),
);
