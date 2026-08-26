import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/docs_controller.dart';

class DocsRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final docs = app.controller(DocsController.new);
    // Ecosystem Root
    docs.get('/', (c) => c.home());

    // Fullstack Pillar Routes
    docs.get('/fullstack', (c) => c.fullstack());
    docs.get('/fullstack/guides', (c) => c.guidesIndex());
    docs.get('/fullstack/guides/:topic', (c) => c.guidesTopic());
    docs.get('/fullstack/api', (c) => c.apiIndex());
    docs.get('/fullstack/api/:topic', (c) => c.apiTopic());
    docs.get('/fullstack/whats-new', (c) => c.whatsNew());
    docs.get('/fullstack/changelog', (c) => c.changelog());
    docs.get('/fullstack/examples', (c) => c.examples());
    docs.get('/fullstack/ui', (c) => c.fullstack());

    // Other Ecosystem Pillars
    docs.get('/client', (c) => c.client());
    docs.get('/client/guides', (c) => c.clientGuides());
    docs.get('/ai', (c) => c.ai());
    docs.get('/ai/guides', (c) => c.aiGuides());
    docs.get('/hardware', (c) => c.hardware());
    docs.get('/hardware/guides', (c) => c.hardwareGuides());
    docs.get('/dart', (c) => c.dartLessons());
    docs.get('/dart/guides', (c) => c.dartLessons());

    // Backwards-compatible aliases
    docs.get('/guides', (c) => c.guidesIndex());
    docs.get('/guides/:topic', (c) => c.guidesTopic());
    docs.get('/ui', (c) => c.fullstack());
    docs.get('/api', (c) => c.apiIndex());
    docs.get('/api/:topic', (c) => c.apiTopic());
    docs.get('/examples', (c) => c.examples());
    docs.get('/changelog', (c) => c.changelog());
    docs.get('/whats-new', (c) => c.whatsNew());
  }
}
