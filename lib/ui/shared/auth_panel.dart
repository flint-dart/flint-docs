import 'package:flint_ui/flint_ui.dart';

class AuthPanel extends Component {
  final String title;
  final String body;
  final String backHref;
  final String backLabel;
  final bool registerFirst;

  AuthPanel({
    required this.title,
    required this.body,
    this.backHref = '/',
    this.backLabel = 'Back',
    this.registerFirst = false,
  });

  final TextEditingController _email = TextEditingController();
  final TextEditingController _name = TextEditingController();
  final TextEditingController _password = TextEditingController();

  bool? _showRegisterOverride;
  bool _loading = false;
  String? _error;

  bool get _showRegister => _showRegisterOverride ?? registerFirst;

  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 18,
        padding: EdgeInsets.all(24),
        radius: 16,
        border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
        background: Color.rgba(15, 23, 42, 0.58),
      ),
      children: [
        Text.h2(
          title,
          dartStyle: const DartStyle(
            fontSize: 22,
            fontWeight: 700,
            color: Colors.white,
            margin: EdgeInsets.all(0),
          ),
        ),
        Text.p(
          body,
          dartStyle: const DartStyle(
            fontSize: 14,
            lineHeight: 1.65,
            color: Color('#cbd5e1'),
            margin: EdgeInsets.all(0),
          ),
        ),
        Row(
          dartStyle: const DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            Button(
              child: 'Sign in',
              variant: _showRegister ? ButtonVariant.ghost : ButtonVariant.soft,
              tone: Tone.primary,
              onPressed: (_) => setState(() {
                _showRegisterOverride = false;
                _error = null;
              }),
            ),
            Button(
              child: 'Create account',
              variant: _showRegister ? ButtonVariant.soft : ButtonVariant.ghost,
              tone: Tone.primary,
              onPressed: (_) => setState(() {
                _showRegisterOverride = true;
                _error = null;
              }),
            ),
          ],
        ),
        if (_error != null)
          Container(
            dartStyle: const DartStyle(
              padding: EdgeInsets.all(12),
              radius: 10,
              border: Border(color: Color.rgba(248, 113, 113, 0.35), width: 1),
              background: Color.rgba(248, 113, 113, 0.08),
            ),
            children: [
              Text.p(
                _error!,
                dartStyle: const DartStyle(
                  fontSize: 13,
                  color: Color('#fca5a5'),
                  margin: EdgeInsets.all(0),
                ),
              ),
            ],
          ),
        Form(
          dartStyle: const DartStyle(display: Display.grid, gap: 14),
          children: [
            if (_showRegister)
              TextField(
                label: 'Name',
                name: 'name',
                controller: _name,
                placeholder: 'Your name',
                inputDartStyle: _inputStyle,
              ),
            TextField(
              label: 'Email or username',
              name: 'email',
              controller: _email,
              placeholder: 'you@example.com',
              inputDartStyle: _inputStyle,
            ),
            TextField(
              label: 'Password',
              name: 'password',
              type: 'password',
              controller: _password,
              placeholder: 'Minimum 8 characters',
              inputDartStyle: _inputStyle,
            ),
            Row(
              dartStyle: const DartStyle(
                display: Display.flex,
                flexWrap: FlexWrap.wrap,
                alignItems: AlignItems.center,
                gap: 12,
              ),
              children: [
                Button(
                  tone: Tone.primary,
                  loading: _loading,
                  onPressed: (_) => _submit(),
                  children: [
                    Icon(_showRegister ? Icons.plus : Icons.logIn, size: 15),
                    Text.span(_showRegister ? 'Create account' : 'Sign in'),
                  ],
                ),
                Link(
                  href: backHref,
                  dartStyle: const DartStyle(
                    display: Display.inlineFlex,
                    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    radius: 9,
                    color: Color('#94a3b8'),
                  ),
                  child: backLabel,
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  Future<void> _submit() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    try {
      final endpoint = _showRegister ? '/auth/register' : '/auth/login';
      final res = await clientRouter.post<Map<String, dynamic>>(
        endpoint,
        body: {
          'email': _email.text.trim(),
          'password': _password.text,
          if (_showRegister) 'name': _name.text.trim(),
        },
      );

      if (res.success) {
        _saveSession(res.data);
        toast.success(
          _showRegister ? 'Account created' : 'Signed in',
          message: 'Refreshing your session...',
        );
        Future.delayed(const Duration(milliseconds: 650), navigation.reload);
        return;
      }

      setState(() {
        _loading = false;
        _error = _authMessage(res.data);
      });
      toast.error('Authentication failed', message: _error);
    } catch (_) {
      setState(() {
        _loading = false;
        _error = 'Could not sign in. Check your details and try again.';
      });
      toast.error('Authentication failed', message: _error);
    }
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
}

const _inputStyle = DartStyle(
  background: Color.rgba(2, 6, 23, 0.72),
  border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
  color: Colors.white,
);
