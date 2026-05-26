import 'dart:convert';
import 'dart:io';

import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/helper.dart';
import 'package:flint_docs/models/blog_post_model.dart';

class DocsSupport {
  static const String browserEntrypoint =
      '/assets/js/flint-ui/main.dart.js?v=20260526';
  static const String siteName = 'Flint Dart Docs';

  static const List<String> guideTopics = [
    'introduction',
    'flint-story',
    'installation',
    'create-run',
    'cli',
    'routing',
    'route-params',
    'query-params',
    'request-response',
    'request-body',
    'file-uploads',
    'middleware',
    'validation',
    'authentication',
    'security',
    'sessions',
    'cache',
    'storage',
    'logging',
    'errors',
    'helpers',
    'architecture',
    'mail',
    'isolate',
    'swagger-docs',
    'database',
    'websockets',
    'route-groups',
    'views',
    'models',
    'orm',
    'orm-query',
    'orm-relations',
    'table-sync',
    'deployment',
  ];

  static const List<String> apiTopics = [
    'flint-class',
    'request',
    'response',
    'router',
    'middleware',
    'model',
    'query-builder',
    'migration',
    'schema',
    'auth',
    'guards',
    'providers',
    'components',
    'layout',
    'forms',
    'cache',
    'session',
    'storage',
    'mail',
    'validation',
  ];

  Future<Response> renderGettingStartedTopic(
    Request req,
    Response res,
    String topic,
  ) async {
    if (!guideTopics.contains(topic)) {
      return res.status(404).send('Topic not found');
    }
    final topicIndex = guideTopics.indexOf(topic);
    final previousTopicSlug =
        topicIndex > 0 ? guideTopics[topicIndex - 1] : null;
    final nextTopicSlug = topicIndex >= 0 && topicIndex < guideTopics.length - 1
        ? guideTopics[topicIndex + 1]
        : null;
    final previousGuideTitle = previousTopicSlug != null
        ? topicHeading(previousTopicSlug).trim()
        : null;
    final nextGuideTitle =
        nextTopicSlug != null ? topicHeading(nextTopicSlug).trim() : null;
    final hasPreviousGuide = previousTopicSlug != null &&
        previousGuideTitle != null &&
        previousGuideTitle.isNotEmpty;
    final hasNextGuide = nextTopicSlug != null &&
        nextGuideTitle != null &&
        nextGuideTitle.isNotEmpty;
    final heading = topicHeading(topic);
    final contentTopic = guideContentTopic(topic);
    final contentHtml = await readMarkdownContent(
      'lib/content/guides/$contentTopic.md',
    );
    return res.page(
      'Guides',
      title: '$heading Guide - Flint Dart',
      meta: pageMeta(
        title: '$heading Guide - Flint Dart',
        description:
            'Learn $heading in Flint Dart with clear explanations and Dart examples.',
        canonicalPath: '/guides/$topic',
      ),
      props: {
        ...await baseData(req),
        'showGuideMenu': true,
        'initialSection': topic,
        'contentHtml': contentHtml,
        'previousGuideTitle': hasPreviousGuide ? previousGuideTitle : null,
        'previousGuideUrl':
            hasPreviousGuide ? '/guides/$previousTopicSlug' : null,
        'nextGuideTitle': hasNextGuide ? nextGuideTitle : null,
        'nextGuideUrl': hasNextGuide ? '/guides/$nextTopicSlug' : null,
      },
    );
  }

  Future<Response> renderApiTopic(
    Request req,
    Response res,
    String topic,
  ) async {
    if (!apiTopics.contains(topic)) {
      return res.status(404).send('Topic not found');
    }
    final heading = topicHeading(topic);
    final topicIndex = apiTopics.indexOf(topic);
    final previousTopicSlug = topicIndex > 0 ? apiTopics[topicIndex - 1] : null;
    final nextTopicSlug = topicIndex >= 0 && topicIndex < apiTopics.length - 1
        ? apiTopics[topicIndex + 1]
        : null;
    final previousApiTitle = previousTopicSlug != null
        ? topicHeading(previousTopicSlug).trim()
        : null;
    final nextApiTitle =
        nextTopicSlug != null ? topicHeading(nextTopicSlug).trim() : null;
    final contentHtml = await readMarkdownContent(
      'lib/content/api/api-$topic.md',
    );
    return res.page(
      'Api',
      title: '$heading API - Flint Dart',
      meta: pageMeta(
        title: '$heading API - Flint Dart',
        description: 'Reference for the $heading API in Flint Dart.',
        canonicalPath: topic == 'flint-class' ? '/api' : '/api/$topic',
      ),
      props: {
        ...await baseData(req),
        'showApiMenu': true,
        'initialSection': topic,
        'contentHtml': contentHtml,
        'previousApiTitle': previousApiTitle,
        'previousApiUrl':
            previousTopicSlug != null ? '/api/$previousTopicSlug' : null,
        'nextApiTitle': nextApiTitle,
        'nextApiUrl': nextTopicSlug != null ? '/api/$nextTopicSlug' : null,
      },
    );
  }

