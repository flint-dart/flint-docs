import 'package:flint_ui/flint_ui.dart';

class AuthState {
  final bool isAuthenticated;
  final bool canWriteBlog;
  final bool canAnswer;
  final bool canComment;
  final String? userId;
  final String label;

  const AuthState({
    required this.isAuthenticated,
    required this.canWriteBlog,
    required this.canAnswer,
    required this.canComment,
    required this.userId,
    required this.label,
  });

  const AuthState.guest()
      : isAuthenticated = false,
        canWriteBlog = false,
        canAnswer = false,
        canComment = false,
        userId = null,
        label = 'Guest';

  static Future<AuthState> fetch() async {
    try {
      final token = authSession.token;
      final res = await clientRouter.get<Map<String, dynamic>>(
        '/api/me',
        headers: token == null ? null : {'Authorization': 'Bearer $token'},
      );
      final data = res.data;
      if (!res.success || data == null) return _fromStoredSession();
      return AuthState(
        isAuthenticated: data['isAuthenticated'] == true,
        canWriteBlog: data['canWriteBlog'] == true,
        canAnswer: data['canAnswer'] == true,
        canComment: data['canComment'] == true,
        userId: data['currentUserId']?.toString(),
        label: data['currentUserLabel']?.toString() ?? 'Signed in',
      );
    } catch (_) {
      return _fromStoredSession();
    }
  }

  static AuthState _fromStoredSession() {
    final session = authSession.current;
    if (session == null) return const AuthState.guest();

    final user = session.user;
    final role = user['role']?.toString();
    return AuthState(
      isAuthenticated: true,
      canWriteBlog: role == 'admin' || role == 'contributor',
      canAnswer: role == 'admin' || role == 'contributor' || role == 'dev',
      canComment: true,
      userId: user['id']?.toString(),
      label:
          user['name']?.toString() ?? user['email']?.toString() ?? 'Signed in',
    );
  }
}
