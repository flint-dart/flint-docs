import 'package:flint_ui/flint_ui.dart';

import '../components/guides/content.dart';
import '../components/guides/sidebar.dart';
import '../shared/page_shell.dart';

const _sectionPartial = {
  'introduction': 'installation',
  'installation': 'installation',
  'create-run': 'create-run',
  'cli': 'cli',
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
  'cache': 'cache',
  'storage': 'storage',
  'logging': 'logging',
  'errors': 'errors',
  'helpers': 'helpers',
  'architecture': 'architecture',
  'mail': 'mail',
  'ai': 'ai',
  'isolate': 'isolate',
  'swagger-docs': 'swagger-docs',
  'database': 'database',
  'websockets': 'websockets',
  'views': 'views',
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
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48),
        ),
        children: [
          Row(
            dartStyle: const DartStyle(
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
