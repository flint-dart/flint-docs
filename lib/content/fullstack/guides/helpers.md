## Helpers & Utils

Flint provides small helpers for common tasks. These are optional and mostly convenience utilities.

### String Helpers

```dart
final id = Str.uuid();
final otp = Str.otp(6);
final slug = Str.slugify('Hello World!');
final token = Str.token(32);
final snake = Str.snake('UserProfile');
final camel = Str.camel('user_profile');
```

### Path & URL Helpers

```dart
final uploads = storagePath('uploads/avatar.png');
final publicFile = publicPath('images/logo.png');
final assetUrl = assets('images/logo.png');
```

Some utilities under `src/utils/` are internal and may change.
