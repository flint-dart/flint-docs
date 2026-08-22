import 'package:flint_dart/ui.dart';

import '../shared/page_shell.dart';

class ChangelogPage extends FlintComponent {
  final Map<String, dynamic> props;

  ChangelogPage(this.props);

  List<Map<String, dynamic>> get _entries {
    final raw = props['entries'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((entry) => entry.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  @override
  FlintNode build() {
    final buffer = StringBuffer();
    buffer.writeln('''
<style>
  #changelog-root, #changelog-root * { box-sizing: border-box; }
  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }
  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }
  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }
  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }
  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }
  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }
  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }
  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }
  .cl-md li { margin-bottom: 6px; }
  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }
  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }
  @media (max-width: 640px) {
    .changelog-shell { padding: 34px 16px !important; }
    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }
  }
</style>
<div class="changelog-shell">
  <div class="changelog-hero">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>
      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>
    </div>
    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>
    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>
  </div>
''');

    if (_entries.isEmpty) {
      buffer.writeln('''
  <div style="margin-top:28px;padding:24px;border-radius:14px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);">
    <p style="color:#94a3b8;margin:0;">No changelog entries are available yet.</p>
  </div>
''');
    } else {
      for (var i = 0; i < _entries.length; i++) {
        final entry = _entries[i];
        final isLatest = i == 0;
        final version = entry['version']?.toString() ?? '';
        final contentHtml = entry['contentHtml']?.toString() ?? '';
        buffer.writeln('''
  <div class="changelog-card ${isLatest ? 'latest' : ''}">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:14px;">
      <h2 style="font-size:21px;font-weight:700;color:#fff;margin:0;">v$version</h2>
      ${isLatest ? '<span style="padding:3px 10px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:10px;font-weight:700;color:#34d399;">Latest</span>' : ''}
    </div>
    <div class="cl-md">
      $contentHtml
    </div>
  </div>
''');
      }
    }

    buffer.writeln('</div>');

    return SiteLayout(
      props: props,
      body: HtmlContent(
        id: 'changelog-root',
        html: buffer.toString(),
        props: const {
          'style': {
            'width': '100%',
            'max-width': '100%',
            'overflow-x': 'hidden',
          },
        },
      ),
    );
  }
}
