import 'package:flint_ui/flint_ui.dart';

class SidebarLayout extends FlintComponent {
  SidebarLayout({
    required this.sidebar,
    required this.content,
  });

  final FlintNode sidebar;
  final FlintNode content;

  @override
  FlintNode build() {
    return Container(
      dartStyle: _outerWrap,
      children: [
        Row(
          dartStyle: _layout,
          children: [
            Container(dartStyle: _sidebarCol, children: [sidebar]),
            Container(dartStyle: _contentCol, children: [content]),
          ],
        ),
      ],
    );
  }
}

// ── Styles ───────────────────────────────────────────────────────────────────

const _outerWrap = DartStyle(
  maxWidth: 1152,
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 32),
);

const _layout = DartStyle(
  display: Display.flex,
  alignItems: AlignItems.start,
  gap: 0,
);

const _sidebarCol = DartStyle(
  minWidth: 220,
  maxWidth: 260,
  padding: EdgeInsets.only(right: 32, top: 0, bottom: 0),
);

const _contentCol = DartStyle(
  display: Display.grid,
  gap: 0,
  minWidth: 0,
);