  String topicHeading(String slug) {
    return slug
        .split('-')
        .where((part) => part.isNotEmpty)
        .map((part) => '${part[0].toUpperCase()}${part.substring(1)}')
        .join(' ');
  }

  String guideContentTopic(String slug) {
    return switch (slug) {
      'route-params' ||
      'query-params' ||
      'request-response' ||
      'request-body' ||
      'file-uploads' =>
        'routing',
      'orm' || 'orm-query' || 'orm-relations' => 'models',
      _ => slug,
    };
  }

  Future<String> loadFrameworkChangelog() async {
    final candidates = <String>[
      'docs/FLINT_DART_CHANGELOG.md',
      '../flint_dart/CHANGELOG.md',
      'flint_dart/CHANGELOG.md',
      'CHANGELOG.md',
    ];

    for (final filePath in candidates) {
      final file = File(filePath);
      if (await file.exists()) {
        return await file.readAsString();
      }
    }

    return '# Changelog not found\n\nUnable to locate `flint_dart/CHANGELOG.md`.';
  }

  List<Map<String, String>> parseChangelogEntries(String markdown) {
    final lines = markdown.replaceAll('\r\n', '\n').split('\n');
    final entries = <Map<String, String>>[];
    final buffer = <String>[];
    String? currentVersion;

    void flush() {
      final version = currentVersion;
      if (version == null) return;
      final content = buffer.join('\n').trim();
      entries.add({
        'version': version,
        'content': content.isEmpty ? 'No details provided.' : content,
      });
      buffer.clear();
    }

    for (final rawLine in lines) {
      final line = rawLine.trimRight();
      final version = extractVersion(line);
      if (version != null) {
        flush();
        currentVersion = version;

        final headerDetails = extractHeaderDetails(line, version);
        if (headerDetails.isNotEmpty) {
          buffer.add(headerDetails);
        }
        continue;
      }

      if (currentVersion == null) continue;
      final cleaned = cleanChangelogLine(line);
      if (cleaned.isEmpty && buffer.isNotEmpty && buffer.last.isEmpty) continue;
      buffer.add(cleaned);
    }

    flush();
    return entries;
  }

  String? extractVersion(String line) {
    final bracketMatch =
        RegExp(r'\[(\d+\.\d+\.\d+(?:\+\d+)?)\]').firstMatch(line);
    if (bracketMatch != null) return bracketMatch.group(1);

    final versionTextMatch =
        RegExp(r'Version\s+(\d+\.\d+\.\d+(?:\+\d+)?)', caseSensitive: false)
            .firstMatch(line);
    if (versionTextMatch != null) return versionTextMatch.group(1);

    return null;
  }

  String extractHeaderDetails(String line, String version) {
    String cleaned = line;
    final escapedVersion = RegExp.escape(version);
    final bracketMatch = RegExp('\\[$escapedVersion\\]').firstMatch(cleaned);
    if (bracketMatch != null) {
      cleaned = cleaned.substring(bracketMatch.end);
    } else {
      cleaned = cleaned.replaceAll(
        RegExp('Version\\s+$escapedVersion', caseSensitive: false),
        '',
      );
    }
    cleaned = cleaned.replaceAll(RegExp(r'^[\s#\-\–—:]+'), '').trim();
    return cleaned;
  }

  String cleanChangelogLine(String line) {
    return line
        .replaceAll(RegExp(r'^\s*---+\s*'), '')
        .replaceAll(RegExp(r'^```+\s*$'), '')
        .trimRight();
  }

  Future<List<Map<String, dynamic>>> fetchBlogPosts() async {
    final qb = QueryBuilder(table: 'blog_posts')
      ..orderBy('published_at', 'DESC');
    final rows = await qb.get();
    return rows.map(toBlogViewModel).toList();
  }

  Future<List<Map<String, dynamic>>> fetchQuestions() async {
    final qb = QueryBuilder(table: 'questions')
      ..orderBy('published_at', 'DESC');
    final rows = await qb.get();
    return rows.map(toQuestionViewModel).toList();
  }

  Future<List<Map<String, dynamic>>> fetchCommentsForPost(
      Map<String, dynamic> post,
      String? currentUserId,
      String? currentUserName,
      String? currentUserEmail) async {
    final postId = post['id']?.toString();
    if (postId == null) return [];
    final qb = QueryBuilder(table: 'comments')
      ..where('post_id', "=", postId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map((row) {
      return {
        ...toCommentViewModel(row),
        'can_edit': canEditComment(
          row,
          currentUserId,
          currentUserName,
          currentUserEmail,
        ),
      };
    }).toList();
  }

  Future<List<Map<String, dynamic>>> fetchAnswersForQuestion(
      Map<String, dynamic> question,
      String? currentUserId,
      String? currentUserName,
      String? currentUserEmail) async {
    final questionId = question['id']?.toString();
    if (questionId == null) return [];
    final qb = QueryBuilder(table: 'answers')
      ..where('question_id', "=", questionId)
      ..orderBy('published_at', 'ASC');
    final rows = await qb.get();
    return rows.map((row) {
      final viewModel = toAnswerViewModel(row);
      final data = {
        ...viewModel,
        'can_edit': canEditAnswer(
          row,
          currentUserId,
          currentUserName,
          currentUserEmail,
        ),
      };

      return data;
    }).toList();
  }

  Map<String, dynamic> toBlogViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final rawExcerpt = row['excerpt']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    final cleanedExcerpt = excerptFromMarkdown(
      rawExcerpt.isNotEmpty ? rawExcerpt : body,
      maxLength: 160,
    );
    return {
      'id': row['id']?.toString(),
      'title': row['title']?.toString() ?? '',
      'slug': row['slug']?.toString() ?? '',
      'body': body,
      'tag': row['tag']?.toString() ?? '',
      'author': row['author']?.toString() ?? 'Flint Team',
      'published_at': publishedAt,
      'date': formatDate(publishedAt),
      'href': '/blog/${row['slug']}',
      'excerpt': cleanedExcerpt,
    };
  }

