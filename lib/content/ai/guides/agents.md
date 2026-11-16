# Autonomous AI Agents 🧠

Flint AI agents take goals, formulate step-by-step reasoning plans, invoke tools, and synthesize structured responses.

---

## 🤖 Defining an Agent

```dart
final supportAgent = FlintAgent(
  name: 'SupportAgent',
  instructions: '''
You are a helpful customer support assistant for an e-commerce platform.
Always verify order status before proposing refunds.
Be polite, concise, and professional.
''',
  tools: [
    fetchOrderTool,
    issueRefundTool,
    sendEmailTool,
  ],
  maxSteps: 5,
);
```

---

## 🚀 Running the Agent

```dart
final result = await supportAgent.run(
  goal: 'Customer #1084 asks why their order has not arrived yet.',
  context: {
    'customerId': '1084',
    'tier': 'gold',
  },
);

print(result.summary);
print(result.toolCalls);
```
