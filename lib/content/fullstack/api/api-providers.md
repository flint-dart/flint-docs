## Auth Providers

OAuth URL generation and provider metadata.

String AuthService.getGoogleAuthUrl({required String callbackUrl})

Build a Google OAuth URL with PKCE support.

String AuthService.getGitHubAuthUrl({required String callbackUrl})

Build a GitHub OAuth authorization URL.

String AuthService.getFacebookAuthUrl({required String callbackUrl})

Build a Facebook OAuth authorization URL.

String AuthService.getAppleAuthUrl({required String callbackUrl})

Build an Apple Sign In URL.

Map<String, dynamic> AuthService.getAvailableProviders()

Return configured providers and redirect base info.

### Example

```dart
app.get('/auth/google', (Context ctx) async {
  final url = AuthService.getGoogleAuthUrl(
    callbackUrl: 'http://localhost:3030/auth/google/callback',
  );
  return ctx.res.redirect(url);
});
```
