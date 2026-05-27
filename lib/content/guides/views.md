## Views

Views are stored in `lib/views`. Render them using `ctx.res.view()`:

```dart
app.get('/', (Context ctx) async {
  return ctx.res.view('home', data: {
    'title': 'Flint Docs'
  });
});
```

A view file named `lib/views/home.flint.html` can extend a layout:

```html
{{ extends('layouts.app') }}

{{ section('content') }}

# {{ title }}

{{ endsection }}
```

Layouts live under `lib/views/layouts` and use `{{ yield('content') }}`.

### Template Processors

Flint’s view engine supports these built‑in template features:

- `extends` — layout inheritance

- `section` / `yield` — slot content into layouts

- `include` — partials

- `variables` — `{{ ... }}` interpolation

- `if_statement` — `if/endif`

- `for_loop` — `for/endfor`

- `switch_cases` — `switch/case/default`

- `comment` — template comments

- `assets` — asset helper tags

- `session` — session/error helpers in templates

### Quick Examples

```html
{{ if user }}

Welcome, {{ user.name }}

{{ endif }}

  {{ for item in items }}

- {{ item }}

  {{ endfor }}

{{ include('partials.nav') }}
```

### Layouts: extends + section + yield

```html
{{ extends('layouts.app') }}

{{ section('title', 'Home') }}

{{ section('content') }}

# Hello, {{ user.name }}

{{ endsection }}
```

In your layout, render sections with `{{ yield('content') }}`. You can also use `{{ section('sidebar') }}...{{ show }}` for defaults.

### Includes With Data

```html
{{ include('partials.card', { "title": "Hello", "body": "..." }) }}
```

### Conditionals

```html
{{ if isAdmin }}

Admin

{{ elseif user }}

User

{{ else }}

Guest

{{ endif }}
```

### Loops

```html
{{ for item in items }}

- {{ item.name }}

{{ endfor }}

{{ for i=0; i

Flash: {{ session('message') }}

{{ if hasSession('message') }}...{{ endif }}
```

### Flash Sessions in Views

Use response flash helpers to pass one-time messages to the next rendered view. In the route/controller, call `withSuccess()` or `withError()` and redirect:

```dart
app.post('/settings', (Context ctx) async {
  final data = await ctx.req.validate({'name': 'required|string|min:2'});
  // ... save settings
  return ctx.res
      ?.withSuccess('Settings updated successfully.')
      .back(fallback: '/settings');
});
```

Then in your template, read them with `session()` and guard with `hasSession()`:

```html
{{ if hasSession('success') }}

{{ session('success') }}

{{ endif }}

{{ if hasSession('error') }}

{{ session('error') }}

{{ endif }}
```
