import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/blog_post_model.dart';
import 'package:flint_docs/models/comment_model.dart';
import 'package:flint_docs/models/user_model.dart';
import 'package:flint_docs/support/docs_support.dart';

class BlogController extends Controller {
  final docs = DocsSupport();

  Future<Response> index() async {
    final posts = await docs.fetchBlogPosts();
    final base = await docs.baseData(req);
    return res.page(
      'Blog',
      title: 'Flint Blog',
      meta: docs.pageMeta(
        title: 'Flint Blog',
        description: 'Updates, guides, and best practices from the Flint team.',
        canonicalPath: '/blog',
      ),
      props: {
        ...base,
        'posts': posts,
        'title': 'Flint Blog',
        'description':
            'Updates, guides, and best practices from the Flint team.',
        'canonicalUrl': docs.absoluteUrl('/blog'),
        'ogImageUrl': docs.defaultOgImageUrl(),
        'twitterCard': 'summary_large_image',
      },
    );
  }

  Future<Response> create() async {
    return res.page(
      'BlogWrite',
      title: 'Write a Blog Post - Flint Docs',
      meta: docs.pageMeta(
        title: 'Write a Blog Post - Flint Docs',
        description: 'Write and publish a Flint Dart blog post.',
        canonicalPath: '/blog/create',
        meta: const {'robots': 'noindex, nofollow'},
      ),
      props: {
        ...await docs.baseData(req),
        'authMode': req.queryParam('mode'),
      },
    );
  }

  Response writeRedirect() {
    return res.redirect('/blog/create', status: 301);
  }