  Map<String, dynamic> toQuestionViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    final safeBody = escapeHtml(body);
    final excerpt =
        safeBody.length > 140 ? '${safeBody.substring(0, 140)}...' : safeBody;
    return {
      'id': row['id']?.toString(),
      'title': row['title']?.toString() ?? '',
      'slug': row['slug']?.toString() ?? '',
      'tag': row['tag']?.toString() ?? '',
      'author': row['author']?.toString() ?? 'Community',
      'published_at': publishedAt,
      'date': formatDate(publishedAt),
      'href': '/questions/${row['slug']}',
      'body': safeBody,
      'excerpt': excerpt,
    };
  }

  Map<String, dynamic> toAnswerViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    return {
      'id': row['id']?.toString(),
      'question_id': row['question_id']?.toString(),
      'body': escapeHtml(body),
      'user_id': row['user_id']?.toString(),
      'author': row['author']?.toString() ?? 'Community',
      'published_at': publishedAt,
      'date': formatDate(publishedAt),
    };
  }

  Map<String, dynamic> toCommentViewModel(Map<String, dynamic> row) {
    final publishedAt = row['published_at']?.toString() ?? '';
    final body = row['body']?.toString() ?? '';
    return {
      'id': row['id']?.toString(),
      'post_id': row['post_id']?.toString(),
      'body': escapeHtml(body),
      'user_id': row['user_id']?.toString(),
      'author': row['author']?.toString() ?? 'Community',
      'published_at': publishedAt,
      'date': formatDate(publishedAt),
    };
  }

  Future<String> uniqueBlogSlug(String title) async {
    final base = Str.slugify(title).trim();
    final root = base.isNotEmpty
        ? base
        : 'blog-${DateTime.now().millisecondsSinceEpoch}';

    var candidate = root;
    var suffix = 2;
    while (await BlogPost().firstWhere('slug', candidate) != null) {
      candidate = '$root-$suffix';
      suffix++;
    }
    return candidate;
  }

  String excerptFromMarkdown(String source, {int maxLength = 160}) {
    final plain = stripMarkdown(source).replaceAll(RegExp(r'\s+'), ' ').trim();
    if (plain.isEmpty) return '';
    if (plain.length <= maxLength) return plain;
    return '${plain.substring(0, maxLength).trimRight()}...';
  }

  String stripMarkdown(String source) {
    if (source.isEmpty) return '';
    var text = source.replaceAll('\r\n', '\n');
    text = text.replaceAll(RegExp(r'```[\s\S]*?```'), ' ');
    text = text.replaceAll(RegExp(r'`([^`]*)`'), r'$1');
    text = text.replaceAll(RegExp(r'!\[([^\]]*)\]\([^)]+\)'), r'$1');
    text = text.replaceAll(RegExp(r'\[([^\]]+)\]\([^)]+\)'), r'$1');
    text = text.replaceAll(RegExp(r'^\s{0,3}#{1,6}\s*', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*>\s?', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*[-*+]\s+', multiLine: true), '');
    text = text.replaceAll(RegExp(r'^\s*\d+\.\s+', multiLine: true), '');
    text = text.replaceAll(RegExp(r'(\*\*|__|\*|_)'), '');
    text = text.replaceAll(RegExp(r'~~'), '');
    return text;
  }

  String absoluteUrl(String pathOrUrl) {
    final trimmed = pathOrUrl.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    final base = FlintEnv.get('APP_URL', 'http://localhost:3030').trim();
    final normalizedBase =
        base.endsWith('/') ? base.substring(0, base.length - 1) : base;
    final normalizedPath = trimmed.startsWith('/') ? trimmed : '/$trimmed';
    return '$normalizedBase$normalizedPath';
  }

  String defaultOgImageUrl() {
    return absoluteUrl('/assets/images/logo-icon.png?v=20260212');
  }

  String jsonForHtmlScript(Map<String, dynamic> value) {
    return jsonEncode(value).replaceAll('</script>', r'<\/script>');
  }

  Response renderContentPage(Response res, Map<String, dynamic> props) {
    return res.page(
      'Content',
      title: props['title']?.toString() ?? 'Flint Dart',
      meta: metaFromProps(props),
      props: props,
    );
  }

  FlintPageMeta pageMeta({
    required String title,
    String? description,
    String? canonicalPath,
    String? imageUrl,
    String type = 'website',
    String twitterCard = 'summary_large_image',
    Map<String, String> meta = const {},
    Map<String, String> openGraph = const {},
    Map<String, String> twitter = const {},
    Map<String, Object?>? structuredData,
  }) {
    return FlintPageMeta(
      title: title,
      description: description,
      canonicalUrl: canonicalPath == null ? null : absoluteUrl(canonicalPath),
      imageUrl: imageUrl ?? defaultOgImageUrl(),
      type: type,
      siteName: siteName,
      twitterCard: twitterCard,
      meta: meta,
      openGraph: openGraph,
      twitter: twitter,
      structuredData: structuredData,
    );
  }

  FlintPageMeta metaFromProps(Map<String, dynamic> props) {
    final title = props['title']?.toString() ?? 'Flint Dart';
    final canonical = props['canonicalUrl']?.toString();
    return FlintPageMeta(
      title: title,
      description: props['description']?.toString(),
      canonicalUrl: canonical == null || canonical.isEmpty
          ? null
          : absoluteUrl(canonical),
      imageUrl: props['ogImageUrl']?.toString() ?? defaultOgImageUrl(),
      type: props['ogType']?.toString() ?? 'website',
      siteName: siteName,
      twitterCard: props['twitterCard']?.toString() ?? 'summary_large_image',
    );
  }

  Future<String> readMarkdownContent(String path) async {
    final file = File(path);
    if (!await file.exists()) return '';
    return renderMarkdownToHtml(await file.readAsString());
  }

  String blogIndexHtml(
    List<Map<String, dynamic>> posts, {
    required bool canWriteBlog,
  }) {
    final out = StringBuffer()
      ..writeln('<section class="content-section">')
      ..writeln('<div class="content-hero">')
      ..writeln('<p class="eyebrow">Blog</p>')
      ..writeln('<h1>Latest from the Flint team</h1>')
      ..writeln(
          '<p>Product releases, deep dives, and best practices from the community.</p>')
      ..writeln(canWriteBlog
          ? '<p><a class="button primary" href="/blog/create">Create Blog Post</a></p>'
          : '<p><a class="button" href="/questions/ask">Sign in to Create Blog Post</a></p>')
      ..writeln('</div>')
      ..writeln('<div class="card-grid">');
    for (final post in posts) {
      out
        ..writeln('<article class="content-card">')
        ..writeln(
            '<p class="eyebrow">${htmlEscape(post['tag'])} · ${htmlEscape(post['date'])}</p>')
        ..writeln('<h2>${htmlEscape(post['title'])}</h2>')
        ..writeln('<p>${htmlEscape(post['excerpt'])}</p>')
        ..writeln('<p class="muted">By ${htmlEscape(post['author'])}</p>')
        ..writeln('<p><a href="${attrEscape(post['href'])}">Read more</a></p>')
        ..writeln('</article>');
    }
    out
      ..writeln('</div>')
      ..writeln('</section>');
    return out.toString();
  }

  String blogWriteHtml() {
    return '''
<section class="content-section narrow">
  <div class="content-hero">
    <p class="eyebrow">Blog · New Post</p>
    <h1>Write a Blog Post</h1>
    <p>Share updates, guides, and best practices with the Flint community.</p>
  </div>
  <form class="content-form" method="post" action="/blog/create">
    <label>Title<input name="title" type="text" required placeholder="Clear, descriptive title"></label>
    <label>Tag<input name="tag" type="text" required placeholder="Release, Guide, Performance..."></label>
    <label>Body<textarea name="body" rows="12" required placeholder="Write the full post..."></textarea></label>
    <button type="submit">Publish Post</button>
  </form>
</section>
''';
  }

  String blogShowHtml(
    Map<String, dynamic> post,
    String postBodyHtml,
    List<Map<String, dynamic>> comments, {
    required bool isAuthenticated,
  }) {
    final out = StringBuffer()
      ..writeln('<section class="content-section narrow">')
      ..writeln('<article class="content-card">')
      ..writeln(
          '<p class="eyebrow">${htmlEscape(post['tag'])} · ${htmlEscape(post['date'])}</p>')
      ..writeln('<h1>${htmlEscape(post['title'])}</h1>')
      ..writeln('<p class="muted">By ${htmlEscape(post['author'])}</p>')
      ..writeln('<div class="markdown-body">$postBodyHtml</div>')
      ..writeln('<p><a href="/blog">Back to blog</a></p>')
      ..writeln('</article>')
      ..writeln('<section id="comments" class="content-card">')
      ..writeln('<h2>Comments</h2>');
    if (comments.isEmpty) {
      out.writeln('<p>No comments yet. Start the conversation.</p>');
    }
    for (final comment in comments) {
      out
        ..writeln('<article class="sub-card">')
        ..writeln(
            '<p class="eyebrow">${htmlEscape(comment['author'] ?? 'Anonymous')} · ${htmlEscape(comment['date'])}</p>')
        ..writeln('<p>${htmlEscape(comment['body'])}</p>')
        ..writeln('</article>');
    }
    out.writeln('</section>');
    if (isAuthenticated) {
      out
        ..writeln(
            '<form class="content-form" method="post" action="/blog/${attrEscape(post['slug'])}/comments">')
        ..writeln('<h2>Add a Comment</h2>')
        ..writeln(
            '<label>Comment<textarea name="body" rows="5" required></textarea></label>')
        ..writeln('<button type="submit">Submit Comment</button>')
        ..writeln('</form>');
    } else {
      out.writeln('<div class="content-card"><p>Sign in to comment.</p></div>');
    }
    out.writeln('</section>');
    return out.toString();
  }

  String questionsIndexHtml(List<Map<String, dynamic>> questions) {
    final out = StringBuffer()
      ..writeln('<section class="content-section">')
      ..writeln('<div class="content-hero">')
      ..writeln('<p class="eyebrow sky">Questions</p>')
      ..writeln('<h1>Ask and answer Flint questions</h1>')
      ..writeln('<p>Searchable questions with clean permalinks for SEO.</p>')
      ..writeln(
          '<p><a class="button primary" href="/questions/ask">Ask a Question</a></p>')
      ..writeln('</div>')
      ..writeln('<div class="card-grid">');
    for (final question in questions) {
      out
        ..writeln('<article class="content-card">')
        ..writeln(
            '<p class="eyebrow sky">${htmlEscape(question['tag'])} · ${htmlEscape(question['date'])}</p>')
        ..writeln('<h2>${htmlEscape(question['title'])}</h2>')
        ..writeln('<p>${htmlEscape(question['excerpt'])}</p>')
        ..writeln('<p class="muted">By ${htmlEscape(question['author'])}</p>')
        ..writeln(
            '<p><a href="${attrEscape(question['href'])}">Read more</a></p>')
        ..writeln('</article>');
    }
    out
      ..writeln('</div>')
      ..writeln('</section>');
    return out.toString();
  }

  String questionAskHtml({required bool isAuthenticated}) {
    final button = isAuthenticated
        ? '<button type="submit">Submit Question</button>'
        : '<p class="muted">You need to sign in to post a question.</p>';
    return '''
<section class="content-section narrow">
  <div class="content-hero">
    <p class="eyebrow sky">Ask · New Question</p>
    <h1>Ask a Question</h1>
    <p>Share a clear title and details so others can help.</p>
  </div>
  <form class="content-form" method="post" action="/questions/ask">
    <label>Title<input name="title" type="text" required placeholder="Short, specific title"></label>
    <label>Tag<input name="tag" type="text" required placeholder="Routing, Database, Auth..."></label>
    <label>Question<textarea name="body" rows="8" required placeholder="Describe the issue, expected behavior, and what you've tried..."></textarea></label>
    $button
  </form>
</section>
''';
  }

  String questionShowHtml(
    Map<String, dynamic> question,
    List<Map<String, dynamic>> answers, {
    required bool isAuthenticated,
    required bool canAnswer,
  }) {
    final out = StringBuffer()
      ..writeln('<section class="content-section narrow">')
      ..writeln('<article class="content-card">')
      ..writeln(
          '<p class="eyebrow sky">${htmlEscape(question['tag'])} · ${htmlEscape(question['date'])}</p>')
      ..writeln('<h1>${htmlEscape(question['title'])}</h1>')
      ..writeln('<p class="muted">By ${htmlEscape(question['author'])}</p>')
      ..writeln(
          '<div class="markdown-body">${renderMarkdownToHtml(question['body']?.toString() ?? '')}</div>')
      ..writeln('</article>')
      ..writeln('<section id="answers" class="content-card">')
      ..writeln('<h2>Answers</h2>');
    if (answers.isEmpty) {
      out.writeln('<p>No answers yet.</p>');
    }
    for (final answer in answers) {
      out
        ..writeln('<article class="sub-card">')
        ..writeln(
            '<p class="eyebrow sky">${htmlEscape(answer['author'] ?? 'Anonymous')} · ${htmlEscape(answer['date'])}</p>')
        ..writeln(
            '<div class="markdown-body">${renderMarkdownToHtml(answer['body']?.toString() ?? '')}</div>')
        ..writeln('</article>');
    }
    out.writeln('</section>');
    if (isAuthenticated && canAnswer) {
      out
        ..writeln(
            '<form class="content-form" method="post" action="/questions/${attrEscape(question['slug'])}/answers">')
        ..writeln('<h2>Add an Answer</h2>')
        ..writeln(
            '<label>Answer<textarea name="body" rows="6" required></textarea></label>')
        ..writeln('<button type="submit">Submit Answer</button>')
        ..writeln('</form>');
    }
    out.writeln('</section>');
    return out.toString();
  }

  String htmlEscape(Object? value) {
    return const HtmlEscape().convert(value?.toString() ?? '');
  }

  String attrEscape(Object? value) {
    return const HtmlEscape(HtmlEscapeMode.attribute)
        .convert(value?.toString() ?? '');
  }

  String renderMarkdownToHtml(String source) {
    if (source.trim().isEmpty) return '';

    final lines = source.replaceAll('\r\n', '\n').split('\n');
    final out = StringBuffer();
    final paragraph = <String>[];
    final listItems = <String>[];
    String? listType; // 'ul' | 'ol'
    var inCodeBlock = false;
    var codeLang = '';
    final codeLines = <String>[];

    void flushParagraph() {
      if (paragraph.isEmpty) return;
      final text = paragraph.join(' ').trim();
      if (text.isNotEmpty) {
        out.writeln('<p>${renderInlineMarkdown(text)}</p>');
      }
      paragraph.clear();
    }

    void flushList() {
      if (listItems.isEmpty || listType == null) return;
      out.writeln('<$listType>');
      for (final item in listItems) {
        out.writeln('<li>${renderInlineMarkdown(item)}</li>');
      }
      out.writeln('</$listType>');
      listItems.clear();
      listType = null;
    }

    void flushCodeBlock() {
      if (!inCodeBlock) return;
      out.writeln(renderCodeBlockHtml(codeLines.join('\n'), codeLang));
      inCodeBlock = false;
      codeLang = '';
      codeLines.clear();
    }

    for (final rawLine in lines) {
      final line = rawLine.replaceAll('\t', '  ');
      final trimmed = line.trimRight();

      if (trimmed.trimLeft().startsWith('```')) {
        flushParagraph();
        flushList();
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          inCodeBlock = true;
          codeLang = trimmed.trim().substring(3).trim();
          codeLines.clear();
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.add(rawLine);
        continue;
      }

      final pure = trimmed.trim();
      if (pure.isEmpty) {
        flushParagraph();
        flushList();
        continue;
      }

      if (isRawHtmlLine(pure)) {
        flushParagraph();
        flushList();
        out.writeln(trimmed);
        continue;
      }

      final heading = RegExp(r'^(#{1,6})\s+(.+)$').firstMatch(pure);
      if (heading != null) {
        flushParagraph();
        flushList();
        final level = heading.group(1)!.length;
        final text = heading.group(2)!.trim();
        out.writeln('<h$level>${renderInlineMarkdown(text)}</h$level>');
        continue;
      }

      final ulMatch = RegExp(r'^[-*+]\s+(.+)$').firstMatch(pure);
      final olMatch = RegExp(r'^(\d+)\.\s+(.+)$').firstMatch(pure);
      if (ulMatch != null || olMatch != null) {
        flushParagraph();
        final nextType = ulMatch != null ? 'ul' : 'ol';
        if (listType != null && listType != nextType) {
          flushList();
        }
        listType = nextType;
        listItems.add((ulMatch?.group(1) ?? olMatch!.group(2)!).trim());
        continue;
      }

      if (listType != null) {
        // Continuation line for previous list item.
        listItems[listItems.length - 1] =
            '${listItems.last} ${pure.trimLeft()}'.trim();
        continue;
      }

      final blockquote = RegExp(r'^>\s?(.*)$').firstMatch(pure);
      if (blockquote != null) {
        flushParagraph();
        flushList();
        out.writeln(
            '<blockquote><p>${renderInlineMarkdown(blockquote.group(1)!.trim())}</p></blockquote>');
        continue;
      }

      paragraph.add(pure);
    }

    flushParagraph();
    flushList();
    flushCodeBlock();

    return out.toString();
  }

  bool isRawHtmlLine(String line) {
    final trimmed = line.trim();
    return trimmed.startsWith('<') && trimmed.endsWith('>');
  }

  String renderCodeBlockHtml(String source, String language) {
    final safeLanguage = language.trim().isEmpty ? 'code' : language.trim();
    final languageClass = language.trim().isEmpty
        ? ''
        : ' language-${escapeHtmlAttribute(language.trim())}';
    final code = escapeHtml(source);
    return '''
<div class="code-block" style="margin:24px 0;border:1px solid rgba(30,41,59,1);border-radius:12px;background:rgba(3,7,18,0.88);overflow:hidden;box-shadow:0 18px 45px rgba(2,6,23,0.24);">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-bottom:1px solid rgba(30,41,59,0.85);background:linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.72));">
    <span style="font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;font-weight:800;color:#cbd5e1;">CodeBlock</span>
    <span style="display:flex;align-items:center;gap:8px;">
      <span style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono',monospace;font-size:11px;font-weight:800;color:#a7f3d0;text-transform:uppercase;letter-spacing:0;">${escapeHtml(safeLanguage)}</span>
      <button type="button" onclick="var code=this.closest('.code-block').querySelector('code').innerText;if(navigator.clipboard){navigator.clipboard.writeText(code);}else{var el=document.createElement('textarea');el.value=code;document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}var old=this.textContent;this.textContent='Copied';setTimeout(()=>this.textContent=old,1200);" style="appearance:none;border:1px solid rgba(148,163,184,0.22);border-radius:8px;background:rgba(15,23,42,0.88);color:#cbd5e1;cursor:pointer;font-size:11px;font-weight:800;padding:5px 8px;">Copy</button>
    </span>
  </div>
  <pre style="margin:0;overflow-x:auto;padding:16px;background:rgba(2,6,23,0.92);"><code class="code-block__code$languageClass" style="display:block;white-space:pre;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono',monospace;font-size:13px;line-height:1.68;color:#dbeafe;">$code</code></pre>
</div>
''';
  }

  String renderInlineMarkdown(String text) {
    var html = escapeHtml(text);

    html = html.replaceAllMapped(RegExp(r'`([^`]+)`'), (m) {
      return '<code>${m.group(1)}</code>';
    });

    html = html.replaceAllMapped(
      RegExp(r'\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)'),
      (m) {
        final label = m.group(1)!;
        final href = escapeHtmlAttribute(m.group(2)!);
        return '<a href="$href" rel="noopener noreferrer">$label</a>';
      },
    );

    html = html.replaceAllMapped(RegExp(r'\*\*([^*]+)\*\*'), (m) {
      return '<strong>${m.group(1)}</strong>';
    });
    html = html.replaceAllMapped(RegExp(r'__([^_]+)__'), (m) {
      return '<strong>${m.group(1)}</strong>';
    });
    html = html.replaceAllMapped(RegExp(r'\*([^*\n]+)\*'), (m) {
      return '<em>${m.group(1)}</em>';
    });
    html = html.replaceAllMapped(RegExp(r'_([^_\n]+)_'), (m) {
      return '<em>${m.group(1)}</em>';
    });

    return html;
  }

  String formatDate(String iso) {
    if (iso.isEmpty) return '';
    final date = DateTime.tryParse(iso);
    if (date == null) return iso;
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    final month = months[date.month - 1];
    return '$month ${date.day}, ${date.year}';
  }

  bool canEditAnswer(
    Map<String, dynamic> answer,
    String? userId,
    String? userName,
    String? userEmail,
  ) {
    final ownerId =
        answer['user_id']?.toString() ?? answer['userId']?.toString();
    if (ownerId != null && userId != null) {
      final normalizedOwner = ownerId.trim().toLowerCase();
      final normalizedUser = userId.trim().toLowerCase();
      if (normalizedOwner == normalizedUser) {
        return true;
      }
    }
    final author = answer['author']?.toString();
    if (author == null) return false;
    final normalizedAuthor = author.trim().toLowerCase();
    final normalizedName = userName?.trim().toLowerCase();
    final normalizedEmail = userEmail?.trim().toLowerCase();
    if (normalizedName != null &&
        (normalizedAuthor == normalizedName ||
            normalizedAuthor.contains(normalizedName))) {
      return true;
    }
    if (normalizedEmail != null &&
        (normalizedAuthor == normalizedEmail ||
            normalizedAuthor.contains(normalizedEmail))) {
      return true;
    }
    return false;
  }

  bool canEditComment(
    Map<String, dynamic> comment,
    String? userId,
    String? userName,
    String? userEmail,
  ) {
    return canEditAnswer(comment, userId, userName, userEmail);
  }

  String escapeHtml(String input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
  }

  String escapeHtmlAttribute(String input) {
    return escapeHtml(input).replaceAll('`', '&#96;');
  }

  String xmlEscape(String input) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
  }

  String buildRobotsTxt() {
    final sitemapUrl = absoluteUrl('/sitemap.xml');
    return '''
User-agent: *
Allow: /

# AI crawlers / search bots
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: $sitemapUrl
'''
        .trim();
  }

  Future<String> buildSitemapXml() async {
    final urls = await collectSitemapEntries();
    final buffer = StringBuffer();
    buffer.writeln('<?xml version="1.0" encoding="UTF-8"?>');
    buffer.writeln(
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    for (final entry in urls) {
      final loc = xmlEscape(entry['loc']!);
      final lastmod = entry['lastmod']?.trim() ?? '';
      final changefreq = entry['changefreq']?.trim() ?? '';
      final priority = entry['priority']?.trim() ?? '';
      buffer.writeln('  <url>');
      buffer.writeln('    <loc>$loc</loc>');
      if (lastmod.isNotEmpty) {
        buffer.writeln('    <lastmod>${xmlEscape(lastmod)}</lastmod>');
      }
      if (changefreq.isNotEmpty) {
        buffer.writeln('    <changefreq>${xmlEscape(changefreq)}</changefreq>');
      }
      if (priority.isNotEmpty) {
        buffer.writeln('    <priority>${xmlEscape(priority)}</priority>');
      }
      buffer.writeln('  </url>');
    }
    buffer.writeln('</urlset>');
    return buffer.toString();
  }

  Future<List<Map<String, String>>> collectSitemapEntries() async {
    final nowIso = DateTime.now().toUtc().toIso8601String();
    final entries = <Map<String, String>>[
      {
        'loc': absoluteUrl('/'),
        'changefreq': 'daily',
        'priority': '1.0',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/guides'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/ui'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/client'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/dart'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/api'),
        'changefreq': 'weekly',
        'priority': '0.9',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/blog'),
        'changefreq': 'daily',
        'priority': '0.8',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/questions'),
        'changefreq': 'daily',
        'priority': '0.8',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/examples'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/whats-new'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
      {
        'loc': absoluteUrl('/changelog'),
        'changefreq': 'weekly',
        'priority': '0.7',
        'lastmod': nowIso,
      },
    ];

    for (final topic in guideTopics) {
      entries.add({
        'loc': absoluteUrl('/guides/$topic'),
        'changefreq': 'monthly',
        'priority': '0.6',
        'lastmod': nowIso,
      });
    }

    for (final topic in apiTopics) {
      entries.add({
        'loc': absoluteUrl('/api/$topic'),
        'changefreq': 'monthly',
        'priority': '0.6',
        'lastmod': nowIso,
      });
    }

    try {
      final posts = await fetchBlogPosts();
      for (final post in posts) {
        final href = post['href']?.toString();
        if (href == null || href.isEmpty) continue;
        entries.add({
          'loc': absoluteUrl(href),
          'changefreq': 'monthly',
          'priority': '0.7',
          'lastmod': sitemapDate(post['published_at']?.toString()) ?? nowIso,
        });
      }
    } catch (_) {}

    try {
      final questions = await fetchQuestions();
      for (final question in questions) {
        final href = question['href']?.toString();
        if (href == null || href.isEmpty) continue;
        entries.add({
          'loc': absoluteUrl(href),
          'changefreq': 'monthly',
          'priority': '0.6',
          'lastmod':
              sitemapDate(question['published_at']?.toString()) ?? nowIso,
        });
      }
    } catch (_) {}

    final seen = <String>{};
    return entries.where((e) => seen.add(e['loc']!)).toList();
  }

  String? sitemapDate(String? iso) {
    if (iso == null || iso.trim().isEmpty) return null;
    final parsed = DateTime.tryParse(iso);
    return parsed?.toUtc().toIso8601String();
  }

  Future<String> buildLlmsTxt() async {
    final site = absoluteUrl('/');
    final sitemap = absoluteUrl('/sitemap.xml');
    final guides = absoluteUrl('/guides');
    final ui = absoluteUrl('/ui');
    final client = absoluteUrl('/client');
    final dart = absoluteUrl('/dart');
    final api = absoluteUrl('/api');
    final blog = absoluteUrl('/blog');
    final questions = absoluteUrl('/questions');

    final posts = <Map<String, dynamic>>[];
    try {
      posts.addAll((await fetchBlogPosts()).take(12));
    } catch (_) {}

    final lines = <String>[
      '# Flint Dart Docs',
      '',
      '> Official documentation, guides, API reference, blog posts, and Q&A content for Flint Dart.',
      '',
      '## Crawl & Index',
      '',
      '- Site: $site',
      '- Sitemap: $sitemap',
      '- Guides: $guides',
      '- Flint UI Guide: $ui',
      '- FlintClient Guide: $client',
      '- Dart Lessons: $dart',
      '- API Reference: $api',
      '- Blog: $blog',
      '- Questions: $questions',
      '',
      '## Recommended Sources',
      '',
      '- Start with the Getting Started guide and API reference for framework usage.',
      '- Use blog posts for architecture decisions, patterns, and release notes.',
      '- Use questions for community troubleshooting examples.',
    ];

    if (posts.isNotEmpty) {
      lines.add('');
      lines.add('## Recent Blog Posts');
      lines.add('');
      for (final post in posts) {
        final title = post['title']?.toString() ?? 'Untitled';
        final href = post['href']?.toString() ?? '/blog';
        final excerpt = post['excerpt']?.toString() ?? '';
        lines.add('- ${absoluteUrl(href)} | $title');
        if (excerpt.isNotEmpty) {
          lines.add('  $excerpt');
        }
      }
    }

    lines.add('');
    lines.add('## Notes');
    lines.add('');
    lines.add(
        '- Content pages are intended for indexing by search engines and AI crawlers unless otherwise restricted.');

    return lines.join('\n');
  }

  Future<Map<String, dynamic>> baseData(Request req) async {
    final user = await req.user;
    final role = user?['role'];
    final canWriteBlog = canWriteBlogRole(role?.toString());
    final canAnswer = role == 'admin' || role == 'contributor' || role == 'dev';
    final canComment = user != null;
    final currentUserLabel =
        user?['name']?.toString() ?? user?['email']?.toString() ?? 'Signed in';
    return {
      'user': user == null
          ? null
          : {
              'id': user['id']?.toString(),
              'name': user['name']?.toString(),
              'email': user['email']?.toString(),
              'role': user['role']?.toString(),
              'profilePicUrl': user['profilePicUrl']?.toString(),
            },
      'isAuthenticated': user != null,
      'canWriteBlog': canWriteBlog,
      'canAnswer': canAnswer,
      'canComment': canComment,
      'currentUserId': user?['id']?.toString(),
      'currentUserLabel': currentUserLabel,
    };
  }

  bool canWriteBlogRole(String? role) {
    if (role == null) return false;
    return role == 'admin' ||
        role == 'contributor' ||
        role == 'collaborator' ||
        role == 'dev' ||
        role == 'developer';
  }
}
