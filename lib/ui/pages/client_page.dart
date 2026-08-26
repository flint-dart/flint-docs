import 'package:flint_dart/ui.dart';

import '../shared/page_shell.dart';

class ClientPage extends Component {
  ClientPage(this.props);

  final Map<String, dynamic> props;

  String get _contentHtml => props['contentHtml']?.toString() ?? '';
  int _activeStudioTab = 0;
  bool _copiedCmd = false;

  final List<_ClientSnippet> _studioSnippets = const [
    _ClientSnippet(
      tabTitle: 'Smart Retries',
      badge: 'Exponential Backoff',
      badgeColor: '#10b981',
      description:
          'Idempotent requests automatically retry on 429, 502, 503, and network timeouts with jitter.',
      status: 'HTTP 200 OK • 3 attempts • 412ms',
      code: '''import 'package:flint_client/flint_client.dart';

final client = FlintClient(
  baseUrl: 'https://api.flintdart.dev/v1',
  retryPolicy: RetryPolicy(
    maxAttempts: 4,
    initialDelay: Duration(milliseconds: 200),
    maxDelay: Duration(seconds: 5),
    retryOnStatuses: {429, 502, 503, 504},
    backoffStrategy: BackoffStrategy.exponentialWithJitter,
  ),
);

// Transparently retries with exponential backoff on transient failure
final response = await client.get<Map<String, dynamic>>(
  '/analytics/realtime',
  headers: {'X-Correlation-Id': Uuid().v4()},
);
print('Payload: \${response.data}');''',
    ),
    _ClientSnippet(
      tabTitle: 'Tiered Caching',
      badge: 'Memory + Disk LRU',
      badgeColor: '#06b6d4',
      description:
          'Serve instant cached responses while validating stale data in the background.',
      status: 'CACHE HIT (Memory LRU) • 1.4ms',
      code: '''import 'package:flint_client/flint_client.dart';

final client = FlintClient(
  baseUrl: 'https://api.flintdart.dev/v1',
  cacheStore: MemoryCacheStore(maxEntries: 500),
);

// Cache response for 10 minutes with stale-while-revalidate
final response = await client.get<List<Product>>(
  '/products/catalog',
  cachePolicy: CachePolicy.staleWhileRevalidate(
    ttl: Duration(minutes: 10),
    maxStale: Duration(hours: 2),
  ),
);

print('Products: \${response.data.length} (From cache: \${response.isFromCache})');''',
    ),
    _ClientSnippet(
      tabTitle: 'Cancellation',
      badge: 'Cooperative Abort',
      badgeColor: '#f59e0b',
      description:
          'Cancel in-flight HTTP requests instantly when users navigate away or change search queries.',
      status: 'REQUEST CANCELLED • 0 socket leaks',
      code: '''import 'package:flint_client/flint_client.dart';

CancellationToken? _searchCancelToken;

Future<void> onSearchQueryChanged(String query) async {
  // Cancel previous running search query immediately
  _searchCancelToken?.cancel('User typed a new query');
  _searchCancelToken = CancellationToken();

  try {
    final results = await client.get<List<SearchResult>>(
      '/search',
      queryParameters: {'q': query},
      cancelToken: _searchCancelToken,
    );
    updateSearchResults(results.data);
  } on FlintCancelledException catch (e) {
    print('Search aborted cleanly: \${e.message}');
  }
}''',
    ),
    _ClientSnippet(
      tabTitle: 'File Uploads',
      badge: 'Progress Streaming',
      badgeColor: '#a855f7',
      description:
          'Multipart streaming uploads with real-time byte progress callbacks and chunking.',
      status: 'UPLOAD PROGRESS: 100% (24.8 MB)',
      code: '''import 'package:flint_client/flint_client.dart';

final file = MultipartFile.fromBytes(
  imageBytes,
  filename: 'telemetry_scan.png',
  contentType: MediaType('image', 'png'),
);

final response = await client.upload<UploadResult>(
  '/media/upload',
  files: {'avatar': file},
  data: {'userId': 'usr_9812', 'tag': 'production'},
  onSendProgress: (sentBytes, totalBytes) {
    final percent = (sentBytes / totalBytes * 100).toStringAsFixed(1);
    print('Upload Progress: \$percent% (\$sentBytes / \$totalBytes bytes)');
  },
);''',
    ),
    _ClientSnippet(
      tabTitle: 'WebSockets',
      badge: 'Auto-Reconnect',
      badgeColor: '#ec4899',
      description:
          'Full-duplex real-time communication with automatic heartbeats, backoff, and typed channels.',
      status: 'CONNECTED • wss://api.flintdart.dev/v1/live',
      code: '''import 'package:flint_client/flint_client.dart';

final ws = FlintWebSocket(
  'wss://api.flintdart.dev/v1/live',
  reconnectPolicy: ReconnectPolicy(
    maxAttempts: 10,
    interval: Duration(seconds: 2),
  ),
  heartbeatInterval: Duration(seconds: 30),
);

await ws.connect();

// Stream typed incoming telemetry frames
ws.stream.listen((message) {
  print('Realtime event: \${message.data}');
});

// Send JSON message frame
ws.sendJson({'action': 'subscribe', 'channel': 'robotics_fleet'});''',
    ),
  ];

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
            dartStyle: const DartStyle(
              width: SizeValue.percent(100),
              maxWidth: 1200,
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 32),
              display: Display.grid,
              gap: 40,
              md: DartStyle(
                padding: EdgeInsets.symmetric(horizontal: 32, vertical: 48),
                gap: 56,
              ),
              lg: DartStyle(
                padding: EdgeInsets.symmetric(horizontal: 48, vertical: 64),
                gap: 64,
              ),
            ),
            children: [
              _heroSection(),
              _pillarsMatrix(),
              _requestLifecycleSection(),
              _errorHierarchySection(),
              _guidesDirectory(),
              _articleShell(),
            ],
          ),
        ],
      ),
    );
  }

  // ===========================================================================
  // 1. HERO SECTION & INTERACTIVE STUDIO
  // ===========================================================================
  View _heroSection() {
    final snippet = _studioSnippets[_activeStudioTab];

    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gridTemplateColumns: GridTemplateColumns.one,
        gap: 32,
        alignItems: AlignItems.center,
        width: const SizeValue.percent(100),
        lg: DartStyle(
          gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
          gap: 40,
        ),
        xl: DartStyle(
          gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
          gap: 56,
        ),
      ),
      children: [
        // Left Column: Copy, Badges, CLI Box, and CTAs
        Column(
          dartStyle: const DartStyle(gap: 16, alignItems: AlignItems.start),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                radius: 999,
                background: const Color.rgba(6, 182, 212, 0.12),
                border: Border.all(color: const Color.rgba(6, 182, 212, 0.3)),
                color: const Color('#06b6d4'),
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 0.5,
              ),
              children: [
                Icon(Icons.globe, size: 14, color: const Color('#06b6d4')),
                Text.span('UNIVERSAL DART & FLUTTER CLIENT'),
              ],
            ),
            Text.h1(
              'Flint Client SDK',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: const SizeValue('clamp(2.2rem, 5.5vw, 4.4rem)'),
                lineHeight: 1.05,
                fontWeight: 900,
                color: const Color('transparent'),
                background: Gradient.linear(
                  110,
                  const [
                    GradientStop(Color('#06b6d4'), 0),
                    GradientStop(Color('#3b82f6'), 50),
                    GradientStop(Color('#10b981'), 100),
                  ],
                ),
                backgroundClip: BackgroundClip.text,
                webkitBackgroundClip: BackgroundClip.text,
              ),
            ),
            Text.h2(
              'A production-ready HTTP engine engineered for resilience, performance, and typed simplicity.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 18,
                lineHeight: 1.35,
                fontWeight: 700,
                color: ThemeToken.color('text'),
                md: const DartStyle(fontSize: 22),
              ),
            ),
            Text.p(
              'Eliminate boilerplate across mobile, desktop, CLI, and web apps. FlintClient gives you exponential backoff retries, multi-tier LRU caching, cooperative cancellation tokens, multipart file streaming, and full-duplex WebSocket channels in pure Dart.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 14,
                lineHeight: 1.68,
                color: ThemeToken.color('muted'),
                md: const DartStyle(fontSize: 15),
              ),
            ),
            // Install command box
            Container(
              dartStyle: DartStyle(
                width: const SizeValue.percent(100),
                maxWidth: 520,
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                radius: 10,
                border: Border.all(color: const Color.rgba(6, 182, 212, 0.3)),
                background: const Color.rgba(3, 7, 18, 0.85),
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 10,
                    minWidth: 0,
                  ),
                  children: [
                    Text.span(
                      r'$',
                      dartStyle: const DartStyle(
                        color: Color('#06b6d4'),
                        fontWeight: 900,
                        fontSize: 14,
                        fontFamily: FontFamily.monospace,
                      ),
                    ),
                    Text.span(
                      'dart pub add flint_client',
                      dartStyle: const DartStyle(
                        color: Color('#f8fafc'),
                        fontSize: 13,
                        fontFamily: FontFamily.monospace,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      ),
                    ),
                  ],
                ),
                Button(
                  variant: ButtonVariant.ghost,
                  size: ComponentSize.sm,
                  onPressed: (_) {
                    setState(() => _copiedCmd = true);
                  },
                  dartStyle: DartStyle(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    radius: 6,
                    background: const Color.rgba(255, 255, 255, 0.08),
                    color: _copiedCmd ? const Color('#10b981') : const Color('#cbd5e1'),
                    fontSize: 12,
                    fontWeight: 700,
                  ),
                  children: [
                    Icon(_copiedCmd ? Icons.check : Icons.copy, size: 13),
                    Text.span(_copiedCmd ? 'Copied' : 'Copy'),
                  ],
                ),
              ],
            ),
            // Action CTAs
            Container(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                gap: 12,
                margin: const EdgeInsets.only(top: 8),
              ),
              children: [
                Link(
                  href: '/client/guides',
                  tone: Tone.primary,
                  children: [
                    Text.span('Explore Guides'),
                    Icon(Icons.arrowRight, size: 16),
                  ],
                ),
                Link(
                  href: 'https://pub.dev/packages/flint_client',
                  variant: ButtonVariant.outline,
                  tone: Tone.neutral,
                  children: [
                    Icon(Icons.link, size: 14),
                    Text.span('pub.dev'),
                  ],
                ),
                Link(
                  href: 'https://github.com/flint-dart/flint-client',
                  variant: ButtonVariant.ghost,
                  tone: Tone.neutral,
                  children: [
                    Icon(Icons.code, size: 14),
                    Text.span('GitHub'),
                  ],
                ),
              ],
            ),
          ],
        ),

        // Right Column: Interactive Code Studio & Live Status Strip
        Container(
          dartStyle: DartStyle(
            width: const SizeValue.percent(100),
            minWidth: 0,
            radius: 16,
            border: Border.all(color: const Color.rgba(6, 182, 212, 0.25)),
            background: const Color('#050b14'),
            overflow: Overflow.hidden,
            shadow: const Shadow(
              y: 20,
              blur: 60,
              spread: -20,
              color: Color.rgba(0, 0, 0, 0.8),
            ),
          ),
          children: [
            // Top Bar with macOS Window Dots and Studio Tabs
            Container(
              dartStyle: DartStyle(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                background: const Color.rgba(255, 255, 255, 0.04),
                borderBottom: const Border(
                  color: Color.rgba(255, 255, 255, 0.08),
                  width: 1,
                ),
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                  ),
                  children: [
                    _macDot(const Color('#ef4444')),
                    _macDot(const Color('#f59e0b')),
                    _macDot(const Color('#10b981')),
                  ],
                ),
                Container(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 4,
                    overflow: 'auto',
                  ),
                  children: [
                    for (var i = 0; i < _studioSnippets.length; i++)
                      _tabButton(i, _studioSnippets[i].tabTitle),
                  ],
                ),
              ],
            ),
            // Header Info Strip
            Container(
              dartStyle: DartStyle(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                background: const Color.rgba(6, 182, 212, 0.05),
                borderBottom: const Border(
                  color: Color.rgba(255, 255, 255, 0.05),
                  width: 1,
                ),
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Text.span(
                  snippet.description,
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    color: Color('#94a3b8'),
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  ),
                ),
                Container(
                  dartStyle: DartStyle(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    radius: 4,
                    background: Color.rgba(6, 182, 212, 0.15),
                    color: Color(snippet.badgeColor),
                    fontSize: 11,
                    fontWeight: 800,
                    fontFamily: FontFamily.monospace,
                    flexShrink: 0,
                  ),
                  children: [Text.span(snippet.badge)],
                ),
              ],
            ),
            // Code Editor Box
            Container(
              dartStyle: const DartStyle(
                padding: EdgeInsets.all(18),
                maxHeight: 380,
                overflow: 'auto',
                fontFamily: FontFamily.monospace,
                fontSize: 12.5,
                lineHeight: 1.6,
                background: Color('#030712'),
                color: Color('#e2e8f0'),
                whiteSpace: 'pre',
              ),
              children: [
                Text.span(snippet.code),
              ],
            ),
            // Live Status Strip
            Container(
              dartStyle: DartStyle(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                background: const Color.rgba(255, 255, 255, 0.02),
                borderTop: const Border(
                  color: Color.rgba(255, 255, 255, 0.06),
                  width: 1,
                ),
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 8,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 8,
                  ),
                  children: [
                    Container(
                      dartStyle: DartStyle(
                        width: 7,
                        height: 7,
                        radius: 999,
                        background: Color(snippet.badgeColor),
                        shadow: Shadow(
                          y: 0,
                          blur: 8,
                          spread: 2,
                          color: Color(snippet.badgeColor),
                        ),
                      ),
                    ),
                    Text.span(
                      snippet.status,
                      dartStyle: const DartStyle(
                        fontSize: 11,
                        color: Color('#cbd5e1'),
                        fontFamily: FontFamily.monospace,
                      ),
                    ),
                  ],
                ),
                Text.span(
                  'Pure Dart • Zero Platform Glue',
                  dartStyle: const DartStyle(
                    fontSize: 11,
                    fontWeight: 700,
                    color: Color('#64748b'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  // ===========================================================================
  // 2. PILLARS MATRIX (6 CORE FEATURES)
  // ===========================================================================
  View _pillarsMatrix() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 24,
        width: SizeValue.percent(100),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 8,
            maxWidth: 720,
          ),
          children: [
            Text.span(
              'BUILT FOR RELIABILITY',
              dartStyle: const DartStyle(
                fontSize: 12,
                fontWeight: 900,
                color: Color('#06b6d4'),
                letterSpacing: 0.5,
              ),
            ),
            Text.h2(
              'Everything you need in a modern HTTP client.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 28,
                fontWeight: 800,
                lineHeight: 1.18,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'No need to assemble 5 separate packages. FlintClient provides integrated retry policies, caching strategies, cooperative cancellation, and full error diagnostics out of the box.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 15,
                lineHeight: 1.65,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 16,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr),
            ),
          ),
          children: [
            _pillarCard(
              icon: Icons.refresh,
              title: 'Idempotent Retry Policy',
              desc:
                  'Automatic exponential backoff with jitter, retry budgets, and standard HTTP 429 Retry-After header awareness.',
              accent: '#10b981',
            ),
            _pillarCard(
              icon: Icons.database,
              title: 'Multi-Tier Caching',
              desc:
                  'In-memory LRU combined with persistent disk cache. Supports cacheFirst, networkFirst, and staleWhileRevalidate strategies.',
              accent: '#06b6d4',
            ),
            _pillarCard(
              icon: Icons.x,
              title: 'Cooperative Cancellation',
              desc:
                  'Pass CancellationToken to any request. Abort network sockets cleanly with dedicated FlintCancelledException handling.',
              accent: '#f59e0b',
            ),
            _pillarCard(
              icon: Icons.code,
              title: 'Strict & Lenient Deserialization',
              desc:
                  'Type-safe response decoding. Toggle between strict schema validation or lenient parsing with fallback data serializers.',
              accent: '#a855f7',
            ),
            _pillarCard(
              icon: Icons.activity,
              title: 'Observability & Interceptors',
              desc:
                  'Comprehensive request lifecycle hooks. Inject Correlation IDs, log traffic, track latency, and export OpenTelemetry metrics.',
              accent: '#ec4899',
            ),
            _pillarCard(
              icon: Icons.zap,
              title: 'Full-Duplex WebSockets',
              desc:
                  'Built-in WebSocket client with automatic heartbeat pings, exponential reconnect backoff, and typed JSON stream channels.',
              accent: '#38bdf8',
            ),
          ],
        ),
      ],
    );
  }

  // ===========================================================================
  // 3. REQUEST LIFECYCLE PIPELINE
  // ===========================================================================
  View _requestLifecycleSection() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 20,
        padding: const EdgeInsets.all(28),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        shadow: ThemeToken.shadow('sm'),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 6),
          children: [
            Text.span(
              'UNDER THE HOOD',
              dartStyle: const DartStyle(
                fontSize: 11,
                fontWeight: 900,
                color: Color('#06b6d4'),
                letterSpacing: 0.5,
              ),
            ),
            Text.h3(
              'The FlintClient Pipeline Flow',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 22,
                fontWeight: 800,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'Every request travels through a deterministic, observable lifecycle before returning typed data to your application.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 14,
                lineHeight: 1.6,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 12,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(5, GridTrack.oneFr),
            ),
          ),
          children: [
            _pipelineStage('1. Dispatch', 'Intercept headers & inject Correlation ID', '#06b6d4'),
            _pipelineStage('2. Cache Check', 'Evaluate LRU store & TTL policy', '#3b82f6'),
            _pipelineStage('3. Transport', 'Stream HTTP/2 or HTTP/1.1 socket payload', '#10b981'),
            _pipelineStage('4. Resilience', 'Handle 429/503 retry backoff & jitter', '#f59e0b'),
            _pipelineStage('5. Decode', 'Deserialize typed model or throw structured error', '#a855f7'),
          ],
        ),
      ],
    );
  }

  // ===========================================================================
  // 4. STRUCTURED ERROR HIERARCHY
  // ===========================================================================
  View _errorHierarchySection() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 20,
        padding: const EdgeInsets.all(28),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 6),
          children: [
            Text.span(
              'DIAGNOSTICS & EXCEPTIONS',
              dartStyle: const DartStyle(
                fontSize: 11,
                fontWeight: 900,
                color: Color('#f59e0b'),
                letterSpacing: 0.5,
              ),
            ),
            Text.h3(
              'Predictable, Structured Error Handling',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 22,
                fontWeight: 800,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'Never catch generic exceptions again. Every failure belongs to a typed category with HTTP status codes, original response bodies, and diagnostic stack traces.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 14,
                lineHeight: 1.6,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 12,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(3, GridTrack.oneFr),
            ),
          ),
          children: [
            _errorCard('FlintHttpException', 'HTTP 4xx/5xx status codes with decoded server error body.', '#ef4444'),
            _errorCard('FlintTimeoutException', 'Distinct connect, read, and write socket timeout boundaries.', '#f59e0b'),
            _errorCard('FlintNetworkException', 'DNS failures, offline state, connection refused, or SSL errors.', '#06b6d4'),
            _errorCard('FlintParseException', 'JSON syntax or schema deserialization validation errors.', '#a855f7'),
            _errorCard('FlintCancelledException', 'Request explicitly aborted via CancellationToken.', '#64748b'),
            _errorCard('FlintRateLimitException', 'HTTP 429 with parsed duration from Retry-After header.', '#10b981'),
          ],
        ),
      ],
    );
  }

  // ===========================================================================
  // 5. GUIDES DIRECTORY
  // ===========================================================================
  View _guidesDirectory() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 20,
        width: SizeValue.percent(100),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(display: Display.grid, gap: 6),
          children: [
            Text.span(
              'OFFICIAL DOCUMENTATION',
              dartStyle: const DartStyle(
                fontSize: 11,
                fontWeight: 900,
                color: Color('#06b6d4'),
                letterSpacing: 0.5,
              ),
            ),
            Text.h2(
              'Explore In-Depth Client Guides',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 800,
                color: ThemeToken.color('text'),
              ),
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gridTemplateColumns: GridTemplateColumns.one,
            gap: 16,
            width: const SizeValue.percent(100),
            md: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(2, GridTrack.oneFr),
            ),
            lg: DartStyle(
              gridTemplateColumns: GridTemplateColumns.repeat(4, GridTrack.oneFr),
            ),
          ),
          children: [
            _guideLinkCard(
              title: 'Getting Started',
              desc: 'Installation, base configuration, timeouts, and basic GET/POST.',
              href: '/client/guides/getting-started',
              icon: Icons.rocket,
              color: '#06b6d4',
            ),
            _guideLinkCard(
              title: 'Requests & Headers',
              desc: 'Query parameters, headers, multipart uploads, and URL encoding.',
              href: '/client/guides/requests',
              icon: Icons.send,
              color: '#3b82f6',
            ),
            _guideLinkCard(
              title: 'Caching Strategies',
              desc: 'Memory LRU, disk stores, cacheFirst, and staleWhileRevalidate.',
              href: '/client/guides/caching',
              icon: Icons.database,
              color: '#10b981',
            ),
            _guideLinkCard(
              title: 'Retries & Cancellation',
              desc: 'Exponential backoff, jitter, Retry-After, and CancellationToken.',
              href: '/client/guides/retries-cancellation',
              icon: Icons.refresh,
              color: '#f59e0b',
            ),
          ],
        ),
      ],
    );
  }

  // ===========================================================================
  // 6. ARTICLE SHELL (MARKDOWN RENDER)
  // ===========================================================================
  View _articleShell() {
    if (_contentHtml.isEmpty) {
      return Container(dartStyle: const DartStyle(display: Display.none));
    }

    return Container(
      dartStyle: DartStyle(
        padding: const EdgeInsets.all(28),
        radius: 20,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        width: const SizeValue.percent(100),
      ),
      children: [
        HtmlContent(id: 'client-docs', html: _contentHtml),
      ],
    );
  }

  // ===========================================================================
  // HELPER COMPONENTS
  // ===========================================================================
  FlintNode _tabButton(int index, String title) {
    final active = _activeStudioTab == index;
    return Button(
      variant: ButtonVariant.ghost,
      size: ComponentSize.sm,
      onPressed: (_) => setState(() => _activeStudioTab = index),
      dartStyle: DartStyle(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        radius: 6,
        fontSize: 11,
        fontWeight: active ? 800 : 500,
        color: active ? const Color('#38bdf8') : const Color('#94a3b8'),
        background: active ? const Color.rgba(56, 189, 248, 0.15) : const Color('transparent'),
      ),
      children: [Text.span(title)],
    );
  }

  FlintNode _pillarCard({
    required IconData icon,
    required String title,
    required String desc,
    required String accent,
  }) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: const EdgeInsets.all(20),
        radius: 14,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        transition: StyleTransition.all(milliseconds: 180),
        hover: DartStyle(
          border: Border(color: Color(accent), width: 1),
          transform: StyleTransform.translateY(-2),
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            width: 38,
            height: 38,
            display: Display.grid,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.center,
            radius: 8,
            background: Color.rgba(15, 23, 42, 0.6),
            border: Border.all(color: Color(accent)),
            color: Color(accent),
          ),
          child: Icon(icon, size: 18),
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 16,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.6,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  FlintNode _pipelineStage(String step, String desc, String color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 8,
        padding: const EdgeInsets.all(14),
        radius: 10,
        background: ThemeToken.color('panelStrong'),
        border: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Text.span(
          step,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 800,
            color: Color(color),
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.5,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  FlintNode _errorCard(String className, String desc, String color) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 6,
        padding: const EdgeInsets.all(14),
        radius: 10,
        background: ThemeToken.color('panel'),
        border: Border(color: ThemeToken.color('line'), width: 1),
      ),
      children: [
        Text.strong(
          className,
          dartStyle: DartStyle(
            fontSize: 13,
            color: Color(color),
            fontFamily: FontFamily.monospace,
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12,
            lineHeight: 1.5,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  FlintNode _guideLinkCard({
    required String title,
    required String desc,
    required String href,
    required IconData icon,
    required String color,
  }) {
    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 10,
        padding: const EdgeInsets.all(18),
        radius: 14,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
        transition: StyleTransition.all(milliseconds: 180),
        hover: DartStyle(
          border: Border(color: Color(color), width: 1),
          transform: StyleTransform.translateY(-2),
        ),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                width: 32,
                height: 32,
                display: Display.grid,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                radius: 8,
                background: Color.rgba(15, 23, 42, 0.6),
                border: Border.all(color: Color(color)),
                color: Color(color),
              ),
              child: Icon(icon, size: 16),
            ),
            Icon(Icons.arrowRight, size: 16, color: Color(color)),
          ],
        ),
        Text.h3(
          title,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 15,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          desc,
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            fontSize: 12.5,
            lineHeight: 1.55,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  FlintNode _macDot(Color color) {
    return Container(
      dartStyle: DartStyle(
        width: 10,
        height: 10,
        radius: 999,
        background: color,
      ),
    );
  }
}

class _ClientSnippet {
  const _ClientSnippet({
    required this.tabTitle,
    required this.badge,
    required this.badgeColor,
    required this.description,
    required this.status,
    required this.code,
  });

  final String tabTitle;
  final String badge;
  final String badgeColor;
  final String description;
  final String status;
  final String code;
}
