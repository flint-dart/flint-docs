## Auth

User registration, login, JWT verification, and OAuth helpers.

Future<Map<String, dynamic>> Auth.login(String email, String password, {String? throttleKey})

Authenticate a user and return a JWT token plus user data. Supports optional throttle key when lockout is enabled.

Future<Map<String, dynamic>> Auth.loginWithTokens(String email, String password, {String? throttleKey, String? ipAddress, String? userAgent, String? deviceName})

Issue access token and optional refresh token (when `AUTH_ENABLE_REFRESH_TOKENS=true`).

Future<Map<String, dynamic>?> Auth.refreshAccessToken(String refreshToken, {bool rotateRefreshToken = true, String? ipAddress, String? userAgent, String? deviceName})

Exchange a refresh token for a new access token and optional rotated refresh token.

Future<void> Auth.revokeRefreshToken(String refreshToken)

Revoke a single refresh token.

Future<void> Auth.revokeAllRefreshTokensForUser(Object? userId)

Revoke all refresh tokens for a specific user.

Future<Map<String, dynamic>> Auth.register({required String email, required String password, String? name, Map<String, dynamic>? additionalData})

Create a new user record and return the sanitized user data.

Map<String, dynamic>? Auth.verifyToken(String token)

Verify a JWT and return the payload.

Auth.loginWithGoogle/GitHub/Facebook/Apple(...)

Authenticate with OAuth providers and receive provider user data.

Future<Map<String, dynamic>> Auth.saveProviderUser({required Map<String, dynamic> providerUserData, Map<String, dynamic>? additionalData})

Persist a provider user profile into the auth table.

Future<String?> Auth.generatePasswordResetToken(String email)

Generate a password reset token and store it securely.

Future<bool> Auth.resetPassword({required String token, required String newPassword})

Reset a password using a reset token.

Future<String?> Auth.generateEmailVerificationToken(String email)

Create a verification token for email confirmation.

### Example

```dart
app.post('/login', (Context ctx) async {
  final data = await ctx.req.validate({
    'email': 'required|email',
    'password': 'required|string',
  });

  final result = await Auth.loginWithTokens(
    data['email'],
    data['password'],
    throttleKey: ctx.req.ipAddress,
    ipAddress: ctx.req.ipAddress,
    userAgent: ctx.req.headers['user-agent'],
    deviceName: 'web',
  );
  return ctx.res.json(result); // { user, accessToken, token, refreshToken? }
});

app.post('/refresh', (Context ctx) async {
  final data = await ctx.req.validate({
    'refreshToken': 'required|string',
  });

  final next = await Auth.refreshAccessToken(
    data['refreshToken'],
    rotateRefreshToken: true,
    ipAddress: ctx.req.ipAddress,
    userAgent: ctx.req.headers['user-agent'],
  );

  if (next == null) {
    return ctx.res.status(401).json({'error': 'Invalid refresh token'});
  }

  return ctx.res.json(next);
});
```
