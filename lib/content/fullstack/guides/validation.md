## Input Validation

Validate normalized request input right from the request. The same handler can accept JSON, URL-encoded forms, or multipart form data without branching on content type.

### Validate Any Supported Request Body

```dart
app.post('/register', (Context ctx) async {
  final data = await ctx.req.validate({
    'name': 'required|string|min:3',
    'email': 'required|email',
    'password': 'required|string|min:8',
    'avatar': 'required',
  }, messages: {
    'email.required': 'Email is required.',
    'email.email': 'Enter a valid email address.',
    'password.min': 'Password must be at least :min characters.',
  });

  final avatar = await ctx.req.input('avatar');
  return ctx.res.json({'ok': true, 'data': data, 'avatar': avatar != null});
});
```

### Form Fields vs Files

```dart
app.post('/profile', (Context ctx) async {
  final data = await ctx.req.validate({
    'bio': 'string|max:160',
    'website': 'string',
    'avatar': 'required',
  });
  final fields = await ctx.req.form();
  final avatar = await ctx.req.input('avatar');

  return ctx.res.json({
    'ok': true,
    'data': data,
    'field_count': fields.length,
    'has_avatar': avatar != null,
  });
});
```

### Raw Body Access

```dart
app.post('/webhooks/stripe', (Context ctx) async {
  final bytes = await ctx.req.rawBody();
  return ctx.res.json({'size': bytes.length});
});
```

Validation rules are pipe-separated (e.g. `required|string|min:3`). Supported rules include `required`, `string`, `int`, `double`, `bool`, `email`, `regex:pattern`, `list`, `list:type`, `confirmed`, `date`, `in:a,b,c`, `not_in:a,b,c`, `min:n`, and `max:n`.

By default, fields not present in your rules are treated as invalid. On failure, Flint throws a `ValidationException` with field errors. Custom messages can target `field.rule`, `field`, or `rule` keys and support `:field`, `:min`, `:max`, and `:value` placeholders.

`validateForm()` is still available for compatibility, but new code should use `validate()`, `input()`, and `allInput()`.
