## Validation

Rule-based validation over Flint's normalized request input map.

Future<void> Validator.validate(Map<String, dynamic> data, Map<String, String> rules, {Map<String, String>? messages})

Validate a data map and throw `ValidationException` on failure.

Future<Map<String, dynamic>> ctx.req.validate(Map<String, String> rules)

Validate normalized input and return the parsed map. Works across JSON, URL-encoded forms, multipart fields, files, query params, and route params.

Future<Map<String, String>> ctx.req.validateForm(Map<String, String> rules)

Deprecated form-only helper kept for compatibility. Prefer `ctx.req.validate(...)`.

### Example

```dart
final data = await ctx.req.validate({
  'email': 'required|email',
  'password': 'required|string|min:8',
  'avatar': 'required',
});

final avatar = await ctx.req.input('avatar');
```

### Behavior

Use the same validation rules whether the client sends JSON, URL-encoded form data, or multipart form data. `form()` still returns only text fields, while file uploads are available through `file()`, `files()`, `allFiles()`, and `input()`.
