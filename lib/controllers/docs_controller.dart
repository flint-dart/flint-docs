import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/support/docs_support.dart';

class DocsController extends Controller {
  final docs = DocsSupport();

  Future<Response> home() async {
    return res.page(
      'Home',
      title: 'Flint Ecosystem - The Unified Dart Stack',
      props: {
        ...await docs.baseData(req),
        'activePillar': 'ecosystem',
      },
      meta: docs.pageMeta(
        title: 'Flint Ecosystem - The Unified Dart Stack',
        description:
            'One language across your entire modern stack: Full-Stack Web (Flint Dart), Universal Client SDK (Flint Client), Native AI Engine (Flint AI), and Robotics & Hardware (Flint Hardware).',
        canonicalPath: '/',
      ),
    );
  }

  Future<Response> fullstack() async {
    return res.page(
      'Fullstack',
      title: 'Flint Dart Full-Stack Web Framework - Flint Docs',
      meta: docs.pageMeta(
        title: 'Flint Dart Full-Stack Web Framework - Flint Docs',
        description:
            'Build full-stack Dart web applications with HTTP routes, SSR, declarative Web UI, Row-Level Security database APIs, and WebSockets in pure Dart.',
        canonicalPath: '/fullstack',
      ),
      props: {
        ...await docs.baseData(req),
        'activePillar': 'fullstack',
        'contentHtml':
            await docs.readMarkdownContent('lib/content/fullstack/overview.md'),
        'title': 'Flint Dart Full-Stack Web Framework',
        'description':
            'Build full-stack Dart web applications with HTTP routes, SSR, declarative Web UI, Row-Level Security database APIs, and WebSockets in pure Dart.',
      },
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
        'activePillar': 'client',
        'contentHtml':
            await docs.readMarkdownContent('lib/content/client/overview.md'),
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
        'activePillar': 'ai',
        'contentHtml':
            await docs.readMarkdownContent('lib/content/ai/overview.md'),
        'title': 'Flint AI Guide - Agents, Tools, and Workflows',
        'description':
            'Official Flint AI guide: providers, agents, tools, workflows, streaming chat, memory, persistence, and production safety.',
      },
    );
  }

  Future<Response> aiGuides() async {
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'ai',
      'contentHtml':
          await docs.readMarkdownContent('lib/content/ai/overview.md'),
      'title': 'Flint AI Guide - Agents, Tools, and Workflows',
      'description':
          'Official Flint AI guide: providers, agents, tools, workflows, streaming chat, memory, and persistence.',
      'canonicalUrl': docs.absoluteUrl('/ai/guides'),
    });
  }

  Future<Response> aiTopic() async {
    final topic = req.param('topic') ?? 'getting-started';
    final content =
        await docs.readMarkdownContent('lib/content/ai/guides/$topic.md');
    if (content.isEmpty) {
      return aiGuides();
    }
    final heading = docs.topicHeading(topic);
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'ai',
      'contentHtml': content,
      'title': '$heading - Flint AI Guide',
      'description': 'Guide for $heading in Flint AI.',
      'canonicalUrl': docs.absoluteUrl('/ai/guides/$topic'),
    });
  }

  Future<Response> hardware() async {
    return res.page(
      'Hardware',
      title: 'Flint Hardware Guide - Embedded Systems & Robotics in Dart',
      meta: docs.pageMeta(
        title: 'Flint Hardware Guide - Embedded Systems & Robotics in Dart',
        description:
            'Build embedded firmware, robotics state machines, sensor drivers, and Wokwi simulation circuits in pure Dart with Flint Hardware.',
        canonicalPath: '/hardware',
      ),
      props: {
        ...await docs.baseData(req),
        'activePillar': 'hardware',
        'contentHtml':
            await docs.readMarkdownContent('lib/content/hardware/overview.md'),
        'title': 'Flint Hardware Guide - Embedded Systems & Robotics in Dart',
        'description':
            'Build embedded firmware, robotics state machines, sensor drivers, and Wokwi simulation circuits in pure Dart with Flint Hardware.',
      },
    );
  }

  Future<Response> hardwareGuides() async {
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'hardware',
      'contentHtml':
          await docs.readMarkdownContent('lib/content/hardware/overview.md'),
      'title': 'Flint Hardware Guide - Embedded Systems & Robotics in Dart',
      'description':
          'Official Flint Hardware guide: MCU targets, drivers, robotics state machines, TFLite Micro, and Wokwi simulation.',
      'canonicalUrl': docs.absoluteUrl('/hardware/guides'),
    });
  }

  Future<Response> hardwareTopic() async {
    final topic = req.param('topic') ?? 'getting-started';
    final content =
        await docs.readMarkdownContent('lib/content/hardware/guides/$topic.md');
    if (content.isEmpty) {
      return hardwareGuides();
    }
    final heading = docs.topicHeading(topic);
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'hardware',
      'contentHtml': content,
      'title': '$heading - Flint Hardware Guide',
      'description': 'Guide for $heading in Flint Hardware.',
      'canonicalUrl': docs.absoluteUrl('/hardware/guides/$topic'),
    });
  }

  Future<Response> clientGuides() async {
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'client',
      'contentHtml':
          await docs.readMarkdownContent('lib/content/client/overview.md'),
      'title': 'FlintClient Guide - Flint Dart',
      'description':
          'Official FlintClient guide: setup, requests, retries, caching, cancellation, and observability.',
      'canonicalUrl': docs.absoluteUrl('/client/guides'),
    });
  }

  Future<Response> clientTopic() async {
    final topic = req.param('topic') ?? 'getting-started';
    final content =
        await docs.readMarkdownContent('lib/content/client/guides/$topic.md');
    if (content.isEmpty) {
      return clientGuides();
    }
    final heading = docs.topicHeading(topic);
    return docs.renderContentPage(res, {
      ...await docs.baseData(req),
      'activePillar': 'client',
      'contentHtml': content,
      'title': '$heading - FlintClient Guide',
      'description': 'Guide for $heading in FlintClient.',
      'canonicalUrl': docs.absoluteUrl('/client/guides/$topic'),
    });
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
            await docs.readMarkdownContent('lib/content/fullstack/ui.md'),
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
          await docs.readMarkdownContent('lib/content/dart/overview.md'),
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
    final exampleProjects = await docs.fetchExampleProjects();
    final base = await docs.baseData(req);

    return res.page(
      'Examples',
      title: 'Open Source Examples & Blueprints - Flint Dart',
      props: {
        ...base,
        'examples': exampleProjects,
        'activePillar': 'ecosystem',
        'title': 'Open Source Examples & Blueprints - Flint Dart',
        'description':
            'Explore production-ready open source applications, templates, and full-stack blueprints built with the Flint ecosystem.',
        'canonicalUrl': docs.absoluteUrl('/examples'),
      },
      meta: docs.pageMeta(
        title: 'Open Source Examples & Blueprints - Flint Dart',
        description:
            'Explore production-ready open source applications, templates, and full-stack blueprints built with the Flint ecosystem.',
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
        canonicalPath: '/fullstack/changelog',
      ),
      props: {
        ...await docs.baseData(req),
        'activePillar': 'fullstack',
        'entries': entries,
      },
    );
  }

  Future<Response> whatsNew() async {
    return res.page(
      'WhatsNew',
      title: "What's New - Flint Dart",
      props: {
        ...await docs.baseData(req),
        'activePillar': 'fullstack',
      },
      meta: docs.pageMeta(
        title: "What's New - Flint Dart",
        description:
            'Latest release highlights and improvements for Flint Dart.',
        canonicalPath: '/fullstack/whats-new',
      ),
    );
  }
}
