# Getting Started with Flint AI 🤖

Flint AI provides a native, type-safe artificial intelligence runtime for Dart applications, encompassing chat providers, autonomous agents, schema-validated tools, multi-step workflows, conversation memory, and database trace persistence.

---

## 📦 Installation

Add `flint_ai` to your Dart or Flutter application:

```bash
dart pub add flint_ai
```

If you are using the Flint Full-Stack framework, AI capabilities are already built-in via `package:flint_dart/ai.dart` through `app.ai` and `ctx.ai`.

---

## 🚀 Quickstart: Environment Auto-Discovery

The quickest way to start using Flint AI is to initialize chat providers automatically from your `.env` file:

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/ai.dart';

void main() async {
  final app = Flint();

  // Auto-discover OpenAI, Gemini, and Anthropic keys from .env
  app.ai.useChatProvidersFromEnv();

  app.post('/api/ask', (ctx) async {
    final prompt = ctx.req.body['prompt']?.toString() ?? 'Hello!';
    
    // Execute streaming or direct prompt
    final result = await ctx.ai.prompt(prompt);
    
    return ctx.res?.json({'response': result.text});
  });

  await app.listen(port: 8080);
}
```

---

## ⚡ Execution Architecture

```
HTTP Request ➔ ctx.ai.run()
             ➔ AiAgent.plan()
             ➔ AiToolPolicy.canExecute()
             ➔ AiTool.execute()
             ➔ AiAgent.synthesize()
             ➔ AiRunResult JSON
```
