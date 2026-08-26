## Security

Flint includes security basics out of the box: password hashing and JWT tokens. Always use HTTPS in production and store secrets in `.env`.

### JWT Tokens

```dart
// Generate a JWT for a user
final token = Auth.generateToken({'id': userId, 'email': userEmail});

// Verify an incoming token
final payload = Auth.verifyToken(token);
if (payload == null) {
  return ctx.res?.status(401).json({'error': 'Invalid token'});
}
```

### Password Hashing

```dart
// Hash a password before saving
final hashed = Hashing().hash(password);

// Verify a password during login
final ok = Hashing().verify(password, hashedPassword);
```

### Security Utilities (Direct Use)

You can use the low-level helpers directly when you are not using `Auth`.

```dart
// Choose algorithm explicitly
final hasher = Hashing(algorithm: HashingAlgorithm.bcrypt);
final digest = hasher.hash('secret');
final ok = hasher.verify('secret', digest);

// Raw JWT helper (uses JWT_SECRET from .env)
final jwt = FlintJwt(FlintEnv.get('JWT_SECRET'));
final token = jwt.sign({'id': 1});
final payload = jwt.verify(token);
```

### Rate Limiting (Guidance)

For public APIs, add rate limiting at the reverse proxy (Nginx/Cloudflare) or implement a middleware that tracks requests per IP. This prevents abuse and protects your Auth endpoints.
