## Errors & Exceptions

Flint ships with `ExceptionMiddleware` enabled by default. It catches common exceptions and returns JSON error responses automatically.

### Validation Errors

Validation failures throw `ValidationException`, which is handled for you:

```dart
app.post('/users', (Context ctx) async {
  final body = await ctx.req.validate({
    'email': 'required|email',
    'password': 'required|string|min:8',
  });
  return ctx.res.json({'ok': true, 'data': body});
});
```

### Auth Errors

Auth helpers throw `AuthException` which is returned as a 401 JSON response.

### Custom Errors

For custom error responses, return directly from your handler:

```dart
return ctx.res.status(403).json({'error': 'Forbidden'});
```
