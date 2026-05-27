import 'package:flint_ui/flint_ui.dart';

enum AuthModalTone { emerald, sky }

class AuthModal extends FlintComponent {
  AuthModal({
    this.tone = AuthModalTone.emerald,
    this.onClose,
    this.initiallyOpen = false,
    this.buttonLabel = 'Sign in',
  }) : _open = initiallyOpen;

  final AuthModalTone tone;
  final void Function()? onClose;
  final bool initiallyOpen;
  final String buttonLabel;

  final TextEditingController _email = TextEditingController();
  final TextEditingController _name = TextEditingController();
  final TextEditingController _password = TextEditingController();

  bool _open;
  bool _showSignUp = false;
  bool _loading = false;
  String? _error;

  @override
  FlintNode build() {
    if (!_open) {
      return Button(
        child: buttonLabel,
        tone: Tone.primary,
        onPressed: (_) => setState(() => _open = true),
      );
    }

    return Container(
      dartStyle: _backdrop,
      children: [
        h(
          'button',
          props: {
            'type': 'button',
            'aria-label': 'Close sign in',
            'onClick': (_) => _close(),
            'style': const {
              'position': 'absolute',
              'inset': '0',
              'display': 'block',
              'width': '100%',
              'height': '100%',
              'border': '0',
              'background': 'transparent',
              'cursor': 'pointer',
            },
          },
        ),
        Container(
          dartStyle: _panel,
          children: [
            _header(),
            _tabs(),
            if (_error != null) _errorBanner(),
            _showSignUp ? _signUpForm() : _signInForm(),
          ],
        ),
      ],
    );
  }

  FlintNode _header() {
    return Row(
      dartStyle: _headerRow,
      children: [
        Text.h3('Welcome to Flint Docs', dartStyle: _headerTitle),
        Button(
          variant: ButtonVariant.outline,
          tone: Tone.neutral,
          props: const {'aria-label': 'Close sign in'},
          onPressed: (_) => _close(),
          child: Icon(Icons.x, size: 16),
        ),
      ],
    );
  }

  FlintNode _tabs() {
    return Row(
      dartStyle: _tabsRow,
      children: [
        _tab('Sign in', !_showSignUp),
        _tab('Create account', _showSignUp),
      ],
    );
  }

  FlintNode _tab(String label, bool active) {
    return Button(
      child: label,
      variant: active ? ButtonVariant.soft : ButtonVariant.ghost,
      tone: Tone.primary,
      onPressed: (_) => setState(() {
        _showSignUp = label == 'Create account';
        _error = null;
      }),
    );
  }

  FlintNode _errorBanner() {
    return Container(
      dartStyle: _errorBox,
      children: [Text.p(_error!, dartStyle: _errorText)],
    );
  }

  FlintNode _signInForm() {
    return Form(
      dartStyle: _formGrid,
      children: [
        TextField(
          label: 'Email or username',
          name: 'email',
          type: 'email',
          controller: _email,
          placeholder: 'you@example.com',
          inputDartStyle: _input,
        ),
        TextField(
          label: 'Password',
          name: 'password',
          type: 'password',
          controller: _password,
          placeholder: 'Your password',
          inputDartStyle: _input,
        ),
        Button(
          child: _loading ? 'Signing in...' : 'Sign in',
          tone: Tone.primary,
          loading: _loading,
          onPressed: (_) => _submit('/auth/login'),
        ),
      ],
    );
  }

  FlintNode _signUpForm() {
    return Form(
      dartStyle: _formGrid,
      children: [
        TextField(
          label: 'Full name',
          name: 'name',
          controller: _name,
          placeholder: 'Your name',
          inputDartStyle: _input,
        ),
        TextField(
          label: 'Email',
          name: 'email',
          type: 'email',
          controller: _email,
          placeholder: 'you@example.com',
          inputDartStyle: _input,
        ),
        TextField(
          label: 'Password',
          name: 'password',
          type: 'password',
          controller: _password,
          placeholder: 'Minimum 8 characters',
          inputDartStyle: _input,
        ),
        Button(
          child: _loading ? 'Creating account...' : 'Create account',
          tone: Tone.primary,
          loading: _loading,
          onPressed: (_) => _submit('/auth/register'),
        ),
      ],
    );
  }

