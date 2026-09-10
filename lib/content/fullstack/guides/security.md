# Security

Flint gives you direct security helpers for hashing, JWT work, suspicious path
monitoring, and security-focused exceptions. Use the higher-level auth APIs for
normal login, registration, OTP, password reset, and current-user flows.

## Password Hashing

Use `Hashing` for passwords:

```dart
final hasher = Hashing(algorithm: HashingAlgorithm.bcrypt);

final digest = hasher.hash('secret');
final ok = hasher.verify('secret', digest);
```

`HashingAlgorithm.bcrypt` is the right default for user passwords. Bcrypt stores
salt data inside the generated hash, so hashing the same password twice can
produce different strings. Always verify with `hasher.verify(...)`.

Do not compare raw passwords or hashes manually:

```dart
if (!Hashing().verify(password, user.password!)) {
  throw AuthException(message: 'Invalid email or password');
}
```

`HashingAlgorithm.sha256` is available for deterministic digests, but do not use
plain SHA-256 for user password storage.

## JWT Helpers

Use `FlintJwt` when you need lower-level token work:

```dart
final jwt = FlintJwt('app-secret');

final token = jwt.generateToken(
  {'userId': user.id},
  expiry: const Duration(hours: 2),
);

final payload = jwt.verifyToken(token);

if (payload == null) {
  throw AuthException(message: 'Invalid token');
}
```

`generateToken(...)` adds `iat` and `exp` values. `verifyToken(...)` returns the
payload map when valid and `null` when verification fails.

For app login flows, prefer `Auth.login(...)`, `Auth.generateToken(...)`, and
`Auth.verifyToken(...)` from the authentication guide.

## Security Middleware

`SecurityMiddleware` watches suspicious paths and repeated 404s:

```dart
app.use(
  SecurityMiddleware(
    config: SecurityConfig.production(
      maxNotFoundAttempts: 10,
      notFoundWindow: const Duration(minutes: 1),
      blockDuration: const Duration(hours: 1),
      suspiciousPathPrefixes: const [
        '/wp-admin',
        '/.env',
      ],
    ),
    onSecurityEvent: (event) {
      Log.warning(event.toString());
    },
  ),
);
```

Useful config values:

- `blockNotFoundAbuse`
- `maxNotFoundAttempts`
- `notFoundWindow`
- `blockDuration`
- `suspiciousPathPrefixes`
- `excludedPrefixes`

Use `SecurityConfig.monitorOnly(...)` when you want events without automatic
temporary IP blocking.

## Rate Limiting

Flint does not currently expose a built-in `RateLimitMiddleware` class. Build
rate limiting as app middleware when an endpoint creates or verifies sensitive
tokens.

Protect these endpoints:

- login
- register
- forgot password
- reset password
- send OTP
- resend OTP
- verify OTP
- OAuth callback exchange
- public contact forms
- file uploads

Return HTTP `429`, keep messages clear, and avoid revealing whether an email
exists. Use shared storage for counters when the app runs on multiple server
processes.

## Review Checklist

- Use bcrypt for user passwords.
- Verify secrets with `Hashing.verify(...)`.
- Use auth helpers for full auth workflows.
- Rate-limit login, OTP, password reset, and uploads.
- Keep tokens, OTPs, passwords, cookies, and authorization headers out of logs.
- Validate uploads before storing them.
- Use `AuthException`, `Unauthenticated`, and `ForbiddenException` intentionally.
