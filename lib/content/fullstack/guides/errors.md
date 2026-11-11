# Errors And Exceptions

Flint's default `ExceptionMiddleware` converts known framework exceptions into
HTTP responses when `Context.res` exists.

## Common Exceptions

- `ValidationException`
- `ValidationError`
- `AuthException`
- `Unauthenticated`
- `ForbiddenException`
- `NotFoundException`
- `HttpException`
- `BaseException`

Validation errors usually come from `await req.validate(...)`:

```dart
final data = await req.validate({
  'email': 'required|email',
});
```

When validation fails, the default response status is `422`:

```json
{
  "status": false,
  "errors": {
    "email": ["The email field is required."]
  }
}
```

## Auth And Permission Errors

Throw `AuthException` or `Unauthenticated` when authentication is missing or
invalid:

```dart
throw AuthException(message: 'Invalid email or password');
```

Throw `ForbiddenException` when the user is authenticated but not allowed:

```dart
throw ForbiddenException(message: 'Admin access required');
```

## Explicit HTTP Errors

Throw `HttpException` when a route or service needs a specific status:

```dart
throw HttpException(
  409,
  'Course already exists',
  data: {'id': course.id},
);
```

Use `BaseException` for custom framework-style exceptions:

```dart
class PlanLimitException extends BaseException {
  const PlanLimitException()
      : super(
          message: 'Plan limit reached',
          code: 403,
        );
}
```

## Controller Pattern

Most controllers should not catch validation or auth exceptions only to wrap
them again. Let `ExceptionMiddleware` produce the normal framework response.

```dart
class CourseController extends Controller {
  Future<Response> store() async {
    final data = await req.validate({
      'title': 'required|string|min:3',
    });

    final course = await CreateCourseAction().call(data);
    return res.status(201).json({'data': course});
  }
}
```

## WebSocket Errors

WebSocket-only contexts do not have an HTTP `Response`. When `ctx.res` is null,
handle socket errors inside the WebSocket handler and send an event back through
`ctx.socket`.

```dart
socket.on('message:send', (payload) async {
  try {
    await SendMessageAction().call(payload);
  } on ValidationException catch (error) {
    socket.emit('message:error', {'errors': error.errors});
  }
});
```

## Logging

Use `Log.error(...)` or `Log.critical(...)` for server-side failures that need
operator attention. Do not log cookies, tokens, OTPs, passwords, authorization
headers, or raw request bodies.
