## Authentication (TOTP)

Flint’s Auth helpers cover the common flows: register, login, password reset, and email verification. You can use these in your controllers or route handlers.

```dart
// Register (with additionalData)
app.post('/auth/register', (Context ctx) async {
  final data = await ctx.req.json();
  final user = await Auth.register(
    email: data['email'],
    password: data['password'],
    name: data['name'],
    additionalData: {
      'role': data['role'],
      'country': data['country'],
    },
  );
  return ctx.res.json({'user': user});
});

// Login
app.post('/auth/login', (Context ctx) async {
  final data = await ctx.req.json();
  final result = await Auth.login(
    data['email'],
    data['password'],
    throttleKey: ctx.req.ipAddress, // optional
  );
  return ctx.res.json(result); // { user, token }
});
```

### Access + Refresh Tokens (Optional)

Refresh token support is opt-in. Keep it disabled unless your app needs long-lived sessions.

```dart
// Login with access + refresh tokens
app.post('/auth/login-with-refresh', (Context ctx) async {
  final data = await ctx.req.json();
  final tokens = await Auth.loginWithTokens(
    data['email'],
    data['password'],
    throttleKey: ctx.req.ipAddress,
    ipAddress: ctx.req.ipAddress,
    userAgent: ctx.req.headers['user-agent'],
    deviceName: 'web',
  );
  return ctx.res.json(tokens); // { user, accessToken, token, refreshToken? }
});

// Rotate refresh token and issue new access token
app.post('/auth/refresh', (Context ctx) async {
  final data = await ctx.req.json();
  final refreshed = await Auth.refreshAccessToken(
    data['refreshToken'],
    rotateRefreshToken: true,
    ipAddress: ctx.req.ipAddress,
    userAgent: ctx.req.headers['user-agent'],
  );
  if (refreshed == null) {
    return ctx.res.status(401).json({'error': 'Invalid refresh token'});
  }
  return ctx.res.json(refreshed);
});

app.post('/auth/logout', (Context ctx) async {
  final data = await ctx.req.json();
  await Auth.revokeRefreshToken(data['refreshToken']);
  return ctx.res.json({'ok': true});
});
```

```dart
// Password reset flow
app.post('/auth/password/forgot', (Context ctx) async {
  final data = await ctx.req.json();
  final token = await Auth.generatePasswordResetToken(data['email']);
  return ctx.res.json({'token': token});
});

app.post('/auth/password/reset', (Context ctx) async {
  final data = await ctx.req.json();
  final ok = await Auth.resetPassword(
    token: data['token'],
    newPassword: data['password'],
  );
  return ctx.res.json({'reset': ok});
});
```

```dart
// Email verification
app.post('/auth/email/verify', (Context ctx) async {
  final data = await ctx.req.json();
  final ok = await Auth.verifyEmail(token: data['token']);
  return ctx.res.json({'verified': ok});
});
```

### OAuth Providers (Google, GitHub, Facebook, Apple)

Use `Auth.providerRedirectUrl` to build the OAuth URL, then exchange the callback code or token using the provider helpers.

You can also register auth endpoints with controllers using `app.controller(...)` inside a `RouteGroup`.

```dart
// RouteGroup + controller helper (example)
class AuthRoutes extends RouteGroup {
  @override
  String get prefix => '/auth';

  @override
  void register(Flint app) {
    final auth = app.controller(AuthController.new);

    auth.get('/github', (c) => c.loginWithGithub());
    auth.get('/google', (c) => c.loginWithGoogle());
  }
}
```

```dart
// 1) Redirect user to provider
app.get('/auth/google', (Context ctx) async {
  final url = Auth.providerRedirectUrl(
    provider: 'google',
    redirectPath: '/auth/google/callback',
  );
  return ctx.res.redirect(url);
});

// 2) Handle callback
app.get('/auth/google/callback', (Context ctx) async {
  final code = ctx.req.queryParam('code');
  if (code == null) return ctx.res.status(400).json({'error': 'Missing code'});

  final profile = await Auth.loginWithGoogle(
    code: code,
    callbackPath: '/auth/google/callback',
  );
  final user = await Auth.saveProviderUser(providerUserData: profile);
  final token = Auth.generateToken(user);
  return ctx.res.json({'user': user, 'token': token});
});
```

