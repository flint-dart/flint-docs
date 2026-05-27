import 'package:flint_client/flint_client.dart';
import 'package:flint_ui/flint_ui.dart';
import 'package:universal_web/web.dart' as web;

import '../shared/auth_panel.dart';
import '../shared/page_shell.dart';

class BlogWritePage extends Component {
  final Map<String, dynamic> props;

  BlogWritePage(this.props);

  final FormController _form = useForm({
    'title': '',
    'tag': '',
    'body': '',
  });

  FormErrors _errors = const FormErrors();
  String? _message;
  bool _loading = false;

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canWrite =>
      props['canWriteBlog'] == true ||
      {'admin', 'contributor'}.contains(authSession.role);
  bool get _registerFirst => props['authMode']?.toString() == 'register';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 960,
          margin: EdgeInsets.symmetric(horizontal: SizeValue.auto),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 34),
          display: Display.grid,
          gap: 24,
          overflow: Overflow.hidden,
          md: DartStyle(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 48)),
        ),
        children: [
          _hero(),
          if (!_isAuthenticated)
            AuthPanel(
              title: 'Sign in to write',
              body:
                  'Create an account or sign in to draft Flint articles, release notes, and community tutorials.',
              backHref: '/blog',
              backLabel: 'Back to Blog',
              registerFirst: _registerFirst,
            )
          else if (!_canWrite)
            _permissionPanel()
          else
            _writeForm(),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(24),
        radius: 22,
        border: Border(color: Color.rgba(30, 41, 59, 0.9), width: 1),
        background: Color.rgba(15, 23, 42, 0.72),
        md: DartStyle(padding: EdgeInsets.all(34)),
      ),
      children: [
        Text.p(
          'Blog',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 12,
            fontWeight: 800,
            color: Color('#a7f3d0'),
          ),
        ),
        Text.h1(
          'Write a Flint post',
          dartStyle: const DartStyle(
            fontSize: 31,
            fontWeight: 750,
            lineHeight: 1.12,
            color: Colors.white,
            margin: EdgeInsets.all(0),
            md: DartStyle(fontSize: 38),
          ),
        ),
        Text.p(
          'Publish framework updates, tutorials, architecture notes, and practical lessons for the Flint community.',
          dartStyle: const DartStyle(
            maxWidth: 760,
            fontSize: 15,
            lineHeight: 1.7,
            color: Color('#cbd5e1'),
            margin: EdgeInsets.all(0),
          ),
        ),
      ],
    );
  }

  View _permissionPanel() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(24),
        radius: 16,
        border: Border(color: Color.rgba(251, 191, 36, 0.32), width: 1),
        background: Color.rgba(251, 191, 36, 0.08),
      ),
      children: [
        Text.h2(
          'Writer access required',
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 22,
            color: Colors.white,
          ),
        ),
        Text.p(
          'Your account is signed in, but it does not currently have permission to publish blog posts.',
          dartStyle: const DartStyle(
            margin: EdgeInsets.only(top: 8, bottom: 0),
            color: Color('#fde68a'),
            lineHeight: 1.6,
          ),
        ),
      ],
    );
  }

  View _writeForm() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(18),
        minWidth: 0,
        radius: 18,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.62),
        md: DartStyle(padding: EdgeInsets.all(24)),
      ),
      children: [
        Form(
          onSubmit: _submit,
          dartStyle: const DartStyle(display: Display.grid, gap: 18),
          children: [
            if (_message != null) _messageBox(),
            TextField(
              label: 'Title',
              name: 'title',
              required: true,
              controller: _form.controller('title'),
              errors: _errors,
              placeholder: 'Example: Building controllers with Flint',
              inputDartStyle: _inputStyle,
            ),
            TextField(
              label: 'Tag',
              name: 'tag',
              required: true,
              controller: _form.controller('tag'),
              errors: _errors,
              placeholder: 'Guide, Release, Architecture...',
              inputDartStyle: _inputStyle,
            ),
            TextArea(
              label: 'Body',
              name: 'body',
              required: true,
              controller: _form.controller('body'),
              errors: _errors,
              rows: 14,
              placeholder: 'Write the full post in Markdown...',
              textareaDartStyle: _textAreaStyle,
            ),
            Button(
              props: const {'type': 'submit'},
              tone: Tone.primary,
              loading: _loading,
              children: [
                Icon(Icons.send, size: 15),
                Text.span('Publish Post'),
              ],
            ),
          ],
        ),
      ],
    );
  }

  View _messageBox() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(12),
        radius: 10,
        border: Border(color: Color.rgba(248, 113, 113, 0.35), width: 1),
        background: Color.rgba(248, 113, 113, 0.08),
      ),
      child: Text.p(
        _message!,
        dartStyle: const DartStyle(
          margin: EdgeInsets.all(0),
          fontSize: 13,
          color: Color('#fca5a5'),
        ),
      ),
    );
  }

  Future<void> _submit(Object event) async {
    if (event is web.Event) event.preventDefault();
    if (_loading) return;

    setState(() {
      _loading = true;
      _errors = const FormErrors();
      _message = null;
    });

    final localErrors = _validatePost();
    if (localErrors.isNotEmpty) {
      final errorMessage = _toastErrorMessage(
        localErrors,
        'Please check your post.',
      );
      setState(() {
        _loading = false;
        _errors = localErrors;
      });
      toast.error('Post not published', message: errorMessage);
      return;
    }

    try {
      final token = authSession.token;
      final response = await clientRouter.post<Map<String, dynamic>>(
        '/blog/create',
        body: _form.data,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'FlintClient',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );
      final data = response.data;
      if (response.success && data != null) {
        final redirectTo = data['redirectTo']?.toString();
        toast.success('Post published', message: 'Opening the article...');
        navigation.assign(
          redirectTo == null || redirectTo.isEmpty ? '/blog' : redirectTo,
        );
        return;
      }

      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not publish post.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Post not published', message: errorMessage);
    } on FlintError catch (error) {
      final data = _errorData(error);
      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not publish post.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Post not published', message: errorMessage);
    } catch (_) {
      setState(() {
        _loading = false;
        _message = 'Could not publish post. Please try again.';
      });
      toast.error('Post not published', message: _message);
    }
  }

  String _toastErrorMessage(FormErrors errors, String fallback) {
    if (errors.isEmpty) return fallback;
    return errors.firstMessages.values.take(3).join(' ');
  }

  FormErrors _validatePost() {
    final title = _form.string('title').trim();
    final tag = _form.string('tag').trim();
    final body = _form.string('body').trim();
    final errors = <String, List<String>>{};

    if (title.isEmpty) {
      errors['title'] = ['The title field is required.'];
    } else if (title.length < 6) {
      errors['title'] = ['The title must be at least 6 characters.'];
    }
    if (tag.isEmpty) {
      errors['tag'] = ['The tag field is required.'];
    }
    if (body.isEmpty) {
      errors['body'] = ['The body field is required.'];
    } else if (body.length < 40) {
      errors['body'] = ['The body must be at least 40 characters.'];
    }

    return FormErrors(errors);
  }

  Map<String, dynamic>? _errorData(FlintError error) {
    final data = error.data;
    if (data is Map<String, dynamic>) return data;
    if (data is Map) {
      return data.map((key, value) => MapEntry(key.toString(), value));
    }
    return null;
  }
}

const _inputStyle = DartStyle(
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);

const _textAreaStyle = DartStyle(
  minHeight: 260,
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);
