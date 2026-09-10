import 'package:flint_dart/ui.dart';

import '../components/guides/content.dart';
import '../components/guides/sidebar.dart';
import '../shared/page_shell.dart';

const _sectionPartial = {
  'introduction': 'introduction',
  'getting-started': 'getting-started',
  'installation': 'installation',
  'create-run': 'create-run',
  'cli': 'cli',
  'project-structure': 'project-structure',
  'building-a-feature': 'building-a-feature',
  'common-patterns': 'common-patterns',
  'testing': 'testing',
  'routing': 'routing',
  'route-params': 'routing',
  'query-params': 'routing',
  'request-response': 'routing',
  'request-body': 'routing',
  'file-uploads': 'routing',
  'route-groups': 'route-groups',
  'middleware': 'middleware',
  'validation': 'validation',
  'authentication': 'authentication',
  'security': 'security',
  'sessions': 'sessions',
  'sessions-and-cookies': 'sessions-and-cookies',
  'security-and-utilities': 'security-and-utilities',
  'cache': 'cache',
  'storage': 'storage',
  'logging': 'logging',
  'errors': 'errors',
  'helpers': 'helpers',
  'architecture': 'architecture',
  'mail': 'mail',
  'ai': 'ai',
  'isolate': 'isolate',
  'isolate-tasks': 'isolate-tasks',
  'swagger-docs': 'swagger-docs',
  'swagger-and-api-docs': 'swagger-and-api-docs',
  'database': 'database',
  'database-api': 'database-api',
  'websockets': 'websockets',
  'views': 'views',
  'templates': 'templates',
  'build-and-rendering': 'build-and-rendering',
  'frontend-ui': 'frontend-ui',
  'ui-widgets': 'ui-widgets',
  'jobs-and-workers': 'jobs-and-workers',
  'seeders': 'seeders',
  'models-and-database': 'models-and-database',
  'models': 'models',
  'orm': 'models',
  'orm-query': 'models',
  'orm-relations': 'models',
  'table-sync': 'table-sync',
  'deployment': 'deployment',
};

class GuidesPage extends Component {
  final Map<String, dynamic> props;
  GuidesPage(this.props) {
    _sectionHtml = props['contentHtml']?.toString();
    _loading = _sectionHtml == null || _sectionHtml!.isEmpty;
  }

  String get _active => props['initialSection']?.toString() ?? 'introduction';
  String? _sectionHtml;
  bool _loading = true;

  @override
  void didMount() {
    if (_loading) {
      _fetchSection(_active);
    }
  }

  Future<void> _fetchSection(String section) async {
    final partial = _sectionPartial[section] ?? section;
    try {
      final res = await clientRouter
          .get<Map<String, dynamic>>('/api/guides/section/$partial');
      if (res.success && res.data != null) {
        setState(() {
          _sectionHtml = res.data!['html']?.toString() ?? '';
          _loading = false;
        });
      } else {
        setState(() {
          _loading = false;
        });
      }
    } catch (_) {
      setState(() {
        _loading = false;
      });
    }
  }

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        ),
        children: [
          Row(
            dartStyle: DartStyle(
              display: Display.flex,
              flexDirection: FlexDirection.column,
              alignItems: AlignItems.start,
              gap: 20,
              md: DartStyle(
                flexDirection: FlexDirection.row,
                gap: 32,
              ),
            ),
            children: [
              GuidesSidebar(active: _active),
              GuidesContent(
                loading: _loading,
                contentHtml: _sectionHtml,
                previousTitle: props['previousGuideTitle']?.toString(),
                previousUrl: props['previousGuideUrl']?.toString(),
                nextTitle: props['nextGuideTitle']?.toString(),
                nextUrl: props['nextGuideUrl']?.toString(),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
