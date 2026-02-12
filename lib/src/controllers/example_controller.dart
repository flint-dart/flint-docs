import 'package:flint_dart/flint_dart.dart';

/// Example controller showing proper FlintDart patterns
///
/// Note: In real applications, you would import your Model classes
/// like: import '../models/post.dart';
class ExampleController {
  /// Example: Simple index method
  Future<Response> index(Request req, Response res) async {
    // Example: posts would be your Model class
    // final posts = await Post.all();
    // return res.json(posts);

    // For now, return simple data
    return res.json({'message': 'Example index method'});
  }

  /// Example: Show single item
  Future<Response> show(Request req, Response res) async {
    final id = req.params['id'];

    // Example: post would be your Model class
    // final post = await Post.find(id);
    // if (post == null) {
    //   return res.status(404).json({'error': 'Post not found'});
    // }

    return res.json({'message': 'Showing item with ID: $id'});
  }

  /// Example: Create new item
  Future<Response> store(Request req, Response res) async {
    final data = await req.json();

    // Validation example
    if (!data.containsKey('title') || data['title'].toString().isEmpty) {
      return res.status(422).json({'error': 'Title is required'});
    }

    // Example: post would be your Model class
    // final post = await Post.create(data);
    // return res.status(201).json(post);

    return res
        .status(201)
        .json({'message': 'Item created successfully', 'data': data});
  }

  /// Example: Update existing item
  Future<Response> update(Request req, Response res) async {
    final id = req.params['id'];
    final data = await req.json();

    // Example: post would be your Model class
    // final post = await Post.find(id);
    // if (post == null) {
    //   return res.status(404).json({'error': 'Post not found'});
    // }

    // await post.update(data);

    return res.json(
        {'message': 'Item with ID $id updated successfully', 'data': data});
  }

  /// Example: Delete item
  Future<Response> destroy(Request req, Response res) async {
    final id = req.params['id'];

    // Example: post would be your Model class
    // final post = await Post.find(id);
    // if (post == null) {
    //   return res.status(404).json({'error': 'Post not found'});
    // }

    // await post.delete();

    return res.json({'message': 'Item with ID $id deleted successfully'});
  }

  /// Example: Protected route (middleware should be applied at route level)
  Future<Response> profile(Request req, Response res) async {
    // Note: In actual implementation, auth would be available
    // when middleware is applied to the route

    return res.json({
      'message': 'This is a protected route example',
      'note': 'Use .useMiddleware(AuthMiddleware()) on your routes'
    });
  }

  /// Example: Flash success + redirect back
  Future<Response> saveWithFlash(Request req, Response res) async {
    return res.withSuccess('Saved successfully.').back(fallback: '/examples');
  }

  /// Example: Flash error + redirect back
  Future<Response> failWithFlash(Request req, Response res) async {
    return res.withError('Unable to save your changes.').back(fallback: '/examples');
  }
}
