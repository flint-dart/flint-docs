## Request

HTTP request wrapper with parsing, auth, session, and file helpers.

                Property
                Type
                Description

                `method`

String

                HTTP method (GET, POST, PUT, ...).

                `path`

String

                Request path (no query string).

                `uri`

Uri

                Full request URI.

                `params`

Map<String, String>

                Route params matched by the router.

                `query`

Map<String, String>

                Query parameters from the URL.

                `headers`

Map<String, String>

                Request headers as a normalized map.

                `ipAddress`

String

                Client IP address if available.

                `bearerToken`

String?

                Bearer token from the Authorization header.

                `sessionId`

String?

                Session id from the `FLINTSESSID` cookie.

                Method
                Returns
                Notes

                `param(String key)`

String?

                Read a route parameter by name.

                `queryParam(String key)`

String?

                Read a query parameter by name.

                `input(String key)`

Future<dynamic>

                Normalized input lookup across query, JSON, form fields, multipart fields, uploaded files, and route params.

                `allInput()`

Future<Map<String, dynamic>>

                Return the merged request input map across supported request types.

                `body()`

Future<String>

                Read the request body as text using the cached raw bytes.

                `rawBody()`

Future<List<int>>

                Access exact undecoded request bytes for custom decoding or signature verification.

                `json()`

Future<Map<String, dynamic>>

                Parse JSON request bodies (throws on invalid JSON).

                `form()`

Future<Map<String, String>>

                Parse URL-encoded or multipart text fields only. Uploaded files stay available through `file()`, `files()`, and `input()`.

                `file(String fieldName)`

Future<UploadedFile?>

                Access a single uploaded file.

                `files(String fieldName)`

Future<List<UploadedFile?>>

                Access multiple uploads for a field.

                `allFiles()`

Future<Map<String, UploadedFile>>

                Return all uploaded files.

                `storeFile(String fieldName, {String directory, String? filename})`

Future<String?>

                Persist an uploaded file and return the saved path.

                `storeFiles(String fieldName, {String directory})`

Future<List<String>>

                Persist multiple uploads and return their paths.

                `validate(Map rules)`

Future<Map<String, dynamic>>

                Validate normalized input with rule strings. Works for JSON, URL-encoded forms, multipart fields, files, query params, and route params.

                `validateForm(Map rules)`

Future<Map<String, String>>

                Deprecated compatibility helper for form-only validation. Prefer `validate()`.

                `startSession(Map data, {Duration? ttl})`

Future<String>

                Create a session and set the session cookie.

                `updateSession(Map updates, {Duration? ttl})`

Future<String?>

                Merge updates and create a new session id.

                `destroySession()`

Future<void>

                Destroy the current session and clear the cookie.

                `get user`

Future<Map<String, dynamic>?>

                Resolve the authenticated user from JWT or session.

                `isAuthenticated`

bool

                True if a user payload has been resolved.

                `requireUser()`

Map<String, dynamic>

                Return the user or throw if unauthenticated.

### Example

```dart
app.post('/upload', (Context ctx) async {
  final body = await ctx.req.validate({
    'title': 'required|string',
    'image': 'required',
  });
  final image = await ctx.req.input('image');

  if (image == null) {
    return ctx.res.status(422).json({'error': 'image is required'});
  }

  final rawBytes = await ctx.req.rawBody();
  final path = await ctx.req.storeFile('image');
  return ctx.res.json({
    'title': body['title'],
    'path': path,
    'raw_size': rawBytes.length,
  });
});
```
