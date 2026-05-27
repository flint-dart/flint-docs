import 'package:flint_client/flint_client.dart';
import 'package:flint_ui/flint_ui.dart';
import 'package:universal_web/web.dart' as web;

import '../shared/auth_panel.dart';
import '../shared/page_shell.dart';

class SubmitBuildPage extends Component {
  final Map<String, dynamic> props;

  SubmitBuildPage(this.props);

  final FormController _form = useForm({
    'title': '',
    'description': '',
    'what_it_does': '',
    'built_with': '',
    'image_1': '',
    'image_2': '',
    'image_3': '',
    'link_1_label': '',
    'link_1_url': '',
    'link_2_label': '',
    'link_2_url': '',
  });

  FormErrors _errors = const FormErrors();
  String? _message;
  bool _loading = false;

  bool get _isAuthenticated =>
      props['isAuthenticated'] == true || authSession.isLoggedIn;
  bool get _canSubmit =>
      props['canAnswer'] == true ||
      {'admin', 'contributor', 'dev', 'developer'}.contains(authSession.role);
  bool get _registerFirst => props['authMode']?.toString() == 'register';

  @override
  View build() {
    return SiteLayout(
      props: props,
      body: Container(
        dartStyle: const DartStyle(
          width: SizeValue.percent(100),
          maxWidth: 980,
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
          if (!_isAuthenticated) _signedOutPanel() else _formPanel(),
        ],
      ),
    );
  }