```dart
// GitHub (similar flow)
app.get('/auth/github', (Context ctx) async {
  final url = Auth.providerRedirectUrl(
    provider: 'github',
    redirectPath: '/auth/github/callback',
  );
  return ctx.res.redirect(url);
});

app.get('/auth/github/callback', (Context ctx) async {
  final code = ctx.req.queryParam('code');
  if (code == null) return ctx.res.status(400).json({'error': 'Missing code'});

  final profile = await Auth.loginWithGitHub(
    code: code,
    callbackPath: '/auth/github/callback',
  );
  final user = await Auth.saveProviderUser(providerUserData: profile);
  final token = Auth.generateToken(user);
  return ctx.res.json({'user': user, 'token': token});
});
```

```dart
// Facebook (access token or code)
app.post('/auth/facebook', (Context ctx) async {
  final data = await ctx.req.json();
  final profile = await Auth.loginWithFacebook(
    accessToken: data['access_token'],
    code: data['code'],
    callbackPath: '/auth/facebook/callback',
  );
  final user = await Auth.saveProviderUser(providerUserData: profile);
  final token = Auth.generateToken(user);
  return ctx.res.json({'user': user, 'token': token});
});
```

```dart
// Apple Sign In
app.post('/auth/apple', (Context ctx) async {
  final data = await ctx.req.json();
  final profile = await Auth.loginWithApple(
    identityToken: data['identity_token'],
    authorizationCode: data['authorization_code'],
    userData: data['user'],
  );
  final user = await Auth.saveProviderUser(providerUserData: profile);
  final token = Auth.generateToken(user);
  return ctx.res.json({'user': user, 'token': token});
});
```

You can add Time‑based One‑Time Password (TOTP) for 2‑factor authentication. The service below generates a secret, builds a QR/OTPAuth URL, and verifies codes.

TOTP is built into the framework. You can call `TotpService.generateSecret()`, `TotpService.buildOtpAuthUrl()`, and `TotpService.verifyCode()` directly.

Flow: generate a secret per user, show the OTPAuth URL as a QR code, then verify the 6‑digit code on login.

```dart
// Controller-style example

// 1) Enable 2FA for a user
app.post('/auth/2fa/setup', (Context ctx) async {
  final user = await User().find(1);
  if (user == null) return ctx.res.status(404).json({'error': 'User not found'});

  final secret = TotpService.generateSecret();
  final otpUrl = TotpService.buildOtpAuthUrl(
    secret: secret,
    email: user.getAttribute('email'),
  );

  // Save secret to user (store securely)
  await User().where('id', 1).update(data: {'totp_secret': secret});

  return ctx.res.json({'otp_url': otpUrl});
});

// 2) Verify code during login
app.post('/auth/2fa/verify', (Context ctx) async {
  final data = await ctx.req.json();
  final user = await User().find(data['user_id']);
  if (user == null) return ctx.res.status(404).json({'error': 'User not found'});

  final secret = user.getAttribute('totp_secret');
  final ok = TotpService.verifyCode(secret: secret, code: data['code']);

  return ctx.res.json({'verified': ok});
});
```

### Auth Environment Variables

These values live in your `.env` file and control the Auth system defaults.

- `AUTH_TABLE` — users table name (default: `users`).

- `AUTH_EMAIL_COLUMN` — email column (default: `email`).

- `AUTH_PASSWORD_COLUMN` — password column (default: `password`).

- `AUTH_NAME_COLUMN` — name column (default: `name`).

- `AUTH_PROVIDER_COLUMN` — provider column (default: `provider`).

- `AUTH_PROVIDER_ID_COLUMN` — provider ID column (default: `provider_id`).

- `REQUIRE_EMAIL_VERIFICATION` — `true`/`false`.

- `PASSWORD_MIN_LENGTH` — minimum password length.

- `JWT_SECRET` — secret used to sign tokens.

- `JWT_EXPIRY_HOURS` - token lifetime in hours.

- `AUTH_ACCESS_TOKEN_MINUTES` - access token lifetime in minutes.

- `AUTH_ENABLE_REFRESH_TOKENS` - enable refresh token flow (default: `false`).

- `AUTH_REFRESH_TOKEN_DAYS` - refresh token lifetime in days.

- `AUTH_ENABLE_LOGIN_THROTTLE` - enable login lockout logic (default: `false`).

- `AUTH_LOGIN_MAX_ATTEMPTS` - failed attempts before temporary lock.

- `AUTH_LOGIN_LOCK_MINUTES` - lock duration in minutes.

- `REDIRECT_BASE` — base URL for OAuth redirects.

- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`

- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`

- `FACEBOOK_CLIENT_ID` / `FACEBOOK_CLIENT_SECRET`

- `APPLE_CLIENT_ID` / `APPLE_TEAM_ID` / `APPLE_KEY_ID` / `APPLE_PRIVATE_KEY`