  Future<Response> store() async {
    final user = await _currentUser();
    if (user == null) {
      return res.status(401).json({
        'status': false,
        'message': 'Unauthorized',
      });
    }

    final role = user['role']?.toString();
    if (!docs.canWriteBlogRole(role)) {
      return res.status(403).json({
        'status': false,
        'message': 'Forbidden',
      });
    }

    try {
      final data = await req.validate({
        'title': 'required|string|min:6',
        'tag': 'required|string',
        'body': 'required|string|min:40',
      });

      final slug = await docs.uniqueBlogSlug(data['title'].toString());
      final body = data['body'].toString();
      final excerpt = docs.excerptFromMarkdown(body, maxLength: 160);

      final post = await BlogPost().create({
        'title': data['title'],
        'slug': slug,
        'excerpt': excerpt,
        'body': body,
        'tag': data['tag'],
        'author': user['name'] ?? user['email'] ?? 'Anonymous',
        'published_at': DateTime.now().toIso8601String(),
      });

      final created = post?.toMap();
      if (created == null) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to create post',
        });
      }

      final postView = docs.toBlogViewModel(created);
      final redirectTo = postView['href']?.toString() ?? '/blog/$slug';
      if (_wantsJson()) {
        return res.status(201).json({
          'status': true,
          'post': postView,
          'redirectTo': redirectTo,
        });
      }

      return res.redirect(redirectTo);
    } on ValidationException catch (e) {
      return res.status(422).json({
        'status': false,
        'errors': e.errors,
      });
    } catch (e) {
      return res.status(500).json({
        'status': false,
        'message': e.toString(),
      });
    }
  }

  Future<Response> show() async {
    final slug = req.param('slug');
    if (slug == null) {
      return res.status(404).send('Not found');
    }

    final post = await BlogPost().firstWhere('slug', slug);
    if (post == null) {
      return res.status(404).send('Post not found');
    }

    final viewModel = docs.toBlogViewModel(post.toMap());
    final postHref = viewModel['href']?.toString() ?? '/blog/$slug';
    final canonicalUrl = docs.absoluteUrl(postHref);
    final ogImageUrl = docs.defaultOgImageUrl();
    final postBodyMarkdown = viewModel['body']?.toString() ?? '';
    final postBodyHtml = docs.renderMarkdownToHtml(postBodyMarkdown);
    final publishedAt = viewModel['published_at']?.toString() ?? '';
    final user = await req.user;
    final comments = await docs.fetchCommentsForPost(
      post.toMap(),
      user?['id']?.toString(),
      user?['name']?.toString(),
      user?['email']?.toString(),
    );
    return res.page(
      'BlogDetail',
      title: viewModel['title']?.toString() ?? 'Flint Blog',
      meta: docs.pageMeta(
        title: viewModel['title']?.toString() ?? 'Flint Blog',
        description: viewModel['excerpt']?.toString(),
        canonicalPath: postHref,
        type: 'article',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': viewModel['title'],
          'description': viewModel['excerpt'],
          'datePublished': publishedAt,
          'dateModified': publishedAt,
          'author': {
            '@type': 'Person',
            'name': viewModel['author']?.toString() ?? 'Flint Docs',
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          if (ogImageUrl.isNotEmpty) 'image': [ogImageUrl],
        },
      ),
      props: {
        ...await docs.baseData(req),
        'post': _blogPostProps(viewModel),
        'comments': comments.map(_commentProps).toList(),
        'commentsCount': comments.length,
        'postBodyHtml': postBodyHtml,
        'title': viewModel['title'],
        'description': viewModel['excerpt'],
        'canonicalUrl': canonicalUrl,
        'ogType': 'article',
        'ogImageUrl': ogImageUrl,
        'twitterCard': 'summary_large_image',
        'articlePublishedTime': publishedAt,
        'structuredDataJson': docs.jsonForHtmlScript({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': viewModel['title'],
          'description': viewModel['excerpt'],
          'datePublished': publishedAt,
          'dateModified': publishedAt,
          'author': {
            '@type': 'Person',
            'name': viewModel['author']?.toString() ?? 'Flint Docs',
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          if (ogImageUrl.isNotEmpty) 'image': [ogImageUrl],
        }),
      },
    );
  }

  Future<Response> storeComment() async {
    final slug = req.param('slug');
    if (slug == null) return res.status(404).send('Not found');

    final user = await _currentUser();
    if (user == null) {
      return res.status(401).json({
        'status': false,
        'message': 'Unauthorized',
      });
    }

    final post = await BlogPost().firstWhere('slug', slug);
    if (post == null) {
      return res.status(404).json({
        'status': false,
        'message': 'Post not found',
      });
    }

    try {
      final data = await req.validate({
        'body': 'required|string|min:3',
        'slug': 'required|string',
      });
      await Comment().create({
        'body': data['body'],
        'post_id': post.getAttribute('id')?.toString(),
        'user_id': user['id'],
        'author': user['name'] ?? user['email'] ?? 'Anonymous',
        'published_at': DateTime.now().toIso8601String(),
      });
      if (_wantsJson()) {
        return res.status(201).json({
          'status': true,
          'redirectTo': '/blog/$slug#comments',
        });
      }
      return res.redirect('/blog/$slug#comments');
    } on ValidationException catch (e) {
      return res.status(422).json({'status': false, 'errors': e.errors});
    } catch (e) {
      return res.status(500).json({'status': false, 'message': e.toString()});
    }
  }

  Future<Response> updateComment() async {
    final slug = req.param('slug');
    final commentId = req.param('id');
    if (slug == null || commentId == null) {
      return res.status(404).send('Not found');
    }

    final user = await req.user;
    if (user == null) {
      return res.status(401).json({'status': false, 'message': 'Unauthorized'});
    }

    final post = await BlogPost().firstWhere('slug', slug);
    if (post == null) return res.status(404).send('Post not found');

    final comment = await Comment().find(commentId);
    if (comment == null) {
      return res
          .status(404)
          .json({'status': false, 'message': 'Comment not found'});
    }

    final commentMap = comment.toMap();
    final commentPostId = commentMap['post_id']?.toString();
    final postId = post.getAttribute('id')?.toString();
    if (commentPostId != postId) {
      return res
          .status(404)
          .json({'status': false, 'message': 'Comment not found'});
    }

    final canEdit = docs.canEditComment(
      commentMap,
      user['id']?.toString(),
      user['name']?.toString(),
      user['email']?.toString(),
    );
    if (!canEdit) {
      return res.status(403).json({'status': false, 'message': 'Forbidden'});
    }

    try {
      final data = await req.validate({
        'body': 'required|string|min:3',
        'slug': 'required|string',
        'id': 'required|string',
      });
      await comment.update(data: {'body': data['body']});
      final refreshed = await Comment().find(commentId);
      final updatedMap = refreshed?.toMap();
      final persistedBody = updatedMap?['body']?.toString().trim();
      final requestedBody = data['body']?.toString().trim();
      if (updatedMap == null ||
          persistedBody == null ||
          requestedBody == null ||
          persistedBody != requestedBody) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to update comment.',
        });
      }
      return res.json({
        'status': true,
        'comment': docs.toCommentViewModel(updatedMap),
      });
    } on ValidationException catch (e) {
      return res.status(422).json({'status': false, 'errors': e.errors});
    } catch (e) {
      return res.status(500).json({'status': false, 'message': e.toString()});
    }
  }

  Map<String, dynamic> _blogPostProps(Map<String, dynamic> post) {
    return {
      'id': post['id']?.toString(),
      'title': post['title']?.toString() ?? '',
      'slug': post['slug']?.toString() ?? '',
      'href': post['href']?.toString() ?? '',
      'excerpt': post['excerpt']?.toString() ?? '',
      'tag': post['tag']?.toString() ?? '',
      'author': post['author']?.toString() ?? '',
      'date': post['date']?.toString() ?? '',
      'published_at': post['published_at']?.toString() ?? '',
    };
  }

  Map<String, dynamic> _commentProps(Map<String, dynamic> comment) {
    return {
      'id': comment['id']?.toString(),
      'body': comment['body']?.toString() ?? '',
      'author': comment['author']?.toString() ?? 'Anonymous',
      'date': comment['date']?.toString() ?? '',
      'can_edit': comment['can_edit'] == true,
    };
  }

  bool _wantsJson() {
    final accept = req.headers['accept'] ?? req.headers['Accept'] ?? '';
    final requestedWith = req.headers['x-requested-with'] ??
        req.headers['X-Requested-With'] ??
        '';
    return accept.contains('application/json') ||
        requestedWith == 'FlintClient' ||
        requestedWith == 'XMLHttpRequest';
  }

  Future<Map<String, dynamic>?> _currentUser() async {
    final user = await req.user;
    if (user == null) return null;

    final role = user['role']?.toString();
    if (role != null && role.isNotEmpty) return user;

    final id = user['id']?.toString();
    if (id != null && id.isNotEmpty) {
      final fullUser = await User().find(id);
      final data = fullUser?.toMap();
      if (data != null) return data;
    }

    final email = user['email']?.toString();
    if (email != null && email.isNotEmpty) {
      final fullUser = await User().firstWhere('email', email);
      final data = fullUser?.toMap();
      if (data != null) return data;
    }

    return user;
  }
}
