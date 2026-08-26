## Components

FlintUI widgets for server-rendered UI and email templates.

FlintUI widgets produce HTML and plain text output. Render them with `ctx.res.render()` or use them inside email templates via `ViewMailable`.

Text, Container, Row, Column, Button, Image, Head

Core widgets for layout, typography, and content.

FlintComponent

Stateful component base class that renders using FlintWidgets.

### Example

```dart
app.get('/welcome', (Context ctx) async {
  return ctx.res.render(
    Container(
      padding: EdgeInsets.all(24),
      children: [
        Text('Welcome to Flint', fontSize: 28),
        Button(text: 'Get Started', url: '/guides'),
      ],
    ),
  );
});
```
