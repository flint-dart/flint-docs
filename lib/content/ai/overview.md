## AI Runtime

Flint AI gives Flint Dart applications a complete AI layer: chat providers,
agents, tools, workflows, memory, trace events, database persistence, and
production tool policies.

Use it when you want AI features that are part of your real application, not a
separate script. A support agent can read a ticket, call a safe tool, draft a
reply, store the thread, and leave a trace that staff can review later.

### What You Build

A typical Flint AI feature has these layers:

- **Providers** connect to OpenAI, Gemini, Anthropic, or another chat API.
- **Agents** receive a goal and create a plan.
- **Tools** perform controlled work such as summarizing data, drafting content,
  creating reports, queueing email, or calling internal services.
- **Workflows** run named reusable operations without needing a full agent plan.
- **Memory and repository adapters** store runs, trace events, threads, and
  artifacts.
- **Flint Dart adapters** expose everything through `app.ai` and `ctx.ai`.

The normal execution flow is:

```text
HTTP request -> ctx.ai.run()
             -> AiAgent.plan()
             -> AiToolPolicy.canExecute()
             -> AiTool.execute()
             -> AiAgent.synthesize()
             -> AiRunResult JSON
```

## Install And Setup

Flint Dart re-exports the AI runtime from `package:flint_dart/ai.dart`.

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/ai.dart';
```

When using the standalone package outside Flint Dart, install `flint_ai`
directly:

```bash
dart pub add flint_ai
```

For Flint Dart apps, use `app.ai`:

```dart
final app = Flint();

app.ai.useChatProvidersFromEnv();
```

## Configure Providers From `.env`

Provider setup can be manual, but the easiest Flint Dart path is to use the
`.env` helpers.

```dart
final registered = app.ai.useChatProvidersFromEnv();
```

This registers every provider with credentials present in the environment.

Supported keys:

- `OPENAI_API_KEY`
- `OPENAI_BEARER_TOKEN`
- `OPENAI_CHAT_ENDPOINT`
- `GEMINI_API_KEY`
- `GEMINI_BEARER_TOKEN`
- `GEMINI_CHAT_ENDPOINT`
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_CHAT_ENDPOINT`

Example `.env`:

```env
OPENAI_API_KEY=sk-your-key
GEMINI_API_KEY=your-gemini-key
ANTHROPIC_API_KEY=your-anthropic-key
```

You can also register one provider at a time:

```dart
app.ai.useOpenAiFromEnv();
app.ai.useGeminiFromEnv();
app.ai.useAnthropicFromEnv();
```

Manual provider registration is also supported:

```dart
app.ai.registerChatProvider(
  OpenAiChatProvider(apiKey: 'openai-key'),
);
```

## Chat Completions

Use `ctx.ai.chat()` for a normal non-streaming chat response.

```dart
app.post('/ai/chat', (Context ctx) async {
  final body = await ctx.req.json();

  final result = await ctx.ai.chat(
    providerId: body['provider']?.toString() ?? 'openai',
    request: ChatRequest(
      model: body['model']?.toString() ?? 'gpt-4o-mini',
      messages: [
        ChatMessage(
          role: 'user',
          content: body['message']?.toString() ?? 'Say hello from Flint',
        ),
      ],
    ),
  );

  return ctx.res?.json({
    'status': true,
    'data': result.toMap(),
  });
});
```

The built-in chat providers are:

- `OpenAiChatProvider`
- `GeminiChatProvider`
- `AnthropicChatProvider`

## Streaming Chat

Use `ctx.ai.streamChat()` when you want the UI to render text as it arrives.

Providers emit:

- `chat.delta` for incremental text chunks
- `chat.completed` when the response is finished

```dart
app.get('/ai/chat/stream', (Context ctx) async {
  final events = <Map<String, dynamic>>[];

  await for (final event in ctx.ai.streamChat(
    providerId: 'openai',
    request: const ChatRequest(
      model: 'gpt-4o-mini',
      messages: [
        ChatMessage(role: 'user', content: 'Write a short welcome note'),
      ],
    ),
  )) {
    events.add({
      'type': event.type,
      'payload': event.payload,
    });
  }

  return ctx.res?.json({
    'status': true,
    'events': events,
  });
});
```

`OpenAiChatProvider`, `GeminiChatProvider`, and `AnthropicChatProvider` support
native server-sent event streaming.

