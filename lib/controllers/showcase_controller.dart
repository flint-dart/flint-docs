import 'package:flint_dart/flint_dart.dart';
import 'package:flint_docs/models/showcase_project_model.dart';
import 'package:flint_docs/models/user_model.dart';
import 'package:flint_docs/support/docs_support.dart';

class ShowcaseController extends Controller {
  final docs = DocsSupport();

  Future<Response> index() async {
    final projects = await docs.fetchShowcaseProjects();
    return res.page(
      'Showcase',
      title: 'Built with Flint - Community Showcase',
      meta: docs.pageMeta(
        title: 'Built with Flint - Community Showcase',
        description:
            'Explore apps, dashboards, products, and backend-first fullstack experiences built with Flint Dart and Flint UI.',
        canonicalPath: '/showcase',
        structuredData: docs.showcaseCollectionStructuredData(projects),
      ),
      props: {
        ...await docs.baseData(req),
        'projects': projects,
      },
    );
  }

  Future<Response> submit() async {
    final user = await req.user;
    return res.page(
      'SubmitBuild',
      title: 'Submit a Flint Build - Flint Docs',
      meta: docs.pageMeta(
        title: 'Submit a Flint Build - Flint Docs',
        description:
            'Share what you built with Flint Dart and Flint UI with the developer community.',
        canonicalPath: '/showcase/submit',
        meta: const {'robots': 'noindex, nofollow'},
      ),
      props: {
        ...await docs.baseData(req),
        'isAuthenticated': user != null,
        'authMode': req.queryParam('mode'),
      },
    );
  }

  Future<Response> store() async {
    final user = await _currentUser();
    if (user == null) {
      return res.status(401).json({
        'status': false,
        'message': 'Unauthorized',
      });
    }

    if (!_canSubmit(user)) {
      return res.status(403).json({
        'status': false,
        'message': 'Developer access is required to submit a build.',
      });
    }

    try {
      final data = await req.validate({
        'title': 'required|string|min:3',
        'description': 'required|string|min:20',
        'what_it_does': 'required|string|min:20',
        'built_with': 'string',
        'image_1': 'string',
        'image_2': 'string',
        'image_3': 'string',
        'link_1_label': 'string',
        'link_1_url': 'string',
        'link_2_label': 'string',
        'link_2_url': 'string',
      });

      final linkError = _validateLinks(data);
      if (linkError != null) {
        return res.status(422).json({
          'status': false,
          'errors': linkError,
        });
      }

      final slug = await docs.uniqueShowcaseSlug(data['title'].toString());
      final project = await ShowcaseProject().create({
        'title': _clean(data['title']),
        'slug': slug,
        'description': _clean(data['description']),
        'what_it_does': _clean(data['what_it_does']),
        'built_with': _clean(data['built_with']),
        'image_1': _clean(data['image_1']),
        'image_2': _clean(data['image_2']),
        'image_3': _clean(data['image_3']),
        'link_1_label': _clean(data['link_1_label']),
        'link_1_url': _clean(data['link_1_url']),
        'link_2_label': _clean(data['link_2_label']),
        'link_2_url': _clean(data['link_2_url']),
        'user_id': user['id']?.toString() ?? '',
        'author': user['name'] ?? user['email'] ?? 'Flint developer',
        'published_at': DateTime.now().toIso8601String(),
      });

      final created = project?.toMap();
      if (created == null) {
        return res.status(500).json({
          'status': false,
          'message': 'Failed to submit build.',
        });
      }

      final projectView = docs.toShowcaseViewModel(created);
      final redirectTo = projectView['href']?.toString() ?? '/showcase/$slug';
      if (_wantsJson()) {
        return res.status(201).json({
          'status': true,
          'project': projectView,
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
    if (slug == null) return res.status(404).send('Not found');

    final project = await ShowcaseProject().firstWhere('slug', slug);
    if (project == null) return res.status(404).send('Build not found');

    final viewModel = docs.toShowcaseViewModel(project.toMap());
    final title = viewModel['title']?.toString() ?? 'Flint build';
    final description = viewModel['excerpt']?.toString();
    return res.page(
      'ShowcaseDetail',
      title: '$title - Built with Flint',
      meta: docs.pageMeta(
        title: '$title - Built with Flint',
        description: description,
        canonicalPath: '/showcase/$slug',
        imageUrl: docs.showcaseImageUrl(viewModel),
        type: 'article',
        structuredData: docs.showcaseProjectStructuredData(viewModel),
      ),
      props: {
        ...await docs.baseData(req),
        'project': viewModel,
      },
    );
  }

  Map<String, List<String>>? _validateLinks(Map<String, dynamic> data) {
    final errors = <String, List<String>>{};
    for (final index in [1, 2]) {
      final labelKey = 'link_${index}_label';
      final urlKey = 'link_${index}_url';
      final label = _clean(data[labelKey]);
      final url = _clean(data[urlKey]);
      if (label.isNotEmpty && url.isEmpty) {
        errors[urlKey] = ['Add a URL for this link.'];
      }
      if (url.isNotEmpty && !_isHttpUrl(url)) {
        errors[urlKey] = ['Use a full http or https URL.'];
      }
    }
    for (final key in ['image_1', 'image_2', 'image_3']) {
      final url = _clean(data[key]);
      if (url.isNotEmpty && !_isHttpUrl(url)) {
        errors[key] = ['Use a full http or https image URL.'];
      }
    }
    return errors.isEmpty ? null : errors;
  }

  bool _isHttpUrl(String value) {
    final uri = Uri.tryParse(value);
    return uri != null &&
        uri.host.isNotEmpty &&
        (uri.scheme == 'http' || uri.scheme == 'https');
  }

  String _clean(Object? value) => value?.toString().trim() ?? '';

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

  bool _canSubmit(Map<String, dynamic> user) {
    final role = user['role']?.toString();
    return role == 'dev' ||
        role == 'developer' ||
        role == 'admin' ||
        role == 'contributor';
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
}
