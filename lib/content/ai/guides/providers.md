# AI Providers & Model Configuration 🌐

Flint AI supports OpenAI, Google Gemini, Anthropic Claude, and local Ollama instances through a unified interface.

---

## 🔑 Environment Variables

Add your provider keys to your project's `.env` file:

```env
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AIzaSy...
ANTHROPIC_API_KEY=sk-ant-...
OLLAMA_BASE_URL=http://localhost:11434
```

---

## 🛠️ Registering Providers in Dart

### 1. Auto-Registration
```dart
app.ai.useChatProvidersFromEnv();
```

### 2. Explicit Provider Selection
```dart
// Register specific providers
app.ai.useOpenAiFromEnv(defaultModel: 'gpt-4o');
app.ai.useGeminiFromEnv(defaultModel: 'gemini-1.5-pro');
app.ai.useAnthropicFromEnv(defaultModel: 'claude-3-5-sonnet-20240620');
```

### 3. Programmatic Configuration
```dart
app.ai.registerChatProvider(
  OpenAiChatProvider(
    apiKey: 'sk-custom-key',
    defaultModel: 'gpt-4o-mini',
  ),
);
```
