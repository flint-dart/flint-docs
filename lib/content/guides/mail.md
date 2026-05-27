## Mail

Flint ships with a standalone mail system for transactional emails. Use the low-level `Mail` builder or the higher-level `ViewMailable` for HTML templates.

### Auto Connect From .env

You can auto-configure mail from environment variables using `MailConfig.load()`. The framework calls this once when the app starts (unless you disable it). If you send mail from a custom isolate, you are responsible for calling `MailConfig.load()` inside that isolate before sending.

```dart
MailConfig.load();
```

When starting your app, you can also control automatic mail setup with the `autoConnectMail` flag:

```dart
final app = Flint(
  autoConnectMail: true, // default
);
```

### Manual Setup

```dart
Mail.setup(
  provider: MailProvider.gmail,
  host: 'smtp.gmail.com',
  port: 587,
  username: 'you@gmail.com',
  password: 'app-password',
  fromAddress: 'noreply@yourapp.com',
  fromName: 'Your App',
);
```

### Send Immediately

```dart
await Mail()
  .to('user@example.com')
  .subject('Welcome')
  .html('

Thanks for signing up.

')
  .sendMail();
```

### Send Text-Only Mail

```dart
await Mail()
  .to('user@example.com')
  .subject('Plain Text Message')
  .text('Hello from Flint Mail')
  .sendMail();
```

### Queue In Background (Isolate)

Use `queue()` to send mail in a background isolate so your request returns fast.

```dart
await Mail()
  .to('user@example.com')
  .subject('Verify your email')
  .html('

Click the link to verify your email.

')
  .queue();
```

### ViewMailable (HTML Templates)

`ViewMailable` renders a `.flint.html` template with data, then sends or queues it.

```dart
class WelcomeMail extends ViewMailable {
  final String email;
  final String name;

  WelcomeMail({required this.email, required this.name});

  @override
  String get subject => 'Welcome';

  @override
  String get view => 'mail/views/welcome.flint.html';

  @override
  Map get data => {
    'recipientName': name,
    'recipientEmail': email,
  };

  @override
  List get to => [email];
}

// Send or queue
await WelcomeMail(email: 'user@example.com', name: 'Ada').send();
await WelcomeMail(email: 'user@example.com', name: 'Ada').queue();
```

### Flint Template Example (`.flint.html`)

Store template files in `lib/mail/views`. This is the view referenced by `String get view => 'mail/views/welcome.flint.html';`.

```html

  Welcome

## Hello, {{ recipientName }}!

Welcome to Flint Mail templates.

  {{ if recipientEmail }}

We sent this to: {{ recipientEmail }}

  {{ endif }}

(c) {{ currentYear }} Flint Dart

```

### CLI Scaffold

The CLI generates both the mail class and the HTML view template.

```bash
flint --make-mail Welcome
```
