import 'package:flint_ui/flint_ui.dart';

enum PostCardAccent { emerald, sky }

class PostCard extends FlintComponent {
  PostCard({
    required this.title,
    required this.href,
    this.excerpt,
    this.author,
    this.date,
    this.tag,
    this.accent = PostCardAccent.emerald,
  });

  final String title;
  final String href;
  final String? excerpt;
  final String? author;
  final String? date;
  final String? tag;
  final PostCardAccent accent;

  @override
  FlintNode build() {
    return Link(
      href: href,
      dartStyle: _card,
      children: [
        if (tag != null || date != null) _meta(),
        Text.h3(title, dartStyle: _cardTitle),
        if (excerpt != null) Text.p(excerpt!, dartStyle: _cardExcerpt),
        if (author != null) _author(),
      ],
    );
  }

  FlintNode _meta() {
    return Row(
      dartStyle: _metaRow,
      children: [
        if (tag != null)
          Container(
            dartStyle: accent == PostCardAccent.emerald ? _tagEmerald : _tagSky,
            children: [
              Text.span(tag!,
                  dartStyle: accent == PostCardAccent.emerald
                      ? _tagTextEmerald
                      : _tagTextSky),
            ],
          ),
        if (date != null) Text.span(date!, dartStyle: _dateText),
      ],
    );
  }

  FlintNode _author() {
    return Row(
      dartStyle: _authorRow,
      children: [
        Container(dartStyle: _authorDot),
        Text.span(author!, dartStyle: _authorText),
      ],
    );
  }
}

// ── Styles ───────────────────────────────────────────────────────────────────

final _card = DartStyle(
  display: Display.grid,
  gap: 10,
  padding: const EdgeInsets.all(20),
  radius: 16,
  border: Border(color: ThemeToken.color('line'), width: 1),
  background: ThemeToken.color('panel'),
  light: DartStyle(
    shadow: Shadow(
      y: 10,
      blur: 28,
      spread: -24,
      color: Color.rgba(15, 23, 42, 0.16),
    ),
  ),
  dark: DartStyle(
    shadow: Shadow(
      y: 14,
      blur: 36,
      spread: -30,
      color: Color.rgba(52, 211, 153, 0.16),
    ),
  ),
);

const _metaRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  gap: 8,
);

const _tagEmerald = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 8, vertical: 3),
  radius: 9999,
  border: Border(color: Color.rgba(52, 211, 153, 0.3), width: 1),
  background: Color.rgba(52, 211, 153, 0.1),
);

const _tagSky = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 8, vertical: 3),
  radius: 9999,
  border: Border(color: Color.rgba(56, 189, 248, 0.3), width: 1),
  background: Color.rgba(56, 189, 248, 0.1),
);

const _tagTextEmerald = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#a7f3d0'),
);

const _tagTextSky = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#bae6fd'),
);

final _dateText = DartStyle(
  fontSize: 12,
  color: ThemeToken.color('muted'),
);

final _cardTitle = DartStyle(
  fontSize: 16,
  fontWeight: 600,
  color: ThemeToken.color('text'),
  lineHeight: 1.4,
  margin: const EdgeInsets.all(0),
);

final _cardExcerpt = DartStyle(
  fontSize: 13,
  lineHeight: 1.55,
  color: ThemeToken.color('muted'),
  margin: const EdgeInsets.all(0),
);

const _authorRow = DartStyle(
  display: Display.flex,
  alignItems: AlignItems.center,
  gap: 6,
  margin: EdgeInsets.only(top: 4, bottom: 0),
);

const _authorDot = DartStyle(
  minWidth: 6,
  padding: EdgeInsets.all(3),
  radius: 9999,
  background: Color('#34d399'),
);

final _authorText = DartStyle(
  fontSize: 12,
  color: ThemeToken.color('muted'),
);
