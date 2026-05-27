## Forms

Form parsing, file uploads, and validation helpers.

Future<Map<String, String>> ctx.req.form()

Parse `application/x-www-form-urlencoded` or multipart text fields. Uploaded files stay available through `file()`, `files()`, and `input()`.

Future<UploadedFile?> ctx.req.file(String fieldName)

Access a single file upload from multipart form data.

Future<Map<String, String>> ctx.req.validateForm(Map<String, String> rules)

Deprecated compatibility helper. Prefer `ctx.req.validate(...)` so the same handler works across JSON, URL-encoded, and multipart requests.

### Example

```dart
app.post('/contact', (Context ctx) async {
  final form = await ctx.req.validate({
    'name': 'required|string',
    'email': 'required|email',
    'attachment': 'required',
  });
  final attachment = await ctx.req.input('attachment');

  return ctx.res.json({'received': form, 'has_attachment': attachment != null});
});
```
