import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/support/docs_support.dart';

class MetaController extends Controller {
  final docs = DocsSupport();

  Response robots() {
    return res.send(
      docs.buildRobotsTxt(),
      contentType: 'text/plain; charset=utf-8',
    );
  }

  Future<Response> sitemap() async {
    final xml = await docs.buildSitemapXml();
    return res.send(
      xml,
      contentType: 'application/xml; charset=utf-8',
    );
  }

  Future<Response> llms() async {
    final txt = await docs.buildLlmsTxt();
    return res.send(
      txt,
      contentType: 'text/plain; charset=utf-8',
    );
  }
}
