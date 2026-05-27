## Mail

Send or queue email via SMTP.

Mail.setup({required MailProvider provider, required String host, required int port, required String username, required String password, required String fromAddress, String fromName = 'Flint Dart', bool useSSL = false, bool useTLS = true})

Configure SMTP settings once at startup.

Mail().to(...).subject(...).text(...).sendMail()

Send mail immediately.

Mail().html(...).queue()

Send mail in a background isolate.

### Example

```dart
Mail.setup(
  provider: MailProvider.custom,
  host: 'smtp.example.com',
  port: 587,
  username: 'user',
  password: 'secret',
  fromAddress: 'noreply@example.com',
);

await Mail()
  .to('user@example.com')
  .subject('Welcome')
  .text('Thanks for signing up')
  .sendMail();
```

### Text-only Example

```dart
await Mail()
  .to('user@example.com')
  .subject('Plain Text Message')
  .text('Hello from Flint Mail')
  .sendMail();
```

### Template File Example

```html

## Hello, {{ recipientName }}

Your email: {{ recipientEmail }}

(c) {{ currentYear }} Flint

```
