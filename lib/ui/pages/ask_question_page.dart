import 'package:flint_client/flint_client.dart';
import 'package:flint_ui/flint_ui.dart';
import 'package:universal_web/web.dart' as web;

import '../shared/auth_panel.dart';
import '../shared/page_shell.dart';

class AskQuestionPage extends Component {
  final Map<String, dynamic> props;

  AskQuestionPage(this.props);

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
  bool get _canAsk =>
      props['canAnswer'] == true ||
      {'admin', 'contributor', 'dev'}.contains(authSession.role);
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
            _pill('Community', const Color('#a7f3d0')),
            _pill('Ask clearly', const Color('#d1fae5')),
          ],
        ),
        Text.h1(
          'Ask a Flint question',
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
          'Share the route, model, component, error message, or behavior you are working with. Good questions become useful docs for the whole community.',
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
      title: 'Sign in to ask',
      body:
          'You can read questions without an account. Sign in or create a developer account to create a new thread.',
      backHref: '/questions',
      backLabel: 'Back to Questions',
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
              dartStyle: const DartStyle(
                display: Display.grid,
                gap: 18,
              ),
              children: [
                if (_message != null) _messageBox(),
                TextField(
                  label: 'Title',
                  name: 'title',
                  required: true,
                  controller: _form.controller('title'),
                  errors: _errors,
                  placeholder: 'Example: How do I define a User model?',
                  inputDartStyle: _inputStyle,
                ),
                TextField(
                  label: 'Topic',
                  name: 'tag',
                  required: true,
                  controller: _form.controller('tag'),
                  errors: _errors,
                  placeholder: 'Model, Flint UI, Routing, Auth...',
                  inputDartStyle: _inputStyle,
                ),
                TextArea(
                  label: 'Question',
                  name: 'body',
                  required: true,
                  controller: _form.controller('body'),
                  errors: _errors,
                  rows: 10,
                  placeholder:
                      'Describe what you expected, what happened, and include any useful code or error output.',
                  textareaDartStyle: _textAreaStyle,
                ),
                Button(
                  props: const {'type': 'submit'},
                  tone: Tone.primary,
                  loading: _loading,
                  disabled: !_canAsk,
                  children: [
                    Icon(Icons.send, size: 15),
                    Text.span(_canAsk
                        ? 'Post Question'
                        : 'Developer access required'),
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

  View _messageBox() {
    return Container(
      dartStyle: const DartStyle(
        padding: EdgeInsets.all(12),
        radius: 10,
        border: Border(color: Color.rgba(248, 113, 113, 0.35), width: 1),
        background: Color.rgba(248, 113, 113, 0.08),
      ),
      children: [
        Text.p(
          _message!,
          dartStyle: const DartStyle(
            margin: EdgeInsets.all(0),
            fontSize: 13,
            color: Color('#fca5a5'),
          ),
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

    final localErrors = _validateQuestion();
    if (localErrors.isNotEmpty) {
      final errorMessage = _toastErrorMessage(
        localErrors,
        'Please check your question.',
      );
      setState(() {
        _loading = false;
        _errors = localErrors;
      });
      toast.error('Question not posted', message: errorMessage);
      return;
    }

    try {
      final token = authSession.token;
      final headers = {
        'Accept': 'application/json',
        'X-Requested-With': 'FlintClient',
        if (token != null) 'Authorization': 'Bearer $token',
      };

      final response = await clientRouter.post<Map<String, dynamic>>(
        '/questions/ask',
        body: _form.data,
        headers: headers,
      );

      final data = response.data;
      if (response.success && data != null) {
        final redirectTo = data['redirectTo']?.toString();
        toast.success('Question posted', message: 'Opening the thread...');
        if (redirectTo != null && redirectTo.isNotEmpty) {
          navigation.assign(redirectTo);
        } else {
          navigation.assign('/questions');
        }
        return;
      }

      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post question.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Question not posted', message: errorMessage);
    } on FlintError catch (error) {
      final data = _errorData(error);
      final errors = FormErrors.from(data);
      final errorMessage = _toastErrorMessage(
        errors,
        data?['message']?.toString() ?? 'Could not post question.',
      );
      setState(() {
        _loading = false;
        _errors = errors;
        _message = errors.isEmpty ? errorMessage : null;
      });
      toast.error('Question not posted', message: errorMessage);
    } catch (_) {
      setState(() {
        _loading = false;
        _message = 'Could not post question. Please try again.';
      });
      toast.error('Question not posted', message: _message);
    }
  }

  String _toastErrorMessage(FormErrors errors, String fallback) {
    if (errors.isEmpty) return fallback;
    return errors.firstMessages.values.take(3).join(' ');
  }

  FormErrors _validateQuestion() {
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
    } else if (body.length < 20) {
      errors['body'] = ['The body must be at least 20 characters.'];
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
          'Good topics',
          dartStyle: const DartStyle(
            fontSize: 16,
            fontWeight: 700,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          'Use a short topic so other developers can find your question later.',
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
            for (final topic in _topics) _pill(topic, const Color('#7dd3fc')),
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

const _topics = [
  'Flint',
  'Model',
  'Flint UI',
  'Routing',
  'Auth',
  'Middleware',
  'Database',
  'Deployment',
];

const _inputStyle = DartStyle(
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);

const _textAreaStyle = DartStyle(
  minHeight: 190,
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);
