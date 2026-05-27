# Flint UI Guide

Flint UI lets you build browser interfaces with Dart components.

The goal is not to hide the web. The goal is to keep the same Dart mental model across your backend and frontend: components are Dart classes, state is Dart fields, events are Dart callbacks, and styles can live beside the UI with `DartStyle`.

## A component is a Dart class

Create a component by extending `Component` and returning a view from `build()`.

```dart
import 'package:flint_ui/flint_ui.dart';

class WelcomeCard extends Component {
  @override
  View build() {
    return Container(
      dartStyle: const DartStyle(
        display: Display.grid,
        gap: 12,
        padding: EdgeInsets.all(20),
        radius: 14,
        background: Color.rgba(15, 23, 42, 0.72),
      ),
      children: [
        Text.h2('Build UI in Dart'),
        Text.p('Components, state, events, and styling stay in one language.'),
      ],
    );
  }
}
```

The public API uses `Component` and `View`. The internal node system stays inside Flint UI.

## Props come from the server

Server-rendered Flint pages can pass props into a component.

```dart
return res.page(
  'Blog',
  props: {
    'posts': posts,
    'isAuthenticated': user != null,
  },
  script: DocsSupport.browserEntrypoint,
);
```

Then the browser component reads those props.

```dart
class BlogPage extends Component {
  BlogPage(this.props);

  final Map<String, dynamic> props;

  bool get isAuthenticated => props['isAuthenticated'] == true;

  @override
  View build() {
    return Text.p(isAuthenticated ? 'Welcome back' : 'Sign in to write');
  }
}
```

Keep props JSON-safe. Send strings, numbers, booleans, lists, and maps. Avoid passing raw database objects or values that cannot be encoded.

## State updates with setState

For interactive UI, store state on the component and call `setState`.

```dart
class Counter extends Component {
  int count = 0;

  @override
  View build() {
    return Row(
      dartStyle: const DartStyle(display: Display.flex, gap: 12),
      children: [
        Text.span('Count: $count'),
        Button(
          onPressed: (_) => setState(() => count++),
          children: [Text.span('Add one')],
        ),
      ],
    );
  }
}
```

This keeps simple interactions easy to teach and easy to inspect.

## Style inline with DartStyle

`DartStyle` gives typed styling without leaving Dart.

```dart
Container(
  dartStyle: const DartStyle(
    display: Display.grid,
    gap: 16,
    padding: EdgeInsets.all(24),
    radius: 18,
    border: Border(color: Color.rgba(30, 41, 59, 1), width: 1),
    background: Color.rgba(15, 23, 42, 0.62),
  ),
  children: [
    Text.h2('Readable styling'),
    Text.p('The layout is beside the component that owns it.'),
  ],
);
```

For docs and learning examples, inline `DartStyle` is useful because the reader can see the component and its visual design together.

## Register pages

The browser entrypoint registers page names with component constructors.

```dart
final componentRegistry = FlintComponentRegistry({
  'Home': (props) => HomePage(props),
  'Blog': (props) => BlogPage(props),
  'Questions': (props) => QuestionsPage(props),
});
```

Then mount the app.

```dart
void main() {
  createFlintApp(
    '#app',
    registry: componentRegistry,
    rootDesign: docsRootDesign,
  );
}
```

The server chooses the page by name. The browser hydrates the matching component.

## Use clientRouter for requests

Flint UI includes a small client router for browser requests.

```dart
final result = await clientRouter.post<Map<String, dynamic>>(
  '/auth/login',
  body: {
    'email': email.text,
    'password': password.text,
  },
);

if (result.success) {
  toast.success('Signed in');
  navigation.reload();
}
```

Use this for login forms, comments, questions, dashboard actions, and other browser interactions.

## Toasts for feedback

Framework-level toasts make small UI actions feel alive.

```dart
toast.success(
  'Account created',
  message: 'Refreshing your session...',
);

toast.error(
  'Authentication failed',
  message: 'Check your details and try again.',
);
```

Toasts are useful after forms, copy buttons, saves, and failed network requests.

## Render trusted HTML

When you already have trusted HTML, such as Markdown rendered on the server, use `HtmlContent`.

```dart
HtmlContent(
  html: contentHtml,
  className: 'markdown-body',
);
```

If you need to write into an existing element, use a selector.

```dart
Container(
  children: [
    h('div', props: {'id': 'docs-content'}, children: []),
    HtmlContent(
      selector: '#docs-content',
      html: contentHtml,
    ),
  ],
);
```

`HtmlContent` updates when parent state changes, so loading new Markdown into the same page does not require manual `document.getElementById(...)` code in your app.

## Preserve state and receive updates

Flint preserves component instances so local state is not lost during a rerender. If a stateful component also accepts constructor values, override `updateFrom` to copy the new values into the preserved instance.

```dart
class PreviewPanel extends Component {
  PreviewPanel({required this.html});

  String html;

  @override
  void updateFrom(covariant PreviewPanel next) {
    html = next.html;
  }

  @override
  View build() {
    return HtmlContent(html: html);
  }
}
```

This keeps state powerful without making constructor data stale.

## The Flint UI idea

Flint UI is for developers who want to keep the frontend in Dart while still building real browser interfaces.

Start with a component. Pass JSON-safe props. Add state when the UI needs it. Keep styles visible with `DartStyle`. Then grow the page into a real app without leaving the Dart ecosystem.
