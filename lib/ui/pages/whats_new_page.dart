import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

const _features = [
  (
    title: 'JSON-Safe Flint Page Props',
    body:
        'Flint Dart now sanitizes res.page() props before embedding them in the browser payload, including DateTime, Uri, enum values, models, maps, iterables, and objects with toJson() or toMap().',
  ),
  (
    title: 'Fresh Child Component Values',
    body:
        'Flint UI now replaces child components by default during parent rebuilds, so constructor-provided values stay current without requiring updateFrom for ordinary display components.',
  ),
  (
    title: 'Explicit Component Lifecycle Bases',
    body:
        'StatefulComponent and StatelessComponent make lifecycle intent clear. Component remains backwards-compatible, while components that must survive parent rebuilds can opt in with preserveState.',
  ),
  (
    title: 'Hosted Package Deployment',
    body:
        'The docs app now targets hosted pub.dev versions of flint_dart and flint_ui, keeping deployment independent of GitHub package overrides.',
  ),
  (
    title: 'Flint UI Components',
    body:
        'Flint UI now lets docs pages and app screens be built with Dart components, state, events, and inline DartStyle without leaving the Dart ecosystem.',
  ),
  (
    title: 'Clear App Folder Structure',
    body:
        'Docs now show a cleaner project shape with controllers, models, routes, UI pages, shared layouts, and reusable components organized in predictable folders.',
  ),
  (
    title: 'Safer Column Renames',
    body:
        'Column(renamedFrom: ...) lets migrations rename existing columns without dropping user data, with warnings for risky case-only renames.',
  ),
  (
    title: 'Column Comments & Placement',
    body:
        'Schema columns now support comment metadata and MySQL-only after placement for cleaner migrated tables.',
  ),
  (
    title: 'Cleaner Controller Routes',
    body:
        'app.controller(...) gives route groups a concise, request-scoped controller API while still creating a fresh controller for every request.',
  ),
  (
    title: 'Password Reset Code Checks',
    body:
        'Auth.verifyPasswordResetCode(...) lets apps validate reset codes before changing a password, and resetPasswordWithCode(...) now shares the same verification logic.',
  ),
  (
    title: 'Auth Verification Wrapper',
    body:
        'AuthVerification.verifyPasswordResetCode(...) keeps extension-based auth flows aligned with the new core reset-code verifier.',
  ),
  (
    title: 'Async Auth Errors Covered',
    body:
        'Exception middleware regression coverage now includes awaited async handlers that throw AuthException.',
  ),
  (
    title: 'Unified Request Input',
    body:
        'validate(), input(), allInput(), and rawBody() now cover JSON, forms, multipart fields, files, query params, and route params through one request API.',
  ),
  (
    title: 'WebSocket Namespaces',
    body:
        'WebSocket rooms are now isolated by path, with explicit cross-namespace helpers like emitToRoomIn(...) and emitToNamespace(...).',
  ),
  (
    title: 'Safer WebSocket Payloads',
    body:
        'emit(...) and sendJson(...) now normalize values like DateTime, collections, exceptions, and objects with toMap() or toJson() before encoding.',
  ),
  (
    title: 'Swagger Knows WebSockets',
    body:
        'Generated docs now include app.websocket(...) handshake routes with 101 Switching Protocols and Flint-specific metadata.',
  ),
  (
    title: 'Seeder Registry First',
    body:
        'The docs now emphasize lib/config/seeder_registry.dart as the canonical entry point for flint --db-seed.',
  ),
  (
    title: 'ORM Query Fixes',
    body:
        'orWhere(...) now compiles consistently across select, update, delete, and model helpers, and all() preserves any query filters you chained before it.',
  ),
  (
    title: 'Context-First Docs',
    body:
        'All core docs now use (Context ctx) examples for better autocomplete and consistency.',
  ),
];

