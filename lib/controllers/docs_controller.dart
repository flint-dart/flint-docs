import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/support/docs_support.dart';

class DocsController extends Controller {
  final docs = DocsSupport();

  Future<Response> home() async {
    return res.page(
      'Home',
      title: 'Flint Dart - Modern Dart Backend Framework',
      props: await docs.baseData(req),
      meta: docs.pageMeta(
        title: 'Flint Dart - Modern Dart Backend Framework',
        description:
            'Build backend APIs, docs, UI pages, and full-stack Dart applications with Flint Dart.',
        canonicalPath: '/',
      ),
    );
  }

  Future<Response> guidesIndex() {
    return docs.renderGettingStartedTopic(req, res, 'introduction');
  }

  Future<Response> guidesTopic() {
    final topic = req.param('topic') ?? 'introduction';
    return docs.renderGettingStartedTopic(req, res, topic);
  }

  Future<Response> client() async {
    return res.page(
      'Client',
      title: 'FlintClient Guide - Flint Dart',
      meta: docs.pageMeta(
        title: 'FlintClient Guide - Flint Dart',
        description:
            'Official FlintClient guide: setup, requests, retries, caching, cancellation, parse modes, and observability hooks.',
        canonicalPath: '/client',
      ),
      props: {
        ...await docs.baseData(req),
        'contentHtml':
            await docs.readMarkdownContent('lib/content/pages/client.md'),
        'title': 'FlintClient Guide - Flint Dart',
        'description':
            'Official FlintClient guide: setup, requests, retries, caching, cancellation, parse modes, and observability hooks.',
      },
    );
  }

  Future<Response> ai() async {
    return res.page(
      'Ai',
      title: 'Flint AI Guide - Agents, Tools, and Workflows',
      meta: docs.pageMeta(
        title: 'Flint AI Guide - Agents, Tools, and Workflows',
        description:
            'Build AI agents in Flint Dart with providers, tools, workflows, streaming chat, memory, persistence, and production tool policies.',
        canonicalPath: '/ai',
      ),
      props: {
        ...await docs.baseData(req),
        'contentHtml':
            await docs.readMarkdownContent('lib/content/pages/ai.md'),
        'title': 'Flint AI Guide - Agents, Tools, and Workflows',
        'description':
            'Official Flint AI guide: providers, agents, tools, workflows, streaming chat, memory, persistence, and production safety.',
      },
    );
  }

  Future<Response> ui() async {
    return res.page(
      'UiDocs',
      title: 'Flint UI Guide - Build UI in Dart',
      meta: docs.pageMeta(
        title: 'Flint UI Guide - Build UI in Dart',
        description:
            'Build browser UI in Dart with components, props, state, events, DartStyle, and HtmlContent.',
        canonicalPath: '/ui',
      ),
      props: {
        ...await docs.baseData(req),
        'contentHtml':
            await docs.readMarkdownContent('lib/content/pages/ui.md'),
        'title': 'Flint UI Guide - Build UI in Dart',
        'description':
            'Official Flint UI guide: components, props, state, events, DartStyle, pages, and browser rendering.',
      },
    );
  }

  Future<Response> dartLessons() async {
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'contentHtml':
          await docs.readMarkdownContent('lib/content/pages/dart.md'),
      'title': 'Dart Lessons - Learn Dart Clearly',
      'description':
          'Learn Dart with simple, practical lessons: syntax, functions, classes, null safety, and async.',
      'canonicalUrl': docs.absoluteUrl('/dart'),
    });
  }

  Future<Response> apiIndex() {
    return docs.renderApiTopic(req, res, 'flint-class');
  }

  Future<Response> apiTopic() {
    final topic = req.param('topic') ?? 'flint-class';
    return docs.renderApiTopic(req, res, topic);
  }

  Future<Response> examples() async {
    return res.page(
      'Examples',
      title: 'Examples & Tutorials - Flint Dart',
      props: await docs.baseData(req),
      meta: docs.pageMeta(
        title: 'Examples & Tutorials - Flint Dart',
        description:
            'Practical Flint Dart examples for blogs, Q&A workflows, auth, models, and routes.',
        canonicalPath: '/examples',
      ),
    );
  }

  Future<Response> changelog() async {
    final md = await docs.loadFrameworkChangelog();
    final entries = docs
        .parseChangelogEntries(md)
        .map((e) => {
              'version': e['version'],
              'contentHtml': docs.renderMarkdownToHtml(e['content'] ?? ''),
            })
        .toList();

    return res.page(
      'Changelog',
      title: 'Changelog - Flint Dart',
      meta: docs.pageMeta(
        title: 'Changelog - Flint Dart',
        description:
            'Version history, fixes, and framework changes for Flint Dart.',
        canonicalPath: '/changelog',
      ),
      props: {
        ...await docs.baseData(req),
        'entries': entries,
      },
    );
  }

  Future<Response> whatsNew() async {
    return res.page(
      'WhatsNew',
      title: "What's New - Flint Dart",
      props: await docs.baseData(req),
      meta: docs.pageMeta(
        title: "What's New - Flint Dart",
        description:
            'Latest highlights in Flint Dart, Flint UI, CLI, migrations, and documentation.',
        canonicalPath: '/whats-new',
      ),
    );
  }
}
