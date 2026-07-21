import 'package:flint_ui/flint_ui.dart';

import '../shared/page_shell.dart';

class BlogPage extends Component {
  BlogPage(this.props);

  final Map<String, dynamic> props;

  List<Map<String, dynamic>> get _posts {
    final raw = props['posts'];
    if (raw is List) {
      return raw
          .whereType<Map>()
          .map((post) => post.cast<String, dynamic>())
          .toList();
    }
    return const [];
  }

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canWriteBlog =>
      props['canWriteBlog'] == true ||
      {'admin', 'contributor'}.contains(authSession.role);

  @override
  View build() {
    final posts = _posts;
    final featured = posts.isEmpty ? null : posts.first;
    final rest = posts.length <= 1
        ? const <Map<String, dynamic>>[]
        : posts.skip(1).toList();
    final tags = _tagsFor(posts);

    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: DartStyle(
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
          _hero(posts.length, tags.length),
          if (tags.isNotEmpty) _topicRail(tags),
          if (featured == null)
            _emptyState()
          else ...[
            _featuredPost(featured),
            if (rest.isNotEmpty) _postGrid(rest),
          ],
        ],
      ),
    );
  }

  View _hero(int postCount, int tagCount) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 28,
        padding: const EdgeInsets.all(24),
        radius: 24,
        border: const Border(color: Color.rgba(30, 41, 59, 0.95), width: 1),
        background: Background.layers([
          Gradient.linear(
            135,
            [
              GradientStop(Color.rgba(16, 185, 129, 0.16), 0),
              GradientStop(Color.rgba(14, 165, 233, 0.1), 42),
              GradientStop(Color.rgba(15, 23, 42, 0.82), 100),
            ],
          ),
          const Color.rgba(15, 23, 42, 0.72),
        ]),
        md: DartStyle(padding: EdgeInsets.all(40)),
      ),
      children: [
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 20,
          ),
          children: [
            Container(
              dartStyle: DartStyle(
                display: Display.grid,
                gap: 14,
                maxWidth: 720,
                minWidth: 0,
              ),
              children: [
                Row(
                  dartStyle: DartStyle(
                    display: Display.flex,
                    flexWrap: FlexWrap.wrap,
                    alignItems: AlignItems.center,
                    gap: 10,
                  ),
                  children: [
                    _pill('Flint Blog'),
                    _pill('Engineering notes'),
                  ],
                ),
                Text.h1(
                  'Ideas, releases, and practical Flint engineering.',
                  dartStyle: DartStyle(
                    margin: EdgeInsets.all(0),
                    fontSize: 32,
                    fontWeight: 760,
                    lineHeight: 1.08,
                    color: ThemeToken.color('text'),
                    md: DartStyle(fontSize: 42),
                  ),
                ),
                Text.p(
                  'Read framework updates, backend patterns, UI notes, deployment lessons, and production guidance from the Flint ecosystem.',
                  dartStyle: DartStyle(
                    margin: EdgeInsets.all(0),
                    maxWidth: 680,
                    fontSize: 16,
                    lineHeight: 1.7,
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
                md: DartStyle(width: SizeValue.auto, minWidth: 220),
              ),
              children: [
                _stat('$postCount', 'Published posts'),
                _stat('$tagCount', 'Topics covered'),
              ],
            ),
          ],
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            alignItems: AlignItems.center,
            gap: 10,
          ),
          children: [
            Link(
              href: '/blog/create',
              dartStyle: DartStyle(
                display: Display.inlineFlex,
                alignItems: AlignItems.center,
                gap: 8,
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                radius: 10,
                border: Border(color: Color.rgba(52, 211, 153, 0.42), width: 1),
                background: Color.rgba(52, 211, 153, 0.14),
              ),
              children: [
                Icon(_canWriteBlog ? Icons.edit : Icons.logIn, size: 16),
                Text.span(
                  _canWriteBlog ? 'Write a Post' : 'Sign in to Write',
                  dartStyle: DartStyle(
                    fontSize: 13,
                    fontWeight: 800,
                    color: ThemeToken.color('primary'),
                  ),
                ),
              ],
            ),
            if (!_isAuthenticated)
              Link(
                href: '/blog/create?mode=register',
                dartStyle: DartStyle(
                  display: Display.inlineFlex,
                  alignItems: AlignItems.center,
                  gap: 8,
                  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  radius: 10,
                  border:
                      Border(color: Color.rgba(125, 211, 252, 0.34), width: 1),
                  background: Color.rgba(14, 165, 233, 0.1),
                ),
                children: [
                  Icon(Icons.plus, size: 16),
                  Text.span(
                    'Create account',
                    dartStyle: DartStyle(
                      fontSize: 13,
                      fontWeight: 800,
                      color: ThemeToken.color('accent'),
                    ),
                  ),
                ],
              ),
          ],
        ),
      ],
    );
  }

  View _topicRail(List<String> tags) {
    return Container(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        gap: 10,
      ),
      children: [
        for (final tag in tags.take(10))
          Container(
            dartStyle: DartStyle(
              display: Display.inlineFlex,
              alignItems: AlignItems.center,
              gap: 8,
              padding: EdgeInsets.symmetric(horizontal: 12, vertical: 7),
              radius: 999,
              border: Border(color: ThemeToken.color('line'), width: 1),
              background: ThemeToken.color('panel'),
            ),
            children: [
              Icon(Icons.bookmark, size: 13, color: ThemeToken.color('muted')),
              Text.span(
                tag,
                dartStyle: DartStyle(
                  fontSize: 12,
                  fontWeight: 750,
                  color: ThemeToken.color('muted'),
                ),
              ),
            ],
          ),
      ],
    );
  }

  View _featuredPost(Map<String, dynamic> post) {
    final title = post['title']?.toString() ?? 'Untitled post';
    final href = post['href']?.toString() ?? '/blog';
    final excerpt = post['excerpt']?.toString() ?? '';
    final tag = post['tag']?.toString() ?? 'Update';
    final author = post['author']?.toString() ?? 'Flint Team';
    final date = post['date']?.toString() ?? '';

    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 22,
        padding: const EdgeInsets.all(20),
        minWidth: 0,
        radius: 20,
        border: const Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Background.layers([
          Gradient.linear(
            145,
            [
              GradientStop(Color.rgba(14, 165, 233, 0.14), 0),
              GradientStop(Color.rgba(15, 23, 42, 0.66), 58),
              GradientStop(Color.rgba(2, 6, 23, 0.78), 100),
            ],
          ),
          const Color.rgba(15, 23, 42, 0.68),
        ]),
        md: DartStyle(padding: EdgeInsets.all(26)),
        lg: DartStyle(
          gridTemplateColumns: GridTemplateColumns.tracks([
            GridTrack.minmax(SizeValue.zero, SizeValue.fr(1.35)),
            GridTrack.minmax(280, SizeValue.fr(0.65)),
          ]),
          alignItems: AlignItems.stretch,
        ),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 16,
          ),
          children: [
            _meta(tag, date),
            Text.h2(
              title,
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 26,
                fontWeight: 750,
                lineHeight: 1.14,
                color: ThemeToken.color('text'),
                md: DartStyle(fontSize: 32),
              ),
            ),
            Text.p(
              excerpt,
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                maxWidth: 720,
                fontSize: 15,
                lineHeight: 1.72,
                color: ThemeToken.color('muted'),
              ),
            ),
            Row(
              dartStyle: DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                gap: 14,
              ),
              children: [
                _byline(author),
                Row(
                  dartStyle: DartStyle(
                    display: Display.inlineFlex,
                    alignItems: AlignItems.center,
                    gap: 7,
                  ),
                  children: [
                    Text.span(
                      'Read featured post',
                      dartStyle: DartStyle(
                        fontSize: 13,
                        fontWeight: 800,
                        color: ThemeToken.color('primary'),
                      ),
                    ),
                    Icon(Icons.arrowRight,
                        size: 15, color: ThemeToken.color('primary')),
                  ],
                ),
              ],
            ),
          ],
        ),
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 14,
            padding: EdgeInsets.all(22),
            radius: 18,
            border: Border(color: Color.rgba(51, 65, 85, 0.82), width: 1),
            background: ThemeToken.color('panelStrong'),
          ),
          children: [
            Icon(Icons.sparkles, size: 24, color: const Color('#7dd3fc')),
            Text.h3(
              'Latest insight',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 20,
                color: ThemeToken.color('text'),
              ),
            ),
            Text.p(
              'A short, readable article from the Flint team and community.',
              dartStyle: DartStyle(
                margin: EdgeInsets.all(0),
                fontSize: 13,
                lineHeight: 1.65,
                color: ThemeToken.color('muted'),
              ),
            ),
          ],
        ),
      ],
    );
  }

  View _postGrid(List<Map<String, dynamic>> posts) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 16,
        gridTemplateColumns: GridTemplateColumns.one,
        md: DartStyle(
          gridTemplateColumns: GridTemplateColumns.autoFit(280),
        ),
      ),
      children: [
        for (final post in posts) _postCard(post),
      ],
    );
  }

  View _postCard(Map<String, dynamic> post) {
    final title = post['title']?.toString() ?? 'Untitled post';
    final href = post['href']?.toString() ?? '/blog';
    final excerpt = post['excerpt']?.toString() ?? '';
    final tag = post['tag']?.toString() ?? 'Update';
    final author = post['author']?.toString() ?? 'Flint Team';
    final date = post['date']?.toString() ?? '';

    return Link(
      href: href,
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(20),
        minWidth: 0,
        radius: 16,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        _meta(tag, date),
        Text.h2(
          title,
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 21,
            fontWeight: 750,
            lineHeight: 1.25,
            color: ThemeToken.color('text'),
            maxWidth: SizeValue.percent(100),
          ),
        ),
        Text.p(
          excerpt,
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            lineHeight: 1.68,
            color: ThemeToken.color('muted'),
          ),
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.between,
            alignItems: AlignItems.center,
            gap: 12,
          ),
          children: [
            _byline(author),
            Icon(Icons.arrowRight, size: 15, color: ThemeToken.color('muted')),
          ],
        ),
      ],
    );
  }

  View _emptyState() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(28),
        radius: 18,
        border: Border(color: ThemeToken.color('line'), width: 1),
        background: ThemeToken.color('panel'),
      ),
      children: [
        Text.h2(
          'No posts yet',
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 24,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.p(
          'Once the first Flint post is published, it will appear here.',
          dartStyle: DartStyle(
            margin: EdgeInsets.all(0),
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _meta(String tag, String date) {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        gap: 8,
      ),
      children: [
        _pill(tag),
        if (date.isNotEmpty)
          Row(
            dartStyle: DartStyle(
              display: Display.inlineFlex,
              alignItems: AlignItems.center,
              gap: 6,
            ),
            children: [
              Icon(Icons.calendar, size: 13, color: ThemeToken.color('muted')),
              Text.span(
                date,
                dartStyle: DartStyle(
                  fontSize: 12,
                  fontWeight: 650,
                  color: ThemeToken.color('muted'),
                ),
              ),
            ],
          ),
      ],
    );
  }

  View _byline(String author) {
    return Row(
      dartStyle: DartStyle(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: 7,
      ),
      children: [
        Icon(Icons.user, size: 14, color: ThemeToken.color('muted')),
        Text.span(
          author,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 700,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  View _pill(String label) {
    return Container(
      dartStyle: DartStyle(
        width: const SizeValue('max-content'),
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: const Border(color: Color.rgba(5, 150, 105, 0.28), width: 1),
        background: const Color.rgba(5, 150, 105, 0.08),
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

  View _stat(String value, String label) {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 3,
        padding: EdgeInsets.all(16),
        radius: 14,
        border: Border(color: Color.rgba(51, 65, 85, 0.82), width: 1),
        background: ThemeToken.color('panelStrong'),
      ),
      children: [
        Text.span(
          value,
          dartStyle: DartStyle(
            fontSize: 24,
            fontWeight: 800,
            color: ThemeToken.color('text'),
          ),
        ),
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 12,
            fontWeight: 700,
            color: ThemeToken.color('muted'),
          ),
        ),
      ],
    );
  }

  List<String> _tagsFor(List<Map<String, dynamic>> posts) {
    final tags = <String>{};
    for (final post in posts) {
      final tag = post['tag']?.toString().trim();
      if (tag != null && tag.isNotEmpty) {
        tags.add(tag);
      }
    }
    return tags.toList();
  }
}
