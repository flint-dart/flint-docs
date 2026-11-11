# Helpers And Utils

Flint helper APIs cover common string values, request helpers, response helpers,
storage helpers, security helpers, and framework utilities. Prefer stable
framework APIs over app-local helper files when the framework already provides
the behavior.

## Import

String helpers live behind:

```dart
import 'package:flint_dart/helper.dart';
```

Most app code can also import the main framework entrypoint:

```dart
import 'package:flint_dart/flint_dart.dart';
```

## String Helpers

Use `Str` for common string values:

```dart
final id = Str.uuid();
final otp = Str.otp();
final token = Str.token();
final random = Str.random(24);
final letters = Str.randomLetters(8);
final numbers = Str.randomNumbers(6);
final slug = Str.slugify('Hello Flint Dart');
final title = Str.capitalize('flint');
final fileName = Str.snake('CourseController');
final key = Str.camel('course_status');
```

Common uses:

- `Str.uuid()` for random IDs.
- `Str.otp(length)` for numeric one-time codes.
- `Str.token(length)` for URL-safe random tokens.
- `Str.random(length)` for alphanumeric random values.
- `Str.slugify(text)` for URL slugs.
- `Str.snake(text)` for file names or keys.
- `Str.camel(text)` for frontend-style keys.

Use auth-specific helpers from `Auth` when a code must be stored and verified by
Flint's auth tables:

```dart
final code = await Auth.generateNumericVerificationCode(email);
final ok = await Auth.verifyNumericCode(email, code);
```

## Request And Response Helpers

In controllers, use the bound request and response objects:

```dart
class ProfileController extends Controller {
  Future<Response> update() async {
    final data = await req.validate({
      'name': 'required|string|min:2',
    });

    return res.json({'data': data});
  }
}
```

In route closures, use `Context`:

```dart
app.get('/health', (Context ctx) {
  return ctx.res?.json({'ok': true});
});
```

## Storage And Security Helpers

Use `Storage` for files and uploaded content:

```dart
final path = await ctx.req.storeFile(
  'avatar',
  directory: 'public/uploads',
);
```

Use `Hashing` for passwords:

```dart
final digest = Hashing().hash(password);
final ok = Hashing().verify(password, digest);
```

## What Not To Use

Do not teach `lib/core/helpers.dart` as the stable helper API. That file may
exist in older projects, but current Flint apps should prefer `Str`, request
helpers, response helpers, `Storage`, `Hashing`, `FlintJwt`, and the documented
framework APIs.
