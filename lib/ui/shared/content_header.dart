import 'package:flint_dart/ui.dart';

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

final _wrap = DartStyle(
  display: Display.grid,
  gap: 12,
  padding: const EdgeInsets.all(24),
  radius: 16,
  border: Border(color: ThemeToken.color('line'), width: 1),
  background: ThemeToken.color('panel'),
  light: DartStyle(
    shadow: Shadow(
      y: 14,
      blur: 36,
      spread: -28,
      color: Color.rgba(15, 23, 42, 0.18),
    ),
  ),
  dark: DartStyle(
    shadow: ThemeToken.shadow('glow'),
  ),
);

const _badgeRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  gap: 8,
);

final _eyebrowPill = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(5, 150, 105, 0.3), width: 1),
  background: Color.rgba(5, 150, 105, 0.08),
  dark: const DartStyle(
    border: Border(color: Color.rgba(52, 211, 153, 0.3), width: 1),
    background: Color.rgba(52, 211, 153, 0.1),
  ),
);

final _eyebrowText = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: ThemeToken.color('primary'),
);

final _versionPill = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(5, 150, 105, 0.3), width: 1),
  background: Color.rgba(5, 150, 105, 0.08),
  dark: const DartStyle(
    border: Border(color: Color.rgba(52, 211, 153, 0.3), width: 1),
    background: Color.rgba(52, 211, 153, 0.08),
  ),
);

final _versionText = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: ThemeToken.color('primary'),
);

final _title = DartStyle(
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 1.2,
  color: ThemeToken.color('text'),
  margin: const EdgeInsets.all(0),
);

final _subtitle = DartStyle(
  fontSize: 15,
  lineHeight: 1.6,
  color: ThemeToken.color('muted'),
  margin: const EdgeInsets.all(0),
);

const _tagsRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  gap: 8,
);

final _tagPill = DartStyle(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: ThemeToken.color('line'), width: 1),
  background: ThemeToken.color('panelStrong'),
);

final _tagText = DartStyle(
  fontSize: 11,
  color: ThemeToken.color('muted'),
);