  View _hero() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(24),
        radius: 22,
        border: Border(color: Color.rgba(30, 41, 59, 0.9), width: 1),
        background: Color.rgba(15, 23, 42, 0.72),
        md: DartStyle(padding: EdgeInsets.all(34)),
      ),
      children: [
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            _pill('Community showcase', const Color('#a7f3d0')),
            _pill('3 images · 2 links', const Color('#bae6fd')),
          ],
        ),
        Text.h1(
          'Submit what you built with Flint',
          dartStyle: const DartStyle(
            fontSize: 31,
            fontWeight: 800,
            lineHeight: 1.12,
            color: Colors.white,
            margin: EdgeInsets.all(0),
            md: DartStyle(fontSize: 38),
          ),
        ),
        Text.p(
          'Add the app name, screenshots, useful links, and a clear explanation of what the product does. The page is rendered by Flint for SEO so other developers can discover it.',
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

  View _signedOutPanel() {
    return AuthPanel(
      title: 'Sign in to submit',
      body:
          'Create a developer account or sign in to share what you built with Flint.',
      backHref: '/showcase',
      backLabel: 'Back to Showcase',
      registerFirst: _registerFirst,
    );
  }

  View _formPanel() {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.start,
        gap: 22,
        md: DartStyle(flexDirection: FlexDirection.row),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(
            flex: Flex.fill(),
            width: SizeValue.percent(100),
            minWidth: 0,
            padding: EdgeInsets.all(18),
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
                  label: 'App or product name',
                  name: 'title',
                  required: true,
                  controller: _form.controller('title'),
                  errors: _errors,
                  placeholder: 'Example: ClinicOS, TutorDesk, PayPortal',
                  inputDartStyle: _inputStyle,
                ),
                TextArea(
                  label: 'Short description',
                  name: 'description',
                  required: true,
                  controller: _form.controller('description'),
                  errors: _errors,
                  rows: 5,
                  placeholder:
                      'Describe the product, audience, and why you built it.',
                  textareaDartStyle: _textAreaStyle,
                ),
                TextArea(
                  label: 'What the app does',
                  name: 'what_it_does',
                  required: true,
                  controller: _form.controller('what_it_does'),
                  errors: _errors,
                  rows: 7,
                  placeholder:
                      'List the core workflow, automation, dashboard, API, or fullstack experience it provides.',
                  textareaDartStyle: _textAreaStyle,
                ),
                TextField(
                  label: 'Built with',
                  name: 'built_with',
                  controller: _form.controller('built_with'),
                  errors: _errors,
                  placeholder: 'Flint Dart, Flint UI, MySQL',
                  inputDartStyle: _inputStyle,
                ),
                _groupTitle('Images'),
                for (final index in [1, 2, 3])
                  TextField(
                    label: 'Image $index URL',
                    name: 'image_$index',
                    controller: _form.controller('image_$index'),
                    errors: _errors,
                    placeholder: 'https://example.com/screenshot-$index.png',
                    inputDartStyle: _inputStyle,
                  ),
                _groupTitle('Links'),
                _linkFields(1),
                _linkFields(2),
                Button(
                  props: const {'type': 'submit'},
                  tone: Tone.primary,
                  loading: _loading,
                  disabled: !_canSubmit,
                  children: [
                    Icon(Icons.rocket, size: 15),
                    Text.span(
                      _canSubmit
                          ? 'Publish Build'
                          : 'Developer access required',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
        _sideGuide(),
      ],
    );
  }

  View _linkFields(int index) {
    return Row(
      dartStyle: const DartStyle(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: 10,
        md: DartStyle(flexDirection: FlexDirection.row),
      ),
      children: [
        Container(
          dartStyle: const DartStyle(flex: Flex.fill(), minWidth: 0),
          children: [
            TextField(
              label: 'Link $index label',
              name: 'link_${index}_label',
              controller: _form.controller('link_${index}_label'),
              errors: _errors,
              placeholder: index == 1 ? 'Live app' : 'GitHub',
              inputDartStyle: _inputStyle,
            ),
          ],
        ),
        Container(
          dartStyle: const DartStyle(flex: Flex.fill(), minWidth: 0),
          children: [
            TextField(
              label: 'Link $index URL',
              name: 'link_${index}_url',
              controller: _form.controller('link_${index}_url'),
              errors: _errors,
              placeholder: 'https://example.com',
              inputDartStyle: _inputStyle,
            ),
          ],
        ),
      ],
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

    final localErrors = _validateBuild();
    if (localErrors.isNotEmpty) {
      final errorMessage = _toastErrorMessage(localErrors, 'Check your build.');
      setState(() {
        _loading = false;
        _errors = localErrors;
      });
      toast.error('Build not submitted', message: errorMessage);
      return;
    }

    try {
      final token = authSession.token;
      final response = await clientRouter.post<Map<String, dynamic>>(
        '/showcase/submit',
        body: _form.data,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'FlintClient',
          if (token != null) 'Authorization': 'Bearer $token',
        },
      );
      final data = response.data;
      if (response.success && data != null) {
        toast.success('Build published', message: 'Opening the showcase page.');
        navigation.assign(data['redirectTo']?.toString() ?? '/showcase');
        return;
      }

      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not submit build.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Build not submitted', message: errorMessage);
    } on FlintError catch (error) {
      final data = _errorData(error);
      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not submit build.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Build not submitted', message: errorMessage);
    } catch (_) {
      setState(() {
        _loading = false;
        _message = 'Could not submit build. Please try again.';
      });
      toast.error('Build not submitted', message: _message);
    }
  }

  FormErrors _validateBuild() {
    final errors = <String, List<String>>{};
    final title = _form.string('title').trim();
    final description = _form.string('description').trim();
    final whatItDoes = _form.string('what_it_does').trim();
    if (title.length < 3) errors['title'] = ['Add the app name.'];
    if (description.length < 20) {
      errors['description'] = ['Add at least 20 characters.'];
    }
    if (whatItDoes.length < 20) {
      errors['what_it_does'] = ['Add at least 20 characters.'];
    }
    for (final key in ['image_1', 'image_2', 'image_3']) {
      final url = _form.string(key).trim();
      if (url.isNotEmpty && !_isHttpUrl(url)) {
        errors[key] = ['Use a full http or https URL.'];
      }
    }
    for (final index in [1, 2]) {
      final label = _form.string('link_${index}_label').trim();
      final url = _form.string('link_${index}_url').trim();
      if (label.isNotEmpty && url.isEmpty) {
        errors['link_${index}_url'] = ['Add the URL for this link.'];
      }
      if (url.isNotEmpty && !_isHttpUrl(url)) {
        errors['link_${index}_url'] = ['Use a full http or https URL.'];
      }
    }
    return FormErrors(errors);
  }

  bool _isHttpUrl(String value) {
    final uri = Uri.tryParse(value);
    return uri != null &&
        uri.host.isNotEmpty &&
        (uri.scheme == 'http' || uri.scheme == 'https');
  }

  Map<String, dynamic>? _errorData(FlintError error) {
    final data = error.data;
    if (data is Map<String, dynamic>) return data;
    if (data is Map) {
      return data.map((key, value) => MapEntry(key.toString(), value));
    }
    return null;
  }

  String _toastErrorMessage(FormErrors errors, String fallback) {
    if (errors.isEmpty) return fallback;
    return errors.firstMessages.values.take(3).join(' ');
  }

  View _groupTitle(String label) {
    return Text.h2(
      label,
      dartStyle: const DartStyle(
        margin: EdgeInsets.only(top: 4, bottom: 0),
        fontSize: 15,
        color: Colors.white,
      ),
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

  View _sideGuide() {
    return Container(
      dartStyle: const DartStyle(
        width: SizeValue.percent(100),
        display: Display.grid,
        gap: 14,
        padding: EdgeInsets.all(18),
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(2, 6, 23, 0.38),
        md: DartStyle(width: SizeValue('min(280px, 100%)')),
      ),
      children: [
        Text.h2(
          'What to include',
          dartStyle: const DartStyle(
            fontSize: 16,
            fontWeight: 800,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          'Use real screenshots and practical links. Short, specific descriptions work best for search and for developers scanning the gallery.',
          dartStyle: const DartStyle(
            fontSize: 13,
            lineHeight: 1.6,
            color: Color('#94a3b8'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 8,
          ),
          children: [
            _pill('Screenshots', const Color('#7dd3fc')),
            _pill('Live URL', const Color('#d1fae5')),
            _pill('GitHub', const Color('#bae6fd')),
            _pill('Use case', const Color('#fef3c7')),
          ],
        ),
      ],
    );
  }

  View _pill(String label, Color color) {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        radius: 999,
        border: Border(color: Color.rgba(52, 211, 153, 0.24), width: 1),
        background: Color.rgba(52, 211, 153, 0.08),
      ),
      children: [
        Text.span(
          label,
          dartStyle: DartStyle(
            fontSize: 11,
            fontWeight: 800,
            color: color,
          ),
        ),
      ],
    );
  }
}

const _inputStyle = DartStyle(
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);

const _textAreaStyle = DartStyle(
  minHeight: 140,
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);
