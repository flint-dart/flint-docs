import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class QuestionsPage extends Component {
  final Map<String, dynamic> props;

  QuestionsPage(this.props);

  List<Map<String, dynamic>> get _questions {
    final raw = props['questions'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((question) => question.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canAnswer =>
      props['canAnswer'] == true ||
      {'admin', 'contributor', 'dev'}.contains(authSession.role);

  @override
  View build() {
    final questions = _questions;
    final tags = _tagsFor(questions);

    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 1152,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 34),
          display: Display.grid,
          gap: 28,
          overflow: Overflow.hidden,
          md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48)),
        ),
        children: [
          _hero(questions.length, tags.length),
          _tagRail(tags),
          if (questions.isEmpty) _emptyState() else _questionList(questions),
        ],
      ),
    );
  }

  View _hero(int questionCount, int tagCount) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 24,
        padding: EdgeInsets.all(24),
        radius: 24,
        border: Border(color: Color.rgba(30, 41, 59, 0.9), width: 1),
        background: Color.rgba(15, 23, 42, 0.72),
        md: DartStyle(padding: EdgeInsets.all(40)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.between,
            gap: 18,
          ),
          children: [
            Container(
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 12,
                maxWidth: 720,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    alignItems: AlignItems.center,
                    gap: 10,
                  ),
                  children: [
                    _pill('Community', const Color('#a7f3d0')),
                    _pill('Q&A', const Color('#d1fae5')),
                  ],
                ),
                Text.h1(
                  'Flint Questions',
                  dartStyle: const DartStyle(
                    fontSize: 32,
                    fontWeight: 750,
                    lineHeight: 1.1,
                    color: Colors.white,
                    margin: EdgeInsets.all(0),
                    md: DartStyle(fontSize: 40),
                  ),
                ),
                Text.p(
                  'Ask practical Flint Dart questions, share solutions, and keep answers easy to find for the next developer.',
                  dartStyle: const DartStyle(
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: Color('#cbd5e1'),
                    margin: EdgeInsets.all(0),
                  ),
                ),
              ],
            ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                gap: 10,
                width: SizeValue.percent(100),
                md: DartStyle(width: SizeValue.auto),
              ),
              children: [
                Link(
                  href: '/questions/ask',
                  dartStyle: const DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    gap: 8,
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                    radius: 10,
                    border:
                        Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
                    background: Color.rgba(52, 211, 153, 0.12),
                  ),
                  children: [
                    Icon(Icons.message, size: 16),
                    Text.span(
                      _isAuthenticated ? 'Ask a Question' : 'Sign in to Ask',
                      dartStyle: const DartStyle(
                        fontSize: 13,
                        fontWeight: 700,
                        color: Color('#a7f3d0'),
                      ),
                    ),
                  ],
                ),
                if (!_isAuthenticated)
                  Link(
                    href: '/questions/ask?mode=register',
                    dartStyle: const DartStyle(
                      display: Display.inlineFlex,
                      alignItems: AlignItems.center,
                      gap: 8,
                      padding:
                          EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                      radius: 10,
                      border: Border(
                          color: Color.rgba(125, 211, 252, 0.34), width: 1),
                      background: Color.rgba(14, 165, 233, 0.1),
                    ),
                    children: [
                      Icon(Icons.plus, size: 16),
                      Text.span(
                        'Create account',
                        dartStyle: const DartStyle(
                          fontSize: 13,
                          fontWeight: 700,
                          color: Color('#bae6fd'),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 12,
          ),
          children: [
            _statCard('$questionCount', 'Questions'),
            _statCard('$tagCount', 'Topics'),
            _statCard(_canAnswer ? 'Open' : 'Read', 'Participation'),
          ],
        ),
      ],
    );
  }

  View _tagRail(List<String> tags) {
    if (tags.isEmpty) return h('span', props: {}, children: []);

    return Container(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 10,
      ),
      children: [
        for (final tag in tags.take(10))
          Container(
            dartStyle: const DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 12, vertical: 7),
              radius: 999,
              border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
              background: Color.rgba(15, 23, 42, 0.58),
            ),
            children: [
              Text.span(
                tag,
                dartStyle: const DartStyle(
                  fontSize: 12,
                  fontWeight: 700,
                  color: Color('#cbd5e1'),
                ),
              ),
            ],
          ),
      ],
    );
  }

  View _questionList(List<Map<String, dynamic>> questions) {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
      ),
      children: [
        for (final question in questions) _questionCard(question),
      ],
    );
  }

  View _questionCard(Map<String, dynamic> question) {
    final title = question['title']?.toString() ?? 'Untitled question';
    final href = question['href']?.toString() ?? '/questions';
    final tag = question['tag']?.toString() ?? 'General';
    final excerpt = question['excerpt']?.toString() ?? '';
    final author = question['author']?.toString() ?? 'Community';
    final date = question['date']?.toString() ?? '';

    return Link(
      href: href,
      dartStyle: const DartStyle(
        display: Display.block,
        padding: EdgeInsets.all(20),
        width: SizeValue.percent(100),
        minWidth: 0,
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            display: Display.grid,
            gap: 12,
          ),
          children: [
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                gap: 10,
              ),
              children: [
                _pill(tag, const Color('#7dd3fc')),
                Text.span(
                  date.isEmpty ? 'Recently asked' : date,
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    color: Color('#64748b'),
                  ),
                ),
              ],
            ),
            Text.h2(
              title,
              dartStyle: const DartStyle(
                fontSize: 20,
                lineHeight: 1.35,
                fontWeight: 700,
                color: Colors.white,
                margin: EdgeInsets.all(0),
                maxWidth: SizeValue.percent(100),
              ),
            ),
            if (excerpt.isNotEmpty)
              Text.p(
                excerpt,
                dartStyle: const DartStyle(
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: Color('#cbd5e1'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.between,
                gap: 12,
              ),
              children: [
                Text.span(
                  'By $author',
                  dartStyle: const DartStyle(
                    fontSize: 12,
                    color: Color('#94a3b8'),
                  ),
                ),
                Row(
                  dartStyle: const DartStyle(
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    gap: 6,
                  ),
                  children: [
                    Text.span(
                      'Open thread',
                      dartStyle: const DartStyle(
                        fontSize: 12,
                        fontWeight: 700,
                        color: Color('#a7f3d0'),
                      ),
                    ),
                    Icon(Icons.arrowRight, size: 14),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _emptyState() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(28),
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
      ),
      children: [
        Text.h2(
          'No questions yet',
          dartStyle: const DartStyle(
            fontSize: 22,
            fontWeight: 700,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          'Start the first thread and help shape the Flint knowledge base.',
          dartStyle: const DartStyle(
            color: Color('#cbd5e1'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Link(
          href: '/questions/ask',
          dartStyle: const DartStyle(
            display: Display.inlineFlex,
            width: SizeValue('max-content'),
            padding: EdgeInsets.symmetric(horizontal: 14, vertical: 9),
            radius: 10,
            background: Color.rgba(52, 211, 153, 0.12),
            border: Border(color: Color.rgba(52, 211, 153, 0.4), width: 1),
          ),
          child: 'Ask a Question',
        ),
      ],
    );
  }

  View _pill(String label, Color color) {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(52, 211, 153, 0.24), width: 1),
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

  View _statCard(String value, String label) {
    return Container(
      dartStyle: const DartStyle(
        minWidth: 132,
        flex: '1 1 132px',
        padding: EdgeInsets.all(14),
        radius: 14,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(2, 6, 23, 0.38),
      ),
      children: [
        Text.p(
          value,
          dartStyle: const DartStyle(
            fontSize: 22,
            fontWeight: 800,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          label,
          dartStyle: const DartStyle(
            fontSize: 12,
            color: Color('#94a3b8'),
            margin: EdgeInsets.only(top: 2, bottom: 0),
          ),
        ),
      ],
    );
  }

  List<String> _tagsFor(List<Map<String, dynamic>> questions) {
    final seen = <String>{};
    final tags = <String>[];
    for (final question in questions) {
      final tag = question['tag']?.toString().trim();
      if (tag == null || tag.isEmpty) continue;
      final key = tag.toLowerCase();
      if (seen.add(key)) tags.add(tag);
    }
    return tags;
  }
}
