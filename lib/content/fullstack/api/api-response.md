## Response

Response helper for JSON, HTML, files, views, and FlintUI rendering.

                Method
                Returns
                Notes

                `send(String body, {int? status, String contentType = 'text/plain'})`

Response

                Send plain text or custom content.

                `json(dynamic data, {int? status})`

Future<Response>

                Send JSON data with automatic serialization.

                `respond(dynamic data, {int? status, RespondType? type})`

Future<Response>

                Send a response with type inference (JSON, HTML, plain text, FlintUI).

                `status(int code)`

Response

                Set the HTTP status code (chainable).

                `redirect(String location, {int status = 302})`

Response

                Redirect the client to a new location.

                `back({String fallback = '/', int status = 302})`

Response

                Redirect to the `Referer` header, or to `fallback` when missing.

                `withFlash(String key, String message)`

Response

                Set a one-request flash message for templates.

                `withSuccess(String message)` / `withError(String message)`

Response

                Convenience wrappers for success/error flash messages.

                `sendStatus(int code)`

Response

                Send a standard status message for a status code.

                `view(String templateName, {Map? data})`

Future<Response>

                Render a template from `lib/views`.

                `render(FlintWidget widget, {String? title, int? status, bool includePreview = false})`

Response

                Render FlintUI widgets as HTML.

                `renderEmail(ViewMailable mailable, {bool includePreview = true})`

Response

                Render a Flint email template.

                `streamFile(File file, {int start = 0, int? end})`

Future<void>

                Stream a file to the client (supports byte ranges).

                `setCookie(String name, String value, {DateTime? expires, int? maxAge, String path = '/', bool httpOnly = true, bool secure = false, String sameSite = 'Lax'})`

Response

                Set a cookie header.

                `clearCookie(String name, {String path = '/'})`

Response

                Remove a cookie by setting an expired value.

                `close()`

Future<void>

                Close the underlying response stream.

### Example

```dart
app.get('/profile', (Context ctx) async {
  final user = await ctx.req.user;
  if (user == null) {
    return ctx.res.status(401).json({'error': 'Unauthorized'});
  }
  return ctx.res.view('profile.show', data: {'user': user});
});
```

### Direct Return Serialization

```dart
class UserDto {
  final int id;
  final String email;
  UserDto(this.id, this.email);

  Map toJson() => {'id': id, 'email': email};
}

app.get('/me', (Context ctx) async {
  return UserDto(1, 'ada@example.com'); // serialized automatically
});
```

### Flash + Back Redirect

```dart
app.post('/profile', (Context ctx) async {
  final data = await ctx.req.validate({'name': 'required|string|min:2'});
  // ... save data
  return ctx.res
      ?.withSuccess('Profile updated successfully.')
      .back(fallback: '/profile');
});
```