## Create An Agent

An agent receives an `AiGoal`, creates an `AiPlan`, and returns structured
output after the plan runs.

```dart
class SupportAgent extends AiAgent {
  @override
  String get name => 'support_agent';

  @override
  Future<AiPlan> plan(AiRunContext context) async {
    return AiPlan(
      steps: [
        AiPlanStep(
          id: 'support_summary',
          type: 'tool',
          description: 'Prepare support summary and customer draft',
          toolName: 'support.summary',
          arguments: context.goal.input,
        ),
      ],
    );
  }

  @override
  Future<Map<String, dynamic>> synthesize(AiRunContext context) async {
    final summary = Map<String, dynamic>.from(
      context.state['support_summary'] as Map? ?? const {},
    );
    return {
      'summary': summary['summary'],
      'draft': summary['draft'],
      'category': summary['category'],
      'recommendedActions': summary['recommendedActions'],
    };
  }
}
```

Agents should not perform side effects directly. Put side effects inside tools
so Flint can authorize and trace them.

## Create A Tool

Tools are the side-effect boundary. They can read arguments, access the current
user and tenant ids, use metadata, and return structured JSON-like data.

```dart
class SupportSummaryTool extends AiTool {
  @override
  String get name => 'support.summary';

  @override
  String get description => 'Summarizes a support issue and drafts a reply.';

  @override
  Set<String> get requiredCapabilities => const {'support:write'};

  @override
  Future<Map<String, dynamic>> execute(AiToolContext context) async {
    final issue = context.arguments['issue']?.toString().trim() ?? '';
    final priority = context.arguments['priority']?.toString() ?? 'normal';

    return {
      'category': issue.toLowerCase().contains('login')
          ? 'account_access'
          : 'general_support',
      'summary': '[$priority] $issue',
      'draft':
          'Thank you for reaching out. We have reviewed this request and will follow up with the next steps.',
      'recommendedActions': [
        'review customer account',
        'confirm details',
        'send response',
      ],
    };
  }
}
```

Register tools during app startup:

```dart
app.ai.registerTool(SupportSummaryTool());
```

## Run The Agent From A Route

```dart
app.post('/ai/support', (Context ctx) async {
  final body = await ctx.req.json();

  final result = await ctx.ai.run(
    agent: SupportAgent(),
    goal: AiGoal(
      task: 'Prepare support response',
      input: {
        'issue': body['issue'],
        'priority': body['priority'] ?? 'normal',
      },
    ),
    userId: 'support-user-1',
    threadId: body['threadId']?.toString(),
    context: ctx,
    metadata: {
      'role': 'SUPPORT',
      'capabilities': ['support:write'],
    },
  );

  return ctx.res?.json({
    'status': true,
    'data': result.toMap(),
  });
});
```

`metadata` is important in production because the tool policy can read the
current role and capabilities before allowing a tool to run.

## Save Thread Messages

Use thread memory when building chat or support experiences.

```dart
await ctx.ai.saveThreadMessage(threadId, {
  'role': 'user',
  'content': body['issue'],
  'source': 'support_dashboard',
});

final thread = await ctx.ai.loadThreadMessages(threadId);
```

You can also load run events:

```dart
final events = await ctx.ai.loadRunEvents(result.run.id);
```

## Workflows

Use workflows for named reusable operations that do not need a full agent
planning step.

```dart
class SupportFollowupWorkflow extends AiWorkflow {
  @override
  String get name => 'support_followup';

  @override
  String get description => 'Creates a support follow-up payload.';

  @override
  Future<Map<String, dynamic>> run(AiWorkflowContext context) async {
    return {
      'status': 'queued',
      'userId': context.userId,
      'threadId': context.threadId,
      'nextStep': 'Review draft and send customer update',
    };
  }
}

app.ai.registerWorkflow(SupportFollowupWorkflow());
```

Run a workflow:

```dart
final workflow = await ctx.ai.runWorkflow(
  'support_followup',
  userId: 'support-user-1',
  threadId: 'support-thread-1',
  input: {'priority': 'high'},
  context: ctx,
);
```

## Production Tool Security

AI agents should not be allowed to run every tool. Use production policy when
tools can send messages, update records, publish content, delete data, charge
money, issue refunds, or call external services.

```dart
app.ai.useProductionToolPolicyFromEnv();
```

