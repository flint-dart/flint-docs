import 'package:flint_dart/ui.dart';

import '../shared/page_shell.dart';

class ClientPage extends Component {
  ClientPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          display: Display.flex,
          justifyContent: JustifyContent.center,
        ),
        children: [
          Container(
            dartStyle: DartStyle(
              width: SizeValue.percent(100),
              maxWidth: 1040,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 34),
              display: Display.grid,
              gap: 22,
              md: const DartStyle(
                padding: EdgeInsets.symmetric(horizontal: 18, vertical: 48),
                gap: 28,
              ),
            ),
            children: [
              _hero(),
              _quickGrid(),
              _articleShell(),
            ],
          ),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 26,
        padding: const EdgeInsets.all(24),
        radius: 24,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(14, 165, 233, 0.18), 0),
              GradientStop(Color.rgba(52, 211, 153, 0.1), 48),
              GradientStop(ThemeToken.color('panel'), 100),
            ],
          ),
          ThemeToken.color('panel'),
        ]),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 24,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 680,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 10,
                  ),
                  children: [
                    _pill('FlintClient'),
                    _pill('Dart HTTP'),
                  ],
                ),
                Text.h1(
                  'A production-ready Dart client for modern APIs.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 34,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: ThemeToken.color('text'),
                    md: DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'FlintClient gives Dart and Flutter apps a clean way to call APIs with retries, caching, cancellation, structured errors, lifecycle hooks, and strict or lenient parsing.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    maxWidth: 660,
                    fontSize: 16,
                    lineHeight: 1.72,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 12,
                width: SizeValue.percent(100),
                minWidth: 0,
                md: DartStyle(width: 280),
              ),
              children: [
                _installCard(),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            _heroLink('pub.dev', 'https://pub.dev/packages/flint_client'),
            _heroLink('GitHub', 'https://github.com/flintdart/flint-client'),
            _heroLink('Examples', '/examples'),
          ],
        ),
      ],
    );
  }

  View _installCard() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(18),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.code, size: 16, color: const Color('#7dd3fc')),
            Text.span(
              'Install',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: ThemeToken.color('accent'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            radius: 10,
            background: ThemeToken.color('panelStrong'),
            border: Border(color: ThemeToken.color('line'), width: 1),
          ),
          children: [
            Text.span(
              'dart pub add flint_client',
              dartStyle: DartStyle(
                fontSize: 13,
                fontWeight: 700,
                color: ThemeToken.color('text'),
              ),
            ),
          ],
        ),
        Text.p(
          'Use it from Dart CLIs, Flutter apps, dashboards, and backend tools.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _quickGrid() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        gridTemplateColumns: GridTemplateColumns.one,
        md: DartStyle(
          gridTemplateColumns: GridTemplateColumns.autoFit(240),
        ),
      ),
      children: [
        _featureCard(
          Icons.activity,
          'Retries that understand HTTP',
          'Backoff, retry-after support, and safer behavior for idempotent requests.',
          const Color('#7dd3fc'),
        ),
        _featureCard(
          Icons.archive,
          'Cache with TTL control',
          'Cache responses intentionally and avoid repeated network work.',
          const Color('#10b981'),
        ),
        _featureCard(
          Icons.alertCircle,
          'Structured errors',
          'Handle timeout, network, HTTP, parse, and cancelled states clearly.',
          const Color('#fca5a5'),
        ),
        _featureCard(
          Icons.clock,
          'Lifecycle hooks',
          'Attach logging, metrics, correlation IDs, and request tracing cleanly.',
          const Color('#fbbf24'),
        ),
      ],
    );
  }

  View _featureCard(IconData icon, String title, String body, Color color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(18),
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Icon(icon, size: 20, color: color),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 17,
            lineHeight: 1.25,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.65,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _articleShell() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 20,
        width: SizeValue.percent(100),
        maxWidth: 880,
        margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: const EdgeInsets.all(18),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        overflow: Overflow.hidden,
        md: DartStyle(padding: EdgeInsets.all(26)),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: DartStyle(display: Display.grid, gap: 5),
              children: [
                Text.h2(
                  'Client documentation',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 24,
                    color: ThemeToken.color('text'),
                  ),
                ),
                Text.p(
                  'Setup, requests, files, WebSocket usage, error handling, parse modes, and observability.',
                  dartStyle: DartStyle(
                    margin: const EdgeInsets.all(0),
                    fontSize: 13,
                    color: ThemeToken.color('muted'),
                  ),
                ),
              ],
            ),
            Link(
              href: '#basics',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 7,
                padding: EdgeInsets.symmetric(horizontal: 13, vertical: 9),
                radius: 10,
                border: Border(color: Color.rgba(52, 211, 153, 0.36), width: 1),
                background: Color.rgba(52, 211, 153, 0.1),
              ),
              children: [
                Text.span(
                  'Start reading',
                  dartStyle: DartStyle(
                    fontSize: 12,
                    fontWeight: 800,
                    color: ThemeToken.color('primary'),
                  ),
                ),
                Icon(Icons.arrowRight,
                    size: 14, color: ThemeToken.color('primary')),
              ],
            ),
          ],
        ),
        if (_contentHtml.isEmpty)
          Text.p(
            'The FlintClient guide is being written.',
            dartStyle: DartStyle(color: ThemeToken.color('muted')),
          )
        else
          HtmlContent(
            id: 'client-content',
            html: _contentHtml,
            className: 'api-md markdown-body',
            props: {
              'style': {
                'min-width': '0',
                'max-width': '100%',
                'overflow-wrap': 'break-word',
              },
            },
          ),
      ],
    );
  }

  View _heroLink(String label, String href) {
    return Link(
      href: href,
      target: href.startsWith('http') ? '_blank' : null,
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        radius: 10,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        color: ThemeToken.color('muted'),
        fontSize: 13,
        fontWeight: 800,
      ),
      child: label,
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue('max-content'),
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(5, 150, 105, 0.28), width: 1),
        background: Color.rgba(5, 150, 105, 0.08),
        dark: const DartStyle(
          border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
          background: Color.rgba(52, 211, 153, 0.08),
        ),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: ThemeToken.color('primary'),
          ),
        ),
      ],
    );
  }
}
