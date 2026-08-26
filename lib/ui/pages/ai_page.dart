import 'package:flint_dart/ui.dart';

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
          minWidth: 0,
          overflowX: Overflow.hidden,
          display: Display.flex,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
        ),
        children: [
          _heroSection(),
          _signalStrip(),
          _capabilitiesSection(),
          _workflowSection(),
          _articleSection(),
          _finalCtaSection(),
        ],
      ),
    );
  }

  View _heroSection() {
    return Container(
      dartStyle: DartStyle(
        position: Position.relative,
        overflow: Overflow.hidden,
        width: SizeValue.percent(100),
        minWidth: 0,
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: Background.layers([
          Gradient.radialCircle(
            at: const GradientPosition.percent(12, 0),
            stops: const [
              GradientStop(Color.rgba(168, 85, 247, 0.2), 0),
              GradientStop(Colors.transparent, 42),
            ],
          ),
          Gradient.radialCircle(
            at: const GradientPosition.percent(88, 8),
            stops: const [
              GradientStop(Color.rgba(56, 189, 248, 0.18), 0),
              GradientStop(Colors.transparent, 44),
            ],
          ),
          Gradient.radialCircle(
            at: const GradientPosition.percent(48, 92),
            stops: const [
              GradientStop(Color.rgba(52, 211, 153, 0.12), 0),
              GradientStop(Colors.transparent, 52),
            ],
          ),
          ThemeToken.color('bg'),
        ]),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            position: Position.relative,
            zIndex: 2,
            width: SizeValue.percent(100),
            maxWidth: 1440,
            minWidth: 0,
            margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 40),
            md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 32, vertical: 64),
            ),
            lg: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 56, vertical: 80),
            ),
            xl: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96),
            ),
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gridTemplateColumns: 'minmax(0, 1fr)',
                alignItems: AlignItems.center,
                gap: 36,
                width: SizeValue.percent(100),
                minWidth: 0,
                lg: DartStyle(
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 48,
                ),
                xl: DartStyle(gap: 72),
              ),
              children: [
                _heroCopy(),
                _agentStudio(),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _heroCopy() {
    return Column(
      dartStyle: const DartStyle(
        alignItems: AlignItems.start,
        gap: 0,
        width: SizeValue.percent(100),
        minWidth: 0,
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.inlineFlex,
            alignItems: AlignItems.center,
            flexWrap: FlexWrap.wrap,
            gap: 8,
            maxWidth: SizeValue.percent(100),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            radius: 14,
            border: Border.all(color: const Color.rgba(168, 85, 247, 0.38)),
            background: const Color.rgba(168, 85, 247, 0.1),
          ),
          children: [
            Icon(Icons.sparkles, size: 14, color: const Color('#c084fc')),
            Text.span(
              'PRODUCTION AI FOR THE DART ECOSYSTEM',
              dartStyle: const DartStyle(
                color: Color('#c084fc'),
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: 0.7,
              ),
            ),
          ],
        ),
        Text.h1(
          'Build intelligent agents. Ship them in pure Dart.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 760,
            fontSize: 38,
            lineHeight: 1.06,
            letterSpacing: -1.2,
            fontWeight: 900,
            color: Color('transparent'),
            background: Gradient.linear(
              110,
              const [
                GradientStop(Color('#c084fc'), 0),
                GradientStop(Color('#38bdf8'), 48),
                GradientStop(Color('#34d399'), 100),
              ],
            ),
            backgroundClip: BackgroundClip.text,
            webkitBackgroundClip: BackgroundClip.text,
            sm: const DartStyle(fontSize: 46),
            md: const DartStyle(fontSize: 58),
            lg: const DartStyle(fontSize: 64),
            xl: const DartStyle(fontSize: 72),
          ),
        ),
        Text.h2(
          'Agents, multimodal providers, tools, memory, and streaming—inside one production-ready runtime.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 18, bottom: 0),
            maxWidth: 700,
            fontSize: 19,
            lineHeight: 1.38,
            fontWeight: 800,
            color: ThemeToken.color('text'),
            md: const DartStyle(fontSize: 23),
          ),
        ),
        Text.p(
          'Connect OpenAI, Gemini, Anthropic, or your own provider. Orchestrate typed tools, persistent threads, secure workflows, and real-time responses without leaving the Flint application architecture.',
          dartStyle: DartStyle(
            margin: const EdgeInsets.only(top: 16, bottom: 0),
            maxWidth: 680,
            fontSize: 15,
            lineHeight: 1.72,
            color: ThemeToken.color('muted'),
            md: const DartStyle(fontSize: 16),
          ),
        ),
        Wrap(
          gap: 12,
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            margin: EdgeInsets.only(top: 26),
          ),
          children: [
            Link(
              href: '/ai/guides',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                gap: 8,
                width: SizeValue.percent(100),
                minHeight: 48,
                padding:
                    const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                radius: 10,
                background: const Color('#a855f7'),
                color: Colors.white,
                fontSize: 14,
                fontWeight: 900,
                shadow: const Shadow(
                  y: 16,
                  blur: 36,
                  spread: -14,
                  color: Color.rgba(168, 85, 247, 0.65),
                ),
                sm: const DartStyle(width: SizeValue.auto),
              ),
              children: [
                Text.span('Start Building'),
                Icon(Icons.arrowRight, size: 17),
              ],
            ),
            Link(
              href: '#agents',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              dartStyle: const DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                gap: 8,
                width: SizeValue.percent(100),
                minHeight: 48,
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                radius: 10,
                fontSize: 14,
                fontWeight: 800,
                sm: DartStyle(width: SizeValue.auto),
              ),
              children: [
                Icon(Icons.layers, size: 16),
                Text.span('Explore Capabilities'),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 8,
            width: SizeValue.percent(100),
            margin: EdgeInsets.only(top: 24),
          ),
          children: [
            Text.span(
              'Works with',
              dartStyle: DartStyle(
                fontSize: 12,
                fontWeight: 700,
                color: ThemeToken.color('muted'),
              ),
            ),
            _providerChip('OpenAI', const Color('#34d399')),
            _providerChip('Gemini', const Color('#38bdf8')),
            _providerChip('Anthropic', const Color('#f59e0b')),
            _providerChip('Custom', const Color('#c084fc')),
          ],
        ),
      ],
    );
  }

  View _agentStudio() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        radius: 18,
        overflow: Overflow.hidden,
        border: Border.all(color: const Color.rgba(168, 85, 247, 0.34)),
        background: const Color('#070a12'),
        color: Colors.white,
        shadow: const Shadow(
          y: 32,
          blur: 80,
          spread: -30,
          color: Color.rgba(76, 29, 149, 0.72),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 10,
            minWidth: 0,
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
            borderBottom: Border(
              color: const Color.rgba(255, 255, 255, 0.08),
              width: 1,
            ),
            background: const Color.rgba(255, 255, 255, 0.03),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                alignItems: AlignItems.center,
                gap: 6,
                flexShrink: 0,
              ),
              children: [
                _studioDot(const Color('#ef4444')),
                _studioDot(const Color('#f59e0b')),
                _studioDot(const Color('#10b981')),
              ],
            ),
            Text.strong(
              'agent_runtime.dart',
              dartStyle: const DartStyle(
                minWidth: 0,
                flex: '1 1 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textAlign: TextAlign.center,
                fontSize: 12,
                color: Color('#cbd5e1'),
                fontFamily: FontFamily.monospace,
              ),
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 6,
                flexShrink: 0,
                padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                radius: 999,
                color: Color('#34d399'),
                background: Color.rgba(52, 211, 153, 0.1),
                fontSize: 10,
                fontWeight: 800,
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    width: 6,
                    height: 6,
                    radius: 999,
                    background: Color('#34d399'),
                  ),
                ),
                Text.span('LIVE'),
              ],
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            maxHeight: 350,
            overflow: Overflow.auto,
            padding: EdgeInsets.all(14),
            background: Color('#050810'),
            sm: DartStyle(padding: EdgeInsets.all(20)),
          ),
          children: [
            Text.p(
              "final agent = Agent(\n  name: 'ReleasePilot',\n  model: 'gpt-5',\n  instructions: releasePolicy,\n  tools: [searchDocs, createPlan],\n  memory: threadMemory,\n);\n\nfinal run = await ctx.ai.run(\n  agent,\n  input: request,\n  stream: true,\n);",
              dartStyle: const DartStyle(
                margin: EdgeInsets.all(0),
                minWidth: SizeValue('max-content'),
                whiteSpace: 'pre',
                fontFamily: FontFamily.monospace,
                fontSize: 12,
                lineHeight: 1.72,
                color: Color('#d8b4fe'),
                sm: DartStyle(fontSize: 13),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 8,
            padding: EdgeInsets.all(12),
            borderTop: Border(
              color: Color.rgba(255, 255, 255, 0.08),
              width: 1,
            ),
            background: Color.rgba(255, 255, 255, 0.025),
            sm: DartStyle(
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            ),
          ),
          children: [
            _runSignal('STREAM', '48 tok/s', const Color('#38bdf8')),
            _runSignal('TOOLS', '2 approved', const Color('#c084fc')),
            _runSignal('TRACE', 'persisted', const Color('#34d399')),
          ],
        ),
      ],
    );
  }

  View _signalStrip() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
        md: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 28),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 32),
        ),
        xl: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 36),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 1440,
            minWidth: 0,
            margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 12,
            sm: DartStyle(
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            ),
            lg: DartStyle(
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            ),
          ),
          children: [
            _metric(Icons.globe, 'Multi-provider',
                'One typed provider contract', const Color('#38bdf8')),
            _metric(Icons.activity, 'Native streaming',
                'Partial chunks to final output', const Color('#34d399')),
            _metric(Icons.shield, 'Policy guarded',
                'Roles and tool permissions', const Color('#c084fc')),
            _metric(Icons.archive, 'Persistent traces',
                'Threads, runs, and artifacts', const Color('#f59e0b')),
          ],
        ),
      ],
    );
  }

  View _capabilitiesSection() {
    return Container(
      props: const {'id': 'agents'},
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 56),
        md: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 72),
        ),
        lg: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 88),
        ),
        xl: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 1440,
            minWidth: 0,
            margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          ),
          children: [
            _sectionHeading(
              eyebrow: 'EVERY LAYER INCLUDED',
              title: 'A complete runtime for agentic applications',
              body:
                  'Move from a model response to a secure, observable AI product without assembling a fragile collection of unrelated packages.',
              color: const Color('#c084fc'),
            ),
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: 18,
                width: SizeValue.percent(100),
                minWidth: 0,
                margin: EdgeInsets.only(top: 38),
                md: DartStyle(
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                ),
                xl: DartStyle(
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                ),
              ),
              children: [
                _capabilityCard(
                  id: 'chat',
                  icon: Icons.activity,
                  label: 'REAL-TIME UX',
                  title: 'Streaming chat and events',
                  body:
                      'Stream text, structured events, tool progress, and completion state directly into reactive Flint UI experiences.',
                  bullets: const [
                    'Partial token delivery',
                    'Typed lifecycle events',
                    'Backpressure-aware streams'
                  ],
                  color: const Color('#38bdf8'),
                ),
                _capabilityCard(
                  icon: Icons.sparkles,
                  label: 'AGENT RUNTIME',
                  title: 'Typed agents and handoffs',
                  body:
                      'Define instructions, models, tools, memory, and specialist handoffs as one composable Dart object graph.',
                  bullets: const [
                    'Reusable agent definitions',
                    'Multi-agent delegation',
                    'Structured final outputs'
                  ],
                  color: const Color('#c084fc'),
                ),
                _capabilityCard(
                  id: 'tools',
                  icon: Icons.shield,
                  label: 'SAFE EXECUTION',
                  title: 'Tools with production policies',
                  body:
                      'Expose application capabilities with schemas, authorization checks, audit context, and environment-aware restrictions.',
                  bullets: const [
                    'Role and capability gates',
                    'Destructive-action policies',
                    'Tool execution traces'
                  ],
                  color: const Color('#34d399'),
                ),
                _capabilityCard(
                  icon: Icons.archive,
                  label: 'LONG-TERM CONTEXT',
                  title: 'Memory and persistence',
                  body:
                      'Persist threads, messages, summaries, run state, and artifacts through repository-backed storage.',
                  bullets: const [
                    'Thread repositories',
                    'Run and event history',
                    'Durable agent memory'
                  ],
                  color: const Color('#f59e0b'),
                ),
                _capabilityCard(
                  icon: Icons.layers,
                  label: 'ORCHESTRATION',
                  title: 'Workflows and background runs',
                  body:
                      'Compose deterministic application steps with agent reasoning, tool calls, queues, and resumable state.',
                  bullets: const [
                    'Typed workflow steps',
                    'Queue-ready execution',
                    'Failure recovery hooks'
                  ],
                  color: const Color('#f472b6'),
                ),
                _capabilityCard(
                  icon: Icons.server,
                  label: 'APP-NATIVE',
                  title: 'Controllers, routes, and dashboards',
                  body:
                      'Run AI beside your existing services, models, authentication, APIs, WebSockets, and server-rendered UI.',
                  bullets: const [
                    'Context-aware controllers',
                    'Shared application models',
                    'Realtime dashboard updates'
                  ],
                  color: const Color('#60a5fa'),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _workflowSection() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 56),
        borderTop: Border(color: ThemeToken.color('line'), width: 1),
        borderBottom: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
        md: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 72),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 88),
        ),
        xl: const DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        ),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 1440,
            minWidth: 0,
            margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            alignItems: AlignItems.center,
            gap: 36,
            lg: DartStyle(
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 56,
            ),
          ),
          children: [
            _workflowCopy(),
            _pipelineCard(),
          ],
        ),
      ],
    );
  }

  View _workflowCopy() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        width: SizeValue.percent(100),
        minWidth: 0,
      ),
      children: [
        _sectionHeading(
          eyebrow: 'FROM REQUEST TO RESULT',
          title: 'One observable execution path',
          body:
              'Every run moves through typed context, model reasoning, policy-checked tools, persistent memory, and a realtime response channel.',
          color: const Color('#38bdf8'),
          alignStart: true,
        ),
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 10,
            margin: EdgeInsets.only(top: 12),
            sm: DartStyle(
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            ),
          ),
          children: [
            _miniFeature(Icons.code, 'Typed input',
                'Validate request context before execution.'),
            _miniFeature(Icons.shield, 'Policy checks',
                'Authorize every sensitive tool call.'),
            _miniFeature(Icons.archive, 'Durable state',
                'Persist messages, runs, and artifacts.'),
            _miniFeature(Icons.activity, 'Live output',
                'Stream progress and final responses.'),
          ],
        ),
        Wrap(
          gap: 12,
          dartStyle: const DartStyle(
            width: SizeValue.percent(100),
            margin: EdgeInsets.only(top: 12),
          ),
          children: [
            Link(
              href: '#install-and-setup',
              tone: Tone.primary,
              dartStyle: const DartStyle(
                width: SizeValue.percent(100),
                justifyContent: JustifyContent.center,
                sm: DartStyle(width: SizeValue.auto),
              ),
              children: [
                Text.span('Install Flint AI'),
                Icon(Icons.arrowRight, size: 16),
              ],
            ),
            Link(
              href: '/ai/guides',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              dartStyle: const DartStyle(
                width: SizeValue.percent(100),
                justifyContent: JustifyContent.center,
                sm: DartStyle(width: SizeValue.auto),
              ),
              child: 'Read the Guides',
            ),
          ],
        ),
      ],
    );
  }

  View _pipelineCard() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.all(16),
        radius: 20,
        border: Border.all(color: const Color.rgba(56, 189, 248, 0.28)),
        background: ThemeToken.color('panel'),
        shadow: ThemeToken.shadow('sm'),
        sm: const DartStyle(padding: EdgeInsets.all(22)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 10,
            minWidth: 0,
            margin: EdgeInsets.only(bottom: 16),
          ),
          children: [
            Text.strong(
              'Agent execution pipeline',
              dartStyle: DartStyle(
                minWidth: 0,
                flex: '1 1 0',
                fontSize: 14,
                color: ThemeToken.color('text'),
              ),
            ),
            Container(
              dartStyle: const DartStyle(
                flexShrink: 0,
                padding: EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                radius: 999,
                background: Color.rgba(52, 211, 153, 0.1),
                color: Color('#34d399'),
                fontSize: 10,
                fontWeight: 800,
              ),
              child: Text.span('OBSERVABLE'),
            ),
          ],
        ),
        _pipelineStep('01', Icons.globe, 'Request context',
            'Auth, tenant, input schema', const Color('#38bdf8')),
        _pipelineConnector(),
        _pipelineStep('02', Icons.sparkles, 'Agent reasoning',
            'Provider, model, instructions', const Color('#c084fc')),
        _pipelineConnector(),
        _pipelineStep('03', Icons.shield, 'Tool execution',
            'Schema validation and policies', const Color('#34d399')),
        _pipelineConnector(),
        _pipelineStep('04', Icons.archive, 'Memory and trace',
            'Thread, run, events, artifacts', const Color('#f59e0b')),
        _pipelineConnector(),
        _pipelineStep('05', Icons.activity, 'Realtime response',
            'Chunks, status, final output', const Color('#f472b6')),
      ],
    );
  }

  View _articleSection() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 56),
        md: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 72),
        ),
        lg: DartStyle(
          padding: EdgeInsets.symmetric(horizontal: 56, vertical: 88),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 22,
            width: SizeValue.percent(100),
            maxWidth: 1040,
            minWidth: 0,
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.all(18),
            radius: 22,
            border: Border(color: ThemeToken.color('line'), width: 1),
            background: ThemeToken.color('panel'),
            overflow: Overflow.hidden,
            md: const DartStyle(padding: EdgeInsets.all(30)),
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                justifyContent: JustifyContent.between,
                alignItems: AlignItems.center,
                gap: 14,
                minWidth: 0,
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    display: Display.grid,
                    gap: 6,
                    minWidth: 0,
                    flex: '1 1 420px',
                  ),
                  children: [
                    Text.span(
                      'DEEP DOCUMENTATION',
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: 0.7,
                        color: Color('#c084fc'),
                      ),
                    ),
                    Text.h2(
                      'Build your first production agent',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 26,
                        lineHeight: 1.2,
                        color: ThemeToken.color('text'),
                        md: const DartStyle(fontSize: 32),
                      ),
                    ),
                    Text.p(
                      'Providers, chat, streaming, tools, routes, workflows, persistence, and security—from setup to a complete support agent.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: ThemeToken.color('muted'),
                      ),
                    ),
                  ],
                ),
                Link(
                  href: '#install-and-setup',
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                    gap: 7,
                    width: SizeValue.percent(100),
                    padding: const EdgeInsets.symmetric(
                        horizontal: 15, vertical: 10),
                    radius: 10,
                    border: Border(
                      color: const Color.rgba(168, 85, 247, 0.36),
                      width: 1,
                    ),
                    background: const Color.rgba(168, 85, 247, 0.1),
                    color: const Color('#c084fc'),
                    fontSize: 12,
                    fontWeight: 800,
                    sm: const DartStyle(width: SizeValue.auto),
                  ),
                  children: [
                    Text.span('Start reading'),
                    Icon(Icons.arrowRight, size: 14),
                  ],
                ),
              ],
            ),
            Container(
              dartStyle: DartStyle(
                width: SizeValue.percent(100),
                minWidth: 0,
                padding: const EdgeInsets.only(top: 20),
                borderTop: Border(color: ThemeToken.color('line'), width: 1),
              ),
              children: [
                if (_contentHtml.isEmpty)
                  Text.p(
                    'The Flint AI guide is being written.',
                    dartStyle: DartStyle(color: ThemeToken.color('muted')),
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
            ),
          ],
        ),
      ],
    );
  }

  View _finalCtaSection() {
    return Container(
      dartStyle: DartStyle(
        width: SizeValue.percent(100),
        minWidth: 0,
        padding: const EdgeInsets.only(top: 0, right: 16, bottom: 64, left: 16),
        background: Background.layers([
          Gradient.radialCircle(
            at: const GradientPosition.percent(50, 100),
            stops: const [
              GradientStop(Color.rgba(168, 85, 247, 0.14), 0),
              GradientStop(Colors.transparent, 58),
            ],
          ),
          ThemeToken.color('bg'),
        ]),
        md: const DartStyle(
          padding: EdgeInsets.only(top: 0, right: 32, bottom: 80, left: 32),
        ),
        lg: const DartStyle(
          padding: EdgeInsets.only(top: 0, right: 56, bottom: 96, left: 56),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: SizeValue.percent(100),
            maxWidth: 1200,
            minWidth: 0,
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
            padding: const EdgeInsets.all(22),
            radius: 22,
            border: Border.all(color: const Color.rgba(168, 85, 247, 0.42)),
            background: Background.layers([
              Gradient.linear(
                135,
                const [
                  GradientStop(Color.rgba(88, 28, 135, 0.28), 0),
                  GradientStop(Color.rgba(14, 116, 144, 0.16), 55),
                  GradientStop(Color.rgba(6, 78, 59, 0.16), 100),
                ],
              ),
              ThemeToken.color('panel'),
            ]),
            shadow: const Shadow(
              y: 24,
              blur: 64,
              spread: -24,
              color: Color.rgba(88, 28, 135, 0.42),
            ),
            sm: const DartStyle(padding: EdgeInsets.all(34)),
            lg: const DartStyle(padding: EdgeInsets.all(44)),
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gridTemplateColumns: 'minmax(0, 1fr)',
                alignItems: AlignItems.center,
                gap: 24,
                minWidth: 0,
                lg: DartStyle(
                  gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 0.65fr)',
                  gap: 40,
                ),
              ),
              children: [
                Container(
                  dartStyle: const DartStyle(
                    display: Display.grid,
                    gap: 10,
                    minWidth: 0,
                  ),
                  children: [
                    Text.span(
                      'YOUR NEXT INTELLIGENT PRODUCT',
                      dartStyle: const DartStyle(
                        color: Color('#c084fc'),
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: 0.8,
                      ),
                    ),
                    Text.h2(
                      'Turn your Flint application into an AI-native platform.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        fontSize: 28,
                        lineHeight: 1.18,
                        fontWeight: 900,
                        color: ThemeToken.color('text'),
                        md: const DartStyle(fontSize: 36),
                      ),
                    ),
                    Text.p(
                      'Start with one provider and one typed tool. Scale into agents, workflows, memory, and realtime product experiences without changing languages.',
                      dartStyle: DartStyle(
                        margin: const EdgeInsets.all(0),
                        maxWidth: 720,
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: ThemeToken.color('muted'),
                      ),
                    ),
                  ],
                ),
                Wrap(
                  gap: 12,
                  dartStyle: const DartStyle(
                    width: SizeValue.percent(100),
                    justifyContent: JustifyContent.start,
                    lg: DartStyle(justifyContent: JustifyContent.end),
                  ),
                  children: [
                    Link(
                      href: '/ai/guides',
                      tone: Tone.primary,
                      dartStyle: const DartStyle(
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: DartStyle(width: SizeValue.auto),
                      ),
                      children: [
                        Text.span('Explore AI Guides'),
                        Icon(Icons.arrowRight, size: 16),
                      ],
                    ),
                    Link(
                      href: '#install-and-setup',
                      variant: ButtonVariant.outline,
                      tone: Tone.neutral,
                      dartStyle: const DartStyle(
                        width: SizeValue.percent(100),
                        justifyContent: JustifyContent.center,
                        sm: DartStyle(width: SizeValue.auto),
                      ),
                      child: 'Install & Setup',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _sectionHeading({
    required String eyebrow,
    required String title,
    required String body,
    required Color color,
    bool alignStart = false,
  }) {
    return Column(
      dartStyle: DartStyle(
        alignItems: alignStart ? AlignItems.start : AlignItems.center,
        gap: 8,
        width: const SizeValue.percent(100),
        minWidth: 0,
        textAlign: alignStart ? TextAlign.left : TextAlign.center,
      ),
      children: [
        Text.span(
          eyebrow,
          dartStyle: DartStyle(
            color: color,
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: 0.8,
          ),
        ),
        Text.h2(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            maxWidth: 820,
            fontSize: 29,
            lineHeight: 1.18,
            fontWeight: 900,
            color: ThemeToken.color('text'),
            textAlign: alignStart ? TextAlign.left : TextAlign.center,
            md: const DartStyle(fontSize: 38),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            maxWidth: 760,
            fontSize: 15,
            lineHeight: 1.65,
            color: ThemeToken.color('muted'),
            textAlign: alignStart ? TextAlign.left : TextAlign.center,
          ),
        ),
      ],
    );
  }

  View _capabilityCard({
    String? id,
    required IconData icon,
    required String label,
    required String title,
    required String body,
    required List<String> bullets,
    required Color color,
  }) {
    return Container(
      props: id == null ? const {} : {'id': id},
      dartStyle: DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: 14,
        minWidth: 0,
        padding: const EdgeInsets.all(18),
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        transition: StyleTransition.all(milliseconds: 180),
        hover: DartStyle(
          border: Border.all(color: color),
          transform: StyleTransform.translateY(-3),
        ),
        sm: const DartStyle(padding: EdgeInsets.all(22)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 10,
            minWidth: 0,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 42,
                height: 42,
                flexShrink: 0,
                display: Display.grid,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                radius: 11,
                color: color,
                background: Color.rgba(168, 85, 247, 0.1),
                border: Border.all(color: color),
              ),
              child: Icon(icon, size: 20),
            ),
            Text.span(
              label,
              dartStyle: DartStyle(
                minWidth: 0,
                textAlign: TextAlign.right,
                color: color,
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: 0.6,
              ),
            ),
          ],
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 18,
            lineHeight: 1.28,
            fontWeight: 900,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          body,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.62,
            color: ThemeToken.color('muted'),
          ),
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: 7,
            minWidth: 0,
            margin: const EdgeInsets.only(top: 4),
            padding: const EdgeInsets.only(top: 14),
            borderTop: Border(color: ThemeToken.color('line'), width: 1),
          ),
          children: [
            for (final bullet in bullets)
              Row(
                dartStyle: const DartStyle(
                  display: Display.flex,
                  alignItems: AlignItems.start,
                  gap: 8,
                  minWidth: 0,
                ),
                children: [
                  Container(
                    dartStyle: const DartStyle(
                      flexShrink: 0,
                      padding: EdgeInsets.only(top: 2),
                    ),
                    child: Icon(Icons.check, size: 14, color: color),
                  ),
                  Text.span(
                    bullet,
                    dartStyle: DartStyle(
                      minWidth: 0,
                      flex: '1 1 0',
                      fontSize: 12,
                      lineHeight: 1.45,
                      fontWeight: 700,
                      color: ThemeToken.color('text'),
                    ),
                  ),
                ],
              ),
          ],
        ),
      ],
    );
  }

  View _metric(IconData icon, String title, String body, Color color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 12,
        minWidth: 0,
        padding: const EdgeInsets.all(14),
        radius: 14,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 38,
            height: 38,
            flexShrink: 0,
            display: Display.grid,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            radius: 10,
            color: color,
            background: Color.rgba(56, 189, 248, 0.1),
          ),
          child: Icon(icon, size: 18),
        ),
        Column(
          dartStyle: const DartStyle(
            alignItems: AlignItems.start,
            gap: 2,
            minWidth: 0,
            flex: '1 1 0',
          ),
          children: [
            Text.strong(
              title,
              dartStyle: DartStyle(
                fontSize: 13,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.span(
              body,
              dartStyle: DartStyle(
                fontSize: 11,
                lineHeight: 1.4,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  View _miniFeature(IconData icon, String title, String body) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.start,
        gap: 10,
        minWidth: 0,
        padding: const EdgeInsets.all(12),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Icon(icon, size: 16, color: const Color('#38bdf8')),
        Column(
          dartStyle: const DartStyle(
            alignItems: AlignItems.start,
            gap: 2,
            minWidth: 0,
            flex: '1 1 0',
          ),
          children: [
            Text.strong(
              title,
              dartStyle:
                  DartStyle(fontSize: 12, color: ThemeToken.color('text')),
            ),
            Text.span(
              body,
              dartStyle: DartStyle(
                fontSize: 11,
                lineHeight: 1.42,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  View _pipelineStep(
    String number,
    IconData icon,
    String title,
    String body,
    Color color,
  ) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: 12,
        minWidth: 0,
        padding: const EdgeInsets.all(12),
        radius: 12,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 38,
            height: 38,
            flexShrink: 0,
            display: Display.grid,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            radius: 10,
            color: color,
            background: Color.rgba(168, 85, 247, 0.1),
          ),
          child: Icon(icon, size: 17),
        ),
        Column(
          dartStyle: const DartStyle(
            alignItems: AlignItems.start,
            gap: 2,
            minWidth: 0,
            flex: '1 1 0',
          ),
          children: [
            Text.strong(
              title,
              dartStyle:
                  DartStyle(fontSize: 13, color: ThemeToken.color('text')),
            ),
            Text.span(
              body,
              dartStyle: DartStyle(
                fontSize: 11,
                lineHeight: 1.4,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Text.span(
          number,
          dartStyle: DartStyle(
            flexShrink: 0,
            fontSize: 11,
            fontWeight: 900,
            fontFamily: FontFamily.monospace,
            color: color,
          ),
        ),
      ],
    );
  }

  View _pipelineConnector() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.flex,
        justifyContent: JustifyContent.center,
        padding: EdgeInsets.symmetric(vertical: 3),
      ),
      child: Icon(Icons.arrowDown, size: 15, color: const Color('#64748b')),
    );
  }

  View _providerChip(String label, Color color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 6,
        padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
        radius: 999,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 6,
            height: 6,
            radius: 999,
            background: color,
          ),
        ),
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
      ],
    );
  }

  View _runSignal(String label, String value, Color color) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.flex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.between,
        gap: 8,
        minWidth: 0,
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        radius: 9,
        background: Color.rgba(255, 255, 255, 0.035),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: 0.5,
            color: color,
          ),
        ),
        Text.span(
          value,
          dartStyle: const DartStyle(
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 10,
            fontFamily: FontFamily.monospace,
            color: Color('#94a3b8'),
          ),
        ),
      ],
    );
  }

  View _studioDot(Color color) {
    return Container(
      dartStyle: DartStyle(
        width: 9,
        height: 9,
        radius: 999,
        background: color,
      ),
    );
  }
}