  Future<void> _submit(String endpoint) async {
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final res = await clientRouter.post<Map<String, dynamic>>(
        endpoint,
        body: {
          'email': _email.text.trim(),
          'password': _password.text,
          if (_showSignUp) 'name': _name.text.trim(),
        },
      );

      if (res.success) {
        _saveSession(res.data);
        toast.success(
          _showSignUp ? 'Account created' : 'Signed in',
          message: 'Refreshing your session...',
        );
        Future.delayed(const Duration(milliseconds: 650), navigation.reload);
        return;
      }

      setState(() {
        _error = _authMessage(res.data);
        _loading = false;
      });
      toast.error('Authentication failed', message: _error);
    } catch (_) {
      setState(() {
        _error = 'Could not sign in. Check your details and try again.';
        _loading = false;
      });
      toast.error('Authentication failed', message: _error);
    }
  }

  void _saveSession(Map<String, dynamic>? payload) {
    final data = payload?['data'];
    final authData = data is Map ? data.cast<String, dynamic>() : null;
    final token = authData?['token']?.toString();
    final rawUser = authData?['user'] ?? authData;
    final user = rawUser is Map
        ? rawUser.cast<String, dynamic>()
        : const <String, dynamic>{};

    if (token == null || token.isEmpty) {
      if (user.isNotEmpty) authSession.updateUser(user);
      return;
    }

    authSession.save(token: token, user: user);
    cookies.write(
      'auth.token',
      token,
      maxAge: const Duration(days: 30),
      sameSite: CookieSameSite.lax,
    );
  }

  String _authMessage(Map<String, dynamic>? data) {
    final errors = data?['errors'];
    if (errors is String) return errors;
    if (errors is Map && errors.isNotEmpty) {
      final first = errors.values.first;
      if (first is List && first.isNotEmpty) return first.first.toString();
      return first.toString();
    }
    return data?['message']?.toString() ?? 'Authentication failed.';
  }

  void _close() {
    setState(() {
      _open = false;
      _error = null;
      _loading = false;
    });
    onClose?.call();
  }
}

const _backdrop = DartStyle(
  position: Position.fixed,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 120,
  display: Display.flex,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.center,
  background: Color.rgba(2, 6, 23, 0.8),
  padding: EdgeInsets.all(16),
);

const _panel = DartStyle(
  position: Position.relative,
  display: Display.grid,
  gap: 20,
  width: SizeValue.percent(100),
  padding: EdgeInsets.all(24),
  radius: 20,
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(15, 23, 42, 0.98),
  maxWidth: 420,
  shadow: Shadow(y: 24, blur: 48, spread: -12, color: Color.rgba(0, 0, 0, 0.5)),
);

const _headerRow = DartStyle(
  display: Display.flex,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.between,
  gap: 12,
);

const _headerTitle = DartStyle(
  fontSize: 18,
  fontWeight: 600,
  color: Colors.white,
  margin: EdgeInsets.all(0),
);

const _tabsRow = DartStyle(
  display: Display.flex,
  flexWrap: FlexWrap.wrap,
  gap: 8,
);

const _errorBox = DartStyle(
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 10),
  radius: 10,
  border: Border(color: Color.rgba(248, 113, 113, 0.4), width: 1),
  background: Color.rgba(248, 113, 113, 0.1),
);

const _errorText = DartStyle(
  fontSize: 13,
  color: Color('#fca5a5'),
  margin: EdgeInsets.all(0),
);

const _formGrid = DartStyle(
  display: Display.grid,
  gap: 16,
);

const _input = DartStyle(
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  background: Color.rgba(2, 6, 23, 0.6),
  fontSize: 14,
  color: Colors.white,
);