class WhatsNewPage extends Component {
  final Map<String, dynamic> props;
  WhatsNewPage(this.props);

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: _page,
        children: [
          _header(),
          _grid(),
          _cta(),
        ],
      ),
    );
  }

  View _header() {
    return Container(
      dartStyle: _headerWrap,
      children: [
        Row(
          dartStyle: _badgeRow,
          children: [
            Container(
              dartStyle: _badgeBlue,
              children: [Text.span('Product Updates', dartStyle: _badgeText)],
            ),
            Container(
              dartStyle: _badgeBlue2,
              children: [Text.span("What's New", dartStyle: _badgeText2)],
            ),
          ],
        ),
        Text.h1("What's New in Flint Dart", dartStyle: _h1),
        Text.p(
          'Highlights from the latest Flint Dart and Flint UI releases.',
          dartStyle: _subtitle,
        ),
      ],
    );
  }

  View _grid() {
    return Container(
      dartStyle: _gridWrap,
      children: [
        for (final f in _features)
          Container(
            dartStyle: _card,
            children: [
              Text.h2(f.title, dartStyle: _cardTitle),
              Text.p(f.body, dartStyle: _cardBody),
            ],
          ),
      ],
    );
  }

  View _cta() {
    return Container(
      dartStyle: _ctaBox,
      children: [
        Text.h3('Next', dartStyle: _ctaTitle),
        Text.p(
          'Follow the changelog for complete release history and migration notes.',
          dartStyle: _ctaBody,
        ),
        Link(
          href: '/changelog',
          dartStyle: _ctaLink,
          children: [Text.span('Open Changelog', dartStyle: _ctaLinkText)],
        ),
      ],
    );
  }
}

// ── Styles ───────────────────────────────────────────────────────────────────

const _page = DartStyle(
  width: SizeValue.percent(100),
  maxWidth: 1152,
  margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48),
);

const _headerWrap = DartStyle(
  padding: EdgeInsets.all(40),
  radius: 24,
  border: Border(color: Color.rgba(56, 189, 248, 0.3), width: 1),
  background: Color.rgba(15, 23, 42, 0.7),
);

const _badgeRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  alignItems: AlignItems.center,
  gap: 12,
);

const _badgeBlue = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(56, 189, 248, 0.3), width: 1),
  background: Color.rgba(56, 189, 248, 0.1),
);

const _badgeBlue2 = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
  radius: 9999,
  border: Border(color: Color.rgba(56, 189, 248, 0.4), width: 1),
  background: Color.rgba(56, 189, 248, 0.1),
);

const _badgeText = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#bae6fd'),
);

const _badgeText2 = DartStyle(
  fontSize: 11,
  fontWeight: 600,
  color: Color('#e0f2fe'),
);

const _h1 = DartStyle(
  fontSize: 36,
  fontWeight: 600,
  color: Colors.white,
  margin: EdgeInsets.only(top: 20, bottom: 0),
);

const _subtitle = DartStyle(
  fontSize: 15,
  color: Color('#cbd5e1'),
  margin: EdgeInsets.only(top: 12, bottom: 0),
  maxWidth: 720,
);

const _gridWrap = DartStyle(
  display: Display.grid,
  gap: 16,
  margin: EdgeInsets.only(top: 32),
);

const _card = DartStyle(
  padding: EdgeInsets.all(20),
  radius: 16,
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(15, 23, 42, 0.6),
);

const _cardTitle = DartStyle(
  fontSize: 16,
  fontWeight: 600,
  color: Colors.white,
  margin: EdgeInsets.all(0),
);

const _cardBody = DartStyle(
  fontSize: 13,
  lineHeight: 1.55,
  color: Color('#cbd5e1'),
  margin: EdgeInsets.only(top: 8, bottom: 0),
);

const _ctaBox = DartStyle(
  padding: EdgeInsets.all(24),
  radius: 16,
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(15, 23, 42, 0.5),
  margin: EdgeInsets.only(top: 32),
);

const _ctaTitle = DartStyle(
  fontSize: 18,
  fontWeight: 600,
  color: Colors.white,
  margin: EdgeInsets.all(0),
);

const _ctaBody = DartStyle(
  fontSize: 14,
  color: Color('#cbd5e1'),
  margin: EdgeInsets.only(top: 8, bottom: 0),
);

const _ctaLink = DartStyle(
  display: Display.inlineFlex,
  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  radius: 8,
  border: Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
  background: Color.rgba(52, 211, 153, 0.1),
  margin: EdgeInsets.only(top: 16),
);

const _ctaLinkText = DartStyle(
  fontSize: 13,
  fontWeight: 600,
  color: Color('#a7f3d0'),
);
