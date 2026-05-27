## Auth Guards

Protect routes with middleware and request auth helpers.

Flint does not require a separate guard system. Use middleware and `ctx.req.user` to enforce access.

### Example

```dart
class AuthGuard extends Middleware {
  @override
  Handler handle(Handler next) {
    return (Context ctx) async {
      final user = await ctx.req.user;
      if (user == null) {
        return ctx.res.status(401).json({'error': 'Unauthorized'});
      }
      return next(ctx);
    };
  }
}

app.get('/dashboard', (Context ctx) async => ctx.res.send('ok'))
  .useMiddleware(AuthGuard());
```
