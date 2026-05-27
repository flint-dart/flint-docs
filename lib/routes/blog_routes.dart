import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/controllers/blog_controller.dart';

class BlogRoutes extends RouteGroup {
  @override
  String get prefix => '';

  @override
  void register(Flint app) {
    final blog = app.controller(BlogController.new);
    blog.get('/blog', (c) => c.index());
    blog.get('/blog/create', (c) => c.create());
    blog.get('/blog/write', (c) => c.writeRedirect());
    blog.post('/blog/create', (c) => c.store());
    blog.post('/blog/write', (c) => c.store());
    blog.get('/blog/:slug', (c) => c.show());
    blog.post('/blog/:slug/comments', (c) => c.storeComment());
    blog.post('/blog/:slug/comments/:id/update', (c) => c.updateComment());
  }
}