Supported policy keys:

- `AI_ALLOWED_TOOLS`
- `AI_ALLOWED_CAPABILITIES`
- `AI_ALLOWED_ROLES`

Example `.env`:

```env
AI_ALLOWED_ROLES=ADMIN
AI_ALLOWED_CAPABILITIES=support:write,reporting:read,content:write
```

Production guidance:

- Do not set `enabledByDefault` on destructive tools.
- Give each destructive tool a specific `requiredCapabilities` value.
- Pass `userId` to `ctx.ai.run()`.
- Pass role and capabilities through `metadata`.
- Prefer human review or queue workflows for high-risk actions.

You can also set the policy manually:

```dart
app.ai.toolPolicy = const ProductionAiToolPolicy(
  allowedRoles: {'ADMIN'},
  allowedCapabilities: {'support:write'},
  requireUserBinding: true,
);
```

## Memory And Persistence

The standalone `flint_ai` package defaults to in-memory stores. Flint Dart adds
database-backed adapters and uses them for `app.ai`.

```dart
final app = Flint();

app.ai.memoryStore; // FlintAutoAiMemoryStore
app.ai.repository;  // FlintAutoAiRepository
```

The auto stores use the Flint database when it is connected. If the database is
not connected, or the AI tables have not been migrated yet, they fall back to
in-memory stores and log a warning.

For explicit production wiring:

```dart
final ai = FlintAi.production(
  memoryStore: FlintAutoAiMemoryStore(),
  repository: FlintAutoAiRepository(),
);
```

## Register AI Tables

Register the AI table definitions in `lib/config/table_registry.dart`:

```dart
import 'dart:isolate';

import 'package:flint_dart/ai.dart';
import 'package:flint_dart/schema.dart';

void main(_, SendPort? sendPort) {
  runTableRegistry([
    ...flintAiTables,
    // your app tables...
  ], _, sendPort);
}
```

Then run:

```bash
flint migrate
```

The AI table registry includes:

- `ai_runs`
- `ai_traces`
- `ai_threads`
- `ai_artifacts`
- `ai_run_events`
- `ai_thread_messages`

Connect the database before handling production traffic so AI state survives
restarts and is shared across workers.

## Full Example: Support Agent

This combines provider setup, tool registration, route execution, memory, and
events.

```dart
import 'package:flint_dart/flint_dart.dart';
import 'package:flint_dart/ai.dart';

void main() {
  final app = Flint();

  app.ai.useChatProvidersFromEnv();
  app.ai.useProductionToolPolicyFromEnv();
  app.ai.registerTool(SupportSummaryTool());
  app.ai.registerWorkflow(SupportFollowupWorkflow());

  app.post('/api/ai/support', (Context ctx) async {
    final body = await ctx.req.json();
    final threadId = body['threadId']?.toString() ??
        'support-${DateTime.now().millisecondsSinceEpoch}';

    await ctx.ai.saveThreadMessage(threadId, {
      'role': 'user',
      'content': body['issue'],
    });

    final result = await ctx.ai.run(
      agent: SupportAgent(),
      goal: AiGoal(
        task: 'Prepare support response',
        input: body.cast<String, dynamic>(),
      ),
      userId: 'support-user-1',
      threadId: threadId,
      context: ctx,
      metadata: {
        'role': 'SUPPORT',
        'capabilities': ['support:write'],
      },
    );

    await ctx.ai.saveThreadMessage(threadId, {
      'role': 'assistant',
      'content': result.output['draft'],
    });

    return ctx.res?.json({
      'status': true,
      'data': {
        'run': result.toMap(),
        'thread': await ctx.ai.loadThreadMessages(threadId),
        'events': await ctx.ai.loadRunEvents(result.run.id),
      },
    });
  });

  app.listen();
}
```

## Sample App And Eulogia Pattern

The Flint Dart sample app includes real AI runtime examples:

- `POST /ai-demo/support`
- `GET /ai-demo/reporting`
- `POST /ai-demo/content-email`

The Eulogia app uses the same pattern under:

- `POST /api/ai-agents/support`
- `POST /api/ai-agents/reporting`
- `POST /api/ai-agents/content-email`

Those endpoints are staff-protected, use `ctx.ai`, pass role/capability
metadata, and store run events through the Flint AI memory and repository
adapters.
