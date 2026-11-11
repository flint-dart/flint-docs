# Security

Flint is designed around **Secure-by-Default** principles to eliminate common web vulnerabilities (like OWASP Top 10 risks) right out of the box. It gives you direct security helpers for hashing, JWT work, suspicious path monitoring, and security-focused exceptions. Use the higher-level auth APIs for normal login, registration, OTP, password reset, and current-user flows.

## Secure-by-Default Architecture

Flint enforces safe defaults across the stack so developers don't have to manually wire up baseline protections:

1. **SQL Injection Prevention by Default**:
   Database interactions via `DB.query(...)` and Flint models use parameterized queries and prepared statements (`positionalParams` or named bindings). Raw query string concatenation is actively discouraged.
2. **Automatic Output Escaping (XSS Protection)**:
   Flint UI and SSR template engines automatically escape HTML entities on dynamic strings, preventing stored and reflected Cross-Site Scripting (XSS).
3. **Modern Hashing Defaults**:
   `Hashing(algorithm: HashingAlgorithm.bcrypt)` is the default password strategy, utilizing salted, slow-hash algorithms and constant-time comparison to protect against brute-force and timing attacks.
4. **Strict Boundary Validation & Type Safety**:
   `Validator.validate(data, rules)` checks schemas, types, and constraints before data touches business logic. Combined with Dart's sound null-safety, memory corruption and type-confusion vulnerabilities are eliminated.
5. **Session & Cookie Hardening**:
   Session cookies default to `HttpOnly`, `SameSite`, and `Secure` flags to mitigate credential theft and CSRF.
6. **Built-in Scanner and Abuse Defense**:
   `SecurityMiddleware` monitors automated probe attempts against sensitive files (e.g., `/.env`, `/wp-admin`) and blocks repeated 404 abuse.

## SQL Anti-Injection (SQL Injection Prevention)

Flint provides built-in protection against SQL Injection vulnerabilities by separating SQL query structure from user-supplied data through parameterized queries and prepared statements. **Never concatenate or interpolate user-supplied input directly into SQL strings.**

### Parameterized Queries with `positionalParams`

Always pass dynamic values using `positionalParams` in `DB.query(...)`:

```dart
// ✅ SAFE: Parameterized binding prevents SQL injection
final email = req.input('email');

final users = await DB.query(
  'SELECT id, email, role FROM users WHERE email = ? AND deleted_at IS NULL LIMIT 1',
  positionalParams: [email],
);
```

```dart
// ❌ UNSAFE: String interpolation allows SQL injection attacks
final email = req.input('email');

final users = await DB.query(
  "SELECT id, email, role FROM users WHERE email = '$email' AND deleted_at IS NULL LIMIT 1",
);
```

### Parameterized INSERT and UPDATE Queries

Use positional parameter placeholders (`?`) for state-changing queries:

```dart
// ✅ SAFE: Parameterized values bound safely by database engine
await DB.query(
  '''
  UPDATE products 
  SET title = ?, price = ?, stock = ?, updated_at = ? 
  WHERE id = ? AND company_id = ?
  ''',
  positionalParams: [
    title,
    price,
    stock,
    DateTime.now().toIso8601String(),
    productId,
    companyId,
  ],
);
```

### Model Query Builders

When querying through Flint Models, filter values are automatically treated as bound parameters:

```dart
// ✅ SAFE: Flint model query builder binds values automatically
final user = await User.query()
  .where('email', email)
  .whereNull('deleted_at')
  .first();
```

### Dynamic Identifiers & Whitelisting

Parameters (`?`) bind column **values**, not identifiers (like column names, table names, or sort orders). If you must accept dynamic sort columns or orders from user input, validate against a strict whitelist:

```dart
// Whitelist allowed sort columns
const allowedSorts = {'created_at', 'price', 'name'};
final sortCol = allowedSorts.contains(req.input('sort')) 
    ? req.input('sort') 
    : 'created_at';

final sortDir = req.input('dir')?.toUpperCase() == 'DESC' ? 'DESC' : 'ASC';

final rows = await DB.query(
  'SELECT * FROM products WHERE company_id = ? ORDER BY $sortCol $sortDir',
  positionalParams: [companyId],
);
```

### AntiSqlInjectionMiddleware (Defense-in-Depth Tripwire)

Flint includes a dedicated WAF-style tripwire middleware [`AntiSqlInjectionMiddleware`](/fullstack/guides/middleware#anti-sql-injection-middleware) exported in `package:flint_dart/middlewares.dart`.

> [!NOTE]
> `AntiSqlInjectionMiddleware` is **not automatically enabled** by default so that it does not cause false positives on endpoints that accept code, SQL snippets, or rich text (e.g. blog posts or documentation editors). **The developer adds it explicitly** using `app.use(...)`.

To activate it across your app:

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/middlewares.dart';

void main() {
  final app = Flint();

  // Register the SQL injection tripwire
  app.use(AntiSqlInjectionMiddleware(
    scanBody: true,
    scanHeaders: false,
    ignoredPathPrefixes: ['/admin/cms', '/api/docs'],
  ));

  app.start();
}
```

This middleware inspects route parameters, query strings, and request bodies for high-confidence SQL injection patterns (`UNION SELECT`, stacked queries, tautologies like `' OR 1=1`, destructive commands, comments, and sleep/benchmark probes) and halts malicious requests with a `400 Bad Request` before they reach your controllers.

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

- Never interpolate user input into raw SQL; always use `positionalParams` or Model query builders.
- Whitelist dynamic table or column identifiers instead of passing raw input to queries.
- Use bcrypt for user passwords.
- Verify secrets with `Hashing.verify(...)`.
- Use auth helpers for full auth workflows.
- Rate-limit login, OTP, password reset, and uploads.
- Keep tokens, OTPs, passwords, cookies, and authorization headers out of logs.
- Validate uploads before storing them.
- Use `AuthException`, `Unauthenticated`, and `ForbiddenException` intentionally.
