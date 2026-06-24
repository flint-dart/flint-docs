import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class AiPage extends Component {
  AiPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1040,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 14, vertical: 34),
          display: Display.grid,
          gap: 22,
          md: DartStyle(
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
    );
  }

  View _hero() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 26,
        padding: const EdgeInsets.all(24),
        radius: 24,
        border: const Border(color: Color.rgba(30, 41, 59, 0.95), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(125, 211, 252, 0.16), 0),
              GradientStop(Color.rgba(52, 211, 153, 0.13), 50),
              GradientStop(Color.rgba(15, 23, 42, 0.86), 100),
            ],
          ),
          const Color.rgba(15, 23, 42, 0.74),
        ]),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 24,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 680,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    gap: 10,
                  ),
                  children: [
                    _pill('Flint AI', const Color('#bae6fd')),
                    _pill('Agents & tools', const Color('#a7f3d0')),
                  ],
                ),
                Text.h1(
                  'Build AI agents inside Flint Dart.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 34,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: Colors.white,
                    md: DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'Flint AI adds providers, agents, tools, workflows, streaming chat, memory, persistence, and production tool policies to real Flint applications.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    maxWidth: 660,
                    fontSize: 16,
                    lineHeight: 1.72,
                    color: Color('#cbd5e1'),
                  ),
                ),
              ],
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 12,
                width: SizeValue.percent(100),
                minWidth: 0,
                md: DartStyle(width: 300),
              ),
              children: [
                _runtimeCard(),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            _heroLink('Setup', '#install-and-setup'),
            _heroLink('Streaming', '#streaming-chat'),
            _heroLink('Security', '#production-tool-security'),
          ],
        ),
      ],
    );
  }

  View _runtimeCard() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(18),
        radius: 16,
        border: Border(color: Color.rgba(125, 211, 252, 0.28), width: 1),
        background: Color.rgba(2, 6, 23, 0.48),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            gap: 8,
          ),
          children: [
            Icon(Icons.sparkles, size: 16, color: const Color('#7dd3fc')),
            Text.span(
              'Runtime layers',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#7dd3fc'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 8,
            padding: EdgeInsets.all(14),
            radius: 12,
            background: Color.rgba(2, 6, 23, 0.88),
            border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
          ),
          children: [
            Text.span(
              'app.ai.useChatProvidersFromEnv()',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 800,
                color: Color('#dbeafe'),
              ),
            ),
            Text.span(
              'ctx.ai.run(agent, input: request)',
              dartStyle: const DartStyle(
                fontSize: 12,
                color: Color('#94a3b8'),
              ),
            ),
          ],
        ),
        Text.p(
          'Use AI from controllers, API routes, dashboards, queues, and internal automation.',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.6,
            color: Color('#94a3b8'),
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
          Icons.code,
          'Provider setup',
          'Configure OpenAI, Gemini, Anthropic, or custom providers from environment variables.',
          const Color('#7dd3fc'),
        ),
        _featureCard(
          Icons.activity,
          'Streaming chat',
          'Send partial text chunks to chat UIs while preserving a final completion event.',
          const Color('#a7f3d0'),
        ),
        _featureCard(
          Icons.archive,
          'Memory and runs',
          'Persist thread messages, run events, artifacts, and trace history through repositories.',
          const Color('#fbbf24'),
        ),
        _featureCard(
          Icons.alertCircle,
          'Tool policies',
          'Gate destructive tools with roles, capabilities, production rules, and explicit policy checks.',
          const Color('#fca5a5'),
        ),
      ],
    );
  }

  View _featureCard(IconData icon, String title, String body, Color color) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(18),
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
      ),
      children: [
        Icon(icon, size: 20, color: color),
        Text.h3(
          title,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 17,
            lineHeight: 1.25,
            color: Colors.white,
          ),
        ),
        Text.p(
          body,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.65,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }

  View _articleShell() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 20,
        width: SizeValue.percent(100),
        maxWidth: 880,
        margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
        padding: EdgeInsets.all(18),
        radius: 20,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.54),
        overflow: Overflow.hidden,
        md: DartStyle(padding: EdgeInsets.all(26)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(display: Display.grid, gap: 5),
              children: [
                Text.h2(
                  'AI documentation',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 24,
                    color: Colors.white,
                  ),
                ),
                Text.p(
                  'Providers, agents, tools, workflows, streaming, persistence, and production safety.',
                  dartStyle: const DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 13,
                    color: Color('#94a3b8'),
                  ),
                ),
              ],
            ),
            Link(
              href: '#install-and-setup',
              dartStyle: const DartStyle(
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
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    fontWeight: 800,
                    color: Color('#a7f3d0'),
                  ),
                ),
                Icon(Icons.arrowRight, size: 14, color: const Color('#a7f3d0')),
              ],
            ),
          ],
        ),
        if (_contentHtml.isEmpty)
          Text.p(
            'The Flint AI guide is being written.',
            dartStyle: const DartStyle(color: Color('#94a3b8')),
          )
        else
          HtmlContent(
            id: 'ai-content',
            html: _contentHtml,
            className: 'api-md markdown-body',
            props: const {
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
      dartStyle: const DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        padding: EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        radius: 10,
        border: Border(color: Color.rgba(51, 65, 85, 0.92), width: 1),
        background: Color.rgba(2, 6, 23, 0.34),
        color: Color('#cbd5e1'),
        fontSize: 13,
        fontWeight: 800,
      ),
      child: label,
    );
  }

  View _pill(String label, Color color) {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue('max-content'),
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(52, 211, 153, 0.28), width: 1),
        background: Color.rgba(52, 211, 153, 0.08),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: color,
          ),
        ),
      ],
    );
  }
}
